![Deployment CI](https://github.com/project-coswara/web-app-v2/workflows/Node.js%20CI/badge.svg)

# Coswara Web Application

The web application uses [Angular 9](https://angular.io/) framework. 
We use Google's [Firebase](https://firebase.google.com) for our hosting, database and storage needs.

The angular application contains the main web page `coswara.iisc.ac.in` along with the recording application `record.coswara.iisc.ac.in` as a sub-project.


### Architecture
 - We use Firebase [Authentication](https://firebase.google.com/products/auth) to login the user as an anonymous user which gives a unique user id to store user metadata and audio collected
 - Ask the user to accept the disclaimer and provide the metadata, which is saved to Firebase [Firestore](https://firebase.google.com/products/firestore) which is a noSQL database at key `USER_METADATA/{dateString}/DATA/{userId}`
 - Some app data will be stored to enable user to resume from where he/she has left off which is saved at `USER_APPDATA/{userId}`
 - Once user finishes and submits the metadata, he/she will be redirected to recording page to record 9 sets of audio which will be uploaded in Firebase [Cloud Storage](https://firebase.google.com/products/storage) after every recording at `<BUCKET>/AUDIO_DATA/{dateString}/{userId}/{recordStage}.wav`
 - When the user finishes all the stages, he/she will be redirected to thank you page and with help of Firebase [Cloud Functions](https://firebase.google.com/products/functions), the user's metadata will be read from Firestore and saved as  `metadata.json` in the above mentioned location

`dateString` added to data will enable to download daily updates which are published [here](https://github.com/iiscleap/Coswara-Data)

### Serve

To serve the main application locally

```
ng serve --port 4200
```
To serve the record application locally

```
ng serve --port 4201 record-web-app
```

### Deployment

Continuous Integration/Deployment is enabled with GitHub [actions](https://help.github.com/en/actions/language-and-framework-guides/using-nodejs-with-github-actions). 
Commit to master branch will trigger the build and deploy it to Firebase.

This currently deploys to the development websites
 - [Coswara Dev Web Application](https://project-coswara-dev.web.app)
 - [Record Dev Web Application](https://project-coswara-collect-dev.web.app)
