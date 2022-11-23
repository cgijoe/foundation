import { BaseResponse } from "./BaseResponse";

export class SuccessResponse extends BaseResponse {


    public data: any[] = [];
    public errors : any[] = [];
    
    constructor(data: any[] , message? : string) {
        super();
        this.status = "success";
        this.statusCode = 200;
        this.data = data;
        this.message = message;
    }
}