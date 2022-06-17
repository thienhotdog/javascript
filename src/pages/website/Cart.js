import { get } from "../../api/product";
import { cart, cartBook, clearCart, decreaseCarts, isAuthenticated, removeCart } from "../../auth/util";
import FooterWebsite from "../../compoment/website/Footer";
import HeaderWebsite from "../../compoment/website/Header";

const Cart = {
    render(){
        const {user} = isAuthenticated();
        const cartItems = cart()
        console.log(cartItems)
        const {total} =  cartItems.reduce((cartTotal, cartItem)=>{
            const {cartQuantity,current_seller} = cartItem;
            const {price} = current_seller;
            const itemTotal = price * cartQuantity;
            cartTotal.total += itemTotal
            console.log(cartTotal.total)
           return cartTotal
        },{
            total: 0
        })

        
        if(cartItems.length === 0){
            return`
            ${HeaderWebsite.render()}
            <div class="cart-container container mt-10">
                <h2>Shopping Cart</h2>
                <div class="cart-empty">
                <p>Chưa có sản phẩm nào</p>
                <div class="start-shopping">
                    <a href="/">
                        <i className="fas fa-arrow-left"></i>
                        <span>Start Shopping</span>
                    </a>
            </div>
            </div>
            </div>
            ${FooterWebsite.render()}
            
            `
        }else{
            return`
            ${HeaderWebsite.render()}
            <div class="container mx-auto">
                     <table class="table table-dark">
                         <thead>
                            <tr>
                                <th scope="col">Sản Phẩm</th>
                                <th scope="col">Ảnh</th>
                                <th scope="col">Giá</th>
                                <th scope="col">Số Lượng</th>
                                <th scope="col">Tổng giá</th>
                                 <th scope="col"></th>
                             </tr>
                         </thead>
                         <tbody>
                             ${cartItems.map((item, index) => {
                                const price = item.cartQuantity * item.current_seller.price;
                                return`
                                <tr key=${index}>
                                    <td class="mt-1">${item.name}</td>
                                    <td><img src="${item.images[0].base_url}" class="img_width" /></td>
                                    <td class="mt-3">${item.current_seller.price.toLocaleString()} VNĐ</td>
                                    <td class="mt-3">
                                        <button class="btn btn-danger" data-id="${item.id}" id="decreaseCart">-</button>
                                        <span>${item.cartQuantity}</span>
                                        <button class="btn btn-primary" id="increaseCart" data-id="${item.id}">+</button>
                                    </td>
                                    <td class="mt-3">${price.toLocaleString()} VNĐ</td>
                                    <td class="mt-3">
                                        <button class="btn btn-danger" id="delete" data-id="${item.id}">Delete</button>
                                    </td>
                                </tr>
                                `
                             }
                               
                             )}
                         </tbody>
                     </table>
                    <div class="cart-summary">
                         <button class="btn btn-danger" id="clear_cart"  >Clear Cart</button>
                         <div class="cart-checkout">
                             <div class="subtotal">
                                 <span>Tổng tiền</span>
                                 <span class="amount">${total.toLocaleString()} VNĐ</span>
                             </div>
                                 <a href="/checkout" class="btn btn-primary">
                                     Check out
                                 </a>
                             <div class="start-shopping">
                                 <a href="/">
                                     <i class="fas fa-arrow-left"></i>
                                     <span>Tiếp tục Shopping</span>
                                 </a>
                             </div>
                         </div>
                     </div>
                 </div>

                 ${FooterWebsite.render()}

            `
        }
       

    },
    afterRender(){
        const Delete = document.querySelectorAll("#delete")
        Delete.forEach(Delete  =>{
            Delete.addEventListener("click",async(e) =>{
                e.preventDefault();
                const id = Delete.dataset.id
                const {data : item} = await get(id)
                const isConfirm = window.confirm("bạn muốn xóa sản phẩm này khỏi giỏ hàng ?")
                if(isConfirm){
                    removeCart(item)
                    window.location.href = "/cart"
                }
            })
        })

        const decreaseCart = document.querySelectorAll("#decreaseCart")
        decreaseCart.forEach(btn =>{
            btn.addEventListener("click", async(e) =>{
                e.preventDefault();
                const id = btn.dataset.id;
                const {data:item} = await get(id);
                decreaseCarts(item)
                window.location.href = "/cart"
            })
        })
        const increaseCart = document.querySelectorAll("#increaseCart")
        increaseCart.forEach(btn =>{
            btn.addEventListener("click", async(e) =>{
                e.preventDefault();
                const id = btn.dataset.id;
                const {data :item} = await get(id);
                cartBook(item)
                window.location.href = "/cart"
            })
        })

        const clearCarts = document.getElementById("clear_cart")
        clearCarts.addEventListener("click", async (e) =>{
            e.preventDefault()
            clearCart();
            window.location.href = "/cart"
        })
    }
}

export default Cart;