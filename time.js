
window.Δ=window.Δ || {}

Δ.time={}
Δ.time.calendar={
	J2000             : 2451545.0,              // Julian day of J2000 epoch
    JulianCentury     : 36525.0,                // Days in Julian century
    JulianMillennium  : 365250, 				// Days in Julian millennium (JulianCentury * 10)
    AstronomicalUnit  : 149597870.0,            // Astronomical unit in kilometres
    TropicalYear      : 365.24219878,           // Mean solar tropical year
	J0000: 1721424.5, // Julian date of Gregorian epoch: 0000-01-01
	J1970: 2440587.5, // Julian date at Unix epoch: 1970-01-01
	JMJD: 2400000.5,  // Epoch of Modified Julian Date system
	J1900: 2415020.5, // Epoch (day 1) of Excel 1900 date system (PC)
	J1904: 2416480.5, // Epoch (day 0) of Excel 1904 date system (Mac)
	oterms: new Array(
        -4680.93,
           -1.55,
         1999.25,
          -51.38,
         -249.67,
          -39.05,
            7.12,
           27.87,
            5.79,
            2.45
	),
	nutArgMult: new Array(// Periodic terms for nutation in longiude (delta \Psi) and obliquity (delta \Epsilon) as given in table 21.A of Meeus, "Astronomical Algorithms", first edition.
     0,  0,  0,  0,  1,
    -2,  0,  0,  2,  2,
     0,  0,  0,  2,  2,
     0,  0,  0,  0,  2,
     0,  1,  0,  0,  0,
     0,  0,  1,  0,  0,
    -2,  1,  0,  2,  2,
     0,  0,  0,  2,  1,
     0,  0,  1,  2,  2,
    -2, -1,  0,  2,  2,
    -2,  0,  1,  0,  0,
    -2,  0,  0,  2,  1,
     0,  0, -1,  2,  2,
     2,  0,  0,  0,  0,
     0,  0,  1,  0,  1,
     2,  0, -1,  2,  2,
     0,  0, -1,  0,  1,
     0,  0,  1,  2,  1,
    -2,  0,  2,  0,  0,
     0,  0, -2,  2,  1,
     2,  0,  0,  2,  2,
     0,  0,  2,  2,  2,
     0,  0,  2,  0,  0,
    -2,  0,  1,  2,  2,
     0,  0,  0,  2,  0,
    -2,  0,  0,  2,  0,
     0,  0, -1,  2,  1,
     0,  2,  0,  0,  0,
     2,  0, -1,  0,  1,
    -2,  2,  0,  2,  2,
     0,  1,  0,  0,  1,
    -2,  0,  1,  0,  1,
     0, -1,  0,  0,  1,
     0,  0,  2, -2,  0,
     2,  0, -1,  2,  1,
     2,  0,  1,  2,  2,
     0,  1,  0,  2,  2,
    -2,  1,  1,  0,  0,
     0, -1,  0,  2,  2,
     2,  0,  0,  2,  1,
     2,  0,  1,  0,  0,
    -2,  0,  2,  2,  2,
    -2,  0,  1,  2,  1,
     2,  0, -2,  0,  1,
     2,  0,  0,  0,  1,
     0, -1,  1,  0,  0,
    -2, -1,  0,  2,  1,
    -2,  0,  0,  0,  1,
     0,  0,  2,  2,  1,
    -2,  0,  2,  0,  1,
    -2,  1,  0,  2,  1,
     0,  0,  1, -2,  0,
    -1,  0,  1,  0,  0,
    -2,  1,  0,  0,  0,
     1,  0,  0,  0,  0,
     0,  0,  1,  2,  0,
    -1, -1,  1,  0,  0,
     0,  1,  1,  0,  0,
     0, -1,  1,  2,  2,
     2, -1, -1,  2,  2,
     0,  0, -2,  2,  2,
     0,  0,  3,  2,  2,
     2, -1,  0,  2,  2
	),
	nutArgCoeff: new Array( 
    -171996,   -1742,   92095,      89,          /*  0,  0,  0,  0,  1 */
     -13187,     -16,    5736,     -31,          /* -2,  0,  0,  2,  2 */
      -2274,      -2,     977,      -5,          /*  0,  0,  0,  2,  2 */
       2062,       2,    -895,       5,          /*  0,  0,  0,  0,  2 */
       1426,     -34,      54,      -1,          /*  0,  1,  0,  0,  0 */
        712,       1,      -7,       0,          /*  0,  0,  1,  0,  0 */
       -517,      12,     224,      -6,          /* -2,  1,  0,  2,  2 */
       -386,      -4,     200,       0,          /*  0,  0,  0,  2,  1 */
       -301,       0,     129,      -1,          /*  0,  0,  1,  2,  2 */
        217,      -5,     -95,       3,          /* -2, -1,  0,  2,  2 */
       -158,       0,       0,       0,          /* -2,  0,  1,  0,  0 */
        129,       1,     -70,       0,          /* -2,  0,  0,  2,  1 */
        123,       0,     -53,       0,          /*  0,  0, -1,  2,  2 */
         63,       0,       0,       0,          /*  2,  0,  0,  0,  0 */
         63,       1,     -33,       0,          /*  0,  0,  1,  0,  1 */
        -59,       0,      26,       0,          /*  2,  0, -1,  2,  2 */
        -58,      -1,      32,       0,          /*  0,  0, -1,  0,  1 */
        -51,       0,      27,       0,          /*  0,  0,  1,  2,  1 */
         48,       0,       0,       0,          /* -2,  0,  2,  0,  0 */
         46,       0,     -24,       0,          /*  0,  0, -2,  2,  1 */
        -38,       0,      16,       0,          /*  2,  0,  0,  2,  2 */
        -31,       0,      13,       0,          /*  0,  0,  2,  2,  2 */
         29,       0,       0,       0,          /*  0,  0,  2,  0,  0 */
         29,       0,     -12,       0,          /* -2,  0,  1,  2,  2 */
         26,       0,       0,       0,          /*  0,  0,  0,  2,  0 */
        -22,       0,       0,       0,          /* -2,  0,  0,  2,  0 */
         21,       0,     -10,       0,          /*  0,  0, -1,  2,  1 */
         17,      -1,       0,       0,          /*  0,  2,  0,  0,  0 */
         16,       0,      -8,       0,          /*  2,  0, -1,  0,  1 */
        -16,       1,       7,       0,          /* -2,  2,  0,  2,  2 */
        -15,       0,       9,       0,          /*  0,  1,  0,  0,  1 */
        -13,       0,       7,       0,          /* -2,  0,  1,  0,  1 */
        -12,       0,       6,       0,          /*  0, -1,  0,  0,  1 */
         11,       0,       0,       0,          /*  0,  0,  2, -2,  0 */
        -10,       0,       5,       0,          /*  2,  0, -1,  2,  1 */
         -8,       0,       3,       0,          /*  2,  0,  1,  2,  2 */
          7,       0,      -3,       0,          /*  0,  1,  0,  2,  2 */
         -7,       0,       0,       0,          /* -2,  1,  1,  0,  0 */
         -7,       0,       3,       0,          /*  0, -1,  0,  2,  2 */
         -7,       0,       3,       0,          /*  2,  0,  0,  2,  1 */
          6,       0,       0,       0,          /*  2,  0,  1,  0,  0 */
          6,       0,      -3,       0,          /* -2,  0,  2,  2,  2 */
          6,       0,      -3,       0,          /* -2,  0,  1,  2,  1 */
         -6,       0,       3,       0,          /*  2,  0, -2,  0,  1 */
         -6,       0,       3,       0,          /*  2,  0,  0,  0,  1 */
          5,       0,       0,       0,          /*  0, -1,  1,  0,  0 */
         -5,       0,       3,       0,          /* -2, -1,  0,  2,  1 */
         -5,       0,       3,       0,          /* -2,  0,  0,  0,  1 */
         -5,       0,       3,       0,          /*  0,  0,  2,  2,  1 */
          4,       0,       0,       0,          /* -2,  0,  2,  0,  1 */
          4,       0,       0,       0,          /* -2,  1,  0,  2,  1 */
          4,       0,       0,       0,          /*  0,  0,  1, -2,  0 */
         -4,       0,       0,       0,          /* -1,  0,  1,  0,  0 */
         -4,       0,       0,       0,          /* -2,  1,  0,  0,  0 */
         -4,       0,       0,       0,          /*  1,  0,  0,  0,  0 */
          3,       0,       0,       0,          /*  0,  0,  1,  2,  0 */
         -3,       0,       0,       0,          /* -1, -1,  1,  0,  0 */
         -3,       0,       0,       0,          /*  0,  1,  1,  0,  0 */
         -3,       0,       0,       0,          /*  0, -1,  1,  2,  2 */
         -3,       0,       0,       0,          /*  2, -1, -1,  2,  2 */
         -3,       0,       0,       0,          /*  0,  0, -2,  2,  2 */
         -3,       0,       0,       0,          /*  0,  0,  3,  2,  2 */
         -3,       0,       0,       0           /*  2, -1,  0,  2,  2 */
	),
	deltaTtab: new Array(//  DELTAT  --  Determine the difference, in seconds, between Dynamical time and Universal time. Table of observed Delta T values at the beginning of even numbered years from 1620 through 2002.
		121, 112, 103, 95, 88, 82, 77, 72, 68, 63, 60, 56, 53, 51, 48, 46,
		44, 42, 40, 38, 35, 33, 31, 29, 26, 24, 22, 20, 18, 16, 14, 12,
		11, 10, 9, 8, 7, 7, 7, 7, 7, 7, 8, 8, 9, 9, 9, 9, 9, 10, 10, 10,
		10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13,
		13, 14, 14, 14, 14, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16,
		16, 16, 15, 15, 14, 13, 13.1, 12.5, 12.2, 12, 12, 12, 12, 12, 12,
		11.9, 11.6, 11, 10.2, 9.2, 8.2, 7.1, 6.2, 5.6, 5.4, 5.3, 5.4, 5.6,
		5.9, 6.2, 6.5, 6.8, 7.1, 7.3, 7.5, 7.6, 7.7, 7.3, 6.2, 5.2, 2.7,
		1.4, -1.2, -2.8, -3.8, -4.8, -5.5, -5.3, -5.6, -5.7, -5.9, -6,
		-6.3, -6.5, -6.2, -4.7, -2.8, -0.1, 2.6, 5.3, 7.7, 10.4, 13.3, 16,
		18.2, 20.2, 21.1, 22.4, 23.5, 23.8, 24.3, 24, 23.9, 23.9, 23.7,
		24, 24.3, 25.3, 26.2, 27.3, 28.2, 29.1, 30, 30.7, 31.4, 32.2,
		33.1, 34, 35, 36.5, 38.3, 40.2, 42.2, 44.5, 46.5, 48.5, 50.5,
		52.2, 53.8, 54.9, 55.8, 56.9, 58.3, 60, 61.6, 63, 65, 66.6
    ),
	EquinoxpTerms: new Array(//  Periodic terms to obtain true time
                       485, 324.96,   1934.136,
                       203, 337.23,  32964.467,
                       199, 342.08,     20.186,
                       182,  27.85, 445267.112,
                       156,  73.14,  45036.886,
                       136, 171.52,  22518.443,
                        77, 222.54,  65928.934,
                        74, 296.72,   3034.906,
                        70, 243.58,   9037.513,
                        58, 119.81,  33718.147,
                        52, 297.17,    150.678,
                        50,  21.02,   2281.226,
                        45, 247.54,  29929.562,
                        44, 325.15,  31555.956,
                        29,  60.93,   4443.417,
                        18, 155.12,  67555.328,
                        17, 288.79,   4562.452,
                        16, 198.04,  62894.029,
                        14, 199.76,  31436.921,
                        12,  95.39,  14577.848,
                        12, 287.11,  31931.756,
                        12, 320.81,  34777.259,
                         9, 227.73,   1222.114,
                         8,  15.45,  16859.074
    ),
	JDE0tab1000: new Array(
		new Array(1721139.29189, 365242.13740,  0.06134,  0.00111, -0.00071),
		new Array(1721233.25401, 365241.72562, -0.05323,  0.00907,  0.00025),
		new Array(1721325.70455, 365242.49558, -0.11677, -0.00297,  0.00074),
		new Array(1721414.39987, 365242.88257, -0.00769, -0.00933, -0.00006)
    ),
	JDE0tab2000: new Array(
		new Array(2451623.80984, 365242.37404,  0.05169, -0.00411, -0.00057),
		new Array(2451716.56767, 365241.62603,  0.00325,  0.00888, -0.00030),
		new Array(2451810.21715, 365242.01767, -0.11575,  0.00337,  0.00078),
		new Array(2451900.05952, 365242.74049, -0.06223, -0.00823,  0.00032)
    ),
	astor: function(a){return a * (Math.PI / (180.0 * 3600.0));},
	dtr: function(d){return (d * Math.PI) / 180.0;},
	rtd: function(r){return (r * 180.0) / Math.PI;},
	fixangle: function(a){return a - 360.0 * (Math.floor(a / 360.0));},/*  FIXANGLE  --  Range reduce angle in degrees.  */
	fixangr: function(a){return a - (2 * Math.PI) * (Math.floor(a / (2 * Math.PI)));},/*  FIXANGR  --  Range reduce angle in radians.  */
	dsin: function(d){return Math.sin(Δ.time.calendar.dtr(d));},//  DSIN  --  Sine of an angle in degrees
	dcos: function(d){return Math.cos(Δ.time.calendar.dtr(d));},//  DCOS  --  Cosine of an angle in degrees
	mod: function(a, b){return a - (b * Math.floor(a / b));},/*  MOD  --  Modulus function which works for non-integers.  */
	amod: function(a, b){return Δ.time.calendar.mod(a - 1, b) + 1;},//  AMOD  --  Modulus function which returns numerator if modulus is zero
	jhms: function(j){/*  JHMS  --  Convert Julian time to hour, minutes, and seconds,returned as a three-element array.  */
		var ij;
		j += 0.5;                 /* Astronomical to civil */
		ij = ((j - Math.floor(j)) * 86400.0) + 0.5;
		return new Array(
                     Math.floor(ij / 3600),
                     Math.floor((ij / 60) % 60),
                     Math.floor(ij % 60));
	},
	jwday: function(j){return Δ.time.calendar.mod(Math.floor((j + 1.5)), 7);},//  JWDAY  --  Calculate day of week from Julian day
	obliqeq: function(jd){
		var eps, u, v, i;
		v = u = (jd - Δ.time.calendar.J2000) / (Δ.time.calendar.JulianCentury * 100);
		eps = 23 + (26 / 60.0) + (21.448 / 3600.0);
		if (Math.abs(u) < 1.0) for (i = 0; i < 10; i++) {eps += (Δ.time.calendar.oterms[i] / 3600.0) * v;	v *= u;}
		return eps;
	},
	nutation: function(jd){
		var deltaPsi, deltaEpsilon,
			i, j,
			t = (jd - 2451545.0) / 36525.0, t2, t3, to10,
			ta = new Array,
			dp = 0, de = 0, ang;
		t3 = t * (t2 = t * t);
		/* Calculate angles.  The correspondence between the elements of our array and the terms cited in Meeus are:ta[0] = D  ta[0] = M  ta[2] = M'  ta[3] = F  ta[4] = \Omega		*/
		ta[0] = Δ.time.calendar.dtr(297.850363 + 445267.11148 * t - 0.0019142 * t2 + t3 / 189474.0);
		ta[1] = Δ.time.calendar.dtr(357.52772 + 35999.05034 * t - 0.0001603 * t2 - t3 / 300000.0);
		ta[2] = Δ.time.calendar.dtr(134.96298 + 477198.867398 * t + 0.0086972 * t2 + t3 / 56250.0);
		ta[3] = Δ.time.calendar.dtr(93.27191 + 483202.017538 * t - 0.0036825 * t2 + t3 / 327270);
		ta[4] = Δ.time.calendar.dtr(125.04452 - 1934.136261 * t + 0.0020708 * t2 + t3 / 450000.0);
		/* Range reduce the angles in case the sine and cosine functions  don't do it as accurately or quickly. */
		for (i = 0; i < 5; i++) ta[i] = Δ.time.calendar.fixangr(ta[i]);
		to10 = t / 10.0;
		for (i = 0; i < 63; i++) {
			ang = 0;
			for (j = 0; j < 5; j++) if (Δ.time.calendar.nutArgMult[(i * 5) + j] != 0) ang += Δ.time.calendar.nutArgMult[(i * 5) + j] * ta[j];
			dp += (Δ.time.calendar.nutArgCoeff[(i * 4) + 0] + Δ.time.calendar.nutArgCoeff[(i * 4) + 1] * to10) * Math.sin(ang);
			de += (Δ.time.calendar.nutArgCoeff[(i * 4) + 2] + Δ.time.calendar.nutArgCoeff[(i * 4) + 3] * to10) * Math.cos(ang);
		}
		/* Return the result, converting from ten thousandths of arc seconds to radians in the process. */
		deltaPsi = dp / (3600.0 * 10000.0);
		deltaEpsilon = de / (3600.0 * 10000.0);
		return new Array(deltaPsi, deltaEpsilon);
	},
	ecliptoeq: function(jd, Lambda, Beta){
		var eps, Ra, Dec;// Obliquity of the ecliptic. 
		eps = Δ.time.calendar.dtr(Δ.time.calendar.obliqeq(jd));
		log += "Obliquity: " + Δ.time.calendar.rtd(eps) + "\n";
		Ra = Δ.time.calendar.rtd(Math.atan2((Math.cos(eps) * Math.sin(Δ.time.calendar.dtr(Lambda)) -
                        (Math.tan(dtr(Beta)) * Math.sin(eps))),
                      Math.cos(Δ.time.calendar.dtr(Lambda))));
		log += "RA = " + Ra + "\n";
		Ra = Δ.time.calendar.fixangle(Δ.time.calendar.rtd(Math.atan2((Math.cos(eps) * Math.sin(Δ.time.calendar.dtr(Lambda)) -
                        (Math.tan(Δ.time.calendar.dtr(Beta)) * Math.sin(eps))),
                      Math.cos(Δ.time.calendar.dtr(Lambda)))));
		Dec = Δ.time.calendar.rtd(Math.asin((Math.sin(eps) * Math.sin(Δ.time.calendar.dtr(Lambda)) * Math.cos(Δ.time.calendar.dtr(Beta))) +
                 (Math.sin(Δ.time.calendar.dtr(Beta)) * Math.cos(eps))));
		return new Array(Ra, Dec);
	},
	deltat: function(year){
		var dt, f, i, t;
		if ((year >= 1620) && (year <= 2000)) {
			i = Math.floor((year - 1620) / 2);
			f = ((year - 1620) / 2) - i;  /* Fractional part of year */
			dt = Δ.time.calendar.deltaTtab[i] + ((Δ.time.calendar.deltaTtab[i + 1] - Δ.time.calendar.deltaTtab[i]) * f);
		} else {
			t = (year - 2000) / 100;
			if (year < 948) {dt = 2177 + (497 * t) + (44.1 * t * t);} else {
				dt = 102 + (102 * t) + (25.3 * t * t);
				if ((year > 2000) && (year < 2100)) {dt += 0.37 * (year - 2100);}
			}
		}
		return dt;
	},
	equinox: function(year, which){
		var deltaL, i, j, JDE0, JDE, JDE0tab, S, T, W, Y;
		if (year < 1000) {
			JDE0tab = Δ.time.calendar.JDE0tab1000;
			Y = year / 1000;
		} else {
			JDE0tab = Δ.time.calendar.JDE0tab2000;
			Y = (year - 2000) / 1000;
		}
		JDE0 =  JDE0tab[which][0] +
           (JDE0tab[which][1] * Y) +
           (JDE0tab[which][2] * Y * Y) +
           (JDE0tab[which][3] * Y * Y * Y) +
           (JDE0tab[which][4] * Y * Y * Y * Y);
		T = (JDE0 - 2451545.0) / 36525;
		W = (35999.373 * T) - 2.47;
		deltaL = 1 + (0.0334 * Δ.time.calendar.dcos(W)) + (0.0007 * Δ.time.calendar.dcos(2 * W));
		S = 0;
		for (i = j = 0; i < 24; i++) {
			S += Δ.time.calendar.EquinoxpTerms[j] * Δ.time.calendar.dcos(Δ.time.calendar.EquinoxpTerms[j + 1] + (Δ.time.calendar.EquinoxpTerms[j + 2] * T));
			j += 3;
		}
		JDE = JDE0 + ((S * 0.00001) / deltaL);
		return JDE;
	},
	sunpos: function(jd){
		var T, T2, L0, M, e, C, sunLong, sunAnomaly, sunR,
			Omega, Lambda, epsilon, epsilon0, Alpha, Delta,
			AlphaApp, DeltaApp;
		T = (jd - Δ.time.calendar.J2000) / Δ.time.calendar.JulianCentury;
		T2 = T * T;
		L0 = 280.46646 + (36000.76983 * T) + (0.0003032 * T2);
		L0 = Δ.time.calendar.fixangle(L0);
		M = 357.52911 + (35999.05029 * T) + (-0.0001537 * T2);
		M = Δ.time.calendar.fixangle(M);
		e = 0.016708634 + (-0.000042037 * T) + (-0.0000001267 * T2);
		C = ((1.914602 + (-0.004817 * T) + (-0.000014 * T2)) * Δ.time.calendar.dsin(M)) +
        ((0.019993 - (0.000101 * T)) * Δ.time.calendar.dsin(2 * M)) +
        (0.000289 * Δ.time.calendar.dsin(3 * M));
		sunLong = L0 + C;
		sunAnomaly = M + C;
		sunR = (1.000001018 * (1 - (e * e))) / (1 + (e * Δ.time.calendar.dcos(sunAnomaly)));
		Omega = 125.04 - (1934.136 * T);
		Lambda = sunLong + (-0.00569) + (-0.00478 * Δ.time.calendar.dsin(Omega));
		epsilon0 = Δ.time.calendar.obliqeq(jd);
		epsilon = epsilon0 + (0.00256 * Δ.time.calendar.dcos(Omega));
		Alpha = Δ.time.calendar.rtd(Math.atan2(Δ.time.calendar.dcos(epsilon0) * Δ.time.calendar.dsin(sunLong), Δ.time.calendar.dcos(sunLong)));
		Alpha = Δ.time.calendar.fixangle(Alpha);
		Delta = Δ.time.calendar.rtd(Math.asin(Δ.time.calendar.dsin(epsilon0) * Δ.time.calendar.dsin(sunLong)));
		AlphaApp = Δ.time.calendar.rtd(Math.atan2(Δ.time.calendar.dcos(epsilon) * Δ.time.calendar.dsin(Lambda), Δ.time.calendar.dcos(Lambda)));
		AlphaApp = Δ.time.calendar.fixangle(AlphaApp);
		DeltaApp = Δ.time.calendar.rtd(Math.asin(Δ.time.calendar.dsin(epsilon) * Δ.time.calendar.dsin(Lambda)));
		return new Array(                 //  Angular quantities are expressed in decimal degrees
			L0,                           //  [0] Geometric mean longitude of the Sun
			M,                            //  [1] Mean anomaly of the Sun
			e,                            //  [2] Eccentricity of the Earth's orbit
			C,                            //  [3] Sun's equation of the Centre
			sunLong,                      //  [4] Sun's true longitude
			sunAnomaly,                   //  [5] Sun's true anomaly
			sunR,                         //  [6] Sun's radius vector in AU
			Lambda,                       //  [7] Sun's apparent longitude at true equinox of the date
			Alpha,                        //  [8] Sun's true right ascension
			Delta,                        //  [9] Sun's true declination
			AlphaApp,                     // [10] Sun's apparent right ascension
			DeltaApp                      // [11] Sun's apparent declination
		);
	},
	equationOfTime: function(jd){
		var alpha, deltaPsi, E, epsilon, L0, tau
		tau = (jd - Δ.time.calendar.J2000) / Δ.time.calendar.JulianMillennium;
		L0 = 280.4664567 + (360007.6982779 * tau) +
         (0.03032028 * tau * tau) +
         ((tau * tau * tau) / 49931) +
         (-((tau * tau * tau * tau) / 15300)) +
         (-((tau * tau * tau * tau * tau) / 2000000));
		L0 = Δ.time.calendar.fixangle(L0);
		alpha = Δ.time.calendar.sunpos(jd)[10];
		deltaPsi = Δ.time.calendar.nutation(jd)[0];
		epsilon = Δ.time.calendar.obliqeq(jd) + Δ.time.calendar.nutation(jd)[1];
		E = L0 + (-0.0057183) + (-alpha) + (deltaPsi * Δ.time.calendar.dcos(epsilon));
		E = E - 20.0 * (Math.floor(E / 20.0));
		E = E / (24 * 60);
		return E;
	},
	//---------------------------------------------------------------------------------------------------------------------------------
	weekday_before: function(weekday, jd){return jd - Δ.time.calendar.jwday(jd - weekday);},
	search_weekday: function(weekday, jd, direction, offset){return Δ.time.calendar.weekday_before(weekday, jd + (direction * offset));},
	nearest_weekday: function(weekday, jd){return Δ.time.calendar.search_weekday(weekday, jd, 1, 3);},
	next_weekday: function(weekday, jd){return Δ.time.calendar.search_weekday(weekday, jd, 1, 7);},
	next_or_current_weekday: function(weekday, jd){return Δ.time.calendar.search_weekday(weekday, jd, 1, 6);},
	previous_weekday: function(weekday, jd){return Δ.time.calendar.search_weekday(weekday, jd, -1, 1);},
	previous_or_current_weekday: function(weekday, jd){return Δ.time.calendar.search_weekday(weekday, jd, 1, 0);},
	// GREGORIAN ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
	leap_gregorian: function(year){return ((year % 4) == 0) && (!(((year % 100) == 0) && ((year % 400) != 0)));},	
	gregorian_to_jd: function(year, month, day){
		return (Δ.time.calendar.gregorian.epoch - 1) +
           (365 * (year - 1)) +
           Math.floor((year - 1) / 4) +
           (-Math.floor((year - 1) / 100)) +
           Math.floor((year - 1) / 400) +
           Math.floor((((367 * month) - 362) / 12) +
           ((month <= 2) ? 0 : (Δ.time.calendar.leap_gregorian(year) ? -1 : -2) ) + day);
	},
	jd_to_gregorian: function(jd){
		var wjd, depoch, quadricent, dqc, cent, dcent, quad, dquad,yindex, dyindex, year, yearday, leapadj;
		wjd = Math.floor(jd - 0.5) + 0.5;
		depoch = wjd - Δ.time.calendar.gregorian.epoch;
		quadricent = Math.floor(depoch / 146097);
		dqc = Δ.time.calendar.mod(depoch, 146097);
		cent = Math.floor(dqc / 36524);
		dcent = Δ.time.calendar.mod(dqc, 36524);
		quad = Math.floor(dcent / 1461);
		dquad = Δ.time.calendar.mod(dcent, 1461);
		yindex = Math.floor(dquad / 365);
		year = (quadricent * 400) + (cent * 100) + (quad * 4) + yindex;
		if (!((cent == 4) || (yindex == 4))) {year++;}
		yearday = wjd - Δ.time.calendar.gregorian_to_jd(year, 1, 1);
		leapadj = ((wjd < Δ.time.calendar.gregorian_to_jd(year, 3, 1)) ? 0 :(Δ.time.calendar.leap_gregorian(year) ? 1 : 2));
		month = Math.floor((((yearday + leapadj) * 12) + 373) / 367);
		day = (wjd - Δ.time.calendar.gregorian_to_jd(year, month, 1)) + 1;
		return new Array(year, month, day);
	},
	n_weeks: function(weekday, jd, nthweek){
		var j = 7 * nthweek;
		if (nthweek > 0) j += Δ.time.calendar.previous_weekday(weekday, jd); else j += Δ.time.calendar.next_weekday(weekday, jd);
		return j;
	},
	iso_to_julian: function(year, week, day){return day + Δ.time.calendar.n_weeks(0, Δ.time.calendar.gregorian_to_jd(year - 1, 12, 28), week);},
	jd_to_iso: function(jd){
		var year, week, day;
		year = Δ.time.calendar.jd_to_gregorian(jd - 3)[0];
		if (jd >= Δ.time.calendar.iso_to_julian(year + 1, 1, 1)) {year++;}
		week = Math.floor((jd - Δ.time.calendar.iso_to_julian(year, 1, 1)) / 7) + 1;
		day = Δ.time.calendar.jwday(jd);
		if (day == 0) {day = 7;}
		return new Array(year, week, day);
	},
	iso_day_to_julian: function(year, day){return (day - 1) + gregorian_to_jd(year, 1, 1);},
	jd_to_iso_day: function(jd){
		var year, day;
		year = Δ.time.calendar.jd_to_gregorian(jd)[0];
		day = Math.floor(jd - Δ.time.calendar.gregorian_to_jd(year, 1, 1)) + 1;
		return new Array(year, day);
	},
	pad: function(str, howlong, padwith){
		var s = str.toString();
		while (s.length < howlong) s = padwith + s;
		return s;
	},
	// JULIAN ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
	leap_julian: function(year){return Δ.time.calendar.mod(year, 4) == ((year > 0) ? 0 : 3);},
	julian_to_jd: function(year, month, day){
		if (year < 1) year++;/* Adjust negative common era years to the zero-based notation we use.  */
		if (month <= 2) {/* Algorithm as given in Meeus, Astronomical Algorithms, Chapter 7, page 61 */
			year--;
			month += 12;
		}
		return ((Math.floor((365.25 * (year + 4716))) +
            Math.floor((30.6001 * (month + 1))) +
            day) - 1524.5);
	},
	jd_to_julian: function(td){
		var z, a, alpha, b, c, d, e, year, month, day;
		td += 0.5;
		z = Math.floor(td);
		a = z;
		b = a + 1524;
		c = Math.floor((b - 122.1) / 365.25);
		d = Math.floor(365.25 * c);
		e = Math.floor((b - d) / 30.6001);
		month = Math.floor((e < 14) ? (e - 1) : (e - 13));
		year = Math.floor((month > 2) ? (c - 4716) : (c - 4715));
		day = b - d - Math.floor(30.6001 * e);
		/*  If year is less than 1, subtract one to convert from
        a zero based date system to the common era system in
        which the year -1 (1 B.C.E) is followed by year 1 (1 C.E.).  */
		if (year < 1) year--;
		return new Array(year, month, day);
	},
	// HEB ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
	hebrew_leap: function(year){return Δ.time.calendar.mod(((year * 7) + 1), 19) < 7;},
	hebrew_year_months: function(year){return Δ.time.calendar.hebrew_leap(year) ? 13 : 12;},
	hebrew_delay_1: function(year){
		var months, days, parts;
		months = Math.floor(((235 * year) - 234) / 19);
		parts = 12084 + (13753 * months);
		day = (months * 29) + Math.floor(parts / 25920);
		if (Δ.time.calendar.mod((3 * (day + 1)), 7) < 3) day++;
		return day;
	},
	hebrew_delay_2: function(year){
		var last, present, next;
		last = Δ.time.calendar.hebrew_delay_1(year - 1);
		present = Δ.time.calendar.hebrew_delay_1(year);
		next = Δ.time.calendar.hebrew_delay_1(year + 1);
		return ((next - present) == 356) ? 2 : (((present - last) == 382) ? 1 : 0);
	},
	hebrew_year_days: function(year){return Δ.time.calendar.hebrew_to_jd(year + 1, 7, 1) - Δ.time.calendar.hebrew_to_jd(year, 7, 1);},
	hebrew_month_days: function(year, month){
    	if (month == 2 || month == 4 || month == 6 ||  month == 10 || month == 13) return 29;//  First of all, dispose of fixed-length 29 day months
    	if (month == 12 && !Δ.time.calendar.hebrew_leap(year)) return 29;//  If it's not a leap year, Adar has 29 days
    	if (month == 8 && !(Δ.time.calendar.mod(Δ.time.calendar.hebrew_year_days(year), 10) == 5)) return 29;//  If it's Heshvan, days depend on length of year
    	if (month == 9 && (Δ.time.calendar.mod(Δ.time.calendar.hebrew_year_days(year), 10) == 3)) return 29;//  Similarly, Kislev varies with the length of year
    	return 30;//  Nope, it's a 30 day month
	},
	hebrew_to_jd: function(year, month, day){
		var jd, mon, months;
		months = Δ.time.calendar.hebrew_year_months(year);
		jd = Δ.time.calendar.hebrew.epoch + Δ.time.calendar.hebrew_delay_1(year) +  Δ.time.calendar.hebrew_delay_2(year) + day + 1;
		if (month < 7) {
			for (mon = 7; mon <= months; mon++) jd += Δ.time.calendar.hebrew_month_days(year, mon);
			for (mon = 1; mon < month; mon++) jd += Δ.time.calendar.hebrew_month_days(year, mon);
		} else {
			for (mon = 7; mon < month; mon++) jd += Δ.time.calendar.hebrew_month_days(year, mon);
		}
		return jd;
	},
	jd_to_hebrew: function(jd){
		var year, month, day, i, count, first;
		jd = Math.floor(jd) + 0.5;
		count = Math.floor(((jd - Δ.time.calendar.hebrew.epoch) * 98496.0) / 35975351.0);
		year = count - 1;
		for (i = count; jd >= Δ.time.calendar.hebrew_to_jd(i, 7, 1); i++) year++;
		first = (jd < Δ.time.calendar.hebrew_to_jd(year, 1, 1)) ? 7 : 1;
		month = first;
		for (i = first; jd > Δ.time.calendar.hebrew_to_jd(year, i, Δ.time.calendar.hebrew_month_days(year, i)); i++) month++;
		day = (jd - Δ.time.calendar.hebrew_to_jd(year, month, 1)) + 1;
		return new Array(year, month, day);
	},
	// FRENCH ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
	equinoxe_a_paris: function(year){
		var equJED, equJD, equAPP, equParis, dtParis;
    //  September equinox in dynamical time
		equJED = Δ.time.calendar.equinox(year, 2);
    //  Correct for delta T to obtain Universal time
		equJD = equJED - (Δ.time.calendar.deltat(year) / (24 * 60 * 60));
    //  Apply the equation of time to yield the apparent time at Greenwich
		equAPP = equJD + Δ.time.calendar.equationOfTime(equJED);
		dtParis = (2 + (20 / 60.0) + (15 / (60 * 60.0))) / 360;
		equParis = equAPP + dtParis;
		return equParis;
	},
	paris_equinoxe_jd: function(year){
		var ep, epg;
		ep = Δ.time.calendar.equinoxe_a_paris(year);
		epg = Math.floor(ep - 0.5) + 0.5;
		return epg;
	},
	annee_da_la_revolution: function(jd){
		var guess = Δ.time.calendar.jd_to_gregorian(jd)[0] - 2,lasteq, nexteq, adr;
		lasteq = Δ.time.calendar.paris_equinoxe_jd(guess);
		while (lasteq > jd) {
			guess--;
			lasteq = Δ.time.calendar.paris_equinoxe_jd(guess);
		}
		nexteq = lasteq - 1;
		while (!((lasteq <= jd) && (jd < nexteq))) {
			lasteq = nexteq;
			guess++;
			nexteq = Δ.time.calendar.paris_equinoxe_jd(guess);
		}
		adr = Math.round((lasteq - Δ.time.calendar.french.epoch) / Δ.time.calendar.TropicalYear) + 1;
		return new Array(adr, lasteq);
	},
	jd_to_french_revolutionary: function(jd){
		var an, mois, decade, jour, adr, equinoxe;
		jd = Math.floor(jd) + 0.5;
		adr = Δ.time.calendar.annee_da_la_revolution(jd);
		an = adr[0];
		equinoxe = adr[1];
		mois = Math.floor((jd - equinoxe) / 30) + 1;
		jour = (jd - equinoxe) % 30;
		decade = Math.floor(jour / 10) + 1;
		jour = (jour % 10) + 1;
		return new Array(an, mois, decade, jour);
	},
	french_revolutionary_to_jd: function(an, mois, decade, jour){
		var adr, equinoxe, guess, jd;
		guess = Δ.time.calendar.french.epoch + (Δ.time.calendar.TropicalYear * ((an - 1) - 1));
		adr = new Array(an - 1, 0);
		while (adr[0] < an) {
			adr = Δ.time.calendar.annee_da_la_revolution(guess);
			guess = adr[1] + (Δ.time.calendar.TropicalYear + 2);
		}
		equinoxe = adr[1];
		jd = equinoxe + (30 * (mois - 1)) + (10 * (decade - 1)) + (jour - 1);
		return jd;
	},
	// ARABIC ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
	leap_arabic: function(year){return (((year * 11) + 14) % 30) < 11;},
	arabic_to_jd: function(year, month, day){
		return (day +
            Math.ceil(29.5 * (month - 1)) +
            (year - 1) * 354 +
            Math.floor((3 + (11 * year)) / 30) +
            Δ.time.calendar.arabic.epoch) - 1;
	},
	jd_to_arabic: function(jd){
		var year, month, day;
		jd = Math.floor(jd) + 0.5;
		year = Math.floor(((30 * (jd - Δ.time.calendar.arabic.epoch)) + 10646) / 10631);
		month = Math.min(12, Math.ceil((jd - (29 + Δ.time.calendar.arabic_to_jd(year, 1, 1))) / 29.5) + 1);
		day = (jd - Δ.time.calendar.arabic_to_jd(year, month, 1)) + 1;
		return new Array(year, month, day);
	},
	// PERSIAN ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
	tehran_equinox: function(year){
		var equJED, equJD, equAPP, equTehran, dtTehran;
		equJED = Δ.time.calendar.equinox(year, 0);//  March equinox in dynamical time
		equJD = equJED - (Δ.time.calendar.deltat(year) / (24 * 60 * 60));//  Correct for delta T to obtain Universal time
		equAPP = equJD + Δ.time.calendar.equationOfTime(equJED);//  Apply the equation of time to yield the apparent time at Greenwich
		/*  Finally, we must correct for the constant difference between the Greenwich meridian andthe time zone standard for Iran Standard time, 52°30' to the East.  */
		dtTehran = (52 + (30 / 60.0) + (0 / (60.0 * 60.0))) / 360;
		equTehran = equAPP + dtTehran;
		return equTehran;
	},
	tehran_equinox_jd: function(year){
		var ep, epg;
		ep = Δ.time.calendar.tehran_equinox(year);
		epg = Math.floor(ep);
		return epg;
	},
	persiana_year: function(jd){
		var guess = Δ.time.calendar.jd_to_gregorian(jd)[0] - 2,lasteq, nexteq, adr;
		lasteq = Δ.time.calendar.tehran_equinox_jd(guess);
		while (lasteq > jd) {
			guess--;
			lasteq = Δ.time.calendar.tehran_equinox_jd(guess);
		}
		nexteq = lasteq - 1;
		while (!((lasteq <= jd) && (jd < nexteq))) {
			lasteq = nexteq;
			guess++;
			nexteq = Δ.time.calendar.tehran_equinox_jd(guess);
		}
		adr = Math.round((lasteq - Δ.time.calendar.persian.epoch) / Δ.time.calendar.TropicalYear) + 1;
		return new Array(adr, lasteq);
	},
	jd_to_persiana: function(jd){
		var year, month, day, adr, equinox, yday;
		jd = Math.floor(jd) + 0.5;
		adr = Δ.time.calendar.persiana_year(jd);
		year = adr[0];
		equinox = adr[1];
		day = Math.floor((jd - equinox) / 30) + 1;
		yday = (Math.floor(jd) - Δ.time.calendar.persiana_to_jd(year, 1, 1)) + 1;
		month = (yday <= 186) ? Math.ceil(yday / 31) : Math.ceil((yday - 6) / 30);
		day = (Math.floor(jd) - Δ.time.calendar.persiana_to_jd(year, month, 1)) + 1;
		return new Array(year, month, day);
	},
	persiana_to_jd: function(year, month, day){
		var adr, equinox, guess, jd;
		guess = (Δ.time.calendar.persian.epoch - 1) + (Δ.time.calendar.TropicalYear * ((year - 1) - 1));
		adr = new Array(year - 1, 0);
		while (adr[0] < year) {
			adr = Δ.time.calendar.persiana_year(guess);
			guess = adr[1] + (Δ.time.calendar.TropicalYear + 2);
		}
		equinox = adr[1];
		jd = equinox +
            ((month <= 7) ?
                ((month - 1) * 31) :
                (((month - 1) * 30) + 6)
            ) +
    	    (day - 1);
		return jd;
	},
	leap_persiana: function(year){return (Δ.time.calendar.persiana_to_jd(year + 1, 1, 1) -  Δ.time.calendar.persiana_to_jd(year, 1, 1)) > 365;},
	leap_persian: function(year){return ((((((year - ((year > 0) ? 474 : 473)) % 2820) + 474) + 38) * 682) % 2816) < 682;},
	persian_to_jd: function(year, month, day){
		var epbase, epyear;
		epbase = year - ((year >= 0) ? 474 : 473);
		epyear = 474 + Δ.time.calendar.mod(epbase, 2820);
		return day +
            ((month <= 7) ?
                ((month - 1) * 31) :
                (((month - 1) * 30) + 6)
            ) +
            Math.floor(((epyear * 682) - 110) / 2816) + (epyear - 1) * 365 +
            Math.floor(epbase / 2820) * 1029983 + (Δ.time.calendar.persian.epoch - 1);
	},
	jd_to_persian: function(jd){
		var year, month, day, depoch, cycle, cyear, ycycle,aux1, aux2, yday;
		jd = Math.floor(jd) + 0.5;
		depoch = jd - Δ.time.calendar.persian_to_jd(475, 1, 1);
		cycle = Math.floor(depoch / 1029983);
		cyear = Δ.time.calendar.mod(depoch, 1029983);
		if (cyear == 1029982) ycycle = 2820; else {
			aux1 = Math.floor(cyear / 366);
			aux2 = Δ.time.calendar.mod(cyear, 366);
			ycycle = Math.floor(((2134 * aux1) + (2816 * aux2) + 2815) / 1028522) +  aux1 + 1;
		}
		year = ycycle + (2820 * cycle) + 474;
		if (year <= 0) year--;
		yday = (jd - Δ.time.calendar.persian_to_jd(year, 1, 1)) + 1;
		month = (yday <= 186) ? Math.ceil(yday / 31) : Math.ceil((yday - 6) / 30);
		day = (jd - Δ.time.calendar.persian_to_jd(year, month, 1)) + 1;
		return new Array(year, month, day);
	},
	// MAYAN ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
	mayan_count_to_jd: function(baktun, katun, tun, uinal, kin){
		return Δ.time.calendar.mayan.epoch +
           (baktun * 144000) +
           (katun  *   7200) +
           (tun    *    360) +
           (uinal  *     20) +
           kin;
	},
	jd_to_mayan_count: function(jd){
		var d, baktun, katun, tun, uinal, kin;
		jd = Math.floor(jd) + 0.5;
		d = jd - Δ.time.calendar.mayan.epoch;
		baktun = Math.floor(d / 144000);
		d = Δ.time.calendar.mod(d, 144000);
		katun = Math.floor(d / 7200);
		d = Δ.time.calendar.mod(d, 7200);
		tun = Math.floor(d / 360);
		d = Δ.time.calendar.mod(d, 360);
		uinal = Math.floor(d / 20);
		kin = Δ.time.calendar.mod(d, 20);
		return new Array(baktun, katun, tun, uinal, kin);
	},
	jd_to_mayan_haab: function(jd){
		var lcount, day;
		jd = Math.floor(jd) + 0.5;
		lcount = jd - Δ.time.calendar.mayan.epoch;
		day = Δ.time.calendar.mod(lcount + 8 + ((18 - 1) * 20), 365);
		return new Array (Math.floor(day / 20) + 1, Δ.time.calendar.mod(day, 20));
	},
	jd_to_mayan_tzolkin: function(jd){
		var lcount;
		jd = Math.floor(jd) + 0.5;
		lcount = jd - Δ.time.calendar.mayan.epoch;
		return new Array (Δ.time.calendar.amod(lcount + 20, 20), Δ.time.calendar.amod(lcount + 4, 13));
	},
	// bahai ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
	bahai_to_jd: function(major, cycle, year, month, day){
		var gy;
		gy = (361 * (major - 1)) + (19 * (cycle - 1)) + (year - 1) +  Δ.time.calendar.jd_to_gregorian(Δ.time.calendar.bahai.epoch)[0];
		return Δ.time.calendar.gregorian_to_jd(gy, 3, 20) + (19 * (month - 1)) + ((month != 20) ? 0 : (Δ.time.calendar.leap_gregorian(gy + 1) ? -14 : -15))  +  day;
	},
	jd_to_bahai: function(jd){
		var major, cycle, year, month, day, gy, bstarty, bys, days, bld;
		jd = Math.floor(jd) + 0.5;
		gy = Δ.time.calendar.jd_to_gregorian(jd)[0];
		bstarty = Δ.time.calendar.jd_to_gregorian(Δ.time.calendar.bahai.epoch)[0];
		bys = gy - (bstarty + (((Δ.time.calendar.gregorian_to_jd(gy, 1, 1) <= jd) && (jd <= Δ.time.calendar.gregorian_to_jd(gy, 3, 20))) ? 1 : 0));
		major = Math.floor(bys / 361) + 1;
		cycle = Math.floor(Δ.time.calendar.mod(bys, 361) / 19) + 1;
		year = Δ.time.calendar.mod(bys, 19) + 1;
		days = jd - Δ.time.calendar.bahai_to_jd(major, cycle, year, 1, 1);
		bld = Δ.time.calendar.bahai_to_jd(major, cycle, year, 20, 1);
		month = (jd >= bld) ? 20 : (Math.floor(days / 19) + 1);
		day = (jd + 1) - Δ.time.calendar.bahai_to_jd(major, cycle, year, month, 1);
		return new Array(major, cycle, year, month, day);
	},
	// INDIAN ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
	indian_to_jd: function(year, month, day){
		var Caitra, gyear, leap, start, jd, m;
		gyear = year + 78;
		leap = Δ.time.calendar.leap_gregorian(gyear);     // Is this a leap year ?
		start = Δ.time.calendar.gregorian_to_jd(gyear, 3, leap ? 21 : 22);
		Caitra = leap ? 31 : 30;
		if (month == 1) {
			jd = start + (day - 1);
		} else {
			jd = start + Caitra;
			m = month - 2;
			m = Math.min(m, 5);
			jd += m * 31;
			if (month >= 8) {
				m = month - 7;
				jd += m * 30;
			}
			jd += day - 1;
		}
		return jd;
	},
	jd_to_indian: function(jd){
		var Caitra, Saka, greg, greg0, leap, start, year, yday, mday;
		Saka = 79 - 1;                    // Offset in years from Saka era to Gregorian epoch
		start = 80;                       // Day offset between Saka and Gregorian
		jd = Math.floor(jd) + 0.5;
		greg = Δ.time.calendar.jd_to_gregorian(jd);       // Gregorian date for Julian day
		leap = Δ.time.calendar.leap_gregorian(greg[0]);   // Is this a leap year?
		year = greg[0] - Saka;            // Tentative year in Saka era
		greg0 = Δ.time.calendar.gregorian_to_jd(greg[0], 1, 1); // JD at start of Gregorian year
		yday = jd - greg0;                // Day number (0 based) in Gregorian year
		Caitra = leap ? 31 : 30;          // Days in Caitra this year
		if (yday < start) {
			//  Day is at the end of the preceding Saka year
			year--;
			yday += Caitra + (31 * 5) + (30 * 3) + 10 + start;
		}
		yday -= start;
		if (yday < Caitra) {
			month = 1;
			day = yday + 1;
		} else {
			mday = yday - Caitra;
			if (mday < (31 * 5)) {
				month = Math.floor(mday / 31) + 2;
				day = (mday % 31) + 1;
			} else {
				mday -= 31 * 5;
				month = Math.floor(mday / 30) + 7;
				day = (mday % 30) + 1;
			}
		}
		return new Array(year, month, day);
	},

	gregorian:{
		epoch: 1721425.5,
		weekdays: 	['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
		weekdays2:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
		months:		['January','February','March','April','May','June','July','August','September','October','November','December']	,
		months2:	['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
		month_number:12,
		weekstart: 0,
	},
	julian:{
		epoch: 1721423.5,
		weekdays: 	['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
		weekdays2:	['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
		months:		['January','February','March','April','May','June','July','August','September','October','November','December']	,
		months2:	['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
		month_number:12,
		weekstart: 0,
	},	
	persian:{
		epoch: 1948320.5,	
		weekdays: 		["Yekshanbeh", "Doshanbeh","Seshhanbeh", "Chaharshanbeh","Panjshanbeh", "Jomeh", "Shanbeh"],
		weekdays2:		["1sh", "2sh","3sh", "4sh","5sh", "jm", "sh"],
		weekdays_fa:	{"شنبه":"شنبه","یکشنبه":"1شنبه", "دوشنبه":"2شنبه","سه شنبه":"3شنبه", "چهارشنبه":"4شنبه","پنجشنبه":"5شنبه", "جمعه":"جمعه"},		
		months: 		["Farvardin", "OrdiBehesht","Khordad", "Tir","Mordad", "Shahrivar", "Mehr", "Aban","Azar", "Dey","Bahman", "Esfand"],
		months2: 		["Farv", "Ordi","Khor", "Tir","Mor", "Shah", "Mehr", "Aban","Azar", "Dey","Bah", "Esf"],
		months_fa:		["فروردین", "اردیبهشت","خرداد", "تیر","مرداد", "شهریور", "مهر", "آبان","آذر", "دی","بهمن", "اسفند"],
		month_number:12,
		weekstart: 6,
	},	
	persiana:{
		epoch: 1948320.5,	
		weekdays: 		["Yekshanbeh", "Doshanbeh","Seshhanbeh", "Chaharshanbeh","Panjshanbeh", "Jomeh", "Shanbeh"],
		weekdays2:		["1sh", "2sh","3sh", "4sh","5sh", "jm", "sh"],
		weekdays_fa:	{"شنبه":"شنبه","یکشنبه":"1شنبه", "دوشنبه":"2شنبه","سه شنبه":"3شنبه", "چهارشنبه":"4شنبه","پنجشنبه":"5شنبه", "جمعه":"جمعه"},		
		months: 		["Farvardin", "OrdiBehesht","Khordad", "Tir","Mordad", "Shahrivar", "Mehr", "Aban","Azar", "Dey","Bahman", "Esfand"],
		months2: 		["Farv", "Ordi","Khor", "Tir","Mor", "Shah", "Mehr", "Aban","Azar", "Dey","Bah", "Esf"],
		months_fa:		["فروردین", "اردیبهشت","خرداد", "تیر","مرداد", "شهریور", "مهر", "آبان","آذر", "دی","بهمن", "اسفند"],
		month_number:12,
		weekstart: 6,
	},		
	arabic:{
		epoch: 1948439.5,
		weekdays: 		["al-'ahad", "al-'ithnayn","ath-thalatha'", "al-'arb`a'","al-khamis", "al-jum`a", "as-sabt"],	
		weekdays2:		["1sh", "2sh","3sh", "4sh","5sh", "jm", "sh"],
		weekdays_fa:	{"شنبه":"شنبه","یکشنبه":"1شنبه", "دوشنبه":"2شنبه","سه شنبه":"3شنبه", "چهارشنبه":"4شنبه","پنجشنبه":"5شنبه", "جمعه":"جمعه"},		
		months: 		["Farvardin", "OrdiBehesht","Khordad", "Tir","Mordad", "Shahrivar", "Mehr", "Aban","Azar", "Dey","Bahman", "Esfand"],
		months2: 		["Farv", "Ordi","Khor", "Tir","Mor", "Shah", "Mehr", "Aban","Azar", "Dey","Bah", "Esf"],
		months_fa:		["فروردین", "اردیبهشت","خرداد", "تیر","مرداد", "شهریور", "مهر", "آبان","آذر", "دی","بهمن", "اسفند"],
		month_number:12,
		weekstart: 6,		
	},
	indian:{
		weekdays:["ravivara", "somavara", "mangalavara", "budhavara","brahaspativara", "sukravara", "sanivara"],
		months:		['January','February','March','April','May','June','July','August','September','October','November','December']	,		
		month_number:12,
		weekstart: 6,		
	},	
	french:{
		epoch:2375839.5,
		weekdays:["ravivara", "somavara", "mangalavara", "budhavara","brahaspativara", "sukravara", "sanivara"],
		months:		['January','February','March','April','May','June','July','August','September','October','November','December']	,		
		month_number:12,
		weekstart: 6,			
	},
	mayan:{
		epoch: 584282.5,
		HaabMonths: 		["Pop", "Uo", "Zip", "Zotz", "Tzec", "Xul","Yaxkin", "Mol", "Chen", "Yax", "Zac", "Ceh","Mac", "Kankin", "Muan", "Pax", "Kayab", "Cumku", "Uayeb"],
		mayanTzolkinMonths:	["Imix","Ik","Akbal","Kan","Chicchan","Cimi","Manik","Lamat","Muluc","Oc","Chuen","Eb","Ben","Ix","Men","Cib","Caban","Etznab", "Cauac", "Ahau"],	
		weekdays: 	['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
		weekdays2:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
		months:		['January','February','March','April','May','June','July','August','September','October','November','December']	,
		months2:	['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
		month_number:12,
		weekstart: 0,
	},	
	bahai:{
		epoch: 2394646.5,
		weekdays: 	["Jamلl", "Kamلl", "Fidلl", "Idلl","Istijlلl", "Istiqlلl", "Jalلl"],
		weekdays2:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
		months:		['January','February','March','April','May','June','July','August','September','October','November','December']	,
		months2:	['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
		month_number:12,
		weekstart: 0,
	},
	hebrew:{
		epoch: 347995.5,	
		weekdays: 	['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
		weekdays2:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
		months:		['January','February','March','April','May','June','July','August','September','October','November','December']	,
		months2:	['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
		month_number:12,
		weekstart: 0,	
	},	
	isoday:{
		epoch: 1721425.5,
		weekdays: 	['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
		weekdays2:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
		months:		['January','February','March','April','May','June','July','August','September','October','November','December']	,
		months2:	['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
		month_number:12,
		weekstart: 0,
	},
	isoweek:{
		epoch: 1721425.5,
		weekdays: 	['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
		weekdays2:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
		months:		['January','February','March','April','May','June','July','August','September','October','November','December']	,
		months2:	['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
		month_number:12,
		weekstart: 0,
	},	

	NormLeap:				["Normal year", "Leap year"],	

	presetDataToRequest: function(s){
		var eq = s.indexOf("=");
		var set = false;
		if (eq != -1) {
    	var calendar = s.substring(0, eq),
	    date = decodeURIComponent(s.substring(eq + 1));
		if (calendar.toLowerCase() == "gregorian") {
			var d = date.match(/^(\d+)\D(\d+)\D(\d+)(\D\d+)?(\D\d+)?(\D\d+)?/);
			if (d != null) {
	    	// Sanity check date and time components
				if ((d[2] >= 1) && (d[2] <= 12) &&
				(d[3] >= 1) && (d[3] <= 31) &&
				((d[4] == undefined) ||
					((d[4].substring(1) >= 0) && (d[4].substring(1) <= 23))) &&
				((d[5] == undefined) ||
					((d[5].substring(1) >= 0) && (d[5].substring(1) <= 59))) &&
				((d[6] == undefined) ||
					((d[6].substring(1) >= 0) && (d[6].substring(1) <= 59)))) {
				document.gregorian.year.value = d[1];
				document.gregorian.month.selectedIndex = d[2] - 1;
				document.gregorian.day.value = Number(d[3]);
				document.gregorian.hour.value = d[4] == undefined ? "00" :
				d[4].substring(1);
				document.gregorian.min.value = d[5] == undefined ? "00" :
				d[5].substring(1);
    	    	    document.gregorian.sec.value = d[6] == undefined ? "00" :
				d[6].substring(1);
				calcGregorian();
				set = true;
				} else {
					alert("Invalid Gregorian date \"" + date +	"\" in search request");
				}
			} else {
				alert("Invalid Gregorian date \"" + date +  "\" in search request");
			}
		} else if (calendar.toLowerCase() == "julian") {
			var d = date.match(/^(\d+)\D(\d+)\D(\d+)(\D\d+)?(\D\d+)?(\D\d+)?/);
			if (d != null) {
	    	// Sanity check date and time components
	    	if ((d[2] >= 1) && (d[2] <= 12) &&
		    (d[3] >= 1) && (d[3] <= 31) &&
		    ((d[4] == undefined) ||
		    	((d[4].substring(1) >= 0) && (d[4].substring(1) <= 23))) &&
		    ((d[5] == undefined) ||
		    	((d[5].substring(1) >= 0) && (d[5].substring(1) <= 59))) &&
		    ((d[6] == undefined) ||
		    	((d[6].substring(1) >= 0) && (d[6].substring(1) <= 59)))) {
		    document.juliancalendar.year.value = d[1];
		    document.juliancalendar.month.selectedIndex = d[2] - 1;
		    document.juliancalendar.day.value = Number(d[3]);
		    calcJulianCalendar();
		    document.gregorian.hour.value = d[4] == undefined ? "00" :
			d[4].substring(1);
		    document.gregorian.min.value = d[5] == undefined ? "00" :
			d[5].substring(1);
    	    	    document.gregorian.sec.value = d[6] == undefined ? "00" :
			d[6].substring(1);
		    set = true;
		} else {
	    	    alert("Invalid Julian calendar date \"" + date +
			"\" in search request");
		}
	    } else {
	    	alert("Invalid Julian calendar date \"" + date +
		    "\" in search request");
	    }

	} else if (calendar.toLowerCase() == "jd") {
	    var d = date.match(/^(\-?\d+\.?\d*)/);
	    if (d != null) {
	    	setJulian(d[1]);
		set = 1;
	    } else {
	    	alert("Invalid Julian day \"" + date +
		    "\" in search request");
	    }
	    
	} else if (calendar.toLowerCase() == "mjd") {
	    var d = date.match(/^(\-?\d+\.?\d*)/);
	    if (d != null) {
	    	document.modifiedjulianday.day.value = d[1];
	    	calcModifiedJulian();
		set = 1;
	    } else {
	    	alert("Invalid Modified Julian day \"" + date +
		    "\" in search request");
	    }
	    
	} else if (calendar.toLowerCase() == "unixtime") {
	    var d = date.match(/^(\-?\d+\.?\d*)/);
	    if (d != null) {
	    	document.unixtime.time.value = d[1];
	    	calcUnixTime();
		set = 1;
	    } else {
	    	alert("Invalid Modified Julian day \"" + date +
		    "\" in search request");
	    }
	    
	} else if (calendar.toLowerCase() == "iso") {
	    var d;
	    if ((d = date.match(/^(\-?\d+)\-(\d\d\d)/)) != null) {
	    	document.isoday.year.value = d[1];
		document.isoday.day.value= d[2];
	    	calcIsoDay();
		set = 1;
	    } else if ((d = date.match(/^(\-?\d+)\-?W(\d\d)\-?(\d)/i)) != null) {
    	    	document.isoweek.year.value = d[1];
    	    	document.isoweek.week.value = d[2];
    	    	document.isoweek.day.value = d[3];
	    	calcIsoWeek();
		set = 1;
	    } else {
	    	alert("Invalid ISO-8601 date \"" + date +
		    "\" in search request");
	    }
	    
	} else if (calendar.toLowerCase() == "excel") {
	    var d = date.match(/^(\-?\d+\.?\d*)/);
	    if (d != null) {
	    	document.excelserial1900.day.value = d[1];
	    	calcExcelSerial1900();
		set = 1;
	    } else {
	    	alert("Invalid Excel serial day (1900/PC) \"" + date +
		    "\" in search request");
	    }
	    
	} else if (calendar.toLowerCase() == "excel1904") {
	    var d = date.match(/^(\-?\d+\.?\d*)/);
	    if (d != null) {
	    	document.excelserial1904.day.value = d[1];
	    	calcExcelSerial1904();
		set = 1;
	    } else {
	    	alert("Invalid Excel serial day (1904/Mac) \"" + date +
		    "\" in search request");
	    }
	
	} else { alert("Invalid calendar \"" + calendar + "\" in search request");}
    } else { alert("Invalid search request: " + s); }
    
		if (!set) {
    	setDateToToday();
	calcGregorian();
    }
	},
	AM: 'AM',
	PM: 'PM',
	
	parseInt: function(inp){
		return {
			dd: parseInt(inp[0]),
			mm: parseInt(inp[1]),
			yy: parseInt(inp[2]),
			hh: parseInt(inp[3]||0),
			tt: parseInt(inp[4]||0),
			ss: parseInt(inp[5]||0),
			ll: parseInt(inp[6]||0),
		}
	},	
	parseMayan: function(d_in){
		return {
			baktun: parseInt(d_in[0]),
			katun: parseInt(d_in[1]),
			tun: parseInt(d_in[2]),
			uinal: parseInt(d_in[3]),
			kin: parseInt(d_in[4])
		}
	},
	parseBahai: function(d_in){
		return {
			kull_i_shay: parseInt(d_in[0]),
			vahid: parseInt(d_in[1]),
			yy: parseInt(d_in[2]),
			mm: parseInt(d_in[3]),
			dd: parseInt(d_in[4])
		}
	},

	parseJSON:function(inp){
		out=new Δ.date();
		switch (inp.type.toLowercase()){
			case "year":break;
				
			case "month":break;
			case "day":break;
			case "hour":break;
			case "minute":break;
			case "second":break;
			case "milisecond":break;
			case "microsecond":break;
			case "century":break;
			case "decade":break;
			case "week":break;
			case "millenium":break;
			case "million":break;
		
		}
		return out;
	},
	parseString:function(inp){
		var d=Date.parse("01/01/94");
		//console.log(inp,"01/01/"+inp)
		out=new Δ.date();
		out.gregorian=[d.year,d.month,d.year]
		return out;
		
/*
Overview
July 8th, 2004 : Typical	 
jul-08-04 : Abbreviated	 
07/08/04 : Numeric	 
2004.07.08 : Separator	 
7-8, '04 : Random Curve ball	 
07/8/2004 : Leading Zeros	 
15-Jan-2004 : Custom	 
2004-07-08 : Sortable
		
Phrase Variations		
1-Jul-2004	 
01-Jul-2004	 
01-Jul-04	 
1-July-2004	 
01-July-2004	 
01-July-04	 
15-July-2004	 
15-July-04	 
July 1, 2004	 
July 1,2004	 
Jul 1, 2004	 
Jul 1,2004	 
July 01, 2004	 
July 01,2004	 
Jul 01, 2004	 
Jul 01,2004	 
July 01, 04	 
July 01,04	 
Jul 01, 04	 
Jul 01,04	 
July 1st 2004	 
July 2nd 2004	 
July 3rd 2004	 
July 4th 2004	 
July 15th 2004	 
July 21st 2004	 
July 22nd 2004	 
July 23rd 2004	 
July 31st 2004	 
Jul 1st 04	 
Jul 2nd 04	 
Jul 3rd 04	 
Jul 4th 04	 
Jul 15th 04	 
Jul 21st 04	 
Jul 22nd 04	 
Jul 23rd 04	 
Jul 31st 04	 
Thu July 1, 2004	 
Fri July 2, 2004	 
Sat July 3, 2004	 
jul-1-2004	 
jul-1-04	 
jul-01-2004	 
jul-01-04	 
jul-15-2004	 
jul-15-04		

Separator Variations
7/1/2004	 
07/01/2004	 
07/01/04	 
7/1/04	 
7/15/2004	 
07/15/2004	 
07/15/04	 
7/15/04	 
7-1-2004	 
07-01-2004	 
07-01-04	 
7-1-04	 
7-15-2004	 
07-15-2004	 
07-15-04	 
7-15-04	 
7.1.2004	 
07.01.2004	 
07.01.04	 
7.1.04	 
7.15.2004	 
07.15.2004	 
07.15.04	 
7.15.04	 

Sortable Variations
2004-07-01	 
2004-07-15	 
2004/7/1	 
2004/07/01	 
2004/7/15	 
2004/07/15	 

Numeric Dates
7152004	 
07012004	 
07152004
		
		*/
	// ARGUMENTS
	arg=arguments;
	
	switch (arg.length){
		case 0:o.now();break;
		case 1:
			inp=arg[0]
			if ((inp.toLowerCase().indexOf("present")>-1) || (inp.toLowerCase().indexOf("now")>-1) || (inp.toLowerCase().indexOf("today")>-1)  ){
				o.now()
				break;
			}
			if (typeof inp.gregorian!="undefined") {
				o.gregorian=[inp.gregorian.day,inp.gregorian.month,inp.gregorian.year]
				break;
			}			
			if (typeof inp=="date"){
				day=inp.getUTCDate()		//Returns the day of the month, according to universal time (from 1-31)
				weekday=inp.getUTCDay()	//Returns the day of the week, according to universal time (from 0-6)
				year=inp.getUTCFullYear()	//Returns the year, according to universal time (four digits)
				hours=inp.getUTCHours()	//Returns the hour, according to universal time (from 0-23)
				miliseconds=inp.getUTCMilliseconds()	//Returns the milliseconds, according to universal time (from 0-999)
				minutes=inp.getUTCMinutes()				//Returns the minutes, according to universal time (from 0-59)
				month=inp.getUTCMonth()					//Returns the month, according to universal time (from 0-11)
				seconds=inp.getUTCSeconds()				
				s1970=inp.getTime()				
				o.gregorian=[day,month,year]
				break;
			}
/*			
			if (typeof inp=="string"){
				d1=Date.parseExact(inp, "yyyy/M/d")
				if (d1==null) d1=Date.parseExact(inp, "d/M/yyyy") 
				if (d1==null) d1=Date.parseExact(inp, "M/yyyy") 
				if (d1==null) d1=Date.parseExact(inp, "yyyy") 			
				console.log(d1,d1.getDay(),d1.getMonth(),d1.getFullYear())					
				o.gregorian=[d1.day,d1.month,d1.year]	
				break;
			}
			*/
			if (typeof inp=="object"){
				day=inp.getUTCDate()		//Returns the day of the month, according to universal time (from 1-31)
				weekday=inp.getUTCDay()	//Returns the day of the week, according to universal time (from 0-6)
				year=inp.getUTCFullYear()	//Returns the year, according to universal time (four digits)
				hours=inp.getUTCHours()	//Returns the hour, according to universal time (from 0-23)
				miliseconds=inp.getUTCMilliseconds()	//Returns the milliseconds, according to universal time (from 0-999)
				minutes=inp.getUTCMinutes()				//Returns the minutes, according to universal time (from 0-59)
				month=inp.getUTCMonth()					//Returns the month, according to universal time (from 0-11)
				seconds=inp.getUTCSeconds()				
				s1970=inp.getTime()				
				o.gregorian=[day,month,year]
				break;
			}
			
			if (typeof inp=="string"){
				if (inp.indexOf("-")<0) inp="+"+inp;
				len=inp.length
				//console.log(len,inp)
				switch (len){
					case 2:
					case 2:
						var r1,d1,match	//		dd/mm/yy 			22/02/-2012
						r1='(?<year>   [-/+]?[0-9]{1} )     # year   ';
						d1 = XRegExp(r1, 'x')
						match = XRegExp.exec(inp, d1)
						o.gregorian=["01","01",match.year]
						//console.log("3--"+inp,match.year)							
						break;					
					case 3:
						var r1,d1,match	//		dd/mm/yy 			22/02/-2012
						r1='(?<year>   [-/+]?[0-9]{2} )     # year   ';
						d1 = XRegExp(r1, 'x')
						match = XRegExp.exec(inp, d1)
						o.gregorian=["01","01",match.year]
						//console.log("3--"+inp,match.year)							
						break;					
					case 4:
						var r1,d1,match	//		dd/mm/yy 			22/02/-2012
						r1='(?<year>   [-/+]?[0-9]{3} )     # year   ';
						d1 = XRegExp(r1, 'x')
						match = XRegExp.exec(inp, d1)
						o.gregorian=["01","01",match.year]
						//console.log("3--"+inp,match.year)							
						break;			
					case 5:
						var r1,d1,match	//		dd/mm/yy 			22/02/2012
						r1='(?<year>   [-/+]?[0-9]{4} )     # year   ';
						d1 = XRegExp(r1, 'x')
						match = XRegExp.exec(inp, d1)
						o.gregorian=["01","01",match.year]
						//console.log("4--"+inp,match.year)							
						break;	
					case 6:
						var r1,d1,match	//		dd/mm/yy 			-2006 +2006
						r1='(?<year>   [-/+]?[0-9]{4} )     # year   ';
						d1 = XRegExp(r1, 'x')
						match = XRegExp.exec(inp, d1)
						o.gregorian=["01","01",match.year]
						console.log("4--"+inp,match.year)							
						break;						
					case 11:
						var r1,d1,match	//		dd/mm/yy 			+2012/02/23
						r1='(?<year>   [-/+]?[0-9]{4}) /  # year   \n\
							(?<month> [0-9]{2}) /  		# month \n\
							(?<day>  [0-9]{2} )   		# day  ';
						d1 = XRegExp(r1, 'x')
						match = XRegExp.exec(inp, d1)
						o.gregorian=[match.day,match.month,match.year]	
						console.log(match.year,match.month,match.day)						
						break;				
				}

				break;
			}
		
		case 2:
			dd=arg[0]
			if (typeof dd=="number"){
				calendar= arg[1].toString().toLowerCase();
				switch (calendar){
					case "jd":this.data.jd.set(dd);break;
					case "mjd":o.mjd.set(dd);break;
					case "gregserial":o.gregserial.set(dd);break;
					case "excelserial1900":o.excelserial1900.set(dd);break;
					case "excelserial1904":o.excelserial1904.set(dd);break;
					case "utime":o.utime=dd;break;
				}	
			}	
			break;
		case 3:	
			year=arg[0];
			month=arg[1];
			day=arg[2];
			o.gregorian=[day,month,year]
			break;		
	}
	return o;	
	
	},
}

Δ.date=function(){
	this.data={
			format:"yy/mm/dd", // YY MM DD WW HH:TT:SS		
			isoFormat:"yyyy-MM-dd'T'HH:mm:ss(.fff)",
			isoFormatTZ:"yyyy-MM-dd'T'HH:mm:ss(.fff)zzz",
			gmt:+210,
			calendar:"persian",
			type:"date",
			accuracy:"day",
			j:0,
			hours:0,	minutes:0,	seconds:0,miliseconds:0,
			utc:{
				year:0,
				month:0,
				day:0,
				hours:0,
				minutes:0,
				seconds:0,
				miliseconds:0,
				},
	}
	// ARGUMENTS
	arg=arguments;
	switch (arg.length){
		case 0:this.now();break;
		case 1:
			inp=arg[0]
			if ((inp.toLowerCase().indexOf("present")>-1) || (inp.toLowerCase().indexOf("now")>-1) || (inp.toLowerCase().indexOf("today")>-1)  ){
				this.now()
				break;
			}
			if (typeof inp.gregorian!="undefined") {
				this.gregorian=[inp.gregorian.day,inp.gregorian.month,inp.gregorian.year]
				break;
			}			
			if (typeof inp=="date"){
				day=inp.getUTCDate()		//Returns the day of the month, according to universal time (from 1-31)
				weekday=inp.getUTCDay()	//Returns the day of the week, according to universal time (from 0-6)
				year=inp.getUTCFullYear()	//Returns the year, according to universal time (four digits)
				hours=inp.getUTCHours()	//Returns the hour, according to universal time (from 0-23)
				miliseconds=inp.getUTCMilliseconds()	//Returns the milliseconds, according to universal time (from 0-999)
				minutes=inp.getUTCMinutes()				//Returns the minutes, according to universal time (from 0-59)
				month=inp.getUTCMonth()					//Returns the month, according to universal time (from 0-11)
				seconds=inp.getUTCSeconds()				
				s1970=inp.getTime()				
				this.gregorian=[day,month,year]
				break;
			}
/*			
			if (typeof inp=="string"){
				d1=Date.parseExact(inp, "yyyy/M/d")
				if (d1==null) d1=Date.parseExact(inp, "d/M/yyyy") 
				if (d1==null) d1=Date.parseExact(inp, "M/yyyy") 
				if (d1==null) d1=Date.parseExact(inp, "yyyy") 			
				console.log(d1,d1.getDay(),d1.getMonth(),d1.getFullYear())					
				o.gregorian=[d1.day,d1.month,d1.year]	
				break;
			}
			*/
			if (typeof inp=="object"){
				day=inp.getUTCDate()		//Returns the day of the month, according to universal time (from 1-31)
				weekday=inp.getUTCDay()	//Returns the day of the week, according to universal time (from 0-6)
				year=inp.getUTCFullYear()	//Returns the year, according to universal time (four digits)
				hours=inp.getUTCHours()	//Returns the hour, according to universal time (from 0-23)
				miliseconds=inp.getUTCMilliseconds()	//Returns the milliseconds, according to universal time (from 0-999)
				minutes=inp.getUTCMinutes()				//Returns the minutes, according to universal time (from 0-59)
				month=inp.getUTCMonth()					//Returns the month, according to universal time (from 0-11)
				seconds=inp.getUTCSeconds()				
				s1970=inp.getTime()				
				this.gregorian=[day,month,year]
				break;
			}
			
			if (typeof inp=="string"){
				//return Δ.time.calendar.parseString(inp);
				if (inp.indexOf("-")<0) inp="+"+inp;
				len=inp.length
				//console.log(len,inp)
				switch (len){
					case 1:
					case 2:
						var r1,d1,match	//		dd/mm/yy 			22/02/-2012
						r1='(?<year>   [-/+]?[0-9]{1} )     # year   ';
						d1 = XRegExp(r1, 'x')
						match = XRegExp.exec(inp, d1)
						this.gregorian=["01","01",match.year]
						//console.log("3--"+inp,match.year)							
						break;					
					case 3:
						var r1,d1,match	//		dd/mm/yy 			22/02/-2012
						r1='(?<year>   [-/+]?[0-9]{2} )     # year   ';
						d1 = XRegExp(r1, 'x')
						match = XRegExp.exec(inp, d1)
						this.gregorian=["01","01",match.year]
						//console.log("3--"+inp,match.year)							
						break;					
					case 4:
						var r1,d1,match	//		dd/mm/yy 			22/02/-2012
						r1='(?<year>   [-/+]?[0-9]{3} )     # year   ';
						d1 = XRegExp(r1, 'x')
						match = XRegExp.exec(inp, d1)
						this.gregorian=["01","01",match.year]
						//console.log("3--"+inp,match.year)							
						break;			
					case 5:
						var r1,d1,match	//		dd/mm/yy 			22/02/2012
						r1='(?<year>   [-/+]?[0-9]{4} )     # year   ';
						d1 = XRegExp(r1, 'x')
						match = XRegExp.exec(inp, d1)
						this.gregorian=["01","01",match.year]
						//console.log("4--"+inp,match.year)							
						break;	
					case 6:
						var r1,d1,match	//		dd/mm/yy 			-2006 +2006
						r1='(?<year>   [-/+]?[0-9]{4} )     # year   ';
						d1 = XRegExp(r1, 'x')
						match = XRegExp.exec(inp, d1)
						this.gregorian=["01","01",match.year]
						console.log("4--"+inp,match.year)							
						break;						
					case 11:
						var r1,d1,match	//		dd/mm/yy 			+2012/02/23
						r1='(?<year>   [-/+]?[0-9]{4}) /  # year   \n\
							(?<month> [0-9]{2}) /  		# month \n\
							(?<day>  [0-9]{2} )   		# day  ';
						d1 = XRegExp(r1, 'x')
						match = XRegExp.exec(inp, d1)
						this.gregorian=[match.day,match.month,match.year]	
						//console.log(match.year,match.month,match.day)						
						break;				
				}

				break;
			}
		
		case 2:
			dd=arg[0]
			if (typeof dd=="number"){
				calendar= arg[1].toString().toLowerCase();
				switch (calendar){
					case "jd":this.data.jd.set(dd);break;
					case "mjd":this.mjd.set(dd);break;
					case "gregserial":this.gregserial.set(dd);break;
					case "excelserial1900":this.excelserial1900.set(dd);break;
					case "excelserial1904":this.excelserial1904.set(dd);break;
					case "utime":this.utime=dd;break;
				}	
			}	
			break;
		case 3:	
			year=arg[0];
			month=arg[1];
			day=arg[2];
			this.gregorian=[day,month,year]
			break;		
	}
	return this;
}
Δ.date.prototype={
		constructor: Δ.date,
		get delta(){
			return {
				type:"date",
				category:"time",
				uns:"Δ.time.date",
			}
		},
		// get COSMIC	
		get jd()				{return {day:this.data.j}},
		get mjd()				{return {day:this.data.j-Δ.time.calendar.JMJD}},
        get gregserial()		{return {day:this.data.j-Δ.time.calendar.J0000}},															//gregorian serial number
		get excelserial1900()	{return {day:(this.data.j-Δ.time.calendar.J1900)+1+((this.data.j>2415078.5)?1:0)}},			//excel 1900 day serial numbers
		get excelserial1904()	{return {day:this.data.j-Δ.time.calendar.J1904}},														//excel 1904 day serial numbers
		get utime()				{return Math.round(((this.data.j -Δ.time.calendar.J1970)*(60*60 *24*1000))/1000); },		// unix time: miliseconds since 1970
		// set COSMIC
		set jd(inp)						{this.data.j=inp},
		set mjd(inp)					{this.data.j=Δ.time.calendar.JMJD+inp},
		set gregserial(inp)			{this.data.j=Δ.time.calendar.J0000+inp},
		set excelserial1900(inp)	{if (inp>60) inp--; this.data.j=Δ.time.calendar.J1900+inp-1},
		set excelserial1904(inp)	{this.data.j=Δ.time.calendar.J1904+inp},
		set utime(inp)					{this.data.j=Δ.time.calendar.J1970 +(inp/(60*60*24))},
		// get CALENDAR	
		get gregorian(){
				var grecal=Δ.time.calendar.jd_to_gregorian(this.data.j);
				return {
					get year() 		{return grecal[0]},
					get month() 	{return grecal[1]+1},
					get day() 		{return grecal[2]},
					weekday: this.weekday,
					weekdayName: Δ.time.calendar.gregorian.weekdays[this.weekday],
					monthName: Δ.time.calendar.gregorian.months[grecal[1]],			
					leap: Δ.time.calendar.NormLeap[Δ.time.calendar.leap_gregorian(grecal[0]) ? 1 : 0],
					set year(x) {
						var x=Δ.def(x,0)
						var xString=x.toString()
						if (xString.indexOf("-") || xString.indexOf("+") ) {
							o.gregorian=[this.gregorian.day,this.gregorian.month,this.gregorian.year+x]
						}else{
							o.gregorian=[this.gregorian.day,this.gregorian.month,x]
						}						
					},
					set month(x){
						var x=Δ.def(x,0)
						var xString=x.toString()
						if (xString.indexOf("-") || xString.indexOf("+") ) {
							o.gregorian=[this.gregorian.day,this.gregorian.month+x,this.gregorian.year]
						}else{
							o.gregorian=[this.gregorian.day,x,this.gregorian.year]
						}						
					},
					set day(x)  {
						var x=Δ.def(x,0)
						var xString=x.toString()
						if (xString.indexOf("-") || xString.indexOf("+") ) {
							o.gregorian=[this.gregorian.day+x,this.gregorian.month,this.gregorian.year]
						}else{
							o.gregorian=[x,this.gregorian.month,this.gregorian.year]
						}						
					},					
					weekdays:	function(){return Δ.time.calendar.gregorian.weekdays},
					monthNames:	function(){return Δ.time.calendar.gregorian.months},
					toString:function(format){
						var format=Δ.def(format,this.data.format);
						return this.gregorian.day+"/"+this.gregorian.month+"/"+this.gregorian.year;
					},
					// Fuzzy Dates
					get nextweek(){this.data.j+=7},
					get lastweek(){this.data.j-=7},
					get tomorrow(){this.data.j++},
					get yesterday(){this.data.j--},
					get nextday(){this.data.j++},
					get lastday(){this.data.j--},	
					get nextyear(){this.gregorian=[this.gregorian.day,this.gregorian.month,this.gregorian.year+1]},	
					get lastyear(){this.gregorian=[this.gregorian.day,this.gregorian.month,this.gregorian.year-1]},
					get nextmonth(){this.gregorian=[this.gregorian.day,this.gregorian.month+1,this.gregorian.year]},	
					get lastmonth(){this.gregorian=[this.gregorian.day,this.gregorian.month-1,this.gregorian.year]},
				}
		},
		get persian(){
			var perscal=Δ.time.calendar.jd_to_persian(this.data.j);
			return {
					get year() 		{return perscal[0]},
					get month() 	{return perscal[1]+1},
					get day() 		{return perscal[2]},
					set year(inp) 	{this.data.j=Δ.time.calendar.persian_to_jd(inp,this.persian.month,this.persian.day)},
					set month(inp) 	{this.data.j=Δ.time.calendar.persian_to_jd(this.persian.year,inp,this.persian.day)},
					set day(inp) 	{this.data.j=Δ.time.calendar.persian_to_jd(this.persian.year,this.persian.month,inp)},
					weekday: this.weekday,
					weekdayName: Δ.time.calendar.persian.weekdays[this.weekday],
					monthName: Δ.time.calendar.persian.months[perscal[1]],			
					leap: Δ.time.calendar.NormLeap[Δ.time.calendar.leap_persiana(perscal[0]) ? 1 : 0],
					addYear: 			function(x){var x=Δ.def(x,1);o.persian=[this.persian.year+x,this.persian.month,this.persian.day]},
					addMonth: 			function(x){var x=Δ.def(x,1);o.persian=[this.persian.year,this.persian.month+x,this.persian.day]},
					addDay:				function(x){var x=Δ.def(x,1);o.persian=[this.persian.year,this.persian.month,this.persian.day+x]},
					weekdays:		function(){return {fa:Δ.time.calendar.persian.weekdays_fa, en:Δ.time.calendar.persian.weekdays}},
					monthNames:	function(){return {fa:Δ.time.calendar.persian.months_fa, en:Δ.time.calendar.persian.months}},			
					toString:function(format){
						var format=Δ.def(format,this.data.format);
						/*fuzzy
						format.replace("YYY",this.persian.year);
						format.replace("MMM",this.persian.monthName);
						format.replace("DDD",numTchar(this.persian.day));
						format.replace("HHH",this.persian.hour);
						format.replace("TTT",this.persian.minute);
						format.replace("SSS",this.persian.second);
						format.replace("WWW",this.persian.weekdayName); */
						// compact
						format.replace("yy",this.persian.year);//2
						format.replace("mm",this.persian.month);
						format.replace("dd",this.persian.day);
						format.replace("hh",this.persian.hour);
						format.replace("tt",this.persian.minute);
						format.replace("ss",this.persian.second);
						format.replace("ww",this.persian.weekday);
						// alphabetic
						format.replace("YY",this.persian.year);
						format.replace("MM",this.persian.monthName);
						format.replace("DD",this.persian.day);
						format.replace("HH",this.persian.hour);
						format.replace("TT",this.persian.minute);
						format.replace("SS",this.persian.second);
						format.replace("WW",this.persian.weekdayName);
						return format;
					},
			}		
		},		
		get persiana(){
			var perscal=Δ.time.calendar.jd_to_persiana(this.data.j);
			return {
					get year() 		{return perscal[0]},
					get month() 	{return perscal[1]+1},
					get day() 		{return perscal[2]},
					set year(inp) 	{this.data.j=Δ.time.calendar.persiana_to_jd(inp,o.persiana.month,o.persiana.day)},
					set month(inp) 	{this.data.j=Δ.time.calendar.persiana_to_jd(o.persiana.year,inp,o.persiana.day)},
					set day(inp) 	{this.data.j=Δ.time.calendar.persiana_to_jd(o.persiana.year,o.persiana.month,inp)},
					weekday: this.weekday,
					weekdayName: Δ.time.calendar.persiana.weekdays[this.weekday],
					monthName: Δ.time.calendar.persiana.months[perscal[1]],			
					leap: Δ.time.calendar.NormLeap[Δ.time.calendar.leap_persiana(perscal[0]) ? 1 : 0],
					addYear: 			function(x){var x=Δ.def(x,1);o.persiana=[o.persiana.year+x,o.persiana.month,o.persiana.day]},
					addMonth: 			function(x){var x=Δ.def(x,1);o.persiana=[o.persiana.year,o.persiana.month+x,o.persiana.day]},
					addDay:				function(x){var x=Δ.def(x,1);o.persiana=[o.persiana.year,o.persiana.month,o.persiana.day+x]},
					weekdays:		function(){return {fa:Δ.time.calendar.persiana.weekdays_fa, en:Δ.time.calendar.persiana.weekdays}},
					monthNames:	function(){return {fa:Δ.time.calendar.persiana.months_fa, en:Δ.time.calendar.persiana.months}},			
					toString:function(format){
						var format=Δ.def(format,this.data.format);
						/*fuzzy
						format.replace("YYY",this.persian.year);
						format.replace("MMM",this.persian.monthName);
						format.replace("DDD",numTchar(this.persian.day));
						format.replace("HHH",this.persian.hour);
						format.replace("TTT",this.persian.minute);
						format.replace("SSS",this.persian.second);
						format.replace("WWW",this.persian.weekdayName); */
						// compact
						format.replace("yy",this.persian.year);//2
						format.replace("mm",this.persian.month);
						format.replace("dd",this.persian.day);
						format.replace("hh",this.persian.hour);
						format.replace("tt",this.persian.minute);
						format.replace("ss",this.persian.second);
						format.replace("ww",this.persian.weekday);
						// alphabetic
						format.replace("YY",this.persian.year);
						format.replace("MM",this.persian.monthName);
						format.replace("DD",this.persian.day);
						format.replace("HH",this.persian.hour);
						format.replace("TT",this.persian.minute);
						format.replace("SS",this.persian.second);
						format.replace("WW",this.persian.weekdayName);
						return format;
					},
			}		
		},			
		get julian(){
				var julcal=Δ.time.calendar.jd_to_julian(this.data.j);
				return {
					get year() 		{return julcal[0]},
					get month() 	{return julcal[1]+1},
					get day() 		{return julcal[2]},
					set year(inp) 		{this.data.j=Δ.time.calendar.julian_to_jd(o.julian.day,o.julian.month,inp)},
					set month(inp) 	{this.data.j=Δ.time.calendar.julian_to_jd(o.julian.day,inp,o.julian.year)},
					set day(inp) 		{this.data.j=Δ.time.calendar.julian_to_jd(inp,o.julian.month,o.julian.year)},
					weekday: this.weekday,
					weekdayName: Δ.time.calendar.julian.weekdays[this.weekday],
					monthName: Δ.time.calendar.julian.months[julcal[1]],			
					leap: Δ.time.calendar.NormLeap[Δ.time.calendar.leap_gregorian(julcal[0]) ? 1 : 0],
					addYear: 	function(x){var x=Δ.def(x,1);o.julian=[o.julian.day,o.julian.month,o.julian.year+x]},
					addMonth: 	function(x){var x=Δ.def(x,1);o.julian=[o.julian.day,o.julian.month+x,o.julian.year]},
					addDay:		function(x){var x=Δ.def(x,1);o.julian=[o.julian.day+x,o.julian.month,o.julian.year]},
					weekdays:	function(){return Δ.time.calendar.julian.weekdays},
					monthNames:	function(){return Δ.time.calendar.julian.months},
					toString:function(format){
						var format=Δ.def(format,this.data.format);
						return o.julian.day+"/"+o.julian.month+"/"+o.julian.year;
					},
				}	
		},		
		get arabic(){
			var arabcal=Δ.time.calendar.jd_to_arabic(this.data.j);
			return {
					get year() 		{return arabcal[0]},
					get month() 	{return arabcal[1]+1},
					get day() 		{return arabcal[2]},
					set year(inp) 		{this.data.j=Δ.time.calendar.arabic_to_jd(inp,this.arabic.month,this.arabic.day)},
					set month(inp) 	{this.data.j=Δ.time.calendar.arabic_to_jd(this.arabic.year,inp,this.arabic.day)},
					set day(inp) 		{this.data.j=Δ.time.calendar.arabic_to_jd(this.arabic.year,this.arabic.month,inp)},
					weekday: this.weekday,
					weekdayName: Δ.time.calendar.arabic.weekdays[this.weekday],
					monthName: Δ.time.calendar.arabic.months[arabcal[1]],			
					leap: Δ.time.calendar.NormLeap[Δ.time.calendar.leap_persiana(arabcal[0]) ? 1 : 0],
					addYear: 			function(x){var x=Δ.def(x,1);this.arabic=[this.arabic.year+x,this.arabic.month,this.arabic.day]},
					addMonth: 			function(x){var x=Δ.def(x,1);this.arabic=[this.arabic.year,this.arabic.month+x,this.arabic.day]},
					addDay:				function(x){var x=Δ.def(x,1);this.arabic=[this.arabic.year,this.arabic.month,this.arabic.day+x]},
					weekdays:		function(){return {fa:Δ.time.calendar.arabic.weekdays_fa, en:Δ.time.calendar.arabic.weekdays}},
					monthNames:	function(){return {fa:Δ.time.calendar.arabic.months_fa, en:Δ.time.calendar.arabic.months}},			
					toString:function(format){
						var format=Δ.def(format,this.data.format);
						/*fuzzy
						format.replace("YYY",this.persian.year);
						format.replace("MMM",this.persian.monthName);
						format.replace("DDD",numTchar(this.persian.day));
						format.replace("HHH",this.persian.hour);
						format.replace("TTT",this.persian.minute);
						format.replace("SSS",this.persian.second);
						format.replace("WWW",this.persian.weekdayName); */
						// compact
						format.replace("yy",this.persian.year);//2
						format.replace("mm",this.persian.month);
						format.replace("dd",this.persian.day);
						format.replace("hh",this.persian.hour);
						format.replace("tt",this.persian.minute);
						format.replace("ss",this.persian.second);
						format.replace("ww",this.persian.weekday);
						// alphabetic
						format.replace("YY",this.persian.year);
						format.replace("MM",this.persian.monthName);
						format.replace("DD",this.persian.day);
						format.replace("HH",this.persian.hour);
						format.replace("TT",this.persian.minute);
						format.replace("SS",this.persian.second);
						format.replace("WW",this.persian.weekdayName);
						return format;
					},
			}	
		},
		get indian(){
			var indcal=Δ.time.calendar.jd_to_indian(this.data.j);
			return {
					get year() 		{return indcal[0]},
					get month() 	{return indcal[1]+1},
					get day() 		{return indcal[2]},
					set year(inp) 		{this.data.j=Δ.time.calendar.indian_to_jd(inp,o.indian.month,o.indian.day)},
					set month(inp) 	{this.data.j=Δ.time.calendar.indian_to_jd(o.indian.year,inp,o.indian.day)},
					set day(inp) 		{this.data.j=Δ.time.calendar.indian_to_jd(o.indian.year,o.indian.month,inp)},
					weekday: this.weekday,
					weekdayName: Δ.time.calendar.indian.weekdays[this.weekday],
					monthName: Δ.time.calendar.indian.months[indcal[1]],			
					leap: Δ.time.calendar.NormLeap[Δ.time.calendar.leap_gregorian(indcal[0] + 78) ? 1 : 0],
					addYear: 			function(x){var x=Δ.def(x,1);o.indian=[o.indian.year+x,o.indian.month,o.indian.day]},
					addMonth: 			function(x){var x=Δ.def(x,1);o.indian=[o.indian.year,o.indian.month+x,o.indian.day]},
					addDay:				function(x){var x=Δ.def(x,1);o.indian=[o.indian.year,o.indian.month,o.indian.day+x]},
					weekdays:		function(){return {fa:Δ.time.calendar.indian.weekdays_fa, en:Δ.time.calendar.indian.weekdays}},
					monthNames:	function(){return {fa:Δ.time.calendar.indian.months_fa, en:Δ.time.calendar.indian.months}},			
					toString:function(format){
						var format=Δ.def(format,this.data.format);
						/*fuzzy
						format.replace("YYY",this.persian.year);
						format.replace("MMM",this.persian.monthName);
						format.replace("DDD",numTchar(this.persian.day));
						format.replace("HHH",this.persian.hour);
						format.replace("TTT",this.persian.minute);
						format.replace("SSS",this.persian.second);
						format.replace("WWW",this.persian.weekdayName); */
						// compact
						format.replace("yy",this.persian.year);//2
						format.replace("mm",this.persian.month);
						format.replace("dd",this.persian.day);
						format.replace("hh",this.persian.hour);
						format.replace("tt",this.persian.minute);
						format.replace("ss",this.persian.second);
						format.replace("ww",this.persian.weekday);
						// alphabetic
						format.replace("YY",this.persian.year);
						format.replace("MM",this.persian.monthName);
						format.replace("DD",this.persian.day);
						format.replace("HH",this.persian.hour);
						format.replace("TT",this.persian.minute);
						format.replace("SS",this.persian.second);
						format.replace("WW",this.persian.weekdayName);
						return format;
					},
			}		
		},
		get french(){
			var frcal=Δ.time.calendar.jd_to_french_revolutionary(this.data.j);
			return {
					get an(){return frcal[0]},  		//an
					get mois(){return frcal[1]},		//mois
					get decade(){return frcal[2]},		// decade -1
					get jour(){return  ((frcal[1] <= 12) ? frcal[3] : (frcal[3] + 11))}, //-1 							
					set an(inp) 		{this.data.j=Δ.time.calendar.french_revolutionary_to_jd(inp,this.french.mois,this.french.decade,this.french.jour)},
					set mois(inp) 		{this.data.j=Δ.time.calendar.french_revolutionary_to_jd(this.french.an,inp,this.french.decade,this.french.jour)},
					set decade(inp) 	{this.data.j=Δ.time.calendar.french_revolutionary_to_jd(this.french.an,this.french.mois,inp,this.french.jour)},
					set jour(inp) 		{this.data.j=Δ.time.calendar.french_revolutionary_to_jd(this.french.an,this.french.mois,this.french.decade,inp)},
					weekday: this.weekday,
					weekdayName: Δ.time.calendar.french.weekdays[this.weekday],
					monthName: Δ.time.calendar.french.months[frcal[1]-1],			
					leap: Δ.time.calendar.NormLeap[Δ.time.calendar.leap_gregorian(frcal[0] + 78) ? 1 : 0],
					addYear: 			function(x){var x=Δ.def(x,1);this.french=[this.french.year+x,this.french.month,this.french.day]},
					addMonth: 			function(x){var x=Δ.def(x,1);this.french=[this.french.year,this.french.month+x,this.french.day]},
					addDay:				function(x){var x=Δ.def(x,1);this.french=[this.french.year,this.french.month,this.french.day+x]},
					weekdays:		function(){return {fa:Δ.time.calendar.french.weekdays_fa, en:Δ.time.calendar.french.weekdays}},
					monthNames:	function(){return {fa:Δ.time.calendar.french.months_fa, en:Δ.time.calendar.french.months}},			
					toString:function(format){
						var format=Δ.def(format,this.data.format);
						/*fuzzy
						format.replace("YYY",this.persian.year);
						format.replace("MMM",this.persian.monthName);
						format.replace("DDD",numTchar(this.persian.day));
						format.replace("HHH",this.persian.hour);
						format.replace("TTT",this.persian.minute);
						format.replace("SSS",this.persian.second);
						format.replace("WWW",this.persian.weekdayName); */
						// compact
						format.replace("yy",this.persian.year);//2
						format.replace("mm",this.persian.month);
						format.replace("dd",this.persian.day);
						format.replace("hh",this.persian.hour);
						format.replace("tt",this.persian.minute);
						format.replace("ss",this.persian.second);
						format.replace("ww",this.persian.weekday);
						// alphabetic
						format.replace("YY",this.persian.year);
						format.replace("MM",this.persian.monthName);
						format.replace("DD",this.persian.day);
						format.replace("HH",this.persian.hour);
						format.replace("TT",this.persian.minute);
						format.replace("SS",this.persian.second);
						format.replace("WW",this.persian.weekdayName);
						return format;
					},
			}				
		},
		get mayan(){
			var	my=Δ.time.calendar.jd_to_mayan_count(this.data.j);
			var	mayhaabcal=Δ.time.calendar.jd_to_mayan_haab(this.data.j);
			var	maytzolkincal=Δ.time.calendar.jd_to_mayan_tzolkin(this.data.j);
			return {
				get baktun(){return my[0]},
				get katun(){return my[1]},
				get tun(){return  my[2]},
				get uinal(){return my[3]},
				get kin(){return my[4]},
				get haab(){return "" + mayhaabcal[1] + " " + Δ.time.calendar.mayan.HaabMonths[mayhaabcal[0] - 1]},
				get tzolkin(){return "" + maytzolkincal[1] + " " + Δ.time.calendar.mayan.TzolkinMonths[maytzolkincal[0] - 1]},
				toString:function(format){
					var format=Δ.def(format,this.data.format);
					return o.mayan.baktun+"/"+o.mayan.katun+"/"+o.mayan.tun+"/"+o.mayan.kin+"/"+o.mayan.haab+"/"+o.mayan.tzolkin;
				},
			}		
		},		
		get bahai() {
			var bi=Δ.time.calendar.jd_to_bahai(this.data.j);
			return {
				get kull_i_shay() {return bi[0]},
				get vahid() {return  bi[1]},
				get year() {return  bi[2]},		//-1
				get month() {return  bi[3]}, 	//-1
				get day() {return  bi[4]},		//-1
				get weekday() {return  this.data.weekday},
				get weekdayName() {return  Δ.time.calendar.bahai.weekdays[weekday]},
				get leap() {return  Δ.time.calendar.NormLeap[Δ.time.calendar.leap_gregorian(bi[2]) ? 1 : 0]}, //same a Gregorian
				toString:function(format){
						var format=Δ.def(format,this.data.format);
						return o.bahai.kull_i_shay+"/"+o.bahai.vahid+"/"+o.bahai.year+"/"+o.bahai.month+"/"+o.bahai.day;
				},				
			}		
		},
		get hebrew(){
			var heb=Δ.time.calendar.jd_to_hebrew(this.data.j)
			hmindex = heb[1];
			if (hmindex == 12 && !Δ.time.calendar.hebrew_leap(heb[0])) hmindex = 14;
			var h={}
			h.month_img = "img/hebrew/hebrew_month_" + hmindex + ".gif";
			switch (Δ.time.calendar.hebrew_year_days(heb[0])){
				case 353:h.leap = "Common deficient (353 days)";break;
				case 354:h.leap = "Common regular (354 days)";break;
				case 355:h.leap = "Common complete (355 days)";break;
				case 383:h.leap = "Embolismic deficient (383 days)";break;
				case 384:h.leap = "Embolismic regular (384 days)";break;
				case 385:h.leap = "Embolismic complete (385 days)";break;
				default:h.leap = "Invalid year length: " +  Δ.time.calendar.hebrew_year_days(heb[0]) + " days.";break;
			}
			/*
			if (Δ.time.calendar.hebrew_leap(hebrewcal[0])) {
				o.month.options.length = 13;
				o.month.options[11] = new Option("Adar I");
				o.month.options[12] = new Option("Veadar");
			} else {
				o.month.options.length = 12;
				o.month.options[11] = new Option("Adar");
			}
			*/		
			return {
				get year(){return heb[0]},
				get month(){return heb[1]},
				get day(){return heb[2]},
				get leap(){return  h.leap},
				get month_img(){return h.month_img},
				toString:function(format){
						var format=Δ.def(format,this.data.format);
						return o.hebrew.year+"/"+o.hebrew.month+"/"+o.hebrew.day;
				},					
			}		
		},
		get isoweek(){
			var	iso_w=Δ.time.calendar.jd_to_iso(this.data.j);
			return {
					get year() 		{return iso_w[0]},
					get wekk() 		{return iso_w[1]},
					get day() 		{return iso_w[2]},
			}
		},
		get isoday(){
			var	iso_d=Δ.time.calendar.jd_to_iso_day(this.data.j);
			return {
					get year() 		{return iso_d[0]},
					get day() 		{return iso_d[1]},
			}		
		},
		get weekday()		{return Δ.time.calendar.jwday(this.data.j)},	
		
		// set CALENDAR
		set julian(d_in){
			d=Δ.time.calendar.parseInt(d_in)
			this.data.j=Δ.time.calendar.julian_to_jd(d.yy,d.mm,d.dd);
		},
		set gregorian(inp){
			d=Δ.time.calendar.parseInt(inp)
			//this.data.j=Δ.time.calendar.gregorian_to_jd(d.yy,d.mm,d.dd);
			this.data.j=Δ.time.calendar.gregorian_to_jd(d.yy,d.mm,d.dd)+(Math.floor(d.ss+60*(d.tt+60*d.hh)+d.ll)/86400.0);			
		},
		set persian(d_in){
			d=Δ.time.calendar.parseInt(d_in)
			this.data.j=Δ.time.calendar.persian_to_jd(d.yy,d.mm,d.dd);
		},
		set persiana(d_in){
			d=Δ.time.calendar.parseInt(d_in)
			this.data.j=Δ.time.calendar.persiana_to_jd(d.yy,d.mm,d.dd);
		},
		set arabic(d_in){
			d=Δ.time.calendar.parseInt(d_in)
			this.data.j=Δ.time.calendar.arabic_to_jd(d.yy,d.mm,d.dd);
		},		
		set indian(d_in){
			d=Δ.time.calendar.parseInt(d_in)
			this.data.j=Δ.time.calendar.indian_to_jd(d.yy,d.mm,d.dd);
		},	
		set french(d_in){
			d={
				an: parseInt(d_in[0]),
				jour: parseInt(d_in[1]),
				decade: parseInt(d_in[2]),
				mois: parseInt(d_in[3]),
			}
			if (d.jour>10){
				d.decade = 0;
				d.mois = 12;
				d.jour -= 11;
			}
			if (d.mois==13){
				d.decade=1;
				if (d.jour>6) d.jour=1;
			}
			this.data.j=Δ.time.calendar.french_revolutionary_to_jd(d.an,d.mois,d.decade,d.jour);
		},			
		set mayan(d_in){
			d=Δ.time.calendar.parseMayan(d_in)//baktun,katun,tun,uinal,kin
			this.data.j=Δ.time.calendar.mayan_count_to_jd(d.baktun,d.katun,d.tun,d.uinal,d.kin)
		},
		set bahai(d_in){
			d=Δ.time.calendar.parseBahai(d_in)//kull_i_shay,vahid,yy,mm,dd
			this.data.j=Δ.time.calendar.bahai_to_jd(d.kull_i_shay,d.vahid,d.yy,d.mm,d.dd)
		},
		set hebrew(d_in){
			d=Δ.time.calendar.parseInt(d_in)
			this.data.j=Δ.time.calendar.hebrew_to_jd(d.yy,d.mm,d.dd);
		},
		set isoweek(d_in)	{
			d=Δ.time.calendar.parseInt(d_in)
			this.data.j=Δ.time.calendar.iso_to_julian(d.yy,d.ww,d.dd)
		},
		set isoday(yy,dd)	{
			d=Δ.time.calendar.parseInt(d_in)
			this.data.j=Δ.time.calendar.iso_day_to_julian(d.yy,d.dd)		
		},		
		
		// get TIME
		get utc(){
				return {
					get year() 			{return this.data.utc.year},
					get month() 		{return this.data.utc.month},
					get day() 			{return this.data.utc.day},
					get weekday() 	{return this.data.utc.weekday},				
					get hours() 		{return this.data.utc.hours},
					get minutes() 		{return this.data.utc.minutes},
					get seconds() 		{return this.data.utc.seconds},
					get miliseconds() {return this.data.utc.miliseconds},
					
					set year(inp) 			{this.data.utc.year=inp},
					set month(inp) 		{this.data.utc.month=inp},
					set day(inp) 			{this.data.utc.day=inp},
					set hours(inp) 		{this.data.utc.hours=inp},
					set minutes(inp) 		{this.data.utc.minutes=inp},
					set seconds(inp) 		{this.data.utc.seconds=inp},
					set miliseconds(inp) 	{this.data.utc.miliseconds=inp},
					
					getTime:function(){return o.utime},
					setTime:function(inp){o.utime=inp},
				}	
		},			
		get time(){
			return {
				get hours()		{return this.data.hours}, 
				get minutes()	{return this.data.minutes},
				get seconds()	{return this.data.seconds},
				get miliseconds(){return this.data.miliseconds},
				set hours(x){
					var x=Δ.def(x,0)
					var xString=x.toString()
					if (xString.indexOf("-") || xString.indexOf("+") ) {
						o.gregorian=[this.gregorian.day,this.gregorian.month,this.gregorian.year]
					}else{
						o.gregorian=[this.gregorian.day,this.gregorian.month,this.gregorian.year]
					}										
				}
			} 
		},		
		get hours()		{return this.data.hours},
		get minutes()		{return this.data.minutes},
		get seconds()		{return this.data.seconds },
		get miliseconds()		{return this.data.miliseconds },
		// set TIME	
		set time(hh,mm,ss,ms)	{this.data.hours=hh; this.data.minutes=mm; this.data.seconds=ss; this.data.miliseconds=ms;  },
		set hours(inp)		{this.data.hours=inp},
		set minutes(inp)	{this.data.minutes=inp},
		set seconds(inp)	{this.data.seconds=inp},
		set miliseconds(inp)	{this.data.miliseconds=inp },
		
		add:function(inp){this.data.j=inp.data.j+this.data.j},
		diff:function(inp){this.data.j=inp.data.j-this.data.j},
		duration:function(inp1,inp2){return (inp1.data.j-inp2.data.j)},
		addDay:function(inp){this.data.j+=inp},
		diffDay:function(inp){this.data.j-=inp},
		addWeek:function(inp){this.data.j-=inp},
		diffWeek:function(inp){this.data.j-=inp},
		nextweek:function(){var temp=new date();temp.data.j+=7},
		lastweek:function(){var temp=new date();temp.data.j-=7},
		tomorrow:function(){var temp=new date();temp.data.j++},
		yesterday:function(){var temp=new date();temp.data.j--},

		now:function(){
			today=new Date()
			yy=today.getFullYear()
			mm=today.getMonth()
			dd=today.getDate()
			hh=today.getHours()
			tt=today.getMinutes()
			ss=today.getSeconds()
			weekday=null
			this.gregorian=[dd,mm,yy]
		},		
}

// prerequistic functions
Δ.extend=function (/*Object*/ dest) /*-> Object*/ {	// merge src properties into dest
	var sources = Array.prototype.slice.call(arguments, 1);
	for (var j = 0, len = sources.length, src; j < len; j++) {
		src = sources[j] || {};
		for (var i in src) if (src.hasOwnProperty(i)) dest[i] = src[i];
	}
	return dest;
}

trimAll=function(str){return str.replace(/^\s*/,"").replace(/\s*$/,"");}
String.zeros = function (str, len, seperator) {
    if(typeof str === 'number' || Number(str)){
        str = str.toString();
        return (len - str.length > 0) ? new Array(len + 1 - str.length).join('0') + str: str;
    }
    else{
        for(var i = 0,spl = str.split(seperator || ' '); i < spl.length; spl[i] = (Number(spl[i])&& spl[i].length < len)?String.zeros(spl[i],len):spl[i],str = (i == spl.length -1)?spl.join(seperator || ' '):str,i++);
        return str;
    }
};
String.prototype.zeros = function (len, seperator) {
	return String.zeros(this,len,seperator);
};
String.prototype.lead=function(str){
	var s=this.replace(/\d+/g, function(m){ return str.substr(m.length - 1) + m;});
	return s
}
Number.prototype.lead=function(str){
	var n=this+"";
	var s=n.replace(/\d+/g, function(m){ return str.substr(m.length - 1) + m;});
	return s
}
Number.prototype.toDate=function(){
	var v=this.toString()
	v.toDate()
}
String.prototype.toDate=function(){
	var rules={
		DDMMYYYY:{
			rule:	/^([1-9]|0[1-9]|[12][0-9]|3[01])\D([1-9]|0[1-9]|1[012])\D([-|+]?)([0-9]{1,4})$/,
			value:function(inp,calendarType){
				var tokens = inp.split('/');  //  this.split('\/');
				var day    = parseInt(tokens[0], 10).lead("0");
				var month  = parseInt(tokens[1], 10).lead("0");
				var year   = parseInt(tokens[2], 10).lead("000");				
				var out={
					calendar:calendarType,				
					format:"DDMMYYYY",
					input:inp+"",
					range:"day",
					toString:function(){
						return year+"/"+month+"/"+day;
					},
					output:year+"/"+month+"/"+day,					
					year:year,
					month:month,
					day:day					
				}
				return out;
			}	
		},
		YYYYMMDD:{
			rule:	/^([-|+]?)([0-9]{1,4})\D([1-9]|0[1-9]|1[012])\D([1-9]|0[1-9]|[12][0-9]|3[01])$/,
			value:function(inp,calendarType){
				var tokens = inp.split('/');  //  this.split('\/');
				var year    = parseInt(tokens[0], 10).lead("000");
				var month  = parseInt(tokens[1], 10).lead("0");
				var day   = parseInt(tokens[2], 10).lead("0");				
				var out={
					calendar:calendarType,				
					format:"YYYYMMDD",
					input:inp+"",
					range:"day",
					toString:function(){
						return year+"/"+month+"/"+day;
					},
					output:year+"/"+month+"/"+day,					
					year:year,
					month:month,
					day:day					
				}
				return out;
			}	
		},
		MMYYYY:{
			rule:	/^([1-9]|0[1-9]|1[012])\D([-|+]?)([0-9]{1,4})$/,
			value:function(inp,calendarType){
				var tokens = inp.split('/');  //  this.split('\/');
				var day    = 1;
				var month  = parseInt(tokens[0], 10).lead("0");
				var year   = parseInt(tokens[1], 10).lead("000");				
				var out={
					calendar:calendarType,				
					format:"MMYYYY",
					input:inp+"",
					range:"month",
					toString:function(){
						return year+"/"+month+"/"+day;
					},
					output:year+"/"+month+"/"+day,					
					year:year,
					month:month,
					day:day					
				}
				return out;
			}	
		},
		YYYYMM:{
			rule:	/^([-|+]?)([0-9]{1,4})\D([1-9]|0[1-9]|1[012])$/,
			value:function(inp,calendarType){
				var tokens = inp.split('/');  //  this.split('\/');
				var year    = parseInt(tokens[0], 10).lead("000");
				var month  = parseInt(tokens[1], 10).lead("0");
				var day   = 1;				
				var out={
					calendar:calendarType,				
					format:"YYYYMM",
					input:inp+"",
					range:"month",
					toString:function(){
						return year+"/"+month+"/"+day;
					},
					output:year+"/"+month+"/"+day,					
					year:year,
					month:month,
					day:day					
				}
				return out;
			}	
		},		
		YYYY:{
			rule:	/^([-|+]?)([0-9]{1,4})$/,
			value:function(inp,calendarType){
				var year   = parseInt(inp, 10).lead("000");				
				var out={
					calendar:calendarType,
					format:"YYYY",
					input:inp+"",
					range:"year",
					toString:function(){
						return year;
					},
					output:year,					
					year:year,
					month:1,
					day:1					
				}
				return out;
			}	
		},		
	}
	var calendars={
		gregorian:"gregorian",
		persian:"persian",
		arabic:"arabic",
		french:"french",
		indian:"indian",
		mayan:"mayan",
		hebrew:"hebrew",
		bahai:"bahai",
	}
	var calType="gregorian"
	var str=trimAll(this.toLowerCase())
	var	months=		[null,'january','february','march','april','may','june','july','august','september','october','november','december']
	var	months2=	[null,'jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']
	
	for (var m=1;m<=12;m++) {
		str=str.replace(" "+months[m]+" ","/"+m+"/");
		str=str.replace(" "+months2[m]+" ","/"+m+"/");
		str=str.replace(months[m]+" ",m+"/");
		str=str.replace(months2[m]+" ",m+"/");
		str=str.replace(" "+months[m],"/"+m);
		str=str.replace(" "+months2[m],"/"+m);		
	}
	for (var key in calendars){
		var cal=calendars[key]
		var cal_type=str.indexOf(cal)
		if (cal_type>-1){
			calType=cal
			str=str.replace(cal,"")
			str=trimAll(str)
			break;
		}
	}
	for (var key in rules){
		var r=rules[key]
		x=str.match(r.rule) //if(x!=null) console.log(key,x);//return r.value(str)
		if(r.rule.test(str)){
			return r.value(str,calType);
		}
		
	}				
	return null;
}	
