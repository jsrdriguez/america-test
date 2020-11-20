import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const API = "http://localhost:4000"

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        materials: [],
    },
    getters: {
        getMaterials: (state) => {
            return state.materials;
        },
    },
    actions: {
        loadMaterials({ commit  }) {
            axios.get(`${API}/material`)
                .then(res => {
                    if (res.status === 200) {
                        commit('SET_MATERIALS', res.data);
                        return res.data;
                    }
                })
                .catch(err => console.log(err));
        },
    },
    mutations: {
        'SET_MATERIALS' : (state, response) => {
            state.materials = response;
        },
    }



});