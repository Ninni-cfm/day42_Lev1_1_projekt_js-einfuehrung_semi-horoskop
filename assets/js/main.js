let list = [
    mar = { month: "Mar", zodiac: "ARIES", horoscope: "Today your patience might be tested when one or more of your projects gets put on hold by someone…", imgSrc: "https://www.horoscopedates.com/img/icon_aries.png" },
    apr = { month: "Apr", zodiac: "TAURUS", horoscope: "Your intense energy makes you a great candidate for a leadership position right now, so if you are…", imgSrc: "https://www.horoscopedates.com/img/icon_taurus.png" },
    may = { month: "May", zodiac: "GEMINI", horoscope: "If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…", imgSrc: "https://www.horoscopedates.com/img/icon_gemini.png" },
    jun = { month: "Jun", zodiac: "CANCER", horoscope: "Too many different elements in your life are overlapping with each other right now — and it's your…", imgSrc: "https://www.horoscopedates.com/img/icon_cancer.png" },
    jul = { month: "Jul", zodiac: "LEO", horoscope: "The issues you'll be dealing with today are very complicated ones — you will have to navigate your…", imgSrc: "https://www.horoscopedates.com/img/icon_leo.png" },
    aug = { month: "Aug", zodiac: "VIRGO", horoscope: "You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…", imgSrc: "https://www.horoscopedates.com/img/icon_virgo.png" },
    sep = { month: "Sep", zodiac: "LIBRA", horoscope: "Pick a cultural event that's coming up and get some tickets for it today.", imgSrc: "https://www.horoscopedates.com/img/icon_libra.png" },
    oct = { month: "Oct", zodiac: "SCORPIO", horoscope: "Someone will challenge a belief that you've held for a very long time today — and they will say an…", imgSrc: "https://www.horoscopedates.com/img/icon_scorpio.png" },
    nov = { month: "Nov", zodiac: "SAGITTARIUS", horoscope: "Someone in your life needs to step up and take on more responsibility — and you need to tell them to....", imgSrc: "https://www.horoscopedates.com/img/icon_sagittarius.png" },
    dec = { month: "Dec", zodiac: "CAPRICORN", horoscope: "Breaking the rules is not always a bad thing — especially if the rules limit your creativity.", imgSrc: "https://www.horoscopedates.com/img/icon_capricorn.png" },
    jan = { month: "Jan", zodiac: "AQUARIUS", horoscope: "Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great…", imgSrc: "https://www.horoscopedates.com/img/icon_aquarius.png" },
    feb = { month: "Feb", zodiac: "PISCES", horoscope: "Communication is very important today — written, spoken, and even nonverbal body language will all…", imgSrc: "https://www.horoscopedates.com/img/icon_pisces.png" }
];


let monthSelection = document.getElementById("monthSelection");
let monthText = document.getElementById("monthText");

let horoscopeDiv = document.getElementById("horoscope");

let zodiacImage = document.getElementById("zodiacImage");
let zodiacText = document.getElementById("zodiacText");
let horoscopeText = document.getElementById("horoscopeText");

let errorText = document.getElementById("errorText");

initialize();

function initialize() {

    list.forEach(element => {
        monthSelection.innerHTML += `<option value="${element.month}">${element.month}</option>`
    });
}

function showHoroscope() {

    let selectedMonth = "";
    if (monthSelection.selectedIndex == 0) {
        selectedMonth = monthText.value;
    } else {
        selectedMonth = monthSelection.value;
    }
    evaluate(selectedMonth);
    monthText.value = ""
    monthSelection.value = 0;
}

function evaluate(selectedMonth) {
    let res;
    switch (selectedMonth.toLowerCase()) {
        case "mar":
            res = mar;
            break;

        case "apr":
            res = apr;
            break;

        case "may":
            res = may;
            break;

        case "jun":
            res = jun;
            break;

        case "jul":
            res = jul;
            break;

        case "aug":
            res = aug;
            break;

        case "sep":
            res = sep;
            break;

        case "oct":
            res = oct;
            break;

        case "nov":
            res = nov;
            break;

        case "dec":
            res = dec;
            break;

        case "jan":
            res = jan;
            break;

        case "feb":
            res = feb;
            break;

        default:
            res = null
            break;
    }

    console.log(res)

    if (res != null) {
        console.log(res.month);
        zodiacImage.src = res.imgSrc;
        zodiacText.innerHTML = `${res.month}: Your zodiac is ${res.zodiac}`;
        horoscopeText.innerHTML = res.horoscope;
        horoscopeDiv.style.visibility = "visible";
        errorText.style.display = "none";
    }
    else {
        errorText.style.display = "block"
        horoscopeDiv.style.visibility = "hidden";
    }
}
