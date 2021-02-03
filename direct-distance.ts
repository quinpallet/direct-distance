import distance from '@turf/distance';
import { point } from '@turf/helpers';

export interface GeoLocation {
    lat: number;
    lng: number;
}

export const directDistance = (posFrom: GeoLocation, posTo: GeoLocation): number =>
    distance(
        point([posFrom.lng, posFrom.lat]),
        point([posTo.lng, posTo.lat]),
        { units: 'kilometers' }
    );
