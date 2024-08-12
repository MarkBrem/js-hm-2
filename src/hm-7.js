const users = [
    { name: "Іван", age: 30, email: "ivan@example.com" },
    { name: "Олена", age: 25, email: "olena@example.com" },
    { name: "Петро", age: 35, email: "petro@example.com" },
];

export default users;

import Handlebars from 'handlebars/runtime';
import template from '../hbs/template.hbs';
import users from './index.js';

document.addEventListener('DOMContentLoaded', () => {
    const html = template(users);
    document.getElementById('app').innerHTML = html;
});

function filterUsers(ageThreshold) {
    return users.filter(user => user.age >= ageThreshold);
}

document.getElementById('filter-btn').addEventListener('click', () => {
    const filteredUsers = filterUsers(30);
    const html = template(filteredUsers);
    document.getElementById('app').innerHTML = html;
});