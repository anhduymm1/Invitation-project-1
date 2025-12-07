import "./WeddingFooter.css"
export default function WeddingFooter() {
  return (
    <div
      className="footer-section"
      style={{
        backgroundImage: `url(https://i.pinimg.com/736x/f7/d9/aa/f7d9aaa1c20680aa2ced5a0056eac9b1.jpg)`,
      }}
    >
      <div className="footer-overlay">
        <div className="footer-text">
          <h3>💌 Mừng cưới online</h3>
          <p>Quét mã để gửi lời chúc & mừng cưới đến đôi uyên ương</p>
        </div>

        <img className="qr-img" src={'https://img.vietqr.io/image/970415-106878864792-print.png?accountName=Nham%20My%20Oanh'} alt="QR Mừng cưới" />

        <p className="thanks">Xin chân thành cảm ơn 💖</p>
      </div>
    </div>
  );
}
