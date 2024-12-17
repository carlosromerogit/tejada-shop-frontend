<script setup lang="ts">
const columns = [
  {
    key: "image",
    label: "",
  },
  {
    key: "name",
    label: "Producto",
  },
  {
    key: "price",
    label: "Precio",
  },
  {
    key: "status",
    label: "Estado",
  },

  {
    key: "actions",
  },
];

const people = [
  {
    id: 1,
    image: "https://m.media-amazon.com/images/I/71vZFqWN7VL._AC_SX679_.jpg",
    name: "Lindsay Walton",
    price: "300",
    status: "en stock",
  },
  {
    id: 2,
    image: "https://m.media-amazon.com/images/I/71vZFqWN7VL._AC_SX679_.jpg",
    name: "Courtney Henry",
    price: "300",
    status: "en stock",
  },
  {
    id: 3,
    image: "https://m.media-amazon.com/images/I/71vZFqWN7VL._AC_SX679_.jpg",
    name: "Tom Cook",
    price: "300",
    status: "en stock",
  },
];

const itemsMenu = (row: any) => [
  [
    {
      label: "Agregar al carrito",
      icon: "ic:baseline-add-shopping-cart",
      click: () => console.log("Edit", row.id),
    },
    {
      label: "Borrar",
      icon: "material-symbols:delete-outline",
      click: () => console.log("borrar", row.id),
    },
  ],
];

const selected = ref([people[1]]);

const page = ref(1)
const itemsPagination = ref(Array(14))
</script>

<template>
  <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
    <div class="mb-5">
      <h1 class="text-2xl font-bold mb-1">Tus artículos favoritos</h1>
      <p class="text-slate-600 dark:text-slate-400">10 artículos en tu lista</p>
    </div>
    <div class="mb-4">
      <UInput class="max-w-72" placeholder="Buscar..." color="transparent" />
    </div>
    <div class="bg-stone-100 dark:bg-slate-900 rounded-md">
      <UTable
        v-model="selected"
        :rows="people"
        :columns="columns"
        :ui="{ tr: { selected: 'bg-white dark:bg-gray-800/50' } }"
      >
        <template #image-data="{ row }">
          <div class="p-1 rounded-md bg-white max-w-24">
            <img :src="row.image" width="100" />
          </div>
        </template>
        <template #name-data="{ row }">
          <span>{{ row.name }}</span>
        </template>

        <template #actions-data="{ row }">
          <UDropdown :items="itemsMenu(row)">
            <UButton
              class="text-stone-800 dark:text-slate-100 hover:bg-stone-200 dark:hover:bg-slate-800"
              color="transparent"
              icon="i-heroicons-ellipsis-horizontal-20-solid"
            />
          </UDropdown>
        </template>
      </UTable>
    </div>
    <div class="mt-2 flex justify-end">
      <UPagination v-model="page" :page-count="5" :total="itemsPagination.length" />
    </div>
  </main>
</template>
