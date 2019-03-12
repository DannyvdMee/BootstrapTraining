document.onload = worldClocks();

function worldClocks() {

    // Amsterdam Time
    amsterdamTime();

    // New York Time

    newyorkTime();

    // Los Angeles time

    losangelesTime();

    // Dubai time

    dubaiTime();

    // Singapore time

    singaporeTime();

    // Brisbane time

    brisbaneTime();

}

function getCurrentUTCTime() {
    return new Date();
}

function amsterdamTime() {
    let City = "amsterdam";
    let timePreset = 0;

    let UTCTime = getCurrentUTCTime();

    UTCTime.setHours( UTCTime.getHours() + timePreset );

    pushTime( UTCTime, City )
}

function newyorkTime() {
    let City = "newyork";
    let timePreset = -6;

    let UTCTime = getCurrentUTCTime();

    UTCTime.setHours( UTCTime.getHours() + timePreset );

    pushTime( UTCTime, City )
}

function losangelesTime() {
    let City = "losangeles";
    let timePreset = -9;

    let UTCTime = getCurrentUTCTime();

    UTCTime.setHours( UTCTime.getHours() + timePreset );

    pushTime( UTCTime, City )
}

function dubaiTime() {
    let City = "dubai";
    let timePreset = 3;

    let UTCTime = getCurrentUTCTime();

    UTCTime.setHours( UTCTime.getHours() + timePreset );

    pushTime( UTCTime, City )
}

function singaporeTime() {
    let City = "singapore";
    let timePreset = 7;

    let UTCTime = getCurrentUTCTime();

    UTCTime.setHours( UTCTime.getHours() + timePreset );

    pushTime( UTCTime, City )
}

function brisbaneTime() {
    let City = "brisbane";
    let timePreset = 9;

    let UTCTime = getCurrentUTCTime();

    UTCTime.setHours( UTCTime.getHours() + timePreset );

    pushTime( UTCTime, City )
}

function pushTime( localTime, City ) {

    localTime = localTime.toLocaleTimeString( navigator.language, {
        weekday : 'long',
        day     : '2-digit',
        hour    : '2-digit',
        minute  : '2-digit',
        second  : '2-digit'
    } );

    document.getElementById( City + 'Time' ).innerHTML = localTime;

}

setInterval( worldClocks, 1000 );