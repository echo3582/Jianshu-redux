import React from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

const Header = (props) => {
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
							in={props.focused}
							timeout={300}
							classNames="slide"
						>
							<NavSearch className={
								props.focused ? "focused" : ''
							} onFocus={props.handleFocused} onBlur={props.handleBlur}>
							</NavSearch>
						</CSSTransition>
						<i className={props.focused ? "focused iconfont" : 'iconfont'}>&#xe6cf;</i>	
					</SearchWrapper>	
				</Nav>
				<Addition>
					<Button className='write'><i className="iconfont">&#xe615;</i>写文章</Button>
					<Button className='sign'>注册</Button>
				</Addition>							
			</HeaderWrapper>			
		)
}

const mapStateToProps = (state) => {
	return {
		focused: state.focused
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleFocused () {
			const action = {
				type: 'focus'
			};
			dispatch(action);
		},
		handleBlur () {
			const action = {
				type: 'blur'
			};
			dispatch(action);
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);