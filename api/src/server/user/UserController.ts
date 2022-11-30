import {
  JsonController,
  Body,
  Get,
  Post,
  Res,
  UseBefore,
  Req,
} from "routing-controllers";
import { IUserService } from "./IUserService";
import { Request, Response } from "express";
import { SuccessResponse } from "../../models/SuccessResponse";
import CreateUserRequest from "./models/CreateUserRequest";
import "reflect-metadata";
import { Container } from "typedi";
import { UserService } from "./UserService";
import Keycloak from "../../Keycloak";

@JsonController()
export default class UserController {
  public userService: IUserService = Container.get(UserService);

  @Get("/getUsers/")
  @UseBefore(Keycloak.getInstance().protect())
  async getAll(@Req() request: Request, @Res() response: Response) {
    console.log(request);
    const allUsers = await this.userService.getAllUsers();
    return response.json(new SuccessResponse(allUsers.getValue()));
  }

  @Post("/createUser/")
  async createUser(
    @Body({ required: true }) createUserRequest: CreateUserRequest,
    @Res() response: Response
  ) {
    console.log(createUserRequest);
    const userInfo = await this.userService.createNewUser(createUserRequest);
    return response.json(new SuccessResponse(userInfo.getValue()));
  }
}
