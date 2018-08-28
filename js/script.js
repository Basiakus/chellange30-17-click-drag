const items = document.querySelector('.items');
let mouse = false;
let startX;
let scrollLeft;

items.addEventListener('mouseup', () => {
	mouse = false;
	items.classList.remove('active');
});

items.addEventListener('mousedown', (e) => {
	mouse = true;
	items.classList.add('active');
	startX = e.pageX - items.offsetLeft;
	scrollLeft = items.scrollLeft;
});

items.addEventListener('mouseleave', () => {
	mouse = false;
});

items.addEventListener('mousemove', (e) => {
	e.preventDefault();
	if(!mouse) return;
	const x = e.pageX - items.offsetLeft;
	const passing = startX - x;
	items.scrollLeft = scrollLeft - passing*3;
	console.log(`startX:${startX} scrollLeft:${scrollLeft} passing:${passing}`);
});