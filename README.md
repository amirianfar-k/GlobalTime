Intro
====
javascript library for date and time with all calendars, timezones and more
Universal Calendars, gregorian julian french indian persian arabic chinese japanse mayan hebrew isoweek gregserial isoday and more

*fr: Universal Calendriers, grégorien julian indien maya français persan arabe chinois japonais hébreu et plusieurs calendriers
*de: Universal Kalenders, gregoriaanse julian Frans Indiaas Perzisch Arabisch Chinees Japans hebreeuws Maya en meer agenda
*gr: Universal-Kalender, gregorianischen julian französisch indisch persisch arabisch chinesisch japanisch hebräisch Maya-Kalender und mehr
*ch: 通用日历，公历朱利安法国印度波斯语阿拉伯语中国日本希伯来文和玛雅历法更多
*jp: ユニバーサルカレンダー、グレゴリオ暦フランスインド、ペルシャ、アラビア語中国語日本語ヘブライ語、マヤ、よりカレンダー
*ar: التقاويم العالمية، جوليان ميلادية الفرنسية الهندية الفارسية العربية الصينية اليابانية والعبرية المايا أكثر التقويمات
*fa: جهانی تقویم، میلادی میلادی فرانسوی هندی فارسی و عربی چینی مایان عبری ژاپنی و تقویم تر
*ur: یونیورسل کیلنڈر، جار جیائی جولین فرانسیسی بھارتی فارسی عربی چینی جاپانی عبرانی مایا اور زیادہ کیلنڈر
*tr: Evrensel Takvimler miladi julian Fransız Hint farsça arapça Çince, Japonca ibranice mayan ve daha takvimler
*kr: 유니버설 달력, 그레고리오 줄리안 프랑스어 인도 페르시아어 아랍어 중국어 일본어 히브리어 마야 더 캘린더
*ru: Универсальные Календари, григорианский Джулиан французский индийский персидский Арабский Китайский Японский иврит майя и больше календари
*sp: Universal calendarios gregoriano, maya julian francés indio persa árabe chino japonés hebreo y más calendarios
*he: יוניברסל לוחות שנה, המאיה יל ה צרפתית, הודי, פרסית ערבית הסינית יפנית עברית ועוד לוחות שנה
*az: Universal Təqvimlər, qriqori julian french indian persian arabic chinese japanese hebrew mayan və daha çox təqvimlər
*in: यूनिवर्सल कैलेंडर, ग्रेगोरी जूलियन फ्रांसीसी भारतीय फारसी अरबी चीनी जापानी यहूदी Mayan और अधिक कैलेंडर

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




