window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl = 'https://digitalresumecounter.azurewebsites.net/api/Resume?code=BTasLHpCQHbqIXePaH6MEalcCHUXRF5o694fc8YelKvJpr5zIdqwTQ==';
const localfunctionApi = 'http://localhost:7071/api/Resume';

const getVisitCount = () => {
    let count = 100 
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response => {
        console.log("Website called function API.");
        count = response.count; 
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}
