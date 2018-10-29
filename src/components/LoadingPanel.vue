<template>
  <v-dialog
      v-model="dialog"
      persistent
      width="400"
  >
    <v-card
        color="white"
    >
      <v-card-text>
        <h2>集計中</h2>
        <p>回答が出揃うまでお待ちください。</p>
        <v-progress-linear
            indeterminate
            color="primary"
            class="mb-0"
        ></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>

  export default {
    name: "LoadingPanel",
    props: [
      "dialog"
    ],
  }
</script>

