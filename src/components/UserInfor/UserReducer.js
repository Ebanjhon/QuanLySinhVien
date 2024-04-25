const UserReducer = (user, action) => {
    var userTemp = {
        username: "eban",
        firstName: "Jhon", // Thay "firtname" bằng "firstName"
        lastName: "eban", // Thay "lastname" bằng "lastName"
        role: "STUDENT",
        id: 1,
        email: "yjhoneban1403@gmail.com",
        address: "Cuor Dang B",
        avatar: "https://i.pinimg.com/736x/cb/97/b3/cb97b32a1e88722ebe7bc8d4498a0e02.jpg"
    };

    switch (action.type) {
        case "login": {
            localStorage.setItem('user', JSON.stringify(action.payload));
            return action.payload
        }
        case "logout": {
            localStorage.removeItem('user');
            return null;
        }
        case "upstore":
            return JSON.parse(localStorage.getItem('user'))
    }

    return user;
}

export default UserReducer





// switch (action.type) {
//     case "login": {
//         localStorage.setItem('user', JSON.stringify(userTemp));
//         return JSON.parse(localStorage.getItem('user'))
//     }
//     // return userTemp
//     case "logout": {
//         localStorage.removeItem('user');
//         return null;
//     }
//     case "upstore":
//         return JSON.parse(localStorage.getItem('user'))
// }