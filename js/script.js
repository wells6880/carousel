//***图片轮播
var img=document.getElementsByClassName("carousel-img"),
    carousel=document.getElementById("carousel"),
    timer=null,
    imgnum=0,
    next=document.getElementById("next"),
    prev=document.getElementById("prev");

// 自动轮播方法
function startAutoplay() {
    timer=setInterval(function () {
        imgnum++;
        if(imgnum>img.length-1){
            imgnum=0;
        }
        changImg();
    },2000);
}
startAutoplay();
//变更图片方法
function changImg() {
    for(var i=0;i<img.length;i++){
        img[i].style.display="none";
    }
    img[imgnum].style.display="block";
}
//鼠标滑过停止
carousel.onmouseover=function () {
    //清除间歇调用
    if(timer){
        clearInterval(timer);
    }
};
//鼠标滑出继续轮播
carousel.onmouseout=function () {
    startAutoplay();
};
// 下一张图片
next.onclick=function () {
    imgnum++;
    if(imgnum>img.length-1){
        imgnum=0;
    }
    changImg();
};
//上一张图片
prev.onclick=function () {
    imgnum--;
    if(imgnum<0){
        imgnum=img.length-1;
    }
    changImg();
};
//点击导航更换图片
var icon=document.getElementsByClassName("carousel-icon"),
    dots=icon[0].getElementsByTagName("span");
function navImg() {
    for(var i=0;i<dots.length;i++){
        // dots[i].setAttribute("num",i);
        // //点击导航
        // dots[i].onclick=function () {
        //     a=this.getAttribute("num");
        //     dotsImg();
        // }
        (function (idx) {
            dots[idx].onclick=function () {
                dotsImg(idx);
            }
        })(i);
    }
}
navImg();
//点击导航更换图片方法
function dotsImg(idx) {
    for(var i=0;i<img.length;i++){
        img[i].style.display="none";
        dots[i].className="";
    }
    img[idx].style.display="block";
    dots[idx].className="active";
}
// ***导航菜单
var main=document.getElementsByClassName("main-item"),
    sub=document.getElementsByClassName("sub-item");
function showSubMenu() {
    for(var i=0;i<main.length;i++){
        // main[i].setAttribute("num",i);
        // // 鼠标滑过主菜单,子菜单显现
        // main[i].onmouseover=function () {
        //     index=this.getAttribute("num");
        //     subappear();
        // };

        // 鼠标滑过主菜单,子菜单显现
        (function (idx) {
            main[idx].onmouseover=function () {
                subappear(idx);
            }
        })(i);


        // main[i].onmouseout=function () {
        //     index=this.getAttribute("num");
        //     subdisappear();
        //     // 鼠标滑出主菜单，滑入子菜单，子菜单依然显现
        //     sub[index].onmouseover=function () {
        //         subappear();
        //     };
        //     // 鼠标滑出子菜单，子菜单消失
        //     sub[index].onmouseout=function () {
        //         subdisappear();
        //     }
        // }

        // 鼠标滑出主菜单,子菜单消失
        (function (idx) {
            main[idx].onmouseout=function () {
                subdisappear(idx);
                // 鼠标滑出主菜单，滑入子菜单，子菜单依然显现
                sub[idx].onmouseover=function () {
                    subappear(idx);
                };
                // 鼠标滑出子菜单，子菜单消失
                sub[idx].onmouseout=function () {
                    subdisappear(idx);
                }
            }
        })(i);
    }
}
showSubMenu();
// 子菜单显现
function subappear(idx) {
    sub[idx].style.display="block";
    main[idx].style.background="rgba(130,130,130,0.5)";
}
// 子菜单消失
function subdisappear(idx) {
    sub[idx].style.display="none";
    main[idx].style.background="none";
}


