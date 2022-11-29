# Friend_Network

## Description
This app is for social network for friends that users can share their thoughts, create their friend list as well as share reactions to their friends' thoughts.

## Technologies used
Express js
Insomnia
JavaScript
Moment.js
MongoDB Compass
Mongoose
Node.js

## Installation
* You might need to install Node.js and/or MongoDB to run the application.
* Install necessary dependencies for npm.
* Start the Express server by running "npm run start"
* Make sure that you are connected to MongoDB Compass.
* Open Insomnia to test API routes and to create, read, update, and delete data. 

## User Story
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Tests - Insomnia
<Users>
GET all users, GET a single user, POST a user, PUT a user, and DELETE a user.
<Thoughts>
GET all thoughts, GET a single thought, POST a thought, PUT a thought, and DELETE a thought. 
<Friends>
POST a friend and DELETE a friend

## Mock-Up
* MongoDB Compass
 <Database>
  - Thoughts
  ![image](https://user-images.githubusercontent.com/106935371/204451643-7c84abd9-a718-4d2a-ab9b-d5363d61f63e.png)

  - Users
  ![image](https://user-images.githubusercontent.com/106935371/204451545-f14fee2b-5034-431c-abb3-fc3acf7d158b.png)

 * Insomnia
  <All Users>
  ![image](https://user-images.githubusercontent.com/106935371/204451983-131f46b3-b5e2-47cf-9f43-bbb592906007.png)

  <All Thoughts>
  ![image](https://user-images.githubusercontent.com/106935371/204452057-b55e9b99-961a-4eb8-9b66-3592a8c72b5e.png)

  <Add Friend>
  ![image](https://user-images.githubusercontent.com/106935371/204452124-e0f44a90-3f98-4f66-8c30-10f6f212abc1.png)


