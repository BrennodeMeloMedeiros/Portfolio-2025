
window.onload = ()=>{
    const list_nav_items = document.querySelectorAll("header nav")
    const list_body_parts = document.querySelectorAll(".body-row")


    const observer = new IntersectionObserver((entry) => {
        entry.forEach(entry =>{
            if (entry.isIntersecting) {
                // pegar o nome do e e ativar o item do nav menu de acordo
                console.log("Looking at " + entry.target.id)
                list_nav_items.forEach( e => {e.classList.remove("activated")})
                const index_body_part = Array.from(list_body_parts).indexOf(entry.target)
                console.log(index_body_part)

                list_nav_items[index_body_part].classList.add("activated")
                
              
                
            }
        })
    },{
        threshold: 0.6
    })


    list_body_parts.forEach(body_part => observer.observe(body_part))


}
