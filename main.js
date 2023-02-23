// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

function isAdmin(user){
    if(user.userRole !== "ADMIN"){
        return false;
    } else{ return true; }
}

function getEmail(user){
let a =`${user.firstName.toLowerCase()}.${user.lastName.toLowerCase()}@codeimmersives.com`
return a;
}

function getPlaylistLength(pL){
   return pL.songs.length; 
}

function getHardestHomework(hw){
    if(hw.length === 0){
        return "";
    }
        min = hw[0]

        for (let i = 0; i < hw.length; i++) {   
        if(hw[i].averageScore < min.averageScore)  
           min = hw[i] }
           
    
    return min.name;
}

function createPhonebook(array1, array2){
    let a = {};
    for(let i = 0; i < array1.length; i ++){
        a[array1[i]] = array2[i];

    }
    
    return a;
}














// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};