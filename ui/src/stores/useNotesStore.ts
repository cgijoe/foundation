import noteApi from '@/api/noteApi'
import type { INote } from '@/interfaces/INote'
import type { IPaginationQuery } from '@/interfaces/IPaginationQuery'
import { defineStore } from 'pinia'

export interface INotesStoreState {
  data?: INote | INote[] | null
  loading: boolean
  error?: Error | null
}

export const useNotesStore = defineStore('notes', {
  state: (): INotesStoreState => ({
    data: null,
    loading: false,
    error: null
  }),
  actions: {
    async createNote(body: INote) {
      this.loading = true;
      try {
        this.data = await (await noteApi.createNote(body)).data
      } catch (err) {
        this.error = err as Error
      } finally {
        this.loading = false
      }
    },
    async getNotes(paginationParams: IPaginationQuery) {
      this.loading = true;
      try {
        this.data = await (await noteApi.getNotes(paginationParams)).data
      } catch (err) {
        this.error = err as Error
      } finally {
        this.loading = false
      }
    },
    async getNote(id: number) {
      this.loading = true;
      try {
        this.data = await (await noteApi.getNote(id)).data
      } catch (err) {
        this.error = err as Error
      } finally {
        this.loading = false
      }
    },
    async updateNote(id: number, body: INote) {
      this.loading = true;
      try {
        this.data = await (await noteApi.updateNote(id, body)).data
      } catch (err) {
        this.error = err as Error
      } finally {
        this.loading = false
      }
    },
    async deleteNote(id: number) {
      this.loading = true;
      try {
        this.data = await (await noteApi.deleteNote(id)).data
      } catch (err) {
        this.error = err as Error
      } finally {
        this.loading = false
      }
    }
  },
})