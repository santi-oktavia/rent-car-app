This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In this App you can:
- create new car by input Registration Number of the car and the car's color
    Registration number is unique. You can not enter the same registration number. 
    And also form input for registration number and color are mandatory
    After the new car is create, the list will be updated automaticly with free status,
    and generate date by default date is today.
- List Car
    On the car list will be displayed Registration number, color, status, customer, and a button reserve
    For reserved car, the status will be "reserved" and for un-reserved car the status will be "free"
    For un-reserved car, customer can reserve car by click button "reserve"
- Reserve a car by input your name and choose the date
    After user click "reserve" button, a modal will be displayed.
    On the modal, user have to enter customer name and reservation date. 
    This form is mandatory before user reserve car.
    After the car is reserved, the status car on the list will be modified become "reserved" 
    and car's date is modified based on reservation date. Also button "reserve" will be hidden
    
- Search car by Registration Number, Color, and Status
    User can search car from the car list by 3 catogory, they are:
    - car by registration number
    - car by color
    - car by date

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
