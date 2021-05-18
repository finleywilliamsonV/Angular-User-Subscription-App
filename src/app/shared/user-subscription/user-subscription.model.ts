import { UserSubscription } from "./user-subscription"
export type UserSubscriptionLevel = 'Basic' | 'Advanced' | 'Pro'
export type UserSubscriptionData = {
    firstName: string,
    lastName: string,
    email: string,
    subscriptionLevel: UserSubscriptionLevel,
    password: string,
    passwordConfirmation: string
}

export const USER_SUBSCRIPTION_LEVELS: UserSubscriptionLevel[] = ['Basic', 'Advanced', 'Pro']

export const TEST_SUBSCRIPTIONS: UserSubscription[] = [
    new UserSubscription(
        'Bunsun',
        'Sweeny',
        'WarmDog@LemonPeople.com',
        'Basic',
        'asdf1234$'
    ),
    new UserSubscription(
        'Cheryl',
        'Coleman',
        'CherylCola@armyspy.com',
        'Advanced',
        'asdf1234$'
    ),
    new UserSubscription(
        'Sleve',
        'McDichael',
        'ClipsOfTaste@jourrapide.com',
        'Pro',
        'asdf1234$'
    ),
    new UserSubscription(
        'Christine',
        'Meadors',
        'ChristinoRonaldo@rhyta.com',
        'Pro',
        'asdf1234$'
    )
]