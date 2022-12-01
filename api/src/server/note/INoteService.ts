import { PaginationParams } from "../../models/PaginationParams";
import { Result } from "../../models/Result";
import CreateNoteRequest from "./models/CreateNoteRequest";

export interface INoteService {
  createNewNote: (
    userId: string,
    request: CreateNoteRequest
  ) => Promise<Result>;
  getAllNotes: (
    userId: string,
    paginationParams: PaginationParams
  ) => Promise<Result>;
  getNote: (userId: string, id: number) => Promise<Result>;
  updateNote: (
    userId: string,
    id: number,
    request: CreateNoteRequest
  ) => Promise<Result>;
  deleteNote: (userId: string, id: number) => Promise<Result>;
}
