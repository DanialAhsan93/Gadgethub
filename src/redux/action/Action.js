export const ADD = (item) => {
    return {
        type : 'ADD_CART',
        payload : item
        
    }
}
export const DLT = (id) => {
    return {
        type : 'DLT_CART',
        payload : id
    }
}
export const RMV = (itemId) => {
    return {
        type : 'RMV_CART',
        payload : itemId
    }
}
export const SND = (itemfvr) => {
    return {
        type : 'ADD_TO_FAVORITIES',
        payload : itemfvr
        
    }
}
export const EXT = (itemext) => {
    return {
        type : 'EXT_FAVORITIES',
        payload : itemext
    }
}
export const setfilter = (product) => {
    return {
        type : 'SET_FILTER',
        payload : product
    }
}
export const setNewestfilter = (product) => {
    return {
        type : 'SET_SORT_OPTION',
        payload : product
    }
}
export const Manage_Toggle = (toggle) => {
    return {
        type : 'TOGGLE_FAVORITIES',
        payload : toggle
        
    }
}



