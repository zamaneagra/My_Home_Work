////////////////////////////////////////
// get users from external data base //
function getUsers() {
        for(var i = 1; i < 5; i++)
        $.ajax({
            url: 'https://reqres.in/api/users?page=' + i,
            type: 'GET',
            success: function(response){
                for(var i =0; i < response.data.length;i++ ) {
                    $("#user-list").append(
                        "<li>" + response.data[i].first_name + " " + response.data[i].last_name + " (id: " + response.data[i].id + ")" + "</li>"
                    )
                }
                console.log(response);
            }

        });
}

////////////////////////////////
// add in data base new user //
function saveUsers() {
    var newUser = $("#firstName").val() + " " + $("#lastName").val();

    $.ajax({
        url: "https://reqres.in/api/users",
        type: "POST",
        data: {
            name: newUser,
        },

        success: function(response){
            $("#confirmUserSaved").append(
            "<p> New user <span class='userAdded text-capitalize'>" + newUser + "</span> was added!!!</p>"
            )

        },

        error: function(response) {
            alert("EEEEEEEEERRRRRRRRROOOOOOOOOOR")
            console.log(response);
        }
    });
}

/////////////////////////
/// get user by ID  ////
function getUser() {
    var userId = $("#userId").val();
    $.ajax({
        url: "https://reqres.in/api/users/" + userId,
        type: "GET",
            success: function(response){
                $("#getUser").append(
                    "<p>" + response.data.first_name + " " + response.data.last_name + "</p>" + "<p>" + '<img src="' + response.data.avatar + '">' + "</p>"
                )
            }
    });
}



