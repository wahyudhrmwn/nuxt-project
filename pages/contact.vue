<template>
  <div class="pt-16">
    <!-- Header Section -->
    <div class="relative overflow-hidden bg-gradient-to-b from-violet-600/[.15] via-transparent">
      <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div class="max-w-2xl text-center mx-auto">
          <h1 class="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
            Contact <span class="text-blue-600">Us</span>
          </h1>
          <p class="mt-3 text-lg text-gray-600 dark:text-gray-400">We'd love to hear from you</p>
        </div>
      </div>
    </div>

    <!-- Contact Section -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="grid md:grid-cols-2 items-center gap-12">
        <!-- Contact Form -->
        <div class="max-w-lg mx-auto">
          <div class="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">
            <h2 class="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
              Send us a message
            </h2>

            <form>
              <div class="grid gap-4">
                <div>
                  <label for="name" class="block mb-2 text-sm text-gray-700 dark:text-gray-400">Full Name</label>
                  <input type="text" id="name" name="name" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="John Doe">
                </div>

                <div>
                  <label for="email" class="block mb-2 text-sm text-gray-700 dark:text-gray-400">Email</label>
                  <input type="email" id="email" name="email" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="john.doe@example.com">
                </div>

                <div>
                  <label for="message" class="block mb-2 text-sm text-gray-700 dark:text-gray-400">Message</label>
                  <textarea id="message" name="message" rows="4" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Your message here..."></textarea>
                </div>

                <button type="submit" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
        <!-- End Contact Form -->

        <!-- Contact Info -->
        <div class="max-w-lg mx-auto">
          <div class="grid gap-8">
            <div class="flex gap-x-5">
              <svg class="flex-shrink-0 w-6 h-6 mt-1 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
              <div class="grow">
                <h3 class="font-semibold text-gray-800 dark:text-gray-200">Our offices</h3>
                <p class="mt-1 text-sm text-gray-500">Find us at our office:</p>
                <p class="mt-2 text-gray-600 dark:text-gray-400">123 Main Street, Suite 456<br>New York, NY 10001</p>
              </div>
            </div>

            <div class="flex gap-x-5">
              <svg class="flex-shrink-0 w-6 h-6 mt-1 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <div class="grow">
                <h3 class="font-semibold text-gray-800 dark:text-gray-200">Contact</h3>
                <p class="mt-1 text-sm text-gray-500">Mon-Fri from 8am to 5pm</p>
                <p class="mt-2 text-gray-600 dark:text-gray-400">+1 (555) 000-0000<br>hello@example.com</p>
              </div>
            </div>
          </div>
        </div>
        <!-- End Contact Info -->
      </div>
    </div>
  </div>
</template> 