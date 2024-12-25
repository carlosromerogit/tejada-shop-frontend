<template>
    <div>
        <div class="bg-stone-200 dark:bg-slate-950">
    <div class="flex min-h-[80vh] flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="text-center sm:mx-auto sm:w-full sm:max-w-md">
            <h1 class="text-3xl font-extrabold text-slate-900 dark:text-white">
                Registro
            </h1>
        </div>
        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white dark:bg-slate-900 px-4 pb-4 pt-8 sm:rounded-lg sm:px-10 sm:pb-6 sm:shadow">
                <form class="space-y-6">
                    <div>
                        <label for="email" class="block text-sm font-medium text-slate-700 dark:text-white">Email</label>
                            <UInput color="transparent" />
                    </div>
                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-700 dark:text-white">Contraseña</label>
                        <UInput color="transparent" />
                    </div>
                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-700 dark:text-white">Confirmar contraseña</label>
                        <UInput color="transparent" />
                    </div>
                    
                    <div>
                        <UButton block color="primary">Registrarse</UButton>
                    </div>
                </form>
                <div class="mt-6">
                    <div class="relative">
                        <div class="absolute inset-0 flex items-center">
                            <div class="w-full border-t border-slate-400"></div>
                        </div>
                        <div class="relative flex justify-center text-sm">
                            <span class="bg-white dark:bg-slate-900 px-2 text-slate-600 dark:text-white">O registrar con</span>
                        </div>
                    </div>
                    <div class="mt-6 grid grid-cols-2 gap-3">
                        <button
                            class="inline-flex w-full items-center justify-center rounded-md border border-slate-300 dark:border-none bg-white dark:bg-slate-800 px-4 py-2 text-sm font-medium text-slate-500 dark:text-white shadow-sm hover:bg-gray-50 dark:hover:bg-slate-700 disabled:cursor-wait disabled:opacity-50">
                            <span class="sr-only">Inicar con Google</span>
                            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <clipPath id="p.0">
                                    <path d="m0 0l20.0 0l0 20.0l-20.0 0l0 -20.0z" clip-rule="nonzero"></path>
                                </clipPath>
                                <g clip-path="url(#p.0)">
                                    <path fill="currentColor" fill-opacity="0.0" d="m0 0l20.0 0l0 20.0l-20.0 0z"
                                        fill-rule="evenodd"></path>
                                    <path fill="currentColor"
                                        d="m19.850197 8.270351c0.8574047 4.880001 -1.987587 9.65214 -6.6881847 11.218641c-4.700598 1.5665016 -9.83958 -0.5449295 -12.08104 -4.963685c-2.2414603 -4.4187555 -0.909603 -9.81259 3.1310139 -12.6801605c4.040616 -2.867571 9.571754 -2.3443127 13.002944 1.2301085l-2.8127813 2.7000687l0 0c-2.0935059 -2.1808972 -5.468274 -2.500158 -7.933616 -0.75053835c-2.4653416 1.74962 -3.277961 5.040613 -1.9103565 7.7366734c1.3676047 2.6960592 4.5031037 3.9843292 7.3711267 3.0285425c2.868022 -0.95578575 4.6038647 -3.8674583 4.0807285 -6.844941z"
                                        fill-rule="evenodd"></path>
                                    <path fill="currentColor" d="m10.000263 8.268785l9.847767 0l0 3.496233l-9.847767 0z"
                                        fill-rule="evenodd"></path>
                                </g>
                              </svg>
                        </button>
                        <button
                               class="inline-flex w-full justify-center rounded-md border border-slate-300 dark:border-none bg-white dark:bg-slate-800 px-4 py-2 text-sm font-medium text-slate-500 dark:text-white shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 disabled:cursor-wait disabled:opacity-50">
                              <span class="sr-only">Iniciar con GitHub</span>
                              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="#000000" width="800px" height="800px"
                                viewBox="0 0 32 32" version="1.1">
                                  <path
                                    d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.750 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z" />
                              </svg>

                        </button>
                       </div>
                 </div>
                    <div class="m-auto mt-6 w-fit md:mt-8">
                        <span class="m-auto dark:text-gray-400">Tienes una cuenta?<UButton color="transparent" class="hover:cursor-pointer">Ingresar a la cuenta</UButton>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
definePageMeta({
    layout:'guest'
})
const remember = ref(true)

</script>

<style scoped>

</style>