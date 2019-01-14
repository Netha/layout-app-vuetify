import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentData: [],
    componnetsList: ["wClock", "wDate"],
    layouts: [{
        name: 'layout1',
        layout: [{
          "x": 0,
          "y": 0,
          "w": 10,
          "h": 4,
          "i": "0",
          "componnet": ""
        }, {
          "x": 0,
          "y": 4,
          "w": 5,
          "h": 8,
          "i": "1",
          "componnet": ""
        }, {
          "x": 5,
          "y": 4,
          "w": 5,
          "h": 8,
          "i": "2",
          "componnet": ""
        }, {
          "x": 0,
          "y": 20,
          "w": 10,
          "h": 4,
          "i": "3",
          "componnet": ""
        }, {
          "x": 0,
          "y": 12,
          "w": 10,
          "h": 8,
          "i": "4",
          "componnet": ""
        }]
      },
      {
        name: 'layout2',
        layout: []
      }, {
        name: 'layout3',
        layout: []
      }, {
        name: 'layout4',
        layout: []
      }, {
        name: 'layout5',
        layout: []
      }, {
        name: 'layout6',
        layout: []
      },
    ]
  },
  mutations: {
    updateComponnets(state, obj) {
      // obj = src, des, componnetName

      // Check if source is empty
      if (this.state.currentData[obj.des].componnet) {
          // replacing state
          let sourceW = state.currentData[obj.des].componnet;
          let currentW = obj.componnetName;
          state.currentData[obj.des].componnet = currentW
          state.currentData[obj.src].componnet =  sourceW;
      } else {
        state.currentData[obj.des].componnet = obj.componnetName;
        // check if if from coponnent list
        obj.src ? state.currentData[obj.src].componnet = '' : false;
      }
    },
    chooseLayout(state, index) {
      state.currentData = state.layouts[index].layout
    },
    setData(state, arry) {
      state.currentData = arry
    }
  },
  getters: {
    getListComponnets(state) {      
      return state.componnetsList
    },
    getCurrentData(state) {
      return state.currentData
    },
    getLayouts(state){
      return state.layouts
    }
  },
  actions: {

  }
})