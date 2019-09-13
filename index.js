const quotes = [
	'Better sleep than work.',
	'Learn to unlearn in order to learn.',
	'Not planing is planing to fail.',
	'We eat to live and not live to eat.',
	'Reality is for those who lack imagination.',
	'You go fast when you go alone but you go far when you take someone along.',
	'When given 6 hours to cut a tress use 4 hours to sharpen your axe and 2 hours will be enough to cut a tree.',
	'Love is an electromagneticardionervescular unrejectable and incurable disease that cause a mixture of unignorable feelings for you, not just in my heart but in my life also!.!',
	'Always remember quitters never win and winners never quite.'
	];

let quit = document.getElementById('quit');
let photo = document.getElementById('pic');
const buttonQuote = document.getElementById('button-quote')
const urls = []
for (let i = 0; i <= 23; i++) {
	urls.push('photos/photo' + (i + 1)+ '.jpg');
}
	console.log(urls)






buttonQuote.addEventListener("click", function() {
	let index = getRandomIntInclusive(0, 8);
	let run = getRandomIntInclusive(0, 23);
	quit.innerHTML = quotes[index]
	photo.src = urls[run]	

});


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
} 
console.log(photo)