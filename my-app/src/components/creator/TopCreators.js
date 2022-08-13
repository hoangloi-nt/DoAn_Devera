import React from 'react';
import styled from 'styled-components';
import { Button } from '../button';
import Creator from './Creator';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 41px;
    align-items: center;
    margin-bottom: 100px;
`

const ListCreator = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 30px 11px;
`;

const TopCreators = () => {
    return (
      <Container>
        <h1 className='heading-text'>Top Creators of the week</h1>
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