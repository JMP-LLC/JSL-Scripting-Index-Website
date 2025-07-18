# Python



### Python Connect

**Syntaxe :** PythonConnection = Python Connect ()

**Description :** Renvoie un objet scriptable de connexion à Python.

**JMP Version ajoutée :** 14

```jsl

PythonConnection = Python Connect();
version = PythonConnection << Get Version;
Show( version );

```

### Python Create JPIP CMD

**Syntaxe :** Python Create JPIP CMD()

**Description :** Déclenche la création d&apos;un script wrapper de ligne de commande jpip pour la commande pip Python. Une boîte de dialogue de sélection de répertoire vous demandera l&apos;emplacement du répertoire où enregistrer le script. Ce script fournit alors toutes les fonctionnalités de pip, tout en établissant correctement les variables d&apos;environnement nécessaires pour l&apos;environnement Python isolé de JMP.

**JMP Version ajoutée :** 18

#### Exemple 1

```jsl

Python Create JPIP CMD();

```

#### Exemple 2

```jsl

// install numpy and pandas packages
conn = Python Connect();
conn << Create JPIP CMD();

```

### Python Execute

**Syntaxe :** Python Execute( { list of Inputs }, { list of Outputs }, statements &lt; , echo( 1 | 0 ) &gt; )

**Description :** Envoie une liste des entrées, exécute les instructions et renvoie une liste des sorties. Le paramètre facultatif echo() est défini par défaut sur Vrai. Le paramètre echo contrôle l&apos;affichage du code source Python dans le log. La valeur logique Vrai (1) active l&apos;affichage du code source, tandis que 0 supprime l&apos;affichage dans le log.

**JMP Version ajoutée :** 14

#### Exemple 1

```jsl


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

#### Exemple 2

```jsl


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

**Syntaxe :** y = Python Get( name )

**Description :** Renvoie des données de Python, où l&apos;argument name peut représenter l&apos;un des types de données Python suivants : numérique, chaîne, matrice, liste, dictionnaire, table de données, cadre de données, datetime ou numpy.datetime64.

**JMP Version ajoutée :** 14

#### Datetime

```jsl


date1 = As Date( Today() );
Python Send( date1 );
date2 = Python Get( date1 );
Show( date1, date2 );

```

#### Exemple 1

```jsl


x1 = {1, 2, 3};
Python Send( x1 );
x2 = Python Get( x1 );
Show( x1, x2 );

```

#### numpy.datetime64

```jsl


Python Install Packages( "numpy" );
Python Submit( "import numpy as np" );
Python Submit( "datetime64 = np.datetime64('1989-10-05')" );
numpy_datetime = Python Get( datetime64 );
Show( numpy_datetime );

```

### Python Get Version

**Syntaxe :** version = Python Get Version()

**Description :** Renvoie le numéro de la version Python utilisée avec les interfaces Python JMP.

**JMP Version ajoutée :** 14

```jsl

version = Python Get Version();
Show( version );

```

### Python Init

**Syntaxe :** PythonConnection = Python Init( )

**Description :** Remarque : cette fonction est obsolète depuis JMP 18 et est équivalente à la fonction Python Connect().

**JMP Version ajoutée :** 14

#### Exemple 1

```jsl


Python Init();
Python Submit( "\[
str = 'The quick brown fox jumps over the lazy dog';
]\" );
getStr = Python Get( str );
Show( getStr );

```

#### Exemple 2

```jsl


PythonConnection = Python Init();
PythonConnection << Submit(
	"\[
str = 'The quick brown fox jumps over the lazy dog';
]\"
);
getStr = Python Get( str );
Show( getStr );

```

### Python Install Packages

**Syntaxe :** Python Install Packages( packages )

**Description :** Cela enveloppe l&apos;installeur de packages Python dans le répertoire JMP site-packages. Pour les opérations au-delà de la simple installation de package, consultez Commande Python Create JPIP CMD() pour créer un script wrapper pip de ligne de commande dans un répertoire choisi avec Directory Pick(). Autrement, pour exécuter l&apos;installeur à partir d&apos;une fenêtre de script Python JMP, regardez jmputils.jpip sous la catégorie Python ici dans l&apos;index des scripts.

**JMP Version ajoutée :** 18

#### Exemple 1

```jsl

// install numpy and pandas packages
Python Install Packages( "numpy pandas" );

```

#### Exemple 2

```jsl

// install numpy and pandas packages
Python Install Packages( {"numpy", "pandas"} );

```

#### Exemple 3

```jsl

// install numpy and pandas packages
conn = Python Connect();
conn << Install Packages( "numpy pandas" );

```

### Python Is Connected

**Syntaxe :** connected = Python Is Connected()

**Description :** Remarque : cette fonction est obsolète depuis JMP 18 et renvoie toujours 1.

**JMP Version ajoutée :** 14

```jsl

x = Python Is Connected();
Show( x );

```

### Python JMP Name to Python Name

**Syntaxe :** Python name = Python JMP Name To Python Name( JMP name )

**Description :** Convertit un nom de variable JMP en un nom de variable Python à l&apos;aide des règles de nommage des variables Python.

**JMP Version ajoutée :** 14

```jsl

Python name = Python JMP Name to Python Name( a b c );
Show( Python name );

```

### Python Reset

**Syntaxe :** Python Reset()

**Description :** Resets the shared Python environment, primarily clearing all references to objects. This does not change the import cache of imported modules. This is a limitation of the Python environment itself.  Modules that load shared libraries cannot be unloaded by the running process. To reload pure Python code, see the Python.org documentation on importlib reload().

**JMP Version ajoutée :** 19

```jsl

pi = 3.1415927;
Python Send( pi );
Python Submit( "print(pi)" );
Python Reset();
// will show error, pi not defined
Python Submit( "print(pi)" );

```

### Python Send

**Syntaxe :** Python Send( name, &lt;Python Name( name ) | "as_name" &gt; )

**Description :** Sends data to Python, where the name argument can represent any of the following JMP data types ( numeric | string | matrix | list | data table | data table column | date ).

**JMP Version ajoutée :** 14

#### Colonne

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Python Send( dt:weight );
Python Submit( "print(weight)" );

```

#### Date

```jsl


date = As Date( Today() );
Python Send( date );
Python Submit( "print(date)" );

```

#### Table de données

```jsl


x = {1, 2, 3};
Python Send( x );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Python Send( dt );
Python Submit( "print(x)" );
Python Submit( "print(dt)" );

```

### Python Send File

**Syntaxe :** Python Send File( filename, &lt;Python Name( name )&gt; )

**Description :** Envoie un fichier de données à Python, où l’argument de filename est une chaîne qui indique un chemin d’accès vers le fichier à envoyer à Python.

**JMP Version ajoutée :** 14

```jsl


Python Send File( "$SAMPLE_DATA/Big Class.jmp" );
Python Send File( "$SAMPLE_DATA/Baseball.jmp" );
Python Submit( "print(Big_Class)" );
Python Submit( "print(Baseball)" );

```

### Python Submit

**Syntaxe :** Python Submit( statements &lt; , echo( 1 | 0 ) &gt; )

**Description :** Soumet des instructions à Python. Les instructions peuvent être sous forme de chaînes de caractères ou d&apos;une liste de chaînes de caractères. Le paramètre facultatif echo() est défini par défaut sur 1. Le paramètre echo contrôle l&apos;affichage du code source Python dans le log. La valeur logique Vrai (1) active l&apos;affichage du code source, tandis que 0 supprime l&apos;affichage dans le log.

**JMP Version ajoutée :** 14

```jsl

Python Submit( "\[
str = 'The quick brown fox jumps over the lazy dog'
a = 200]\" );
getStr = Python Get( str );
getNum = Python Get( a );
Show( getStr, getNum );

```

### Python Submit File

**Syntaxe :** Python Submit File( path )

**Description :** Soumet les instructions à Python au moyen d&apos;un fichier pointé par l&apos;argument path.

**JMP Version ajoutée :** 14

```jsl

Python Submit File( "some_Python_source.py" );

```

### Python Term

**Syntaxe :** Python Term()

**Description :** Remarque : cette fonction est obsolète depuis JMP 18 et n&apos;a aucun effet.

**JMP Version ajoutée :** 14

