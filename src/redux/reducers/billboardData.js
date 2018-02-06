const defaultState = {
    billboardDatas: [],

}

const billboardData = (state = defaultState, action) => {
    let new_state = Object.assign({}, state)
    console.log(state)
    switch (action.type) {

        case 'BIILBOARD_DATA':
            new_state.billboardDatas = action.billboardDatas;
            break;
        case 'LOADMORE':
            console.log(action.gameList)
            new_state.billboardDatas = state.billboardDatas.concat(action.gameList);

            break;
        default:
            break;
    }
    return new_state
}


export default billboardData