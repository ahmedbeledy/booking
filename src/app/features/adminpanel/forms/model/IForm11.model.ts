import { ITime } from "../../../core";

export interface IForm11 {
    checkin_from: ITime["name"];
    checkin_to: ITime["name"];
    checkout_from: ITime["name"];
    checkout_to: ITime["name"];
    question1: boolean,
    question2: 'yes' | 'request' | 'no',
}