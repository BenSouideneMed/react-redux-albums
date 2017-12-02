# Create react redux Albums app
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).<br>
The project includes extra redux packages and improved file structure.
Projects built with Create-React-App include support for ES6 syntax,
 as well as several unofficial / not-yet-final forms of Javascript syntax such as Class Properties and JSX.
 See the list of [language features and polyfills supported by Create-React-App](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#supported-language-features-and-polyfills) for more information.

## Dependencies that was added to the app
- redux
- react-redux
- redux-thunk
- immutable
- react-router-dom
- react-router-redux
- react-bootstrap
- redux-devtools-extension

## Demo 
Online Demo [Here](https://spatchola.herokuapp.com/)
## Install
```sh
$ npm install
```

## Folder Structure

After creation, your project should look like this:

```
react-redux-albums/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.js
    index.js
    registerServiceWorker.js
	store/
		configureStore.js
	components/
		albumList.js
		photo.js
		photoDisplay.js
		photoList.js
		wishList.js
	reducers/
		index.js
		photos.js
		dataAPI.js
		albums.js
		addToWishList.js
	actions/
		addToWishList.js
		albums.js
		dataAPI.js
		photos.js
		
```
## Used API

In this project we getting data from Fake Online REST API
for more about it [JSONPlaceholder](https://jsonplaceholder.typicode.com/) 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run lint`
Lints your JavaScript.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Sending Feedback

We are always open to [your feedback] (https://github.com/BenSouideneMed/react-redux-albums/issues).
