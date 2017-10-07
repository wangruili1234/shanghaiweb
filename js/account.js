window.onload = function(){
    var btnLogin = document.getElementById("login-btn");
    btnLogin.onclick = function(){

        var xhr = new XMLHttpRequest();
        xhr.open();

        return false;
    }


    var btnRegister = document.getElementById("register-btn");
    btnRegister.onclick = function(){
        //....注册功能完成了
        alert("注册成功");
        return false;
    }
}