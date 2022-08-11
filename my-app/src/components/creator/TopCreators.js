import React from 'react';
import styled from 'styled-components';
import { Button } from '../button';
import Creator from './Creator';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 41px;
    align-items: center;
`

const ListCreator = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 30px 11px;
`;

const HeadingStyle = styled.h1 `
    font-weight: 500;
    font-size: 36px;
    line-height: 46px;
    text-align: center;
`

const TopCreators = () => {
    return (
      <Container>
        <HeadingStyle>Top Creators of the week</HeadingStyle>
        <ListCreator>
          <Creator to={"/"} />
          <Creator to={"/"} />
          <Creator to={"/"} />
          <Creator to={"/"} />
          <Creator to={"/"} />
          <Creator to={"/"} />
        </ListCreator>
        <Button width={"142px"} height={"39px"} kind="secondary">
          Watch Video
        </Button>
      </Container>
    );
}

export default TopCreators;