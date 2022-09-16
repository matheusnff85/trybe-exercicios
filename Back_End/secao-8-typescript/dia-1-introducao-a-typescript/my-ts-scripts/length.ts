// ./length.ts

const distanceUnits = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

function convertDist(value: number, fromUnit: string, toUnit: string): number {
    const fromIndex = distanceUnits.indexOf(fromUnit); // pegamos o index da unidade base no array
    const toIndex = distanceUnits.indexOf(toUnit); // pegamos o index da unidade para a conversão
    const exponent = (toIndex - fromIndex); // calculamos o expoente a partir da diferença dos index

    return value * Math.pow(10, exponent);
}