const ScooterApp = require("../classes/ScooterApp.js");

class User {
  constructor(username, password, age){
    this.username = username;
    this.password = password;
    this.age = age;
    this.loggedIn = false;
  }
  login(password){
    if (password === this.password){
      this.loggedIn = true;
    }
    else {
      throw new Error('Incorrect password');
    }
  }
  logout(){
    if (this.loggedIn){
      this.loggedIn = false;
    }
    else {
      throw new Error(`${this.username} is already logged out`);
    }
  }
}

module.exports = User;
