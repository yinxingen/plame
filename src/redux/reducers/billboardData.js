const defaultState = {
    billboardDatas: [],

}

const billboardData = (state = defaultState, action) => {
    let new_state = Object.assign({}, state)

    switch (action.type) {

        case 'BIILBOARD_DATA':
            new_state.billboardDatas = action.billboardDatas;
            //			console.log(action)
            break;
        default:
            break;
    }
    return new_state
}


export default billboardData