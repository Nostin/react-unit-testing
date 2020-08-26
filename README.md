# Super Simple Unit Testing Example

Stack:
- [Create React App](https://github.com/facebook/create-react-app)
- [Material UI](https://material-ui.com/)
- [Date Fns](https://date-fns.org/)
- [MockDate](https://www.npmjs.com/package/mockdate)

This repo is intended for demonstration purposes.  We create a simple date selecting utility asking for a user's birthday and then present the user with a message depending on the date they picked.

## Task Requirements:
Ask the user for their birthday. Provide a date input and button to enter.

Display messages as follows depending on what is entered:

- "Invalid Date" if the date entered is not a valid date
- "Birthday cannot be in the future" if a future date is entered
- "You were literally born today?" if user enters todays date
- "Happy birthday!" if it is the users birthday today
- "You are {age} years old" if a past date date is entered that does not coincide with todays date
- "You are 1 year old" if the date entered was exactly one year ago

A solution that meets the above requirements has been provided for you, including a unit test suite that ensures that it works as intended.  

An effort has been made to ensure the testing suite tests the solution itself and not the implementation details.

One challenge to think about when testing a solution to a problem like this is how to handle today's date if the test-suite is run tomorrow or in ten years from now... what constitutes "today" or "future" dates?  This is where *mocking* can help us.  In this example I have mocked "today's date" in the testing suite, but we might want to mock other things too such as API data or state management stores.

## For you

What if we were to extend the requirements? Display additional messages to the user in the following situations:

- "You are a child" if the date entered is less than 18 years from today's date
- "You are very old" if the date entered is more than 100 years from today's date

Say you have inherited this code base from me and have been asked to implement the above enhancements.  

- Try to extend the solution to cover the new requirements without breaking the existing implementation.  If you do break something, in theory an existing unit test should fail if you run them using `yarn test`
- Extend the unit testing suite in `src/components/SelectBirthday/SelectBirthday.test.js` to ensure your solution covering the new requirements also works in addition to the original requirements.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
