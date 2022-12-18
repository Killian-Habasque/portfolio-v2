$(document).ready(function(){
    var urlcourante = document.location.href;  
    var urlcourante = urlcourante.replace(/\/$/, ""); 
    var id = urlcourante.substring(urlcourante.lastIndexOf( "=" )+1 );  
    
    $.getJSON( "../json/projects.json", function( json ) {	  

        for (let index = json.projects.length; index > 0; index--) {

            let id = index - 1;

            var string = "";
            string += '<div class="project">';
            string += '<a class="location-project project-5" onclick="window.location=' + "'pages.html?projects=" + id + "'" + '">';
            string += '<p class="num-project">0'+ id +'</p> ';
            string += '<h1 class="name-project">'+ json.projects[ id ].name +'</h1> ';
            string += '</a> ';
            string += '<p class="desc-project">'+ json.projects[ id ].type +'</p> ';
            string += '</div> ';
            $('#projects-list').append(string);

            
        }
    });  
});
