const lang = ['c', 'cpp', 'java', 'js', 'python','ruby']
function printMe(ele){
    console.log(ele);    
}
lang.forEach((item,index,arr)=>{

})


const data = [
    { id: 1, name: 'Item 1', value: 42.8356 },
    { id: 2, name: 'Item 2', value: 85.1345 },
    { id: 3, name: 'Item 3', value: 53.7642 },
    { id: 4, name: 'Item 4', value: 19.3421 },
    { id: 5, name: 'Item 5', value: 71.0234 }
  ]

  data.forEach((ele) => {
    ele.forEach((key)=>{
        console.log(key);
    })
  });