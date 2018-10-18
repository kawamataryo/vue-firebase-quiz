<template>
  <v-app>
    <v-layout
        column
        align-center
        justify-center
    >
      <v-container>
        <router-view/>
      </v-container>
    </v-layout>
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
