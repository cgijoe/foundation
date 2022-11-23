import { BaseResponse } from "./BaseResponse";

export class ErrorResponse extends BaseResponse {

    private errorCode : number = 0;
    public rawErrors: any[] = [];

    constructor(statusCode: number , errorCode : number , message : string , rawErrors? : any) {
        super();
        this.status = "failed";
        this.statusCode = statusCode;
        this.errorCode = errorCode;
        this.message = message;
        this.rawErrors = rawErrors;
    }
}