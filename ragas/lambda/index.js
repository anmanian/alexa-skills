var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {

    'LaunchRequest': function() {
        this.emit(':ask', 'Welcome to Ragas! Ask me anything about a carnatic raga and I will tell you the origin, ascending and descending sequence called aroehunum and ahvurohunum, and popular kcritheez in that raga', 'Try asking me about a raga');
    },

    'Hello': function() {
        this.emit(':tell', 'Hi there');
    }
};
