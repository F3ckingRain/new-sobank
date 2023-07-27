import { useEffect, useState } from 'react';

type TimerType = {
  initTimer: number;
  reset?: boolean;
  paused?: boolean;
};
interface TimerDataType {
  time: number;
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}
export const useTimer = ({ initTimer, reset, paused }: TimerType): TimerDataType => {
  const [time, setTime] = useState<number>(initTimer);
  const [days, setDays] = useState<string>('');
  const [hours, setHours] = useState<string>('');
  const [minutes, setMinutes] = useState<string>('');
  const [seconds, setSeconds] = useState<string>('');

  console.log(minutes, time);

  useEffect(() => {
    setTime(initTimer);
  }, [initTimer]);

  useEffect(() => {
    if (reset) setTime(initTimer);
    if (!paused && time > 0) {
      const handler = setInterval(
        () =>
          setTime(prevState => {
            if (prevState > 0) return prevState - 1;
            return prevState;
          }),
        1000,
      );

      if (time === 0) clearInterval(handler);
    }

    return () => undefined;
  }, [initTimer, reset, paused]);

  useEffect(() => {
    const calcDays = Number((time / (3600 * 24)).toString().slice(0, 1)).toString();
    const calcHours = ((time - Number(calcDays) * 3600 * 24) / 3600)
      .toString()
      .split('.')[0];
    const calcMinutes = (
      (time - (Number(calcDays) * 3600 * 24 + Number(calcHours) * 3600)) /
      60
    )
      .toString()
      .split('.')[0];
    const calcSeconds = (
      time -
      (Number(calcDays) * 3600 * 24 + Number(calcHours) * 3600 + Number(calcMinutes) * 60)
    ).toString();

    setDays(calcDays);
    setHours(calcHours);
    setMinutes(calcMinutes);
    setSeconds(calcSeconds);
  }, [time]);

  return {
    time,
    days,
    hours,
    seconds: seconds.length < 2 ? `0${seconds}` : seconds,
    minutes,
  };
};
