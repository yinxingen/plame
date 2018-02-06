const defaultState = {
    homeDatas: []
}

const homeData = (state = defaultState, action) => {
    let new_state = Object.assign({}, state)
        // console.log(state)
    switch (action.type) {

        case 'HOME_DATA':
            new_state.homeDatas = action.homeDatas;
            break;
        case 'LOAD-MORE':
            new_state.homeDatas.themeList = state.homeDatas.themeList.concat(action._themeList);
            break;
        default:
            break;
    }
    return new_state
}


export default homeData