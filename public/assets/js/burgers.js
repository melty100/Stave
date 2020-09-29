// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".delete-burger").on("click", function(event) {

        var id = $(this).data("id");

        var isDevoured = {
            devoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: isDevoured
        }).then(() => {
            console.log("Burger devoured!");
            location.reload();
        })
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var burger = {
            name: $("#ca").val().trim(),
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: burger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});
