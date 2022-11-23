import CustomError from "../models/CustomError";

export default class ValidationExceptions {

    static USER_NOT_FOUND = new CustomError(10000 , "User Not Found");
    static USER_ALREADY_REGISTERED = new CustomError(10001 , "User Already Registered!");

}