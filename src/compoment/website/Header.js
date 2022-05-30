import "../../assets/css/website.css";
const Header = {
    render(){
        return /* html */` 
            <header>
                <div class="header">
                    <nav class="header_navbar">
                            <ul class="navbar-list mt-4">
                                <img src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png" class="navbar-list-img" />
                                <img src="https://salt.tikicdn.com/ts/upload/e5/1d/22/61ff572362f08ead7f34ce410a4a6f96.png" class="navbar-list-img absolute mt-10"  />
                            </ul>
                            <div class="navbar-list">
                                <div class="flex">
                                    <input type="text" placeholder="Tìm kiếm sản phẩm, danh mục hay thương hiệu mong muốn..." class="search" />
                                    <button class="button_search">Tìm kiếm</button>
                                </div>
                                <div class="absolute mt-20 flex text-white">
                                    <ul>
                                        <li class="navbar-item">trái cây</li>
                                        <li class="navbar-item">thịt,trứng</li>
                                        <li class="navbar-item">rau củ quả</li>
                                        <li class="navbar-item">sữa,bơ,phô mai</li>
                                        <li class="navbar-item">hải sản</li>
                                        <li class="navbar-item">gạo,mì ăn liền</li>
                                        <li class="navbar-item">đồ uống,bia rượu</li>
                                        <li class="navbar-item">bánh kẹo</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="navbar-list">
                                <div class=" flex ">
                                    <a class="pr-3 navbar-item" href="">
                                       <img  src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png" class="img_user" />
                                    </a>
                                    <a class="pr-3 navbar-item" href="">
                                        <span class="text">Đăng Ký</span>
                                    </a>
                                    <a class="navbar-item" href="">
                                        <span class="text">Đăng Nhập</span>
                                    </a>
                                </div>
                            </div>
                    </nav>
                </div>
                <div class="header_navbar header_2">
                    <ul  class="navbar-list-2">
                        <li class="navbar-item-2">Thịt,Rau Củ</li>
                        <li class="navbar-item-2">Bách Hóa</li>
                        <li class="navbar-item-2">Nhà Cửa</li>
                        <li class="navbar-item-2">Điện Tử</li>
                        <li class="navbar-item-2">Thiết Bị Số</li>
                        <li class="navbar-item-2">Điện Thoại</li>
                        <li class="navbar-item-2">Mẹ & Bé</li>
                        <li class="navbar-item-2">Làm Đẹp</li>
                        <li class="navbar-item-2">Gia Dụng</li>
                        <li class="navbar-item-2">Thời Trang Nữ</li>
                        <li class="navbar-item-2">Thời Trang Nam</li>
                        <li class="navbar-item-2">Giày Nữ</li>
                        <li class="navbar-item-2">Túi Nữ</li>
                    </ul>
                </div>
            </header>
        `
    }
}

export default Header;

