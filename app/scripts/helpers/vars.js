'use strict';


var date = (new Date());
date.setHours(0);
date.setMinutes(0);
date.setSeconds(0);
date.setMilliseconds(0);
if (date.getDay()==0) {
	date.setDate(date.getDate()-1)
};

var now=Math.round(date/1000)-(date.getTimezoneOffset()*60);
var end_day=now+86399;//(3600*24)-1
var last_thirty=now-2592000;//3600*24*30;
var last_year=now-31536000;//3600*24*365;

var ltxVars = {};
ltxVars.endpoints = {
	main :"/api",
	sales : "/getsales",
	invoices : "/getinvoices",
	idsales : "/getidsales",
	nidsales : "/getnidsales",
	recurrence : "/getdailyrecurrence",
	new : "/getdailynew",
	averagesales : "/getaveragesales",
	averageinvoices : "/getaverageinvoices",
	recunew : "/getdailyrecunew",
	dailystats : "/getdailystats",
	dailystatsperhour : "/getdailystatsperhour",
	recurrenceresume : "/getrecurrenceresume",
	averagedistance: "/getaveragedistance",
	recuinvoices: "/getrecurrentinvoices",
	newinvoices: "/getnewinvoices",
	weeklysales : "/getweeklysales",
	revenuenew : "/getnewinvoices",
	revenuerecurrences : "/getrecurrentinvoices"
};
ltxVars.arguments = {
	total :"total=1",
	monthly :"monthly=1",
	now : "day="+now,
	today: "beg="+now+"&"+"end="+end_day,
	last_thirty : "beg="+last_thirty+"&"+"end="+end_day,
	last_year : "beg="+last_year+"&"+"end="+now

};