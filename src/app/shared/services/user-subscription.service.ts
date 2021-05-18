import { TEST_SUBSCRIPTIONS } from "./../user-subscription/user-subscription.model"
import { UserSubscription } from "../user-subscription/user-subscription"
import { Injectable, OnInit } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class UserSubscriptionService implements OnInit {

    private _subscriptions: UserSubscription[]

    public subscriptionsChanged: Subject<UserSubscription[]>

    constructor() {
        this._subscriptions = [
            new UserSubscription(
                'Bingus',
                'Jefferson',
                'Bingus.Jefferson@LemonPeople.com',
                'Advanced',
                'asdf1234$'
            )
        ]
        this.subscriptionsChanged = new Subject<UserSubscription[]>()
    }

    public ngOnInit(): void {
        
    }

    /**
     * Adds a new subscription to the array
     * @param subscription 
     */
    public addSubscription(subscription: UserSubscription): void {
        this._subscriptions.push(subscription)
        this.subscriptionsChanged.next(this._subscriptions.slice())
    }

    /**
     * Adds one of the test subscriptions
     */
    public addTestSubscription: () => void = ((): () => void => {
        let index: number = 0
        return (): void => {
            if (index === TEST_SUBSCRIPTIONS.length) {
                index = 0
            }
            const testSubscription: UserSubscription = TEST_SUBSCRIPTIONS[index]
            index++
            this.addSubscription(testSubscription)
        }
    })()

    /**
     * Gets the subscriptions
     */
    public get subscriptions(): UserSubscription[] {
        return this._subscriptions.slice()
    }
}
