# MATLAB Connection



## Messages d'éléments

### Control

**Syntaxe :** obj &lt;&lt; Control(&lt;Echo(Boolean)&gt;)

**Description :** Contrôle l&apos;exécution de MATLAB.

```jsl

conn = MATLAB Connect();conn << Control( Echo( 0 ) );conn << Submit( "\[ a = 'hello'; ]\" ); // no echoconn << Control( Echo( 1 ) );conn << Submit( "\[ a = 'hello'; ]\" ); // echo

```

### Disconnect

**Syntaxe :** obj &lt;&lt; Disconnect

**Description :** Termine les interfaces MATLAB.

```jsl

MATLABConnection = MATLAB Connect();MATLABConnection << Disconnect;

```

### Execute

**Syntaxe :** obj &lt;&lt; Execute( { list of Inputs }, { list of Outputs }, statements, &lt;Echo(0|1)&gt;, &lt;Expand(0|1)&gt; )

**Description :** Envoie une liste d&apos;entrées, exécute des instructions et renvoie une liste de sorties. Le paramètre facultatif echo() est défini par défaut sur Vrai. Le paramètre echo contrôle l&apos;affichage du code source MATLAB dans le log. La valeur logique Vrai (1) active l&apos;affichage du code source, tandis que 0 le désactive.

```jsl

MATLABConnection = MATLAB Connect();a = "abcdef";d = 3.141;v = [9 8 7, 6 5 4, 3 2 1];m = [1 2 3, 4 5 6, 7 8 9];MATLABConnection << Execute(	{v, m, a, d},	{x, z, a, d},	"\[a = v * m; % matrix productd = v / m; % = v * inv(m) called Right divisionz = m \ v; % = m * inv(v)	called Left divisionx = m .* v; % element-wise product]\");Show( v, m, x, z, a, d );MATLABConnection << Disconnect;

```

### Get

**Syntaxe :** y = obj &lt;&lt; Get( name )

**Description :** Renvoie les données de MATLAB, où l&apos;argument name peut représenter l&apos;un des types de données MATLAB suivants : numérique, chaîne, matrice, liste, ou cadre de données.

```jsl

MATLABConnection = MATLAB Connect();x1 = [1, 2, 3];MATLABConnection << Set( x1 );x2 = MATLABConnection << Get( x1 );Show( x1, x2 );dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );MATLABConnection << Set( dt1 );dt2 = MATLABConnection << Get( dt1 );dt2 << New Data View;Close( dt1 );MATLABConnection << Disconnect;

```

### Get Graphics

**Syntaxe :** MATLAB graphics = obj &lt;&lt; Get Graphics( format )

**Description :** Renvoie le dernier objet graphique écrit dans la fenêtre d&apos;affichage graphique de MATLAB dans un format graphique spécifié par l&apos;argument format.

```jsl

MATLABConnection = MATLAB Connect();ml = MATLABConnection << Submit( "\[x = 0:pi/100:2*pi;y = sin(x);plot(x,y)]\" );plot = MATLABConnection << Get Graphics( png );New Window( "Plot", Picture Box( plot ) );MATLABConnection << Disconnect;

```

### Get Version

**Syntaxe :** version = obj &lt;&lt; Get Version

**Description :** Renvoie le numéro de version de MATLAB utilisé dans la connexion en cours.

```jsl

MATLABConnection = MATLAB Connect();version = MATLABConnection << Get Version;Show( version );MATLABConnection << Disconnect;

```

### Is Connected

**Syntaxe :** x = obj &lt;&lt; Is Connected

**Description :** Renvoie 1 si une connexion MATLAB est active, 0 dans le cas contraire.

```jsl

MATLABConnection = MATLAB Connect();x = MATLABConnection << Is Connected;Show( x );MATLABConnection << Disconnect;

```

### JMP Name To MATLAB Name

**Syntaxe :** obj &lt;&lt; JMP Name To MATLAB Name( JMP name )

**Description :** Convertit un nom de variable MATLAB en un nom de variable Python à l&apos;aide des règles de nommage des variables MATLAB.

```jsl

MATLABConnection = MATLAB Connect();MATLAB Name = MATLABConnection << JMP Name To MATLAB Name( a b c );Show( MATLAB Name );MATLABConnection << Disconnect;

```

### Load

**Syntaxe :** obj &lt;&lt; Load( path )

**Description :** Charge un fichier ".mat" dans MATLAB et renvoie les variables dans un tableau associatif JSL.

```jsl

MATLABConnection = MATLAB Connect();// .mat file has x, y variables with valuesvars = MATLABConnection << Load( "path/to/matfile.mat" );Show( vars << Get Value( "x" ), vars << Get Value( "y" ) );MATLABConnection << Disconnect;

```

### Send

**Syntaxe :** y = obj &lt;&lt; Send( name, &lt;Named Arguments&gt; )

**Description :** Envoie des données à MATLAB, où l&apos;argument name peut représenter l&apos;un des types de données JMP suivants : numérique, chaîne, matrice, liste, ou table de données.

```jsl

MATLABConnection = MATLAB Connect();x = [1, 2, 3];MATLABConnection << Send( x );dt = Open( "$SAMPLE_DATA/Big Class.jmp" );MATLABConnection << Send( dt );Close( dt );MATLABConnection << Submit( "x" );MATLABConnection << Submit( "dt" );MATLABConnection << Disconnect;

```

### Send File

**Syntaxe :** y = obj &lt;&lt; Send File( filename, &lt;MATLAB Name ( name )&gt; )

**Description :** Envoie un fichier de données à MATLAB, où l&apos;argument filename est une chaîne qui indique un chemin d&apos;accès vers le fichier à envoyer à MATLAB.

```jsl

MATLABConnection = MATLAB Connect();MATLABConnection << Send File( "$SAMPLE_DATA/Big Class.jmp" );dtname = "$SAMPLE_DATA/Baseball.jmp";MATLABConnection << Send File( dtname );MATLABConnection << Submit( "BigClass" );MATLABConnection << Submit( "Baseball" );MATLABConnection << Disconnect;

```

### Set

**Syntaxe :** y = obj &lt;&lt; Set( name, &lt;MATLAB Name ( name )&gt; )

**Description :** Envoie des données à MATLAB, où l&apos;argument name peut représenter l&apos;un des types de données JMP suivants : numérique, chaîne, matrice, liste, ou table de données.

```jsl

MATLABConnection = MATLAB Connect();x = [1, 2, 3];MATLABConnection << Set( x );dt = Open( "$SAMPLE_DATA/Big Class.jmp" );MATLABConnection << Set( dt );Close( dt );MATLABConnection << Submit( "x" );MATLABConnection << Submit( "dt" );MATLABConnection << Disconnect;

```

### Submit

**Syntaxe :** obj &lt;&lt; Submit( statements )

**Description :** Soumet les instructions à MATLAB. Les instructions peuvent être sous forme d&apos;une valeur de chaîne ou d&apos;une liste de valeurs de chaînes.

```jsl

MATLABConnection = MATLAB Connect();MATLABConnection << Submit(	"\[str = 'The quick brown fox jumps over the lazy dog';a = 200;]\");getStr = MATLABConnection << Get( str );getNum = MATLABConnection << Get( a );Show( getStr, getNum );MATLABConnection << Disconnect;

```

### Submit File

**Syntaxe :** obj &lt;&lt; Submit File( path )

**Description :** Soumet les instructions à MATLAB au moyen d&apos;un fichier pointé par l&apos;argument path.

```jsl

MATLABConnection = MATLAB Connect();MATLABConnection << Submit File( "file containing MATLAB source." );MATLABConnection << Disconnect;

```

