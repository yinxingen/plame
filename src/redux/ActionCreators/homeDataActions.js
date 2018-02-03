import axios from 'axios'

const homeDataActions = {

    homeDataHandler(page) {
        return (dispatch) => {

            axios.post('/dola/app/mainpage/newgetmainpagelist', {
                    page
                })
                .then(({ data }) => {
                    //				console.log(data)
                    data = data.data
                        // console.log(data.themeList)
                        // if (page > 1) {
                        //     if (data.themeList.length) {
                        //         return (dispatch) => {
                        //             dispatch({
                        //                 type: 'LOAD-MORE',
                        //                 _themeList: data.themeList
                        //             })

                    //         }
                    //     }
                    // }

                    dispatch({
                        type: 'HOME_DATA',
                        homeDatas: data
                    })
                })
        }
    },

}

export default homeDataActions