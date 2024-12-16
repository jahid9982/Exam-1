const lodeData=()=>{
    fetch('https://f24-1-mid-1.vercel.app/content')
    .then(res=>res.json())
    .then(data=>showData(data))
}
const showData=(values)=>{
const container = document.getElementById("container")
 for(const value of values){
   
    const {category,author,title,description,comment_count,view_count,posted_time, image}= value
    const div = document.createElement("div")
    div.innerHTML=`<div class="card card-side bg-base-100 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      alt="Movie" />
  </figure>
  <div class="card-body">
   <div class= "flex flex-col-row gap-7"> 
   <h2 class="card-title">${category}</h2>
    <p>${author.name}</p>
    </div>
    <h1>${title} </h1>
    <h1>${description} </h1>
    <div class="flex flex-row mt-3"> 
    <p>comment:${comment_count} </p>
    <p>view:${view_count} </p>
    <p>Time:${posted_time} </p>
    </div>
    <div class="card-actions justify-end">
      <button  class="btn btn-primary" onClick='add(${JSON.stringify(value)})'>ADD</button>
    </div>
  </div>
</div>
    `
container.appendChild(div)
 }
}
const add = (button)=>{
    const push = document.getElementById("push")
    const {title,view_count}=button
const div = document.createElement("div")
div.innerHTML=`
<div class= "bg-slate-500 h-[200px] rounded-2xl">
<div class="flex flex-row justify-around mt-3 text-center"> 
    <p class='mt-16'>${title} </p>
    <p class='mt-16'>${view_count} </p>
    </div>
    </div>
`
const upPush = document.getElementById("push").childElementCount
const total = document.getElementById("total")
total.innerText=upPush
push.appendChild(div)
}

lodeData()

const lodeBlog= ()=>{
    fetch("https://f24-1-mid-1.vercel.app/blogs")
    .then(res=>res.json())
    .then(jahid=>showBlog(jahid))
}
const showBlog=(blogs)=>{
    const blog = document.getElementById("blog")
    for(const value of blogs){
       
        const{cover_image,profile_image,title,description,author}=value
        const div= document.createElement("div")
        div.innerHTML=`
 <div class="card bg-base-100 h-[600px]  shadow-xl">
  <figure class="px-10 pt-10">
    <img
      src=${cover_image}
      alt=""
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${author.posted_date}</h2>
    <h2 class="card-title">${title}</h2>
    <h2 class="card-title">${description}</h2>
    <div class='flex gap-12'> 
    <img  src=${profile_image} class='h-16 w-12'>
    <div> <p>${author.name}</p>
    <p>${author.designation}</p>
    </div> 
    </div>
    <div class="card-actions">
    </div>
  </div>
</div>

        `
        blog.appendChild(div)
    }
}
lodeBlog()
