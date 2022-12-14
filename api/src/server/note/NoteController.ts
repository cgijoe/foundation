import {
  JsonController,
  Body,
  Get,
  Post,
  Res,
  QueryParams,
  Patch,
  Param,
  Delete,
  UseBefore,
  Req,
} from "routing-controllers";
import { INoteService } from "./INoteService";
import { Response } from "express";
import { SuccessResponse } from "../../models/SuccessResponse";
import CreateNoteRequest from "./models/CreateNoteRequest";
import "reflect-metadata";
import { Container } from "typedi";
import { NoteService } from "./NoteService";
import { PaginationParams } from "../../models/PaginationParams";
import Keycloak from "../../Keycloak";

@JsonController("/note")
@UseBefore(Keycloak.getInstance().protect())
export default class NoteController {
  public noteService: INoteService = Container.get(NoteService);

  @Get("/")
  async getAll(
    @QueryParams() queryParams: PaginationParams,
    @Req() req: any,
    @Res() response: Response
  ) {
    const allNotes = await this.noteService.getAllNotes(
      req.kauth.grant.access_token.content.sub,
      queryParams
    );
    return response.json(new SuccessResponse(allNotes.getValue()));
  }

  @Get("/:id")
  async getNote(
    @Param("id") noteId: number,
    @Req() req: any,
    @Res() response: Response
  ) {
    const note = await this.noteService.getNote(
      req.kauth.grant.access_token.content.sub,
      noteId
    );
    return response.json(new SuccessResponse(note.getValue()));
  }

  @Post("/")
  async createNote(
    @Body({ required: true }) createNoteRequest: CreateNoteRequest,
    @Req() req: any,
    @Res() response: Response
  ) {
    const noteInfo = await this.noteService.createNewNote(
      req.kauth.grant.access_token.content.sub,
      createNoteRequest
    );
    return response.json(new SuccessResponse(noteInfo.getValue()));
  }

  @Patch("/:id")
  async updateNote(
    @Param("id") noteId: number,
    @Body({ required: true }) updateNoteRequest: CreateNoteRequest,
    @Req() req: any,
    @Res() response: Response
  ) {
    const noteInfo = await this.noteService.updateNote(
      req.kauth.grant.access_token.content.sub,
      noteId,
      updateNoteRequest
    );
    return response.json(new SuccessResponse(noteInfo.getValue()));
  }

  @Delete("/:id")
  async deleteNote(
    @Param("id") noteId: number,
    @Req() req: any,
    @Res() response: Response
  ) {
    const deleteResult = await this.noteService.deleteNote(
      req.kauth.grant.access_token.content.sub,
      noteId
    );
    return response.json(new SuccessResponse(deleteResult.getValue()));
  }
}
