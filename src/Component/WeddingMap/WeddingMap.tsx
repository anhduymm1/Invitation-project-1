import "./WeddingMap.scss";

const WeddingMap = () => {
    return (
        <div className="wmap-container"
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
        >
            <h2 className="timeline-title">WEDDING LOCATIONS</h2>

            <div className="wmap-flex">
                {/* Map 1 - Nhà trai */}
                <div className="wmap-item">
                    <h3 className="wmap-subtitle">🏠 Nhà Trai</h3>
                    <iframe
                        title="Nha Trai"
                        className="wmap-iframe"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.205267099861!2d105.80242077407672!3d9.916855474461816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0614d37739b21%3A0x8acdb7b4b09b15fb!2sAGSTORE!5e0!3m2!1svi!2s!4v1760449180569!5m2!1svi!2s" allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                {/* Map 2 - Nhà gái */}
                <div className="wmap-item">
                    <h3 className="wmap-subtitle">💒 Nhà Gái</h3>
                    <iframe
                        title="Nha Gai"
                        className="wmap-iframe"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.789741430787!2d105.99047377032969!3d9.613364658538666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a04f54ff9f3153%3A0xb9e98f5376d9c95!2zTmjDoCBj4bunYSBWw7Ju!5e0!3m2!1svi!2s!4v1760449463196!5m2!1svi!2s"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default WeddingMap;
