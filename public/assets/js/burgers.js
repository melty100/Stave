
$(function () {
    $(".eat-burger").on("click", function(event) {

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
        });
    });

    $("#reset").on("click", function(event) {
        console.log(this);

        $.ajax("/api/burgers/", {
            type: "PUT"
        }).then(() => {
            console.log("Reset burgers!");
            location.reload;
        });
    });

    $("#add-burger").on("click", function (event) {

        event.preventDefault();

        let burgerName = $("#ca").val().trim();
        if(burgerName === '') burgerName = 'Plain Burger'

        var burger = {
            name: burgerName,
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: burger
        }).then(
            function () {
                console.log("created new burger");
                location.reload();
            }
        );
    });

});
