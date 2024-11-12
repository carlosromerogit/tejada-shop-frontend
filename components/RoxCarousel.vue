<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
</script>

<template>
  <Carousel
    class="relative w-full"
    :opts="{
      align: 'start',
    }"
  >
    <CarouselContent class="-ml-0">
      <CarouselItem
        v-for="(_, index) in 5"
        :key="index"
        class="basis-full xs:basis-1/2 md:basis-1/3 lg:basis-1/5 pl-0"
      >
        <div class="p-1">
          <ProductCard></ProductCard>
          <!-- <Card>
            <CardContent
              class="flex aspect-square items-center justify-center p-6"
            >
              <span class="text-3xl font-semibold">{{ index + 1 }}</span>
            </CardContent>
          </Card> -->
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</template>
