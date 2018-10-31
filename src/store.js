import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export const initialState = {
  questions: [
    {
      problem: "広島愛にあふれるフジタくん。<br>そんなフジタくんの広島愛を表すエピソードとは？",
      answers: [
        "どこでも「それいけカープ」を大熱唱する",
        "部屋にもみじ饅頭を常備している",
        "タコを見つけると「三原はタコが有名じゃけ！」と必ず言う",
        " 部屋のBGMはいつもポルノグラフティ"
      ],
      correctAnswer: 0,
      answerImages: [],
      nextQuestion: 1,
    },
    {
      problem: " とっても友達思いなフジタくん。<br>そんなフジタくんが大学の友人にやって上げたこととは？",
      questionImage: "",
      answers: [
        "バイト明けの友達のためにご飯を作ってあげた。",
        "出席できなかった授業に変わりに出席してあげた。",
        "恋の悩みを聞いてくれた",
        "友人の鼻毛をカットしてあげた"
      ],
      correctAnswer: 0,
      answerImages: [
        'https://firebasestorage.googleapis.com/v0/b/futta-marry.appspot.com/o/niku.jpg?alt=media&token=babed7bd-9a33-4fac-82c8-1813f4987fc6'
      ],
      nextQuestion: 2,
    },
    {
      problem: "ユーモアあふれるフジタくん。<br>大学自体の旅行で取らなかったでとらなかった行動は？",
      questionImage: "",
      answers: [
        "厳島神社で、参拝時に気功砲を放った",
        "石垣島で皆が釣りする中、一人素潜りで漁をした",
        "カチカチ山で 悪だぬきを成敗した",
        "宮島で鹿のものまねをした",
      ],
      correctAnswer: 1,
      answerImages: [
        'https://firebasestorage.googleapis.com/v0/b/futta-marry.appspot.com/o/tanuki%20(1).jpg?alt=media&token=56bddf1e-f817-4f2b-bf08-800d05390de1',
        'https://firebasestorage.googleapis.com/v0/b/futta-marry.appspot.com/o/shika%20(1).JPG?alt=media&token=3a34ce7b-b33d-4f9b-b922-074e2e536e3f',
        'https://firebasestorage.googleapis.com/v0/b/futta-marry.appspot.com/o/kikou%20(2).JPG?alt=media&token=b8bb88fa-20ad-4365-9cc5-e4e0601d6817',
      ],
      nextQuestion: 3,
    },
    {
      problem: "意外性あふれるフジタくん。<br>この後フジタくんは何をした？？",
      questionImage: 'https://firebasestorage.googleapis.com/v0/b/futta-marry.appspot.com/o/humor0.jpg?alt=media&token=5e22711b-efa9-422a-aa60-b779844b4f0b',
      answers: [
        "答え1",
        "答え2",
        "答え3",
        "答え4",
      ],
      correctAnswer: 3,
      answerImages: [
        'https://firebasestorage.googleapis.com/v0/b/futta-marry.appspot.com/o/humor0.jpg?alt=media&token=5e22711b-efa9-422a-aa60-b779844b4f0b',
        'https://firebasestorage.googleapis.com/v0/b/futta-marry.appspot.com/o/humor1.jpg?alt=media&token=f6b6b9d0-b2ed-4367-bc5b-eeab155c46ba',
        'https://firebasestorage.googleapis.com/v0/b/futta-marry.appspot.com/o/humor2-c%20(1).jpg?alt=media&token=2cd2d86b-9f76-48d4-b632-5f91c5c0133f',
      ],
      nextQuestion: 4,
    },
    {
      problem: "愛を貫くフジタくん。<br>プロポーズの言葉は何だったでしょうか？",
      questionImage: "",
      answers: [
        "寿司屋で「三原のタコの吸盤のように俺はお前を離さない」",
        "黄金山の頂上で「結婚しようや」",
        "マツダスタジアムで「カープよりお前が好きじゃけ」",
        " 向島の漁船の光の下で「一緒に生きよう」",
      ],
      correctAnswer: 3,
      answerImages: [],
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
  consultationTime: 30
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
