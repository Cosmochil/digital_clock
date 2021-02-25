let current_date = document.querySelector(`#date`);
let current_day = document.querySelector(`#day`);
let clock = document.querySelector(`#clock`);


function date_right_now(){
    let date = new Date();

    let date_today = date.getDate()
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"];
    let month_today = months[date.getMonth()];
    let year_today = date.getFullYear();
    current_date.innerHTML = `
        <main> 
            <h1 class ="date" >${date_today} ${month_today} ${year_today}</h1>
        </main>
    `
}


function day_right_now(){

    let date = new Date();

    let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let today = week[date.getDay()];

    current_day.innerHTML =`
        <h2 class="day">${today}</h2>
    `
}
//
function time_right_now(){

    let time = new Date();

    // hours
    let hours = time.getHours() % 12;
    hours = hours ? hours : 12; 

    // minutes
    let minutes = padding(time.getMinutes());

    // seconds
    let seconds = padding(time.getSeconds());
       
    let period = hours >= 12 ? 'AM' : 'PM';

    let clock_time = `${hours}:${minutes}:${seconds} ${period}`;

    clock.innerHTML = ` 
        <h2 class="clock">${clock_time}</h2>
    `
}

function padding(value) {   
    return value < 10 ? "0" + value : value;
}

function main() {
    date_right_now();
    day_right_now();
    setInterval(() => time_right_now(),1000);
}

main();

// Dark mode toggle switch

const toggle_switch = document.querySelector('.theme-switch input[type="checkbox"]');

function switch_theme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('dark-theme', 'dark');
    } else {
        document.documentElement.setAttribute('dark-theme', 'light');
    }
}

toggle_switch.addEventListener('change', switch_theme, false)
