import { signup } from "../../api/auth";

const Signup = {
  async render() {  
      return `
            <div id="form_signup">
                <form>
                    <div>
                        <label>Tên người dùng</label>
                        <input type="text" class="form-control" id="user" />
                    </div>
                    <div>
                        <label>Tài khoản</label>
                        <input type="email" class="form-control" id="account" />
                    </div>
                    <div>
                        <label>Mật khẩu</label>
                        <input type="password" class="form-control" id="password" />
                    </div>
                    <button type="submit">Đăng Ký</button>
                </form>
            </div>
            `;
     
  },
  afterRender() {
    const btn = document.getElementById("form_signup");
    console.log(btn);
    btn.addEventListener("submit", async (e) =>{
        e.preventDefault();
        try{
            const user = {
                name: document.getElementById("user").value,
                email : document.getElementById("account").value,
                password: document.getElementById("password").value
            }
            await signup(user)
            alert("Đăng ký thành công");    
            window.location.href ="/signin"
        }catch(error){
            alert(error.response.data)
        }
    })
  }
};

export default Signup;
