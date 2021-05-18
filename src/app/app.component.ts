import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Subscription } from 'rxjs'
import { USER_SUBSCRIPTION_LEVELS, UserSubscriptionData, UserSubscriptionLevel } from './shared/user-subscription/user-subscription.model'
import { UserSubscription } from './shared/user-subscription/user-subscription'
import { UserSubscriptionService } from './shared/services/user-subscription.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

    @ViewChild('form')
    private signupForm: NgForm
    public subscriptionLevels: UserSubscriptionLevel[]
    public showPassword: boolean
    public userSubscriptions: UserSubscription[]
    private subscriptionsChangedSub: Subscription

    /**
     * constructor
     */
    constructor(
        private userSubscriptionService: UserSubscriptionService
    ) { }

    /**
     * OnInit Lifecycle Hook
     */
    public ngOnInit() {
        this.subscriptionLevels = USER_SUBSCRIPTION_LEVELS
        this.showPassword = false
        this.userSubscriptions = this.userSubscriptionService.subscriptions
        this.subscriptionsChangedSub = this.userSubscriptionService.subscriptionsChanged.subscribe(
            (newSubscriptions: UserSubscription[]) => {
                this.userSubscriptions = newSubscriptions
            }
        )
    }

    /**
     * Runs when the form is submitted
     */
    public onSubmit() {
        console.log('Submitting!')
        console.log('signupForm:', this.signupForm.form.value)

        const signupData: UserSubscriptionData = this.signupForm.form.value
        
        const newUserSubcription: UserSubscription = new UserSubscription(
            signupData.firstName,
            signupData.lastName,
            signupData.email,
            signupData.subscriptionLevel,
            signupData.password
        )

        this.userSubscriptionService.addSubscription(newUserSubcription)
    }

    /**
     * Fills the form with test data
     */
    public fillForm() {
        this.signupForm.form.patchValue(<Partial<UserSubscriptionData>>{
            email: 'finley.williamson@gmail.com',
            subscriptionLevel: 'Basic'
        })
    }
    
    /**
     * OnDestroy Lifecycle Hook
     */
    public ngOnDestroy(): void {
        this.subscriptionsChangedSub.unsubscribe()
    }

    public addTestSubscription(): void {
        this.userSubscriptionService.addTestSubscription()
    }
}
