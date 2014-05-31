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
console.log()
out=d.gregorian.year
//	2014	
out="today "+d.gregorian  // d.gregorian.toString() called
//	today 23/5/2014 	
d.gregorian.year=1994	  	// set year in gregorian
d.arabic.year=1994	  		// set year in arabic
d.persian.year=1994	  		// set year in persian
```

Calendars
====
gregorain
julian
persian           - jalali )
persiana          - Persian Astronomy )
arabic
french
indian
mayan
hebrew
chinese
japanese
isoweek
isoday
utime             - Unix Time - miliseconds since 1970 )
excelserial1900   - excel 1900 day serial numbers )
excelserial1904   - excel 1904 day serial numbers )
gregserial        - gregorian serial number )
jd                - Julian Day )
mjd

```javascript
gregorian={
	day: 22,
	leap: "Normal year",
	month: 2,
	monthName: "February",
	weekday: 0,
	weekdayName: "Sunday",
	year: 1998
}
```
