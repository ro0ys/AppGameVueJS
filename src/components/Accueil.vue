<template>
    <div>
      <img src="../assets/logo.png" /><br>
      <router-link :to="{ name: 'Memory' }" >Jeu du Memory (1 joueur)</router-link><br>
      <router-link :to="{ name: 'Pendu' }" >Jeu du Pendu (2 joueurs)</router-link>
  </div>
</template>
