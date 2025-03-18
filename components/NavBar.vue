<template>
  <header class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full h-16 fixed top-0 bg-white/[.95] backdrop-blur-md border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-slate-900/[.95] dark:border-gray-700">
    <nav class="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
      <div class="flex items-center justify-between">
        <a class="flex items-center gap-x-3 text-xl font-bold text-gray-800 dark:text-white" href="#">
          <div class="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg shadow-lg">
            <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          Logo  
        </a>
        <div class="sm:hidden">
          <button type="button" class="hs-collapse-toggle w-9 h-9 flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
            <svg class="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
            <svg class="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
        </div>
      </div>
      <div id="navbar-collapse-with-animation" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
        <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
          <NuxtLink 
            class="font-medium px-3 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700" 
            :class="{ 'text-blue-600 bg-blue-50 dark:bg-gray-800 dark:text-blue-500': $route.path === '/' }"
            to="/" 
            aria-current="page"
          >
            Home
          </NuxtLink>
          <NuxtLink 
            class="font-medium px-3 py-2 rounded-lg transition-all duration-200 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700" 
            :class="{ 'text-blue-600 bg-blue-50 dark:bg-gray-800 dark:text-blue-500': $route.path === '/about' }"
            to="/about"
          >
            About
          </NuxtLink>
          <NuxtLink 
            class="font-medium px-3 py-2 rounded-lg transition-all duration-200 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700" 
            :class="{ 'text-blue-600 bg-blue-50 dark:bg-gray-800 dark:text-blue-500': $route.path === '/contact' }"
            to="/contact"
          >
            Contact
          </NuxtLink>
          <div class="border-s sm:border-l border-gray-200 dark:border-gray-700 sm:ms-4 sm:ps-4">
            <a 
              class="flex items-center gap-x-2.5 font-medium px-3 py-2 rounded-lg transition-all duration-200 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700" 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template> 