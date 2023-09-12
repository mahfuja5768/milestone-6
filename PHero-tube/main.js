const sort_btn = document.getElementById("sort_btn");
const allCategory = async () => {
  loading(true);
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/videos/categories"
    );
    const data = await res.json();
    const categories = data.data;
    displayCategoryNames(categories);
  } catch (error) {
    console.log(error);
  }
};

const displayCategoryNames = (categories) => {
  //   console.log(categories);
  const categoriesName = document.getElementById("categories_name");
  categories.forEach((categoryData) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <button onclick="handleCategoryId('${categoryData.category_id}')" 
      class="btn btn-xs sm:btn-sm md:btn-md bg-secondary hover:bg-primary sm:text-sm text-xs md:text-lg hover:text-white duration-500 ease-in-out normal-case">${categoryData.category}</button>
      `;
    categoriesName.appendChild(li);
  });
  loading(false);
};

const handleCategoryId = async (category_id) => {
  //    console.log(category_id)
  loading(true);
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/videos/category/${category_id}`
    );
    const data = await res.json();
    const videos = data.data;
    displayCategoryVideos(videos);
  } catch (error) {
    console.log(error);
  }
};

/* spinner function */
const loading = (isLoading) => {
  const spinner = document.getElementById("spinner");
  if (isLoading) {
    spinner.classList.remove("hidden");
  } else {
    spinner.classList.add("hidden");
  }
};

const displayCategoryVideos = (videos) => {
  //   console.log(videos);
  // const getTimeOfVideos = videos.forEach(video)
  const displayVideos = document.getElementById("display_videos");
  displayVideos.textContent = "";
  sort_btn.classList.remove("hidden");
  const videosQuantity = videos.length;
  const no_videos_msg = document.getElementById("no_videos_msg");

  if (videosQuantity !== 0) {
    /* hide no msg for videos */
    no_videos_msg.classList.add("hidden");

    /* make videos div function */
    const showVideos = (videos) => {
      videos.forEach((video) => {
        /* convert second into hours and minutes */
        const postedTime = video.others.posted_date;
        let time = parseFloat(postedTime);
        // console.log(time);
        let hours = Math.floor(time / 3600);
        let minutes = Math.floor((time % 3600) / 60);

        const div = document.createElement("div");
        div.innerHTML = `
              <div class="card card-compact">
              <figure><img src=${
                video.thumbnail
              } alt="thumbnail" class="md:h-[220px] h-[200px] rounded-lg w-full"/></figure>
              <div class="flex justify-center items-center">
              <h2 id="handleTime" class="handleTime hidden">${
                video.others.posted_date ? video.others.posted_date : 0
              }</h2>
             <p> ${
               video.others.posted_date
                 ? `<p class="bg-[#171717] rounded-lg text-white w-32 -mt-12 ms-8">${hours}hrs ${minutes} min ago</p>`
                 : ""
             }</p></div>

              <div class="card-body text-start mt-3">
              <div class="flex justify-start items-start gap-3">
              <img src=${
                video.authors[0].profile_picture
              }  alt="author" class="w-10 h-10 rounded-full">
              
          
          <div class="flex flex-col items-start gap-2">
          <h2 class="card-title text-lg font-bold">${
            video.title ? video.title : "No title"
          }</h2>
          <div class="flex justify-center items-center gap-2">
              <h3 class="text-sm me-2">${video.authors[0].profile_name}</h3>
              <p>${
                video.authors[0].verified === true
                  ? '<img src="./images/blue-tik.png" alt="blue-tik" />'
                  : ""
              }</p>

          </div>
          <p class="text-sm">${
            video.others.views ? video.others.views : "0"
          } views</p>
          </div>
          </div>
            </div>
            </div>
              `;
        displayVideos.appendChild(div);
      });
      loading(false);
    };

    /* without sorting button click */
    showVideos(videos);

    /* for sorting button click */
    sort_btn.addEventListener("click", () => {
      loading(true);
      displayVideos.textContent = "";
      sort_btn.classList.remove("hidden");
      const sortedVideos = videos.sort((first, second) => {
        function convertToNumber(str) {
          const getNum = parseFloat(str);
          const converterOfK = str.toUpperCase().endsWith("K") ? 1000 : 0;
          return getNum * converterOfK;
        }
        let num1 = convertToNumber(first.others.views);
        let num2 = convertToNumber(second.others.views);
        //   console.log(num2);
        return num2 - num1;
      });

      showVideos(sortedVideos);
    });
  } else {
    /* add no msg for no videos */
    const sort_btn = document.getElementById("sort_btn");
    no_videos_msg.classList.remove("hidden");
    sort_btn.classList.add("hidden");
  }
  loading(false);
};

handleCategoryId("1000");

allCategory();
