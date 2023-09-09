  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://url.avanan.click/v2/___https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js___.YXAzOnRvb2VsZXNjaG9vbHM6YTpvOjBhOGJjMmFjZmE5Nzc1YWRmZTEyY2ZhYzZiNzBkYzM5OjY6YjMwMDo4NmE3N2Y0MDk1YTc3YzE2NGU5N2I4NGVlNTY1MzJmZTE1MTYyMzRjMjcwZGUzM2E3YjU2Y2E1ZGZlMzEzNmI5OnA6VA";
  import { getAuth,createUserwithEmailAndPassword, } from "https://url.avanan.click/v2/___https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js___.YXAzOnRvb2VsZXNjaG9vbHM6YTpvOjBhOGJjMmFjZmE5Nzc1YWRmZTEyY2ZhYzZiNzBkYzM5OjY6YjMwMDo4NmE3N2Y0MDk1YTc3YzE2NGU5N2I4NGVlNTY1MzJmZTE1MTYyMzRjMjcwZGUzM2E3YjU2Y2E1ZGZlMzEzNmI5OnA6VA";

  import { getAnalytics } from "https://url.avanan.click/v2/___https://www.gstatic.com/firebasejs/10.3.1/firebase-analytics.js___.YXAzOnRvb2VsZXNjaG9vbHM6YTpvOjBhOGJjMmFjZmE5Nzc1YWRmZTEyY2ZhYzZiNzBkYzM5OjY6YzQ4YToyMTljYTYzNDEyYjM0NDIzOTRjYjBjMGZkMjcxN2U4ZjBhNTFhY2E5YjllMzY4MjgxYzkzYjg0YzZmMDhjNTkzOnA6VA";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://url.avanan.click/v2/___https://firebase.google.com/docs/web/setup%23available-libraries___.YXAzOnRvb2VsZXNjaG9vbHM6YTpvOjBhOGJjMmFjZmE5Nzc1YWRmZTEyY2ZhYzZiNzBkYzM5OjY6OTBhNzozNjM1MGRjYTVjNDdkZTgxMzgwZDkzMDY0ZTg3ZGIwNjk4MDBmZjJjNDQxYmZmZTU2MDBiZjJhYzAzYTBkYTBlOnA6VA

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC9eBpV7idggGId97ROMdM7IeaCiO3pj2c",
    authDomain: "spiritual-guitar-48e70.firebaseapp.com",
    projectId: "spiritual-guitar-48e70",
    storageBucket: "spiritual-guitar-48e70.appspot.com",
    messagingSenderId: "678355852171",
    appId: "1:678355852171:web:eb38bb0b38c3db891e2d8e",
    measurementId: "G-VG94XYZGK7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth()

  var firstname =document.getElementById("firstname")
  var lastname =document.getElementById("lastname")
  var email =document.getElementById("Email")
  var passwords =document.getElementById("password")

  // making an function for storing data
  window.signup = function(e) {
    e.preventDefault();
    var obj = {
        firstname:firstname.value,
        lastname:lastname.value,
        email:email.value,
        passwords:passwords.value,

    }
    createUserwithEmailAndPassword(auth, obj,email,obj,passwords)
    .then(function(success){
        alert("Signup Successfully")
    })
    .catch(function(err){
        alert("error" + err)
    })
    console.log(obj)
  };

