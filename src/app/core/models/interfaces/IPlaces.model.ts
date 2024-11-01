import { _IDType } from "..";
import { IFacility } from "./IFacility.model";

// export interface IPlace {
//     id: _IDType;
//     title: string;
//     country: string;
//     review: string;
//     oldPrice: number;
//     latestPrice: number;
//     includeTaxes: boolean;
//     facilities: IFacility[];
//     imgPath: string[];
//     rooms: number;
//     beds: number;
//     bathrooms: number;
//     description: string;
// }

export interface IPlace {
    id: _IDType;
    name: string;
    description: string;
    propertyID: number;
    unitTypeID: number;
    country: string;
    floorNumber: number[]
    review: string;
    oldPrice: number;
    price: number;
    includeTaxes: boolean;
    facilities: any[];
    imageURL: string[];
    count: number;
    guests: number;
    beds: number;
    rooms: number;
    bathrooms: number;
    status: string;
    roomSize?: any;
    viewType?: any;
    additionalFeatures?: any;
    amenities: any;
}
