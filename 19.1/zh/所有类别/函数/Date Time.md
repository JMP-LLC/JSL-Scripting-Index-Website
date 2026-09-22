# Date Time



### Abbrev Date

**语法:** s = Abbrev Date( datetime, &lt;format&gt; )

**说明:** 以特定于语言/区域的简短格式返回日期时间值。

**JMP添加的版本:** 早于版本 14

```jsl

Abbrev Date( Today() );

```

### As Date

**语法:** dt = As Date( datetime )

**说明:** 返回内部标为日期的日期时间值用于输出。

**JMP添加的版本:** 早于版本 14

```jsl

As Date( Today() );

```

### Date DMY

**语法:** z = Date DMY( d, m, y )

**说明:** 将日、月、年格式的日期转换为 JMP 的日期时间值，即从 1904 年 1 月 1 日开始计算得出的秒数。

**JMP添加的版本:** 早于版本 14

```jsl

As Date( Date DMY( 15, 7, 2000 ) );

```

### Date Difference

**语法:** delta = Date Difference( dt1, dt2, intervalName, &lt;alignment="start"&gt; )

**说明:** Devuelve la diferencia en intervalos de dos valores de fecha/hora. Los valores compatibles de intervalName son "Año", "Trimestre", "Mes", "Semana", "Día", "Hora", "Minuto", "Segundo" y "Numérico". Una alignment de "Start" incluye intervalos parciales o completos, mientras que "Actual" solo incluye intervalos completos. Una alignment de "Fractional" devuelve diferencias fraccionales y utiliza medias para la duración de los intervalos de "Año", "Trimestre" y "Mes".

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Date Difference( Date DMY( 31, 1, 2015 ), Date DMY( 1, 3, 2015 ), "Month", "start" );

```

**示例 2**

```jsl

Date Difference( Date DMY( 31, 1, 2015 ), Date DMY( 1, 3, 2015 ), "Month", "actual" );

```

**示例 3**

```jsl

Date Difference( Date DMY( 31, 1, 2015 ), Date DMY( 1, 3, 2015 ), "Month", "fractional" );

```

### Date Increment

**语法:** d = Date Increment( datetime, intervalName, &lt;incr=1&gt;, &lt;alignment="start"&gt; )

**说明:** Devuelve un valor de fecha y hora agregando un número de intervalos incr. Los valores compatibles de intervalName son "Año", "Trimestre", "Mes", "Semana", "Día", "Hora", "Minuto", "Segundo" y "Numérico". Una alignment de "Start" trunca el intervalo más cercano antes de agregar el incremento, mientras que "Actual" retiene la fecha y hora de entrada completa. Una alignment de "Fractional" permite valores incr fraccionales y utiliza medias para la duración de los intervalos "Año", "Trimestre" y "Mes".

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Date Increment( Today(), "Month", 100, "start" );

```

**示例 2**

```jsl

Date Increment( Today(), "Month", 100, "actual" );

```

**示例 3**

```jsl

Date Increment( Today(), "Month", 100, "fractional" );

```

### Date MDY

**语法:** z = Date MDY( m, d, y )

**说明:** 将月、日、年格式的日期转换为 JMP 的日期值，即从 1904 年 1 月 1 日开始计算得出的秒数。

**JMP添加的版本:** 早于版本 14

```jsl

As Date( Date MDY( 7, 15, 2000 ) );

```

### Day

**语法:** d = Day( datetime )

**说明:** 返回日期时间值所对应的月中某天（1 - 31）。

**JMP添加的版本:** 早于版本 14

```jsl

Day( Today() );

```

### Day Of Week

**语法:** d = Day Of Week( datetime )

**说明:** 返回日期时间值所对应的周几。周日 = 1、...、周六 = 7。

**JMP添加的版本:** 早于版本 14

```jsl

Day Of Week( Today() );

```

### Day Of Year

**语法:** d = Day Of Year( datetime )

**说明:** 返回日期时间值所对应的年中第几天。1 月 1 日为 1。

**JMP添加的版本:** 早于版本 14

```jsl

Day Of Year( Today() );

```

### Days In Month

**语法:** v = Days In Month(year, month)

**说明:** 返回指定月份中的天数。

**JMP添加的版本:** 15

```jsl

v = Days In Month( 2016, 2 );

```

### Format

**语法:** s = Format( x, formatString, &lt;options&gt; ) s = Format( x, "Format Pattern", pattern, &lt;options&gt; )

**说明:** 以指定的格式返回数字。格式包括“列信息”对话框中的项，例如“最佳”和“h:m:s”。请参见“主题帮助”获取其他选项的信息，包括 p 值、货币、日期和时间以及地理格式。

**JMP添加的版本:** 早于版本 14

#### 全精度

```jsl

Show( Format( 88.54, "Best" ), Format( 88.54, "Best", "Full Precision" ) );

```

#### 日期时间

```jsl

Print( Format( Today(), "yyyyQq" ), Format( Today(), "m/d/y h:m" ) );

```

#### 格式模式

```jsl

Print( Format( Today(), "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm><:><ss>" ) );

```

#### 百分比，货币

```jsl

pct = Format( 0.123, "Percent", 2 );amt = Format( 123.4567, "Currency", "EUR", 2 );result = "Revenue increase: " || amt || " or " || pct || ".";

```

### Format Date

**语法:** s = Format( x, formatString, &lt;options&gt; ) s = Format( x, "Format Pattern", pattern, &lt;options&gt; )

**说明:** 以指定的格式返回数字。格式包括“列信息”对话框中的项，例如“最佳”和“h:m:s”。请参见“主题帮助”获取其他选项的信息，包括 p 值、货币、日期和时间以及地理格式。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Print( Format( Today(), "yyyyQq" ), Format( Today(), "m/d/y h:m" ) );

```

**示例 2**

```jsl

Print( Format( Today(), "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm><:><ss>" ) );

```

**示例 3**

```jsl

pct = Format( 0.123, "Percent", 2 );amt = Format( 123.4567, "Currency", "EUR", 2 );result = "Revenue increase: " || amt || " or " || pct || ".";

```

### HP Time

**语法:** t = HP Time()

**说明:** 以毫秒为单位返回高精度时间值。仅与另一相对的 HP Time() 值结合使用。时间值表示自 JMP 会话开始所经历的毫秒数。

**JMP添加的版本:** 早于版本 14

```jsl

bt = HP Time();Open( "$SAMPLE_DATA/Big Class.jmp" );et = HP Time();it = et - bt;Show( it );

```

### Hour

**语法:** hr = Hour( datetime, &lt;12&gt; )

**说明:** 返回日期时间值所对应的小时，12 小时制（12，1 - 11）或 24 小时制（0 - 23）。

**JMP添加的版本:** 早于版本 14

```jsl

Hour( Today() );

```

### ISO Year

**语法:** yr = ISO Year( datetime )

**说明:** 返回日期时间值的 ISO 年。ISO 年对应于 ISO 周；它们从包含至少四天的第一周的星期一开始。

**JMP添加的版本:** 16

```jsl

ISO Year( Today() );

```

### In Days

**语法:** y = In Days( &lt;x=1&gt; )

**说明:** 将 x 从天数转换为同等的秒数。

**JMP添加的版本:** 早于版本 14

```jsl

In Days( 1.5 );

```

### In Hours

**语法:** y = In Hours( &lt;x=1&gt; )

**说明:** 将 x 从小时数转换为同等的秒数。

**JMP添加的版本:** 早于版本 14

```jsl

In Hours( 0.5 );

```

### In Minutes

**语法:** y = In Minutes( &lt;x=1&gt; )

**说明:** 将 x 从分钟数转换为同等的秒数。

**JMP添加的版本:** 早于版本 14

```jsl

In Minutes( 1 );

```

### In Weeks

**语法:** y = In Weeks( &lt;x=1&gt; )

**说明:** 将 x 从周数转换为同等的秒数。

**JMP添加的版本:** 早于版本 14

```jsl

In Weeks( 1 );

```

### In Years

**语法:** y = In Years( &lt;x=1&gt; )

**说明:** 将 x 从年数转换为同等的秒数。

**JMP添加的版本:** 早于版本 14

```jsl

In Years( 1 );

```

### Informat

**语法:** dt = In Format( s, formatString, &lt; &lt;&lt;Use Locale(b=1)&gt;, &lt; &lt;&lt;Restrict &gt; ) dt = In Format( s, "Format Pattern", pattern, &lt; &lt;&lt;Use Locale(b=1)&gt; )

**说明:** 解析给定格式的字符串。若格式是日期时间格式，则该值表示为如同使用 As Date() 括起来，采用 ddMonyyyy 格式返回日期。与“最佳”formatString 一起使用的可选 <<Restrict 仅允许使用整数、小数和科学记数法格式进行转换。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Informat( "07152000", "MMDDYYYY" );

```

**示例 2**

```jsl

Informat( "07.15.2000", "Format Pattern", "<MM>.<DD>.<YYYY>" );

```

**示例 3**

```jsl

Informat( "86.8287° W", "Longitude DDD" );

```

**示例 4**

```jsl

Informat( "123.45%", "Percent" );

```

**示例 5**

```jsl

Show(	Informat( "1.23e4", "Best" ),	Informat( "1.23e4", "Best", <<Restrict ),	Informat( "1989-10-04", "Best" ),	Informat( "1989-10-04", "Best", <<Restrict ));

```

### Is Leap Year

**语法:** v = Is Leap Year(year)

**说明:** 返回指定年份是否为闰年。

**JMP添加的版本:** 15

```jsl

v = Is Leap Year( 2016 );

```

### Long Date

**语法:** s = Long Date( datetime, &lt;format&gt; )

**说明:** 以特定于语言/区域的长格式返回日期时间值。

**JMP添加的版本:** 早于版本 14

```jsl

Long Date( Today() );

```

### MDYHMS

**语法:** s = MDYHMS( datetime, &lt;format&gt; )

**说明:** 以如下顺序返回日期时间值: 月、日、年、时、分、秒。

**JMP添加的版本:** 早于版本 14

```jsl

MDYHMS( Today() );

```

### Minute

**语法:** min = Minute( datetime )

**说明:** 返回日期时间值所对应的分钟（0 - 59）。

**JMP添加的版本:** 早于版本 14

```jsl

Minute( Today() );

```

### Month

**语法:** mon = Month( datetime )

**说明:** 返回日期时间值所对应的月份（1 - 12）。

**JMP添加的版本:** 早于版本 14

```jsl

Month( Today() );

```

### Nth Day Of Week in the Month

**语法:** n = Nth Day Of Week in the Month( datetime )

**说明:** 返回一个整数，该整数表示 datetime 参数所代表的星期几在该月中出现的实例数。例如，2019 年 11 月 28 日是该月的第 4 个星期四，因此该函数返回 4。

**JMP添加的版本:** 16

```jsl

Nth Day Of Week in the Month( Date MDY( 11, 28, 2019 ) );

```

### Parse Date

**语法:** dt = In Format( s, formatString, &lt; &lt;&lt;Use Locale(b=1)&gt;, &lt; &lt;&lt;Restrict &gt; ) dt = In Format( s, "Format Pattern", pattern, &lt; &lt;&lt;Use Locale(b=1)&gt; )

**说明:** 解析给定格式的字符串。若格式是日期时间格式，则该值表示为如同使用 As Date() 括起来，采用 ddMonyyyy 格式返回日期。与“最佳”formatString 一起使用的可选 <<Restrict 仅允许使用整数、小数和科学记数法格式进行转换。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Informat( "07152000", "MMDDYYYY" );

```

**示例 2**

```jsl

Informat( "07.15.2000", "Format Pattern", "<MM>.<DD>.<YYYY>" );

```

**示例 3**

```jsl

Informat( "86.8287° W", "Longitude DDD" );

```

**示例 4**

```jsl

Informat( "123.45%", "Percent" );

```

**示例 5**

```jsl

Show(	Informat( "1.23e4", "Best" ),	Informat( "1.23e4", "Best", <<Restrict ),	Informat( "1989-10-04", "Best" ),	Informat( "1989-10-04", "Best", <<Restrict ));

```

### Quarter

**语法:** q = Quarter( datetime )

**说明:** 返回日期时间值的季度部分，1 - 4。

**JMP添加的版本:** 早于版本 14

```jsl

Quarter( Today() );

```

### Second

**语法:** sec = Second( datetime )

**说明:** 返回日期时间值所对应的秒，包含任何小数部分，0 和 60 除外。

**JMP添加的版本:** 早于版本 14

```jsl

Second( Today() );

```

### Short Date

**语法:** s = Short Date( datetime, &lt;format&gt; )

**说明:** 返回日期时间值的特定于语言/区域的数字 (MM/DD/YYYY) 表示。

**JMP添加的版本:** 早于版本 14

```jsl

Short Date( Today() );

```

### Tick Seconds

**语法:** t = Tick Seconds()

**说明:** 以秒为单位返回时间值，通常至少精确到 1/60 秒（“tick”），具体因计算机而异。仅与另一相对的 Tick Seconds() 值结合使用。

**JMP添加的版本:** 早于版本 14

```jsl

t1 = Tick Seconds();Open( "$SAMPLE_DATA/Big Class.jmp" );t2 = Tick Seconds();Round( t2 - t1, 3 );

```

### Time Of Day

**语法:** sec = Time Of Day( datetime )

**说明:** 返回日期时间值所对应的时间，包含任何小数形式的秒。

**JMP添加的版本:** 早于版本 14

```jsl

Format( Time Of Day( Today() ), "h:m:s" );

```

### Today

**语法:** dt = Today()

**说明:** 返回当前时刻的日期时间值。

**JMP添加的版本:** 早于版本 14

```jsl

As Date( Today() );

```

### Week Of Year

**语法:** d = Week Of Year( datetime, &lt;rule=1&gt; )

**说明:** 使用三个规则之一返回日期时间值所对应的年中第几周。默认情况下（规则 1），周从周日开始计算，每年的第一个周日为第 2 周的开始。第 1 周可能不完整或者为空（如 2006 年）。对于规则 2，第一个周日为第 1 周的开始，前面几天为第 0 周。对于规则 3，返回 ISO 周数，其中周从周一开始计算，第 1 周为包含该年四天的第一周。使用 ISO 周数，一年的前三天或后四天有可能属于前一年或后一年的周数。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Week Of Year( Today() );

```

**示例 2**

```jsl

Show(	Week Of Year( 01jan2012, 1 ),	Week Of Year( 01jan2012, 2 ),	Week Of Year( 01jan2012, 3 ));

```

### Year

**语法:** yr = Year( datetime )

**说明:** 返回日期时间值所对应的年份。

**JMP添加的版本:** 早于版本 14

```jsl

Year( Today() );

```

