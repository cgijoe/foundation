import CustomError from "./CustomError";

export class Result {

    public isSuccess: boolean;
    public isFailure: boolean
    public error : CustomError;
    private _value?: any;

    private constructor(isSuccess: boolean, error: CustomError, value?: any) {
       
        this.isSuccess = isSuccess;
        this.isFailure = !isSuccess;
        this.error = error;
        this._value = value;

        Object.freeze(this);
    }

    public getValue(): any {
        if (!this.isSuccess) {
            throw new Error(`Cant retrieve the value from a failed result.`)
        }
        return this._value;
    }

    public static succesful(value?: any): Result {
        return new Result(true, new CustomError(200 , "No Exception Occured") , value);
    }

    public static failure(error: CustomError): Result {
        return new Result(false, error);
    }

}