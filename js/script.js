/*
fine then lets focus on our clock
yes
can you see the live server?
Yes I can see the live server
Come to the function time_right_now
*/
let current_time = new Date();
let current_date = document.querySelector(`#date`);
let current_day = document.querySelector(`#day`);
let clock = document.querySelector(`#clock`);

// I have an idea
// uhuh Come below
function date_right_now(date){
    let date_today = date.getDate()
    let month_today = date.getMonth() + 1;
    let year_today = date.getFullYear();
    
    current_date.innerHTML = `
        <main> 
            <h1>${date_today} ${month_today} ${year_today}</h1>
        </main>
    `
}


function day_right_now(date){
    let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let today = week[date.getDay()];
    current_day.innerHTML =`
        <h2>${today}</h2>
    `
}
// freeze or thinking? I'm thinking
function time_right_now(time){
    // hours
    let hours = time.getHours() % 12;
    hours = hours ? hours : 12; 

    // minutes
    let minutes = padding(time.getMinutes());

    // seconds
    let seconds = padding(time.getSeconds());
       
    let period = hours >= 12 ? 'PM' : 'AM';

    let clock_time = `${hours}:${minutes}:${seconds} ${period}`;

    clock.innerHTML = ` 
        <h2>${clock_time}</h2>
    `
}

function padding(value) {   
    return value < 10 ? "0" + value : value;
}


setInterval(() => time_right_now(current_time),1000);

date_right_now(current_time);
day_right_now(current_time);


/*
okay I have an idea. 
I think this is not working in live server
Try to push this project online and then share the link with me
I hope that works. 
*/