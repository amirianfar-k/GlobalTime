Intro
====
javascript library for date and time with all calendars, timezones and more
Universal Calendars, gregorian julian french indian persian arabic chinese japanse mayan hebrew isoweek gregserial isoday and .... calendars
Usage
====
```javascript
d=new Δ.date()
out=d.gregorian			
/* 
	{
		year: 2014, 
		month: 5,
		day:23
	}	
*/
out=d.gregorian.year
//	2014	
out="today "+d.gregorian  // d.gregorian.toString() called
//	today 23/5/2014 	
d.gregorian.year=1994	  	// set year in gregorian
d.arabic.year=1198	  		// set year in arabic
d.persian.year=1393	  		// set year in persian
```
Calendars
====
* gregorain
* julian
* persian           - jalali )
* persiana          - Persian Astronomy )
* arabic
* french
* indian
* mayan
* hebrew
* chinese
* japanese
* bahai
* isoweek
* soday
* utime             - Unix Time - miliseconds since 1970 )
* excelserial1900   - excel 1900 day serial numbers )
* excelserial1904   - excel 1904 day serial numbers )
* gregserial        - gregorian serial number )
* jd                - Julian Day )
* mjd
```javascript
d=new Δ.date()
d.gregorian={
	day: 22,
	leap: "Normal year",
	month: 2,
	monthName: "February",
	weekday: 0,
	weekdayName: "Sunday",
	year: 1998
}
d.arabic={
	day: 24,
	leap: "Normal year",
	month: 10,
	weekday: 0,
	weekdayName: "al-'ahad",
	year: 1418
}	
d.french={
	an: 206,
	decade: 1,
	jour: 3,
	mois: 6,
	weekday: 0,
	weekdayName: "ravivara"
}
d.indian={
	day: 3,
	leap: "Normal year",
	month: 12,
	weekday: 0,
	weekdayName: "ravivara",
	year: 1919
}
d.julian={
	day: 22,
	leap: "Normal year",
	month: 2,
	monthName: "February",
	weekday: 0,
	weekday_text: "Sunday",
	year: 1998
}
d.persian={
	day: 3,
	leap: "Normal year",
	month: 12,
	monthName: "Esfand",
	weekday: 0,
	weekdayName: "Yekshanbeh",
	year: 1376
}
d.persiana={
	day: 3,
	leap: "Normal year",
	month: 12,
	monthName: "Esfand",
	weekday: 0,
	weekdayName: "Yekshanbeh",
	year: 1376
}




