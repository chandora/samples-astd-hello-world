"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Astd = __importStar(require("alexa-skill-test-driver"));
const config = __importStar(require("./config.json"));
const testGroup = {
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
//# sourceMappingURL=test-hello-world.js.map