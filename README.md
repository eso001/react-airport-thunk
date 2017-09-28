React-Thunk Repo

What is a thunk?
A thunk is a function that wraps an expression to delay its evaluation.

Thunks can be used to delay the dispatch of an action or to dispatch only if a certain condition is met.

i.e:
Not a thunk:
  let x = 1 + 2;
    - This evaluates immediately (x = 3)

Thunk:
  let test = () => 1 + 2;
    - Calculation is delayed
    - Can be called later to perform calculation

Installation
===

Make sure you have a recent version of Node.js installed. You can grab the latest version from [nodejs.org](https://nodejs.org).

Run `npm install` or `yarn install` to install the project dependencies.

Launch the Development Server
===

Run `npm start` to launch the development server. Consult the documentation to [create-react-app](https://github.com/facebookincubator/create-react-app) if
you want to learn more about the development environment.
