import hoavan1 from '../../assets/img/hoa_van_1.png'
import hoavan2 from '../../assets/img/hoa_van_2.png'
import './Info.scss'
const Info = () => {
    return (
        <div className='Info'>

            <img
                src="https://i.pinimg.com/736x/f7/d9/aa/f7d9aaa1c20680aa2ced5a0056eac9b1.jpg"
                alt=""
                className='anh-chinh'
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                style={{ borderRadius: "20px" }}
            />
            <div style={{ position: "relative", display: "flex", alignItems: "center" }}
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
            >

                <div className='info-container'>
                    <img style={{ height: "50px" }} src={hoavan1} alt="" />
                    <p style={{ fontSize: 12 }}>Trân trọng kính mời</p>
                    <p style={{ marginBottom: 10 }}>Bạn & Người thương</p>

                    <p style={{ fontSize: 20, fontWeight: "bold" }}>Lễ vu quy</p>
                    <span style={{ marginBottom: 10, fontFamily: "Great Vibes, cursive", fontSize: 30 }}>Anh Duy & Mỹ Oanh</span>
                    <p style={{ marginBottom: 5 }}>LỄ VU QUY ĐƯỢC TỔ CHỨC</p>
                    <p style={{ fontWeight: "bold" }}>17.12.2025 | 11:00</p>

                    <p style={{ marginBottom: 10, fontWeight: "bold", fontFamily: "Great Vibes, cursive", fontSize: 25, color: "#800000" }} >
                        Sảnh 1 - Nhà hàng Dương Lái
                    </p>
                    <p style={{ fontSize: 12 }}>Hạnh phúc sẽ trọn vẹn hơn khi có sự hiện diện của bạn</p>
                    <p style={{ fontSize: 12 }}>trong ngày đặc biệt của chúng mình</p>
                    <p style={{ fontSize: 12, marginBottom: 10, fontWeight: "bold" }}>Mong được đón tiếp bạn !</p>
                    <img style={{ height: "50px" }} src={hoavan2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Info