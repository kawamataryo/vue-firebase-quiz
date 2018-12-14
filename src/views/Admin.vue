<template>
  <div class="admin-view">
    <v-btn @click="WaitRelease()" color="primary">制御解除</v-btn>
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

<style scoped lang="scss">
  .admin-view {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      width: 80%;
      height: 15%;
      font-size: 2.1rem;
      font-weight: bold;
    }
  }

</style>