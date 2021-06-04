# Hello World Skill with Alexa Skill Test Driver (ASTD)
This is a sample skill and test code to demonstrate the automated conversation testing
by ASTD for the Alexa skill development.

## Getting Started
To execute a test with ASTD, type the following in the home directory of the project
created from this repository.
```bash
cd lambda
npm test
```

## Setting Up Alexa Skill
The test in this repository assumes you have a running Hello World skill in your account.
You can set up the Hello World skill with one of the following ways:

* create a new Hello World skill from scratch in the Alexa Developer Console
* create a new Hello World skill by importing this repository in the Alexa Developer Console
* use an existing Hello World skill if you have

## Configuration
You need to fulfil the configuration file.

```
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
