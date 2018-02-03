import axios from 'axios'
import qs from 'qs'
const biilboardDataActions = {
	
	homeDataHandler(type){
//		console.log(type)
		return (dispatch)=>{
			
			axios.post('/dola/app/game/newgetgameleaderboard',qs.stringify({
				page:1,
				type
			}))
			.then(({data})=>{
//				console.log(data)
				data=data.data
//				console.log(data)
				dispatch({
					type:'BIILBOARD_DATA',
					billboardDatas:data
				})
			})
		}
	}
}

export default biilboardDataActions