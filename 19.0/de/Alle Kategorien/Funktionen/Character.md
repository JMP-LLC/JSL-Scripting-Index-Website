# Character



### Blob To Char

**Syntax:** s = Blob To Char( blob, &lt;encoding="utf-8"&gt; )

**Beschreibung:** Erzeugt mittels der angegebenen Codierung aus einem BLOB (Binary Large OBject) eine Zeichenkette. Unterstützt werden u. a. die Codierungen utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, shift_jis, euc-jp und ascii~hex.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Blob To Char( Hex To Blob( "436166C3A9" ) ) || Blob To Char(
	Hex To Blob( "436166C3A9" ),
	"ascii~hex"
);

```

### Blob To Matrix

**Syntax:** m = Blob To Matrix( blob, type, bytesEach, endian, &lt;nCols=1&gt; )

**Beschreibung:** Erzeugt eine Matrix durch Konvertieren der Bytes im Blob in Zahlen. type ist entweder „int“, „uint“ oder „float“. bytesEach ist entweder 1, 2, 4 oder 8. endian gibt an, ob das erste Byte das höchstwertige („big“) oder das niederwertigste („little“) Byte ist. „native“ gibt das native Format des Rechners an.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Blob To Matrix( Hex To Blob( "00010002FFFFFFFE" ), "int", 2, "big", 2 );

```

### Char

**Syntax:** s = Char( x, &lt;w&gt;, &lt;d&gt;, &lt; &lt;&lt;Use Locale( Boolean ) &gt;, &lt; &lt;&lt;Full Precision( Boolean ) &gt; )

**Beschreibung:** Gibt eine Darstellung von x als Zeichenkette mit der maximalen Breite w und Dezimalstellen d zurück, wenn das Argument x numerisch ist. <<FullPrecision schreibt numerische Werte mit der gesamten verfügbaren Präzision.

**JMP Version hinzugefügt:** Vor Version 14

#### Einfach

```jsl

Char( Pi(), 10, 4 );

```

#### Gebietsschema verwenden

```jsl

Char( 2.1, <<Use Locale( 1 ) );

```

#### Volle Präzision

```jsl

Show( Char( 88.54 ), Char( 88.54, <<Full Precision( 1 ) ) );

```

### Char To Blob

**Syntax:** blob = Char To Blob( string, &lt;encoding="utf-8"&gt; )

**Beschreibung:** Erzeugt mittels der angegebenen Codierung aus einer Zeichenkette ein BLOB (Binary Large OBject). Unterstützt werden u. a. die Codierungen utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, shift_jis, euc-jp und ascii~hex.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Char To Blob( "Café", "utf-16be" );

```

### Char To Hex

**Syntax:** h = Char To Hex( value, &lt;"integer"&gt;|&lt;encoding="utf-8"&gt; )

**Beschreibung:** Gibt den hexadezimalen Text zurück, der dem angegebenen Wert und der Codierung entspricht, der eine Zahl, eine Zeichenkette oder ein Blob sein kann. Wenn der Wert eine Zahl ist, wird die 64-Bit-Codierung nach IEEE 754 verwendet, es sei denn, es wird das optionale Argument "integer" vorgegeben. Unterstützt werden u. a. die Codierungen utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, ascii~hex, shift_jis und euc-jp.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Hex( 1024, "integer" ) || " " || Hex( "Café", "utf-16be" );

```

### Collapse Whitespace

**Syntax:** scw = Collapse Whitespace( s )

**Beschreibung:** Löscht führende und nachfolgende Leerzeichen und entfernt doppelte Leerzeichen innerhalb.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Collapse Whitespace( "  The  dog    crossed    the  road  " );

```

### Concat

**Syntax:** s = s1 || s2 ...; m = m1 || m2 ...; s = Concat( s1, s2, ... )

**Beschreibung:** Verkettet Zeichenketten zu einer langen Zeichenkette oder Matrizen in eine breitere Matrix.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

[1 2] || [3 4] || [5 6];

```

### Concat Items

**Syntax:** string = Concat Items( {list of strings}, &lt;separatorString&gt; )

**Beschreibung:** Verbindet eine Liste von Zeichenketten zu einer langen Zeichenkette, wobei jede Zeichenkette durch das Trennzeichen bzw. ein Leerzeichen, wenn kein Trennzeichen angegebenen wurde, getrennt wird.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Concat Items( {"www", "jmp", "com"}, "." );

```

### Concat To

**Syntax:** string1 ||= string2; matrix1 ||= matrix2; Concat To( a, b )

**Beschreibung:** Verkettet und weist das Ergebnis zu. a ||= b ist äquivalent zu a = a || b. Dies ist ein Zuweisungsoperator.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

ex = "hello ";
ex ||= "world";

```

### Contains

**Syntax:** pos = Contains( x, item, &lt;start=1&gt; )

**Beschreibung:** Gibt die Position von item innerhalb von x zurück und beginnt dabei an der Position „start“, falls angegeben. Wenn „start“ negativ ist, wird ab „length( x ) - start“ rückwärts gesucht. Das Argument x kann eine Zeichenkette oder eine Liste sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Show( Contains( "redreed", "re", -1 ) );
Show( Contains( {"A", 2, "C", [1 5], "C"}, "C", 4 ) );

```

### Contains Item

**Syntax:** b = Contains Item( x, item | list | Pat Regex(), &lt;delimiter&gt; )

**Beschreibung:** Gibt einen Booleschen Wert zurück, der anzeigt, ob das Wort [Element], eine Liste mit Wörtern [Liste] oder ein Muster [Muster] einem der Wörter im von [x] repräsentierten Text entspricht. Wörter werden durch die Zeichen in der optionalen Trennzeichenkette [Trennzeichen] getrennt. Ein Komma "," ist das Standardtrennzeichen. Leerzeichen werden an den Enden jedes extrahierten Worts von der eingegebenen Textzeichenkette [x] abgeschnitten.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

Show( Contains Item( "A, 2, C, D, C", "C", ", " ) );

```

#### Beispiel 2

```jsl

dt = Open( "$SAMPLE_DATA/Food Journal.jmp" );
dt << New Column( "Cheese",
	numeric,
	continuous,
	Formula( Contains Item( dt:Item Name, "Cheese", ", " ) )
);
dt << Distribution( Column( :Cheese ) );

```

#### Beispiel 3

```jsl

//find repeated character c in cdcef
Contains Item( "abcde,bcdef,cdcef", Pat Regex( "(.).*?\1" ), "," );

```

### Ends With

**Syntax:** b = Ends With( s, sub )

**Beschreibung:** Gibt 1 zurück, wenn s mit sub endet, andernfalls 0. Die Argumente s und sub können beide Zeichenketten oder beide Listen sein. Äquivalent zu Right( s, Length( sub )) == sub.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Ends With( "http://www.jmp.com", ".com" );

```

### Hex

**Syntax:** h = Hex( value, &lt;"integer"&gt;|&lt;encoding="utf-8"&gt;|&lt;Base(number)&gt;,&lt;Pad To(number)&gt; )

**Beschreibung:** Gibt den hexadezimalen Text (oder den eines anderen Basiszahlensystems) entsprechend dem vorgegebenen Wert und der vorgegebenen Verschlüsselung zurück, was eine Zahl, eine Zeichenkette oder ein Blob sein kann. Wenn der Wert eine Zahl ist, wird die 64-Bit-Verschlüsselung nach IEEE 754 verwendet, sofern nicht eines der optionalen Argumente, integer oder Base, angegeben ist. Wenn Base angegeben ist, gibt die Funktion statt hexadezimal den Text zurück, der der angegebenen Zahl in dem jeweiligen Basiszahlensystem entspricht. Die Basis muss ein ganzzahliger Wert zwischen 2 und 36 (jeweils einschließlich) sein. Unterstützte Verschlüsselungen sind u.a. utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, ascii~hex, shift_jis und euc-jp.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Hex( 1024, "integer" ) || " " || Hex( "Café", "utf-16be" ) || " " ||
Hex( 11, Base( 2 ), Pad To( 8 ) );

```

### Hex To Blob

**Syntax:** blob = Hex To Blob( hex string )

**Beschreibung:** Erzeugt aus der angegebenen Zeichenkette von Hexadezimalcodes ein BLOB (Binary Large OBject), kann auch Leerzeichen, Kommas, Zeilenumbrüche und Zeilenvorschübe enthalten.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Hex To Blob( "FF78CE" );

```

### Hex To Char

**Syntax:** s = Hex To Char( hextext, &lt;encoding="utf-8"&gt; )

**Beschreibung:** Gibt den Text zurück, der dem hexadezimalen Text entspricht, und verwendet die angegebene Codierung. Unterstützt werden u. a. die Codierungen utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, ascii~hex, shift_jis und euc-jp.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Hex To Char( "436166C3A9" ) || Hex To Char( "00430061006600E9", "utf-16be" );

```

### Hex To Number

**Syntax:** x = Hex To Number( hextext, &lt;Base(number)&gt; )

**Beschreibung:** Gibt die dem hexadezimalen Text (oder einem anderen Basiszahlensystem) entsprechende Zahl zurück. 16 Hex.-Ziffern werden als 64-Bit-Gleitpunktzahlen nach IEEE 754 umgewandelt; andernfalls wird die Eingabe als Hex-Ganzzahl behandelt. Wenn Base angegeben ist, wird der Text als Zeichenkette behandelt, die die Zahl zur jeweiligen Basis darstellt. Die Basis muss eine ganze Zahl zwischen 2 und 36 (jeweils einschließlich) sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Hex To Number( "11110000", Base( 2 ) );

```

### Insert

**Syntax:** z = Insert( x, y, &lt;i&gt; )

**Beschreibung:** Gibt eine Kopie der Liste x mit y an der i-ten Position oder ans Ende angehängt zurück, wenn das optionale Argument i nicht angegeben ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

z = {11, 22, 33};
z = Insert( z, 99, 2 );

```

### Insert Into

**Syntax:** Insert Into( x, y, &lt;i&gt; )

**Beschreibung:** Ändert eine Liste, ein assoziatives Array oder ein Anzeigefeld x, wobei y in die Sammlung eingefügt wird. Listen und Anzeigefelder unterstützen optional i, um die Position anzugeben, oder die Elemente werden angehängt, wenn die Position nicht angegeben ist. Beachten Sie, dass das Argument x eine Variable sein muss.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

ex = {11, 22, 33};
Insert Into( ex, 99 );
ex;

```

#### Beispiel 2

```jsl

ex = ["a" => 10, "b" => 3, => 0];
Insert Into( ex, "c", 12 );
ex;

```

#### Beispiel 3

```jsl

New Window( "boxes", hlist = H List Box( Button Box( "a" ), Button Box( "b" ) ) );
Wait( 1 );
Insert Into( hlist, Button Box( "c" ) );

```

### Item

**Syntax:** w = Item( n|[first last], s, &lt;delim&gt;, &lt;Unmatched(result string)&gt;, &lt;Include Boundary Delimiters(0|1)&gt;)

**Beschreibung:** Gibt das n-te Element des Arguments s zurück, wobei Elemente die (möglicherweise leere) Teilzeichenketten sind, die durch genau eines der im Argument delim angegebenen Zeichen getrennt werden. Wenn delim fehlt, wird das Leerzeichen verwendet. Wenn delim die leere Zeichenkette ist, wird jedes Zeichen als eigenes Element behandelt.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

Item( 5, "http://www.jmp.com", ":/." );

```

#### Beispiel 2

```jsl

Item( [2 -1], "This is a sentence" );

```

#### Beispiel 3

```jsl

Item( 4, "Apple+Banana Tree,,Pear,,Peach,,Grape", Get Punctuation Characters() );

```

#### Beispiel 4

```jsl

Item( 5, "a b c d", Unmatched( "None" ) );

```

#### Beispiel 5

```jsl

Item( 2, "abcd", "" );

```

#### Beispiel 6

```jsl

Item( 2, ",abcd", ",", Include Boundary Delimiters );

```

### Items

**Syntax:** wl = Items(&lt;[first last]&gt;, s, &lt;delim&gt;, &lt;Include Boundary Delimiters(0|1)&gt;)

**Beschreibung:** Gibt eine Liste von (möglicherweise leeren) Teilzeichenketten zurück, die durch genau ein beliebiges der Zeichen im Argument delim getrennt werden. Wenn delim fehlt, wird das Leerzeichen verwendet. Wenn delim die leere Zeichenkette ist, wird jedes Zeichen als eigenes Element behandelt.

**JMP Version hinzugefügt:** 15

#### Beispiel 1

```jsl

Eval List( {Items( "http://www.jmp.com", ":/." ), Items( "hello", "" )} );

```

#### Beispiel 2

```jsl

Items( ",Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

#### Beispiel 3

```jsl

Items(
	",Apple,Banana Tree,Peach",
	Get Punctuation Characters(),
	Include Boundary Delimiters
);

```

#### Beispiel 4

```jsl

Items( [1 2], ",Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

### Left

**Syntax:** sub = Left( s, n, &lt;filler&gt; )

**Beschreibung:** Gibt eine abgeschnittene oder aufgefüllte Version der ursprünglichen Zeichenkette oder Liste s zurück. Das Ergebnis enthält die linken n Zeichen oder Listenelemente, rechts aufgefüllt mit dem Füllzeichen filler, wenn die Länge von s kleiner als n ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

exurl = "http://www.jmp.com";
Left( exurl, Contains( exurl, ":" ) - 1 );

```

### Length

**Syntax:** l = Length( x )

**Beschreibung:** Gibt die Länge der vorgegebenen Zeichenkette (in Zeichen), Liste (in Elementen), des vorgegebenen assoziativen Arrays (in Anzahl Schlüsseln), Blobs (in Bytes), der vorgegebenen Matrix (in Elementen) oder des vorgegebenen Namensraums/der vorgegebenen Klasse (in Anzahl von Funktionen und Variablen) zurück.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

Length( "Café" );

```

#### Beispiel 2

```jsl

Length( {1, 2 + 3, [11 22]} );

```

#### Beispiel 3

```jsl

Length( ["a" => 10, "b" => 3, => 0] );

```

#### Beispiel 4

```jsl

Length( Char To Blob( "Café" ) );

```

### Lowercase

**Syntax:** sl = Lowercase( s )

**Beschreibung:** Wandelt in der angegebenen Zeichenkette Großbuchstaben in Kleinbuchstaben um. Regeln für Groß- und Kleinbuchstaben richten sich nach dem Gebietsschema.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Lowercase( "CAFÉ #23" );

```

### Matrix To Blob

**Syntax:** m = Matrix To Blob( matrix, type, bytesEach, endian )

**Beschreibung:** Erzeugt ein Blob aus einer Matrix durch Konvertieren der Matrixelemente in 1-, 2- oder 4-Byte-Ganzzahlen mit oder ohne Vorzeichen oder in 4- oder 8-Byte-Gleitpunktzahlen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Matrix To Blob( [3.14, 1.414], "float", 4, "big" );

```

### Munger

**Syntax:** r = Munger( s, startPos, findStringOrNChars, &lt;replaceString&gt; )

**Beschreibung:** Sucht im Argument s nach einer Teilzeichenkette oder Position, je nach Kombination der Argumente.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Eval List( {Munger( "over there", 1, "t", "" ), Munger( "17 June 2000", 4, 4, "March" )} );

```

### Num

**Syntax:** y = Num( s, &lt; &lt;&lt;Use Locale( use=1 ) &gt;, &lt; &lt;&lt;Restrict &gt; )

**Beschreibung:** Konvertiert s in eine Zahl mithilfe eines beliebigen integrierten Formats, einschließlich Datums- oder Währungsformat. Gibt fehlend zurück, wenn die Konvertierung fehlschlägt. Das optionale <<Restrict gestattet die Konvertierung nur mit ganzen Zahlen, Dezimalzahlen und wissenschaftlichen Formaten.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

Show( Num( "3.1e6" ), Num( "1989-10-04" ), Num( "5%" ), Num( "£23" ) );

```

#### Beispiel 2

```jsl

Show(
	Num( "3.1e6", <<Restrict ),
	Num( "1989-10-04", <<Restrict ),
	Num( "5%", <<Restrict ),
	Num( "£23", <<Restrict )
);

```

### Regex

**Syntax:** result = Regex( source, pattern, &lt;format, &lt;IGNORECASE&gt;, &lt;GLOBALREPLACE&gt;&gt; )

**Beschreibung:** Sucht im Text source nach einer Übereinstimmung mit pattern. Das format ist standardmäßig „\\0“ (gesamte Übereinstimmung), kann jedoch auch „Fred“ (bei konstantem Ersetzen) oder „\\1“ sein (um den Text in Übereinstimmung mit der ersten Klammer in pattern zu verwenden). Gibt numerisch fehlend zurück, wenn es keine Übereinstimmung gibt. Die Groß-/Kleinschreibung muss standardmäßig übereinstimmen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Regex(
	"   Are you there Alice?, asked Jerry.",
	" (here|there) (\w+).+(said|asked) (\w+)\.",
	"  I am \1, \4, replied \2."
);

```

### Remove

**Syntax:** y = Remove( x, &lt;i&gt;, &lt;n=1&gt; ); y = Remove( x, {list} )

**Beschreibung:** Gibt eine Kopie der Liste x zurück, löscht dabei n Elemente mit Beginn bei dem i-ten Element, oder löscht eine Liste mit Elementen, die vom Argument list angegeben sind.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Remove( {11, 22, 33, 44, 55}, 3, 2 );

```

### Remove From

**Syntax:** Remove From( x, &lt;i&gt;, &lt;n=1&gt; )

**Beschreibung:** Ändert eine Liste, ein assoziatives Array oder ein Anzeigefeld x durch Entfernen von Elementen. Bei assoziativen Arrays wird das zu entfernende Element durch einen Schlüsselwert i angegeben. Bei Listen und Anzeigefeldern erfolgt das Entfernen ab dem Element an Position i. Bei einer Liste werden mehrere Elemente gleichzeitig entfernt, wenn die Option n angegeben ist. Beachten Sie, dass das Argument x eine Variable sein muss.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

ex = {11, 22, 33, 44, 55};
Remove From( ex, 3, 2 );
ex;

```

#### Beispiel 2

```jsl

ex = ["a" => 10, "b" => 3, "c" => 12, => 0];
Remove From( ex, "c" );
ex;

```

#### Beispiel 3

```jsl

New Window( "boxes",
	hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) )
);
Wait( 1 );
Remove From( hlist, 1 );

```

### Repeat

**Syntax:** s = Repeat( x, n, &lt;m=1&gt; )

**Beschreibung:** Gibt den Text, die Matrix oder Liste zurück, der bzw. die vom Argument x angegeben wird, mit sich selbst n Male verkettet. Wenn x eine Zahl oder eine Matrix ist, dann weist n auf vertikale Wiederholung hin und das optionale Argument m gibt horizontale Wiederholung an.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Show( Repeat( {"A", "B"}, 3 ), Repeat( 2, 3 ), Repeat( 2, 1, 3 ) );

```

### Reverse

**Syntax:** y = Reverse( x )

**Beschreibung:** Gibt eine Kopie der Liste x mit umgekehrter Reihenfolge der Elemente zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Reverse( {11, 22, 33, 44, 55} );

```

### Reverse Into

**Syntax:** Reverse Into( x )

**Beschreibung:** Ändert eine Liste oder ein Anzeigefeld x mit umgekehrter Reihenfolge der Elemente. Beachten Sie, dass das Argument x eine Variable sein muss.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

ex = {11, 22, 33, 44, 55};
Reverse Into( ex );
ex;

```

#### Beispiel 2

```jsl

New Window( "boxes",
	hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) )
);
Wait( 1 );
Reverse Into( hlist );

```

### Right

**Syntax:** sub = Right( s, n, &lt;filler&gt; )

**Beschreibung:** Gibt eine abgeschnittene oder aufgefüllte Version der ursprünglichen Zeichenkette oder Liste s zurück. Das Ergebnis enthält die rechten n Zeichen oder Listenelemente, links aufgefüllt mit dem Füllzeichen filler, wenn die Länge von s kleiner als n ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Right( "http://www.jmp.com", 3 );

```

### Set Difference

**Syntax:** list = Set Difference( list1, list2 )

**Beschreibung:** Gibt die Liste der Elemente zurück, die in list1, aber nicht in list2 vorkommen. Elemente können wiederholt werden. Wenn ein Argument eine Mehrfachantwort-Spaltenreferenz ist, wird es als Liste seiner Werte in der aktuellen Zeile behandelt.

**JMP Version hinzugefügt:** 19

```jsl

Show( Set Difference( {1, 3}, {3, 2} ) );
Show( Set Difference( {1, 3, 4, 3}, {3, 2, 3, 5, 3} ) );

```

### Set Intersection

**Syntax:** list = Set Intersect( list1, list2 )

**Beschreibung:** Gibt die Liste der Elemente zurück, die in beiden Listen vorkommen. Elemente können wiederholt werden. Wenn ein Argument eine Mehrfachantwort-Spaltenreferenz ist, wird es als Liste seiner Werte in der aktuellen Zeile behandelt.

**JMP Version hinzugefügt:** 19

```jsl

Show( Set Intersection( {1, 3}, {3, 2} ) );
Show( Set Intersection( {1, 3, 4, 3}, {3, 2, 3, 5, 3} ) );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << get rows where( Set Intersection( :sports, {"Soccer"} ) != {} );

```

### Set Union

**Syntax:** list = Set Union( list1, list2 )

**Beschreibung:** Gibt die Liste der Elemente zurück, die in jeder der beiden Listen vorkommen. Elemente können wiederholt werden. Wenn ein Argument eine Mehrfachantwort-Spaltenreferenz ist, wird es als Liste seiner Werte in der aktuellen Zeile behandelt.

**JMP Version hinzugefügt:** 19

```jsl

Show( Set Union( {1, 3}, {3, 2} ) );
Show( Set Union( {1, 3, 4, 3}, {3, 2, 3, 5, 3} ) );
all = {};
Open( "$SAMPLE_DATA/Big Class Families.jmp" );
For Each Row( all = Set Union( all, :sports ) );
all = Set Unique( all );
Show( all );

```

### Set Unique

**Syntax:** list = Set Unique( list )

**Beschreibung:** Gibt die Liste der eindeutigen Elemente zurück, die in der Eingabeliste vorkommen. Wenn ein Argument eine Mehrfachantwort-Spaltenreferenz ist, wird es als Liste seiner Werte in der aktuellen Zeile behandelt.

**JMP Version hinzugefügt:** 19

```jsl

Show( Set Unique( {1, 3, 2} ) );
Show( Set Unique( {1, 3, 4, 3, 3, 2, 3, 5, 3} ) );
Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Row() = 1;
Show( Set Unique( :sports ) );

```

### Shift

**Syntax:** y = Shift( x, &lt;n=1&gt; )

**Beschreibung:** Gibt eine Kopie der Liste x zurück, wobei die ersten n Elemente ans Ende der Liste verschoben werden, oder, wenn n negativ ist, werden die letzten n Elemente an den Anfang der Liste verschoben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Shift( {11, 22, 33, 44, 55}, 2 );

```

### Shift Into

**Syntax:** Shift Into( x, &lt;n=1&gt; )

**Beschreibung:** Ändert eine Liste oder ein Anzeigefeld x, wobei die ersten n Elemente ans Ende der Liste verschoben werden, bzw. wenn n negativ ist, werden die letzten n Elemente an den Anfang der Liste verschoben. Beachten Sie, dass das Argument x eine Variable sein muss.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

ex = {11, 22, 33, 44, 55};
Shift Into( ex, -2 );
ex;

```

#### Beispiel 2

```jsl

New Window( "boxes",
	hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) )
);
Wait( 1 );
Shift Into( hlist, -2 );

```

### Starts With

**Syntax:** b = Starts With( s, sub )

**Beschreibung:** Gibt 1 zurück, wenn s mit sub beginnt, andernfalls 0. Die Argumente s und sub können beide Zeichenketten oder beide Listen sein. Äquivalent zu Left( s, Length( sub )) == sub.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Starts With( "http://www.jmp.com", "http:" );

```

### Substitute

**Syntax:** y = Substitute( x, patternExpr1, replacementExpr1, ... )y = Substitute( x, patternString1, replacementString1, ..., &lt; &lt;&lt;IGNORECASE &gt; )

**Beschreibung:** Gibt eine Kopie von Zeichenkette, Liste oder Ausdruck x zurück und ersetzt Vorkommen jedes Musterausdrucks mit dem entsprechenden Ersetzungsausdruck. Das optionale Argument <<IGNORECASE ermöglicht den Abgleich ohne Beachtung der Groß- und Kleinschreibung, wenn x eine Zeichenkette ist.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

Substitute( Expr( a + Sqrt( a ) ), Expr( a ), Expr( b ) );

```

#### Beispiel 2

```jsl

Substitute( "All things considered", "All", "Some" );

```

#### Beispiel 3

```jsl

lst = {"a", "b", "c"};
Substitute( lst, "a", "A" );

```

#### Beispiel 4

```jsl

Substitute( "All things considered", {"things", "All"}, {"ideas", "Some"} );

```

#### Beispiel 5

```jsl

Substitute( "Apple,orange,banana-grape",
	Items( Get Punctuation Characters() || "-'", "" ), " "
);

```

#### Beispiel 6

```jsl

Substitute( "Apple,APPLE,apple", "apple", "orange", <<IGNORECASE );

```

### Substitute Into

**Syntax:** Substitute Into( x, patternExpr1, replacementExpr1, ... )Substitute Into( x, patternString1, replacementString1, ..., &lt; &lt;&lt;IGNORECASE &gt; )

**Beschreibung:** Ändert Zeichenkette, Liste oder Ausdruck x und ersetzt Vorkommen jedes Musterausdrucks mit dem entsprechenden Ersetzungsausdruck. Das Argument x muss eine Variable sein. Das optionale Argument <<IGNORECASE ermöglicht den Abgleich ohne Beachtung der Groß- und Kleinschreibung, wenn x eine Zeichenkette ist.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

ex = Expr( a + Sqrt( a ) );
Substitute Into( ex, Expr( a ), Expr( b ) );
Name Expr( ex );

```

#### Beispiel 2

```jsl

ex = "All things considered";
Substitute Into( ex, "All", "Some" );
Show( ex );

```

#### Beispiel 3

```jsl

lst = {"a", "b", "c"};
Substitute Into( lst, "a", "A" );
Show( lst );

```

#### Beispiel 4

```jsl

s = "Apple,APPLE,apple";
Substitute Into( s, "apple", "orange", <<IGNORECASE );
Show( s );

```

### Substr

**Syntax:** sub = Substr( s, start, &lt;count&gt; )

**Beschreibung:** Gibt den Teil der Zeichenkette s aus, der aus count einer Anzahl Zeichen besteht, beginnend an Position start. Ein negativer oder fehlender count bedeutet den Rest der Zeichenkette. Ein negativer start bedeutet, dass die Zeichen start am Ende beginnen. Die Funktion Substr() gilt auch für Listen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Eval List( {Substr( "undergo", 4 ), Substr( {10, 11, 12, 13, 14}, 2, 3 )} );

```

### Text Score

**Syntax:** score vector = Text Score( text column, text-to-number, &lt;weighting&gt;, &lt;{&lt;center&gt;, &lt;scale&gt;, scoring matrix}&gt;);

**Beschreibung:** Dient zum Erstellen von Scoring-Formeln im Text-Explorer. Das Text-zu-Zahl-Argument ist ein assoziatives Array, das in Kleinbuchstaben geschriebenen Worten Zahlen zuordnet. Das Gewichtungsargument ist entweder "Binary", "Ternary", "Count", "LogCount", "LCA" oder ein Array aus inversen Dokumenthäufigkeitsgewichtungen für TFLogIDF. Die Scoring-Matrix muss die gleiche Anzahl von Spalten haben wie Wörter im assoziativen Array bzw. bei LCA eine mehr. Die Ausgabe ist ein Vektor von Scores. Wenn keine Scoring-Matrix angegeben ist, wird ein Vektor von Anzahl-Scores zurückgegeben. Wenn keine Gewichtung angegeben ist, wird die Anzahl verwendet. Diese Funktion unterstützt die Option „Stamm zum Kombinieren“ nicht.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

score = Text Score(
	"over the lazy dogs back",
	["lazy" => 1, "dogs" => 2],
	"Count",
	[1 0, 0 1]
);
Show( score );

```

### Titlecase

**Syntax:** st = Titlecase( s )

**Beschreibung:** Umwandlung in Titel

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Titlecase( "The dog crossed the road" );

```

### Trim

**Syntax:** sub = Trim( s, &lt;left|right|both&gt; )

**Beschreibung:** Gibt eine Kopie der Zeichenkette s zurück, wobei führende oder nachfolgende Leerzeichen entfernt werden. Das zweite Argument gibt entweder die führenden oder nachfolgenden Leerzeichen an. Wenn Sie kein zweites Argument angeben, werden die Leerzeichen an beiden Enden entfernt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Trim( " title   ", both );

```

### Trim Whitespace

**Syntax:** sub = Trim Whitespace( s, &lt;left|right|both&gt; )

**Beschreibung:** Gibt eine Kopie der Zeichenkette s zurück, wobei führende oder nachfolgende Leerzeichen entfernt werden. Das zweite Argument gibt entweder die führenden oder nachfolgenden Leerzeichen an. Wenn Sie kein zweites Argument angeben, werden die Leerzeichen an beiden Enden entfernt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Trim Whitespace( "  The  dog    crossed    the  road  " );

```

### Uppercase

**Syntax:** su = Uppercase( s )

**Beschreibung:** Wandelt in der angegebenen Zeichenkette Kleinbuchstaben in Großbuchstaben um. Regeln für Groß- und Kleinbuchstaben richten sich nach dem Gebietsschema.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Uppercase( "Café #23" );

```

### Word

**Syntax:** w = Word( n|[first last], s, &lt;delim&gt;, &lt;Unmatched(result string)&gt;

**Beschreibung:** Gibt das n-te Wort der Zeichenkette s zurück, wobei Wörter Teilzeichenketten sind, die durch eine beliebige Anzahl von beliebigen Zeichen im Argument delim getrennt werden. Wenn delim fehlt, wird das Leerzeichen verwendet. Wenn delim die leere Zeichenkette ist, wird jedes Zeichen als eigenes Wort behandelt.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

Word( 3, "http://www.jmp.com", ":/." );

```

#### Beispiel 2

```jsl

Word( [2 -1], "This is a sentence" );

```

#### Beispiel 3

```jsl

Word( 4, "Apple+Banana Tree,,Pear,,Peach,,Grape", Get Punctuation Characters() );

```

#### Beispiel 4

```jsl

Word( 5, "a b c d", Unmatched( "None" ) );

```

#### Beispiel 5

```jsl

Word( 2, "abcd", "" );

```

### Words

**Syntax:** wl = Words( &lt;[first last]&gt;, s, &lt;delim&gt;)

**Beschreibung:** Gibt eine Liste von Teilzeichenketten zurück, die durch ein beliebiges der Zeichen im Argument delim getrennt werden. Wenn delim fehlt, wird das Leerzeichen verwendet. Wenn delim die leere Zeichenkette ist, wird jedes Zeichen als eigenes Wort behandelt.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

Eval List( {Words( "http://www.jmp.com", ":/." ), Words( "hello", "" )} );

```

#### Beispiel 2

```jsl

Words( "Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

#### Beispiel 3

```jsl

Words( [1 2], "Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

### XPath Query

**Syntax:** result = XPath Query(xml, xpath expression)

**Beschreibung:** Führt eine XPath-Abfrage in einem XML-Dokument durch.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

result = XPath Query(
	"<doc><colors><color>red</color><color>green</color><color>blue</color></colors></doc>",
	"//color/text()"
);

```

