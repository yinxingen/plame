import React, {Component} from 'react'

class Header extends Component{
	render(){
		let {left,right,text} = this.props
		return(
			<div className="header"> 
				{left || <i className="left"></i>}
				<h2 className="center">{text}</h2>
				{right || <i className="right"></i>}
			</div>
		)
	}
}

export default Header 