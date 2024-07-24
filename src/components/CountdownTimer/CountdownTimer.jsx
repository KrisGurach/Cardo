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

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className='countdown'>
            <p className='countdown__title'>До гранд финала</p>
            <div className='countdown__timer-container'>
                {timeLeft.days !== undefined ? (
                    <div className='countdown__timer'>
                        <span>{timeLeft.days} дней </span>
                        <span>{timeLeft.hours} часов </span>
                        <span>{timeLeft.minutes} минут </span>
                        <span>{timeLeft.seconds} секунд </span>
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