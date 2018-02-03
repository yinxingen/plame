import React,{Component} from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import homeData from '../../../redux/ActionCreators/homeDataActions'
import store from '../../../redux/store'

class Theme extends Component{
	constructor(props){
		super(props)
		this.state = {
			page:1,
			isloadMore:false
		}
	}
	componentWillMount(){
//		console.log(this.state)
		this.props.homeData.homeDataHandler(this.state.page)
	}

	render(){
		let data = store.getState().homeData.homeDatas.themeList
		
//		console.log(data)
		return(
			<div>
			{
				data?data.map(item=>(
					<div className="theme-box" key={item.id}>
						<div className="theme-header">
							<div className="themeLeft">{item.title}</div>
							{
								item.type==='1'?<div className="themeright">更多</div>:''
							}
							
						</div>
						
						<div className="theme-img">
							{
								item.imageName===""?'':<img src={item.image} alt={item.name}/>
							}
						</div>
						
						<div className="theme-content">
							{
								item.type==='1'?<div className="theme1-box">
								{
									item.gameList.map(theme1=>(
										<div className="theme1-item" key={theme1.id}>
											<img src={theme1.image} alt={theme1.name}/>
											<p className="imageName">{theme1.name}</p>
										</div>
									))
								}
								</div>:
								<div className='theme2-box'>
								{
									item.gameList.map(theme2=>(
										<div className="theme2-item" key={theme2.id}>
											<div className='theme2-left'>
												<img src={theme2.image} alt={theme2.name}/>
												<div className='word-box'>
													<p>{theme2.name}</p>
													<p className="theme2-list" style={{'background':theme2.labelList[0].color}}>{theme2.labelList[0].name}</p>
													<p>{theme2.description}</p>
												</div>
											</div>
											<button className="startGame">开始</button>
										</div>
									))
								}
								</div>
							}
						</div>
					</div>
				)):''
			}
			{/* <div className='loadMore' onClick={()=>this.loadHandler()}>
			点击加载更多
			</div>	 */}
			</div>
			
		)
	}
}

export default connect(state=>state,(dispatch)=>{
	return{
		homeData:bindActionCreators(homeData,dispatch)
	}
})(Theme)