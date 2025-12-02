import { useEffect, useState } from 'react';
import './InvitationCardV2.scss'
import { PiFlowerLotusFill } from "react-icons/pi";
import bgWedding from "../../assets/img/thiep_cuoi.webp";
import { useNavigate } from 'react-router';

const InvitationCardV2 = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const nav = useNavigate()

    useEffect(() => {
        const bgImage = new Image();
        bgImage.src = bgWedding; // Đường dẫn đến ảnh nền
        bgImage.onload = () => setIsLoaded(true); // Khi ảnh tải xong, hiển thị trang
    }, []);

    // useEffect(() => {
    //     if (isLoaded) {
    //         const timer = setTimeout(() => {
    //             nav("/invite");
    //         }, 5000);
    //         return () => clearTimeout(timer);
    //     }
    // }, [isLoaded, nav]);


    return (
        <div className={`card-invitation ${isLoaded ? "loaded" : ""}`}>
            <section className="card-area">
                {/* <!-- Card: Beach --> */}
                <section className="card-section">
                    <div className="card">
                        <div className="flip-card">
                            <div className="flip-card__container" onMouseEnter={() => {
                                setTimeout(() => nav("/invite"), 4000);
                            }}>
                                <div className="card-front">
                                    <div className="card-front__tp card-front__tp--beach">

                                        <h2 className="card-front__heading">
                                        </h2>
                                        <p className="card-front__text-price">

                                        </p>
                                    </div>

                                    <div className="card-front__bt">

                                    </div>


                                </div>
                                <div className='card-back'>
                                    <div className='card-back-container'>
                                        <div className='card-back-img'>
                                            <img src="https://i.pinimg.com/736x/f1/62/52/f162520ddc61d99d91727be20afc35dd.jpg" alt="" />
                                        </div>
                                        <div className='card-back-content'>
                                            <span className='card-back-content__text'>Trân trọng kính mời</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="inside-page">
                            <div className="inside-page__container">
                                <div className="inside-page__container_content">
                                    <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-evenly", gap: "20px" }}>
                                        <div style={{ display: "flex", flexDirection: "column" }}>
                                            <span className='inside-page-name'>Bùi Lê Anh Duy</span>
                                            <span className="inside-page-text" >and</span>
                                            <span className='inside-page-name'>Nhâm Mỹ Oanh</span>
                                        </div>

                                        {/* <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", color: "white" }}>
                                            <div>
                                                <hr />
                                                <span className="inside-page-text">
                                                    Monday
                                                </span>
                                                <hr />
                                            </div>

                                            <div className="inside-page-date">
                                                <span>January</span>
                                                <span style={{ fontSize: "30px", fontWeight: "bold" }}>21</span>
                                                <span>2024</span>
                                            </div>
                                            <div>
                                                <hr />
                                                <span className="inside-page-text">at 5 PM</span>
                                                <hr />
                                            </div>
                                        </div> */}

                                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "20px", color: "white" }}>
                                            <hr style={{ height: "1px", width: "100%", backgroundColor: "white" }} />
                                            <PiFlowerLotusFill fontSize={"50px"} />
                                            <hr style={{ height: "1px", width: "100%", backgroundColor: "white" }} />
                                        </div>
                                    </div>
                                    {/* <div className='card-more' onClick={() => nav("/invite")}>
                                        <span>Xem thêm</span>
                                        <FaLongArrowAltRight className='card-more-bounce'/>
                                    </div> */}
                                    {/* <span className="inside-page__btn inside-page__btn--beach">View deals</span> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </section>
        </div>
    )
}

export default InvitationCardV2