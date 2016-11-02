$(document).ready(function(){

  var displayContent = function(data){
    console.log(data);
    for (var i=0; i <= 10; i++){
      $("#output").append(data[1][i]);
      $("#output").append(data[2][i]);
      $("#output").append(data[3][i]);
    }
  };
  console.log("Hello");
  $("#search").on("click", function(){
    var searchTerm = $("#searchTerm").val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm + "&format=json&callback=?";
    console.log(url);
    console.log(searchTerm);
    $.getJSON(url, displayContent, "jsonp")
    // $.ajax({
    //   url: url,
    //   type: 'GET',
    //   contentType: "application/json; charset=utf-8",
    //   async: false,
    //   dataType: 'json',
    //   success: function(data, status, jqXHR){
    //       console.log(data);
    //   }
    // })
    // .done(function(){
    //   console.log("success");
    // })
    // .fail(function(){
    //   console.log("fail");
    // })
    // .always(function(){
    //   console.log("complete");
    // });
  });
});
