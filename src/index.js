//移入React和Reactdom
import React from 'react';
import ReactDOM from 'react-dom';
//引入scss
import './stylesheets/index.scss';
//引入js
import App from './javascripts/App';

//引入服务
import registerServiceWorker from './registerServiceWorker';
//引入路由
import {Router,Route,IndexRedirect,hashHistory,Redirect} from 'react-router'
//引入组建js
import Home from './javascripts/components/home/home.js';
import BillBoard from './javascripts/components/billboard';
import GameType from './javascripts/components/gameType';
import Mine from './javascripts/components/mine';



import {Provider} from 'react-redux'
import store from './redux/store'

//配置路由
let routers = <Provider store={store}>
<Router history={hashHistory}>
	<Route path='/' component={App}>
		<IndexRedirect to="home" />
		<Route path="home" component={Home}></Route>
		<Route path="billboard" component={BillBoard}></Route>
		<Route path="gameType" component={GameType}></Route>
		<Route path="mine" component={Mine}></Route>
	
		<Redirect from="*" to="home"/>
		
	</Route>
</Router>
</Provider>


ReactDOM.render(
	routers
	,document.getElementById('root'));
registerServiceWorker();
