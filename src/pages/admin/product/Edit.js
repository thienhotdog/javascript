import { edit, get } from "../../../api/product";
import HeaderAdmin from "../../../compoment/admin/Header";
const EditBook = {
  async render(id) {
    const { data } = await get(id);
    console.log(data)
    if (data.authors === undefined) {
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
                        <input type="text" class="form-control"  id="book_name" value="${
                          data.name
                        }" />
                    </div>

                    <div class="mb-3">
                      <label class="form-label">Tác giả</label>
                      <input type="text" class="form-control"  id="authors"  />
                    </div>
    
                   

                    <div class="mb-3">
                        <label class="form-label">Giá bán</label>
                        <input type="number" class="form-control"  id="book_price" value="${
                          data.list_price
                        }" />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Giá hiện tại</label>
                        <input type="number" class="form-control"  id="book_current_seller" value="${
                          data.current_seller.price
                        }" />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Mô tả ngắn</label>
                        <input type="text" class="form-control"  id="book_short_description" value="${
                          data.short_description
                        }" />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Mô tả dài</label>
                        <input type="text" class="form-control"  id="book_description" value="${
                          data.description
                        }" />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Số sao</label>
                        <input type="number" class="form-control" min="1" max="5"  id="book_rating_average" value="${
                          data.rating_average
                        }" />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Danh mục</label>
                        <input type="text" class="form-control"  id="book_categories" value="${
                          data.categories.name
                        }" />
                    </div>

                    <div class="mb-3">
                    <label class="form-label">${
                      data.specifications[0].name
                    }</label>
                  </div>  
  
                  ${data.specifications[0].attributes
                    .map((product) => {
                      return `
                      <div class="row mb-3">
                      <label class="col-sm-2 col-form-label" id="attributes_name">${product.name}</label>
                      <div class="col-sm-10">
                        <input type="text"  class="form-control" id="attributes" data-name ="${product.name}" data-value="${product.value}"  value="${product.value}">
                      </div>
                    </div>
                      `;
                    })
                    .join("")}
                  

                    <button type="submit" class="btn btn-primary bg-blue-500">sửa</button>
                </form>
            </div>
              </main>
            </div>
          </div>
            </div>
        `;
    } else {
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
                    <input type="text" class="form-control"  id="book_name" value="${
                      data.name
                    }" />
                </div>

                <div class="mb-3">
                  <label class="form-label">Tác giả</label>
                  <input type="text" class="form-control"  id="authors" value="${
                    data.authors[0].name
                  }"  />
                </div>

               

                <div class="mb-3">
                    <label class="form-label">Giá bán</label>
                    <input type="number" min="${
                      data.current_seller.price + 1
                    }" class="form-control"  id="book_price" value="${
          data.list_price
      }" />
                </div>

                <div class="mb-3">
                  <label class="form-label">Giá hiện tại</label>
                    <input type="number" class="form-control"  id="book_current_seller" value="${
                      data.current_seller.price
                    }" />
                </div>

                <div class="mb-3">
                    <label class="form-label">Mô tả ngắn</label>
                    <input type="text" class="form-control"  id="book_short_description" value="${
                      data.short_description
                    }" />
                </div>

                <div class="mb-3">
                    <label class="form-label">Mô tả dài</label>
                    <input type="text" class="form-control"  id="book_description" value="${
                      data.description
                    }" />
                </div>

                <div class="mb-3">
                    <label class="form-label">Số sao</label>
                    <input type="number" class="form-control" min="1" max="5"  id="book_rating_average" value="${
                      data.rating_average
                    }" />
                </div>

                <div class="mb-3">
                    <label class="form-label">Danh mục</label>
                    <input type="text" class="form-control"  id="book_categories" value="${
                      data.categories.name
                    }" />
                </div>

                <div class="mb-3">
                  <label class="form-label" id="specifications_name">${
                    data.specifications[0].name
                  }</label>
                </div>  

                ${data.specifications[0].attributes
                  .map((product) => {
                    return `
                    <div class="row mb-3">
                    <label class="col-sm-2 col-form-label" id="attributes_name" data-name="${product.name}">${product.name}</label>
                    <div class="col-sm-10">
                      <input type="text"  class="form-control" id="attributes" data-name ="${product.name}" data-value="${product.value}"  value="${product.value}">
                    </div>
                  </div>
                    `;
                  })
                  .join("")}


                <button type="submit" class="btn btn-primary bg-blue-500">sửa</button>
            </form>
        </div>
          </main>
        </div>
      </div>
        </div>
        `;
    }
  },
  async afterRender() {
    const btn = document.querySelector("#form_edit");
    const url = window.location.pathname.split("/");
    const attribute = document.querySelectorAll("#attributes");
    const attributes = [];

    const id = url[4];
    const { data } = await get(id);
    btn.addEventListener("submit", async (e) => {
      e.preventDefault();

      attribute.forEach((attribute) => {
        const name = attribute.dataset.name;
        const value = attribute.value;
        attributes.push({ name: name, value: value });
      });

      const current_seller = +document.getElementById("book_current_seller")
        .value;
      const price = +document.getElementById("book_price").value;
      console.log(price);
      console.log(current_seller);
      if (
        document.getElementById("book_name").value != "" &&
        document.getElementById("book_price").value != "" &&
        document.getElementById("book_categories").value != "" &&
        price > current_seller &&
        document.getElementById("authors").value != ""
      ) {
        const newProduct = {
          ...data,
          name: document.getElementById("book_name").value,
          authors: [
            {
              name: document.getElementById("authors").value,
            },
          ],
          list_price: +document.getElementById("book_price").value,
          short_description: document.getElementById("book_short_description")
            .value,
          description: document.getElementById("book_description").value,
          rating_average: document.getElementById("book_rating_average").value,
          categories: {
            id: data.categories.id,
            name: document.getElementById("book_categories").value,
            is_leaf: false,
          },
          specifications: [
            {
              name: data.specifications[0].name,
              attributes: attributes.map((attributes) => {
                const name = attributes.name;
                const value = attributes.value;
                return { name: name, value: value };
              }),
            },
          ],
        };
        console.log(newProduct);
        if (confirm("bạn có chắc chắn muốn update sản phẩm này") === true) {
          await edit(id, newProduct);
          window.location.href = "/admin/listbook";
        }
      } else if (
        document.getElementById("book_name").value != "" &&
        document.getElementById("book_price").value != "" &&
        document.getElementById("book_categories").value != "" &&
        price < current_seller
      ) {
        alert("giá hiện tại phải nhỏ hơn giá bán ");
      } else if (
        document.getElementById("book_name").value != "" &&
        document.getElementById("book_price").value != "" &&
        document.getElementById("book_categories").value != "" &&
        price > current_seller &&
        document.getElementById("authors").value === ""
      ) {
        const newProduct = {
          ...data,
          name: document.getElementById("book_name").value,
          list_price: +document.getElementById("book_price").value,
          short_description: document.getElementById("book_short_description")
            .value,
          description: document.getElementById("book_description").value,
          rating_average: document.getElementById("book_rating_average").value,
          categories: {
            id: data.categories.id,
            name: document.getElementById("book_categories").value,
            is_leaf: false,
          },
          specifications: [
            {
              name: data.specifications[0].name,
              attributes: attributes.map((attributes) => {
                const name = attributes.name;
                const value = attributes.value;
                return { name: name, value: value };
              }),
            },
          ],
        };
        console.log(newProduct);
        if (confirm("bạn có chắc chắn muốn update sản phẩm này") === true) {
          await edit(newProduct);
          // window.location.href = "/admin/listbook";
        }
      } else {
        alert("bạn chưa nhập đủ form cần thiết");
      }
    });
  },
};

export default EditBook;
