import React, { useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';

const MainCal = () => {
  const [getMoment, setMoment] = useState(moment());
  const today: moment.Moment = getMoment;

  return (
    <Container>
      <Button>이전달</Button>
      <Button>다음달</Button>
    </Container>
  );
};

export default MainCal;

const Container = styled.div``;

const Button = styled.button``;
