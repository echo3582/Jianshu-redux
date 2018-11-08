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

	searchInfoSwitch (show, mouseIn) {
		const { list, page, hover, pageNum, handleChangePage, handleHover, handleHoverOut } = this.props;
		const newList = list.toJS();
		const pageList = [];
		if (newList.length) {
			for(let i = 10 * (page-1); i< 10 * page; i++) {
				pageList.push(newList[i]);
			}
		}
		if (pageList) {
			if (show || mouseIn) {
				return (
					<React.Fragment>
						<SearchInfoTitle>
						热门搜索
							<SearchInfoSwitch onClick={() => handleChangePage(page, pageNum)} onMouseEnter={handleHover} onMouseLeave={handleHoverOut} className={hover ? 'hover' : ''}>换一批</SearchInfoSwitch>
						</SearchInfoTitle>
						<SearchInfoList>
							{pageList.map((item) => (
								<SearchInfoItem key={item}>{item}</SearchInfoItem>
							))}
						</SearchInfoList>
					</React.Fragment>
				)
			} else {
				return null;
			}
		}
	}

	render () {
		const { focused, mouseIn, handleFocused, handleBlur, handleMouseIn, handleMouseLeave } = this.props;
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
						<i className={focused ? "focused iconfont" : "iconfont"}>&#xe6cf;</i>	
						<SearchInfo  onMouseEnter={handleMouseIn} onMouseLeave={handleMouseLeave}>
							{this.searchInfoSwitch(focused, mouseIn)}							
						</SearchInfo>
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
		hover: state.getIn(['header', 'hover']),
		mouseIn: state.getIn(['header', 'mouseIn']),
		mouseLeave: state.getIn(['header', 'mouseLeave']),
		list: state.getIn(['header', 'list']),
		page: state.getIn(['header', 'page']),
		pageNum: state.getIn(['header', 'pageNum'])
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
		},
		handleMouseIn () {
			dispatch(actionCreators.mouseIn());
		},
		handleMouseLeave () {
			dispatch(actionCreators.mouseLeave());
		},
		handleChangePage (page, pageNum) {
			if (page < pageNum) {
				dispatch(actionCreators.changePage(page + 1));			
			} else {
				dispatch(actionCreators.changePage(1));
			}
		},
		handleHover () {
			dispatch(actionCreators.hover());
		},
		handleHoverOut () {
			dispatch(actionCreators.hoverOut());
		}
	}
}
export default connect(mapStateToprops, mapDispatchToprops)(Header);