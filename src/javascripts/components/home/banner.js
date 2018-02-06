import React, { Component } from 'react'
import Swiper from 'swiper'

class Banner extends Component {

    componentDidUpdate(){
		
		new Swiper('.banner',{
			loop:true,
			autoplay: {
				disableOnInteraction: false,
			},
			pagination:{
				el:'.swiper-pagination',
				clickable :true
			}
		})
	}

    render() {
		// console.log(this.props)
		let {data} = this.props;
        return ( 
			<div >
				<div className = 'swiper-container banner' >
				<div className = "swiper-wrapper" >
					{
						data ? data.map(item => ( 
							<div className = "swiper-slide" key = { item.id } >
								<img src = { item.image }alt = { item.name }/> 
							</div >
						)) : ''
					} 
				</div> 
					<div className = "swiper-pagination" > </div> 
				</div >
			</div>
        )
    }
}
export default Banner
