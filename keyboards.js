// Fungsi Memunculkan Keyboard dan 
// mengambil input keyboard di mobile

let hidInput = document.createElement('input');
hidInput.style.position = "absolute";
hidInput.style.left = "-9999px"; 
document.body.appendChild(hidInput);
hidInput.value = "    ";

function getChar(e) {
    return new Promise(resolve => {
        if (e.key !== "Unidentified"){  
            resolve(e.key);  
            hidInput.value = "    ";
            hidInput.setSelectionRange(2,2);
        } else {
            setTimeout(() => {
                let char = hidInput.value.trim();
                resolve(char); 
                hidInput.value = "    ";   
                hidInput.setSelectionRange(2,2); 
            }, 20); 
        }
    });
}

window.addEventListener("click",()=>{
	hidInput.focus();
	hidInput.setSelectionRange(2,2);
});
