let regBtn = document.getElementByClass("register-btn");

regBtn.addEventListener("click", () => {
  let username = document.getElementById("reg-username").value.trim();
  let password = document.getElementById("reg-password").value.trim();
  
  console.log(username)
  console.log(password)

  if (username && password) {
    let userData = {
      username: username,
      password: password,
    };


    localStorage.setItem("user_" + username, JSON.stringify(userData));
    alert("Registered Successfully! Now Login.");
  } else {
    alert("Please fill all fields.");
  }
});
let loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", () => {
  let username = document.getElementById("login-username").value.trim();
  let password = document.getElementById("login-password").value.trim();

  let stored = localStorage.getItem("user_" + username);

  if (stored) {
    let userObj = JSON.parse(stored);
    if (userObj.password === password) {
      alert("✅ Successfully Logged In");
    } else {
      alert("❌ Incorrect Password");
    }
  } else {
    alert("⚠️ User not found. Please register.");
  }
});
