import React from 'react';
// store manages data, source for the data is the dispatcher
import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";
import AppEventEmitter from "./AppEventEmitter";

let _tweets = [];

class TweetEventEmitter extends AppEventEmitter {
    getAll() {
        return _tweets.map(tweet => {
            tweet.formattedDate = moment(tweet.created_at).fromNow();
            return tweet;
        });
    }
}

let TweetStore = new TweetEventEmitter();


AppDispatcher.register( action => {

    //action.actionType === RECEIVED_TWEETS
    switch(action.actionType) {
        case ActionTypes.RECEIVED_TWEETS:
            // acknowledge tweets
            _tweets = action.rawTweets;
            // emit a change event
            TweetStore.emitChange();
            break;
        case ActionTypes.RECEIVED_ONE_TWEET:
            _tweets.unshift(action.rawTweet);
            TweetStore.emitChange();
        default:
            // no
    }
});

export default TweetStore;