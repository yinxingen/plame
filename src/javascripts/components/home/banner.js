import React, { Component } from 'react'
import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import homeData from '../../../redux/ActionCreators/homeDataActions'
import store from '../../../redux/store'

class Banner extends Component {

    componentWillMount() {
        //		console.log(this.props)
        this.props.homeData.homeDataHandler()
    }

    componentDidUpdate() {
        new Swiper('.banner', {
            loop: true,
            autoplay: {
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        })
    }

    render() {
        let data = store.getState().homeData.homeDatas.bannerList
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

export default connect(state => state, (dispatch) => {
    return {
        homeData: bindActionCreators(homeData, dispatch)
    }
})(Banner)