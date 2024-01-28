const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('description');
if(bar){
    bar.addEventListener('click',()=>{
        // nav.classList.add('active');
        nav.style.display='inline-block';
        close.style.display='flex';
       
    })

}
if(close){
    close.addEventListener('click',()=>{
        nav.style.display="none";
        close.style.display="none";
    })
}