import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export const initialState = {
  questions: [
    {
      problem: "問題文1デモ問題文デモ問題文デモ問題文デモ問題文デモ問題文デモ",
      answers: [
        "答え1",
        "答え2",
        "答え3",
        "答え4"
      ],
      correctAnswer: 0,
      answerImages: [],
      answerMovieTag: "<iframe width='900' height='513' src='https://www.youtube.com/embed/9kRgVxULbag' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
      nextQuestion: 1,
    },
    {
      problem: "問題文2デモ問題文デモ問題文デモ問題文デモ問題文デモ問題文デモ",
      questionImage: "",
      answers: [
        "答え1",
        "答え2",
        "答え3",
        "答え4"
      ],
      correctAnswer: 0,
      answerImages: [
        'https://www.pakutaso.com/shared/img/thumb/TOMcatDSC01768_TP_V.jpg'
      ],
      answerMovieTag: "",
      nextQuestion: 2,
    },
    {
      problem: "問題文3デモ問題文デモ問題文デモ問題文デモ問題文デモ問題文デモ",
      questionImage: "",
      answers: [
        "答え1",
        "答え2",
        "答え3",
        "答え4"
      ],
      correctAnswer: 1,
      answerImages: [
        'https://www.pakutaso.com/shared/img/thumb/GREEN_YU20140125_TP_V.jpg',
        'https://www.pakutaso.com/shared/img/thumb/ookawaIMGL1724_TP_V.jpg',
        'https://www.pakutaso.com/shared/img/thumb/GREEN_YO20140125_TP_V.jpg',
      ],
      answerMovieTag: "",
      nextQuestion: 3,
    },
    {
      problem: "問題文4デモ問題文デモ問題文デモ問題文デモ問題文デモ問題文デモ",
      questionImage: 'https://www.pakutaso.com/shared/img/thumb/GREEN_YO20140125_TP_V.jpg',
      answers: [
        "答え1",
        "答え2",
        "答え3",
        "答え4"
      ],
      correctAnswer: 2,
      answerImages: [],
      answerMovieTag: "<iframe width='900' height='513' src='https://www.youtube.com/embed/z6hQqgvGI4Y' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
      nextQuestion: 4,
    },
    {
      problem: "問題文5デモ問題文デモ問題文デモ問題文デモ問題文デモ問題文デモ",
      questionImage: "",
      answers: [
        "答え1",
        "答え2",
        "答え3",
        "答え4"
      ],
      correctAnswer: 3,
      answerImages: [],
      answerMovieTag: "",
      nextQuestion: null,
    }
  ],
  // クイズの点数
  score: 0,
  // 選択したテーブル
  tableNumber: 0,
  // 画面遷移制御ユーザーかどうかの判定（true:遷移を制御）
  syncUser: true,
  // １問あたりの相談時間
  consultationTime: 15,
  // テレフォンで移す画像
  phoneImageUrl: "https://firebasestorage.googleapis.com/v0/b/futta-marry.appspot.com/o/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202018-12-14%2019.50.59.png?alt=media&token=1364f487-e6a3-4a06-8a58-31eac6a08179"

}

const mutations = {
  addScore(state, payload) {
    state.score += payload
  },
  initScore(state) {
    state.score = 0
  },
  setTable(state, payload) {
    state.tableNumber = payload
  },
  setSyncUser(state, payload) {
    state.syncUser = payload
  }
}

export default new Vuex.Store({
  state: initialState,
  mutations: mutations,
  actions: {},
  plugins: [createPersistedState()]
})
