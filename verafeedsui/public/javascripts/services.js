// Userlist data array for filling in info box
var userListData = [];

// DOM Ready =============================================================
$(document).ready(function() {

    // Test
    //test();

});

// Functions =============================================================

function test() {
    $.getJSON( '/users/userlist', function( data ) {
        console.log(JSON.stringify(data));
        var userlist = data;
        for(var i = 0; i < userlist.length; i++) {
            console.log(userlist[i].username);
        }
    });
};

// Add User
function addUser() {

        // If it is, compile all user info into one object
        var newUser = {
            'username': 'test2',
            'email': 'test2@test.com',
            'fullname': 'Anna Graham',
            'age': '22',
            'location': 'Denver',
            'gender': 'Female'
        }

        // Use AJAX to post the object to our adduser service
        $.ajax({
            type: 'POST',
            data: newUser,
            url: '/users/adduser',
            dataType: 'JSON'
        }).done(function( response ) {

            // Check for successful (blank) response
            if (response.msg === '') {
                test();
            }
            else {
                // If something goes wrong, alert the error message that our service returned
                console.log('Error: ' + response.msg);
            }
        });
};


// Delete User
function deleteUser(userId) {

    // Pop up a confirmation dialog
    var confirmation = confirm('Are you sure you want to delete this user?');

    // Check and make sure the user confirmed
    if (confirmation === true) {

        // If they did, do our delete
        $.ajax({
            type: 'DELETE',
            url: '/users/deleteuser/' + userId
        }).done(function( response ) {
            // Check for a successful (blank) response
            if (response.msg === '') {
                console.log("The user was removed from the database with success.")
            }
            else {
                alert('Error: ' + response.msg);
            }
        });
    }
    else {
        // If they said no to the confirm, do nothing
        return false;

    }

};




// Fill table with data
/*function populateTable() {

    // Empty content string
    var tableContent = '';

    // jQuery AJAX call for JSON
    $.getJSON( '/users/userlist', function( data ) {
        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td><a href="#" class="linkshowuser" rel="' + this.username + '">' + this.username + '</a></td>';
            tableContent += '<td>' + this.email + '</td>';
            tableContent += '<td><a href="#" class="linkdeleteuser" rel="' + this._id + '">delete</a></td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#userList table tbody').html(tableContent);
    });
};*/

