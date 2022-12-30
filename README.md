# Description

CQS implementation using NodeJS, NestJS Typescript and Sequelize ORM. 

## Local Setup

1. Clone the repository
1. Copy .env.example and save a .env file with the correct values
1. Run `npm install`
1. Run `npm run build`
1. Run `npm start`

## Notes

Its a practice focused application. Everything was done to simulate scenarios where i could use the technologies proposed.

Some objects only exists for this reason and they haven't receive a lot of love, since it would increase the complexity and time where it dosent matter for this training purpose.

Hint: When practicing, its a good technique to let everything inside the same file. Everything can be later splitted into their rightful place.


# Command Flow

- Step 1: Request received in the controller > controller calls the commandBus (new Deposit Command)
- Step 2: The Deposit handler that subscribed to the (Deposit Command) starts its execution.
- Step 3: The aggregate root executes its logic and define the Event that will be fired when its commited.
- Step 4: aggregate root is saved using a repository.
- Step 5: the aggregate root is commited and the event is fired. The controller will now return its response.
- Step 6: The event handlers observing the fired event will execute their logic.
    - This happens asynchronously and dosent return any value to the interface. <br>
    - You must have compensating events to handle errors.
- Step 7: Operation completed.


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
