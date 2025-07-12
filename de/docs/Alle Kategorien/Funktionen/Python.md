# Python



## Funktionen

### Python Connect

**Syntax:** PythonConnection = Python Connect ()

**Beschreibung:** Gibt ein skriptfähiges Objekt der Python-Verbindung zurück.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
version = PythonConnection << Get Version;
Show( version );

```

### Python Create JPIP CMD

**Syntax:** Python Create JPIP CMD()

**Beschreibung:** Löst die Erstellung eines jpip-Befehlszeilen-Wrapper-Skripts für den Pip-Befehl von Python aus. Ein Verzeichnisauswahldialog fragt nach dem Verzeichnis, in dem das generierte Skript gespeichert werden soll. Dieses Skript stellt dann alle Funktionen von pip zur Verfügung und richtet gleichzeitig die erforderlichen Umgebungsvariablen für die isolierte Python-Umgebung von JMP korrekt ein.

**JMP Version hinzugefügt:** 18

**Beispiel 1**

```jsl

Names Default To Here( 1 );
Python Create JPIP CMD();

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
// install numpy and pandas packages
conn = Python Connect();
conn << Create JPIP CMD();

```

### Python Execute

**Syntax:** Python Execute( { list of Inputs }, { list of Outputs }, statements < , echo( 1 | 0 ) > )

**Beschreibung:** Sendet eine Liste von Eingaben, führt Anweisungen aus und gibt eine Liste von Ausgaben zurück. Der optionale Parameter echo() ist standardmäßig „wahr“. Der Parameter echo steuert das Echo der Python-Quelle im Protokoll. Das logische „wahr“ (1) aktiviert das Echo der Quelle, während 0 das Echo im Protokoll unterdrückt.

**JMP Version hinzugefügt:** 14

**Beispiel 1**

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

**Beispiel 2**

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

**Syntax:** y = Python Get( name )

**Beschreibung:** Ruft Daten von Python ab. Das Argument name kann jeden der folgenden Python-Datentypen darstellen (numeric | string | matrix | list | dict | data table | data frame | datetime | numpy.datetime64).

**JMP Version hinzugefügt:** 14

**Beispiel 1**

```jsl

Names Default To Here( 1 );

x1 = {1, 2, 3};
Python Send( x1 );
x2 = Python Get( x1 );
Show( x1, x2 );

```

**Datetime**

```jsl

Names Default To Here( 1 );

date1 = As Date( Today() );
Python Send( date1 );
date2 = Python Get( date1 );
Show( date1, date2 );

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

**Syntax:** version = Python Get Version()

**Beschreibung:** Gibt die Versionsnummer von Python zurück, die mit den Python-Schnittstellen in JMP verwendet wird.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
version = Python Get Version();
Show( version );

```

### Python Init

**Syntax:** PythonConnection = Python Init( )

**Beschreibung:** Hinweis: Diese Funktion ist seit JMP 18 veraltet und entspricht Python Connect().

**JMP Version hinzugefügt:** 14

**Beispiel 1**

```jsl

Names Default To Here( 1 );

Python Init();
Python Submit( "\[
str = 'The quick brown fox jumps over the lazy dog';
]\" );
getStr = Python Get( str );
Show( getStr );

```

**Beispiel 2**

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

**Syntax:** Python Install Packages( packages )

**Beschreibung:** Dies umhüllt die Installation von Python-Paketen im JMP-Verzeichnis der Pakete. Für Operationen, die über eine einfache Paketinstallation hinausgehen, siehe Python Create JPIP CMD(), um ein Befehlszeilen-Pip-Wrapper-Skript in einem mit Directory Pick() gewählten Verzeichnis zu erstellen. Alternativ können Sie die Installation von einem JMP-Python-Skriptfenster aus starten, siehe jmputils.jpip in der Kategorie „Python“ hier im Skriptindex.

**JMP Version hinzugefügt:** 18

**Beispiel 1**

```jsl

Names Default To Here( 1 );
// install numpy and pandas packages
Python Install Packages( "numpy pandas" );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
// install numpy and pandas packages
Python Install Packages( {"numpy", "pandas"} );

```

**Beispiel 3**

```jsl

Names Default To Here( 1 );
// install numpy and pandas packages
conn = Python Connect();
conn << Install Packages( "numpy pandas" );

```

### Python Is Connected

**Syntax:** connected = Python Is Connected()

**Beschreibung:** Hinweis: Diese Funktion ist seit JMP 18 veraltet und gibt immer 1 zurück.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
x = Python Is Connected();
Show( x );

```

### Python JMP Name to Python Name

**Syntax:** Python name = Python JMP Name To Python Name( JMP name )

**Beschreibung:** Ordnet einen JMP-Variablennamen einem Python-Variablennamen zu und verwendet Namensregeln von Python-Variablen.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
Python name = Python JMP Name to Python Name( a b c );
Show( Python name );

```

### Python Reset

**Syntax:** Python Reset()

**Beschreibung:** Resets the shared Python environment, primarily clearing all references to objects. This does not change the import cache of imported modules. This is a limitation of the Python environment itself.  Modules that load shared libraries cannot be unloaded by the running process. To reload pure Python code, see the Python.org documentation on importlib reload().

**JMP Version hinzugefügt:** 19

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

**Syntax:** Python Send( name, <Python Name( name ) | "as_name" > )

**Beschreibung:** Sends data to Python, where the name argument can represent any of the following JMP data types ( numeric | string | matrix | list | data table | data table column | date ).

**JMP Version hinzugefügt:** 14

**Datentabelle**

```jsl

Names Default To Here( 1 );

x = {1, 2, 3};
Python Send( x );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Python Send( dt );
Python Submit( "print(x)" );
Python Submit( "print(dt)" );

```

**Datum**

```jsl

Names Default To Here( 1 );

date = As Date( Today() );
Python Send( date );
Python Submit( "print(date)" );

```

**Spalte**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Python Send( dt:weight );
Python Submit( "print(weight)" );

```

### Python Send File

**Syntax:** Python Send File( filename, <Python Name( name )> )

**Beschreibung:** Sendet eine Datendatei an Python; dabei ist das filename-Argument eine Zeichenkette, die den Pfadnamen der an Python zu sendenden Datei angibt.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

Python Send File( "$SAMPLE_DATA/Big Class.jmp" );
Python Send File( "$SAMPLE_DATA/Baseball.jmp" );
Python Submit( "print(Big_Class)" );
Python Submit( "print(Baseball)" );

```

### Python Submit

**Syntax:** Python Submit( statements < , echo( 1 | 0 ) > )

**Beschreibung:** Übergibt Anweisungen an Python. Anweisungen können in Form eines Zeichenkettenwerts oder einer Liste von Zeichenkettenwerten vorliegen. Der optionale Parameter echo() hat den Standardwert 1. Der Parameter echo steuert das Echo der Python-Quelle im Protokoll. Das logische „wahr“ (1) aktiviert das Echo der Quelle, während 0 das Echo im Protokoll unterdrückt.

**JMP Version hinzugefügt:** 14

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

**Syntax:** Python Submit File( path )

**Beschreibung:** Sendet Anweisungen an Python und verwendet dafür eine Datei, die vom Argument path angegeben wird.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
Python Submit File( "some_Python_source.py" );

```

### Python Term

**Syntax:** Python Term()

**Beschreibung:** Hinweis: Diese Funktion ist seit JMP 18 veraltet und hat keine Auswirkungen.

**JMP Version hinzugefügt:** 14

