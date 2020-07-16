
import {fetchData} from '../../requests/toDo';

const state = {
    toDo : []
}

const mutations = {
    SET_TODO : (state,toDo) => {
        state.toDo = toDo; 
    }
}


const actions = {
    fetchToDo({commit}){
        return fetchData()
        .then(toDo => {
            commit('SET_TODO',toDo);
            return toDo;
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