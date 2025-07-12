# Date Time



## 関数

### Abbrev Date

**構文:** s = Abbrev Date( datetime, <format> )

**説明:** 日付時間値を、OSで指定されているロケールの省略形式で戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Abbrev Date( Today() );

```

### As Date

**構文:** dt = As Date( datetime )

**説明:** 結果出力用として内部的に保持されている形式で、日付時間値を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
As Date( Today() );

```

### Date DMY

**構文:** z = Date DMY( d, m, y )

**説明:** 日(d)、月(m)、年(y)を、JMP日付値に変換する。JMP日付値は、1904年1月1日からの秒数。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
As Date( Date DMY( 15, 7, 2000 ) );

```

### Date Difference

**構文:** delta = Date Difference( dt1, dt2, intervalName, <alignment="start"> )

**説明:** 2つの日付時間値の差を戻す。intervalName に指定できる値は、「年」、「四半期」、「月」、「週」、「日」、「時間」、「分」、秒」、 数値」。alignment が "Start"の場合は、期首の差を求める。一方、"Actual"の場合は期間全体の差を求める。alignment が "Fractional" の場合は、期間「年」、「四半期」、「月」の長さの平均を使用して求めた差の小数部分も含めて戻す。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

Names Default To Here( 1 );
Date Difference( Date DMY( 31, 1, 2015 ), Date DMY( 1, 3, 2015 ), "Month", "start" );

```

**例 2**

```jsl

Names Default To Here( 1 );
Date Difference( Date DMY( 31, 1, 2015 ), Date DMY( 1, 3, 2015 ), "Month", "actual" );

```

**例 3**

```jsl

Names Default To Here( 1 );
Date Difference( Date DMY( 31, 1, 2015 ), Date DMY( 1, 3, 2015 ), "Month", "fractional" );

```

### Date Increment

**構文:** d = Date Increment( datetime, intervalName, <incr=1>, <alignment="start"> )

**説明:**  incrの期数を加算した日付時間値を戻す。 intervalName として指定できる値は、「年」、「四半期」、「月」、「週」、「日」、「時間」、「分」、「秒」、「数値」。alignment が"Start" の場合、指定された期間の単位以下は切り捨てられ、"Actual"の場合は単位以下の値も保持される。alignmentが"Fractional"の場合は、期間「年」、「四半期」、「月」の長さの平均を使って求めた小数点以下の incr の値も含めて戻される。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

Names Default To Here( 1 );
Date Increment( Today(), "Month", 100, "start" );

```

**例 2**

```jsl

Names Default To Here( 1 );
Date Increment( Today(), "Month", 100, "actual" );

```

**例 3**

```jsl

Names Default To Here( 1 );
Date Increment( Today(), "Month", 100, "fractional" );

```

### Date MDY

**構文:** z = Date MDY( m, d, y )

**説明:** 月(m)、日(d)、年(y)を、JMP日付値に変換する。JMP日付値は、1904年1月1日からの秒数。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
As Date( Date MDY( 7, 15, 2000 ) );

```

### Day

**構文:** d = Day( datetime )

**説明:** 日付時間値の日付の値(1～31)を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Day( Today() );

```

### Day Of Week

**構文:** d = Day Of Week( datetime )

**説明:** 日付時間値の曜日の値を戻す。日曜日=1、...、土曜日=7。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Day Of Week( Today() );

```

### Day Of Year

**構文:** d = Day Of Year( datetime )

**説明:** 日付時間値の年単位の日付の値を戻す。1は1月1日。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Day Of Year( Today() );

```

### Days In Month

**構文:** v = Days In Month(year, month)

**説明:** 指定された月の日数を戻す。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
v = Days In Month( 2016, 2 );

```

### Format

**構文:** s = Format( x, formatString, <options> )

s = Format( x, "Format Pattern", pattern, <options> )

**説明:** 数を指定の形式で戻す。形式には、[列情報]ダイアログボックス内の「最適」("Best")や「h:m:s」などがある。p値、通貨、日付、時間、地図などの他のオプションについては、トピックのヘルプを参照のこと。

**JMP追加されたバージョン:** バージョン14より前

**形式パターン**

```jsl

Names Default To Here( 1 );
Print( Format( Today(), "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm><:><ss>" ) );

```

**日付時間**

```jsl

Names Default To Here( 1 );
Print( Format( Today(), "yyyyQq" ), Format( Today(), "m/d/y h:m" ) );

```

**最大精度**

```jsl

Names Default To Here( 1 );
Show( Format( 88.54, "Best" ), Format( 88.54, "Best", "Full Precision" ) );

```

**通貨とパーセント**

```jsl

Names Default To Here( 1 );
pct = Format( 0.123, "Percent", 2 );
amt = Format( 123.4567, "Currency", "EUR", 2 );
result = "Revenue increase: " || amt || " or " || pct || ".";

```

### Format Date

**構文:** s = Format( x, formatString, <options> )

s = Format( x, "Format Pattern", pattern, <options> )

**説明:** 数を指定の形式で戻す。形式には、[列情報]ダイアログボックス内の「最適」("Best")や「h:m:s」などがある。p値、通貨、日付、時間、地図などの他のオプションについては、トピックのヘルプを参照のこと。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

Names Default To Here( 1 );
Print( Format( Today(), "yyyyQq" ), Format( Today(), "m/d/y h:m" ) );

```

**例 2**

```jsl

Names Default To Here( 1 );
Print( Format( Today(), "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm><:><ss>" ) );

```

**例 3**

```jsl

Names Default To Here( 1 );
pct = Format( 0.123, "Percent", 2 );
amt = Format( 123.4567, "Currency", "EUR", 2 );
result = "Revenue increase: " || amt || " or " || pct || ".";

```

### HP Time

**構文:** t = HP Time()

**説明:** 高精度の時間値を戻す。単位はマイクロ秒。別のHP Time()値と比較することで役に立つ。値は、JMP セッション開始から経過した時間を示す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
bt = HP Time();
Open( "$SAMPLE_DATA/Big Class.jmp" );
et = HP Time();
it = et - bt;
Show( it );

```

### Hour

**構文:** hr = Hour( datetime, <12> )

**説明:** 日付時間値の時間の値を、12時間式(12,1～11)または24時間式(0～23)で戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Hour( Today() );

```

### ISO Year

**構文:** yr = ISO Year( datetime )

**説明:** 日付時間値のISO年を戻す。ISO年は、ISO週に対応し、4日以上で構成される第1週の月曜日に始まる。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
ISO Year( Today() );

```

### In Days

**構文:** y = In Days( <x=1> )

**説明:** xを日数から秒数に変換する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
In Days( 1.5 );

```

### In Hours

**構文:** y = In Hours( <x=1> )

**説明:** xを時数から秒数に変換する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
In Hours( 0.5 );

```

### In Minutes

**構文:** y = In Minutes( <x=1> )

**説明:** xを分の数から秒数に変換する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
In Minutes( 1 );

```

### In Weeks

**構文:** y = In Weeks( <x=1> )

**説明:** xを週数から秒数に変換する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
In Weeks( 1 );

```

### In Years

**構文:** y = In Years( <x=1> )

**説明:** xを年数から秒数に変換する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
In Years( 1 );

```

### Informat

**構文:** dt = In Format( s, formatString, < <<Use Locale(b=1)>, < <<Restrict > )

dt = In Format( s, "Format Pattern", pattern, < <<Use Locale(b=1)> )

**説明:** 与えられた形式の文字列を解析する。日付時間形式の場合は、値がAs Date()で囲まれたものとして表現され、日付がddMonyyyy形式で戻される。「最適な」formatString 形式とともに使用できるオプションの<<Restrictは、整数、小数、および指数表現の変換のみ許可する。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

Names Default To Here( 1 );
Informat( "07152000", "MMDDYYYY" );

```

**例 2**

```jsl

Names Default To Here( 1 );
Informat( "07.15.2000", "Format Pattern", "<MM>.<DD>.<YYYY>" );

```

**例 3**

```jsl

Names Default To Here( 1 );
Informat( "86.8287° W", "Longitude DDD" );

```

**例 4**

```jsl

Names Default To Here( 1 );
Informat( "123.45%", "Percent" );

```

**例 5**

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

**構文:** v = Is Leap Year(year)

**説明:** 指定された年が閏年かどうかを戻す。

**JMP追加されたバージョン:** 15

```jsl

Names Default To Here( 1 );
v = Is Leap Year( 2016 );

```

### Long Date

**構文:** s = Long Date( datetime, <format> )

**説明:** 日付時間値を、OSで指定されているロケールの長い形式で戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Long Date( Today() );

```

### MDYHMS

**構文:** s = MDYHMS( datetime, <format> )

**説明:** 日付時間値の値を、月、日、年、時間、分、秒の順序で戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
MDYHMS( Today() );

```

### Minute

**構文:** min = Minute( datetime )

**説明:** 日付時間値の分の値(0～59)を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Minute( Today() );

```

### Month

**構文:** mon = Month( datetime )

**説明:** 日付時間値の月の値(1～12)を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Month( Today() );

```

### Nth Day Of Week in the Month

**構文:** n = Nth Day Of Week in the Month( datetime )

**説明:** 日付時間引数の曜日がその月の何度目であるかを示す整数を戻す。たとえば、2019年11月28日は、その月の第4木曜日であるため、戻り値は4となる。

**JMP追加されたバージョン:** 16

```jsl

Names Default To Here( 1 );
Nth Day Of Week in the Month( Date MDY( 11, 28, 2019 ) );

```

### Parse Date

**構文:** dt = In Format( s, formatString, < <<Use Locale(b=1)>, < <<Restrict > )

dt = In Format( s, "Format Pattern", pattern, < <<Use Locale(b=1)> )

**説明:** 与えられた形式の文字列を解析する。日付時間形式の場合は、値がAs Date()で囲まれたものとして表現され、日付がddMonyyyy形式で戻される。「Best」formatString 形式とともに使用できるオプションの<<Restrictは、整数、小数、および指数表現の変換のみ許可する。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

Names Default To Here( 1 );
Informat( "07152000", "MMDDYYYY" );

```

**例 2**

```jsl

Names Default To Here( 1 );
Informat( "07.15.2000", "Format Pattern", "<MM>.<DD>.<YYYY>" );

```

**例 3**

```jsl

Names Default To Here( 1 );
Informat( "86.8287° W", "Longitude DDD" );

```

**例 4**

```jsl

Names Default To Here( 1 );
Informat( "123.45%", "Percent" );

```

**例 5**

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

**構文:** q = Quarter( datetime )

**説明:** 日付時間値の四半期の値(1～4)を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Quarter( Today() );

```

### Second

**構文:** sec = Second( datetime )

**説明:** 日付時間値の秒の値(0～60)を戻す。この時、小数点以下の値も考慮される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Second( Today() );

```

### Short Date

**構文:** s = Short Date( datetime, <format> )

**説明:** 日付時間値を、OSで指定されているロケールの短い形式で戻す（MM/DD/YYYY）。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Short Date( Today() );

```

### Tick Seconds

**構文:** t = Tick Seconds()

**説明:** 時間値を秒で戻す。コンピュータにもよるが、通常は少なくとも1/60秒まで正確。別のTick Seconds()値との相対値としてのみ有効。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
t1 = Tick Seconds();
Open( "$SAMPLE_DATA/Big Class.jmp" );
t2 = Tick Seconds();
Round( t2 - t1, 3 );

```

### Time Of Day

**構文:** sec = Time Of Day( datetime )

**説明:** 日付時間値の、日付を除いた時間の部分の値を戻す。この時、小数点以下の値も考慮される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Format( Time Of Day( Today() ), "h:m:s" );

```

### Today

**構文:** dt = Today()

**説明:** 現時点の日付時間値を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
As Date( Today() );

```

### Week Of Year

**構文:** d = Week Of Year( datetime, <rule=1> )

**説明:** 日付時間値に対して、年において何番目の週であるかを戻す。その際、3つのルールのいずれかを適用する。デフォルト(ルール1)では、週は日曜日から始まり、年の最初の日曜日が第2週となる。第1週は一部だけの週となるかまたは存在しない(たとえば2006年)。ルール2では、最初の日曜日が第1週となり、その前にある日は第0週となる。ルール3は、ISO方式の週番号を戻す。週は月曜日から始まり、その年に入ってからの4日間を含む最初の週が第1週となる。ISO方式の場合、年の最初の3日間または最後の3日間が前年または翌年の週番号に属する場合がある。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

Names Default To Here( 1 );
Week Of Year( Today() );

```

**例 2**

```jsl

Names Default To Here( 1 );
Show(
	Week Of Year( 01jan2012, 1 ),
	Week Of Year( 01jan2012, 2 ),
	Week Of Year( 01jan2012, 3 )
);

```

### Year

**構文:** yr = Year( datetime )

**説明:** 日付時間値の年の値を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Year( Today() );

```

