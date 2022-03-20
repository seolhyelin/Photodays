import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import * as FaIcons from 'react-icons/fa';
import styled from 'styled-components';
import Item from './Item';

const Sidebar: React.FC = () => {
  const [value, onChange] = useState(new Date());
  // const arr: string[] = ['사진1', '사진2', '사진3'];

  return (
    <Container>
      <FaIcons.FaBars />

      <CalenderBox>
        <Calendar value={value} onChange={onChange} />
      </CalenderBox>
      <List>
        {/* {arr.map((pic) => {
          <Item pic={pic} />;
        })} */}
        <Item />
        <Item />
        <Item />
        <Item />
      </List>
      <AddBtn>+ read more</AddBtn>
    </Container>
  );
};

export default Sidebar;
const Container = styled.div``;

const CalenderBox = styled.div`
  width: 100%;
  height: 100%;
`;
const List = styled.p``;
const AddBtn = styled.button``;
