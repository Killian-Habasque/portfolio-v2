$(document).ready(function(){
    var urlcourante = document.location.href;  
    var urlcourante = urlcourante.replace(/\/$/, ""); 
    var id = urlcourante.substring(urlcourante.lastIndexOf( "=" )+1 );  
    
    $.getJSON( "../json/projects.json", function( json ) {	
    
        if(json.projects[ id ]) {
            $('#name').append(json.projects[ id ].name);
            $('#date').append("©" + json.projects[ id ].date);
            $('#category').append(json.projects[ id ].category);
            $("#image").attr("src",json.projects[ id ].image);
            $('#description').append(json.projects[ id ].description);
            $('#illustration').click(function() {
                window.location.href = json.projects[ id ].lien;
           });          
        } else {
            window.location.href = "../index.html";
        }   
    });  
});

