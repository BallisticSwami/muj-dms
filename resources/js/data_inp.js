//get regno
auth.onAuthStateChanged(function(user) {
    if (user) {
        console.log(user);
        var email = firebase.auth().currentUser.email;
        var regno = email.substring(0, email.length - 8);
        console.log(regno);
    }
});