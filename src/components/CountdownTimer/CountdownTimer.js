import React, { useEffect, useRef, useState } from "react";
import styles from "./CountdownTimer.module.css";
// import { FaPlus } from "react-icons/fa";
// import { TiMinus } from "react-icons/ti";
import useMediaQuery from "hooks/useMediaQuery";
import Title from "components/Title/Title";

const Counter = ({ count, title }) => {
  return (
    <div className={styles.counterParent}>
      <div className={`${styles.counter} `}>
        <div
          className={`${styles.counter_count} bg-gradient fs-46px white text-center font-gilroy-black mb-10px`}
        >
          {count}
        </div>
        <p className="fs-22px white font-gilroy-light text-center">{title}</p>
      </div>
      <p className="white fs-50px weight-8">:</p>
    </div>
  );
};

function CountdownTimer() {
  const isBellow = useMediaQuery("(max-width: 500px)");

  // const [counter, setCounter] = useState(1);
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  let interval = useRef();
  const startTimer = () => {
    let end = new Date("4/2/2022 4:00 PM");
    interval = setInterval(() => {
      let _second = 1000;
      let _minute = _second * 60;
      let _hour = _minute * 60;
      let _day = _hour * 24;
      let now = new Date();
      let nowUTC = new Date(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        now.getUTCHours(),
        now.getUTCMinutes(),
        now.getUTCSeconds()
      );
      let distance = end - nowUTC;
      var days = Math.floor(distance / _day);
      var hours = Math.floor((distance % _day) / _hour);
      var minutes = Math.floor((distance % _hour) / _minute);
      var seconds = Math.floor((distance % _minute) / _second);
      if (distance < 0) {
        clearInterval(interval.current);
        return;
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  return (
    <div className="container-wrapper">
      <div className={styles.wrapper}>
        {/* <button
          className={`${styles.connectWalletBtn} mb-30px fs-20px white font-gilroy-bold pointer text-center uppercase bg-gradient`}
        >
          Connect Wallet (Soon)
        </button> */}

        {/* <p className="fs-50px font-gilroy-bold uppercase mb-50px white">
          Countdown to Launch!
        </p> */}
        <div className="mb-30px">
          <Title title="Countdown to Launch!" className="text-center" />
        </div>

        <div className={`${styles.counterWrapper} mb-50px`}>
          <Counter count={timerDays} title="Days" />
          <Counter count={timerHours} title={isBellow ? "Hrs" : "Hours"} />
          <Counter count={timerMinutes} title={isBellow ? "Min" : "Minutes"} />
          <Counter count={timerSeconds} title={isBellow ? "Sec" : `Seconds`} />
        </div>

        {/* <div className={`${styles.btns} mb-50px`}>
          <div
            className={`${styles.itemsAvailable} fs-30px font-gilroy-bold text-center white mb-15px `}
          >
            {counter}/10000
          </div>

          <button className="fs-20px font-gilroy-bold white text-center bg-orange block pointer w-full uppercase mb-15px">
            whitelist mint (max1)
          </button>
          <button className="fs-20px font-gilroy-bold white text-center bg-orange block pointer w-full uppercase">
            mint
          </button>
        </div> */}

        {/* <div className={styles.counterTimer}>
          <button
            className="white pointer"
            onClick={() => setCounter(counter <= 1 ? counter : counter - 1)}
          >
            <TiMinus size={30} />
          </button>
          <div className="fs-30px font-gilroy-bold text-center white">
            {counter}
          </div>
          <button
            className="white pointer"
            onClick={() => setCounter(counter + 1)}
          >
            <FaPlus size={30} />
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default CountdownTimer;
