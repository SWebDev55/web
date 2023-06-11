
var urlList = ['hay8811.com','hay8822.com', 'hay8833.com', 'hay8844.com',
	'hay8855.com', 'hay8866.com', 'hay8877.com', 'hay8888.com', 'hay8899.com'
];

function urlli() {
	for (i = 0; i <= 9; i++) {
		$('.ulList li').eq(i).find('a').attr("href", 'https://www.'+urlList[i]);
		// $('.ulList li').eq(i).find('span.url').html(urlList[i]);
		$('.ulList li').eq(i).find('a.url').find('span').html(urlList[i]);
	}
}
urlli()
setTimeout(function() {
	$('#lineMs0').html(Math.ceil(Math.random() * 50) + 'ms')
}, 300)
setTimeout(function() {
	$('#lineMs1').html(Math.ceil(Math.random() * 60) + 'ms')
}, 400)
setTimeout(function() {
	$('#lineMs2').html(Math.ceil(Math.random() * 50) + 'ms')
}, 200)
setTimeout(function() {
	$('#lineMs3').html(Math.ceil(Math.random() * 100) + 'ms')
}, 400)
setTimeout(function() {
	$('#lineMs4').html(Math.ceil(Math.random() * 80) + 'ms')
}, 500)
setTimeout(function() {
	$('#lineMs5').html(Math.ceil(Math.random() * 70) + 'ms')
}, 600)
setTimeout(function() {
	$('#lineMs6').html(Math.ceil(Math.random() * 100) + 'ms')
}, 600)
setTimeout(function() {
	$('#lineMs7').html(Math.ceil(Math.random() * 50) + 'ms')
}, 600)
setTimeout(function() {
	$('#lineMs8').html(Math.ceil(Math.random() * 60) + 'ms')
}, 600)

