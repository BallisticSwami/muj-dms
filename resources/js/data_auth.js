// check login status
auth.onAuthStateChanged(user => {
    if(user) {
        console.log("user logged in: ",user);
    } 
    else {
        window.location = "index.html";
    }
})

//logout
const logout = document.querySelector('#user_logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(()  => {
        console.log("logout pressed");
        window.location = "http://www.google.com";
    })
})

