// // const owl = document.getElementById("owl")
// // owl.onclick = ()=> {
//     //     alert("owl clicked")
//     // }
//     // owl.addEventListener("click",(e)=>{
//         //     console.log('owl clicked');
//         // },false)
        
        
        
// const images = document.getElementById("images")
// const owl = document.getElementById("owl")

// images.addEventListener("click",function(){
//     console.log("clicked inside the ul");
// },false)

// owl.addEventListener("click",(e)=>{
//     console.log('owl clicked');
//     e.stopPropagation()
// },false)


const google = document.getElementById("google")
google.addEventListener('click',function(e){
    e.preventDefault()
    e.stopPropagation();
    console.log("google link is cliikced")
})


const images = document.getElementById('images')
const all_children = Array.from(images.children);
all_children.map((li)=>{
    if(li.children[0].tagName.toLowerCase() === 'img'){
        const img = li.children[0]
        img.addEventListener('click',function(e){
            images.removeChild(li)
        })
    }
})