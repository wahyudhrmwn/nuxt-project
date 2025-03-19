<template>
  <div class="pt-16">
    <!-- Header Section -->
    <div class="relative overflow-hidden bg-gradient-to-b from-violet-600/[.15] via-transparent">
      <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div class="max-w-2xl text-center mx-auto">
          <h1 class="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
            Our <span class="text-blue-600">Team</span>
          </h1>
          <p class="mt-3 text-lg text-gray-600 dark:text-gray-400">Meet our amazing team members</p>
        </div>
      </div>
    </div>

    <!-- Profile Cards Grid -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Profile Card -->
        <NuxtLink 
          v-for="profile in profiles" 
          :key="profile.id"
          :to="`/profile/${profile.id}`"
          class="group flex flex-col bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 dark:bg-slate-900 dark:border-gray-700 dark:hover:shadow-black/[.4]"
        >
          <div class="p-4 md:p-6">
            <div class="flex items-center gap-4">
              <img 
                class="rounded-full w-20 h-20 object-cover" 
                :src="profile.avatar || 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&fit=facearea&facepad=2&w=320&h=320&q=80'" 
                :alt="profile.name"
              >
              <div>
                <h3 class="text-xl font-semibold text-gray-800 group-hover:text-blue-600 dark:text-gray-200">
                  {{ profile.name }}
                </h3>
                <p class="text-sm text-gray-500">{{ profile.role }}</p>
              </div>
            </div>
            <div class="mt-4">
              <p class="text-gray-600 dark:text-gray-400">{{ profile.email }}</p>
            </div>
            <div class="mt-4 flex items-center gap-2">
              <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium"
                    :class="profile.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'">
                {{ profile.status }}
              </span>
              <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {{ profile.location }}
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
// Simulasi data profiles
const profiles = ref([
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'CEO',
    avatar: null,
    location: 'New York',
    status: 'active',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'CTO',
    avatar: null,
    location: 'San Francisco',
    status: 'active',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike.johnson@example.com',
    role: 'Developer',
    avatar: null,
    location: 'London',
    status: 'inactive',
  },
  // Tambahkan profile lainnya sesuai kebutuhan
])
</script> 