let hamburger_btn = document.getElementById('mobile_nav_btn')
let navigation =  document.getElementsByClassName('nav_container')

hamburger_btn.addEventListener('click',()=>{
    if(navigation[0].id == 'deactive'){
        navigation[0].id = ''
    } else{
        navigation[0].id = 'deactive'
    }
})