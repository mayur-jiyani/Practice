const person = {
    name: 'mayur',
    walk() {
        console.log(this);
    }
};

// person.walk();

const walk = person.walk.bind(person);
// console.log(walk)
walk();


// Object destructuring
const address = {
    street: '',
    city: '',
    country: ''
};

const { street, city, country } = address;

// spread operator
const first = [1, 2, 3];
const second = [10, 2, 3];

const combined = [...first, ...second];