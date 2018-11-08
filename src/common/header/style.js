import styled from 'styled-components';
import logoPic from '../../statics/jianshu-logo.png';

export const HeaderWrapper = styled.div`
	position: relative;
	height: 58px;
	border-bottom: 1px solid #f0f0f0; 
`; 

export const Logo = styled.a`
	position: absolute;
	display: block;
	top: 0;
	left: 0;
	width: 100px;
	height:58px;
	height: 58px;
	background: url(${logoPic});
	background-size: contain;
`; 

export const Nav = styled.div`
	width: 960px;
	height: 100%;
	margin: 0 auto;
`;

export const NavItem = styled.a`
	line-height: 26px;
	height: 56px;
	padding: 15px;
	font-size: 17px;
	&.left {
		float: left;

	}
	&.active {
		color: #ea6f5a;
	}
	&.right {
		float: right;
		color: #969696;
	}
`;

export const NavSearch = styled.input`
	width: 160px;
	height: 38px;
	padding-left: 20px;
	padding-right: 40px;
	border: none;
	border-radius: 40px;
	font-size: 14px;
	margin-top: 9px;
	background: #eee; 
	color: #666;
	outline: none;
	&::placeholder {
		color: #999;
	}
	&.focused {
		width: 240px;
	}
	&.slide-enter {
		transition: all .3s ease-out;
	}
	&.slide-enter-active {
		width: 240px;
	}
	&.slide-exit {
		transition: all .3s ease-out;		
	}
	&.slide-exit-active {
		width: 160px;
	}
`;

export const Addition = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	height: 56px;
`;

export const Button = styled.div`
	float: right;
	line-height: 24px;
	border: 1px solid rgba(236,97,73,.7);
	border-radius: 20px;
	font-size: 15px;
	padding: 6px 12px;
	&.write {
		background: #ea6f5a;
		color: white;
		margin: 8px 15px 0;		
	}
	&.sign {
		color: #ea6f5a;
		margin: 9px 5px 0 15px;
	}
`;

export const SearchWrapper = styled.div`
	position: relative;
	float: left;
	border: none;
	.iconfont {
		position: absolute;
		top: 13px;
		right: 5px;
		border-radius: 26px;
		width: 30px;
		height: 30px;
		text-align: center;
		line-height: 2;
		&.focused {
			background: #777;			
		} 
	}
`;

export const SearchInfo = styled.div`
	position: absolute;
	top: 56px;
	width: 240px;
	padding: 0 20px;
	box-shadow: 0 0 8px #777;
`;

export const SearchInfoTitle = styled.div`
	margin-top: 20px;
	margin-bottom: 15px;
	line-height: 20px;
	font-size: 13px;
	color: #969696;
`;

export const SearchInfoSwitch = styled.div`
	float: right;
	font-size: 12px;
	color: #969696;
	&.hover {
		color: #333333;
		cursor: pointer;
	}
`;

export const SearchInfoItem = styled.a`
	float: left;
	font-size: 12px;
	line-height: 20px;
	color: #787878;
	border: 1px solid #ddd;
	border-radius: 3px;
	padding: 0 5px;
	margin-right: 10px;
	margin-bottom: 10px;
`;

export const SearchInfoList = styled.div`
	overflow: hidden;
`;