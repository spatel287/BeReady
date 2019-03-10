function send() {
var config = {
    apiKey: "AIzaSyCXvapOvolimSaPdSSTvyPuBED4Xi5xSSM",
    authDomain: "beready-123.firebaseapp.com",
    databaseURL: "https://beready-123.firebaseio.com",
    projectId: "beready-123",
    storageBucket: "beready-123.appspot.com",
    messagingSenderId: "997089944318"
  };
  firebase.initializeApp(config);
  var firestore = firebase.firestore();

  const docRef = firestore.doc("subscriptions/email";)
  const textToSave = inputTextFieldValue.value;
  

  docRef.set({
      email: textToSave
  }).then(function() {
      console.log("Status saved!");
  }).catch(function (error) {
    console.log("Got an error", error);
  });

  const docRef2 = firestore.doc("incidents/records";)

  const incident1 = document.querySelector("#input1");
  const incident2 = document.querySelector("#input2");
  const incident3 = document.querySelector("#file");
  const saveButton = document.querySelector("#saveButton");


saveButton.addEventListener("click", function() {
  docRef.set({
      in: incident1
      add: incident2
      file: incident3
  }).then(function() {
      console.log("Status saved!");
  }).catch(function (error) {
    console.log("Got an error", error);
  });
})
}