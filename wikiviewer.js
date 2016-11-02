$(document).ready(function(){

  var displayContent = function(data){
    //Clear out old contents
    $("#output").html("");
    $("#search-res").css("display", "block");
    for (var i=0; i < data[1].length; i++){
      $("#output").append("<div class='output-content'><div class='title'><a href='"
                          +data[3][i] + "'>" +data[1][i] + "</a></div>" +
                          "<div class='description'>"+data[2][i]+ "</div></div>");

    }
    $("#output").css("border-top", "1px solid black");
  };

  var goToRandom = function(data){
    var pageTitle = data.query.random[0].title;
    // replace spaces with underscores
    pageTitle = pageTitle.split(" ").join("_");
    pageTitle = pageTitle.split("'").join("%27");
    console.log(pageTitle)
    var url = "https://en.wikipedia.org/wiki/" + pageTitle;
    window.open(url);
  };
  $("#search").on("click", function(){
    console.log(document.getElementById("searchTerm").width)
    //Expand the search bar
    if($("#searchTerm").css("width") === "0px"){
      $("#searchTerm").css("width", "300px");
      $("#searchTerm").css("border", "1px solid black");
      $("#searchTerm").css("background-color", "white");

      return;
    }
    var searchTerm = $("#searchTerm").val();
    if (searchTerm === ""){
        $("#searchTerm").attr("placeholder", "Ya didn't enter anything...");
    }
    else{
      var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm + "&format=json&callback=?";
      $.getJSON(url, displayContent, "jsonp")
    }
  });

  $("#random").on("click", function(){
    var url = "https://en.wikipedia.org/w/api.php?action=query&list=random&format=json&rnnamespace=0&rnlimit=1&callback=?"
    $.getJSON(url, goToRandom, "jsonp")
  });
});
