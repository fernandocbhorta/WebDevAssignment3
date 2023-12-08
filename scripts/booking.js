/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

const full_day = 35;
const half_day = 20;
var rate = 35;
var cost = 0;
const full = document.getElementById('full');
const half = document.getElementById('half');
const monday = document.getElementById('monday');
const tuesday = document.getElementById('tuesday');
const wednesday = document.getElementById('wednesday');
const thursday = document.getElementById('thursday');
const friday = document.getElementById('friday');
const clear = document.getElementById('clear-button');
var number_of_days = 0;


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!


function clicked_button() {
    if(!this.classList.contains('clicked')) {
        this.classList.add('clicked');
        number_of_days++;
        calculate();
    }
}


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function remove_color() {
    monday.classList.remove('clicked');
    tuesday.classList.remove('clicked');
    wednesday.classList.remove('clicked');
    thursday.classList.remove('clicked');
    friday.classList.remove('clicked');
    number_of_days = 0;
    calculate();
}


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function half_day_selected() {
    rate = half_day;
    full.classList.remove('clicked');
    half.classList.add('clicked');
    calculate();
}


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function full_day_selected() {
    rate = full_day;
    half.classList.remove('clicked');
    full.classList.add('clicked');
    calculate();
}



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
    cost = number_of_days * rate;
    document.getElementById('calculated-cost').innerHTML = cost;
}

// EventListeners for this page

monday.addEventListener('click',clicked_button);
tuesday.addEventListener('click',clicked_button);
wednesday.addEventListener('click',clicked_button);
thursday.addEventListener('click',clicked_button);
friday.addEventListener('click',clicked_button);
full.addEventListener('click',full_day_selected);
half.addEventListener('click',half_day_selected);
clear.addEventListener('click',remove_color);