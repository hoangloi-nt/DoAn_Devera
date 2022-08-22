import styled from "styled-components";

const WrapperStyle = styled.div`
  width: 100%;
  max-height: min((100vh - 96px) - 60px, 734px);
  min-height: 100px;
  padding-top: 8px;
  border-radius: 8px;
  background: #30384D;
  box-shadow: rgb(0 0 0 / 12%) 0 2px 12px;
`;

const Wrapper = ({ children}) => {
    return (
        <WrapperStyle>
          {children}
        </WrapperStyle>
    )
}

export default Wrapper;