import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'

type SubscriptionLevel = 'Basic' | 'Advanced' | 'Pro'
type SubscriptionData = {
    email: string,
    subscriptionLevel: SubscriptionLevel,
    password: string,
    passwordConfirmation: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    @ViewChild('form')
    private signupForm: NgForm
    public subscriptionData: SubscriptionData
    public subscriptionLevels: SubscriptionLevel[]
    public showPassword: boolean

    /**
     * Lifecycle Hook
     */
    public ngOnInit() {
        this.subscriptionLevels = ['Basic', 'Advanced', 'Pro']
        this.showPassword = false
    }

    /**
     * Runs when the form is submitted
     */
    public onSubmit() {
        console.log('Submitting!')
        console.log('signupForm:', this.signupForm.form.value)
    }

    /**
     * Fills the form with test data
     */
    public fillForm() {
        this.signupForm.setValue(<SubscriptionData>{
            email: 'finley.williamson@gmail.com',
            subscriptionLevel: 'Basic',
            password: 'bingus',
            passwordConfirmation: 'bingus2'
        })
    }
}
