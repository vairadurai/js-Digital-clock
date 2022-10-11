


clock = () => {
    let date = new Date();
    // console.log(date);
    let hrs = date.getHours();
    // console.log(hrs);
    let mint = date.getMinutes();
    // console.log(mint);
    let sec = date.getSeconds();

    // console.log(time);
    // convert into 12 hrs formet
    let period = 'AM';
    // if (hrs == 0) {
    //     hrs = 12;
    // }
    if(hrs == 12){
        hrs=12
    }
    else if (hrs >= 12) {
        hrs = hrs-12;
        period = "PM"
    }
    hrs = hrs < 10 ? "0" + hrs : hrs;
    mint = mint < 10 ? "0" + mint : mint;
    sec = sec < 10 ? "0" + sec : sec;
    let time = `${hrs}:${mint}:${sec}:${period}`;
    // console.log(time);
    document.getElementById('clock').innerText = time;
    setTimeout(clock, 1000);
}

clock();

