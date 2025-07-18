# Utility



### Add

**Syntax:** y = x0 + x1; y = Add( x0, x1, ... )

**Beschreibung:** Fügt alle Argumente hinzu, diese können Zahlen, Matrizen oder Listen von Zahlen sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Pi() + 10;

```

### Beep

**Syntax:** Beep()

**Beschreibung:** Gibt einen Warnton ab.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Beep();

```

### Blob MD5

**Syntax:** blobResult = Blob MD5( blob )

**Beschreibung:** Erzeugt ein 16-Byte-Ergebnis-BLOB aus einem Quell-BLOB (Binary Large OBject). Das 16-Byte-BLOB ist die MD5-Prüfsumme (oder das Hash) des Quell-BLOB.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Hex(/* make it printable */ Blob MD5(/* get the hash */
		Load Text File(/* a file from the samples */ "$SAMPLE_IMPORT_DATA/animals.txt",
			BLOB/* the result is a BLOB, not a string */
		)
	)
) == "763D3C9F5F3E92951B3A3DC965084DAC" /* benchmark hash value */ /* the result is 1 if the benchmark matches */
;

```

### Blob Peek

**Syntax:** blobResult = Blob Peek( blob, offset, &lt;length&gt; )

**Beschreibung:** Erzeugt aus einem Unterbereich von Bytes des angegebenen Blobs ein neues Blob. Das Argument offset ist nullbasiert, also befindet sich das erste Byte an Offset 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Blob Peek( Char To Blob( "Quick Bob, eat your lunch!" ), 6 /*Zero based!*/, 3 );

```

### Build Information

**Syntax:** y = Build Information()

**Beschreibung:** Gibt Datum und Uhrzeit der Generierung, Version oder Debug-Generierung und Produktname zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Build Information();

```

### Caption

**Syntax:** y = Caption( &lt;{h, v}&gt;, text | remove, &lt;Delayed( seconds )&gt;, &lt;Font(font)&gt;, &lt;Font Size(size)&gt;, &lt;Text Color(color)&gt;, &lt;Back Color(color)&gt;, &lt;Spoken(bool)&gt; )

**Beschreibung:** Zeigt ein Textfenster an der von {h, v} angegebenen Stelle und mit dem vom Argument text angegebenen Text an. Das Argument Delayed( seconds ) legt die Wartezeit vor jeder Texteinblendung fest.

**JMP Version hinzugefügt:** Vor Version 14

#### Fenstertext entfernen

```jsl

Caption( "explanation" );
Wait( 2 );
Caption( remove );

```

#### Formatierter Fenstertext

```jsl

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

### Clipboard Capture

**Syntax:** clp = Clipboard Capture( box &lt;&lt; Copy )

**Beschreibung:** If the JSL within this function would have normally copied something to the OS Clipboard, it is instead copied to a Clipboard object and returned.

**JMP Version hinzugefügt:** 19

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Property( "Units", "in" );
clp = Clipboard Capture( dt << Select Columns( :height ) << Copy Column Properties );
Show( Get Clipboard() );
Show( clp << Get Flavor Data( "Text", <<Text ) );

```

### Current Journal

**Syntax:** y = Current Journal( &lt;Project(title|index|box|window)&gt; )

**Beschreibung:** Gibt eine Referenz auf das aktuelle Journal im aktuellen Projekt zurück (oder auf kein Projekt, wenn das Skript nicht in einem Projekt ausgeführt wird).



Um ein Projekt anzugeben, verwenden Sie das optionale Argument Projekt() mit einem Titel, Index, Anzeigefeld oder Fensterobjekt. Verwenden Sie Projekt(0), um kein Projekt anzugeben, wenn das Skript in einem Projekt ausgeführt wird.



Wenn im vorgegebenen Projekt kein aktuelles Journal vorhanden ist, wird automatisch eines erstellt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Current Journal();

```

### Data Connector Registry

**Syntax:** Data Connector Registry()

**Beschreibung:** Die Sammlung von Datenkonnektoren für JMP.

**JMP Version hinzugefügt:** 18

```jsl


dc = Data Connector Registry() << Get( "com.jmp.sql_server" );

```

### Datafeed

**Syntax:** y = Open Datafeed( ... )

**Beschreibung:** Erstellt ein Objekt und ein Fenster für Echtzeit-Daten-Feeds, an das Mitteilungen gesendet werden können.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

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

**Beschreibung:** Wenn dieser Ausdruck im JSL-Debugger ausgewertet wird, stoppt der Debugger die Ausführung des Skripts.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

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

**Beschreibung:** Zeichenkette mit URI-Verschlüsselung verschlüsseln

**JMP Version hinzugefügt:** 14

```jsl


Decode URI( "Foo%20Bar" );

```

### Decode64 Blob

**Syntax:** y = Decode64 Blob( base64String )

**Beschreibung:** Entschlüsselt eine druckbare Basis64-Zeichenkette in einen Blob.

**JMP Version hinzugefügt:** 14

```jsl

Decode64 Blob( "dGhlIHF1aWNrIGJyb3duIGZveA==" );

```

### Decode64 Double

**Syntax:** y = Decode64 Double( base64String )

**Beschreibung:** Gibt eine Gleitpunktzahl mit doppelter Genauigkeit aus der Base64-codierten Zeichenkette zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Decode64 Double( "P/lUWYIBG9Q=" );

```

### Disable JMP Live URL

**Syntax:** Disable JMP Live URL(url)

**Beschreibung:** Deaktiviert eine JMP Live-URL. Diese Methode ist nur während der Ausführung von jmpStartAdmin.jsl verfügbar. Ein Sternchen * kann als Platzhalter verwendet werden, um URLs anzugeben wie * (beliebige URL), *.jmp.com (eine URL, die mit .jmp.com endet), http://public.* (eine URL, die mit http://public. beginnt) oder *public* (eine URL, die „public“ enhält).

**JMP Version hinzugefügt:** 15

```jsl


Disable JMP Live URL( "*public.jmp.com" );

```

### Disable Proxy Settings

**Syntax:** Disable Proxy Settings( 1|0 )

**Beschreibung:** Deaktiviert oder aktiviert Proxy-Einstellungen während der Ausführung von jmpStartAdmin.jsl. Standardmäßig sind Proxy-Einstellungen aktiviert.

**JMP Version hinzugefügt:** 15

```jsl


Disable Proxy Settings( 1 );

```

### Divide

**Syntax:** y = x0 / x1; y = Divide( x0, &lt;x1&gt;, ... )

**Beschreibung:** Dividiert durch alle nachfolgenden Argumente vom ersten Argument ab. Argumente können Zahlen, Matrizen oder Listen mit Zahlen sein. Bei Aufruf mit nur einem Argument ist das Ergebnis reziprok.

**JMP Version hinzugefügt:** Vor Version 14

#### Einfach

```jsl

6 / 3 / 2;

```

#### Reziprok

```jsl

x = Divide( 5 );
y = 1 / 5;
Show( x, y );

```

### Empty

**Syntax:** y = Empty()

**Beschreibung:** Gibt einen leeren Wert zurück. Wird im Formeleditor für nicht angegebene Argumente verwendet.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Empty();

```

### Enable JMP Live URL

**Syntax:** Enable JMP Live URL(url)

**Beschreibung:** Aktiviert eine JMP Live-URL. Diese Methode ist nur während der Ausführung von jmpStartAdmin.jsl verfügbar. Ein Sternchen * kann als Platzhalter verwendet werden, um URLs anzugeben wie * (beliebige URL), *.jmp.com (eine URL, die mit .jmp.com endet), http://public.* (eine URL, die mit http://public. beginnt) oder *public* (eine URL, die „public“ enhält).

**JMP Version hinzugefügt:** 15

```jsl


Enable JMP Live URL( "https://public.jmp.com" );

```

### Enable Proxy Settings

**Syntax:** Enable Proxy Settings( 1|0 )

**Beschreibung:** Aktiviert oder deaktiviert Proxy-Einstellungen während der Ausführung von jmpStartAdmin.jsl. Standardmäßig sind Proxy-Einstellungen aktiviert.

**JMP Version hinzugefügt:** 15

```jsl


Enable Proxy Settings( 0 );

```

### Encode URI

**Syntax:** Encode URI( value )

**Beschreibung:** Zeichenkette mit URI-Verschlüsselung verschlüsseln

**JMP Version hinzugefügt:** 14

```jsl


Encode URI( "Foo Bar" );

```

### Encode64 Blob

**Syntax:** s = Encode64 Blob( x )

**Beschreibung:** Verschlüsselt einen Blob in eine druckbare Basis64-Zeichenkette.

**JMP Version hinzugefügt:** 14

```jsl

Encode64 Blob( Char To Blob( "the quick brown fox" ) );

```

### Encode64 Double

**Syntax:** s = Encode64 Double( x )

**Beschreibung:** Gibt die Gleitpunktzahl als Zeichenkette in Base64-Codierung zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Encode64 Double( -1.5831 );

```

### Faure Quasi Random Sequence

**Syntax:** points = Faure Quasi Random Sequence(nDim, nRow)

**Beschreibung:** Mit der Faure-Folge eine Folge von raumfüllenden Quasi-Zufallszahlen erzeugen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

A = Faure Quasi Random Sequence( 3, 100 );
As Table( A );
Scatterplot 3D( Y( :Col1, :Col2, :Col3 ) );

```

### Force Action Notes

**JMP Version hinzugefügt:** 16

### Format Pattern

**Syntax:** s = Format( x, "Format Pattern", pattern, &lt;width&gt;, &lt;dec&gt;)x = In Format( s, "Format Pattern", pattern, &lt; &lt;&lt;Use Locale(b=1)&gt; )obj = Format("Format Pattern", pattern, &lt;width&gt;, &lt;dec&gt;)

**Beschreibung:** Formatmuster sind Zeichenketten, die ein Datum/Uhrzeit-Format definieren, etwa „<JJJJ></><MM></><TT> <hh><:><mm><:><ss><ampm>“. Die Teile des Musters in spitzen Klammern werden Felddeskriptoren genannt. Die Felddeskriptoren stellen einen Wert dar (wie „<JJJJ>“, ein Jahr mit vier Stellen) oder einen anderen Datum/Uhrzeit-Text (wie "</>", ein vom Gebietsschema abhängiges Trennzeichen für das Datum). Ein Formatmuster ermöglicht es Ihnen, Formate zu erstellen, die in JMP nicht bereitgestellt werden. Diese Formate können zum Formatieren und Eingeben von Daten verwendet werden.

**JMP Version hinzugefügt:** 16

```jsl

s = Format( Today(), "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm>" );
x = Informat( "2020/02/10 14:54", "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm>" );
Show( s, x );
                                                /*
Felddeskriptoren

Datumsangaben
(können nicht mit Felddeskriptoren für die Dauer verwendet werden)
================================================================================
<YYYY>        Jahr mit vier Ziffern. (1-4 Ziffern werden bei der Eingabe
              akzeptiert.)
<YY>          Jahr mit zwei Ziffern
<yyyy>        ISO-Jahr mit vier Ziffern; ähnlich ISO-Wochen. (Bei der Eingabe
              werden 1-4 Ziffern akzeptiert.)
<yy>          ISO-Jahr mit zwei Ziffern; ähnlich ISO-Wochen.
<YYYY.>       Jahr mit fraktionellem Jahr. Beschreibt Datum und Uhrzeit
              vollständig.
<M>           Nummer des Monats (1..12)
<MM>          Nummer des Monats, mit Null aufgefüllt (01..12)
<Month>       Monatsname ausgeschrieben
<Mmm>         Monatsname abgekürzt
<MMM>         Monatsname in drei Buchstaben
<WW1>         Nummer der Woche mit zwei Ziffern, mit Nullen aufgefüllt. Woche 2
              beginnt am ersten Sonntag des Jahres. Woche 1 ist die Teilwoche
              vor dem ersten Sonntag. (01..54)
<WW2>         Nummer der Woche mit zwei Ziffern, mit Nullen aufgefüllt. Woche 1
              beginnt am ersten Sonntag des Jahres. Woche 0 ist die Teilwoche
              vor dem ersten Sonntag. (00..53)
<ww>          Nummer der ISO-Woche mit zwei Ziffern, mit Nullen aufgefüllt. Die
              Wochen beginnen am Montag. Woche 1 ist die erste Woche in dem Jahr
              mit 4 oder mehr Tagen. Es gibt keine Teilwochen, stattdessen kann
              die erste oder letzte Woche in das Vorjahr bzw. Folgejahr reichen.
              (01..53)
<D>           Tag des Monats (1..31)
<DD>          Tag des Monats, mit Nullen aufgefüllt (01..31)
<Q>           Quartal des Jahres (1..4)
<Q#>          „Q“ gefolgt vom Quartal des Jahres (1..4)
<DayOfWeek>   Name des Wochentags
<DW>          Wochentag als Zahl. 1 = Sonntag, 7 = Samstag
<dw>          Wochentag als Zahl. 1 = Montag, 7 = Sonntag
</>           Trennzeichen beim Datum des Gebietsschemas. (Die meisten
              Trennzeichen werden bei der Eingabe akzeptiert.)
<->           Trennzeichen ‚-‘beim ISO-Datum. (Die meisten Trennzeichen werden
              bei der Eingabe akzeptiert.)
</?>          Optionales Datumstrennzeichen bei der Datumseingabe. Das
              Trennzeichen wird bei der Ausgabe nie geschrieben.
<'T'>         Das ‚T‘ in ISO-Datumsangaben

Uhrzeiten
(einige können mit Felddeskriptoren für die Dauer verwendet werden)
================================================================================
<hh>          Das Stundenformat entspricht dem aktuellen Gebietsschema. Wenn ein
              <ampm>-Deskriptor vorhanden ist, wird abhängig vom Gebietsschema
              das 12- oder 24-Stunden-Format verwendet. Wenn ein
              <AMPM>-Deskriptor vorhanden ist, wird das 12-Stunden-Format
              verwendet. Ansonsten wird das 24-Stunden-Format verwendet. (Kann
              bei Deskriptoren für Felder zur Angabe der Dauer nicht verwendet
              werden.)
<zhh>         Das Stundenformat entspricht dem aktuellen Gebietsschema und wird
              mit Nullen aufgefüllt. Wenn ein <ampm>-Deskriptor vorhanden ist,
              wird abhängig vom Gebietsschema das 12- oder 24-Stunden-Format
              verwendet. Wenn ein <AMPM>-Deskriptor vorhanden ist, wird das
              12-Stunden-Format verwendet. Ansonsten wird das 24-Stunden-Format
              verwendet. (Kann bei Deskriptoren für Felder zur Angabe der Dauer
              nicht verwendet werden.)
<hh24>        Stundenangabe im 24-Stunden-Format und mit Nullen aufgefüllt
              (00..23)
<mm>          Minutenangabe, mit Nullen aufgefüllt (00..59)
<ss>          Sekundenangabe, mit Nullen aufgefüllt (00..59)
<ampm>        AM/PM-Symbol für das aktuelle Gebietsschema. (Kann nicht mit
              Felddeskriptoren für die Dauer verwendet werden.)
<AMPM>        Gebietsschema-unabhängiges AM/PM-Symbol „AM“ oder „PM“. (Kann bei
              Deskriptoren für Felder zur Angabe der Dauer nicht verwendet
              werden.)
<:>           Das Trennzeichen für die Uhrzeit des Gebietsschemas.
<::>          Das Trennzeichen für die ISO-Uhrzeit ‚:‘. (Das Trennzeichen für
              die Uhrzeit des Gebietsschemas wird auch bei der Eingabe
              akzeptiert.)
<:?>          Optionales Uhrzeittrennzeichen bei der Datumseingabe. Das
              Trennzeichen wird bei der Ausgabe nie geschrieben.

Dauer
(können nicht mit Felddeskriptoren für das Datum verwendet werden)
================================================================================
<Day>         Tagesanzahl. Wird bei der Dauer als signifikantestes Feld
              verwendet. Kann mit keiner anderen „Anzahl“ verwendet werden.
<Hour>        Stundenanzahl. Wird bei der Dauer als signifikantestes Feld
              verwendet. Kann mit keiner anderen „Anzahl“ verwendet werden.
<Minute>      Minutenanzahl. Wird bei der Dauer als signifikantestes Feld
              verwendet. Kann mit keiner anderen „Anzahl“ verwendet werden.

Sonstige
================================================================================
<<>           Wird durch „<“ ersetzt
*/

```

### Get Addin

**Syntax:** Get Addin( ID )

**Beschreibung:** Ruft ein anhand der ID angegebenes registriertes Add-in ab.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

addin = Get Addin( "com.mycompany.myaddin" );

```

### Get Addins

**Syntax:** Get Addins( )

**Beschreibung:** Gibt eine Liste aller registrierten Add-ins zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

addins = Get Addins();
addin ids = Get Addins() << id;
Show( addins, addin ids );

```

### Get Addr Info

**Syntax:** Get Addr Info( string )

**Beschreibung:** Sucht nach der numerischen Adresse eines Namens. In den meisten Fällen sollte der Name für künftige IPV6-Kompatibilität verwendet werden.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Get Addr Info( "www.jmp.com" )[3][4];

```

### Get Clipboard

**Syntax:** Get Clipboard()

**Beschreibung:** Ruft den aktuellen Inhalt der Zwischenablage ab

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Get Clipboard();

```

### Get Expr Location

**Syntax:** Get Expr Location(&lt;expression&gt;, [{"TokenStartLine"|"TokenStartCol"|"TokenStart"|"TokenLength"|"TreeStart"|"TreeEnd"|"TreeLength"}+]

**Beschreibung:** Ruft die Positionen des obersten Tokens in einem geparsten Ausdruck ab. Der Standardaufruf gibt {die Quelldatei, TokenStartLine, TokenStartCol, TokenLength} zurück.

**JMP Version hinzugefügt:** 17

#### Ausgabe auswählen

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
e = Parse( " :height + 20 " );
Get Expr Location( e, {"TreeStart", "TreeEnd"} );

```

#### Standardausgabe

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
e = Parse( ":height + 20" );
Get Expr Location( e );

```

#### Teilzeichenkette ersetzen

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
data = " :height + 20 ";
e = Parse( data );
positions = Get Expr Location( Arg( e, 2 ), {"TreeStart", "TreeLength"} );
Munger( data, positions[1], positions[2], "45" );

```

### Get Name Info

**Syntax:** Get Name Info( string )

**Beschreibung:** Sucht nach dem Namen einer numerischen Adresse. In den meisten Fällen sollte der Name für künftige IPV6-Kompatibilität verwendet werden.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Get Name Info( "149.173.5.120" )[3][4];

```

### Get Notebook List

**Syntax:** notebookList = Get Notebook List()

**Beschreibung:** Gibt eine Liste aller geöffneten Notebooks zurück.

**JMP Version hinzugefügt:** 19

### Get OAuth2 Grant Types

**Syntax:** Get OAuth2 Grant Types

**Beschreibung:** Ruft die von JMP unterstützten OAuth2-Berechtigungstypen ab.

**JMP Version hinzugefügt:** 15

```jsl


/*
https://oauth.net/2/grant-types/
*/
grant_types = Get OAuth2 Grant Types();
Show( grant_types );

```

### Get OpenID Connect Discovery

**JMP Version hinzugefügt:** 15

```jsl


url = "https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration";
aa = Get OpenID Connect Discovery( url );
Show( aa );

```

### Get OpenIDC Discovery

**JMP Version hinzugefügt:** 15

### Get Platform Preference

**Syntax:** Get Platform Preferences( &lt; platformName &lt; ( optionName, ... ) &gt; ... &gt; )

**Beschreibung:** Ruft Plattformvoreinstellungen wie angegeben ab.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Get Platform Preferences( Bivariate( Fit Line ), DOE );

```

### Get Platform Preferences

**Syntax:** Get Platform Preferences( &lt; platformName &lt; ( optionName, ... ) &gt; ... &gt; )

**Beschreibung:** Ruft Plattformvoreinstellungen wie angegeben ab.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Get Platform Preferences( Bivariate( Fit Line ), DOE );

```

### Get Policies

**Syntax:** Get Policies( &lt;Machine|User|Both&gt; )

**Beschreibung:** Gibt ein assoziatives Array mit den Namen und Werten der aktuellen Richtlinien zurück.

**JMP Version hinzugefügt:** 18

```jsl

Get Policies();

```

### Get Policy

**Syntax:** Get Policy( "PolicyName" )

**JMP Version hinzugefügt:** 18

### Get Preference

**Syntax:** Get Preferences( pref1, ... )

**Beschreibung:** Ruft Voreinstellungen wie angegeben ab.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Get Preferences( Graph marker size );

```

### Get Preferences

**Syntax:** Get Preferences( pref1, ... )

**Beschreibung:** Ruft Voreinstellungen wie angegeben ab.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Get Preferences( Graph marker size );

```

### Glue

**Syntax:** y = ( expr1; expr2; ... ); y = Glue( expr1, expr2, ... )

**Beschreibung:** Wertet jedes Argument aus und gibt das letzte Ergebnis zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

ex1 = 1;
ex2 = 2;

```

### Gzip Compress

**Syntax:** blob = Gzip Compress( blob )

**Beschreibung:** Komprimiert einen Blob von Daten in einen GZip-Blob.

**JMP Version hinzugefügt:** 14

```jsl

Gzip Compress(
	Char To Blob( "random data does not usually compress well and may get larger" )
);

```

### Gzip Uncompress

**Syntax:** blob = Gzip Uncompress( blob )

**Beschreibung:** Dekomprimiert einen Blob von Gzip-Daten in einen Blob.

**JMP Version hinzugefügt:** 14

```jsl

Gzip Uncompress(/*typically this data might come from GzipCompress() but might also come from a .gz file using loadTextFile with the blob option*/
	Char To Blob(
		"~1F~8B~08~00~00~00~00~00~00~0A~0D~CA~C1~0D~00~21~08~04~C0V~B6~B5~CDA~FC~80~5C~00c~EC^~E7=~C9)~E1~106~21~A1~85~19~8DU~8Bf~07_~F8~9FZ~85~ADfx~13~CE~83~A1~0Dc~0E~CD~0B~94*~16~1E=~00~00~00",
		"ascii~hex"
	)
);

```

### Host is

**Syntax:** y = Host is( "Mac"|"Windows"|"Bits32"|"Bits64"|"x86_64"|"arm64" )

**Beschreibung:** Gibt 1 zurück, wenn die JMP-Anwendung dem Argument entspricht, andernfalls 0. Die Argumente Windows und Mac prüfen das angegebene Betriebssystem, und die Argumente Bits32 und Bits64 prüfen die angegebene 32-Bit- oder 64-Bit-Anwendung. Es kann jeweils nur ein Argument geprüft werden.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

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

**Beschreibung:** Gibt 1 zurück, wenn die Alt-Taste gedrückt wird, andernfalls 0. Dient der Verwendung in grafischen Rückrufskripten. Auf dem Mac ist die Alt-Taste die Optionstaste.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

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

**Beschreibung:** Gibt 1 zurück, wenn die Befehlstaste gedrückt wird, andernfalls 0. Dient der Verwendung in grafischen Rückrufskripten.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

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

**Beschreibung:** Gibt 1 zurück, wenn die Kontexttaste gedrückt wird, andernfalls 0. Dient der Verwendung in grafischen Rückrufskripten.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

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

**Beschreibung:** Gibt 1 zurück, wenn die Steuerungstaste gedrückt wird, andernfalls 0. Dient der Verwendung in grafischen Rückrufskripten. Auf dem Mac ist die Steuerungstaste die Befehlstaste.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

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

**Beschreibung:** Legt fest, ob die angegebene URL in dieser JMP-Sitzung verwendet werden kann. URLs können mit dem Skript jmpStartAdmin.jsl aktiviert und/oder deaktiviert werden. Dadurch wird nicht festgelegt, ob es sich um eine gültige URL handelt, und auch nicht, ob der Benutzer sich anmelden kann. Es wird nur festgelegt, ob die URL von JMP gesperrt ist.

**JMP Version hinzugefügt:** 15

```jsl


url = "http://public.jmp.com";
Show( Is JMP Live URL Enabled( url ) );

```

### Is Option Key

**Syntax:** y = Is Option Key()

**Beschreibung:** Gibt 1 zurück, wenn die Optionstaste gedrückt wird, andernfalls 0. Dient der Verwendung in grafischen Rückrufskripten.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

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

**Beschreibung:** Gibt 1 zurück, wenn die Umschalttaste gedrückt wird, andernfalls 0. Dient der Verwendung in grafischen Rückrufskripten.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

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

**Beschreibung:** Gibt "Standard" oder "Pro" basierend auf der Version des Produkts zurück, das lizenziert wurde.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

JMP Product Name();

```

### JMP Version

**Syntax:** y = JMP Version()

**Beschreibung:** Gibt die JMP version (release.revision{.fix}) zurück; nicht verfügbar vor JMP 6.0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

JMP Version();

```

### JSL Encrypted

**Syntax:** y = JSL Encrypted(script)

**Beschreibung:** Bettet ein verschlüsseltes Skript in ein anderes Skript ein. Sie erstellen ein verschlüsseltes Skript durch Auswahl von „Bearbeiten > Skript verschlüsseln“ im Hauptmenü eines Skripteditors. Geben Sie Ihre Kennwörter ein und der verschlüsselte Text wird in einem neuen Fenster angezeigt. Kopieren Sie diesen Text in einen JSL-Befehl Encrypted(""), um das verschlüsselte Skript in ein anderes Skript einzubetten.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

JSL Encrypted(
	"//-e6.0.2\!NWUSXEHSB?SRAMXPSY?;KDGMNGPQFZP;?><JLEXCQZYIGWSI@<FOPBLDKJ?HEUPTOGSZDYWFDMB;NEVB;HFP=VQ@N;LCVQPWRHIXEIPFKGO=H?DWS?KFQRIPBEPSAE<AM?YG=C@VFRENPEW>@;ND=JA<?=WOZZOG>FZBZKZLMFOX?YF@LWA=B=SJXDGVW>VYLBRJT<I<MFE<Q??QCUOZM?RY>RXLBJRH=BH<EGVSEMABSS<IE=CAPID;XM;;?XIU<FA=SCE<CB;AGOCZWHZXK;*"
);

```

### JSL Quote

**Syntax:** y = JSL Quote(script)

**Beschreibung:** JSL-Skript in einer Variablen speichern, einschließlich aller Kommentare und Formatierungen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl


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

**Syntax:** dll = Load DLL( file path | Base Name( file path without extension ), &lt; AutoDeclare( bool | Quiet | Verbose) | Quiet | Verbose )&gt; )

**Beschreibung:** Lädt eine DLL, auf die der angegebene Pfad zeigt.

**JMP Version hinzugefügt:** Vor Version 14

#### Cross platform using Base Name()

```jsl

dll = Load DLL( Base Name( "/path/to/dll/financial" ) );
// Loads "financial.dll" on Windows and "libfinancial.dylib" on Mac
// Declarations for "irr" and "npv" are auto-loaded
myirr = dll << irr( 0.1, -51000, 1000, 900, 950 );
mynpv = dll << npv( 0.05, -51000, 1000, 900, 9500 );
dll << UnloadDLL();

```

#### Windows only

```jsl

If( Host is( "Windows" ),
	dll = Load DLL( "C:/Windows/System32/User32.DLL" );
	dll << CallDLL( "MessageBeep", "n", 0 );
	Wait( 1 );
	dll << CallDLL( "MessageBeep", "n", 0 );
	dll << UnloadDLL();
);

```

### Log Table Messages

**Syntax:** Log Table Messages( &lt;On|Off&gt;, &lt;Enable(subject, ...)&gt;, &lt;Disable(subject, ...)&gt;, &lt;Include(msgname, ...)&gt;, &lt;Exclude(msgname, )&gt;

**Beschreibung:** Control logging of data table messages (such as DtMsgClose). By default logging is off, but all subjects are enabled. (If you turn logging on, you do not need to enable the subjects you&apos;re interested in.) Only a subset of all messages are logged. Not available in retail builds.

**JMP Version hinzugefügt:** 17

#### Turn off logging

```jsl

Log Table Messages( Off );

```

#### Turn on logging

```jsl

Log Table Messages( On );

```

#### Turn on logging, and include all messages except "DtMsgClose"

```jsl

Log Table Messages( On, Exclude( "DtMsgClose" ) );

```

#### Turn on logging, and include only the "DtMsgClose" message

```jsl

Log Table Messages( On, Include( "DtMsgClose" ) );

```

#### Turn on logging, but ignore column messages

```jsl

Log Table Messages( On, Disable( "Column" ) );

```

#### Turn on logging, but ignore table messages

```jsl

Log Table Messages( On );
Log Table Messages( Disable( "Table" ) );

```

### Mail

**Syntax:** Mail( "address", "subject", "message", &lt;"attachment filepath"&gt; | { "attachment filepath", ...} )

**Beschreibung:** Erstellt eine ausgehende E-Mail wie angegeben, wenn das Betriebssystem dies zulässt. Nicht alle Optionen funktionieren bei allen Betriebssystemversionen. In der Hilfe finden Sie Details dazu.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Mail( "test@example.com", "revelation", "JMP is great.", "$SAMPLE_DATA/Big Class.jmp" );

```

### Main Menu

**Syntax:** menu = Main Menu( command, &lt;window name&gt; )

**Beschreibung:** Führt den angegebenen Hauptmenübefehl aus.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

Main Menu( "Sample Index" );

```

#### Beispiel 2

```jsl

Main Menu( "Help:Sample Index" );

```

### Minus

**Syntax:** y = -x; y = Minus( x )

**Beschreibung:** Negiert x. Das Argument kann eine Zahl, Matrix oder Liste von Zahlen sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

-Pi();

```

### Multiple File Import

**Syntax:** mfiObj = Multiple File Import();

**Beschreibung:** Erstellt ein Objekt für den Import mehrerer Dateien. Das Objekt akzeptiert Meldungen, um einen Ordner festzulegen, Dateien zu filtern und zu importieren. Um ein Dialogfeld aufzurufen, verwenden Sie die Meldung „Fenster erstellen“. Für den sofortigen Import verwenden Sie die Meldung „Daten importieren“. Dabei wird eine Liste der erstellten Tabellen zurückgegeben.

**JMP Version hinzugefügt:** 14

#### Interaktives Beispiel

```jsl

// use the save-script-to-script-window button 
// in the MFI dialog to see more messages
// for filtering files and controlling the import
Multiple File Import(
	<<Set Folder( "$DESKTOP" ),
	<<Set Name Filter( "*.csv;" ),
	<<Set Name Enable( 1 )
) << Create Window;

```

#### Skriptbeispiel

```jsl


mfi = Multiple File Import();
mfi << Set Folder( "$SAMPLE_IMPORT_DATA" );
mfi << Set Name Filter( "*.txt" );
mfi << Set Name Enable( 1 );
tables = mfi << Import Data();

```

### Multiply

**Syntax:** y = x0 * x1; y = Multiply( x0, x1, ... )

**Beschreibung:** Multipliziert alle Argumente, diese können Zahlen, Matrizen oder Listen von Zahlen sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

2 * Pi();

```

### Name

**Syntax:** Name(string)

**Beschreibung:** Ein Name dient lediglich dem Aufruf eines Elements. Namen werden für Variablen und Funktionen verwendet und können direkt in Skripten verwendet werden, solange bestimmte Regeln eingehalten werden. Wenn der Name mit einem alphabetischen Zeichen oder einem Unterstrich beginnt und mit alphanumerischen Zeichen, Leerzeichen, mathematischen Unicode-Symbolen und bestimmten Interpunktionszeichen (Apostroph (’), Prozentzeichen (%), Punkt (.), Schrägstrich rückwärts (\\) und Unterstrich (_)) fortgesetzt wird, kann der Name direkt in Skripten verwendet werden. Bei Namen, die diese Regeln nicht einhalten, kann das Schlüsselwort Name() verwendet werden.

**JMP Version hinzugefügt:** 14

```jsl

Name( "taxable income(2011)" ) = 456000;
tax = .25;
Print( tax * Name( "taxable income(2011)" ) );

```

### New Clipboard

**Syntax:** clp = New Clipboard( &lt;&lt;&lt;Get From OS&gt; )

**Beschreibung:** Creates a new Clipboard, either empty or with access to the OS clipboard.

**JMP Version hinzugefügt:** 19

```jsl


clp = New Clipboard( <<Get From OS );
New Window( "Img", clp << Get Flavor Data( "Graphic" ) )
;

```

### New HTTP Request

**Syntax:** obj = New HTTP Request(URL(...), Method(...), &lt;Form(&lt;Fields(...)&gt;, &lt;Files(...)&gt;)&gt; | &lt;File(...)&gt; | &lt;Blob(...)&gt; | &lt;JSON(...)&gt;, &lt;QueryString(...)&gt;, &lt;Headers(...)&gt;, &lt;Username(...)&gt;, &lt;Password(...)&gt;)

**Beschreibung:** Erstellt einen Request zum Senden an einen Webservice.

**JMP Version hinzugefügt:** 14

```jsl


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

**Beschreibung:** Sendet oder lädt mehrere HTTP-Requests parallel.

**JMP Version hinzugefügt:** 17

```jsl


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

**Beschreibung:** Erstellt eine neue OAuth2-Autorisierung.

**JMP Version hinzugefügt:** 15

```jsl


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

**Beschreibung:** Erstellt einen OAuth2-Token für den sicheren Zugriff auf Daten über viele verschiedene Web-APIs.

**JMP Version hinzugefügt:** 15

```jsl

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

**Beschreibung:** Erstellt einen interaktiven HTML-Bericht.

**JMP Version hinzugefügt:** 14

```jsl


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

**Beschreibung:** Gibt eine Referenz auf das angegebene Notebook zurück.

**JMP Version hinzugefügt:** 19

### Open Datafeed

**Syntax:** y = Open Datafeed( ... )

**Beschreibung:** Erstellt ein Objekt und ein Fenster für Echtzeit-Daten-Feeds, an das Mitteilungen gesendet werden können.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

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

**Beschreibung:** Öffnet die JMP-Onlinehilfe oder den Skriptindex.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

Open Help( "Help" );

```

#### Beispiel 2

```jsl

Open Help(
	"Scripting Index",
	Search( Term( "Open" ), Match( {"Contains Terms", "Match All Terms", "Ignore Case"} ) ),
	IndexContext( Category( "Functions" ) )
);

```

#### Beispiel 3

```jsl

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

**Beschreibung:** Analysiert einen XML-Ausdruck mit den OnElement-Ausdrücken für angegebene XML-Tags.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

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

#### Beispiel 2

```jsl


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

**Beschreibung:** Gibt die Anzahl Seiten in einer PDF-Datei zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

pageCount = Pdf Page Count( "$documents\myfile.pdf" );

```

### Platform Preference

**Syntax:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**Beschreibung:** Setzt Plattformeinstellungen wie angegeben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Platform Preferences

**Syntax:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**Beschreibung:** Setzt Plattformeinstellungen wie angegeben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Polytope Uniform Random

**Syntax:** points = Polytope Uniform Random( numSamples, A, b, L, U, neq, nle, nge, &lt;nwarm=200&gt;, &lt;nstride=25&gt; )

**Beschreibung:** Generiert gleichverteilte Punkte in einem konvexen Polytop. Das Argument numSamples gibt die Anzahl der zu erzeugenden zufälligen Punkte an. Das Argument A ist die Matrix der Nebenbedingungskoeffizienten. Das Argument B sind die rechten Seiten der Nebenbedingungen. Die Argumente L und U sind die untere und obere Schranke für die Variablen. Die Argumente neq, mle und nge ist die Anzahl der Gleichheitsnebenbedingungen, die Anzahl von Ungleichungen „kleiner als oder gleich“ und die Anzahl von Ungleichungen „größer als oder gleich“. Das Argument nwarm ist die Anzahl von Anfangswiederholungen, bevor Punkte in die Ausgabematrix geschrieben werden. Das Argument nstride ist die Anzahl der Wiederholungen zwischen jedem Punkt, der in die Ausgabematrix geschrieben wird. Beachten Sie, dass für die Nebenbedingungen zuerst die Gleichungen, danach die Ungleichungen „kleiner als oder gleich“ und zuletzt die Ungleichungen „größer als oder gleich“ aufgeführt werden müssen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

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

**Beschreibung:** Setzt Voreinstellungen wie angegeben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Preference

**Syntax:** Preferences( pref1( value1 ), ... )

**Beschreibung:** Setzt Voreinstellungen wie angegeben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Preferences

**Syntax:** Preferences( pref1( value1 ), ... )

**Beschreibung:** Setzt Voreinstellungen wie angegeben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Prefs

**Syntax:** Preferences( pref1( value1 ), ... )

**Beschreibung:** Setzt Voreinstellungen wie angegeben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Register Addin

**Syntax:** Register Addin( uniqueId, homeFolder, &lt;displayName(name)&gt;, &lt;MinJMPVersion(version)&gt;, &lt;MaxJMPVersion(version)&gt;, &lt;LoadsAtStartup(autoLoad)&gt;, &lt;LoadNow(load)&gt; )

**Beschreibung:** Registriert ein Add-in.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Register Addin(
	"com.mycompany.myaddin",
	"$DOCUMENTS/myaddin",
	displayname( "Sample Addin" )
);

```

### Reload Policies

**Syntax:** Reload Policies()

**JMP Version hinzugefügt:** 18

### Revert Menu

**Syntax:** Revert Menu()

**Beschreibung:** Kehrt zu den werkseitig voreingestellten Menüs zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

/* Reverts menus back to factory default settings. */

```

### Rummage

**Syntax:** treasures = Rummage( box, query )

**JMP Version hinzugefügt:** 17

#### Beispiel 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Rummage( Window( dt ), "Wilcox" ) << title;

```

#### Beispiel 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Rummage( Report( obj ), "Wilcox" ) << details;

```

#### Beispiel 3

```jsl

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

**Syntax:** obj = Run Program( Executable( "path/etc.exe" ), &lt; Options( {"/a", "/b etc" } ) &gt;, &lt; Parameter( optParm ) &gt;, &lt; Read Function( Function( {this, optParm}, etc ) | "text" | "blob" ) &gt;, &lt; Write Function( Function( {this, optParm}, etc ) ) &gt;)

**Beschreibung:** Ein externes Programm mit stdin und stdout steuern.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

RP = Run Program(
	Executable( "PING.EXE"/*path probably not needed*/ ),
	Options( {"-n 5", "localhost"} ),
	ReadFunction( Function( {this}, Write( this << read ) ) )
);

```

#### Beispiel 2

```jsl

RP = Run Program(
	Executable( "CMD.EXE"/*path probably not needed*/ ),
	Options( {"/a", "/q", "/c dir"} ),
	ReadFunction( Function( {this}, Write( this << read ) ) )
);

```

#### Beispiel 3

```jsl

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

**Beschreibung:** Plant ein Ereignis, das das Skriptargument scpt nach Ablauf von sec Sekunden ausführt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Schedule(
	10,
	Beep();
	Print( "Time's up!" );
);

```

### Set Clipboard

**Syntax:** Set Clipboard( text )

**Beschreibung:** Legt den angegebenen Text in der Zwischenablage des Systems ab, die vom Menü „Bearbeiten“ genutzt wird.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Set Clipboard( "example" );

```

### Set Platform Preference

**Syntax:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**Beschreibung:** Setzt Plattformeinstellungen wie angegeben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Set Platform Preferences

**Syntax:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**Beschreibung:** Setzt Plattformeinstellungen wie angegeben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Set Policy

**Syntax:** Set Policy("PolicyName", &lt;Empty()|#|"value"&gt; )

**JMP Version hinzugefügt:** 18

### Set Preference

**Syntax:** Preferences( pref1( value1 ), ... )

**Beschreibung:** Setzt Voreinstellungen wie angegeben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Set Preferences

**Syntax:** Preferences( pref1( value1 ), ... )

**Beschreibung:** Setzt Voreinstellungen wie angegeben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Set Toolbar Visibility

**Syntax:** rc = Set Toolbar Visibility( "toolbar-name" | Default | All, &lt;window-class-name | All&gt;, &lt;True | False&gt; )

**Beschreibung:** Legt die Sichtbarkeit einer vorgegebenen Symbolleiste für eine vorgegebene Klasse von Fenstern fest. toolbar-name ist der interne Name der Symbolleiste. Wird Default als Symbolleistenname weitergegeben, wird die angegebene Fensterklasse mit dem Standardsatz von Symbolleisten für diese Klasse von Fenstern wiederhergestellt. Beispiele für window-class-name sind Datentabelle, Skript, Bericht und Journal. Wenn window-class-name All ist, dann ist die Sichtbarkeit für die angegebene Symbolleiste für alle Klassen von Fenstern festgelegt.

Gibt 1 zurück, wenn erfolgreich, 0, wenn nicht erfolgreich.

**JMP Version hinzugefügt:** Vor Version 14

```jsl


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

**Beschreibung:** Gibt eines der kürzesten Bearbeitungsskripts zum Konvertieren von Zeichenkette A in Zeichenkette B zurück. Die einfache Form gibt lediglich eine Liste zurück. strings() und lines() haben die Option, eine Matrix oder eine Liste zurückzugeben. sequences() gibt nur eine Matrix zurück.  Der optionale Befehl limit() stoppt die Funktion frühzeitig, wenn die Bearbeitungsliste mehr als den Grenzwert an Einfügungen und Löschungen enthält. lines() vergleicht Zeilen statt Zeichen; der optionale Befehl ignore(„characters“) oder ignoreWhiteSpace() hat in der Standardeinstellung keine ignorierten Zeichen.   Mit ESC kann die Funktion bei Bedarf gestoppt werden.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

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

**Beschreibung:** Zeigt ein Dialogfeld zum Erstellen benutzerdefinierter Add-ins an.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Show Addin Builder Dialog();

```

### Show Addins Dialog

**Syntax:** Show Addins Dialog()

**Beschreibung:** Zeigt ein Dialogfeld mit dem Status aller registrierten Add-ins an.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Show Addins Dialog();

```

### Show Commands

**Syntax:** Show Commands( &lt;keyword=Builtins&gt; )

**Beschreibung:** Erstellt eine oder mehrere Datentabellen, die Informationen über verschiedene JSL-Komponenten enthalten. Das Argument keyword legt den Inhalt der Ausgabetabelle fest. Geben Sie vordefinierte Objekte (Standardwerte) für integrierte Operatoren und Funktionen an. Geben Sie skriptfähige Objekte für alle skriptfähigen Befehle dieser Objekte an. Geben Sie Übersetzungen für Englisch und lokalisierte Versionen der skriptfähigen Befehle an. Geben Sie Anzeigefelder für skriptfähige Befehle in Zusammenhang mit Anzeigefeldern und Anzeigesegmenten an. Geben Sie skriptfähige Namen für die Namen der skriptfähigen Objekte an. Geben Sie Plattformnamen für Namen von Plattformen an.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Show Commands();

```

### Show Preferences

**Syntax:** Show Preferences()

**Beschreibung:** Zeigt die aktuellen Einstellungen im Log an.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Show Preferences();

```

### Show Properties

**Syntax:** Show Properties( object )

**Beschreibung:** Zeigt im Log die Mitteilungen an, auf die ein Objekt reagiert.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Show Properties( Current Data Table() );

```

### Sobol Quasi Random Sequence

**Syntax:** points = Sobol Quasi Random Sequence(nDim, nRow)

**Beschreibung:** Mit der Sobol-Folge in bis zu 4000 Dimensionen eine Folge von raumfüllenden Quasi-Zufallszahlen erzeugen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

A = Sobol Quasi Random Sequence( 3, 100 );
As Table( A );
Scatterplot 3D( Y( :Col1, :Col2, :Col3 ) );

```

### Socket

**Syntax:** socketHandle = Socket( &lt;STREAM | DGRAM&gt; )

**Beschreibung:** Erstellt eine Socketvariable, die mit Sockets auf diesem oder anderen vernetzten Computern kommunizieren kann. Das Standardargument ist STREAM. Probieren Sie es mit der Website Ihrer Firma aus.

**JMP Version hinzugefügt:** Vor Version 14

```jsl


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

**Syntax:** Speak( text, &lt;Wait( sync )&gt; )

**Beschreibung:** Spricht den Text, sofern dies vom Betriebssystem unterstützt wird. Das optionale Argument Wait(true) verzögert die Skriptausführung, bis das Sprechen beendet ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Speak( "Hello" );

```

### Status Msg

**Syntax:** Status Msg( message )

**Beschreibung:** Zeigt die angegebene Meldung in der Statuszeile an.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Status Msg( "calculating..." );

```

### Subtract

**Syntax:** y = x0 - x1; y = Subtract( x0, x1, ... )

**Beschreibung:** Subtrahiert alle nachfolgenden Argumente vom ersten Argument. Argumente können Zahlen, Matrizen oder Listen von Zahlen sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

6 - 2 - 1;

```

### Test Promise Error After

**JMP Version hinzugefügt:** 17

### Test Promise Result After

**JMP Version hinzugefügt:** 17

### Unit Test

**JMP Version hinzugefügt:** Vor Version 14

### Unregister Addin

**Syntax:** Unregister Addin( uniqueId)

**Beschreibung:** Hebt die Registrierung eines Add-ins auf.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Unregister Addin( "com.mycompany.myaddin" );

```

### Web

**Syntax:** Web( string, &lt;JMP Window&gt; )

**Beschreibung:** Öffnet die URL oder Datei, die im Standard-Webbrowser in string gespeichert ist. Das optionale zweite Argument gibt an, dass die HTML in einem JMP-Browserfenster geöffnet wird.

**JMP Version hinzugefügt:** Vor Version 14

#### Einfach

```jsl

Web( "http://www.jmp.com/" );

```

#### Ereignis-Handler

```jsl

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

### With Clipboard

**Syntax:** two = With Clipboard( clp, box &lt;&lt; Paste; 1 + 1 )

**Beschreibung:** If the JSL within this function would have normally pasted something from the OS Clipboard, it is instead pasted from the provided Clipboard object.

**JMP Version hinzugefügt:** 19

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Property( "Units", "HELLO" );
clp = Clipboard Capture( dt << Select Columns( :height ) << Copy Column Properties );
With Clipboard( clp, dt << Select Columns( :weight ) << Paste Column Properties );

```

### XML Attr

**Syntax:** value = XML Attr( attr name ); aa = XML Attr()

**Beschreibung:** Extrahiert die Zeichenkette eines XML-Attributs im Rahmen der Auswertung eines Parse XML()-Befehls. Ist kein Name angegeben, wird ein assoziatives Array aller Attributnamen/Wertepaare zurückgegeben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

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

**Beschreibung:** Entschlüsselt Symbole in XML und wandelt sie in gewöhnlichen Text um, ändert " in ", < in <, > in >; & in &.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

text = XML Decode( "isSmallAlpha = letter&gt;=&quot;a&quot; &amp; letter&lt;=&quot;z&quot;" );

```

### XML Encode

**Syntax:** textxml = XML Encode( text )

**Beschreibung:** Bereitet Text zum Einbetten in XML vor, ändert " in ", < in <, > in > & in &.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

textxml = XML Encode( "\[isSmallAlpha = letter>="a" & letter<="z"]\" );

```

### XML Text

**Syntax:** value = XML Text()

**Beschreibung:** Extrahiert den Zeichenkettentext des Befehls von einem XML-Tag im Rahmen der Auswertung eines Parse XML()-Befehls.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

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

### \\[...]\\

**Syntax:** y = \\[string]\\

**Beschreibung:** Für Passagen, in denen viele Escape-Zeichen erforderlich sind, kann das Trennzeichen \\[...]\\ verwendet werden.

**JMP Version hinzugefügt:** Vor Version 14

```jsl


jslPhrase =
"The JSL to do this is :\[
a = "hello";
b = a|| " world.";
show(b);
]\ and you use the Submit command to run it.";
Show( jslPhrase );

```

