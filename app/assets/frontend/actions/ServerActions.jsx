import AppDispatcher from "../dispatcher"
import ActionTypes from "../constants"

export default {
    receivedTweets(rawTweets) {
        // AppDispatcher...
        AppDispatcher.dispatch({
            actionType: ActionTypes.RECEIVED_TWEETS,
            rawTweets
        })
    },
    receivedOneTweet(rawTweet) {
        AppDispatcher.dispatch({
            actionType: ActionTypes.RECEIVED_ONE_TWEET,
            rawTweet
        })
    }
}