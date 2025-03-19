import { defineStore } from 'pinia'
import type { ProfileState, Profile } from '~/utils/types/profile'


export const useProfileStore = defineStore('profile', {
  state: (): ProfileState => ({
    profiles: {},
    currentProfile: null,
    loading: false,
    error: null
  }),

  getters: {
    getProfileById: (state) => (id: string) => state.profiles[id],
    getAllProfiles: (state) => Object.values(state.profiles),
    isLoading: (state) => state.loading,
    getError: (state) => state.error
  },

  actions: {
    async fetchProfile(id: string) {
      this.loading = true
      this.error = null
      try {
        const response = await fetch(`/api/profile/${id}`)
        if (!response.ok) throw new Error('Profile not found')
        
        const data = await response.json()
        this.profiles[id] = data
        this.currentProfile = data
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'An error occurred'
      } finally {
        this.loading = false
      }
    },

    async fetchAllProfiles() {
      this.loading = true
      this.error = null
      try {
        const response = await fetch('/api/profile')
        if (!response.ok) throw new Error('Failed to fetch profiles')
        
        const data = await response.json()
        this.profiles = data.reduce((acc: Record<string, Profile>, profile: Profile & { id: string }) => {
          acc[profile.id] = profile
          return acc
        }, {})
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'An error occurred'
      } finally {
        this.loading = false
      }
    }
  }
}) 