import { Result } from "../../models/Result";
import CreateUserRequest from "./models/CreateUserRequest";
import { Service } from "typedi";

export interface IUserService {

    createNewUser: (request: CreateUserRequest) => Promise<Result>;
    getAllUsers: () => Promise<Result>;

} 