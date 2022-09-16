"use strict";
// ./volume.ts
const volUnits = ["km³", "hm³", "dam³", "m³", "dm³", "cm³", "mm³"];
function convertVol(value, fromUnit, toUnit) {
    const fromIndex = volUnits.indexOf(fromUnit);
    const toIndex = volUnits.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);
    return value * Math.pow(1000, exponent);
}
