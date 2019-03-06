
function getUser() {
    var userId = $("#userId").val();
    $.ajax({
        url: "https://reqres.in/api/users/" + userId,
        type: "GET",
        success: function(response){
            console.log(response);
        }
    });
}



function updateUser() {
    var formData = getFormData();
    var userId = $("#userId").val();

    console.log(formData);
    $.ajax({
        url: "https://reqres.in/api/users/" + userId,
        type: "PUT",
        data: formData,
        success: function(response){
            console.log(response);
        }
    });
}

function getUsers() {

    $.ajax({
        url: "https://reqres.in/api/users?page=1",
        type: "GET",
        success: function(response){
            for(var i =0; i < response.data.length;i++ ) {
                $("#user-list").append(
                    "<p>" + response.data[i].first_name + " " + response.data[i].last_name + "</p>"
                )
            }
            console.log(response);
        }
    });

    $.ajax({
        url: "https://reqres.in/api/users?page=2",
        type: "GET",
        success: function(response){
            for(var i =0; i < response.data.length;i++ ) {
                $("#user-list").append(
                    "<p>" + response.data[i].first_name + " " + response.data[i].last_name + "</p>"
                )
            }
            console.log(response);
        }
    });

    $.ajax({
        url: "https://reqres.in/api/users?page=3",
        type: "GET",
        success: function(response){
            for(var i =0; i < response.data.length;i++ ) {
                $("#user-list").append(
                    "<p>" + response.data[i].first_name + " " + response.data[i].last_name + "</p>"
                )
            }
            console.log(response);
        }
    });

    $.ajax({
        url: "https://reqres.in/api/users?page=4",
        type: "GET",
        success: function(response){
            for(var i =0; i < response.data.length;i++ ) {
                $("#user-list").append(
                    "<p>" + response.data[i].first_name + " " + response.data[i].last_name + "</p>"
                )
            }
            console.log(response);
        }
    });

}

function saveUsers() {
    var formData = getFormData();
    console.log(formData);
    $.ajax({
        url: "https://reqres.in/api/users",
        type: "POST",
        data: formData,
        success: function(response){
            console.log(response);
        } ,
        error: function(response) {
            alert("EEEEEEEEERRRRRRRRROOOOOOOOOOR")
        }
    });
}

function getFormData() {
    return { first_name: $("#firstName").val(),
        last_name: $("#lastName").val(), lalala: "as.dsdkjasdkasjd.ask 1232 1312 31 1"};
}