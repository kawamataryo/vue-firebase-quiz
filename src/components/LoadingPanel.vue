<template>
  <div>
    <v-dialog v-model="aggregating">
      <v-progress-circular
          :size="50"
          color="primary"
          indeterminate
      ></v-progress-circular>
    </v-dialog>
  </div>
</template>

<script>

  export default {
    name: "LoadingPanel",
    props: [
      "aggregating"
    ],
  }
</script>

