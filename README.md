# RpsGame

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.3.

This is a drawing of the initial plan an structure for this game project:
![Scannable Document on Jan 31, 2023 at 12_21_30 PM](https://user-images.githubusercontent.com/954480/215836665-c3cf5b47-eb0d-48f0-9b47-b23ed2bf8a81.png)

Notes:

- I was able to get the game to work as expected during the limited 3 hours window.
- I decided to approach it as a proof of concept implementation.
- Next steps:
 - Create game service and extract all properties and method from the app component.
 - Create a home component and define respective route this will be the first section or screen of the game, where users will choose the game type. (All routes will be getting the needed data from the game service)
 - Create a start.component with the second screen where users input their names.
 - Create a game-round.component with the 3rd screen where users make their round choice.
 - Create a round-end.component that will display the results and following up options.
 - Add some specs as we develop the different components.
 - With more time we could implement a simple node backend api to save the results, and have the ability for users to come back and have a simple login.
 - Polish the design.
 - Include e2e testing with Cypress.
 - Get feedback from users.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
