// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

var good_dog = document.getElementById('submit-button');

function submit_message() {
    var replace = document.getElementById('contact-page');
    const list = replace.classList;
    replace.innerHTML="<p>Thank you for your message!</p>";
    list.add('good-dog');    
}

good_dog.addEventListener('click',submit_message);