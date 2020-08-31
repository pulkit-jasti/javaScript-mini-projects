$('.menu-btn').click(function () {
	$('.menu-btn').toggleClass('active');
	$('.overlay').toggleClass('active');
	$('.menu-container').toggleClass('active');
});

const cursor = curDot();

cursor.over('.line-1', {
	borderColor: 'rgba(255,255,255,.38)',
	broderWidth: 2,
});
