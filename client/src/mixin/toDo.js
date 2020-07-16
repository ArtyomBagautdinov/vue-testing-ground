import {createNamespacedHelpers} from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('toDo');

const computed = {
    ...mapState({
        $_toDo : 'toDo',
    })
}


const methods = {
    ...mapActions({
        $_fetchToDo : 'fetchToDo'
    })
}

export default {
    computed,
    methods
}