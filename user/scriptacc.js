const loginText = document.querySelector(".title-text .login");
      const loginForm = document.querySelector("form.login");
      const loginBtn = document.querySelector("label.login");
      const regBtn = document.querySelector("label.reg");
      const regLink = document.querySelector("form .reg-link a");
      
      regBtn.onclick = (()=>
      {
        loginForm.style.marginLeft = "-50%";
        loginText.style.marginLeft = "-50%";
      });
      
      loginBtn.onclick = (()=>
      {
        loginForm.style.marginLeft = "0%";
        loginText.style.marginLeft = "0%";
      });
      
      regLink.onclick = (()=>
      {
        regBtn.click();
        return false;
      });