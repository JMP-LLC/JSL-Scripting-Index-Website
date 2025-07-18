# PI Server



### New PI Client

**Syntaxe :** New Pi Client(URL(base URL), &lt;Authentication Method("None"|"Basic"|"NTLM"|"Kerberos")&gt;, &lt;Username(userid)&gt;,&lt;Password(password)&gt;)

**Description :** Crée une nouvelle instance de client PI qui peut être utilisée pour importer les données depuis un serveur PI.

**JMP Version ajoutée :** 17

#### Exemple 1

```jsl

/* Import raw data */
client = New PI Client(
	URL( "https://myserver.com/piwebapi" ),
	Authentication Method( "basic" ),
	Username( "myuserid" ),
	Password( "mypassword" )
);
importer = client << Importer(
	AF Path(
		"\\myserver\PIData\Atlanta Data Center\Server Rack1\ION 6200 Power Meter1|I A"
	), /* Asset Framework path */
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

#### Exemple 2

```jsl

/* Import plot data using Kerberos for authentication */
client = New PI Client(
	URL( "https://myserver.com/piwebapi" ),
	Authentication Method( "kerberos" )
);
importer = client << Importer(
	AF Path(
		"\\myserver\PIData\Atlanta Data Center\Server Rack1\ION 6200 Power Meter1|I A"
	),
	Series( "plot" ),
	Start Time( "*-1d" ),
	End Time( "*" ),
	UTC( 0 ),
	Intervals( 24 )
); /* No of time intervals to fetch*/
importer << Run;

```

#### Exemple 3

```jsl

/* Import interpolated data from a server that does not require authentication */
client = New PI Client(
	URL( "https://myserver.com/piwebapi" ),
	Authentication Method( "none" )
);
importer = client << Importer(
	AF Path(
		"\\myserver\PIData\Atlanta Data Center\Server Rack1\ION 6200 Power Meter1|I A"
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

## Messages d'éléments

### Importer

**Syntaxe :** Importer(AF Path(Asset Framework path), &lt;Series(string)&gt;, &lt;Start Time(PI time string)&gt;, &lt;End Time(PI time string)&gt;, &lt;UTC(boolean)&gt;, &lt;Boundary Type(string)&gt;, &lt;Max Count(integer)&gt;, &lt;Filter(string)&gt;, &lt;Retrieve Attribute Status(boolean)&gt;, &lt;Intervals(integer)&gt;, &lt;Sync Time(PI time string)&gt;, &lt;Sync Time Boundary Type(string)&gt;, &lt;Interval(duration in PI AFTimeSpan format)&gt;, &lt;Timeout(integer)&gt;)

**Description :** Crée une nouvelle instance brute de l&apos;importeur.

**JMP Version ajoutée :** 17

#### Exemple 1

```jsl

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

#### Exemple 2

```jsl

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

#### Exemple 3

```jsl

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

