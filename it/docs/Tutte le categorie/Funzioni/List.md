# List



### As List

**Sintassi:** y = As List( matrix )

**Descrizione:** Restituisce la rappresentazione dell&apos;elenco di una matrice. Le matrici a più colonne sono convertite in un elenco di elenchi, uno per riga, come previsto dall&apos;operatore Matrice.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
As List( [11 22 33, 44 55 66] );

```

### Concat Items

**Sintassi:** string = Concat Items( {list of strings}, &lt;separatorString&gt; )

**Descrizione:** Unisce un elenco di stringhe in una stringa lunga separando ognuna dalla successiva con un separatore, uno spazio vuoto se non altrimenti specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Concat Items( {"www", "jmp", "com"}, "." );

```

### Eval List

**Sintassi:** y = Eval List( list )

**Descrizione:** Restituisce un elenco dove ogni elemento dell&apos;elenco è stato valutato.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Names Default To Here( 1 );
Eval List( {1 + 2, 3 + 4} );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
x = 5;
y = 10;
Eval List( {x, y} );

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

### Is List

**Sintassi:** y = Is List( x )

**Descrizione:** Restituisce 1 se l&apos;argomento x è un elenco e 0 in caso contrario.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Is List( {1, 2, 3} );

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

### List

**Sintassi:** y = {a, b, ...}; y = List( a, b, ... )

**Descrizione:** Crea un elenco di elementi senza valutarli.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
{1, 2 + 3, [11 22]};

```

### N Items

**Sintassi:** y = N Items( x )

**Descrizione:** Restituisce il numero di elementi in un elenco, il numero di elementi in una matrice, il numero di chiavi in un array associativo, il numero di funzioni e variabili in uno spazio dei nomi, il numero di metodi e variabili in un oggetto classe o il numero di elementi figlio di un riquadro di visualizzazione.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Names Default To Here( 1 );
N Items( {1, 2 + 3, [11 22]} );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
N Items( ["a" => 10, "b" => 3, => 0] );

```

**Esempio 3**

```jsl

Names Default To Here( 1 );
New Window( "boxes", hlist = H List Box( Button Box( "a" ), Button Box( "b" ) ) );
N Items( hlist );

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

### Sort List

**Sintassi:** y = Sort List( x )

**Descrizione:** Restituisce una copia dell&apos;elenco x con gli elementi in ordine crescente.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Sort List( {111, 212, 133, 114, 55} );

```

### Sort List Into

**Sintassi:** Sort List Into( x )

**Descrizione:** Modifica l&apos;elenco x con gli elementi in ordine crescente. Nota: l&apos;argomento x deve essere una variabile.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
ex = {111, 212, 133, 114, 55};
Sort List Into( ex );
ex;

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

