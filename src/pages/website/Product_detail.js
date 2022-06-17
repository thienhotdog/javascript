import { get, getAll } from "../../api/product";
import "../../assets/css/website.css";
import FooterWebsite from "../../compoment/website/Footer";
import HeaderWebsite from "../../compoment/website/Header";
import oneevaluate from "../../assets/img/Frame1.png";
import twoevaluate from "../../assets/img/Frame2.png";
import threeevaluate from "../../assets/img/Frame3.png";
import fourevaluate from "../../assets/img/Frame4.png";
import fiveevaluate from "../../assets/img/Frame5.png";
import { cartBook, isAuthenticated } from "../../auth/util";
const Book_Deatail = {
  async render(id) {
    const { data } = await get(id);
    const { data: product } = await getAll();
    const relatedProducts = product.filter((item) => item.id != data.id);
    const result = relatedProducts
      .map((product) => {
        const price = data.list_price;
        const salePrice = data.current_seller.price;
        const sale = Math.round(((price - salePrice) / price) * 100);
        if (product.categories.name === data.categories.name) {
          return `
          <div class="col-span-3 book">           
          <a href="/book/${product.id}">
              <img src="${product.images[0].base_url}" class="width" /> 
              <p class="text-center text_hover ">${product.name}</p>
              <p class="text-center text-shop mt-2">${salePrice.toLocaleString()} VNĐ <span>${sale}%</span> </p>
          </a>
        </div>  
               `;
        }
      })
      .join("");

    const price = data.list_price;
    const salePrice = data.current_seller.price;
    const sale = Math.round(((price - salePrice) / price) * 100);
    const evaluate = (evaluate) =>{
        if(evaluate >0.5 && evaluate <1.5){
            return`
                <img src="${oneevaluate}" class="mt-2 img_width"/>
            `
        }else if(evaluate>=1.5 && evaluate <2.5){
            return`
                <img src="${twoevaluate}" class="mt-2 img_width" />
            `
        }else if(evaluate>=2.5 && evaluate<3.5){
            return`
                <img src="${threeevaluate}" class="mt-2 img_width" />
            `
        }else if(evaluate >= 3.5 && evaluate <4.5){
            return`
                <img src="${fourevaluate}" class="mt-2 img_width" />
            `
        }else if (evaluate>=4.5){
            return`
                <img src="${fiveevaluate}" class="mt-2 img_width"  />
            `
        }else{
          return`
            <p class="mt-2">Chưa có sao</p>
          `
        }
    }
    const evaluatess = data.rating_average;
    console.log(evaluatess)
    const evaluates = evaluate(evaluatess) 
    if (data.quantity_sold === undefined && data.authors === undefined) {
      return `                  
            <div>
            ${HeaderWebsite.render()}
            <div class="container mx-auto">
                <div class="grid grid-cols-12 gap-4 py-6">
                    <div class="col-span-4 ">
                        <img src="${data.images[0].base_url}" class="width" />
                        <div class="grid grid-cols-12 gap-4 mt-2">
                            ${data.images
                              .map((img) => {
                                return `
                                    <div class="col-span-3">
                                        <img src="${img.base_url}" class="img_aa" />
                                    </div>
                                `;
                              })
                              .join("")}
                        </div>
                    </div>
                    <div class="col-span-8 ml-16">
                        <p>Tác giả: <span class="text-book-detail">không có tác giả</span> Đứng thứ 13 trong <span class="text-book-detail">Trong 1000 <a>${
                          data.categories.name
                        }</a></span></p>
                        <h1 class="mt-1 text-title">${data.name}</h1>
                        <p class="mt-8 ml-3 text-2xl text-shop">${salePrice.toLocaleString()}đ <span class="text-sm">${price.toLocaleString()} đ</span><span class="text-sm ml-3">${sale}%</span></p>
                        <div class="row mb-3 flex">
                        <label class="col-sm-2 col-form-label">${data.rating_average} Sao</label>
                        <div class="col-sm-10">
                            ${evaluates}
                        </div>
                      </div>
                        <p class="mt-2">Số lượng </p>
                        <div class="mt-2">
                            <button class="btn btn-danger">-</button>
                            <span>....</span>
                            <button class="btn btn-primary">+</button>
                        </div>
                        <div class="pt-2 mt-4 button">
                            <button id="btn_click" data-id="${data.id}">Mua ngay</button>
                         <div>
                    </div>
                </div>                     
            </div>
        </div>
            <div>
                <p>Sản phẩm liên quan</p>
                <div class="grid grid-cols-12 gap-4 py-6">
                    ${result}
                </div>
            </div>
        
            <div  class="mt-3">
            <p>Thông tin chi tiết</p>

            <div class="grid grid-cols-12 gap-4 py-6">
                <div class="col-span-4 bg">
                  ${data.specifications[0].attributes
                    .map((data) => {
                      return `
                      <p class="text_bg">${data.name}</p>
                      `;
                    })
                    .join("")}
                </div>
                <div class="col-span-8 ">
                ${data.specifications[0].attributes
                  .map((data) => {
                    return `
                    <p class="text_bg">${data.value}</p>
                    `;
                  })
                  .join("")}
                </div>
            </div>
            
        </div>
        <div>
            <p>Mô Tả Sản Phẩm</p>
            <p>${data.description}</p>
        </div>
    </div>
    ${FooterWebsite.render()}
            `;
    } else if (data.quantity_sold === undefined && data.authors != undefined) {
      return `
                            
            <div>
            ${HeaderWebsite.render()}
            <div class="container mx-auto">
                <div class="grid grid-cols-12 gap-4 py-6">
                    <div class="col-span-4 ">
                        <img src="${data.images[0].base_url}" />
                        <div class="grid grid-cols-12 gap-4 mt-2">
                            ${data.images
                              .map((img) => {
                                return `
                                    <div class="col-span-3">
                                        <img src="${img.base_url}" class="img_aa" />
                                    </div>
                                `;
                              })
                              .join("")}
                        </div>
                    </div>
                    <div class="col-span-8 ml-16">
                        <p>Tác giả: <span class="text-book-detail">${
                          data.authors[0].name
                        }</span> Đứng thứ 13 trong <span class="text-book-detail">Trong 1000 <a>${
        data.categories.name
      }</a></span></p>
                        <h1 class="mt-1 text-title">${data.name}</h1>
                        <p class="mt-8 ml-3 text-2xl text-shop">${salePrice.toLocaleString()}đ <span class="text-sm">${price.toLocaleString()} đ</span><span class="text-sm ml-3">${sale}%</span></p>
                        <div class="row mb-3 flex">
                        <label class="col-sm-2 col-form-label">${data.rating_average} Sao</label>
                        <div class="col-sm-10">
                            ${evaluates}
                        </div>
                      </div>
                        <p class="mt-2">Số lượng </p>
                        <div class="mt-2">
                            <button class="btn btn-danger">-</button>
                            <span>....</span>
                            <button class="btn btn-primary">+</button>
                        </div>
                        <div class="pt-2 mt-4 button">
                            <button id="btn_click" data-id="${data.id}">Mua ngay</button>
                         <div>
                    </div>
                </div>                     
            </div>
        </div>
            <div>
                <p>Sản phẩm liên quan</p>
                <div class="grid grid-cols-12 gap-4 py-6">
                    ${result}
                </div>
            </div>
        
            <div  class="mt-3">
            <p>Thông tin chi tiết</p>

            <div class="grid grid-cols-12 gap-4 py-6">
                <div class="col-span-4 bg">
                  ${data.specifications[0].attributes
                    .map((data) => {
                      return `
                      <p class="text_bg">${data.name}</p>
                      `;
                    })
                    .join("")}
                </div>
                <div class="col-span-8 ">
                ${data.specifications[0].attributes
                  .map((data) => {
                    return `
                    <p class="text_bg">${data.value}</p>
                    `;
                  })
                  .join("")}
                </div>
            </div>
            
        </div>
        <div>
            <p>Mô Tả Sản Phẩm</p>
            <p>${data.description}</p>
        </div>
    </div>
    ${FooterWebsite.render()}
            `;
    } else if (data.quantity_sold != undefined && data.authors === undefined) {
      return `
                        
            <div>
                ${HeaderWebsite.render()}
                <div class="container mx-auto">
                    <div class="grid grid-cols-12 gap-4 py-6">
                        <div class="col-span-4 ">
                            <img src="${data.images[0].base_url}" />
                            <div class="grid grid-cols-12 gap-4 mt-2">
                                ${data.images
                                  .map((img) => {
                                    return `
                                        <div class="col-span-3">
                                            <img src="${img.base_url}" class="img_aa" />
                                        </div>
                                    `;
                                  })
                                  .join("")}
                            </div>
                        </div>
                        <div class="col-span-8 ml-16">
                            <p>Tác giả: <span class="text-book-detail">không có tác giả</span> Đứng thứ 13 trong <span class="text-book-detail">Trong 1000 <a>${
                              data.categories.name
                            }</a></span></p>
                            <h1 class="mt-1 text-title">${data.name}</h1>
                            <p class="mt-8 ml-3 text-2xl text-shop">${salePrice.toLocaleString()}đ <span class="text-sm">${price.toLocaleString()} đ</span><span class="text-sm ml-3">${sale}%</span></p>
                            <div class="row mb-3 flex">
                            <label class="col-sm-2 col-form-label">${data.rating_average} Sao</label>
                            <div class="col-sm-10">
                                ${evaluates}
                            </div>
                          </div>
                            <p class="mt-2">Số lượng </p>
                            <div class="mt-2">
                                <button class="btn btn-danger">-</button>
                                <span>....</span>
                                <button class="btn btn-primary">+</button>
                            </div>
                            <div class="pt-2 mt-4 button">
                                <button id="btn_click" data-id="${data.id}" >Mua ngay</button>
                             <div>
                        </div>
                    </div>                     
                </div>
            </div>
                <div>
                    <p>Sản phẩm liên quan</p>
                    <div class="grid grid-cols-12 gap-4 py-6">
                        ${result}
                    </div>
                </div>
            
                <div  class="mt-3">
                <p>Thông tin chi tiết</p>

                <div class="grid grid-cols-12 gap-4 py-6">
                    <div class="col-span-4 bg">
                      ${data.specifications[0].attributes
                        .map((data) => {
                          return `
                          <p class="text_bg">${data.name}</p>
                          `;
                        })
                        .join("")}
                    </div>
                    <div class="col-span-8 ">
                    ${data.specifications[0].attributes
                      .map((data) => {
                        return `
                        <p class="text_bg">${data.value}</p>
                        `;
                      })
                      .join("")}
                    </div>
                </div>
                
            </div>
            <div>
                <p>Mô Tả Sản Phẩm</p>
                <p>${data.description}</p>
            </div>
        </div>
        ${FooterWebsite.render()}
            `;
    } else {
      return `                     
            <div>
                ${HeaderWebsite.render()}
                <div class="container mx-auto">
                    <div class="grid grid-cols-12 gap-4 py-6">
                        <div class="col-span-4 ">
                            <img src="${data.images[0].base_url}" />
                            <div class="grid grid-cols-12 gap-4 mt-2">
                                ${data.images
                                  .map((img) => {
                                    return `
                                        <div class="col-span-3">
                                            <img src="${img.base_url}" class="img_aa" />
                                        </div>
                                    `;
                                  })
                                  .join("")}
                            </div>
                        </div>
                        <div class="col-span-8 ml-16">
                            <p>Tác giả: <span class="text-book-detail">${
                              data.authors[0].name
                            }</span> Đứng thứ 13 trong <span class="text-book-detail">Trong 1000 <a>${
        data.categories.name
      }</a></span></p>
                            <h1 class="mt-1 text-title">${data.name}</h1>
                            <p class="mt-8 ml-3 text-2xl text-shop">${salePrice.toLocaleString()}đ <span class="text-sm">${price.toLocaleString()} đ</span><span class="text-sm ml-3">${sale}%</span></p>
                            <div class="row mb-3 flex">
                            <label class="col-sm-2 col-form-label">${data.rating_average} Sao</label>
                            <div class="col-sm-10">
                                ${evaluates}
                            </div>
                          </div>
                            <p class="mt-2">Số lượng </p>
                            <div class="mt-2">
                                <button class="btn btn-danger">-</button>
                                <span>....</span>
                                <button class="btn btn-primary">+</button>
                            </div>
                            <div class="pt-2 mt-4 button">
                                <button id="btn_click" data-id="${data.id}">Mua ngay</button>
                             <div>
                        </div>
                    </div>                     
                </div>
            </div>
                <div>
                    <p>Sản phẩm liên quan</p>
                    <div class="grid grid-cols-12 gap-4 py-6">
                        ${result}
                    </div>
                </div>
                <div  class="mt-3">
                    <p>Thông tin chi tiết</p>

                    <div class="grid grid-cols-12 gap-4 py-6">
                        <div class="col-span-4 bg">
                          ${data.specifications[0].attributes
                            .map((data) => {
                              return `
                              <p class="text_bg">${data.name}</p>
                              `;
                            })
                            .join("")}
                        </div>
                        <div class="col-span-8 ">
                        ${data.specifications[0].attributes
                          .map((data) => {
                            return `
                            <p class="text_bg">${data.value}</p>
                            `;
                          })
                          .join("")}
                        </div>
                    </div>
                    
                </div>
                <div>
                    <p>Mô Tả Sản Phẩm</p>
                    <p>${data.description}</p>
                </div>
            </div>
            ${FooterWebsite.render()}
            `;
    }
  },
  afterRender(){
    const {user} = isAuthenticated();
    if (user !== undefined) {
      const clear = document.getElementById("clear");
      clear.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.clear();
        window.location.href = "/";
      });
    }
    console.log(user)
    const btn = document.getElementById("btn_click")
    btn.addEventListener("click", async(e) =>{
      e.preventDefault();
      if(user){
        const id = btn.dataset.id
        const {data} = await get(id);
        cartBook(data)
        alert("sản phẩm đã đc thêm vào giỏ hàng")
        window.location.href = "/cart"
      }else{
        alert("bạn chưa đăng nhập. Vui lòng đăng nhập để mua hàng")
      }
    })
    
  }
};

export default Book_Deatail;
