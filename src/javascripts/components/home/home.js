import React,{Component} from 'react'

import Header from '../header'
import Banner from './banner'
import Class from './class'
import Theme from './theme'
import Footer from '../footer'

const HeaderBtn = (props)=>(
	<a className={props.className}><i className={`fa fa-${props.type}`}></i></a>
)

class Home extends Component{

	render(){
		let {pathname} = this.props.location
		return(
			<div className="main-box">
			
				<Header 
					right={<HeaderBtn className="right" type="search"/>}
					text={"首页"}
				/>
				<Banner/>
				<Class/>
				<Theme/>
				
			<Footer pathname={pathname} />
			</div>
		)
	}
}

export default Home