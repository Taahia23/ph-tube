const loadCategory  = async() => {
    const res = await fetch(' https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
     
    const categories = data.data;
    console.log(categories);
     for(category of categories){
        const cate = category.category;
        console.log(cate);
    }
    displayCateName(categories)
}

const displayCateName = (categories) => {
    const categoryName = document.getElementById('cate-name');
   
    categories.forEach(category => {
        const cateBUtton = document.createElement('button');
    cateBUtton.classList = ``;
     const cate = category.category;
    // console.log(cate);
    cateBUtton.innerHTML = 
    `
    <button onclick="handleLoadNews('${category.category_id}')" class="btn btn-gray mr-9 px-9">${cate}</button>
    `
    categoryName.appendChild(cateBUtton);
    });
}

const handleLoadNews = async(categoryId) => {
        const response =  await fetch(` https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
        const data = await response.json();
        console.log(data);
        const cardContainer = document.getElementById('tamplate-container2');
        cardContainer.textContent = '';
        
        data.data.forEach ((news) => {
            console.log(news);
            const div = document.createElement('div');
            div.innerHTML = 
            `
            <figure><img style = 'height: 200px' src="${news.thumbnail}" alt="Shoes" /></figure>
            <div class="card-body">
            <div class = "flex gap-6">
            <img class='rounded-full' style = 'width:70px;' src="${news.authors[0].profile_picture}" alt="Shoes" />
            <div>
             <h2 class="card-title font-bold ">${news.title}</h2> 
             <div class = 'flex'>
             <p class = ''>${news.authors[0].profile_name}</p>
            
             
             </div>
             
              <p class = ''>${news.others.views}</p>
            </div>
            
            </div>

            </div>
            `
           
            cardContainer.appendChild(div);
           

        })
    }













// const loadTamplate = async() =>{
//     const res  = await fetch('https://openapi.programming-hero.com/api/videos/category/1000');
//     const tamplate = await res.json();
//     const data = tamplate.data;
   
//     console.log(tamplate);
//     displayTamplate(data);

// }
// const displayTamplate = (data) => {
//     const tamplates =  document.getElementById('tamplate-container');
//     data.forEach(tamp => {
//         const tamplate = document.createElement('div');
//         tamplate.classList = `card  bg-base-100 shadow-xl`;
        
//         tamplate.innerHTML = 
//         `
//         <figure><img style = 'height: 200px' src="${tamp.thumbnail}" alt="Shoes" /></figure>
//                 <div class="card-body">
//                 <div class = "flex gap-6">
//                 <img class='rounded-full' style = 'width:70px;' src="${tamp.authors[0].profile_picture}" alt="Shoes" />
//                 <div>
//                  <h2 class="card-title font-bold ">${tamp.title}</h2> 
//                  <p class = ''>${tamp.authors[0].profile_name}</p>
//                   <p class = ''>${tamp.others.views}</p>
//                 </div>
                
//                 </div>
   
//                 </div>
//         `

//         tamplates.appendChild(tamplate);
//     })
// }



loadCategory();
loadTamplate();