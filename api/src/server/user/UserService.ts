import { IUserService } from "./IUserService";
import { UserRepository } from "./UserRepository";
import { Result } from "../../models/Result";
import { NotAcceptableError } from "routing-controllers";
import CreateUserRequest from "./models/CreateUserRequest";
import { Service } from "typedi";

@Service()
export class UserService implements IUserService {
  protected repository = new UserRepository();

  createNewUser = async (
    createUserRequest: CreateUserRequest
  ): Promise<Result> => {
    const userWithName = await this.repository.findUserById(
      createUserRequest.name
    );
    if (userWithName)
      throw new NotAcceptableError("User with this name already exists");
    return await this.repository.saveUser(createUserRequest);
  };

  getAllUsers = async (): Promise<Result> => {
    const result = await this.repository.getAllUsers();
    return result;
  };
}
