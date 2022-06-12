import { get, getAll } from "../../api/product";
import "../../assets/css/website.css"
import FooterWebsite from "../../compoment/website/Footer";
import HeaderWebsite from "../../compoment/website/Header";


const Book_Deatail = {
    async render(id) {
        const { data } = await get(id);
        console.log(data)
        const { data: product } = await getAll();
        const relatedProducts = product.filter((item) => item.id != data.id);
        const result = relatedProducts.map(product => {
            if (product.categories.name === data.categories.name) {
                return `
                    <div class="col-span-3 ">
                        <a href="/book/${product.id}">
                            <img src="${product.images[0].base_url}" /> 
                            <p class="text-center text_hover ">${product.name}</p>
                        </a>
                    </div>  
               `
            }
        }).join("")
        const price = data.list_price;
        const salePrice = data.current_seller.price;
        const sale = Math.round((price - salePrice) / price * 100 * 100) / 100;
        if (data.quantity_sold === undefined && data.authors === undefined) {
            return `                  
            <div>
            ${HeaderWebsite.render()}
            <div class="container mx-auto">
                <div class="grid grid-cols-12 gap-4 py-6">
                    <div class="col-span-4 ">
                        <img src="${data.images[0].base_url}" />
                        <div class="grid grid-cols-12 gap-4 mt-2">
                            ${data.images.map(img => {
                return `
                                    <div class="col-span-3">
                                        <img src="${img.base_url}" class="img_aa" />
                                    </div>
                                `
            }).join("")}
                        </div>
                    </div>
                    <div class="col-span-8 ml-16">
                        <p>Tác giả: <span class="text-book-detail">không có tác giả</span> Đứng thứ 13 trong <span class="text-book-detail">Trong 1000 <a>${data.categories.name}</a></span></p>
                        <h1 class="mt-1 text-title">${data.name}</h1>
                        <p class="mt-8 ml-3 text-2xl text-shop">${salePrice}đ <span class="text-sm">${price} đ</span><span class="text-sm ml-3">${sale}%</span></p>
                        <p class="mt-2">Số lượng </p>
                        <div class="mt-2">
                            <button class="btn btn-danger">-</button>
                            <span>....</span>
                            <button class="btn btn-primary">+</button>
                        </div>
                        <div class="pt-2 mt-4 button">
                            <button id="btn" >Mua ngay</button>
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
                  ${data.specifications[0].attributes.map(data => {
                return `
                      <p class="text_bg">${data.name}</p>
                      `
            }).join("")}
                </div>
                <div class="col-span-8 ">
                ${data.specifications[0].attributes.map(data => {
                return `
                    <p class="text_bg">${data.value}</p>
                    `
            }).join("")}
                </div>
            </div>
            
        </div>
        <div>
            <p>Mô Tả Sản Phẩm</p>
            <p>${data.description}</p>
        </div>
    </div>
    ${FooterWebsite.render()}
            `
        } else if (data.quantity_sold === undefined && data.authors != undefined) {
            return `
                            
            <div>
            ${HeaderWebsite.render()}
            <div class="container mx-auto">
                <div class="grid grid-cols-12 gap-4 py-6">
                    <div class="col-span-4 ">
                        <img src="${data.images[0].base_url}" />
                        <div class="grid grid-cols-12 gap-4 mt-2">
                            ${data.images.map(img => {
                return `
                                    <div class="col-span-3">
                                        <img src="${img.base_url}" class="img_aa" />
                                    </div>
                                `
            }).join("")}
                        </div>
                    </div>
                    <div class="col-span-8 ml-16">
                        <p>Tác giả: <span class="text-book-detail">${data.authors[0].name}</span> Đứng thứ 13 trong <span class="text-book-detail">Trong 1000 <a>${data.categories.name}</a></span></p>
                        <h1 class="mt-1 text-title">${data.name}</h1>
                        <p class="mt-8 ml-3 text-2xl text-shop">${salePrice}đ <span class="text-sm">${price} đ</span><span class="text-sm ml-3">${sale}%</span></p>
                        <p class="mt-2">Số lượng </p>
                        <div class="mt-2">
                            <button class="btn btn-danger">-</button>
                            <span>....</span>
                            <button class="btn btn-primary">+</button>
                        </div>
                        <div class="pt-2 mt-4 button">
                            <button id="btn" >Mua ngay</button>
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
                  ${data.specifications[0].attributes.map(data => {
                return `
                      <p class="text_bg">${data.name}</p>
                      `
            }).join("")}
                </div>
                <div class="col-span-8 ">
                ${data.specifications[0].attributes.map(data => {
                return `
                    <p class="text_bg">${data.value}</p>
                    `
            }).join("")}
                </div>
            </div>
            
        </div>
        <div>
            <p>Mô Tả Sản Phẩm</p>
            <p>${data.description}</p>
        </div>
    </div>
    ${FooterWebsite.render()}
            `
        } else if (data.quantity_sold != undefined && data.authors === undefined) {
            return `
                        
            <div>
                ${HeaderWebsite.render()}
                <div class="container mx-auto">
                    <div class="grid grid-cols-12 gap-4 py-6">
                        <div class="col-span-4 ">
                            <img src="${data.images[0].base_url}" />
                            <div class="grid grid-cols-12 gap-4 mt-2">
                                ${data.images.map(img => {
                return `
                                        <div class="col-span-3">
                                            <img src="${img.base_url}" class="img_aa" />
                                        </div>
                                    `
            }).join("")}
                            </div>
                        </div>
                        <div class="col-span-8 ml-16">
                            <p>Tác giả: <span class="text-book-detail">không có tác giả</span> Đứng thứ 13 trong <span class="text-book-detail">Trong 1000 <a>${data.categories.name}</a></span></p>
                            <h1 class="mt-1 text-title">${data.name}</h1>
                            <p class="mt-8 ml-3 text-2xl text-shop">${salePrice}đ <span class="text-sm">${price} đ</span><span class="text-sm ml-3">${sale}%</span></p>
                            <p class="mt-2">Số lượng </p>
                            <div class="mt-2">
                                <button class="btn btn-danger">-</button>
                                <span>....</span>
                                <button class="btn btn-primary">+</button>
                            </div>
                            <div class="pt-2 mt-4 button">
                                <button id="btn" >Mua ngay</button>
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
                      ${data.specifications[0].attributes.map(data => {
                return `
                          <p class="text_bg">${data.name}</p>
                          `
            }).join("")}
                    </div>
                    <div class="col-span-8 ">
                    ${data.specifications[0].attributes.map(data => {
                return `
                        <p class="text_bg">${data.value}</p>
                        `
            }).join("")}
                    </div>
                </div>
                
            </div>
            <div>
                <p>Mô Tả Sản Phẩm</p>
                <p>${data.description}</p>
            </div>
        </div>
        ${FooterWebsite.render()}
            `
        } else {
            return `                     
            <div>
                ${HeaderWebsite.render()}
                <div class="container mx-auto">
                    <div class="grid grid-cols-12 gap-4 py-6">
                        <div class="col-span-4 ">
                            <img src="${data.images[0].base_url}" />
                            <div class="grid grid-cols-12 gap-4 mt-2">
                                ${data.images.map(img => {
                return `
                                        <div class="col-span-3">
                                            <img src="${img.base_url}" class="img_aa" />
                                        </div>
                                    `
            }).join("")}
                            </div>
                        </div>
                        <div class="col-span-8 ml-16">
                            <p>Tác giả: <span class="text-book-detail">${data.authors[0].name}</span> Đứng thứ 13 trong <span class="text-book-detail">Trong 1000 <a>${data.categories.name}</a></span></p>
                            <h1 class="mt-1 text-title">${data.name}</h1>
                            <p class="mt-8 ml-3 text-2xl text-shop">${salePrice}đ <span class="text-sm">${price} đ</span><span class="text-sm ml-3">${sale}%</span></p>
                            <p class="mt-2">Số lượng </p>
                            <div class="mt-2">
                                <button class="btn btn-danger">-</button>
                                <span>....</span>
                                <button class="btn btn-primary">+</button>
                            </div>
                            <div class="pt-2 mt-4 button">
                                <button id="btn" >Mua ngay</button>
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
                          ${data.specifications[0].attributes.map(data => {
                return `
                              <p class="text_bg">${data.name}</p>
                              `
            }).join("")}
                        </div>
                        <div class="col-span-8 ">
                        ${data.specifications[0].attributes.map(data => {
                return `
                            <p class="text_bg">${data.value}</p>
                            `
            }).join("")}
                        </div>
                    </div>
                    
                </div>
                <div>
                    <p>Mô Tả Sản Phẩm</p>
                    <p>${data.description}</p>
                </div>
            </div>
            ${FooterWebsite.render()}
            `
        }

    },
    afterRender() {
        // const btn = document.getElementById("btn");
        // // console.log(btn);
        // btn.addEventListener("click", () => {
        //     console.log("aaaa")
        // })
    }
}

export default Book_Deatail;