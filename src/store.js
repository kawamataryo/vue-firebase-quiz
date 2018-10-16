import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: [
      {
        problem: "奇想天外な行動で僕らを楽しませてくれる藤田くん\nさて藤田くんが大学時代に実際にとってない行動とは？",
        answers: [
          "広島から滋賀まで原付で走った",
          "春のボーリング大会で震えていた",
          "すき家でカープを大熱唱",
          "びわこ大橋から飛び込んでみせた"
        ],
        correctAnswer: 3,
        nextQuestion: 1,
      },
      {
        problem: "いすゞのトラックの唄をいつも口ずさんでいる音楽が大好きな藤田くん\n彼が得意とする楽器は？",
        answers: [
          "ベース",
          "ゼファー（バイク）",
          "たぬきのお腹",
          "りょうの頭"
        ],
        correctAnswer: 0,
        nextQuestion: 2,
      },
      {
        problem: "大学時代三日三晩寝る間も惜しんで全力で生きていた藤田くん\n授業→ボーリング→カラオケ→バイト→テツマ→スマブラ→すき家\n※リピート×2\n\nそんな彼が証券会社勤務時に、遊び疲れて大声で発した寝言とは？",
        answers: [
          "カープカープ広島、広島カープ！",
          "ニキ、それ完全にロンやで！",
          "俺フードファイターじゃけ！",
          "よりつき！(右手上げながら)"
        ],
        correctAnswer: 3,
        nextQuestion: 3,
      },
      {
        problem: "人を愛し、人に愛された藤田くん。さて、この中で藤田くんが一番愛してる人は誰でしょう",
        answers: [
          "ツッキー",
          "ニキ",
          "ゆかちゃん",
          "月原知哉",
        ],
        correctAnswer: 2,
        nextQuestion: null,
      }
    ],
    score: 0
  },
  mutations: {
    addScore(state, payload) {
      state.score += payload
    },
    initScore(state) {
      state.score = 0
    }
  },
  actions: {}
})
