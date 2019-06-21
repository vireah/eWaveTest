
const main = document.getElementById("main");

if(!localStorage.getItem("raiting")){
    let items = [];
    items.push({film:"The Godfather", rating:"0"}, {film:"The dark knight", rating:"0"}, {film:"12 angry man", rating:"0"});
    saveState(items);
   // buildPage(items);
}

buildPage();

function saveState(items) {
    //alert(items);
    var serialObj = JSON.stringify(items);
    localStorage.setItem("raiting", serialObj);
    //var returnObj = JSON.parse(localStorage.getItem("raiting"));
    //items = returnObj;
    //buildPage(items);
}

function getState(){
    var returnObj = JSON.parse(localStorage.getItem("raiting"));
    return items = returnObj;
}

function buildPage(items){
    items = getState();
    console.log(getState());
    for(let i = 0; i < items.length; i++) {
        const item = items[i].film;
        const rating = items[i].rating;
        
        //console.log(item,rating);
        createItem(item,rating); 
    }
}
function createItem(item,rating) {
    const film_box = document.createElement('div');
    film_box.classList.add('item');  
    main.appendChild(film_box);
    film_box.innerHTML = `
    <div id="film-iteam" class ="film-iteam">
        <div><p>${item}</p></div>
        
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
                
                var serialObj = JSON.stringify(items);
                localStorage.setItem("raiting", serialObj);
            }
        }

        //getState();
        items.sort(compareRating);
        saveState(items); 
        //saveState(items);
        console.log(items,"after"); 
        deleteStar(film, old_rating);
        for(let i = 1; i<=rating; i++){
            let star = document.getElementById(`${film}-${i}`);
            //console.log(star);
            star.classList.add('star-rating__input_checked');  
        }
        //const a = document.getElementById("main");
        console.log(main.childNodes, "main");
        while (main.firstChild) {
            main.removeChild(main.firstChild);
        }
        buildPage(items);
        console.log(items);
       
    }
    
 //   console.log(e.target);
    //console.log(item);

}, true);

function deleteStar (item, old_rating){
    for(let i = 1; i<=old_rating; i++){
        let star = document.getElementById(`${item}-${i}`);
        star.classList.remove("star-rating__input_checked");
    }
}
function compareRating(film1, film2) {
    if (film2.rating != film1.rating) {
        return film2.rating - film1.rating;

    } else if (film2.film.toLowerCase() < film1.film.toLowerCase()) {
        return 1;
        } else if (film2.film.toLowerCase() > film1.film.toLowerCase()) {
            return -1;
            } else return 0;
}

const add = document.getElementById("add_button");

add.addEventListener('click', function(e){
    const value = document.getElementById("add_value").value;
    console.log(items.every(elem => elem.film  != value));
    if(getExistValue() && getUniqueValue()){
        //const new_item = e.target.value;
        items.push({film: value, rating:0});
        saveState(items);
        createItem(value,0);
    } //else alert( "Please, enter a movie name in the input field");
function getUniqueValue() {
    if(!items.every(elem => elem.film  != value)){
    alert("This movie has already been added")}
    return items.every(elem => elem.film  != value);
}
function getExistValue() {
    if(!value){
        alert( "Please, enter a movie name in the input field");
    } else return true;

}   
}, true);
