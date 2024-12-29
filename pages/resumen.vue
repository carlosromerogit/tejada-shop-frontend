<script setup lang="ts">
definePageMeta({ layout: "default" });
</script>

<template>
  <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
    <div class="mb-5">
      <h1 class="text-2xl font-bold mb-1">Payment Successful</h1>
      <p>Thanks for making a purchase
                you can
                check our order summary frm below</p>
    </div>
    <section class="relative bg-stone-100 dark:bg-slate-900 rounded-md">
        <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
            
            <div class="main-box   rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full">
                <div
                    class="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6  ">
                    <div class="data">
                        <p class="font-semibold  leading-7 ">Order Id: <span class="text-indigo-600 font-medium">#10234987</span></p>
                        <p class="font-semibold  leading-7 mt-4">Order Payment : <span class=" font-medium"> 18th march
                            2021</span></p>
                    </div>
                   <UButton color="primary">Track Your Order</UButton>
                </div>
                <div class="w-full px-3 min-[400px]:px-6">
                    <div class="flex flex-col lg:flex-row items-center py-6  gap-6 w-full">
                        <div class="img-box max-lg:w-full">
                            <img src="https://pagedone.io/asset/uploads/1701167607.png" alt="Premium Watch image" 
                                class="aspect-square w-full lg:max-w-[140px] rounded-xl object-cover">
                        </div>
                        <div class="flex flex-row items-center w-full ">
                            <div class="grid grid-cols-1 lg:grid-cols-2 w-full">
                                <div class="flex items-center">
                                    <div class="">
                                        <h2 class="font-semibold  leading-8  mb-3">
                                            Premium Quality Dust Watch</h2>
                                        <p class="font-normal  leading-8  mb-3 ">
                                            By: Dust Studios</p>
                                        <div class="flex items-center ">
                                            <p
                                                class="font-medium leading-7  pr-4 mr-4 ">
                                                Size: <span class="">100 ml</span></p>
                                            <p class="font-medium leading-7  ">Qty: <span
                                                    class="">2</span></p>
                                        </div>
                                    </div>

                                </div>
                                <div class="grid grid-cols-5">
                                    <div class="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                                        <div class="flex gap-3 lg:block">
                                            <p class="font-medium leading-7 ">price</p>
                                            <p class="lg:mt-4 font-medium leading-7">$100</p>
                                        </div>
                                    </div>
                                    <div class="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3 ">
                                        <div class="flex gap-3 lg:block">
                                            <p class="font-medium leading-7 ">Status
                                            </p>
                                            <p
                                                class="font-medium leading-6 whitespace-nowrap py-0.5  rounded-full lg:mt-3 ">
                                                Ready for Delivery</p>
                                        </div>

                                    </div>
                                    <div class="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                                        <div class="flex gap-3 lg:block">
                                            <p class="font-medium whitespace-nowrap leading-6 ">
                                                Expected Delivery Time</p>
                                            <p class="font-medium whitespace-nowrap leading-7 lg:mt-3 text-emerald-500">
                                                23rd March 2021</p>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div class="flex flex-col lg:flex-row items-center py-6 gap-6 w-full">
                        <div class="img-box max-lg:w-full">
                            <img src="https://pagedone.io/asset/uploads/1701167621.png" alt="Diamond Watch image" 
                                class="aspect-square w-full lg:max-w-[140px] rounded-xl object-cover">
                        </div>
                        <div class="flex flex-row items-center w-full ">
                            <div class="grid grid-cols-1 lg:grid-cols-2 w-full">
                                <div class="flex items-center">
                                    <div class="">
                                        <h2 class="font-semibold leading-8  mb-3 ">
                                            Diamond Platinum Watch</h2>
                                        <p class="font-normal leading-8  mb-3">
                                            Diamond Dials</p>
                                        <div class="flex items-center  ">
                                            <p
                                                class="font-medium leading-7  pr-4 mr-4 ">
                                                Size: <span class="">Regular</span></p>
                                            <p class="font-medium leading-7  ">Qty: <span
                                                    class="">1</span></p>
                                        </div>
                                    </div>

                                </div>
                                <div class="grid grid-cols-5">
                                    <div class="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                                        <div class="flex gap-3 lg:block">
                                            <p class="font-medium leading-7 ">price</p>
                                            <p class="lg:mt-4 font-medium leading-7">$100</p>
                                        </div>
                                    </div>
                                    <div class="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3 ">
                                        <div class="flex gap-3 lg:block">
                                            <p class="font-medium leading-7 ">Status
                                            </p>
                                            <p
                                                class="font-medium leading-6 py-0.5 whitespace-nowrap rounded-full lg:mt-3  ">
                                                Dispatched</p>
                                        </div>

                                    </div>
                                    <div class="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                                        <div class="flex gap-3 lg:block">
                                            <p class="font-medium whitespace-nowrap leading-6 ">
                                                Expected Delivery Time</p>
                                            <p class="font-medium whitespace-nowrap leading-7 lg:mt-3 text-emerald-500">
                                                23rd March 2021</p>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
                <div class="w-full  px-6 flex flex-col lg:flex-row items-center justify-between ">
                    <div class="flex flex-col sm:flex-row items-center ">
                       <UButton color="transparent">Cancel Order</UButton>
                        <p class="font-medium pl-6 py-3 max-lg:text-center">Paid using Credit Card <span class="">ending with 8822</span></p>
                    </div>
                    <p class="font-semibold py-6">Total Price: <span class=""> $200.00</span></p>
                </div>

            </div>
        </div>
    </section>
                                            
  </main>
</template>
