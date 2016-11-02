$(document).ready(function(){

  var displayContent = function(data){
    //Clear out old contents
    $("#output").html("");
    for (var i=0; i < data[1].length; i++){
      $("#output").append("<div class='output-content'><div class='title'><a href='" +
                          +data[3][i] + "'>" +data[1][i] + "</a></div>" +
                          "<div class='description'>"+data[2][i]+ "</div></div>");
      //put in link div
    }
  };
  console.log("Hello");
  $("#search").on("click", function(){
    var searchTerm = $("#searchTerm").val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm + "&format=json&callback=?";
    console.log(url);
    console.log(searchTerm);
    $.getJSON(url, displayContent, "jsonp")
  });
});
