$(document).ready(function(){

  var displayContent = function(data){
    //Clear out old contents
    $("#output").html("");
    $("#search-res").css("display", "block");
    for (var i=0; i < data[1].length; i++){
      $("#output").append("<div class='output-content'><div class='title'><a href='"
                          +data[3][i] + "'>" +data[1][i] + "</a></div>" +
                          "<div class='description'>"+data[2][i]+ "</div></div>");
      //put in link div
    }
  };
  console.log("Hello");
  $("#search").on("click", function(){
    console.log(document.getElementById("searchTerm").width)
    //Expand the search bar
    if($("#searchTerm").css("width") === "0px"){
      $("#searchTerm").css("width", "300px");
      return;
    }
    var searchTerm = $("#searchTerm").val();
    console.log(url);
    console.log(searchTerm);

    if (searchTerm === ""){
        $("#searchTerm").attr("placeholder", "Ya didn't enter anything...");
    }
    else{
      var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm + "&format=json&callback=?";
          $.getJSON(url, displayContent, "jsonp")
    }
  });
});
