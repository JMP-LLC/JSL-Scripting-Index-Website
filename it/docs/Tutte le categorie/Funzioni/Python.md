# Python



### Python Connect

**Sintassi:** PythonConnection = Python Connect ()

**Descrizione:** Restituisce un oggetto che supporta script della connessione Python.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
version = PythonConnection << Get Version;
Show( version );

```

### Python Create JPIP CMD

**Sintassi:** Python Create JPIP CMD()

**Descrizione:** Attiva la creazione di uno script wrapper di esecuzione della riga di comando jpipper il comando pip di Python. Una finestra di dialogo richiederà il percorso della directory in cui salvare lo script generato. Questo script fornisce tutte le capability pip e stabilisce correttamente le variabili di ambiente necessarie per l&apos;ambiente Python isolato di JMP.

**JMP Versione aggiunta:** 18

**Esempio 1**

```jsl

Names Default To Here( 1 );
Python Create JPIP CMD();

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
// install numpy and pandas packages
conn = Python Connect();
conn << Create JPIP CMD();

```

### Python Execute

**Sintassi:** Python Execute( { list of Inputs }, { list of Outputs }, statements &lt; , echo( 1 | 0 ) &gt; )

**Descrizione:** Invia un elenco di input, esegue le istruzioni e restituisce un elenco di output. Il parametro opzionale echo() è di default Vero. Il parametro echo controlla l&apos;eco del sorgente Python nel log. Il valore Vero logico (1) abilita l&apos;eco del sorgente, mentre 0 sopprime l&apos;eco nel log.

**JMP Versione aggiunta:** 14

**Esempio 1**

```jsl

Names Default To Here( 1 );

a = "abcdef";
d = 3.141;
x = 0;
z = 0;
v = [1 0 0, 0 1 0, 0 0 1];
// pi, e, phi, c, Plank's, Faraday, 345 triangle
m = [3.141 2.718 1.618,
2.997 6.626 9.648,
3 4 5];
ml = Python Execute(
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

x1 = 1;
x2 = 2;
y1 = 1;
y2 = 2;
z1 = 1;
z2 = 2;
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

### Python Get

**Sintassi:** y = Python Get( name )

**Descrizione:** Restituisce dati da Python, dove l&apos;argomento name può rappresentare uno qualsiasi dei seguenti tipi di dati Python (numerico | stringa | matrice | elenco |diz | tabella di dati | colonna della tabella di dati | frame di dati | data e ora | numpy.datetime64 ).

**JMP Versione aggiunta:** 14

**Datetime**

```jsl

Names Default To Here( 1 );

date1 = As Date( Today() );
Python Send( date1 );
date2 = Python Get( date1 );
Show( date1, date2 );

```

**Esempio 1**

```jsl

Names Default To Here( 1 );

x1 = {1, 2, 3};
Python Send( x1 );
x2 = Python Get( x1 );
Show( x1, x2 );

```

**numpy.datetime64**

```jsl

Names Default To Here( 1 );

Python Install Packages( "numpy" );
Python Submit( "import numpy as np" );
Python Submit( "datetime64 = np.datetime64('1989-10-05')" );
numpy_datetime = Python Get( datetime64 );
Show( numpy_datetime );

```

### Python Get Version

**Sintassi:** version = Python Get Version()

**Descrizione:** Restituisce il numero di versione di Python utilizzato con le interfacce JMP Python.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
version = Python Get Version();
Show( version );

```

### Python Init

**Sintassi:** PythonConnection = Python Init( )

**Descrizione:** Nota: questa funzione è obsoleta a partire da JMP 18 ed è equivalente a Python Connect().

**JMP Versione aggiunta:** 14

**Esempio 1**

```jsl

Names Default To Here( 1 );

Python Init();
Python Submit( "\[
str = 'The quick brown fox jumps over the lazy dog';
]\" );
getStr = Python Get( str );
Show( getStr );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );

PythonConnection = Python Init();
PythonConnection << Submit( "\[
str = 'The quick brown fox jumps over the lazy dog';
]\" );
getStr = Python Get( str );
Show( getStr );

```

### Python Install Packages

**Sintassi:** Python Install Packages( packages )

**Descrizione:** Questo esegue il wrapping dell&apos;installazione dei pacchetti Python nella directory dei pacchetti del sito di JMP. Per operazioni che vanno oltre la semplice installazione dei pacchetti, vedere Python Create JPIP CMD() per creare uno script wrapper del comando pip da una riga di comando in una directory scelta con Directory Pick(). In alternativa, per eseguire l&apos;installazione da una finestra di script Python di JMP, consultare jmputils.jpip nella categoria Python dell&apos;indice di scripting.

**JMP Versione aggiunta:** 18

**Esempio 1**

```jsl

Names Default To Here( 1 );
// install numpy and pandas packages
Python Install Packages( "numpy pandas" );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
// install numpy and pandas packages
Python Install Packages( {"numpy", "pandas"} );

```

**Esempio 3**

```jsl

Names Default To Here( 1 );
// install numpy and pandas packages
conn = Python Connect();
conn << Install Packages( "numpy pandas" );

```

### Python Is Connected

**Sintassi:** connected = Python Is Connected()

**Descrizione:** Nota: questa funzione è obsoleta a partire da JMP 18 e restituisce sempre 1.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
x = Python Is Connected();
Show( x );

```

### Python JMP Name to Python Name

**Sintassi:** Python name = Python JMP Name To Python Name( JMP name )

**Descrizione:** Associa il nome di una variabile JMP a un nome di variabile Python utilizzando le regole di assegnazione dei nomi alle variabili di Python.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
Python name = Python JMP Name to Python Name( a b c );
Show( Python name );

```

### Python Reset

**Sintassi:** Python Reset()

**Descrizione:** Resets the shared Python environment, primarily clearing all references to objects. This does not change the import cache of imported modules. This is a limitation of the Python environment itself.  Modules that load shared libraries cannot be unloaded by the running process. To reload pure Python code, see the Python.org documentation on importlib reload().

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );
pi = 3.1415927;
Python Send( pi );
Python Submit( "print(pi)" );
Python Reset();
// will show error, pi not defined
Python Submit( "print(pi)" );

```

### Python Send

**Sintassi:** Python Send( name, &lt;Python Name( name ) | "as_name" &gt; )

**Descrizione:** Sends data to Python, where the name argument can represent any of the following JMP data types ( numeric | string | matrix | list | data table | data table column | date ).

**JMP Versione aggiunta:** 14

**Colonna**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Python Send( dt:weight );
Python Submit( "print(weight)" );

```

**Data**

```jsl

Names Default To Here( 1 );

date = As Date( Today() );
Python Send( date );
Python Submit( "print(date)" );

```

**Tabella di dati**

```jsl

Names Default To Here( 1 );

x = {1, 2, 3};
Python Send( x );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Python Send( dt );
Python Submit( "print(x)" );
Python Submit( "print(dt)" );

```

### Python Send File

**Sintassi:** Python Send File( filename, &lt;Python Name( name )&gt; )

**Descrizione:** Invia a Python un file di dati, in cui l&apos;argomento filename è una stringa che specifica il percorso del file da inviare a Python.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );

Python Send File( "$SAMPLE_DATA/Big Class.jmp" );
Python Send File( "$SAMPLE_DATA/Baseball.jmp" );
Python Submit( "print(Big_Class)" );
Python Submit( "print(Baseball)" );

```

### Python Submit

**Sintassi:** Python Submit( statements &lt; , echo( 1 | 0 ) &gt; )

**Descrizione:** Invia istruzioni a Python. Le istruzioni possono essere sotto forma di valore stringa o elenco di valori stringa. Il parametro opzionale echo() è pari a 1 di default. Il parametro echo controlla l&apos;eco del sorgente Python nel log. Il valore Vero logico (1) abilita l&apos;eco del sorgente, mentre 0 sopprime l&apos;eco nel log.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
Python Submit( "\[
str = 'The quick brown fox jumps over the lazy dog'
a = 200]\" );
getStr = Python Get( str );
getNum = Python Get( a );
Show( getStr, getNum );

```

### Python Submit File

**Sintassi:** Python Submit File( path )

**Descrizione:** Invia istruzioni a Python mediante un file specificato dall&apos;argomento path.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
Python Submit File( "some_Python_source.py" );

```

### Python Term

**Sintassi:** Python Term()

**Descrizione:** Nota: questa funzione è deprecata a partire da JMP 18 e non ha alcun effetto.

**JMP Versione aggiunta:** 14

