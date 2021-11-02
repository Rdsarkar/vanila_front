import {CustomDetailsModel} from './customDetails.model'

export class Res{
    message: string | undefined;
    success: boolean | undefined;
    payload!: CustomDetailsModel[] ;
}