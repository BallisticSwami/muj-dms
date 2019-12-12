// signup
const signupForm = document.querySelector('#login-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const inp_username = signupForm['username'].value;
    const inp_password = signupForm['password'].value;

    var inp_email = inp_username.concat("@muj.com")
    console.log(inp_email);
    auth.signInWithEmailAndPassword(inp_email, inp_password).then(cred => {
        window.location = "data.html"
    })

    //login code
    auth().signInWithEmailAndPassword(inp_email, inp_password).then(function(user) {
        // user signed in
     }).catch(function(error) {
         var errorCode = error.code;
         var errorMessage = error.message;
     
         if (errorCode === 'auth/wrong-password' || errorCode === 'auth/user-not-found') {
             alert('Invalid Login\nPlease enter correct Username/Password');
         } else {
             alert(errorMessage);         
         }
         console.log(error);
     });
    
})

