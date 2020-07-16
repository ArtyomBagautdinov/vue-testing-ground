import request from './request'

export const fetchTopFiveDay = () => {
    return request({
        method : 'GET',
        url : '/topFiveDay'
    })
}