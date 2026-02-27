# IP.21 Server



### New IP21 Client

**構文:** New IP21 Client(URL(base URL), &lt;Authentication Method("None"|"Basic"|"NTLM"|"Kerberos")&gt;, &lt;Username(userid)&gt;,&lt;Password(password)&gt;)

**説明:** AspenTec IP.21サーバーからデータを読み込むための、新しいIP21クライアントインスタンスを作成する。

**JMP追加されたバージョン:** 19

**例 1**

```jsl

/* Import actual (raw) data *//* Note: URL() and Authentication Method() use example values. Please supply a working URL and authentication credentials. */  tag set = {"TI8045", "TI8058", "TI8064"};end time = Today();start time = end time - In Days( 1 );client = New IP21 Client(	URL( "https://myserver.com/" ),	Authentication Method( "NTLM" ),	Username( "%_UID_%" ),	Password( "%_PWD_%" ));importer = client << Importer(	Data Source( "My-Data-Source" ),	Tag Set( tag set ),	Start Time( start time ),	End Time( end time ),	Retrieval Type( "Actual" ));importer << Run;

```

**例 2**

```jsl

/* Import interpolated data *//* Note: URL() and Authentication Method() use example values. Please supply a working URL and authentication credentials. */  tag set = {"TI8045", "TI8058", "TI8064"};end time = Today();start time = end time - In Days( 1 );client = New IP21 Client(	URL( "https://myserver.com/" ),	Authentication Method( "NTLM" ),	Username( "%_UID_%" ),	Password( "%_PWD_%" ));importer = client << Importer(	Data Source( "My-Data-Source" ),	Tag Set( tag set ),	Start Time( start time ),	End Time( end time ),	Retrieval Type( "Interpolated" ),	Period( Minute( 30 ) ), 	/* Every half hour */);importer << Run;

```

## 項目のメッセージ

### Importer

**構文:** Importer(Data Source(string), Tag Set(string list), Start Time(date-time value), End Time(date-time value), &lt;Retrieval Type(string)&gt;, &lt;Max Count(number)&gt;, &lt;Include Outsiders(0|1)&gt;, &lt;Stepped(0|1)&gt;, &lt;Period(Day(number) | Hour(number) | Minute(number))&gt;, &lt;Aggregate( Method("Integral" | "Value" | "Integral Incomplete" | "Value Incomplete"), Start("Start Of Day" | "Start Of Time"), Anchor("Begin" | "Middle" | "End"))&gt;

**説明:** 生データを読み込む新たなインスタンスを作成する。

**JMP追加されたバージョン:** 19

**例 1**

```jsl

/* Import actual (raw) data *//* Note: URL() and Authentication Method() use example values. Please supply a working URL and authentication credentials. */  tag set = {"TI8045", "TI8058", "TI8064"};end time = Today();start time = end time - In Days( 1 );client = New IP21 Client(	URL( "https://myserver.com/" ),	Authentication Method( "NTLM" ),	Username( "%_UID_%" ),	Password( "%_PWD_%" ));importer = client << Importer(	Data Source( "My-Data-Source" ),	Tag Set( tag set ),	Start Time( start time ),	End Time( end time ),	Retrieval Type( "Actual" ));importer << Run;

```

**例 2**

```jsl

/* Import interpolated data *//* Note: URL() and Authentication Method() use example values. Please supply a working URL and authentication credentials. */  tag set = {"TI8045", "TI8058", "TI8064"};end time = Today();start time = end time - In Days( 1 );client = New IP21 Client(	URL( "https://myserver.com/" ),	Authentication Method( "NTLM" ),	Username( "%_UID_%" ),	Password( "%_PWD_%" ));importer = client << Importer(	Data Source( "My-Data-Source" ),	Tag Set( tag set ),	Start Time( start time ),	End Time( end time ),	Retrieval Type( "Interpolated" ),	Period( Minute( 30 ) ), 	/* Every half hour */);importer << Run;

```

