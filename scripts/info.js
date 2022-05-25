var button = document.getElementsByClassName('bu')
var i ;
for (i = 0; i<button.length; i++){
    button[i].addEventListener('click', function(){
        this.classList.toggle('active')

        var info = this.nextElementSibling;
        if (info.style.maxHeight) {
            info.style.maxHeight = null;
        } else {
            info.style.maxHeight = info.scrollHeight = "200px";
        }
    });
}