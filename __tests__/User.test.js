const { describe, expect, it } = require("@jest/globals");
const User = require("../classes/User.js");

describe("user.login(password)", () => {
  it("logs a user in if the password is correct", () => {
    u1 = new User('JohnSmith', 'CowBoyBeBop22', 23);
    u1.login('CowBoyBeBop22');
    expect(u1.loggedIn).toBe(true);
  });

  it("throws an error if the password is incorrect", () => {
    u1 = new User('JohnSmith', 'CowBoyBeBop22', 23);
    expect(() => {u1.login('CowBoyBeBop23')}).toThrow('Incorrect password');
  });
});

describe("user.logout()", () => {
  it("logs a user out", () => {
    u1 = new User('JohnSmith', 'CowBoyBeBop22', 23);
    u1.loggedIn = true;
    u1.logout()
    expect(u1.loggedIn).toBe(false);
  });
  
});
