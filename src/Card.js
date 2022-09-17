import data from "../data.js";

for(const dato of data){
  console.log(dato)
}
const topics = ["Work", "Play", "Study","Exercise","Social", "Self Care"]
const card = () =>{
  const $article = document.createElement("article");
  $article.classList="main__cards";
  let i = 0;
  for(const dato of data){
    const $div = document.createElement("div");
    $div.classList = "main__cards-template"
    $div.innerHTML=`
    <div class="main__cards-template-background ${topics[i++]}"></div>
    <div class="main__cards-template-data">
      <div class="main__cards-template-data-header">
        <h3 class="main__cards-template-data-header-title">${dato.title}</h3>
        <div class="main__cards-template-data-header-btn">
          <img src="./images/icon-ellipsis.svg" alt="switch hours">
        </div>
      </div>
      <div class="main__cards-template-data-content">
        <h2 class="main__cards-template-data-content-hours">${dato.timeframes.weekly.current}hrs</h2>
        <span class="main__cards-template-data-content-description">Last Week - ${dato.timeframes.weekly.previous}hrs</span>
      </div>
    </div>

  `
  $article.appendChild($div)
  }

  return $article
}
export default card;

