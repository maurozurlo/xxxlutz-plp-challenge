# Comments by Author
This is my Product list project for XXXLutz tech challenge.\
I tried to keep it as straight forward as possible, using Create React App with the TypeScript template and only two additional dependencies (node-sass & react-intersection-observer).\

I tried to keep the styling similar to the XXXLutz website and used a combination of css and scss variables where I saw fit.\
All components are functional components and for global state I used React's native useContext.\
I tend to find Redux and other libraries a bit too boilerplate heavy.\

Design responsiveness has been tested on a desktop pc, a mobile phone and an iPad.\
Tests were created with jest for most of the components.\
Sorting / Querying functions would usually be handled by the backend but are being simulated on the frontend per the requirements for the Tech Challenge.\

Finally, while working on this challenge I noticed an issue with CORS, my temporary solution was to provide a default 'mocked' mode\
which uses JSON data and another in which you can hit the api. I used the dev dependency cross-env to allow setting an env variable\
in the package.json script regardless of the OS.

Thank you for reading my challenge!

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) using the TypeScript template.

Package-Lock file was generated using Node v15.14 & NPM 7.7.6

The first step to run this project would be to run the `npm ci` command to install all dependencies.

#### Environment Variables

I've provided an .env.local file which contains the following environment variables:
| Name                  | Default value                    | Description                                                               |
|-----------------------|----------------------------------|---------------------------------------------------------------------------|
| REACT_APP_PRODUCT_API | https://api.jsonserve.com/Zzm-t2 | Url used to fetch product data.                                           |
| REACT_APP_MODE        | MOCK                             | Default uses mocked JSON data. NOMOCK which will fetch real data instead. |

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Due to an issue with CORS, the default start mode uses mocked data with a fake delay.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm start:no-mock`

Runs the app in the development mode.\
This mode hits the API. To use a different API url, change the REACT_APP_PRODUCT_API value in .env.local file.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.