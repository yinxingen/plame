import axios from 'axios'
import qs from 'qs'
const biilboardDataActions = {

    biilboardHandler(type, page) {
        console.log(type)
        console.log(page)
        return (dispatch) => {

            axios.post('/dola/app/game/newgetgameleaderboard', qs.stringify({
                    type,
                    page
                }))
                .then(({ data }) => {

                    if (page > 1) {
                        if (data.data.gameList.length) {
                            console.log(data.data.gameList)
                            dispatch({
                                type: 'LOADMORE',
                                gameList: data.data.gameList
                            })
                        }
                    } else {
                        dispatch({
                            type: 'BIILBOARD_DATA',
                            billboardDatas: data.data.gameList
                        })
                    }

                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
}

export default biilboardDataActions