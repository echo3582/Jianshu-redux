import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style';
import { CSSTransition } from 'react-transition-group';

class Header extends Component {
	constructor (props) {
		super(props);
		this.state = {
			focused: false
		}
		this.handleFocused = this.handleFocused.bind(this);
		this.handleBlur = this.handleBlur.bind(this);		
	}

	render () {
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
							in={this.state.focused}
							timeout={300}
							classNames="slide"
						>
							<NavSearch className={
								this.state.focused ? "focused" : ''
							} onFocus={this.handleFocused} onBlur={this.handleBlur}>
							</NavSearch>
						</CSSTransition>
						<i className={this.state.focused ? "focused iconfont" : 'iconfont'}>&#xe6cf;</i>	
					</SearchWrapper>	
				</Nav>
				<Addition>
					<Button className='write'><i className="iconfont">&#xe615;</i>写文章</Button>
					<Button className='sign'>注册</Button>
				</Addition>							
			</HeaderWrapper>			
		)
	}

	handleFocused () {
		this.setState({
			focused: true
		})
	}	
	handleBlur () {
		this.setState({
			focused: false
		})
	}	
}

export default Header;