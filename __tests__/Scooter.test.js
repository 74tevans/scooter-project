const { describe, expect, it } = require("@jest/globals");
const Scooter = require("../classes/Scooter.js");
const User = require("../classes/User.js");

describe("scooter.rent(user)", () => {
  it.skip("checks a scooter out to a user", () => {
    u1 = new User('JohnSmith', 'CowBoyBeBop22', 23);
    s1 = new Scooter('Woodmere');
    expect(s1.rent(u1)).toBe('scooter is rented');
  });

  it.skip("throws an error if battery dead or scooter broken", () => {
    u1 = new User('JohnSmith', 'CowBoyBeBop22', 23);
    s1 = new Scooter('Woodmere');
    s1.charge = 20;
    expect(() => {s1.rent(u1)}).toThrow('scooter needs to charge');
    s1.charge = 100;
    s1.isBroken = true;
    expect(() => {s1.rent(u1)}).toThrow('scooter needs repair');
  });
});

describe("scooter.dock(station)", () => {
  it.skip("returns a scooter to a station", () => {
    s1 = new Scooter(null);
    s1.dock('Woodmere');
    expect(s1.station).toBe('Woodmere');
  });
});

describe("scooter.recharge()", () => {
  it.skip("charges a scooter", async () => {
    const s1 = new Scooter('Woodmere');
    s1.charge = 10;
    await s1.recharge();
    expect(s1.charge).toBe(100);
  });
});

describe("scooter.requestRepair()", () => {
  it.skip("repairs a scooter", async () => {
    const s1 = new Scooter('Woodmere');
    s1.isBroken = true;
    await s1.requestRepair();
    expect(s1.isBroken).toBe(false);
  });
});
