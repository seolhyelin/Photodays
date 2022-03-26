import React, { useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';

const MainCal = () => {
  const [getMoment, setMoment] = useState(moment());

  const today: moment.Moment = getMoment;
  const firstWeek: number = today.clone().startOf('month').week();
  const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week;

  const prevMonth = (): void => {
    setMoment(getMoment.clone().subtract(1, 'month'));
  };

  const nextMonth = (): void => {
    setMoment(getMoment.clone().add(1, 'month'));
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
                  <TD key={idx} style={{ backgroundColor: 'red' }}>
                    <Days>{days.format('D')}</Days>
                  </TD>
                );
              } else if (days.format('MM') !== today.format('MM')) {
                return (
                  <TD key={idx} style={{ backgroundColor: 'gray' }}>
                    <Days>{days.format('D')}</Days>
                  </TD>
                );
              } else {
                return (
                  <TD key={idx}>
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
  width: 100vw;
  height: 100vh;
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
  width: 50vw;
  height: 50vh;
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
  width: 5vw;
  height: 5vh;
`;

const Days = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
