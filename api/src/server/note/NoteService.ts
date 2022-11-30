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
    createNoteRequest: CreateNoteRequest
  ): Promise<Result> => {
    return await this.repository.createNote(createNoteRequest);
  };

  getAllNotes = async (queryParams: PaginationParams): Promise<Result> => {
    return await this.repository.findNotes(queryParams);
  };

  getNote = async (id: number): Promise<Result> => {
    return await this.repository.findNoteById(id);
  };

  updateNote = async (
    id: number,
    updateNoteRequest: CreateNoteRequest
  ): Promise<Result> => {
    return await this.repository.updateNote(id, updateNoteRequest);
  };

  deleteNote = async (id: number): Promise<Result> => {
    return await this.repository.deleteNote(id);
  };
}
