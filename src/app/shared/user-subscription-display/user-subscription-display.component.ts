import { UserSubscription } from "./../user-subscription/user-subscription"
import { Component, Input, OnInit } from '@angular/core'
import { UserSubscriptionLevel } from '../user-subscription/user-subscription.model'

@Component({
    selector: 'user-subscription-display',
    templateUrl: './user-subscription-display.component.html',
    styleUrls: ['./user-subscription-display.component.css']
})
export class UserSubscriptionDisplayComponent implements OnInit {

    @Input('user')
    private user: UserSubscription

    @Input('index')
    public index: number

    public firstName: string
    public lastName: string
    public email: string
    public subscriptionLevel: UserSubscriptionLevel
    public password: string
    public dateJoined: string

    constructor() { }

    ngOnInit(): void {
        this.firstName = this.user.firstName
        this.lastName = this.user.lastName
        this.email = this.user.email
        this.subscriptionLevel = this.user.subscriptionLevel
        this.password = this.user.password
        this.dateJoined = this.user.dateJoined
    }

}
