const addCarAction = (payload) => {
    return {
        type: 'ADD_CAR',
        value: payload
    }
}

const removeCarAction = (index) => {
    return {
        type: 'REMOVE_CAR',
        value: index
    }
}

export  {
    addCarAction,
    removeCarAction
}
   