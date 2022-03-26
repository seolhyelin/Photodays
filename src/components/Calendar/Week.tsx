import React, { useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';

const Week = () => {
  const [getMoment, setMoment] = useState(moment());

  const today: moment.Moment = getMoment;
  const firstWeek: number = today.clone().startOf('month').week();
  // const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week;
  const week: number = firstWeek;

  return (
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
    </TR>
  );
};

export default Week;

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
