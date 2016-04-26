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
   $ git clone https://github.com/mjabali/authy-workshop-node.git
   $ cd authy-workshop-node
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

### Workshop Objectives

1. Register the User
Before you can secure a user's login or enforce a second factor you need to create an Authy user. Authy requires you send an email, cellphone and country code for each Authy user. In response you get an Authy ID which you must then store with your user's profile in your own application.

The API Endpoint documentation for enabling two-factor authentication for a user is located [here](http://docs.authy.com/totp.html#enabling-two-factor-authentication-for-a-user)

In this sample, we are using the [Authy API library for Node.js](https://www.npmjs.com/package/authy). Using the Authy library, here is an example API call for registering the user:

```javascript
authy.register_user('user@email.com', '555-555-5555', function (err, res) {
    // res = {user: {id: 1337}} where 1337 = ID assigned to the user 
});
```

1. Creating the Approval Request
This is the main endpoint. This will create a new approval request for the given Authy ID and send it to the end user along with a push notification to the Authy smartphone application.

The API Endpoint documentation for Creating the Approval Request is located [here](http://docs.authy.com/onetouch.html#create-approvalrequest)

Here is an example API call for creating an approval request:

```javascript
authy._request( "POST",
				"/onetouch/json/users/<USER\_AUTHY\_ID>/approval_requests?api_key=<AUTHY\_API\_KEY>",
				{message: "Transfer Money Request",
				 	details: {
					 	"Account Number":"12345",
					 	"Amount":10
				 	},
				seconds\_to\_expire: 120
			 	})
```						 

1. Checking for Approval Request Status
The final step is to provide the status of the approval request to the user (typically approved or denied).

The API Endpoint documentation for Checking for Approval Request Status is located [here](http://docs.authy.com/onetouch.html#check-approvalrequest-status)

Here is an example API call for checking for Approval Request Status:

```javascript
authy._request( "GET", 
				"/onetouch/json/approval_requests/<UUID>?api_key=<AUTHY\_API\_KEY>",
				null, 
				callback);
```

## Running the complete solution
If you want to see the complete solution, navigate to the solution folder and run the server from there.
   
   ```bash
   $ npm start
   ```

## Meta

* No warranty expressed or implied. Software is as is.
* [Apache License](https://opensource.org/licenses/Apache-2.0)