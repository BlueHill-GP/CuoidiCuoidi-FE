import React from 'react'
import "../css/CooperateWith.css"

function CooperateWith() {
    return (
        <div className='container'>
            <div className='boxBanDo'>
            <div className='text_map'>
                    <h1 >Hợp tác với nền tảng đám cưới hàng đầu Đông Nam Á</h1>
                    <p>Với hơn 1 triệu người dùng hoạt động hàng tháng ở Châu Á - Thái Bình Dương và hơn thế nữa, Cuoidi Cuoidi luôn sẵn sàng hỗ trợ sự phát triển của bạn và doanh nghiệp của bạn.</p>
                    <p>Chọn đối tác phù hợp nhất với nhu cầu của bạn từ các tùy chọn khác nhau bên dưới</p>
                </div>
            <img className='bando' src="https://st.depositphotos.com/1480688/1947/v/950/depositphotos_19476947-stock-illustration-dotted-world-map.jpg" alt="bando" />
            
            </div>
            <h2 className='title'>Bắt đầu quan hệ đối tác trong 4 bước đơn giản</h2>

            {/* <div className="step">
                <div className="cicle">
                    1
                </div>
            </div> */}

            <div className='content'>
                <div className="box">
                    <img className='imagebox' src="https://engineering.unl.edu/images/staff/Kayla-Person.jpg" alt="" />
                    <h4>Thể hiện sự quan tâm của bạn</h4>
                    <p>Hãy liên hệ với chúng tôi thông qua một trong các PIC đối tác của chúng tôi hoặc gửi email đến qaun hệ đối tác</p>
                </div>
                <div className="box">
                    <img className='imagebox' src="https://engineering.unl.edu/images/staff/Kayla-Person.jpg" alt="" />
                    <h4>Thể hiện sự quan tâm của bạn</h4>
                    <p>Hãy liên hệ với chúng tôi thông qua một trong các PIC đối tác của chúng tôi hoặc gửi email đến qaun hệ đối tác</p>
                </div>
                <div className="box">
                    <img className='imagebox' src="https://engineering.unl.edu/images/staff/Kayla-Person.jpg" alt="" />
                    <h4>Thể hiện sự quan tâm của bạn</h4>
                    <p>Hãy liên hệ với chúng tôi thông qua một trong các PIC đối tác của chúng tôi hoặc gửi email đến qaun hệ đối tác</p>
                </div>
                <div className="box">
                    <img className='imagebox' src="https://engineering.unl.edu/images/staff/Kayla-Person.jpg" alt="" />
                    <h4>Thể hiện sự quan tâm của bạn</h4>
                    <p>Hãy liên hệ với chúng tôi thông qua một trong các PIC đối tác của chúng tôi hoặc gửi email đến qaun hệ đối tác</p>
                </div>
            </div>

            <div className="buttons">
                <span className="btn">
					<a className='buttonnn' href="/login">Trở thành đối tác chụp ảnh</a>
				</span>
                <span className="btn">
					<a className='buttonnn' href="/login">Trở thành đối tác trang điểm</a>
				</span>
            </div>
        </div>
    )
}

export default CooperateWith