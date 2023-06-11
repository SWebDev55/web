
var urlList = ['Hay88.plus','Hay88.one', 'Hay88.mobi', 'Hay88.fun',
	'Hay88.net',
	'hay88.org' 
];

function urlli() {
	for (i = 0; i <= 5; i++) {
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

