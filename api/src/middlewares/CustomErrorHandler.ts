import { Middleware, ExpressErrorMiddlewareInterface, BadRequestError, HttpError } from "routing-controllers";
import { ValidationError } from "class-validator";
import { ErrorCodes } from "../constants/ErrorCodes";
import { ErrorResponse } from "../models/ErrorResponse";

@Middleware({ type: "after" })
export class CustomErrorHandler implements ExpressErrorMiddlewareInterface {

    error(error: any, request: any, response: any, next: (err: any) => any) {

        console.log(' an exception is thrown ', error.httpCode, error);

        const errorsArray = error.errors;


        

        if (error instanceof BadRequestError) {
            
            console.log('--000000000000------' , errorsArray)

            let message   = error.message;

            if(errorsArray && errorsArray.length > 0) {
                const validationError = errorsArray[0];
                message = Object.values(validationError["constraints"]).toString();
            }
        
            response
                .status(403)
                .json(new ErrorResponse(403, 1234, message ));
        }
        else {
            const status = error.status || 500;
            const errorCode = error.errorCode || ErrorCodes.DATABASE_ERROR;
            const message = error.message || 'Something went wrong';
            const rawErrors = error.errors;
            response
                .status(status)
                .json(new ErrorResponse(status, errorCode, message , rawErrors));
        }

    }

}