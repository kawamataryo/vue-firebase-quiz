<template>
  <div>
    <v-btn @click="changeAggregating()">集計中解除</v-btn>
  </div>
</template>

<script>
  import {db} from '../plugins/firebase';

  export default {
    name: "Admin",
    data() {
      return {
        result: [],
      }
    },
    firestore() {
      return {
        result: db.collection('adminStatus')
      }
    },
    methods: {
      async changeAggregating() {
        console.log(this.result[0].id)
      },
    }
  }
</script>

<style scoped>

</style>