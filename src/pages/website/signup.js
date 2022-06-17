import { signup } from "../../api/auth";

const Signup = {
  async render() {
    return `
      <div class="wrapper fadeInDown">
    
   <div id="formContent">
    
     <div className="fadeIn first">
         <h2 class="mt-10">Đăng ký</h2>
     </div>
     <form class="mb-3 mt-3" id="form_signup"> 
        <div>
            <label class="form-label">Name</label>
            <br/>
            <input type="text"  class="input" id="user" />
        </div>
     
       <div class="mb-3">
         <label class="form-label">Email</label>
         <br/>
         <input type="email"  class="fadeIn second input" id="account" />
       </div>
      
       <div class="mb-3">
         <label class="form-label">Mật khẩu</label>
         <br/>
         <input type="password"  class="fadeIn third input" id="password" />
       </div>

       <div class="mb-3">
         <label class="form-label">Nhập lại mật khẩu</label>
         <br/>
         <input type="password"  class="fadeIn third input" id="cdpassword" />
       </div>
    
       <br />
       <button type="submit" class="fadeIn fourth btn btn-primary bg-blue-500">Đăng Ký</button>
     </form>  
   </div>
 </div>
            `;
  },
  afterRender() {
    const btn = document.getElementById("form_signup");
    console.log(btn);
    btn.addEventListener("submit", async (e) => {
      e.preventDefault();
      try {
        if(document.getElementById("password").value=== document.getElementById("cdpassword").value){
            const user = {
                name: document.getElementById("user").value,
                email: document.getElementById("account").value,
                password: document.getElementById("password").value,
              };
            await signup(user);
            alert("Đăng ký thành công");
            window.location.href = "/signin";
        }else{
            alert("Nhập lại mật khẩu chưa khớp")
        }
      } catch (error) {
        alert(error.response.data);
      }
    });
  },
};

export default Signup;
