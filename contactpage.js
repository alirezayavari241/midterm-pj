import { router,routes }  from "./main.js"

export function contactpage(){
    document.querySelector("#content").innerHTML=`<h1>ssssss</h1>
    <button id='btn'>back</button>`
    const btn=document.getElementById('btn')
    btn.addEventListener('click', ()=>{
    router.navigate(routes.home)
})
}
