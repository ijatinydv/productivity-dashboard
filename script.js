var allElem = document.querySelectorAll('.elem');
var fullElems = document.querySelectorAll('.fullElem');
var fullElemsBackBtn = document.querySelectorAll('.back');

allElem.forEach(function(elem){
    elem.addEventListener('click',function(){
        // console.log(elem.id);
        fullElems[elem.id].style.display = 'block'
    })
})


fullElemsBackBtn.forEach(function(back){
    back.addEventListener('click',function(){
        fullElems[back.id].style.display = 'none'
        // console.log(fullElems[back.id])
    })
})