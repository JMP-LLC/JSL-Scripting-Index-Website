# R Connection



## Constructeurs associés

### R Connect

**Syntaxe :** RConnection = R Connect()

**Description :** Renvoie un objet scriptable de connexion à R.

```jsl

RConnection = R Connect();
x = RConnection << Is Connected;
Show( x );

```

## Messages d'éléments

### Control

**Syntaxe :** obj &lt;&lt; Control( Echo( Boolean ) )

**Description :** Change les options de contrôle de R.

```jsl

RConnection = R Connect();
RConnection << Control( Echo( 0 ) );
RConnection << Submit( "rnorm(10)" );

```

### Disconnect

**Syntaxe :** obj &lt;&lt; Disconnect

**Description :** Obsolète dans JMP 19 et n&apos;a pas d&apos;effet.

```jsl

RConnection = R Connect();
RConnection << Disconnect;

```

### Execute

**Syntaxe :** list = obj &lt;&lt; Execute( { list of Inputs }, { list of Outputs }, statements )

**Description :** Envoie une liste d&apos;entrées, exécute des instructions et renvoie une liste de sorties.

```jsl


RConnection = R Connect();
a = "abcdef";
d = 3.1415927;
x = 0;
z = 0;
v = [9 8 7, 6 5 4, 3 2 1];
m = [1 2 3, 4 5 6, 7 8 9];
rc = RConnection << Execute(
	{v, m, a, d},
	{x, z, a, d},
	"\[
x <- rnorm(5)
z <- v * m
]\"
);
Show( v, m, rc, x, z, a, d );

```

### Get

**Syntaxe :** y = obj &lt;&lt; Get( name )

**Description :** Renvoie les données de R, où l&apos;argument name peut représenter l&apos;un des types de données R suivants : numérique, chaîne, matrice, liste, ou cadre de données.

```jsl

RConnection = R Connect();
x1 = [1, 2, 3];
RConnection << Set( x1 );
x2 = RConnection << Get( x1 );
Show( x1, x2 );
dt1 = New Table( "Test", New Column( "Col", Values( [10, 20, 30] ) ) );
RConnection << Set( dt1 );
dt2 = RConnection << Get( dt1 );
Close( dt1, No Save );

```

### Get Graphics

**Syntaxe :** R graphics = obj &lt;&lt; Get Graphics( format )

**Description :** OBSOLÈTE dans JMP 19 et n&apos;a pas d&apos;effet. Pour la remplacer, définissez l&apos;appareil sur un nom de fichier (par exemple, un fichier png « r_plot.png »), puis ouvrez le fichier pour récupérer l&apos;image. Cette option sera supprimée à partir de JMP 20. Le code ci-dessous montre la solution de contournement.

```jsl

RConnection = R Connect();
img_path = Get Path Variable( "TEMP" ) || "r_plot.png";
RConnection << Execute( {img_path}, {}, "\[
png(img_path)
plot(1:10)
dev.off()
]\" );
plot = Open( img_path );
rc = Delete File( img_path );

```

### Get Version

**Syntaxe :** version = obj &lt;&lt; Get Version

**Description :** Renvoie le numéro de version de R utilisé dans la connexion en cours.

```jsl

RConnection = R Connect();
version = RConnection << Get Version;
Show( version );

```

### Is Connected

**Syntaxe :** x = obj &lt;&lt; Is Connected

**Description :** Renvoie 1 si une connexion R est active, 0 dans le cas contraire.

```jsl

RConnection = R Connect();
x = RConnection << Is Connected;
Show( x );

```

### JMP Name To R Name

**Syntaxe :** Rname = JMP Name To R Name( JMP name )

**Description :** Convertit un nom de variable JMP en un nom de variable R à l’aide des règles de nommage des variables R.

```jsl

RConnection = R Connect();
RName = RConnection << JMP Name To R Name( a b c );
Show( RName );

```

### Send

**Syntaxe :** y = obj &lt;&lt; Send( name, &lt;R Name( name )&gt; )

**Description :** Envoie des données à R, où l&apos;argument name peut représenter l&apos;un des types de données JMP suivants : numérique, chaîne, matrice, liste, ou table de données.

```jsl

RConnection = R Connect();
x = [1, 2, 3];
RConnection << Send( x );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
RConnection << Send( dt );
Close( dt );
RConnection << Submit( "dt" );

```

### Send File

**Syntaxe :** y = obj &lt;&lt; Send File( filename, &lt;R Name( name )&gt; )

**Description :** Envoie un fichier de données à R, où l’argument de filename est une chaîne qui indique un chemin d’accès vers le fichier à envoyer à R.

```jsl

RConnection = R Connect();
RConnection << Send File( "$SAMPLE_DATA/Big Class.jmp" );
RConnection << Disconnect;
dtname = "$SAMPLE_DATA/Baseball.jmp";
RConnection << Send File( dtname );

```

### Set

**Syntaxe :** y = obj &lt;&lt; Set( name, &lt;R Name( name )&gt; )

**Description :** Envoie des données à R, où l&apos;argument name peut représenter l&apos;un des types de données JMP suivants : numérique, chaîne, matrice, liste, ou table de données.

```jsl

RConnection = R Connect();
x = [1, 2, 3];
RConnection << Set( x );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
RConnection << Set( dt );
Close( dt );
RConnection << Submit( "dt" );

```

### Submit

**Syntaxe :** obj &lt;&lt; Submit( statements )

**Description :** Envoie les instructions à R. Les instructions peuvent être sous forme d’une valeur de chaîne ou d’une liste de valeurs de chaînes.

```jsl


RConnection = R Connect();
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
RConnection << Submit( r_code );
Wait( 3 );
plot = Open( img_path );
rc = Delete File( img_path );

```

### Submit File

**Syntaxe :** obj &lt;&lt; Submit File( path )

**Description :** Soumet des instructions à R au moyen d&apos;un fichier spécifié par l&apos;argument path.

```jsl

RConnection = R Connect();
RConnection << Submit File( "file containing R source." );

```

