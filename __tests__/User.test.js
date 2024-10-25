const { describe, expect, it } = require("@jest/globals");
const User = require("../classes/User.js");

describe("user.login(password)", () => {
  it.skip("logs a user in if the password is correct", () => {
    u1 = new User('JohnSmith', 'CowBoyBeBop22', 23);
    expect(u1.login('CowBoyBeBop22')).toBe('user has been logged in');
  });

  it.skip("throws an error if the password is incorrect", () => {
    u1 = new User('JohnSmith', 'CowBoyBeBop22', 23);
    expect(() => {u1.login('CowBoyBeBop23')}).toThrow('Incorrect password');
  });
});

describe("user.logout()", () => {
  it.skip("logs a user out", () => {
    u1 = new User('JohnSmith', 'CowBoyBeBop22', 23);
    expect(u1.logout()).toBe('user is logged out');
  });
  
});
