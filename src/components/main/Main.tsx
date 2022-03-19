import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';

const Main: React.FC = () => {
  const [value, onChange] = useState(new Date());

  return (
    <Container>
      <Calendar value={value} onChange={onChange} />
    </Container>
  );
};

export default Main;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
