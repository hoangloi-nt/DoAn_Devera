import styled from "styled-components";

const WrapperStyle = styled.div`
	width: 100%;
	max-height: min((100vh - 96px) - 60px, 734px);
	min-height: 100px;
	padding-top: 8px;
	border-radius: 8px;
	background-color: #30384d;
	box-shadow: rgb(0 0 0 / 12%) 0 2px 12px;
	display: flex;
	flex-direction: column;
`;

const Wrapper = ({ classname, children }) => {
	return <WrapperStyle className={classname}>{children}</WrapperStyle>;
};

export default Wrapper;
