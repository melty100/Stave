
$(function () {

    $(".eat-burger").on("click", function (event) {

        var id = $(this).data("id");
        var isDevoured = {
            devoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: isDevoured
        }).then(() => {
            location.reload();
        });
    });

    $("#delete-burgers").on("click", function (event) {
        event.preventDefault();

        $.ajax("/api/burgers/", {
            type: "DELETE"
        }).then(() => {
            location.reload();
        });
    })

    $("#reset").on("click", function (event) {

        $.ajax("/api/burgers/", {
            type: "PUT"
        }).then(() => {
            location.reload();
        });
    });

    $("#add-burger").on("click", function (event) {

        event.preventDefault();

        let burgerName = $("#ca").val().trim();
        if (burgerName === '') burgerName = 'Plain Burger'

        var burger = {
            name: burgerName,
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: burger
        }).then(
            function () {
                location.reload();
            }
        );
    });

});
