# Date Time



### Abbrev Date

**Syntax:** s = Abbrev Date( datetime, &lt;format&gt; )

**Description:** Returns an abbreviated locale-specific representation of a date-time value.

```jsl

Names Default To Here( 1 );
Abbrev Date( Today() );

```

### As Date

**Syntax:** dt = As Date( datetime )

**Description:** Returns a date-time value marked internally as a date for output purposes.

```jsl

Names Default To Here( 1 );
As Date( Today() );

```

### Date DMY

**Syntax:** z = Date DMY( d, m, y )

**Description:** Converts day, month, and year into a JMP date-time value, which is the number of seconds since 01Jan1904.

```jsl

Names Default To Here( 1 );
As Date( Date DMY( 15, 7, 2000 ) );

```

### Date Difference

**Syntax:** delta = Date Difference( dt1, dt2, intervalName, &lt;alignment="start"&gt; )

**Description:** Returns the difference in intervals of two date/time values. Supported values of intervalName are "Year", "Quarter", "Month", "Week", "Day", "Hour", "Minute", "Second", and "Numeric". An alignment of "Start" includes full or partial intervals, while "Actual" only includes full intervals. An alignment of "Fractional" returns fractional differences, using averages for the duration of "Year", "Quarter", and "Month" intervals.

**Example 1**

```jsl

Names Default To Here( 1 );
Date Difference( Date DMY( 31, 1, 2015 ), Date DMY( 1, 3, 2015 ), "Month", "start" );

```

**Example 2**

```jsl

Names Default To Here( 1 );
Date Difference( Date DMY( 31, 1, 2015 ), Date DMY( 1, 3, 2015 ), "Month", "actual" );

```

**Example 3**

```jsl

Names Default To Here( 1 );
Date Difference( Date DMY( 31, 1, 2015 ), Date DMY( 1, 3, 2015 ), "Month", "fractional" );

```

### Date Increment

**Syntax:** d = Date Increment( datetime, intervalName, &lt;incr=1&gt;, &lt;alignment="start"&gt; )

**Description:** Returns a new date-time value by adding incr number of intervals. Supported values of intervalName are "Year", "Quarter", "Month", "Week", "Day", "Hour", "Minute", "Second", and "Numeric". An alignment of "Start" truncates to the nearest interval prior to adding the increment, while "Actual" retains the full input date/time. An alignment of "Fractional" allows fractional incr values, using averages for the duration of "Year", "Quarter", and "Month" intervals.

**Example 1**

```jsl

Names Default To Here( 1 );
Date Increment( Today(), "Month", 100, "start" );

```

**Example 2**

```jsl

Names Default To Here( 1 );
Date Increment( Today(), "Month", 100, "actual" );

```

**Example 3**

```jsl

Names Default To Here( 1 );
Date Increment( Today(), "Month", 100, "fractional" );

```

### Date MDY

**Syntax:** z = Date MDY( m, d, y )

**Description:** Converts month, day, and year into a JMP date value, which is the number of seconds since 01Jan1904.

```jsl

Names Default To Here( 1 );
As Date( Date MDY( 7, 15, 2000 ) );

```

### Day

**Syntax:** d = Day( datetime )

**Description:** Returns the day of month part of a date-time value, 1 - 31.

```jsl

Names Default To Here( 1 );
Day( Today() );

```

### Day Of Week

**Syntax:** d = Day Of Week( datetime )

**Description:** Returns the day of the week of a date-time value. Sunday = 1, ..., Saturday = 7.

```jsl

Names Default To Here( 1 );
Day Of Week( Today() );

```

### Day Of Year

**Syntax:** d = Day Of Year( datetime )

**Description:** Returns the day of the year of a date-time value. January 1 is 1.

```jsl

Names Default To Here( 1 );
Day Of Year( Today() );

```

### Days In Month

**Syntax:** v = Days In Month(year, month)

**Description:** Return the number of days in a given month.

```jsl

Names Default To Here( 1 );
v = Days In Month( 2016, 2 );

```

### Format

**Syntax:** s = Format( x, formatString, &lt;options&gt; )s = Format( x, "Format Pattern", pattern, &lt;options&gt; )

**Description:** Returns the number in the specified format. Formats include items in the Column Info dialog, such as "Best" and "h:m:s". See Topic Help for other options, including p-value, currency, date and time, and geographic formats.

**Date Time**

```jsl

Names Default To Here( 1 );
Print( Format( Today(), "yyyyQq" ), Format( Today(), "m/d/y h:m" ) );

```

**Format Pattern**

```jsl

Names Default To Here( 1 );
Print( Format( Today(), "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm><:><ss>" ) );

```

**Full Precision**

```jsl

Names Default To Here( 1 );
Show( Format( 88.54, "Best" ), Format( 88.54, "Best", "Full Precision" ) );

```

**Percent, Currency**

```jsl

Names Default To Here( 1 );
pct = Format( 0.123, "Percent", 2 );
amt = Format( 123.4567, "Currency", "EUR", 2 );
result = "Revenue increase: " || amt || " or " || pct || ".";

```

### Format Date

**Syntax:** s = Format( x, formatString, &lt;options&gt; )s = Format( x, "Format Pattern", pattern, &lt;options&gt; )

**Description:** Returns the number in the specified format. Formats include items in the Column Info dialog, such as "Best" and "h:m:s". See Topic Help for other options, including p-value, currency, date and time, and geographic formats.

**Example 1**

```jsl

Names Default To Here( 1 );
Print( Format( Today(), "yyyyQq" ), Format( Today(), "m/d/y h:m" ) );

```

**Example 2**

```jsl

Names Default To Here( 1 );
Print( Format( Today(), "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm><:><ss>" ) );

```

**Example 3**

```jsl

Names Default To Here( 1 );
pct = Format( 0.123, "Percent", 2 );
amt = Format( 123.4567, "Currency", "EUR", 2 );
result = "Revenue increase: " || amt || " or " || pct || ".";

```

### HP Time

**Syntax:** t = HP Time()

**Description:** Returns a High Precision time value in microseconds. Only useful relative to another HP Time() value. The time value represents the number of microseconds since the start of the JMP session.

```jsl

Names Default To Here( 1 );
bt = HP Time();
Open( "$SAMPLE_DATA/Big Class.jmp" );
et = HP Time();
it = et - bt;
Show( it );

```

### Hour

**Syntax:** hr = Hour( datetime, &lt;12&gt; )

**Description:** Returns the hours part of a date-time value, in 12-hour mode (12, 1 - 11) or 24-hour mode (0 - 23).

```jsl

Names Default To Here( 1 );
Hour( Today() );

```

### ISO Year

**Syntax:** yr = ISO Year( datetime )

**Description:** Returns the ISO Year of a date-time value. ISO Years correspond to ISO Weeks; they begin on the Monday of the first week containing at least four days.

```jsl

Names Default To Here( 1 );
ISO Year( Today() );

```

### In Days

**Syntax:** y = In Days( &lt;x=1&gt; )

**Description:** Converts x from a number of days to the equivalent number of seconds.

```jsl

Names Default To Here( 1 );
In Days( 1.5 );

```

### In Hours

**Syntax:** y = In Hours( &lt;x=1&gt; )

**Description:** Converts x from a number of hours to the equivalent number of seconds.

```jsl

Names Default To Here( 1 );
In Hours( 0.5 );

```

### In Minutes

**Syntax:** y = In Minutes( &lt;x=1&gt; )

**Description:** Converts x from a number of minutes to the equivalent number of seconds.

```jsl

Names Default To Here( 1 );
In Minutes( 1 );

```

### In Weeks

**Syntax:** y = In Weeks( &lt;x=1&gt; )

**Description:** Converts x from a number of weeks to the equivalent number of seconds.

```jsl

Names Default To Here( 1 );
In Weeks( 1 );

```

### In Years

**Syntax:** y = In Years( &lt;x=1&gt; )

**Description:** Converts x from a number of years to the equivalent number of seconds.

```jsl

Names Default To Here( 1 );
In Years( 1 );

```

### Informat

**Syntax:** dt = In Format( s, formatString, &lt; &lt;&lt;Use Locale(b=1)&gt;, &lt; &lt;&lt;Restrict &gt; )dt = In Format( s, "Format Pattern", pattern, &lt; &lt;&lt;Use Locale(b=1)&gt; )

**Description:** Parses a string of a given format. If the format is a date-time format, the value is expressed as if surrounded by As Date(), returning the date in ddMonyyyy format. The optional <<Restrict used with the "Best" formatString only allows conversion using integer, decimal, and scientific formats.

**Example 1**

```jsl

Names Default To Here( 1 );
Informat( "07152000", "MMDDYYYY" );

```

**Example 2**

```jsl

Names Default To Here( 1 );
Informat( "07.15.2000", "Format Pattern", "<MM>.<DD>.<YYYY>" );

```

**Example 3**

```jsl

Names Default To Here( 1 );
Informat( "86.8287° W", "Longitude DDD" );

```

**Example 4**

```jsl

Names Default To Here( 1 );
Informat( "123.45%", "Percent" );

```

**Example 5**

```jsl

Names Default To Here( 1 );
Show(
	Informat( "1.23e4", "Best" ),
	Informat( "1.23e4", "Best", <<Restrict ),
	Informat( "1989-10-04", "Best" ),
	Informat( "1989-10-04", "Best", <<Restrict )
);

```

### Is Leap Year

**Syntax:** v = Is Leap Year(year)

**Description:** Return whether a given year is a leap year.

```jsl

Names Default To Here( 1 );
v = Is Leap Year( 2016 );

```

### Long Date

**Syntax:** s = Long Date( datetime, &lt;format&gt; )

**Description:** Returns a long locale-specific representation of a date-time value.

```jsl

Names Default To Here( 1 );
Long Date( Today() );

```

### MDYHMS

**Syntax:** s = MDYHMS( datetime, &lt;format&gt; )

**Description:** Returns a representation of a date-time value with the ordering: month, day, year, hour, minute, second.

```jsl

Names Default To Here( 1 );
MDYHMS( Today() );

```

### Minute

**Syntax:** min = Minute( datetime )

**Description:** Returns the minutes part of a date-time value, 0 - 59.

```jsl

Names Default To Here( 1 );
Minute( Today() );

```

### Month

**Syntax:** mon = Month( datetime )

**Description:** Returns the month part of a date-time value, 1 - 12.

```jsl

Names Default To Here( 1 );
Month( Today() );

```

### Nth Day Of Week in the Month

**Syntax:** n = Nth Day Of Week in the Month( datetime )

**Description:** Returns an integer that represents the number of instances of the day of the week of the datetime argument that have occurred in the month. For example, November 28, 2019 is the 4th Thursday of the month, so the function returns 4.

```jsl

Names Default To Here( 1 );
Nth Day Of Week in the Month( Date MDY( 11, 28, 2019 ) );

```

### Parse Date

**Syntax:** dt = In Format( s, formatString, &lt; &lt;&lt;Use Locale(b=1)&gt;, &lt; &lt;&lt;Restrict &gt; )dt = In Format( s, "Format Pattern", pattern, &lt; &lt;&lt;Use Locale(b=1)&gt; )

**Description:** Parses a string of a given format. If the format is a date-time format, the value is expressed as if surrounded by As Date(), returning the date in ddMonyyyy format. The optional <<Restrict used with the "Best" formatString only allows conversion using integer, decimal, and scientific formats.

**Example 1**

```jsl

Names Default To Here( 1 );
Informat( "07152000", "MMDDYYYY" );

```

**Example 2**

```jsl

Names Default To Here( 1 );
Informat( "07.15.2000", "Format Pattern", "<MM>.<DD>.<YYYY>" );

```

**Example 3**

```jsl

Names Default To Here( 1 );
Informat( "86.8287° W", "Longitude DDD" );

```

**Example 4**

```jsl

Names Default To Here( 1 );
Informat( "123.45%", "Percent" );

```

**Example 5**

```jsl

Names Default To Here( 1 );
Show(
	Informat( "1.23e4", "Best" ),
	Informat( "1.23e4", "Best", <<Restrict ),
	Informat( "1989-10-04", "Best" ),
	Informat( "1989-10-04", "Best", <<Restrict )
);

```

### Quarter

**Syntax:** q = Quarter( datetime )

**Description:** Returns the quarter part of a date-time value, 1 - 4.

```jsl

Names Default To Here( 1 );
Quarter( Today() );

```

### Second

**Syntax:** sec = Second( datetime )

**Description:** Returns the seconds part of a date-time value, including any fractional part, 0 - 60 exclusive.

```jsl

Names Default To Here( 1 );
Second( Today() );

```

### Short Date

**Syntax:** s = Short Date( datetime, &lt;format&gt; )

**Description:** Returns a numeric (MM/DD/YYYY) locale-specific representation of a date-time value.

```jsl

Names Default To Here( 1 );
Short Date( Today() );

```

### Tick Seconds

**Syntax:** t = Tick Seconds()

**Description:** Returns a time value in seconds, usually accurate to at least 1/60 of a second (a "tick"), depending on the computer. Only useful relative to another Tick Seconds() value.

```jsl

Names Default To Here( 1 );
t1 = Tick Seconds();
Open( "$SAMPLE_DATA/Big Class.jmp" );
t2 = Tick Seconds();
Round( t2 - t1, 3 );

```

### Time Of Day

**Syntax:** sec = Time Of Day( datetime )

**Description:** Returns the time part of a date-time value, including any fractional seconds.

```jsl

Names Default To Here( 1 );
Format( Time Of Day( Today() ), "h:m:s" );

```

### Today

**Syntax:** dt = Today()

**Description:** Returns the date-time value of the current moment.

```jsl

Names Default To Here( 1 );
As Date( Today() );

```

### Week Of Year

**Syntax:** d = Week Of Year( datetime, &lt;rule=1&gt; )

**Description:** Returns the week of the year containing a date-time value using one of three rules. By default (rule 1), weeks start on Sunday with the first Sunday of the year being week 2. Week 1 will be a partial week or empty (as in 2006). For rule 2, the first Sunday is week 1, with previous days being week 0. For rule 3, the ISO week number is returned, where weeks start on Monday and week 1 is the first week of the year with four days in that year. With ISO weeks, it&apos;s possible for the first or last three days of the year to belong to the neighboring year&apos;s week number.

**Example 1**

```jsl

Names Default To Here( 1 );
Week Of Year( Today() );

```

**Example 2**

```jsl

Names Default To Here( 1 );
Show(
	Week Of Year( 01jan2012, 1 ),
	Week Of Year( 01jan2012, 2 ),
	Week Of Year( 01jan2012, 3 )
);

```

### Year

**Syntax:** yr = Year( datetime )

**Description:** Returns the year part of a date-time value.

```jsl

Names Default To Here( 1 );
Year( Today() );

```

