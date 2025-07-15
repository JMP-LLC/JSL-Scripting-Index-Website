# List



### As List

**Syntax:** y = As List( matrix )

**Beschreibung:** Gibt eine Listendarstellung einer Matrix zurück. Matrizen mit mehreren Spalten werden in eine Liste der Listen umgewandelt, eine Liste pro Zeile, wie vom Matrix-Operator zu erwarten.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
As List( [11 22 33, 44 55 66] );

```

### Concat Items

**Syntax:** string = Concat Items( {list of strings}, &lt;separatorString&gt; )

**Beschreibung:** Verbindet eine Liste von Zeichenketten zu einer langen Zeichenkette, wobei jede Zeichenkette durch das Trennzeichen bzw. ein Leerzeichen, wenn kein Trennzeichen angegebenen wurde, getrennt wird.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Concat Items( {"www", "jmp", "com"}, "." );

```

### Eval List

**Syntax:** y = Eval List( list )

**Beschreibung:** Gibt eine Liste zurück, in der jedes Element ausgewertet wurde.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Names Default To Here( 1 );
Eval List( {1 + 2, 3 + 4} );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
x = 5;
y = 10;
Eval List( {x, y} );

```

### Insert

**Syntax:** z = Insert( x, y, &lt;i&gt; )

**Beschreibung:** Gibt eine Kopie der Liste x mit y an der i-ten Position oder ans Ende angehängt zurück, wenn das optionale Argument i nicht angegeben ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
z = {11, 22, 33};
z = Insert( z, 99, 2 );

```

### Insert Into

**Syntax:** Insert Into( x, y, &lt;i&gt; )

**Beschreibung:** Ändert eine Liste, ein assoziatives Array oder ein Anzeigefeld x, wobei y in die Sammlung eingefügt wird. Listen und Anzeigefelder unterstützen optional i, um die Position anzugeben, oder die Elemente werden angehängt, wenn die Position nicht angegeben ist. Beachten Sie, dass das Argument x eine Variable sein muss.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Names Default To Here( 1 );
ex = {11, 22, 33};
Insert Into( ex, 99 );
ex;

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
ex = ["a" => 10, "b" => 3, => 0];
Insert Into( ex, "c", 12 );
ex;

```

**Beispiel 3**

```jsl

Names Default To Here( 1 );
New Window( "boxes", hlist = H List Box( Button Box( "a" ), Button Box( "b" ) ) );
Wait( 1 );
Insert Into( hlist, Button Box( "c" ) );

```

### Is List

**Syntax:** y = Is List( x )

**Beschreibung:** Gibt 1 zurück, wenn das Argument x eine Liste ist, andernfalls 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Is List( {1, 2, 3} );

```

### Items

**Syntax:** wl = Items(&lt;[first last]&gt;, s, &lt;delim&gt;, &lt;Include Boundary Delimiters(0|1)&gt;)

**Beschreibung:** Gibt eine Liste von (möglicherweise leeren) Teilzeichenketten zurück, die durch genau ein beliebiges der Zeichen im Argument delim getrennt werden. Wenn delim fehlt, wird das Leerzeichen verwendet. Wenn delim die leere Zeichenkette ist, wird jedes Zeichen als eigenes Element behandelt.

**JMP Version hinzugefügt:** 15

**Beispiel 1**

```jsl

Names Default To Here( 1 );
Eval List( {Items( "http://www.jmp.com", ":/." ), Items( "hello", "" )} );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
Items( ",Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

**Beispiel 3**

```jsl

Names Default To Here( 1 );
Items(
	",Apple,Banana Tree,Peach",
	Get Punctuation Characters(),
	Include Boundary Delimiters
);

```

**Beispiel 4**

```jsl

Names Default To Here( 1 );
Items( [1 2], ",Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

### Length

**Syntax:** l = Length( x )

**Beschreibung:** Gibt die Länge der vorgegebenen Zeichenkette (in Zeichen), Liste (in Elementen), des vorgegebenen assoziativen Arrays (in Anzahl Schlüsseln), Blobs (in Bytes), der vorgegebenen Matrix (in Elementen) oder des vorgegebenen Namensraums/der vorgegebenen Klasse (in Anzahl von Funktionen und Variablen) zurück.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Names Default To Here( 1 );
Length( "Café" );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
Length( {1, 2 + 3, [11 22]} );

```

**Beispiel 3**

```jsl

Names Default To Here( 1 );
Length( ["a" => 10, "b" => 3, => 0] );

```

**Beispiel 4**

```jsl

Names Default To Here( 1 );
Length( Char To Blob( "Café" ) );

```

### List

**Syntax:** y = {a, b, ...}; y = List( a, b, ... )

**Beschreibung:** Erstellt eine Liste von Elementen, ohne sie auszuwerten.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
{1, 2 + 3, [11 22]};

```

### N Items

**Syntax:** y = N Items( x )

**Beschreibung:** Gibt die Anzahl Elemente in einer Liste zurück, die Anzahl Elemente in einer Matrix, die Anzahl Schlüssel in einem assoziativen Array, die Anzahl Funktionen und Variablen in einem Namensraum, die Anzahl Methoden und Variablen in einem Klassenobjekt oder die Anzahl untergeordneter Elemente in einem Anzeigefeld.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Names Default To Here( 1 );
N Items( {1, 2 + 3, [11 22]} );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
N Items( ["a" => 10, "b" => 3, => 0] );

```

**Beispiel 3**

```jsl

Names Default To Here( 1 );
New Window( "boxes", hlist = H List Box( Button Box( "a" ), Button Box( "b" ) ) );
N Items( hlist );

```

### Remove

**Syntax:** y = Remove( x, &lt;i&gt;, &lt;n=1&gt; ); y = Remove( x, {list} )

**Beschreibung:** Gibt eine Kopie der Liste x zurück, löscht dabei n Elemente mit Beginn bei dem i-ten Element, oder löscht eine Liste mit Elementen, die vom Argument list angegeben sind.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Remove( {11, 22, 33, 44, 55}, 3, 2 );

```

### Remove From

**Syntax:** Remove From( x, &lt;i&gt;, &lt;n=1&gt; )

**Beschreibung:** Ändert eine Liste, ein assoziatives Array oder ein Anzeigefeld x durch Entfernen von Elementen. Bei assoziativen Arrays wird das zu entfernende Element durch einen Schlüsselwert i angegeben. Bei Listen und Anzeigefeldern erfolgt das Entfernen ab dem Element an Position i. Bei einer Liste werden mehrere Elemente gleichzeitig entfernt, wenn die Option n angegeben ist. Beachten Sie, dass das Argument x eine Variable sein muss.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Names Default To Here( 1 );
ex = {11, 22, 33, 44, 55};
Remove From( ex, 3, 2 );
ex;

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
ex = ["a" => 10, "b" => 3, "c" => 12, => 0];
Remove From( ex, "c" );
ex;

```

**Beispiel 3**

```jsl

Names Default To Here( 1 );
New Window( "boxes",
	hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) )
);
Wait( 1 );
Remove From( hlist, 1 );

```

### Reverse

**Syntax:** y = Reverse( x )

**Beschreibung:** Gibt eine Kopie der Liste x mit umgekehrter Reihenfolge der Elemente zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Reverse( {11, 22, 33, 44, 55} );

```

### Reverse Into

**Syntax:** Reverse Into( x )

**Beschreibung:** Ändert eine Liste oder ein Anzeigefeld x mit umgekehrter Reihenfolge der Elemente. Beachten Sie, dass das Argument x eine Variable sein muss.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Names Default To Here( 1 );
ex = {11, 22, 33, 44, 55};
Reverse Into( ex );
ex;

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
New Window( "boxes",
	hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) )
);
Wait( 1 );
Reverse Into( hlist );

```

### Set Difference

**Syntax:** list = Set Difference( list1, list2 )

**Beschreibung:** Gibt die Liste der Elemente zurück, die in list1, aber nicht in list2 vorkommen. Elemente können wiederholt werden. Wenn ein Argument eine Mehrfachantwort-Spaltenreferenz ist, wird es als Liste seiner Werte in der aktuellen Zeile behandelt.

**JMP Version hinzugefügt:** 19

```jsl

Names Default To Here( 1 );
Show( Set Difference( {1, 3}, {3, 2} ) );
Show( Set Difference( {1, 3, 4, 3}, {3, 2, 3, 5, 3} ) );

```

### Set Intersection

**Syntax:** list = Set Intersect( list1, list2 )

**Beschreibung:** Gibt die Liste der Elemente zurück, die in beiden Listen vorkommen. Elemente können wiederholt werden. Wenn ein Argument eine Mehrfachantwort-Spaltenreferenz ist, wird es als Liste seiner Werte in der aktuellen Zeile behandelt.

**JMP Version hinzugefügt:** 19

```jsl

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
Shift( {11, 22, 33, 44, 55}, 2 );

```

### Shift Into

**Syntax:** Shift Into( x, &lt;n=1&gt; )

**Beschreibung:** Ändert eine Liste oder ein Anzeigefeld x, wobei die ersten n Elemente ans Ende der Liste verschoben werden, bzw. wenn n negativ ist, werden die letzten n Elemente an den Anfang der Liste verschoben. Beachten Sie, dass das Argument x eine Variable sein muss.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Names Default To Here( 1 );
ex = {11, 22, 33, 44, 55};
Shift Into( ex, -2 );
ex;

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
New Window( "boxes",
	hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) )
);
Wait( 1 );
Shift Into( hlist, -2 );

```

### Sort List

**Syntax:** y = Sort List( x )

**Beschreibung:** Gibt eine Kopie der Liste x zurück, wobei die Elemente aufsteigend sortiert werden.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Sort List( {111, 212, 133, 114, 55} );

```

### Sort List Into

**Syntax:** Sort List Into( x )

**Beschreibung:** Ändert Liste x mit den Elementen in aufsteigender Reihenfolge. Beachten Sie, dass das Argument x eine Variable sein muss.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
ex = {111, 212, 133, 114, 55};
Sort List Into( ex );
ex;

```

### Substitute

**Syntax:** y = Substitute( x, patternExpr1, replacementExpr1, ... )y = Substitute( x, patternString1, replacementString1, ..., &lt; &lt;&lt;IGNORECASE &gt; )

**Beschreibung:** Gibt eine Kopie von Zeichenkette, Liste oder Ausdruck x zurück und ersetzt Vorkommen jedes Musterausdrucks mit dem entsprechenden Ersetzungsausdruck. Das optionale Argument <<IGNORECASE ermöglicht den Abgleich ohne Beachtung der Groß- und Kleinschreibung, wenn x eine Zeichenkette ist.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Names Default To Here( 1 );
Substitute( Expr( a + Sqrt( a ) ), Expr( a ), Expr( b ) );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
Substitute( "All things considered", "All", "Some" );

```

**Beispiel 3**

```jsl

Names Default To Here( 1 );
lst = {"a", "b", "c"};
Substitute( lst, "a", "A" );

```

**Beispiel 4**

```jsl

Names Default To Here( 1 );
Substitute( "All things considered", {"things", "All"}, {"ideas", "Some"} );

```

**Beispiel 5**

```jsl

Names Default To Here( 1 );
Substitute( "Apple,orange,banana-grape",
	Items( Get Punctuation Characters() || "-'", "" ), " "
);

```

**Beispiel 6**

```jsl

Names Default To Here( 1 );
Substitute( "Apple,APPLE,apple", "apple", "orange", <<IGNORECASE );

```

### Substitute Into

**Syntax:** Substitute Into( x, patternExpr1, replacementExpr1, ... )Substitute Into( x, patternString1, replacementString1, ..., &lt; &lt;&lt;IGNORECASE &gt; )

**Beschreibung:** Ändert Zeichenkette, Liste oder Ausdruck x und ersetzt Vorkommen jedes Musterausdrucks mit dem entsprechenden Ersetzungsausdruck. Das Argument x muss eine Variable sein. Das optionale Argument <<IGNORECASE ermöglicht den Abgleich ohne Beachtung der Groß- und Kleinschreibung, wenn x eine Zeichenkette ist.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Names Default To Here( 1 );
ex = Expr( a + Sqrt( a ) );
Substitute Into( ex, Expr( a ), Expr( b ) );
Name Expr( ex );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
ex = "All things considered";
Substitute Into( ex, "All", "Some" );
Show( ex );

```

**Beispiel 3**

```jsl

Names Default To Here( 1 );
lst = {"a", "b", "c"};
Substitute Into( lst, "a", "A" );
Show( lst );

```

**Beispiel 4**

```jsl

Names Default To Here( 1 );
s = "Apple,APPLE,apple";
Substitute Into( s, "apple", "orange", <<IGNORECASE );
Show( s );

```

### Words

**Syntax:** wl = Words( &lt;[first last]&gt;, s, &lt;delim&gt;)

**Beschreibung:** Gibt eine Liste von Teilzeichenketten zurück, die durch ein beliebiges der Zeichen im Argument delim getrennt werden. Wenn delim fehlt, wird das Leerzeichen verwendet. Wenn delim die leere Zeichenkette ist, wird jedes Zeichen als eigenes Wort behandelt.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Names Default To Here( 1 );
Eval List( {Words( "http://www.jmp.com", ":/." ), Words( "hello", "" )} );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
Words( "Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

**Beispiel 3**

```jsl

Names Default To Here( 1 );
Words( [1 2], "Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

