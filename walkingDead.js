// COnfif connexion Firebase database
var config = {
    apiKey: "AIzaSyDoLv-Zy7qET9itM3tdTuszbLH4HFONvq4",
    authDomain: "walkingdead-a4d5e.firebaseapp.com",
    databaseURL: "https://walkingdead-a4d5e.firebaseio.com",
    projectId: "walkingdead-a4d5e",
    storageBucket: "walkingdead-a4d5e.appspot.com",
    messagingSenderId: "225421980590"
};
firebase.initializeApp(config)

var db = firebase.database();
var character = db.ref('Characters');

character.once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
        var childData = childSnapshot.val();
        console.log(childData);
        document.getElementById('characList').innerHTML += '<li>' + childData.name +
            '</li>';
    });
});

function writeUserData(Name) {
    db.ref('Characters/' + name).push({
        name: Name,
    });

}

function PushOnFirebase() {
    let name = document.getElementById("Name").value;
    writeUserData(name);
    window.location.reload();
}