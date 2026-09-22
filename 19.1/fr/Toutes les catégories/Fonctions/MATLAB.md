# MATLAB



### Check MATLAB Dependencies

**Syntaxe :** Check MATLAB Dependencies()

**Description :** Vérifie si les dépendances MATLAB sont installées.

**JMP Version ajoutée :** Avant la version 14

```jsl

If( !Check MATLAB Dependencies(),	Install MATLAB Dependencies();	Print( "Dependencies are installed" );,	Print( "Dependencies are installed" ));

```

### Install MATLAB Dependencies

**Syntaxe :** Install MATLAB Dependencies(&lt;Patch(0|1)&gt;)

**Description :** Installe les dépendances MATLAB requises.

**JMP Version ajoutée :** Avant la version 14

```jsl

If( !Check MATLAB Dependencies(),	Install MATLAB Dependencies(),	Print( "Dependencies are installed" ));

```

### MATLAB Connect

**Syntaxe :** MATLABConnection = MATLAB Connect(&lt;Echo(0|1)&gt;)

**Description :** Renvoie un objet scriptable de connexion à MATLAB.

**JMP Version ajoutée :** Avant la version 14

```jsl

MATLABConnection = MATLAB Connect();x = MatlabConnection << Is Connected;Show( x );

```

### MATLAB Control

**Syntaxe :** MATLAB Control( Echo(bool) )

**Description :** Change les options de contrôle pour MATLAB.

**JMP Version ajoutée :** Avant la version 14

```jsl

MATLAB Init( Echo( true ) );MATLAB Control( Echo( false ) );MATLAB Submit(	"\[	v = [9 8 7, 6 5 4, 3 2 1];	m = [1 2 3, 4 5 6, 7 8 9];	rowjoin = [v ; m]	coljoin = [v , m]]\");MATLAB Term();

```

### MATLAB Execute

**Syntaxe :** MATLAB Execute( { list of Inputs }, { list of Outputs }, statements, &lt;Echo(0|1)&gt;, &lt;Expand(0|1)&gt; )

**Description :** Envoie une liste d&apos;entrées, exécute des instructions et renvoie une liste de sorties.

**JMP Version ajoutée :** Avant la version 14

```jsl

MATLAB Init();a = "abcdef";d = 3.141;v = [9 8 7, 6 5 4, 3 2 1];m = [1 2 3, 4 5 6, 7 8 9];ml = MATLAB Execute(	{v, m, a, d},	{x, z, a, d},	"\[a = v * m; % matrix productd = v / m; % = v * inv(m) called Right divisionz = m \ v; % = m * inv(v) called Left divisionx = m .* v; % element-wise product]\");Show( v, m, ml, x, z, a, d );MATLAB Term();

```

### MATLAB Get

**Syntaxe :** y = MATLAB Get( name )

**Description :** Renvoie les données de MATLAB, où l&apos;argument name peut représenter l&apos;un des types de données MATLAB suivants : numérique, chaîne, matrice, liste, ou cadre de données.

**JMP Version ajoutée :** Avant la version 14

```jsl

MATLAB Init();x1 = [1, 2, 3];MATLAB Send( x1 );x2 = MATLAB Get( x1 );Show( x1, x2 );dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );MATLAB Send( dt1 );dt2 = MATLAB Get( dt1 );dt2 << New Data View;Close( dt1 );MATLAB Term();

```

### MATLAB Get Graphics

**Syntaxe :** MATLAB graphics = MATLAB Get Graphics( format )

**Description :** Renvoie le dernier objet graphique écrit dans la fenêtre d&apos;affichage graphique de MATLAB dans un format graphique spécifié par l&apos;argument format.

**JMP Version ajoutée :** Avant la version 14

```jsl

MATLAB Init();ml = MATLAB Submit( "\[plot(1:10)]\" );plot = MATLAB Get Graphics( png );pngJMP = New Window( "Plot", Picture Box( plot ) );pngJMP << Close Window;MATLAB Submit( "close" );//Needed this command to close the figure generated from MatlabMATLAB Term();

```

### MATLAB Get Version

**Syntaxe :** version = MATLAB Get Version()

**Description :** Renvoie le numéro de la version MATLAB utilisée avec les interfaces MATLAB JMP.

**JMP Version ajoutée :** 14

```jsl

MATLAB Init();version = MATLAB Get Version();Show( version );MATLAB Term();

```

### MATLAB Init

**Syntaxe :** MATLAB Init(&lt;Echo(0|1)&gt;)

**Description :** Initialise les interfaces MATLAB.

**JMP Version ajoutée :** Avant la version 14

```jsl

MATLAB Init();MATLAB Submit( "\[str = 'The quick brown fox jumps over the lazy dog';]\" );getStr = MATLAB Get( str );Show( getStr );MATLAB Term();

```

### MATLAB Is Connected

**Syntaxe :** connected = MATLAB Is Connected()

**Description :** Renvoie 1 si une connexion MATLAB est active, 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

MATLAB Init();x = MATLAB Is Connected();Show( x );MATLAB Term();

```

### MATLAB JMP Name to MATLAB Name

**Syntaxe :** MATLAB name = MATLAB JMP Name To MATLAB Name( JMP name )

**Description :** Convertit un nom de variable MATLAB en un nom de variable Python à l&apos;aide des règles de nommage des variables MATLAB.

**JMP Version ajoutée :** Avant la version 14

```jsl

MATLAB Init();MATLAB name = MATLAB JMP Name to MATLAB Name( a b c );Show( MATLAB name );MATLAB Term();

```

### MATLAB Load

**Syntaxe :** MATLAB Load( path )

**Description :** Charge des variables dans MATLAB à partir d&apos;un fichier .mat et renvoie les variables dans un tableau associatif JSL.

**JMP Version ajoutée :** 19

```jsl

MATLAB Init();// if .mat file contained: x = 40; y = 'hello';vars = MATLAB Load( "path/to/.mat" );Show( vars << Get Value( "x" ), vars << Get Value( "y" ) );MATLAB Term();

```

### MATLAB Send

**Syntaxe :** MATLAB Send( name, &lt;MATLAB Name( name )&gt;, &lt;Named Arguments&gt; )

**Description :** Envoie des données à MATLAB, où l&apos;argument name peut représenter l&apos;un des types de données JMP suivants : numérique, chaîne, matrice, liste, ou table de données.

**JMP Version ajoutée :** Avant la version 14

```jsl

MATLAB Init();x = [1, 2, 3];MATLAB Send( x );dt = Open( "$SAMPLE_DATA/Big Class.jmp" );MATLAB Send( dt );Close( dt );MATLAB Submit( "x" );MATLAB Submit( "dt" );MATLAB Term();

```

### MATLAB Send File

**Syntaxe :** MATLAB Send File( filename, &lt;MATLAB Name( name )&gt; )

**Description :** Envoie un fichier de données à MATLAB, où l&apos;argument filename est une chaîne qui indique un chemin d&apos;accès vers le fichier à envoyer à MATLAB.

**JMP Version ajoutée :** Avant la version 14

```jsl

MATLAB Init();MATLAB Send File( "$SAMPLE_DATA/Big Class.jmp" );MATLAB Send File( "$SAMPLE_DATA/Baseball.jmp" );MATLAB Submit( "BigClass" );MATLAB Submit( "Baseball" );MATLAB Term();

```

### MATLAB Submit

**Syntaxe :** MATLAB Submit( statements, &lt;Echo(0|1)&gt;, &lt;Expand(0|1)&gt; )

**Description :** Soumet les instructions à MATLAB. Les instructions peuvent être sous forme d&apos;une valeur de chaîne ou d&apos;une liste de valeurs de chaînes.

**JMP Version ajoutée :** Avant la version 14

```jsl

MATLAB Init();MATLAB Submit( "\[str = 'The quick brown fox jumps over the lazy dog';a = 200;]\" );getStr = MATLAB Get( str );getNum = MATLAB Get( a );Show( getStr, getNum );MATLAB Term();

```

### MATLAB Submit File

**Syntaxe :** MATLAB Submit File( path, &lt;Echo(0|1)&gt;, &lt;Expand(0|1)&gt; )

**Description :** Soumet les instructions à MATLAB au moyen d&apos;un fichier pointé par l&apos;argument path.

**JMP Version ajoutée :** Avant la version 14

```jsl

MATLAB Init();MATLAB Submit File( "file containing MATLAB source.m" );MATLAB Term();

```

### MATLAB Term

**Syntaxe :** MATLAB Term()

**Description :** Termine les interfaces MATLAB.

**JMP Version ajoutée :** Avant la version 14

```jsl

MATLAB Init();MATLAB Submit( "\[str = 'The quick brown fox jumps over the lazy dog';]\" );getStr = MATLAB Get( str );Show( getStr );MATLAB Term();

```

### Update MATLAB Dependencies

**Syntaxe :** Update MATLAB Dependencies(&lt;Patch(0|1)&gt;)

**Description :** Met à jour les dépendances MATLAB requises.

**JMP Version ajoutée :** Avant la version 14

```jsl

If( Check MATLAB Dependencies(),	Update MATLAB Dependencies(),	Print( "Dependencies are updated" ));

```

