import { useEffect, useState } from 'react';
import './CountDown.scss';
import { GiHeartEarrings } from "react-icons/gi";
import Calendar from '../Calendar/Calendar';
const CountDown = () => {
    const targetDate: string = "2025-12-17 00:00:00";

    const calculateTimeLeft = () => {
        const difference = new Date(targetDate).getTime() - new Date().getTime();
        let timeLeft = {
            days: "00",
            hours: "00",
            minutes: "00",
            seconds: "00",
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, "0"),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2, "0"),
                minutes: Math.floor((difference / (1000 * 60)) % 60).toString().padStart(2, "0"),
                seconds: Math.floor((difference / 1000) % 60).toString().padStart(2, "0"),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className='countdown'>
            <div className='countdown-container'>
                <span className='countdown-title'
                    data-aos="fade-down"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                >
                    WEDDING BEGIN

                </span>


                <div className='countdown-box'>
                    <div
                        style={{
                            display: "flex",
                            width: "100%",
                            gap: 50,
                            justifyContent: "center",
                            flexWrap: "wrap", // cho phép xuống dòng trên màn hình nhỏ
                            alignItems: "center",
                        }}
                    >
                        <div style={{ flex: "1 1 300px", maxWidth: 400 }} className='background-flower'
                            data-aos="fade-right"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                        >
                            <img src="https://i.pinimg.com/736x/3c/b7/34/3cb734a8fe69dd520dce990dc0257fbd.jpg" alt=""
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    borderRadius: 12,
                                    boxShadow: "0 0 20px 5px rgba(185, 178, 174, 0.81)", // tạo viền tối mờ
                                    filter: "drop-shadow(0 0 20px rgba(247, 240, 236, 0.89))", // ánh sáng đỏ mờ

                                }} />
                        </div>

                        <div
                            data-aos="fade-left"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            style={{ padding: 20, flex: "1 1 300px", maxWidth: 350, display: 'flex', justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                            <Calendar />
                        </div>
                    </div>
                    <div className='countdown-box-line-container'>
                        <hr className='line' />
                        <GiHeartEarrings fontSize={"70px"} color='#6b4b4b' />
                        <hr className='line' />
                    </div>
                    <span className='countdown-title'
                        data-aos="fade-down"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                    >
                        WEDDING COUNTDOWN

                    </span>
                    <div
                        data-aos="fade-down"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"

                        style={{ display: "flex", justifyContent: "center", width: "100%", gap: "30px", marginBottom: "30px" }}>
                        {/* Days */}
                        <div className="countdown-box-number">
                            <div className="countdown-box-number-inner">

                                <div className="number-box">{timeLeft.days[0]}</div>
                                <div className="number-box">{timeLeft.days[1]}</div>
                            </div>
                            <span className="label">Days</span>
                        </div>

                        {/* Hours */}
                        <div className="countdown-box-number">
                            <div className="countdown-box-number-inner">
                                <div className="number-box">{timeLeft.hours[0]}</div>
                                <div className="number-box">{timeLeft.hours[1]}</div>
                            </div>
                            <span className="label">Hours</span>
                        </div>
                    </div>

                    <div
                        data-aos="fade-down"
                        data-aos-offset="200"
                        data-aos-delay="70"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        style={{ display: "flex", justifyContent: "center", gap: "50px" }}>
                        {/* Minutes */}
                        <div className="countdown-box-number">
                            <div className="countdown-box-number-inner">
                                <div className="number-box-bt">{timeLeft.minutes[0]}</div>
                                <div className="number-box-bt">{timeLeft.minutes[1]}</div>
                            </div>
                            <span className="label">Minutes</span>
                        </div>

                        {/* Seconds */}
                        <div className="countdown-box-number">
                            <div className="countdown-box-number-inner">
                                <div className="number-box-bt">{timeLeft.seconds[0]}</div>
                                <div className="number-box-bt">{timeLeft.seconds[1]}</div>
                            </div>
                            <span className="label">Seconds</span>
                        </div>
                    </div>

                    <div className='countdown-box-line-container'>
                        <hr className='line' />
                        <GiHeartEarrings fontSize={"70px"} color='#6b4b4b' />
                        <hr className='line' />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CountDown;
