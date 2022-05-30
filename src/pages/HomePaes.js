import { getAll } from "../api/product";
import "../assets/css/website.css"

const HomePages = {
    async render (){
        const {data} = await getAll();
        const result = data.map(product => {
            return`
                <div class="col-span-3">
                   <a href="/product/${product._id}">
                    <img class="img"  src=${product.img} />
                    <p class="text-center pt-4">${product.name}</p>
                    <p class="text-center text-red-500"><span class="text-black">Giá : </span>${product.price} VNĐ</p>
                   </a>
                </div>    
            `
        }).join("");
        
        return `
            <div class="container mx-auto">
                <div class="py-10 ">
                    <div class="grid grid-cols-12 gap-4">
                       ${result}
                    </div>
                </div>
            </div>
        `
    },
    afterRender(){
        return`
            <div>aaaa</div>
        `
    }
}

export default HomePages;