import React, { useState, useEffect } from 'react';
import Head from './Head';
import Body from './Body';

const Main: React.FC = () => {
  const DATE: Date = new Date();
  const YEAR: number = DATE.getFullYear();
  const MONTH: number = DATE.getMonth() + 1;

  const [month, setMonth] = useState(MONTH);
  const [year, setYear] = useState(YEAR);
  const [totalDate, setTotalDate] = useState([]);

  const changeDate = (month: number) => {
    //이전 날짜
    const PVLastDate: number = new Date(YEAR, month - 1, 0).getDate();
    const PVLastDay: number = new Date(YEAR, month - 1, 0).getDay();
    //다음 날짜
    const ThisLasyDay: number = new Date(YEAR, month, 0).getDay();
    const ThisLasyDate: number = new Date(YEAR, month, 0).getDate();

    //이전 날짜 만들기
    const PVLD: number[] = [];
    if (PVLastDay !== 6) {
      for (let i = 0; i < PVLastDay + 1; i++) {
        PVLD.unshift(PVLastDate - i);
      }
    }
    //다음 날짜 만들기
    const TLD: number[] = [];
    for (let i = 1; i < 7 - ThisLasyDay; i++) {
      if (i === 0) {
        return TLD;
      }
      TLD.push(i);
    }

    //현재날짜
    let TD = [];

    TD = [...Array(ThisLasyDate + 1).keys()].slice(1);

    return PVLD.concat(TD, TLD);
  };

  useEffect(() => {
    setTotalDate(changeDate(7));
  }, []);

  useEffect(() => {
    setTotalDate(changeDate(month));
  }, [month]);

  const [today, setToday] = useState(0);

  const goToday = (): void => {
    const TODAY: number = new Date().getDate();
    const goMonth: number = new Date().getMonth() + 1;
    setMonth(goMonth);
    setToday(TODAY);
  };

  return (
    <div>
      <Head year={year} month={month} setMonth={setMonth} goToday={goToday} />
      <Body totalDate={totalDate} today={today} month={month} year={year} />
    </div>
  );
};

export default Main;
