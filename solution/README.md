<a href="http://twilio.com/signal">![](https://s3.amazonaws.com/baugues/signal-logo.png)</a>

Join us in San Francisco May 24-25th to [learn directly from the developers who build Authy](https://www.twilio.com/signal/schedule/2crLXWsVZaA2WIkaCUyYOc/aut).

# Two-Factor Authentication with Authy OneTouch REST APIs and Node.js

Here you will learn how to use the Authy OneTouch REST APIs to perform the user registration, send approval request, poll the status of the request, display transaction information, etc.

[Learn more about this code in our interactive code walkthrough](https://www.twilio.com/docs/howto/walkthrough/two-factor-authentication/node/express).

## Quickstart

### Create an Authy app

Create a free [Authy account](https://www.authy.com/developers/) if you don't
have one already, and then connect it to your Twilio account.

### Setup the environment

This example assumes you already have [Node.js](https://nodejs.org) already installed on your machine.

This project is built using the [Express](http://expressjs.com/) web framework.

1. First clone this repository and `cd` into it.

   ```bash
   $ git clone git@github.com:mjabali/XXX.git
   $ cd XXX
   ```

1. Install the dependencies.

   ```bash
   $ npm install
   ```

1. Export the environment variable (AUTHY\_API\_KEY).

   You can find your AUTHY API KEY for Production at https://dashboard.authy.com/.

   ```bash
   $ export AUTHY_API_KEY=Your Authy API Key
   ```
   If you are using a non-UNIX operating system, make sure that the AUTHY_API_KEY is loaded into your environment.

1. Run the server.

   ```bash
   $ npm start
   ```

1. Open up your web browser and navigate to [http://localhost:3000](http://localhost:3000)

That's it!

## Meta

* No warranty expressed or implied. Software is as is.
* [Apache License](https://opensource.org/licenses/Apache-2.0)