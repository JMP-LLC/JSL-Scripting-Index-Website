# IP.21 Server



### New IP21 Client

**Sintassi:** New IP21 Client(URL(base URL), &lt;Authentication Method("None"|"Basic"|"NTLM"|"Kerberos")&gt;, &lt;Username(userid)&gt;,&lt;Password(password)&gt;)

**Descrizione:** Crea una nuova istanza del client IP21 che può essere utilizzata per importare dati da un server IP.21 AspenTech.

**JMP Versione aggiunta:** 19

**Esempio 1**

```jsl

/* Import actual (raw) data *//* Note: URL() and Authentication Method() use example values. Please supply a working URL and authentication credentials. */  tag set = {"TI8045", "TI8058", "TI8064"};end time = Today();start time = end time - In Days( 1 );client = New IP21 Client(	URL( "https://myserver.com/" ),	Authentication Method( "NTLM" ),	Username( "%_UID_%" ),	Password( "%_PWD_%" ));importer = client << Importer(	Data Source( "My-Data-Source" ),	Tag Set( tag set ),	Start Time( start time ),	End Time( end time ),	Retrieval Type( "Actual" ));importer << Run;

```

**Esempio 2**

```jsl

/* Import interpolated data *//* Note: URL() and Authentication Method() use example values. Please supply a working URL and authentication credentials. */  tag set = {"TI8045", "TI8058", "TI8064"};end time = Today();start time = end time - In Days( 1 );client = New IP21 Client(	URL( "https://myserver.com/" ),	Authentication Method( "NTLM" ),	Username( "%_UID_%" ),	Password( "%_PWD_%" ));importer = client << Importer(	Data Source( "My-Data-Source" ),	Tag Set( tag set ),	Start Time( start time ),	End Time( end time ),	Retrieval Type( "Interpolated" ),	Period( Minute( 30 ) ), 	/* Every half hour */);importer << Run;

```

## Messaggi degli elementi

### Importer

**Sintassi:** Importer(Data Source(string), Tag Set(string list), Start Time(date-time value), End Time(date-time value), &lt;Retrieval Type(string)&gt;, &lt;Max Count(number)&gt;, &lt;Include Outsiders(0|1)&gt;, &lt;Stepped(0|1)&gt;, &lt;Period(Day(number) | Hour(number) | Minute(number))&gt;, &lt;Aggregate( Method("Integral" | "Value" | "Integral Incomplete" | "Value Incomplete"), Start("Start Of Day" | "Start Of Time"), Anchor("Begin" | "Middle" | "End"))&gt;

**Descrizione:** Crea una nuova istanza dell&apos;importatore senza elaborazione.

**JMP Versione aggiunta:** 19

**Esempio 1**

```jsl

/* Import actual (raw) data *//* Note: URL() and Authentication Method() use example values. Please supply a working URL and authentication credentials. */  tag set = {"TI8045", "TI8058", "TI8064"};end time = Today();start time = end time - In Days( 1 );client = New IP21 Client(	URL( "https://myserver.com/" ),	Authentication Method( "NTLM" ),	Username( "%_UID_%" ),	Password( "%_PWD_%" ));importer = client << Importer(	Data Source( "My-Data-Source" ),	Tag Set( tag set ),	Start Time( start time ),	End Time( end time ),	Retrieval Type( "Actual" ));importer << Run;

```

**Esempio 2**

```jsl

/* Import interpolated data *//* Note: URL() and Authentication Method() use example values. Please supply a working URL and authentication credentials. */  tag set = {"TI8045", "TI8058", "TI8064"};end time = Today();start time = end time - In Days( 1 );client = New IP21 Client(	URL( "https://myserver.com/" ),	Authentication Method( "NTLM" ),	Username( "%_UID_%" ),	Password( "%_PWD_%" ));importer = client << Importer(	Data Source( "My-Data-Source" ),	Tag Set( tag set ),	Start Time( start time ),	End Time( end time ),	Retrieval Type( "Interpolated" ),	Period( Minute( 30 ) ), 	/* Every half hour */);importer << Run;

```

