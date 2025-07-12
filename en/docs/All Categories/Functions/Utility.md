# Utility



## Functions

### Add

**Syntax:** y = x0 + x1; y = Add( x0, x1, ... )

**Description:** Adds all arguments, which can be numbers, matrices, or lists of numbers.

```jsl

Names Default To Here( 1 );
Pi() + 10;

```

### Beep

**Syntax:** Beep()

**Description:** Makes an alert sound.

```jsl

Names Default To Here( 1 );
Beep();

```

### Blob MD5

**Syntax:** blobResult = Blob MD5( blob )

**Description:** Makes a 16-byte result BLOB from a source BLOB (Binary Large OBject). The 16 byte BLOB is the MD5 checksum (or the hash) of the source BLOB.

```jsl

Names Default To Here( 1 );
Hex(/* make it printable */ Blob MD5(/* get the hash */
		Load Text File(/* a file from the samples */ "$SAMPLE_IMPORT_DATA/animals.txt",
			BLOB/* the result is a BLOB, not a string */
		)
	)
) == "763D3C9F5F3E92951B3A3DC965084DAC" /* benchmark hash value */ /* the result is 1 if the benchmark matches */
;

```

### Blob Peek

**Syntax:** blobResult = Blob Peek( blob, offset, <length> )

**Description:** Makes a new blob from a subrange of bytes of the given blob. The offset argument is zero-based, so the first byte is at offset zero.

```jsl

Names Default To Here( 1 );
Blob Peek( Char To Blob( "Quick Bob, eat your lunch!" ), 6 /*Zero based!*/, 3 );

```

### Build Information

**Syntax:** y = Build Information()

**Description:** Returns the build date and time, release or debug build, and product name.

```jsl

Names Default To Here( 1 );
Build Information();

```

### Caption

**Syntax:** y = Caption( <{h, v}>, text | remove, <Delayed( seconds )>, <Font(font)>, <Font Size(size)>, <Text Color(color)>, <Back Color(color)>, <Spoken(bool)> )

**Description:** Shows a caption window at the location specified by {h, v} and containing the text specified by the text argument. The Delayed( seconds ) argument sets the waiting time in seconds before each caption.

**Formatted Caption**

```jsl

Names Default To Here( 1 );
Caption(
	{100, 200},
	"explanation",
	Font( "Arial Black" ),
	Font Size( 16 ),
	Text Color( "blue" ),
	Back Color( "yellow" ),
	Spoken( 1 )
);

```

**Remove Caption**

```jsl

Names Default To Here( 1 );
Caption( "explanation" );
Wait( 2 );
Caption( remove );

```

### Clipboard Capture

**Syntax:** clp = Clipboard Capture( box << Copy )

**Description:** If the JSL within this function would have normally copied something to the OS Clipboard, it is instead copied to a Clipboard object and returned.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Property( "Units", "in" );
clp = Clipboard Capture( dt << Select Columns( :height ) << Copy Column Properties );
Show( Get Clipboard() );
Show( clp << Get Flavor Data( "Text", <<Text ) );

```

### Current Journal

**Syntax:** y = Current Journal( <Project(title|index|box|window)> )

**Description:** Returns a reference to the current journal in the current project (or no project when not running the script in a project).



To specify a project, use the optional Project() argument with a title, index, display box, or window object. Use Project(0) to specify no project when running the script in a project.



If no current journal exists in the given project, one will be created automatically.

```jsl

Names Default To Here( 1 );
Current Journal();

```

### Data Connector Registry

**Syntax:** Data Connector Registry()

**Description:** The collection of data connectors for JMP.

```jsl

Names Default To Here( 1 );

dc = Data Connector Registry() << Get( "com.jmp.sql_server" );

```

### Datafeed

**Syntax:** y = Open Datafeed( ... )

**Description:** Creates an object and window you can send messages to manage real-time data feeds.

```jsl

Names Default To Here( 1 );
exfeed = Open Datafeed(/*Connect( Port( "com3" ), Baud( 4800 ), DataBits( 8 ) ),*/
	Set Script(
		ex = exfeed << getLine;
		Show( ex );
	)
);
For( exi = 0, exi < 5, exi++, /* this is just a way to test a feed when the real data source is not available...*/
	exfeed << Queue Line( Char( exi ) );
	Wait( .5 );
);

```

### Debug Break

**Syntax:** Debug Break()

**Description:** When this expression is evaluated within the JSL Debugger, the Debugger stops executing the script.

```jsl

Names Default To Here( 1 );
// Right-click and select Debug.
// In the JSL Debugger, click Run.
x = 5;
y = 8;
Debug Break();
z = x + yy;
Show( z );

```

### Decode URI

**Syntax:** Decode URI( value )

**Description:** Encode the string using URI encoding

```jsl

Names Default To Here( 1 );

Decode URI( "Foo%20Bar" );

```

### Decode64 Blob

**Syntax:** y = Decode64 Blob( base64String )

**Description:** Decodes a printable string of base 64 text into a blob.

```jsl

Names Default To Here( 1 );
Decode64 Blob( "dGhlIHF1aWNrIGJyb3duIGZveA==" );

```

### Decode64 Double

**Syntax:** y = Decode64 Double( base64String )

**Description:** Returns the double-precision floating point number from the Base64 encoded string.

```jsl

Names Default To Here( 1 );
Decode64 Double( "P/lUWYIBG9Q=" );

```

### Disable JMP Live URL

**Syntax:** Disable JMP Live URL(url)

**Description:** Disables a JMP Live URL. This method is available only during jmpStartAdmin.jsl. An asterisk * can be used a wildcard to specify URLs as * (any URL), *.jmp.com (a URL ending in .jmp.com), http://public.* (a URL starting with http://public.), or *public* (a URL that contains public).

```jsl

Names Default To Here( 1 );

Disable JMP Live URL( "*public.jmp.com" );

```

### Disable Proxy Settings

**Syntax:** Disable Proxy Settings( 1|0 )

**Description:** Disables or enables proxy settings during jmpStartAdmin.jsl execution. Proxy settings are enabled by default.

```jsl

Names Default To Here( 1 );

Disable Proxy Settings( 1 );

```

### Divide

**Syntax:** y = x0 / x1; y = Divide( x0, <x1>, ... )

**Description:** Divides all subsequent arguments from the first argument. Arguments can be numbers, matrices, or lists of numbers. When called with only one argument, the result will be the reciprocal.

**Reciprocal**

```jsl

Names Default To Here( 1 );
x = Divide( 5 );
y = 1 / 5;
Show( x, y );

```

**Simple**

```jsl

Names Default To Here( 1 );
6 / 3 / 2;

```

### Empty

**Syntax:** y = Empty()

**Description:** Returns an empty value. Used in formula editor for unspecified arguments.

```jsl

Names Default To Here( 1 );
Empty();

```

### Enable JMP Live URL

**Syntax:** Enable JMP Live URL(url)

**Description:** Enables a JMP Live URL. This method is available only during jmpStartAdmin.jsl. An asterisk * can be used a wildcard to specify URLs as * (any URL), *.jmp.com (a URL ending in .jmp.com), http://public.* (a URL starting with http://public.), or *public* (a URL that contains public).

```jsl

Names Default To Here( 1 );

Enable JMP Live URL( "https://public.jmp.com" );

```

### Enable Proxy Settings

**Syntax:** Enable Proxy Settings( 1|0 )

**Description:** Enables or disables proxy settings during jmpStartAdmin.jsl execution. Proxy settings are enabled by default.

```jsl

Names Default To Here( 1 );

Enable Proxy Settings( 0 );

```

### Encode URI

**Syntax:** Encode URI( value )

**Description:** Encode the string using URI encoding

```jsl

Names Default To Here( 1 );

Encode URI( "Foo Bar" );

```

### Encode64 Blob

**Syntax:** s = Encode64 Blob( x )

**Description:** Encodes a blob into a printable string of base 64 text.

```jsl

Names Default To Here( 1 );
Encode64 Blob( Char To Blob( "the quick brown fox" ) );

```

### Encode64 Double

**Syntax:** s = Encode64 Double( x )

**Description:** Returns a Base64 string encoding of the floating point number.

```jsl

Names Default To Here( 1 );
Encode64 Double( -1.5831 );

```

### Faure Quasi Random Sequence

**Syntax:** points = Faure Quasi Random Sequence(nDim, nRow)

**Description:** Generate a sequence of space filling quasi-random numbers using the Faure sequence.

```jsl

Names Default To Here( 1 );
A = Faure Quasi Random Sequence( 3, 100 );
As Table( A );
Scatterplot 3D( Y( :Col1, :Col2, :Col3 ) );

```

### Force Action Notes

### Format Pattern

**Syntax:** s = Format( x, "Format Pattern", pattern, <width>, <dec>)

x = In Format( s, "Format Pattern", pattern, < <<Use Locale(b=1)> )

obj = Format("Format Pattern", pattern, <width>, <dec>)

**Description:** Format Patterns are strings that define a date-time format, such as "<YYYY></><MM></><DD> <hh><:><mm><:><ss><ampm>". The parts of the pattern in angle brackets are called field descriptors. The field descriptors represent a value (such as "<YYYY>", which is a four-digit year) or other date-time text (such as "</>", which is a locale-specific date separator). A format pattern enables you to build formats that aren&apos;t provided in JMP. These formats can be used for both formatting and inputting data.

```jsl

Names Default To Here( 1 );
s = Format( Today(), "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm>" );
x = Informat( "2020/02/10 14:54", "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm>" );
Show( s, x );
                                                /*
Field Descriptors

Dates
(cannot be used with Duration field descriptors)
================================================================================
<YYYY>        Four-digit year. (Accepts 1-4 digits on input.)
<YY>          Two-digit year
<yyyy>        Four digit ISO year; corresponds to ISO weeks. (Accepts 1-4 digits
              on input.)
<yy>          Two digit ISO year; corresponds to ISO weeks.
<YYYY.>       Year with fractional year. Completely describes the date and time.
<M>           Month number (1..12)
<MM>          Month number, zero-padded (01..12)
<Month>       Long month name
<Mmm>         Abbreviated month name
<MMM>         "In-line" month name. Always three letters.
<WW1>         Two digit week number, zero-padded. Week 2 begins on first Sunday
              of year. Week 1 is partial week before first Sunday. (01..54)
<WW2>         Two digit week number, zero-padded. Week 1 begins on first Sunday
              of year. Week 0 is partial week before first Sunday. (00..53)
<ww>          Two digit ISO week number, zero-padded. Weeks begin on Monday.
              Week 1 is first week in that year with 4 or more days. There are
              no partial weeks, instead the first or last week can extend into
              the previous or next year, respectively. (01..53)
<D>           Day of the month (1..31)
<DD>          Day of the month, zero-padded (01..31)
<Q>           Quarter of the year (1..4)
<Q#>          "Q" followed by quarter of the year (1..4)
<DayOfWeek>   Name of the day of the week
<DW>          Day of week as a number. 1 = Sunday, 7 = Saturday
<dw>          Day of week as a number. 1 = Monday, 7 = Sunday
</>           The locale date separator. (Accepts most common separators on
              input.)
<->           The ISO date separator '-'. (Accepts most common separators on
              input.)
</?>          Optional date separator on the date input. The separator is never
              written on output.
<'T'>         The 'T' in ISO dates

Times
(some can be used with Duration field descriptors)
================================================================================
<hh>          Hour formatted according to the current locale. If a <ampm>
              descriptor is present, will use a 12 or 24 hour clock depending on
              locale. If a <AMPM> descriptor is present, will use a 12 hour
              clock. Otherwise, will use a 24 hour clock. (Cannot be used with
              duration field descriptors.)
<zhh>         Hour formatted according to the current locale and zero-padded. If
              a <ampm> descriptor is present, will use a 12 or 24 hour clock
              depending on locale. If a <AMPM> descriptor is present, will use a
              12 hour clock. Otherwise, will use a 24 hour clock. (Cannot be
              used with duration field descriptors.)
<hh24>        Hour in 24-hour format and zero-padded (00..23)
<mm>          Minute, zero-padded (00..59)
<ss>          Second, zero-padded (00..59)
<ampm>        AM/PM symbol for the current locale. (Cannot be used with duration
              field descriptors.)
<AMPM>        Locale-independent AM/PM symbol "AM" or "PM". (Cannot be used with
              duration field descriptors.)
<:>           The locale time separator.
<::>          The ISO time separator ':'. (Also accepts locale time separator on
              input.)
<:?>          Optional time separator on the date input. The separator is never
              written on output.

Durations
(cannot be used with Date field descriptors)
================================================================================
<Day>         Day count. Used as most significant field in durations. Cannot be
              used with any other "count".
<Hour>        Hour count. Used as most significant field in durations. Cannot be
              used with any other "count".
<Minute>      Minute count. Used as most significant field in durations. Cannot
              be used with any other "count".

Other
================================================================================
<<>           Replaced with a "<"
*/

```

### Get Addin

**Syntax:** Get Addin( ID )

**Description:** Retrieves a registered add-in specified by its ID.

```jsl

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );

```

### Get Addins

**Syntax:** Get Addins( )

**Description:** Returns a list of all registered add-ins.

```jsl

Names Default To Here( 1 );
addins = Get Addins();
addin ids = Get Addins() << id;
Show( addins, addin ids );

```

### Get Addr Info

**Syntax:** Get Addr Info( string )

**Description:** Looks up the numeric address for a name. In most cases the name should be used for future IPV6 compatibility.

```jsl

Names Default To Here( 1 );
Get Addr Info( "www.jmp.com" )[3][4];

```

### Get Clipboard

**Syntax:** Get Clipboard()

**Description:** Get the current contents of the clipboard

```jsl

Names Default To Here( 1 );
Get Clipboard();

```

### Get Expr Location

**Syntax:** Get Expr Location(<expression>, [{"TokenStartLine"|"TokenStartCol"|"TokenStart"|"TokenLength"|"TreeStart"|"TreeEnd"|"TreeLength"}+]

**Description:** Retrieve the locations of the top token in a parsed expression. The default invocation returns {the source file, TokenStartLine, TokenStartCol, TokenLength}.

**Default output**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
e = Parse( ":height + 20" );
Get Expr Location( e );

```

**Replace a substring**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
data = " :height + 20 ";
e = Parse( data );
positions = Get Expr Location( Arg( e, 2 ), {"TreeStart", "TreeLength"} );
Munger( data, positions[1], positions[2], "45" );

```

**Select output**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
e = Parse( " :height + 20 " );
Get Expr Location( e, {"TreeStart", "TreeEnd"} );

```

### Get Name Info

**Syntax:** Get Name Info( string )

**Description:** Looks up the name for a numeric address. In most cases the name should be used for future IPV6 compatibility.

```jsl

Names Default To Here( 1 );
Get Name Info( "149.173.5.120" )[3][4];

```

### Get Notebook List

**Syntax:** notebookList = Get Notebook List()

**Description:** Returns a list of all open notebooks.

### Get OAuth2 Grant Types

**Syntax:** Get OAuth2 Grant Types

**Description:** Gets the supported JMP OAuth2 grant types.

```jsl

Names Default To Here( 1 );

/*
https://oauth.net/2/grant-types/
*/
grant_types = Get OAuth2 Grant Types();
Show( grant_types );

```

### Get OpenID Connect Discovery

```jsl

Names Default To Here( 1 );

url = "https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration";
aa = Get OpenID Connect Discovery( url );
Show( aa );

```

### Get OpenIDC Discovery

### Get Platform Preference

**Syntax:** Get Platform Preferences( < platformName < ( optionName, ... ) > ... > )

**Description:** Gets platform preferences as specified.

```jsl

Names Default To Here( 1 );
Get Platform Preferences( Bivariate( Fit Line ), DOE );

```

### Get Platform Preferences

**Syntax:** Get Platform Preferences( < platformName < ( optionName, ... ) > ... > )

**Description:** Gets platform preferences as specified.

```jsl

Names Default To Here( 1 );
Get Platform Preferences( Bivariate( Fit Line ), DOE );

```

### Get Policies

**Syntax:** Get Policies( <Machine|User|Both> )

**Description:** Returns an associative array containing the current policy names and values.

```jsl

Names Default To Here( 1 );
Get Policies();

```

### Get Policy

**Syntax:** Get Policy( "PolicyName" )

### Get Preference

**Syntax:** Get Preferences( pref1, ... )

**Description:** Gets preferences as specified.

```jsl

Names Default To Here( 1 );
Get Preferences( Graph marker size );

```

### Get Preferences

**Syntax:** Get Preferences( pref1, ... )

**Description:** Gets preferences as specified.

```jsl

Names Default To Here( 1 );
Get Preferences( Graph marker size );

```

### Glue

**Syntax:** y = ( expr1; expr2; ... ); y = Glue( expr1, expr2, ... )

**Description:** Evaluates each argument and returns the last result.

```jsl

Names Default To Here( 1 );
ex1 = 1;
ex2 = 2;

```

### Gzip Compress

**Syntax:** blob = Gzip Compress( blob )

**Description:** Compresses a blob of data into a gzip blob.

```jsl

Names Default To Here( 1 );
Gzip Compress(
	Char To Blob( "random data does not usually compress well and may get larger" )
);

```

### Gzip Uncompress

**Syntax:** blob = Gzip Uncompress( blob )

**Description:** Uncompresses a blob of gzip data into a blob.

```jsl

Names Default To Here( 1 );
Gzip Uncompress(/*typically this data might come from GzipCompress() but might also come from a .gz file using loadTextFile with the blob option*/
	Char To Blob(
		"~1F~8B~08~00~00~00~00~00~00~0A~0D~CA~C1~0D~00~21~08~04~C0V~B6~B5~CDA~FC~80~5C~00c~EC^~E7=~C9)~E1~106~21~A1~85~19~8DU~8Bf~07_~F8~9FZ~85~ADfx~13~CE~83~A1~0Dc~0E~CD~0B~94*~16~1E=~00~00~00",
		"ascii~hex"
	)
);

```

### Host is

**Syntax:** y = Host is( "Mac"|"Windows"|"Bits32"|"Bits64"|"x86_64"|"arm64" )

**Description:** Returns 1 if the JMP application matches the argument; returns 0 otherwise. The arguments Windows or Mac test for the specified operating system, and the arguments Bits32 or Bits64 test for the specified 32-bit or 64-bit JMP application. Only one argument can be tested at a time.

```jsl

Names Default To Here( 1 );
If( Host is( "Mac" ),
	Show( "On Mac" ),
	Show( "Not on Mac" )
);
If( Host is( "Bits64" ),
	Show( "64 bit" )
);
If(
	Host is( "x86_64" ), Show( "On x86_64" ),
	Host is( "arm64" ), Show( "On arm64" )
);

```

### Is Alt Key

**Syntax:** y = Is Alt Key()

**Description:** Returns 1 if the Alt key is being pressed; returns 0 otherwise. Intended to be used in graphics callback scripts. On the Mac, Alt means Option key.

```jsl

Names Default To Here( 1 );
New Window( "Show me the key",
	Graph Box(
		Rect( 45, 55, 55, 45, 1 );
		If( Is Shift Key(),
			Text( {50, 60}, "Shift Key" )
		);
		If( Is Control Key(),
			Text( {60, 50}, "Control Key" )
		);
		If( Is Alt Key(),
			Text( {50, 35}, "Alt Key" )
		);
		Mousetrap( {} );
	)
);

```

### Is Command Key

**Syntax:** y = Is Command Key()

**Description:** Returns 1 if the Command key is being pressed; returns 0 otherwise. Intended to be used in graphics callback scripts.

```jsl

Names Default To Here( 1 );
New Window( "Show me the key",
	Graph Box(
		Rect( 45, 55, 55, 45, 1 );
		If( Is Shift Key(),
			Text( {50, 60}, "Shift Key" )
		);
		If( Is Command Key(),
			Text( {60, 50}, "Command Key" )
		);
		If( Is Alt Key(),
			Text( {50, 35}, "Alt Key" )
		);
		Mousetrap( {} );
	)
);

```

### Is Context Key

**Syntax:** y = Is Context Key()

**Description:** Returns 1 if the Context key is being pressed; returns 0 otherwise. Intended to be used in graphics callback scripts.

```jsl

Names Default To Here( 1 );
New Window( "Show me the key",
	Graph Box(
		Rect( 45, 55, 55, 45, 1 );
		If( Is Shift Key(),
			Text( {50, 60}, "Shift Key" )
		);
		If( Is Context Key(),
			Text( {60, 50}, "Context Key" )
		);
		If( Is Alt Key(),
			Text( {50, 35}, "Alt Key" )
		);
		Mousetrap( {} );
	)
);

```

### Is Control Key

**Syntax:** y = Is Control Key()

**Description:** Returns 1 if the Control key is being pressed; returns 0 otherwise. Intended to be used in graphics callback scripts. On the Mac, Control means Command key.

```jsl

Names Default To Here( 1 );
New Window( "Show me the key",
	Graph Box(
		Rect( 45, 55, 55, 45, 1 );
		If( Is Shift Key(),
			Text( {50, 60}, "Shift Key" )
		);
		If( Is Control Key(),
			Text( {60, 50}, "Control Key" )
		);
		If( Is Alt Key(),
			Text( {50, 35}, "Alt Key" )
		);
		Mousetrap( {} );
	)
);

```

### Is JMP Live URL Enabled

**Syntax:** Is JMP Live URL Enabled(url)

**Description:** Determines if the specified URL can be used in this JMP session. URLs can be enabled and/or disabled using the jmpStartAdmin.jsl script. This does not determine if it is a valid URL, nor if the user is able to login. It only determines if the URL is blocked by JMP.

```jsl

Names Default To Here( 1 );

url = "http://public.jmp.com";
Show( Is JMP Live URL Enabled( url ) );

```

### Is Option Key

**Syntax:** y = Is Option Key()

**Description:** Returns 1 if the Option key is being pressed; returns 0 otherwise. Intended to be used in graphics callback scripts.

```jsl

Names Default To Here( 1 );
New Window( "Show me the key",
	Graph Box(
		Rect( 45, 55, 55, 45, 1 );
		If( Is Shift Key(),
			Text( {50, 60}, "Shift Key" )
		);
		If( Is Option Key(),
			Text( {60, 50}, "Option Key" )
		);
		If( Is Alt Key(),
			Text( {50, 35}, "Alt Key" )
		);
		Mousetrap( {} );
	)
);

```

### Is Shift Key

**Syntax:** y = Is Shift Key()

**Description:** Returns 1 if the Shift key is being pressed; returns 0 otherwise. Intended to be used in graphics callback scripts.

```jsl

Names Default To Here( 1 );
New Window( "Show me the key",
	Graph Box(
		Rect( 45, 55, 55, 45, 1 );
		If( Is Shift Key(),
			Text( {50, 60}, "Shift Key" )
		);
		If( Is Control Key(),
			Text( {60, 50}, "Control Key" )
		);
		If( Is Alt Key(),
			Text( {50, 35}, "Alt Key" )
		);
		Mousetrap( {} );
	)
);

```

### JMP Product Name

**Syntax:** y = JMP Product Name()

**Description:** Returns "Standard" or "Pro" based on the version of the product that has been licensed.

```jsl

Names Default To Here( 1 );
JMP Product Name();

```

### JMP Version

**Syntax:** y = JMP Version()

**Description:** Returns the JMP version (release.revision{.fix}); not available before 6.0.

```jsl

Names Default To Here( 1 );
JMP Version();

```

### JSL Encrypted

**Syntax:** y = JSL Encrypted(script)

**Description:** Embeds an encrypted script within another script. Create an encrypted script by selecting Edit > Encrypt Script from the main menu of a script editor. Enter your passwords and the encrypted text will appear in a new window. Copy this text into a JSL Encrypted("") command to embed the encrypted script in another script.

```jsl

Names Default To Here( 1 );
JSL Encrypted(
	"//-e6.0.2\!NWUSXEHSB?SRAMXPSY?;KDGMNGPQFZP;?><JLEXCQZYIGWSI@<FOPBLDKJ?HEUPTOGSZDYWFDMB;NEVB;HFP=VQ@N;LCVQPWRHIXEIPFKGO=H?DWS?KFQRIPBEPSAE<AM?YG=C@VFRENPEW>@;ND=JA<?=WOZZOG>FZBZKZLMFOX?YF@LWA=B=SJXDGVW>VYLBRJT<I<MFE<Q??QCUOZM?RY>RXLBJRH=BH<EGVSEMABSS<IE=CAPID;XM;;?XIU<FA=SCE<CB;AGOCZWHZXK;*"
);

```

### JSL Quote

**Syntax:** y = JSL Quote(script)

**Description:** Store a JSL script in a variable, including all comments and formatting.

```jsl

Names Default To Here( 1 );

x = JSL Quote(/* Begin quote. */
    For (i = 1, i <= 5, i++,
        // Print the value of i.
        Print(i);
    );
    // End expression.
);
New Window( "editor", Script Box( x ) );

```

### Load DLL

**Syntax:** dll = Load DLL( file path | Base Name( file path without extension ), < AutoDeclare( bool | Quiet | Verbose) | Quiet | Verbose )> )

**Description:** Loads a DLL pointed to by the specified path.

**Cross platform using Base Name()**

```jsl

Names Default To Here( 1 );
dll = Load DLL( Base Name( "/path/to/dll/financial" ) );
// Loads "financial.dll" on Windows and "libfinancial.dylib" on Mac
// Declarations for "irr" and "npv" are auto-loaded
myirr = dll << irr( 0.1, -51000, 1000, 900, 950 );
mynpv = dll << npv( 0.05, -51000, 1000, 900, 9500 );
dll << UnloadDLL();

```

**Windows only**

```jsl

Names Default To Here( 1 );
If( Host is( "Windows" ),
	dll = Load DLL( "C:/Windows/System32/User32.DLL" );
	dll << CallDLL( "MessageBeep", "n", 0 );
	Wait( 1 );
	dll << CallDLL( "MessageBeep", "n", 0 );
	dll << UnloadDLL();
);

```

### Log Table Messages

**Syntax:** Log Table Messages( <On|Off>, <Enable(subject, ...)>, <Disable(subject, ...)>, <Include(msgname, ...)>, <Exclude(msgname, )>

**Description:** Control logging of data table messages (such as DtMsgClose). By default logging is off, but all subjects are enabled. (If you turn logging on, you do not need to enable the subjects you&apos;re interested in.) Only a subset of all messages are logged. Not available in retail builds.

**Turn off logging**

```jsl

Names Default To Here( 1 );
Log Table Messages( Off );

```

**Turn on logging**

```jsl

Names Default To Here( 1 );
Log Table Messages( On );

```

**Turn on logging, and include all messages except "DtMsgClose"**

```jsl

Names Default To Here( 1 );
Log Table Messages( On, Exclude( "DtMsgClose" ) );

```

**Turn on logging, and include only the "DtMsgClose" message**

```jsl

Names Default To Here( 1 );
Log Table Messages( On, Include( "DtMsgClose" ) );

```

**Turn on logging, but ignore column messages**

```jsl

Names Default To Here( 1 );
Log Table Messages( On, Disable( "Column" ) );

```

**Turn on logging, but ignore table messages**

```jsl

Names Default To Here( 1 );
Log Table Messages( On );
Log Table Messages( Disable( "Table" ) );

```

### Mail

**Syntax:** Mail( "address", "subject", "message", <"attachment filepath"> | { "attachment filepath", ...} )

**Description:** Creates an outgoing e-mail message as specified if the operating system allows doing so. Not all options will work on all operating system versions. See Help for details.

```jsl

Names Default To Here( 1 );
Mail( "test@example.com", "revelation", "JMP is great.", "$SAMPLE_DATA/Big Class.jmp" );

```

### Main Menu

**Syntax:** menu = Main Menu( command, <window name> )

**Description:** Executes the specified main menu command.

**Example 1**

```jsl

Names Default To Here( 1 );
Main Menu( "Sample Index" );

```

**Example 2**

```jsl

Names Default To Here( 1 );
Main Menu( "Help:Sample Index" );

```

### Minus

**Syntax:** y = -x; y = Minus( x )

**Description:** Negates x, which can be a number, matrix, or list of numbers.

```jsl

Names Default To Here( 1 );
-Pi();

```

### Multiple File Import

**Syntax:** mfiObj = Multiple File Import();

**Description:** Creates a Multiple File Import object; the object accepts messages to set a folder, filter files, and import. To bring up a dialog use the "Create Window" message. To immediately import use the "Import Data" message which will return a list of the tables that were created.

**Interactive example**

```jsl

Names Default To Here( 1 );
// use the save-script-to-script-window button 
// in the MFI dialog to see more messages
// for filtering files and controlling the import
Multiple File Import(
	<<Set Folder( "$DESKTOP" ),
	<<Set Name Filter( "*.csv;" ),
	<<Set Name Enable( 1 )
) << Create Window;

```

**Scripting example**

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Folder( "$SAMPLE_IMPORT_DATA" );
mfi << Set Name Filter( "*.txt" );
mfi << Set Name Enable( 1 );
tables = mfi << Import Data();

```

### Multiply

**Syntax:** y = x0 * x1; y = Multiply( x0, x1, ... )

**Description:** Multiplies all arguments, which can be numbers, matrices, or lists of numbers.

```jsl

Names Default To Here( 1 );
2 * Pi();

```

### Name

**Syntax:** Name(string)

**Description:** A name is simply something to call an item. Names are used for both variables and functions, and can be used directly in scripts as long as certain rules are followed. If the name begins with an alphabetic character or underscore, and continues with alphanumeric characters, whitespace, Unicode mathematical symbols and certain punctuation (apostrophes (’), percent signs (%), periods (.), backslashes (\), and underscores (_)), then the name can be used directly in scripts. Names that do not follow these rules can be used by using the Name() keyword.

```jsl

Names Default To Here( 1 );
Name( "taxable income(2011)" ) = 456000;
tax = .25;
Print( tax * Name( "taxable income(2011)" ) );

```

### New Clipboard

**Syntax:** clp = New Clipboard( <<<Get From OS> )

**Description:** Creates a new Clipboard, either empty or with access to the OS clipboard.

```jsl

Names Default To Here( 1 );

clp = New Clipboard( <<Get From OS );
New Window( "Img", clp << Get Flavor Data( "Graphic" ) )
;

```

### New HTTP Request

**Syntax:** obj = New HTTP Request(URL(...), Method(...), <Form(<Fields(...)>, <Files(...)>)> | <File(...)> | <Blob(...)> | <JSON(...)>, <QueryString(...)>, <Headers(...)>, <Username(...)>, <Password(...)>)

**Description:** Creates a request to send to a web service.

```jsl

Names Default To Here( 1 );

getSentiment = Function( {text},
	{Default Local},
	fields = Associative Array();
	fields["text"] = text;
	s = New HTTP Request(
		URL( "http://text-processing.com/api/sentiment/" ),
		Method( "POST" ),
		Form( Fields( fields ) ),
		Headers( {"Accept: application/json"} )
	) << Send;
	sAsList = Parse JSON( s );
	retval = Associative Array();
	retval["pos"] = sAsList["probability"]["pos"];
	retval["neg"] = sAsList["probability"]["neg"];
	retval["neutral"] = sAsList["probability"]["neutral"];
	retval["label"] = sAsList["label"];
	retval;
);
                         
addSentimentColumns = Function( {dt, colname, bLabel, bValues},
	{Default Local},
	col = Column( dt, colname );
	colLabel = "Sentiment_Label(" || colname || ")";
	colValPos = "Sentiment_Pos(" || colname || ")";
	colValNeg = "Sentiment_Neg(" || colname || ")";
	colValNeutral = "Sentiment_Neutral(" || colname || ")";
	If( bLabel,
		dt << New Column( colLabel, Character )
	);
	If( bValues,
		dt << New Column( colValPos, Numeric );
		dt << New Column( colValNeg, Numeric );
		dt << New Column( colValNeutral, Numeric );
	);
	For( i = 1, i <= N Rows( dt ), i++,
		sentiment = getSentiment( col[i] );
		If( bLabel,
			Column( dt, colLabel )[i] = sentiment["label"]
		);
		If( bValues,
			Column( dt, colValPos )[i] = sentiment["pos"];
			Column( dt, colValNeg )[i] = sentiment["neg"];
			Column( dt, colValNeutral )[i] = sentiment["neutral"];
		);
	);
);
                         
dt2 = Open( "$SAMPLE_DATA\Cereal.jmp" );
addSentimentColumns( dt2, "Name", 1, 1 );

```

### New Multi HTTP Request

**Syntax:** multi_request = New Multi HTTP Request()

**Description:** Sends or downloads multiple HTTP requests in parallel.

```jsl

Names Default To Here( 1 );

requests = New Multi HTTP Request();
requests << Add(
	New HTTP Request(
		Method( "GET" ),
		URL(
			"http://cdimage.ubuntu.com/lubuntu/releases/20.04.3/release/lubuntu-20.04.3-desktop-amd64.iso"
		)
	)
);

requests << Add(
	New HTTP Request(
		Method( "GET" ),
		URL(
			"http://downloads.sourceforge.net/clonezilla/clonezilla-live-2.7.3-19-amd64.iso"
		)
	)
);

data = requests << Download( "show progress", "detailed" );
http_requests = requests << Get Requests();
For( i = 1, i <= N Items( http_requests ), i++,
	Show( http_requests[i] << Get Mime Type() )
);

```

### New OAuth2

**Syntax:** oauth2 = New OAuth2()

**Description:** Creates a new OAuth2 authorization.

```jsl

Names Default To Here( 1 );

/*
https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow
*/

/*
Note: the "code" parameter is set automatically after the redirect occurs
*/
auth_url = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize";
token_url = "https://login.microsoftonline.com/common/oauth2/v2.0/token";
redirect_url = "http://localhost/myapp/";
client_id = "6731de76-14a6-49ae-97bc-6eba6914391e";
client_secret = "JqQX2PNo9bpM0uEihUPzyrh";
scope = "openid offline_access https://graph.microsoft.com/user.read";
auth_fields = [=> ];
token_fields = [=> ];
                                          
oauth2 = New OAuth2();
oauth2 << Grant Type( "Authorization Code" );
oauth2 << Auth URL( auth_url );
oauth2 << Token URL( token_url );
oauth2 << Redirect URL( redirect_url );
                                          
auth_fields["scope"] = scope;
auth_fields["client_id"] = client_id;
token_fields["client_secret"] = client_secret;
                                          
oauth2 << Auth Fields( auth_fields );
oauth2 << Token Fields( token_fields );
                                          
auth_header = oauth2 << Get Auth Header();
request = New HTTP Request(
	URL( "https://graph.microsoft.com/v1.0/me" ),
	Headers( {auth_header} ),
	Method( "GET" )
);
data = request << Send;

```

### New OAuth2 Token

**Syntax:** token = New OAuth2 Token( Account("jmpgoogldev@gmail.com"), Client ID("test"), Client Secret("test 2"), Refresh Token(""), Token URL(""))

**Description:** Creates an OAuth2 Token for securely accessing data across many different web APIs.

```jsl

Names Default To Here( 1 );
token = New OAuth2 Token(
	Account( "jmpgoogldev@gmail.com" ),
	Client ID( "test" ),
	Client Secret( "test 2" ),
	Refresh Token( "" ),
	Token URL( "" )
);

```

### New Web Report

**Syntax:** obj = New Web Report(...)

**Description:** Creates an interactive HTML report.

```jsl

Names Default To Here( 1 );

Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );
webreport = New Web Report(
	Add Report(
		Distribution(
			Continuous Distribution( Column( :weight ) ),
			Nominal Distribution( Column( :age ) )
		),
		Title( "Distribution Web Report" ),
		Description( "This report was created with the sample found in the Scripting Index" )
	),
	Add Report(
		Bivariate(
			Y( :weight ),
			X( :height ),
			Automatic Recalc( 1 ),
			Fit Line( {Line Color( {213, 72, 87} )} ),
			Local Data Filter( Add Filter( columns( :sex ) ) )
		)
	)
);
webreport << Index( Title( "Big Class Report" ) );
file = webreport << Save( "$TEMP" );
If( !Is Empty( file ),
	Web( file )
);

```

### Notebook

**Syntax:** nb = Notebook( name|number )

**Description:** Returns a reference to the specified notebook.

### Open Datafeed

**Syntax:** y = Open Datafeed( ... )

**Description:** Creates an object and window you can send messages to manage real-time data feeds.

```jsl

Names Default To Here( 1 );
exfeed = Open Datafeed(/*Connect( Port( "com3" ), Baud( 4800 ), DataBits( 8 ) ),*/
	Set Script(
		ex = exfeed << getLine;
		Show( ex );
	)
);
For( exi = 0, exi < 5, exi++, /* this is just a way to test a feed when the real data source is not available...*/
	exfeed << Queue Line( Char( exi ) );
	Wait( .5 );
);

```

### Open Help

**Syntax:** w = Open Help( "Help" | "Scripting Index", ... )

**Description:** Opens the online JMP help or the Scripting Index.

**Example 1**

```jsl

Names Default To Here( 1 );
Open Help( "Help" );

```

**Example 2**

```jsl

Names Default To Here( 1 );
Open Help(
	"Scripting Index",
	Search( Term( "Open" ), Match( {"Contains Terms", "Match All Terms", "Ignore Case"} ) ),
	IndexContext( Category( "Functions" ) )
);

```

**Example 3**

```jsl

Names Default To Here( 1 );
Open Help(
	"Scripting Index",
	Search( Term( "alpha" ), Match( {"Contains Terms", "Match All Terms", "Ignore Case"} ) ),
	IndexContext(
		Category( "All Categories" ),
		Object( "Search results" ),
		Method( "Get Alpha" )
	)
);

```

### Parse XML

**Syntax:** Parse XML( string, OnElement( tagname, StartTag( expr ), EndTag( expr ) ), ... )

**Description:** Parses an XML expression using the OnElement expressions for specified XML tags.

**Example 1**

```jsl

Names Default To Here( 1 );
/*See example two for more details*/
ex =
"<table name='fromxml'><col name='x'>[1 2 3]</col><col name='y'>[11 22 33]</col></table>";
Parse XML( ex,
	On Element( "table", Start Tag( New Table( XML Attr( "name" ) ) ) ),
	On Element(
		"col",
		End Tag( New Column( XML Attr( "name" ), Set Values( Parse( XML Text() ) ) ) )
	)
);

```

**Example 2**

```jsl

Names Default To Here( 1 );

doc =
"
<a title='one'>
    WWWa
    <b>BB<c>ZZZ</c>B1</b>
    XXXa
    <b>BBB2</b>
    YYYa
    <c>CCC</c>
</a>";
// doc, above, has tags a, b, and c. The c tags are not handled by the parser, below,
// to show why text should be collected by Text(...) and then processed by EndTag(...)
// Text(...) captures the BB ZZZ B1 while using EndTag(...) only captures the final snippet.
docname = "undefined";
doctext = "";
recordtext = "";
records = {};
NestLevel = 0; // not really used here, but shows how to use Start/End Tag to track nesting level
Parse XML( doc,
	On Element(
		"a",
		Start Tag(
			docname = XML Attr( "title" );
			NestLevel++;
		), 
        // decide here to trim the CRLF and blanks and use a single blank
		Text( doctext = doctext || Trim( XML Text() ) || " " ),
		End Tag( NestLevel-- )
	),
	On Element(
		"b",
		Start Tag( NestLevel++ ), 
        // comment out the next line and...
		Text( recordtext = recordtext || Trim( XML Text() ) || " " ),
		End Tag(
            // ...uncomment the next line and observe the "B1" vs "BB ZZZ B1 " value in records
			// recordtext = XMLText();
			Insert Into( records, recordtext );
			recordtext = "";
			NestLevel--;
		)
	)
);

Show( docname, doctext, records, NestLevel );

```

### Pdf Page Count

**Syntax:** Pdf Page Count( file name)

**Description:** Returns the number of pages in a PDF file.

```jsl

Names Default To Here( 1 );
pageCount = Pdf Page Count( "$documents\myfile.pdf" );

```

### Platform Preference

**Syntax:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**Description:** Sets platform preferences as specified.

```jsl

Names Default To Here( 1 );
Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Platform Preferences

**Syntax:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**Description:** Sets platform preferences as specified.

```jsl

Names Default To Here( 1 );
Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Polytope Uniform Random

**Syntax:** points = Polytope Uniform Random( numSamples, A, b, L, U, neq, nle, nge, <nwarm=200>, <nstride=25> )

**Description:** Generates random uniform points over a convex polytope. The numSamples argument specifies the number of random points to be generated. The A argument is the constraint coefficient matrix. The B argument is the right hand side values of constraints. The L and U arguments are the lower and upper bounds for the variables, respectively. The neq, mle, and nge arguments are the number of equality constraints, the number of less than or equal constraints, and the number of greater than or equal constraints, respectively. The nwarm argument is the number of warm-up repetitions before points are written to the output matrix. The nstride argument is the number of repetitions between each point that is written to the output matrix. Note that the constraints must be listed as equality first, less than or equal next, and greater than or equal last.

```jsl

Names Default To Here( 1 );
A = [1 1 1, 1 2 0];
b = [1, 0.5];
L = [0, 0, 0.1];
U = [1, 1, 1];
points = Polytope Uniform Random( 2000, A, b, L, U, 1, 0, 1, 300, 50 );
dt = As Table( points );
tobj = Report( Ternary Plot( X( :Col1, :Col2, :Col3 ) ) );
tfr = tobj[scalebox( 1 )] << clone box;
New Window( "Example: Polytope Uniform Random",
	Outline Box( "Points on a Ternary Plot", tfr ),
	Outline Box( "Constraints",
		Text Box( "X1 + x2 + x3 = 1" ),
		Text Box( "X2 + 2*x2 >= 0.5" )
	),
	Outline Box( "Variable Bounds",
		Text Box( "0 <= x1 <= 1" ),
		Text Box( "0 <= x2 <= 1" ),
		Text Box( ".1 < x3 <= 1" )
	)
);
Close( dt, no save );
Show( "see new window for example output" );

```

### Pref

**Syntax:** Preferences( pref1( value1 ), ... )

**Description:** Sets preferences as specified.

```jsl

Names Default To Here( 1 );
Preferences( Graph marker size( "Large" ) );

```

### Preference

**Syntax:** Preferences( pref1( value1 ), ... )

**Description:** Sets preferences as specified.

```jsl

Names Default To Here( 1 );
Preferences( Graph marker size( "Large" ) );

```

### Preferences

**Syntax:** Preferences( pref1( value1 ), ... )

**Description:** Sets preferences as specified.

```jsl

Names Default To Here( 1 );
Preferences( Graph marker size( "Large" ) );

```

### Prefs

**Syntax:** Preferences( pref1( value1 ), ... )

**Description:** Sets preferences as specified.

```jsl

Names Default To Here( 1 );
Preferences( Graph marker size( "Large" ) );

```

### Register Addin

**Syntax:** Register Addin( uniqueId, homeFolder, <displayName(name)>, <MinJMPVersion(version)>, <MaxJMPVersion(version)>, <LoadsAtStartup(autoLoad)>, <LoadNow(load)> )

**Description:** Register an add-in

```jsl

Names Default To Here( 1 );
Register Addin(
	"com.mycompany.myaddin",
	"$DOCUMENTS/myaddin",
	displayname( "Sample Addin" )
);

```

### Reload Policies

**Syntax:** Reload Policies()

### Revert Menu

**Syntax:** Revert Menu()

**Description:** Reverts to factory default menus.

```jsl

Names Default To Here( 1 );
/* Reverts menus back to factory default settings. */

```

### Rummage

**Syntax:** treasures = Rummage( box, query )

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Rummage( Window( dt ), "Wilcox" ) << title;

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Rummage( Report( obj ), "Wilcox" ) << details;

```

**Example 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Show(
	Rummage(
		Window( dt ),
		"graph builder",
		Algorithm( "FilterUtility" ),
		Match All Terms( 0 )
	)[1 :: 5] << Title
);
Show( Rummage( Window( dt ), "graph builder", Algorithm( "Basic" ) )[1 :: 3] << Title );

```

### Run Program

**Syntax:** obj = Run Program(

    Executable( "path/etc.exe" ),

  < Options( {"/a", "/b etc" } ) >,

  < Parameter( optParm ) >,

  < Read Function( Function( {this, optParm}, etc ) | "text" | "blob" ) >,

  < Write Function( Function( {this, optParm}, etc ) ) >

)

**Description:** Control an external program using stdin and stdout.

**Example 1**

```jsl

Names Default To Here( 1 );
RP = Run Program(
	Executable( "PING.EXE"/*path probably not needed*/ ),
	Options( {"-n 5", "localhost"} ),
	ReadFunction( Function( {this}, Write( this << read ) ) )
);

```

**Example 2**

```jsl

Names Default To Here( 1 );
RP = Run Program(
	Executable( "CMD.EXE"/*path probably not needed*/ ),
	Options( {"/a", "/q", "/c dir"} ),
	ReadFunction( Function( {this}, Write( this << read ) ) )
);

```

**Example 3**

```jsl

Names Default To Here( 1 );
commands = {"echo this is a test\!n", "ping -n 1 localhost\!n", "exit\!n"};
icommand = 0;
RP = Run Program(
	Executable( "CMD.EXE" ),
	Options( {"/a", "/q"} ),
	ReadFunction( Function( {this}, Write( this << Read ) ) ),
	WriteFunction(
		Function( {this},
			icommand++;
			If( icommand <= N Items( commands ),
				this << Write( commands[icommand] );
				Show( commands[icommand] );
			,
				this << WriteEOF;
				Show( this << CanRead, this << CanWrite, this << isReadEOF );
			);
		)
	)
);

```

### Schedule

**Syntax:** Schedule( sec, scpt )

**Description:** Schedules an event that runs the scpt script argument after sec seconds have elapsed.

```jsl

Names Default To Here( 1 );
Schedule(
	10,
	Beep();
	Print( "Time's up!" );
);

```

### Set Clipboard

**Syntax:** Set Clipboard( text )

**Description:** Puts the specified text onto the system clipboard used by the Edit menu.

```jsl

Names Default To Here( 1 );
Set Clipboard( "example" );

```

### Set Platform Preference

**Syntax:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**Description:** Sets platform preferences as specified.

```jsl

Names Default To Here( 1 );
Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Set Platform Preferences

**Syntax:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**Description:** Sets platform preferences as specified.

```jsl

Names Default To Here( 1 );
Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Set Policy

**Syntax:** Set Policy("PolicyName", <Empty()|#|"value"> )

### Set Preference

**Syntax:** Preferences( pref1( value1 ), ... )

**Description:** Sets preferences as specified.

```jsl

Names Default To Here( 1 );
Preferences( Graph marker size( "Large" ) );

```

### Set Preferences

**Syntax:** Preferences( pref1( value1 ), ... )

**Description:** Sets preferences as specified.

```jsl

Names Default To Here( 1 );
Preferences( Graph marker size( "Large" ) );

```

### Set Toolbar Visibility

**Syntax:** rc = Set Toolbar Visibility( "toolbar-name" | Default | All, <window-class-name | All>, <True | False> )

**Description:** Sets the visibility of a given toolbar for a given class of windows. toolbar-name is the internal name of the toolbar. If Default is passed in as the toolbar name, the specified window class is restored to the default toolbar set for that class of windows. Examples of window-class-name are Data Table, Script, Report, and Journal. If window-class-name is All, then visibility for the specified toolbar is set for all classes of windows.

Returns 1 if successful, 0 if unsuccessful.

```jsl

Names Default To Here( 1 );

// Make the Analyze toolbar visible in Script windows
Set Toolbar Visibility( "Analyze", Script, true );

// Make the Analyze toolbar visible in all classes of windows
Set Toolbar Visibility( "Analyze", All, true );

// Revert Script windows to the default toolbar set for Script windows
Set Toolbar Visibility( Default, Script );

// Revert all windows to their default toolbar set
Set Toolbar Visibility( Default, All );

```

### Shortest Edit Script

**Syntax:** list = Shortest Edit Script(A,B); matrix = Shortest Edit Script( strings( A, B, matrix(1), limit(9999) ) ); list = Shortest Edit Script( lines( A, B, separators("defaults to newline"), ignore("defaults to none")|ignoreWhiteSpace(), matrix(0), limit(9999) ) ); matrix = Shortest Edit Script( sequences(nA, nB, Function({iA,iB}, adata[iA] == bdata[ib] ) ) )

**Description:** Returns one of the shortest edit scripts to convert string A into string B.  The simple form only returns a list.  strings() and lines() have an option to return a matrix or a list.  sequences() only returns a matrix.  The optional limit() will stop the function early if the edit list has more than limit inserts and deletes.  lines() compares lines rather than characters; the optional ignore("characters") or ignoreWhiteSpace() defaults to no ignored characters.   ESC will stop the function if needed.

```jsl

Names Default To Here( 1 );
editList = Shortest Edit Script( "time flies like an arrow", "fruit flies like a banana" );
common = "";/* assemble a longest common subsequence */For( i = 1, i <= N Items( editList ),
	i++,
	If( editList[i][1] == "Common", /* or Insert or Remove */common = common || editList[i][2
		] /* the snippet */
	)
);
common;

```

### Show Addin Builder Dialog

**Syntax:** Show Addin Builder Dialog()

**Description:** Brings up a dialog that can be used to make custom add-ins.

```jsl

Names Default To Here( 1 );
Show Addin Builder Dialog();

```

### Show Addins Dialog

**Syntax:** Show Addins Dialog()

**Description:** Brings up a dialog that shows the status of all registered add-ins.

```jsl

Names Default To Here( 1 );
Show Addins Dialog();

```

### Show Commands

**Syntax:** Show Commands( <keyword=Builtins> )

**Description:** Creates one or more data tables that contain information about various JSL components. The keyword argument determines the content of the output table. Specify Builtins (the default) for built-in operators and functions. Specify Scriptables for all the scriptable commands for objects. Specify Translations for English and localized versions of the scriptable commands. Specify Display Boxes for scriptable commands related to display boxes and display segs. Specify Scriptable Names for the names of scriptable objects. Specify Platform Names for names of platforms.

```jsl

Names Default To Here( 1 );
Show Commands();

```

### Show Preferences

**Syntax:** Show Preferences()

**Description:** Shows the current preference settings in the log.

```jsl

Names Default To Here( 1 );
Show Preferences();

```

### Show Properties

**Syntax:** Show Properties( object )

**Description:** Shows in the log the messages that an object responds to.

```jsl

Names Default To Here( 1 );
Show Properties( Current Data Table() );

```

### Sobol Quasi Random Sequence

**Syntax:** points = Sobol Quasi Random Sequence(nDim, nRow)

**Description:** Generate a sequence of space filling quasi-random numbers using the Sobol sequence in up to 4000 dimensions.

```jsl

Names Default To Here( 1 );
A = Sobol Quasi Random Sequence( 3, 100 );
As Table( A );
Scatterplot 3D( Y( :Col1, :Col2, :Col3 ) );

```

### Socket

**Syntax:** socketHandle = Socket( <STREAM | DGRAM> )

**Description:** Creates a socket variable that can communicate with sockets on this or another networked computer. The default argument is STREAM. Try your own company&apos;s website.

```jsl

Names Default To Here( 1 );

// see the socket's OBJECT messages in the scripting index for better examples
tCall = Socket();
tcall << Ioctl( FIONBIO, 1 );
rc = tCall << connect( "www.jmp.com", "80" );
If( rc[2] == "ok",
	tCall << <<Char To Blob(
		"GET /en_us/home.html HTTP/1.1~0d~0aHost: www.jmp.com~0d~0aConnection: Close~0d~0a~0d~0a",
		"ASCII~HEX"
	);
	While( 1,
		tMessage = tCall << Recv( 100000 );
		If(
			tMessage[2] == "ok",
				Show( Length( tMessage[3] ) ); //typically about six chunks of around 5-20K bytes
		,
			Starts With( tMessage[2], "WOULDBLOCK" ),
				Show( "waiting" ) // sometimes data might not be available yet
		,
			Starts With( tMessage[2], "CLOSED" ),
				Break(); // this is the desired result
		, // else
			Show( tMessage );
			Stop();
		);
	);
	tCall << Close();// done
, // else
	Show( rc );
	Stop();
);

```

### Speak

**Syntax:** Speak( text, <Wait( sync )> )

**Description:** Speaks the text if supported by the operating system. Specifying the optional Wait(true) argument delays script execution until speech has finished.

```jsl

Names Default To Here( 1 );
Speak( "Hello" );

```

### Status Msg

**Syntax:** Status Msg( message )

**Description:** Displays the specified message in the status bar.

```jsl

Names Default To Here( 1 );
Status Msg( "calculating..." );

```

### Subtract

**Syntax:** y = x0 - x1; y = Subtract( x0, x1, ... )

**Description:** Subtracts all subsequent arguments from the first argument. Arguments can be numbers, matrices, or lists of numbers.

```jsl

Names Default To Here( 1 );
6 - 2 - 1;

```

### Test Promise Error After

### Test Promise Result After

### Unit Test

### Unregister Addin

**Syntax:** Unregister Addin( uniqueId)

**Description:** Unregister an add-in

```jsl

Names Default To Here( 1 );
Unregister Addin( "com.mycompany.myaddin" );

```

### Web

**Syntax:** Web( string, <JMP Window> )

**Description:** Opens the URL or file stored in string in the default web browser. The optional second argument specifies that the HTML open in a JMP browser window.

**Event Handler**

```jsl

Names Default To Here( 1 );
//Making a clickable link show up in a formula column
New Table( "Example",
	Add Rows( 2 ),
	New Column( "URL",
		"Character",
		"Nominal",
		Formula( "https://www.jmp.com/" || :Page ),
		Set Property(
			"Event Handler",
			Event Handler(
				Click( JSL Quote( Function( {dt, col, row}, Web( dt:col[row] ) ) ) )
			)
		)
	),
	New Column( "Page",
		"Character",
		"Nominal",
		Set Values( {"support/knowledge_base.shtml", "en_us/about.html"} )
	)
);

```

**Simple**

```jsl

Names Default To Here( 1 );
Web( "http://www.jmp.com/" );

```

### With Clipboard

**Syntax:** two = With Clipboard( clp, box << Paste; 1 + 1 )

**Description:** If the JSL within this function would have normally pasted something from the OS Clipboard, it is instead pasted from the provided Clipboard object.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Property( "Units", "HELLO" );
clp = Clipboard Capture( dt << Select Columns( :height ) << Copy Column Properties );
With Clipboard( clp, dt << Select Columns( :weight ) << Paste Column Properties );

```

### XML Attr

**Syntax:** value = XML Attr( attr name ); aa = XML Attr()

**Description:** Extracts the string value of an XML attribute in the context of being evaluating in a Parse XML() command. If no name if given, an associative array of all attribute name/value pairs is returned.

```jsl

Names Default To Here( 1 );
ex =
"<table name='fromxml'><col name='x'>[1 2 3]</col><col name='y'>[11 22 33]</col></table>";
Parse XML( ex,
	On Element( "table", Start Tag( New Table( XML Attr( "name" ) ) ) ),
	On Element(
		"col",
		End Tag( New Column( XML Attr( "name" ), Set Values( Parse( XML Text() ) ) ) )
	)
);

```

### XML Decode

**Syntax:** text = XML Decode( textxml )

**Description:** Decodes symbols in XML to ordinary text, changes " to ", < to <, &gt to >; &amp; to &.

```jsl

Names Default To Here( 1 );
text = XML Decode( "isSmallAlpha = letter&gt;=&quot;a&quot; &amp; letter&lt;=&quot;z&quot;" );

```

### XML Encode

**Syntax:** textxml = XML Encode( text )

**Description:** Prepares text for embedding in XML, changes " to ", < to <, > to > & to &amp;.

```jsl

Names Default To Here( 1 );
textxml = XML Encode( "\[isSmallAlpha = letter>="a" & letter<="z"]\" );

```

### XML Text

**Syntax:** value = XML Text()

**Description:** Extracts the string text of the body of an XML tag in the context of being evaluating in a Parse XML() command.

```jsl

Names Default To Here( 1 );
ex =
"<table name='fromxml'><col name='x'>[1 2 3]</col><col name='y'>[11 22 33]</col></table>";
Parse XML( ex,
	On Element( "table", Start Tag( New Table( XML Attr( "name" ) ) ) ),
	On Element(
		"col",
		End Tag( New Column( XML Attr( "name" ), Set Values( Parse( XML Text() ) ) ) )
	)
);

```

### \[...]\

**Syntax:** y = \[string]\

**Description:** Passages requiring many escape characters can use the delimiter \[...]\.

```jsl

Names Default To Here( 1 );

jslPhrase =
"The JSL to do this is :\[
a = "hello";
b = a|| " world.";
show(b);
]\ and you use the Submit command to run it.";
Show( jslPhrase );

```

