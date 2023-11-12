# PHASE TWO CODE-CHALLENGE WEEK ONE
The program is meant to allow a person to add a transactionto the list.

## Introduction
For this project, you’ll be building out a React application that displays a list of your recent bank transactions, among other features.

The instructions below will walk you through the process of ideation and planning your app: deciding on your user interface, planning how the information will be laid out on the page, etc. You should work through all the planning steps before you start doing any coding.

## Requirements
For this project, you must:

Have a well-written README file.
Fetch data from a local server running JSON DB server.

## Project Setup & Pre-requisite Data
In your project directory, create a db.json file and use this dataLinks to an external site. for your server DB.
Run this command to get the backend started: json-server --watch db.json
Test your server by visiting this route in the browser: http://localhost:8001/transactions

## Project Setup
Once you have the plan in place for the application you want to build take the following steps:

Create a new project folder.
Create a new GitHub repository (NB: ENSURE IT IS PRIVATE).
Add your TM as a contributor to the project. (This is only for grading purposes. We promise we won't steal your code)
Please make sure you regularly commit to the repository.
Project Guidelines
Your project should conform to the following set of guidelines:

## Core Deliverables
As a user, I can:

See a table of all transactions.
 Fill out and submit the form to add a new transaction. This should add the new transaction to the table * the new transaction does not have to be persisted to the backend *
Filter transactions by typing into the search bar. Only transactions with a description matching the search term should be shown in the transactions table.
## technologies used
1. node
2. git
3. JSON Server

## Project features
Transaction history. You are able to see a log of recent transactions
Adding transactions You are able to add your own transactions which will be reflected on the log
Transaction search. You are able to search for a certain transaction using the description of the transaction

## Instructions 
### Props & State
1. Advanced deliverables are met.
2. State works and is held by the lowest common component. No unnecessary state is created. Only the necessary props are being passed down. Functions used to edit state are passed down.
3. State is working. However, it may be in the wrong component, it might be nested oddly or might have some unnecessary state. Props are being passed unnecessarily to components. Functions that change or calculate state are not defined in the component that they are most closely tied to.
4. State is not being set or updated. Props are not being passed down, or you are passing down the right prop but trying to access it incorrectly (wrong name, unnecessary this, state instead of props) or key props are missing. API call does not successfully populate state or does not rely on state at all (e.g. uses querySelector() to grab the value instead of passing the state).
5. No code or very little code has been written or the code doesn't run. If it runs, no deliverables have been met. Not managed to set state or pass props successfully.

### Code Structure/Efficiency
1. Advanced deliverables met. Uses some of the following: destructuring, functional components, spreading, hooks, pure functions, performance is taken into account.
2. Components are structured in a logical way. Class components only used when needed, functional components used for everything else. Code is abstracted into clear methods. Used object destructuring and spread operator successfully.
3. Fetch is triggered in the right place. Code is not abstracted into clear methods. Additional components have been added which serve no purpose. Props and variables could be named consistently and descriptively.
4. Starter components have been unnecessarily modified and broken. There is no reference to componentDidMount. Incorrect or unnecessary lifecycle methods are used. Vanilla JavaScript methods (e.g. querySelector()) are being used instead of appropriate React techniques.
5. No code or very little code has been written or the code doesn't run, i.e. syntax errors, imports missing, etc. If it runs, no deliverables have been met.

## License&Author
Marie