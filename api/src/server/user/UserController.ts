import { Controller, UseBefore, QueryParams, JsonController, Param, Body, Get, Post, Put, Delete, Res, NotFoundError, Req, BodyParam } from "routing-controllers";
import { IUserService } from "./IUserService";
import { Request, Response } from 'express';
import { SuccessResponse } from "../../models/SuccessResponse";
import CreateUserRequest from "./models/CreateUserRequest";
import "reflect-metadata";
import {Service, Container, Inject} from "typedi";
import { UserService } from "./UserService";
@JsonController()
export default class UserController {

 
  public userService: IUserService = Container.get(UserService);


  @Get("/getUsers/")
  async getAll(@Res() response: Response) {
    const allUsers = await this.userService.getAllUsers();
    return response.json(new SuccessResponse(allUsers.getValue()));
  }

  @Post("/createUser/")
  async createUser(@Body({ required: true }) createUserRequest: CreateUserRequest, @Res() response: Response) {
    console.log(createUserRequest );
    const userInfo = await this.userService.createNewUser(createUserRequest);
    return response.json(new SuccessResponse(userInfo.getValue()));
  }

}