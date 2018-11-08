import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList } from './style';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Header extends Component {
	constructor (props) {
		super(props);
		this.searchInfoSwitch = this.searchInfoSwitch.bind(this);
	}

	searchInfoSwitch (show) {
		const { focused, list } = this.props;
		if (show) {
			return (
				<SearchInfo>
					<SearchInfoTitle>
					热门搜索
						<SearchInfoSwitch>换一批</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{list.map((item) => (
							<SearchInfoItem key={item}>{item}</SearchInfoItem>
						))}
					</SearchInfoList>
				</SearchInfo>
			)
		} else {
			return null;
		}
	}

	render () {
		const { focused, list, handleFocused, handleBlur } = this.props;
		return (
			<HeaderWrapper>
				<Logo href = "/"/>
				<Nav>
					<NavItem className='left active'>首页</NavItem>
					<NavItem className='left'>下载App</NavItem>
					<NavItem className='right'>登陆</NavItem>
					<NavItem className='right'>
						<i className="iconfont">&#xe636;</i>
					</NavItem>	
					<SearchWrapper>
						<CSSTransition
							in={focused}
							timeout={300}
							classNames="slide"
						>
							<NavSearch className={
								focused ? "focused" : ''
							} onFocus={handleFocused} onBlur={handleBlur}>
							</NavSearch>
						</CSSTransition>
						<i className={focused ? "focused iconfont" : 'iconfont'}>&#xe6cf;</i>	
						{this.searchInfoSwitch(focused)}
					</SearchWrapper>	
				</Nav>
				<Addition>
					<Button className='write'><i className="iconfont">&#xe615;</i>写文章</Button>
					<Button className='sign'>注册</Button>
				</Addition>							
			</HeaderWrapper>			
		)
	}
}

const mapStateToprops = (state) => {
	return {
		focused: state.getIn(['header', 'focused']),
		list: state.getIn(['header', 'list'])
	}
}

const mapDispatchToprops = (dispatch) => {
	return {
		handleFocused () {
			dispatch(actionCreators.focus());
			dispatch(actionCreators.getList());
		},
		handleBlur () {
			dispatch(actionCreators.blur());
		}
	}
}
export default connect(mapStateToprops, mapDispatchToprops)(Header);