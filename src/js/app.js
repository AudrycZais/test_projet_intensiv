document.querySelector('.menu-toggle').onclick = function (e){
    document.querySelector('.side-menu').classList.toggle('hide');
}

document.getSelection('.menu-toggle').onclick= function (e){
    document.querySelector('.side-menu').classList.toggle('hide');

}


document.querySelector('.close-menu').onclick= function (e){
    e.preventDefault()
    document.querySelector('.side-menu').classList.remove("hide");

}




