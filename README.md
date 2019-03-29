# Brewery

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

## Run App

Run `npm start` for a concurrent run of the server and the app on the same terminal or separately with `npm run start-server` and `npm run start-client` on different terminals.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Questions 

### How will the data change throughout the app?
To create the ilusion of real-time temperature data coming to the app I used websockets from socketIO. The server sends new data changed randomly every 10 seconds.

### How will Shane correct the temperature?
I suppose Shane will see the notification and solve it by closing the trucks door for example. Then when the temperature stabalizes it will show on the app.

## What could be better for version 2
* I would like to make a better UI with one component per beer type container.
* Maybe a toast and/or a sound notification on out-of-temperature status.


