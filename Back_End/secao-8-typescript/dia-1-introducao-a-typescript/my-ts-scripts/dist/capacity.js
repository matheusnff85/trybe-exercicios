"use strict";
// ./capacity.ts
const capUnits = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];
function convertCap(value, fromUnit, toUnit) {
    const fromIndex = capUnits.indexOf(fromUnit);
    const toIndex = capUnits.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);
    return value * Math.pow(10, exponent);
}
