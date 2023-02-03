<template>
    <FadeInOut :duration="500" mode="in-out">
      <div v-if="show">
        <div v-if="loading">
        <ProgressBar mode="indeterminate" style="height: .5em"
         class="bg-purple-500 mt-4"  />
        </div>
  
          <div class="blog ">
           <div 
            v-for="article in blog" v-bind:key="article.id">
            <ShopCard 
            :name="article.name"
             :src="article.imgPath"
             :description="article.description"
             :price="article.price"
             :buy="buy"
             />
              
           </div>
          </div>
      </div>
      </FadeInOut>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import ProgressBar from 'primevue/progressbar';
  import { supabase } from '../supabase.js';
import ShopCard from './ShopCard.vue';
  
  //import { FadeInOut } from 'vue3-transitions'
  
  const show = ref(false);
  
  const loading = ref(false)
  const blog = ref([])
  
 function buy(){
  alert("you want to purchase a product")
window.location.href="https://my.mesomb.com/fr/web/payment/?widget=378"

 }

  const getBlog = async () => {
      loading.value = true
      try {
        const { data, error } = await supabase.from('shop').select("*")
        blog.value = data
        console.log(JSON.stringify(data));
         loading.value = false
  
        throw error;
      } catch (error) {
        console.log(error);
      }
    };
  
    onMounted(() => {
      getBlog();
      show.value = true;
    console.log(`the component is now mounted.`)
  })
  
  
  </script>
  
  <style scope>
  .blog {
    @apply grid
     grid-cols-1 gap-4
     lg:grid-cols-4
     md:grid-cols-3
     p-4
     bg-yellow-50
  
  
  }
  </style>