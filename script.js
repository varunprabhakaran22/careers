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
    // experience = "";

    console.log(skill+ " "+ locationn + " " + experience)

    // userSearch=jsonData.data.filter( (value) =>  value.skills === skill && value.location === locationn && value.experience === experience )
    // userSearch=jsonData.data.filter( (value) =>  (skill != "" && skill != undefined) ? (value.skills === skill) : value.skills )
    console.log((skill != "" ) ? "Not Empty" : "Empty");
    // console.log(userSearch)

    userSearch=jsonData.data.filter( (value) =>  ( (skill != "" && skill != undefined) ? (value.skills === skill) : value.skills ) && 
                                                 ( (locationn != "" && locationn != undefined) ? (value.location === locationn) : value.location) && 
                                                 ( (experience != "" && experience != undefined) ? (value.experience === experience) : value.experience) )

                            // .filter( (value) => value.location === locationn)
                            // .filter( (value) => value.experience === experience)
    console.log(userSearch)
    // userLocation=userSkill.filter((value)=>value.location ===locationn)
    // console.log(userLocation)
    
    console.log(jsonData)
});

function passing(jsonData){
    this.jsonData=jsonData
    
    
}
