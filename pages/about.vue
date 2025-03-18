<template>
  <div class="pt-16">
    <!-- Header Section -->
    <div class="relative overflow-hidden bg-gradient-to-b from-violet-600/[.15] via-transparent">
      <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div class="max-w-2xl text-center mx-auto">
          <h1 class="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
            About <span class="text-blue-600">Us</span>
          </h1>
          <p class="mt-3 text-lg text-gray-600 dark:text-gray-400">Learn more about our company and mission</p>
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <!-- Company Overview -->
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12">
        <div class="lg:w-full">
          <div class="relative overflow-hidden rounded-lg">
            <img class="w-full h-[350px] object-cover" src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Company Image">
          </div>
        </div>

        <div class="lg:w-full">
          <h2 class="text-3xl font-bold lg:text-4xl dark:text-white">
            Transform your business with innovation
          </h2>
          <p class="mt-3 text-gray-600 dark:text-gray-400">
            We're a dynamic team dedicated to delivering innovative solutions for businesses worldwide. Our mission is to help companies thrive in the digital age through cutting-edge technology and strategic thinking.
          </p>
          <div class="mt-6 grid gap-4">
            <!-- Stats -->
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
              <div class="p-4 bg-white border border-gray-200 rounded-lg dark:bg-slate-900 dark:border-gray-700">
                <h3 class="text-lg font-bold text-blue-600">5+ Years</h3>
                <p class="mt-1 text-gray-500">in business</p>
              </div>
              <div class="p-4 bg-white border border-gray-200 rounded-lg dark:bg-slate-900 dark:border-gray-700">
                <h3 class="text-lg font-bold text-blue-600">100+</h3>
                <p class="mt-1 text-gray-500">clients served</p>
              </div>
              <div class="p-4 bg-white border border-gray-200 rounded-lg dark:bg-slate-900 dark:border-gray-700">
                <h3 class="text-lg font-bold text-blue-600">24/7</h3>
                <p class="mt-1 text-gray-500">support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Team Section -->
      <div class="max-w-4xl mx-auto mt-20">
        <div class="text-center mb-10">
          <h2 class="text-2xl font-bold md:text-3xl dark:text-white">Meet Our Team</h2>
          <p class="mt-3 text-gray-600 dark:text-gray-400">Dedicated professionals working to serve you better</p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="flex flex-col bg-white border border-gray-200 rounded-xl dark:bg-slate-900 dark:border-gray-700">
            <div class="p-4 md:p-6">
              <div class="flex items-center gap-x-4">
                <img class="rounded-full w-20 h-20" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="CEO Image">
                <div class="grow">
                  <h3 class="font-medium text-gray-800 dark:text-gray-200">John Smith</h3>
                  <p class="text-xs uppercase text-gray-500">CEO</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Add more team members as needed -->
        </div>
      </div>
    </div>
  </div>
</template> 