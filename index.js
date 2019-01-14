var banners =["img/2.jpg", "img/3.jpg", "img/4.png","img/5.jpg"]; // 图片地址
var counter = 0;
function run() {
	setInterval(cycle, 3333); //重复运行cycle函数，周期1000ms			
}

function cycle() {
	counter++;
	if(counter == banners.length)
		counter = 0;
	document.getElementById("banner").src = banners[counter];
}