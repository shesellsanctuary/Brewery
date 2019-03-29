# Brewery

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Questions 

### How will the data change throughout the app?
To create the ilusion of real-time temperature data coming to the app I used websockets from socketIO. The server sends new data changed randomly every 10 seconds.

### How will Shane correct the temperature?
I suppose Shane will see the notification and solve it by closing the trucks door for example. Then when the temperature stabalizes it will show on the app.

## What could be better for version 2
*I would like to make a better UI with one component per beer type container.
*Maybe a toast and/or a sound notification on out-of-temperature status.


