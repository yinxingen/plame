import React,{Component} from 'react'

class Class extends Component{
	render(){
		let {data} = this.props;
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
export default Class
