import React ,{Component} from 'react'

import Footer from '../footer'


class Mine extends Component{
	constructor(props){
		super(props)
	}
	
	render(){
		let {pathname} = this.props.location
		
		return(
			<div>
			Mine
			
			
			<Footer pathname={pathname} />
			</div>
		)
	}
}

export default Mine
