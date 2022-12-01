import { INoteService } from "./INoteService";
import { NoteRepository } from "./NoteRepository";
import { Result } from "../../models/Result";
import CreateNoteRequest from "./models/CreateNoteRequest";
import { Service } from "typedi";
import { PaginationParams } from "../../models/PaginationParams";

@Service()
export class NoteService implements INoteService {
  protected repository = new NoteRepository();

  createNewNote = async (
    userId: string,
    createNoteRequest: CreateNoteRequest
  ): Promise<Result> => {
    const response = await this.repository.create({
      ...createNoteRequest,
      userId,
    });
    return Result.succesful(response);
  };

  getAllNotes = async (
    userId: string,
    queryParams: PaginationParams
  ): Promise<Result> => {
    let page = queryParams.page || 1;
    let limit = queryParams.limit || 10;
    const response = await this.repository.find({
      where: {
        userId,
      },
      skip: (page - 1) * limit,
      take: limit,
    });
    return Result.succesful(response);
  };

  getNote = async (userId: string, id: number): Promise<Result> => {
    const response = await this.repository.findOne({
      where: { userId, id },
    });
    return Result.succesful(response);
  };

  updateNote = async (
    userId: string,
    id: number,
    updateNoteRequest: CreateNoteRequest
  ): Promise<Result> => {
    const response = await this.repository.update(
      {
        userId,
        id,
      },
      updateNoteRequest
    );
    return Result.succesful(response);
  };

  deleteNote = async (userId: string, id: number): Promise<Result> => {
    const response = await this.repository.delete({ userId, id });
    return Result.succesful(response);
  };
}
