import { useState, useEffect } from "react";
import { getRemainingTimeUntilMsTimestamp } from "./Utils/CountdownTimerUtils";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

const CountdownTimer = ({ CountdownTimestampMs }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(CountdownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [CountdownTimestampMs]);

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }

  return (
    <div className="timer">
      <div className="countdown-timer">
        <div className="time-container">
          <span className="time">{remainingTime.days}</span>
          <span className="time-title">Days</span>
        </div>
        <div className="time-container">
          <span className="time">{remainingTime.hours}</span>
          <span className="time-title">Hours</span>
        </div>
        <div className="time-container">
          <span className="time">{remainingTime.minutes}</span>
          <span className="time-title">Minutes</span>
        </div>
        <div className="time-container">
          <span className="time">{remainingTime.seconds}</span>
          <span className="time-title">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
