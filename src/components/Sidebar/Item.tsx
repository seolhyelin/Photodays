import React, { useState } from 'react';
import styled from 'styled-components';
// interface Itempropstype {
//   pic: string;
// }
const Item: React.FC = ({}) => {
  console.log();
  return (
    <Container>
      <Photo>사진</Photo>
      <InfoBox>
        <Date>03.26</Date>
        <PhotoTitle>옥쓰벌쓰데이</PhotoTitle>
      </InfoBox>
    </Container>
  );
};
export default Item;

const Container = styled.div`
  width: 400px;
  height: 80px;
  border: solid 2px green;
  border-radius: 3px;
  display: flex;
`;
const Photo = styled.div`
  width: 60px;
  height: 60px;
  margin: 10px;
  background-color: #fafab9;
  border: solid 1px green;
`;
const InfoBox = styled.div`
  height: 60px;
  margin: 10px 10px 10px 0px;
  display: flex;
  flex-direction: column;
`;
const Date = styled.div`
  width: 300px;
  margin-bottom: 10px;
  background-color: pink;
  border: solid 1px;
`;
const PhotoTitle = styled.div`
  width: 300px;
  background-color: skyblue;
  border: solid 1px;
`;
