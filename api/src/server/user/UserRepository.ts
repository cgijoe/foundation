import {getManager, Repository} from "typeorm";
import {UserInfo} from "./models/UserInfo";
import { Result } from "../../models/Result";
import ValidationExceptions from "../../constants/RuntimExceptions";


export class UserRepository {

    private repository : Repository<any> ;

    constructor() {
        this.repository = getManager().getRepository(UserInfo)
    }

    public saveUser = async (userModel) => {
        const response = await this.repository.save(userModel);
        return Result.succesful(response);
    }

    public findUserById = async(name : string) => {
        const userObject = await this.repository.findOne({ where: { name: name } })
        return userObject;
    }

    public getAllUsers = async () => {
        const response = await this.repository.find();
        return Result.succesful(response);
    }

}
