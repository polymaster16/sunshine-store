<template>
    <nav class="flex items-center justify-between flex-wrap bg-yellow-50 p-3 shadow-lg">
        <div class="flex items-center flex-shrink-0 text-yellow-600 mr-6 ">
          <img
          class="object-cover h-20 w-20 rounded-full ml-2 mr-4"
          src="https://hyczxbizyvhpfijbzvua.supabase.co/storage/v1/object/public/aseimc-bucket/public/sunshineLogo.jpeg">
            <span class="font-semibold text-2xl tracking-tight">S U N S H I N E </span>
        </div>
        <div
        v-on:click="handleClick()"  class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div v-if="hideMenu"
        class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div  
          class="text-sm lg:flex-grow">
            <router-link to='/' class="rl">
              Acceuil
            </router-link>
            <router-link to='/activities' class="rl">
              Activités
            </router-link>
            <router-link to="/blog" class="rl">
              Blog
            </router-link>
            <router-link to="/shop" class="rl">
              Produits
            </router-link>
          </div>
          <div>
            <route-link to="profile" class="mr-8 inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-purple-500 hover:bg-white mt-4 lg:mt-0">
              Se Connecter</route-link>
          </div>
        </div>
      </nav>
</template>

<script setup>
import { ref } from 'vue';
const hideMenu = ref(true);

const handleClick = () => {
hideMenu.value = !hideMenu.value;
//alert(hideMenu.value);
}

</script>

<style scoped>
.rl{
@apply 
block mt-4
 lg:inline-block
  lg:mt-0 text-yellow-800
   hover:text-white mr-4

}
</style>