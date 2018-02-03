import React,{Component} from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import homeData from '../../../redux/ActionCreators/homeDataActions'
import store from '../../../redux/store'

class Class extends Component{
	
	componentWillMount(){
		this.props.homeData.homeDataHandler()
	}
	
	render(){
		let data = store.getState().homeData.homeDatas.classList
		
//		console.log(data)
		return(
			<div className="class-box">
			{
				data?data.map(item=>(
					<div className="class-item" key={item.id}>
					<img src={item.image} alt={item.name}/>
					<p>{item.name}</p>
				</div>
				)):''
			}
			</div>
		)
	}
}

export default connect(state=>state,(dispatch)=>{
	return{
		homeData:bindActionCreators(homeData,dispatch)
	}
})(Class)