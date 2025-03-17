import { useState, useEffect } from 'react';
import './CountdownTimer.css';

// According to some Hindu texts, Kali Yuga is 432,000 years long
// And it started in 3102 BCE (or February 18, 3102 BCE)
// We'll use a simplified calculation here
const kaliYugaStartDate = new Date('3102-02-18T00:00:00Z').getTime();
const kaliYugaDuration = 432000 * 365.25 * 24 * 60 * 60 * 1000; // in milliseconds
const kaliYugaEndDate = kaliYugaStartDate + kaliYugaDuration;

type TimeLeft = {
  years: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = kaliYugaEndDate - now;
      
      if (difference > 0) {
        // Calculate years, days, hours, minutes, seconds
        const millisecondsInYear = 365.25 * 24 * 60 * 60 * 1000;
        const millisecondsInDay = 24 * 60 * 60 * 1000;
        const millisecondsInHour = 60 * 60 * 1000;
        const millisecondsInMinute = 60 * 1000;
        
        const years = Math.floor(difference / millisecondsInYear);
        const days = Math.floor((difference % millisecondsInYear) / millisecondsInDay);
        const hours = Math.floor((difference % millisecondsInDay) / millisecondsInHour);
        const minutes = Math.floor((difference % millisecondsInHour) / millisecondsInMinute);
        const seconds = Math.floor((difference % millisecondsInMinute) / 1000);
        
        setTimeLeft({ years, days, hours, minutes, seconds });
      }
    };

    // Calculate immediately
    calculateTimeLeft();
    
    // Then update every second
    const timer = setInterval(calculateTimeLeft, 1000);
    
    // Clean up on unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container">
      <h2>Time Remaining in Kali Yuga:</h2>
      <div className="countdown-timer">
        <div className="countdown-segment">
          <span className="countdown-value">{timeLeft.years}</span>
          <span className="countdown-label">Years</span>
        </div>
        <div className="countdown-segment">
          <span className="countdown-value">{timeLeft.days}</span>
          <span className="countdown-label">Days</span>
        </div>
        <div className="countdown-segment">
          <span className="countdown-value">{timeLeft.hours}</span>
          <span className="countdown-label">Hours</span>
        </div>
        <div className="countdown-segment">
          <span className="countdown-value">{timeLeft.minutes}</span>
          <span className="countdown-label">Minutes</span>
        </div>
        <div className="countdown-segment">
          <span className="countdown-value">{timeLeft.seconds}</span>
          <span className="countdown-label">Seconds</span>
        </div>
      </div>
      <div className="kali-yuga-info">
        <p>Kali Yuga began on February 18, 3102 BCE and will last for 432,000 years.</p>
        <p>After Kali Yuga ends, a new cycle of ages (Yugas) will begin with Satya Yuga.</p>
      </div>
    </div>
  );
};

export default CountdownTimer; 