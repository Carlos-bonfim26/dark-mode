let mode = document.getElementById('stadeMode');
let modeStade = true;
mode.addEventListener('click', ()=>{
    if(modeStade){
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');
        modeStade = false;
        document.body.style.background = '#141414'
        document.body.style.color = '#F1F2EE'
        document.getElementById('guri').style.border = '1px solid #F1F2EE'
       document.querySelector('.navbar-brand').style.color = '#F1F2EE'
     
       mode.style.color = '#F1F2EE'
    } else{
        mode.classList.add('fa-moon');
        mode.classList.remove('fa-sun');
        modeStade = true;
        document.body.style.background = '#F1F2EE'
        document.body.style.color = '#141414'
        document.getElementById('guri').style.border = '1px solid #141414'
        document.querySelector('.navbar-brand').style.color = '#141414'
        mode.style.color = '#141414'
    }
})