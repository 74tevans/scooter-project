const { describe, expect, it } = require("@jest/globals");
const Scooter = require("../classes/Scooter.js");
const User = require("../classes/User.js");

describe("scooter.rent(user)", () => {
  u1 = new User('JohnSmith', 'CowBoyBeBop22', 23);
  s1 = new Scooter('Woodmere');
  it("checks a scooter out to a user", () => {
    s1.rent(u1);
    expect(s1.user).toBe(u1);
  });

  it("throws an error if battery dead or scooter broken", () => {
    s1.charge = 20;
    expect(() => {s1.rent(u1)}).toThrow('Scooter #1 needs to charge');
    s1.charge = 100;
    s1.isBroken = true;
    expect(() => {s1.rent(u1)}).toThrow('Scooter #1 needs repair');
  });
});

describe("scooter.dock(station)", () => {
  it("returns a scooter to a station", () => {
    s1 = new Scooter(null);
    s1.dock('Woodmere');
    expect(s1.station).toBe('Woodmere');
  });
});

describe("scooter.recharge()", () => {
  it("charges a scooter", async () => {
    const s1 = new Scooter('Woodmere');
    s1.charge = 10;
    await s1.recharge();
    expect(s1.charge).toBe(100);
  });
});

describe("scooter.requestRepair()", () => {
  it("repairs a scooter", async () => {
    const s1 = new Scooter('Woodmere');
    s1.isBroken = true;
    await s1.requestRepair();
    expect(s1.isBroken).toBe(false);
  });
});
