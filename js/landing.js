
/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 100) header.classList.add('scroll_header'); else header.classList.remove('scroll_header')
}
window.addEventListener('scroll', scrollHeader)



/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-sun' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})




const TypeWriterEffect = function(txtElement,words,wait=3000){
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait,10);//radix-10 defines decimal number system
    this.typewrd();
    this.isDeleting = false;
}

TypeWriterEffect.prototype.typewrd =function(){

    const currentwrd = this.wordIndex % this.words.length;
    //assume currentwrd is 0, 0%3=0, thus fullText = this.words[0]
    const fullText = this.words[currentwrd];

    if(this.isDeleting){
        this.txt = fullText.substring(0,this.txt.length-1)
    }
    else{
        this.txt = fullText.substring(0,this.txt.length +1)
    }

    this.txtElement.innerHTML = `<span class='txt'>${this.txt}</span>`;

    let typeSpeed = 300;
    if(this.isDeleting){
        typeSpeed /= 2;

    }

    //if words is complete
    if(!this.isDeleting && this.txt === fullText){
        typeSpeed = this.wait;
        this.isDeleting = true
    }
    else if(this.isDeleting && this.txt==''){
        this.isDeleting=false;

        //MOve to next words
        this.wordIndex++;

        //pause before typing next word
        typeSpeed = 500;
    }

    setTimeout(()=>this.typewrd(),typeSpeed);
}



document.addEventListener('DOMContentLoaded',initialize);


function initialize(){const txtElement = document.getElementById('type-txt');
const words = JSON.parse(txtElement.getAttribute('data-words'));
const wait = txtElement.getAttribute('data-wait');

new TypeWriterEffect(txtElement,words,wait)
}

