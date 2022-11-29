import { ApiEndpoints } from "@/configs/ApiEndpoints"
import type { INote } from "@/interfaces/INote"
import type { IPaginationQuery } from "@/interfaces/IPaginationQuery"
import apiClient from "@/utilities/apiClient"

const createNote = (body: INote) =>
  apiClient.post(ApiEndpoints.NOTE_RESOURCE, body)

const getNotes = (queryParams: IPaginationQuery) =>
  apiClient.get(ApiEndpoints.NOTE_RESOURCE, {
    params: queryParams,
  })

const getNote = (id: number) =>
  apiClient.get(`${ApiEndpoints.NOTE_RESOURCE}/${id}`)

const updateNote = (id: number, body: INote) =>
  apiClient.patch(`${ApiEndpoints.NOTE_RESOURCE}/${id}`, body)

const deleteNote = (id: number) =>
  apiClient.delete(`${ApiEndpoints.NOTE_RESOURCE}/${id}`)

export default {
  createNote,
  getNotes,
  getNote,
  updateNote,
  deleteNote
}