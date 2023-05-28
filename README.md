# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

Information about this weather-app:

This application has the following features:
1) In the upper right corner, you can enter the city, in which you want to view the weather, and click on the "Search" button.
2) After that, several windows will appear on the screen:
 - a window with information about the weather for today (temperature, city, and an example of clothes);
 - a window with more detailed information (how the temperature feels, a description of the weather conditions, the time of sunrise and sunset);
 - windows with the weather for four days.
3) Windows with four-day weather have their own features:
 - by clicking on the date, a modal window with more detailed information about the weather conditions will appear on the screen;
 - next, you can see a photo with the clothes you can wear (hovering over it with the mouse will show a description of the weather);
 - the highest and lowest temperatures for the day are shown below.


Weather app
Need to have the following opportunities:
1. Choose the city in which to show the weather
2. Choose the day on which to see the weather. Current information must be available,
and 3 days after it.
3. Need to see an icon, how should people dress:
1) if the temperature is more than 20 degrees - shorts and a T-shirt
2) if the temperature is 15-20 degrees - pants and hoodies
3) if the temperature is 5-15 degrees - a jacket
4) if the temperature is 0-5 degrees - a coat
5) if the temperature is below 0 - a warm jacket.

In the application used API -  http://api.weatherapi.com
The command is used to run an app - npm start
The command is used to run the tests - npm test
