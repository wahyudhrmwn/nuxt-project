<template>
  <div class="pt-16">
    <!-- Header Section -->
    <div class="relative overflow-hidden bg-gradient-to-b from-violet-600/[.15] via-transparent">
      <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div class="max-w-2xl text-center mx-auto">
          <h1 class="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
            Profile <span class="text-blue-600">#{{ id }}</span>
          </h1>
        </div>
      </div>
    </div>

    <!-- Profile Content -->
    <div class="max-w-4xl mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div v-if="loading" class="text-center">
        <div class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
          <span class="sr-only">Loading...</span>
        </div>
      </div>

      <div v-else-if="error" class="p-4 bg-red-50 border border-red-200 rounded-md">
        <div class="flex">
          <div class="ml-3">
            <h3 class="text-sm text-red-800 font-semibold">Error loading profile</h3>
            <div class="mt-1 text-sm text-red-700">{{ error }}</div>
          </div>
        </div>
      </div>

      <div v-else-if="currentProfile" class="bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-slate-900 dark:border-gray-700">
        <div class="p-4 sm:p-7">
          <!-- Profile Image & Basic Info -->
          <div class="flex flex-col sm:flex-row sm:items-center gap-5">
            <img class="rounded-full w-24 h-24 sm:w-32 sm:h-32 object-cover" 
                 :src="currentProfile.avatar || 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&fit=facearea&facepad=2&w=320&h=320&q=80'" 
                 :alt="currentProfile.name">
            <div>
              <h3 class="text-xl font-bold text-gray-800 dark:text-gray-200">
                {{ currentProfile.name }}
              </h3>
              <p class="mt-1 text-gray-500">{{ currentProfile.email }}</p>
              <div class="mt-4 flex gap-3">
                <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800">{{ currentProfile.role }}</span>
              </div>
            </div>
          </div>

          <div class="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
            <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Profile Details</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p class="text-sm text-gray-500">Location</p>
                <p class="mt-1 text-gray-800 dark:text-gray-200">{{ currentProfile.location || 'Not specified' }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500">Phone</p>
                <p class="mt-1 text-gray-800 dark:text-gray-200">{{ currentProfile.phone || 'Not specified' }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500">Member Since</p>
                <p class="mt-1 text-gray-800 dark:text-gray-200">{{ formatDate(currentProfile.joinDate) }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500">Status</p>
                <span class="mt-1 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium"
                      :class="currentProfile.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'">
                  {{ currentProfile.status }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useProfileStore } from '~/stores/profile'

const route = useRoute()
const id = route.params.id
const profileStore = useProfileStore()
const { currentProfile, loading, error } = storeToRefs(profileStore)

// Fetch profile data when component mounts
onMounted(async () => {
  await profileStore.fetchProfile(id)
})

// Format date helper
const formatDate = (date) => {
  if (!date) return 'Not specified'
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>
