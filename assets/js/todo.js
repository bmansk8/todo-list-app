//check off todos by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//click on x to delete
$("ul").on("click", "span", function(event) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  //prevents bubbling up to other elemeants
  event.stopPropagation();
});

//add a todo
$('input[type="text"]').keypress(function(event) {
  //enter key code is 13
  if (event.which === 13) {
    //grabbing new todo text
    var todoText = $(this).val();
    $(this).val("");
    //create new li to add to ul
    $("ul").append(
      "<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>"
    );
  }
});

$(".fa-plus").click(function() {
  $('input[type="text"]').fadeToggle();
});
