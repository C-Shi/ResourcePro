# ResourcePro
This is a full stack pintrest-liked project that allow users to share, rate and comment different resources. This app is based on NodeJS, Express, Bootstrap, jQuery, PostgreSQL

## Feature
### Views Resources and Comments
* Users/Visitors are able to view and search existing resources and their comments
* Users/Visitors are able to visit the resource site through ResourcePro
* Resources are open to all visitors including guests

### User Registeration and Login
* Visitors are able to register a new account and start contributing
* Returning user is able to login with correct password
* Registeration for email is unique

### Resources specific feature
* User is able to add one/more comment on a resource
* User is able to delete his/her own comment
* User is able to rate a resource at most one time
* User is able to like/unlike a resource

### User specific feature
* User is able to view and modify his/her profile
* User is able to view all the resource he/she posted or liked

### UI/UX feature
* Animated landing page with count-up effect of totla number of users
* Masonry-like two-dimentional layout
* Modernized Navigation Bar with icon and tooltip
* Animated Scrolling effect and fade-in effect on resources board
* Custom Flashing message for every success and error action

## Getting Started
1. Clone this project to your local machine, make sure you have NodeJS, npm and PostgreSQL install
2. Update the .env file with your correct local information
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Run migrations: `npm run knex migrate:latest`
  - Check the migrations folder to see what gets created in the DB
6. Run the seed: `npm run knex seed:run`
  - Check the seeds file to see what gets seeded in the DB
7. Run the server: `npm run local`
8. Visit `http://localhost:8080/`

## Dependencies

    "body-parser": "^1.15.2",
    "connect-flash": "^0.1.1",
    "cookie-session": "^2.0.0-beta.3",
    "dotenv": "^2.0.0",
    "ejs": "^2.4.1",
    "express": "^4.13.4",
    "knex": "^0.11.7",
    "knex-logger": "^0.1.0",
    "moment": "^2.22.2",
    "morgan": "^1.7.0",
    "node-sass-middleware": "^0.9.8",
    "pg": "^6.0.2"