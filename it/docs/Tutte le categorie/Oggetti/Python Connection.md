# Python Connection



## Messaggi degli elementi

### Create JPIP CMD

**Sintassi:** obj &lt;&lt; Create JPIP CMD()

**Descrizione:** Avvia la creazione di uno script wrapper di esecuzione della riga di comando jpip per il comando pip di Python. Una finestra di dialogo richiederà dove salvare lo script generato. Questo script fornisce tutte le capability pip mentre imposta correttamente le variabili di ambiente necessarie per l&apos;ambiente Python isolato di JMP.

**JMP Versione aggiunta:** 18

**Esempio 1**

```jsl

Names Default To Here( 1 );
// install numpy and pandas packages
conn = Python Connect();
conn << Create JPIP CMD();

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
Python Create JPIP CMD();

```

### Disconnect

**Sintassi:** obj &lt;&lt; Disconnect

**Descrizione:** Nota: questa funzione è deprecata a partire da JMP 18 e non ha alcun effetto.

**JMP Versione aggiunta:** 14

### Execute

**Sintassi:** list = obj &lt;&lt; Execute( { list of Inputs }, { list of Outputs }, statements &lt; , echo( 1 | 0 ) &gt; )

**Descrizione:** Invia un elenco di input, esegue le istruzioni e restituisce un elenco di output. Il parametro opzionale echo() è di default Vero. Il parametro echo controlla l&apos;eco dell&apos;origine Python nel log. Il valore Vero logico (1) abilita l&apos;eco dell&apos;origine, mentre 0 sopprime l&apos;eco nel log.

**JMP Versione aggiunta:** 14

**Esempio 1**

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
// NOTE: a,d,x,z must be declared before Execute()
// as this is the location the results will be written.
a = "abcdef";
d = 3.141;
x = 0;
z = 0;
v = [1 0 0, 0 1 0, 0 0 1];
// pi, e, phi, c, Plank's, Faraday, 345 triangle
m = [3.141 2.718 1.618,
2.997 6.626 9.648,
3 4 5];
ml = PythonConnection << Execute(
	{v, m, a, d},
	{x, z, a, d},
	"\[
import numpy as np
a = np.multiply(v, m) # matrix product
d = np.divide(v, m) # matrix division
z = np.multiply(m, np.linalg.inv(v)) # m * inv(v) called Left division
x = np.multiply(np.linalg.inv(m), v) # inv(m) * v called right division
	]\"
);
Show( v, m, ml, x, z, a, d );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
x1 = 0;
x2 = 0;
y1 = 0;
y2 = 0;
z1 = 0;
z2 = 0;
v = [1 0 0, 0 1 0, 0 0 1];
// pi, e, phi, c, Plank's, Faraday, 345 triangle
m = [3.141 2.718 1.618,
2.997 6.626 9.648,
3 4 5];
ml = Python Execute(
	{v, m},
	{x1, x2, y1, y2, z1, z2},
	"\[
import numpy as np
x1 = np.multiply(v, m) # matrix product
print('x1=', x1)
x2 = np.divide(v, m) # matrix division
print('x2=', x2)
y1 = np.dot(v, m) # dot product of v and m
print('y1=', y1)
y2 = np.dot(m, v) # dot product of m and v
print('y2=', y2)
z1 = np.inner(v, m) # inner product of v and m
print('z1=', z1)
z2 = np.inner(m, v) # innder product of m and v
print('z2=', z2)
		]\"
);
Show( v, m, ml, x1, x2, y1, y2, z1, z2 );

```

### Get

**Sintassi:** y = obj &lt;&lt; Get( name )

**Descrizione:** Restituisce dati da Python, dove l&apos;argomento name può rappresentare uno qualsiasi dei seguenti tipi di dati Python (numerico | stringa | matrice | elenco |diz | tabella di dati | colonna della tabella di dati | frame di dati | data e ora | numpy.datetime64 ).

**JMP Versione aggiunta:** 14

**Datetime**

```jsl

Names Default To Here( 1 );

PythonConnection = Python Connect();
date1 = As Date( Today() );
PythonConnection << Set( date1 );
date2 = PythonConnection << Get( date1 );
Show( date1, date2 );

```

**Esempio 1**

```jsl

Names Default To Here( 1 );

PythonConnection = Python Connect();
x1 = [1, 2, 3];
PythonConnection << Set( x1 );
x2 = PythonConnection << Get( x1 );
Show( x1, x2 );
dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
PythonConnection << Set( dt1 );
dt2 = PythonConnection << Get( dt1 );
dt2 << New Data View;
Close( dt1 );

```

**numpy.datetime64**

```jsl

Names Default To Here( 1 );

PythonConnection = Python Connect();
PythonConnection << Install Packages( "numpy" );
PythonConnection << Submit( "import numpy as np" );
PythonConnection << Submit( "datetime64 = np.datetime64('1989-10-05')" );
numpy_datetime = PythonConnection << Get( datetime64 );
Show( numpy_datetime );

```

### Get Version

**Sintassi:** version = obj &lt;&lt; Get Version

**Descrizione:** Restituisce il numero di versione di Python utilizzato nella connessione corrente.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
version = PythonConnection << Get Version;
Show( version );

```

### Install Packages

**Sintassi:** obj &lt;&lt; Install Packages( packages )

**Descrizione:** Questo esegue il wrapping dell&apos;installazione dei pacchetti Python nella directory dei pacchetti del sito di JMP. Per operazioni che vanno oltre la semplice installazione dei pacchetti, vedere Python Create JPIP CMD() per creare uno script wrapper del comando pip da una riga di comando in una directory scelta con Directory Pick(). In alternativa, per eseguire l&apos;installazione da una finestra di script Python di JMP, consultare jmputils.jpip nella categoria Python dell&apos;indice di scripting.

**JMP Versione aggiunta:** 18

**Esempio 1**

```jsl

Names Default To Here( 1 );
// install numpy and pandas packages
conn = Python Connect();
conn << Install Packages( "numpy pandas" );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
// install numpy and pandas packages
Python Install Packages( "numpy pandas" );

```

**Esempio 3**

```jsl

Names Default To Here( 1 );
// install numpy and pandas packages
Python Install Packages( {"numpy", "pandas"} );

```

### Is Connected

**Sintassi:** x = obj &lt;&lt; Is Connected

**Descrizione:** Nota: questa funzione è obsoleta a partire da JMP 18 e restituisce sempre 1.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
x = PythonConnection << Is Connected;
Show( x );

```

### JMP Name To Python Name

**Sintassi:** Python Name = PythonConnection &lt;&lt; JMP Name To Python Name( JMP name )

**Descrizione:** Associa il nome di una variabile JMP a un nome di variabile Python utilizzando le regole di assegnazione dei nomi alle variabili di Python.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
Python Name = PythonConnection << JMP Name To Python Name( a b c );
Show( Python Name );

```

### Reset

**Sintassi:** PythonConnection &lt;&lt; Reset

**Descrizione:** Reset the shared Python environment.

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
pi = 3.1415927;
PythonConnection << Send( pi );
PythonConnection << Submit( "print(pi)" );
PythonConnection << Reset();
// will show error, pi not defined
PythonConnection << Submit( "print(pi)" );

```

### Send

**Sintassi:** y = obj &lt;&lt; Send( name, &lt;Python Name( name )&gt; )

**Descrizione:** Invia dati a Python, dove l&apos;argomento name può rappresentare uno qualsiasi dei seguenti tipi di dati JMP ( numerico | stringa | matrice | elenco | tabella di dati | data ).

**JMP Versione aggiunta:** 14

**Date**

```jsl

Names Default To Here( 1 );

PythonConnection = Python Connect();
date = As Date( Today() );
PythonConnection << Send( date );
PythonConnection << Submit( "print(date)" );

```

**Esempio 1**

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
x = [1, 2, 3];
PythonConnection << Send( x );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
PythonConnection << Send( dt );
PythonConnection << Submit( "print(x)" );
PythonConnection << Submit( "print(dt)" );

```

### Send File

**Sintassi:** y = obj &lt;&lt; Send File( filename, &lt;Python Name( name )&gt; )

**Descrizione:** Invia a Python un file di dati, in cui l&apos;argomento filename è una stringa che specifica il percorso del file da inviare a Python.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
PythonConnection << Send File( "$SAMPLE_DATA/Big Class.jmp" );
dtname = "$SAMPLE_DATA/Baseball.jmp";
PythonConnection << Send File( dtname );
PythonConnection << Submit( "print(Big_Class)" );
PythonConnection << Submit( "print(Baseball)" );

```

### Set

**Sintassi:** y = obj &lt;&lt; Set( name, &lt;Python Name( name )&gt; )

**Descrizione:** Invia dati a Python, dove l&apos;argomento name può rappresentare uno qualsiasi dei seguenti tipi di dati JMP ( numerico | stringa | matrice | elenco | tabella di dati | data ).

**JMP Versione aggiunta:** 14

**Date**

```jsl

Names Default To Here( 1 );

PythonConnection = Python Connect();
date = As Date( Today() );
PythonConnection << Set( date );
PythonConnection << Submit( "print(date)" );

```

**Esempio 1**

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
x = [1, 2, 3];
PythonConnection << Set( x );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
PythonConnection << Set( dt );
PythonConnection << Submit( "print(x)" );
PythonConnection << Submit( "print(dt)" );

```

### Submit

**Sintassi:** obj &lt;&lt; Submit( statements &lt; , echo( 1 | 0 ) &gt; )

**Descrizione:** Invia istruzioni a Python. Le istruzioni possono essere sotto forma di valore stringa o elenco di valori stringa. Il parametro opzionale echo() è pari a Vero di default. Il parametro echo controlla l&apos;eco dell&apos;origine Python nel log. Il valore Vero logico (1) abilita l&apos;eco dell&apos;origine, mentre 0 sopprime l&apos;eco nel log.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
PythonConnection << Submit(
	"\[
str = 'The quick brown fox jumps over the lazy dog';
a = 200;
]\"
);
getStr = PythonConnection << Get( str );
getNum = PythonConnection << Get( a );
Show( getStr, getNum );

```

### Submit File

**Sintassi:** obj &lt;&lt; Submit File( path )

**Descrizione:** Invia istruzioni a Python mediante un file specificato dall&apos;argomento path.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
PythonConnection << Submit File( "some_Python_source.py" );

```

