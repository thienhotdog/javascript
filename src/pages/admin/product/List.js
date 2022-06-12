import { data } from "autoprefixer";
import { edit, get, getAll } from "../../../api/product";
import "../../../assets/css/website.css";
import HeaderAdmin from "../../../compoment/admin/Header";

const ListProduct = {
    async render() {
        const { data } = await getAll();
        console.log(data);
        const result = data.map((product, index) => {
            const hiden = product.isHidden;
            const ishiden = (hiden) =>{
                if(hiden === true){
                    return`
                        <p class="btn btn-primary" data-id="${product.id}" id="hiden">hiện</p>
                    `
                }else{
                    return`
                    <p class="btn btn-danger" data-id="${product.id}" id="hiden">ẩn</p>
                    `
                }
            }
            const hidens =ishiden(hiden);
            if (product.authors && product.quantity_sold) {
                return `
                <tr>
                    <td>${index + 1}</td>
                    <td>
                        <a href="/admin/edit/product/${product.id}">
                        ${product.name}
                        </a>
                    </td>
                    <td>
                        ${product.images.map(img => {
                    return `
                                <img src=${img.base_url} class="shop-img" />
                            `
                }).join('')
                    }
                    </td>
                    <td>
                        ${product.list_price}
                        ${product.original_price}
                    </td>
                    <td>
                        ${product.authors[0].name}
                    </td>
                    <td>
                      ${product.categories.name}
                    </td>
                    <td>
                       ${product.quantity_sold.value}
                    </td>
                    <td>${product.rating_average}</td>
                    <td>${product.short_description}</td>
                    <td>
                    ${product.specifications[0].attributes.map(item => {
                        return `
                            ${item.name}
                        `
                    }).join('')}
                    </td>
                    <td>
                        <a href="/admin/edit/product/1"><p class="btn btn-primary">Edit</p  ></a>
                    </td>
                    <td>
                        ${hidens}
                    </td>
                </tr>
                `
            } else {
                return `
                <tr>
                    <td>${index + 1}</td>
                    <td>
                        <a href="/admin/edit/product/${product.id}">
                        ${product.name}
                        </a>
                    </td>
                    <td>
                        ${product.images.map(img => {
                    return `
                                <img src=${img.base_url} class="shop-img" />
                            `
                }).join('')
                    }
                    </td>
                    <td>
                        ${product.list_price}
                        ${product.original_price}
                    </td>
                    <td>
                        khong co tac gia
                    </td>
                    <td>
                      ${product.categories.name}
                    </td>
                    <td>
                       0
                    </td>
                    <td>${product.rating_average}</td>
                    <td>${product.short_description}</td>
                    <td>
                    ${product.specifications[0].attributes.map(item => {
                        return `
                            ${item.name}
                        `
                    }).join('')}
                    </td>
                    <td>
                        <a href="/admin/edit/product/1"><p class="btn btn-primary">Edit</p></a>
                    </td>
                    <td>
                    ${hidens}
                    </td>
                </tr>
                `
            }

        }).join('')


        return `
            <div>
            ${HeaderAdmin.render()}
            <div class="container-fluid">
            <div class="row">
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
                      <a class="nav-link" href="#">
                        <span data-feather="file" class="align-text-bottom"></span>
                        Đặt hàng
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/admin/listbook">
                        <span data-feather="shopping-cart" class="align-text-bottom"></span>
                        Sản phẩm
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
          
              <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                  <h1 class="h2">Dashboard</h1>
                </div>
                <h2>Sản phẩm</h2>
                <div class="table-responsive mt-3">
                <table class="customers">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>ảnh</th>
                            <th>Giá</th>
                            <th>Tác Giả</th>
                            <th>Danh mục</th>
                            <th>Đã bán</th>
                            <th>số sao</th>
                            <th>mô tả</th>
                            <th>thông tin chung</th>
                            <th>Hành động </th>
                            <th>hiden</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${result}
                    </tbody>
                </table>
                </div>
              </main>
            </div>
          </div>
            </div>
        `
    },
    afterRender(){
        const btns = document.querySelectorAll("#hiden");
        btns.forEach(btn =>{
            const id= btn.dataset.id;
            btn.addEventListener("click", async (e) =>{
                const {data} = await get(id);
                const newBook = {
                    ...data,
                    isHidden: !data.isHidden
                }
                if(confirm("bạn muốn hiện hoặc ẩn sản phẩm này")=== true){
                    edit(id,newBook);
                    window.location.href = "/admin/listbook"
                }
            })
        })
    }   
}

export default ListProduct;



