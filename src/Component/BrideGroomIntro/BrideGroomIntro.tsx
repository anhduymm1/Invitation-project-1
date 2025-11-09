import "./BrideGroomIntro.scss";
import { FaHeart } from "react-icons/fa";

export default function BrideGroomIntro() {
  const bride = {
    name: "Nhâm Mỹ Oanh",
    role: "Cô dâu",
  };

  const groom = {
    name: "Bùi Lê Anh Duy",
    role: "Chú rể",
  };

  const weddingPhoto =
    "https://i.pinimg.com/736x/de/61/c9/de61c9f3442c421b7bbb8751d15bcfdc.jpg";

  return (
    <div className="intro-container">
      <span className='countdown-title'
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        WE GOT MARRIED
      </span>
      {/* 🖥 Hiển thị layout 3 cột trên desktop */}
      <div className="intro-flex desktop-layout">
        <div className="info left"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >

          <h2>{bride.name}</h2>
          <p className="role">{bride.role}</p>
        </div>

        <div className="photo-container"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="70"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <img src={weddingPhoto} alt="Ảnh cưới" className="wedding-photo" />
        </div>

        <div className="info right"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <h2>{groom.name}</h2>
          <p className="role">{groom.role}</p>
        </div>
      </div>

      {/* 📱 Layout mobile: ảnh riêng, tên nằm dưới */}
      <div className="mobile-layout">
        <div className="photo-container"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="70"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <img src={weddingPhoto} alt="Ảnh cưới" className="wedding-photo" />
        </div>

        <div className="names-under-photo"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="70"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <div className="name-item">
            <h2>{bride.name}</h2>
            <span className="role">{bride.role}</span>
          </div>
          <FaHeart className="heart-icon" />
          <div className="name-item">

            <h2>{groom.name}</h2>
            <span className="role">{groom.role}</span>

          </div>
        </div>
      </div>
    </div>
  );
}
