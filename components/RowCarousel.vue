<script setup lang="ts">
const items = [
  "https://picsum.photos/600/800?random=1",
  "https://picsum.photos/600/800?random=2",
  "https://picsum.photos/600/800?random=3",
  "https://picsum.photos/600/800?random=4",
  "https://picsum.photos/600/800?random=5",
  "https://picsum.photos/600/800?random=6",
];
</script>

<template>
  <UCarousel
    v-slot="{ item }"
    :items="items"
    :ui="{ item: 'basis-full xs:basis-1/2 md:basis-1/3 lg:basis-1/5' }"
    :prev-button="{
      color: 'gray',
      icon: 'i-heroicons-arrow-left-20-solid',
      class: '-start-9',
    }"
    :next-button="{
      color: 'gray',
      icon: 'i-heroicons-arrow-right-20-solid',
      class: '-end-9',
    }"
    arrows
  >
    <div class="px-[2px] grow">
      <CardProduct :item="item" />
    </div>
  </UCarousel>
</template>
