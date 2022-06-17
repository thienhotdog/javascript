import { order } from "../../api/order";
import { cart, clearCart, isAuthenticated } from "../../auth/util";
import FooterWebsite from "../../compoment/website/Footer";
import HeaderWebsite from "../../compoment/website/Header";

const Checkout ={
    render(){
        const {user} = isAuthenticated();
        const cartItems = cart();
        console.log(cartItems)
        const {total,quantity} =  cartItems.reduce((cartTotal, cartItem)=>{
            const {cartQuantity,current_seller} = cartItem;
            const {price} = current_seller;
            const itemTotal = price * cartQuantity;
            cartTotal.total += itemTotal
            cartTotal.quantity += cartQuantity
           return cartTotal
        },{
            total: 0,
            quantity: 0
        })
        return`
        ${HeaderWebsite.render()}
        <div class="container">
        <main>
            <div class="py-5 text-center">
                <h2>Đặt Hàng</h2>
            </div>
            <div class="row g-5">
                <div class="col-md-5 col-lg-4 order-md-last">
                    <h4 class="d-flex justify-content-between align-items-center mb-3">
                        <span class="text-primary">Giỏ Hàng Của Bạn </span>
                        <span class="badge bg-primary rounded-pill">${quantity}</span>
                    </h4>
                    <ul class="list-group mb-3">
                        ${cartItems.map((item, index) => {
                            const price = item.current_seller.price * item.cartQuantity
                            return`
                            <li class="list-group-item d-flex justify-content-between lh-sm" key=${index}>
                            <div>
                                <h6 class="my-0">
                                    ${item.name}
                                    <span class="badge bg-primary rounded-pill">${item.cartQuantity}</span>
                                </h6>
                            </div>
                            <span class="text-muted">${price.toLocaleString()}VNĐ</span>
                        </li>
                            `
                        })}
                        <li class="list-group-item d-flex justify-content-between">
                            <span>Tổng tiền (VNĐ)</span>
                            <strong>${total.toLocaleString()} VNĐ</strong>
                        </li>
                    </ul>
                </div>
                <div class="col-md-7 col-lg-8">
                    <h4 class="mb-3">Địa chỉ thanh toán</h4>
                    <form class="needs-validation">
                        <div class="row g-3">
                            <div class="col-12">
                                <label class="form-label">Name</label>
                                <input type="text" id="name"  class="form-control" value=${user.name} />
                            </div>
                            <div class="col-12">
                                <label  class="form-label">Email</label>
                                    <input type="text" readonly class="form-control" value=${user.email} />
                            </div>
                            <div class="col-12">
                                <label class="form-label">Address</label>
                                <input type="text" class="form-control" id="address" placeholder="1234 Main St" />
                            </div>
                
                        </div>
                        <hr class="my-4" />
                        <button class="w-100 btn btn-primary btn-lg bg-blue-500" type="submit" id="checkout">Đặt Hàng</button>
                    </form>
                </div>
            </div>
        </main>
    </div>

    ${FooterWebsite.render()}
        `
    },
    afterRender(){
        const checkout = document.getElementById("checkout")
        const cartItems = cart();
        const {user} = isAuthenticated();
        console.log(user)
        const {total,quantity} =  cartItems.reduce((cartTotal, cartItem)=>{
            const {cartQuantity,current_seller} = cartItem;
            const {price} = current_seller;
            const itemTotal = price * cartQuantity;
            cartTotal.total += itemTotal
            cartTotal.quantity += cartQuantity
           return cartTotal
        },{
            total: 0,
            quantity: 0
        })
        checkout.addEventListener("click", async(e) =>{
            e.preventDefault()
            if(document.getElementById("name").value != "" && document.getElementById("address").value !=""){
                const newOrder = {
                    name: user.name,
                    email: user.email,
                    product: cartItems,
                    amount : total,
                    userId : user.id,
                    date: new Date(),
                    address : document.getElementById("address").value,
                    status: "Đã đặt"
                }
                console.log(newOrder)
                order(newOrder)
                clearCart()
                alert("bạn đã đặt đơn hành thành công");
                window.location.href ="/"

            }else{
                alert("bạn chưa nhập đủ thông tin cần thiết")
            }
        })
    }
}

export default Checkout;