<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
</script>

<template>
  <Card class="flex items-center">
    <CardHeader class="p-1">
      <div class="flex justify-center items-center size-40 rounded-t p-1">
        <img
          class="h-full"
          src="https://m.media-amazon.com/images/I/71vZFqWN7VL._AC_SX679_.jpg"
          alt=""
        />
      </div>
    </CardHeader>
    <div class="py-2 grow">
      <CardContent class="p-0">
        <CardTitle class="mb-2">Product name</CardTitle>
        <CardDescription class="mb-1">Description...</CardDescription>
        <p class="text-xl mb-2">$400</p>
      </CardContent>
      <CardFooter class="flex justify-between p-0">
        <Button>
          <Icon
            name="ic:baseline-add-shopping-cart"
            style="color: white"
            size="18px"
          ></Icon>
          Agregar al carrito
        </Button>
      </CardFooter>
    </div>
  </Card>
</template>
