const defaultState = {
    homeDatas: [],
    _themeList: []
}

const homeData = (state = defaultState, action) => {
    let new_state = Object.assign({}, state)
    switch (action.type) {

        case 'HOME_DATA':
            new_state.homeDatas = action.homeDatas;

            break;
            // case 'LOAD-MORE':
            //     new_state.themeList = state.themeList.concat(action.themeList)
            //     console.log(new_state.themeList)

            //     break;
        default:
            break;
    }
    return new_state
}


export default homeData