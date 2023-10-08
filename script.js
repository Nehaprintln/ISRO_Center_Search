const searchInput = document.querySelector('.search_input');
const searchIcon = document.querySelector('.search_icon');
const displayDetails = document.querySelector('.display_all_data');

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

let centres;
const tableBody = document.querySelector('#tbody');
async function fetchData(){
    try{
        const response = await fetch('https://isro.vercel.app/api/centres');
        const result = await response.json();

        console.log(result);
        centres = result.centres;
        centres.forEach(center => {
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${center.name}</td>
            <td>${center.Place}</td>
            <td>${center.State}</td>
            `;
            tableBody.appendChild(row);
        })
        
    }
    catch(error){
        console.log(error);
    }
};
fetchData();


//  ===  get input text ===

var input;
searchIcon.addEventListener('click', ()=>{
    input = searchInput.value.trim();
    tableBody.innerHTML = "";
    // console.log(input);
    let filteredData = centres.filter(center => center[selectedLocation] == input);
    displayDataOnTable(filteredData);
    searchInput.value = '';
});

function displayDataOnTable(filteredData){
    filteredData.forEach(center => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${center.name}</td>
        <td>${center.Place}</td>
        <td>${center.State}</td>
        `;
        tableBody.appendChild(row);
    })
}





