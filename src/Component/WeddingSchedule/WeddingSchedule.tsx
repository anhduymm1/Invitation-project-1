import welcomeImg from "../../assets/img/welcome.png";
import takePictureImg from "../../assets/img/photo-camera.png";
import banquetImg from "../../assets/img/banquet.png";
import ringImg from "../../assets/img/wedding.png";
import dishImg from "../../assets/img/dish.png";
import guestsImg from "../../assets/img/guests.png";
import flowerImg from "../../assets/img/bouquet.png";

import "./WeedingSchedule.scss";
import { GiHeartEarrings } from "react-icons/gi";

const events = [
  { time: "10:00", text: "Đón khách", img: welcomeImg },
  { time: "10:30", text: "Chụp ảnh cùng dâu rể", img: takePictureImg },
  { time: "11:00", text: "Ổn định chỗ ngồi dự tiệc", img: banquetImg },
  { time: "11:15", text: "Nghi lễ", img: ringImg },
  { time: "11:30", text: "Dùng tiệc", img: dishImg },
  { time: "11:30", text: "Giao lưu khách mời", img: guestsImg },
  { time: "12:00", text: "Tung hoa", img: flowerImg },
];

const WeddingSchedule = () => {
  return (
    <div style={{ padding: "0px 10px 0px 10px", }}>
      <div className='countdown-box-line-container'>
        <hr className='line' />
        <GiHeartEarrings fontSize={"70px"} color='#6b4b4b' />
        <hr className='line' />
      </div>
      <div className="timeline-container">
        <h2 className="timeline-title"
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          WEDDING PROGRAM
        </h2>
        <p className="timeline-date"
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >THỨ NĂM, 17.12.2025</p>

        <div className="timeline"
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          {events.map(({ time, text, img }, index) => (
            <div className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`} key={index}>
              <div style={{ background: "#f7c68b", height: "4px", flex: 1 }}></div>
              <div className={`time-line-block ${index % 2 === 0 ? "left-icon" : "right-icon"}`} style={{ display: 'flex', alignItems: 'center', flex: 9 }}>
                <div className="timeline-icon">
                  <img src={img} alt={text} />
                </div>
                <div className="timeline-content">
                  <h4>{time}</h4>
                  <p>{text}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="timeline-line"></div>
        </div>
      </div>
    </div>
  );
};

export default WeddingSchedule;
