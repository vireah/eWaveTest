
const main = document.getElementById("main");
let items = [];
items.push({film:"The Godfather", rating:2}, {film:"The dark knight", rating:4}, {film:"12 angry man", rating:1});
for(let i = 0; i < items.length; i++) {
    const item = items[i].film;
    const rating = items[i].rating;
    
    //console.log(item,rating);
    createItem(item,rating);
    
}

function createItem(item,rating) {
    const searchButton = document.createElement('div');
    main.appendChild(searchButton);
    searchButton.innerHTML = `
    <div id="film-iteam">
        <div >
        ${item}
        </div>
        
        <div id="star-rating" class="star-rating">
        <div class="star-rating__wrap">
        <input class="star-rating__input" id="${item}-5" type="radio" name="${item}" value="5">
        <label class="star-rating__ico fa fa-star-o fa-lg" for="${item}-5" title="5 out of 5 stars"></label>
        <input class="star-rating__input" id="${item}-4" type="radio" name="${item}" value="4">
        <label class="star-rating__ico fa fa-star-o fa-lg" for="${item}-4" title="4 out of 5 stars"></label>
        <input class="star-rating__input" id="${item}-3" type="radio" name="${item}" value="3">
        <label class="star-rating__ico fa fa-star-o fa-lg" for="${item}-3" title="3 out of 5 stars"></label>
        <input class="star-rating__input" id="${item}-2" type="radio" name="${item}" value="2">
        <label class="star-rating__ico fa fa-star-o fa-lg" for="${item}-2" title="2 out of 5 stars"></label>
        <input class="star-rating__input" id="${item}-1" type="radio" name="${item}" value="1">
        <label class="star-rating__ico fa fa-star-o fa-lg" for="${item}-1" title="1 out of 5 stars"></label>
        </div>
    </div>    
        `;
        for(let i = 1; i<=rating; i++){
            let star = document.getElementById(`${item}-${i}`);
          //  console.log(star);
            star.classList.add('star-rating__input_checked');  
        }
        //searchButton.classList.add()  

}

const star = document.getElementById("main");
star.addEventListener('click', function(e){
    if(e.target.type === "radio"){
        console.log(e.target.value);
        console.log(e.target.name);

        const film = e.target.name;
        const rating = e.target.value;
        let  old_rating; 
        for(let i = 0; i<items.length; i++){
            if(items[i].film === film){
                old_rating = items[i].rating;
                items[i].rating = rating;
            }
        }
        deleteStar(film, old_rating);
        for(let i = 1; i<=rating; i++){
            let star = document.getElementById(`${film}-${i}`);
            //console.log(star);
            star.classList.add('star-rating__input_checked');  
        }
        console.log(items);
           
    }
    
 //   console.log(e.target);
    //console.log(item);

}, true);

function deleteStar (item, old_rating){
    
    for(let i = 1; i<=old_rating; i++){
        let star = document.getElementById(`${item}-${i}`);
        console.log(star.classList,"before delete");   
        //console.log( star.classList);
        star.classList.remove("star-rating__input_checked");
        console.log(star.classList,"after delete");  
    }


}

console.log(document.getElementById('star-rating-1').className.split(/\s+/));
console.log(document.getElementById('star-rating-1').className.split(/\s+/));

const add = document.getElementById("add");
add.addEventListener('click', function(e){
    const searchButton = document.createElement('div');
    main.appendChild(searchButton);
    searchButton.innerHTML = `<div class="star-rating">
    <div class="star-rating__wrap">
    <input class="star-rating__input" id="star-rating-5" type="radio" name="rating" value="5">
    <label class="star-rating__ico fa fa-star-o fa-lg" for="star-rating-5" title="5 out of 5 stars"></label>
    <input class="star-rating__input" id="star-rating-4" type="radio" name="rating" value="4">
    <label class="star-rating__ico fa fa-star-o fa-lg" for="star-rating-4" title="4 out of 5 stars"></label>
    <input class="star-rating__input" id="star-rating-3" type="radio" name="rating" value="3">
    <label class="star-rating__ico fa fa-star-o fa-lg" for="star-rating-3" title="3 out of 5 stars"></label>
    <input class="star-rating__input" id="star-rating-2" type="radio" name="rating" value="2">
    <label class="star-rating__ico fa fa-star-o fa-lg" for="star-rating-2" title="2 out of 5 stars"></label>
    <input class="star-rating__input" id="star-rating-1" type="radio" name="rating" value="1">
    <label class="star-rating__ico fa fa-star-o fa-lg" for="star-rating-1" title="1 out of 5 stars"></label>
    </div>`;

}, true);
