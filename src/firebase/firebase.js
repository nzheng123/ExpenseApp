import * as firebase from 'firebase';


// const config = {
//     apiKey: "AIzaSyDF-PNSWLFW79PxWgxkHoykbW0E1Lx2SMQ",
//     authDomain: "expenses-47a3d.firebaseapp.com",
//     databaseURL: "https://expenses-47a3d.firebaseio.com",
//     projectId: "expenses-47a3d",
//     storageBucket: "expenses-47a3d.appspot.com",
//     messagingSenderId: "211277603804",
//     appId: "1:211277603804:web:ad9338646540566b426519",
//     measurementId: "G-F7EY8MSNME"
//   };

const config = {
      apiKey: process.env.REACT_APP_API_KEY,
      authDomain: process.env.REACT_APP_AUTH_DOMAIN,
      databaseURL: process.env.REACT_APP_DATABASE_URL,
      projectId: process.env.REACT_APP_PROJECT_ID,
      storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
      // appId: "1:211277603804:web:ad9338646540566b426519",
      // measurementId: "G-F7EY8MSNME"
    };

//console.log(`apiKey: ${config.apiKey},databaseURL:${config.databaseURL}`);
       


     
firebase.initializeApp(config);

const database=firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export { firebase, googleAuthProvider, database as default };
 


// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(`child_removed ${snapshot.key} with ${snapshot.val()}`);
//   });
  
//   // child_changed
//   database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(`child_changed ${snapshot.key} with ${snapshot.val()}`);
//   });
  
//   // child_added
//   database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(`child_added ${snapshot.key} with ${snapshot.val()}`);
//   });


//   database.ref('expenses').push({
//     description: 'Bill2',
//     note: '',
//     amount: 109500,
//     createdAt: 976123498763
//   });



// database.ref().set({
//   name: 'Ning Zheng',
//   location:{
//     city:'homdel'
//   }
// }).then(() => {
//     console.log('Data is saved!');})
// .catch((e) => {
//     console.log('This failed.', e);});

 

// const subTask=(snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job} at ${val.location.city}`);
//     } ;

// database.ref().once('value').then((data)=>{
//     const valu=data.val()
//     console.log("get value:",valu)
// }).catch((e)=>{
//     console.log("get error:",e)
// });

// database.ref().on('value',  subTask,(e)=>{console.log("error with ",e) });
// database.ref("/location/city").set("NYC")
// database.ref().update(
//     {
//         'location/country':'usa',
//         'job': 'software developer'
//     }
// );
// database.ref("hight").set(72)
// database.ref().off('value',subTask);
// database.ref("weight").set(140)

 
  
//    database.ref()
//      .remove()
//      .then(() => {
//        console.log('Data was removed');
//      }).catch((e) => {
//        console.log('Did not remove data', e);
//      });
  