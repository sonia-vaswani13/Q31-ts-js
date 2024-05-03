//Q31.No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.

//Define the list of users
let users: string[]=[];

//List of users is not empty 
if (users.length  === 0){
console.log(" we need to find some users!");
}else{
    //list is not empty, remove all users name
    users =[];
    console.log("all usersname will be removed.");
}