import React,{Component} from 'react'

class Theme extends Component{
	render(){
		let {data} = this.props;
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
			</div>
		)
	}
}

export default Theme
