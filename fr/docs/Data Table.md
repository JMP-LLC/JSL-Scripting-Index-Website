# Data Table



## Column Scripting

### Add Column Properties

**Syntaxe :** obj << Add Column Properties

**Description :** Ajoute les propriétés à la colonne sélectionnée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Add Column Properties( List Check( {17, 16, 15, 14, 13, 12} ) );

```

### Add From Row States

**Syntaxe :** obj << Add From Row States

**Description :** Met à jour une colonne d’état de ligne en fonction de toutes les modifications d’état des lignes actuellement utilisées, à condition qu’il ne s’agisse pas de l’état par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death.jmp" );
dt << New Column( "Row State Col", Row State, Copy from Row States );
dt << Select Rows( 1 );
dt << Select Rows( 5 );
dt << Exclude();
col = Column( "Row State Col" );
col << Add From Row States();

```

### Add To Row States

**Syntaxe :** obj << Add To Row States

**Description :** Copie toutes les valeurs d&apos;état de ligne d’une colonne, qui ne correspondent pas à l’état par défaut, dans l’état de la ligne actuellement utilisée dans la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Pickles.jmp" );
col = Column( "Time Marker" );
col << Copy To Row States();
col[5] = Color State( "Red" );
Wait( 2 );
col << Add To Row States();

```

### Codes to Labels

**Syntaxe :** :col << Codes To Labels(<AssociativeArray>|<ListOfAssignments>)

**Description :** Créer une colonne de valeurs de type caractère à l&apos;aide des étiquettes de valeur correspondant aux codes d&apos;origine.

**JMP Version ajoutée :** 17

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
:age << Value Labels(
	{12 = "12!", 13 = "13!", 14 = "14!", 15 = "15!", 16 = "16!", 17 = "17!"}
);
:age << Codes to Labels;

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
:sex << Labels to Codes( ["F" => 1, "M" => 2] );
:sex << Codes To Labels( [1 => "Female", 2 => "Male"] );

```

**Exemple 3**

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
:sex << Labels to Codes( ["F" => 1.5, "M" => 2.5] );
:sex << Codes To Labels( {1.5 = "Female", 2.5 = "Male"} );

```

### Color Cell by Value

**Syntaxe :** obj << Color Cell by Value( state=0|1 )

**Description :** Modifie la couleur d’affichage des cellules dans la colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Set Property(
	"Value Colors",
	{12 = -13977430, 13 = -3780930, 14 = -4157407, 15 = -13596965, 16 = -2210961, 17
	 = -10562523}
);
Wait( 1 );
:Age << Color Cell by Value( 1 );

```

### Color Cells

**Syntaxe :** obj << Color Cells( color, <row | { row1, row2, ...} > )

**Description :** Colore les cellules dans la couleur spécifiée. Si les lignes ne sont pas données, la même couleur est appliquée à toute la colonne.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Color Cells( "Red" );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
a = {1, 3, 5};
:Age << Color Cells( "Red", a );

```

**Exemple 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
a = {1, 3, 5};
b = {2, 4, 6};
:height << color cells( {{"Red", a}, {"blue", b}} );

```

### Compact

**Syntaxe :** :col << Compact( <1|0> )

**Description :** Modifie les fonctions internes d&apos;une colonne de caractères de sorte qu&apos;elle ne stocke qu&apos;une copie de chaque valeur, ce qui permet d&apos;économiser de la mémoire et d&apos;accélérer certaines opérations. L&apos;option facultative Enregistrer le format contrôle le format dans lequel la colonne est enregistrée. Le format compact est plus petit et plus rapide à charger, mais la table ne peut pas être ouverte dans JMP 17 et les versions antérieures. Le format par défaut utilise la préférence d&apos;enregistrement de format.

**JMP Version ajoutée :** 18

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Air Traffic.jmp" );
:Airline << Compact();

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Air Traffic.jmp" );
:Airline << Compact();
:Airline << Get Compact;

```

### Convert to Table Column

**Syntaxe :** obj << Convert to Table Column

**Description :** Ajoute la colonne de transformation à la table de données.

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Transform Column( "New Col", Formula( 1 ) );
:NewCol << Convert to Table Column();

```

### Copy from Row States

**Syntaxe :** obj << Copy from Row States

**Description :** Copie toutes les valeurs d&apos;état de ligne actuellement utilisées dans la table de données dans une colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death.jmp" );
dt << New Column( "Row State Col", Row State, Copy from Row States );

```

### Copy to Row States

**Syntaxe :** obj << Copy to Row States

**Description :** Copie toutes les valeurs d&apos;état de ligne d’une colonne dans l’état de la ligne actuellement utilisée dans la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Pickles.jmp" );
col = Column( "Time Marker" );
Wait( 2 );
col << Copy To Row States();

```

### Data Type

**Syntaxe :** obj << Data Type(  "Numeric"|"Character"|"Expression"|"Row State", <Format("format string")>, <Input Format("format string")>, <1|2|4>, < <<Fail On Conversion Error >, < <<Return Failed Rows > )

**Description :** Définit le type de données de la colonne. À l&apos;aide des arguments facultatifs, vous pouvez également définir le format, le format d&apos;entrée et la largeur en octets si la colonne est numérique. L&apos;erreur Échec à la conversion abandonne la modification du type de données si des valeurs n&apos;ont pas pu être converties. C&apos;est particulièrement utile lors de la conversion d&apos;une colonne de type caractère en une colonne numérique. Renvoyer les lignes échouées renvoie une liste contenant les indices des lignes dont la conversion a échoué.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Time",
	"Character",
	"Nominal",
	Set Values( {"13:32", "20:10", "20:12", "14:56"} )
);
Wait( 2 );
dt:Time << Set Data Type( "Numeric", Format( "h:m", 12 ), Input Format( "h:m" ) );
dt:Time << Set Modeling Type( "Continuous" );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
dt:Age << Set Data Type( "Character" );
dt:Height << Set Data Type( "Numeric", 2 );

```

**Exemple 3**

```js

Names Default To Here( 1 );
dt = New Table( "My Table",
	New Column( "col1",
		Character,
		"Nominal",
		Set Values( {"123", "456", "abc", "789", "", "def"} )
	)
);
r = dt:col1 << Set Data Type(
	"Numeric", <<Fail On Conversion Error, <<Return Failed Rows
);
Show( r );

```

**Exemple 4**

```js

Names Default To Here( 1 );
dt = New Table( "My Table",
	New Column( "col1",
		Character,
		"Nominal",
		Set Values( {"123", "456", "abc", "789", "", "def"} )
	)
);
r = dt:col1 << Set Data Type( "Numeric", <<Return Failed Rows );
Show( r );

```

### Delete Formula

**Syntaxe :** obj << Delete Formula

**Description :** Supprime toutes les formules de la colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bank Loan.jmp" );
:Time << Delete Formula;

```

### Delete Property

**Syntaxe :** obj << Delete Property( property name )

**Description :** Supprime la propriété nommée de la colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bank Loan.jmp" );
:Time << Delete Property( "Spec Limits" );

```

### Eval Formula

**Syntaxe :** obj << Eval Formula

**Description :** Évalue la formule dans la colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( "Ratio" );
col << Set Formula( :Height / :Weight );
col << Eval Formula;

```

### Format

**Syntaxe :** obj << Format( "Best|Fixed Dec...", <width>, <dec>, <"Use Thousands Separator">  )

obj << Format( "mdy|ddmmyy|Long Date...", width )

obj << Format( "Format Pattern", pattern )

obj << Format("Currency", <Country symbol>, <width>, <"Use Thousands Separator"> ) 

obj << Format("Use Thousands Separator" )

**Description :** Définit le format utilisé pour l&apos;affichage des données dans la colonne. Tous les formats disponibles figurent sous le champ format de la boîte de dialogue Informations sur la colonne.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Height << Format( "Fixed Dec", 6, 3 );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/XYZ Stock Averages (plots).jmp" );
:Date << Format( "ddMonyyyy", 9 );
:DJI High << Format( "Currency" );
:DJI Close << Format( "best", "Use Thousands Separator", 10, 0 );
:DJI Low << Format( "Fixed Dec", "Use Thousands Separator", 10, 2 );

```

**Exemple 3**

```js

Names Default To Here( 1 );
dt = New Table( "hour24_times",
	Add Rows( 3 ),
	New Column( "time",
		Continuous,
		Format( "Format Pattern", "<hh24><:><mm><:><ss>" ),
		Set Values( {"01:23:45", "18:19:20", "23:45:01"} )
	)
);

```

### Formula

**Syntaxe :** obj << Set Formula( formula ) 

obj << Formula( formula )

**Description :** Définit la formule dans la colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( "Ratio" );
col << Set Formula( :Height / :Weight );

```

### Get Column Properties

**Syntaxe :** obj << Get Column Properties

**Description :** Copie toutes les propriétés définies dans les colonnes sélectionnées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
:HARDNESS << Get Column Properties();

```

### Get Compact

**Syntaxe :** obj << Get Compact

**Description :** Est un ensemble compact sur la colonne

**JMP Version ajoutée :** 18

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Air Traffic.jmp" );
Show( :Airline << Get Compact );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Air Traffic.jmp" );
:Airline << Compact();
Show( :Airline << Get Compact );

```

### Get Data Table

**Syntaxe :** obj << Get Data Table

**Description :** Obtient la table de données de la colonne.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = Column( dt1, "Age" );
Show( c << Get Name, c << Get Data Table );

```

### Get Data Type

**Syntaxe :** obj << Get Data Type( <"English">  )

**Description :** Renvoie le type de donnée de la colonne. Si le mot-clé « Anglais » n’est pas spécifié, le type de donnée est renvoyé dans la langue d’exécution de JMP.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
which = dt:Age << Get Data Type;
Show( which );

```

### Get Data Type Length

**Syntaxe :** obj << Get Data Type Length( <English> )

**Description :** Renvoie le type et la longueur des données de la colonne. Si, comme pour la plupart des colonnes de type caractère, la longueur des données n&apos;est pas fixe, seul le type des données sera renvoyé.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
which = dt:Age << Get Data Type Length;
Show( which );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = New Table( "Little Class",
	Add Rows( 3 ),
	New Column( "name",
		Character( 8 ),
		Nominal,
		Set Values( {"KATIE", "CAROL", "MARTHA"} )
	),
	New Column( "Age", Numeric( 2 ), Set Values( [12, 14, 16] ) )
);
nameTypeLength = dt:Name << Get Data Type Length;
ageTypeLength = dt:Age << Get Data Type Length;
Show( nameTypeLength, ageTypeLength );

```

### Get Display Width

**Syntaxe :** obj << Get Display Width

**Description :** Obtenir la largeur d&apos;affichage de la colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 0 );
w = :Height << Get Display Width;

```

### Get Excluded

**Syntaxe :** obj << Get Excluded

**Description :** Renvoie 1 si la colonne est exclue.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = :Weight << Get excluded;
Show( s );

```

### Get Field Width

**Syntaxe :** obj << Get Field Width

**Description :** Renvoie la largeur du champ utilisé pour l’affichage des données dans la colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
width = :Height << Get Field Width;
Show( width );

```

### Get Format

**Syntaxe :** obj << Get Format

**Description :** Renvoie le format de la colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
f = :Height << Get Format;
Show( f );

```

### Get Formula

**Syntaxe :** obj << Get Formula

**Description :** Renvoie la formule dans la colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( "Ratio" );
col << Set Formula( :Height / :Weight );
col << Eval Formula;
result = col << Get Formula;
Show( result );

```

### Get Group Name

**Syntaxe :** obj << Get Group Name

**Description :** Renvoyez le nom du groupe ou le chemin du groupe contenant cette colonne, le cas échéant.

**JMP Version ajoutée :** 19

**Groupe imbriqué**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Group Columns( "XYZ", :sex, 3 );
dt << Group Columns( Path( "XYZ", "Measures" ), :height, 2 );
Show( :height << Get Group Name );

```

**Groupe simple**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Group Columns( :height, 2 );
Show( :height << Get Group Name );

```

### Get Header Background Color

**Syntaxe :** obj << Get Header Background Color

**Description :** Obtenir la couleur d&apos;en-tête

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Background Color( "Light Red" );
Show( :height << Get Header Background Color );

```

### Get Header Chart Type

**Syntaxe :** obj << Get Header Chart Type

**Description :** Obtient le type de graphique affiché dans l&apos;en-tête de colonne de la table de données.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Show( :height << Get Header Chart Type );

```

### Get Header Text Color

**Syntaxe :** obj << Get Header Text Color

**Description :** Obtenir la couleur du texte d&apos;en-tête

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Text Color( "Dark Purple" );
Show( :height << Get Header Text Color );

```

### Get Hidden

**Syntaxe :** obj << Get Hidden

**Description :** Renvoie 1 si la colonne est masquée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = :Weight << Get hidden;
Show( s );

```

### Get Initial Data

**Syntaxe :** obj << Get Initial Data

**Description :** Obtenir la valeur ou l&apos;expression utilisée pour initialiser les données de la colonne.

```js

Names Default To Here( 1 );
dt = New Table( "MyDt" );
dt << Add Rows( 5 );
Column( dt, 1 ) << set initial data( Log( 1 ) );
Column( dt, 1 ) << get initial data;

```

### Get Input Format

**Syntaxe :** obj << Get Input Format

**Description :** Renvoie le format utilisé pour la saisie et l’enregistrement des données de la colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
f = :Date << Get Input Format;
Show( f );

```

### Get Labeled

**Syntaxe :** obj << Get Labeled

**Description :** Renvoie 1 si la colonne est étiquetée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = :Weight << Get labeled;
Show( s );

```

### Get List Check

**Syntaxe :** obj << Get List Check

**Description :** Renvoie la vérification de liste, si celle-ci a été définie dans la colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Movies.jmp" );
prop = :Type << Get List Check;
Show( prop );

```

### Get Lock

**Syntaxe :** obj << Get Lock

**Description :** Renvoie la valeur Vrai si une colonne est verrouillée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
lock = :Prin1 << Get Lock;
Show( lock );

```

### Get Modeling Type

**Syntaxe :** obj << Get Modeling Type( <"English">  )

**Description :** Renvoie le type de modélisation de la colonne. Si le mot-clé « Anglais » n’est pas spécifié, le type de modélisation est renvoyé dans la langue d’exécution de JMP.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
which = :Age << Get Modeling Type;
Show( which );

```

### Get Name

**Syntaxe :** obj << Get Name

**Description :** Renvoie le nom de la colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col name = Column( 4 ) << Get Name;
Show( col name );

```

### Get Properties List

**Syntaxe :** obj << Get Properties List

**Description :** Obtenir la liste des noms de toutes les propriétés de cette colonne

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
:HARDNESS << Get Properties List();

```

### Get Property

**Syntaxe :** obj << Get Property( Notes| Range Check| List Check| Missing Value Codes| Value Labels| Value Scores | Value Order | Value Colors| Color Gradient| Axis| Units| Response Limits| Design Role| Coding| Mixture| Factor Changes | Spec Limits| Control Limits| Process Screening | Sigma| Process Capability Distribution| MSA | Distribution | Time Frequency|  Map Role| Super Categories | Multiple Response | Target Level | Control Level| Profit Matrix | Expression Role | Event Handler | Link ID | Link Reference | Next In Hierarchy )

**Description :** Renvoie des propriétés spécifiques, si celles-ci ont été définies dans la colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bank Loan.jmp" );
prop = :Credit Check << Get Property( "Axis" );
Show( prop );

```

### Get Range Check

**Syntaxe :** obj << Get Range Check

**Description :** Renvoie la vérification de l&apos;étendue, si celle-ci a été définie dans la colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Height << Range Check( LE LT( 48, 75 ) );
check = :Height << Get Range Check;
Show( check );

```

### Get Role

**Syntaxe :** obj << Get Role( <"English">  )

**Description :** Renvoie le rôle de la colonne. Si le mot-clé « Anglais » n’est pas spécifié, le rôle est renvoyé dans la langue d’exécution de JMP.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
which = :Count << Get Role();
Show( which );

```

### Get Script

**Syntaxe :** obj << Get Script

**Description :** Renvoie le script pour recréer la colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = :Age << Get Script;
Show( s );

```

### Get Scroll Locked

**Syntaxe :** obj << Get Scroll Locked

**Description :** Renvoie 1 si le défilement de la colonne est verrouillé.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = :Weight << Get Scroll locked;
Show( s );

```

### Get Selected

**Syntaxe :** obj << Get Selected

**Description :** Renvoie 1 si la colonne est sélectionnée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = :Weight << Get Selected;
Show( s );

```

### Get Stored Values

**Syntaxe :** obj << Get Stored Values

**Description :** Renvoie les valeurs dans les colonnes sans la conversion des codes de valeurs manquantes

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Height << Set Property( "Missing Value Codes", 65 );
valuesMatrix = :Height << Get Stored Values;
Show( valuesMatrix );
valuesList = :Height << GetStoredValues(
	Format(/* a numeric column will be list of character items if a format is supplied, see format function */
		"Currency",
		"EUR",
		2,
		<<use locale(
			0 /* ignore locale and use period for decimal.  the default is 1: use the locale. */
		)
	)
);
Show( valuesList );

```

### Get Use Value Labels

**Syntaxe :** obj << Get Use Value Labels

**Description :** Renvoie l’état de l’indicateur Utiliser les étiquettes de valeur.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
flag = :Color << Get Use Value Labels;
Show( flag );

```

### Get Value Labels

**Syntaxe :** obj << Get Value Labels

**Description :** Renvoie les étiquettes de valeur, si celles-ci ont été définies dans la colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
values = :Color << Get Value Labels;
Show( values );

```

### Get Values

**Syntaxe :** obj << Get Values

**Description :** Renvoie les valeurs de la colonne.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
valuesMatrix = :Height << Get Values;
Show( valuesMatrix );
valuesList = :Height << GetValues(
	Format(/* a numeric column will be list of character items if a format is supplied, see format function */
		"Currency",
		"EUR",
		2,
		<<use locale(
			0 /* ignore locale and use period for decimal.  the default is 1: use the locale. */
		)
	)
);
Show( valuesList );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Height << Set Property( "Missing Value Codes", 65 );
valuesMatrix = :Height << Get Values;
Show( valuesMatrix );
valuesList = :Height << GetValues(
	Format(/* a numeric column will be list of character items if a format is supplied, see format function */
		"Currency",
		"EUR",
		2,
		<<use locale(
			0 /* ignore locale and use period for decimal.  the default is 1: use the locale. */
		)
	)
);
Show( valuesList );

```

### Ignore Errors

**Syntaxe :** obj << Ignore Errors( state=0|1 )

**Description :** Définir l&apos;alerte de telle sorte que les erreurs soient ignorées lorsqu&apos;une formule de colonne est évaluée

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( "Ratio" );
col << Set Formula( :Height / :Weight );
col << ignore errors( true );

```

### Input Format

**Syntaxe :** obj << Input Format( format )

obj << Input Format( "Format Pattern", pattern )

**Description :** Définit le format utilisé pour la saisie et l’enregistrement des données de la colonne. Ceci sert souvent pour les formats de date et heure.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
:Date << Input Format( "ddmmyyyy" );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = New Table( "duration_table",
	Add Rows( 3 ),
	New Column( "durations",
		Continuous,
		Format( "Format Pattern", "<Hour><:><mm><:><ss>" ),
		Input Format( "Format Pattern", "<Hour>h <mm>m <ss>s" ),
		Set Values( {"65h 43m 21s", "12h 34m 56s", "4h 32m 10s"} )
	)
);

```

### Is Transform Column

**Syntaxe :** obj << Is Transform Column

**Description :** Renvoie 1 si la colonne est une colonne de transformation, 0 dans le cas contraire.

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Is Transform Column();

```

### IsTransformedOnSASExport

**Syntaxe :** obj << IsTransformedOnSASExport

**Description :** Renvoie la valeur Vrai si les données de la table SAS résultante pour la colonne seront modifiées lors de l’exportation vers SAS. Remarque : ceci s’applique uniquement aux colonnes de dates, car les dates sont enregistrées sous des formats différents dans SAS et dans JMP.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
flag = :Date << Is Transformed On SAS Export;
Show( flag );

```

### Labels to Codes

**Syntaxe :** :col << Labels to Codes(<AssociativeArray>|<ListOfAssignments>)

**Description :** Créer une colonne de codes numériques avec les étiquettes de valeur correspondant aux valeurs de type caractère d&apos;origine.

**JMP Version ajoutée :** 17

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
:sex << Labels to Codes;

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
:sex << Labels to Codes( ["F" => 10, "M" => 20] );

```

**Exemple 3**

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
:sex << Labels to Codes( {"F" = 10, "M" = 20} );

```

### Lock

**Syntaxe :** obj << Lock

**Description :** Verrouille toute modification ultérieure de la colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Lock( 1 );

```

### Preselect Role

**Syntaxe :** obj << Preselect Role( "Aucun rôle"|"X"|"Y"|"Pondération"|"Fréquence"|"Validation" )

**Description :** Attribue un rôle pré-sélectionné à la colonne de la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Preselect Role( "Y" );

```

### Remove Value Labels

**Syntaxe :** obj << Remove Value Labels

**Description :** Supprime toutes les étiquettes de valeur définies dans la colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
:Color << Remove Value Labels;

```

### Reset Transform

**Syntaxe :** obj << Reset Transform

**Description :** Supprime les données en cache pour la colonne de transformation. L&apos;accès aux données de la colonne recréera le cache. Utiliser cette option pour réduire la mémoire ou permettre un nouveau calcul si la formule dépend d&apos;informations externes.

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
global:a = 2;
dt << Transform Column( "sqrt[height]", Formula( global:a * Sqrt( :height ) ) );
Show( :"sqrt[height]"n[1] );
global:a = 3;
:"sqrt[height]"n << Reset Transform();
Show( :"sqrt[height]"n[1] );

```

### Set Data Type

**Syntaxe :** obj << Set Data Type(  "Numeric"|"Character"|"Expression"|"Row State", <Format("format string")>, <Input Format("format string")>, <1|2|4>, < <<Fail On Conversion Error >, < <<Return Failed Rows > )

**Description :** Définit le type de données de la colonne. À l&apos;aide des arguments facultatifs, vous pouvez également définir le format, le format d&apos;entrée et la largeur en octets si la colonne est numérique. L&apos;erreur Échec à la conversion abandonne la modification du type de données si des valeurs n&apos;ont pas pu être converties. C&apos;est particulièrement utile lors de la conversion d&apos;une colonne de type caractère en une colonne numérique. Renvoyer les lignes échouées renvoie une liste contenant les indices des lignes dont la conversion a échoué.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Time",
	"Character",
	"Nominal",
	Set Values( {"13:32", "20:10", "20:12", "14:56"} )
);
Wait( 2 );
dt:Time << Set Data Type( "Numeric", Format( "h:m", 12 ), Input Format( "h:m" ) );
dt:Time << Set Modeling Type( "Continuous" );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
dt:Age << Set Data Type( "Character" );
dt:Height << Set Data Type( "Numeric", 2 );

```

**Exemple 3**

```js

Names Default To Here( 1 );
dt = New Table( "My Table",
	New Column( "col1",
		Character,
		"Nominal",
		Set Values( {"123", "456", "abc", "789", "", "def"} )
	)
);
r = dt:col1 << Set Data Type(
	"Numeric", <<Fail On Conversion Error, <<Return Failed Rows
);
Show( r );

```

**Exemple 4**

```js

Names Default To Here( 1 );
dt = New Table( "My Table",
	New Column( "col1",
		Character,
		"Nominal",
		Set Values( {"123", "456", "abc", "789", "", "def"} )
	)
);
r = dt:col1 << Set Data Type( "Numeric", <<Return Failed Rows );
Show( r );

```

### Set Display Width

**Syntaxe :** obj << Set Display Width( number )

**Description :** Modifier la largeur d&apos;affichage de la colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 0 );
w = :Height << Get Display Width;
:Height << Set Display Width( 2 * w );

```

### Set Each Value

**Syntaxe :** obj << Set Each Value( number )

**Description :** Définit toutes les valeurs d’une colonne à une valeur constante.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "X" );
dt:X << Set Each Value( 5 );

```

### Set Excluded

**Syntaxe :** obj << Set Excluded

**Description :** Exclue la colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Set excluded;

```

### Set Field Width

**Syntaxe :** obj << Set Field Width( number )

**Description :** Définit la largeur du champ utilisé pour l’affichage des données dans la colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Height << Set Field Width( 20 );

```

### Set Formula

**Syntaxe :** obj << Set Formula( formula ) 

obj << Formula( formula )

**Description :** Définit la formule dans la colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( "Ratio" );
col << Set Formula( :Height / :Weight );

```

### Set Header Background Color

**Syntaxe :** obj << Set Header Background Color

**Description :** Définissez la couleur d&apos;en-tête. Définir sur « None » pour utiliser la couleur par défaut

**JMP Version ajoutée :** 18

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Background Color( "Light Red" );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Background Color( {250, 200, 150} );

```

### Set Header Chart Type

**Syntaxe :** obj << Set Header Chart Type

**Description :** Définit le type de graphique à afficher dans l&apos;en-tête de colonne de la table de données.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Chart Type( "Run Chart" );

```

### Set Header Text Color

**Syntaxe :** obj << Set Header Text Color

**Description :** Définissez la couleur du texte d&apos;en-tête. Définir sur « None » pour utiliser la couleur par défaut

**JMP Version ajoutée :** 18

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Text Color( "Dark Purple" );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Text Color( {100, 50, 100} );

```

### Set Hidden

**Syntaxe :** obj << Set Hidden

**Description :** Masque la colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Set hidden;

```

### Set Initial Data

**Syntaxe :** obj << Set Initial Data

**Description :** Initialiser les données de la colonne avec n&apos;importe quelle constante, ou une expression simple.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = New Table( "MyDt", New Column(), New Column() );
dt << Add Rows( 5 );
Column( dt, 1 ) << set initial data( Today() );
Column( dt, 2 ) << set initial data( 99 );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = New Table( "MyDt" );
dt << Add Rows( 5 );
Column( dt, 1 ) << set initial data( Log( 1 ) );

```

### Set Labeled

**Syntaxe :** obj << Set Labeled

**Description :** Utilise la valeur des données de la colonne pour l&apos;étiqueter.

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Set labeled;

```

### Set Modeling Type

**Syntaxe :** obj << Set Modeling Type( "Aucun(e)"|"Continu"|"Ordinal"|"Nominal"|"État de ligne"|"Réponses multiples"|"Texte non structuré"|"Vecteur" )

**Description :** Définit le type de modélisation affecté à la colonne de la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Set Modeling Type( "Continuous" );

```

### Set Name

**Syntaxe :** obj << Set Name( name )

**Description :** Définit le nom de la colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Set Name( "Time" );

```

### Set Property

**Syntaxe :** obj << Set Property( Notes | List Check | Range Check | Axis | Spec Limits | Control Limits | Sigma | Process Capability Distribution | Coding | Mixture | Design Role | Response Limits | Units | Value Order | Value Labels | Value Scores | Row Order Levels | Distribution | Time Frequency | Value Colors | Color Gradient | Missing Value Codes | Factor Change | Map Role | Supercategories | Multiple Response | Profit Matrix | Informative Missing | Expression Role | Link ID | Link Reference | Event Handler | Custom Property, {argument list} )

**Description :** Définit les propriétés de la colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Set Property( "Units", lbs );

```

### Set Scroll Locked

**Syntaxe :** obj << Set Scroll Locked

**Description :** Verrouille le défilement de la colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Set Scroll locked;

```

### Set Selected

**Syntaxe :** obj << Set Selected( state=0|1 )

**Description :** Sélectionne la colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Height << Set Selected( 1 );

```

### Set Use for Marker

**Syntaxe :** obj << Set Use for Marker

**Description :** Utiliser les valeurs de cette colonne en tant que marqueurs dans un graphique. Il est possible d&apos;utiliser des colonnes de type Expression avec des images ou des colonnes de type Caractère avec des ID.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Name << Set Use for Marker;

```

### Set Values

**Syntaxe :** obj << Set Values( [ value1, value2, value3, ... ] )

**Description :** Définit les valeurs dans la colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "X" );
:X << Set Values(
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6,
	7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
);

```

### SetLock

**Syntaxe :** obj << SetLock

**Description :** Verrouille toute modification ultérieure de la colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Lock( 1 );

```

### Suppress Eval

**Syntaxe :** obj << Suppress Eval( state=0|1 )

**Description :** Définit le drapeau qui supprime l’évaluation de la formule dans la colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( "Ratio" );
col << Set Formula( :Height / :Weight );
col << suppress eval( true );

```

### Use Value Labels

**Syntaxe :** obj << Use Value Labels( state=0|1 )

**Description :** Remplace les étiquettes de valeur définies dans la colonne dans toutes les sorties.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
:Color << Use Value Labels( 1 );
Distribution( Column( :Color ) );

```

### Value Labels

**Syntaxe :** obj << Value Labels( { value1 = "label1", value2 = "label2", ... } )

**Description :** Définit les étiquettes de valeur.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:sex << Value Labels( {"F" = "Female", "M" = "Male"} );

```

## Data Table Cols

### Add Multiple Columns

**Syntaxe :** obj << Add Multiple Columns( Column prefix, number of columns, <before first|after last|after(column)>, Character|Numeric|Row State, <fieldwidth(number)> )

**Description :** Crée plusieurs nouvelles colonnes dans la table de données active.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Add Multiple Columns( "Date", 5, Character );

```

### Clear Column Selection

**Syntaxe :** obj << Clear Column Selection

**Description :** Efface la sélection des colonnes dans la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Go To( :BP 12F );
Wait( 2 );
dt << Clear Column Selection();

```

### Clone Formula Column

**Syntaxe :** obj << Clone Formula Column( column, n, <Substitute Column Reference( column1, list )> )

**Description :** Crée n nouvelles colonnes de formules en fonction de la column donnée. Les références de colonne à column1 en provenance de la formule d&apos;origine seront remplacées par chaque colonne dans list pour l&apos;ensemble des n colonnes. Utiliser des arguments Substitute Column Reference multiples lors du remplacement de plus d&apos;une référence de colonne à partir de la formule d&apos;origine.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << New Column( "Day 1", Formula( (:BP 8M + :BP 12M + :BP 6M) / 3 ) );
list1 = {:BP 8W, :BP 8F};
list2 = {:BP 12W, :BP 12F};
list3 = {:BP 6W, :BP 6F};
dt << Clone Formula Column(
	"Day 1",
	2,
	Substitute Column Reference( :BP 8M, list1 ),
	Substitute Column Reference( :BP 12M, list2 ),
	Substitute Column Reference( :BP 6M, list3 )
);

```

### Column

**Syntaxe :** Column( <data table>, "column name"|column number )

**Description :** Renvoie une référence à la colonne de la table de données spécifiée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = Column( "height" );

```

### Columns Manager

**Syntaxe :** obj << Columns Manager

**Description :** Appelez le gestionnaire de colonnes sur la table de données actuelle, en affichant les propriétés et les statistiques des colonnes.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col1 = dt << Columns Manager;

```

### Combine Columns

**Syntaxe :** obj << Combine Columns

**Description :** Combiner un ensemble de colonnes dans une colonne (à réponses multiples) séparée.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Combine Columns(
	delimiter( "," ),
	Columns(
		:Brush After Waking Up, :Brush After Meal, :Brush Before Sleep,
		:Brush Another Time
	),
	Selected Columns are Indicator Columns( 1 ),
	Column Name( "When to Brush" )
);

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Combine Columns(
	delimiter( "," ),
	Columns(
		:Brush After Waking Up, :Brush After Meal, :Brush Before Sleep,
		:Brush Another Time
	),
	Column Name( "When to Brush" )
);

```

### Compress Selected Columns

**Syntaxe :** obj << Compress Selected Columns( { column1, column2, ... )

**Description :** Compresse chaque colonne au format de compression maximum.

Les données caractère seront de 1 octet si leur nombre de niveaux est inférieur à 255.

Les données numériques seront de 1 octet si leur valeur est comprise ente -127 et 127.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Compress Selected Columns( {:Age, :sex, :Height, :Weight} );

```

### Exclude/Unexclude

**Syntaxe :** obj << Exclude( 0|1 )

**Description :** Exclue la colonne de toute exécution d’analyse.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Name << Exclude( 1 );

```

### Formula

**Syntaxe :** obj << Formula

**Description :** Définit une formule dans la colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col1 = dt << New Column( "Ratio", Numeric, Continuous );
col1 << Formula( :height / :weight );

```

### Freq

**Syntaxe :** obj << Preselect Role( Freq )

**Description :** Assigne le rôle Fréquence à la colonne de la table de données

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = Column( "weight" );
col << Preselect Role( "freq" );

```

### Go to

**Syntaxe :** obj << Go to( column name|column number )

**Description :** Sélectionne et se déplace vers la colonne spécifiée dans la table de données active.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Go to( :BP 12F );

```

### Hide/Unhide

**Syntaxe :** obj << Hide( 0|1 )

**Description :** Masque la colonne dans la grille de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Age << Hide( 1 );

```

### Invert Column Selection

**Syntaxe :** obj << Invert Column Selection( <list of columns> )

**Description :** Inverse la sélection actuelle des colonnes. Si une liste de colonnes est communiquée, les colonnes n&apos;y apparaissant pas seront sélectionnées.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:age << Set Selected( 1 );
dt:height << Set Selected( 1 );
Wait( 1 );
b = dt << Invert Column Selection;

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
a = {:height, :weight};
b = dt << Invert Column Selection( a );

```

### Label/Unlabel

**Syntaxe :** obj << Label( 0|1 )

**Description :** Définit la colonne comme une étiquette d’identification. Les valeurs figurant dans la colonne apparaîtront sur les graphiques lors de la sélection d’un point.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Age << Label( 1 );

```

### Make Indicator Columns

**Syntaxe :** obj << Make Indicator Columns

**Description :** Créer un ensemble de colonnes d&apos;indicateurs à partir d&apos;une colonne sélectionnée

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << Make Indicator Columns( columns( {:species, :season} ) );

```

### Move Selected Columns

**Syntaxe :** obj << Move Selected Columns( column|column list, To first|To last|After(column)|after(group)|after(Path({<a>, <b>, ...}) )

**Description :** Déplace les colonnes sélectionnées dans la table de données.

**After column**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To( :Age );
Wait( 2 );
dt << Move Selected Columns( After( :sex ) );

```

**After group**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group Columns( "Measures", {:height, :weight} );
dt << Go To( :Age );
Wait( 2 );
dt << Move Selected Columns( After( "Measures" ) );

```

**Input list**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Move Selected Columns( {:height, :weight}, After( :name ) );

```

**To last**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To( :Age );
Wait( 2 );
dt << Move Selected Columns( To last );

```

### New Column

**Syntaxe :** obj << New Column( <name>, <data type>, <modeling type>, <Format()>, <Formula()>, <Set Property()>, <Set Values()>, <Like()> )

**Description :** Crée une nouvelle colonne dans la table de données active.

**Like**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "like name", Like( :name ) );

```

**Nouvelle table de données**

```js

Names Default To Here( 1 );
New Table( "test",
	Add Rows( 5 ),
	New Column( "name",
		Character( 8 ),
		Nominal,
		Set Values( {"KATIE", "LOUISE", "JANE", "JACLYN", "LILLIE"} )
	),
	New Column( "age",
		Numeric,
		Ordinal,
		Format( "Fixed Dec", Use thousands separator( 0 ), 5, 0 ),
		Set Values( [12, 12, 12, 12, 12] )
	),
	New Column( "code",
		Character( 2 ),
		Nominal,
		Set Values( {"AA", "AA", "BB", "BB", "AA"} )
	)
);

```

**Simple**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "X", Formula( Random Uniform() ) );

```

### New Formula Column

**Syntaxe :** dt << New Formula Column(Operation(name, <Category(name)>), Columns(columns), <Group By(columns)>)

**Description :** Créez une colonne de formules dans la table de données en utilisant les colonnes spécifiées et en appliquant l&apos;opération et les colonnes de groupement facultatives. La catégorie d&apos;opération peut être spécifiée si nécessaire pour différencier le nom de l&apos;opération. Renvoie une liste des références de colonne aux colonnes créées.

**JMP Version ajoutée :** 17

**Grouper par**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Formula Column(
	Operation( "Mean" ),
	Columns( :height, :weight ),
	Group By( :age )
);

```

**Log 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Formula Column( Operation( "Log 2" ), Columns( :height, :weight ) );

```

### Next Selected Column

**Syntaxe :** obj << Next Selected Column

**Description :** Atteindre la prochaine colonne sélectionnée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:age << Set Selected( 1 );
dt:height << Set Selected( 1 );
Wait( 1 );
dt << Next Selected Column;
Wait( 2 );
dt << Next Selected Column;

```

### No Role

**Syntaxe :** obj << Preselect Role( No Role )

**Description :** Supprime le rôle attribué de la colonne de la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Preselect Role( "No Role" );

```

### Original Order

**Syntaxe :** obj << Original Order

**Description :** Replace les colonnes de la table de données dans l’ordre original.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To( :Age );
dt << Move Selected Columns( To last );
Wait( 2 );
dt << Original Order();

```

### Paste Column Properties

**Syntaxe :** obj << Paste Column Properties

**Description :** Depuis le presse-papiers, colle plusieurs listes de propriétés de colonnes dans plusieurs colonnes. Vous pouvez éventuellement spécifier une liste des colonnes cibles au lieu de les sélectionner dans la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << Copy Column Properties( {:MODULUS, :ELONG} );
dt2 = New Table( "test it",
	New Column( "T1", numeric, continuous ),
	New Column( "T2", numeric, continuous ),
	New Column( "T3", numeric, continuous ),
	Add Rows( 10 )
);
dt2 << Paste Column Properties( {:T1, :T3} );

```

### Previous Selected Column

**Syntaxe :** obj << Previous Selected Column

**Description :** Atteindre la colonne sélectionnée précédemment.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:age << Set Selected( 1 );
dt:height << Set Selected( 1 );
Wait( 1 );
dt << Next Selected Column;
dt << Next Selected Column;
Wait( 2 );
dt << Previous Selected Column;

```

### Reorder by Data Type

**Syntaxe :** obj << Reorder by Data Type

**Description :** Réorganise les colonnes de la table de données par type de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
Wait( 1 );
dt << Reorder By Data Type();

```

### Reorder by Modeling Type

**Syntaxe :** obj << Reorder by Modeling Type

**Description :** Réorganise les colonnes de la table de données par type de modélisation.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
Wait( 1 );
dt << Reorder By Modeling Type();

```

### Reorder by Name

**Syntaxe :** obj << Reorder by Name

**Description :** Réorganise les colonnes de la table de données par nom de colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
Wait( 1 );
dt << Reorder By Name();

```

### Reverse Order

**Syntaxe :** obj << Reverse Order

**Description :** Rétablit l’ordre des colonnes dans la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
Wait( 1 );
dt << Reverse Order();

```

### Set Label Columns

**Syntaxe :** obj << Set Label Columns( column(s) )

**Description :** Attribue un rôle d&apos;étiquette aux colonnes sélectionnées dans la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
Wait( 1 );
dt << Set Label Columns( :City, :State );

```

### Set Scroll Lock Columns

**Syntaxe :** obj << Set Scroll Lock Columns( column(s) )

**Description :** Verrouille le déroulement des colonnes sélectionnées dans la table de données.  Pour signaler qu’une colonne est verrouillée, sa couleur d’arrière plan change.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Set Scroll Lock Columns( :City );

```

### Text to Columns

**Syntaxe :** obj << Text to Columns

**Description :** Créer un ensemble de colonnes de textes ou d&apos;indicateurs à partir d&apos;une colonne de textes séparés

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Text To Columns( delimiter( "," ), columns( :Brush Delimited ) );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Text To Columns(
	delimiter( "," ),
	columns( :Brush Delimited ),
	Make Indicator Columns( 1 )
);

```

### Use for Marker

**Syntaxe :** obj << UseForMarker( 0|1 )

**Description :** Utiliser les valeurs de cette colonne en tant que marqueurs dans un graphique. Il est possible d&apos;utiliser des colonnes de type Expression avec des images ou des colonnes de type Caractère avec des ID.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Name << UseForMarker( 1 );

```

### Validation

**Syntaxe :** obj << Preselect Role( Validation)

**Description :** Assigne le rôle Validation à la colonne de la table de données

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = Column( "age" );
col << Preselect Role( "Validation" );

```

### Weight

**Syntaxe :** obj << Preselect Role( Weight )

**Description :** Assigne le rôle Pondération à la colonne de la table de données

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Weight << Preselect Role( "weight" );

```

### X

**Syntaxe :** obj << Preselect Role( X )

**Description :** Assigne le rôle X à la colonne de la table de données

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = Column( "weight" );
col << Preselect Role( "X" );

```

### Y

**Syntaxe :** obj << Preselect Role( Y )

**Description :** Assigne le rôle Y à la colonne de la table de données

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Preselect Role( "Y" );

```

## Data Table Rows

### Add Rows

**Syntaxe :** obj << Add Rows( <n>, <At Start|At End|After(m)> | {list of (column name = value) pairs}) )

**Description :** Ajoute n lignes, au début, à la fin, ou après la ligne m de la table de données.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Add Rows( 3, after( 5 ) );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Add Rows( {name = "David", age = 15} );

```

### Clear Row States

**Syntaxe :** obj << Clear Row States

**Description :** Efface les états dans toutes les lignes, y compris les sélectionnées, les exclues, les masquées, les marqueurs, les étiquettes et les couleurs.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10, 12, 15] );
Wait( 2 );
dt << Clear Row States;

```

### Clear Select

**Syntaxe :** obj << Clear Select

**Description :** Efface ou désélectionne les lignes sélectionnées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10] );
Wait( 2 );
dt << Clear Select();

```

### Clear Selected Row States

**Syntaxe :** obj << Clear Selected Row States

**Description :** Efface les états dans les lignes sélectionnées, y compris les sélectionnées, les exclues, les masquées, les marqueurs, les étiquettes et les couleurs.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 6, 7, 8, 9, 10] );
r << Exclude;
r << clear select;
r << Select Rows( [5, 6] );
Wait( 1 );
dt << Clear Selected Row States;

```

### Color Rows by Row State

**Syntaxe :** obj << Color Rows by Row State

**Description :** Affiche ou masque dans les cellules de la table de données, la couleur affectée à l’état de ligne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Color by Column( :Age );
Wait( 2 );
dt << Color Rows by Row State;

```

### Color by Column

**Syntaxe :** obj << Color by Column( column, <Color( number )>, <Color Theme( color theme )>, < Continuous scale(0|1)>, <Reverse scale(0|1)>, <Excluded Row( 0|1 ), <Make window with legend> )

**Description :** Assigne une couleur à chaque ligne de la table de données en fonction de la valeur figurant dans la colonne spécifiée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Color by Column( :Age );

```

### Color or Mark by Column

**Syntaxe :** obj << Color or Mark by Column( column, <Color( number )>, <Color Theme( color theme )>, <Marker Theme( standard|hollow|solid|paired|classic|alphanumeric )> )

**Description :** Attribue à chaque ligne d&apos;une colonne spécifiée une couleur (et/ou un marqueur) correspondant aux valeurs de la colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Color or Mark by Column( :Age );

```

### Colors

**Syntaxe :** obj << Colors( color )

**Description :** Colore les lignes sélectionnées dans toutes les sorties graphiques contenant des marqueurs.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Run Script( "Bivariate" );
Wait( 1 );
dt << Select Where( :sex == "F" );
Wait( 1 );
dt << Colors( "Red" );

```

### Data Filter

**Syntaxe :** obj << Data Filter( <Location(x,y)>, <"Close Outline">, <"Local">, <Inverse(0|1)>, <Show Columns Selector(0|1)>, <Title(string)>, <Save And Restore Current Row States(0|1)>, <Conditional(0|1)>, <Auto Clear(0|1)>, <Group By AND(0|1)>, <Show Histograms And Bars(0|1)>, <Count Excluded Rows(0|1)>, <Mode(...)>, <Add Filter(Columns(...), Where(...), Display(...), <Select Missing(cols)>, <Order By Count(cols)>)>, <Favorites(...)>, <Animation(...)> )

**Description :** Crée ou affiche un filtre de données vous permettant de sélectionner, de façon interactive, des sous-ensembles complexes de données. L&apos;option Mode détermine quels états de ligne sont affectés par la sélection dans le filtre. La commande Add Filter ajoutera un groupe de filtres à partir des clauses Columns et Where spécifiées. Lorsqu&apos;il y a plusieurs groupes de filtres, le comportement combiné est déterminé par l&apos;option Group By AND. Si le mot clé Local est donné, le filtre peut être activé dans un rapport de façon à filtrer une ou plusieurs plates-formes sans affecter les autres rapports.

**Filtre de données global**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Data Filter(
	Location( {218, 114} ),
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) ),
	Add Filter(
		columns( :age, :height ),
		Where( :age == {13, 14, 15} ),
		Where( :height >= 65 & :height <= 70 )
	),
	Add Filter( columns( :weight ), Where( :weight >= 64 & :weight <= 100 ) )
);

```

**Filtre des données locales**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Local Data Filter",
	Data Filter Context Box(
		H List Box(
			dt << Data Filter(
				Local,
				Mode( Show( 1 ), Include( 1 ) ),
				Add Filter(
					columns( :age, :height ),
					Where( :age == {13, 14, 15} ),
					Where( :height >= 65 & :height <= 70 )
				),
				Add Filter(
					columns( :weight ),
					Where( :weight >= 64 & :weight <= 100 )
				)
			),
			dt << Run Script( "Bivariate" ),
			dt << Run Script( "Distribution" )
		)
	)
);

```

### Data View

**Syntaxe :** obj << Data View

**Description :** Crée une nouvelle vue de données des lignes actuellement sélectionnées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Where( :age < 14 );
dt << Data View;

```

### Delete Rows

**Syntaxe :** obj << Delete Rows

**Description :** Supprime les lignes sélectionnées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10] );
Wait( 2 );
r = dt << Delete Rows;
Show( r );

```

### Exclude/Unexclude

**Syntaxe :** obj << Exclude/Unexclude

**Description :** Exclue les lignes sélectionnées des calculs.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
r << Exclude;

```

### Get Rows

**Syntaxe :** obj << Get Rows( number )

**Description :** renvoie une liste des valeurs de colonne correspondantes aux lignes spécifiées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Get Rows( 3 );
dt << Get Rows( {1, 2, 3} );

```

### Go to Row

**Syntaxe :** obj << Go to Row( row number )

**Description :** Renvoie un objet ligne, déplace la ligne spécifiée, sélectionne la ligne et la met en surbrillance.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To Row( 5 );

```

### Hide and Exclude

**Syntaxe :** obj << Hide and Exclude

**Description :** Masque les lignes sélectionnées dans les graphiques et les exclue des calculs.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
r << Hide and Exclude;

```

### Hide/Unhide

**Syntaxe :** obj << Hide/Unhide

**Description :** Masque les lignes sélectionnées dans les graphiques.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Go To Row( 12 );
r << Hide;

```

### Insert Rows

**Syntaxe :** obj << Insert Rows

**Description :** Insère les lignes avant les lignes sélectionnées. N&apos;a aucun effet si aucune ligne n&apos;est sélectionnée.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [3, 4, 5] );
dt << Insert Rows;

```

### Invert Row Selection

**Syntaxe :** obj << Invert Row Selection

**Description :** Inverse la sélection actuelle des lignes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Where( :Age < 14 );
Wait( 2 );
r << Invert Row Selection;

```

### Label/Unlabel

**Syntaxe :** obj << Label/Unlabel

**Description :** Étiquette les lignes sélectionnées dans toutes les sorties graphiques contenant des marqueurs.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Go To Row( 5 );
r << Label;

```

### Marker by Column

**Syntaxe :** obj << Marker by Column( column, <Marker( number )>, <Marker Theme( standard | hollow | solid | paired | classic | alphanumeric )>, <Color theme( string )>, < Continuous scale(0|1)>, <Reverse scale(0|1)>, <Excluded Row( 0|1 ), <Make window with legend> )

**Description :** Assigne un marqueur à chaque ligne de la table de données en fonction de la valeur figurant dans la colonne spécifiée.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Marker by Column( :sex );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/big class.jmp" );
dt << Marker By Column(
	:age,
	Marker( 1 ),
	Color theme( "White to Red" ),
	Marker Theme( "alphanumeric" ),
	Reverse Scale( 1 ),
	Make Window With Legend
);

```

### Markers

**Syntaxe :** obj << Markers( marker )

**Description :** Modifie les marqueurs correspondant aux lignes sélectionnées dans toutes les sorties graphiques contenant des marqueurs.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Where( :sex == "M" );
r << Markers( "+" );

```

### Move Rows

**Syntaxe :** obj << Move Rows( At Start|At End|After(n) )

**Description :** Déplace les lignes sélectionnées vers la position nouvellement spécifiée dans la table de données, vers le haut ou vers le bas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
Wait( 2 );
r << Move Rows( At Start );

```

### Name Selection in Column

**Syntaxe :** obj << Name Selection in Column( Column Name( name ), Selected( string ), Unselected( string ) )

**Description :** Crée une nouvelle colonne catégorielle avec deux valeurs, une pour chaque ligne sélectionnée et l’autre pour chaque ligne non sélectionnée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Where( :Age < 14 );
dt << Name Selection in Column(
	Column Name( "Younger" ),
	Selected( "Yes" ),
	Unselected( "No" )
);

```

### Next Selected

**Syntaxe :** obj << Next Selected

**Description :** Met en surbrillance la ligne suivante dans le groupe de lignes sélectionnées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
Wait( 2 );
r << Next Selected;

```

### Previous Selected

**Syntaxe :** obj << Previous Selected

**Description :** Met en surbrillance la ligne précédente dans le groupe de lignes sélectionnées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
Wait( 2 );
r << Previous Selected;

```

### Row Editor

**Syntaxe :** obj << Row Editor

**Description :** Ouvre la boîte de dialogue Éditeur de ligne des lignes sélectionnées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
r << Row Editor();

```

### Row Selection

**Syntaxe :** obj << Row Selection( Select Where(condition), < current selection("extend" | "restrict" | "clear")>, <Dialog("Keep Dialog Open")>, <Match Case(0|1)> )

**Description :** Sélectionne toutes les lignes qui répondent à la condition définie. Il est possible d&apos;étendre ou de restreindre les sélections existantes, d&apos;exécuter la sélection ou de simplement afficher la boîte de dialogue. Lorsque Respecter la casse est omis, le comportement par défaut est sensible à la casse.

**JMP Version ajoutée :** 15

**Exemple 1**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Row Selection( Select where( :age < 15 ) );

```

**Exemple 2**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Row Selection( Select where( :age < 15 ) );
Wait( 2 );
dt << Row Selection( Select where( :age == 15 ), current selection( "extend" ) );

```

**Exemple 3**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Row Selection( Select where( :age < 15 ) );
dt << Row Selection(
	Select where( :sex == "M" ),
	current selection( "restrict" ),
	Dialog( "keep dialog open" )
);

```

**Exemple 4**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Row Selection( Select where( :name == "jane" ), Match Case( 0 ) );

```

### Select All Matching Cells

**Syntaxe :** obj << Select All Matching Cells

**Description :** Sélectionne dans toutes les tables de données ouvertes, toutes les lignes où la valeur figurant dans la colonne sélectionnée correspond à l’une des valeurs figurant dans les lignes sélectionnées de cette colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students.jmp" );
dt << Select Rows( [1, 2, 3, 4] );
dt << Go To( :Height );
Wait( 2 );
dt << Select All Matching Cells();

```

### Select All Rows

**Syntaxe :** obj << Select All Rows

**Description :** Sélectionne toutes les lignes dans la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select All Rows;

```

### Select Dominant

**Syntaxe :** obj << Select Dominant( {column1, column2, ...},{0|1, 0|1, ...} )

**Description :** Sélectionne toutes les lignes en fonction des valeurs fortes (1) ou faibles (0) de la frontière de Pareto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To( :height );
dt << Select Dominant( {:height, :weight}, {0, 0} );

```

### Select Duplicate Rows

**Syntaxe :** obj << Select Duplicate Rows( <match(column1, column2, ...)> )

**Description :** Sélectionne les lignes dupliquées et les apparie aux colonnes sélectionnées. Si aucune colonne n&apos;est donnée, les lignes seront appariées à toutes les colonnes de la table. Renvoie le nombre de lignes dupliquées.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select duplicate rows( Match( :age, :height ) );

```

### Select Excluded

**Syntaxe :** obj << Select Excluded

**Description :** Sélectionne toutes les lignes exclues dans la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10, 15] );
dt << Exclude( 1 );
dt << Clear Select;
Wait( 2 );
dt << Select Excluded;

```

### Select Hidden

**Syntaxe :** obj << Select Hidden

**Description :** Sélectionne toutes les lignes masquées dans la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10, 15] );
dt << Hide( 1 );
dt << Clear Select;
Wait( 2 );
dt << Select Hidden;

```

### Select Labeled

**Syntaxe :** obj << Select Labeled

**Description :** Sélectionne toutes les lignes étiquetées dans la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10, 15] );
dt << Label( 1 );
dt << Clear Select;
Wait( 2 );
dt << Select Labeled;

```

### Select Matching Cells

**Syntaxe :** obj << Select Matching Cells

**Description :** Sélectionne toutes les lignes où la valeur figurant dans la colonne sélectionnée correspond à l’une des valeurs figurant dans les lignes sélectionnées de cette colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [1, 2, 3, 4] );
dt << Go To( :Height );
Wait( 2 );
dt << Select Matching Cells();

```

### Select Randomly

**Syntaxe :** obj << Select Randomly( number | probability | Sample Size( number ) | Sampling Rate( probability ) )

**Description :** Sélectionne de façon aléatoire une fraction de lignes spécifiée.

**Probability**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Randomly( 0.3 );

```

**Taille de l'échantillon**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Randomly( Sample Size( 12 ) );

```

**Taux d'échantillonnage**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Randomly( Sampling Rate( 0.3 ) );

```

### Select Rows

**Syntaxe :** obj << Select Rows( [row1, row2, ...] )

**Description :** Sélectionne les colonnes spécifiées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10] );

```

### Select Where

**Syntaxe :** obj << Select Where( condition, < current selection("extend" | "restrict" | "clear")> )

**Description :** Les options permettent d&apos;étendre ou de restreindre les sélections, d&apos;exécuter la sélection ou d&apos;afficher uniquement la boîte de dialogue.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Where( :Age < 14 );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Where( :Age == 14 );
Wait( 0 );
dt << Select Where( :sex == "M", current selection( "extend" ) );

```

**Exemple 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Where( Contains( :name, "AR" ) );

```

## Filter Views

### Get Data Filter

**Syntaxe :** expr = obj << Get Data Filter

**Description :** Renvoie la définition de filtre de la vue de filtre

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Get Data Filter );

```

### Get Data Table

**Syntaxe :** data table = obj << Get Data Table

**Description :** Renvoie la table propriétaire de la vue de filtre

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Get Data Table );

```

### Get Name

**Syntaxe :** string = obj << Get Name

**Description :** Récupérer le nom de la vue de filtre

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Get Name );

```

### Get Show Hidden Rows

**Syntaxe :** 0|1 = obj << Get Show Hidden Rows

**Description :** Renvoie le paramètre Afficher les lignes masquées de cette vue de filtre

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Show Hidden Rows( 1 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Get Show Hidden Rows );

```

### Get Type

**Syntaxe :** obj << Get Type

**Description :** Récupérez le type de la vue de filtre. Valeurs possibles : Unfiltered, Filtered ou TemporaryFiltered.

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Get Type, fv << Is Temporary, fv << Is Unfiltered );

```

### Is Locked

**Syntaxe :** 0|1 = obj << Is Locked

**Description :** Renvoie le paramètre de verrouillage de cette vue de filtre

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Lock( 1 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Is Locked );

```

### Is Temporary

**Syntaxe :** 0|1 = obj << Is Temporary

**Description :** Renvoie 1 si la vue filtrée est une vue de filtre temporaire

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Get Type, fv << Is Temporary, fv << Is Unfiltered );

```

### Is Unfiltered

**Syntaxe :** 0|1 = obj << Is Unfiltered

**Description :** Renvoie 1 si la vue filtrée est une vue de filtre non filtrée

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Get Type, fv << Is Temporary, fv << Is Unfiltered );

```

### Lock

**Syntaxe :** obj << Lock( 0|1 )

**Description :** Empêchez la modification de cette vue de filtre.

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
fv << Lock( 1 );
Show( fv << Is Locked );

```

### Set Data Filter

**Syntaxe :** obj << Set Data Filter( expr )

**Description :** Modifie la définition de filtre de la vue de filtre. La définition de filtre de la vue non filtrée ne peut pas être modifiée.

**JMP Version ajoutée :** 19

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View( "Dream", Active( 0 ) );
fv << Set Data Filter(
	Add Filter( Columns( :Island ), Where( :Island == "Dream" ) )
);
Show( fv << Get Data Filter );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View( "Dream", Active( 0 ) );
fv << Set Data Filter(
	Data Filter(
		Inverse( 1 ),
		Add Filter( Columns( :Island ), Where( :Island == "Dream" ) )
	)
);
Show( fv << Get Data Filter );

```

### Set Name

**Syntaxe :** string = obj << Set Name( name )

**Description :** Modifie le nom de la vue de filtre. Les noms de la vue non filtrée et de la vue filtrée temporaire ne peuvent pas être modifiés.

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Set Name( "Dream Penguins" ) );
Show( fv << Get Name );

```

### Show Hidden Rows

**Syntaxe :** obj << Show Hidden Rows( 0|1 )

**Description :** Modifie le paramètre Afficher les lignes masquées de cette vue de filtre.

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Show Hidden Rows( 1 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
fv << Show Hidden Rows( 0 );
Show( fv << Get Show Hidden Rows );

```

### Add Properties to Table

**Syntaxe :** obj << Add Properties to Table

**Description :** Ajouter les propriétés à la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Properties( {2, 4} );
proplist = dt << Get Selected Properties();
dt2 = New Table( "Little Class" );
dt2 << Add Properties to Table( proplist );

```

### Add Scripts to Table

**Syntaxe :** obj << Add Scripts to Table

**Description :** Cette commande est un alias de la commande &apos;Ajouter les propriétés à la table de données&apos;.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Properties( {2, 4} );
proplist = dt << Get Selected Properties();
dt2 = New Table( "Little Class" );
dt2 << Add scripts to table( proplist );

```

### Anonymize

**Syntaxe :** obj << Anonymize( columns( columns ), <Output Table( name )> )

**Description :** Crée une nouvelle table de données avec les identifiants uniques supprimés.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << anonymize( columns( :name, :age ), output table name( "anonymized" ) );

```

### Apply Columns List Filter To Data Grid

**Syntaxe :** obj << Apply Columns List Filter To Data Grid( state=0|1 )

**Description :** Activez cette option pour appliquer des filtres dans la liste de colonnes de la table de données à la grille de données.

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Column Filter( Column Name( "tude" ) );
Wait( 1 );
dt << Apply Columns List Filter To Data Grid( 0 );
Wait( 1 );
dt << Apply Columns List Filter To Data Grid( 1 );

```

### Apply Formula

**Syntaxe :** dt << Apply Formula([Columns(<col|{cols}|Group(col, count)|<group name>, [Ref(<name>)], [List Ref(<name>)]]+, [Output(In Place|In Place Formula|New Formula(<prefix>|New Static(<prefix>)], [Group(<name>)])

**Description :** Utilisez une formule pour transformer une ou plusieurs colonnes et placez les résultats (sous la forme de formules ou de données) dans de nouvelles colonnes ou dans des colonnes existantes.

Il est nécessaire de définir au moins un groupe de colonnes (une seule colonne, une liste explicite de colonnes, une exécution de colonnes, ou un nom de groupe de colonnes existant).

Le premier groupe défini sert de cible si la sortie est « sur place ». Si nécessaire, vous pouvez spécifier un nom dans la formule qui fait référence aux colonnes prises une à la fois (Ref) ou comme une liste de colonnes (ListRef).

Enfin, le type de sortie peut être spécifié, éventuellement avec un nom et un nom de groupe pour les nouvelles colonnes.

**JMP Version ajoutée :** 18

**New Data Columns/ListRef**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Data Table( "Big Class" ) << Apply Formula(
	Columns(
		Group( :height, 2 ),
		Ref( "_relative_from_height" ),
		ListRef( "height_to_weight" )
	),
	Formula( _relative_from_height / Sum( height_to_weight ) ),
	Output( New Static )
);

```

**New Formula Columns/Grouping**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Apply Formula(
	Columns( Group( :height, 2 ), Ref( "_relative_from_height" ) ),
	Formula( _relative_from_height * 2 ),
	Output( New Formula( "result", Group( "output group" ) ) )
);

```

**Simple New Formula Column**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Data Table( "Big Class" ) << Apply Formula(
	Columns( :height ),
	Formula( :height / 5 ),
	Output( New Formula )
);

```

### Association Analysis

**Syntaxe :** Association Analysis( Item( columns ), ID( columns ) )

**Description :** Identifie les connexions entre les groupes d&apos;éléments d&apos;une transaction ou d&apos;un événement indépendant. L&apos;analyse d&apos;association est fréquemment utilisée pour analyser les données transactionnelles (aussi nommées paniers de la ménagère) et identifier les éléments qui apparaissent souvent ensemble dans les transactions.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Grocery Purchases.jmp" );
obj = dt << Association Analysis( Item( :Product ), ID( :Customer ID ) );

```

### Attribute Chart

**Syntaxe :** Attribute Chart( Y( columns ), X( columns ) )

**Description :** Analyse les mesures catégorielles pour vous donner les mesures de la concordance entre les réponses, les évaluateurs notamment.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );

```

### Bayesian Optimization

**Syntaxe :** Bayesian Optimization

**Description :** Recommends factor settings to optimize responses by augmenting the data table.

**JMP Version ajoutée :** 19

### Begin Data Update

**Syntaxe :** obj << Begin Data Update

**Description :** Conserve tous les messages de mise à jour jusqu&apos;à l’arrivée de la commande de fin de mise à jour des données. Ceci s’avère utile pour la mise à jour sans interruption de plusieurs cellules. Cela s&apos;applique uniquement aux changements apportés aux cellules de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Central Limit Theorem.jmp" );
dt << Add Rows( 2000 );
dt << Distribution( Column( :"N=1"n, :"N=5"n, :"N=10"n ) );
Wait();
dt << Begin Data Update;
dt << Add Rows( 2000 );
dt << End Data Update;

```

### Bivariate

**Syntaxe :** Bivariate( Y( columns ), X( columns ) )

**Description :** Modélise une réponse continue par rapport à une autre variable continue. Les méthodes d&apos;analyse incluent l&apos;ajustement des droites, des polynômes, des splines et des densités bivariées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

### Boosted Tree

**Syntaxe :** Boosted Tree (Y( column ), X( columns ))

**Description :** Construit un modèle prédictif en créant un grand arbre de décision additif qui est une séquence d&apos;arbres de décision plus petits. Chaque arbre est ajusté sur les résidus de l&apos;arbre précédent.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);

```

### Bootstrap Forest

**Syntaxe :** Bootstrap Forest (Y( column ), X( columns ))

**Description :** Construit un modèle prédictif en calculant la moyenne des valeurs prévues à partir de nombreux arbres de décision. Chaque arbre de décision est ajusté à un échantillon de bootstrap aléatoire des données d&apos;apprentissage.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);

```

### Bubble Plot

**Syntaxe :** Bubble Plot( X( column ), Y( column ), <Sizes( column )>, <Time( column )>, <ID( column )>, <Coloring( column ) )

**Description :** Produit un nuage de points bidimensionnel de bulles qui peut être animé selon une variable de temps. Des variables supplémentaires peuvent être utilisées pour définir la taille et la couleur des bulles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);

```

### CUSUM Control Chart

**Syntaxe :** CUSUM Control Chart( Y( column ), <X( column )>, <By( column )>, <Data Units( 0|1 )>, <Show Excluded Region( 0|1 )>  )

**Description :** Crée un graphique qui représente les sommes cumulées des écarts des moyennes des sous-groupes par rapport à une cible. Ce graphique est également appelé carte CUSUM tabulaire.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);

```

### Categorical

**Syntaxe :** Categorical( Responses | Aligned Responses | Repeated Measures | Rater Agreement | Multiple Response | Multiple Response by ID | Multiple Delimited | Indicator Group | Response Frequencies( column ), X( column(s) ) )

**Description :** Résume et analyse des données de réponses catégorielles. Les données peuvent être des réponses simples, des réponses multiples, des mesures répétées, une concordance des évaluateurs, des réponses alignées, ou du texte libre. Inclut la possibilité de générer des tabulations croisées personnalisées des réponses.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

### Cell Plot

**Syntaxe :** Cell Plot( Y( column(s) ), <X( column )> )

**Description :** Produit une grille rectangulaire de cellules dessinées en bijection avec les valeurs de la table de données. Les cellules de la grille sont coloriées avec les valeurs des cellules.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/SAT.jmp" );
obj = dt << Cell Plot(
	Y(
		:"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n,
		:"2002 Verbal"n, :"2002 Math"n, :"2001 Verbal"n, :"2001 Math"n,
		:"1999 Verbal"n, :"1999 Math"n, :"1994 Verbal"n, :"1994 Math"n,
		:"1997 Verbal"n, :"1997 Math"n, :"1992 Verbal"n, :"1992 Math"n
	)
);

```

### Checksum

**Syntaxe :** obj << Checksum( < Version(version) >, < Include(flags) >, < Exclude(flags) > )

**Description :** Compute the table&apos;s checksum. Available flags include: "ColData", "ColName", "ColDataType", "ColModelingType", "ColFormat", "ColInFormat", "ColFormatWidth", "ColAttributes", "ColProperties", "ColListCheck", "ColRangeCheck", "ColCompact", "ColLabel", "ColHidden", "ColExclude", "ColSelection", "ColState", "ColDisplayWidth", "TableVariables", "TableScripts", "RowExclude", "RowHidden", "RowLabel", "RowColor", "RowMarker", "RowSelection", "RowState"

**JMP Version ajoutée :** 18

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Checksum();

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Checksum( Exclude( "ColData" ) );

```

**Exemple 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Checksum( Include( "ColData", "ColAttributes" ) );

```

**Exemple 4**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
flags = {"ColData", "ColAttributes"};
dt << Checksum( Include( flags ) );

```

### Choice

**Syntaxe :** Choice( Profile DataTable( data table ), Profile ID( column ), Profile Effects( column(s) ), <Response Data Table( data table )>, <Subject Data Table( data table )>, <Response Profile ID Chosen( column )>, <Response Subject ID( column)>, <Response Grouping( column(s) )>, <Response Profile ID Choices( column(s) )>, <Profile Grouping( column(s) )>, <Subject Subject ID( column )>, <Subject Effects( column(s) )> )

**Description :** Modélise les données issues d&apos;un plan de préférence étudiant les préférences des clients. Estime la probabilité qu&apos;une configuration spécifique soit préférée à l&apos;aide d&apos;une forme de régression logistique conditionnelle.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Combined.jmp" );
obj = Choice(
	One Table( 1 ),
	Profile DataTable( dt ),
	Profile ID( :Indicator ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Profile Grouping( :Subject, :Trial )
);

```

### Clear Cell Colors

**Syntaxe :** obj << Clear Cell Colors

**Description :** Effacer la couleur des cellules des colonnes sélectionnées. Si aucune colonne n&apos;est sélectionnée, la couleur des cellules de toutes les colonnes sera effacée.

**JMP Version ajoutée :** 15

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:age << Color Cells( "Red" );
a = {1, 3, 5};
b = {2, 4, 6};
:height << color cells( {{"Red", a}, {"blue", b}} );
:weight << color cells( {{"blue", a}} );
Wait( 2 );
dt << Clear cell colors( {:height, :age} );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:age << Color Cells( "Red" );
a = {1, 3, 5};
b = {2, 4, 6};
:height << color cells( {{"Red", a}, {"blue", b}} );
:weight << color cells( {{"blue", a}} );
Wait( 2 );
dt << Clear cell colors();

```

### Clear Column Selection

**Syntaxe :** obj << Clear Column Selection

**Description :** Efface la sélection des colonnes dans la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Go To( :BP 12F );
Wait( 2 );
dt << Clear Column Selection();

```

### Clear Edit Lock

**Syntaxe :** obj << Clear Edit Lock( [ <"Modify Cells">, <"Add rows">, <"Add Columns">, <"Delete Rows">, <"Delete Columns">] )

**Description :** Autoriser les opérations spécifiées sur la table de données, lesquelles étaient précédemment interdites.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Edit Lock( "Modify Cells", "Add Rows", "Delete Columns" );
:age << set selected( 1 );
:height << set selected( 1 );
Wait( 2 );
dt << Clear Edit Lock( "Delete Columns" );

```

### Clear Properties Selection

**Syntaxe :** obj << Clear Properties Selection( { property1, property2, ... )

**Description :** Désélectionner les propriétés de table spécifiées, la liste pouvant être une liste de noms de propriétés ou d’index des propriétés. En absence d’une liste, désélectionner toutes les propriétés sélectionnées.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
list = {"Bivariate", "Logistic"};
proplist = dt << Select Properties();
Wait( 1 );
dt << clear properties selection( list );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
list = {"Bivariate", "Logistic"};
proplist = dt << Select Properties();
Wait( 1 );
dt << clear properties selecction();

```

### Clone

**Syntaxe :** dt << Clone( < Table Name(name) >, < Copy Formulas(1|0) >, < Eval Formulas(1|0) > )

**Description :** Créer une copie de la table de données

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dtClone = dt << Clone;

```

### Close

**Syntaxe :** Close( data table name, <NoSave|Save("path")> )

**Description :** Ferme la table de données référencée par le premier argument, qui est par défaut la table de données en cours. Le deuxième argument est utilisé pour enregistrer la table de données. Utilisez une extension de fichier appropriée pour enregistrer la table de données sous un format non JMP. Si vous spécifiez NoSave, l&apos;invite à enregistrer ou ignorer les modifications ne sera pas affichée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
Close( dt );

```

### Close Data Grid

**Syntaxe :** obj << Close Data Grid

**Description :** Fermer ou ouvrir la grille de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Close Data Grid( 1 );

```

### Close Side Panels

**Syntaxe :** obj << Close Side Panels

**Description :** table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Close Side Panels( 1 );

```

### Close summary panels

**Syntaxe :** obj << Close summary panels

**Description :** Fermer ou ouvrir les panneaux de résumé de la table de données.

**JMP Version ajoutée :** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Close Summary Panels( 1 );

```

### Cluster

**Syntaxe :** obj << Cluster

### Cluster Variables

**Syntaxe :** Cluster Variables( Y( columns ) )

**Description :** Classe les variables (colonnes) dans des groupes qui peuvent être représentés par un seul composant ou une seule variable. La classification des variables peut être utilisée comme une technique de réduction dimensionnelle.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Cluster Variables( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );

```

### Collapse All Column Groups

**Syntaxe :** obj << Collapse All Column Groups

**Description :** Réduit tous les groupes de colonnes

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Group Columns( "Monday", BP 8M, 3 );
dt << Group Columns( "Wednesday", BP 8W, 3 );
dt << Group Columns( "Friday", BP 8F, 3 );
dt << Expand All Column Groups;
Wait( 2 );
dt << Collapse All Column Groups;

```

### Column Filter

**Syntaxe :** obj << Column Filter

**Description :** Retrieves object to manipulate active column filter for the table.

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Expand All Column Groups;
dt:sex << Hide( 1 );

// Use immediately
dt << Column Filter( Column Name( "Weight|Wt", Regular Expression( 1 ) ) );
dt << Column Filter( Tags( {"Blood Measurements", "Good Measure"} ) );
dt << Column Filter(
	Tags( {"Blood Measurements", "Good Measure"}, Intersection( 1 ) )
);
dt << Column Filter( Column Name( "3" ), Tags( {"Blood Measurements"} ) );
dt << Column Filter( Clear );

// Return an object and send messages later
cf = dt << Column Filter;
cf << Column Name( "3yr" );
cf << Get Script;

// Related to (can also send to object)
dt << Show Hidden Columns in Columns List( 0 );
dt << Apply Columns List Filter to Data Grid( 0 );

```

### Column Switcher

**Syntaxe :** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Description :** Crée un sélecteur de colonne autonome

**JMP Version ajoutée :** 16

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
dt << Column Switcher(
	:Process 1,
	{:Process 1, :Process 3, :Process 4, :Process 5, :Process 6, :Process 7}
);

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Bivariate",
	H List Box(
		cs = dt << Column Switcher( :age, {:age, :weight} ),
		V List Box(
			female = Bivariate( Y( :age ), X( :height ), Where( :sex == "F" ) ),
			male = Bivariate( Y( :age ), X( :height ), Where( :sex == "M" ) )
		)
	)
);
cs << Link Platform( female );
cs << Link Platform( male );

```

**Exemple 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Bivariate",
	H List Box(
		cs = dt << Column Switcher( :age, {:age, :weight} ),
		b = Bivariate( Y( :age ), X( :height ), by( :sex ) )
	)
);
cs << Link Platform( b[1] );
cs << Link Platform( b[2] );

```

### Combine Columns

**Syntaxe :** obj << Combine Columns

**Description :** Combiner plusieurs colonnes en une seule colonne, avec les valeurs source de chaque colonne séparées par le séparateur désigné.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Combine Columns(
	delimiter( "," ),
	Columns(
		:Brush After Waking Up, :Brush After Meal, :Brush Before Sleep,
		:Brush Another Time
	),
	Selected Columns are Indicator Columns( 1 ),
	Column Name( "When to Brush" )
);

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Combine Columns(
	delimiter( "," ),
	Columns(
		:Brush After Waking Up, :Brush After Meal, :Brush Before Sleep,
		:Brush Another Time
	),
	Column Name( "When to Brush" )
);

```

### Compare Data Tables

**Syntaxe :** obj << Compare Data Tables( Compare with( Data Table( name )), <Compare table variables and scripts( 0|1)>, <show window>,<Compare columns attributes and properties( 0|1)>, <Compare data( 0|1 )>, <Show difference summary(0|1)>, <Show difference plot(0|1)> )

**Description :** Compare deux tables de données ouvertes et signale les différences entre les données, ainsi que les métadonnées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
dt << compare data tables( compare With( Data Table( "Students2" ) ) );

```

### Compress File When Saved

**Syntaxe :** obj << Compress File When Saved( state=0|1 )

**Description :** Compresser le fichier lors de l&apos;enregistrement de la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Compress File When Saved( 1 );

```

### Compress Selected Columns

**Syntaxe :** obj << Compress Selected Columns( { column1, column2, ...} )

**Description :** Compresse chaque colonne au format de compression maximum.

Les données caractère seront de 1 octet si leur nombre de niveaux est inférieur à 255.

Les données numériques seront de 1 octet si leur valeur est comprise ente -127 et 127.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Compress Selected Columns( {:Age, :sex, :Height, :Weight} );

```

### Concatenate

**Syntaxe :** obj << Concatenate( <Private>, <Invisible>, Data Table( name ), <Data Table(name), ...> <Label( column )>, <Output Table( name ) | Append to first table>, <Keep Formulas>, <Create Source Column> )

**Description :** Extrait les lignes de plusieurs tables de données dans une nouvelle table de données ou les ajoute à la fin de la première table de données.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Trial1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Trial2.jmp" );
dt << Concatenate( Data Table( "Trial2" ) );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students.jmp" );
dt1 = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
dt << Concatenate(
	Data Table( dt1 ),
	Data Table( dt2 ),
	"Append to first table",
	"Create source column"
);

```

### Contingency

**Syntaxe :** Contingency( Y( columns ), X( columns ) )

**Description :** Modélise une réponse catégorielle dans un ensemble de groupes catégoriels. Les méthodes d&apos;analyse incluent les tests du khi-deux et les graphiques en mosaïque.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

### Contour Plot

**Syntaxe :** Contour Plot( X( column, column ), Y( column ) )

**Description :** Produit un graphique avec trois variables dans une vue bidimensionnelle au sein de laquelle la troisième variable est représentée par des courbes d&apos;isoréponses de valeur égale.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );

```

### Contour Profiler

**Syntaxe :** Contour Profiler( Y( column1, column2, ...  ) )

**Description :** Produit un graphique d&apos;isoréponses interactif qui vous permet d&apos;observer comment une ou plusieurs réponses prévues changent en fonction des paires de facteurs. Les valeurs des facteurs non utilisés dans le graphique peuvent varier pour observer davantage l&apos;impact des paramètres des facteurs sur les réponses prévues.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);

```

### Control Chart Builder

**Syntaxe :** Control Chart Builder( Class( "Shewhart Variables"|"Shewhart Attribute"|"Short Run"|"Rare Event" ), Variables( variables ), <Chart( Position( number ), Points( Statistic( "statistic" ), <points options> ), Limits( Sigma( "sigma" ), <limits options> )> ) ) )

**Description :** Vous permet de créer des cartes de contrôle de manière interactive. Ces cartes sont utilisées pour déterminer si un processus est stable et prédictible. La plate-forme Générateur de carte de contrôle peut être utilisée pour créer les cartes de contrôle des types suivants : IMR, X-barre, de petites séries, de suivi, P, NP, C, U, Laney P&apos;, Laney U&apos;, Levey-Jennings, IMR sur les moyennes, à 3 niveaux, et d&apos;événement rare.

**Carte à 3 niveaux (taille du sous-groupe définie)**

```js

Names Default To Here( 1 );
// Create a Three Way chart by adding a dispersion chart after adding a Y variable and setting a subgroup size.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart( Position( 1 ), Points( Statistic( "Average" ) ), Limits( Sigma( "Moving Range" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range on Means" ) ), Limits( Sigma( "Moving Range" ) ) ),
	Chart(
		Position( 3 ),
		Points( Statistic( "Standard Deviation" ) ),
		Limits( Sigma( "Standard Deviation" ) )
	)
);

```

**Carte à 3 niveaux (variable de sous-groupe)**

```js

Names Default To Here( 1 );
// Create a Three Way chart by adding a dispersion chart after adding a Y variable and adding a subgroup variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Points( Statistic( "Average" ) ), Limits( Sigma( "Moving Range" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range on Means" ) ), Limits( Sigma( "Moving Range" ) ) ),
	Chart( Position( 3 ), Points( Statistic( "Range" ) ), Limits( Sigma( "Range" ) ) )
);

```

**Carte à étendue mobile de la médiane**

```js

Names Default To Here( 1 );
// Create a Median Moving Range chart by adding a Y variable and changing the Sigma to Median Moving Range on both the location and dispersion charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Chart( Position( 1 ), Limits( Sigma( "Median Moving Range" ) ) ),
	Chart( Position( 2 ), Limits( Sigma( "Median Moving Range" ) ) )
);

```

**Carte à étendue mobile de la médiane sur les écarts-types de groupe (taille du sous-groupe définie)**

```js

Names Default To Here( 1 );
// Create a Median Moving Range on Group Standard Deviations chart by adding a Y variable and defining a subgroup size, changing the Statistic on the location chart to Standard deviation, on the dispersion chart to Moving Range on Std Dev, and changing the Sigma to Median Moving Range on both the location and dispersion charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart(
		Position( 1 ),
		Points( Statistic( "Standard Deviation" ) ),
		Limits( Sigma( "Median Moving Range" ) )
	),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Std Dev" ) ),
		Limits( Sigma( "Median Moving Range" ) )
	)
);

```

**Carte à étendue mobile de la médiane sur les écarts-types de groupe (variable de sous-groupe)**

```js

Names Default To Here( 1 );
// Create a Median Moving Range on Group Standard Deviations chart by adding a Y variable and a subgroup variable, changing the Statistic on the location chart to Standard deviation, on the dispersion chart to Moving Range on Std Dev, and changing the Sigma to Median Moving Range on both the location and dispersion charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart(
		Position( 1 ),
		Points( Statistic( "Standard Deviation" ) ),
		Limits( Sigma( "Median Moving Range" ) )
	),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Std Dev" ) ),
		Limits( Sigma( "Median Moving Range" ) )
	)
);

```

**Carte à étendue mobile de la médiane sur les moyennes de groupe (taille du sous-groupe définie)**

```js

Names Default To Here( 1 );
// Create a Median Moving Range on Group Means chart by adding a Y variable and defining a subgroup size, changing the Statistic on the dispersion chart to Moving Range on Means, and changing the Sigma to Median Moving Range on both the location and dispersion charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart( Position( 1 ), Limits( Sigma( "Median Moving Range" ) ) ),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Means" ) ),
		Limits( Sigma( "Median Moving Range" ) )
	)
);

```

**Carte à étendue mobile de la médiane sur les moyennes de groupe (variable de sous-groupe)**

```js

Names Default To Here( 1 );
// Create a Median Moving Range on Group Means chart by adding a Y variable and a subgroup variable, changing the Statistic on the dispersion chart to Moving Range on Means, and changing the Sigma to Median Moving Range on both the location and dispersion charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Limits( Sigma( "Median Moving Range" ) ) ),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Means" ) ),
		Limits( Sigma( "Median Moving Range" ) )
	)
);

```

**Carte C**

```js

Names Default To Here( 1 );
// Create a C chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Count, and changing the Sigma to Poisson.
dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Poisson" ) ) )
);

```

**Carte de contrôle de Levey-Jennings**

```js

Names Default To Here( 1 );
// Create a Levey-Jennings chart by adding a Y variable, removing the dispersion chart, and changing the Sigma to Levey Jennings. Make sure that the Statistic is set to Individual.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Show Two Shewhart Charts( 0 ),
	Variables( Y( :Weight ) ),
	Chart( Points( Statistic( "Individual" ) ), Limits( Sigma( "Levey Jennings" ) ) )
);

```

**Carte de différence pour petites séries**

```js

Names Default To Here( 1 );
// Create a Short Run Difference chart by changing the class to Short Run and adding a Product or Part variable. Make sure that the Statistic values for the location chart and dispersion chart are set to Centered and Moving Range Centered, respectively. Centered Short Run control charts are sometimes referred to as Deviation from Nominal (DNOM) charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Class( "Short Run" ), Variables( Y( :Weight ), Part( :Product ) ) );

```

**Carte de différence pour petites séries pour X-barre**

```js

Names Default To Here( 1 );
// Create a Short Run Difference chart for summarized data by changing the class to Short Run and adding a Product or Part variable,  Short Run Standardized charts are sometimes referred to as Z-MR charts. Centered Short Run control charts are sometimes referred to as Deviation from Nominal (DNOM) charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Fancy Chocolate Factory.jmp" );
obj = dt << Control Chart Builder(
	Show Product Separators( 0 ),
	Class( "Short Run" ),
	Variables( Subgroup( :Box ), Y( :"%Cocoa"n ), Part( :Product ) )
);

```

**Carte de suivi**

```js

Names Default To Here( 1 );
// Create a Run chart by adding a Y variable, turning off the limits, and removing the dispersion chart.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Show Two Shewhart Charts( 0 ),
	Show Limit Summaries( 0 ),
	Variables( Y( :Weight ) ),
	Chart( Limits( Show Lower Limit( 0 ), Show Upper Limit( 0 ) ) ),
	Show Control Panel( 0 )
);

```

**Carte G d'événement rare**

```js

Names Default To Here( 1 );
// Create a G chart by changing the class to Rare Event and adding a nonnegative discrete Y variable. Make sure that the Sigma is set to Negative Binomial.
dt = Open( "$SAMPLE_DATA/Quality Control/Fan Burnout.jmp" );
obj = dt << Control Chart Builder(
	Class( "Rare Event" ),
	Variables( Subgroup( :Burnout ), Y( :Hours between Burnouts ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Negative Binomial" ) ) )
);

```

**Carte IMR**

```js

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );

```

**Carte IMR sur les écarts-types de groupe (taille du sous-groupe définie)**

```js

Names Default To Here( 1 );
// Create an IMR on Group Standard Deviation chart by adding a Y variable and defining a subgroup size, and changing the Statistic on the location chart to Standard Deviation, on the dispersion chart to Moving Range on Std Dev and the Sigma on both charts to Moving Range.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart( Position( 1 ), Points( Statistic( "Standard Deviation" ) ), Limits( Sigma( "Moving Range" ) ) ),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Std Dev" ) ),
		Limits( Sigma( "Moving Range" ) )
	)
);

```

**Carte IMR sur les écarts-types de groupe (variable de sous-groupe)**

```js

Names Default To Here( 1 );
// Create an IMR on Group Standard Deviation chart by adding a Y variable and a subgroup variable, and changing the Statistic on the location chart to Standard Deviation, on the dispersion chart to Moving Range on Std Dev and the Sigma on both charts to Moving Range.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Points( Statistic( "Standard Deviation" ) ), Limits( Sigma( "Moving Range" ) ) ),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Std Dev" ) ),
		Limits( Sigma( "Moving Range" ) )
	)
);

```

**Carte IMR sur les moyennes (taille du sous-groupe définie)**

```js

Names Default To Here( 1 );
// Create an IMR on Means chart by adding a Y variable and defining a subgroup size, and changing the Statistic on the dispersion chart to Moving Range on Means and the Sigma on both charts to Moving Range.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart( Position( 1 ), Limits( Sigma( "Moving Range" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range on Means" ) ), Limits( Sigma( "Moving Range" ) ) )
);

```

**Carte IMR sur les moyennes (variable de sous-groupe)**

```js

Names Default To Here( 1 );
// Create an IMR on Means chart by adding a Y variable and a subgroup variable, and changing the Statistic on the dispersion chart to Moving Range on Means and the Sigma on both charts to Moving Range.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Limits( Sigma( "Moving Range" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range on Means" ) ), Limits( Sigma( "Moving Range" ) ) )
);

```

**Carte NP**

```js

Names Default To Here( 1 );
// Create an NP chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Count, and changing the Sigma to Binomial (P, NP).
dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Binomial" ) ) )
);

```

**Carte P**

```js

Names Default To Here( 1 );
// Create a P chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Binomial (P, NP).
dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Binomial" ) ) )
);

```

**Carte P'**

```js

Names Default To Here( 1 );
// Create a P' chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Laney P'.
dt = Open( "$SAMPLE_DATA/Quality Control/Washers.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Lot ), Y( :"# defective"n ), n Trials( :Lot Size ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Laney P Prime" ) ) )
);

```

**Carte standardisée pour petites séries**

```js

Names Default To Here( 1 );
// Create a Short Run Standardized chart by changing the class to Short Run and adding a Subgroup and a Product or Part variable, changing the Statistic for the location chart type to Standardized, and changing the Statistic for the dispersion chart to Moving Range Standardized. Short Run Standardized charts are sometimes referred to as Z-MR charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Class( "Short Run" ),
	Variables( Y( :Weight ), Part( :Product ) ),
	Chart( Position( 1 ), Points( Statistic( "Standardized" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range Standardized" ) ) )
);

```

**Carte standardisée pour petites séries pour X-barre**

```js

Names Default To Here( 1 );
// Create a Short Run Standardized chart for summarized data by changing the class to Short Run and adding a Subgroup and a Product or Part variable,  Short Run Standardized charts are sometimes referred to as Z-MR charts. Centered Short Run control charts are sometimes referred to as Deviation from Nominal (DNOM) charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Fancy Chocolate Factory.jmp" );
obj = dt << Control Chart Builder(
	Show Product Separators( 0 ),
	Class( "Short Run" ),
	Variables( Subgroup( :Box ), Y( :"%Cocoa"n ), Part( :Product ) ),
	Chart( Position( 1 ), Points( Statistic( "Standardized" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Range Standardized" ) ) )
);

```

**Carte T d'événement rare**

```js

Names Default To Here( 1 );
// Create a T chart by changing the class to Rare Event, changing the Sigma to Weibull, and adding a nonnegative discrete Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Fan Burnout.jmp" );
obj = dt << Control Chart Builder(
	Class( "Rare Event" ),
	Variables( Subgroup( :Burnout ), Y( :Hours between Burnouts ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Weibull" ) ) )
);

```

**Carte U**

```js

Names Default To Here( 1 );
// Create a U chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Poisson.
dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Poisson" ) ) )
);

```

**Carte U'**

```js

Names Default To Here( 1 );
// Create a U' chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Laney U'.
dt = Open( "$SAMPLE_DATA/Quality Control/Washers.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Lot ), Y( :"# defective"n ), n Trials( :Lot Size ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Laney U Prime" ) ) )
);

```

**Carte X-barre/R**

```js

Names Default To Here( 1 );
// Create an XBar/R chart by adding a subgroup or setting a subgroup size after adding a Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Set Subgroup Size( 4 ) );

```

**Carte X-barre/S (taille du sous-groupe définie)**

```js

Names Default To Here( 1 );
// Create an XBar/S chart by adding a Y variable and defining a subgroup size, changing the Statistic for the dispersion chart to Standard Deviation, and changing the Sigma for the location chart to Standard Deviation.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart( Position( 1 ), Limits( Sigma( "Standard Deviation" ) ) ),
	Chart(
		Position( 2 ),
		Points( Statistic( "Standard Deviation" ) ),
		Limits( Sigma( "Standard Deviation" ) )
	)
);

```

**Carte X-barre/S (variable de sous-groupe)**

```js

Names Default To Here( 1 );
// Create an XBar/S chart by adding a Y variable and a subgroup variable, changing the Statistic for the dispersion chart to Standard Deviation, and changing the Sigma for the location chart to Standard Deviation.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Limits( Sigma( "Standard Deviation" ) ) ),
	Chart(
		Position( 2 ),
		Points( Statistic( "Standard Deviation" ) ),
		Limits( Sigma( "Standard Deviation" ) )
	)
);

```

### Copy Column Properties

**Syntaxe :** obj << Copy Column Properties( <column 1 column 2, ...> )

**Description :** Copie dans le presse-papiers les propriétés de colonne des colonnes sélectionnées dans une liste reprenant les listes des propriétés. De façon facultative, vous pouvez spécifier une liste des colonnes sources au lieu de les présélectionner dans la table de données.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << Select Columns( :MODULUS, :ELONG );
dt << Copy Column Properties;
New Window( "Script", Script Box( "//Try Paste here
                     " ) );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << Copy Column Properties( {:MODULUS, :ELONG} );
New Window( "Script", Script Box( "//Try Paste here
                     " ) );

```

### Copy Selected Properties

**Syntaxe :** obj << Copy Selected Properties

**Description :** Copier les propriétés de table sélectionnées dans le presse-papier.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << select properties( {"Distribution", "Oneway"} );
proplist = dt << Copy Selected Properties();
New Window( "Script", Script Box( "//Try Paste here
                     " ) );

```

### Copy Table Script

**Syntaxe :** obj << Copy Table Script( <"No data"> )

**Description :** Copie un script pour recréer la table de données. Le script résultant inclut tous les scripts de table stockés dans la table de données. De façon facultative, ajouter le mot clé "Sans données" pour omettre les données du script.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Copy Table Script();
New Window( "Script", Script Box( "//Try Paste here
                     " ) );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Copy Table Script( "No Data" );
New Window( "Script", Script Box( "//Try Paste here
                     " ) );

```

### Cumulative Damage

**Syntaxe :** Cumulative Damage

**Description :** Analyse les modèles à contrainte variable et à contrainte échelonnée.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );
obj = Cumulative Damage(
	Model Type( "Step Stress" ),
	Time to Event Data Table(
		Data Table( "CD Step Stress" ),
		Time to Event( :Time ),
		Censor( :Censor ),
		Pattern ID( :Pattern ID ),
		Censor Code( 1 )
	),
	Step Stress Pattern Data Table(
		Data Table( "CD Step Stress Pattern" ),
		Stress Duration( :Duration ),
		Stress( :Stress ),
		Pattern ID( :Pattern ID )
	),
	Relationship( "Inverse Power" ),
	Distribution( "Lognormal" ),
	Pattern Continuation( "Terminate" )
);

```

### Custom Profiler

**Syntaxe :** Custom Profiler( Y( column1, column2, ... ) )

**Description :** Fournit une interface qui vous permet d&apos;optimiser les réponses sans sortie graphique. Ce profileur est utile pour les plus grands problèmes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Custom Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);

```

### Debug Script

**Syntaxe :** obj << Debug Script( name )

**Description :** Effectue le débogage d’un script nommé et enregistré en tant que propriété dans la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Debug Script( "Distribution" );

```

### Decision Tree

**Syntaxe :** obj << Decision Tree

### Define Tag

**Syntaxe :** Define Tag(<name>, [Color(<color>)], [Symbol(<symbol char>)], [Description(<text>)], [Replace(<existing tag name>)])

**Description :** Créez ou mettez à jour une définition de balise de colonne dans la table. Si la balise n&apos;existe pas, créez-la. Si vous le souhaitez, affectez une couleur, un symbole ou d&apos;autres attributs.

**JMP Version ajoutée :** 19

**Color, Symbol, or None**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Define Tag( "ID1", Color( Red ) );
dt << Define Tag( "ID2", Symbol( "\!UD83D\!UDCCB" ) );
dt << Define Tag( "ID3" );

```

**New Tag**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Define Tag( "ID", Color( Blue ) );

```

**Replace**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Define Tag( "ID", Color( Red ) );
:height << Set Property( "Tags", {"ID"} );
dt << Define Tag( "Identifier", Replace( "ID" ), Color( Blue ) );
:height << Get Property( "Tags" );

```

### Degradation

**Syntaxe :** Degradation( Y( column ), Time( column ), Application( "Repeated Measures Degradation"|"Destructive Degradation"|"Stability Test" ), <X( column )>, <Label( column )>, <Freq( column )>, <Censor( column )>, <Censor Code( value )>, <Upper Spec Limit( value )>, <Lower Spec Limit( value )>, <Censoring Time( value )> )

**Description :** Modélise la dégradation dans le temps en utilisant des courbes linéaires et non linéaires. Les options de l&apos;analyse incluent l&apos;analyse de la stabilité et la génération de pseudo-données de défaillance.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);

```

### Delete Columns

**Syntaxe :** obj << Delete Columns( <column>, <column>, ... )

**Description :** Supprime la ou les colonnes spécifiées. Si aucun argument n&apos;est spécifié, supprime les colonnes sélectionnées dans la table de données.

**JMP Version ajoutée :** 14

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:height << Set Selected;
Wait( 2 );
dt << Delete Columns();

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
dt << Delete Columns( :Height );

```

**Exemple 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
cols = {"height", "weight"};
Wait( 2 );
dt << Delete Columns( cols );

```

### Delete Filter View

**Syntaxe :** obj << Delete Filter View( name | obj )

**Description :** Supprimez la vue de filtre donnée.

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv dream = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
fv male = dt << New Filter View(
	"Male",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Sex ), Where( :Sex == "MALE" ) ) )
);
Wait( 1 );
dt << Delete Filter View( fv dream );
dt << Delete Filter View( "Male" );

```

### Delete Scripts

**Syntaxe :** obj << Delete Scripts( <script| {script 1, script 2, script 3, ...} > )

**Description :** Supprime les scripts spécifiés de la table de données.

**JMP Version ajoutée :** 14

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Table Script(
	"New Script",
	Distribution( Column( :Height, :Weight ), By( :sex ) )
);
Wait( 2 );
dt << Delete Scripts( "New Script" );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
list = {"Bivariate", "Logistic"};
Wait( 2 );
dt << Delete Scripts( list );

```

### Delete Table Property

**Syntaxe :** obj << Delete Table Property

**Description :** Alias pour Supprimer les scripts.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Table Script(
	"New Script",
	Distribution( Column( :Height, :Weight ), By( :sex ) )
);
Wait( 2 );
dt << Delete Table Property( "New Script" );

```

### Delete Table Variable

**Syntaxe :** obj << Delete Table Variable( name )

**Description :** Supprime une variable de table enregistrée dans la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Table Variable( "Days", 42 );
Wait( 2 );
dt << Delete Table Variable( "Days" );

```

### Delete Tag

**Syntaxe :** Delete Tag(<tag>|{<tag>, <tag>, ...}, [force(0|1)

**Description :** Supprimez une balise de la table de données. Les balises ne seront pas supprimées si des colonnes les utilisent toujours, sauf si l&apos;indicateur Force(1) est fourni.

**JMP Version ajoutée :** 19

**Delete tag**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Define Tag( "ID" );
Wait( 3 );
dt << Delete Tag( "ID" );

```

**Force delete**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Define Tag( "ID" );
:height << Set Property( "Tags", {"ID"} );
Wait( 3 );
dt << Delete Tag( "ID", Force( 1 ) );

```

### Deselect Column Group

**Syntaxe :** obj << Deselect Column Group( name of group | list of names )

**Description :** Désélectionner les groupes de colonnes. Si le groupe de colonnes est omis, tous les groupes de colonnes seront désélectionnés.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << select column group();
Wait( 2 );
dt << deselect column group( "pollutants" );

```

### Destructive Degradation

**Syntaxe :** Destructive Degradation( Y( column ), Time( column ), <X( column )>, <Freq( column )>, <Censor( column ), Censor Code( value )> )

**Description :** Modélise les données de dégradation destructrice dans le temps.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" )
);

```

### Diagram

**Syntaxe :** Diagram( Y( column ), X( column ) )

**Description :** Crée un diagramme de cause et effet. Aussi appelé diagramme d&apos;Ishikawa ou en arête de poisson. Ce sont des diagrammes hiérarchiques qui vous permettent d&apos;explorer les causes racine.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Ishikawa.jmp" );
obj = dt << Diagram( Y( :Child ), X( :Parent ) );

```

### Disable Undo

**Syntaxe :** obj << Disable Undo( state=0|1 )

**Description :** Lorsque l&apos;option est définie, aucune des opérations effectuées sur la table de données ne peut être annulée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << disable undo( 1 );

```

### Discriminant

**Syntaxe :** Discriminant( Y( columns ), X( columns ) )

**Description :** Estime la distance entre chaque observation et la moyenne multivariée (centroïde) de chaque groupe à l&apos;aide de la distance de Mahalanobis. Les observations sont ensuite classées dans le groupe le plus proche.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

### Distance Matrix

**Syntaxe :** Distance Matrix( Y( columns ) )

**Description :** Calcule les distances entre les lignes à l&apos;aide de différentes méthodes.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Distance Matrix(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

### Distribution

**Syntaxe :** Distribution( Column() )

**Description :** Affiche la distribution et les statistiques de résumé univariées pour chaque variable. Les résultats et options dépendent du type de modélisation de chaque variable. Certaines options incluent les histogrammes, les boîtes à moustaches, les graphiques des quantiles, l&apos;ajustement des distributions et l&apos;analyse de capabilité.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
colref = Column( "age" );
// Correct way to use the colref
Distribution( Column( colref ) );
// This will not work
Distribution( colref );

```

### EMP Measurement Systems Analysis

**Syntaxe :** EMP Measurement Systems Analysis( Y( column ), X( columns ), Part(column), Model(Main|Crossed|Crossed with Two Factor Interactions|Nested|Crossed then Nested|Nested then Crossed), Dispersion Chart Type(Range|Standard Deviation) )

**Description :** Lance la méthode d&apos;évaluation du processus de mesure (EMP) pour l’analyse des systèmes de mesure. Les graphiques des moyennes et de dispersion (étendue ou écart-type) sont affichés par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

### EWMA Control Chart

**Syntaxe :** EWMA Control Chart( Y( column ), <Subgroup( column )>, <By( column )>, <Center Data( 1 )> )

**Description :** Crée un graphique qui représente les moyennes mobiles exponentiellement pondérées et un graphique qui représente les observations individuelles ou les moyennes des sous-groupes. Une carte EWMA est également appelée une carte de contrôle par rétroaction.

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );

```

### End Data Update

**Syntaxe :** obj << End Data Update

**Description :** Envoie tous les messages de mise à jour conservés depuis le lancement de la commande de début de mise à jour des données. Ceci s’avère utile pour la mise à jour sans interruption de plusieurs cellules. Cela s&apos;applique uniquement aux changements apportés aux cellules de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Central Limit Theorem.jmp" );
dt << Add Rows( 2000 );
dt << Distribution( Column( :"N=1"n, :"N=5"n, :"N=10"n ) );
Wait();
dt << Begin Data Update;
dt << Add Rows( 2000 );
dt << End Data Update;

```

### Exclude Columns

**Syntaxe :** obj << Exclude Columns( < 0|1 > | < { column1, column2, ... } >  )

**Description :** Exclue les colonnes de toute exécution d&apos;analyse

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Exclude Columns( 1, {:Age, :Name} );

```

### Exit Filter View

**Syntaxe :** obj << Exit Filter View

**Description :** Revenez à la vue non filtrée. Si vous êtes déjà dans la vue non filtrée, cela n&apos;a pas d&apos;effet.

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
dt << New Filter View(
	"Dream",
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Wait( 1 );
dt << Exit Filter View;

```

### Expand All Column Groups

**Syntaxe :** obj << Expand All Column Groups

**Description :** Étend tous les groupes de colonnes

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Group Columns( "Monday", BP 8M, 3 );
dt << Group Columns( "Wednesday", BP 8W, 3 );
dt << Group Columns( "Friday", BP 8F, 3 );
dt << Collapse All Column Groups;
Wait( 2 );
dt << Expand All Column Groups;

```

### Explore Missing Values

**Syntaxe :** Explore Missing Values( Y( columns ) )

**Description :** Trouver les modèles des valeurs manquantes et conduire l&apos;imputation.

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );

```

### Explore Outliers

**Syntaxe :** Explore Outliers( Y( columns ) )

**Description :** Identifie, explore et gère les valeurs aberrantes dans les données univariées ou multivariées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );

```

### Explore Patterns

**Syntaxe :** Explore Patterns( Y( columns ) )

**Description :** Recherche de caractéristiques inhabituelles dans les données, notamment de périodes longues, de séquences longues en doublon, de valeurs formatées inhabituelles et de périodes de relations linéaires.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ) );

```

### Factor Analysis

**Syntaxe :** Factor Analysis( Y( columns ) )

**Description :** Découvre la structure sous-jacente des données en extrayant les variables non observées, ou les facteurs, qui représentent la variabilité commune dans les variables observées. Le pivotement du facteur est utilisé pour accroître leur interprétabilité.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);

```

### Fatigue Model

**Syntaxe :** Fatigue Model( N( column ), X( column ), <Freq( column )>, <Censor( column ), Censor Code( value )> )

**Description :** Analyse les données de fatigue, également connues sous le nom de modélisation de courbe S-N.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Metal Wire Z.jmp" );
obj = dt << Fatigue Model(
	N( :Cycles ),
	S( :Stress ),
	Censor( :Censoring Indicator ),
	Censor Code( "Runout" )
);

```

### Fit Curve

**Syntaxe :** Fit Curve( Y( column ), X( column ) )

**Description :** Ajuste une variété de modèles non linéaires intégrés.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;

```

### Fit Life by X

**Syntaxe :** Fit Life by X( Y( column ), X( column ), Relationship( string ), Distribution( string ), <Censor( column )> )

**Description :** Analyse la distribution des données Temps avant événement paramétrées par un seul facteur de régression. Les options de l&apos;analyse incluent les modèles accélérés de défaillance, les distributions de survie dans les groupes et les transformations des facteurs de régression.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);

```

### Fit Model

**Syntaxe :** Fit Model( Y( columns ), Effects( columns ), Personality( "Standard Least Squares" ) )

**Description :** Ajuste les modèles de régression linéaire, notamment les modèles d&apos;analyse de la variance, de régression logistique, des composants de la variance, de régression pénalisée, de régression pas à pas, MANOVA et de survie.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run Model()
);

```

### Fit Parametric Survival

**Syntaxe :** Fit Model( Y( columns ), Effects( columns ), Personality( "Parametric Survival" ), Censor( columns ) )

**Description :** Ajuste un modèle général de régression linéaire aux durées de survie. Ces modèles peuvent être utilisés pour les durées de survie qui peuvent être exprimées comme une fonction d&apos;une ou plusieurs variables explicatives. Prend en compte différentes distributions de survie et la censure.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);

```

### Fit Proportional Hazards

**Syntaxe :** Fit Model( Y( columns ), Effects( columns ), Personality( "Proportional Hazard" ), Censor( columns ) )

**Description :** Ajuste un modèle de régression semiparamétrique (le modèle des risques proportionnels de Cox) pour évaluer l&apos;effet des variables explicatives sur les durées de survie tout en tenant compte de la censure.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);

```

### Formula Depot

**Syntaxe :** Formula Depot

**Description :** Un conteneur pour les modèles de prévision qui prend en charge la comparaison de modèles, le profilage et la génération du code de calcul du score. Le dépôt des formules est lancé via le menu Analyse, les commandes Publier dans les plates-formes de modélisation, Recoder et l&apos;éditeur de formules.

```js

Names Default To Here( 1 );

fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];

```

### Functional Data Explorer

**Syntaxe :** Functional Data Explorer( Y(column), X(column), ID(column) )

**Description :** Ajuste les modèles fonctionnels en utilisant un modèle basé sur B-spline, P-spline, Fourier ou Ondelettes. Une analyse en composantes principales fonctionnelles peut être effectuée sur le modèle fonctionnel pour extraire les fonctions importantes des données. Il existe également une option permettant d&apos;effectuer l&apos;analyse en composantes principales fonctionnelles directement sur les données, sans ajuster d&apos;abord le modèle de la fonction de base.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

### Gaussian Process

**Syntaxe :** Gaussian Process( Y( column ), X( columns ) )

**Description :** Modélise la relation entre une réponse continue et un ou plusieurs régresseurs continus par un spline avec interpolation.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/2D Gaussian Process Example.jmp" );
obj = dt << Gaussian Process( Y( :Y ), X( :X1, :X2 ) );

```

### Get Active Filter View

**Syntaxe :** fv = obj << Get Active Filter View

**Description :** Récupérez la vue de filtre active. Renvoie un objet FilterView.

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
dt << New Filter View(
	"Dream",
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
fv active = dt << Get Active Filter View;
Show( fv active << Get Name );

```

### Get All Columns As Matrix

**Syntaxe :** obj << Get All Columns As Matrix

**Description :** Renvoie la table de données sous forme de matrice. Les colonnes de caractères sont numérotées en fonction des niveaux triés, en commençant par 1.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
m = dt << Get All Columns As Matrix();
Show( m );

```

### Get As Report

**Syntaxe :** obj << Get As Report

**Description :** Renvoie un rapport de la table de données.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
jmp_report = New Window( "Big Class",
	Text Box( "Big Class" ),
	H List Box( Outline Box( "Big Class", dt << Get As Report ) ), 

);

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Where( :Age < 14 );
dt << Select Columns( :name, :age, :height );
jmp_report = New Window( "Big Class",
	Text Box( "Big Class" ),
	H List Box( Outline Box( "Big Class", dt << Get As Report ) ), 

);

```

### Get Cell Height

**Syntaxe :** obj << Get Cell Height

**Description :** Obtenir la hauteur d&apos;affichage d&apos;une colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
ht = dt << Get Cell Height;

```

### Get Column Group

**Syntaxe :** obj << Get Column Group( name of column group | list of names )

**Description :** Renvoie la liste des colonnes dans le groupe de colonnes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << get column group( "xy" );

```

### Get Column Groups Names

**Syntaxe :** obj << Get Column Groups Names

**Description :** Renvoie les noms des groupes de colonnes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << get column groups names;

```

### Get Column Names

**Syntaxe :** obj << Get Column Names( <Numeric|Character|RowState>, <Continuous|Ordinal|Nominal>,<String> )

**Description :** Renvoie les noms de colonnes de la table de données. Si le mot-clé de chaîne est utilisé, il renvoie les chaînes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
n = dt << Get Column Names();
Show( n );
CNames = dt << Get Column Names( Continuous );
Show( CNames );
SNames = dt << Get Column Names( String );
Show( SNames );

```

### Get Column Reference

**Syntaxe :** obj << Get Column Reference( list of column names )

**Description :** Renvoie la référence de colonne des chaînes dans la liste

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
refList = dt << Get Column Reference( {"sex", "age"} );
Show( refList );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
a = {1, 3, 4};
refList = dt << Get Column Reference( a );
Show( refList );

```

### Get Edit Lock

**Syntaxe :** obj << Get Edit Lock

**Description :** Obtenir la liste les opérations interdites sur la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Edit Lock( "Add Rows", "Delete Columns" );
Wait( 2 );
dt << Get Edit Lock();

```

### Get Excluded Columns

**Syntaxe :** obj << Get Excluded Columns

**Description :** Renvoie les colonnes actuellement exclues de la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Name << Exclude;
exCols = dt << Get Excluded Columns;
Show( exCols );

```

### Get Excluded Rows

**Syntaxe :** obj << Get Excluded Rows

**Description :** Renvoie les lignes actuellement exclues de la table de données. Préférer Where.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( 1 );
dt << Select Rows( 5 );
dt << Exclude();
r1 = dt << Get Excluded Rows();
r2 = Where( Excluded() );
Show( r1, r2 );

```

### Get Filter View

**Syntaxe :** fv = obj << Get Filter View( name | <<Temporary | <<Unfiltered )

**Description :** Get a filter view by name, or get one of the special filter views by using <<Temporary or <<Unfiltered. If a filter view by the given name does not exist, returns Empty().

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
fv dream = dt << Get Filter View( "Dream" );
Show( fv dream << Get Name );
Show( (dt << Get Filter View( <<Unfiltered )) << Get Name );

```

### Get Filter Views

**Syntaxe :** { fv, ... } = obj << Get Filter Views( < Temporary(0|1) >, < Unfiltered(0|1) > )

**Description :** Obtenez une liste de toutes les vues de filtre. Par défaut, les vues temporaires et non filtrées ne sont pas incluses.

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv dream = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
fvs = dt << Get Filter Views( Unfiltered( 1 ), Temporary( 1 ) );
Show( fvs << Get Name );

```

### Get Header Height

**Syntaxe :** obj << Get Header Height

**Description :** Obtenir la hauteur d&apos;affichage de l&apos;en-tête de colonne

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
ht = dt << Get Header Height;

```

### Get Hidden Columns

**Syntaxe :** obj << Get Hidden Columns

**Description :** Renvoie les colonnes actuellement masquées de la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Weight << Hide;
hidCols = dt << Get Hidden Columns;
Show( hidCols );

```

### Get Hidden Rows

**Syntaxe :** obj << Get Hidden Rows

**Description :** Renvoie les lignes actuellement masquées dans la table de données. Préférer Where.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( 1 );
dt << Select Rows( 5 );
dt << Hide();
r1 = dt << Get Hidden Rows();
r2 = Where( Hidden() );
Show( r1, r2 );

```

### Get Label Columns

**Syntaxe :** obj << Get Label Columns

**Description :** Renvoie les colonnes utilisées pour étiqueter les lignes.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
labelCols = dt << Get Label Columns;
Show( labelCols );

```

### Get Labeled Rows

**Syntaxe :** obj << Get Labeled Rows

**Description :** Renvoie les lignes actuellement étiquetées dans la table de données. Préférer Where.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( 1 );
dt << Select Rows( 5 );
dt << Label();
r1 = dt << Get Labeled Rows();
r2 = Where( Labeled() );
Show( r1, r2 );

```

### Get Lock

**Syntaxe :** obj << Get Lock( state=0|1 )

**Description :** Vérifie si la table de données est verrouillée.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
a = dt << get lock();
Show( a );
Wait( 1 );
dt << Lock Data Table( 1 );
a = dt << get lock();
Show( a );

```

### Get MM SAS DATA Step for Formula Columns

**Syntaxe :** obj << Get MM SAS DATA Step for Formula Columns

**Description :** Crée un code d’étape SAS DATA du Gestionnaire de modèles correspondant aux colonnes de formule dans une table de données JMP.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Ratio", Formula( :height / :weight ) );
dt << Get MM SAS Data Step for Formula Columns;

```

### Get Name

**Syntaxe :** obj << Get Name( <"Ignore Extension"> )

**Description :** Renvoie le nom affiché de la table de données. Avec l&apos;argument facultatif « Ignorer l&apos;extension », la commande renvoie le nom de la table de données sans l&apos;extension

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
n = dt << Get Name();
Show( n );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
n = dt << Get Name( "Ignore Extension" );
Show( n );

```

### Get Path

**Syntaxe :** obj << Get Path

**Description :** Renvoie le chemin d’accès complet de la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
path = dt << Get Path();
Show( path );

```

### Get Property

**Syntaxe :** obj << Get Property(  name  )

**Description :** Renvoie la propriété nommée de la table de données en tant que script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = dt << Get Property( "Distribution" );
Show( s );

```

### Get Row ID Width

**Syntaxe :** obj << Get Row ID Width

**Description :** Obtenir la largeur d&apos;affichage de la zone de l&apos;identifiant de ligne

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
ht = dt << Get Row ID Width;

```

### Get Row States

**Syntaxe :** obj << Get Row States

**Description :** Renvoie un vecteur contenant des valeurs d&apos;état de ligne encodées dans chaque ligne de la table de données. Notez que les valeurs d&apos;état de ligne encodées ne peuvent pas être utilisées en tant que Color Of. Voir l&apos;exemple 2 pour savoir comment utiliser directement le vecteur.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
rs = dt << Get Row States;
Show( rs );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
rs = dt << GetRowStates;
w = Marker Of( As Row State( rs[3] ) );
dt2 = Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( dt2, 5 ) = Marker State( w );

```

### Get Rows Where

**Syntaxe :** obj << Get Rows Where

**Description :** Renvoie les lignes de la table de données correspondant au critère Where. Préférer Where à la place.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r1 = dt << Get Rows Where( :sex == "M" );
r2 = Where( :sex == "M" );
Show( r1, r2 );

```

### Get SAS DATA Step for Formula Columns

**Syntaxe :** obj << Get SAS DATA Step for Formula Columns

**Description :** Crée un code d’étape SAS DATA correspondant aux colonnes de formule dans une table de données JMP.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Ratio", Formula( :height / :weight ) );
dt << Get SAS Data Step for Formula Columns;

```

### Get Script

**Syntaxe :** obj << Get Script( <script name> )

**Description :** Renvoie le script demandé. Si le nom du script est omis, renvoie une représentation textuelle de la table de données contenant tous les scripts qui sont enregistrés dans les données.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = dt << Get Script;
New Window( "Script", Script Box( Char( Name Expr( s ) ) ) );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = dt << Get Script( "Distribution" );

```

### Get Script Group

**Syntaxe :** obj << Get Script Group( name of script group )

**Description :** Renvoie la liste des scripts du groupe.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
gb = dt << get script group( "GB" );
Wait( 1 );
dt << run script( gb[2] );

```

### Get Script Groups Names

**Syntaxe :** obj << Get Script Groups Names

**Description :** Renvoie la liste des noms des groupes de scripts.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
gb = dt << get script groups names;

```

### Get Scroll Locked Columns

**Syntaxe :** obj << Get Scroll Locked Columns

**Description :** Renvoie les colonnes de la table de données dont le déroulement est actuellement verrouillé.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Name << Scroll Lock;
lockCols = dt << Get Scroll Locked Columns;
Show( lockCols );

```

### Get Selected Columns

**Syntaxe :** obj << Get Selected Columns

**Description :** Renvoie les noms des colonnes sélectionnées dans la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To( :weight );
names = dt << Get Selected Columns;
Show( names );

```

### Get Selected Properties

**Syntaxe :** obj << Get Selected Properties( <{list of properties}> )

**Description :** Obtenir, sous forme de liste, les propriétés (variable et scripts) de la table de données sélectionnée. Vous pouvez également utiliser une liste facultative pour spécifier les propriétés que vous souhaitez obtenir.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Properties( {2, 4} );
proplist = dt << Get Selected Properties();

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
proplist = dt << Get Selected Properties( {2, 4} );

```

### Get Selected Rows

**Syntaxe :** obj << Get Selected Rows

**Description :** Renvoie les lignes actuellement sélectionnées dans la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( 1 );
dt << Select Rows( 5 );
r = dt << Get Selected Rows();
Show( r );

```

### Get Table Script Names

**Syntaxe :** obj << Get Table Script Names

**Description :** Renvoie les noms de toutes les propriétés de la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
names = dt << Get Table Script Names;
Show( names );

```

### Get Table Variable

**Syntaxe :** obj << Get Table Variable( name )

**Description :** Renvoie la valeur de la variable de table spécifiée dans la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Table Variable( "Days", 42 );
var = dt << Get Table Variable( "Days" );
Show( var );

```

### Get Table Variable Names

**Syntaxe :** obj << Get Table Variable Names

**Description :** Renvoie les noms de toutes les variables de la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
names = dt << Get Table Variable Names;
Show( names );

```

### Get Tagged Columns

**Syntaxe :** obj << Get Tagged Columns( tag|{tag1, tag2, ...}, [Intersection] )

**Description :** Renvoie la liste des colonnes correspondant aux balises fournies. Si l&apos;intersection est requise, uniquement les colonnes contenant toutes les balises répertoriées sont renvoyées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt:Ozone << setProperty( "Tags", {"Air Pollution Levels"} );
dt:CO << setProperty( "Tags", {"Air Pollution Levels"} );
dt:SO2 << setProperty( "Tags", {"Air Pollution Levels"} );
dt:NO << setProperty( "Tags", {"Air Pollution Levels"} );
dt:PM10 << setProperty( "Tags", {"Air Pollution Levels"} );
dt:Lead << setProperty( "Tags", {"Air Pollution Levels"} );
dt << Get Tagged Columns( "Air Pollution Levels" );

```

### Get Transforms

**Syntaxe :** dt << Get Transforms()

**Description :** Récupérer la liste des colonnes de transformation associées à cette table de données.

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Transform Column( "A", Formula( :B + 1 ) );
dt << Transform Column( "B", Formula( :height + 1 ) );
Show( dt << Get Transforms() );
dt << Delete Columns( {:A, :B} );

```

### Get as Matrix

**Syntaxe :** obj << Get as Matrix( <list of columns by name>, <list of columns by number>, <column range> )

**Description :** Renvoie les colonnes spécifiées de la table de données sous forme de matrice. Par défaut, toutes les colonnes numériques seront renvoyées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
m = dt << Get As Matrix();
Show( m );
x = dt << GetAsMatrix( {4, 5} );
Show( x );

```

### Graph Builder

**Syntaxe :** Graph Builder( Variables( X(column ), Y( column ), <Group X( column )>, <Group Y( column )>, <Shape( column )>, <Color( column )>, <Overlay( column )>, <Freq( column )> ), <Elements(...)> ) )

**Description :** Fournit une interface graphique interactive qui vous permet d&apos;explorer vos données. Vous pouvez faire glisser les colonnes dans des zones de graphiques pour créer différents graphiques. Par exemple, nuages de points, graphiques d&apos;isoréponses, diagrammes en barres, graphiques de surface, boîtes à moustaches, histogrammes, cartes thermiques, diagrammes en secteurs, Tree Maps, graphiques en mosaïque, et cartes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);

```

### Group Columns

**Syntaxe :** obj << Group Columns( first column, number )

obj << Group Columns( {column1, column2, ...})

obj << Group Columns(group name | Path({<a>, <b>, ...}), {column1, column2, ...})

obj << Group Columns( group name | Path({<a>, <b>, ...}), first column, number )

**Description :** Regroupe une liste de colonnes.

**Add to group**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
Wait( 1 );
theGroup = dt << Group Columns( "BP", :BP 8M :: :BP 8W );
Wait( 2 );
// add to theGroup
theGroup = dt << Group Columns( theGroup, {:BP 12W} );

```

**Nested group**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
Wait( 1 );
dt << Group Columns( Path( {"Groups", "BP8"} ), :BP 8M :: :BP 8W );

```

**Using count**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
Wait( 1 );
group = dt << Group Columns( BP 8M, 9 );

```

### Group Scripts

**Syntaxe :** obj << Group Scripts({ script1, script2, ...}) 

obj << Group Scripts(group name | Path({<a>, <b>, ...}), {script1, script1, ...})

**Description :** Regrouper une liste de scripts.

**JMP Version ajoutée :** 14

**Nested group**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	Path( {"GB", "Sample Graphs"} ),
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);

```

**Simple group**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);

```

### Has Column

**Syntaxe :** dt << Has Column( name, < Exact Match(1|0) > )

**Description :** Examinez si la table de données a une colonne avec le nom donné.

**JMP Version ajoutée :** 18

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Has Column( "weight" );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Show(
	dt << Has Column( "Weight" ),
	dt << Has Column( "Weight", Exact Match( 1 ) ),
	dt << Has Column( "a g e" ),
	dt << Has Column( "a g e", Exact Match( 1 ) )
);

```

### Has data view

**Syntaxe :** obj << Has data view

**Description :** Renvoie la valeur Vrai s’il existe une fenêtre visible ouverte pour la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Has Data View();

```

### Hide Columns

**Syntaxe :** obj << Hide Columns( < 0|1 > | < { column1, column2, ... } >  )

**Description :** Masque les colonnes dans la grille de données

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Hide Columns( 1, {:Age, :Name} );

```

### Hierarchical Cluster

**Syntaxe :** Hierarchical Cluster( Y( columns ) )

**Description :** Classe les lignes sur la base des variables continues ou catégorielles. La classification hiérarchique traite d&apos;abord chaque ligne comme étant son propre cluster, puis combine successivement deux clusters à la fois.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ) );

```

### Is Dirty

**Syntaxe :** obj << Is Dirty

**Description :** Examine si la table de données a été modifiée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
a = dt << is Dirty;
Show( a );
dt << add rows( 5 );
b = dt << is dirty;
Show( b );

```

### Is Linked Subset

**Syntaxe :** obj << Is Linked Subset

**Description :** Examine si la table de données est une table extraite liée

**JMP Version ajoutée :** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
linkedSubset = dt << Subset( All Rows, Link To Original Data Table( 1 ) );
subset = dt << Subset( All Rows );
Show(
	dt << Is Linked Subset,
	linkedSubset << Is Linked Subset,
	subset << Is Linked Subset
);

```

### Item Analysis

**Syntaxe :** Item Analysis( Y( columns ) )

**Description :** Relie un trait ou une capacité à la probabilité qu&apos;un individu adhère ou réponde correctement à un élément.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/MathScienceTest.jmp" );
obj = Item Analysis( Y( :Q1, :Q2, :Q3, :Q4, :Q5, :Q6, :Q7, :Q8, :Q9 ) );

```

### JMP Query Builder

**Syntaxe :** obj << JMP Query Builder

**Description :** Construit une requête pour une ou plusieurs tables de données JMP.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << JMP Query Builder();

```

### Join

**Syntaxe :** obj << Join( <Private>, <Invisible>,With( Data Table( name )), By Matching Columns( column1 = column2, ...), Selected( columns ), SelectedWith( columns ), <Drop Multiples( 0|1, 0|1 )>, <Include nonmatches( 0|1, 0|1 )>,<Copy formula( 0|1 )>, <Suppress Formula Evaluation>, <Update>, <Merge Same Name Columns>, <Preserve Main Table Order> )

**Description :** Combine plusieurs tables de données en une nouvelle table de données. Les données peuvent être combinées par affectation de ligne, par valeurs de colonne correspondantes, ou par produit cartésien.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Trial1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Little.jmp" );
dt << Join(
	With( Data Table( "Little" ) ),
	Select( :popcorn, :oil amt, :batch, :yield ),
	SelectWith( :yield ),
	By Matching Columns( :popcorn = :popcorn, :batch = :batch, :oil amt = :oil )
);

```

### Journal

**Syntaxe :** obj << Journal

**Description :** Crée un journal à partir de la table de données. Seule la grille de données est incluse, sans les notes, les variables ni les scripts.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Journal();

```

### Journal Link

**Syntaxe :** dt << Journal Link( < Save( <filepath> ) | Embed( ) >, < Button Name( "Ben") > )

**Description :** Ajoute un bouton-lien vers une table de données sur un journal. Utiliser embed() ou save(), mais pas les deux. Embed() n&apos;a pas d&apos;option. L&apos;option Save() est identique à dt<<save(). Utiliser ButtonName() pour outrepasser l&apos;étiquette du bouton. Renvoie un nouveau bouton-lien.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Journal Link(); // assumes the table can be saved at its current location; button gets name from table
dt << Journal Link( Embed() ); // embed JSL script to re-create table; button gets name from table
dt << Journal Link(
	Save( "$temp/DeleteMe1.jmp" ),
	ButtonName( "Fancy Name for Temporary File" )
);
// even more fancy...
button = dt << Journal Link( Save( "$temp/DeleteMe2.jmp" ), ButtonName( "" ) ); // no text name
button << UnderlineStyle( 0 ); // not using the link-style appearance
button << SetIcon( "DataTableFile" ); // add an icon
button << SibAppend( Text Box( "Pick Me!" ), "Horizontal" ); // append a label
// save it with a prompt...you can change the name in the save-as dialog...or cancel
dt << Journal Link( Save( "" ) ); // prompt for path and save table; button gets name from prompt
Close( dt, "NoSave" );

```

### K Means Cluster

**Syntaxe :** K Means Cluster( Y( column(s) ), Number of Clusters( number ) )

**Description :** Classifie les lignes basées sur les variables numériques des tables de données contenant jusqu&apos;à plusieurs millions de lignes. Vous devez spécifier le nombre de clusters à l&apos;avance.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;

```

### K Nearest Neighbors

**Syntaxe :** K Nearest Neighbors(Y( column ), X( columns ))

**Description :** Prévoit une réponse continue ou catégorielle basée sur les réponses des K plus proches voisins dans l&apos;espace des variables X.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Nearest Neighbors(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	K( 10 )
);

```

### Last Modified

**Syntaxe :** obj << Last Modified

**Description :** Renvoie la date de la dernière modification à la table de données qui a été enregistrée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
date = dt << Last Modified();
Show( date );

```

### Latent Class Analysis

**Syntaxe :** Latent Class Analysis( Y( column(s) ), Number of Clusters( number ) )

**Description :** Classifie les lignes basées sur les variables catégorielles utilisant des mélanges multimoniaux. Vous devez spécifier le nombre de classes latentes (clusters) à l&apos;avance.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Latent Class Analysis(
	Y( :sex, :marital status, :country, :size, :type ),
	Number of Clusters( 3 )
);

```

### Life Distribution

**Syntaxe :** Life Distribution( Y( column(s) ) )

**Description :** Analyse la distribution des données Temps avant événement. Cette option peut être utilisée pour modéliser des données censurées, la durée de vie du produit, la fiabilité et les causes concurrentes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );

```

### Lock Data Table

**Syntaxe :** obj << Lock Data Table( state=0|1 )

**Description :** Verrouille la table de données afin d&apos;empêcher la modification ou l’ajout de valeurs.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Lock Data Table( 1 );
// Now try changing a value in the data table.

```

### Logistic

**Syntaxe :** Logistic( Y( columns ), X( columns ) )

**Description :** Modélise une réponse catégorielle par rapport à une variable continue. Les méthodes d&apos;analyse incluent la régression logistique et les courbes ROC.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

### MSA Variability Chart

**Syntaxe :** obj << MSA Variability Chart( Y( column ), X( columns ) )

**Description :** Affiche un graphe de variabilité montrant comment une mesure varie en fonction des catégories et effectue une analyse examinant la manière dont la moyenne et la variance évoluent en fonction des catégories.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );

```

### Make Indicator Columns

**Syntaxe :** obj << Make Indicator Columns

**Description :** Convertir une colonne de type nominale ou ordinale dans un nombre de colonnes égal au nombre de catégories. Les noms de colonne des colonnes résultantes sont les catégories de la colonne source. Les valeurs des colonnes résultantes sont des zéros ou des uns.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << Make Indicator Columns( columns( {:species, :season} ) );

```

### Make RowState Handler

**Syntaxe :** rs = dt << Make RowState Handler( function(a) )

**Description :** Crée un gestionnaire d’état de ligne pour la table de données. L’argument de la fonction contient les lignes dont l&apos;état a été modifié.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
f = Function( {a}, Print( a ) );
rs = dt << make row state handler( f );
dt << Select Rows( 1 );
dt << Select Rows( 5 );

```

### Make SAS DATA Step

**Syntaxe :** sd = dt << Make SAS Data Step( )

sd = dt << Make SAS Data Step( SaveJMPMetadata(true) )

**Description :** Renvoie la table de données sous forme d’une étape SAS DATA.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
sd = dt << Make SAS Data Step();
Show( sd );

```

### Make SAS DATA Step Window

**Syntaxe :** sd = dt << Make SAS Data Step Window( )

sd = dt << Make SAS Data Step Window( SaveJMPMetadata(true) )

**Description :** Ouvre une nouvelle fenêtre de type SAS et crée une étape SAS DATA à partir de la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
sd = dt << Make SAS Data Step Window();

```

### Make Validation Column

**Syntaxe :** Make Validation Column( <Colonnes de stratification(columns)>, <Colonnes de groupement(columns)>, <Colonne de coupure(column)>, <ID de lot de coupure(column)> )

**Description :** Crée une colonne utilisée pour diviser les données en ensembles d&apos;apprentissage, de validation et de test.

**Exemple de coupure**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << Make Validation Column(
	Cutpoint Column( :Week of Year ),
	Cutpoint Batch ID( :ID ),
	Training Set( 0.60 ),
	Validation Set( 0.25 ),
	Test Set( 0.15 ),
	New Column Name( "Cutpoint Batch Validation" ),
	Go
);

```

**Exemple de stratification**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Make Validation Column(
	Stratification Columns( :Gender ),
	Training Set( 0.50 ),
	Validation Set( 0.25 ),
	Test Set( 0.25 ),
	New Column Name( "Valid1" ),
	Random Seed( 1234 ),
	Go
);

```

### Manage Limits

**Syntaxe :** Manage Limits( Process Variables( columns ) )

**Description :** Lance l&apos;utilitaire permettant de gérer les limites de qualité pour plusieurs colonnes à la fois. Vous pouvez ajouter, modifier et enregistrer les limites dans les propriétés de colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Manage Limits(
	Process Variables( dt << Get Column Group( "Processes" ) )
);

```

### Marker Admixture

**Syntaxe :** Marker Admixture( Marker( columns ) )

**Description :** Calcule une estimation du mélange de population pour les individus en fonction des génotypes de marqueur.

**JMP Version ajoutée :** 19

**Exemple 1**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );

```

**Exemple 2**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture(
	Marker( Column Group( "Markers" ) ),
	Set(
		Missing Marker Imputation Method( "Specified" ),
		Estimation Method( "Fixed Parameter" ),
		Unthreaded( 1 ),
		Imputation Value( 1 ),
		Number of Ancestral Populations( 3 )
	),
	Fit(
		Missing Marker Imputation Method( "Specified" ),
		Estimation Method( "Fixed Parameter" ),
		Unthreaded( 1 ),
		Imputation Value( 1 ),
		Number of Ancestral Populations( 3 )
	)
);

```

### Marker Imputation

**Syntaxe :** Marker Imputation( Marker( columns ) )

**Description :** Imputes numeric missing marker genotypes.

**JMP Version ajoutée :** 19

**Exemple 1**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" )
);

```

**Exemple 2**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
obj = dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" )
);

```

### Marker Relatedness

**Syntaxe :** Marker Relatedness( Marker( columns ) )

**Description :** Estime plusieurs types de mesures de relation génomique entre des paires de marqueurs génétiques individuelles dans des organisations diploïdes et polyploïdes.

**JMP Version ajoutée :** 18

**Exemple 1**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Run platform
dt << Marker Relatedness(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Set Random Seed( 12345 ),
	Missing Marker Imputation Method( "HWE Off" ),
	Kinship Type( "Identical by State" )
);

```

**Exemple 2**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Run platform
obj = dt << Marker Relatedness(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Set Random Seed( 12345 ),
	Missing Marker Imputation Method( "HWE On" ),
	Kinship Type( "Identical by State" )
);

```

### Marker Simulation

**Syntaxe :** Marker Simulation( Marker( columns ), Predictor Formula( columns ) )

**Description :** Simule les génotypes de marqueur à partir des croisements parentaux et calcule les mesures de performance d&apos;accouplement correspondantes.

**JMP Version ajoutée :** 17

**Exemple 1**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
);

```

**Exemple 2**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
obj = dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Unthreaded( 1 ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
);

```

### Marker Statistics

**Syntaxe :** Marker Statistics( Marker( columns ), With Marker( columns ) )

**Description :** Effectue une analyse des données des marqueurs génétiques pour calculer les mesures comme la fréquence d&apos;allèles mineurs, l&apos;équilibre de Hardy-Weinberg et le déséquilibre de liaison.

**JMP Version ajoutée :** 17

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Marker Statistics(
	Marker( Column Group( "Markers" ) ),
	With Marker( Column Group( "Markers" ) ),
	Ploidy( 2 )
);

```

### Matched Pairs

**Syntaxe :** Matched Pairs( Y( columns ), X( column ) )

**Description :** Compare les moyennes des ensembles de variables appariés en utilisant les tests de Student par paires ou l&apos;analyse simple des mesures répétées pour tenir compte de la corrélation entre les réponses.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
obj = dt << Matched Pairs( X( :Dose ), Y( :BP 8M, :BP 8W ) );

```

### MaxDiff

**Syntaxe :** MaxDiff( Profile DataTable( data table ), Profile ID( column ), Profile Effects( column(s) ), <Response Data Table( data table )>, <Subject Data Table( data table )>, <Response Profile ID Chosen( column )>, <Response Subject ID( column)>, <Response Grouping( column(s) )>, <Response Profile ID Choices( column(s) )>, <Profile Grouping( column(s) )>, <Subject Subject ID( column )>, <Subject Effects( column(s) )> )

**Description :** Crée un plan permettant de trouver la combinaison d&apos;attributs de produit que les clients préfèrent le plus et le moins.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Potato Chip Combined.jmp" );
obj = dt << MaxDiff(
	One Table( 1 ),
	Subject ID( :Respondent ),
	Choice Set ID( :Choice Set ID ),
	Profile ID( :Response ),
	Profile Grouping( :Survey ID ),
	Profile Effects( :Profile ID ),
	Response Value Indicates Best( 1 ),
	Response Value Indicates Worst( -1 )
);

```

### Merge Referenced Data

**Syntaxe :** obj << Merge Referenced Data

**Description :** Rend la table autonome en fusionnant les données de la table source dans les colonnes référencées et en les dissociant. La propriété Référence de lien des colonnes de référencement est également supprimée.

```js

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA\Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA\Pizza Responses.jmp" );
dt1:ID << Set Property( "Link ID", 1 );
dt2:Choice << Set Property( "Link Reference", Reference Table( dt1 ) );
dt2:Choice1 << Set Property( "Link Reference", Reference Table( dt1 ) );
dt2:Choice2 << Set Property( "Link Reference", Reference Table( dt1 ) );
dt2 << Merge Referenced Data();

```

### Missing Data Pattern

**Syntaxe :** obj << Missing Data Pattern( columns( columns ), <Output Table( name )> )

**Description :** Décèle les configurations de valeurs manquantes dans une table de données et crée un tableau contenant chaque configuration et sa fréquence.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Missing Data Pattern(
	columns( :POP, :Max deg. F Jan, :OZONE, :CO, :SO2, :NO, :PM10, :Lead )
);

```

### Mixture Profiler

**Syntaxe :** Mixture Profiler( Y( column1, column2, ...  ) )

**Description :** Produit un graphique ternaire interactif qui vous permet d&apos;observer les isoréponses des formules de prévision enregistrées pour les modèles de mélange à trois facteurs ou plus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );

```

### Model Comparison

**Syntaxe :** Model Comparison( Predictors( columns ), Group( column ) )

**Description :** Compare la performance des modèles en utilisant les colonnes de formules de prévision.

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Fit Model(
	Y( :weight ),
	Effects( :height ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
dt << Fit Model(
	Y( :weight ),
	Effects( :age ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
obj = Model Comparison();

```

### Model Driven Multivariate Control Chart

**Syntaxe :** Model Driven Multivariate Control Chart( Process( columns ) )

**Description :** Crée des cartes de contrôle multivariées basées sur la méthode des composantes principales ou des moindres carrés partiels.

**JMP Version ajoutée :** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Flight Delays.jmp" );
obj = dt << Model Driven Multivariate Control Chart(
	Process( :AA, :CO, :DL, :F9, :FL, :NW, :UA, :US, :WN )
);

```

### Model Screening

**Syntaxe :** Model Screening( Y( column ), X( columns ) )

**Description :** Ajuste de nombreux modèles prédictifs différents, ce qui vous permet de sélectionner le meilleur.

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	)
);

```

### Move Column Group

**Syntaxe :** obj << Move Column Group( name of group | Path({<a>, <b>, ...}), to first | to last | after(column) | after(group) | after(Path({<a>, <b>, ...})) )

**Description :** Déplacer le groupe de colonnes à l&apos;emplacement spécifié. Si le nom du groupe de colonnes est omis, tous les groupes seront déplacés.

**After group**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << move column group( "Pollutants", after( "xy" ) );

```

**Move all**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << move column group( to first );

```

**To first**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << move column group( "xy", to first );

```

### Move Script Group

**Syntaxe :** obj << Move Script Group( name of group | Path({<a>, <b>, ...}), to first | to last | after(script) | after(group) | after(Path({<a>, <b>, ...})) )

**Description :** Déplacer le groupe de scripts à l&apos;emplacement spécifié. Si le nom du groupe de scripts est omis, tous les groupes seront déplacés.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
Wait( 1 );
dt << move script group( "VL", after( "Oneway" ) );
Wait( 1 );
dt << move script group( "GB", after( "VL" ) );
Wait( 1 );
dt << move script group( "VL", after( Path( {"GB"} ) ) );
Wait( 1 );
dt << move script group( to first );

```

### Move Selected Scripts

**Syntaxe :** obj << Move Selected Scripts( script|list of scripts|group|Path({<a>, <b>, ...}), to first | to last | after(script) | after(group) | after(Path({<a>, <b>, ...})) )

**Description :** Déplacer les scripts à l&apos;emplacement spécifié.

**JMP Version ajoutée :** 14

**After group**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << Move Selected scripts( {"Logistic"}, after( "GB" ) );

```

**Move Group**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	Path( {"GB", "Graphs"} ),
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << Move Selected scripts( Path( {"GB", "Graphs"} ), after( "Contingency" ) );

```

**To first**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Move Selected scripts(
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"},
	to first
);

```

### Move down

**Syntaxe :** obj << Move down

**Description :** Remplace les valeurs dans la première ligne de la table de données par les noms de colonne et remplace les noms de colonne par les noms de séquence par défaut.

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Move down;

```

### Move up

**Syntaxe :** obj << Move up

**Description :** Remplace les noms de colonne par les valeurs dans la première ligne de la table de données.

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Move up;

```

### Move up and append

**Syntaxe :** obj << Move up and append

**Description :** Remplace les noms de colonne en ajoutant les valeurs dans la première ligne de la table de données aux noms de colonne.

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Move up and append;

```

### Multidimensional Scaling

**Syntaxe :** Multidimensional Scaling( Y( columns ) )

**Description :** Crée une représentation visuelle du modèle des proximités parmi un ensemble d&apos;objets.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver,
		:Detroit, :El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles,
		:Louisville, :Memphis, :Miami, :Minneapolis, :New Orleans, :New York, :Omaha,
		:Philadelphia, :Phoenix, :Pittsburgh, :St. Louis, :Salt Lake City,
		:San Francisco, :Seattle, :Washington DC
	)
);

```

### Multiple Correspondence Analysis

**Syntaxe :** Multiple Correspondence Analysis( Y( columns ), X( columns ) )

**Description :** Identifie les associations entre les niveaux des variables catégorielles. L&apos;analyse des correspondances multiples est analogue à l&apos;analyse en composantes principales pour données catégorielles.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
dt << Multiple Correspondence Analysis(
	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),
	X( :Manufacturer )
);

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );

```

### Multiple Factor Analysis

**Syntaxe :** Multiple Factor Analysis( MFABLocks({"Block 1", columns},{"Block 2", columns}) )

**Description :** Analyse la concordance des panélistes dans l&apos;analyse des données sensorielles.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy,
		:Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness,
		:Florence Tannin, :Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory,
		:Robert Lightness},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy,
		:Paula Crispness, :Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy,
		:Monica Tannin, :Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy,
		:Frank Crispness, :Frank Tannin, :Frank Alcohol, :Frank Savory,
		:Frank Lightness}
	)
);

```

### Multivariate

**Syntaxe :** Multivariate( Y( columns ) )

**Description :** Explore les corrélations et associations entre les variables numériques en utilisant toute une variété de techniques d&apos;analyses multivariées. Ces techniques incluent les mesures d&apos;associations paramétriques et non paramétriques, les matrices de nuages de points, l&apos;analyse en composantes principales, l&apos;analyse des valeurs aberrantes et la fiabilité des éléments.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);

```

### Multivariate Embedding

**Syntaxe :** Multivariate Embedding( Y( columns ) )

**Description :** Convertit les données d&apos;espaces de très grande dimension en un espace de faible dimension, à l&apos;aide de la méthode UMAP (Approximation de variance uniforme et projection uniforme) ou de la méthode t-Distribution de la méthode des voisins stochastiques (t-SNE). Souvent, vous souhaitez projeter les données dans un espace à deux ou trois dimensions pour pouvoir les visualiser facilement. Les deux méthodes essaient de préserver la structure locale des données, mais UMAP est généralement plus rapide que t-SNE pour les grands jeux de données.

**JMP Version ajoutée :** 17

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
/* Parameters can be changed according to data features */
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Method( "t-SNE" ),
	Maximum Iterations( 1500 ),
	Perplexity( 15 ),
	Initial Principal Component Dimensions( 55 ),
	Random Seed( 2022 ),
	Output Dimensions( 3 )
);

```

**Exemple 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
/* by group example */
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);

```

### Naive Bayes

**Syntaxe :** Naive Bayes( Y( column ), X( columns ), Method( "Naive Bayes" ) )

**Description :** Prévoit l&apos;appartenance à un groupe pour une variable catégorielle basée sur la proximité des valeurs de son régresseur par rapport aux valeurs du régresseur de chaque groupe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Naive Bayes(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

### Neural

**Syntaxe :** Neural( Y( column ), X( columns ), <Validation( column )> )

**Description :** Prévoit une ou plusieurs variables de réponse à l’aide d’une fonction flexible des variables d’entrée. La structure flexible inclut les superpositions et les fonctions en S.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);

```

### New Data Box

**Syntaxe :** obj << New Data Box( < <<Enable Filter Views(0|1) > )

**Description :** Crée une vue de la table de données dans une arborescence de boîtes d&apos;affichage. Remplace la table de données active par la table de données spécifiée. L&apos;argument facultatif Enable Filter Views indique si la vue autorise les vues de filtre ou non. Par défaut, elle les autorise.

```js

Names Default To Here( 1 );
dtA = Open( "$SAMPLE_DATA/Big Class.jmp", invisible );
New Window( "school",
	H List Box(
		dtA << New Data Box(),
		Text Box(),
		dtA << Distribution(
			ContinuousDistribution( Column( :weight ) ),
			NominalDistribution( Column( :age ) )
		)
	)
);
dtA = 0;

```

### New Data View

**Syntaxe :** obj << New Data View

**Description :** Crée un nouvel affichage de la table de données. Cet affichage est lié à l’original dans la mesure où tout ce qui y sera modifié ou mis en surbrillance se reflètera également sur l’original. Ceci s’avère utile lorsque vous devez parcourir plusieurs parties de la même table.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << New Data View();

```

### New Filter View

**Syntaxe :** fv = dt << New Filter View( < name >, < Copy From(name|obj) >, < Temporary(0|1) >, < Active(0|1) >, < DataFilter(expr) >)

**Description :** Créez une nouvelle vue de filtre. L&apos;objet FilterView créé est renvoyé. La nouvelle vue de filtre sera active par défaut. Si vous ne nommez pas la vue de filtre, elle est temporaire, sauf si vous définissez Temporaire sur zéro.

**JMP Version ajoutée :** 19

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
dt << New Filter View(
	"Dream",
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
dt << New Filter View(
	"Dream Inverse",
	Data Filter(
		Data Filter(
			Inverse( 1 ),
			Add Filter( Columns( :Island ), Where( :Island == "Dream" ) )
		)
	)
);

```

**Exemple 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	Data Filter( Add Filter( Columns( :Sex ), Where( Is Missing( :Sex ) ) ) )
);
dt << New Filter View( "Unknown Sex", CopyFrom( fv ), Active( 0 ) );

```

### New Script

**Syntaxe :** New Property( name, script ) 

New Script( name, script )

**Description :** Crée et définit une nouvelle propriété dans la table de données en tant que script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Script(
	"New Script",
	Distribution( Column( :Height, :Weight ), By( :sex ) )
);

```

### New Table

**Syntaxe :** New Table( name, <invisible>, <private>, <actions> )

**Description :** Crée une nouvelle table de données. "Invisible" masque la table de données mais la répertorie dans la fenêtre d&apos;accueil JMP. "Private" masque totalement la table de données. "Visible" est l&apos;option par défaut et crée une table de données normale qui est visible et répertoriée dans la fenêtre d&apos;accueil JMP. Les arguments facultatifs actions sont les messages, quels qu&apos;ils soient, pris en charge par les tables de données.

```js

Names Default To Here( 1 );
dt = New Table( "Little Class",
	Add Rows( 3 ),
	New Column( "name",
		Character,
		Nominal,
		Set Values( {"KATIE", "LOUISE", "JANE"} )
	),
	New Column( "height", Continuous, Set Values( [59, 61, 55] ) )
);

```

### New Table Variable

**Syntaxe :** obj << New Table Variable( name, number )

**Description :** Crée et définit une nouvelle variable dans la table de données comme une valeur constante. Si une variable existante porte le même nom, un chiffre est ajouté au nom de la nouvelle variable pour la rendre unique. La commande similaire Set Table Variable est recommandée dans la plupart des cas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Table Variable( "Days", 42 );

```

### Nonlinear

**Syntaxe :** Nonlinear( Y( column ), X( column with predictor formula ) )

**Description :** Ajuste les modèles non linéaires en utilisant les moindres carrés ou une fonction de perte personnalisée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );

```

### Normal Mixtures

**Syntaxe :** Normal Mixtures( Y( column(s) ), Number of Clusters( number ) )

**Description :** Classifie les lignes basées sur les variables numériques lorsque vos données proviennent d&apos;un mélange de distributions normales multivariées superposées. Vous devez spécifier le nombre de clusters à l&apos;avance.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Normal Mixtures(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;

```

### Normalization

**Syntaxe :** Normalization( Y( columns ) )

**Description :** Adjusts for technical biases and improves suitability for subsequent analysis

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Normalization(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

### Notebook

**Syntaxe :** nb = Notebook( name|number )

**Description :** Crée un notebook ou renvoie le notebook avec le nom ou l&apos;indice fourni.

```js

Names Default To Here( 1 );

nb = Notebook();

```

### OC Curves

**Syntaxe :** obj << OC Curves

**Description :** Crée un graphique qui représente la probabilité de ne pas détecter un décalage dans le processus en fonction de la taille du décalage.

**JMP Version ajoutée :** 16

### Oneway

**Syntaxe :** Oneway( Y( columns ), X( columns ) )

**Description :** Modélise une réponse continue dans un ensemble de groupes catégoriels. Les méthodes d&apos;analyse incluent l&apos;ANOVA, les comparaisons de moyennes, l&apos;analyse des moyennes et les graphiques des quantiles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

### Open

**Syntaxe :** Open( file path, <invisible>, <private>, <select columns(list)> | <ignore columns(list)>, <column names only>, <Table Info> )

**Description :** Ouvre un fichier JMP ou importe un autre type de fichier pris en charge. L&apos;option de table de données ouverte « Invisible » masque le fichier de la vue, mais le liste dans la fenêtre JMP Home, l&apos;option « Privé » masque complètement le fichier. L&apos;option de fichier « Sélectionner les colonnes » lit uniquement les colonnes spécifiées, « Ignorer les colonnes » est l&apos;opposé de « Sélectionner les colonnes », il ne lit pas les colonnes spécifiées. Les options de fichier JMP « Noms de colonne uniquement » et « Info de la table » ne lisent pas les données et ne créent pas de table de données. « Noms de colonne uniquement » renvoie la liste des noms de colonne de la table de données, « Info de la table » renvoie le nombre de colonnes et de lignes de la table de données. Les options « PREMIER(n) »/« DERNIER(n) »/« ALÉATOIRE(n) » lisent uniquement n lignes de la table de données. Si n est un nombre entre 0 et 1, n est une fraction du nombre total de lignes dans la table de données.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp", ignore columns( "age" ) );

```

**Exemple 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp", "Column Names Only" );

```

**Exemple 4**

```js

Names Default To Here( 1 );
info = Open( "$SAMPLE_DATA/probe.jmp", "Table Info" );
Print( info );

```

**Exemple 5**

```js

Names Default To Here( 1 );
info = Open( "$SAMPLE_DATA/SATByYear.jmp", random( 10 ) );
Print( info );

```

**Exemple 6**

```js

Names Default To Here( 1 );
info = Open( "$SAMPLE_DATA/SATByYear.jmp", First( 10 ) );
Print( info );

```

### Parallel Plot

**Syntaxe :** Parallel Plot( Y( columns ),  <X( column )> )

**Description :** Produit un diagramme à deux variables ou plus avec des segments de droite connectés pour chaque ligne.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/SAT.jmp" );
dt << Parallel Plot(
	Y(
		:"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n,
		:"2002 Verbal"n, :"2002 Math"n, :"2001 Verbal"n, :"2001 Math"n,
		:"1999 Verbal"n, :"1999 Math"n, :"1994 Verbal"n, :"1994 Math"n,
		:"1997 Verbal"n, :"1997 Math"n, :"1992 Verbal"n, :"1992 Math"n
	)
);

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Parallel Plot( Y( :hist0, :hist1, :hist3, :hist5 ) );

```

### Pareto Plot

**Syntaxe :** Pareto Plot( Cause( column ), <X( column )>, <Subcategory( column )>, <Freq( column )>, <Weight( column )> )

**Description :** Affiche la fréquence relative des éléments d&apos;un processus lié à la qualité, dans l&apos;ordre décroissant. Vous pouvez définir une ou plusieurs variables de classification pour créer un diagramme de Pareto comparatif.

**Groupe**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );

```

**Simple**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure Raw Data.jmp" );
obj = dt << Pareto Plot( Cause( :failure ) );

```

**Sous-catégorie**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Subcategory( :clean ),
	Freq( :N ),
	Subcategory Bar Style( Stacked )
);

```

### Partial Least Squares

**Syntaxe :** Partial Least Squares( Y( columns ), X( columns ) )

**Description :** Ajuste un modèle à une ou plusieurs variables de réponse en utilisant des facteurs latents. Cela permet d&apos;ajuster les modèles lorsque les variables explicatives sont fortement corrélées, ou lorsqu&apos;il y a plus de variables explicatives que d&apos;observations.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Go
);

```

### Partition

**Syntaxe :** obj << Partition( Y( column ), X( column(s) ) )

**Description :** Construit un arbre de décision en partitionnant récursivement les données selon une relation entre la valeur des régresseurs et de la réponse. La réponse et les régresseurs peuvent être continus ou catégoriels.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Partition(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Split Best( 3 )
);

```

### Paste Column Properties

**Syntaxe :** obj << Paste Column Properties

**Description :** Depuis le presse-papiers, colle plusieurs listes de propriétés de colonnes dans plusieurs colonnes. Vous pouvez éventuellement spécifier une liste des colonnes cibles au lieu de les sélectionner dans la table de données.

**JMP Version ajoutée :** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << Copy Column Properties( {:MODULUS, :ELONG} );
dt2 = New Table( "test it",
	New Column( "T1", numeric, continuous ),
	New Column( "T2", numeric, continuous ),
	New Column( "T3", numeric, continuous ),
	Add Rows( 10 )
);
dt2 << Paste Column Properties( {:T1, :T3} );

```

### Predictor Screening

**Syntaxe :** Predictor Screening( Y( columns ), X( columns ) )

**Description :** Identifie les régresseurs importants parmi un grand nombre de candidats en utilisant la partition Bootstrap Forest pour évaluer la contribution des régresseurs dans la réponse.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Predictor Screening( Y( :Banding? ), X( Column Group( "Predictors" ) ) );

```

### Principal Components

**Syntaxe :** Principal Components( Y( columns ) )

**Description :** Modélise la variation d&apos;un ensemble de variables à partir d&apos;un plus petit nombre de combinaisons linéaires indépendantes (composantes principales) de ces variables.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);

```

### Process Capability

**Syntaxe :** Process Capability( Process Variables (columns), < Spec Limits() > )

**Description :** Calcule l&apos;analyse de capabilité pour chaque processus et crée des graphiques permettant d&apos;analyser la capabilité de plusieurs processus à la fois. Les limites de spécification peuvent aussi être définies.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);

```

### Process History Explorer

**Syntaxe :** Process History Explorer( Y( columns ),ID( columns), X( columns ), Step( columns ), Timestamp( columns ) )

**Description :** Identifie les étapes du processus associées à un mauvais rendement.

```js

Names Default To Here( 1 );
dt = Open( "$sample_data\Quality Control\Lot Wafer History.jmp" );
dt2 = Open( "$sample_data\Quality Control\Lot Wafer Yield.jmp" );
obj = dt << Process History Explorer(
	ID( :Lot, :Wafer ),
	X( :Tool, :Route ),
	Step( :Layer, :Operation ),
	Timestamp( :TimeIn, :TimeOut ),
	Yield Table( "Lot Wafer Yield" ),
	Yield Columns( "Yield" )
);

```

### Process Screening

**Syntaxe :** Process Screening( Process Variables( columns ) )

**Description :** Examine de nombreux processus de différentes perspectives, incluant la stabilité, la capabilité, les tests de carte de contrôle et le changement (la dérive). Permet de se focaliser sur les processus qui demandent d&apos;être examinés.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) )
);

```

### Profiler

**Syntaxe :** Profiler( Y( column1, <column2>, ..., <PredSE column1, PredSE column2>, ... ), <Expand> )

**Description :** Produit un graphique interactif qui vous permet d&apos;observer les modifications de la réponse prévue lorsque les paramètres des facteurs sont modifiés. Pour chaque facteur, le profileur affiche les traces de prévision qui sont basées sur les contraintes linéaires et les formules de prévision enregistrées et indique comment la réponse change par rapport à ce facteur. L&apos;argument Étendre correspond à l&apos;option Étendre les formules intermédiaires dans la fenêtre de lancement.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
colNum = N Items( dt << Get Column Names );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Screening" ),
	Run()
);
obj << Save Columns( Prediction Formula( 1 ), StdErr Pred Formula( 1 ) );
obj << Close Window( 1 );
predCol = Column( dt, colNum + 1 );
stderrCol = Column( dt, colNum + 2 );
dt << Profiler(
	Y( predCol, stderrCol ),
	Profiler( 1, Confidence Intervals( 1 ), ),
	Use SE Formula( 1 )
);

```

**Exemple 3**

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Stochastic Optimization.jmp" );
dt << Profiler( Y( :Yield ), Profiler( 1, Desirability Functions( 1 ), ), Expand );

```

### Recode

**Syntaxe :** obj << Recode

**Description :** Recoder les anciennes valeurs des colonnes sélectionnées dans les nouvelles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To( :weight );
dt << Recode;

```

### Recode Column

**Syntaxe :** obj << Recode Column(<source column reference>, {<transform>, ...}, <Update Properties(0|1)>, <By Word(Delimiters(<chars>)>, Target Column(<column reference> | <column name>))

**Description :** Appliquez les transformations listées à chaque valeur de la colonne source et stockez les résultats dans la colonne d&apos;origine ou dans la colonne cible spécifiée. L&apos;option Par mot divise les données de caractères fournies en plus petites valeurs d&apos;entrée. Une fois que les valeurs d&apos;entrée sont déterminées, les transformations sont appliquées à ces valeurs séparément.

Les variables JSL spéciales sont remplies à l&apos;exécution de la commande :

	_rcNow est la valeur actuelle de l&apos;entrée après les transformations précédentes.

	_rcOrig est la valeur d&apos;origine de l&apos;entrée.

**JMP Version ajoutée :** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( :age );
col << Data Type( "Character" );
dt << Recode Column(
	:age,
	{If( _rcNow >= 17, "Older", _rcNow >= 15, "Middle", "Younger" )},
	Target Column( col )
);

```

### Recurrence Analysis

**Syntaxe :** Recurrence Analysis( Y( column ), Cost( column ), Label( column ), <Grouping( column )> )

**Description :** Analyse la distribution dans le temps d’un événement récurrent jusqu’à la mise hors service du système.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );
obj = dt << Recurrence Analysis(
	Y( :Age ),
	Cost( :Cost ),
	Grouping( :Treatment Group ),
	Label( :Patient Number )
);

```

### Reliability Forecast

**Syntaxe :** Reliability Forecast

**Description :** Prévoit les défaillances futures en se basant sur les données observées et sur les unités futures à risque. La plate-forme accepte plusieurs formats d’entrée. Voir chaque format pour les détails de spécification.

**Format de dates**

```js

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Reliability/Small Production part1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Reliability/Small Production part2.jmp" );

obj = dt1 << Reliability Forecast(
	Input Format( Dates ),
	Production Data Table(
		dt1,
		Production Count( :Sold Quantity ),
		Timestamp( :Sold Month )
	),
	Failure Data Table(
		dt2,
		Failure Time( :Return Month ),
		Timestamp( :Sold Month ),
		Failure Count( :Return Quantity )
	),
	Life Time Unit( Month ),
	Show Legend( 1 ),
	Show Graph Filter( 0 ),
	Forecast(
		Group( "" ),
		Risk Set( [2550, 2600, 2650, 2700, 2750, 2800, 2850] ),
		Future Risk Set(
			[3082.5, 3052.5, 3367.5, 3952.5, 3667, 3667],
			[3347740800, 3350160000, 3352579200, 3355257600, 3357849600, 3360528000]
		),
		Forecast To( "02/2011" ),
		Distribution( Weibull ),
		Contract( 6, Month ),
		Forecast Type( Sequential ),
		Interval Type( Prediction Interval ),
		Set Interval Level( 0.9 )
	),
	Forecast Options(
		Animation( 1 ),
		Interactive Configuration of Risk Sets( 1 ),
		Spreadsheet Configuration of Risk Sets( 0 ),
		Show Interval( 1 ),
		Forecasting Interval Type( Prediction Interval ),
		Use Contract Length( 1 ),
		Use Failure Cost( 0 ),
		Set Failure Cost( . ),
		Monte Carlo Sample Size( 10000 ),
		Random Seed( -1 ),
		Use Approximate Distribution( 1 )
	)
);

```

**Format Nevada**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );
obj = dt << Reliability Forecast(
	Input Format( Nevada ),
	Production Count( :Volume ),
	Timestamp( :Time ),
	Failure Count( Eval List( collist ) ),
	Life Time Unit( Month ),
	Interval Censored Failure( 1 ),
	Show Legend( 0 ),
	Show Graph Filter( 0 ),
	Forecast(
		Group(),
		Risk Set(
			[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011,
			2026, 1950, 1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996,
			1987, 1957, 1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]
		),
		Forecast To( "01/2004" ),
		Distribution( Weibull ),
		Contract( 5, Month ),
		Forecast Type( Incremental ),
		Interval Type( No Interval ),
		Set Interval Level( 0.9 )
	),
	Forecast Options(
		Animation( 1 ),
		Interactive Configuration of Risk Sets( 1 ),
		Spreadsheet Configuration of Risk Sets( 0 ),
		Show Interval( 0 ),
		Forecasting Interval Type( Prediction Interval ),
		Use Contract Length( 1 ),
		Use Failure Cost( 0 ),
		Set Failure Cost( . ),
		Monte Carlo Sample Size( 10000 ),
		Random Seed( -1 ),
		Use Approximate Distribution( 1 )
	)
);

```

**Format temps avant événement**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Small Production Time to Event.jmp" );
obj = dt << Reliability Forecast(
	Input Format( Time to Event ),
	Time to Event( :"Time (Month)"n, :Time Right ),
	Freq( :Freq ),
	Life Time Unit( Month ),
	Forecast Start( Informat( "03/01/2010", "Locale Date" ) ),
	Forecast(
		Group( "" ),
		Future Risk Set( [33, 33, 33], [3352924800, 3355516800, 3358195200] ),
		Forecast To( "09/01/2010" ),
		Distribution( Weibull ),
		Contract( 5, Month ),
		Forecast Type( Incremental ),
		Interval Type( No Interval ),
		Set Interval Level( 0.9 )
	),
	Forecast Options(
		Animation( 1 ),
		Interactive Configuration of Risk Sets( 1 ),
		Spreadsheet Configuration of Risk Sets( 0 ),
		Show Interval( 0 ),
		Forecasting Interval Type( Prediction Interval ),
		Use Contract Length( 1 ),
		Use Failure Cost( 0 ),
		Set Failure Cost( [1] ),
		Monte Carlo Sample Size( 10000 ),
		Random Seed( 0 ),
		Use Approximate Distribution( 1 )
	)
);

```

### Reliability Growth

**Syntaxe :** obj = Reliability Growth( Input Format( Time to Event ), Time to Event( column, <column> ), <Event Count( column )>, <Phase( column )> );



obj = Reliability Growth( Input Format( Dates ), Timestamp( column, <column> ), <Event Count( column )>, <Phase( column )> );



obj = Reliability Growth( Input Format( Concurrent Systems ), Time to Event( column, column, ... ), System ID( column ), <Phase( column )> )



obj = Reliability Growth( Input Format( Parallel Systems ), Time to Event( column, column, ... ), <Event Count( column )>, System ID( column ), <Phase( column )> )

**Description :** Modélise l&apos;évolution de la fiabilité d&apos;un seul système réparable dans le temps, au fur et à mesure que des améliorations sont apportées à sa conception. La plate-forme accepte plusieurs formats d’entrée. Voir chaque format pour les détails de spécification.

**Dates**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/BrakeReliability.jmp" );
obj = dt << Reliability Growth(
	Input Format( Dates ),
	Timestamp( :Date ),
	Event Count( :Fixes )
);

```

**Systèmes concomitants**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Concurrent Systems.jmp" );
obj = dt << Reliability Growth(
	Input Format( Concurrent Systems ),
	Time to Event( :Prototype 1, :Prototype 2 ),
	System ID( :Failed System ),

);
obj << Crow AMSAA;

```

**Systèmes parallèles**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Parallel Systems Multiple Phases.jmp" );
obj = dt << Reliability Growth(
	Input Format( Parallel Systems ),
	Time to Event( :Hours ),
	Event Count( :Fixes ),
	System ID( :System ID ),
	Phase( :Phase )
);
obj << Piecewise Weibull NHPP with Different Intercepts;

```

**Temps avant événement**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours )
);
obj << Crow AMSAA;

```

### Rename Column Group

**Syntaxe :** obj << Rename Column Group( oldname | Path({<a>, <b>, ...}), newname )

**Description :** le groupe de colonnes.

**Nested Group**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( Path( {"xy", "Cols"} ), {:X, :y} );
Wait( 1 );
dt << rename column group( Path( {"xy"} ), "XY" );
dt << rename column group( Path( {"XY", "Cols"} ), "Columns" );

```

**Simple Group**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
Wait( 1 );
dt << rename column group( "xy", "coordinates" );

```

### Rename Script Group

**Syntaxe :** obj << Rename Script Group( oldname | Path({<a>, <b>, ...}), newname )

**Description :** Renommer le groupe de scripts

**JMP Version ajoutée :** 14

**Nested group**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	Path( {"GB", "Graphs"} ),
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << rename script group( Path( {"GB", "Graphs"} ), "My Graphs" );

```

**Simple group**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << rename script group( "GB", "GraphBuilders" );

```

### Rename Table Property

**Syntaxe :** obj << Rename Table Property( old name, new name )

**Description :** Renomme la propriété de table de données spécifiée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Script(
	"New Script",
	Distribution( Column( :Height, :Weight ), By( :sex ) )
);
Wait( 1 );
dt << Rename Table Property( "New Script", "Great Script" );

```

### Rename Table Script

**Syntaxe :** obj << Rename Table Script( old name, new name )

**Description :** Renomme le script de table de données spécifié.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Script(
	"New Script",
	Distribution( Column( :Height, :Weight ), By( :sex ) )
);
Wait( 1 );
dt << Rename Table Script( "New Script", "Great Script" );

```

### Rename Table Variable

**Syntaxe :** obj << Rename Table Variable( old name, new name )

**Description :** Renomme la variable de table de données spécifiée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Table Variable( "Days", 42 );
Wait( 2 );
dt << Rename Table Variable( "Days", "Hours" );

```

### Repeated Measures Degradation

**Syntaxe :** Repeated Measures Degradation( Y( column ), Time( column ), <X( column )>, <Freq( column )>, <Censor( column ), Censor Code( value )> )

**Description :** Modélise les données de dégradation des mesures répétées dans le temps avec des coefficients aléatoires.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Device B.jmp" );
obj = dt << Repeated Measures Degradation(
	Y( :Power Drop ),
	Time( :Hours ),
	Label( :Device ),
	X( :Degrees C ),
	Reference Temperature( "Celsius", 195 ),
	Control( "Linear", "Linear", "First Order Kinetics Type 2" )
);

```

### Rerun Formulas

**Syntaxe :** obj << Rerun Formulas

**Description :** Réévalue toutes les formules de colonne de la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Central Limit Theorem.jmp" );
dt << Add Rows( 100 );
dt << Rerun Formulas;

```

### Reset Transforms

**Syntaxe :** dt >> Reset Transforms()

**Description :** Lors de l&apos;accès à des colonnes de transformation, celles-ci mettent leurs données en cache pour des appels futurs. Cette fonction supprime les données. Les données seront recréées lors du prochain accès à la colonne.

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Reset Transforms();

```

### Response Screening

**Syntaxe :** Response Screening( Y( columns ), X( columns ) )

**Description :** Automatise le processus de conduite des tests pour les effets du modèle linéaire et pour un grand nombre de réponses. Les résultats des tests et les statistiques de résumé sont présentés sous forme de tables de données et de graphiques. Le taux de fausses découvertes (FDR) protège de fausses alarmes (fausse significativités). Une méthode d&apos;estimation robuste permet de réduire la sensibilité des tests aux valeurs aberrantes.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Probe.jmp" );
obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );

```

### Revert

**Syntaxe :** obj << Revert

**Description :** Annule toutes les modifications apportées à la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Row States(
	[33, 33, 33, 33, 33, 97, 97, 97, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 768]
);
Wait( 2 );
dt << revert();

```

### Run Formulas

**Syntaxe :** obj << Run Formulas

**Description :** Réalise toutes les évaluations de formules en attente. Toutes les formules ne seront pas évaluées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Central Limit Theorem.jmp" );
dt << Add Rows( 10000 );
dt << Run Formulas();
Distribution( Column( :"N=1"n, :"N=5"n, :"N=10"n ) );

```

### Run Script

**Syntaxe :** obj << Run Script( name )

**Description :** Exécute un script nommé enregistré en tant que propriété dans la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Run Script( "Distribution" );

```

### Save

**Syntaxe :** obj << Save( <filepath>, <file type> ) 

obj << Save As( filepath, <file type> )

**Description :** Enregistre la table de données dans l&apos;un des formats pris en charge suivants : .jmp, .xls, .xlsx, .txt, .csv, .tsv, .xpt, .v8xpt et .stx. Certains formats ne sont pris en charge que sous Windows. Voir Utiliser JMP pour plus de détails.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Save( "$temp\deleteme Big Class.jmp" ); // explicit location
If( dt << Save( "" ),
	Write( "\!nsaved to " || (dt << GetPath) ),
	Write( "\!nsave canceled" )
); // prompt
dt << Save( "$temp\deleteme Big Class.csv" ); // convert to CSV format
Close( dt, "NoSave" );

```

### Save As

**Syntaxe :** obj << Save( <filepath>, <file type> ) 

obj << Save As( filepath, <file type> )

**Description :** Enregistre la table de données dans l&apos;un des formats pris en charge suivants : .jmp, .xls, .xlsx, .txt, .csv, .tsv, .xpt, .v8xpt et .stx. Certains formats ne sont pris en charge que sous Windows. Voir Utiliser JMP pour plus de détails.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Save( "$temp\deleteme Big Class.jmp" ); // explicit location
If( dt << Save( "" ),
	Write( "\!nsaved to " || (dt << GetPath) ),
	Write( "\!nsave canceled" )
); // prompt
dt << Save( "$temp\deleteme Big Class.csv" ); // convert to CSV format
Close( dt, "NoSave" );

```

### Save Database

**Syntaxe :** obj << Save Database( connectInfo, TableName )

**Description :** Enregistre la table de données dans une base de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Save Database( "Connect Dialog", "My_Class" );

```

### Scatterplot 3D

**Syntaxe :** Scatterplot 3D( Y( columns ) )

**Description :** Produit un nuage de points tridimensionnel rotatif pour trois variables ou plus. Si vous spécifiez plus de trois variables, vous pouvez changer les variables affichées dans le nuage de points.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

### Scatterplot Matrix

**Syntaxe :** Scatterplot Matrix( Y( columns ), <X( columns )>, <Group( column )>, <By( column )> )

**Description :** Produit une grille de nuages de points vous permettant d&apos;explorer les relations bivariées. Si les variables X ne sont pas spécifiées, les nuages de points s&apos;appliquent à toutes les paires de variables Y. Si une ou plusieurs variables X sont spécifiées, les nuages de points s&apos;appliquent aux variables Y tracées par rapport aux variables X.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot Matrix(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

### Screen Predictors

**Syntaxe :** obj << Screen Predictors

**Description :** Il s&apos;agit d&apos;un alias et de l&apos;ancien nom donné au Criblage des régresseurs

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Predictor Screening( Y( :Banding? ), X( Column Group( "Predictors" ) ) );

```

### Select Column Group

**Syntaxe :** obj << Select Column Group( name of group | list of names )

**Description :** Sélectionner les groupes de colonnes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << select column group( "xy", "pollutants" );

```

### Select Properties

**Syntaxe :** obj << Select Properties( { property1, property2, ... )

**Description :** Sélectionner les propriétés de table spécifiées, la liste pouvant être une liste de noms de propriétés ou d’index des propriétés.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
proplist = dt << Select Properties( {2, 4} );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
proplist = dt << Select Properties( {"Bivariate", "Logistic"} );

```

### Select Script Group

**Syntaxe :** obj << Select Script Group( <name of group | { group1, group2, ...} > )

**Description :** Sélectionner les groupes de scripts. Si aucun groupe de scripts n&apos;est donné, tous les groupes seront sélectionnés.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
Wait( 1 );
dt << select script group( "VL" );

```

### Select Scripts

**Syntaxe :** obj << Select Scripts( <name of script | { script1, script2, ...} > )

**Description :** Sélectionner les scripts nommés.

**JMP Version ajoutée :** 14

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
Wait( 1 );
dt << select scripts( {"Distribution", "Graph Builder Heat Map"} );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
Wait( 1 );
a = dt << get script group( "GB" );
dt << select scripts( a );

```

### Select columns

**Syntaxe :** obj << Select columns( <column>, <column>, ... )

**Description :** Sélectionner les colonnes spécifiées. Pour sélectionner toutes les colonnes, utiliser le mot clé &apos;Tout&apos;.

**JMP Version ajoutée :** 14

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
dt << Select Columns( :Height );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
dt << Select Columns( "All" );

```

**Exemple 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
clist = {:Height, :Weight};
dt << Select Columns( clist );

```

### Sequencing Variants Toolset

**Syntaxe :** obj << Sequencing Variants Toolset

**Description :** Interface de la plate-forme du complément Ensemble d&apos;outils de séquençage des variantes

### Set Active Filter View

**Syntaxe :** obj << Set Active Filter View( name | obj )

**Description :** Définir la vue de filtre active

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Wait( 1 );
dt << Set Active Filter View( "Dream" );

```

### Set Cell Height

**Syntaxe :** obj << Set Cell Height( number )

**Description :** Définir la hauteur d&apos;affichage de chaque cellule de table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Cell Height( 20 );

```

### Set Dirty

**Syntaxe :** obj << Set Dirty( state=0|1 )

**Description :** Marque la table de données comme modifiée, même si aucune modification n’a eu lieu. Ceci s’avère utile pour créer une invite à enregistrer la table lors de la fermeture.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Dirty();

```

### Set Edit Lock

**Syntaxe :** obj << Set Edit Lock( [ <"Modify Cells">, <"Add rows">, <"Add Columns">, <"Delete Rows">, <"Delete Columns">] )

**Description :** Interdire les opérations spécifiées sur la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Edit Lock( "Add Rows", "Delete Columns" );

```

### Set Header Height

**Syntaxe :** obj << Set Header Height( number )

**Description :** Défnir la hauteur d&apos;affichage de l&apos;en-tête de colonne

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Header Height( 20 );

```

### Set Label Columns

**Syntaxe :** obj << Set Label Columns( column(s) )

**Description :** Attribue un rôle d&apos;étiquette aux colonnes sélectionnées dans la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
Wait( 1 );
dt << Set Label Columns( :City, :State );

```

### Set Matrix

**Syntaxe :** obj << Set Matrix( [ matrix with rows separated by commas ] )

**Description :** Crée une table de données à partir d’une matrice.

```js

Names Default To Here( 1 );
dt = New Table( "B" );
dt << Set Matrix( [12 59 95, 12 61 123, 12 55 74, 12 66 145] );

```

### Set Name

**Syntaxe :** obj << Set Name( new TableName )

**Description :** Modifie le nom de la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Name( "New Class" );

```

### Set Property

**Syntaxe :** obj << Set Property(  name, script  )

**Description :** Crée et définit une nouvelle propriété dans la table de données en tant que script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Property(
	"New Script",
	Distribution( Column( :Height, :Weight ), By( :sex ) )
);

```

### Set Row ID Width

**Syntaxe :** obj << Set Row ID Width( number )

**Description :** Définir la largeur d&apos;affichage de la zone de l&apos;identifiant de ligne

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Row ID Width( 80 );

```

### Set Row States

**Syntaxe :** obj << Set Row States( [state1, state2, ... stateN] )

**Description :** Définit les états de ligne de toutes les lignes de la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Row States(
	[33, 33, 33, 33, 33, 97, 97, 97, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 768]
);

```

### Set Scroll Lock Columns

**Syntaxe :** obj << Set Scroll Lock Columns( column(s) )

**Description :** Verrouille le déroulement des colonnes sélectionnées dans la table de données.  Pour signaler qu’une colonne est verrouillée, sa couleur d’arrière plan change.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Set Scroll Lock Columns( :City );

```

### Set Table Variable

**Syntaxe :** obj << Set Table Variable( name, number )

**Description :** Crée et définit une nouvelle variable dans la table de données en tant que valeur constante. Une variable existante portant le même nom sera remplacée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Table Variable( "Days", 42 );

```

### Show Header Filter Icons

**Syntaxe :** obj << Show Header Filter Icons( state=0|1 )

**Description :** Show or hide the filter icons on columns in the current filter view.

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Show Header Filter Icons( 0 );

```

### Show Header Graphs

**Syntaxe :** obj << Show Header Graphs( state=0|1 )

**Description :** Show or hide the header graphs in the data table display.

**JMP Version ajoutée :** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Show Header Graphs( 0 );

```

### Show Header Groups

**Syntaxe :** obj << Show Header Groups( state=0|1 )

**Description :** Show or hide the column groups in the data table display.

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Show Header Groups( 0 );

```

### Show Header Statistics

**Syntaxe :** obj << Show Header Statistics( state=0|1 )

**Description :** Show or hide the header statistics in the data table display.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Show Header Statistics( 0 );

```

### Show Header Tags

**Syntaxe :** obj << Show Header Tags( state=0|1 )

**Description :** Show or hide the column tags in the data table display.

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Show Header Tags( 0 );

```

### Show Hidden Columns In Columns List

**Syntaxe :** obj << Show Hidden Columns In Columns List( state=0|1 )

**Description :** Désactivez cette option pour omettre les colonnes masquées de la liste de colonnes de la table de données. Ces colonnes ne s&apos;affichent jamais dans la grille de données.

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Hide Columns( 1, {:"pop- m"n, :Max deg. F Jan, :X, :Y} );
Wait( 1 );
dt << Show Hidden Columns In Columns List( 0 );

```

### Show Transforms

**Syntaxe :** dt << Show Transforms()

**Description :** Afficher dans le log les informations à propos des colonnes de transformation associées à cette table de données et à ses plates-formes. À titre indicatif uniquement et le format peut être modifié. Ces informations ne doivent pas être analysées.

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Transform Column( "A", Formula( :height + 1 ) );
dt << Show Transforms();
dt << Delete Columns( :A );

```

### Sort

**Syntaxe :** obj << Sort( <Private>, <Invisible>, <Replace table>, By( column ), Order( ascending|descending ) )

**Description :** Crée une nouvelle table de données triée selon les colonnes spécifiées par ordre croissant ou décroissant.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Sort( By( :name ), Order( Ascending ) );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Sort( replace table, By( :name ), Order( Ascending ) );

```

### Split

**Syntaxe :** obj << Split( Split( columns ), Split by( column ), <Group(column)>, <Private>|<Invisible>, <Remaining Columns( Keep All | Drop All | Drop( columns ) | Keep( columns ) )>, <Copy formula( 0|1 )>, <Suppress formula evaluation( 0|1 )>, <Sort by Column Property>, <Output Table( "name" )> )

**Description :** Crée une nouvelle table de données qui convertit plusieurs lignes d&apos;une colonne en une ligne de plusieurs colonnes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Restaurant Tips.jmp" );
:Day of Week << set property( "Row Order Levels", 1 );
dt << Split(
	Split By( :Day of Week ),
	Split( :Bill Amount ),
	Sort by Column Property,
	remaining columns( drop all )
);

```

### Stack

**Syntaxe :** obj << Stack( <Private>, <Invisible>, columns( columns ), <Source Label Column( string )>, <Stacked Data Column( string )>, <Copy formula( 0|1 )>, <Number of Series(n)>, <Contiguous>, <Drop All Other Columns(1) | Name("Non-stacked columns")(Keep( col1, ... )) | Name("Non-stacked columns")(Drop( col1, ... ))>, <Output Table( "name" )>) )

**Description :** Crée une nouvelle table de données avec des valeurs de plusieurs colonnes empilées dans une seule colonne.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << Stack(
	columns( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Source Label Column( "Time" ),
	Stacked Data Column( "Log Hist" )
);

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Stack(
	columns(
		:BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F
	),
	,
	Number of Series( 3 ),
	Contiguous,
	Source Label Column( "Day" ),
	Stacked Data Column( "BP" )
);

```

**Exemple 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Stack(
	columns(
		:BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F
	),
	,
	Number of Series( 3 ),
	Source Label Column( "Time" ),
	Stacked Data Column( "BP" )
);

```

### Structural Equation Models

**Syntaxe :** Structural Equation Models( Model Variables ( columns ) )

**Description :** Fournit une structure permettant d&apos;ajuster toute une variété de modèles, notamment les modèles d&apos;analyse factorielle confirmatoire, les modèles en pistes causales avec ou sans variables latentes, les modèles d&apos;erreur de mesure et les modèles de courbe de croissance latente.

**JMP Version ajoutée :** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);

```

### Subscribe

**Syntaxe :** obj << Subscribe( Key( <"client"> ), OnDeleteColumns| OnAddColumns| OnAddRows| OnDeleteRows| OnRenameColumn | OnClose | OnSave | OnRename (function) )

**Description :** S&apos;abonne pour recevoir les messages concernant les changements de la table de données. Le titulaire de l&apos;abonnement est essentiel, de manière à pouvoir s&apos;y référer. Le paramètre facultatif, , déclenche une confirmation de fermeture lors d&apos;une tentative de fermeture de la clienttable de données. L&apos;option Fonction désigne soit le nom d&apos;une fonction précédente soit la fonction elle-même. La fonctionOn Close  exige un seul argument, la table de données. Les autres messages requièrent un argument supplémentaire, une liste de colonnes ou un nombre de lignes affectées. Chaque abonnement reste en vigueur jusqu&apos;à annulation par le titulaire.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Subscribe( "name1"("client"), On Close( Print( "Closing Data Table" ) ) );
f = Function( {dtab, oldname},
	Print( "oldname", oldname );
	Print( "new name", dtab << getname() );
);
fsave = Function( {dtab, newpathname},
	Print( "new path name", newpathname );
	Print( "new name", dtab << getname() );
);
dt << Subscribe( "name1", On Rename( f ) );
dt << Subscribe( "name1", On Save( fsave ) );
fcols = Function( {dtab, b},
	n = N Items( b );
	dtname = (dtab << getname());
	Print( dtname );
	Print( n );
	For( i = 1, i <= n, i++,
		colname = (b[i] << getname());
		Print( colname );
	);
);
dt << Subscribe( "name2", On Delete Columns( fcols ) ); 
//Try deleting a column, then close the data table.

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
f = Function( {dtab, col, oldname},
	Print( dtab << getname() );
	Print( "new column name", (col << getname()) );
	Print( "old name", oldname );
);
sub = dt << Subscribe( "", OnRenameColumn( f ) );
Column( dt, 1 ) << set name( "test" );
Wait( 1 );
dt << unsubscribe( sub, on rename column );

```

**Exemple 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
delRowsFn = Function( {a, b, rows},
	dtname = (a << Get Name());
	Print( dtname );
	Print( b );
	Print Matrix( rows );
);
addRowsFn = Function( {a, b, insert},
	dtname = (a << Get Name());
	Print( dtname );
	Print( b );
	Print( insert );
);
dt << subscribe( "Test Delete", onDeleteRows( delRowsFn, 3 ) );
dt << subscribe( "Test Add", onAddRows( addRowsFn, 3 ) );
// Try deleting some rows and adding new ones.

```

### Subset

**Syntaxe :** obj << Subset( <Private>, <Invisible>, <Selected columns>, <Columns(column list)>, <All rows | Selected Rows | Filtered Rows(where clause) | Rows([number, number, ...])>, <By(column list)>, <Sampling Rate(fraction)>, <Sample Size(integer)>, <Stratify(column list)>, <Link to original data table(0|1)>, <Copy formula(0|1)>, <Suppress Formula Evaluation>, <Keep by columns> )

**Description :** Permet d’extraire une table de données en sélectionnant des lignes et des colonnes d&apos;une table de données source. Vous pouvez également sélectionner aléatoirement le sous-ensemble de colonnes.

**Échantillon stratifié**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Subset( Sample Size( 10 ), Stratify( :sex ) );

```

**Lignes**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Subset( Rows( [28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40] ) );

```

**Lignes filtrées**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Subset( Filtered Rows( :age == 14 & Contains( :name, "E" ) ) );

```

**Par**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Subset( By( :sex ), Keep by columns );

```

### Summary

**Syntaxe :** obj << Summary( <Private>, <Invisible>, FREQ(column | "none"), WEIGHT(column | "none"),Group( columns ),Subgroup(columns), <N (column)>, <Mean( column )>, <Std Dev( column )>, <Min( column )>, <Max( column )>, <Range( column )>, <Sum( column )>, <CV( column )>...,Include marginal statistics, Link to original data table (0|1),statistics column name format( "stat(column)" | "column" | "stat of column" | "column stat" | "stat") )

**Description :** Crée une nouvelle table de données de statistiques résumées. Si spécifié, la table contient une ligne pour chaque niveau d&apos;une variable de regroupement ou chaque combinaison de niveaux de plusieurs variables de regroupement.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Summary(
	Group( :Age ),
	subgroup( :sex ),
	Mean( :Height ),
	Include marginal statistics
);

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Summary(
	Group( :Age ),
	Mean( :Height ),
	statistics column name format( "stat of column" )
);

```

### Support Vector Machines

**Syntaxe :** Support Vector Machines(Y( column ), X( columns ))

**Description :** Prévoit une réponse basée sur les vecteurs support dans l&apos;espace des variables X. L&apos;un des objectifs de l&apos;algorithme des Séparateurs à vaste marge est d&apos;utiliser les données d&apos;apprentissage pour apprendre comment classer les nouvelles données.

**JMP Version ajoutée :** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

### Suppress Formula Eval

**Syntaxe :** obj << Suppress Formula Eval( state=0|1 )

**Description :** Supprime ou active l’évaluation des formules. Ceci s’avère utile pour accélérer l’ajout de lignes, l’exécution d’analyses multiples et le triage.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Central Limit Theorem.jmp" );
dt << Add Rows( 2000 );
dt << Suppress Formula Eval( 1 );
dt << Add Rows( 2000 );
dt << Suppress Formula Eval( 0 );

```

### Surface Plot

**Syntaxe :** Surface Plot( Columns() )

**Description :** Produit un diagramme de points tridimensionnel rotatif ou une surface définie par une formule enregistrée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);

```

### Survival

**Syntaxe :** Survival( Y( columns ), Censor( column ), <Grouping( column )> )

**Description :** Calcule les estimations des fonctions de survie à l’aide de la méthode du produit-limite (Kaplan-Meier) pour un ou plusieurs groupes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );

```

### Tabulate

**Syntaxe :** Tabulate( Add Table( Column Table( Analysis Columns( column(s) )|Grouping Columns( column(s))|Statistics( )), Row Table( Analysis Columns( column(s) )|Grouping Columns( column(s))|Statistics( )) )

**Description :** Crée une table de données personnalisée des statistiques de résumé d&apos;une ou plusieurs variables. Les variables peuvent être groupées au sein d&apos;une ou de plusieurs colonnes de classification. Cela vous permet de construire le tableau récapitulatif en utilisant des opérations de glisser-déposer.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);

```

### Ternary Plot

**Syntaxe :** Ternary Plot( Y( columns ) )

**Description :** Produit un graphique bidimensionnel de trois composantes de mélange dont la somme est constante.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Ternary Plot( Y( :p1, :p2, :p3 ) );

```

### Text Explorer

**Syntaxe :** Text Explorer( Text Columns( columns ) )

**Description :** Analyse les mots à partir du texte d&apos;une colonne, les dénombre, les associe avec d&apos;autres colonnes, enregistre les indicateurs, et représente graphiquement les relations.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );

```

### Text to Columns

**Syntaxe :** obj << Text to Columns( delimiters(<"separator">, <TAB>, <NEWLINE>), columns(column1, column2, ...) )

**Description :** Convertir une colonne de chaînes avec séparateur incorporé en colonnes séparées. Les colonnes résultantes peuvent être des colonnes d&apos;indicateurs. Les séparateurs peuvent être un caractère, ou les mots-clés TAB ou SAUT DE LIGNE.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Text To Columns( delimiter( "," ), columns( :Brush Delimited ) );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Text To Columns(
	delimiter( "," ),
	columns( :Brush Delimited ),
	Make Indicator Columns( 1 )
);

```

### Time Series

**Syntaxe :** Time Series( Y( column ) )

**Description :** Modélise une série d&apos;observations sur des points temporels également espacés. Inclut le graphique des séries chronologiques, les autocorrélations, le variogramme, la densité spectrale, l&apos;ARIMA, l&apos;ARIMA saisonnière, les modèles de lissage et les prévisions.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );

```

### Time Series Forecast

**Syntaxe :** Time Series Forecast( Y( column ) )

**Description :** Réalise l&apos;ajustement et la prévision de plusieurs séries temporelles en utilisant des méthodes spécifiées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/M3C Quarterly.jmp" );
obj = dt << Time Series Forecast( Y( :Y ), Grouping( :Series ), Time( :Time ) );

```

### Torch Deep Learning

**Syntaxe :** obj << Torch Deep Learning

**Description :** Interface vers la plate-forme du complément d&apos;apprentissage en grande dimension de Torch

### Transform Column

**Syntaxe :** dt << Transform Column(<name>, Formula(<expression>), [Replace(0|1)], [Private(0|1)], [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]

**Description :** Créez une colonne de transformation associée à la table de données cible. La colonne de transformation est accessible comme une colonne réelle. 

	Nom : nom de la colonne

	Formule : la formule qui définit les données dans la colonne de transformation

	Remplacer : avec cette expression, une transformation définie avec le même nom qu&apos;une transformation existante remplacera la transformation existante. Sans cette expression, la transformation existante sera renvoyée si elle est équivalente. Dans le cas contraire, le nom de la nouvelle colonne sera modifié pour la distinguer.

	Privée : avec cette expression, la colonne ne s&apos;affichera pas dans les listes du sélecteur de colonnes

	Type de données (Facultatif) : spécifie le type de données. S&apos;il n&apos;est pas spécifié, le type sera déduit de la première ligne.

	Type de modélisation (Facultatif) : spécifie le type de modélisation. S&apos;il n&apos;est pas spécifié, la valeur par défaut pour le type de données sera utilisée

	Propriétés de colonne : il s&apos;agit de toutes les propriétés de colonne standard que vous souhaitez définir. Vous pouvez également les définir sur la colonne après sa création.

**JMP Version ajoutée :** 16

**Nested**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Transform Column( "A", Formula( :B + 1 ) );
dt << Transform Column( "B", Formula( :height + 1 ) );
Show( :A[1] );
dt << Delete Columns( {:A, :B} );

```

**Random**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Transform Column(
	"Predictable",
	Formula( Random Uniform() ),
	Random Seed( 314 )
);
dt << Transform Column( "Random", Formula( Random Uniform() ) );
Show( :Predictable[1], :Random[1] );
dt << Delete Columns( {:Predictable, :Random} );

```

**Simple**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Transform Column( "A", Formula( :height + 1 ) );
Show( :A[1] );
dt << Delete Columns( :A );

```

### Transpose

**Syntaxe :** obj << Transpose( <Private>, <Invisible>,columns( columns ), By( column ), <Label( column )>, <Output Table( name )> )

**Description :** Crée une nouvelle table de données à partir de la table source où les lignes et les colonnes sont échangées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Transpose(
	columns(
		:BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F
	),
	By( :Dose ),
	Label( :Subject )
);

```

### Type 1 Gauge

**Syntaxe :** obj << Type 1 Gauge( Y( column ) )

**Description :** Analyse les systèmes de mesure sur les données continues en utilisant la méthode de système de mesure de type 1 pour évaluer la capabilité du système de mesure sur une pièce.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Type 1 Gauge MSA.jmp" );
dt << Type 1 Gauge(
	Y( :Y1, :Y2, :Y3 ),
	Type 1 Gauge Metadata(
		:Y1( Tolerance Range( 2 ), Reference( 50.014 ), Resolution( .001 ) ),
		:Y2( Tolerance Range( 6 ), Reference( 24.9 ), Resolution( .01 ) ),
		:Y3( Tolerance Range( 5 ), Reference( 10 ), Resolution( .0005 ) )
	)
);

```

### Ungroup Columns

**Syntaxe :** obj << Ungroup Columns( {column1, column2, ...} | Column Group( group name ) )

**Description :** Dégroupe une liste de colonnes.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Group Columns( "Monday", BP 8M, 3 );
dt << Group Columns( "Wednesday", BP 8W, 3 );
dt << Group Columns( "Friday", BP 8F, 3 );
Wait( 2 );
dt << Ungroup Columns();

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Group Columns( "Monday", BP 8M, 3 );
dt << Group Columns( "Wednesday", BP 8W, 3 );
dt << Group Columns( "Friday", BP 8F, 3 );
Wait( 2 );
dt << Ungroup Columns( Column Group( "Monday" ) );

```

### Ungroup Scripts

**Syntaxe :** obj << Ungroup Scripts( name of script group | list of scripts )

**Description :** Dégrouper une liste de scripts. Si les scripts ne sont pas communiqués, les scripts sélectionnés seront séparés de leur groupe. Tous les groupes seront séparés si aucun script n&apos;est communiqué et si aucun script n&apos;est sélectionné.

**JMP Version ajoutée :** 14

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
Wait( 1 );
dt << ungroup scripts( "VL" );
Wait( 1 );
dt << ungroup scripts(
	{"Graph Builder Line and Bar Charts", "Graph Builder Heat Map"}
);

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
Wait( 1 );
dt << select scripts( {"Graph Builder Smoother Line", "Graph Builder Line Chart"} );
Wait( 1 );
dt << ungroup scripts();

```

### Unsubscribe

**Syntaxe :** obj << Unsubscribe( Key, OnDeleteColumns| OnAddColumns| OnAddRows| OnDeleteRows| OnClose | OnColRename | All )

**Description :** Annule le précédent abonnement à la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Subscribe( "myname", On Close( Print( "Closing Data table" ) ) );
dt << Unsubscribe( "myname", On Close );

```

### Update

**Syntaxe :** obj << Update( With( Data Table( name )), Match Columns( column1 = column2, ...), Selected( columns ), Add columns from Update table(<ALL>, <NONE>, <{column1, column2, ...}>), Replace columns in main table(<ALL>, <NONE>, <{column1, column2, ...}>), <Ignore missing> )

**Description :** Fusionne une table des données mises à jour dans la table de données d&apos;origine en ajoutant ou en remplaçant les colonnes sélectionnées.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Trial1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Little.jmp" );
dt << Update(
	With( Data Table( "Little" ) ),
	Match Columns( :popcorn = :popcorn, :batch = :batch, :oil amt = :oil )
);

```

**Exemple 2**

```js

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt2 = New Table( "Little Class",
	Add Rows( 3 ),
	New Column( "name",
		Character,
		Nominal,
		Set Values( {"KATIE", "ALFRED", "HENRY"} )
	),
	New Column( "height", Continuous, Set Values( [999, 999, 999] ) ),
	New Column( "weight", Continuous, Set Values( [999, 999, 999] ) ),
	New Column( "RANK", Continuous, Set Values( [3, 1, 2] ) ),
	New Column( "CODE", Continuous, Set Values( [0, 1, 1] ) )
);
dt1 << Update(
	With( Data Table( "Little Class" ) ),
	Match Columns( :name = :name ),
	Add columns from Update table( {:RANK} ),
	Replace columns in Main Table( {:height} )
);

```

**Exemple 3**

```js

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt2 = New Table( "Little Class",
	Add Rows( 3 ),
	New Column( "name",
		Character,
		Nominal,
		Set Values( {"KATIE", "ALFRED", "HENRY"} )
	),
	New Column( "height", Continuous, Set Values( [999, 999, 999] ) ),
	New Column( "weight", Continuous, Set Values( [999, 999, 999] ) ),
	New Column( "RANK", Continuous, Set Values( [3, 1, 2] ) ),
	New Column( "CODE", Continuous, Set Values( [0, 1, 1] ) )
);
dt1 << Update(
	With( Data Table( "Little Class" ) ),
	Match Columns( :name = :name ),
	Add columns from Update table( {:RANK} )
);

```

### Update From Database

**Syntaxe :** obj << Update From Database( connectInfo )

**Description :** Met à jour les données de la table avec les données réimportées à partir de la base de données.

```js

Names Default To Here( 1 );
dt = Open Database( "DSN=somedb; UID=userid;pwd=PW", "SELECT * FROM DB.TABLE" );
dt << Update From Database( "Connect Dialog" );

```

### Uplift

**Syntaxe :** Uplift( Y( column ), X( columns ), Treatment( column )  )

**Description :** Ajuste un arbre des partitions récursives qui sélectionne les divisions de façon à optimiser les différences de traitement. Les modèles identifient les groupes d&apos;individus qui ont le plus de chances de répondre à un traitement.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	New Column Name( "Valid1" ),
	Go
);
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Valid1 ),
	Split Best( 3 )
);

```

### Variability Chart

**Syntaxe :** Variability Chart( Y( column ), X( columns ) )

**Description :** Analyse les mesures continues pour déterminer la performance de votre système de mesure. Vous pouvez également effectuer une étude du système de mesure pour obtenir les sources de variation de vos données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );

```

### Virtual Join

**Syntaxe :** Virtual Join

**Description :** Lie une table de données principale à une table de données auxiliaire via une colonne ID.

Permet à la table de données principale d&apos;accéder aux colonnes de la table de données auxiliaire sans jonction physique des tables de données.



La propriété de colonne ID de lien marque une colonne de la table de données auxiliaire en tant que colonne ID.



La propriété de colonne Référence de lien mappe une colonne de la table de données principale sur la colonne ID de la table de données auxiliaire.

La propriété Référence de lien vous permet de définir la référence de la table de données ou le chemin d&apos;accès de la table de données que vous souhaitez lier.

L&apos;option &apos;Utiliser le nom de colonne lié&apos; consolidera les colonnes liées avec le nom de la colonne source au lieu du nom complet unique.

**Exemple 1**

```js

Names Default To Here( 1 );
cID = New Table( "Color IDs",
	Add Rows( 2 ),
	New Column( "ID", Numeric, Set Property( "Link ID", 1 ), Set Values( [1, 2] ) ),
	New Column( "color", Character, Set Values( {"magenta", "cyan"} ) )
);
cID << Save( "$temp\cID.jmp" );

Favs = New Table( "Favorite Colors",
	Add Rows( 4 ),
	New Column( "colorID",
		Numeric,
		Set Property( "Link Reference", Reference Table( "$temp\cID.jmp" ) ),
		Set Values( [1, 2, 1, 2] )
	),
	New Column( "person",
		Character,
		Set Values( {"fred", "ralph", "artemus", "neil"} )
	)
);

Favs:"color[colorID]"n << hide( 0 ); // show the color column in the table, it is hidden by default

Write( "\!n", Favs:person[2], " likes ", Favs:"color[colorID]"n[2] );

Favs:colorID[2] = 1; // change ralph's color by changing his color id
Write( "\!n", Favs:person[2], " likes ", Favs:"color[colorID]"n[2] );
Favs:"color[colorID]"n << hide( 1 ) << hide( 0 );

Write( "\!nRalph's color changed." );

```

**Exemple 2**

```js

Names Default To Here( 1 );
cID = New Table( "Color IDs",
	Add Rows( 2 ),
	New Column( "ID", Numeric, Set Values( [1, 2] ) ),
	New Column( "color", Character, Set Values( {"magenta", "cyan"} ) )
);

Favs = New Table( "Favorite Colors",
	Add Rows( 4 ),
	New Column( "colorID", Numeric, Set Values( [1, 2, 1, 2] ) ),
	New Column( "person",
		Character,
		Set Values( {"fred", "ralph", "artemus", "neil"} )
	)
);
cID:ID << Set Property( "Link ID", 1 );
Favs:colorID << Set Property(
	"Link Reference",
	{Reference Table( cID ), options( "use linked column name" )}
);


Favs:color << hide( 0 ); // show the color column in the table, it is hidden by default

Write( "\!n", Favs:person[2], " likes ", Favs:color[2] ); // not Favs:"color[colorID]"n

Favs:colorID[2] = 1;    // change ralph's color by changing his color id
Write( "\!n", Favs:person[2], " likes ", Favs:color[2] );

Write( "\!nRalph's color changed." );

```

**Exemple 3**

```js

Names Default To Here( 1 );

cID = New Table( "Color IDs",
	Add Rows( 2 ),
	New Column( "ID", Numeric, Set Values( [1, 2] ) ),
	New Column( "color", Character, Set Values( {"magenta", "cyan"} ) )
);

Favs = New Table( "Favorite Colors",
	Add Rows( 4 ),
	New Column( "colorID", Numeric, Set Values( [1, 2, 1, 2] ) ),
	New Column( "person",
		Character,
		Set Values( {"fred", "ralph", "artemus", "neil"} )
	)
);
cID:ID << Set Property( "Link ID", 1 );
Favs:colorID << Set Property(
	"Link Reference",
	{Reference Table( cID ), options( "use linked column name"(1), "auto open" )}
);

Favs2 = New Table( "More Favorites",
	Add Rows( 4 ),
	New Column( "ID", Numeric, Set Values( [1, 2, 3, 4] ) ),
	New Column( " person",
		Character,
		Set Values( {"susie", "james", "mark", "ami"} )
	)
);

// A link ID and link reference can be assigned to the same column.  The option "Auto open" will  
// automatically open the linked tables for you when you open the main referencing table.
Favs2:ID << Set Property( "Link ID", 1 );
cID:ID << Set Property(
	"Link Reference",
	{Reference Table( Favs2 ), Options( "Use Linked Column Name"(1) )}
);

Favs:color << hide( 0 ); // Show the color column in the table, it is hidden by default
Favs:ID << hide( 0 );  // Show the ID column in the table, from More Favorites table
Write( "\!n", Favs:person[2], " likes ", Favs:color[2] ); // Not Favs:"color[colorID]"n

Favs:colorID[2] = 1;    // Change ralph's color by changing his color id
Write( "\!n", Favs:person[2], " likes ", Favs:color[2] );

Write( "\!nRalph's color changed." );
cid:person << hide( 0 );

Write( "\!n", cID:person[2], " likes ", Favs:color[4] );

```

### XGBoost

**Syntaxe :** obj << XGBoost

**Description :** Interface expérimentale vers XGBoost pour la modélisation prédictive par gradient boosting stochastique.

### set private

**Syntaxe :** obj << set private( <1|0> )

**Description :** Rendre la table privée. Une table de données privée est omise de la liste des tables de données et des abonnements.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Show( Get Data Table List() );
Wait( 1 );

dt << Set Private;
Show( Get Data Table List() );
Wait( 1 );

dt << Set Private( 0 );
Show( Get Data Table List() );
Wait( 1 );

Close( dt, No Save );

```

