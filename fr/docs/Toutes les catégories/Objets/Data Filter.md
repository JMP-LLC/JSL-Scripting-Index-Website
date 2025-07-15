# Data Filter



## Colonnes

### Add Filter Columns

**Syntaxe :** obj &lt;&lt; Add Filter Columns( Add Filter Columns( column ) )

**Description :** Ajouter une ou plusieurs colonnes de filtre.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Add Filter Columns( :State );

```

### Filter Column

**Syntaxe :** obj &lt;&lt; Filter Column( column(s) )

**Description :** Ajouter une colonne de filtre.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
obj << Filter Column( :State );

```

### Filter Columns

**Syntaxe :** obj &lt;&lt; Filter Columns( column(s) )

**Description :** Ajouter une ou plusieurs colonnes de filtre.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Filter Columns( :State, :OZONE );

```

### Filter Group

**Syntaxe :** obj &lt;&lt; Filter Group( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);

```

## Constructeurs associés

### Data Filter

**Syntaxe :** Data Filter( &lt;local&gt;, &lt;invisible&gt;, &lt;Add Filter&gt;, &lt;Mode&gt;, &lt;Show Window(0 | 1)&gt;, &lt;no outline box(0 | 1)&gt; )

**Description :** Crée ou affiche un filtre de données vous permettant de sélectionner, de façon interactive, des sous-ensembles complexes de données. L&apos;option Mode détermine quels états de ligne sont affectés par la sélection dans le filtre. La commande Add Filter ajoutera un groupe de filtres à partir des clauses Columns et Where spécifiées. Lorsqu&apos;il y a plusieurs groupes de filtres, le comportement combiné est déterminé par l&apos;option Group By AND. Si le mot clé Local est donné, le filtre peut être activé dans un rapport de façon à filtrer une ou plusieurs plates-formes sans affecter les autres rapports.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);

```

## Messages d'éléments

### Add Favorites

**Syntaxe :** obj &lt;&lt; Add Favorites( name or string )

**Description :** Associer la sélection du filtre actuel au nom donné et enregistrer dans la liste des favoris

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
df = dt << Data Filter(
	Add Filter(
		columns( :age, :sex, :height, :weight ),
		Where( :sex == "F" ),
		Where( :height >= 55 & :height <= 65 )
	),
	Mode( Select )
);
Wait( 1 );
fav1 = df << add favorites( "FemaleAverageHt" );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
df = dt << Data Filter(
	Add Filter( columns( :age, :sex, :height, :weight ), Where( :sex == "F" ) ),
	Mode( Select )
);
Wait( 1 );
fav1 = df << add favorites();
Show( fav1 );

```

### Add Filter

**Syntaxe :** obj &lt;&lt; Add Filter( columns( column, ... ), &lt;Where( clause )&gt; )

**Description :** Ajouter une ou plusieurs colonnes de filtre à un nouveau groupe &apos;OR&apos;.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter();
obj << Add Filter( columns( :POP ) );
obj << Add Filter(
	columns( :Region, :State, :City ),
	Where( :Region == "S" ),
	Where( :State == {"SC", "NC"} )
);

```

### Animation

**Syntaxe :** obj &lt;&lt; Animation( &lt;Animate Column( column )&gt;, &lt;Animate Rate( number )&gt;, &lt;Forward|Backward|Bounce&gt; )

**Description :** Passe en revue toutes les valeurs triées de la colonne spécifiée en sélectionnant/désélectionnant les lignes.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Columns( :Region );
obj << Animation( Animate Column( :Region ), Bounce );
//Now press the play button.

```

### Apply Favorites

**Syntaxe :** obj &lt;&lt; Apply Favorites( name or string )

**Description :** Appliquer la sélection du filtre tel qu&apos;enregistrée dans les favoris nommés du filtre de données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
df = dt << Data Filter(
	Add Filter(
		columns( :age, :sex, :height, :weight ),
		Where( :sex == "F" ),
		Where( :height >= 55 & :height <= 65 )
	),
	Mode( Select )
);
a = "FemaleAverageHt";
b = "Female";
df << add favorites( a );
df << Match( Where( :sex == "F" ) );
df << add favorites( b );
Wait( 1 );
df << apply favorites( "FemaleAverageHt" );

```

### Auto clear

**Syntaxe :** obj &lt;&lt; Auto clear( state=0|1 )

**Description :** Efface toutes les lignes actuellement sélectionnées avant de définir une nouvelle sélection lors du filtrage.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Data Filter;
obj << Auto Clear( 1 );
obj << Add Filter( columns( :age, :sex ), Where( :age == {13, 14} ) );
Wait( 1 );
obj << (filter column( :sex ) << Where( :sex == "M" ));

```

### Clear

**Syntaxe :** obj &lt;&lt; Clear

**Description :** Efface les lignes actuellement sélectionnées.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Region ), Where( :Region == "N" ) );
Wait( 1 );
obj << Clear;

```

### Clear Selection

**Syntaxe :** obj &lt;&lt; Clear Selection

**Description :** Effacer la sélection de ce filtre de colonne.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add( Filter Columns( :Region ), Where( :Region = {"N", "S"} ) )
);
Wait( 1 );
obj << (Filter Column( :Region ) << Clear Selection);

```

### Close

**Syntaxe :** obj &lt;&lt; Close

**Description :** Ferme le filtre de données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
obj << Close;

```

### Conditional

**Syntaxe :** obj &lt;&lt; Conditional( state=0|1 )

**Description :** L&apos;option signale si les filtres des colonnes catégorielles suivent un ordre de type conditionnel. La sélection d’une catégorie limitera les catégories du prochain filtre de colonne uniquement à celles qui appartiennent à la catégorie sélectionnée.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/SATByYear.jmp" );
obj = dt << Data Filter( Add Filter( columns( :Region, :State ) ) );
obj << (Filter Column( :Region ) << Where( :Region == {"South"} ));
Wait( 1 );
obj << conditional( 1 );

```

### Copy Local Data Filter

**Syntaxe :** obj &lt;&lt; Copy Local Data Filter

**Description :** Copier le script pour le filtre des données locales dans le presse-papiers.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
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

### Copy Script

**Syntaxe :** obj &lt;&lt; Copy Script

**Description :** Créez un script JSL pour générer la fenêtre du filtre, puis placez-le dans le presse-papiers.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Copy Script;

```

### Count Excluded Rows

**Syntaxe :** obj &lt;&lt; Count Excluded Rows( state=0|1 )

**Description :** Si l&apos;option est annulée, les valeurs de colonne et les dénombrements apparaissant dans le filtre de données n&apos;incluront pas les lignes dont l&apos;état est Exclue dans la table de données.

**JMP Version ajoutée :** 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Data Filter(
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) ),
	Add Filter( columns( :sex ), Where( :sex == "F" ) )
);
Distribution(
	Automatic Recalc( 1 ),
	Continuous Distribution( Column( :weight ) ),
	Local Data Filter(
		Count Excluded Rows( 0 ),
		Add Filter( columns( :age ), Where( :age == 12 ) )
	)
);

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Data Filter(
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) ),
	Add Filter( columns( :sex ), Where( :sex == "F" ) )
);
New Window( "Hierarchical Data Filter",
	V List Box(
		Data Filter Context Box(
			H List Box(
				Filter Ref Sub 1 = dt << Data Filter(
					Local,
					Add Filter( columns( :age ), Where( :age == 12 ) )
				),
				Platform( Current Data Table(), Distribution( Column( :weight ) ) )
			)
		),
		Data Filter Context Box(
			H List Box(
				Filter Ref Sub 2 = dt << Data Filter(
					Local,
					Count Excluded Rows( 0 ),
					Add Filter( columns( :age ), Where( :age == 12 ) )
				),
				Platform( Current Data Table(), Distribution( Column( :weight ) ) )
			)
		)
	)
);

```

### Data Table Window

**Syntaxe :** obj &lt;&lt; Data Table Window

**Description :** Affichez la table de données JMP utilisée pour cette boîte de dialogue de filtre.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Data Table Window;

```

### Delete

**Syntaxe :** obj &lt;&lt; Delete( {column(s)} )

**Description :** Supprime les colonnes spécifiées avec les filtres présents dans le filtre de données.

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Columns( :Region, :SO2, :CO, :State );
Wait( 1 );
obj << Delete( {:State} );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Columns( :Region, :SO2, :CO, :State );
Wait( 1 );
obj << (Filter Column( :State ) << delete);

```

### Delete All

**Syntaxe :** obj &lt;&lt; Delete All

**Description :** Supprime tous les filtres présents dans le filtre de données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Columns( :Region, :SO2, :CO, :State );
Wait( 2 );
obj << Delete All;

```

### Display

**Syntaxe :** obj &lt;&lt; Display( column, &lt;Invisible(0 | 1)&gt;, &lt;options&gt; )

**Description :** Modifie la manière dont les niveaux de colonne s&apos;affichent dans le filtre. Les colonnes catégorielles prennent en charge l&apos;option de type d&apos;affichage « Affichage de blocs », « Affichage de liste », « Affichage de catégorie unique », « Affichage de la case à cocher » ou « Affichage de la case d&apos;option ». L&apos;option NItems(n) définira le nombre d&apos;éléments visibles dans une vue déroulable. Les colonnes continues prennent en charge les options NBins(n) et Height(h).

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
obj << Display( :Region, N Items( 4 ) );

```

### Extend Where

**Syntaxe :** obj &lt;&lt; Extend Where

**Description :** Étendre la sélection selon le critère établi pour ce filtre de colonne.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add( Filter Columns( :Region ), Where( :Region = {"N", "S"} ) )
);
Wait( 1 );
obj << (Filter Column( :Region ) << Extend Where( :Region = "W" ));

```

### Get Data Table

**Syntaxe :** obj &lt;&lt; Get Data Table

**Description :** Renvoie la table de données associée au filtre.

**JMP Version ajoutée :** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionfilter = obj << Get Data Table();

```

### Get Filter Column

**Syntaxe :** obj &lt;&lt; Get Filter Column( column, &lt;index&gt; )

**Description :** Renvoie l&apos;objet de la colonne de filtre pour la colonne nommée. Si la même colonne est utilisée plusieurs fois, l&apos;argument index renverra l&apos;occurrence spécifiée

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionfilter = obj << Get Filter Column( :Region );
regionfilter << Invert Selection;

```

### Get Filtered Rows

**Syntaxe :** obj &lt;&lt; Get Filtered Rows

**Description :** Renvoie une matrice des numéros de lignes qui répondent aux conditions du filtre actuelles.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Get Filtered Rows;

```

### Get Script

**Syntaxe :** obj &lt;&lt; Get Script

**Description :** Obtenir le script de filtre de données au format texte.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
txt = obj << Get Script;
Show( txt );

```

### Get where clause

**Syntaxe :** obj &lt;&lt; Get where clause

**Description :** Obtenir le texte descriptif de la sélection du filtre.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter( Add( Filter Columns( :Region, :Lead ) ) );
Wait( 1 );
obj << (Filter Column( :Lead ) << Where( :Lead >= .4 & :Lead <= 1.4 ));
txt = obj << get where clause;

```

### Grouped by AND

**Syntaxe :** obj &lt;&lt; Grouped by AND( state=0|1 )

**Description :** Les groupes d&apos;éléments de filtre sont joints par AND

### Inverse

**Syntaxe :** obj &lt;&lt; Inverse( state=0|1 )

**Description :** Inverse l&apos;état de sélection actuel des lignes dans la table de données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
obj << Inverse( 1 );

```

### Invert Selection

**Syntaxe :** obj &lt;&lt; Invert Selection

**Description :** Inverser la sélection de ce filtre de colonne.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add( Filter Columns( :Region ), Where( :Region = {"N", "S"} ) )
);
Wait( 1 );
obj << (Filter Column( :Region ) << invert selection);

```

### Make Filter Change Handler

**Syntaxe :** rs = df &lt;&lt; Make Filter Change Handler(function(a) );

**Description :** Crée un gestionnaire de filtre de données pour gérer la notification de changement de filtre. Le nombre de lignes filtrées est renvoyé à la fonction, dans l&apos;argument.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution(
	Automatic Recalc( 1 ),
	Continuous Distribution( Column( :POP ) )
);
filter = dist << Local Data Filter( Add Filter( columns( :Region ) ) );
f = Function( {a}, Print( a ) );
rs = filter << Make Filter Change Handler( f );

```

### Match

**Syntaxe :** obj &lt;&lt; Match( Filter Columns(:a, :b, :c, ...), where( conditions ) )

**Description :** Définit les critères de filtrage pour chaque groupe.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :BP 8W, :BP 6M ) ),
	Add Filter( columns( :BP 12M ) )
);
Wait( 1 );
obj << Match( Filter Columns( :BP 8W, :BP 6M ),
	Where( :BP 8W > 174.8 & :BP 8W < 184.2 )
);
obj << Match( Filter Columns( :BP 12M ), Where( :BP 12M > 181.9 & :BP 12M < 192.1 ) );

```

### Mode

**Syntaxe :** obj &lt;&lt; Mode( Select|Show|Include (state = 0|1) )

**Description :** Définit l’action ou le mode utilisé(e) lors de la sélection des lignes au moyen du filtre de données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Mode( Include( 1 ), Select( 0 ), Show( 0 ) );
obj << Add Filter( Columns( :Region ), Where( :Region == "N" ) );

```

### On Clear

**Syntaxe :** obj &lt;&lt; On Clear

**Description :** Définir un script ou une fonction à exécuter après l&apos;effaçage du filtre.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Data Filter;
df = obj << Add Filter( columns( :age, :sex ), Where( :age == {13, 14} ) );
obj << OnClear( Function( {}, df << Mode( Include( 0 ), Select( 1 ), Show( 0 ) ) ) );
Wait( 1 );
df << Mode( Include( 1 ), Select( 0 ), Show( 0 ) );

```

### Remove Favorites

**Syntaxe :** obj &lt;&lt; Remove Favorites( name or string )

**Description :** Supprimer les favoris nommés de la liste des favoris

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
df = dt << Data Filter(
	Add Filter(
		columns( :age, :sex, :height, :weight ),
		Where( :sex == "F" ),
		Where( :height >= 55 & :height <= 65 )
	),
	Mode( Select )
);
df << add favorites( "FemaleAverageHt" );
df << Match( Where( :sex == "F" ) );
df << add favorites( "Female" );
Wait( 1 );
df << remove favorites( "FemaleAverageHt" );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
df = dt << Data Filter(
	Add Filter(
		columns( :age, :sex, :height, :weight ),
		Where( :sex == "F" ),
		Where( :height >= 55 & :height <= 65 )
	),
	Mode( Select )
);
df << add favorites( "FemaleAverageHt" );
df << Match( Where( :sex == "F" ) );
df << add favorites( "Female" );
Wait( 1 );
df << remove favorites();

```

### Report

**Syntaxe :** obj &lt;&lt; Report

**Description :** Renvoie une référence à l’objet rapport.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Add Filter( columns( :POP ) );
obj << Add Filter(
	columns( :Region, :State, :City ),
	Where( :Region == "S" ),
	Where( :State == {"SC", "NC"} )
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Save Script to Data Table

**Syntaxe :** obj &lt;&lt; Save Script to Data Table

**Description :** Créez un script JSL pour générer la fenêtre du filtre, puis enregistrez-le sous forme de propriété de table dans la table de données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Save Script to Data Table;

```

### Save Script to Journal

**Syntaxe :** obj &lt;&lt; Save Script to Journal

**Description :** Créez un script JSL pour générer la fenêtre du filtre, puis ajoutez un bouton au journal qui contient ce script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Save Script to Journal;

```

### Save Script to Script Window

**Syntaxe :** obj &lt;&lt; Save Script to Script Window

**Description :** Créez un script JSL pour générer la fenêtre du filtre, puis ajoutez-le à la fenêtre de script actuelle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Save Script to Script Window;

```

### Save Where Clause to Clipboard

**Syntaxe :** obj &lt;&lt; Save Where Clause to Clipboard

**Description :** Créez la clause Where à partir des critères de filtre, puis placez-la dans le presse-papiers.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Lead ), Where( :Lead >= .4 & :Lead <= 2.0 ) );
obj << Save Where Clause To Clipboard;

```

### Save Where Clause to Data Table

**Syntaxe :** obj &lt;&lt; Save Where Clause to Data Table

**Description :** Crée une clause Where à partir des critères de filtre, puis l’enregistre sous forme de propriété de table de données dans la table de données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Lead ), Where( :Lead >= .4 & :Lead <= 2.0 ) );
obj << Save Where Clause To Data Table;

```

### Save Where Clause to Formula Column

**Syntaxe :** obj &lt;&lt; Save Where Clause to Formula Column

**Description :** Créer une colonne indicatrice dont la formule est équivalente aux critères de filtre. Les lignes satisfaisant aux critères de filtre auront une valeur de 1, et toutes les autres lignes auront une valeur de 0.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Lead ), Where( :Lead >= .4 & :Lead <= 2.0 ) );
obj << Save Where Clause To Formula Column;

```

### Save Where Clause to Journal

**Syntaxe :** obj &lt;&lt; Save Where Clause to Journal

**Description :** Créez la clause Where à partir des critères de filtre, puis ajoutez-la au journal.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Lead ), Where( :Lead >= .4 & :Lead <= 2.0 ) );
obj << Save Where Clause To Journal;

```

### Save Where Clause to Row State Column

**Syntaxe :** obj &lt;&lt; Save Where Clause to Row State Column

**Description :** Créez une colonne d&apos;état de ligne qui a une formule équivalente aux critères de filtre.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Lead ), Where( :Lead >= .4 & :Lead <= 2.0 ) );
obj << Save Where Clause To Row State Column;

```

### Save Where Clause to Script Window

**Syntaxe :** obj &lt;&lt; Save Where Clause to Script Window

**Description :** Créez une clause Where à partir des critères de filtre, puis ajoutez-la à la fenêtre de script actuelle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Lead ), Where( :Lead >= .4 & :Lead <= 2.0 ) );
obj << Save Where Clause To Script Window;

```

### Save and restore current row states

**Syntaxe :** obj &lt;&lt; Save and restore current row states( state=0|1 )

**Description :** Enregistre les états de ligne actuels de la table de données, puis rétablit ces états à la fermeture du filtre de données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Save and Restore Current Row States( 1 ),
	Add Filter( Columns( :Region ), Where( :Region == "N" ) )
);
Wait( 1 );
obj << Close;

```

### Select Missing

**Syntaxe :** obj &lt;&lt; Select Missing( state=0|1 )

**Description :** Ajouter les lignes manquantes à la sélection pour ce filtre de colonne aux valeurs continues.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter( Add( Filter Columns( :CO ), Where( :CO >= 9 & :CO < 15 ) ) );
Wait( 1 );
obj << (Filter Column( :CO ) << Select Missing);

```

### Set Include

**Syntaxe :** obj &lt;&lt; Set Include( state=0|1 )

**Description :** Sélectionner le mode d’inclusion désélectionné.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Data Filter( Add Filter( columns( :age, :sex ) ) );
obj << set Include( 1 );
Wait( 1 );
obj << set Include( 0 );

```

### Set Select

**Syntaxe :** obj &lt;&lt; Set Select( state=0|1 )

**Description :** Sélectionner ou désélectionner le mode de sélection.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Data Filter( Add Filter( columns( :age, :sex ) ) );
obj << set select( 1 );
Wait( 1 );
obj << set select( 0 );

```

### Set Show

**Syntaxe :** obj &lt;&lt; Set Show( state=0|1 )

**Description :** Sélectionner le mode d’affichage désélectionné.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Data Filter( Add Filter( columns( :age, :sex ) ) );
obj << set Show( 1 );
Wait( 1 );
obj << set Show( 0 );

```

### Show Controls

**Syntaxe :** obj &lt;&lt; Show Controls( state=0|1 )

**Description :** Afficher ou masquer les commandes de modification des options du filtre de données.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
obj << Show Controls( 0 );

```

### Show Counts

**Syntaxe :** obj &lt;&lt; Show Counts( state=0|1 )

**JMP Version ajoutée :** 16

### Show Histograms and Bars

**Syntaxe :** obj &lt;&lt; Show Histograms and Bars( state=0|1 )

**Description :** Show Histograms and Bars for filter columns where available

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) )
);
Wait( 1 );
obj << Show Histograms and Bars( 0 );

```

### Show Modes

**Syntaxe :** obj &lt;&lt; Show Modes( state=0|1 )

**Description :** Afficher ou masquer les commandes permettant de modifier le mode du filtre de données qui contrôle le comportement de sélection/affichage/inclusion du filtre de données.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
obj << Show Modes( 0 );

```

### Show Subset

**Syntaxe :** obj &lt;&lt; Show Subset

**Description :** Afficher les données filtrées dans une autre fenêtre de table de données

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Region ), Where( :Region == "N" ) );
obj << Show Subset;

```

### Stretch Width

**Syntaxe :** obj &lt;&lt; Stretch Width( "Manual" | "Window" )

**Description :** Définit le comportement d&apos;étirement horizontal du filtre. Par défaut, la largeur du filtre peut être modifiée manuellement. Si défini sur « fenêtre », la largeur est ajustée selon la taille de fenêtre.

**JMP Version ajoutée :** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Shared Local Filter",
	Data Filter Context Box(
		H Splitter Box(
			Size( 1200, 500 ),
			V Scroll Box(
				dt << Data Filter(
					Local,
					Stretch Width( "Window" ),
					Add Filter( columns( :sex ), Where( :sex == "F" ) )
				),
				<<Set Stretch( "Off", "Fill" )
			),
			H Splitter Box(
				dt << Bubble Plot(
					X( :weight ),
					Y( :height ),
					Fit To Window( "On" ),
					Sizes( :age ),
					Title Position( 0, 0 )
				),
				dt << Graph Builder(
					Size( 525, 456 ),
					Show Control Panel( 0 ),
					Fit To Window( "On" ),
					Variables( X( :weight ), Y( :age ) ),
					Elements( Box Plot( X, Y, Legend( 4 ) ) ),

				),

			)
		)
	)
);

```

### Title

**Syntaxe :** obj &lt;&lt; Title

### Unstructured Text

**Syntaxe :** obj &lt;&lt; Unstructured Text

**JMP Version ajoutée :** 16

### Use Floating Window

**Syntaxe :** obj &lt;&lt; Use Floating Window( state=0|1 )

**Description :** Bascule pour ce filtre de données entre l&apos;utilisation d&apos;une fenêtre flottante au-dessus de la table de données et des fenêtres associées ou bien l’utilisation d’une fenêtre disposée normalement à côté des autres fenêtres.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Use Floating Window;

```

### Where

**Syntaxe :** obj &lt;&lt; Where

**Description :** Sélectionner les lignes selon le critère établi pour ce filtre de colonne.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter( Add( Filter Columns( :Region, :Lead ) ) );
Wait( 1 );
obj << (Filter Column( :Lead ) << Where( :Lead >= .4 & :Lead <= 1.4 ));

```

### columns

**Syntaxe :** obj &lt;&lt; columns( columns )

**Description :** Ajouter les colonnes de filtre. Il s’agit d’une commande alternative à l’ajout de colonnes de filtre.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Columns( :Region, :SO2, :CO, :State );

```

## Categorical Filter

### Messages d'éléments

#### Blocks Display

**Syntaxe :** obj &lt;&lt; Blocks Display( state=0|1 )

**Description :** Afficher chaque niveau sous forme de bloc sélectionnable.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Blocks Display;

```

#### Check Box Display

**Syntaxe :** obj &lt;&lt; Check Box Display( state=0|1 )

**Description :** Afficher chaque niveau avec une case à cocher, le nombre de fréquences et les barres.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Check Box Display;

```

#### Clear Find

**Syntaxe :** obj &lt;&lt; Clear Find

**JMP Version ajoutée :** 15

#### Clear Selection

**Syntaxe :** obj &lt;&lt; Clear Selection

**Description :** Efface toutes les sélections actives pour la colonne donnée.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Clear Selection;

```

#### Continuous

**Syntaxe :** obj &lt;&lt; Continuous( state=0|1 )

**JMP Version ajoutée :** 16

#### Delete

**Syntaxe :** obj &lt;&lt; Delete

**Description :** Supprime la variable du panneau de configuration du filtre de données.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Delete;

```

#### Extend Where

**Syntaxe :** obj &lt;&lt; Extend Where

**Description :** Sélectionner les lignes utilisant une expression, en les ajoutant à la sélection actuelle.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Extend Where( :Region == {"MW"} );

```

#### Find

**Syntaxe :** obj &lt;&lt; Find(Set Text("string"), &lt;options&gt;)

**Description :** Propose une zone de texte où vous pouvez saisir une chaîne de recherche pour la colonne sélectionnée.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Find( Set Text( "w" ) );

```

#### Get Selected Items

**Syntaxe :** obj &lt;&lt; Get Selected Items

**JMP Version ajoutée :** 15

#### Get Visible Items

**Syntaxe :** obj &lt;&lt; Get Visible Items

**JMP Version ajoutée :** 19

#### Invert Selection

**Syntaxe :** obj &lt;&lt; Invert Selection

**Description :** Pour la colonne donnée, désélectionne les valeurs sélectionnées et sélectionne toutes les valeurs qui n&apos;étaient pas sélectionnées.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Invert Selection;

```

#### List Display

**Syntaxe :** obj &lt;&lt; List Display( state=0|1 )

**Description :** Afficher chaque niveau dans une liste, avec le nombre de fréquences et les barres.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "Check Box Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << List Display;

```

#### Multiple Response

**Syntaxe :** obj &lt;&lt; Multiple Response( state=0|1 )

**JMP Version ajoutée :** 16

#### Nominal/Ordinal

**Syntaxe :** obj &lt;&lt; Nominal/Ordinal( state=0|1 )

**JMP Version ajoutée :** 16

#### Order By Count

**Syntaxe :** obj &lt;&lt; Order By Count( state=0|1 )

**Description :** Trie les valeurs par nombre décroissant.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Order by Count;

```

#### Radio Box Display

**Syntaxe :** obj &lt;&lt; Radio Box Display( state=0|1 )

**Description :** Afficher chaque niveau avec une case d&apos;option, le nombre de fréquences et les barres.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Radio Box Display;

```

#### Select Filter Item

**Syntaxe :** obj &lt;&lt; Select Filter Item

**Description :** Sélectionner l&apos;élément de filtre donné. Le filtre sélectionné est utilisé en tant qu&apos;objet d&apos;animation actif.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
popobj = obj << Get Filter Column( :POP );
popobj << Select Filter Item;

```

#### Single Category Display

**Syntaxe :** obj &lt;&lt; Single Category Display( state=0|1 )

**Description :** Afficher chaque niveau et nombre de fréquences dans un menu de liste déroulante.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Single Category Display;

```

#### Unstructured Text

**Syntaxe :** obj &lt;&lt; Unstructured Text( state=0|1 )

**JMP Version ajoutée :** 16

#### Where

**Syntaxe :** obj &lt;&lt; Where

**Description :** Sélectionner les lignes utilisant une expression.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Where( :Region == {"MW"} );

```

## Continuous Filter

### Messages d'éléments

#### Clear Selection

**Syntaxe :** obj &lt;&lt; Clear Selection

**Description :** Efface toutes les sélections actives pour la colonne donnée.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Clear Selection;

```

#### Continuous

**Syntaxe :** obj &lt;&lt; Continuous( state=0|1 )

**JMP Version ajoutée :** 16

#### Delete

**Syntaxe :** obj &lt;&lt; Delete

**Description :** Supprime la variable du panneau de configuration du filtre de données.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Delete;

```

#### Extend Where

**Syntaxe :** obj &lt;&lt; Extend Where

**Description :** Sélectionner les lignes utilisant une expression, en les ajoutant à la sélection actuelle.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Extend Where( :Region == {"MW"} );

```

#### Invert Selection

**Syntaxe :** obj &lt;&lt; Invert Selection

**Description :** Pour la colonne donnée, désélectionne les valeurs sélectionnées et sélectionne toutes les valeurs qui n&apos;étaient pas sélectionnées.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Invert Selection;

```

#### Multiple Response

**Syntaxe :** obj &lt;&lt; Multiple Response( state=0|1 )

**JMP Version ajoutée :** 16

#### Nominal/Ordinal

**Syntaxe :** obj &lt;&lt; Nominal/Ordinal( state=0|1 )

**JMP Version ajoutée :** 16

#### Reset Zoom

**Syntaxe :** obj &lt;&lt; Reset Zoom

**Description :** Rétablir les valeurs par défaut pour le min. et le max. de l&apos;affichage du filtre.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Time Series/Air.jmp" );
gb = dt << Graph Builder(
	Size( 522, 492 ),
	Show Control Panel( 0 ),
	Variables(
		X( :month ),
		Y( :Ozone Concentration ),
		Group X( :Summer Months Intervention )
	),
	Elements( Points( X, Y, Legend( 10 ) ), Smoother( X, Y, Legend( 11 ) ) ), 
    
);
ldf = gb << Local Data Filter(
	Add Filter( columns( :date ), Where( :date >= 16Oct1965 & :date <= 31Aug1968 ) )
);
fc = ldf << Get Filter Column( :date );
fc << Zoom to Selection;
Wait( 1 );
fc << Reset Zoom;

```

#### Select Filter Item

**Syntaxe :** obj &lt;&lt; Select Filter Item

**Description :** Sélectionner l&apos;élément de filtre donné. Le filtre sélectionné est utilisé en tant qu&apos;objet d&apos;animation actif.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
popobj = obj << Get Filter Column( :POP );
popobj << Select Filter Item;

```

#### Select Missing

**Syntaxe :** obj &lt;&lt; Select Missing

**Description :** Sélectionne les lignes contenant des valeurs manquantes.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Location( {2098, 120} ),
	Mode( Select( 0 ), Include( 1 ) ),
	Add Filter( columns( :OZONE ), Where( :OZONE >= 0.1 & :OZONE <= 0.2 ) )
);
Wait( 1 );
ozoneobj = obj << Get Filter Column( :OZONE );
ozoneobj << Select Missing;

```

#### Unstructured Text

**Syntaxe :** obj &lt;&lt; Unstructured Text( state=0|1 )

**JMP Version ajoutée :** 16

#### Where

**Syntaxe :** obj &lt;&lt; Where

**Description :** Sélectionner les lignes utilisant une expression.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Where( :Region == {"MW"} );

```

#### Zoom to Selection

**Syntaxe :** obj &lt;&lt; Zoom to Selection

**Description :** Définir le min. et le max. de l&apos;affichage du filtre sur la base de l&apos;intervalle actuellement sélectionné.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Time Series/Air.jmp" );
gb = dt << Graph Builder(
	Size( 522, 492 ),
	Show Control Panel( 0 ),
	Variables(
		X( :month ),
		Y( :Ozone Concentration ),
		Group X( :Summer Months Intervention )
	),
	Elements( Points( X, Y, Legend( 10 ) ), Smoother( X, Y, Legend( 11 ) ) ), 
    
);
ldf = gb << Local Data Filter(
	Add Filter( columns( :date ), Where( :date >= 16Oct1965 & :date <= 31Aug1968 ) )
);
fc = ldf << Get Filter Column( :date );
Wait( 1 );
fc << Zoom to Selection;

```

## Multiple Response Filter

### Messages d'éléments

#### Blocks Display

**Syntaxe :** obj &lt;&lt; Blocks Display( state=0|1 )

**Description :** Afficher chaque niveau sous forme de bloc sélectionnable.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Blocks Display;

```

#### Check Box Display

**Syntaxe :** obj &lt;&lt; Check Box Display( state=0|1 )

**Description :** Afficher chaque niveau avec une case à cocher, le nombre de fréquences et les barres.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Check Box Display;

```

#### Clear Find

**Syntaxe :** obj &lt;&lt; Clear Find

**JMP Version ajoutée :** 15

#### Clear Selection

**Syntaxe :** obj &lt;&lt; Clear Selection

**Description :** Efface toutes les sélections actives pour la colonne donnée.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Clear Selection;

```

#### Continuous

**Syntaxe :** obj &lt;&lt; Continuous( state=0|1 )

**JMP Version ajoutée :** 16

#### Delete

**Syntaxe :** obj &lt;&lt; Delete

**Description :** Supprime la variable du panneau de configuration du filtre de données.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Delete;

```

#### Extend Where

**Syntaxe :** obj &lt;&lt; Extend Where

**Description :** Sélectionner les lignes utilisant une expression, en les ajoutant à la sélection actuelle.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Extend Where( :Region == {"MW"} );

```

#### Find

**Syntaxe :** obj &lt;&lt; Find(Set Text("string"), &lt;options&gt;)

**Description :** Propose une zone de texte où vous pouvez saisir une chaîne de recherche pour la colonne sélectionnée.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Find( Set Text( "w" ) );

```

#### Get Selected Items

**Syntaxe :** obj &lt;&lt; Get Selected Items

**JMP Version ajoutée :** 15

#### Get Visible Items

**Syntaxe :** obj &lt;&lt; Get Visible Items

**JMP Version ajoutée :** 19

#### Invert Selection

**Syntaxe :** obj &lt;&lt; Invert Selection

**Description :** Pour la colonne donnée, désélectionne les valeurs sélectionnées et sélectionne toutes les valeurs qui n&apos;étaient pas sélectionnées.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Invert Selection;

```

#### List Display

**Syntaxe :** obj &lt;&lt; List Display( state=0|1 )

**Description :** Afficher chaque niveau dans une liste, avec le nombre de fréquences et les barres.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "Check Box Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << List Display;

```

#### Match All

**Syntaxe :** obj &lt;&lt; Match All

**Description :** Sélectionner les lignes dont les valeurs correspondent à toutes les valeurs cochées.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match All;

```

#### Match Any

**Syntaxe :** obj &lt;&lt; Match Any

**Description :** Sélectionner les lignes dont les valeurs correspondent à l&apos;une des valeurs cochées. Par défaut, cette option est sélectionnée.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Any;

```

#### Match At Least

**Syntaxe :** dfitem &lt;&lt; Match At Least(n);

**Description :** Sélectionner les lignes dont les valeurs correspondent à au moins n des valeurs cochées.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match At Least( 1 );

```

#### Match At Most

**Syntaxe :** dfitem &lt;&lt; Match At Most(n);

**Description :** Sélectionner les lignes dont les valeurs correspondent à au plus n des valeurs cochées.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match At Most( 1 );

```

#### Match Between

**Syntaxe :** dfitem &lt;&lt; Match Between(n, m);

**Description :** Sélectionner les lignes dont les valeurs correspondent à entre n et m des valeurs cochées.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Between( 1, 2 );

```

#### Match Exactly

**Syntaxe :** obj &lt;&lt; Match Exactly

**Description :** Sélectionner les lignes dont les valeurs correspondent exactement aux valeurs cochées.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Exactly;

```

#### Match None

**Syntaxe :** obj &lt;&lt; Match None

**Description :** Sélectionner les lignes dont les valeurs ne correspondent à aucune valeur cochée.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match None;

```

#### Match Only

**Syntaxe :** obj &lt;&lt; Match Only

**Description :** Sélectionner les lignes dont les valeurs correspondent uniquement à la valeur cochée.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Only;

```

#### Multiple Response

**Syntaxe :** obj &lt;&lt; Multiple Response( state=0|1 )

**JMP Version ajoutée :** 16

#### Nominal/Ordinal

**Syntaxe :** obj &lt;&lt; Nominal/Ordinal( state=0|1 )

**JMP Version ajoutée :** 16

#### Order By Count

**Syntaxe :** obj &lt;&lt; Order By Count( state=0|1 )

**Description :** Trie les valeurs par nombre décroissant.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Order by Count;

```

#### Radio Box Display

**Syntaxe :** obj &lt;&lt; Radio Box Display( state=0|1 )

**Description :** Afficher chaque niveau avec une case d&apos;option, le nombre de fréquences et les barres.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Radio Box Display;

```

#### Select Filter Item

**Syntaxe :** obj &lt;&lt; Select Filter Item

**Description :** Sélectionner l&apos;élément de filtre donné. Le filtre sélectionné est utilisé en tant qu&apos;objet d&apos;animation actif.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
popobj = obj << Get Filter Column( :POP );
popobj << Select Filter Item;

```

#### Single Category Display

**Syntaxe :** obj &lt;&lt; Single Category Display( state=0|1 )

**Description :** Afficher chaque niveau et nombre de fréquences dans un menu de liste déroulante.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Single Category Display;

```

#### Unstructured Text

**Syntaxe :** obj &lt;&lt; Unstructured Text( state=0|1 )

**JMP Version ajoutée :** 16

#### Where

**Syntaxe :** obj &lt;&lt; Where

**Description :** Sélectionner les lignes utilisant une expression.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Where( :Region == {"MW"} );

```

## Unstructured Text Filter

### Messages d'éléments

#### Add Missing

**Syntaxe :** obj &lt;&lt; Add Missing

**Description :** Ajouter une valeur manquante comme option sélectionnable pour le texte non structuré.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :sibling ages ) ),
	Elements( Bar( X, Legend( 3 ) ) )
);
df = obj << Local Data Filter(
	Add Filter(
		columns( :reported illnesses ),
		Unstructured Text( Column( :reported illnesses ), Add Filter Text( "head" ) ),
		Match Any( Where( Contains( :reported illnesses, "head" ) ) ),

	)
);
Wait( 1 );
illness_obj = df << Get Filter Column( :reported illnesses );
illness_obj << Add Missing;

```

#### Blocks Display

**Syntaxe :** obj &lt;&lt; Blocks Display( state=0|1 )

**Description :** Afficher chaque niveau sous forme de bloc sélectionnable.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Blocks Display;

```

#### Check Box Display

**Syntaxe :** obj &lt;&lt; Check Box Display( state=0|1 )

**Description :** Afficher chaque niveau avec une case à cocher, le nombre de fréquences et les barres.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Check Box Display;

```

#### Clear Filter Texts List

**Syntaxe :** obj &lt;&lt; Clear Filter Texts List

**Description :** Effacer la liste des filtres pour un élément filtre de texte non structuré.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :sibling ages ) ),
	Elements( Bar( X, Legend( 3 ) ) )
);
df = obj << Local Data Filter(
	Add Filter(
		columns( :reported illnesses ),
		Unstructured Text( Column( :reported illnesses ), Add Filter Text( "head" ) ),
		Match Any( Where( Contains( :reported illnesses, "head" ) ) ),

	)
);
Wait( 1 );
illness_obj = df << Get Filter Column( :reported illnesses );
illness_obj << Clear Filter Texts List;

```

#### Clear Selection

**Syntaxe :** obj &lt;&lt; Clear Selection

**Description :** Efface toutes les sélections actives pour la colonne donnée.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Clear Selection;

```

#### Continuous

**Syntaxe :** obj &lt;&lt; Continuous( state=0|1 )

**JMP Version ajoutée :** 16

#### Delete

**Syntaxe :** obj &lt;&lt; Delete

**Description :** Supprime la variable du panneau de configuration du filtre de données.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Delete;

```

#### Extend Where

**Syntaxe :** obj &lt;&lt; Extend Where

**Description :** Sélectionner les lignes utilisant une expression, en les ajoutant à la sélection actuelle.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Extend Where( :Region == {"MW"} );

```

#### Get Selected Items

**Syntaxe :** obj &lt;&lt; Get Selected Items

**JMP Version ajoutée :** 15

#### Get Visible Items

**Syntaxe :** obj &lt;&lt; Get Visible Items

**JMP Version ajoutée :** 19

#### Invert Selection

**Syntaxe :** obj &lt;&lt; Invert Selection

**Description :** Pour la colonne donnée, désélectionne les valeurs sélectionnées et sélectionne toutes les valeurs qui n&apos;étaient pas sélectionnées.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Invert Selection;

```

#### List Display

**Syntaxe :** obj &lt;&lt; List Display( state=0|1 )

**Description :** Afficher chaque niveau dans une liste, avec le nombre de fréquences et les barres.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "Check Box Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << List Display;

```

#### Match All

**Syntaxe :** obj &lt;&lt; Match All

**Description :** Sélectionner les lignes dont les valeurs correspondent à toutes les valeurs cochées.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match All;

```

#### Match Any

**Syntaxe :** obj &lt;&lt; Match Any

**Description :** Sélectionner les lignes dont les valeurs correspondent à l&apos;une des valeurs cochées. Par défaut, cette option est sélectionnée.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Any;

```

#### Match At Least

**Syntaxe :** dfitem &lt;&lt; Match At Least(n);

**Description :** Sélectionner les lignes dont les valeurs correspondent à au moins n des valeurs cochées.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match At Least( 1 );

```

#### Match At Most

**Syntaxe :** dfitem &lt;&lt; Match At Most(n);

**Description :** Sélectionner les lignes dont les valeurs correspondent à au plus n des valeurs cochées.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match At Most( 1 );

```

#### Match Between

**Syntaxe :** dfitem &lt;&lt; Match Between(n, m);

**Description :** Sélectionner les lignes dont les valeurs correspondent à entre n et m des valeurs cochées.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Between( 1, 2 );

```

#### Match Exactly

**Syntaxe :** obj &lt;&lt; Match Exactly

**Description :** Sélectionner les lignes dont les valeurs correspondent exactement aux valeurs cochées.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Exactly;

```

#### Match None

**Syntaxe :** obj &lt;&lt; Match None

**Description :** Sélectionner les lignes dont les valeurs ne correspondent à aucune valeur cochée.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match None;

```

#### Match Only

**Syntaxe :** obj &lt;&lt; Match Only

**Description :** Sélectionner les lignes dont les valeurs correspondent uniquement à la valeur cochée.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Only;

```

#### Multiple Response

**Syntaxe :** obj &lt;&lt; Multiple Response( state=0|1 )

**JMP Version ajoutée :** 16

#### Nominal/Ordinal

**Syntaxe :** obj &lt;&lt; Nominal/Ordinal( state=0|1 )

**JMP Version ajoutée :** 16

#### Order By Count

**Syntaxe :** obj &lt;&lt; Order By Count( state=0|1 )

**Description :** Trie les valeurs par nombre décroissant.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Order by Count;

```

#### Radio Box Display

**Syntaxe :** obj &lt;&lt; Radio Box Display( state=0|1 )

**Description :** Afficher chaque niveau avec une case d&apos;option, le nombre de fréquences et les barres.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Radio Box Display;

```

#### Select Filter Item

**Syntaxe :** obj &lt;&lt; Select Filter Item

**Description :** Sélectionner l&apos;élément de filtre donné. Le filtre sélectionné est utilisé en tant qu&apos;objet d&apos;animation actif.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
popobj = obj << Get Filter Column( :POP );
popobj << Select Filter Item;

```

#### Show Filter Text Edit Box

**Syntaxe :** obj &lt;&lt; Show Filter Text Edit Box( state=0|1 )

**Description :** Afficher ou masquer la zone de modification de texte pour définir les conditions du filtre de texte.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :sibling ages ) ),
	Elements( Bar( X, Legend( 3 ) ) )
);
df = obj << Local Data Filter(
	Add Filter(
		columns( :reported illnesses ),
		Unstructured Text( Column( :reported illnesses ), Add Filter Text( "head" ) ),
		Match Any( Where( Contains( :reported illnesses, "head" ) ) ),

	)
);
Wait( 1 );
illness_obj = df << Get Filter Column( :reported illnesses );
illness_obj << Show Filter Text Edit Box( 0 );

```

#### Single Category Display

**Syntaxe :** obj &lt;&lt; Single Category Display( state=0|1 )

**Description :** Afficher chaque niveau et nombre de fréquences dans un menu de liste déroulante.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Single Category Display;

```

#### Unstructured Text

**Syntaxe :** obj &lt;&lt; Unstructured Text( state=0|1 )

**JMP Version ajoutée :** 16

#### Where

**Syntaxe :** obj &lt;&lt; Where

**Description :** Sélectionner les lignes utilisant une expression.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Where( :Region == {"MW"} );

```

