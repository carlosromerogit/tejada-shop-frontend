<template>
  <div>
    <UForm ref="form" :schema="schema" :state="state" @submit="onSubmit" class="bg-stone-100 dark:bg-slate-900/80 p-4 rounded-md">
      <h2
        class="text-lg font-bold pb-4 mb-4 border-b border-stone-300 dark:border-slate-800"
      >
        Información básica
      </h2>
      <div class="flex">
        <div class="flex flex-col gap-8 basis-1/2 pr-10">
          <div class="flex flex-col gap-3">
            <UFormGroup label="Nombre" name="name">
              <UInput v-model="state.name" color="transparent"></UInput>
            </UFormGroup>
          </div>
          <div class="flex flex-col gap-3">
           <UFormGroup label="Número telefónico" name="phone">
             <UInput v-model="state.phone" color="transparent"></UInput>
            </UFormGroup>
          </div>
        </div>
        <div class="basis-1/2 pr-10">
          <div class="flex flex-col gap-3">
          <UFormGroup label="Apellido" name="lastname">
            <UInput v-model="state.lastname" color="transparent"></UInput>
          </UFormGroup>
          </div>
        </div>
      </div>
      <div class="py-4 max-w-[120px]">
        <UButton :loading="status === 'pending'" type="submit" label="Actualizar"></UButton>
      </div>

    </UForm>
  </div>
</template>

<script setup lang="ts">
import { z } from 'zod';
import type { Form, FormSubmitEvent } from '#ui/types';


const user = useStrapiUser();
const { update } = useStrapi();
const schema = z.object({
  name: z.string({message:'Requerido.'}),
  lastname: z.string({message:'Requerido.'}),
  phone: z.string({message:'Requerido.'})
});
const {data: profile } = await useAsyncData('updateUser', async ()=>{
  return  $fetch(`http://localhost:1337/api/users/${user.value.id}?populate=profile`)});

  console.log(profile.value?.profile)

const state = reactive<Schema>({
  name: profile.value?.profile.name,
  lastname: profile.value?.profile.lastname,
  phone: profile.value?.profile.phone
});

type Schema = z.output<typeof schema>

const form = ref<Form<Schema>>();



async function onSubmit (event: FormSubmitEvent<Schema>) {
  form.value!.clear();
  console.log(event.data);
}

useSeoMeta({
  title: "Tejada Shop | Cuenta",
});
definePageMeta({ layout: "account", middleware: "auth-user" });
</script>

<style scoped></style>
