<template>
  <v-app>
    <v-system-bar
        color="red"
        fixed
        height="10"
    ></v-system-bar>
    <v-container class="mb-5">
      <router-view/>
    </v-container>
    <v-footer
        color="red"
        fixed
        height="10"
    ></v-footer>
  </v-app>
</template>

<style>
  body {
    background-image: url("assets/repeat.png");
    background-repeat: repeat;
    text-align: center;
  }

  .theme--light.application {
    background-color: transparent !important;
  }

  .v-btn--large {
    font-size: 1.3rem;
    heigt: 60px;
  }

  .v-footer {
    min-height: 5px;
  }
</style>
