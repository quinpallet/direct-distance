import { DistanceCalculator } from 'https://deno.land/x/distancecalculator@v1.1.4/distance-calculator.ts';

export interface GeoLocation {
    lat: number;
    lng: number;
}

// 東京都庁
const posTokyo: GeoLocation = {
    lat: 35.68944,
    lng: 139.69167
};

// 横浜市庁舎
const posYokohama: GeoLocation = {
    lat: 35.44778,
    lng: 139.6425
};

console.log(DistanceCalculator.getDistanceInKilometers(posTokyo.lat, posTokyo.lng, posYokohama.lat, posYokohama.lng));
