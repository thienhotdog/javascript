import "../../assets/css/website.css";
const FooterWebsite = {
    render(){
        return`
            <footer class="footer_top ">
                <div class="grid grid-cols-10 gap-4">
                    <div class="col-span-2">
                    <p class="pl-8 font-bold text-black" > Hỗ trợ khách hàng</p>
                        <div class="pt-6 pl-8" >
                            <ul class="footer_link">
                                <li><a href="#">Hotline: 1900-6035 (1000 đ/phút, 8-21h kể cả T7, CN)</a></li>
                                <li><a href="#">Các câu hỏi thường gặp</a></li>
                                <li><a href="#">Gửi yêu cầu hỗ trợ</a></li>
                                <li><a href="#">Hướng dẫn đặt hàng</a></li>
                                <li><a href="#">Phương thức vận chuyển</a></li>
                                <li><a href="#">Chính sách đổi trả</a></li>
                                <li><a href="#">Hướng dẫn trả góp</a></li>
                                <li><a href="#">Chính sách hàng nhập khẩu</a></li>
                                <li><a href="#">Hỗ trợ khách hàng: hotro@tiki.vn</a></li>
                                <li><a href="#">Báo lỗi bảo mật: security@tiki.vn</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-span-2">
                    <p class="font-bold text-black">Về Tiki</p>
                        <div class="pt-6">
                            <ul  class="footer_link">
                                <li><a href="#">Giới thiệu Tiki</a></li>
                                <li><a href="#">Tuyển dụng</a></li>
                                <li><a href="#">Chính sách bảo mật thanh toán</a></li>
                                <li><a href="#">Chính sách bảo mật thông tin cá nhân</a></li>
                                <li><a href="#">Chính sách giải quyết khiếu nại</a></li>
                                <li><a href="#">Điều khoản sử dụng</a></li>
                                <li><a href="#">Giới thiệu Tiki Xu</a></li>
                                <li><a href="#">Tiếp thị liên kết cùng Tiki</a></li>
                                <li><a href="#">Bán hàng doanh nghiệp</a></li>
                                <li><a href="#">Điều kiện vận chuyển</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-span-2">
                    <p class="font-bold text-black"> Hợp tác và liên kết</p>
                        <div class="pt-6">
                            <ul class="footer_link">
                                <li><a href="#">Quy chế hoạt động Sàn GDTMĐT</a></li>
                                <li><a href="#">Bán hàng cùng Tiki</a></li>
                                <li><a href="#">Chứng nhận bởi</a></li>
                                <div class="flex">
                                    <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" class="img_user" />
                                    <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg"  />
                                </div>
                            </ul>
                        </div>
                    </div>


                    <div class="col-span-2">
                    <p> Phương thức thanh toán</p>
                        <div class="pt-6">
                            <ul class="footer_link">
                                <li><a href="#">Trợ Giúp & Dịch Vụ Khách Hàng</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Công cụ tìm kiếm cửa hàng</a></li>
                                <li><a href="#">Hình Thức Thanh Toán</a></li>
                                <li><a>Giao Hàng Và Hoàn Tiền</a></li>
                                <li><a>Giao Hàng</a></li>
                                <li><a>Chương Trình Khuyến Mãi</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-span-2">
                    <p> Kết nối với chúng tôi</p>
                        <div class="pt-6">
                            <ul class="footer_link">
                                <li><a href="#">Trợ Giúp & Dịch Vụ Khách Hàng</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Công cụ tìm kiếm cửa hàng</a></li>
                                <li><a href="#">Hình Thức Thanh Toán</a></li>
                                <li><a>Giao Hàng Và Hoàn Tiền</a></li>
                                <li><a>Giao Hàng</a></li>
                                <li><a>Chương Trình Khuyến Mãi</a></li>
                            </ul>
                        </div>
                    </div>

                   <div class="col-span-10">
                        <div class="footer_bomttom">
                        <p class="text-center">© Bản quyền thuộc về trotot.vn 2021.</p>
                        </div>
                   </div>
                </div>
            </footer>
        `
    }
}

export default FooterWebsite;