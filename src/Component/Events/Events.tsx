import './Events.scss'

const Events = () => {
    return (
        <div className='events'>
            <div className='events-content'>
                <div className='events-header-container'>
                    <span className='events-header-title'
                        data-aos="fade-down"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                    >SAVE THE DATES</span>
                </div>

                <div className='events-img'>
                    <div
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        className='events-img-container' style={{ justifyContent: "flex-start" }}>
                        <div className='events-img-container-img'>
                            <div className='events-img-number-border' style={{ display: "flex", flexDirection: "column" }}>
                                <img className='events-img-number' src="https://i.pinimg.com/736x/dc/1c/f7/dc1cf7bd1c9ad3431474bf67d8a52767.jpg" alt="" />
                                <span className='event-img-title'>01.</span>
                            </div>
                        </div>

                        <div className='events-details' >
                            <span className='event-details-date'>
                                29 NOV 2021
                            </span>
                            <span className='event-details-title'>
                                THE DAY WE MEET
                            </span>
                        </div>
                    </div>

                    <div className='events-img-container'
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                    >
                        <div className='events-img-container-img' style={{ justifyContent: "flex-end" }}>
                            <div className='events-img-number-border'>
                                <img style={{ objectPosition: "center" }} className='events-img-number' src="https://i.pinimg.com/736x/35/49/30/35493084452933c22c2ec3519e724196.jpg" alt="" />
                                <span className='event-img-title-right'>02.</span>
                            </div>
                        </div>

                        <div className='events-details'>
                            <span className='event-details-date'>
                                07 SEP 2022
                            </span>
                            <span className='event-details-title'>
                                WHERE IT ALL BEGAN
                            </span>
                        </div>
                    </div>

                    <div className='events-img-container'
                        data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                    >
                        <div className='events-img-container-img' style={{ justifyContent: "flex-start" }}>
                            <div className='events-img-number-border'>
                                <img className='events-img-number' src="https://i.pinimg.com/736x/c6/67/42/c667422ed019595b46e82831281e9492.jpg" alt="" />
                                <span className='event-img-title'>03.</span>
                            </div>
                        </div>

                        <div className='events-details'>
                            <span className='event-details-date'>
                                30 OCT 2025
                            </span>
                            <span className='event-details-title'>
                                THE DAY WE GOT ENGAGED
                            </span>
                        </div>
                    </div>

                    <div className='events-img-container'
                        data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                    >
                        <div className='events-img-container-img' style={{ justifyContent: "flex-end" }}>
                            <div className='events-img-number-border'>
                                <img className='events-img-number' src="https://i.pinimg.com/736x/8c/4d/26/8c4d2641957aa8c1c11b6ca6d8888a16.jpg" alt="" />
                                <span className='event-img-title-right'>04.</span>
                            </div>
                        </div>

                        <div className='events-details'>
                            <span className='event-details-date'>
                                18 DEC 2025
                            </span>
                            <span className='event-details-title'>
                                THE DAY WE SAID “I DO”
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;
