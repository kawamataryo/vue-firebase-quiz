<template>
  <div style="height: 100%; display: flex;align-items: center; justify-content: center; flex-direction: column">
    <v-btn @click="WaitRelease()" large color="primary" class="font-weight-bold title" style="font-size: 30px !important; width: 100%; height: 150px;">遷移制御解除</v-btn>
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
        // 0.1秒後falseの追加。次の遷移を制御するため。
        setTimeout(function () {
          db.collection('waitStatus').add({
            status: false,
            createdAt: new Date
          })
        }, 100)
      }
    }
  }
</script>

<style scoped>

</style>
