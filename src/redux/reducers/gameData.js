const defaultState = {
    gameDatas: []
}

const gameData = (state = defaultState, action) => {
    let new_state = Object.assign({}, state)

    switch (action.type) {

        case 'GAME_DATA':
            new_state.gameDatas = action.gameDatas;
            //			console.log(action)
            break;
            //
        default:
            break;
    }
    return new_state
}


export default gameData