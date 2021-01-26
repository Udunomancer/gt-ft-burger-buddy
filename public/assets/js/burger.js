$(function() {
    $(".devour").on("click", function(event) {
        const id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
        }).then(
            function() {
                console.log("Change to devoured");
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        let newBurger = {
            name: $("#burger").val().trim(),
            consumed: false
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("New burger created");
                location.reload();
            }
        );
    });
})