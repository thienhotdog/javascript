const NavAdmin= {
    render(){
        return`
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div class="position-sticky pt-3">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <span data-feather="home" class="align-text-bottom"></span>
                Dashboard
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/admin/order">
                <span data-feather="file" class="align-text-bottom"></span>
                Đặt hàng
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/admin/listbook">
                <span data-feather="shopping-cart" class="align-text-bottom"></span>
               Tất cả sản phẩm
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/admin/product">
                <span data-feather="shopping-cart" class="align-text-bottom"></span>
               Sản phẩm 
              </a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/admin/garbage">
              <span data-feather="shopping-cart" class="align-text-bottom"></span>
             Thùng rác
            </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/admin/category">
                <span data-feather="users" class="align-text-bottom"></span>
                Danh mục
              </a>
            </li>
          </ul>
  
        </div>
      </nav>
        `
    }
}

export default NavAdmin;