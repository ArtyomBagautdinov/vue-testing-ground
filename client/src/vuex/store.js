import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import topfive from './modules/topfive'
import toDo from './modules/toDo'
Vue.use(Vuex);

const state = {
    monthStats : [],
    incomes : [],
    topFive : [],
    volume : []
}

const mutations = {
    SET_MONTHSTATS: (state,monthStats) => {
        state.monthStats = monthStats; 
    },
    SET_INCOMES: (state,incomes) => {
        state.incomes = incomes; 
    },
    SET_TOPFIVE: (state,topFive) => {
        state.topFive = topFive; 
    },
    SET_VOLUME: (state,volume) => {
        state.volume = volume; 
    }
}

const getters = {
    MONTHSTATS(state){
        return state.monthStats;  
    },
    MONTHSTATS_TOTAL(state){
        let result = state.monthStats.reduce( (sum, current) => {
            return sum + current.param;
        },0);

        return result;
    },
    INCOMES(state){
        return state.incomes;  
    },
    INCOMES_SUMMARY(state){
        let result = state.incomes.reduce( (sum, current) => {
            return sum + current.profit;
        },0);

        return result; 
    },
    TOPFIVE(state){
        return state.topFive;  
    },
    TOPACTIVE(state){
        let max = -1000000;
        let name = "";
        let topPercent = null;

        for(let i=0;i<state.topFive.length;i++){
            if(state.topFive[i].value>max){
                max = state.topFive[i].value;
                name = state.topFive[i].fullName;
                topPercent = state.topFive[i].changePercent;
            }
        }
        return {
            max,
            name,
            topPercent
        }
    },
    VOLUME(state){
        return state.volume;  
    },
    CIRCLE_PARAMS(state){
        return "stroke-dashoffset: " + state.volume[1].value
        
    },
    LEFT(state){
        return "margin-top: " + state.volume[1].marginTop;     
    },
    RIGHT(state){
        return "margin-top: " + state.volume[1].marginTop

    }
}

const actions = {
    GET_MONTHSTATS_FROM_API({commit}){
        return axios("http://localhost:3000/monthStats", {
            method : "GET"
        })
        .then(monthStats => {
            commit('SET_MONTHSTATS',monthStats.data);
            return monthStats;
        })
        .catch( (error)=> {
            console.log(error);
            return error;
        })
    },
    GET_INCOMES_FROM_API({commit}){
        return axios("http://localhost:3000/incomes", {
            method : "GET"
        })
        .then(incomes => {
            commit('SET_INCOMES',incomes.data);
            return incomes;
        })
        .catch( (error)=> {
            console.log(error);
            return error;
        })
    },
    GET_TOPFIVE_FROM_API({commit},url){
        return axios(url, {
            method : "GET"
        })
        .then(topFive => {
            commit('SET_TOPFIVE',topFive.data);
            return topFive;
        })
        .catch( (error)=> {
            console.log(error);
            return error;
        })
    },
    GET_VOLUME_FROM_API({commit}){
        return axios("http://localhost:3000/portfolioVolume", {
            method : "GET"
        })
        .then(volume => {
            commit('SET_VOLUME',volume.data);
            return volume;
        })
        .catch( (error)=> {
            console.log(error);
            return error;
        })
    }

}

const createStore = () => {
    return new Vuex.Store({
        state,
        mutations,
        getters,
        actions,
        modules: {
            topfive,
            toDo
        }
    })
}

export default createStore;

