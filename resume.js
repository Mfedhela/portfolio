let popup = document.querySelector('.popup');
let outlinks = document.querySelector('.outlinks');
popup.addEventListener('click',function(){

				if(outlinks.style.display == 'block') {
								outlinks.style.display = "none";
								popup.textContent = "click here for links"
								popup.classList.remove('btn-danger');
				}else {
								outlinks.style.display = "block";
								popup.textContent = "X"
								popup.classList.add('btn-danger');
				}
});
