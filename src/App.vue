<template>
  <v-app>
    <v-container>
      <router-view/>
    </v-container>
  </v-app>
</template>

<style>
  body {
    background-image: url("assets/cover.gif");
    background-repeat: repeat;
    text-align: center;
  }
  .theme--light.application {
    background-color: transparent !important;
  }
</style>
