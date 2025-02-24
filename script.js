<<<<<<< HEAD
console.log("Script running...")
document.querySelector('.cross').style.display='none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display ='inline'
        document.querySelector('.cross').style.display='none'
         
    }
    else{
        document.querySelector('.ham').style.display ='none'
        setTimeout(() =>{
            document.querySelector('.cross').style.display='inline'  

        },300);
    }
    
=======
console.log("Script running...")
document.querySelector('.cross').style.display='none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display ='inline'
        document.querySelector('.cross').style.display='none'
         
    }
    else{
        document.querySelector('.ham').style.display ='none'
        setTimeout(() =>{
            document.querySelector('.cross').style.display='inline'  

        },300);
    }
    
>>>>>>> 3e21915 (1st commit)
})