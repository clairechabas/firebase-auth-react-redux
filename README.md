<a href="https://firebase.google.com/">
  <img src="https://firebase.google.com/downloads/brand-guidelines/SVG/logo-built_black.svg" width="135" height="60" />
</a>

# Auth with Firebase for React + Redux Apps : From 0 to 1

### Full Step-By-Step Guide: [Read the Medium post](https://medium.com/@clairechabas/https-medium-com-clairechabas-auth-with-firebase-for-react-redux-apps-from-0-to-1-104e7343521b)

![Firebase Auth for React + Redux Apps](https://res.cloudinary.com/clairec/image/upload/v1565618778/firebase_-auth-react-redux_nmxs6c.png)

This project is a boilerplate for initialize an authentication system using Firebase Auth on a React application using Redux.

I found developing an authentication system from scratch could take time and efforts, as well as raising security concerns. Firebase makes it really easy and blazzing fast to set up all the auth functionalities an application needs. I thought sharing the full step-by-step guide to doing so could be helpful. So the purpose of this boilerplate and of [the post that goes with it](https://medium.com/@clairechabas/https-medium-com-clairechabas-auth-with-firebase-for-react-redux-apps-from-0-to-1-104e7343521b) are to get people up and running with a React application with a fully functional authentication system using Firebase Auth and Redux.

### Features included

- Sign up (with email and password)
- Sign in
- Sign out
- Password reset
- E-mail verification after sign up
- Redirecting after sign in
- Persisting auth status
- Restricting access according to auth status
- Loader

### Project setup

1. Create a [Firebase account](https://firebase.google.com/).
2. Create a new project to get your firebaseConfig object.
3. Activate Firebase Authentication from your Firebase console.
4. Get the code from this repo, cd in the project folder and install all dependencies :

```
npm install
```

5. In the services/firebase.js file, insert your own firebaseConfig object :

```
var firebaseConfig = {
  apiKey: "[YOUR_API_KEY]",
  authDomain: "[YOUR_FIREBASE_AUTH_DOMAIN]",
  databaseURL: "[YOUR_FIREBASE_DATABASE_URL]",
  projectId: "[YOUR_FIREBASE_PROJECT_ID]",
  storageBucket: "",
  messagingSenderId: "[YOUR_FIREBASE_MESSAGING_SENDER_ID]",
  appId: "[YOUR_FIREBASE_APP_ID]"
};
```

6. Run the app in the development mode:

```
npm start
```

### Other available scripts

Compiles and minifies for production to the `build` folder.

```
npm run build
```

Run your tests

```
npm test
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), therefore using the configurations and build tool implemented in Create React App.<br>
You can `eject` to set your own configuration choices and build tool. This command will remove the single build dependency from your project.

```
npm run eject
```

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
