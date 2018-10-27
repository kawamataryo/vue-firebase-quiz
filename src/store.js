import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    adminStatusKey: "VGfkzAca9pvaCm94CVyz",
    questions: [
      {
        problem: "広島愛にあふれるフジタくん。そんなフジタくんの広島愛を表すエピソードとは？",
        answers: [
          "どこでも「それいけカープ」を大熱唱する",
          "部屋にもみじ饅頭を常備している",
          "タコを見つけると「三原はタコが有名じゃけ！」と必ず言う",
          " 部屋のBGMはいつもポルノグラフティ"
        ],
        correctAnswer: 3,
        nextQuestion: 1,
      },
      {
        problem: " とっても友達思いなフジタくん。そんなフジタくんが大学の友人にやって上げたこととは？",
        questionImage: "",
        answers: [
          "バイト明けの友達のためにご飯を作ってあげた。",
          "出席できなかった授業に変わりに出席してあげた。",
          "恋の悩みを聞いてくれた",
          "友人の鼻毛をカットしてあげた"
        ],
        correctAnswer: 0,
        answerImage: "",
        nextQuestion: 2,
      },
      {
        problem: "ユーモアあふれるフジタくん。大学自体の旅行で取らなかったでとらなかった行動は？",
        questionImage: "",
        answers: [
          "厳島神社で、参拝時に気功砲を放った",
          "石垣島で皆が釣りをしているなか一人素潜りで漁をした",
          "カチカチ山で 悪だぬきを成敗した",
          "宮島で鹿のものまねをした"
        ],
        correctAnswer: 1,
        answerImage: "",
        nextQuestion: 3,
      },
      {
        problem: "意外性あふれるフジタくん。この後フジタくんは何をした？？",
        questionImage: "@/assets/futta-faceup1.JPG",
        answers: [
          "答え1",
          "答え2",
          "答え3",
          "答え4"
        ],
        correctAnswer: 3,
        answerImage: "",
        nextQuestion: 4,
      },
      {
        problem: "愛を貫くフジタくん。プロポーズの言葉は何だったでしょうか？",
        questionImage: "",
        answers: [
          "寿司屋で「三原のタコの吸盤のように俺はお前を離さない」",
          "黄金山の頂上で「結婚しようや」",
          "マツダスタジアムで「カープよりお前が好きじゃけ」",
          " 向島の漁船の光の下で「一緒に生きよう」",
        ],
        correctAnswer: 3,
        answerImage: "",
        nextQuestion: null,
      }
    ],
    score: 0,
    tableNumber: 0,
  },
  mutations: {
    addScore(state, payload) {
      state.score += payload
    },
    initScore(state) {
      state.score = 0
    },
    setTable(state, payload) {
      state.tableNumber = payload
    }
  },
  actions: {}
})
