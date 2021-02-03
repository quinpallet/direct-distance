import { GeoLocation, directDistance } from './direct-distance';

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

console.log(directDistance(posTokyo, posYokohama));
