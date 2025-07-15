# Programming



### Add Custom Functions

**Sintassi:** Add Custom Functions({f1, f2, ...} | f)

**Descrizione:** Definisce un elenco di funzioni personalizzate da usare negli script e nell’editor delle formule. Il comando aggiunge anche l’elenco all’ambiente.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y}, x + y - 1 ) );
mySub = New Custom Function( "custom", "Sub", Function( {x, y}, x - y + 1 ) );
Add Custom Functions( {myAdd, mySub} );

```

### As Boolean

**Sintassi:** b = As Boolean( x )

**Descrizione:** Valuta un’espressione e restituisce un valore booleano.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
x = 45;
b = As Boolean( x > 2 );
Show( b );

```

### As Column

**Sintassi:** y = :name;y = dataTable:name;y = As Column( name );y = As Column( dataTable, name )

**Descrizione:** Accede alla colonna specifica nella tabella di dati specificata o corrente. Viene generato un errore se non viene trovata la colonna o la tabella di dati.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
exdt = Open( "$SAMPLE_DATA/Big Class.jmp" );
exdt:height[1] + :height[2] + As Column( "height" )[3];

```

### As Constant

**Sintassi:** y = As Constant( x )

**Descrizione:** Valuta un&apos;espressione per creare un valore costante che non cambi dopo essere stato calcolato

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Names Default To Here( 1 );
New Table( "As Constant Demo Table 1",
	Add Rows( 10 ),
	New Column( "Non-Constant", Formula( Random Uniform() ) ),
	New Column( "Constant", Formula( As Constant( Random Uniform() ) ) )
);

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
New Table( "As Constant Demo Table 2",
	Add Rows( 1000 ),
	New Column( "What's on Your Desktop?",
		"character",
		Formula(
			As Constant( xFiles = Files In Directory( "$Desktop" ) );
			iR = Row();
			If( iR <= N Items( xFiles ),
				xFiles[iR],
				"---"
			);
		)
	)
);

```

**Esempio 3**

```jsl

Names Default To Here( 1 );
For( i = 1, i <= 10, i++,
	x = 2;
	y = 100;
	z = As Constant( x + y );
	x *= i;
	y /= i;
	Show( i, x + y, z );
);

```

### As Global

**Sintassi:** y = ::name; y = As Global( name )

**Descrizione:** Accede alla variabile globale specificata o genera un errore se non esiste la variabile globale.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
::ex = 23;
Local( {ex = 12}, Eval List( {ex, ::ex, As Global( "ex" )} ) );

```

### As List

**Sintassi:** y = As List( matrix )

**Descrizione:** Restituisce la rappresentazione dell&apos;elenco di una matrice. Le matrici a più colonne sono convertite in un elenco di elenchi, uno per riga, come previsto dall&apos;operatore Matrice.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
As List( [11 22 33, 44 55 66] );

```

### As Name

**Sintassi:** y = As Name( s )

**Descrizione:** Converte la stringa in un nome o un elenco di stringhe in un elenco di nomi.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:(As Name( "height" ))[3];

```

### As Namespace

**Sintassi:** asns = As Namespace( ns )

**Descrizione:** Accede allo spazio dei nomi specificato o genera un errore se quello spazio dei nomi non esiste.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
ns = New Namespace(
	"complex"
);
As Namespace( ns );

```

### As Root

**Sintassi:** y = :::name; y = As Root( name )

**Descrizione:** Accede alla variabile di scoping della radice specificata o genera un errore se tale variabile non esiste.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
::: ex = 23;
Local( {ex = 12}, Eval List( {ex, ::: ex, As Global( "ex" )} ) );

```

### As Scoped

**Sintassi:** y = namespace:variable; y = As Scoped( namespace, variable )

**Descrizione:** Accede alla variabile di scoping specificata o genera un errore se tale variabile non esiste.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Here:z = 23.5;
As Scoped( Here, z );

```

### Associative Array

**Sintassi:** y = Associative Array( {{key1, value1}, ...} );y = Associative Array( keys, values )

**Descrizione:** Crea un array associativo, noto anche come dizionario o mappa hash. Nel form a due argomenti, chiavi e valori devono essere un elenco, una matrice o una colonna di una tabella di dati.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
ex = Associative Array( {"red", "blue"}, {1, 2} );
ex["green"] = 3;
ex << get contents;

```

### Choose Closest

**Sintassi:** Choose Closest(source string, {canonical strings...}, &lt;Ignore Case(ignore=1|0)&gt;, &lt;Ignore Nonprintable(ignore=1|0)&gt;, &lt;Ignore Whitespace(ignore=1|0)&gt;, &lt;Max Edit Count(count)&gt;, &lt;Max Edit Ratio([0..1])&gt;, &lt;Min String Length(&lt;count=3&gt;)&gt;, &lt;Replace Unmatched(replace=0|1)&gt;, &lt;Unmatched Value(&lt;value=""&gt;)&gt;)

**Descrizione:** Seleziona la stringa più vicina entro le regole specificate e la restituisce. 

Per impostazione predefinita, le maiuscole/minuscole vengono ignorate; utilizzare l&apos;opzione Ignora maiuscole/minuscole per specificare.

Per impostazione predefinita, i caratteri non stampabili vengono ignorati; utilizzare l&apos;opzione Ignora non stampabili per specificare.

Per impostazione predefinita, gli spazi vengono ignorati; utilizzare l&apos;opzione Ignora spazi per specificare.

Per impostazione predefinita, non sono consentite modifiche alfanumeriche per trovare una corrispondenza.

	Utilizzare l&apos;opzione Conteggio max modifiche per controllare il numero di modifiche che è possibile apportare.

	Utilizzare l&apos;opzione Rapporto max modifiche per controllare la percentuale di modifiche consentite (in termini di caratteri nella stringa originale).

	Entrambe le impostazioni vengono applicate solo se specificate.

Per impostazione predefinita, le stringhe più corte di 3 caratteri non verranno associate; utilizzare l&apos;opzione Lunghezza min stringa per specificare una lunghezza diversa.

Stringhe non associate

	Per impostazione predefinita, se nessuna stringa canonica corrisponde alle regole date, viene restituita la stringa di origine.

	Utilizzare l&apos;opzione Sostituisci non associate per specificare se la stringa di origine verrà restituita.

	Utilizzare l&apos;opzione Non associata per specificare il valore da restituire.

**JMP Versione aggiunta:** 15

**Consenti modifiche**

```jsl

Names Default To Here( 1 );
Choose Closest( "MARTA", {"MARTHA"}, Max Edit Count( 2 ) );

```

**Mantieni punteggiatura**

```jsl

Names Default To Here( 1 );
Choose Closest( "MARTHA_", {"MARTHA"}, Ignore Punctuation( 0 ) );

```

**Non associata**

```jsl

Names Default To Here( 1 );
Choose Closest( "MARTHA", {"Martha"}, Ignore Case( 0 ), Unmatched() );

```

**Scegli tra le stringhe, nessuna modifica**

```jsl

Names Default To Here( 1 );
Choose Closest( "MARTHA_", {"Martha", "MARY"} );

```

### Class Exists

**Sintassi:** nsexists = Class Exists( class name )

**Descrizione:** Restituisce 1 se esiste la classe specificata dall&apos;argomento name. Altrimenti, restituisce 0.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Define Class(
	"complex",
	real = 0;
	imag = 0;
	_init_ = Method( {a, b},
		real = a;
		imag = b;
	);
	Add = Method( {y},
		New Object( complex( real + y:real, imag + y:imag ) )
	);
	Sub = Method( {y},
		New Object( complex( real - y:real, imag - y:imag ) )
	);
	Mul = Method( {y},
		New Object( complex( real * y:real - imag * y:imag, imag * y:real + real * y:imag ) )
	);
	Div = Method( {y},
		t = New Object( complex( 0, 0 ) );
		mag2 = y:Magsq();
		t:real = real * y:real + imag * y:imag;
		t:imag = imag * y:real + real * y:imag;
		t:real = t:real / mag2;
		t:imag = t:imag / mag2;
		t;
	);
	Magsq = Method( {},
		real * real + imag * imag
	);
	Mag = Method( {},
		Sqrt( real * real + imag * imag )
	);
	_to string_ = Method( {},
		Char( real ) || " + " || Char( imag ) || "i"
	);
	_show_ = _to string_;
);
cl = New Object( complex( 1, 2 ) );
clexists = Class Exists( cl );
Show( clexists );
cl << Delete;
Delete Classes( "complex" );

```

### Clear Globals

**Sintassi:** Clear Globals( &lt; varname, ... &gt; )

**Descrizione:** Cancella i valori di tutti i simboli globali al momento definiti.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Clear Globals();

```

### Clear Log

**Sintassi:** Clear Log()

**Descrizione:** Svuota il log.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Clear Log();

```

### Clear Symbols

**Sintassi:** Clear Symbols( &lt; varname, ... &gt; )

**Descrizione:** Cancella i valori di tutti i simboli al momento definiti.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Clear Symbols();

```

### Close Log

**Sintassi:** Close Log()

**Descrizione:** Chiude la finestra di log

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Close Log();
Show( Is Log Open() );

```

### Define Class

**Sintassi:** Define Class("class name", &lt;Base Class{ "base class name", ... }&gt;, &lt;Show( All( boolean ) | ( Members( boolean ) | Methods( boolean ) | Functions( boolean ) )+ )&gt;, { method* | member* | function* } )

**Descrizione:** Definisce una nuova classe

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
Define Class(
	"complex",
	real = 0;
	imag = 0;
	_init_ = Method( {a, b},
		real = a;
		imag = b;
	);
	Add = Method( {y},
		New Object( complex( real + y:real, imag + y:imag ) )
	);
	Sub = Method( {y},
		New Object( complex( real - y:real, imag - y:imag ) )
	);
	Mul = Method( {y},
		New Object( complex( real * y:real - imag * y:imag, imag * y:real + real * y:imag ) )
	);
	Div = Method( {y},
		t = New Object( complex( 0, 0 ) );
		mag2 = y:Magsq();
		t:real = real * y:real + imag * y:imag;
		t:imag = imag * y:real + real * y:imag;
		t:real = t:real / mag2;
		t:imag = t:imag / mag2;
		t;
	);
	Magsq = Method( {},
		real * real + imag * imag
	);
	Mag = Method( {},
		Sqrt( real * real + imag * imag )
	);
	_to string_ = Method( {},
		Char( real ) || " + " || Char( imag ) || "i"
	);
	_show_ = _to string_;
);
cl = New Object( complex( 1, 2 ) );
cl << Delete;
Delete Classes( complex );

```

### Delete Classes

**Sintassi:** Delete Classes( &lt;Force( boolean )&gt;, &lt;class reference, ...&gt; )

**Descrizione:** Elimina tutte le definizioni di classi o una o più definizioni di classi specifiche.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Define Class(
	"aa",
	{_init_ = Method( {} ), x = 1, m1 = Method( {a, b}, a * b )}
);
Define Class(
	"bb",
	{_init_ = Method( {} ), y = 1, m2 = Method( {a, b}, a / b )}
);
lcaa = New Object( aa() );
lcbb = New Object( bb() );
lcl = Get Classes();
Show( lcl );
Show Classes();
Clear Symbols( lcl );
lcaa << Delete;
lcbb << Delete;
Delete Classes( "aa", "bb" );
Show Classes();

```

### Delete Globals

**Sintassi:** Delete Globals( &lt; varname, ... &gt; )

**Descrizione:** Elimina tutti i simboli globali al momento definiti e i relativi valori.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Delete Globals();

```

### Delete Namespaces

**Sintassi:** Delete Namespaces( &lt;Force( boolean )&gt;, &lt;namespace reference, ...&gt; )

**Descrizione:** Elimina tutti gli spazi dei nomi o uno o più spazi dei nomi specifici.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );

nsaa = New Namespace(
	"aa",
	{
		x = 1
	}
);
nsbb = New Namespace(
	"bb",
	{
		y = 1
	}
);
Show Namespaces();
Delete Namespaces( nsaa, nsbb );
Show Namespaces();

```

### Delete Symbols

**Sintassi:** Delete Symbols( &lt; varname, ... &gt; )

**Descrizione:** Elimina tutti i simboli al momento definiti ed i relativi valori.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Delete Symbols();

```

### Eval

**Sintassi:** y = Eval( x )

**Descrizione:** Valuta l&apos;argomento e restituisce il risultato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Eval( Expr( 1 + 2 ) );

```

### Eval Insert

**Sintassi:** y = Eval Insert( string, &lt;startChar="^"&gt;, &lt;endChar=startChar&gt; )

**Descrizione:** Ricerca le sottostringhe delimitate dalla coppia startChar/endChar e le sostituisce con l&apos;espressione valutata all&apos;interno.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Eval Insert( "Today is ^As Date( Today())^" );

```

### Eval Insert Into

**Sintassi:** Eval Insert Into( l_string, &lt;startChar="^"&gt;, &lt;endChar=startChar&gt; )

**Descrizione:** Ricerca le sottostringhe delimitate dalla coppia startChar/endChar e le sostituisce con l&apos;espressione valutata all&apos;interno sostituendo l_string.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
ex = "Today is ^As Date( Today())^";
Eval Insert Into( ex );
ex;

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

### Exit

**Sintassi:** Quit(&lt;"No Save"&gt;); Exit(&lt;"No Save"&gt;)

**Descrizione:** Esce da JMP.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
If(
	New Window( "Exit() example",
		<<Type( "Modal" ),
		Text Box( "Shut down JMP?" ),
		H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
	)["Button"] == 1, /*OK==1*/Exit(), /*cancel==-1*/"Good choice."
);

```

### First

**Sintassi:** y = First( x1, x2, ... )

**Descrizione:** Valuta ogni argomento e restituisce il valore del primo argomento.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
First( 11, 22 );

```

### Function

**Sintassi:** y = Function( {arg1=val1, ...}, &lt;{local1=val1, ...}&gt;, expr )

**Descrizione:** Definisce una funzione con i valori predefiniti e gli argomenti specificati e con variabili locali facoltative. Gli argomenti con valori predefiniti sono facoltativi quando si chiama la funzione. Se si utilizza Return() entro lo script della funzione, viene restituita l&apos;espressione entro.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Names Default To Here( 1 );
exsqr = Function( {x}, x * x );
exsqr( 5 );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
// y is an optional argument
exmul = Function( {x, y = 3}, x * y );
a = exmul( 5 );
b = exmul( 5, 10 );
Show( a, b );

```

**Esempio 3**

```jsl

Names Default To Here( 1 );
posorneg = Function( {x},
	{},
	If(
		x > 0, Return( "positive" ),
		x == 0, Return( "zero" ),
		Return( "negative" )
	)
);
posorneg( -5.5 );

```

### Get Class Names

**Sintassi:** Get Class Names( &lt; &lt;class reference&gt;, ... &gt; )

**Descrizione:** Restituisce un elenco di nomi di tutte le classi al momento definite.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
Define Class(
	"aa",
	{_init_ = Method( {} ), x = 1, m1 = Method( {a, b}, a * b )}
);
Define Class(
	"bb",
	{_init_ = Method( {} ), y = 1, m2 = Method( {a, b}, a / b )}
);
lcaa = New Object( aa() );
lcbb = New Object( bb() );
lcl = Get Class Names();
Show( lcl );
lcaa << Delete;
lcbb << Delete;
Delete Classes( "aa", "bb" );

```

### Get Classes

**Sintassi:** Get Classes( &lt; &lt;class reference&gt;, ... &gt; )

**Descrizione:** Restituisce un elenco di riferimenti a tutte le classi al momento definite

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Define Class(
	"aa",
	{_init_ = Method( {} ), x = 1, m1 = Method( {a, b}, a * b )}
);
Define Class(
	"bb",
	{_init_ = Method( {} ), y = 1, m2 = Method( {a, b}, a / b )}
);
lcaa = New Object( aa() );
lcbb = New Object( bb() );
lcl = Get Classes();
Show( lcl );
Clear Symbols( lcl );
lcaa << Delete;
lcbb << Delete;
Delete Classes( "aa", "bb" );

```

### Get Custom Functions

**Sintassi:** Get Custom Functions(&lt;{function 1 full name, function 2 full name, ...} | function full name&gt;)

**Descrizione:** Ottiene un elenco di funzioni personalizzate

**JMP Versione aggiunta:** 14

**Esempio 1**

```jsl

Names Default To Here( 1 );
Get Custom Functions();

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
Get Custom Functions( {"custom:Add", "custom:Sub"} );

```

### Get Environment Variable

**Sintassi:** value = Get Environment Variable( string )

**Descrizione:** Restituisce dal sistema operativo il valore della variabile di ambiente specificata.



Nota: sul sistema operativo Macintosh il nome della variabile fa distinzione tra maiuscole e minuscole.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Get Environment Variable( "PATH" );

```

### Get Locale Setting

**Sintassi:** value = Get Locale Setting( settingName )

**Descrizione:** Recupera un&apos;impostazione locale come per esempio il separatore decimale

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
Get Locale Setting( "Decimal Separator" );

```

### Get Log

**Sintassi:** list = Get Log( &lt;N&gt; )

**Descrizione:** Restituisce un elenco di righe dal log. Se non è specificato alcun argomento, sono restituite tutte le righe dal log. Se l&apos;argomento numerico N è positivo, sono restituite le prime N righe dal log. Se N è un valore negativo, sono restituite le ultime N righe dal log. Se N è pari a zero, non viene restituita alcuna riga.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
all contents = Get Log();
headcontents = Get Log( 10 );
tailcontents = Get Log( -5 );

```

### Get Namespace Names

**Sintassi:** Get Namespace Names( &lt; &lt;namespace reference&gt;, ... &gt; )

**Descrizione:** Restituisce un elenco di nomi di tutti gli spazi dei nomi correntemente definiti.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
nsaa = New Namespace(
	"aa",
	{
		x = 1
	}
);
nsbb = New Namespace(
	"bb",
	{
		y = 1
	}
);
lns = Get Namespace Names();
Show( lns );
nsaa << Delete;
nsbb << Delete;

```

### Get Namespaces

**Sintassi:** Get Namespaces( &lt; &lt;namespace reference&gt;, ... &gt; )

**Descrizione:** Restituisce un elenco di riferimenti a tutti gli spazi dei nomi al momento definiti

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
nsaa = New Namespace(
	"aa",
	{
		x = 1
	}
);
nsbb = New Namespace(
	"bb",
	{
		y = 1
	}
);
lns = Get Namespaces();
Show( lns );
Clear Symbols( lns );
nsaa << Delete;
nsbb << Delete;

```

### Get Punctuation Characters

**Sintassi:** Get Punctuation Characters(&lt;Exclude Chars(chars) | Include Chars(chars)&gt;)

**Descrizione:** Restituisce una stringa contenente i caratteri di punteggiatura che sono tipicamente utilizzati per delimitare le parole, tra cui ,:;.?!\/#@&~()[]<>"*`%$+=^|{} e qualche segno di punteggiatura Unicode comune.

**JMP Versione aggiunta:** 15

**Esempio 1**

```jsl

Names Default To Here( 1 );
Get Punctuation Characters();

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
Get Punctuation Characters( Include Chars( "_" ) );

```

**Esempio 3**

```jsl

Names Default To Here( 1 );
Get Punctuation Characters( Exclude Chars( "$[]" ) );

```

**Esempio 4**

```jsl

Names Default To Here( 1 );
Collapse Whitespace(
	Substitute( "This...string..has..dots", Items( Get Punctuation Characters(), "" ), " " )
);

```

### Get Session Script

**Sintassi:** Get Session Script( win1, ... )

**Descrizione:** Restituisce lo script di sessione per le finestre specificate. Lo script di sessione è un&apos;espressione JSL che ricreerà le finestre specificate, incluse tabelle di dati, finestre di script, journal e report. I report creati tramite script JSL hanno un supporto limitato e tenteranno di ricreare solo il layout di visualizzazione.

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << RunScript( "Bivariate" );
Get Session Script( Report( biv ) );

```

### Get Whitespace Characters

**Sintassi:** Get Whitespace Characters()

**Descrizione:** Restituisce una stringa contenente tutti i caratteri spazio vuoto tipicamente utilizzati.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Get Whitespace Characters();

```

### Include

**Sintassi:** y = Include( filepath, &lt; &lt;&lt;Parse Only&gt;, &lt; &lt;&lt;New Context&gt;, &lt; &lt;&lt;Names Default to Here&gt; )

**Descrizione:** Esegue il JSL nel  file specificato. Se è specificato Parse Only, lo script viene analizzato e non eseguito. Se è specificato New Context, il JSL incluso viene eseguito nel proprio spazio dei nomi univoco. Se sia gli script dell&apos;elemento principale che quelli inclusi usano lo spazio dei nomi globale, specificare sia New Context sia Names Default to Here, per evitare conflitti nei nomi.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Include( "$SAMPLE_SCRIPTS/chaosGame.jsl" );

```

### Include File List

**Sintassi:** y = Include File List()

**Descrizione:** Restituisce un elenco di file inclusi al punto dell&apos;esecuzione.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
y = Include File List();

```

### Is Log Open

**Sintassi:** Is Log Open()

**Descrizione:** Restituisce un risultato per indicare se la finestra Log è aperta

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Names Default To Here( 1 );
If( Is Log Open(),
	Close Log()
);

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
If( !Is Log Open(),
	Open Log()
);

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

### Local

**Sintassi:** y = Local( {name=value, ...}, expression )

**Descrizione:** Risolve i nomi in variabili locali.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Local( {a = 1, b},
	b = 2;
	a + b;
);

```

### Local Here

**Sintassi:** y = Local Here( expression )

**Descrizione:** Esegue l&apos;espressione con la funzione locale Nomi predefiniti su Qui(1)

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
y = Local Here(
	a = 1;
	b = 2;
	c = a + b;
	c;
);

```

### Lock Globals

**Sintassi:** Lock Globals( name, ... )

**Descrizione:** Blocca nomi globali specificati e impedisce che possano essere modificati o cancellati dalla funzione Clear Globals.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
exalpha = 0.05;
exdelta = 0.5;
Watch( exalpha, exdelta );
Wait( 3 );
Lock Globals( exalpha );
Wait( 3 );
Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );
Try( exdelta = 0.6, Show( "invalid - exdelta is locked" ) );
Wait( 3 );
Unlock Globals( exalpha );
Wait( 3 );
Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );

```

### Lock Symbols

**Sintassi:** Lock Symbols( name, ... )

**Descrizione:** Blocca nomi globali specificati e impedisce che possano essere modificati o cancellati dalla funzione Clear Symbols.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
exalpha = 0.05;
exdelta = 0.5;
Watch( exalpha, exdelta );
Wait( 3 );
Lock Symbols( exalpha );
Wait( 3 );
Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );
Try( exdelta = 0.6, Show( "invalid - exdelta is locked" ) );
Wait( 3 );
Unlock Symbols( exalpha );
Wait( 3 );
Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );

```

### Log Capture

**Sintassi:** string = Log Capture( expr )

**Descrizione:** Valuta l&apos;argomento expr e acquisisce l&apos;output che sarebbe comparso nella finestra di log di JMP restituendolo invece in una stringa.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
"captured:" || Log Capture(
	For( i = 1, i <= 3, i++,
		Write( Char( i ) );
		Write( " " );
	)
);

```

### Map Value

**Sintassi:** Map Value(string | number, {key1, value1...|{key1...},{value1...}}, &lt;Unmatched(value)&gt;)

**Descrizione:** Valuta il valore iniziale e restituisce il risultato mappato o un&apos;impostazione predefinita.

**JMP Versione aggiunta:** 15

**Esempio 1**

```jsl

Names Default To Here( 1 );
Map Value( "celry", {"celry", "celery"} );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
Map Value( "carrot", {"celry", "celery"}, Unmatched( "not found" ) );

```

**Esempio 3**

```jsl

Names Default To Here( 1 );
Map Value( 10, {10, "celery", 11, "banana"} );

```

**Esempio 4**

```jsl

Names Default To Here( 1 );
Map Value( 10, {{1, 2, 3}, {100, 200, 300}} );

```

### Method

**Sintassi:** m = Method( { arg1 = val1, ... }, expression* )

**Descrizione:** Crea un metodo all&apos;interno di una classe

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Define Class(
	"complex",
	real = 0;
	imag = 0;
	_init_ = Method( {a, b},
		real = a;
		imag = b;
	);
	Add = Method( {y},
		New Object( complex( real + y:real, imag + y:imag ) )
	);
	Sub = Method( {y},
		New Object( complex( real - y:real, imag - y:imag ) )
	);
	Mul = Method( {y},
		New Object( complex( real * y:real - imag * y:imag, imag * y:real + real * y:imag ) )
	);
	Div = Method( {y},
		t = New Object( complex( 0, 0 ) );
		mag2 = y:Magsq();
		t:real = real * y:real + imag * y:imag;
		t:imag = imag * y:real + real * y:imag;
		t:real = t:real / mag2;
		t:imag = t:imag / mag2;
		t;
	);
	Magsq = Method( {},
		real * real + imag * imag
	);
	Mag = Method( {},
		Sqrt( real * real + imag * imag )
	);
	_to string_ = Method( {},
		Char( real ) || " + " || Char( imag ) || "i"
	);
	_show_ = _to string_;
);
cl = New Object( complex( 1, 2 ) );
cl << Delete;
Delete Classes( "complex" );

```

### Mimic

**Sintassi:** mimic obj = Mimic(Box|PlatformRef)

**Descrizione:** Creates a GUI automation object that mimics a real user. ONLY AVAILABLE IN INTERNAL JMP BUILDS.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :age ) );
outline = Report( obj )[Outline Box( 1 )];
mc = Mimic( obj );
mc << Mark( outline );
mc << Mouse Click( Offset( TopLeft( outline ), [25 15] ) );

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

### Names Default To Here

**Sintassi:** Names Default To Here( boolean )

**Descrizione:** Determina dove memorizzare i nomi non risolti, sia come ( 0 ) globale/locale o nello spazio dei nomi Qui: ( 1 ).

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
/* Variable x will be stored in the Here: namespace by default */x = 1;
Show( x );

```

### Namespace

**Sintassi:** ns = Namespace( namespace reference )

**Descrizione:** Restituisce un riferimento allo spazio dei nomi specificato dall&apos;argomento name.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Namespace(
	"complex",
	{
		make = Function( {a, b},
			Index( a, b, b - a )
		),
		add = Function( {x, y}, x + y ),
		sub = Function( {x, y}, x - y ),
		mul = Function( {x, y},
			local:z = J( 1, 2 );
			local:z[1] = x[1] * y[1] - x[2] * y[2];
			local:z[2] = x[1] * y[2] + x[2] * y[1];
			local:z;
		),
		div = Function( {x, y},
			local:z = J( 1, 2 );
			local:d = (y[1] ^ 2 + y[2] ^ 2);
			local:z[1] = (x[1] * y[1] + x[2] * y[2]) / local:d;
			local:z[2] = (x[2] * y[1] - x[1] * y[2]) / local:d;
			local:z;
		),
		write = Function( {x},
			Write( x[1], " + ", x[2], "i\!n" )
		)
	}
);
ns = Namespace( "complex" );
Show( ns );
ns << Delete;

```

### Namespace Exists

**Sintassi:** nsexists = Namespace Exists( namespace reference )

**Descrizione:** Restituisce 1 se esiste uno spazio dei nomi specificato dall&apos;argomento name, in caso contrario 0.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
ns = New Namespace(
	"complex",
	{
		make = Function( {a, b},
			Index( a, b, b - a )
		),
		add = Function( {x, y}, x + y ),
		sub = Function( {x, y}, x - y ),
		mul = Function( {x, y},
			local:z = J( 1, 2 );
			local:z[1] = x[1] * y[1] - x[2] * y[2];
			local:z[2] = x[1] * y[2] + x[2] * y[1];
			local:z;
		),
		div = Function( {x, y},
			local:z = J( 1, 2 );
			local:d = (y[1] ^ 2 + y[2] ^ 2);
			local:z[1] = (x[1] * y[1] + x[2] * y[2]) / local:d;
			local:z[2] = (x[2] * y[1] - x[1] * y[2]) / local:d;
			local:z;
		),
		write = Function( {x},
			Write( x[1], " + ", x[2], "i\!n" )
		)
	}
);
nsexists = Namespace Exists( ns );
Show( nsexists );
ns << Delete;

```

### New Custom Function

**Sintassi:** f=New Custom Function(namespace, name, function definition)

**Descrizione:** Crea un nuovo oggetto funzione personalizzato. Una funzione personalizzata verrà colorata nell&apos;editor degli script e visualizzata nell&apos;indice di scripting. Le informazioni obbligatorie per una funzione utente personalizzata sono uno spazio dei nomi (per evitare conflitti con funzioni globali), un nome e una definizione della funzione. Altre informazioni di aiuto possono essere aggiunte usando messaggi. Usare il comando Aggiungi funzioni personalizzate per pubblicare la nuova funzione in ambiente JMP.

**JMP Versione aggiunta:** 14

**Esempio 1**

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
/*Create a custom function that can be used as a format*/
Add Custom Functions(
	{New Custom Function(
		"custom",
		"User Defined Format Function",
		Function( {inches},
			Char( inches ) || " in"
		),
		<<Custom Format Category( "Custom" ), 

	)}
);

```

**Esempio 3**

```jsl

Names Default To Here( 1 );
/*Create a custom function that can be used as a transform*/
Add Custom Functions(
	{New Custom Function(
		"custom",
		"User Defined Transform Function",
		Function( {inches},
			inches * 2.54
		),
		<<Transform Category( "Custom" ), 

	)}
);

```

### New Namespace

**Sintassi:** ns = New Namespace( &lt;name&gt;, &lt;list of expressions&gt; )

**Descrizione:** Crea un nuovo spazio dei nomi con un nome specificato dall&apos;argomento name o con un nome anonimo se name non è specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
ns = New Namespace(
	"complex",
	{
		make = Function( {a, b},
			Index( a, b, b - a )
		),
		add = Function( {x, y}, x + y ),
		sub = Function( {x, y}, x - y ),
		mul = Function( {x, y},
			local:z = J( 1, 2 );
			local:z[1] = x[1] * y[1] - x[2] * y[2];
			local:z[2] = x[1] * y[2] + x[2] * y[1];
			local:z;
		),
		div = Function( {x, y},
			local:z = J( 1, 2 );
			local:d = (y[1] ^ 2 + y[2] ^ 2);
			local:z[1] = (x[1] * y[1] + x[2] * y[2]) / local:d;
			local:z[2] = (x[2] * y[1] - x[1] * y[2]) / local:d;
			local:z;
		),
		write = Function( {x},
			Write( x[1], " + ", x[2], "i\!n" )
		)
	}
);
Show( ns );
ns << Delete;

```

### New Object

**Sintassi:** New Object( "class name" | class name | class reference( constructor arguments* ) )

**Descrizione:** Crea un oggetto istanza di una classe.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
Define Class(
	"complex",
	real = 0;
	imag = 0;
	_init_ = Method( {a, b},
		real = a;
		imag = b;
	);
	Add = Method( {y},
		New Object( complex( real + y:real, imag + y:imag ) )
	);
	Sub = Method( {y},
		New Object( complex( real - y:real, imag - y:imag ) )
	);
	Mul = Method( {y},
		New Object( complex( real * y:real - imag * y:imag, imag * y:real + real * y:imag ) )
	);
	Div = Method( {y},
		t = New Object( complex( 0, 0 ) );
		mag2 = y:Magsq();
		t:real = real * y:real + imag * y:imag;
		t:imag = imag * y:real + real * y:imag;
		t:real = t:real / mag2;
		t:imag = t:imag / mag2;
		t;
	);
	Magsq = Method( {},
		real * real + imag * imag
	);
	Mag = Method( {},
		Sqrt( real * real + imag * imag )
	);
	_to string_ = Method( {},
		Char( real ) || " + " || Char( imag ) || "i"
	);
	_show_ = _to string_;
);
cl = New Object( complex( 1, 2 ) );
cl << Delete;
Delete Classes( "complex" );

```

### Open Log

**Sintassi:** Open Log( &lt;bring window to top&gt; )

**Descrizione:** Apre la finestra di log

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Names Default To Here( 1 );
Open Log();
Show( Is Log Open() );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
/* Bring Log Windows to the Top */
Open Log( 1 );
Show( Is Log Open() );

```

### Parameter

**Sintassi:** y = Parameter( {name=value, ...}, model expression )

**Descrizione:** Definisce i parametri della formula per i modelli della piattaforma non lineare.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Parameter( {a = 1}, a + 1 );

```

### Parse

**Sintassi:** y = Parse( s )

**Descrizione:** Analizza la stringa e restituisce l&apos;espressione JSL risultante.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Parse( "x+y" );

```

### Print

**Sintassi:** Print( x, ... )

**Descrizione:** Visualizza i valori degli argomenti nel log, uno per riga.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Print( 355 / 113, Pi() );

```

### Quit

**Sintassi:** Quit(&lt;"No Save"&gt;); Exit(&lt;"No Save"&gt;)

**Descrizione:** Esce da JMP.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
If(
	New Window( "Quit() example",
		<<Type( "Modal" ),
		Text Box( "Shut down JMP?" ),
		H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
	)["Button"] == 1, /*OK==1*/Quit(), /*cancel==-1*/"Good choice."
);

```

### Recode

**Sintassi:** recode(string|number|list, {&lt;transform&gt;, ...}, &lt;Multiple Response (Separator(sepChar))&gt;, &lt;By Word(Delimiters(&lt;chars&gt;)&gt;)

**Descrizione:** Applica le trasformazioni elencate ai valori di input e restituisce il risultato. Le opzioni Risposta multipla e Per parola dividono i dati dei caratteri forniti in valori di input più piccoli. Una volta determinati i valori di input, le trasformazioni vengono applicate a tali valori separatamente.

Speciali variabili JSL vengono popolate durante l&apos;esecuzione del comando:

	_rcNow è il valore corrente dell&apos;input dopo le trasformazioni precedenti.

	_rcOrig è il valore originale dell&apos;input.

**JMP Versione aggiunta:** 15

**Esempio 1**

```jsl

Names Default To Here( 1 );
Recode(
	"27513-0000",
	{Regex( _rcNow, "(\d\d\d\d\d)-\d+", "\1", GLOBALREPLACE ), Num( _rcNow )}
);

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
Recode(
	"A B C",
	{Map Value( _rcNow, {"A", "Apple", "B", "Banana"}, Unmatched( "Unknown fruit" ) )},
	By Word
);

```

### Recurse

**Sintassi:** y = Recurse( x1, ... )

**Descrizione:** Chiama la funzione di contenimento.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
ex rev = Function( {s},
	If( Length( s ) <= 1,
		s,
		Recurse( Substr( s, 2 ) ) || Left( s, 1 )
	)
);
ex rev( "abcd" );

```

### Remove Custom Functions

**Sintassi:** Remove Custom Functions({function 1 full name, function 2 full name, ...} | function full name)

**Descrizione:** Rimuove un elenco di funzioni personalizzate dall’ambiente.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
Remove Custom Functions( {"custom:Add", "custom:Sub"} );

```

### Save Log

**Sintassi:** f = Save Log( &lt;path&gt; )

**Descrizione:** Scrive il contenuto del log nel percorso del file specificato. Se l&apos;operazione è effettuata correttamente, questa funzione restituisce il nome del file creato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Save Log( "$TEMP/log.txt" );
exlogText = Load Text File( "$TEMP/log.txt" );
Substr( exlogText, 1, 30 );

```

### Send

**Sintassi:** r = obj &lt;&lt; msg( args ); r = obj &lt;&lt; msg; r = Send( obj, msg )

**Descrizione:** Invia un messaggio (sottoforma di espressione) a un oggetto.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Bivariate( Y( :weight ), X( :height ) ) << Fit Line;

```

### Set Environment Variable

**Sintassi:** value = Set Environment Variable( string, &lt; string&gt; )

**Descrizione:** Imposta il valore della variabile di ambiente specificata nel sistema operativo. Se il secondo argomento è mancante o è una stringa vuota la variabile di ambiente viene eliminata.



NOTA: sul sistema operativo Macintosh, il nome della variabile fa distinzione tra maiuscole e minuscole.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Set Environment Variable( "PATH", "some path to a directory" );

```

### Show

**Sintassi:** Show( x, ... )

**Descrizione:** Visualizza il nome e il valore degli argomenti nel log, uno per riga.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Show( 355 / 113, Pi() );

```

### Show Classes

**Sintassi:** Show Classes( &lt; &lt;class name | class reference&gt;, ... &gt; )

**Descrizione:** Mostra il contenuto di tutte le classi definite dall&apos;utente.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Define Class(
	"complex",
	real = 0;
	imag = 0;
	_init_ = Method( {a, b},
		real = a;
		imag = b;
	);
	Add = Method( {y},
		New Object( complex( real + y:real, imag + y:imag ) )
	);
	Sub = Method( {y},
		New Object( complex( real - y:real, imag - y:imag ) )
	);
	Mul = Method( {y},
		New Object( complex( real * y:real - imag * y:imag, imag * y:real + real * y:imag ) )
	);
	Div = Method( {y},
		t = New Object( complex( 0, 0 ) );
		mag2 = y:Magsq();
		t:real = real * y:real + imag * y:imag;
		t:imag = imag * y:real + real * y:imag;
		t:real = t:real / mag2;
		t:imag = t:imag / mag2;
		t;
	);
	Magsq = Method( {},
		real * real + imag * imag
	);
	Mag = Method( {},
		Sqrt( real * real + imag * imag )
	);
	_to string_ = Method( {},
		Char( real ) || " + " || Char( imag ) || "i"
	);
	_show_ = _to string_;
);
Show Classes();

```

### Show Globals

**Sintassi:** Show Globals()

**Descrizione:** Elenca tutti i simboli globali al momento definiti e i relativi valori.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Show Globals();

```

### Show Namespaces

**Sintassi:** Show Namespaces( &lt; &lt;namespace reference&gt;, ... &gt; )

**Descrizione:** Mostra il contenuto di tutti gli spazi dei nomi definiti dall&apos;utente, sia con nome sia anonimi.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Namespace(
	"complex",
	{
		make = Function( {a, b},
			Index( a, b, b - a )
		),
		add = Function( {x, y}, x + y ),
		sub = Function( {x, y}, x - y ),
		mul = Function( {x, y},
			local:z = J( 1, 2 );
			local:z[1] = x[1] * y[1] - x[2] * y[2];
			local:z[2] = x[1] * y[2] + x[2] * y[1];
			local:z;
		),
		div = Function( {x, y},
			local:z = J( 1, 2 );
			local:d = (y[1] ^ 2 + y[2] ^ 2);
			local:z[1] = (x[1] * y[1] + x[2] * y[2]) / local:d;
			local:z[2] = (x[2] * y[1] - x[1] * y[2]) / local:d;
			local:z;
		),
		write = Function( {x},
			Write( x[1], " + ", x[2], "i\!n" )
		)
	}
);
Show Namespaces( "complex" );
Delete Namespaces( "complex" );

```

### Show Symbols

**Sintassi:** Show Symbols()

**Descrizione:** Elenca tutti i simboli al momento definiti ed i relativi valori.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Show Symbols();

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

### Throw

**Sintassi:** Throw(&lt;message&gt;, &lt;Boolean&gt;)

**Descrizione:** Devia l&apos;esecuzione verso il Try(). In caso contrario, l&apos;esecuzione dello script è interrotta. Se message inizia con un punto esclamativo, l&apos;errore sarà irreversibile e non potrà essere catturato da Try(). Il secondo parametro è un booleano opzionale per includere un traceback (un tracciato dell’esecuzione).

**JMP Versione aggiunta:** prima della versione 14

**Analisi**

```jsl

Names Default To Here( 1 );
Throw( "A line number is included in this error", 1 );

```

**Throw irreversibile**

```jsl

Names Default To Here( 1 );

Try( Throw( "!This is a fatal error" ), Print( "CATCH message not reached" ) );
Print( "AFTER TRY message not reached" );

```

**Try-Catch**

```jsl

Names Default To Here( 1 );
Try( If( Random Uniform() < 0.5, 1, Throw() ), "thrown" );

```

### Try

**Sintassi:** y = Try( expr, &lt;catchExpr&gt; )

**Descrizione:** exprValuta e restituisce l&apos;argomento, a meno che la valutazione non causi un&apos;eccezione Throw() o interna. In tal caso, viene restituita la valutazione di catchExpr. Se si utilizza exception_msg come catchExpr, viene restituito un elenco che contiene altre informazioni sull&apos;errore.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Names Default To Here( 1 );
Try( Sqrt( "s" ), "invalid" );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
Try( Sqrt( "s" ), exception_msg );

```

### Type

**Sintassi:** y = Type( x )

**Descrizione:** Restituisce una stringa assegnando un nome al tipo di valore dell&apos;argomento x.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Type( [1 2 3] );

```

### Unlock Globals

**Sintassi:** Unlock Globals( name, ... )

**Descrizione:** Sblocca nomi globali specificati e consente che possano essere modificati o cancellati dalla funzione Clear Globals.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
exalpha = 0.05;
exdelta = 0.5;
Watch( exalpha, exdelta );
Wait( 3 );
Lock Globals( exalpha );
Wait( 3 );
Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );
Try( exdelta = 0.6, Show( "invalid - exdelta is locked" ) );
Wait( 3 );
Unlock Globals( exalpha );
Wait( 3 );
Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );

```

### Unlock Symbols

**Sintassi:** Unlock Symbols( name, ... )

**Descrizione:** Sblocca nomi globali specificati e consente che possano essere modificati o cancellati dalla funzione Clear Symbols.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
exalpha = 0.05;
exdelta = 0.5;
Watch( exalpha, exdelta );
Wait( 3 );
Lock Symbols( exalpha );
Wait( 3 );
Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );
Try( exdelta = 0.6, Show( "invalid - exdelta is locked" ) );
Wait( 3 );
Unlock Symbols( exalpha );
Wait( 3 );
Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );

```

### Wait

**Sintassi:** Wait( &lt;x&gt; )

**Descrizione:** Attende x secondi prima di procedere con l&apos;esecuzione. Il valore predefinito per x è 3 secondi. Se x è 0 o maggiore, JMP completerà qualsiasi evento del sistema operativo (ad esempio l&apos;aggiornamento dello schermo) così come qualsiasi richiamo in sospeso (ad esempio la valutazione di formule) in aggiunta all&apos;attesa. Se x è minore di 0, attenderà che solo l&apos;aggiornamento dello schermo e gli eventi del sistema operativo siano confermati come completati prima di procedere.

**JMP Versione aggiunta:** prima della versione 14

**Eventi SO**

```jsl

Names Default To Here( 1 );
Wait( -1 ); // Wait for OS events

```

**Richiami**

```jsl

Names Default To Here( 1 );
Wait( 0 ); // Wait for OS events and callbacks

```

**Semplici**

```jsl

Names Default To Here( 1 );
Wait( 1.5 );

```

### Watch

**Sintassi:** w = Watch( all|name1, ... )

**Descrizione:** Crea una finestra che mostra le variabili da Global, Here, spazi dei nomi Local e i rispettivi valori.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
x = 1;
y = 2;
z = "abc";
w = Watch( all );
Wait( 5 );
x = x * 5;
y = y / 25;
z = z || "def";
Wait( 5 );
w << close Window();

```

### Where

**Sintassi:** Where( &lt;dt&gt;, clause )

**Descrizione:** Restituisce indici (di solito numeri di riga) corrispondenti alla clausola Where specificata. dt facoltativo cambia Current Data Table durante la valutazione. Queste clausole sono spesso scritte da JMP utilizzando il filtro sui dati. Questo spesso avviene più velocemente rispetto a Loc, <<Get Rows Where o <<Select Where. Il comportamento è indefinito se la clausola modifica le sequenze o qualsiasi simbolo durante la valutazione.

**JMP Versione aggiunta:** 18

**Altro**

```jsl

Names Default To Here( 1 );
xs = [10 20 30 . 50];
ys = [0 0 0 1 1];
Where( xs > 20 & ys );

xs = {{10}, {20}, {15}};
Where( xs[1] < 18 );

```

**Colonne**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Get Rows Where( :sex == "M" );
Where( :sex == "M" );
Where( dt, :sex == "M" );

```

**Funzioni di colonna**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Select << Select Rows( Where( Col Max( :height, :age ) >= 68 ) );
dt << Clear Select << Select Rows( Where( :height == Col Max( :height, :age ) ) );

```

**Matrice/Elenco**

```jsl

Names Default To Here( 1 );
xs = [10 20 30 . 50];
xs[Where( xs >= 20 )];
xs[Where( !Is Missing( xs ) )];
ys = {10, 20, "30", ., 50};
ys[Where( ys >= 20 )];

```

**Stati delle righe**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [2 4 6] ) << Exclude( 1 );
Where( Excluded() );
Where( !Excluded() );

```

### Wild

**Sintassi:** Wild()

**Descrizione:** Restituisce la posizione di un carattere jolly che può corrispondere a qualsiasi espressione (utilizzato solo nei pattern di espressioni).

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
extestexpr = Expr(
	For( i = 1, i <= 14, i++, Print( "YES!!!" ) );
	Show( "END" );
);
Extract Expr( extestexpr, For( i = 1, Wild(), i++, Print( "YES!!!" ) ) );

```

### Wild List

**Sintassi:** Wild List()

**Descrizione:** Restituisce una serie di argomenti jolly che possono corrispondere a qualsiasi cosa (utilizzati solo nei pattern di espressioni).

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
extestexpr = Expr(
	For( i = 1, i <= 14, i++, Print( "YES!!!" ) );
	Show( "END" );
);
Extract Expr( extestexpr, For( i = 1, Wild List(), Print( "YES!!!" ) ) );

```

### Write

**Sintassi:** Write( x, ... )

**Descrizione:** Visualizza i valori specificati nel log senza aggiungere virgolette, spazi o interruzioni di linea (come in Print()).

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Write( "fraction = ", 355 / 113, "\!N", "pi       = ", Pi() );

```

