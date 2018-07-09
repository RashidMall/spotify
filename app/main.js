let myjson = $.getJSON('./users.json');


//Check the username and password to log in
$('#login_form').submit(function(event){
    let login_name = $('#logname').val();
    let login_pass = $('#logpass').val();

    if(isCorrectLogin(login_name, login_pass)){
        // Change color in users.json;
    }else{
        if(!usersNames.includes(login_name)){
            $('.danger').remove();
            $('<p class="danger">The username you\'ve entered doesn\'t match any account.</p>').insertAfter('#logname');
        }else{
            $('.danger').remove();
            $('<p class="danger">The password you\'ve entered is incorrect.</p>').insertAfter('#logpass');
        }
        event.preventDefault();
    }
});

function isCorrectLogin(name, pass){
    for(let i = 0; i < users.length; i++){
        if(name === users[i].u_name && pass === users[i].u_pass){
            return true;
        }
    }
    return false;
}