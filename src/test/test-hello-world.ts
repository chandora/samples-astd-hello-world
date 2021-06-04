import * as Astd from 'alexa-skill-test-driver';
import * as config from './config.json';

const testGroup: Astd.TestGroup = {
    title: 'Test Hello World',
    locale: 'en-US',
    testCases: [
        {
            title: 'Open Skill and Say Hello',
            turns: [
                {
                    input: {
                        speak: 'Open hello world',
                        mode: 'FORCE_NEW_SESSION'
                    },
                    output: {
                        outputSpeech: {
                            type: 'SSML',
                            ssml: 'Welcome, you can say Hello or Help. Which would you like to try?'
                        },
                        reprompt: {
                            type: 'SSML',
                            ssml: 'Welcome, you can say Hello or Help. Which would you like to try?'
                        },
                        shouldEndSession: false
                    }
                },
                {
                    input: {
                        speak: 'hello'
                    },
                    output: {
                        outputSpeech: {
                            type: 'SSML',
                            ssml: 'Hello World!'
                        }
                    }
                }
            ]
        },
        {
            title: 'Open Skill and Say Help',
            turns: [
                {
                    input: {
                        speak: 'Open hello world',
                        mode: 'FORCE_NEW_SESSION'
                    },
                    output: {
                        outputSpeech: {
                            type: 'SSML',
                            ssml: 'Welcome, you can say Hello or Help. Which would you like to try?'
                        },
                        reprompt: {
                            type: 'SSML',
                            ssml: 'Welcome, you can say Hello or Help. Which would you like to try?'
                        },
                        shouldEndSession: false
                    }
                },
                {
                    input: {
                        speak: 'help'
                    },
                    output: {
                        outputSpeech: {
                            type: 'SSML',
                            ssml: 'You can say hello to me! How can I help?'
                        },
                        reprompt: {
                            type: 'SSML',
                            ssml: 'You can say hello to me! How can I help?'
                        },
                        shouldEndSession: false
                    }
                }
            ]
        }
    ]
};

(async () => await Astd.executeTestGroup(testGroup, config))();