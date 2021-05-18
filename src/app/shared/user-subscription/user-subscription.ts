import { UserSubscriptionLevel } from './user-subscription.model'

export class UserSubscription {

    private _dateJoined: Date

    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public subscriptionLevel: UserSubscriptionLevel,
        public password: string
    ) {
        this._dateJoined = new Date()
    }

    public get dateJoined(): string {
        return this._dateJoined.toLocaleDateString('en-US')
    }
}