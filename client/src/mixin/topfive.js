import {createNamespacedHelpers} from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('topfive');

const computed = {
    ...mapState({
        $_topFive : 'topFive',
    })
}


const methods = {
    ...mapActions({
        $_fetchTopFive : 'fetchTopFive'
    })
}

export default {
    computed,
    methods
}