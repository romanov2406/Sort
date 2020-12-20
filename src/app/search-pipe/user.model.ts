import { IUser } from "./user.interface";


export class User implements IUser {
    constructor(
        public name: string,
        public surrname: string,
        public number: number,
        ){}
}