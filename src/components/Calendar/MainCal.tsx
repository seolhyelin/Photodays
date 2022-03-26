import React, { useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';

const MainCal = () => {
  const [getMoment, setMoment] = useState(moment());
  const today: moment.Moment = getMoment;

  return <Container>MainCal</Container>;
};

export default MainCal;

const Container = styled.div``;

const Button = styled.button``;
