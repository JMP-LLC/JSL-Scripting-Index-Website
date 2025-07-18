# Python Connection



## Elementmeldungen

### Create JPIP CMD

**Syntax:** obj &lt;&lt; Create JPIP CMD()

**Beschreibung:** Löst die Erstellung eines jpip-Befehlszeilen-Wrapper-Skripts für den Pip-Befehl von Python aus. Ein Verzeichnisauswahldialog fragt, wo das generierte Skript gespeichert werden soll. Dieses Skript stellt dann alle Funktionen von pip zur Verfügung und richtet gleichzeitig die erforderlichen Umgebungsvariablen für die isolierte Python-Umgebung von JMP korrekt ein.

**JMP Version hinzugefügt:** 18

#### Beispiel 1

```jsl

// install numpy and pandas packages
conn = Python Connect();
conn << Create JPIP CMD();

```

#### Beispiel 2

```jsl

Python Create JPIP CMD();

```

### Disconnect

**Syntax:** obj &lt;&lt; Disconnect

**Beschreibung:** Hinweis: Diese Funktion ist seit JMP 18 veraltet und hat keine Auswirkungen.

**JMP Version hinzugefügt:** 14

### Execute

**Syntax:** list = obj &lt;&lt; Execute( { list of Inputs }, { list of Outputs }, statements &lt; , echo( 1 | 0 ) &gt; )

**Beschreibung:** Sendet eine Liste von Eingaben, führt Anweisungen aus und gibt eine Liste von Ausgaben zurück. Der optionale Parameter echo() ist standardmäßig „wahr“. Der Parameter echo steuert das Echo der Python-Quelle im Protokoll. Das logische „wahr“ (1) aktiviert das Echo der Quelle, während 0 das Echo im Protokoll unterdrückt.

**JMP Version hinzugefügt:** 14

#### Beispiel 1

```jsl

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

#### Beispiel 2

```jsl

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

**Syntax:** y = obj &lt;&lt; Get( name )

**Beschreibung:** Ruft Daten von Python ab. Das Argument name kann jeden der folgenden Python-Datentypen darstellen (numeric | string | matrix | list | dict | data table | data frame | datetime | numpy.datetime64 ).

**JMP Version hinzugefügt:** 14

#### Beispiel 1

```jsl


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

#### Datetime

```jsl


PythonConnection = Python Connect();
date1 = As Date( Today() );
PythonConnection << Set( date1 );
date2 = PythonConnection << Get( date1 );
Show( date1, date2 );

```

#### numpy.datetime64

```jsl


PythonConnection = Python Connect();
PythonConnection << Install Packages( "numpy" );
PythonConnection << Submit( "import numpy as np" );
PythonConnection << Submit( "datetime64 = np.datetime64('1989-10-05')" );
numpy_datetime = PythonConnection << Get( datetime64 );
Show( numpy_datetime );

```

### Get Version

**Syntax:** version = obj &lt;&lt; Get Version

**Beschreibung:** Gibt die Versionsnummer von Python der aktuellen Verbindung zurück.

**JMP Version hinzugefügt:** 14

```jsl

PythonConnection = Python Connect();
version = PythonConnection << Get Version;
Show( version );

```

### Install Packages

**Syntax:** obj &lt;&lt; Install Packages( packages )

**Beschreibung:** Dies umhüllt die Installation von Python-Paketen im JMP-Verzeichnis der Pakete. Für Operationen, die über eine einfache Paketinstallation hinausgehen, siehe Python Create JPIP CMD(), um ein Befehlszeilen-Pip-Wrapper-Skript in einem mit Directory Pick() gewählten Verzeichnis zu erstellen. Alternativ können Sie die Installation von einem JMP-Python-Skriptfenster aus starten, siehe jmputils.jpip in der Kategorie „Python“ hier im Skriptindex.

**JMP Version hinzugefügt:** 18

#### Beispiel 1

```jsl

// install numpy and pandas packages
conn = Python Connect();
conn << Install Packages( "numpy pandas" );

```

#### Beispiel 2

```jsl

// install numpy and pandas packages
Python Install Packages( "numpy pandas" );

```

#### Beispiel 3

```jsl

// install numpy and pandas packages
Python Install Packages( {"numpy", "pandas"} );

```

### Is Connected

**Syntax:** x = obj &lt;&lt; Is Connected

**Beschreibung:** Hinweis: Diese Funktion ist seit JMP 18 veraltet und gibt immer 1 zurück.

**JMP Version hinzugefügt:** 14

```jsl

PythonConnection = Python Connect();
x = PythonConnection << Is Connected;
Show( x );

```

### JMP Name To Python Name

**Syntax:** Python Name = PythonConnection &lt;&lt; JMP Name To Python Name( JMP name )

**Beschreibung:** Ordnet einen JMP-Variablennamen einem Python-Variablennamen zu und verwendet Namensregeln von Python-Variablen.

**JMP Version hinzugefügt:** 14

```jsl

PythonConnection = Python Connect();
Python Name = PythonConnection << JMP Name To Python Name( a b c );
Show( Python Name );

```

### Reset

**Syntax:** PythonConnection &lt;&lt; Reset

**Beschreibung:** Reset the shared Python environment.

**JMP Version hinzugefügt:** 19

```jsl

PythonConnection = Python Connect();
pi = 3.1415927;
PythonConnection << Send( pi );
PythonConnection << Submit( "print(pi)" );
PythonConnection << Reset();
// will show error, pi not defined
PythonConnection << Submit( "print(pi)" );

```

### Send

**Syntax:** y = obj &lt;&lt; Send( name, &lt;Python Name( name )&gt; )

**Beschreibung:** Sendet Daten an Python. Das Argument name kann jeden der folgenden JMP-Datentypen darstellen (Numerisch | Zeichenkette | Matrix | Liste | Datentabelle | Datum ).

**JMP Version hinzugefügt:** 14

#### Beispiel 1

```jsl

PythonConnection = Python Connect();
x = [1, 2, 3];
PythonConnection << Send( x );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
PythonConnection << Send( dt );
PythonConnection << Submit( "print(x)" );
PythonConnection << Submit( "print(dt)" );

```

#### Date

```jsl


PythonConnection = Python Connect();
date = As Date( Today() );
PythonConnection << Send( date );
PythonConnection << Submit( "print(date)" );

```

### Send File

**Syntax:** y = obj &lt;&lt; Send File( filename, &lt;Python Name( name )&gt; )

**Beschreibung:** Sendet eine Datendatei an Python; dabei ist das filename-Argument eine Zeichenkette, die den Pfadnamen der an Python zu sendenden Datei angibt.

**JMP Version hinzugefügt:** 14

```jsl

PythonConnection = Python Connect();
PythonConnection << Send File( "$SAMPLE_DATA/Big Class.jmp" );
dtname = "$SAMPLE_DATA/Baseball.jmp";
PythonConnection << Send File( dtname );
PythonConnection << Submit( "print(Big_Class)" );
PythonConnection << Submit( "print(Baseball)" );

```

### Set

**Syntax:** y = obj &lt;&lt; Set( name, &lt;Python Name( name )&gt; )

**Beschreibung:** Sendet Daten an Python. Das Argument name kann jeden der folgenden JMP-Datentypen darstellen (Numerisch | Zeichenkette | Matrix | Liste | Datentabelle | Datum ).

**JMP Version hinzugefügt:** 14

#### Beispiel 1

```jsl

PythonConnection = Python Connect();
x = [1, 2, 3];
PythonConnection << Set( x );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
PythonConnection << Set( dt );
PythonConnection << Submit( "print(x)" );
PythonConnection << Submit( "print(dt)" );

```

#### Date

```jsl


PythonConnection = Python Connect();
date = As Date( Today() );
PythonConnection << Set( date );
PythonConnection << Submit( "print(date)" );

```

### Submit

**Syntax:** obj &lt;&lt; Submit( statements &lt; , echo( 1 | 0 ) &gt; )

**Beschreibung:** Übergibt Anweisungen an Python. Anweisungen können in Form eines Zeichenkettenwerts oder einer Liste von Zeichenkettenwerten vorliegen. Der optionale Parameter echo() hat den Standardwert „wahr“. Der Parameter echo steuert das Echo der Python-Quelle im Protokoll. Das logische „wahr“ (1) aktiviert das Echo der Quelle, während 0 das Echo im Protokoll unterdrückt.

**JMP Version hinzugefügt:** 14

```jsl

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

**Syntax:** obj &lt;&lt; Submit File( path )

**Beschreibung:** Sendet Anweisungen an Python und verwendet dafür eine Datei, die vom Argument path angegeben wird.

**JMP Version hinzugefügt:** 14

```jsl

PythonConnection = Python Connect();
PythonConnection << Submit File( "some_Python_source.py" );

```

