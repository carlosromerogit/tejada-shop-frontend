<script setup lang="ts">
definePageMeta({ layout: "default" });

const columns = [
  {
    key: "image",
    label: "",
  },
  {
    key: "details",
    label: "Detalles",
  },
  {
    key: "price",
    label: "Precio",
  },
  {
    key: "quantity",
    label: "Cantidad",
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
      label: "Agregar a favoritos",
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
  <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
    <div class="mb-5">
      <h1 class="text-2xl font-bold mb-1">Carrito de compra</h1>
      <p class="text-slate-600 dark:text-slate-400">10 artículos en tu carrito</p>
    </div>
    <div class="mb-4">
      <UInput class="max-w-72" placeholder="Buscar..." color="transparent" />
    </div>
    <div class="flex flex-col md:flex-row gap-4 rounded-md">
  
       <div class="grow bg-stone-100 dark:bg-slate-900 rounded-md border dark:border dark:border-1 dark:border-slate-800  ">
           <UTable
             v-model="selected"
             :rows="people"
             :columns="columns"
             :ui="{ tr: { selected: 'bg-white dark:bg-gray-800/50' }, th: { size: 'text-md', color:'border-b border-1 border-stone-200 dark:border-slate-800 text-left rtl:text-right'}, checkbox:{color:'border-b border-1 border-slate-100'} }"
           >
             <template #image-data="{ row }">
               <div class="p-1 rounded-md bg-white max-w-24">
                 <img :src="row.image" width="100" />
               </div>
             </template>
             <template #details-data="{ row }">
               <p>Long Title</p>
               <p>Size</p>
             </template>
             <template #quantity-data="{row}">
                <div class="flex">
                  <div class="flex items-center gap-2 bg-stone-200/50 dark:bg-slate-800 rounded-md">
                    <UButton icon="ic:round-minus" size="xs" color="transparent" />
                    <UInput :ui="{base:'w-12', color: {transparent: { outline:'bg-stone-200/10 border-none border-1 border-stone-300 dark:border-none',},},}" color="transparent"></UInput>
                    <UButton icon="material-symbols:add-rounded" size="xs" color="transparent" />
                  </div>
                </div>
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
    
        <UCard :ui="{base:'basis-full md:basis-64 md:self-start ', background:'bg-stone-100 dark:bg-slate-900', header:{padding:'py-3'} } ">
            <template #header>
            <p class="text-lg font-semibold">Resumen</p>
            </template>

           <ul class="flex flex-col space-y-1">
            <li class="flex justify-between">
                <span>Subtotal</span>
                <span class="font-semibold">$50</span>
            </li>
            <li class="flex justify-between">
                <span>Descuento</span>
                <span class="font-semibold">$15</span>
            </li>
            <li class="flex justify-between">
                <span>Impuesto</span>
                <span class="font-semibold">$5</span>
            </li>
           </ul>

            <template #footer>
                <div class="flex justify-between mb-2 font-bold">
                    <span>Total</span>
                    <span>$111</span>
                </div>
                <UButton color="primary" block>Continuar</UButton>
            </template>
        </UCard>
</div>
  </main>
</template>
