const initialState: any = {
    categories: {
        Default: []
    }
}

const reduce1 = (state = initialState, action: any) => {
    switch (action.type) {
        case "ADD_CATEGORY":
            return {...state, categories: {...state.categories, [action.category]: []}}
        case "ADD_TASK":
            const id = state.categories[action.category].length + 1
            console.log(`Type: ${typeof action.categories}, El: ${action.categories}`)
            return {...state, categories: {...state.categories, [action.category]: [...state.categories[action.category], {title: action.newTask, color: action.color, id: id}]}}
        case "PERFORMING_TASK":
            console.log(action.taskId)
            return {...state, categories: {...state.categories, [action.category]: state.categories[action.category].filter((el: any) => el.id !== action.taskId)}}
        default: 
            return state
    }
}

export default reduce1