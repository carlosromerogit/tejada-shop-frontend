<template>
  <UCard :ui="{ body: { padding: 'px-0 py-0 sm:p-0' } }">
    <div class="flex overflow-hidden">
      <div class="p-1 size-36 aspect-[1/1] flex justify-center">
        <img
          class="h-full"
          src="https://m.media-amazon.com/images/I/71vZFqWN7VL._AC_SX679_.jpg"
        />
      </div>
      <div class="bg-stone-200/50 dark:bg-slate-900 p- grow">
        <div class="px-3 py-2">
          <div class="flex justify-between">
            <span>Tags</span>
            <Icon
              name="material-symbols-light:favorite-outline"
              style="color: gray"
            ></Icon>
          </div>
          <h3 class="text-lg mb-2 font-thin">Nombre del producto</h3>
        </div>
        <div class="flex justify-between px-3 pb-2">
          <p class="text-xl font-bold">$400</p>
          <UButton
            class="bg-slate-800 dark:bg-slate-800 hover:bg-slate-700 dark:hover:bg-slate-700"
            icon="ic:baseline-add-shopping-cart"
            size="sm"
            variant="solid"
            :style="isDark ? 'color: white' : 'color: white'"
            :trailing="false"
          />
        </div>
      </div>
    </div>
  </UCard>
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
</script>
