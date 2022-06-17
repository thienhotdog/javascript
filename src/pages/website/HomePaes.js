import { filterBooks, getAll, sortBook } from "../../api/product";
import "../../assets/css/website.css";
import FooterWebsite from "../../compoment/website/Footer";
import HeaderWebsite from "../../compoment/website/Header";
import banner from "../../assets/img/banner.png";
import { isAuthenticated } from "../../auth/util";
const HomePages = {
  async render() {
    try {
      const { data } = await getAll();

      const category = data.map((product) => {
        return {
          id: product.categories.id,
          name: product.categories.name,
        };
      });

      const newCategory = (categoryValue = []) => {
        const category = [];
        while (categoryValue.length > 0) {
          category.push(categoryValue[0]);
          categoryValue = categoryValue.filter(
            (item) => item.name !== categoryValue[0].name
          );
        }
        return category;
      };
      const categories = newCategory(category);
      console.log(categories);
      const result = data
        .map((product) => {
          const price = product.list_price;
          const salePrice = product.current_seller.price;
          const sale = Math.round(((price - salePrice) / price) * 100);
          const hiden = product.isHidden;
          const prices = salePrice.toLocaleString();
          console.log(prices);
          if (hiden === false) {
            return `
            <div class="col-span-3 book">
            
            <a href="/book/${product.id}">
                <img src="${product.images[0].base_url}" class="width" /> 
                <p class="text-center text_hover ">${product.name}</p>
                <p class="text-center text-shop mt-2">${prices} VNĐ <span>${sale}%</span> </p>
            </a>
            </div>    
        `;
          }
        })
        .join("");

      return `
      ${HeaderWebsite.render()}
            <div class="container">
                    <div class="py-10 ">
                        <div class="grid grid-cols-12 gap-4">
                            <div class="col-span-3">
                                <div class="direction">
                                    <a href="/">Trang chủ</a>
                                    <span> > </span>
                                    <a href=""> Nhà sách tiki</a>
                                    <div class="shop">
                                        <p class="shop_title mt-3">Danh Mục Sản Phẩm</p>
                                        <div class="mt-3">
                                            <ul class="shop_option">
                                                ${categories
                                                  .map((category) => {
                                                    return `
                                                        <div>
                                                            <li class="option-item" data-name="${category.name}" data-id="${category.id}" id="option_category">${category.name}</li>
                                                        </div>
                                                    `;
                                                  })
                                                  .join("")}
                                            </ul>
                                        </div>
                                        <div className="border-b py-3">
                                            <p class="shop_title">khoảng giá</p>
                                            <ul class="shop_option mt-3">
                                                <li class="flex justify-between mb-2">
                                                <span class="option-item" id="option"data-min="0" data-max="40000">Dưới 40000</span>
                                                </li>
                                                <li class="flex justify-between mb-2">
                                                    <span class="option-item" id="option" data-min="40000" data-max="120000">Từ 40.000 đến 120000</span>
                                                </li>
                                                <li class="flex justify-between mb-2">
                                                    <span class="option-item" id="option"  data-min="120000" data-max="280000">Từ 120.000 đến 280.000 </span>
                                                </li>
                                                <li class="flex justify-between mb-2">
                                                    <span class="option-item" id="option"  data-min="280000"  data-max="10000000000000000000000 ">Trên 280.000</span>
                                                </li>       
                                            </ul>
                                        </div>
                                     </div>
                                </div>
                            </div>

                            <div class="col-span-9">
                                 <div class="direction">
                                    <p>Nhà Sách Tiki</p>
                                    <div>
                                        <img src="${banner}" />
                                    <div>
                                    <div class="header_navbar header_2">
                                        <ul  class="navbar-list-2">
                                            <li class="navbar-item-2">Phổ biến</li>
                                            <li class="navbar-item-2">Bán Chạy</li>
                                            <li class="navbar-item-2">Hàng Mới</li>
                                            <li class="navbar-item-2">Giá Thấp</li>
                                            <li class="navbar-item-2">Giá Cao</li>
                                        </ul>
                                    </div>
                                    <div class="grid grid-cols-12 gap-4" id="product">
                                        ${result}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                    
              </div>
              </div>
              ${FooterWebsite.render()}   
            `;
    } catch (error) {
      console.log(error);
    }
  },
  afterRender() {
    const btn = document.getElementById("btn");
    const search = document.getElementById("search");

    btn.addEventListener("click", async (e) => {
      e.preventDefault();
      const value = document.getElementById("search").value;
      console.log(value);
      const { data } = await filterBooks(value);
      console.log(data);
      const result = data
        .map((product) => {
          const price = product.list_price;
          const salePrice = product.current_seller.price;
          const sale = Math.round(((price - salePrice) / price) * 100);
          const prices = product.list_price.toLocaleString();
          console.log(prices);
          return `
                <div class="col-span-3 book">           
                <a href="/book/${product.id}">
                    <img src="${product.images[0].base_url}" /> 
                    <p class="text-center text_hover ">${product.name}</p>
                    <p class="text-center text-shop mt-2">${salePrice} VNĐ <span>${sale}%</span> </p>
                </a>
                </div>    
                `;
        })
        .join("");

      document.getElementById("product").innerHTML = result;
    });

    search.addEventListener("change", async (e) => {
      e.preventDefault();
      const value = document.getElementById("search").value;
      console.log(value);
      const { data } = await filterBooks(value);
      const result = data
        .map((product) => {
          const price = product.list_price;
          const salePrice = product.current_seller.price;
          const sale = Math.round(((price - salePrice) / price) * 100);
          if (product.isHidden === false) {
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
      document.getElementById("product").innerHTML = result;
    });

    const btns = document.querySelectorAll("#option");
    btns.forEach((btn) => {
      const min = btn.dataset.min;
      const max = btn.dataset.max;
      btn.addEventListener("click", async (e) => {
        e.preventDefault();
        const { data } = await sortBook(min, max);
        const result = data
          .map((product) => {
            const price = product.list_price;
            const salePrice = product.current_seller.price;
            const sale = Math.round(((price - salePrice) / price) * 100);
            if (product.isHidden === false) {
              return `
                <div class="col-span-3 book">           
                <a href="/book/${product.id}">
                    <img src="${product.images[0].base_url}" class="width" /> 
                    <p class="text-center text_hover ">${product.name}</p>
                    <p class="text-center text-shop mt-2">${salePrice} VNĐ <span>${sale}%</span> </p>
                </a>
                </div>    
                `;
            }
          })
          .join("");
        document.getElementById("product").innerHTML = result;
      });
    });

    const { user } = isAuthenticated();
    if (user !== undefined) {
      const clear = document.getElementById("clear");
      clear.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.clear();
        window.location.href = "/";
      });
    }

    const option_category = document.querySelectorAll("#option_category");

    option_category.forEach((category) => {
      const name = category.dataset.name;
      category.addEventListener("click", async (e) => {
        const { data } = await getAll();
        const result = data
          .map((product) => {
            const price = product.list_price;
            const salePrice = product.current_seller.price;
            const sale = Math.round(((price - salePrice) / price) * 100);
            if (product.categories.name === name) {
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
        document.getElementById("product").innerHTML = result;
      });
    });
  },
};

export default HomePages;
