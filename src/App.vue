<template>
  <v-app>
    <!--<v-system-bar-->
        <!--color="red"-->
        <!--fixed-->
        <!--height="10"-->
    <!--&gt;</v-system-bar>-->
    <v-container class="mb-5" grid-list-md>
      <router-view/>
    </v-container>
    <!--<v-footer-->
        <!--color="red"-->
        <!--fixed-->
        <!--height="10"-->
    <!--&gt;</v-footer>-->
  </v-app>
</template>

<style lang="scss">
  body {
    background-image: url("assets/repeat.png");
    background-repeat: repeat;
    text-align: center;
  }

  .theme--light.application {
    background-color: transparent !important;
  }

  .v-footer {
    min-height: 5px;
  }

  .v-btn--large {
    height: 65px;
    font-size: 1.1rem;
    padding: 0 10px;
    .v-btn__content {
      white-space: inherit;
    }
  }
</style>
