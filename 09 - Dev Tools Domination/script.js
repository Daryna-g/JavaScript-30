

const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
	const p = document.querySelector('p');
	p.style.color = '#BADA55';
	p.style.fontSize = '50px';
}

// Regular
console.log('Hello');

// Interpolated
console.log('Hello I am a %s string!', 'img');

// Styled
console.log('%c I am some great text', 'font-size:20px; background: yellow');

// warning!
console.warn('Oh NOO');

// Error :|
console.error('Invalid password');

// Info
console.info('Some info');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('text'), 'That is wrong');

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();

// Grouping together
dogs.forEach(dog => {
	console.groupCollapsed(`${dog.name}`);
	console.log(`This is ${dog.name}`);
	console.log(`${dog.name} is ${dog.age} years old`);
	console.log(`${dog.name} is ${dog.age * 7} dog years old`);
	console.groupEnd(`${dog.name}`);
});

// counting
console.count('Wes');
console.count('Wes');
console.count('Wes');
console.count('Jim');
console.count('Jim');
console.count('Wes');
console.count('Jim');
console.count('Wes');

// timing
console.time('feaching data');
fetch('https://api.github.com/users/wesbos')
	.then(data => data.json())
	.then(data => {
		console.timeEnd('feaching data');
		console.log(data);
	});
