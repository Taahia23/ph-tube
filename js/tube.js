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
    <button class="btn btn-gray mr-9 px-9">${cate}</button>
    `
    categoryName.appendChild(cateBUtton);
    });

    
}



loadCategory();