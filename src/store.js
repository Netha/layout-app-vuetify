import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentData: [],
    widgetsList: ["wClock", "wDate"], // Componnets list for cofiguration screen
    layouts: [{ // Layouts presets. name of the layout with the stracture.
        name: 'layout1',
        layout: [{
          "x": 0,
          "y": 0,
          "w": 10,
          "h": 4,
          "i": "0",
          "widget": ""
        }, {
          "x": 0,
          "y": 4,
          "w": 5,
          "h": 8,
          "i": "1",
          "widget": ""
        }, {
          "x": 5,
          "y": 4,
          "w": 5,
          "h": 8,
          "i": "2",
          "widget": ""
        }, {
          "x": 0,
          "y": 20,
          "w": 10,
          "h": 4,
          "i": "3",
          "widget": ""
        }, {
          "x": 0,
          "y": 12,
          "w": 10,
          "h": 8,
          "i": "4",
          "widget": ""
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
    updateWidgets(state, obj) {
      // obj:
      // src - widget source
      // des - widget destination 
      // componentName - widget name

      // Check destination exist 
      if (this.state.currentData[obj.des].widget) {
        // Replacing widgets 
        const sourceW = state.currentData[obj.des].widget;
        const currentW = obj.widgetName;
        state.currentData[obj.des].widget = currentW

        // in case is not replacing from component list
        if (obj.src) {
          state.currentData[obj.src].widget = sourceW;
        }

      } else {
        state.currentData[obj.des].widget = obj.widgetName;
        // Check if from component list
        obj.src ? state.currentData[obj.src].widget = '' : false;
      }
    },
    // Set layout in data
    chooseLayout(state, index) {
      state.currentData = state.layouts[index].layout
    },
    // Update data layout
    setData(state, arry) {
      state.currentData = arry
    }
  },
  getters: {
    // Get all widgets
    getListWidgets(state) {
      return state.widgetsList
    },
    // Get all data for vue-grid-layout
    getCurrentData(state) {
      return state.currentData
    },
    // Get all layouts
    getLayouts(state) {
      return state.layouts
    }
  }
})