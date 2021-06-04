# Hello World Skill with Alexa Skill Test Driver (ASTD)
This is a sample test data to demonstrate the automated conversation testing
by ASTD for the Alexa skill development.

## Getting Started
To execute a test with ASTD, type the following in the home directory of the project
created from this repository.
```bash
cd lambda
npm test
```

## Setting Up Alexa Skill
You need to have Hello World skill in your account.

## Configuration
You need to fulfil the configuration file.

```json
./lambda/test/config.json
```

* skill_id - obtained from the Alexa Developer Console
* client_id - obtained from LWA (Login with Amazon)
* client_secret - obtained from LWA
* refresh_token - obtained from ASK CLI 

## Test Code
The test code is located in:

```
./src/test/test-hello-world.ts
```

Actual test code is generated in:

```
./lambda/test/test-hello-world.js
```
