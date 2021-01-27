$(function () {
  //Functionality for devouring a listed burger
  $(".devour").on("click", function (event) {
    const id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
    }).then(function () {
      console.log("Change to devoured");
      location.reload();
    });
  });

  //Functionality for creating a new burger
  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    let newBurger = {
      name: $("#burger").val().trim(),
      consumed: 0,
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("New burger created");
      location.reload();
    });
  });
});
