<template>
    <!--
    This example requires some changes to your config:
    
    ```
    // tailwind.config.js
    module.exports = {
      // ...
      plugins: [
        // ...
        require('@tailwindcss/forms'),
      ],
    }
    ```
  -->
    <div class="">
      <div>
        <!--
        Mobile filter dialog
  
        Off-canvas filters for mobile, show/hide based on off-canvas filters state.
      -->
        <div class="relative z-40 lg:hidden" role="dialog" aria-modal="true">
          <!--
          Off-canvas menu backdrop, show/hide based on off-canvas menu state.
  
          Entering: "transition-opacity ease-linear duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "transition-opacity ease-linear duration-300"
            From: "opacity-100"
            To: "opacity-0"
        -->
          <!-- <div
            class="fixed inset-0 bg-black bg-opacity-25"
            aria-hidden="true"
          ></div> -->
  
          <!--
          Off-canvas menu, show/hide based on off-canvas menu state.
  
          Entering: "transition ease-in-out duration-300 transform"
            From: "translate-x-full"
            To: "translate-x-0"
          Leaving: "transition ease-in-out duration-300 transform"
            From: "translate-x-0"
            To: "translate-x-full"
        -->
          <!-- <div class="fixed inset-0 z-40 flex">
            <div
              class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl"
            >
              <div class="flex items-center justify-between px-4">
                <h2 class="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span class="sr-only">Close menu</span>
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
  
              <form class="mt-4 border-t border-gray-200">
                <div class="border-t border-gray-200 px-4 py-6">
                  <h3 class="-mx-2 -my-3 flow-root">
                    <button
                      type="button"
                      class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                      aria-controls="filter-section-mobile-0"
                      aria-expanded="false"
                    >
                      <span class="font-medium text-gray-900">Color</span>
                      <span class="ml-6 flex items-center">
                        <svg
                          class="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          data-slot="icon"
                        >
                          <path
                            d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"
                          />
                        </svg>
                        <svg
                          class="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          data-slot="icon"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div class="pt-6" id="filter-section-mobile-0">
                    <div class="space-y-6">
                      <div class="flex items-center">
                        <input
                          id="filter-mobile-color-0"
                          name="color[]"
                          value="white"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-color-0"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                          >White</label
                        >
                      </div>
                      <div class="flex items-center">
                        <input
                          id="filter-mobile-color-1"
                          name="color[]"
                          value="beige"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-color-1"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                          >Beige</label
                        >
                      </div>
                      <div class="flex items-center">
                        <input
                          id="filter-mobile-color-2"
                          name="color[]"
                          value="blue"
                          type="checkbox"
                          checked
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-color-2"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                          >Blue</label
                        >
                      </div>
                      <div class="flex items-center">
                        <input
                          id="filter-mobile-color-3"
                          name="color[]"
                          value="brown"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-color-3"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                          >Brown</label
                        >
                      </div>
                      <div class="flex items-center">
                        <input
                          id="filter-mobile-color-4"
                          name="color[]"
                          value="green"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-color-4"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                          >Green</label
                        >
                      </div>
                      <div class="flex items-center">
                        <input
                          id="filter-mobile-color-5"
                          name="color[]"
                          value="purple"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-color-5"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                          >Purple</label
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="border-t border-gray-200 px-4 py-0">
                  <h3 class="-mx-2 -my-3 fflow-root">
                    <button
                      type="button"
                      class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                      aria-controls="filter-section-mobile-1"
                      aria-expanded="false"
                    >
                      <span class="font-medium text-gray-900">Category</span>
                      <span class="ml-6 flex items-center">
                        <svg
                          class="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          data-slot="icon"
                        >
                          <path
                            d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"
                          />
                        </svg>
                        <svg
                          class="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          data-slot="icon"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div class="pt-6" id="filter-section-mobile-1">
                    <div class="space-y-6">
                      <div class="flex items-center">
                        <input
                          id="filter-mobile-category-0"
                          name="category[]"
                          value="new-arrivals"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-category-0"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                          >New Arrivals</label
                        >
                      </div>
                      <div class="flex items-center">
                        <input
                          id="filter-mobile-category-1"
                          name="category[]"
                          value="sale"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-category-1"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                          >Sale</label
                        >
                      </div>
                      <div class="flex items-center">
                        <input
                          id="filter-mobile-category-2"
                          name="category[]"
                          value="travel"
                          type="checkbox"
                          checked
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-category-2"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                          >Travel</label
                        >
                      </div>
                      <div class="flex items-center">
                        <input
                          id="filter-mobile-category-3"
                          name="category[]"
                          value="organization"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-category-3"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                          >Organization</label
                        >
                      </div>
                      <div class="flex items-center">
                        <input
                          id="filter-mobile-category-4"
                          name="category[]"
                          value="accessories"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-category-4"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                          >Accessories</label
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="border-t border-gray-200 px-4 py-6">
                  <h3 class="-mx-2 -my-3 flow-root">
                    <button
                      type="button"
                      class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                      aria-controls="filter-section-mobile-2"
                      aria-expanded="false"
                    >
                      <span class="font-medium text-gray-900">Size</span>
                      <span class="ml-6 flex items-center">
                        <svg
                          class="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          data-slot="icon"
                        >
                          <path
                            d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"
                          />
                        </svg>
                        <svg
                          class="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          data-slot="icon"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div class="pt-6" id="filter-section-mobile-2">
                    <div class="space-y-6">
                      <div class="flex items-center">
                        <input
                          id="filter-mobile-size-0"
                          name="size[]"
                          value="2l"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-size-0"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                          >2L</label
                        >
                      </div>
                      <div class="flex items-center">
                        <input
                          id="filter-mobile-size-1"
                          name="size[]"
                          value="6l"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-size-1"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                          >6L</label
                        >
                      </div>
                      <div class="flex items-center">
                        <input
                          id="filter-mobile-size-2"
                          name="size[]"
                          value="12l"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-size-2"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                          >12L</label
                        >
                      </div>
                      <div class="flex items-center">
                        <input
                          id="filter-mobile-size-3"
                          name="size[]"
                          value="18l"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-size-3"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                          >18L</label
                        >
                      </div>
                      <div class="flex items-center">
                        <input
                          id="filter-mobile-size-4"
                          name="size[]"
                          value="20l"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-size-4"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                          >20L</label
                        >
                      </div>
                      <div class="flex items-center">
                        <input
                          id="filter-mobile-size-5"
                          name="size[]"
                          value="40l"
                          type="checkbox"
                          checked
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-mobile-size-5"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
                          >40L</label
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div> -->
        </div>
  
        <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex items-baseline justify-between pt-8 pb-2">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900"></h1>
  
            <div class="flex items-center">
              <div class="relative inline-block text-left">
                <div>
                  <UDropdown :items="items" :popper="{ placement: 'bottom-start' }" :ui="{
                      item: { padding: 'py-2'}
                    }">
                    <UButton  color="transparent" label="Ordenar" trailing-icon="i-heroicons-chevron-down-20-solid" />
                  </UDropdown>
                  <!-- <button
                    type="button"
                    class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                    id="menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    Ordenar
                    <svg
                      class="-mr-1 ml-1 h-5 w-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button> -->
                </div>
  
                <!--
                Dropdown menu, show/hide based on menu state.
  
                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              -->
  
                <!-- <div
                  class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  <div class="py-1" role="none">
               
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm font-medium text-gray-900"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-0"
                      >Most Popular</a
                    >
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-500"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-1"
                      >Best Rating</a
                    >
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-500"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-2"
                      >Newest</a
                    >
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-500"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-3"
                      >Price: Low to High</a
                    >
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-500"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-4"
                      >Price: High to Low</a
                    >
                  </div>
                </div>
   -->
              </div>
  
              <UButton
               @click="isOpen = true"
                color="transparent"
                type="button"
                class="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span class="sr-only">Filters</span>
                <svg
                  class="h-5 w-5"
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  data-slot="icon"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 0 1 .628.74v2.288a2.25 2.25 0 0 1-.659 1.59l-4.682 4.683a2.25 2.25 0 0 0-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 0 1 8 18.25v-5.757a2.25 2.25 0 0 0-.659-1.591L2.659 6.22A2.25 2.25 0 0 1 2 4.629V2.34a.75.75 0 0 1 .628-.74Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </UButton>
            </div>
          </div>
  
          <section aria-labelledby="products-heading" class="pb-8">
            <h2 id="products-heading" class="sr-only">Products</h2>
  
            <div class="flex gap-4">
              <!-- Filters -->
              <form class="basis-48 hidden lg:block shrink-0">
                <div class=" py-6">
           <UAccordion multiple :items="checkboxItems" :ui="{ item:{ color:'focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-slate-100' }, default: {class:'focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-slate-100 bg-transparent text-stone-900 hover:bg-stone-100 dark:bg-transparent dark:text-slate-300 dark:hover:bg-slate-900'}}">
             <template #categorias>
              <div class="py-2 pl-3" id="filter-section-1">
                    <div class="space-y-4">
                      <div class="flex items-center">
                        <input
                          id="filter-category-0"
                          name="category[]"
                          value="new-arrivals"
                          type="checkbox"
                          class="h-4 w-4 rounded border-slate-300  "
                        />
                        <label
                          for="filter-category-0"
                          class="ml-3 text-sm dark:text-slate-300"
                          >Camisetas</label
                        >
                      </div>
                      <div class="flex items-center">
                        <input
                          id="filter-category-1"
                          name="category[]"
                          value="sale"
                          type="checkbox"
                          class="h-4 w-4 rounded border-slate-300 "
                        />
                        <label
                          for="filter-category-1"
                          class="ml-3 text-sm dark:text-slate-300"
                          >T-shirts</label
                        >
                      </div>
                      <div class="flex items-center">
                        <input
                          id="filter-category-2"
                          name="category[]"
                          value="travel"
                          type="checkbox"
                          checked
                          class="h-4 w-4 rounded border-slate-300"
                        />
                        <label
                          for="filter-category-2"
                          class="ml-3 text-sm dark:text-slate-300"
                          >Pantalones</label
                        >
                      </div>
                      <div class="flex items-center">
                        <input
                          id="filter-category-3"
                          name="category[]"
                          value="organization"
                          type="checkbox"
                          class="h-4 w-4 rounded border-slate-300"
                        />
                        <label
                          for="filter-category-3"
                          class="ml-3 text-sm dark:text-slate-300 "
                          >Gorras</label
                        >
                      </div>
                      <div class="flex items-center">
                        <input
                          id="filter-category-4"
                          name="category[]"
                          value="accessories"
                          type="checkbox"
                          class="h-4 w-4 rounded border-slate-300"
                        />
                        <label
                          for="filter-category-4"
                          class="ml-3 text-sm dark:text-slate-300"
                          >Accesorios</label
                        >
                      </div>
                    </div>
                  </div>
            </template>
            <template #colores>
              <div class="py-2 pl-3" id="filter-section-1">
                    <div class="space-y-4">
                      <div class="flex items-center">
                        <input
                          id="filter-category-0"
                          name="category[]"
                          value="new-arrivals"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-category-0"
                          class="ml-3 text-sm dark:text-slate-300"
                          >Negro</label
                        >
                      </div>
                      <div class="flex items-center">
                        <input
                          id="filter-category-1"
                          name="category[]"
                          value="sale"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-category-1"
                          class="ml-3 text-sm dark:text-slate-300"
                          >Blanco</label
                        >
                      </div>
                      <div class="flex items-center">
                        <input
                          id="filter-category-2"
                          name="category[]"
                          value="travel"
                          type="checkbox"
                          checked
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-category-2"
                          class="ml-3 text-sm dark:text-slate-300"
                          >Rojo</label
                        >
                      </div>
                      <div class="flex items-center">
                        <input
                          id="filter-category-3"
                          name="category[]"
                          value="organization"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-category-3"
                          class="ml-3 text-sm dark:text-slate-300"
                          >Amarillo</label
                        >
                      </div>
                      <div class="flex items-center">
                        <input
                          id="filter-category-4"
                          name="category[]"
                          value="accessories"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-category-4"
                          class="ml-3 text-sm dark:text-slate-300"
                          >Azul</label
                        >
                      </div>
                    </div>
                  </div>
            </template>
            <template #sizes>
              <div class="py-2 pl-3" id="filter-section-1">
                    <div class="space-y-4">
                      <div class="flex items-center ">
                        <input
                          id="filter-category-0"
                          name="category[]"
                          value="new-arrivals"
                          type="checkbox"
                          class=" h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-category-0"
                          class="ml-3 text-sm dark:text-slate-300"
                          >Extra Small</label
                        >
                      </div>
                      <div class="flex items-center">
                        <input
                          id="filter-category-1"
                          name="category[]"
                          value="sale"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-category-1"
                          class="ml-3 text-sm dark:text-slate-300"
                          >Small</label
                        >
                      </div>
                      <div class="flex items-center">
                        <input
                          id="filter-category-2"
                          name="category[]"
                          value="travel"
                          type="checkbox"
                          checked
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-category-2"
                          class="ml-3 text-sm dark:text-slate-300"
                          >Medium</label
                        >
                      </div>
                      <div class="flex items-center">
                        <input
                          id="filter-category-3"
                          name="category[]"
                          value="organization"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-category-3"
                          class="ml-3 text-sm dark:text-slate-300"
                          >Large</label
                        >
                      </div>
                      <div class="flex items-center">
                        <input
                          id="filter-category-4"
                          name="category[]"
                          value="accessories"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-category-4"
                          class="ml-3 text-sm dark:text-slate-300"
                          >Extra Large</label
                        >
                      </div>
                    </div>
                  </div>
            </template>
          </UAccordion>
          </div>
          </form>
              <!-- Product grid -->
              <div
                class="grow xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid gl:grid-cols-5 grid-rows-3 gap-1"
              >
               <CardProduct></CardProduct>
               <CardProduct></CardProduct>
               <CardProduct></CardProduct>
               <CardProduct></CardProduct>
               <CardProduct></CardProduct>
               <CardProduct></CardProduct>
               <CardProduct></CardProduct>
               <CardProduct></CardProduct>
               <CardProduct></CardProduct>
              </div>
            </div>
          </section>
        </main>
      </div>
      
    </div>
    <div>

    <USlideover v-model="isOpen">
      <div>

        <UButton
        color="gray"
        variant="ghost"
        size="sm"
        icon="i-heroicons-x-mark-20-solid"
        class="flex sm:hidden absolute end-5 top-5 z-10"
        square
        padded
        @click="isOpen = false"
        />
        <div class="h-full p-10" >
          <p class="text-lg font-semibold mb-2">Filtros</p>
          <UAccordion default-open
          multiple :items="checkboxItems" :ui="{ item:{ color:'focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-slate-100' }, default: {class:'focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-slate-100 bg-transparent text-stone-900 hover:bg-stone-100 dark:bg-transparent dark:text-slate-300 dark:hover:bg-slate-900'}}">
             <template #categorias>
              <div class="py-2 pl-3" id="filter-section-1">
                    <div class="space-y-4">
                      <div class="flex items-center">
                        <input
                          id="filter-category-0"
                          name="category[]"
                          value="new-arrivals"
                          type="checkbox"
                          class="h-4 w-4 rounded border-slate-300  "
                        />
                        <label
                          for="filter-category-0"
                          class="ml-3 text-sm dark:text-slate-300"
                          >Camisetas</label
                        >
                      </div>
                      <div class="flex items-center">
                        <input
                          id="filter-category-1"
                          name="category[]"
                          value="sale"
                          type="checkbox"
                          class="h-4 w-4 rounded border-slate-300 "
                        />
                        <label
                          for="filter-category-1"
                          class="ml-3 text-sm dark:text-slate-300"
                          >T-shirts</label
                        >
                      </div>
                      <div class="flex items-center">
                        <input
                          id="filter-category-2"
                          name="category[]"
                          value="travel"
                          type="checkbox"
                          checked
                          class="h-4 w-4 rounded border-slate-300"
                        />
                        <label
                          for="filter-category-2"
                          class="ml-3 text-sm dark:text-slate-300"
                          >Pantalones</label
                        >
                      </div>
                      <div class="flex items-center">
                        <input
                          id="filter-category-3"
                          name="category[]"
                          value="organization"
                          type="checkbox"
                          class="h-4 w-4 rounded border-slate-300"
                        />
                        <label
                          for="filter-category-3"
                          class="ml-3 text-sm dark:text-slate-300 "
                          >Gorras</label
                        >
                      </div>
                      <div class="flex items-center">
                        <input
                          id="filter-category-4"
                          name="category[]"
                          value="accessories"
                          type="checkbox"
                          class="h-4 w-4 rounded border-slate-300"
                        />
                        <label
                          for="filter-category-4"
                          class="ml-3 text-sm dark:text-slate-300"
                          >Accesorios</label
                        >
                      </div>
                    </div>
                  </div>
            </template>
            <template #colores>
              <div class="py-2 pl-3" id="filter-section-1">
                    <div class="space-y-4">
                      <div class="flex items-center">
                        <input
                          id="filter-category-0"
                          name="category[]"
                          value="new-arrivals"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-category-0"
                          class="ml-3 text-sm dark:text-slate-300"
                          >Negro</label
                        >
                      </div>
                      <div class="flex items-center">
                        <input
                          id="filter-category-1"
                          name="category[]"
                          value="sale"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-category-1"
                          class="ml-3 text-sm dark:text-slate-300"
                          >Blanco</label
                        >
                      </div>
                      <div class="flex items-center">
                        <input
                          id="filter-category-2"
                          name="category[]"
                          value="travel"
                          type="checkbox"
                          checked
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-category-2"
                          class="ml-3 text-sm dark:text-slate-300"
                          >Rojo</label
                        >
                      </div>
                      <div class="flex items-center">
                        <input
                          id="filter-category-3"
                          name="category[]"
                          value="organization"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-category-3"
                          class="ml-3 text-sm dark:text-slate-300"
                          >Amarillo</label
                        >
                      </div>
                      <div class="flex items-center">
                        <input
                          id="filter-category-4"
                          name="category[]"
                          value="accessories"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-category-4"
                          class="ml-3 text-sm dark:text-slate-300"
                          >Azul</label
                        >
                      </div>
                    </div>
                  </div>
            </template>
            <template #sizes>
              <div class="py-2 pl-3" id="filter-section-1">
                    <div class="space-y-4">
                      <div class="flex items-center ">
                        <input
                          id="filter-category-0"
                          name="category[]"
                          value="new-arrivals"
                          type="checkbox"
                          class=" h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-category-0"
                          class="ml-3 text-sm dark:text-slate-300"
                          >Extra Small</label
                        >
                      </div>
                      <div class="flex items-center">
                        <input
                          id="filter-category-1"
                          name="category[]"
                          value="sale"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-category-1"
                          class="ml-3 text-sm dark:text-slate-300"
                          >Small</label
                        >
                      </div>
                      <div class="flex items-center">
                        <input
                          id="filter-category-2"
                          name="category[]"
                          value="travel"
                          type="checkbox"
                          checked
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-category-2"
                          class="ml-3 text-sm dark:text-slate-300"
                          >Medium</label
                        >
                      </div>
                      <div class="flex items-center">
                        <input
                          id="filter-category-3"
                          name="category[]"
                          value="organization"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-category-3"
                          class="ml-3 text-sm dark:text-slate-300"
                          >Large</label
                        >
                      </div>
                      <div class="flex items-center">
                        <input
                          id="filter-category-4"
                          name="category[]"
                          value="accessories"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          for="filter-category-4"
                          class="ml-3 text-sm dark:text-slate-300"
                          >Extra Large</label
                        >
                      </div>
                    </div>
                  </div>
            </template>
          </UAccordion>
        </div>
      </div>
    
    </USlideover>
  </div>
   
  </template>
  
  <script setup lang="ts">
  useSeoMeta({
    title: "Tejada Shop | Tienda",
  });
  definePageMeta({ layout: "default" });

  const items = [
  [{
    label: 'Más recientes',
  }, {
    label: 'Precio: de menor a mayor',
  },
  {
    label: 'Precio: de mayor a menor',
  }]
]

const checkboxItems = [{
  label: 'Categorías',
  slot: 'categorias'
},{
  label: 'Colores',
  slot: 'colores'
},{
  label: 'Sizes',
  slot: 'sizes'
},]

  const isOpen = ref(false)

  </script>
  
  <style scoped></style>
  