import request from './request'

export const fetchData = () => {
    return request({
        method : 'GET',
        url : '/toDo'
    })
}

export const removeData = (id) => {
    return request({
        method : 'DELETE',
        url : '/toDo/' + id.toString()
    })
}

export const addData = (newId,newText) => {
    return request({
        method : 'POST',
        url : '/toDo',
        data : {
            id : newId,
            text : newText
            
        }
    })
}

export const updateData = (curId,newText) => {
    return request({
        method : 'PUT',
        url : '/toDo/' + curId.toString(),
        data : {
            id : curId,
            text : newText
        }
    })
}