# Syndicator: Pulsd Code Challenge Project

---

**[Click here for a DEMO](http://briankim.us/pulsd/)**

## Development Environment Package

macOSX Version 10.13.2

*   React - Created a Single Page Application using react
*   Webpack - Bundler for JS/CSS
*   Babel - ES6 Transpiler
*   Eslint - Code Linter used with Prettier for Sublime Text
*   MaterialUI - For Front-end components (imitates Google components)
*   MySQL - Database
*   Other various libraries for networking, time manipulation, oauth

---

## Package Structure

*   index.html - self-explanatory
*   /js - stores React components and CSS
*   /syndicator - package that syndicates with the five different websites
*   /database - package that acts as API to mysql database
*   /public - where production code will go

### js folder

*   ClientApp.jsx - Entry point for application
*   App.jsx - Container for all the components
*   AdminPanel.jsx - Input Form for an event
*   WebsitePanel.jsx - Links to all the bugs
*   DatabasePanel.jsx - Shows the Database
*   ClientRequest.js - Makes call to our API
*   App.css - CSS for our application

### syndicator folder

*   index.js - main module, checks the database coordinates the other scripts
*   /api - stores scripts for making calls to each website/app API
*   /dst - destination folder, calling `yarn build` will compile the files here

### database folder

*   index.js - main module, sets up the api
*   /public - stores the images inputted by the user with a timestamp hash

---

## Compiling the Code

The compilation process is relatively simple but requires some configuration.

Go to root directory and run `yarn install`.
Go to /database and run `yarn install`.
Go to /syndicator and run `yarn install`.

Running `yarn dev` from the server will open up a development server, but several IP addresses and configurations need to be changed.

Go to syndicator and add a file called `.config.json` that will stores all the OAuth/API keys for the five different websites (eventbrite, facebook, pinterest, tumblr, twitter).

Sample file:

```
{
	"eventbrite": { "accessToken": <TOKEN> },
	"facebook": {
		"accessToken": <TOKEN>

	},
	"pinterest": {
		"accessToken": <TOKEN>
	},
	"tumblr": {
		"consumerKey": <TOKEN>,
		"consumerSecret": <TOKEN>,
		"accessToken": <TOKEN>,
		"tokenSecret": <TOKEN>
	},
	"twitter": {
		"consumerKey": <TOKEN>,
		"consumerSecret": <TOKEN>,
		"accessToken": <TOKEN>,
		"tokenSecret": <TOKEN>
	}
}
```

There are two places where an API call is being made to our server (/database)): `ClientRequest.js` and `DatabasePanel.jsx`.

There are two places where a MySQL connection is being made: `/database/index.js` and `/syndicator/index.js`.

---

## User flow

The event has the following structure:

1.  Venue
2.  URL
3.  Description
4.  Location
5.  Details
6.  Picture
7.  Start Time
8.  End Time

All of these must be present to make a request (although theoretically for some platforms all are not necessary).

Once the user presses enter, a request will be made to the database and will be stored.
You can press the `Refresh Database` button to see the new entry.

A `posted` flag is attached onto the event to indicate whether it has been posted or not (0 for false, 1 for true). I have set a cronjob on my server to run every five minutes, so you should see a post within five minutes.

## The Posts

1.  Eventbrite - Posting the startTime, endTime, venue and description
2.  Facebook - Posting just the URL
3.  Tumblr - Posting the venue as a title, followed by the details
4.  Pinterest - Posting the picture and description
5.  Tweet - Posting the venue followed by the URL

## Improvements and bugs

*   Add pagination and editing features for the database
*   Create a separate database table that stores the URLs of the posts
*   Show image preview for file input
*   Refactor code (Remove logging statements, use more loops)
*   Time zones are assumed to be in EST
*   You need to be logged in to see EventBrite pages (Redirects to my events)
*   Better logging and error messages
