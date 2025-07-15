# Character



### Blob To Char

**Sintassi:** s = Blob To Char( blob, &lt;encoding="utf-8"&gt; )

**Descrizione:** Crea una stringa di caratteri da un BLOB (Binary Large OBject), utilizzando la codifica specificata. Le codifiche supportate comprendono utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, shift_jis, euc-jp e ascii~hex.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Blob To Char( Hex To Blob( "436166C3A9" ) ) || Blob To Char(
	Hex To Blob( "436166C3A9" ),
	"ascii~hex"
);

```

### Blob To Matrix

**Sintassi:** m = Blob To Matrix( blob, type, bytesEach, endian, &lt;nCols=1&gt; )

**Descrizione:** Crea una matrice convertendo in numeri i byte nel blob. type può essere "int", "uint" o "float". bytesEach può essere 1, 2, 4 o 8. endian indica se il primo byte è il più significativo ("big") o il meno significativo ("little"); "native" indica il formato nativo del computer.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Blob To Matrix( Hex To Blob( "00010002FFFFFFFE" ), "int", 2, "big", 2 );

```

### Char

**Sintassi:** s = Char( x, &lt;w&gt;, &lt;d&gt;, &lt; &lt;&lt;Use Locale( Boolean ) &gt;, &lt; &lt;&lt;Full Precision( Boolean ) &gt; )

**Descrizione:** Restituisce una rappresentazione di x come stringa di caratteri, utilizzando la larghezza massima w e le posizioni decimali d se l&apos;argomento x è numerico. <<FullPrecision scrive valori numerici utilizzando tutta la precisione disponibile.

**JMP Versione aggiunta:** prima della versione 14

**Precisione completa**

```jsl

Names Default To Here( 1 );
Show( Char( 88.54 ), Char( 88.54, <<Full Precision( 1 ) ) );

```

**Semplici**

```jsl

Names Default To Here( 1 );
Char( Pi(), 10, 4 );

```

**Usa locale**

```jsl

Names Default To Here( 1 );
Char( 2.1, <<Use Locale( 1 ) );

```

### Char To Blob

**Sintassi:** blob = Char To Blob( string, &lt;encoding="utf-8"&gt; )

**Descrizione:** Crea un BLOB (Binary Large OBject) da una stringa di caratteri , utilizzando la codifica specificata. Le codifiche supportate comprendono utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, euc-jp e ascii~hex.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Char To Blob( "Café", "utf-16be" );

```

### Char To Hex

**Sintassi:** h = Char To Hex( value, &lt;"integer"&gt;|&lt;encoding="utf-8"&gt; )

**Descrizione:** Restituisce il testo esadecimale corrispondente al valore e codifica specificati, che possono essere un numero, una stringa o un blob. Se il valore è un numero, si utilizza la codifica IEEE 754 a 64 bit a meno che sia indicato l&apos;argomento opzionale, "integer". Le codifiche supportate sono utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, ascii~hex, shift_jis e euc-jp.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Hex( 1024, "integer" ) || " " || Hex( "Café", "utf-16be" );

```

### Collapse Whitespace

**Sintassi:** scw = Collapse Whitespace( s )

**Descrizione:** Taglia gli spazi iniziali e finali e rimuove gli spazi vuoti doppi interni

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Collapse Whitespace( "  The  dog    crossed    the  road  " );

```

### Concat

**Sintassi:** s = s1 || s2 ...; m = m1 || m2 ...; s = Concat( s1, s2, ... )

**Descrizione:** Concatena stringhe in una catena più lunga o matrici in una matrice più ampia.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
[1 2] || [3 4] || [5 6];

```

### Concat Items

**Sintassi:** string = Concat Items( {list of strings}, &lt;separatorString&gt; )

**Descrizione:** Unisce un elenco di stringhe in una stringa lunga separando ognuna dalla successiva con un separatore, uno spazio vuoto se non altrimenti specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Concat Items( {"www", "jmp", "com"}, "." );

```

### Concat To

**Sintassi:** string1 ||= string2; matrix1 ||= matrix2; Concat To( a, b )

**Descrizione:** Concatena sul posto. a ||= b è equivalente a a = a || b. Si tratta di un operatore di assegnazione.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
ex = "hello ";
ex ||= "world";

```

### Contains

**Sintassi:** pos = Contains( x, item, &lt;start=1&gt; )

**Descrizione:** Restituisce la posizione di item entro x, iniziando dalla posizione start, se indicata. Se tale posizione start è negativa, la ricerca avviene all&apos;indietro a partire da length( x ) - start. L&apos;argomento x può essere una stringa o un elenco.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Show( Contains( "redreed", "re", -1 ) );
Show( Contains( {"A", 2, "C", [1 5], "C"}, "C", 4 ) );

```

### Contains Item

**Sintassi:** b = Contains Item( x, item | list | Pat Regex(), &lt;delimiter&gt; )

**Descrizione:** Restituisce un valore booleano che indica se la parola [elemento], una di un elenco di parole [elenco], o il pattern [pattern] corrisponde a una delle parole nel testo rappresentato da [x]. Le parole sono delimitate dai caratteri nella stringa facoltativa del delimitatore [delimitatore]. Il carattere virgola, ",", è il delimitatore predefinito. Gli spazi sono troncati dalle estremità di ciascuna parola estratta dalla stringa di testo di input [x].

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Names Default To Here( 1 );
Show( Contains Item( "A, 2, C, D, C", "C", ", " ) );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Food Journal.jmp" );
dt << New Column( "Cheese",
	numeric,
	continuous,
	Formula( Contains Item( dt:Item Name, "Cheese", ", " ) )
);
dt << Distribution( Column( :Cheese ) );

```

**Esempio 3**

```jsl

Names Default To Here( 1 );
//find repeated character c in cdcef
Contains Item( "abcde,bcdef,cdcef", Pat Regex( "(.).*?\1" ), "," );

```

### Ends With

**Sintassi:** b = Ends With( s, sub )

**Descrizione:** Restituisce 1 se s termina con sub, altrimenti restituisce 0. Gli argomenti s e sub possono essere entrambi stringhe o entrambi elenchi. Equivalente a Right( s, Length( sub )) == sub.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Ends With( "http://www.jmp.com", ".com" );

```

### Hex

**Sintassi:** h = Hex( value, &lt;"integer"&gt;|&lt;encoding="utf-8"&gt;|&lt;Base(number)&gt;,&lt;Pad To(number)&gt; )

**Descrizione:** Restituisce il testo esadecimale (o altro sistema di numerazione base) corrispondente al valore e codifica specificati, che possono essere un numero, una stringa o un blob. Se il valore è un numero, si utilizza la codifica IEEE 754 a 64 bit, a meno che sia indicato uno degli argomenti facoltativi, integer o Base. Se è specificata Base, la funzione restituisce il testo corrispondente al numero specificato in tale sistema numerico base specificato invece di esadecimale. La base deve essere un numero intero tra 2 e 36 compresi. Le codifiche supportate comprendono utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, ascii~hex, shift_jis e euc-jp.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Hex( 1024, "integer" ) || " " || Hex( "Café", "utf-16be" ) || " " ||
Hex( 11, Base( 2 ), Pad To( 8 ) );

```

### Hex To Blob

**Sintassi:** blob = Hex To Blob( hex string )

**Descrizione:** Crea un BLOB (Binary Large Object) dalla stringa specificata di codici esadecimali che possono anche comprendere spazi, virgole, ritorni a capo e avanzamenti righe.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Hex To Blob( "FF78CE" );

```

### Hex To Char

**Sintassi:** s = Hex To Char( hextext, &lt;encoding="utf-8"&gt; )

**Descrizione:** Restituisce il testo corrispondente al testo esadecimale utilizzando la codifica specificata. Le codifiche supportate sono utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, ascii~hex, shift_jis e euc-jp.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Hex To Char( "436166C3A9" ) || Hex To Char( "00430061006600E9", "utf-16be" );

```

### Hex To Number

**Sintassi:** x = Hex To Number( hextext, &lt;Base(number)&gt; )

**Descrizione:** Restituisce il numero corrispondente al testo esadecimale (o altro sistema di numerazione base). 16 cifre esadecimali sono convertite come numeri in virgola mobile IEEE 754 a 64 bit; altrimenti l&apos;input è trattato come numero intero esadecimale. Se è specificata Base, il testo è trattato come una stringa rappresentante il numero in tale base. La base deve essere un numero intero compreso tra 2 e 36 inclusi.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Hex To Number( "11110000", Base( 2 ) );

```

### Insert

**Sintassi:** z = Insert( x, y, &lt;i&gt; )

**Descrizione:** Restituisce una copia dell&apos;elenco x con y inserito alla i-esima posizione o aggiunto alla fine se l&apos;argomento facoltativo i non è specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
z = {11, 22, 33};
z = Insert( z, 99, 2 );

```

### Insert Into

**Sintassi:** Insert Into( x, y, &lt;i&gt; )

**Descrizione:** Modifica l&apos;elenco, l&apos;array associativo o il riquadro di visualizzazione x con y inserito nella raccolta. Gli elenchi e i riquadro di visualizzazione supportano un i facoltativo per specificare la posizione oppure gli elementi vengono accodati se non si specifica la posizione. Nota: l&apos;argomento x deve essere una variabile.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Names Default To Here( 1 );
ex = {11, 22, 33};
Insert Into( ex, 99 );
ex;

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
ex = ["a" => 10, "b" => 3, => 0];
Insert Into( ex, "c", 12 );
ex;

```

**Esempio 3**

```jsl

Names Default To Here( 1 );
New Window( "boxes", hlist = H List Box( Button Box( "a" ), Button Box( "b" ) ) );
Wait( 1 );
Insert Into( hlist, Button Box( "c" ) );

```

### Item

**Sintassi:** w = Item( n|[first last], s, &lt;delim&gt;, &lt;Unmatched(result string)&gt;, &lt;Include Boundary Delimiters(0|1)&gt;)

**Descrizione:** Restituisce l&apos;n-esimo elemento dell&apos;argomento s, dove gli elementi sono le sottostringhe (possibilmente vuote) separate esattamente da uno qualsiasi dei caratteri specificati nell&apos;argomento delim. Se delim è assente viene utilizzato uno spazio. Se delim è la stringa vuota, ogni carattere è trattato come un elemento separato.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Names Default To Here( 1 );
Item( 5, "http://www.jmp.com", ":/." );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
Item( [2 -1], "This is a sentence" );

```

**Esempio 3**

```jsl

Names Default To Here( 1 );
Item( 4, "Apple+Banana Tree,,Pear,,Peach,,Grape", Get Punctuation Characters() );

```

**Esempio 4**

```jsl

Names Default To Here( 1 );
Item( 5, "a b c d", Unmatched( "None" ) );

```

**Esempio 5**

```jsl

Names Default To Here( 1 );
Item( 2, "abcd", "" );

```

**Esempio 6**

```jsl

Names Default To Here( 1 );
Item( 2, ",abcd", ",", Include Boundary Delimiters );

```

### Items

**Sintassi:** wl = Items(&lt;[first last]&gt;, s, &lt;delim&gt;, &lt;Include Boundary Delimiters(0|1)&gt;)

**Descrizione:** Restituisce un elenco di sottostringhe (eventualmente vuote) separate esattamente da uno qualsiasi dei caratteri specificati nell&apos;argomento delim. Se delim è assente, viene utilizzato uno spazio. Se delim è la stringa vuota, ogni carattere è trattato come un elemento separato.

**JMP Versione aggiunta:** 15

**Esempio 1**

```jsl

Names Default To Here( 1 );
Eval List( {Items( "http://www.jmp.com", ":/." ), Items( "hello", "" )} );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
Items( ",Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

**Esempio 3**

```jsl

Names Default To Here( 1 );
Items(
	",Apple,Banana Tree,Peach",
	Get Punctuation Characters(),
	Include Boundary Delimiters
);

```

**Esempio 4**

```jsl

Names Default To Here( 1 );
Items( [1 2], ",Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

### Left

**Sintassi:** sub = Left( s, n, &lt;filler&gt; )

**Descrizione:** Restituisce una versione troncata o riempita della stringa o elemento originale s. Il risultato contiene i caratteri n di sinistra o gli elementi dell&apos;elenco, riempiti con qualsiasi filler sulla destra se la lunghezza di s è inferiore a n.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
exurl = "http://www.jmp.com";
Left( exurl, Contains( exurl, ":" ) - 1 );

```

### Length

**Sintassi:** l = Length( x )

**Descrizione:** Restituisce la lunghezza della stringa data (in caratteri), elenco (in elementi), array associativo (in numero di chiavi), blob (in byte), matrice (in elementi) o spazio dei nomi/classe (in numero di funzioni e variabili).

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Names Default To Here( 1 );
Length( "Café" );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
Length( {1, 2 + 3, [11 22]} );

```

**Esempio 3**

```jsl

Names Default To Here( 1 );
Length( ["a" => 10, "b" => 3, => 0] );

```

**Esempio 4**

```jsl

Names Default To Here( 1 );
Length( Char To Blob( "Café" ) );

```

### Lowercase

**Sintassi:** sl = Lowercase( s )

**Descrizione:** Converte le lettere maiuscole in lettere minuscole nella stringa specificata. Le regole relative al maiuscolo/minuscolo variano a livello locale.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Lowercase( "CAFÉ #23" );

```

### Matrix To Blob

**Sintassi:** m = Matrix To Blob( matrix, type, bytesEach, endian )

**Descrizione:** Crea un blob da una matrice convertendo gli elementi della matrice in numeri interi con o senza segno da 1, 2 o 4 byte o numeri in virgola mobile da 4 o 8 byte.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Matrix To Blob( [3.14, 1.414], "float", 4, "big" );

```

### Munger

**Sintassi:** r = Munger( s, startPos, findStringOrNChars, &lt;replaceString&gt; )

**Descrizione:** Ricerca l&apos;argomento s per una sottostringa o posizione in base alla combinazione di argomenti.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Eval List( {Munger( "over there", 1, "t", "" ), Munger( "17 June 2000", 4, 4, "March" )} );

```

### Num

**Sintassi:** y = Num( s, &lt; &lt;&lt;Use Locale( use=1 ) &gt;, &lt; &lt;&lt;Restrict &gt; )

**Descrizione:** Converte s in un numero usando qualsiasi formato incorporato, inclusi i formati data e valuta. Restituisce mancante se la conversione non riesce. L&apos;opzione facoltativa <<Restrict consente solo la conversione usando formati interi, decimali e scientifici.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Names Default To Here( 1 );
Show( Num( "3.1e6" ), Num( "1989-10-04" ), Num( "5%" ), Num( "£23" ) );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
Show(
	Num( "3.1e6", <<Restrict ),
	Num( "1989-10-04", <<Restrict ),
	Num( "5%", <<Restrict ),
	Num( "£23", <<Restrict )
);

```

### Regex

**Sintassi:** result = Regex( source, pattern, &lt;format, &lt;IGNORECASE&gt;, &lt;GLOBALREPLACE&gt;&gt; )

**Descrizione:** Cerca nel testo di source una corrispondenza con pattern. L&apos;impostazione predefinita di format è "\0" (l&apos;intera corrispondenza) ma potrebbe essere "Fred" (per una sostituzione costante) o "\1" (per usare il testo corrispondente alla prima parentesi in pattern). Restituisce un numero mancante per nessuna corrispondenza. La distinzione tra maiuscole/minuscole è l&apos;impostazione predefinita.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Regex(
	"   Are you there Alice?, asked Jerry.",
	" (here|there) (\w+).+(said|asked) (\w+)\.",
	"  I am \1, \4, replied \2."
);

```

### Remove

**Sintassi:** y = Remove( x, &lt;i&gt;, &lt;n=1&gt; ); y = Remove( x, {list} )

**Descrizione:** Restituisce una copia dell&apos;elenco x eliminando n elementi a partire dall&apos;i-esimo elemento o eliminando un elenco di elementi specificati dall&apos;argomento list.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Remove( {11, 22, 33, 44, 55}, 3, 2 );

```

### Remove From

**Sintassi:** Remove From( x, &lt;i&gt;, &lt;n=1&gt; )

**Descrizione:** Modifica l&apos;elenco, l&apos;array associativo o il riquadro di visualizzazione x rimuovendo elementi. Gli array associativi specificano l&apos;elemento da rimuovere con un valore di chiave i. Gli elenchi e i riquadri di visualizzazione rimuovo iniziando dall&apos;elemento in posizione i. Un elenco rimuove più elementi contemporaneamente se è specificata l&apos;opzione n. Nota: l&apos;argomento x deve essere una variabile.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Names Default To Here( 1 );
ex = {11, 22, 33, 44, 55};
Remove From( ex, 3, 2 );
ex;

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
ex = ["a" => 10, "b" => 3, "c" => 12, => 0];
Remove From( ex, "c" );
ex;

```

**Esempio 3**

```jsl

Names Default To Here( 1 );
New Window( "boxes",
	hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) )
);
Wait( 1 );
Remove From( hlist, 1 );

```

### Repeat

**Sintassi:** s = Repeat( x, n, &lt;m=1&gt; )

**Descrizione:** Restituisce il testo, matrice o elenco specificati dall&apos;argomento x concatenato con se stesso n volte. Se x è un numero o una matrice, n indica la ripetizione verticale e l&apos;argomento facoltativo m indica la ripetizione orizzontale.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Show( Repeat( {"A", "B"}, 3 ), Repeat( 2, 3 ), Repeat( 2, 1, 3 ) );

```

### Reverse

**Sintassi:** y = Reverse( x )

**Descrizione:** Restituisce una copia dell&apos;elenco x con l&apos;ordine degli elementi invertito.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Reverse( {11, 22, 33, 44, 55} );

```

### Reverse Into

**Sintassi:** Reverse Into( x )

**Descrizione:** Modifica l&apos;elenco o il riquadro di visualizzazione x con l&apos;ordine degli elementi invertito. Nota: l&apos;argomento x deve essere una variabile.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Names Default To Here( 1 );
ex = {11, 22, 33, 44, 55};
Reverse Into( ex );
ex;

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
New Window( "boxes",
	hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) )
);
Wait( 1 );
Reverse Into( hlist );

```

### Right

**Sintassi:** sub = Right( s, n, &lt;filler&gt; )

**Descrizione:** Restituisce una versione troncata o riempita della stringa o elemento originale s. Il risultato contiene i caratteri n di destra o gli elementi dell&apos;elenco, riempiti con qualsiasi filler sulla sinistra se la lunghezza di s è inferiore a n.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Right( "http://www.jmp.com", 3 );

```

### Set Difference

**Sintassi:** list = Set Difference( list1, list2 )

**Descrizione:** Restituisce l&apos;elenco degli elementi presenti in list1 ma non in list2. Gli elementi possono essere ripetuti. Se un argomento è un riferimento a una colonna a risposta multipla, viene trattato come un elenco dei suoi valori nella riga corrente.

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );
Show( Set Difference( {1, 3}, {3, 2} ) );
Show( Set Difference( {1, 3, 4, 3}, {3, 2, 3, 5, 3} ) );

```

### Set Intersection

**Sintassi:** list = Set Intersect( list1, list2 )

**Descrizione:** Restituisce l&apos;elenco degli elementi presenti in entrambi gli elenchi. Gli elementi possono essere ripetuti. Se un argomento è un riferimento a una colonna a risposta multipla, viene trattato come un elenco dei suoi valori nella riga corrente.

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );
Show( Set Intersection( {1, 3}, {3, 2} ) );
Show( Set Intersection( {1, 3, 4, 3}, {3, 2, 3, 5, 3} ) );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << get rows where( Set Intersection( :sports, {"Soccer"} ) != {} );

```

### Set Union

**Sintassi:** list = Set Union( list1, list2 )

**Descrizione:** Restituisce l&apos;elenco degli elementi presenti in uno dei due elenchi. Gli elementi possono essere ripetuti. Se un argomento è un riferimento a una colonna a risposta multipla, viene trattato come un elenco dei suoi valori nella riga corrente.

**JMP Versione aggiunta:** 19

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

**Sintassi:** list = Set Unique( list )

**Descrizione:** Restituisce l&apos;elenco degli elementi univoci presenti nell&apos;elenco di input. Se un argomento è un riferimento a una colonna a risposta multipla, viene trattato come un elenco dei suoi valori nella riga corrente.

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );
Show( Set Unique( {1, 3, 2} ) );
Show( Set Unique( {1, 3, 4, 3, 3, 2, 3, 5, 3} ) );
Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Row() = 1;
Show( Set Unique( :sports ) );

```

### Shift

**Sintassi:** y = Shift( x, &lt;n=1&gt; )

**Descrizione:** Restituisce una copia dell&apos;elenco x con i primi n elementi spostati alla fine dell&apos;elenco o, se n è negativo, gli ultimi n elementi spostati all&apos;inizio.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Shift( {11, 22, 33, 44, 55}, 2 );

```

### Shift Into

**Sintassi:** Shift Into( x, &lt;n=1&gt; )

**Descrizione:** Modifica l&apos;elenco o il riquadro di visualizzazione x con i primi elementi n spostati alla fine dell&apos;elenco o, se n è negativo, gli ultimi elementi n spostati all&apos;inizio. Nota: l&apos;argomento x deve essere una variabile.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Names Default To Here( 1 );
ex = {11, 22, 33, 44, 55};
Shift Into( ex, -2 );
ex;

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
New Window( "boxes",
	hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) )
);
Wait( 1 );
Shift Into( hlist, -2 );

```

### Starts With

**Sintassi:** b = Starts With( s, sub )

**Descrizione:** Restituisce 1 se s inizia con sub, altrimenti restituisce 0. Gli argomenti s e sub possono essere entrambi stringhe o entrambi elenchi. Equivalente a Left( s, Length( sub )) == sub.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Starts With( "http://www.jmp.com", "http:" );

```

### Substitute

**Sintassi:** y = Substitute( x, patternExpr1, replacementExpr1, ... )y = Substitute( x, patternString1, replacementString1, ..., &lt; &lt;&lt;IGNORECASE &gt; )

**Descrizione:** Restituisce una copia di stringa, elenco o espressione x, sostituendo istanze di ciascuna espressione di pattern con la rispettiva espressione di sostituzione. L&apos;argomento facoltativo <<IGNORECASE abilita la ricerca senza distinzione fra maiuscole e minuscole se x è una stringa.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Names Default To Here( 1 );
Substitute( Expr( a + Sqrt( a ) ), Expr( a ), Expr( b ) );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
Substitute( "All things considered", "All", "Some" );

```

**Esempio 3**

```jsl

Names Default To Here( 1 );
lst = {"a", "b", "c"};
Substitute( lst, "a", "A" );

```

**Esempio 4**

```jsl

Names Default To Here( 1 );
Substitute( "All things considered", {"things", "All"}, {"ideas", "Some"} );

```

**Esempio 5**

```jsl

Names Default To Here( 1 );
Substitute( "Apple,orange,banana-grape",
	Items( Get Punctuation Characters() || "-'", "" ), " "
);

```

**Esempio 6**

```jsl

Names Default To Here( 1 );
Substitute( "Apple,APPLE,apple", "apple", "orange", <<IGNORECASE );

```

### Substitute Into

**Sintassi:** Substitute Into( x, patternExpr1, replacementExpr1, ... )Substitute Into( x, patternString1, replacementString1, ..., &lt; &lt;&lt;IGNORECASE &gt; )

**Descrizione:** Modifica la stringa, elenco o espressione x, sostituendo istanze di ciascuna espressione di pattern con la rispettiva espressione di sostituzione. Nota: l&apos;argomento x deve essere una variabile. L&apos;argomento facoltativo <<IGNORECASE abilita la ricerca senza distinzione fra maiuscole e minuscole se x è una stringa.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Names Default To Here( 1 );
ex = Expr( a + Sqrt( a ) );
Substitute Into( ex, Expr( a ), Expr( b ) );
Name Expr( ex );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
ex = "All things considered";
Substitute Into( ex, "All", "Some" );
Show( ex );

```

**Esempio 3**

```jsl

Names Default To Here( 1 );
lst = {"a", "b", "c"};
Substitute Into( lst, "a", "A" );
Show( lst );

```

**Esempio 4**

```jsl

Names Default To Here( 1 );
s = "Apple,APPLE,apple";
Substitute Into( s, "apple", "orange", <<IGNORECASE );
Show( s );

```

### Substr

**Sintassi:** sub = Substr( s, start, &lt;count&gt; )

**Descrizione:** Restituisce la parte di stringa s composta da count caratteri che partono dalla posizione start. Un count negativo o assente significa il resto della stringa. Un start negativo significa fare partire i caratteri di start dalla fine. La funzione Substr() può anche essere applicata a elenchi.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Eval List( {Substr( "undergo", 4 ), Substr( {10, 11, 12, 13, 14}, 2, 3 )} );

```

### Text Score

**Sintassi:** score vector = Text Score( text column, text-to-number, &lt;weighting&gt;, &lt;{&lt;center&gt;, &lt;scale&gt;, scoring matrix}&gt;);

**Descrizione:** Utilizzato per creare formule di scoring in Explorer del testo. L&apos;argomento da-testo-a-numero è un array associativo che associa parole minuscole a numeri. L&apos;argomento di ponderazione è "Binary", "Ternary", "Count", "LogCount", "LCA" o un array di pesi con frequenza inversa del documento per TFLogIDF. La matrice di scoring deve avere un numero di colonne uguale alle parole dell&apos;array associativo o una in più se LCA. L&apos;output è un vettore di score. Se non è specificata alcuna matrice di scoring, viene restituito un vettore di score di conteggio. Se non è specificata alcuna ponderazione, viene usato Conteggio. Questa funzione non supporta l&apos;opzione Lemmatizza per combinare.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
score = Text Score(
	"over the lazy dogs back",
	["lazy" => 1, "dogs" => 2],
	"Count",
	[1 0, 0 1]
);
Show( score );

```

### Titlecase

**Sintassi:** st = Titlecase( s )

**Descrizione:** Converte in Tutte iniziali maiuscole

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Titlecase( "The dog crossed the road" );

```

### Trim

**Sintassi:** sub = Trim( s, &lt;left|right|both&gt; )

**Descrizione:** Restituisce una copia della stringa s dove gli spazi vuoti iniziali o finali sono rimossi. Il secondo argomento specifica gli spazi vuoti iniziali o finali. Se non si specifica il secondo argomento, gli spazi vuoti vengono rimossi a entrambe le estremità.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Trim( " title   ", both );

```

### Trim Whitespace

**Sintassi:** sub = Trim Whitespace( s, &lt;left|right|both&gt; )

**Descrizione:** Restituisce una copia della stringa s dove gli spazi vuoti iniziali o finali sono rimossi. Il secondo argomento specifica gli spazi vuoti iniziali o finali. Se non si specifica il secondo argomento, gli spazi vuoti vengono rimossi a entrambe le estremità.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Trim Whitespace( "  The  dog    crossed    the  road  " );

```

### Uppercase

**Sintassi:** su = Uppercase( s )

**Descrizione:** Converte le lettere minuscole in lettere maiuscole nella stringa specificata. Le regole relative al maiuscolo/minuscolo variano a livello locale.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Uppercase( "Café #23" );

```

### Word

**Sintassi:** w = Word( n|[first last], s, &lt;delim&gt;, &lt;Unmatched(result string)&gt;

**Descrizione:** Restituisce l&apos;n-esima parola della stringa s, dove le parole sono sottostringhe separate da un numero qualsiasi di uno qualunque dei caratteri nell&apos;argomento delim. Se delim è assente viene utilizzato uno spazio. Se delim è la stringa vuota, ogni carattere è trattato come una parola separata.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Names Default To Here( 1 );
Word( 3, "http://www.jmp.com", ":/." );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
Word( [2 -1], "This is a sentence" );

```

**Esempio 3**

```jsl

Names Default To Here( 1 );
Word( 4, "Apple+Banana Tree,,Pear,,Peach,,Grape", Get Punctuation Characters() );

```

**Esempio 4**

```jsl

Names Default To Here( 1 );
Word( 5, "a b c d", Unmatched( "None" ) );

```

**Esempio 5**

```jsl

Names Default To Here( 1 );
Word( 2, "abcd", "" );

```

### Words

**Sintassi:** wl = Words( &lt;[first last]&gt;, s, &lt;delim&gt;)

**Descrizione:** Restituisce un elenco di sottostringhe separate da uno qualsiasi dei caratteri nell&apos;argomento delim. Se delim è assente viene utilizzato uno spazio. Se delim è la stringa vuota, ogni carattere è trattato come una parola separata.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Names Default To Here( 1 );
Eval List( {Words( "http://www.jmp.com", ":/." ), Words( "hello", "" )} );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
Words( "Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

**Esempio 3**

```jsl

Names Default To Here( 1 );
Words( [1 2], "Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

### XPath Query

**Sintassi:** result = XPath Query(xml, xpath expression)

**Descrizione:** Esegue una query XPath rispetto a un documento XML.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
result = XPath Query(
	"<doc><colors><color>red</color><color>green</color><color>blue</color></colors></doc>",
	"//color/text()"
);

```

