// fetch('user-info.json')
//     .then((response) => response.json())
// //     .then((json) => console.log(json));
// import usersinfo from './users-info.json' assert {type: "json"}
// console.log(usersinfo);
// for (let i = 0; i < usersinfo.length; i++)
// console.log(usersinfo[i].username)
// console.log(usersinfo[i].password)
// if (username === usersinfo[i].username && password === usersinfo[i].password) {
//      window.location.replace("http://127.0.0.1:5500/Demo%20web%20project/login.html");
// } else if (username === "" && password === "") {
//      alert("Please enter information");
// } else {
//      alert("Please enter valid information");
// }


// document.getElementById("form").addEventListener("submit", auth);

// // function auth(event) {
// //      event.preventDefault();
// //      const username = document.getElementById("username").value;
// //      const password = document.getElementById("password").value;
// function auth() {
//      fetch('user-info.json')
//           .then(res => res.json())
//           .then(json => {
//                var users = json.userinfo
//                for (let i = 0; i < users.length; i++) {
//                     console.log(users[i].username);
//                     console.log(users[i].password);
//                     if (username === "thanghc" && password === "abcxyz") {
//                          window.location.replace("http://127.0.0.1:5500/Demo%20web%20project/mainpage.html");
//                     } else if (username === "" && password === "") {
//                          alert("Please enter information");
//                     } else {
//                          alert("Please enter valid information");
//                          return;
//                     }}
//                })
//           }

// function showInfo() {
//      var input_username = document.getElementById("username").value;
//      var input_password = document.getElementById("password").value;

//      if (input_username === "" || input_password === "") {
//        alert('Please enter your username and password!')
//      } else {
//        var hasValidAccount = false;
//        fetch('users-info.json')
//        .then(res => res.json())
//        .then(json => {
//          var users = json.userinfo
//          for (let i = 0; i < users.length; i++) {
//            if (input_username === users[i].username && input_password === users[i].password) {
//              hasValidAccount = true;
//              alert('Correct!')
//            }
//          }
//          if (!hasValidAccount) {
//            alert('Incorrect username or password')
//          }
//        })
//      }
//    }

function showInfo() {
     // console.log("data");
     var input_username = document.getElementById("username").value;
     var input_password = document.getElementById("password").value;

     if (input_username === "" || input_password === "") {
          alert('Please enter your username and password!')
     } else {
          var hasValidAccount = false;
          fetch('users-info.json')
               .then(res => res.json())
               .then(json => {
                    var users = json.userinfo
                    for (let i = 0; i < users.length; i++) {
                         if (input_username === users[i].username && input_password === users[i].password) {
                              hasValidAccount = true;
                              window.location.replace("http://127.0.0.1:5500/Demo%20web%20project/mainpage.html");
                         }
                    }
                    if (!hasValidAccount) {
                         alert('Incorrect username or password')
                    }
               })
     }
}