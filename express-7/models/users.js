let users = [
    { id: 1, name: "Umar", email: "umar@gmail.com", password: "umar12345" },
    {id: 2, name: "Osman", email: "osman@gmail.com", password: "osman12345"}
];

const getAllUsers = () => users;
const getUserById = (id) => {
    users.find(user => user.id === id);
}

module.exports = { getAllUsers, getUserById };