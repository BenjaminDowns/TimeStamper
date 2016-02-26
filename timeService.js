

module.exports = function (req, res) {

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var year, monthIndex, dayIndex, finalDate, unixTime, dateTime;

    var time = req.params.time

    if (!time) {
        
        res.send('no time designated')

    } else {
        try {
            if (/^\d*$/.test(time)) {
                dateTime = new Date(time * 1000)
                unixTime = time;
            } else {
                dateTime = new Date(time);
                unixTime = dateTime.getTime() / 1000
            }

            year = dateTime.getFullYear();
            monthIndex = dateTime.getMonth();
            dayNum = dateTime.getDate();
            dayIndex = dateTime.getDay();

            finalDate = {
                unix: unixTime,
                readable: days[dayIndex] + ", " + months[monthIndex] + " " + dayNum + ", " + year
            };

            if (!finalDate.unix || !finalDate.readable) {
                throw err;
            }

            res.send(finalDate);

        } catch (err) {
            res.send("It looks like your date was not properly formatted. Try MM-DD-YYYY or 'January 15 2014' for best results.");
        }
    }
};