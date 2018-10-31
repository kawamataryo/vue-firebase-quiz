<template>
  <div>
    <h1>テーブル選択</h1>
    <p>招待状を元に自分たちのテーブルを選択して下さい</p>
    <v-img
        max-width="100px"
        :src="require('../assets/brideAndGroom.png')"
        @click="setTableAndToQuestion(0)"
        style="margin: auto; cursor: pointer;"
        class="mb-3"
    ></v-img>
    <v-layout row wrap>
      <v-flex v-for="i in 16" :key="`${i}`" xs3>
        <v-btn fab large @click="setTableAndToQuestion(i)">
          {{i}}番
        </v-btn>
      </v-flex>
    </v-layout>
    <!--集計中ダイアログ-->
    <loading-panel
        :dialog="aggregatingIcon"
        comment="皆様の選択が完了するまでこのままお待ち下さい。"
    ></loading-panel>
  </div>
</template>

<script>
  import {db} from '../plugins/firebase'
  import LoadingPanel from '../components/LoadingPanel'

  export default {
    name: "selecttable",
    components: {
      loadingPanel: LoadingPanel,
    },
    data() {
      return {
        aggregating: [],
        aggregatingIcon: false,
      }
    },
    methods: {
      setTableAndToQuestion: function (number) {
        this.$store.commit('setTable', number)
        if (number == 0) {
          this.$store.commit('setSyncUser', false)
          this.$router.push("/question/0")
        } else {
          this.aggregatingIcon = true
          this.$store.commit('setSyncUser', true)
        }
      }
    },
    firestore() {
      return {
        aggregating: db.collection('adminStatus').limit(1),
      }
    },
    watch: {
      // 画面遷移制御のユーザーはfirebaseのレコード編集をトリガーに画面遷移を実行
      aggregating: function () {
        if (this.aggregatingIcon) {
          this.$router.push(
              {path: `/question/0`})
        }
      }
    }
  };
</script>