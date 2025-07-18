# Date Time



### Abbrev Date

**Syntax:** s = Abbrev Date( datetime, &lt;format&gt; )

**Beschreibung:** Gibt die kurze Darstellung eines Datum/Uhrzeit-Werts entsprechend dem Gebietsschema zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Abbrev Date( Today() );

```

### As Date

**Syntax:** dt = As Date( datetime )

**Beschreibung:** Gibt einen Datum/Uhrzeit-Wert zurück, der intern als Datum zu Ausgabezwecken gekennzeichnet ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

As Date( Today() );

```

### Date DMY

**Syntax:** z = Date DMY( d, m, y )

**Beschreibung:** Wandelt Tag, Monat und Jahr in einen JMP-Datum/Uhrzeit-Wert um, das ist die Anzahl Sekunden seit dem 01. Jan. 1904.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

As Date( Date DMY( 15, 7, 2000 ) );

```

### Date Difference

**Syntax:** delta = Date Difference( dt1, dt2, intervalName, &lt;alignment="start"&gt; )

**Beschreibung:** Gibt die Differenz in Intervallen von zwei Datums-/Uhrzeitwerten zurück. Unterstützte Werte von intervalName sind „Jahr“, „Quartal“, „Monat“, „Woche“, „Tag“, „Stunde“, „Minute“, „Sekunde“ und „Numerisch“. alignment = "Start" schließt vollständige oder partielle Intervalle ein, während "Actual" nur vollständige Intervalle einschließt. alignment = "Fractional" gibt fraktionelle Differenzen zurück, wobei für die Dauer der Intervalle „Jahr“, „Quartal“ und „Monat“ Mittelwerte verwendet werden.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

Date Difference( Date DMY( 31, 1, 2015 ), Date DMY( 1, 3, 2015 ), "Month", "start" );

```

#### Beispiel 2

```jsl

Date Difference( Date DMY( 31, 1, 2015 ), Date DMY( 1, 3, 2015 ), "Month", "actual" );

```

#### Beispiel 3

```jsl

Date Difference( Date DMY( 31, 1, 2015 ), Date DMY( 1, 3, 2015 ), "Month", "fractional" );

```

### Date Increment

**Syntax:** d = Date Increment( datetime, intervalName, &lt;incr=1&gt;, &lt;alignment="start"&gt; )

**Beschreibung:** Gibt einen neuen Datums-/Uhrzeitwert zurück, indem incr Intervalle hinzugefügt werden. Unterstützte Werte von intervalName sind „Jahr“, „Quartal“, „Monat“, „Woche“, „Tag“, „Stunde“, „Minute“, „Sekunde“ und „Numerisch“. alignment = "Start" schneidet das nächste Intervall vor dem Hinzufügen des Inkrements ab, während "Actual" die vollständige Eingabe für Datum/Uhrzeit beibehält. alignment = "Fractional" gestattet incr fraktionelle Werte, wobei für die Dauer der Intervalle „Jahr“, „Quartal“ und „Monat“ Mittelwerte verwendet werden.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

Date Increment( Today(), "Month", 100, "start" );

```

#### Beispiel 2

```jsl

Date Increment( Today(), "Month", 100, "actual" );

```

#### Beispiel 3

```jsl

Date Increment( Today(), "Month", 100, "fractional" );

```

### Date MDY

**Syntax:** z = Date MDY( m, d, y )

**Beschreibung:** Wandelt Monat, Tag und Jahr in einen JMP-Datumswert um, das ist die Anzahl Sekunden seit dem 01. Jan. 1904.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

As Date( Date MDY( 7, 15, 2000 ) );

```

### Day

**Syntax:** d = Day( datetime )

**Beschreibung:** Gibt den Anteil für den Tag des Monats eines Datum/Uhrzeit-Werts zurück, 1 bis 31.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Day( Today() );

```

### Day Of Week

**Syntax:** d = Day Of Week( datetime )

**Beschreibung:** Gibt den Wochentag eines Datum/Uhrzeit-Werts zurück. Sonntag = 1, …, Samstag = 7.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Day Of Week( Today() );

```

### Day Of Year

**Syntax:** d = Day Of Year( datetime )

**Beschreibung:** Gibt den Tag des Jahres eines Datum/Uhrzeit-Werts zurück. Der 1. Januar ist 1.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Day Of Year( Today() );

```

### Days In Month

**Syntax:** v = Days In Month(year, month)

**Beschreibung:** Die Anzahl der Tage in einem vorgegebenen Monat zurückgeben.

**JMP Version hinzugefügt:** 15

```jsl

v = Days In Month( 2016, 2 );

```

### Format

**Syntax:** s = Format( x, formatString, &lt;options&gt; )s = Format( x, "Format Pattern", pattern, &lt;options&gt; )

**Beschreibung:** Gibt die Zahl im angegebenen Format zurück. Formate umfassen Elemente im Dialogfeld „Spalteninfo“ wie „Bestes“ und „h:m:s“. Weitere Optionen wie p-Wert, Währung, Datum und Uhrzeit und geografische Formate finden Sie in den Hilfethemen.

**JMP Version hinzugefügt:** Vor Version 14

#### Datum/Uhrzeit

```jsl

Print( Format( Today(), "yyyyQq" ), Format( Today(), "m/d/y h:m" ) );

```

#### Formatmuster

```jsl

Print( Format( Today(), "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm><:><ss>" ) );

```

#### Prozent, Währung

```jsl

pct = Format( 0.123, "Percent", 2 );
amt = Format( 123.4567, "Currency", "EUR", 2 );
result = "Revenue increase: " || amt || " or " || pct || ".";

```

#### Volle Präzision

```jsl

Show( Format( 88.54, "Best" ), Format( 88.54, "Best", "Full Precision" ) );

```

### Format Date

**Syntax:** s = Format( x, formatString, &lt;options&gt; )s = Format( x, "Format Pattern", pattern, &lt;options&gt; )

**Beschreibung:** Gibt die Zahl im angegebenen Format zurück. Formate umfassen Elemente im Dialogfeld „Spalteninfo“ wie „Bestes“ und „h:m:s“. Weitere Optionen wie p-Wert, Währung, Datum und Uhrzeit und geografische Formate finden Sie in den Hilfethemen.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

Print( Format( Today(), "yyyyQq" ), Format( Today(), "m/d/y h:m" ) );

```

#### Beispiel 2

```jsl

Print( Format( Today(), "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm><:><ss>" ) );

```

#### Beispiel 3

```jsl

pct = Format( 0.123, "Percent", 2 );
amt = Format( 123.4567, "Currency", "EUR", 2 );
result = "Revenue increase: " || amt || " or " || pct || ".";

```

### HP Time

**Syntax:** t = HP Time()

**Beschreibung:** Gibt einen hochpräzisen Zeitwert in Mikrosekunden zurück. Nur nützlich im Verhältnis zu einem anderen hochpräzisen Wert Time(). Der Zeitwert stellt die Anzahl von Mikrosekunden seit dem Start der JMP-Sitzung dar.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

bt = HP Time();
Open( "$SAMPLE_DATA/Big Class.jmp" );
et = HP Time();
it = et - bt;
Show( it );

```

### Hour

**Syntax:** hr = Hour( datetime, &lt;12&gt; )

**Beschreibung:** Gibt den Stundenanteil eines Datum/Uhrzeit-Werts zurück, im 12-Stundenmodus (12, 1 bis 11) oder im 24-Stundenmodus (0 bis 23).

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Hour( Today() );

```

### ISO Year

**Syntax:** yr = ISO Year( datetime )

**Beschreibung:** Gibt das ISO-Jahr des Datum/Uhrzeit-Werts zurück. ISO-Jahre entsprechen den ISO-Wochen. Sie beginnen am Montag der ersten Woche mit mindestens vier Tagen.

**JMP Version hinzugefügt:** 16

```jsl

ISO Year( Today() );

```

### In Days

**Syntax:** y = In Days( &lt;x=1&gt; )

**Beschreibung:** Wandelt x von einer Anzahl von Tagen in die entsprechende Anzahl Sekunden um.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

In Days( 1.5 );

```

### In Hours

**Syntax:** y = In Hours( &lt;x=1&gt; )

**Beschreibung:** Wandelt x von einer Anzahl von Stunden in die entsprechende Anzahl Sekunden um.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

In Hours( 0.5 );

```

### In Minutes

**Syntax:** y = In Minutes( &lt;x=1&gt; )

**Beschreibung:** Wandelt x von einer Anzahl von Minuten in die entsprechende Anzahl Sekunden um.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

In Minutes( 1 );

```

### In Weeks

**Syntax:** y = In Weeks( &lt;x=1&gt; )

**Beschreibung:** Wandelt x von einer Anzahl von Wochen in die entsprechende Anzahl Sekunden um.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

In Weeks( 1 );

```

### In Years

**Syntax:** y = In Years( &lt;x=1&gt; )

**Beschreibung:** Wandelt x von einer Anzahl von Jahren in die entsprechende Anzahl Sekunden um.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

In Years( 1 );

```

### Informat

**Syntax:** dt = In Format( s, formatString, &lt; &lt;&lt;Use Locale(b=1)&gt;, &lt; &lt;&lt;Restrict &gt; )dt = In Format( s, "Format Pattern", pattern, &lt; &lt;&lt;Use Locale(b=1)&gt; )

**Beschreibung:** Analysiert eine Zeichenkette eines vorgegebenen Formats. Wenn das Format ein Datum/Uhrzeit-Format ist, werden der Wert als Ausdruck As Date() und das Datum im Format ttMonjjjj zurückgegeben. Das optionale Argument <<Restrict, das mit dem „Besten“ formatString verwendet wird, gestattet die Konvertierung nur mit ganzen Zahlen, Dezimalzahlen und wissenschaftlichen Formaten.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

Informat( "07152000", "MMDDYYYY" );

```

#### Beispiel 2

```jsl

Informat( "07.15.2000", "Format Pattern", "<MM>.<DD>.<YYYY>" );

```

#### Beispiel 3

```jsl

Informat( "86.8287° W", "Longitude DDD" );

```

#### Beispiel 4

```jsl

Informat( "123.45%", "Percent" );

```

#### Beispiel 5

```jsl

Show(
	Informat( "1.23e4", "Best" ),
	Informat( "1.23e4", "Best", <<Restrict ),
	Informat( "1989-10-04", "Best" ),
	Informat( "1989-10-04", "Best", <<Restrict )
);

```

### Is Leap Year

**Syntax:** v = Is Leap Year(year)

**Beschreibung:** Zurückgeben, ob ein vorgegebenes Jahr ein Schaltjahr ist.

**JMP Version hinzugefügt:** 15

```jsl

v = Is Leap Year( 2016 );

```

### Long Date

**Syntax:** s = Long Date( datetime, &lt;format&gt; )

**Beschreibung:** Gibt die lange Darstellung eines Datum/Uhrzeit-Werts entsprechend dem Gebietsschema zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Long Date( Today() );

```

### MDYHMS

**Syntax:** s = MDYHMS( datetime, &lt;format&gt; )

**Beschreibung:** Gibt eine Darstellung eines Datum/Uhrzeit-Werts in folgender Reihenfolge zurück: Monat, Tag, Jahr, Stunde, Minute, Sekunde.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

MDYHMS( Today() );

```

### Minute

**Syntax:** min = Minute( datetime )

**Beschreibung:** Gibt den Minutenanteil eines Datum/Uhrzeit-Werts zurück, 0 bis 59.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Minute( Today() );

```

### Month

**Syntax:** mon = Month( datetime )

**Beschreibung:** Gibt den Monatsanteil eines Datum/Uhrzeit-Werts zurück, 1 bis 12.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Month( Today() );

```

### Nth Day Of Week in the Month

**Syntax:** n = Nth Day Of Week in the Month( datetime )

**Beschreibung:** Gibt eine ganze Zahl zurück, die die Anzahl von Instanzen des Wochentags des Datum/Uhrzeit-Arguments darstellt, die in dem Monat aufgetreten sind. Beispiel: Der 28. November 2019 ist der vierte Donnerstag des Monats, somit gibt die Funktion 4 aus.

**JMP Version hinzugefügt:** 16

```jsl

Nth Day Of Week in the Month( Date MDY( 11, 28, 2019 ) );

```

### Parse Date

**Syntax:** dt = In Format( s, formatString, &lt; &lt;&lt;Use Locale(b=1)&gt;, &lt; &lt;&lt;Restrict &gt; )dt = In Format( s, "Format Pattern", pattern, &lt; &lt;&lt;Use Locale(b=1)&gt; )

**Beschreibung:** Analysiert eine Zeichenkette eines vorgegebenen Formats. Wenn das Format ein Datum/Uhrzeit-Format ist, werden der Wert als Ausdruck As Date() und das Datum im Format ttMonjjjj zurückgegeben. Das optionale Argument <<Restrict, das mit dem „Besten“ formatString verwendet wird, gestattet die Konvertierung nur mit ganzen Zahlen, Dezimalzahlen und wissenschaftlichen Formaten.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

Informat( "07152000", "MMDDYYYY" );

```

#### Beispiel 2

```jsl

Informat( "07.15.2000", "Format Pattern", "<MM>.<DD>.<YYYY>" );

```

#### Beispiel 3

```jsl

Informat( "86.8287° W", "Longitude DDD" );

```

#### Beispiel 4

```jsl

Informat( "123.45%", "Percent" );

```

#### Beispiel 5

```jsl

Show(
	Informat( "1.23e4", "Best" ),
	Informat( "1.23e4", "Best", <<Restrict ),
	Informat( "1989-10-04", "Best" ),
	Informat( "1989-10-04", "Best", <<Restrict )
);

```

### Quarter

**Syntax:** q = Quarter( datetime )

**Beschreibung:** Gibt das Quartal eines Datum/Uhrzeit-Werts zurück, 1 bis 4.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Quarter( Today() );

```

### Second

**Syntax:** sec = Second( datetime )

**Beschreibung:** Gibt den Sekundenanteil eines Datum/Uhrzeit-Werts zurück, einschließlich Bruchteile, 0 bis 60 ausschließlich.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Second( Today() );

```

### Short Date

**Syntax:** s = Short Date( datetime, &lt;format&gt; )

**Beschreibung:** Gibt die numerische (MM/TT/JJJJ) Darstellung eines Datum/Uhrzeit-Werts entsprechend dem Gebietsschema zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Short Date( Today() );

```

### Tick Seconds

**Syntax:** t = Tick Seconds()

**Beschreibung:** Gibt einen Zeitwert in Sekunden zurück, üblicherweise bis auf mindestens 1/60 einer Sekunde genau (ein „Teilstrich“), je nach Computer. Nur sinnvoll in Relation zu einem anderen Wert Tick Seconds().

**JMP Version hinzugefügt:** Vor Version 14

```jsl

t1 = Tick Seconds();
Open( "$SAMPLE_DATA/Big Class.jmp" );
t2 = Tick Seconds();
Round( t2 - t1, 3 );

```

### Time Of Day

**Syntax:** sec = Time Of Day( datetime )

**Beschreibung:** Gibt den Uhrzeitanteil eines Datum/Uhrzeit-Werts zurück, einschließlich Bruchteile von Sekunden.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Format( Time Of Day( Today() ), "h:m:s" );

```

### Today

**Syntax:** dt = Today()

**Beschreibung:** Gibt den Datum/Uhrzeit-Wert des aktuellen Zeitpunkts zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

As Date( Today() );

```

### Week Of Year

**Syntax:** d = Week Of Year( datetime, &lt;rule=1&gt; )

**Beschreibung:** Gibt die Woche des Jahres eines Datum/Uhrzeit-Werts mithilfe einer von drei Regeln zurück. Standardmäßig (Regel 1) beginnen die Wochen mit dem Sonntag, wobei der erste Sonntag des Jahres Woche 2 ist. Woche 1 ist eine Teilwoche oder leer (wie im Jahr 2006). Bei Regel 2 ist der erste Sonntag Woche 1 und die vorherigen Tage sind Woche 0. Bei Regel 3 wird die ISO-Wochennummer zurückgegeben. Dabei beginnen die Wochen mit dem Montag und Woche 1 ist die erste Woche des Jahres mit vier Tagen in dem Jahr. Bei ISO-Wochen ist es möglich, dass die ersten oder letzten drei Tage des Jahres zur Wochennummer des nachfolgenden bzw. vorherigen Jahres gehören.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

Week Of Year( Today() );

```

#### Beispiel 2

```jsl

Show(
	Week Of Year( 01jan2012, 1 ),
	Week Of Year( 01jan2012, 2 ),
	Week Of Year( 01jan2012, 3 )
);

```

### Year

**Syntax:** yr = Year( datetime )

**Beschreibung:** Gibt den Jahresanteil eines Datum/Uhrzeit-Werts zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Year( Today() );

```

