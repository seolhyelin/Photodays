import React, { useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';

const MainCal = () => {
  const [getMoment, setMoment] = useState(moment());

  const today: moment.Moment = getMoment;
  const firstWeek: number = today.clone().startOf('month').week();
  let lastWeek = 0;
  if (today.clone().endOf('month').week() === 1) {
    lastWeek = 53;
  } else {
    lastWeek = today.clone().endOf('month').week();
  }

  const prevMonth = (): void => {
    setMoment(getMoment.clone().subtract(1, 'month'));
  };

  const nextMonth = (): void => {
    setMoment(getMoment.clone().add(1, 'month'));
  };

  const popUp = () => {
    alert('clicked');
  };

  const calendarArr = (): any[] => {
    let result: any[] = [];
    let week: number = firstWeek;
    for (week; week <= lastWeek; week++) {
      result = result.concat(
        <TR key={week}>
          {Array(7)
            .fill(0)
            .map((_: null, idx: number) => {
              const days: moment.Moment = today.clone().startOf('year').week(week).startOf('week').add(idx, 'day');

              if (moment().format('YYYYMMDD') === days.format('YYYYMMDD')) {
                return (
                  <TD key={idx} style={{ backgroundColor: 'red' }} onClick={popUp}>
                    <Days>{days.format('D')}</Days>
                  </TD>
                );
              } else if (days.format('MM') !== today.format('MM')) {
                return (
                  <TD key={idx} style={{ backgroundColor: 'gray' }} onClick={popUp}>
                    <Days>{days.format('D')}</Days>
                  </TD>
                );
              } else {
                return (
                  <TD key={idx} onClick={popUp}>
                    <Days>{days.format('D')}</Days>
                  </TD>
                );
              }
            })}
        </TR>,
      );
    }
    return result;
  };

  return (
    <Container>
      <MonthController>
        <Button onClick={prevMonth}>이전달</Button>
        <ThisMonth>{today.format('YYYY년 MM월')}</ThisMonth>
        <Button onClick={nextMonth}>다음달</Button>
      </MonthController>
      <Table>
        <TBody>{calendarArr()}</TBody>
      </Table>
    </Container>
  );
};

export default MainCal;

const Container = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1.5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MonthController = styled.div`
  display: flex;
  flex-direction: row;
`;

const ThisMonth = styled.span``;

const Button = styled.button``;

const Table = styled.table`
  display: flex;
`;

const TBody = styled.tbody`
  display: flex;
  flex-direction: column;
`;

const TR = styled.tr`
  display: flex;
  flex-direction: row;
`;

const TD = styled.td`
  display: flex;
  border: 1px solid gray;
  width: 100px;
  height: 70px;
`;

const Days = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
