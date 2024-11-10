<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AspectRatio from "./ui/aspect-ratio/AspectRatio.vue";
</script>

<template>
  <Card class="">
    <CardHeader class="p-0">
      <AspectRatio :ratio="3 / 3">
        <div class="flex justify-center items-center h-full rounded-t p-1">
          <img
            class="h-full"
            src="https://m.media-amazon.com/images/I/71vZFqWN7VL._AC_SX679_.jpg"
            alt=""
          />
        </div>
      </AspectRatio>
    </CardHeader>
    <div class="bg-stone-100/50 pb-2">
      <CardContent class="px-3 py-2">
        <div class="flex justify-between">
          <span>Tags</span>
          <Icon
            name="material-symbols-light:favorite-outline"
            style="color: gray"
          ></Icon>
        </div>
        <CardTitle class="text-xl mb-2 font-thin">Product name</CardTitle>
      </CardContent>
      <CardFooter class="flex justify-between px-3 pb-2">
        <p class="text-3xl font-bold">$400</p>
        <Button>
          <Icon
            name="ic:baseline-add-shopping-cart"
            style="color: white"
            size="18px"
          ></Icon>
          Agregar
        </Button>
      </CardFooter>
    </div>
  </Card>
</template>
