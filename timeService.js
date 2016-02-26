

module.exports = function (req, res) {

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var year, monthIndex, dayIndex, finalDate, unixTime, dateTime;

    var time = req.params.time

    if (!time) {

        res.render('index')

    } else {
        try {
            
            // check if param is unix time or string
            if (/^-?\d*$/.test(time)) {
                dateTime = new Date(time * 1000)
                unixTime = time;
            } else {
                dateTime = new Date(time);
                unixTime = dateTime.getUnixTime()
            }

            // format the response
            year = dateTime.getFullYear();
            monthIndex = dateTime.getMonth();
            dayNum = dateTime.getDate();
            dayIndex = dateTime.getDay();

            finalDate = {
                unix: unixTime,
                natural: days[dayIndex] + ", " + months[monthIndex] + " " + dayNum + ", " + year
            };
            
            // final check
            if (!finalDate.unix || !finalDate.natural) {
                throw err;
            }
        // respond with null values if time request incompatible format    
        } catch (err) {
            finalDate = {
                unix: null,
                natural: null
            };
        }     
        res.send(finalDate)
    }
};