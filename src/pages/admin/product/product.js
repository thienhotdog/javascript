import { edit, get, getAll } from "../../../api/product";
import { isAuthenticated } from "../../../auth/util";
import HeaderAdmin from "../../../compoment/admin/Header"
import NavAdmin from "../../../compoment/admin/Nav"

const Product = {
    async render(){
        const { data } = await getAll();
        console.log(data);
        const result = data.map((product, index) => {
            if (product.authors  && product.quantity_sold && product.isHidden === false) {
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
                        <a href="/admin/edit/product/${product.id}"><p class="btn btn-primary">Sửa</p  ></a>
                        <p class="btn btn-danger" id="garbage" data-id="${product.id}">Garbage</p>
                    </td>
                   
                </tr>
                `
            } else if (product.authors && product.quantity_sold === undefined  && product.isHidden === false) {
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
                        <a href="/admin/edit/product/${product.id}"><p class="btn btn-primary">Sửa</p></a>
                        <p class="btn btn-danger" id="garbage" data-id="${product.id}">Garbage</p>
                    </td>
                    
                </tr>
                `
            }else if(product.authors === undefined && product.quantity_sold  && product.isHidden === false){
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
                        không có tác giả
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
                        <a href="/admin/edit/product/${product.id}"><p class="btn btn-primary">Sửa</p></a>
                        <p class="btn btn-danger" id="garbage" data-id="${product.id}">Garbage</p>
                    </td>
                   
                </tr>
                `
            }else if (product.authors === undefined && product.quantity_sold === undefined &&  product.isHidden === false){
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
                        không có tác giả
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
                        <a href="/admin/edit/product/${product.id}"><p class="btn btn-primary">Sửa</p></a>
                        <p class="btn btn-danger" id="garbage" data-id="${product.id}">Garbage</p>
                    </td>
                    
                </tr>
                `
            }
        }).join('')

        return`
        <div>
            ${HeaderAdmin.render()}
            <div class="container-fluid">
            <div class="row">
            ${NavAdmin.render()}
          
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
        const btn = document.querySelectorAll("#garbage")
        btn.forEach(btn =>{
            const id = btn.dataset.id;
            btn.addEventListener("click", async(e) =>{
                e.preventDefault();
                const {data} = await get(id)
                const newBook = {
                    ...data,
                    isHidden: !data.isHidden
                }

                if(confirm("bạn muốn chuyển sản phẩm này đến thùng rác ?")=== true){
                    edit(id,newBook);
                    window.location.href = "/admin/garbage"
                }
            })
        })
        
    }
}

export default Product