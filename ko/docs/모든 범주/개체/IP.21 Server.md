# IP.21 Server



### New IP21 Client

**구문:** New IP21 Client(URL(base URL), &lt;Authentication Method("None"|"Basic"|"NTLM"|"Kerberos")&gt;, &lt;Username(userid)&gt;,&lt;Password(password)&gt;)

**설명:** AspenTech IP.21 서버에서 데이터를 가져오는 데 사용할 수 있는 새 IP21 클라이언트 인스턴스를 생성합니다.

**JMP추가된 버전:** 19

**예제 1**

```jsl

/* Import actual (raw) data *//* Note: URL() and Authentication Method() use example values. Please supply a working URL and authentication credentials. */  tag set = {"TI8045", "TI8058", "TI8064"};end time = Today();start time = end time - In Days( 1 );client = New IP21 Client(	URL( "https://myserver.com/" ),	Authentication Method( "NTLM" ),	Username( "%_UID_%" ),	Password( "%_PWD_%" ));importer = client << Importer(	Data Source( "My-Data-Source" ),	Tag Set( tag set ),	Start Time( start time ),	End Time( end time ),	Retrieval Type( "Actual" ));importer << Run;

```

**예제 2**

```jsl

/* Import interpolated data *//* Note: URL() and Authentication Method() use example values. Please supply a working URL and authentication credentials. */  tag set = {"TI8045", "TI8058", "TI8064"};end time = Today();start time = end time - In Days( 1 );client = New IP21 Client(	URL( "https://myserver.com/" ),	Authentication Method( "NTLM" ),	Username( "%_UID_%" ),	Password( "%_PWD_%" ));importer = client << Importer(	Data Source( "My-Data-Source" ),	Tag Set( tag set ),	Start Time( start time ),	End Time( end time ),	Retrieval Type( "Interpolated" ),	Period( Minute( 30 ) ), 	/* Every half hour */);importer << Run;

```

## 항목 메시지

### Importer

**구문:** Importer(Data Source(string), Tag Set(string list), Start Time(date-time value), End Time(date-time value), &lt;Retrieval Type(string)&gt;, &lt;Max Count(number)&gt;, &lt;Include Outsiders(0|1)&gt;, &lt;Stepped(0|1)&gt;, &lt;Period(Day(number) | Hour(number) | Minute(number))&gt;, &lt;Aggregate( Method("Integral" | "Value" | "Integral Incomplete" | "Value Incomplete"), Start("Start Of Day" | "Start Of Time"), Anchor("Begin" | "Middle" | "End"))&gt;

**설명:** 원시 가져오기 인스턴스를 새로 생성합니다.

**JMP추가된 버전:** 19

**예제 1**

```jsl

/* Import actual (raw) data *//* Note: URL() and Authentication Method() use example values. Please supply a working URL and authentication credentials. */  tag set = {"TI8045", "TI8058", "TI8064"};end time = Today();start time = end time - In Days( 1 );client = New IP21 Client(	URL( "https://myserver.com/" ),	Authentication Method( "NTLM" ),	Username( "%_UID_%" ),	Password( "%_PWD_%" ));importer = client << Importer(	Data Source( "My-Data-Source" ),	Tag Set( tag set ),	Start Time( start time ),	End Time( end time ),	Retrieval Type( "Actual" ));importer << Run;

```

**예제 2**

```jsl

/* Import interpolated data *//* Note: URL() and Authentication Method() use example values. Please supply a working URL and authentication credentials. */  tag set = {"TI8045", "TI8058", "TI8064"};end time = Today();start time = end time - In Days( 1 );client = New IP21 Client(	URL( "https://myserver.com/" ),	Authentication Method( "NTLM" ),	Username( "%_UID_%" ),	Password( "%_PWD_%" ));importer = client << Importer(	Data Source( "My-Data-Source" ),	Tag Set( tag set ),	Start Time( start time ),	End Time( end time ),	Retrieval Type( "Interpolated" ),	Period( Minute( 30 ) ), 	/* Every half hour */);importer << Run;

```

