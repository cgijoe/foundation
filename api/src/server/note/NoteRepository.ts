import { Note } from "./models/Note";
import { dataSource } from "../..";
import { EntityRepository } from "../../db/entity.repository";

export class NoteRepository extends EntityRepository<Note> {
  constructor() {
    super(dataSource.getRepository(Note));
  }
}
