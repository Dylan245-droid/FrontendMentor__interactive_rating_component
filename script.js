const bubbles = document.querySelectorAll('.bubble')
const btn = document.querySelector('.btn')
const formOne = document.querySelector('.container.rating')
const formTwo = document.querySelector('.container.congrats')
var content = null;


function updateBubbleStatus(){
    let bubbleActive = 0
    bubbles.forEach((b) => {
        if(b.classList.contains('active')) bubbleActive++
    })
    return bubbleActive
}

bubbles.forEach((bubble) => bubble.onclick = () => {
    content = bubble.querySelector('div').innerHTML
    document.querySelector('.rating__value').innerHTML = content;

    if(updateBubbleStatus() === 0) {
        bubble.classList.add('active')
    }else if(updateBubbleStatus() === 1 && bubble.classList.contains('active')){
        bubble.classList.remove('active')
        content = null;
    }else{
        bubbles.forEach((b) => b.classList.remove('active'))
        bubble.classList.add('active')
    }
    console.log(updateBubbleStatus()); 
})

btn.onclick = (e) => {
    if(content === null) {
        e.preventDefault();
        window.alert('Please choose a rating!')
    }else{
        formOne.style.display = 'none'
    }
}