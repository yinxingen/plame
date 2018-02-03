import axios from 'axios'
import qs from 'qs'

const gameDataActions = {
	
	gameDataHandler(page){
		return (dispatch)=>{
			
			axios.post('/dola/app/game/newgetclasslist',qs.stringify({
				page:1
			}))
			.then(({data})=>{
//				console.log(data)
				data=data.data
//				console.log(data)
				dispatch({
					type:'GAME_DATA',
					gameDatas:data
				})
			})
		}
	}
}

export default gameDataActions