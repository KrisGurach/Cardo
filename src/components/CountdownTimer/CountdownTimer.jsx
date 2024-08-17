import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const calculateTimeLeft = () => {
        const targetDate = new Date('2024-08-22T00:00:00');
        const now = new Date();
        const difference = targetDate - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            };
        } else {
            return {};
        }

        return timeLeft;
    };

    const getTimeString = (value, forms) => {
        if (value % 10 === 1 && value % 100 !== 11) {
            return forms[0]; // 1, 21 и т.д.
        }
        if (value % 10 >= 2 && value % 10 <= 4 && (value % 100 < 10 || value % 100 >= 20)) {
            return forms[1]; // 2, 3, 4, 22, 23 и т.д.
        }
        return forms[2]; // 0, 5-9 и т.д.
    };

    const getDaysString = (days) => (
        <>
            <span>{days}</span>
            <span>{getTimeString(days, ['день', 'дня', 'дней'])}</span>
        </>
    );
    
    const getHoursString = (hours) => (
        <>
            <span>{hours}</span>
            <span>{getTimeString(hours, ['час', 'часа', 'часов'])}</span>
        </>
    );
    
    const getMinutesString = (minutes) => (
        <>
            <span>{minutes}</span>
            <span>{getTimeString(minutes, ['минута', 'минуты', 'минут'])}</span>
        </>
    );
    
    const getSecondsString = (seconds) => (
        <>
            <span>{seconds}</span>
            <span>{getTimeString(seconds, ['секунда', 'секунды', 'секунд'])}</span>
        </>
    );
    
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearInterval(timer);
    }, []);
    
    return (
        <div className='countdown__container'>
            <p className='countdown__title'>До гранд финала</p>
            <div className='countdown__timer-container'>
                {timeLeft.days !== undefined ? (
                    <div className='countdown__timer'>
                        <span className='countdown__timer-box countdown__timer-box_white'>
                            {getDaysString(timeLeft.days)}
                        </span>
                        <span className='countdown__timer-box'>
                            {getHoursString(timeLeft.hours)}
                        </span>
                        <span className='countdown__timer-box'>
                            {getMinutesString(timeLeft.minutes)}
                        </span>
                        <span className='countdown__timer-box'>
                            {getSecondsString(timeLeft.seconds)}
                        </span>
                    </div>
                ) : (
                    <div className='countdown__end-container'>
                        <h2 className='countdown__end-text'>Время финала!</h2>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CountdownTimer;
