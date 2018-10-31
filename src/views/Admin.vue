<template>
  <div>
    <v-btn @click="WaitRelease()">遷移制御解除</v-btn>
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
        result: db.collection('waitStatus')
      }
    },
    methods: {
      WaitRelease: function () {
        // trueの追加
        db.collection('waitStatus').add({
          status: true,
          createdAt: new Date
        })
        // 1秒後falseの追加。次の遷移を制御するため。
        setTimeout(function () {
          db.collection('waitStatus').add({
            status: false,
            createdAt: new Date
          })
        }, 1000)
      }
    }
  }
</script>

<style scoped>

</style>