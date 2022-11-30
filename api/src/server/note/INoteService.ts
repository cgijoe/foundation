import { PaginationParams } from "../../models/PaginationParams";
import { Result } from "../../models/Result";
import CreateNoteRequest from "./models/CreateNoteRequest";

export interface INoteService {
  createNewNote: (request: CreateNoteRequest) => Promise<Result>;
  getAllNotes: (paginationParams: PaginationParams) => Promise<Result>;
  getNote: (id: number) => Promise<Result>;
  updateNote: (id: number, request: CreateNoteRequest) => Promise<Result>;
  deleteNote: (id: number) => Promise<Result>;
}
