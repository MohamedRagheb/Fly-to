var btn = document.getElementById('btn')
var user = document.getElementById('user')
var pass = document.getElementById('pass')
var link = document.getElementById('link')
var alart = document.getElementById('alart')
function ggd(){
 user.defaultvalue = "moody"
 pass.defaultvalue = "123456"
    if(user.defaultvalue == user.value && pass.defaultvalue == pass.value){
        window.location.href = "/html-files/mainpage.html"
    }else{
        alart.innerHTML = "Wrong username or Password"
    }
}

    
