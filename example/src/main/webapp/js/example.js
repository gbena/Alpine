
$(document).ready(function() {
    $("#swagger-button").click(function(){
        getSwagger();
    });
    $("#version-button").click(function(){
        getVersion();
    });
    $("#login-button").click(function(event){
        event.preventDefault();
        assertCredentials();
    });
});

function getSwagger() {
    $.ajax({
        type: "GET",
        url: "api/swagger.json",
        success: function (data) {
            $('#swagger-content').val(JSON.stringify(data, null, 4));
        }
    });
}

function getVersion() {
    $.ajax({
        type: "GET",
        url: "api/version",
        success: function (data) {
            $('#version-content').val(JSON.stringify(data, null, 4));
        }
    });
}

function assertCredentials() {
    var username = $("#usernameInput").val();
    var password = $("#passwordInput").val();
    $.ajax({
        type: "POST",
        url: "api/v1/login",
        data: ({username: username, password: password}),
        success: function (data) {
            $('#login-content').val(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            $('#login-content').val("Error: " + errorThrown);
        }
    });
}