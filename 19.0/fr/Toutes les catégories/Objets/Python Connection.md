# Python Connection



## Messages d'éléments

### Create JPIP CMD

**Syntaxe :** obj &lt;&lt; Create JPIP CMD()

**Description :** Déclenche la création d&apos;un script wrapper de ligne de commande jpip pour la commande pip de Python. Une boîte de dialogue de sélection de répertoire vous demandera où enregistrer le script. Ce script fournit alors toutes les fonctionnalités de pip, tout en établissant correctement les variables d&apos;environnement nécessaires pour l&apos;environnement Python isolé de JMP.

**JMP Version ajoutée :** 18

#### Exemple 1

```jsl

// install numpy and pandas packages
conn = Python Connect();
conn << Create JPIP CMD();

```

#### Exemple 2

```jsl

Python Create JPIP CMD();

```

### Disconnect

**Syntaxe :** obj &lt;&lt; Disconnect

**Description :** Remarque : cette fonction est obsolète depuis JMP 18 et n&apos;a aucun effet.

**JMP Version ajoutée :** 14

### Execute

**Syntaxe :** list = obj &lt;&lt; Execute( { list of Inputs }, { list of Outputs }, statements &lt; , echo( 1 | 0 ) &gt; )

**Description :** Envoie une liste des entrées, exécute les instructions et renvoie une liste des sorties. Le paramètre facultatif echo() est définipar défaut sur Vrai. Le paramètre echo contrôle l&apos;affichage du code source Python dans le log. La valeur logique Vrai (1) active l&apos;affichage du code source, tandis que 0 le désactive.

**JMP Version ajoutée :** 14

#### Exemple 1

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

#### Exemple 2

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

**Syntaxe :** y = obj &lt;&lt; Get( name )

**Description :** Renvoie des données de Python, où l&apos;argument name peut représenter l&apos;un des types de données Python suivants : numérique, chaîne, matrice, liste, dictionnaire, table de données, cadre de données, datetime ou numpy.datetime64.

**JMP Version ajoutée :** 14

#### Datetime

```jsl


PythonConnection = Python Connect();
date1 = As Date( Today() );
PythonConnection << Set( date1 );
date2 = PythonConnection << Get( date1 );
Show( date1, date2 );

```

#### Exemple 1

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

**Syntaxe :** version = obj &lt;&lt; Get Version

**Description :** Renvoie le numéro de version de Python utilisé dans la connexion en cours.

**JMP Version ajoutée :** 14

```jsl

PythonConnection = Python Connect();
version = PythonConnection << Get Version;
Show( version );

```

### Install Packages

**Syntaxe :** obj &lt;&lt; Install Packages( packages )

**Description :** Cela enveloppe l&apos;installeur de packages Python dans le répertoire JMP site-packages. Pour les opérations au-delà de la simple installation de package, consultez Python Create JPIP CMD() pour créer un script wrapper pip de ligne de commande dans un répertoire choisi avec Directory Pick(). Autrement, pour exécuter l&apos;installeur à partir d&apos;une fenêtre de script Python JMP, regardez jmputils.jpip sous la catégorie Python ici dans l&apos;index des scripts.

**JMP Version ajoutée :** 18

#### Exemple 1

```jsl

// install numpy and pandas packages
conn = Python Connect();
conn << Install Packages( "numpy pandas" );

```

#### Exemple 2

```jsl

// install numpy and pandas packages
Python Install Packages( "numpy pandas" );

```

#### Exemple 3

```jsl

// install numpy and pandas packages
Python Install Packages( {"numpy", "pandas"} );

```

### Is Connected

**Syntaxe :** x = obj &lt;&lt; Is Connected

**Description :** Remarque : cette fonction est obsolète depuis JMP 18 et renvoie toujours 1.

**JMP Version ajoutée :** 14

```jsl

PythonConnection = Python Connect();
x = PythonConnection << Is Connected;
Show( x );

```

### JMP Name To Python Name

**Syntaxe :** Python Name = PythonConnection &lt;&lt; JMP Name To Python Name( JMP name )

**Description :** Convertit un nom de variable JMP en un nom de variable Python à l&apos;aide des règles de nommage des variables Python.

**JMP Version ajoutée :** 14

```jsl

PythonConnection = Python Connect();
Python Name = PythonConnection << JMP Name To Python Name( a b c );
Show( Python Name );

```

### Reset

**Syntaxe :** PythonConnection &lt;&lt; Reset

**Description :** Reset the shared Python environment.

**JMP Version ajoutée :** 19

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

**Syntaxe :** y = obj &lt;&lt; Send( name, &lt;Python Name( name )&gt; )

**Description :** Envoie les données à Python, où l&apos;argument name peut représenter n&apos;importe lequel des types de données JMP suivants (numérique | chaîne | matrice | liste | table de données | date).

**JMP Version ajoutée :** 14

#### Date

```jsl


PythonConnection = Python Connect();
date = As Date( Today() );
PythonConnection << Send( date );
PythonConnection << Submit( "print(date)" );

```

#### Exemple 1

```jsl

PythonConnection = Python Connect();
x = [1, 2, 3];
PythonConnection << Send( x );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
PythonConnection << Send( dt );
PythonConnection << Submit( "print(x)" );
PythonConnection << Submit( "print(dt)" );

```

### Send File

**Syntaxe :** y = obj &lt;&lt; Send File( filename, &lt;Python Name( name )&gt; )

**Description :** Envoie un fichier de données à Python, où l’argument de filename est une chaîne qui indique un chemin d’accès vers le fichier à envoyer à Python.

**JMP Version ajoutée :** 14

```jsl

PythonConnection = Python Connect();
PythonConnection << Send File( "$SAMPLE_DATA/Big Class.jmp" );
dtname = "$SAMPLE_DATA/Baseball.jmp";
PythonConnection << Send File( dtname );
PythonConnection << Submit( "print(Big_Class)" );
PythonConnection << Submit( "print(Baseball)" );

```

### Set

**Syntaxe :** y = obj &lt;&lt; Set( name, &lt;Python Name( name )&gt; )

**Description :** Envoie les données à Python, où l&apos;argument name peut représenter n&apos;importe lequel des types de données JMP suivants (numérique | chaîne | matrice | liste | table de données | date).

**JMP Version ajoutée :** 14

#### Date

```jsl


PythonConnection = Python Connect();
date = As Date( Today() );
PythonConnection << Set( date );
PythonConnection << Submit( "print(date)" );

```

#### Exemple 1

```jsl

PythonConnection = Python Connect();
x = [1, 2, 3];
PythonConnection << Set( x );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
PythonConnection << Set( dt );
PythonConnection << Submit( "print(x)" );
PythonConnection << Submit( "print(dt)" );

```

### Submit

**Syntaxe :** obj &lt;&lt; Submit( statements &lt; , echo( 1 | 0 ) &gt; )

**Description :** Soumet des instructions à Python. Les instructions peuvent être sous forme de chaînes de caractères ou d&apos;une liste de chaînes de caractères. Le paramètre facultatif echo() est défini par défaut sur Vrai. Le paramètre echo contrôle l&apos;affichage du code source Python dans le log. La valeur logique Vrai (1) active l&apos;affichage du code source, tandis que 0 le désactive.

**JMP Version ajoutée :** 14

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

**Syntaxe :** obj &lt;&lt; Submit File( path )

**Description :** Soumet les instructions à Python au moyen d&apos;un fichier pointé par l&apos;argument path.

**JMP Version ajoutée :** 14

```jsl

PythonConnection = Python Connect();
PythonConnection << Submit File( "some_Python_source.py" );

```

