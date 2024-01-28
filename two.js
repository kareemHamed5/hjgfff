
document.querySelectorAll('.header-two .container ul li a').forEach((e) => {
    e.onclick =function(){
        document.querySelector('.active').classList.remove('active')
        this.classList.add('active')
    }
});

// const li_categories = document.getElementById('li-categories')
// const categories = document.getElementById('categories')

// li_categories.onclick = _ => {
//     categories.classList.toggle('cate')
// }

// const li_men = document.getElementById('li-men')
// const men = document.getElementById('men')

// li_men.onclick = _ => {
//     men.classList.toggle('menn')
// }
// let header3 =document.getElementById('header-three')
// document.getElementById('bars').onclick = _ => {

//     header3.classList.toggle('bars')
//     header3.style.opacity='1'
// }

// document.getElementById('xmark').onclick = _ => {
//     document.querySelector('.header-three').classList.remove('bars')
// }

// console.log(document.querySelector('.header-three').classList.contains('bars'))
// if (document.querySelector('.header-three').classList.contains('bars') === true) {
//     document.body.style.opacity='0.5'
// }




let bars = document.getElementById('bars'),
    xmark = document.getElementById('xmark'),
    ul = document.querySelector('.header-two .container ul'),
    header = document.getElementById('header'),
    left = document.getElementById('left'),
    right = document.getElementById('right'),
    boxs = document.querySelector('.container'),
    boxss = document.querySelector('.boxs'),
    swac = document.querySelectorAll('.arrow i');
    
bars.onclick = function () {
    ul.classList.toggle('ul-resp')
}
console.log(document.getElementById(""))
document.getElementById("two").onclick = function () {
    document.querySelectorAll('#shop .box').forEach(((e)=> {
    e.style.display='none'
    }))
    document.querySelectorAll('#tow-box').forEach(((ele)=> {
        ele.style.display = 'block'
        
    }))
}

document.getElementById("one").onclick = function () {
    document.querySelectorAll('#shop .box').forEach(((e)=> {
        e.style.display='none'
}))
}



// console.log(right)
// xmark.onclick = function () {
//     ul.classList.remove('ul-resp')
// }


// window.onscroll = function () {
//     if (scrollY >= 150) {
//         header.classList.add('fixed') 
//     } else {
//         header.classList.remove('fixed') 
//     }
// }



// let f =document.querySelector('.box').offsetWidth

// swac.forEach((e) => {
//     e.onclick = () => {
//         boxss.scrollLeft += e.id ==="left" ? -f : f
//     }
// })



// let el = document.getElementById('scroller')

// let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
// window.addEventListener('scroll', ()=> {
//     let scrollTop = document.documentElement.scrollTop
//     el.style.width=`${(scrollTop / height) * 100}%`
// })





