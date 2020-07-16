
import {fetchData} from '../../requests/topFive';

const state = {
    topFive : []
}

const mutations = {
    SET_TOPFIVE : (state,topFive) => {
        state.topFive = topFive; 
    }
}


const actions = {
    fetchTopFive({commit}){
        return fetchData()
        .then(topFive => {
            commit('SET_TOPFIVE',topFive);
            return topFive;
        })
        .catch( (error)=> {
            console.log(error);
            return error;
        })
    }
}

export default {
    namespaced : true,
    state,
    mutations,
    actions
}