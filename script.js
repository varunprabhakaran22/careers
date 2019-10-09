let jsonData
let skill
let locationn
let experience
let userSearch


$(document).ready(function(){
    $.ajax({
        url:'http://localhost:8100/api',
        type:'GET',
        success: function (data) {
            jsonData=data
        }
    });
});


document.getElementsByClassName("search-button")[0].addEventListener("click", function() {
    skill = $("#skills").val();
    locationn = $("#location").val();
    experience = $("#experience").val();
    userSearch=jsonData.data.filter( (value) =>  ( ( (skill != "" && skill != undefined) ? (value.skills === skill) : value.skills ) && 
                                                 ( (locationn != "" && locationn != undefined) ? (value.location === locationn) : value.location) && 
                                                 ( (experience != "" && experience != undefined) ? (value.experience === experience) : value.experience) ))
    console.log(userSearch)
    let n=userSearch.length
    for(let i =0; i <n ; i++){
        console.log(userSearch[i])
    }
});

