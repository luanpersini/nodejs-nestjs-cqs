# Description

CQS implementation using NodeJS, NestJS Typescript, Postgres and Sequelize ORM. 

The example implements an deposit and a withdraw commands, and a query to list all operations made in a given account.

## Local Setup

1. Clone the repository
1. Install Postgres (i didnt want to use a in memory database because i wanted to run migrations )
1. Copy .env.example and save a .env file with the correct values
1. Enter each app folder (backend and frontend) and run:
    1. `npm install`
    1. `npm run build` (only backend)
    1. `npm start`
# CQS

CQS - Command Query Separation as the name says, separates the logic of a program into **commands** (change the state of the system) and **queries** (Return a result without making any changes to the system). The persistance remains the same for both write and reading, focusing the separations at a class level.


![CQS](cqs-hgraca.png "By @hgraca")


## CQS implemented in this repository

I will describe below the **DepositCommand** and the **ListAccountOperationsQuery** process flows

- Controller: Account Controller
- Aggregate: AccountOperation
    - deposit()
    - withdraw()
    - creditBalance(amount: number)
    - debitBalance(amount: number)
- Aggregate: Account

### Deposit Command

* Deposit Command
* Deposit Command Handler
* Deposited Event
* Deposited Event Handler
* AccountOperationRepository


**Steps:**


- Step 1: The Request is received by the controller > controller calls the commandBus (new DepositCommand)
- Step 2: The Deposit handler that subscribed to the (Deposit Command) starts its execution (new AccountOperation).
- Step 3: The aggregate root executes its logic (accountOperation.deposit()) and define the Event that will be fired when its commited (new DepositedEvent).
- Step 4: The aggregate root is saved using a repository (AccountOperationRepository.saveAccountOperation).
- Step 5: the aggregate root is commited (accountOperation.commit) and the event is fired. The controller will now return its response.
- Step 6: The event handlers observing the fired event will execute their logic (DepositedEventHandler).
    - This happens asynchronously and doesn't return any value to the interface. Because of that, you must have compensating events to handle errors.
- Step 7: Operation is completed.


## Controller

Make the data validation before dispatching the command

## Command Handler

The command handler can be sync if you need to wait all operations to take place before dispatching the event.
Depending on your use-case, you can even call another commands.
Commands can return error messages, exceptions, IDs or any other data necessary to the usercase (if the used data can be queried later)

## Event Handler

The event handler is asynchronous and you must have compensating events to handle errors.

## Aggregate Root / Entity

The entity can validate domain rules (ex: user should have enough ballance to make a withdraw)

## Other Notes

Its a practice focused application. Everything was done to simulate scenarios where i could use the technologies proposed.

Some objects only exists for this reason and they haven't receive a lot of love, since it would increase the complexity and time where it dosent matter for this training purpose.

Hint: When practicing, its a good technique to let everything inside the same file. Everything can be later splitted into their rightful place.