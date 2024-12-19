<template>
  <div
    class="sticky top-0 z-50 w-full border-b border-border/40 dark:border-slate-900 bg-stone-100/95 dark:bg-slate-950 backdrop-blur supports-[backdrop-filter]:bg-stone-100/60 dark:border-border shadow"
  >
    <div class="flex justify-between items-center py-4 px-9">
      <div class="flex items-center">
        <span
          class="text-4xl font-semibold text-stone-900 dark:text-slate-200 cursor-pointer"
          >𝕿𝖊𝖏𝖆𝖉𝖆</span
        >
      </div>

      <div
        class="hidden sm:flex space-x-1 ml-2 text-stone-800 dark:text-slate-300"
      >
        <UButton
          to="/"
          class="font-semibold hover:shadow-lg hover:shadow-stone-300 dark:hover:shadow-none hover:scale-110"
          color="transparent"
          >Inicio</UButton
        >
        <UButton
          to="/tienda"
          class="font-semibold hover:bg-transparent hover:shadow-lg hover:shadow-stone-300 dark:hover:shadow-none hover:scale-110"
          color="transparent"
          >Tienda</UButton
        >
        <!-- <div
            class="flex cursor-pointer items-center gap-1 rounded-md py-2 px-4 hover:shadow-lg hover:shadow-stone-200 hover:scale-110 transition-all"
          >
            <i class="pi pi-shop"></i>
            <span class="text-sm font-medium">Tienda</span>
          </div> -->
        <UButton
          to="/favoritos"
          class="font-semibold hover:bg-transparent hover:shadow-lg hover:shadow-stone-300 dark:hover:shadow-none hover:scale-110"
          color="transparent"
          >Favoritos</UButton
        >

        <!-- <div
            class="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:shadow-lg hover:shadow-stone-200 hover:scale-110 transition-all"
          >
            <div class="relative">
              <i class="pi pi-heart"></i>
            </div>
            <span class="text-sm font-medium">Favoritos</span>
          </div> -->
        <UButton
          class="font-semibold hover:bg-transparent hover:shadow-lg hover:shadow-stone-300 dark:hover:shadow-none hover:scale-110"
          color="transparent"
          >Contacto</UButton
        >

        <!-- <div
            class="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:shadow-lg hover:shadow-stone-200 hover:scale-110 transition-all"
          >
            <div class="relative">
              <i class="pi pi-shopping-cart"></i>
            </div>
            <span class="text-sm font-medium">Carrito</span>
          </div> -->
        <UButton
          class="font-semibold hover:bg-transparent hover:shadow-lg hover:shadow-stone-300 dark:hover:shadow-none hover:scale-110"
          color="transparent"
          >Iniciar sesión</UButton
        >
        <UDropdown :items="dropdownItems" :ui="{ item: { disabled: 'cursor-text select-text' } }" :popper="{ placement: 'bottom-start' }">
    <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" />

    <template #account="{ item }">
      <div class="text-left">
        <p>
         Iniciaste sesión como
        </p>
        <p class="truncate font-medium text-gray-900 dark:text-white">
          {{ item.label }}
        </p>
      </div>
    </template>

    <template #item="{ item }">
      <span class="truncate">{{ item.label }}</span>

      <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
    </template>
  </UDropdown>

        <ClientOnly>
          <UButton
            :icon="
              isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
            "
            color="gray"
            variant="ghost"
            aria-label="Theme"
            class="hover:bg-stone-200 dark:hover:bg-slate-900"
            @click="isDark = !isDark"
          />
          <template #fallback>
            <div class="w-8 h-8" />
          </template>
        </ClientOnly>
        <!-- <div
            class="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:shadow-lg hover:shadow-stone-200 hover:scale-110 transition-all"
          >
            <span class="text-sm font-medium">Iniciar sesión</span>
          </div> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
const dropdownItems = [
  [{
    label: 'ben@example.com',
    slot: 'account',
    disabled: true
  }], [{
    label: 'Cuenta',
    icon: 'i-heroicons-cog-8-tooth'
  }], [{
    label: 'Órdenes',
    icon: 'material-symbols-light:orders-outline'
  }, {
    label: 'Favoritos',
    icon: 'material-symbols-light:favorite-outline'
  }], [{
    label: 'Cerrar sesión',
    icon: 'i-heroicons-arrow-left-on-rectangle'
  }]
]

</script>

<style scoped></style>
