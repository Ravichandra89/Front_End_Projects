const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('searchbox');
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;
const accessKey = '9vcK8ifEo1LO7y7Nth2dWx0rAi8U_K9sO0i-vN_GNy4';

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;
    
    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;
    results.forEach(result => {
        const image = document.createElement("img");
        image.classList.add("search-result-image"); // Add class for styling
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    });

    showMoreBtn.style.display = 'block';
}

searchForm.addEventListener("submit", function(e) {
    e.preventDefault();
    page = 1;
    searchResult.innerHTML = ''; // Clear previous search results
    searchImages();
});
