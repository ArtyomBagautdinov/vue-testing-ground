import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import HomePage from '../components/HomePage/HomePage'
import ChartPage from '../components/ChartPage/ChartPage'
import MessagesPage from '../components/MessagesPage/MessagesPage'
import CloudPage from '../components/CloudPage/CloudPage'
import SettingsPage from '../components/SettingsPage/SettingsPage'

let router = new Router ( {
    routes: [
        {
            path : '/',
            name : 'home',
            component : HomePage,
            props : true
        },
        {
            path : '/chart',
            name : 'chart',
            component : ChartPage,
            props : true
        },
        {
            path : '/messages',
            name : 'messages',
            component : MessagesPage,
            props : true
        },
        {
            path : '/cloud',
            name : 'cloud',
            component : CloudPage,
            props : true
        },
        {
            path : '/settings',
            name : 'settings',
            component : SettingsPage,
            props : true
        }

    ]
})


export default router;