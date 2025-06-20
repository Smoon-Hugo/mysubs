<script setup lang="ts">
const navLinks = [
  { name: 'Accueil', path: '/' },
  { name: 'Nos offres', path: '#' },
  { name: 'Qui sommes-nous ?', path: '#' },
  { name: 'Contact', path: '#' },
]
</script>

<template>
  <nav class="bg-white shadow-sm px-6 py-4">
    <div class="max-w-7xl mx-auto flex items-center">

      <!-- Logo décalé plus à droite -->
      <div class="flex-shrink-0 ml-10 sm:ml-16 md:ml-24 lg:ml-32 mr-auto">
        <span class="text-red-500 text-2xl font-bold italic">MYSUBS</span>
      </div>
      
      <!-- Navigation Links et Auth regroupés à droite -->
      <div class="flex items-center space-x-8">
        <!-- Boucle v-for qui itère sur le tableau navLinks -->
        <div class="hidden md:flex space-x-6">
          <NuxtLink 
            v-for="link in navLinks" 
            :key="link.name" 
            :to="link.path"
            class="text-red-500 hover:text-red-600 transition-colors duration-200"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
        
        <!-- Auth Buttons -->
        <div class="flex items-center">
          <button class="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-white">
            Connexion
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>