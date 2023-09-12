const loadAllNews = async () => {
  loading(true);
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
    );
  const data = await res.json();
  //   console.log(data);
  const allNews = data.data.news_category; /* .slice(0, 4) */
  loadCategoriesName(allNews);
};

function loadCategoriesName(allNews) {
  //   console.log(allNews);
  const news_categories = document.getElementById("news_categories");
  allNews.forEach((category) => {
    const div = document.createElement("div");
    div.innerHTML = `<p onclick="handleCategoryId('${category.category_id}'); handleCategoryName('${category.category_name}')"> ${category.category_name} </p>`;
    news_categories.appendChild(div);
  });
  loading(false);
}

const handleCategoryName = (categoryName) => {
  const category_name = document.getElementById("category_name");
  category_name.innerText = categoryName;
};



const loading = (isLoading)=>{
  const loader = document.getElementById('loader');
  if(isLoading){
    loader.classList.remove('hidden');
  }
  else{
    loader.classList.add('hidden');
  }
}

const handleCategoryId = async (categoryId) => {
  loading(true);
  // console.log(categoryId);
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${categoryId}`
    );
  const data = await res.json();
  const categoryNewsAll = data.data;
  displayNews(categoryNewsAll);
};

const displayNews = (categoryNewsAll) => {
  console.log(categoryNewsAll);
  const news_counter = document.getElementById("news_counter");
  const news_container = document.getElementById("news_container");

  news_container.textContent = "";
  const totalNews = categoryNewsAll.length;
  // console.log(totalNews);
  news_counter.innerText = totalNews;

  if (totalNews !== 0) {
    //sorting by views
    const sortingByViews = categoryNewsAll.sort(
      (a, b) => b.total_view - a.total_view
    );
    console.log(sortingByViews);
    sortingByViews.forEach((categoryNews) => {
      //  console.log(categoryNews);
      const div = document.createElement("div");
      div.innerHTML = `
       <div class="card flex p-4 card-side bg-base-100 shadow-xl">
       <figure>
         <img
           src="${categoryNews.thumbnail_url}"
           alt="Movie" class="flex-1"
         />
       </figure>
       <div class="card-body w-1/2">
   
         <h4 class="card-title text-2xl font-bold">${categoryNews.title}</h4>
         <p class="card-text">${categoryNews.details.slice(0, 400)}</p>
   
   <div class="flex justify-between">
   <div class="flex">
    <div><img src="${
      categoryNews.author.img ? categoryNews.author?.img : "no image available"
    }" alt="" style="width:50px; height:50px; border-radius : 50%"></div>
     <div class="ps-2">
      <p class="text-lg font-bold">${
        categoryNews.author.name
          ? categoryNews.author.name
          : "No author name available"
      } <br>
       <small>${categoryNews.author.published_date}</small> </p>
     </div>
     </div>
     <div class="text-lg font-bold">Views : ${
       categoryNews.total_view ? categoryNews.total_view : "Not available"
     }</div>
     <div class="text-lg font-bold">Rating : ${
       categoryNews.rating.number ? categoryNews.rating.number : "Not available"
     }</div>
     <div>
     <button class="btn btn-outline" onclick="loadNewsDetails('${
       categoryNews._id
     }')">Show more</button></div>
    </div>
    </div>
   
       
       </div>
       `;
      news_container.appendChild(div);
    });
   
  } else {
    news_container.innerHTML = `<h1 class="text-3xl font-semibold text-center text-red-600">Sorry! no news available</h1>`;
  }
  loading(false);
};

const loadNewsDetails = async (news_id) => {
  loading(true);
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${news_id}`
  );
  const data = await res.json();
  // console.log(data.data[0]);
  const newsDetails = data.data[0];
  displayDetails(newsDetails);
};

const displayDetails = (newsDetails) => {
  // console.log(newsDetails)
  const modal = document.getElementById("modal");
  const div = document.createElement("div");
  div.innerHTML = `
  <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
  <form method="dialog" class="modal-box">

     <div class="card">
       <figure>
         <img
           src="${newsDetails.thumbnail_url}"
           alt="Movie" class="w-1/2"
         />
       </figure>
       <div class="card-body">
   
         <h4 class="card-title text-2xl font-bold text-justify">${
           newsDetails.title
         }</h4>
         <p class="card-text text-justify">${newsDetails.details}</p>
   
   <div class="flex flex-col justify-center space-y-5">
   <div class="flex my-5">
    <div><img src="${
      newsDetails.author.img ? newsDetails.author?.img : "no image available"
    }" alt="" style="width:50px; height:50px; border-radius : 50%"></div>
     <div class="ps-2">
      <p class="text-lg font-bold">${
        newsDetails.author.name
          ? newsDetails.author.name
          : "No author name available"
      } <br>
       <small>${newsDetails.author.published_date}</small> </p>
     </div>
     </div>
     <div class="text-lg font-bold">Views : ${
       newsDetails.total_view ? newsDetails.total_view : "Not available"
     }</div>
     <div class="text-lg font-bold">Rating : ${
       newsDetails.rating.number ? newsDetails.rating.number : "Not available"
     }</div>
     <div>

    <div class="modal-action">
      <button class="btn">Close</button>
    </div>
  </form>
</dialog>
  `;
  modal.appendChild(div);
  const modalId = document.getElementById("my_modal_5");
  modalId.showModal();
  loading(false);
};


handleCategoryId("04");

loadAllNews();
