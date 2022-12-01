import noteApi from '@/api/noteApi'
import type { INote } from '@/interfaces/INote'
import type { IPaginationQuery } from '@/interfaces/IPaginationQuery'
import { defineStore } from 'pinia'

export interface INotesStoreState {
  notes?: INote[] | null
  note?: INote | null
  pagination?: IPaginationQuery
  loading: boolean
  error?: Error | null
}

export const useNotesStore = defineStore('notes', {
  state: (): INotesStoreState => ({
    notes: null,
    note: null,
    pagination: { page: 1, limit: 10 },
    loading: false,
    error: null,
  }),
  actions: {
    async createNote(body: INote) {
      this.loading = true
      try {
        this.note = await (await noteApi.createNote(body)).data.data
        await this.getNotes(this.pagination)
      } catch (err) {
        this.error = err as Error
      } finally {
        this.loading = false
      }
    },
    async getNotes(paginationParams?: IPaginationQuery) {
      this.loading = true
      this.pagination = paginationParams || { page: 1, limit: 10 }
      try {
        this.notes = await (
          await noteApi.getNotes(paginationParams || { page: 1 })
        ).data.data
      } catch (err) {
        this.error = err as Error
      } finally {
        this.loading = false
      }
    },
    async getNote(id: number) {
      this.loading = true
      try {
        this.note = await (await noteApi.getNote(id)).data.data
      } catch (err) {
        this.error = err as Error
      } finally {
        this.loading = false
      }
    },
    async updateNote(id: number, body: INote) {
      this.loading = true
      try {
        this.note = await (await noteApi.updateNote(id, body)).data.data
        await this.getNotes(this.pagination)
      } catch (err) {
        this.error = err as Error
      } finally {
        this.loading = false
      }
    },
    async deleteNote(id: number) {
      this.loading = true
      try {
        this.note = await (await noteApi.deleteNote(id)).data.data
        await this.getNotes(this.pagination)
      } catch (err) {
        this.error = err as Error
      } finally {
        this.loading = false
      }
    },
  },
})
