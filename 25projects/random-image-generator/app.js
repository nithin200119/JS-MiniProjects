const imagesWrapper=document.querySelector('.images-wrapper')
const reloadBtn = document.querySelector(".reloadBtn");
console.log(imagesWrapper)
let count=1
function fetchRandomImages(getCount){
    for (let i=getCount;i<=getCount+4;i++){
        let imgElem=document.createElement('img')
        imgElem.src = `https://picsum.photos/300?random=${i}`;
        imagesWrapper.appendChild(imgElem)
    }
}
reloadBtn.addEventListener('click',()=>fetchRandomImages((count+=5)))
fetchRandomImages(count);