<template>
 <TopBar/>
      <router-view/>
</template>

<script setup>
import '@/assets/tailwind.css'
import TopBar from "@/components/TopBar.vue"
import 'primevue/resources/themes/saga-blue/theme.css';   //theme
import 'primevue/resources/primevue.min.css';             //core css


</script>
