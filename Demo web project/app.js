// function loginSuccesfull() {
//     alert("Login Succesfull");
// }

// fetch('user-info.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// if (username === "userinput" && password === "pwdinput") {
//      window.location.replace("http://127.0.0.1:5500/Demo%20web%20project/login.html");
// } else if (username === "" && password === "") {
//      alert("Please enter information");
// } else {
//      alert("Please enter valid information");
//      return;
// }
// }

document.getElementById("form").addEventListener("submit", auth);

// function auth(event) {
//      event.preventDefault();
//      const username = document.getElementById("username").value;
//      const password = document.getElementById("password").value;
function auth() {
     fetch('user-info.json')
          .then(res => res.json())
          .then(json => {
               var users = json.userinfo
               for (let i = 0; i < users.length; i++) {
                    console.log(users[i].username);
                    console.log(users[i].password);
                    if (username === "thanghc" && password === "abcxyz") {
                         window.location.replace("http://127.0.0.1:5500/Demo%20web%20project/mainpage.html");
                    } else if (username === "" && password === "") {
                         alert("Please enter information");
                    } else {
                         alert("Please enter valid information");
                         return;
                    }}
               })
          }