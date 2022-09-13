const buttons = document.querySelectorAll('.btn')


document.addEventListener('click', (event)=>{
    if(event.target.className.split(' ')[0] === 'btn'){
        let thisBtn = event.target

        if(thisBtn.className.split(' ')[0] === 'btn'){
            const colors = ['#49A16C', '#064236', '#F498AD', '#AFC9DA',
                    '#FFD829', '#5E6064']
            const randomColorIndex = Math.floor(Math.random() * colors.length)
            thisBtn.style = `background-color: ${colors[randomColorIndex]}`
        }


        var total = 0
        

        for(let i = 0; i < buttons.length; i++){
            for(let j = 0; j < buttons.length; j++){
                if(buttons[i].style.backgroundColor === buttons[j].style.backgroundColor){
                    total +=1;
                }else{
                    total = total
                }
            }
        }

        var flag = null

        if(total === 81){
            flag = true
        }else{
            flag = false
        }


        var img = document.querySelector('.img')
        if(flag === true){
            img.style.display = 'flex';
        }
    }
})









var uniq = document.querySelector('.uniq')
var img = document.querySelector('.img')

uniq.addEventListener('click', ()=>{
   img.style.display = 'none'

    for(let i = 0; i < buttons.length; i++){
        buttons[i].style.backgroundColor = 'white';
    }

})






































