const searchInput = document.querySelector('.search_input');
const searchIcon = document.querySelector('.search_icon');
const displayDetails = document.querySelector('.display_details');

const radioBtns = document.querySelectorAll('input[name="location"]');
// ==== select radio value  ====
var selectedLocation;
let findSelecting = ()=>{
    selectedLocation = document.querySelector('input[name="location"]:checked').value;
    console.log(selectedLocation);
};

radioBtns.forEach(radioBtn => {
    radioBtn.addEventListener('change', findSelecting)
});

//  ===  get input text ===
var input;
searchIcon.addEventListener('click', ()=>{
    input = searchInput.value.trim();
    console.log(input);
    searchInput.value = '';
});

// ===  get data from link ===
const filterData = data.filter(data => {
    return data[selectedLocation].includes(input);
});

filterData.forEach(displayData => {
    
})

async function fetchData(){
    try{
        const response = await fetch('https://isro.vercel.app/api/centres');
        const result = await response.json();

        console.log(result);
        return result;
    }
    catch(error){
        console.log(error);
    }
};

const getFetchData = fetchData();