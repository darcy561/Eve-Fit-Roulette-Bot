const shipTypes = require("./shipTypes");

const weaponTypes = [
  "missiles",
  "drones",
  "blasters",
  "railguns",
  "pulse Lasers",
  "beam lasers",
  "autocannons",
  "artillery",
  "fireworks",
  "armor repps",
  "shield repps",
  "hull repps",
  "harsh words and witty comments",
];

const tankTypes = [
  "a shield buffer tank",
  "an active shield tank",
  "a armor buffer tank",
  "an active armor tank",
  "a hull buffer tank",
  "a active hull tank",
  "nothing but hopes & dreams",
];

module.exports = function SpinTheWheel() {
  const chosenShipType =
    shipTypes[Math.floor(Math.random() * shipTypes.length)];
  const chosenWeaponType =
    weaponTypes[Math.floor(Math.random() * weaponTypes.length)];
  const chosenTankType =
    tankTypes[Math.floor(Math.random() * tankTypes.length)];

  return `You will be flying a ${chosenShipType}, armed with nothing but ${chosenWeaponType} and protected by ${chosenTankType}.`;
};
