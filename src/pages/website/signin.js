import { signin } from "../../api/auth";
import {authenticate, isAuthenticated } from "../../auth/util";

const Signin = {
  async render() {  
      return `
            <div id="form_signin">
                <form>
                    <div>
                        <label>Tài khoản</label>
                        <input type="email" class="form-control" id="account" />
                    </div>
                    <div>
                        <label>Mật khẩu</label>
                        <input type="password" class="form-control" id="password" />
                    </div>
                    <button type="submit">Đăng Nhập</button>
                </form>
            </div>
            `;
     
  },
  afterRender() {
    const btn = document.getElementById("form_signin");
    btn.addEventListener("submit", async(e) =>{
        e.preventDefault();
        try{
            const users = {
                email : document.getElementById("account").value,
                password: document.getElementById("password").value
            }
            const {data} = await signin(users)
            console.log(data);
            authenticate(data);
            alert("đăng nhập thành công");
            if(data.user.id ===1){
                window.location.href = "/admin/listbook"
            }else{
                window.location.href = "/"
            }
        }catch(error){
            alert(error.response.data)
        }
    })
  }
};

export default Signin;
