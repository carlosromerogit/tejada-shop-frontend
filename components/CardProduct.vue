<template>
  <UCard :ui="{ body: { padding: 'px-0 py-0 sm:p-0' } }">
    <div>
      <div class="flex justify-center aspect-[1/1] p-1 bg-white rounded-t-sm">
        <img
          src="https://m.media-amazon.com/images/I/71vZFqWN7VL._AC_SX679_.jpg"
          alt="none"
        />
      </div>
      <div class="bg-stone-200/50 dark:bg-slate-900 p-2">
        <div class="flex justify-between">
          <p class="">Tags</p>
          <Icon
            name="material-symbols-light:favorite-outline"
            class="hover:bg-red-500 cursor-pointer"
            :style="isDark ? 'color: white' : 'color: black'"
          ></Icon>
        </div>
        <p class="text-lg mb-2 font-thin">Nombre del producto</p>
        <div class="flex justify-between">
          <p class="text-xl font-bold">$400</p>
          <UButton
            class="bg-slate-800 dark:bg-slate-800 hover:bg-slate-700 dark:hover:bg-slate-700"
            icon="ic:baseline-add-shopping-cart"
            :style="isDark ? 'color: white' : 'color: white'"
          ></UButton>
        </div>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
const props = defineProps({ item: String });

const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>

<style scoped></style>
