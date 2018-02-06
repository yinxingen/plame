import React,{Component} from 'react'

import Header from '../header'
import Banner from './banner'
import Class from './class'
import Theme from './theme'
import Footer from '../footer'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import homeDataActions from '../../../redux/ActionCreators/homeDataActions'

const HeaderBtn = (props)=>(
	<a className={props.className}><i className={`fa fa-${props.type}`}></i></a>
)

class Home extends Component{
	constructor(props){
		super(props)
		this.state={
			isLoadMore:true
		}
		this.page=1
	}

	componentWillMount() {
			this.props.homeDataActions.homeDataHandler(this.page)
	}

	_loadMore(){
		this.page++
		if(this.page === 3){
			this.setState({
				isLoadMore:false
			})
		}
		this.props.homeDataActions.homeDataHandler(this.page)
	}


	render(){
		let {pathname} = this.props.location
		let {bannerList,classList,themeList} = this.props.homeData.homeDatas
		return(
			<div className="main-box">
			
				<Header 
					right={<HeaderBtn className="right" type="search"/>}
					text={"首页"}
				/>
				<Banner data={bannerList}/>
				<Class data={classList}/>
				<Theme data={themeList}/>
				<div className='loadMore' onClick={this.state.isLoadMore?()=>this._loadMore():alert('数据已经加载完毕了')}>
					{
						this.state.isLoadMore?'点击加载更多':''
					}
				</div>	
			<Footer pathname={pathname} />
			</div>
		)
	}
}

export default connect(state=>state,(dispatch)=>{
	return{
		homeDataActions:bindActionCreators(homeDataActions,dispatch)
	}
})(Home)