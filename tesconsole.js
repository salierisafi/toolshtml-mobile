
let fekconsole = document.createElement("textarea");
let resizeconsole = document.createElement("button");
fekconsole.disabled = true;
fekconsole.style.position = "fixed";
fekconsole.rows = 6;
resizeconsole.style.position = "fixed";
document.body.appendChild(fekconsole);
resizeconsole.innerText = "Geser";
resizeconsole.style.left = fekconsole.getBoundingClientRect().width;
resizeconsole.style.top = fekconsole.getBoundingClientRect().height;
document.body.appendChild(resizeconsole);
let consoleclearAsli = window.console.clear;
let consoleLogAsli = window.console.log;
let perulangan = 1;
window.console.log = function(pesan) {
	
	consoleLogAsli(pesan);
	let arr = fekconsole.value.trim().split("\n");
	let pesan2 = arr.pop();
	if (pesan2.replace(perulangan, "").trim() != pesan) {
		perulangan = 1;
		arr.push(pesan2);
		arr.push(pesan);
		fekconsole.value = arr.join("\n");
	} else {
		perulangan ++;
		arr.push(pesan + " " + perulangan);
		fekconsole.value =  arr.join("\n");
	}
	fekconsole.scrollTop = fekconsole.scrollHeight;
	
}
let offsetDragX; let offsetDragY;
fekconsole.addEventListener("pointerdown", (e) => {
	let rect = fekconsole.getBoundingClientRect();
	offsetDragX = e.clientX - rect.left;
	offsetDragY = e.clientY - rect.top;
});
fekconsole.addEventListener("touchmove", (e)=> {
	e.preventDefault();
	fekconsole.style.left = (e.touches[0].clientX - offsetDragX) + 'px';
	fekconsole.style.top = (e.touches[0].clientY - offsetDragY) + 'px' ;
	let rect = fekconsole.getBoundingClientRect();
	resizeconsole.style.left = rect.left + rect.width;
        resizeconsole.style.top = rect.top + rect.height;
}), ({passive : false});
fekconsole.addEventListener("pointerup", (e) => {
        offsetDragX = 0;
        offsetDragY = 0;
});
resizeconsole.addEventListener("touchmove", (e)=> {
        e.preventDefault();
	resizeconsole.style.left = e.touches[0].clientX + 'px';
        resizeconsole.style.top = e.touches[0].clientY + 'px';
	let rectCons = fekconsole.getBoundingClientRect();
	let rectResz = resizeconsole.getBoundingClientRect();
        fekconsole.style.width = (rectResz.left - rectCons.left) + 'px';
        fekconsole.style.height = (rectResz.top - rectCons.top) + 'px' ;
}), ({passive : false});
window.console.clear = function() {
  consoleclearAsli(); 
  fekconsole.value = "";  
}
