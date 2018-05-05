function timeFormat(amount) {
	var time = new Object();
	time.hours = ((amount % 86400) / 3600).toFixed(0);
	time.minutes = ((amount % 3600) / 60).toFixed(0);
	time.seconds = (amount % 60).toFixed(0);
	time.pcUptime = time.hours + ' hours ' + time.minutes + ' minutes ' + time.seconds + ' seconds ';
	return time;
}
exports.format = timeFormat;