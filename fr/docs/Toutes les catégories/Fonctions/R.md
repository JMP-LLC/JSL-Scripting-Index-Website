# R



## Fonctions

### R Connect

**Syntaxe :** RConnection = R Connect()

**Description :** Renvoie un objet scriptable de connexion à R.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
RConnection = R Connect();

```

### R Control

**Syntaxe :** R Control( Interrupt | Async( bool ) | Echo( bool ) )

**Description :** Change les options de contrôle de R

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
R Init( Echo( true ) );
R Control( Echo( false ) );
R Submit( "Add R code" );

```

### R Execute

**Syntaxe :** R Execute( { list of Inputs }, { list of Outputs }, statements )

**Description :** Envoie une liste d&apos;entrées, exécute des instructions et renvoie une liste de sorties.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
R Init();
a = "abcdef";
d = 3.141;
x = 0;
z = 0;
v = [9 8 7, 6 5 4, 3 2 1];
m = [1 2 3, 4 5 6, 7 8 9];
rc = R Execute( {v, m, a, d}, {x, z, a, d}, "\[
x <- rnorm(5)
z <- v * m
]\" );
Show( v, m, rc, x, z, a, d );

```

### R Get

**Syntaxe :** y = R Get( name )

**Description :** Renvoie les données de R, où l&apos;argument name peut représenter l&apos;un des types de données R suivants : numérique, chaîne, matrice, liste, ou cadre de données.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
R Init();
x1 = [1, 2, 3];
R Send( x1 );
x2 = R Get( x1 );
Show( x1, x2 );
dt1 = New Table( "Test", New Column( "Col", Values( [10, 20, 30] ) ) );
R Send( dt1 );
dt2 = R Get( dt1 );
Close( dt1, No Save );

```

### R Get Graphics

**Syntaxe :** R graphics = R Get Graphics( format )

**Description :** OBSOLÈTE dans JMP 19 et n&apos;a pas d&apos;effet. Pour la remplacer, définissez l&apos;appareil sur un nom de fichier (par exemple, un fichier png « r_plot.png »), puis ouvrez le fichier pour récupérer l&apos;image. Cette option sera supprimée à partir de JMP 20. Le code ci-dessous montre la solution de contournement.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
R Init();
img_path = Get Path Variable( "TEMP" ) || "r_plot.png";
R Execute( {img_path}, {}, "\[
png(img_path)
plot(1:10)
dev.off()
]\" );
plot = Open( img_path );
rc = Delete File( img_path );

```

### R Get Version

**Syntaxe :** version = R Get Version()

**Description :** Renvoie le numéro de la version R utilisée avec les interfaces R JMP.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
R Init();
version = R Get Version();
Show( version );

```

### R Init

**Syntaxe :** R Init()

**Description :** Initialise les interfaces R.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
R Init();

```

### R Is Connected

**Syntaxe :** connected = R Is Connected()

**Description :** Renvoie 1 si une connexion R est active, 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
R Init();
connected = R Is Connected();

```

### R JMP Name to R Name

**Syntaxe :** R name = R JMP Name To R Name( JMP name )

**Description :** Convertit un nom de variable JMP en un nom de variable R à l&apos;aide des règles de nommage des variables R.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
R name = R JMP Name to R Name( a b c );

```

### R Send

**Syntaxe :** R Send( name, <R Name( as_name ) | "as_name"> )

**Description :** Envoie des données à R, où l&apos;argument name peut représenter l&apos;un des types de données JMP suivants : numérique, chaîne, matrice, liste, table de données ou colonne de table de données.

**JMP Version ajoutée :** Avant la version 14

**Colonne**

```jsl

Names Default To Here( 1 );
R Init();
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
R Send( dt:weight );
Close( dt );
w = R Get( "weight" );

```

**Table de données**

```jsl

Names Default To Here( 1 );
R Init();
x = [1, 2, 3];
R Send( x, "x1" );
rx = R Get( "x1" );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
R Send( dt );
Close( dt );
R Submit( "dt" );

```

### R Send File

**Syntaxe :** R Send File( filename, <R Name( name )> )

**Description :** Envoie un fichier de données à R, où l&apos;argument de filename est une chaîne qui indique un chemin d&apos;accès vers le fichier à envoyer à R.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
R Init();
R Send File( "$SAMPLE_DATA/Big Class.jmp" );
R Send File( "$SAMPLE_DATA/Baseball.jmp" );
R Submit( "Big.Class" );
R Submit( "Baseball" );

```

### R Submit

**Syntaxe :** R Submit( statements )

**Description :** Soumet les instructions à R. Les instructions peuvent être sous forme d&apos;une valeur de chaîne ou d&apos;une liste de valeurs de chaînes.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );

R Init();
img_path = Get Path Variable( "TEMP" ) || "r_plot.png";
code =
"\[
x <- rnorm(1000)
hx <- hist(x, breaks=100, plot=FALSE)
png("IMG_PATH")
plot(hx, col=ifelse(abs(hx$breaks) < 1.669, 4, 2))
dev.off()
x <- rnorm (100)
y <- x**2 + rnorm (100)
summary(y)
]\";
// substitue portable path into R code
r_code = Substitute( code, "IMG_PATH", img_path );
R Submit( r_code );
Wait( 3 );
plot = Open( img_path );
rc = Delete File( img_path );

```

### R Submit File

**Syntaxe :** R Submit File( path )

**Description :** Soumet des instructions à R au moyen d&apos;un fichier spécifié par l&apos;argument path.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );

R Init();
file_path = Get Path Variable( "SAMPLE_SCRIPTS" ) || "R/SI_example.R";
R Submit File( file_path );

```

### R Term

**Syntaxe :** R Term()

**Description :** Obsolète dans JMP 19 et n&apos;a pas d&apos;effet.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
R Init();
R Term();

```

