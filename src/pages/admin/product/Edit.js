import { edit, get } from "../../../api/product";
import HeaderAdmin from "../../../compoment/admin/Header";
const EditBook = {
    async render(id) {
        const { data } = await get(id);
        console.log(data);
        return /*html*/`
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
                      <a class="nav-link" href="#">
                        <span data-feather="shopping-cart" class="align-text-bottom"></span>
                        Sản phẩm
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <span data-feather="users" class="align-text-bottom"></span>
                        Danh mục
                      </a>
                    </li>
                  </ul>
          
                </div>
              </nav>
          
              <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-3">
                <h2>Sửa sản phẩm</h2>
                <div class="py-3 container mx-auto">
                <form id="form_edit">
    
                    <div class="mb-3">
                        <label class="form-label">Book Name</label>
                        <input type="text" class="form-control"  id="book_name" value="${data.name}" />
                    </div>
    
                   

                    <div class="mb-3">
                        <label class="form-label">Price</label>
                        <input type="text" class="form-control"  id="book_price" value="${data.list_price}" />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Mô tả ngắn</label>
                        <input type="text" class="form-control"  id="book_short_description" value="${data.short_description}" />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Mô tả dài</label>
                        <input type="text" class="form-control"  id="book_description" value="${data.description}" />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Số sao</label>
                        <input type="number" class="form-control" min="1" max="5"  id="book_rating_average" value="${data.rating_average}" />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Danh mục</label>
                        <input type="text" class="form-control"  id="book_categories" value="${data.categories.name}" />
                    </div>

                  

                    <button type="submit" class="btn btn-primary bg-blue-500">sửa</button>
                </form>
            </div>
              </main>
            </div>
          </div>
            </div>
        `
    },
    async afterRender() {
        const btn = document.querySelector('#form_edit')
        const url = window.location.pathname.split("/");
        const id = url[4]
        const { data } = await get(id);
        btn.addEventListener("submit", async (e) => {
            e.preventDefault();
            console.log(document.getElementById("book_name").value)
            const newProduct = {
                ...data,
                name: document.getElementById("book_name").value,
                list_price: document.getElementById("book_price").value,
                short_description: document.getElementById("book_short_description").value,
                description: document.getElementById("book_description").value,
                rating_average: document.getElementById("book_rating_average").value,
                categories:{
                        id:data.categories.id,
                        name: document.getElementById("book_categories").value,
                        is_leaf: false
                    }
                
               
            }
            console.log(newProduct);
            if(confirm("bạn có chắc chắn muốn update sản phẩm này") === true){
                await edit(id, newProduct);
                window.location.href = "/admin/listbook"
            }
        })
    }
}

export default EditBook;