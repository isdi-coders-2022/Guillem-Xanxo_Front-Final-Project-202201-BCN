# Transporta't Pallars

This is a platform where people can post their private trips from everywhere to somewhere in Pallars region in Catalunya. The main aim is to aggregate all the messages in already existing chat groups in Whatsapp, Telegram and FB, so that anyone who wants to get a ride could search for it easily, sorted by date and in a single place.

It has been written in TypeScript and React Redux in order to profit from it being a web app. This way it can be easily accessible from any device and be crossplatform. Redux has been mandatory for this project as a final project in ISDI Coders bootcamp, but it prepare the app to be able to growth as the traffic does.

Production site:[https://transportatpallars-guillem-xanxo.netlify.app/](Transportat Pallars)
REST API supporting this project: [https://github.com/isdi-coders-2022/Guillem-Xanxo_Back-Final-Project-202201-BCN](Project)

## How to start as a developer/contributor

Please, fork the project in orther to add features if you would like to contribute to the project. Once you have the GitHub repository forked and downloaded proceed:

### `npm install`

This command will install all npm packages listed in dependencies JSON.

### `npm build`

This command will prepare and build the project for production.

### Testing

It is aimed to unit test all components and pages. Testing has been done with Jest and React Testing library following the Given-When-Then schema to explain each test.
To run all test run ` npm test`.
To run a coverage test use `npm run coverage`.

SonarQube has been used as a static controll tool.

### Data structure explanation

#### Trips

**General**
All interactions are designed to have its own redux path always that it represents a change in the state of trips or user.

**Create a Trip**
The page **CreateTripPage** in src/pages/ will render the component **CreateFormComponent** in path src/components/. This form, when submitted, will dispatch a request to the backend through the thunk sending the data as a Trip interface (in src/interfaces), where all data is captured as a string.
The state for a created trip is called "trips".

**Load the existing trips in the database**
Once the trips are created, they are stored in the database in a different schema than the trips sent. This is the reason why Trips fetched from the API are stored in the state getTrips and theis interface is TripReceived.

**Load a single trip**
The API also delivers single trip requests, out of the array structure. This fetches store the trip in the state called OneTrip.
