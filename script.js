let jsonData
let skill
let locationn
let experience
let userSearch

//main method which call other methods
init()

function init(){
    $(document).ready(function(){
        $.ajax({
            url:'http://localhost:8100/api',
            type:'GET',
            success: function (data) {
                jsonData=data
                getUserInput()
            }
        });
    });
}

function getUserInput(){
    document.getElementsByClassName("search-button")[0].addEventListener("click", function() {
        skill = $("#skills").val().toLowerCase();
        displayResult()
    })
}

function displayResult(){
    if(skill ===""){
        alert("Enter the valued input")
    }
    else{
        userSearch=jsonData.data.filter( (value) => (value.skills.toLowerCase().includes(skill)) || 
                                                    (value.location.toLowerCase().includes(skill)) ||
                                                    (value.experience.toLowerCase().includes(skill)))
                                                
        
    }
    let n=userSearch.length
    if(n === 0){
        alert("Enter the valued input")
    }
    else{
        $(".display-job").show();
        userSearch.forEach(userSearch =>{
            $('.display-job').append(`<div class="header">
            <span class="title">${userSearch.title}</span>
            <span class="skill">${userSearch.skills}</span>
        <div class="company-name">${userSearch.companyname}</div>
        <span class="experience">${userSearch.experience}</span>
        <span class="location">${userSearch.location}</span>
        </div>`)
        })
    }

    filterOption()
}


function filterOption(){
    $(" .filter-area").show();
    let filterLocation = new Array()
    console.log(userSearch)
    console.log(filterLocation)

    let n=userSearch.length
    for(let i=0;i<n;i++)
    {
        let ffilterLocation=userSearch[i].location
        filterLocation.push(ffilterLocation)
        
    }
    console.log(filterLocation)
    // filterLocation = userSearch.forEach((value) => value.location)
    
}