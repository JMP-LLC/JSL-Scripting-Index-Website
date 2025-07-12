# PI Server



## Elementmeldungen

### Importer

**Syntax:** Importer(AF Path(Asset Framework path), <Series(string)>, <Start Time(PI time string)>,

			   <End Time(PI time string)>, <UTC(boolean)>, <Boundary Type(string)>, <Max Count(integer)>,

			   <Filter(string)>, <Retrieve Attribute Status(boolean)>, <Intervals(integer)>,  <Sync Time(PI time string)>, <Sync Time Boundary Type(string)>,

			   <Interval(duration in PI AFTimeSpan format)>, <Timeout(integer)>)

**Beschreibung:** Erstellt eine neue Rohimportinstanz.

**JMP Version hinzugefügt:** 17

**Beispiel 1**

```jsl

Names Default To Here( 1 );
/* Import raw data */
client = New PI Client(
	URL( "https://myserver.com/piwebapi" ),
	Authentication Method( "basic" ),
	Username( "myuserid" ),
	Password( "mypassword" )
);
importer = client << Importer(
	AF Path(				 /* Asset Framework paths */
		"\\myserver\PIData\Atlanta Data Center\Server Rack1\ION 6200 Power Meter1|I A",
		"\\myserver\PIData\Atlanta Data Center\Server Rack1\ION 6200 Power Meter1|I B",
		"\\myserver\PIData\Atlanta Data Center\Server Rack1\ION 6200 Power Meter1|I C"
	),
	Series( "raw" ),
	Start Time( "*-1d" ), /* PI time string */
	End Time( "*" ),      /* PI time string */
	UTC( 0 ), /* whether specified start/end times are based on UTC - default is zero */
	Boundary Type( "inside" ), /* choices are "inside", "outside", "interpolated" */
	Max Count( 5000 ), /* Max. number of values to fetch - default is 5000 */
	Filter( "" ), /* Optional filter */
	Retrieve Attribute Status( 0 ), /* Whether to retrieve value attributes (i.e. "good", "questionable", "substituted", "annotated") - default is 0 */
	Timeout( 120 ) /*add extra time for the server to respond*/
);
importer << Run;

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
/* Import plot data  */
client = New PI Client(
	URL( "https://myserver.com/piwebapi" ),
	Authentication Method( "kerberos" )
);
importer = client << Importer(
	AF Path(				 /* Asset Framework paths */
		"\\myserver\PIData\Atlanta Data Center\Server Rack1\ION 6200 Power Meter1|I A",
		"\\myserver\PIData\Atlanta Data Center\Server Rack1\ION 6200 Power Meter1|I B",
		"\\myserver\PIData\Atlanta Data Center\Server Rack1\ION 6200 Power Meter1|I C"
	),
	Series( "plot" ),
	Start Time( "*-1d" ),
	End Time( "*" ),
	UTC( 0 ),
	Intervals( 24 )
); /* No of time intervals to fetch*/
importer << Run;

```

**Beispiel 3**

```jsl

Names Default To Here( 1 );
/* Import interpolated data from a server that does not require authentication */
client = New PI Client(
	URL( "https://myserver.com/piwebapi" ),
	Authentication Method( "none" )
);
importer = client << Importer(
	AF Path(				 /* Asset Framework paths */
		"\\myserver\PIData\Atlanta Data Center\Server Rack1\ION 6200 Power Meter1|I A",
		"\\myserver\PIData\Atlanta Data Center\Server Rack1\ION 6200 Power Meter1|I B",
		"\\myserver\PIData\Atlanta Data Center\Server Rack1\ION 6200 Power Meter1|I C"
	),
	Series( "interpolated" ),
	Start Time( "*-1d" ),
	End Time( "*" ),
	UTC( 0 ),
	Sync Time Boundary Type( "inside" ),   /*  choices are "inside", "outside" */
	Interval( "1h" ),            /* interval period */
	Sync Time( "01JUL2021" ),    /* optional sync point - ie. intervals begin from this point */
	Filter( "" )
);
importer << Run;

```

## Funktionen

### New PI Client

**Syntax:** New Pi Client(URL(base URL), <Authentication Method("None"|"Basic"|"NTLM"|"Kerberos")>,

                   <Username(userid)>,<Password(password)>)

**Beschreibung:** Erstellt eine neue PI-Client-Instanz, die zum Importieren von Daten von einem PI-Server verwendet werden kann.

**JMP Version hinzugefügt:** 17

**Beispiel 1**

```jsl

Names Default To Here( 1 );
/* Import raw data */
client = New PI Client(
	URL( "https://myserver.com/piwebapi" ),
	Authentication Method( "basic" ),
	Username( "myuserid" ),
	Password( "mypassword" )
);
importer = client << Importer(
	AF Path( "\\myserver\PIData\Atlanta Data Center\Server Rack1\ION 6200 Power Meter1|I A" ), /* Asset Framework path */
	Series( "raw" ),
	Start Time( "*-1d" ), /* PI time string */
	End Time( "*" ),      /* PI time string */
	Boundary Type( "inside" ), /* choices are "inside", "outside", "interpolated" */
	UTC( 0 ), /* whether specified start/end times are based on UTC - default is zero */
	Max Count( 5000 ), /* Max. number of values to fetch - default is 5000 */
	Filter( "" ), /* Optional filter */
	Retrieve Attribute Status( 0 ) /* Whether to retrieve value attributes (i.e. "good", "questionable", "substituted", "annotated") - default is 0 */
);
importer << Run;

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
/* Import plot data using Kerberos for authentication */
client = New PI Client(
	URL( "https://myserver.com/piwebapi" ),
	Authentication Method( "kerberos" )
);
importer = client << Importer(
	AF Path( "\\myserver\PIData\Atlanta Data Center\Server Rack1\ION 6200 Power Meter1|I A" ),
	Series( "plot" ),
	Start Time( "*-1d" ),
	End Time( "*" ),
	UTC( 0 ),
	Intervals( 24 )
); /* No of time intervals to fetch*/
importer << Run;

```

**Beispiel 3**

```jsl

Names Default To Here( 1 );
/* Import interpolated data from a server that does not require authentication */
client = New PI Client(
	URL( "https://myserver.com/piwebapi" ),
	Authentication Method( "none" )
);
importer = client << Importer(
	AF Path( "\\myserver\PIData\Atlanta Data Center\Server Rack1\ION 6200 Power Meter1|I A" ),
	Series( "interpolated" ),
	Start Time( "*-1d" ),
	End Time( "*" ),
	UTC( 0 ),
	Sync Time Boundary Type( "inside" ),   /*  choices are "inside", "outside" */
	Interval( "1h" ),            /* interval period */
	Sync Time( "01JUL2021" ),    /* optional sync point - ie. intervals begin from this point */
	Filter( "" )
);
importer << Run;

```

