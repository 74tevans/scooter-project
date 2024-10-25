const Scooter = require("./Scooter.js");
const User = require("./User.js");

class ScooterApp {
  static stations = {Woodmere: [], Arcadia: [], MidTownBelvedere: [], Bayview: [], Uplands: []};
  static registeredUsers = {};

  static registerUser(username, password, age){
    if (age < 18){
      throw new Error('Too young to register');
    }
    for (const user in ScooterApp.registeredUsers){
      if (username === user){
        throw new Error(`Username ${username} already registered`);
      }
    }
    ScooterApp.registeredUsers[username] = new User(username, password, age);
    console.log(`${username} has been registered`);
    return ScooterApp.registeredUsers[username];
  }

  static loginUser(username, password){
    for (const user in ScooterApp.registeredUsers){
      const userObj = ScooterApp.registeredUsers[user];
      if (username === user){
        if (userObj.password === password){
          userObj.login(password);
          console.log(`${username} has been logged in`);
          return;
        }
        else {
          throw new Error('Username or password is incorrect');
        }
      }
    }
    throw new Error('Username or password is incorrect');
  }

  static logoutUser(username){
    for (const user in ScooterApp.registeredUsers){   
      if (username === user){
        const userObj = ScooterApp.registeredUsers[user];
        userObj.logout(password);
        console.log(`${username} has been logged out`);
        return;
      }
    }
    throw new Error('No such user is logged in');
  }

  static createScooter(station){
    for (const _station in ScooterApp.stations){
      if (_station === station){
        ScooterApp.stations[station] = new Scooter(station);
        console.log('Created new scooter');
        return;
      }
    }
    throw new Error(`No station ${station}`);
  }

  static dockScooter(scooter, station){
    for (const _station in ScooterApp.stations){
      const scooters = ScooterApp.stations[_station];
      for (const _scooter of scooters){
        if (scooter === _scooter){
          throw new Error(`Scooter #${scooter.getSerial()} already at ${station}`);
        }
      }
      if (station === _station){
        _station.push(scooter);
        scooter.dock(station);
        return;
      }
    }
    throw new Error(`No station ${station}`);
  }

  static rentScooter(scooter, user){
    if (scooter.user !== null){
      throw new Error(`Scooter #${scooter.getSerial()} is already rented`);
    }
    for (const _station in ScooterApp.stations){
      const scooters = ScooterApp.stations[_station];
      for (const _scooter of scooters){
        if (scooter === _scooter){
          scooter.rent(user);
        }
      }
    }
  }

  static print(){
    console.log(ScooterApp.registeredUsers);
    console.log(ScooterApp.stations);
  }
}

module.exports = ScooterApp;
