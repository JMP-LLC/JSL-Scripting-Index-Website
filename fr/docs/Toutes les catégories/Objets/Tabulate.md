# Tabulate



## Constructeurs associés

### Tabulate

**Syntaxe :** Tabulate( Add Table( Column Table( Analysis Columns( column(s) )|Grouping Columns( column(s))|Statistics( )), Row Table( Analysis Columns( column(s) )|Grouping Columns( column(s))|Statistics( )) )

**Description :** Crée une table de données personnalisée des statistiques de résumé d&apos;une ou plusieurs variables. Les variables peuvent être groupées au sein d&apos;une ou de plusieurs colonnes de classification. Cela vous permet de construire le tableau récapitulatif en utilisant des opérations de glisser-déposer.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);

```

## Messages d'éléments

### Add

**Syntaxe :** add (&lt;Column Table | Row Table&gt;(table index), &lt;before first | &lt;before | after&gt;(&lt;analysis column | grouping column | statistic&gt;(&lt;operand name | index&gt;))&gt;, &lt;analysis column | grouping column | statistic&gt;(operand name)),

**Description :** Used with Modifier la table de données to add columns and statistics to an existing table. Also serves as an alias for Ajouter une table de données

#### Exemple 1

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Grouping Columns( :Type ),
			Analysis Columns( :"Sales ($M)"n, :Assets ),
			statistics( min, mean, max )
		)
	)
);
Wait( 0 );
obj << modify table(
	column table( 1 ),
	Add( After( Statistics( max ) ), Statistics( Range ) )
);

```

#### Exemple 2

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Grouping Columns( :Type ),
			Analysis Columns( :"Sales ($M)"n, :Assets ),
			statistics( min, mean, max )
		)
	)
);
Wait( 0 );
obj << modify table( column table( 1 ), Add( Before First, Statistics( Range ) ) );

```

### Add Table

**Syntaxe :** Add Table( &lt;Column Table( )&gt;, &lt;Row Table( )&gt; )

**Description :** Ajoute une table de données dans la fenêtre s&apos;il n&apos;y en a pas ou ajoute une table de données à l&apos;objet table de données existante.

#### Exemple 1

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Add Table( Column Table( Grouping Columns( :type ) ) );

```

#### Exemple 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Tabulate();
obj << Add Table( Column Table( Grouping Columns( :sex ) ) );
obj << Add table( row table( grouping column( :age ) ) );

```

### Aggregate Statistics

**Syntaxe :** Aggregate Statistics( column )

**Description :** Ajoute une colonne séparée pour chaque niveau de la colonne spécifiée ainsi qu&apos;une colonne de sommation à la table de données actuelle. Dans un script, le message Statistiques agrégées doit être inclus soit dans un message Table de données de colonnes, soit dans un message Table de données de lignes.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Analysis columns( :OZONE ), statistics( mean ) ),
		Row Table( Grouping Columns( :Region ), aggregate statistics( :Region ) )
	)
);

```

### Analysis Columns

**Syntaxe :** Analysis Columns( Column(s) )

**Description :** Ajoute les colonnes d&apos;analyse à la table de données active. Peut être utilisé avec les commandes Ajouter ou Modifier une table de données.

#### Exemple 1

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),
		Row Table( Grouping Columns( :Region ) )
	)
);

```

#### Exemple 2

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),
		Row Table( Grouping Columns( :Region ) )
	)
);
obj << modifytable( column table( 1 ), analysis columns( :CO ) );

```

### Change Item Label

**Syntaxe :** obj &lt;&lt; Change Item Label( Statistics( stat name, new string ) )

**Description :** Change l&apos;étiquette sur une zone de texte dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),
		Row Table( Grouping Columns( :Region ) )
	)
);
obj << Change Item Label( Statistics( Mean, "Average" ) );

```

### Columns by Categories

**Syntaxe :** Columns by Categories( column1, column2, ...) )

**Description :** Ajoute à la table de données un tableau croisé des noms de colonne et des catégories réunies pour des colonnes contenant des valeurs similaires.  Dans un script, le message Colonnes par catégories doit être inclus soit dans un message Table de données de colonnes, soit dans un message Table de données de lignes.

#### Exemple 1

```jsl

dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );
obj = dt << Tabulate(
	Add Table(
		Row Table( Columns by Categories( :Grades, :Sports, :Looks, :Money ) )
	)
);

```

#### Exemple 2

```jsl

dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );
obj = dt << Tabulate(
	Add Table( Row Table( Columns by Categories( :Grades, :Sports, :Looks ) ) )
);
obj << modify table( row table( 1 ), columns by categories( :Money ) );

```

### Delete

**Syntaxe :** delete( &lt;analysis columns | grouping columns | statistics&gt;(operand name, operand name, ...))

**Description :** Used with Modifier la table de données to remove columns and statistics from an existing table.

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Grouping Columns( :Type ),
			Analysis Columns( :"Sales ($M)"n, :Assets ),
			statistics( min, mean, max )
		)
	)
);
Wait( 0 );
obj << modify table( column table( 1 ), delete( analysis columns( :Assets ) ) );

```

### Display Column Width

**Syntaxe :** obj &lt;&lt; Display Column Width( Data Column( &lt;Column Table(n)&gt;, path ), &lt;width&gt; );obj &lt;&lt; Display Column Width( Row Label( &lt;Row Table(n)&gt;, path ), &lt;width&gt; )

**Description :** Définit ou renvoie la largeur d&apos;affichage d&apos;une colonne dans une table de données d&apos;un rapport tabulé. Path est une séquence d&apos;en-têtes de colonne entre guillemets qui trace le chemin d&apos;accès de la colonne. Width est la largeur d&apos;une colonne en pixels. Utilisez Data Column pour définir les colonnes dans le corps principal de la table ou Row Label pour les colonnes de la zone des étiquettes de ligne. S&apos;il y a plusieurs tables dans le rapport, utilisez Column Table(n) ou Row Table(n) pour spécifier à quelle table path s&apos;applique. Si width n&apos;est pas spécifié, cette option renvoie la largeur actuelle de la colonne spécifiée.

#### Exemple 1

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table(
			Grouping Columns( :sex, :marital status ),
			Analysis Columns( :age ),
			Statistics( Sum, "% of Total" )
		),
		Row Table( Grouping Columns( :type ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Display Column Width( Row Label( Row Table( 2 ), "country" ), 150 );

```

#### Exemple 2

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Tabulate(
	Set Format( Mean( :OZONE( 6, 4 ) ) ),
	Add Table(
		Column Table(
			Analysis Columns( :OZONE ),
			Statistics( Min, Max, Mean, std dev )
		),
		Row Table( Grouping Columns( :Region ) )
	)
);
stats = {"Min", "Max", "Mean", "Std Dev"};
ns = N Items( stats );
a = {};
For( i = 1, i <= ns, i++,
	a[i] = obj << Display Column Width( Data Column( "OZONE", stats[i] ) )
);
amax = Max( a );
For( i = 1, i <= ns, i++,
	obj << Display Column Width( Data Column( "OZONE", stats[i] ), amax )
);

```

#### Exemple 3

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table(
			Grouping Columns( :sex, :marital status ),
			Analysis Columns( :age ),
			Statistics( Sum, "% of Total" )
		),
		Row Table( Grouping Columns( :type ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Display Column Width( Row Label( Row Table( 2 ), "country" ) );

```

### Freq

**Syntaxe :** Freq( Column )

**Description :** Spécifier la colonne des fréquences à utiliser dans le calcul des statistiques

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Tabulate( Add Table( Row Table( Grouping Columns( :Causes ) ) ) );
Wait( 1 );
obj << Freq( :Count );

```

### Full Path Column Name

**Syntaxe :** obj &lt;&lt; Full Path Column Name( true | false )

**Description :** Si défini, le nom de colonne du tableau de sortie doit inclure le nom des colonnes de groupement

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Full Path Column Name( 1 );
obj << Make Into Data Table;

```

### Grouping Columns

**Syntaxe :** Grouping Columns( Column(s) )

**Description :** Ajoute les colonnes de groupement à la table de données active. Peut être utilisé avec les commandes Ajouter ou Modifier une table de données.

#### Exemple 1

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);

```

#### Exemple 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Tabulate();
obj << Add Table( Column Table( Grouping Columns( :sex ) ) );
obj << modify table( column table( 1 ), grouping column( :age ) );

```

### ID

**Syntaxe :** ID( Column )

**Description :** Permet de spécifier la colonne ID utilisée pour dénombrer les occurrences uniques.

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );
obj = dt << Tabulate(
	Set Format( Uniform Format( 10, 2 ) ),
	Add Table(
		Column Table(
			Statistics( Sum ),
			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),
			Pack(
				Analysis Columns( City MPG, Hwy MPG, Comb MPG ),
				Template( "^FIRST  (^OTHERS)", "/" )
			)
		),
		Row Table( Grouping Columns( :Mfr Name ) )
	)
);
Wait( 1 );
obj << ID( :Division );

```

### Ignore duplicate responses

**Syntaxe :** obj &lt;&lt; Ignore duplicate responses( Grouping Columns( column ), true | false )

**JMP Version ajoutée :** 19

### Ignore duplicates in multiple response columns

**Syntaxe :** obj &lt;&lt; Ignore duplicates in multiple response columns( state=0|1 )

**Description :** Ignores duplicate responses in multiple response columns. Each repeated response is treated as a single occurrence.

**JMP Version ajoutée :** 19

### Include missing for grouping columns

**Syntaxe :** obj &lt;&lt; Include missing for grouping columns( state=0|1 )

**Description :** Ajoute une colonne séparée contenant les dénombrements pour les valeurs manquantes, pour toutes colonnes de groupement de la table de données actuelle.

```jsl

dt = Open( "$SAMPLE_DATA/Cars.jmp" );
obj = dt << Tabulate(
	Add Table( Row Table( Grouping Columns( :Doors ) ) ),
	Include missing for grouping columns( 1 )
);

```

### Make Into Data Table

**Syntaxe :** obj &lt;&lt; Make Into Data Table( &lt;Invisible(bool) | Private(bool)&gt;, &lt;Output Table ( table name)&gt;, &lt;Full Path Column Name(bool)&gt; )

**Description :** Crée une nouvelle table de données à partir de la table de données créée à l’aide de la fonction de mise en tableau.

#### Exemple 1

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Make Into Data Table;

```

#### Exemple 2

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Make into Data Table( invisible( 1 ) );

```

#### Exemple 3

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Make into Data Table( Full Path Column Name( 1 ) );

```

### Max scroll locked columns

**Syntaxe :** obj &lt;&lt; Max scroll locked columns( number=3 )

**Description :** Set the maximum number of columns to be scroll locked. Either all or none of the row header columns will be locked. Actif par défaut.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Max Scroll Locked Columns( 1 );
obj << Make Into Data Table;

```

### Missing sum is zero

**Syntaxe :** obj &lt;&lt; Missing sum is zero( state=0|1 )

### Modify Table

**Syntaxe :** obj &lt;&lt; Modify Table( &lt;Column Table | Row Table&gt;(table index), ... )

**Description :** Modifies an existing table.

#### Exemple 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Tabulate();
obj << Add Table( Column Table( Grouping Columns( :sex ) ) );
obj << Add table( row table( grouping column( :age ) ) );
obj << Add Table( Column Table( Analysis Column( :height ) ) );
obj << Add Table( Column Table( Analysis Column( :Weight ) ) );
obj << Modify Table( Column Table( 2 ), statistics( min, max ) );
obj << Modify Table( Column Table( 2 ), grouping columns( :sex ) );
obj << Modify Table( Column Table( 2 ), Analysis Column( :Weight ) );
Wait( 1 );
obj << Modify Table( Column Table( 2 ), delete( Analysis Column( :Weight ) ) );
obj << Modify Table( Column Table( 2 ), delete( statistics( "sum" ) ) );

```

#### Exemple 2

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Grouping Columns( :Type ),
			Analysis Columns( :"Sales ($M)"n, :Assets ),
			statistics( min, mean, max )
		)
	)
);
Wait( 0 );
obj << modify table( column table( 1 ), delete( analysis columns( :Assets ) ) );

```

### Modify Table Option

**Syntaxe :** obj &lt;&lt; Modify Table Option

**Description :** Used with Modifier la table de données to modify table options in an existing table.

#### Exemple 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table( Analysis Columns( :height ), Statistics( Mean ) ),
		Row Table( Grouping Columns( :age, :sex ) )
	)
);
obj << Modify Table(
	Row Table( 1 ),
	Modify Table Option( Stack Grouping Columns( true ) )
);

```

#### Exemple 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table( Analysis Columns( :height ), Statistics( Mean ) ),
		Row Table( Grouping Columns( :age, :sex ), Stack Grouping Columns( 1 ) )
	)
);
obj << Modify Table(
	Row Table( 1 ),
	Modify Table Option( Change Stacked Group Label ),
	"new label"
);

```

### Move

**Syntaxe :** move (&lt;Column Table | Row Table&gt;(table index), &lt;analysis column | grouping column | statistic&gt;(&lt;operand name | index&gt;)), &lt;before first | &lt;before | after&gt;(&lt;analysis column | grouping column | statistic&gt;(&lt;operand name | index&gt;)&gt;)

**Description :** Used with Modifier la table de données to move columns and statistics in an existing table.

**JMP Version ajoutée :** 19

#### Exemple 1

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Grouping Columns( :Type ),
			Analysis Columns( :"Sales ($M)"n, :Assets ),
			statistics( min, mean, max )
		)
	)
);
Wait( 0 );
obj << modify table(
	column table( 1 ),
	move( column table( 1 ), Statistics( mean ) ),
	After( Statistics( max ) )
);

```

#### Exemple 2

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Grouping Columns( :Type ),
			Analysis Columns( :"Sales ($M)"n, :Assets ),
			statistics( min, mean, max )
		)
	)
);
Wait( 0 );
obj << modify table(
	row table( 1 ),
	move( column table( 1 ), Grouping Column( :Type ) ),
	before first
);

```

### Order By Count

**Syntaxe :** obj &lt;&lt; Order By Count( Grouping Columns( column ), true | false )

### Order by count of grouping columns

**Syntaxe :** obj &lt;&lt; Order by count of grouping columns( state=0|1 )

**Description :** Trie les niveaux des colonnes de groupement par dénombrements dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Cars.jmp" );
obj = dt << Tabulate( Add Table( Row Table( Grouping Columns( :Make ) ) ) );
obj << Order by Count of Grouping Columns( 1 );

```

### Pack

**Syntaxe :** obj &lt;&lt; Pack( &lt;Analysis columns | Statistics&gt;(operand name, ...), &lt;Template&gt; )

**Description :** Groupe plusieurs statistiques dans une seule colonne de la table de données. L&apos;option Template spécifie le formatage des éléments.

#### Exemple 1

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Statistics( Sum ),
			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),
			Pack(
				Analysis Columns( City MPG, Hwy MPG, Comb MPG ),
				Template( "^FIRST  (^OTHERS)", "/" )
			)
		),
		Row Table( Grouping Columns( :Mfr Name, :Engine ) )
	)
);

```

#### Exemple 2

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Statistics( Sum ),
			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG )
		),
		Row Table( Grouping Columns( :Mfr Name, :Engine ) )
	)
);
obj << Modify Table(
	Column Table( 1 ),
	Pack(
		Analysis Columns( City MPG, Hwy MPG, Comb MPG ),
		Template( "^FIRST  (^OTHERS)", "/" )
	)
);

```

### Page Column

**Syntaxe :** Page Column( Column )

**Description :** Spécifier la colonne des pages à utiliser pour configurer les pages du rapport

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Analysis Columns( :height, :weight ), Statistics( Mean ) ),
		Row Table( Grouping Columns( :age ) )
	)
);
Wait( 1 );
obj << page column( :sex( "F" ) );

```

### Plot Scale

**Syntaxe :** obj &lt;&lt; Plot Scale( min, max )

**Description :** Définit l&apos;échelle du diagramme en barres.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Show Chart( 1 );
Wait( 2 );
obj << Plot Scale( 0, 25 );

```

### Remove Column Label

**Syntaxe :** obj &lt;&lt; Remove Column Label( Grouping Columns( column ) )

**Description :** Supprime l&apos;étiquette de colonne spécifiée de la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :Region ) ),
		Row Table( Analysis Columns( :OZONE, :CO, :NO, :SO2 ), Statistics( Mean ) )
	)
);
Wait( 2 );
obj << Remove Column Label( Grouping Columns( :Region ) );

```

### Restore Column Label

**Syntaxe :** obj &lt;&lt; Restore Column Label( Grouping Columns( column ) )

**Description :** Restaure l&apos;étiquette de colonne spécifiée, précédemment supprimée, dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :Region ) ),
		Row Table( Analysis Columns( :OZONE, :CO, :NO, :SO2 ), Statistics( Mean ) )
	)
);
obj << Remove Column Label( Grouping Columns( :Region ) );
Wait( 2 );
obj << Restore Column Label( Grouping Columns( :Region ) );

```

### Retype

**Syntaxe :** Retype( &lt;Analysis Columns | Grouping Columns&gt;( operand name, ... ), &lt;Analysis Column | Gropuing Column&gt; )

**Description :** Used with Modifier la table de données to convert between analysis columns and grouping columns in an existing table.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table( Statistics( N ), Grouping Columns( :age ) ),
		Row Table( Grouping Columns( :sex ) )
	)
);
obj << Modify Table(
	Column Table( 1 ),
	Retype( Grouping Column( :age ) ),
	Analysis Column
);

```

### Save grouping as tags in data table export

**Syntaxe :** obj &lt;&lt; Save grouping as tags in data table export( state=0|1 )

**Description :** Sets if the grouping levels should be included in the data table as column tags. Actif par défaut.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Save grouping as tags in data table export( 0 );
obj << Make Into Data Table;

```

### Scroll lock row headers in data table export

**Syntaxe :** obj &lt;&lt; Scroll lock row headers in data table export( state=0|1 )

**Description :** Sets if the columns containing the row headers should be scroll locked. Actif par défaut.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Scroll lock row headers in data table export( 0 );
obj << Make Into Data Table;

```

### Set Format

**Syntaxe :** Set Format( statistic( Column( format ) )

**Description :** Définit le format d&apos;affichage des colonnes d&apos;analyse.

#### Exemple 1

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Tabulate(
	Set Format( Mean( :OZONE( 6, 4 ) ) ),
	Add Table(
		Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),
		Row Table( Grouping Columns( :Region ) )
	)
);

```

#### Exemple 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Tabulate(
	Set Format(
		Mean(
			:height( 10, 1 ),
			Analysis Column(
				Transform Column( "Log[height]", Formula( Log( :height ) ) ),
				Format( 10, "Best" )
			)
		),
		"% of Total"n(
			:height( 12, 2 ),
			Analysis Column(
				Transform Column( "Log[height]", Formula( Log( :height ) ) ),
				Format( 12, 2 )
			)
		)
	),
	Add Table(
		Column Table(
			Analysis Columns(
				:height,
				Transform Column( "Log[height]", Formula( Log( :height ) ) )
			),
			Statistics( Mean, "% of Total"n )
		),
		Row Table( Grouping Columns( :sex ) )
	)
);

```

### Show Chart

**Syntaxe :** obj &lt;&lt; Show Chart( state=0|1 )

**Description :** Affiche ou masque un diagramme en barres généré à partir de la table de données créée à l’aide de la fonction de mise en tableau.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Show Chart( 1 );

```

### Show Control

**Syntaxe :** obj &lt;&lt; Show Control( state=0|1 )

### Show Control Panel

**Syntaxe :** obj &lt;&lt; Show Control Panel( state=0|1 )

**Description :** Affiche ou masque le panneau de contrôle utilisé pour manipuler la table de données créée à l’aide de la fonction de mise en tableau. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Show Control Panel( 1 );

```

### Show Shading

**Syntaxe :** obj &lt;&lt; Show Shading( state=0|1 )

**Description :** Affiche ou masque des lignes alternativement ombrées et non-ombrées dans la table de données créée à l’aide de la fonction de mise en tableau. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Show Shading( 1 );

```

### Show Table

**Syntaxe :** obj &lt;&lt; Show Table( state=0|1 )

**Description :** Affiche ou masque la table de données créée à l’aide de la fonction de mise en tableau. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Show Table( 1 );

```

### Show Test Build Panel

**Syntaxe :** obj &lt;&lt; Show Test Build Panel( state=0|1 )

**Description :** Affiche ou masque le panneau contrôlant l&apos;échantillonnage pour une construction de test de la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Statistics( Mean, Std Dev ) ),
		Row Table( Analysis Columns( :ForSc, :SideSc, :CD3, :CD8, :CD4, :MCB ) )
	)
);
obj << Show Test Build Panel( 1 );

```

### Show Tooltip

**Syntaxe :** obj &lt;&lt; Show Tooltip( state=0|1 )

**Description :** Affiche ou masque les info-bulles visibles en passant au-dessus des zones de dépose et des menus de la sortie de l’option Mettre en tableau.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Show Tool Tip( 1 );

```

### Stack Grouping Columns

**Syntaxe :** Stack Grouping Columns(0 | 1)

**Description :** Empile les colonnes de regroupement en une seule colonne, en utilisant l&apos;indentation pour afficher la structure d&apos;imbrication.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Grouping Columns( :marital status ),
			Add Aggregate Statistics( :marital status ),
			Analysis Columns( :age ),
			Statistics( Min, Max )
		),
		Row Table(
			Grouping Columns( :sex, :country, :size ),
			Add Aggregate Statistics( :sex, :country, :size ),
			Stack Grouping Columns( 1 )
		)
	)
);

```

### Statistics

**Syntaxe :** Statistics( N|Mean|Std Dev|Min|Max|Range|% of Total|N Missing|N Categories|Sum|Sum Wgt|Variance|Std Err|CV|Median|Interquartile Range|Quantiles|Column %|Row %|All )

**Description :** Ajoute des statistiques à une colonne ou à une ligne de la table de données. Dans un script, le message Statistiques() se trouve à côté du message identificateur Colonnes d&apos;analyse, les deux étant imbriqués dans une commande Table de données de lignes() ou Table de données de colonnes ().

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Analysis Columns( :OZONE ), Statistics( Mean, Max ) ),
		Row Table( Grouping Columns( :Region ) )
	)
);

```

### Test Build

**Syntaxe :** obj &lt;&lt; Test Build( Sample Size( number ) )

**Description :** Affiche la table de données en utilisant un échantillon de test des données de taille number.

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Statistics( Mean, Std Dev ) ),
		Row Table( Analysis Columns( :ForSc, :SideSc, :CD3, :CD8, :CD4, :MCB ) )
	)
);
obj << Test Build( Sample Size( 100 ) );

```

### Test Data View

**Syntaxe :** obj &lt;&lt; Test Data View

**Description :** Affiche la table de données utilisée comme échantillon pour construire la table de données de test.

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Statistics( Mean, Std Dev ) ),
		Row Table( Analysis Columns( :ForSc, :SideSc, :CD3, :CD8, :CD4, :MCB ) )
	)
);
obj << Test Build( Sample Size( 100 ) );
obj << Test Data View;

```

### Undo

**Syntaxe :** obj &lt;&lt; Undo

**Description :** Annule l&apos;effet de la dernière opération effectuée sur la table de données actuelle.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Add Table( Column Table( Grouping Columns( :type ) ) );
Wait( 2 );
obj << undo;

```

### Uniform plot scale

**Syntaxe :** obj &lt;&lt; Uniform plot scale( state=0|1 )

**Description :** Définit une même échelle pour toutes les sous-catégories représentées sur le diagramme en barres. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Show Chart( 1 );
Wait( 2 );
obj << Uniform Plot Scale( 1 );

```

### Unpack

**Syntaxe :** obj &lt;&lt; Unpack( &lt;Analysis columns | Statistics&gt;(operand name, ...) )

**Description :** Unpacks a packed set of columns.

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Statistics( Sum ),
			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),
			Pack(
				Analysis Columns( City MPG, Hwy MPG, Comb MPG ),
				Template( "^FIRST  (^OTHERS)", "/" )
			)
		),
		Row Table( Grouping Columns( :Mfr Name, :Engine ) )
	)
);
obj << Modify Table( Column Table( 1 ), Unpack( Analysis Columns( :City MPG ) ) );

```

### Weight

**Syntaxe :** Weight( Column )

**Description :** Spécifier la colonne de pondération à utiliser dans le calcul des statistiques

```jsl

dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table( Analysis Columns( :Horsepower ), Statistics( Mean ) ),
		Row Table( Grouping Columns( :Type ) )
	)
);
Wait( 1 );
obj << Weight( :Weight );

```

## Messages d'éléments partagés

### Action

**Syntaxe :** obj &lt;&lt; Action

**Description :** Trappe tout usage dans une plate-forme pour y insérer les expressions à calculer. Définit provisoirement les contextes des boîtes d’affichage et des tables de données dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Apply Preset

**Syntaxe :** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description :** Appliquez une préconfiguration créée précédemment à l&apos;objet, ce qui met à jour les options et les personnalisations pour correspondre aux paramètres enregistrés.

**JMP Version ajoutée :** 18

#### Préconfiguration anonyme

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

#### Rechercher dans les dossiers

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Rechercher par nom

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

### Automatic Recalc

**Syntaxe :** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Description :** Refait l&apos;analyse automatiquement pour l&apos;exclusion et les modifications de données. Si l&apos;option Nouveau calcul automatique est activée, envisagez d&apos;utiliser les commandes Wait(0) pour vous assurer que l&apos;exclusion et les modifications de données sont prises en compte avant le recalcul.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Column Switcher

**Syntaxe :** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description :** Ajoute un panneau de contrôle pour changer les variables de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Copy Script

**Syntaxe :** obj &lt;&lt; Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Copy Script;

```

### Data Table Window

**Syntaxe :** obj &lt;&lt; Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Data Table Window;

```

### Get By Levels

**Syntaxe :** obj &lt;&lt; Get By Levels

**Description :** Renvoie un tableau associatif de mappage des colonnes par groupe à leurs valeurs.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get Container

**Syntaxe :** obj &lt;&lt; Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

#### Général

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plate-forme avec filtre

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container",
			(gb << Get Container) << Get Picture
		)
	)
);

```

### Get Data Table

**Syntaxe :** obj &lt;&lt; Get Data Table

**Description :** Renvoie une référence à la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Script

**Syntaxe :** obj &lt;&lt; Get Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntaxe :** obj &lt;&lt; Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntaxe :** obj &lt;&lt; Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Syntaxe :** obj &lt;&lt; Get Web Support

**Description :** Renvoyer un nombre indiquant le niveau de support HTML interactif pour l&apos;objet d&apos;affichage. 1 signifie que tout ou partie des éléments sont pris en charge. 0 signifie qu&apos;il n&apos;y a aucun support.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Syntaxe :** obj &lt;&lt; Get Where Expr

**Description :** Renvoie l&apos;expression Where pour le sous-ensemble de données, si la plate-forme a été lancée avec By() ou Where(). Sinon, renvoie la Empty()

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate(
	X( :height ),
	Y( :weight ),
	Where( :age < 14 & :height > 60 )
);
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Syntaxe :** Ignore Platform Preferences( state=0|1 )

**Description :** Ignore les paramètres actuels des préférences de la plate-forme. Le message est ignoré lorsqu&apos;il est envoyé à la plate-forme après la création.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Local Data Filter

**Syntaxe :** obj &lt;&lt; Local Data Filter

**Description :** Permet de filtrer les données locales, dans la plate-forme concernée, par groupes ou étendues spécifiques

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

### New JSL Preset

**Syntaxe :** New JSL Preset( preset )

**Description :** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

### New Preset

**Syntaxe :** obj = New Preset()

**Description :** Créez une préconfiguration anonyme représentant les options et les personnalisations appliquées à l&apos;objet. Cet objet peut être passé à Apply Preset pour copier les paramètres vers un autre objet du même type.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Paste Local Data Filter

**Syntaxe :** obj &lt;&lt; Paste Local Data Filter

**Description :** Appliquer le filtre des données locales du presse-papiers au rapport actif.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

### Redo Analysis

**Syntaxe :** obj &lt;&lt; Redo Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Redo Analysis;

```

### Relaunch Analysis

**Syntaxe :** obj &lt;&lt; Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Relaunch Analysis;

```

### Remove Column Switcher

**Syntaxe :** obj &lt;&lt; Remove Column Switcher

**Description :** Supprime le sélecteur de colonne le plus récent ajouté à la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

### Remove Local Data Filter

**Syntaxe :** obj &lt;&lt; Remove Local Data Filter

**Description :** Permet de supprimer un filtre de données locales créé précédemment et rétablit toutes les valeurs des données directement dans la table de données utilisée dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

### Render Preset

**Syntaxe :** Render Preset( preset )

**Description :** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Syntaxe :** obj &lt;&lt; Report;Report( obj )

**Description :** Renvoie une référence à l’objet rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntaxe :** obj &lt;&lt; Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Report View( "Summary" );

```

### Save Script for All Objects

**Syntaxe :** obj &lt;&lt; Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntaxe :** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

#### Exemple 1

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

#### Exemple 2

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntaxe :** obj &lt;&lt; Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Save Script to Journal;

```

### Save Script to Report

**Syntaxe :** obj &lt;&lt; Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntaxe :** obj &lt;&lt; Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Save Script to Script Window;

```

### SendToByGroup

**Syntaxe :** SendToByGroup( {":Column == level"}, command );

**Description :** Envoie les commandes de plate-forme ou de personnalisation d’affichage à chaque niveau d’un « par groupe ».

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

### SendToEmbeddedScriptable

**Syntaxe :** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description :** SendToEmbeddedScriptable rétablit les paramètres des objets scriptables intégrés.

```jsl


dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers",
			"Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value(
				Time( 6000, Lock( 0 ), Show( 1 ) )
			)}
		)
	)
);

```

### SendToReport

**Syntaxe :** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description :** La commande “Send To Report” est utilisée en tandem avec la commande “Dispatch” pour personnaliser l’aspect du rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport(
		Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} )
	)
);

```

### Sync to Data Table Changes

**Syntaxe :** obj &lt;&lt; Sync to Data Table Changes

**Description :** Sync avec l&apos;exclusion et les modifications apportées aux données.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Title

**Syntaxe :** obj &lt;&lt; Title( "new title" )

**Description :** Définit le titre de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Title( "My Platform" );

```

### Top Report

**Syntaxe :** obj &lt;&lt; Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### View Web XML

**Syntaxe :** obj &lt;&lt; View Web XML

**Description :** Renvoie le code XML utilisé pour créer le rapport au format HTML interactif.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

