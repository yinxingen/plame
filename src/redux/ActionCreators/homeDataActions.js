import axios from 'axios'
import qs from 'qs'

const homeDataActions = {

    homeDataHandler(page) {
        return (dispatch) => {
            axios.post('/dola/app/mainpage/newgetmainpagelist', qs.stringify({
                    page
                }))
                .then(({ data }) => {
                    if (page > 1) {
                        if (data.data.themeList.length) {
                            dispatch({
                                type: 'LOAD-MORE',
                                _themeList: data.data.themeList
                            })
                        }
                    } else {
                        dispatch({
                            type: 'HOME_DATA',
                            homeDatas: data.data
                        })
                    }

                })
                .catch((err) => {
                    console.log(err)
                })
        }
    },
}

export default homeDataActions