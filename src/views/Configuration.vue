<template>
    <v-container fluid>
        <v-layout row wrap>
            <!-- components list -->
            <v-flex xs2 class="sidebar">
                <h1>Components</h1>
                <hr>
                <ul>
                    <li v-for="(item, index, key) in widgetsList" :key="key"
                    v-bind:data-placeholder="null"
                    v-bind:data-wname="item"
                    v-draggable
                    @dragstart="handleDragStart">{{item}}</li>
                </ul>
            </v-flex>
            <!-- layout placeholders -->
            <v-flex xs10>
                <h1>Configuration screen</h1>
                <hr>
                <v-container>
                    <v-layout row wrap>
                        <v-flex xs12>
                            <grid-layout :layout.sync="layout" :col-num="12" :row-height="20" :is-draggable="layoutConfiguration.draggable"
                                :is-resizable="layoutConfiguration.resizable" :responsive="layoutConfiguration.responsive"
                                :use-css-transforms="true">

                                <grid-item v-for="(item, index, key) in layout" :key="key" v-bind:class="{'grid-item': item.widget == '' ? true : false}"
                                    :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i">

                                    <div class="drag-area" v-bind:class="{cursor: item.widget}" 
                                    v-bind:data-placeholder="index"
                                    v-bind:data-wname="item.widget"
                                    v-draggable
                                    @dragstart="handleDragStart"
                                    @drop="handleDrop">
                                        <div class="tools" v-show="item.widget" @click="item.widget = ''">
                                            <v-icon>delete_outline</v-icon>
                                        </div>
                                        <component v-bind:is="item.widget"></component>
                                    </div>

                                </grid-item>
                            </grid-layout>
                        </v-flex>

                    </v-layout>
                </v-container>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    /* eslint-disable */
    import VueGridLayout from 'vue-grid-layout';

    import wClock from '../components/w-clock.vue'
    import wDate from '../components/w-date.vue'

    export default {
        name: 'Configuration',
        components: {
            GridLayout: VueGridLayout.GridLayout,
            GridItem: VueGridLayout.GridItem,
            wClock,
            wDate
        },
        data() {
            return {
                currentlyDragging: null,
                currentlySource: null,
                currentlyDestination: null,
                layoutConfiguration: {
                    draggable: false,
                    resizable: false,
                    responsive: true,
                    index: 0
                }
            }
        },
        methods: {
            handleDragStart: function (e) {
                // getting the widget name
                this.currentlyDragging = e.target.dataset.wname;
                // getting source id
                this.currentlySource = e.target.dataset.placeholder ? e.target.dataset.placeholder : null;

                console.log(`Selected widget: ${this.currentlyDragging}`);
                console.log(`Source placeholder: ${this.currentlySource}`);
            },
            handleDrop: function (e) {
                this.currentlyDestination = e.target.dataset.placeholder ? e.target.dataset.placeholder : e.target
                    .parentElement.dataset.placeholder;

                console.log(`Destanation placeholder: ${this.currentlyDestination}`);
                // Updating data
                this.$store.commit('updateWidgets', {
                    'src': this.currentlySource,
                    'des': this.currentlyDestination,
                    'widgetName': this.currentlyDragging
                })
            }
        },
        computed: {
            layout: {
                // get data
                get: function () {
                    return this.$store.getters.getCurrentData
                },
                // set data
                set: function (arry) {
                    this.$store.commit('setData', arry)
                }
            },
            widgetsList() {
                return this.$store.getters.getListWidgets
            }
        }

    }
</script>

<style lang="scss" scoped>
    .sidebar {
        padding-right: 10px;

        ul {
            list-style-type: none;
            padding: 0;
            text-align: -webkit-center;
        }

        li {
            width: 160px;
            margin-top: 10px;
            height: 160px;
            background-color: slateblue;
            border-radius: 7px;
            cursor: grab;
            line-height: 160px;
            text-align: center;
            color: #fff;
        }
    }

    // tools box for deleteing or reset componnet
    .tools {
        position: absolute;
        z-index: 1;
        width: 38px;
        height: 38px;
        right: 0;
        opacity: 0;
        background-color: rgba($color: #000000, $alpha: .2);
        border-top-right-radius: 7px;

        border-bottom-left-radius: 15px;
        transition: all .3s ease;
        line-height: 38px;
        cursor: pointer;
        text-align: center;

        &:hover i {
            color: #fff !important;
        }
    }

    .grid-item {
        background-color: #f3f3f3;
        border: 2px solid #f3f3f3;
        box-shadow: 0 0 0px 7px inset #fff;
        box-sizing: border-box;

        &:after {
            content: "";
            background-image: url('../assets/plus.png');
            background-size: 22px;
            background-repeat: no-repeat;
            background-position: center;
            opacity: .1;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            position: absolute;
            z-index: -1;
        }


    }


    .drag-area {
        position: relative;
        width: 100%;
        height: 100%;
        transition: all .3s ease;


        &:hover .tools {
            opacity: 1;
        }
    }
    
    .cursor {
        cursor: -webkit-grab;

    }
</style>