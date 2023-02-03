<template>
    <div class="flex flex-cols justify-center mx-4">
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!">
            <img class="rounded-t-lg" :src="props.src" alt=""/>
          </a>
          <div class="p-6">
            <h5 class="text-gray-900 text-2xl font-bold mb-2">{{props.name}}</h5>

            <p class="text-gray-700 text-base mb-4">
              {{props.description}}
            </p>

            <p class="text-gray-700 text-base mb-4 font-semibold">
                {{props.price}} XAF/ unité
              </p>

            <button 
            v-on:click="biz"
            class=" 
            px-8 py-3.5 bg-red-400
             text-white 
             font-semibold
             text-md
             justify-center  
              leading-tight
              flex flex-row gap-4   
               uppercase rounded-xl
                shadow-md hover:bg-blue-700 
                hover:shadow-lg focus:bg-blue-700 
                focus:shadow-lg focus:outline-none 
                focus:ring-0 active:bg-blue-800 active:shadow-lg 
                transition duration-150 ease-in-out">
                <Icon 
                class="sont-semibold text-xl"
                icon="icon-park-twotone:buy"
                 /> Buy </button>
          </div>
        </div>
      </div>

</template>

<script setup>
import { defineProps } from 'vue';
import { Icon } from '@iconify/vue';
const props = defineProps(
  [
    'name','src','description', 'price','buy',
  ]
     )
 function biz(){
  alert("buy")
  window.location.href="https://my.mesomb.com/fr/web/payment/?widget=378"

 }

</script>