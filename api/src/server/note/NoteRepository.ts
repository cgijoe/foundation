import { Repository } from "typeorm";
import { Note } from "./models/Note";
import { dataSource } from "../..";
import CreateNoteRequest from "./models/CreateNoteRequest";
import { PaginationParams } from "../../models/PaginationParams";
import { Result } from "../../models/Result";

export class NoteRepository {
  private repository: Repository<Note>;

  constructor() {
    this.repository = dataSource.getRepository(Note);
  }

  public createNote = async (noteDto: CreateNoteRequest) => {
    const response = await this.repository.save({
      description: noteDto.description,
      title: noteDto.title,
    });
    return Result.succesful(response);
  };

  public findNoteById = async (id: number) => {
    const response = await this.repository.findOne({
      where: {
        id,
      },
    });
    return Result.succesful(response);
  };

  public findNotes = async (paginationParams: PaginationParams) => {
    let page = paginationParams.page || 1;
    let limit = paginationParams.limit || 10;
    const response = await this.repository.find({
      skip: (page - 1) * limit,
      take: limit,
    });
    return Result.succesful(response);
  };

  public updateNote = async (id: number, noteModel: CreateNoteRequest) => {
    const response = await this.repository.update(id, noteModel);
    return Result.succesful(response);
  };

  public deleteNote = async (id: number) => {
    const response = await this.repository.delete(id);
    return Result.succesful(response);
  };
}
