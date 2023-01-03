# Description

CQS implementation using NodeJS, NestJS Typescript and Sequelize ORM. 

The example implements a deposit and an withdraw command and a query to list all operations made in a given account.

## Local Setup

1. Clone the repository
1. Copy .env.example and save a .env file with the correct values
1. Enter each app folder (cd backend / cd frontend) and run:
    1. `npm install`
    1. `npm run build` (only backend)
    1. `npm start`

<br>

# CQS

CQS - Command Query Separation (by Bertrand Meyer), is a programming pattern that separates the logic of a program into **commands** (change the state of the system) and **queries** (Return a result without making any changes to the system). The persistance remains the same for both write and reading, focusing the separations at a class level. 

<br>

![CQS](cqs-hgraca.png "By @hgraca")

<br>

## Main advantages

1. Helps archiving the Single Responsibility Principle (Separation of Concerns)
1. Code for mutating and reading data is separated, letting you focus on a single goal.
1. Helps to break down complex business flows with events and event handlers

## Main disadvantages 

1. It can be hard to organize, since you can have a lot of queries and commands in a big and complex application.


## CQS implemented in this repository

I will describe below the **DepositCommand** and the **ListAccountOperationsQuery** process flows

- Controller: Account Controller
- Aggregate: AccountOperation
    - deposit()
    - withdraw()
    - creditBalance(amount: number)
    - debitBalance(amount: number)
- Aggregate: Account

<br>

### Deposit Command

- Deposit Command
- Deposit Command Handler
- Deposited Event
- Deposited Event Handler
- AccountOperationRepository


**Steps:**

1. The Request is received by the controller > controller calls the commandBus (new DepositCommand)
1. The Deposit handler that subscribed to the (DepositCommand) starts its execution (new AccountOperation).
1. The aggregate root executes its logic (accountOperation.deposit()) and define the Event that will be fired when its commited (new DepositedEvent).
1. The aggregate root is saved using a repository (AccountOperationRepository.saveAccountOperation).
1. the aggregate root is commited (accountOperation.commit) and the event is fired. The controller will now return its response.
1. The event handlers observing the fired event will execute their logic (DepositedEventHandler).
    1. This happens asynchronously and doesn't return any value to the interface. Because of that, you must have compensating events to handle errors.
1. Operation is completed.

<br>

### List Account Operations Query

* ListAccountOperationsQuery
* ListAccountOperationsQueryHandler
* ListAccountOperationsResult

**Steps:**

1. The Request is received by the controller > controller calls the queryBus (new ListAccountOperationsQuery)
1. The ListAccountOperationsQueryHandler that subscribed to the (ListAccountOperationsQuery) starts its execution.
1. The data is queried form the persistance (accountOperationQuery.listAccountOperations).
1. The data is returned to the user according to the type defined (ListAccountOperationsResult.Factory).
1. Operation is completed.

<br>

## Notes

CQS (Command Query Separation) is not CQRS (Command Query Responsibility Segregation). The CQRS is derived from CQS. You can read more about it here: https://learn.microsoft.com/en-us/azure/architecture/patterns/cqrs

### Controller

Make the data validation before dispatching the command / query

### Command Handler

The command handler can be sync if you need to wait all operations to take place before dispatching the event.
Depending on your use-case, you can even call another commands.
Commands can return error messages, exceptions or any other data necessary to the usercase (if the used data can be queried later, ex: an ID)

### Event Handler

The event handler is asynchronous and you must have compensating events to handle errors.

### Aggregate Root / Entity

The entity can validate domain rules (ex: user should have enough ballance to make a withdraw)

### Other Notes

Its a practice focused application. Everything was done to simulate scenarios where i could use the technologies proposed.

Some objects only exists for this reason and they haven't receive a lot of love, since it would increase the complexity and time where it dosent matter for this training purpose.


### More about CQS

- https://docs.nestjs.com/recipes/cqrs 
- https://martinfowler.com/bliki/CommandQuerySeparation.html
- https://www.dotnetcurry.com/patterns-practices/1461/command-query-separation-cqs