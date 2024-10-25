const { describe, expect, it } = require("@jest/globals");
const ScooterApp = require("../classes/ScooterApp.js");
const User = require("../classes/User.js");
const Scooter = require("../classes/Scooter.js");

describe("ScooterApp.registerUser(username, password, age)", () => {
  it("registers a new user if old enough", () => {
    ScooterApp.registerUser('JohnSmith', 'CowBoyBeBop22', 23);
    expect(ScooterApp.registeredUsers.length()).toBe(1);
  });

  it("throws an error if too young or already registered", () => {
    u1 = new User('JohnSmith', 'CowBoyBeBop22', 23);
    expect(() => {ScooterApp.registerUser('JohnSmith', 'CowBoyBeBop22', 23);}).toThrow('Username JohnSmith already registered');
    expect(() => {ScooterApp.registerUser('JohnSmith', 'CowBoyBeBop22', 16);}).toThrow('Too young to register');
  });
});

describe("ScooterApp.loginUser(username, password)", () => {
  it("logs in a registered user", () => {
    u1 = new User('JohnSmith', 'CowBoyBeBop22', 23);
    ScooterApp.loginUser('JohnSmith', 'CowBoyBeBop22');
    expect(u1.loggedIn).toBe(true);
  });

  it("throws an error if user not found or password incorrect", () => {
    u1 = new User('JohnSmith', 'CowBoyBeBop22', 23);
    expect(() => {ScooterApp.loginUser('JohnSmote', 'CowBoyBeBop22')}).toThrow('Username or password is incorrect');
    expect(() => {ScooterApp.loginUser('JohnSmith', 'BullBoyBeBop22')}).toThrow('Username or password is incorrect');
  });
});

describe("ScooterApp.logoutUser(username)", () => {
  it("logs out a registered user", () => {
    u1 = new User('JohnSmith', 'CowBoyBeBop22', 23);
    u1.loggedIn = true;
    ScooterApp.logoutUser('JohnSmith');
    expect(u1.loggedIn).toBe(false);
  });

  it("throws an error if user not found", () => {
    u1 = new User('JohnSmith', 'CowBoyBeBop22', 23);
    u1.loggedIn = true;
    expect(() => {ScooterApp.logoutUser('HolySmokes')}).toThrow('No such user is logged in');
  });
});

describe("ScooterApp.createScooter(station)", () => {
  it("creates a new scooter and adds it to ScooterApp.stations", () => {
    ScooterApp.createScooter('Woodmere');
    expect(stations['Woodmere'].length()).toBe(1);
  });

  it("throws an error if a station does not exist", () => {
    expect(() => {ScooterApp.createScooter('Wensleydale')}).toThrow('No station Wensleydale');
  });
});

describe("ScooterApp.dockScooter(scooter, station)", () => {
  it("docks a scooter at a station", () => {
    s1 = new Scooter(null);
    ScooterApp.dockScooter(s1, 'Woodmere');
    expect(stations['Woodmere'].length()).toBe(1);
  });

  it("throws an error if a station does not exist", () => {
    s1 = new Scooter(null);
    expect(() => {ScooterApp.dockScooter(s1, 'Wensleydale')}).toThrow('No station Wensleydale');
  });

  it("throws an error if a scooter is already at a station", () => {
    s1 = new Scooter('Woodmere');
    expect(() => {ScooterApp.dockScooter(s1, 'Woodmere')}).toThrow('Scooter #1 already at Woodmere');
  });
});

describe("ScooterApp.rentScooter(scooter, user)", () => {
  it("rents a scooter out to a user", () => {
    u1 = new User('JohnSmith', 'CowBoyBeBop22', 23);
    s1 = new Scooter('Woodmere');
    ScooterApp.rentScooter(s1, u1);
    expect(s1.user).toBe(u1);
  });

  it("throws an error if a scooter is already rented", () => {
    u1 = new User('JohnSmith', 'CowBoyBeBop22', 23);
    s1 = new Scooter(null);
    expect(() => {ScooterApp.rentScooter(s1, u1)}).toThrow('Scooter #1 already rented');
  });
});
