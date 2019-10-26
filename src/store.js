import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export const initialState = {
  questions: [
    {
      problem: "大学時代、滋賀県にいながらも広島愛を押し出してきたエピソードとは？",
      answers: [
        "どこでも「それいけカープ」を大熱唱する",
        "タコを見ると必ず、「三原はタコが有名じゃけ！」と言う",
        "関西弁に全く染まらず、広島弁を押し通した ",
        "ドライブで必ず流すBGMはポルノグラフィティ "
      ],
      correctAnswer: 0,
      answerImages: [],
      answerMovieTag: "<iframe width='900' height='513' src='https://www.youtube.com/embed/2EYflBja9Gc?controls=0' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
      nextQuestion: 1,
    },
    {
      problem: "大学時代、苦労してた友人のためにフジタ君してあげたことは？",
      questionImage: "",
      answers: [
        "バイト明けの友達のためにご飯を作ってあげた。",
        "友達が出席できない授業を変わりに受けてあげた。 ",
        "恋の悩みを朝まで文句を言わずに聞いてくれた ",
        "体調を崩した友人に薬を届けてあげた"
      ],
      correctAnswer: 0,
      answerImages: [
        'https://firebasestorage.googleapis.com/v0/b/futta-marry.appspot.com/o/niku.jpg?alt=media&token=babed7bd-9a33-4fac-82c8-1813f4987fc6'
      ],
      answerMovieTag: "",
      nextQuestion: 2,
    },
    {
      problem: "大学時代、旅行中にフジタ君が取らなかった行動は？",
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
        'https://firebasestorage.googleapis.com/v0/b/futta-marry.appspot.com/o/kikou%20(2).JPG?alt=media&token=b8bb88fa-20ad-4365-9cc5-e4e0601d6817',
        'https://firebasestorage.googleapis.com/v0/b/futta-marry.appspot.com/o/shika%20(1).JPG?alt=media&token=3a34ce7b-b33d-4f9b-b922-074e2e536e3f',
        'https://firebasestorage.googleapis.com/v0/b/futta-marry.appspot.com/o/shika-tukky.JPG?alt=media&token=241faee7-fc5f-41f2-8808-7e6eae5966d0',
      ],
      answerMovieTag: "",
      nextQuestion: 3,
    },
    {
      problem: "ズバリこの後フジタ君は何をした？ ",
      questionImage: 'https://firebasestorage.googleapis.com/v0/b/futta-marry.appspot.com/o/IMG_0483%20(1).jpg?alt=media&token=94f3aee1-6aa9-4c7f-858d-e75f6d1ba21e',
      answers: [
        "日本酒を瓶毎一気飲みし始めた",
        "部屋中にファブリーズを噴射し踊った",
        "百面相を披露した",
        "カメラに向かって投げキッス",
      ],
      correctAnswer: 2,
      answerImages: [],
      answerMovieTag: "<iframe width='900' height='513' src='https://www.youtube.com/embed/_j4uw2m6Qgk?controls=0' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
      nextQuestion: 4,
    },
    {
      problem: "フジタ君のプロポーズの言葉はどれ？",
      questionImage: "",
      answers: [
        "高級寿司屋で「三原のタコの吸盤の様にお前を離さない」",
        "黄金山の夜景の下で「幸せにするけえ、おれと結婚してください」",
        "マツダスタジアムで「生涯をカープとゆかに捧げます」",
        "向島の怪しい漁船の光の下で「ずっと二人で一緒に生きていこう」",
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
  phoneImageUrl: "https://firebasestorage.googleapis.com/v0/b/marry-quiz.appspot.com/o/phone-mock1.png?alt=media&token=9d3856ab-745b-4645-a9bd-34c0cb8a1d8f"

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
  actions: {}
})
