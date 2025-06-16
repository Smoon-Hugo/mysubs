<script setup lang="ts">
const navLinks = [
  { name: 'Accueil', path: '/' },
  { name: 'Abonnements', path: '#' },
  { name: 'Statistiques', path: '#' },
]
</script>

<template>
  <nav class="bg-blue-500 shadow-sm px-6 py-4">
    <div class="max-w-7xl mx-auto flex items-center justify-between">

      <div class="flex items-center">
        <span class="text-white text-2xl font-bold">MySubs</span>
      </div>
      
      <!-- Navigation Links -->
      <div class="hidden md:flex space-x-8">
        <!-- Boucle v-for qui itère sur le tableau navLinks -->
        <NuxtLink 
          v-for="link in navLinks" 
          :key="link.name" 
          :to="link.path"
          class="text-white hover:text-blue-100 transition-colors duration-200"
        >
          {{ link.name }}
        </NuxtLink>
      </div>
      
      <!-- Auth Buttons -->
      <div class="flex items-center space-x-4">
        <button class="px-4 py-2 text-sm font-medium text-blue-600 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white">
          Connexion
        </button>
        
        <!-- Mobile Menu Button -->
        <button class="md:hidden text-white hover:text-blue-100 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>