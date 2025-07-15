# Surface Plot



## Colonnes

### By

**Syntaxe :** obj &lt;&lt; By( column(s) )

**Description :** Produire plusieurs rapports, un pour chaque niveau de la ou des variables.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);

```

### Columns

**Syntaxe :** obj &lt;&lt; Columns( column(s) )

**Description :** Variables qui seront disponibles pour les coordonnées X, Y et Z dans le graphique 3D.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :silane, :silica, :hardness ) );

```

### Factors

**Syntaxe :** obj &lt;&lt; Factors( column(s) )

**Description :** Variables qui seront disponibles pour les coordonnées X, Y et Z dans le graphique 3D.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Factors( :silane, :silica, :hardness ) );

```

## Constructeurs associés

### Surface Plot

**Syntaxe :** Surface Plot( Columns() )

**Description :** Produit un diagramme de points tridimensionnel rotatif ou une surface définie par une formule enregistrée.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);

```

## Messages d'éléments

### Clip Sheet

**Syntaxe :** obj &lt;&lt; Clip Sheet( state=0|1 ); obj &lt;&lt; Clip Sheet1( state=0|1 )

**Description :** Coupe la surface au niveau des étendues des colonnes utilisées dans la colonne de formule de la première réponse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Response( :Pred Formula ABRASION );
Wait( 1 );
obj << Clip Sheet( 1 );

```

### Clip Sheet1

**Syntaxe :** obj &lt;&lt; Clip Sheet( state=0|1 ); obj &lt;&lt; Clip Sheet1( state=0|1 )

**Description :** Coupe la surface au niveau des étendues des colonnes utilisées dans la colonne de formule de la première réponse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Response( :Pred Formula ABRASION );
Wait( 1 );
obj << Clip Sheet( 1 );

```

### Clip Sheet2

**Syntaxe :** obj &lt;&lt; Clip Sheet2( state=0|1 )

**Description :** Coupe la surface au niveau des étendues des colonnes utilisées dans la colonne de formule de la deuxième réponse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Response( "Pred Formula MODULUS", :Pred Formula MODULUS );
obj << Show Surface2( "Both Sides" );
Wait( 1 );
obj << Clip Sheet2( 1 );

```

### Clip Sheet3

**Syntaxe :** obj &lt;&lt; Clip Sheet3( state=0|1 )

**Description :** Coupe la surface au niveau des étendues des colonnes utilisées dans la colonne de formule de la troisième réponse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG );
obj << Show Surface3( "Both sides" );
Wait( 1 );
obj << Clip Sheet3( 1 );

```

### Clip Sheet4

**Syntaxe :** obj &lt;&lt; Clip Sheet4( state=0|1 )

**Description :** Coupe la surface au niveau des étendues des colonnes utilisées dans la colonne de formule de la quatrième réponse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ELONG, :Pred Formula ABRASION, :Pred Formula MODULUS,
		:Pred Formula HARDNESS
	)
);
obj << Response(
	"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",
	:Pred Formula HARDNESS
);
obj << Show Surface4( "Both sides" );
Wait( 1 );
obj << Clip Sheet4( 1 );

```

### Contour Color

**Syntaxe :** obj &lt;&lt; Contour Color( color ); obj &lt;&lt; Contour Color1( color )

**Description :** Spécifie la couleur des courbes d&apos;isoréponses sur la surface pour la première réponse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Show Contour( "On Surface" )
);
obj << Surface Color Method( ":Pred Formula ABRASION" );
Wait( 1 );
obj << Contour Color( {255, 128, 0} );

```

### Contour Color1

**Syntaxe :** obj &lt;&lt; Contour Color( color ); obj &lt;&lt; Contour Color1( color )

**Description :** Spécifie la couleur des courbes d&apos;isoréponses sur la surface pour la première réponse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Show Contour( "On Surface" )
);
obj << Surface Color Method( ":Pred Formula ABRASION" );
Wait( 1 );
obj << Contour Color( {255, 128, 0} );

```

### Contour Color2

**Syntaxe :** obj &lt;&lt; Contour Color2( color )

**Description :** Spécifie la couleur des courbes d&apos;isoréponses sur la surface pour la deuxième réponse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Show Surface2( "Both Sides" )
);
obj << Show Contour2( "On Surface" );
Wait( 1 );
obj << Contour Color2( {255, 128, 0} );

```

### Contour Color3

**Syntaxe :** obj &lt;&lt; Contour Color3( color )

**Description :** Spécifie la couleur des courbes d&apos;isoréponses sur la surface pour la troisième réponse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Show Surface3( "Both Sides" )
);
obj << Show Contour3( "On Surface" );
Wait( 1 );
obj << Contour Color3( {255, 0, 0} );

```

### Contour Color4

**Syntaxe :** obj &lt;&lt; Contour Color4( color )

**Description :** Spécifie la couleur des courbes d&apos;isoréponses sur la surface pour la quatrième réponse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface4( "Both Sides" ),
	Show Surface1( "Off" )
);
obj << Show Contour4( "On Surface" );
Wait( 1 );
obj << Contour Color4( {100, 0, 200} );

```

### Control Panel

**Syntaxe :** obj &lt;&lt; Control Panel( state=0|1 )

**Description :** Affiche ou masque le panneau de configuration, qui inclut les commandes pour l&apos;apparence, les variables indépendantes et les variables dépendantes. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Control Panel( 0 );

```

### Data points Color

**Syntaxe :** obj &lt;&lt; Data Points Color( color ); obj &lt;&lt; Data Points Color1( color )

**Description :** Modifie la couleur des points des données pour la première variable dépendante dessinée sur la surface.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Response( :Pred Formula ABRASION );
obj << Datapoints Choice( "Mesh" );
obj << Data Points Color( {0, 0, 255} );

```

### Data points Color1

**Syntaxe :** obj &lt;&lt; Data Points Color( color ); obj &lt;&lt; Data Points Color1( color )

**Description :** Modifie la couleur des points des données pour la première variable dépendante dessinée sur la surface.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Response( :Pred Formula ABRASION );
obj << Datapoints Choice( "Mesh" );
obj << Data Points Color( {0, 0, 255} );

```

### Data points Color2

**Syntaxe :** obj &lt;&lt; Data points Color2( color )

**Description :** Modifie la couleur des points des données pour la deuxième variable dépendante dessinée sur la surface.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ) );
obj << Response( "Pred Formula MODULUS", :Pred Formula MODULUS );
obj << Datapoints Choice2( "Mesh" );
obj << Data Points Color2( {0, 0, 255} );

```

### Data points Color3

**Syntaxe :** obj &lt;&lt; Data points Color3( color )

**Description :** Modifie la couleur des points des données pour la troisième variable dépendante dessinée sur la surface.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG )
);
obj << Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG );
obj << Datapoints Choice3( "Needles" );
obj << Data Points Color3( {255, 0, 0} );

```

### Data points Color4

**Syntaxe :** obj &lt;&lt; Data points Color4( color )

**Description :** Modifie la couleur des points des données pour la quatrième variable dépendante dessinée sur la surface.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Datapoints Choice4( "Surface" );
obj << Data points Color4( 100, 0, 200 );
obj << Response(
	"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",
	:Pred Formula HARDNESS
);
obj << Frame3D(
	Set Rotation( -79.3688859847019, -1.23001727812475, 27.7096879560307 )
);

```

### Datapoints Choice

**Syntaxe :** obj &lt;&lt; Datapoints Choice( "Off"|"Points"|"Needles"|"Mesh"|"Surface" ); obj &lt;&lt; Datapoints Choice1( "Off"|"Points"|"Needles"|"Mesh"|"Surface" )

**Description :** Spécifie l&apos;affichage des points sur la surface pour la première réponse. Le style par défaut est l&apos;option Points.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Response( :Pred Formula ABRASION );
obj << Datapoints Choice( "Needles" );

```

### Datapoints Choice1

**Syntaxe :** obj &lt;&lt; Datapoints Choice( "Off"|"Points"|"Needles"|"Mesh"|"Surface" ); obj &lt;&lt; Datapoints Choice1( "Off"|"Points"|"Needles"|"Mesh"|"Surface" )

**Description :** Spécifie l&apos;affichage des points sur la surface pour la première réponse. Le style par défaut est l&apos;option Points.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Response( :Pred Formula ABRASION );
obj << Datapoints Choice( "Needles" );

```

### Datapoints Choice2

**Syntaxe :** obj &lt;&lt; Datapoints Choice2( "État désactivé"|"Points"|"Bâtons"|"Maillage"|"Surface" )

**Description :** Spécifie l&apos;affichage des points sur la surface pour la deuxième réponse. Le style par défaut est l&apos;option Points.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Response( ":Pred Formula MODULUS", :Pred Formula MODULUS );
Wait( 1 );
obj << Datapoints Choice2( "Off" );

```

### Datapoints Choice3

**Syntaxe :** obj &lt;&lt; Datapoints Choice3( "État désactivé"|"Points"|"Bâtons"|"Maillage"|"Surface" )

**Description :** Spécifie l&apos;affichage des points sur la surface pour la troisième réponse. Le style par défaut est l&apos;option Points.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG );
obj << Datapoints Choice3( "Mesh" );

```

### Datapoints Choice4

**Syntaxe :** obj &lt;&lt; Datapoints Choice4( "État désactivé"|"Points"|"Bâtons"|"Maillage"|"Surface" )

**Description :** Spécifie l&apos;affichage des points sur la surface pour la quatrième réponse. Le style par défaut est l&apos;option Points.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ELONG, :Pred Formula ABRASION, :Pred Formula MODULUS,
		:Pred Formula HARDNESS
	)
);
obj << Response(
	"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",
	:Pred Formula HARDNESS
);
obj << Datapoints Choice4( "Surface" );

```

### Dependent Variables Points

**Syntaxe :** obj &lt;&lt; Dependent Variables Points( state=0|1 )

**Description :** Affiche ou masque les options pour les points dans les commandes des variables dépendantes. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Dependent Variables Points( 0 );

```

### Dependent Variables Response Grid

**Syntaxe :** obj &lt;&lt; Dependent Variables Response Grid( state=0|1 )

**Description :** Affiche ou masque les options de grille dans les commandes des variables dépendantes. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Dependent Variables Response Grid( 0 );

```

### Equation

**Syntaxe :** obj &lt;&lt; Equation( equation1, &lt;equation2&gt;, &lt;equation3&gt;, &lt;equation4&gt; )

**Description :** Affecte des équations aux feuilles dans l&apos;ordre spécifié dans la section des variables dépendantes. Pour sauter une réponse, spécifiez une valeur manquante à l&apos;aide d&apos;un point.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG )
);
obj << Show Surface2( "Both sides" );
obj << Equation( ., ".7*:Silane+5*:Silica" );
obj << Show Formula( 1 );

```

### Fit to Window

**Syntaxe :** obj &lt;&lt; Fit to Window( "Auto"|"Activé"|"Désactivé(e)" )

**Description :** Définit le mode d&apos;ajustement automatique du rapport.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Fit to Window( "Off" );

```

### Formula

**Syntaxe :** obj &lt;&lt; Formula( column, &lt;column&gt;, &lt;column&gt;, &lt;column&gt; )

**Description :** Affecte les formules des colonnes aux feuilles dans l’ordre spécifié à la section des variables dépendantes.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Datapoints Choice2( "Surface" )
);
obj << Show Surface2( "Both sides" );
obj << Formula( :Pred Formula ABRASION, :Pred Formula ELONG );

```

### Frame3D

**Syntaxe :** obj &lt;&lt; Frame3D( Scatterplot 3D options )

**Description :** Change les options d&apos;affichage sur la surface. Cette option utilise les messages de la plate-forme Nuage de points 3D. Consultez la description complète sous Nuage de points 3D pour plus de détails.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Show Surface2( "Both sides" )
);
obj << Frame3D(
	Set Graph Size( 692, 671 ),
	Set Rotation( -54, 0, 38 ),
	Background Color( 255, 177, 125 )
);

```

### Hide Lights Border

**Syntaxe :** obj &lt;&lt; Hide Lights Border( state=0|1 )

**Description :** Affiche ou masque les commandes d&apos;éclairage.

```jsl

Names Default To Here( 1 );
obj = Surface Plot();
Wait( 1 );
obj << Hide Lights Border( 1 );

```

### Iso Value

**Syntaxe :** obj &lt;&lt; Iso Value( id, value )

**Description :** Change la valeur du curseur de l&apos;isosurface pour une variable dépendante particulière. L&apos;argument id identifie la variable dépendante à l&apos;aide d&apos;un indice partant de zéro.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ) );
obj << Mode( "Isosurface" );
Wait( 1 );
obj << Iso Value( 0, 100 );
obj << Iso Value( 1, 1500 );

```

### Lock Z Scale

**Syntaxe :** obj &lt;&lt; Lock Z Scale( state=0|1 )

**Description :** Verrouille l&apos;axe Z à ses valeurs actuelles.

```jsl

Names Default To Here( 1 );
obj = Surface Plot();
obj << Lock Z Scale( 1 );

```

### Mesh Color

**Syntaxe :** obj &lt;&lt; Mesh Color( color ); obj &lt;&lt; Mesh Color1( color )

**Description :** Spécifie la couleur du maillage de surface pour la première variable dépendante. Cette option n&apos;est disponible que lorsqu&apos;une valeur autre que Désactivé est sélectionnée pour l&apos;option de maillage.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Show Mesh( "X and Y" );
Wait( 1 );
obj << Mesh Color( {0, 0, 255} );

```

### Mesh Color1

**Syntaxe :** obj &lt;&lt; Mesh Color( color ); obj &lt;&lt; Mesh Color1( color )

**Description :** Spécifie la couleur du maillage de surface pour la première variable dépendante. Cette option n&apos;est disponible que lorsqu&apos;une valeur autre que Désactivé est sélectionnée pour l&apos;option de maillage.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Show Mesh( "X and Y" );
Wait( 1 );
obj << Mesh Color( {0, 0, 255} );

```

### Mesh Color2

**Syntaxe :** obj &lt;&lt; Mesh Color2( color )

**Description :** Spécifie la couleur du maillage de surface pour la deuxième variable dépendante. Cette option n&apos;est disponible que lorsqu&apos;une valeur autre que Désactivé est sélectionnée pour l&apos;option de maillage.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ) );
obj << Mode( "Isosurface" );
obj << Show Mesh2( "X and Y" );
Wait( 1 );
obj << Mesh Color2( {255, 0, 0} );

```

### Mesh Color3

**Syntaxe :** obj &lt;&lt; Mesh Color3( color )

**Description :** Spécifie la couleur du maillage de surface pour la troisième variable dépendante. Cette option n&apos;est disponible que lorsqu&apos;une valeur autre que Désactivé est sélectionnée pour l&apos;option de maillage.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG )
);
obj << Mode( "Isosurface" );
obj << Show Mesh3( "X and Y" );
Wait( 1 );
obj << Mesh Color3( {50, 0, 100} );

```

### Mesh Color4

**Syntaxe :** obj &lt;&lt; Mesh Color4( color )

**Description :** Spécifie la couleur du maillage de surface pour la quatrième variable dépendante. Cette option n&apos;est disponible que lorsqu&apos;une valeur autre que Désactivé est sélectionnée pour l&apos;option de maillage.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Mode( "Isosurface" );
obj << Show Mesh4( "X and Y" );
Wait( 1 );
obj << Mesh Color4( {0, 250, 0} );

```

### Mode

**Syntaxe :** obj &lt;&lt; Mode( "Feuille, points"|"Isosurface"|"Grille de densité" )

**Description :** Spécifie l&apos;affichage des surfaces sur le graphique. L&apos;option Feuilles, points affiche les feuilles, les points et les lignes sur la surface. L&apos;option Isosurface utilise une formule avec trois variables indépendantes.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Surface 2( "Both Sides" );
obj << Show Surface 4( "Both Sides" );
obj << Mode( "Isosurface" );

```

### Resolution

**Syntaxe :** obj &lt;&lt; Resolution( number )obj &lt;&lt; X Resolution( number )obj &lt;&lt; Y Resolution( number )

**Description :** Change la résolution utilisée pour dessiner la surface de réponse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Mode( "Isosurface" );
Wait( 1 );
obj << Resolution( 4 );
Wait( 1 );
obj << Resolution( 12 );

```

### Response

**Syntaxe :** obj &lt;&lt; Response( column, &lt;column&gt;, &lt;column&gt;, &lt;column&gt; )

**Description :** Identifie jusqu’à quatre colonnes de réponse pour représenter les points superposés. Pour sauter une réponse, utilisez une chaîne entre guillemets comme espace réservé.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Datapoints Choice3( "Surface" )
);
obj << Response( :Pred Formula ABRASION, "", :Pred Formula ELONG );

```

### Response Column Color Theme

**Syntaxe :** obj &lt;&lt; Response Column Color Theme( color theme ); obj &lt;&lt; Response Column Color Theme1( color theme )

**Description :** Change le thème de couleurs de la surface pour la première réponse. Cette option n&apos;est disponible que pour les colonnes de réponse de point qui utilisent un gradient continu.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( "Surface" ),
	Response Column Fill( "Continuous Gradients" ),
	Response( :Pred Formula ABRASION )
);
Wait( 1 );
obj << Response Column Color Theme( "Jet" );

```

### Response Column Color Theme1

**Syntaxe :** obj &lt;&lt; Response Column Color Theme( color theme ); obj &lt;&lt; Response Column Color Theme1( color theme )

**Description :** Change le thème de couleurs de la surface pour la première réponse. Cette option n&apos;est disponible que pour les colonnes de réponse de point qui utilisent un gradient continu.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( "Surface" ),
	Response Column Fill( "Continuous Gradients" ),
	Response( :Pred Formula ABRASION )
);
Wait( 1 );
obj << Response Column Color Theme( "Jet" );

```

### Response Column Color Theme2

**Syntaxe :** obj &lt;&lt; Response Column Color Theme2( color theme )

**Description :** Change le thème de couleurs de la surface pour la deuxième réponse. Cette option n&apos;est disponible que pour les colonnes de réponse de point qui utilisent un gradient continu.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Equation( ., ., ., . ),
	Datapoints Choice2( "Surface" ),
	Response Column Fill2( "Continuous Gradients" ),
	Response( "Pred Formula MODULUS", :Pred Formula MODULUS )
);
Wait( 1 );
obj << Response Column Color Theme2( "White to Black" );

```

### Response Column Color Theme3

**Syntaxe :** obj &lt;&lt; Response Column Color Theme3( color theme )

**Description :** Change le thème de couleurs de la surface pour la troisième réponse. Cette option n&apos;est disponible que pour les colonnes de réponse de point qui utilisent un gradient continu.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Equation( ., ., ., . ),
	Datapoints Choice3( "Surface" ),
	Response Column Fill3( "Continuous Gradients" ),
	Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG )
);
Wait( 1 );
obj << Response Column Color Theme3( "Blue to Gray to Red" );

```

### Response Column Color Theme4

**Syntaxe :** obj &lt;&lt; Response Column Color Theme4( color theme )

**Description :** Change le thème de couleurs de la surface pour la quatrième réponse. Cette option n&apos;est disponible que pour les colonnes de réponse de point qui utilisent un gradient continu.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Equation( ., ., ., . ),
	Datapoints Choice4( "Surface" ),
	Response Column Fill4( "Continuous Gradients" ),
	Response(
		"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Response Column Color Theme4( "White to Red" );

```

### Response Column Fill

**Syntaxe :** obj &lt;&lt; Response Column Fill( "Solid"|"Continuous Gradients"|"Discrete Gradients" ); obj &lt;&lt; Response Column Fill1( "Solid"|"Continuous Gradients"|"Discrete Gradients" )

**Description :** Spécifie si la première surface est coloriée avec une couleur unie, des gradients continus, ou des gradients discrets. Cette option n&apos;est disponible que si la surface est générée à l&apos;aide d&apos;une colonne de réponse dépendante de points.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( "Surface" ),
	Response( :Pred Formula ABRASION )
);
Wait( 1 );
obj << Response Column Fill( "Discrete Gradients" );

```

### Response Column Fill1

**Syntaxe :** obj &lt;&lt; Response Column Fill( "Solid"|"Continuous Gradients"|"Discrete Gradients" ); obj &lt;&lt; Response Column Fill1( "Solid"|"Continuous Gradients"|"Discrete Gradients" )

**Description :** Spécifie si la première surface est coloriée avec une couleur unie, des gradients continus, ou des gradients discrets. Cette option n&apos;est disponible que si la surface est générée à l&apos;aide d&apos;une colonne de réponse dépendante de points.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( "Surface" ),
	Response( :Pred Formula ABRASION )
);
Wait( 1 );
obj << Response Column Fill( "Discrete Gradients" );

```

### Response Column Fill2

**Syntaxe :** obj &lt;&lt; Response Column Fill2( "Plein"|"Gradients continus"|"Gradients discrets" )

**Description :** Spécifie si la deuxième surface est coloriée avec une couleur unie, des gradients continus, ou des gradients discrets. Cette option n&apos;est disponible que si la surface est générée à l&apos;aide d&apos;une colonne de réponse dépendante de points.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Equation( ., ., ., . ),
	Datapoints Choice2( "Surface" ),
	Response( "Pred Formula MODULUS", :Pred Formula MODULUS )
);
Wait( 1 );
obj << Response Column Fill2( "Continuous Gradients" );

```

### Response Column Fill3

**Syntaxe :** obj &lt;&lt; Response Column Fill3( "Plein"|"Gradients continus"|"Gradients discrets" )

**Description :** Spécifie si la troisième surface est coloriée avec une couleur unie, des gradients continus, ou des gradients discrets. Cette option n&apos;est disponible que si la surface est générée à l&apos;aide d&apos;une colonne de réponse dépendante de points.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Equation( ., ., ., . ),
	Datapoints Choice3( "Surface" ),
	Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG )
);
Wait( 1 );
obj << Response Column Fill3( "Discrete Gradients" );

```

### Response Column Fill4

**Syntaxe :** obj &lt;&lt; Response Column Fill4( "Plein"|"Gradients continus"|"Gradients discrets" )

**Description :** Spécifie si la quatrième surface est coloriée avec une couleur unie, des gradients continus, ou des gradients discrets. Cette option n&apos;est disponible que si la surface est générée à l&apos;aide d&apos;une colonne de réponse dépendante de points.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Equation( ., ., ., . ),
	Datapoints Choice4( "Surface" ),
	Response(
		"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Response Column Fill4( "Continuous Gradients" );

```

### Response Column Gradient Lines

**Syntaxe :** obj &lt;&lt; Response Column Gradient Lines( state=0|1 ); obj &lt;&lt; Response Column Gradient Lines1( state=0|1 )

**Description :** Affiche ou masque des lignes entre les niveaux de gradient sur la surface pour la première réponse. Cette option n&apos;est disponible que si la surface est générée à l&apos;aide de gradients discrets avec une réponse de colonne dépendante de points. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( "Surface" ),
	Response Column Fill( "Discrete Gradients" ),
	Response( :Pred Formula ABRASION )
);
Wait( 1 );
obj << Response Column Gradient Lines( 0 );

```

### Response Column Gradient Lines1

**Syntaxe :** obj &lt;&lt; Response Column Gradient Lines( state=0|1 ); obj &lt;&lt; Response Column Gradient Lines1( state=0|1 )

**Description :** Affiche ou masque des lignes entre les niveaux de gradient sur la surface pour la première réponse. Cette option n&apos;est disponible que si la surface est générée à l&apos;aide de gradients discrets avec une réponse de colonne dépendante de points. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( "Surface" ),
	Response Column Fill( "Discrete Gradients" ),
	Response( :Pred Formula ABRASION )
);
Wait( 1 );
obj << Response Column Gradient Lines( 0 );

```

### Response Column Gradient Lines2

**Syntaxe :** obj &lt;&lt; Response Column Gradient Lines2( state=0|1 )

**Description :** Affiche ou masque des lignes entre les niveaux de gradient sur la surface pour la deuxième réponse. Cette option n&apos;est disponible que si la surface est générée à l&apos;aide de gradients discrets avec une réponse de colonne dépendante de points. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Equation( ., ., ., . ),
	Datapoints Choice2( "Surface" ),
	Response Column Fill2( "Discrete Gradients" ),
	Response( "Pred Formula MODULUS", :Pred Formula MODULUS )
);
Wait( 1 );
obj << Response Column Gradient Lines2( 0 );

```

### Response Column Gradient Lines3

**Syntaxe :** obj &lt;&lt; Response Column Gradient Lines3( state=0|1 )

**Description :** Affiche ou masque des lignes entre les niveaux de gradient sur la surface pour la troisième réponse. Cette option n&apos;est disponible que si la surface est générée à l&apos;aide de gradients discrets avec une réponse de colonne dépendante de points. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Equation( ., ., ., . ),
	Datapoints Choice3( "Surface" ),
	Response Column Fill3( "Discrete Gradients" ),
	Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG )
);
obj << Response Column Gradient Lines3( 0 );
Wait( 1 );
obj << Response Column Gradient Lines3( 1 );

```

### Response Column Gradient Lines4

**Syntaxe :** obj &lt;&lt; Response Column Gradient Lines4( state=0|1 )

**Description :** Affiche ou masque des lignes entre les niveaux de gradient sur la surface pour la quatrième réponse. Cette option n&apos;est disponible que si la surface est générée à l&apos;aide de gradients discrets avec une réponse de colonne dépendante de points. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Equation( ., ., ., . ),
	Datapoints Choice4( "Surface" ),
	Response Column Fill4( "Discrete Gradients" ),
	Response(
		"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",
		:Pred Formula HARDNESS
	),
	Response Column Gradient Lines4( 0 )
);
Wait( 1 );
obj << Response Column Gradient Lines4( 1 );

```

### Response Column Gradients

**Syntaxe :** obj &lt;&lt; Response Column Gradients( number ); obj &lt;&lt; Response Column Gradients1( number )

**Description :** Spécifie le nombre de gradients sur la surface pour la première réponse. Cette option n&apos;est disponible que si la surface est générée à l&apos;aide de gradients discrets avec une colonne de réponse dépendante de points.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( "Surface" ),
	Response Column Fill( "Discrete Gradients" ),
	Response( :Pred Formula ABRASION )
);
Wait( 1 );
obj << Response Column Gradients( 9 );

```

### Response Column Gradients1

**Syntaxe :** obj &lt;&lt; Response Column Gradients( number ); obj &lt;&lt; Response Column Gradients1( number )

**Description :** Spécifie le nombre de gradients sur la surface pour la première réponse. Cette option n&apos;est disponible que si la surface est générée à l&apos;aide de gradients discrets avec une colonne de réponse dépendante de points.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( "Surface" ),
	Response Column Fill( "Discrete Gradients" ),
	Response( :Pred Formula ABRASION )
);
Wait( 1 );
obj << Response Column Gradients( 9 );

```

### Response Column Gradients2

**Syntaxe :** obj &lt;&lt; Response Column Gradients2( number )

**Description :** Spécifie le nombre de gradients sur la surface pour la deuxième réponse. Cette option n&apos;est disponible que si la surface est générée à l&apos;aide de gradients discrets avec une colonne de réponse dépendante de points.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Equation( ., ., ., . ),
	Datapoints Choice2( "Surface" ),
	Response Column Fill2( "Discrete Gradients" ),
	Response( "Pred Formula MODULUS", :Pred Formula MODULUS )
);
Wait( 1 );
obj << Response Column Gradients2( 8 );

```

### Response Column Gradients3

**Syntaxe :** obj &lt;&lt; Response Column Gradients3( number )

**Description :** Spécifie le nombre de gradients sur la surface pour la troisième réponse. Cette option n&apos;est disponible que si la surface est générée à l&apos;aide de gradients discrets avec une colonne de réponse dépendante de points.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Equation( ., ., ., . ),
	Datapoints Choice3( "Surface" ),
	Response Column Fill3( "Discrete Gradients" ),
	Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG )
);
Wait( 1 );
obj << Response Column Gradients3( 7 );

```

### Response Column Gradients4

**Syntaxe :** obj &lt;&lt; Response Column Gradients4( number )

**Description :** Spécifie le nombre de gradients sur la surface pour la quatrième réponse. Cette option n&apos;est disponible que si la surface est générée à l&apos;aide de gradients discrets avec une colonne de réponse dépendante de points.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Equation( ., ., ., . ),
	Datapoints Choice4( "Surface" ),
	Response Column Fill4( "Discrete Gradients" ),
	Response(
		"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Response Column Gradients4( 10 );

```

### Scale response axes independently

**Syntaxe :** obj = Surface Plot(...Scale response axes indenpendently( state=0|1 )...); obj &lt;&lt; Scale response axes independently( state=0|1 )&lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie si chaque réponse a sa propre échelle ou si l&apos;échelle de l&apos;axe pour toutes les réponses correspond à l&apos;échelle de la première réponse entrée dans la fenêtre de lancement.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Scale response axes independently( 1 )
);
obj << Show Surface4( "Both sides" );
Wait( 1 );
obj << Scale response axes independently( 0 );

```

### Set Z Variable

**Syntaxe :** obj &lt;&lt; Set Z Variable( column )

**Description :** Définit la colonne spécifiée en tant que variable Y sur la surface de réponse. Cette option n&apos;est disponible que pour les isosurfaces.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Mode( "Isosurface" )
);
obj << Set Y Variable( :SULFUR );
Wait( 1 );
obj << Set Z Variable( :SILANE );

```

### SetVariableAxis

**Syntaxe :** obj &lt;&lt; SetVariableAxis( column, &lt;Current Value( number )&gt;, &lt;Axis Data( axis options )&gt; )

**Description :** Spécifie des attributs pour l&apos;axe de la variable indépendante spécifiée.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << Set Variable Axis( :SULFUR, Current Value( 2.925 ) );
Wait( 1 );
obj << Set Variable Axis( :SILANE, Axis Data( {Format( "Fixed", 8, 1 )} ) );

```

### SetXVariable

**Syntaxe :** obj &lt;&lt; SetXVariable( column )

**Description :** Définit la colonne spécifiée en tant que variable X sur la surface de réponse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << Set X Variable( :SULFUR );

```

### SetYVariable

**Syntaxe :** obj &lt;&lt; SetYVariable( column )

**Description :** Définit la colonne spécifiée en tant que variable Y sur la surface de réponse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << Set Y Variable( :SULFUR );

```

### SetZAxis

**Syntaxe :** obj &lt;&lt; SetZAxis( column, Current Value( number ), &lt;Axis Data( axis options )&gt; )

**Description :** Spécifie des attributs pour l&apos;axe Z.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << Set Z Axis( :Pred Formula ABRASION, Axis Data( {Format( "Fixed", 8, 1 )} ) );

```

### Show Contour

**Syntaxe :** obj &lt;&lt; Show Contour( "Off"|"Below"|"Above"|"On Surface" ); obj &lt;&lt; Show Contour1( "Off"|"Below|Above"|"On Surface" )

**Description :** Spécifie le placement des courbes d&apos;isoréponses sur le graphique par rapport à la surface pour la première réponse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Show Contour( "On Surface" );

```

### Show Contour1

**Syntaxe :** obj &lt;&lt; Show Contour( "Off"|"Below"|"Above"|"On Surface" ); obj &lt;&lt; Show Contour1( "Off"|"Below|Above"|"On Surface" )

**Description :** Spécifie le placement des courbes d&apos;isoréponses sur le graphique par rapport à la surface pour la première réponse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Show Contour( "On Surface" );

```

### Show Contour2

**Syntaxe :** obj &lt;&lt; Show Contour2( "État désactivé"|"Dessous"|"Dessus"|"Sur la surface" )

**Description :** Spécifie le placement des courbes d&apos;isoréponses sur le graphique par rapport à la surface pour la deuxième réponse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Show Contour2( "Above" );

```

### Show Contour3

**Syntaxe :** obj &lt;&lt; Show Contour3( "État désactivé"|"Dessous"|"Dessus"|"Sur la surface" )

**Description :** Spécifie le placement des courbes d&apos;isoréponses sur le graphique par rapport à la surface pour la troisième réponse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Surface3( "Both Sides" );
Wait( 1 );
obj << Show Contour3( "Below" );

```

### Show Contour4

**Syntaxe :** obj &lt;&lt; Show Contour4( "État désactivé"|"Dessous"|"Dessus"|"Sur la surface" )

**Description :** Spécifie le placement des courbes d&apos;isoréponses sur le graphique par rapport à la surface pour la quatrième réponse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Surface4( "Both Sides" );
Wait( 1 );
obj << Show Contour4( "On Surface" );

```

### Show Mesh

**Syntaxe :** obj &lt;&lt; Show Mesh( "Off"|"X"|"Y"|"X and Y" ); obj &lt;&lt; Show Mesh1( "Off"|"X"|"Y"|"X and Y" )

**Description :** Spécifie le style du maillage de la surface pour la première réponse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Mesh( "X and Y" );

```

### Show Mesh1

**Syntaxe :** obj &lt;&lt; Show Mesh( "Off"|"X"|"Y"|"X and Y" ); obj &lt;&lt; Show Mesh1( "Off"|"X"|"Y"|"X and Y" )

**Description :** Spécifie le style du maillage de la surface pour la première réponse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Mesh( "X and Y" );

```

### Show Mesh2

**Syntaxe :** obj &lt;&lt; Show Mesh2( "État désactivé"|"X et Y"|"X"|"Y" )

**Description :** Spécifie le style du maillage de la surface pour la deuxième réponse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Mesh2( "X" );

```

### Show Mesh3

**Syntaxe :** obj &lt;&lt; Show Mesh3( "État désactivé"|"X et Y"|"X"|"Y" )

**Description :** Spécifie le style du maillage de la surface pour la troisième réponse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Mesh3( "Y" );

```

### Show Mesh4

**Syntaxe :** obj &lt;&lt; Show Mesh4( "État désactivé"|"X et Y"|"X"|"Y" )

**Description :** Spécifie le style du maillage de la surface pour la quatrième réponse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Mesh4( "X and Y" );

```

### Show Surface

**Syntaxe :** obj &lt;&lt; Show Surface( "Off"|"Both sides"|"Above only"|"Below only" ); obj &lt;&lt; Show Surface1( "Off"|"Both sides"|"Above only"|"Below only" )

**Description :** Spécifie l&apos;apparence de la surface pour la première réponse. Cette option n&apos;est disponible que pour les surfaces générées par une réponse de formule de colonne.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Show Surface( "Below Only" );

```

### Show Surface1

**Syntaxe :** obj &lt;&lt; Show Surface( "Off"|"Both sides"|"Above only"|"Below only" ); obj &lt;&lt; Show Surface1( "Off"|"Both sides"|"Above only"|"Below only" )

**Description :** Spécifie l&apos;apparence de la surface pour la première réponse. Cette option n&apos;est disponible que pour les surfaces générées par une réponse de formule de colonne.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Show Surface( "Below Only" );

```

### Show Surface2

**Syntaxe :** obj &lt;&lt; Show Surface2( "État désactivé"|"Des deux côtés"|"Dessus uniquement"|"Dessous uniquement" )

**Description :** Spécifie l&apos;apparence de la surface pour la deuxième réponse. Cette option n&apos;est disponible que pour les surfaces générées par une réponse de formule de colonne.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Show Surface2( "Both Sides" );

```

### Show Surface3

**Syntaxe :** obj &lt;&lt; Show Surface3( "État désactivé"|"Des deux côtés"|"Dessus uniquement"|"Dessous uniquement" )

**Description :** Spécifie l&apos;apparence de la surface pour la troisième réponse. Cette option n&apos;est disponible que pour les surfaces générées par une réponse de formule de colonne.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Show Surface3( "Above Only" );

```

### Show Surface4

**Syntaxe :** obj &lt;&lt; Show Surface4( "État désactivé"|"Des deux côtés"|"Dessus uniquement"|"Dessous uniquement" )

**Description :** Spécifie l&apos;apparence de la surface pour la quatrième réponse. Cette option n&apos;est disponible que pour les surfaces générées par une réponse de formule de colonne.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ELONG, :Pred Formula ABRASION, :Pred Formula MODULUS,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Show Surface4( "Both Sides" );

```

### Show formula

**Syntaxe :** obj &lt;&lt; Show formula( state=0|1 )

**Description :** Affiche ou masque la formule pour toutes les variables dépendantes actuellement affichées sur la surface de réponse.

```jsl

Names Default To Here( 1 );
obj = Surface Plot();
obj << Show Formula( 1 );

```

### Surface Alpha

**Syntaxe :** obj &lt;&lt; Surface Alpha( number ); obj &lt;&lt; Surface Alpha1( number )

**Description :** Spécifie l&apos;opacité de l&apos;isosurface pour la variable de la première réponse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Mode( "Isosurface" );
Wait( 1 );
obj << Surface Alpha( 0.25 );

```

### Surface Alpha1

**Syntaxe :** obj &lt;&lt; Surface Alpha( number ); obj &lt;&lt; Surface Alpha1( number )

**Description :** Spécifie l&apos;opacité de l&apos;isosurface pour la variable de la première réponse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Mode( "Isosurface" );
Wait( 1 );
obj << Surface Alpha( 0.25 );

```

### Surface Alpha2

**Syntaxe :** obj &lt;&lt; Surface Alpha2( number )

**Description :** Spécifie l&apos;opacité de l&apos;isosurface pour la variable de la deuxième réponse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Mode( "Isosurface" );
obj << Show Surface2( "Both sides" );
Wait( 1 );
obj << Surface Alpha2( 0.3 );

```

### Surface Alpha3

**Syntaxe :** obj &lt;&lt; Surface Alpha3( number )

**Description :** Spécifie l&apos;opacité de l&apos;isosurface pour la variable de la troisième réponse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Mode( "Isosurface" );
obj << Show Surface3( "Both sides" );
Wait( 1 );
obj << Surface Alpha3( 0.75 );

```

### Surface Alpha4

**Syntaxe :** obj &lt;&lt; Surface Alpha4( number )

**Description :** Spécifie l&apos;opacité de l&apos;isosurface pour la variable de la quatrième réponse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Mode( "Isosurface" );
obj << Show Surface4( "Both sides" );
Wait( 1 );
obj << Surface Alpha4( 0.90 );

```

### Surface Color

**Syntaxe :** obj &lt;&lt; Surface Color( color ); obj &lt;&lt; Surface Color1( color )

**Description :** Spécifie la couleur de la surface pour la première réponse lorsque le type de remplissage est plein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Show Surface( "Both Sides" )
);
Wait( 1 );
obj << Surface Color( {0, 0, 255} );

```

### Surface Color Method

**Syntaxe :** obj &lt;&lt; Surface Color Method( "Solid"|formula, &lt;"Solid"|formula&gt;, &lt;"Solid"|formula&gt;, &lt;"Solid"|formula&gt; )

**Description :** Spécifie la méthode utilisée pour colorier chacune des quatre surfaces possibles. Notez que la formule peut être différente de celle utilisée pour dessiner la surface.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Show Surface2( "Both sides" )
);
obj << Surface Gradient Type( "Continuous Gradients" );
obj << Surface Color Method( "Solid", ":Pred Formula MODULUS" );
Wait( 1 );
obj << Surface Color Theme2( "Blue to Gray to Red" );

```

### Surface Color Range

**Syntaxe :** obj &lt;&lt; Surface Color Range( "Data"|"Axis" ); obj &lt;&lt; Surface Color Range1( "Data"|"Axis" )

**Description :** Spécifie les points de terminaison pour le gradient de couleur sur la surface pour la première réponse. Cette option n&apos;est disponible que lorsqu&apos;un gradient est utilisé.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface( "Both Sides" )
);
obj << Surface Color Method( ":Pred Formula ABRASION" );
Wait( 1 );
obj << Surface Color Range( "Axis" );

```

### Surface Color Range1

**Syntaxe :** obj &lt;&lt; Surface Color Range( "Data"|"Axis" ); obj &lt;&lt; Surface Color Range1( "Data"|"Axis" )

**Description :** Spécifie les points de terminaison pour le gradient de couleur sur la surface pour la première réponse. Cette option n&apos;est disponible que lorsqu&apos;un gradient est utilisé.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface( "Both Sides" )
);
obj << Surface Color Method( ":Pred Formula ABRASION" );
Wait( 1 );
obj << Surface Color Range( "Axis" );

```

### Surface Color Range2

**Syntaxe :** obj &lt;&lt; Surface Color Range2( "Données"|"Axe" )

**Description :** Spécifie les points de terminaison pour le gradient de couleur sur la surface pour la deuxième réponse. Cette option n&apos;est disponible que lorsqu&apos;un gradient est utilisé.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface2( "Both Sides" )
);
obj << Surface Color Method( "Solid", ":Pred Formula MODULUS" );
Wait( 1 );
obj << Surface Color Range2( "Data" );

```

### Surface Color Range3

**Syntaxe :** obj &lt;&lt; Surface Color Range3( "Données"|"Axe" )

**Description :** Spécifie les points de terminaison pour le gradient de couleur sur la surface pour la troisième réponse. Cette option n&apos;est disponible que lorsqu&apos;un gradient est utilisé.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface3( "Both Sides" )
);
obj << Surface Color Method( "Solid", "Solid", ":Pred Formula ELONG" );
Wait( 1 );
obj << Surface Color Range3( "Axis" );

```

### Surface Color Range4

**Syntaxe :** obj &lt;&lt; Surface Color Range4( "Données"|"Axe" )

**Description :** Spécifie les points de terminaison pour le gradient de couleur sur la surface pour la quatrième réponse. Cette option n&apos;est disponible que lorsqu&apos;un gradient est utilisé.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface4( "Both Sides" )
);
obj << Surface Color Method( "Solid", "Solid", "Solid", ":Pred Formula HARDNESS" );
Wait( 1 );
obj << Surface Color Range4( "Data" );

```

### Surface Color Theme

**Syntaxe :** obj &lt;&lt; Surface Color Theme( color theme ); obj &lt;&lt; Surface Color Theme1( color theme )

**Description :** Spécifie le thème de couleurs de la surface pour la première réponse. Cette option n&apos;est disponible que pour les colonnes de formule de réponse qui utilisent un gradient.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Surface Gradient Type( "Continuous Gradients" );
obj << Surface Color Method( ":Pred Formula ABRASION" );
Wait( 1 );
obj << Surface Color Theme( "Blue to Gray to Red" );

```

### Surface Color Theme1

**Syntaxe :** obj &lt;&lt; Surface Color Theme( color theme ); obj &lt;&lt; Surface Color Theme1( color theme )

**Description :** Spécifie le thème de couleurs de la surface pour la première réponse. Cette option n&apos;est disponible que pour les colonnes de formule de réponse qui utilisent un gradient.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Surface Gradient Type( "Continuous Gradients" );
obj << Surface Color Method( ":Pred Formula ABRASION" );
Wait( 1 );
obj << Surface Color Theme( "Blue to Gray to Red" );

```

### Surface Color Theme2

**Syntaxe :** obj &lt;&lt; Surface Color Theme2( color theme )

**Description :** Spécifie le thème de couleurs de la surface pour la deuxième réponse. Cette option n&apos;est disponible que pour les colonnes de formule de réponse qui utilisent un gradient.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Show Surface2( "Both sides" )
);
obj << Surface Gradient Type2( "Continuous Gradients" );
obj << Surface Color Method( "Solid", ":Pred Formula MODULUS" );
Wait( 1 );
obj << Surface Color Theme2( "White to Black" );

```

### Surface Color Theme3

**Syntaxe :** obj &lt;&lt; Surface Color Theme3( color theme )

**Description :** Spécifie le thème de couleurs de la surface pour la troisième réponse. Cette option n&apos;est disponible que pour les colonnes de formule de réponse qui utilisent un gradient.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Show Surface3( "Both Sides" )
);
obj << Surface Gradient Type3( "Continuous Gradients" );
obj << Surface Color Method( "Solid", "Solid", ":Pred Formula ELONG" );
Wait( 1 );
obj << Surface Color Theme3( "Spectral" );

```

### Surface Color Theme4

**Syntaxe :** obj &lt;&lt; Surface Color Theme4( color theme )

**Description :** Spécifie le thème de couleurs de la surface pour la quatrième réponse. Cette option n&apos;est disponible que pour les colonnes de formule de réponse qui utilisent un gradient.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface4( "Both Sides" )
);
obj << Surface Gradient Type4( "Continuous Gradients" );
obj << Surface Color Method( "Solid", "Solid", "Solid", ":Pred Formula HARDNESS" );
Wait( 1 );
obj << Surface Color Theme4( "Jet" );

```

### Surface Color1

**Syntaxe :** obj &lt;&lt; Surface Color( color ); obj &lt;&lt; Surface Color1( color )

**Description :** Spécifie la couleur de la surface pour la première réponse lorsque le type de remplissage est plein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Show Surface( "Both Sides" )
);
Wait( 1 );
obj << Surface Color( {0, 0, 255} );

```

### Surface Color2

**Syntaxe :** obj &lt;&lt; Surface Color2( color )

**Description :** Spécifie la couleur de la surface pour la deuxième réponse lorsque le type de remplissage est plein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Show Surface2( "Both Sides" )
);
obj << Surface Color2( {255, 128, 0} );

```

### Surface Color3

**Syntaxe :** obj &lt;&lt; Surface Color3( color )

**Description :** Spécifie la couleur de la surface pour la troisième réponse lorsque le type de remplissage est plein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Show Surface3( "Both Sides" )
);
obj << Surface Color3( {255, 0, 0} );

```

### Surface Color4

**Syntaxe :** obj &lt;&lt; Surface Color4( color )

**Description :** Spécifie la couleur de la surface pour la quatrième réponse lorsque le type de remplissage est plein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface4( "Both Sides" )
);
obj << Surface Color4( {100, 0, 200} );

```

### Surface Gradient Type

**Syntaxe :** obj &lt;&lt; Surface Gradient Type( "Solid"|"Continuous Gradients"|"Discrete Gradients" ); obj &lt;&lt; Surface Gradient Type1( "Solid"|"Continuous Gradients"|"Discrete Gradients" )

**Description :** Spécifie le type de remplissage de la surface pour la première réponse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << Surface Gradient Type( "Continuous Gradients" );
obj << Surface Color Method( ":Pred Formula ABRASION" );

```

### Surface Gradient Type1

**Syntaxe :** obj &lt;&lt; Surface Gradient Type( "Solid"|"Continuous Gradients"|"Discrete Gradients" ); obj &lt;&lt; Surface Gradient Type1( "Solid"|"Continuous Gradients"|"Discrete Gradients" )

**Description :** Spécifie le type de remplissage de la surface pour la première réponse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << Surface Gradient Type( "Continuous Gradients" );
obj << Surface Color Method( ":Pred Formula ABRASION" );

```

### Surface Gradient Type2

**Syntaxe :** obj &lt;&lt; Surface Gradient Type2( "Plein"|"Gradients continus"|"Gradients discrets" )

**Description :** Spécifie le type de remplissage de la surface pour la deuxième réponse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Show Surface2( "Both sides" )
);
Wait( 1 );
obj << Surface Gradient Type2( "Discrete Gradients" );
obj << Surface Color Method( "Solid", ":Pred Formula MODULUS" );

```

### Surface Gradient Type3

**Syntaxe :** obj &lt;&lt; Surface Gradient Type3( "Plein"|"Gradients continus"|"Gradients discrets" )

**Description :** Spécifie le type de remplissage de la surface pour la troisième réponse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Show Surface3( "Both Sides" )
);
Wait( 1 );
obj << Surface Gradient Type3( "Solid" );
obj << Surface Color Method( "Solid", "Solid", ":Pred Formula ELONG" );

```

### Surface Gradient Type4

**Syntaxe :** obj &lt;&lt; Surface Gradient Type4( "Plein"|"Gradients continus"|"Gradients discrets" )

**Description :** Spécifie le type de remplissage de la surface pour la quatrième réponse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface4( "Both Sides" )
);
Wait( 1 );
obj << Surface Gradient Type4( "Discrete Gradients" );
obj << Surface Color Method( "Solid", "Solid", "Solid", ":Pred Formula HARDNESS" );

```

### Surface Gradients

**Syntaxe :** obj &lt;&lt; Surface Gradients( number ); obj &lt;&lt; Surface Gradients1( number )

**Description :** Spécifie le nombre de lignes de gradient sur la surface de la première réponse. Cette option n&apos;est disponible que si des gradients discrets sont utilisés.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Surface Color Method( ":Pred Formula ABRASION" )
);
obj << Surface Gradient Type( "Discrete Gradients" );
Wait( 1 );
obj << Surface Gradients( 9 );

```

### Surface Gradients1

**Syntaxe :** obj &lt;&lt; Surface Gradients( number ); obj &lt;&lt; Surface Gradients1( number )

**Description :** Spécifie le nombre de lignes de gradient sur la surface de la première réponse. Cette option n&apos;est disponible que si des gradients discrets sont utilisés.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Surface Color Method( ":Pred Formula ABRASION" )
);
obj << Surface Gradient Type( "Discrete Gradients" );
Wait( 1 );
obj << Surface Gradients( 9 );

```

### Surface Gradients2

**Syntaxe :** obj &lt;&lt; Surface Gradients2( number )

**Description :** Spécifie le nombre de lignes de gradient sur la surface de la deuxième réponse. Cette option n&apos;est disponible que si des gradients discrets sont utilisés.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Show Surface2( "Both sides" ),
	Surface Color Method( "Solid", ":Pred Formula MODULUS" )
);
obj << Surface Gradient Type2( "Discrete Gradients" );
Wait( 1 );
obj << Surface Gradients2( 8 );

```

### Surface Gradients3

**Syntaxe :** obj &lt;&lt; Surface Gradients3( number )

**Description :** Spécifie le nombre de lignes de gradient sur la surface de la troisième réponse. Cette option n&apos;est disponible que si des gradients discrets sont utilisés.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Show Surface3( "Both sides" ),
	Surface Color Method( "Solid", "Solid", ":Pred Formula ELONG" )
);
obj << Surface Gradient Type3( "Discrete Gradients" );
Wait( 1 );
obj << Surface Gradients3( 10 );

```

### Surface Gradients4

**Syntaxe :** obj &lt;&lt; Surface Gradients4( number )

**Description :** Spécifie le nombre de lignes de gradient sur la surface de la quatrième réponse. Cette option n&apos;est disponible que si des gradients discrets sont utilisés.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface4( "Both sides" ),
	Surface Color Method( "Solid", "Solid", "Solid", ":Pred Formula HARDNESS" )
);
obj << Surface Gradient Type4( "Discrete Gradients" );
Wait( 1 );
obj << Surface Gradients4( 9 );

```

### Surface Lighting

**Syntaxe :** obj &lt;&lt; Surface Lighting( "None"|"Low Reflection"|"Normal" ); obj &lt;&lt; Surface Lighting1( "None"|"Low Reflection"|"Normal" )

**Description :** Spécifie l&apos;éclairage de la surface pour la surface de la première réponse. Cette option n&apos;est disponible qu&apos;avec les gradients continus et discrets.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Surface Color Method( ":Pred Formula ABRASION" );
Wait( 1 );
obj << Surface Lighting( "Low Reflection" );

```

### Surface Lighting1

**Syntaxe :** obj &lt;&lt; Surface Lighting( "None"|"Low Reflection"|"Normal" ); obj &lt;&lt; Surface Lighting1( "None"|"Low Reflection"|"Normal" )

**Description :** Spécifie l&apos;éclairage de la surface pour la surface de la première réponse. Cette option n&apos;est disponible qu&apos;avec les gradients continus et discrets.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Surface Color Method( ":Pred Formula ABRASION" );
Wait( 1 );
obj << Surface Lighting( "Low Reflection" );

```

### Surface Lighting2

**Syntaxe :** obj &lt;&lt; Surface Lighting2( "Aucun"|"Réflexion faible"|"Normal" )

**Description :** Spécifie l&apos;éclairage de la surface pour la surface de la deuxième réponse. Cette option n&apos;est disponible qu&apos;avec les gradients continus et discrets.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ) );
obj << Show Surface2( "Both Sides" );
obj << Surface Color Method( "Solid", ":Pred Formula MODULUS" );
Wait( 1 );
obj << Surface Lighting2( "Normal" );

```

### Surface Lighting3

**Syntaxe :** obj &lt;&lt; Surface Lighting3( "Aucun"|"Réflexion faible"|"Normal" )

**Description :** Spécifie l&apos;éclairage de la surface pour la surface de la troisième réponse. Cette option n&apos;est disponible qu&apos;avec les gradients continus et discrets.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Surface3( "Both Sides" );
obj << Surface Color Method( "Solid", "Solid", ":Pred Formula ELONG" );
Wait( 1 );
obj << Surface Lighting3( "Low Reflection" );

```

### Surface Lighting4

**Syntaxe :** obj &lt;&lt; Surface Lighting4( "Aucun"|"Réflexion faible"|"Normal" )

**Description :** Spécifie l&apos;éclairage de la surface pour la surface de la quatrième réponse. Cette option n&apos;est disponible qu&apos;avec les gradients continus et discrets.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Surface4( "Both Sides" );
obj << Surface Color Method( "Solid", "Solid", "Solid", ":Pred Formula HARDNESS" );
Wait( 1 );
obj << Surface Lighting4( "Normal" );

```

### Surface Selector

**Syntaxe :** obj &lt;&lt; Surface Selector( state=0|1 )

**Description :** Affiche ou masque les options de surface dans les commandes des variables dépendantes. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Surface Selector( 0 );

```

### X Grid

**Syntaxe :** obj &lt;&lt; X Grid( state=0|1 )

**Description :** Affiche ou masque une grille perpendiculaire à l&apos;axe X.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << X Grid( 1 );

```

### X Resolution

**Syntaxe :** obj &lt;&lt; Resolution( number )obj &lt;&lt; X Resolution( number )obj &lt;&lt; Y Resolution( number )

**Description :** Change la résolution utilisée pour dessiner la surface de réponse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Mode( "Isosurface" );
Wait( 1 );
obj << Resolution( 4 );
Wait( 1 );
obj << Resolution( 12 );

```

### XRotate

**Syntaxe :** obj &lt;&lt; XRotate( degrees )

**Description :** Fait pivoter la surface de réponse autour de l’axe X.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << XRotate( 30 );

```

### Y Grid

**Syntaxe :** obj &lt;&lt; Y Grid( state=0|1 )

**Description :** Affiche ou masque une grille perpendiculaire à l&apos;axe Y.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Y Grid( 1 );

```

### Y Resolution

**Syntaxe :** obj &lt;&lt; Resolution( number )obj &lt;&lt; X Resolution( number )obj &lt;&lt; Y Resolution( number )

**Description :** Change la résolution utilisée pour dessiner la surface de réponse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Mode( "Isosurface" );
Wait( 1 );
obj << Resolution( 4 );
Wait( 1 );
obj << Resolution( 12 );

```

### YRotate

**Syntaxe :** obj &lt;&lt; YRotate( degrees )

**Description :** Fait pivoter la surface de réponse autour de l’axe Y.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << YRotate( 20 );

```

### Z Grid

**Syntaxe :** obj &lt;&lt; Z Grid( state=0|1 )

**Description :** Affiche ou masque une grille perpendiculaire à l&apos;axe Z.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Z Grid( 1 );

```

### Z Grid Position

**Syntaxe :** obj &lt;&lt; Z Grid Position( fraction )

**Description :** Déplace la grille Z au pourcentage spécifié.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Z Grid( 1 );
Wait( 1 );
obj << Z Grid Position( 0.733 );

```

### ZRotate

**Syntaxe :** obj &lt;&lt; ZRotate( degrees )

**Description :** Fait pivoter la surface de réponse autour de l’axe Z.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << ZRotate( 45 );

```

## Messages d'éléments partagés

### Action

**Syntaxe :** obj &lt;&lt; Action

**Description :** Trappe tout usage dans une plate-forme pour y insérer les expressions à calculer. Définit provisoirement les contextes des boîtes d’affichage et des tables de données dans la plate-forme.

```jsl

Names Default To Here( 1 );
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

**Préconfiguration anonyme**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**Rechercher dans les dossiers**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Rechercher par nom**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

### Broadcast

**Syntaxe :** obj &lt;&lt; Broadcast(message)

**Description :** Diffuse un message sur une plate-forme. Si les résultats de renvoi des objets individuels sont des tables, elles sont concaténées si possible, et le format final est identique au résultat de l&apos;option Enregistrer la table de données combinée dans une boîte de tableau ou au résultat de l&apos;option Concaténer avec une colonne Source. Sinon, les résultats sont stockés dans une liste et renvoyés.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**Syntaxe :** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description :** Ajoute un panneau de contrôle pour changer les variables de la plate-forme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Copy ByGroup Script

**Syntaxe :** obj &lt;&lt; Copy ByGroup Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntaxe :** obj &lt;&lt; Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Copy Script;

```

### Data Table Window

**Syntaxe :** obj &lt;&lt; Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Data Table Window;

```

### Get By Levels

**Syntaxe :** obj &lt;&lt; Get By Levels

**Description :** Renvoie un tableau associatif de mappage des colonnes par groupe à leurs valeurs.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Syntaxe :** obj &lt;&lt; Get ByGroup Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntaxe :** obj &lt;&lt; Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

**Général**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plate-forme avec filtre**

```jsl

Names Default To Here( 1 );
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

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Syntaxe :** obj &lt;&lt; Get Group Platform

**Description :** Renvoie l&apos;objet de Plate-forme de groupe si cette plate-forme fait partie d&apos;un groupe. Sinon, renvoie Empty().

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Script

**Syntaxe :** obj &lt;&lt; Get Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntaxe :** obj &lt;&lt; Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntaxe :** obj &lt;&lt; Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Syntaxe :** obj &lt;&lt; Get Web Support

**Description :** Renvoyer un nombre indiquant le niveau de support HTML interactif pour l&apos;objet d&apos;affichage. 1 signifie que tout ou partie des éléments sont pris en charge. 0 signifie qu&apos;il n&apos;y a aucun support.

```jsl

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Paste Local Data Filter

**Syntaxe :** obj &lt;&lt; Paste Local Data Filter

**Description :** Appliquer le filtre des données locales du presse-papiers au rapport actif.

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

### Redo Analysis

**Syntaxe :** obj &lt;&lt; Redo Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntaxe :** obj &lt;&lt; Redo ByGroup Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntaxe :** obj &lt;&lt; Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntaxe :** obj &lt;&lt; Relaunch ByGroup

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Syntaxe :** obj &lt;&lt; Remove Column Switcher

**Description :** Supprime le sélecteur de colonne le plus récent ajouté à la plate-forme.

```jsl

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Syntaxe :** obj &lt;&lt; Report;Report( obj )

**Description :** Renvoie une référence à l’objet rapport.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
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

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntaxe :** obj &lt;&lt; Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntaxe :** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntaxe :** obj &lt;&lt; Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Save Script to Journal;

```

### Save Script to Report

**Syntaxe :** obj &lt;&lt; Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntaxe :** obj &lt;&lt; Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Save Script to Script Window;

```

### SendToByGroup

**Syntaxe :** SendToByGroup( {":Column == level"}, command );

**Description :** Envoie les commandes de plate-forme ou de personnalisation d’affichage à chaque niveau d’un « par groupe ».

```jsl

Names Default To Here( 1 );
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

Names Default To Here( 1 );

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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Title( "My Platform" );

```

### Top Report

**Syntaxe :** obj &lt;&lt; Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Syntaxe :** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description :** Créez une colonne de transformation dans le contexte local d&apos;un objet, généralement une plate-forme. La colonne de transformation est active uniquement pendant la durée de vie de la plateforme.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### View Web XML

**Syntaxe :** obj &lt;&lt; View Web XML

**Description :** Renvoie le code XML utilisé pour créer le rapport au format HTML interactif.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Syntaxe :** obj = Surface Plot(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Définir le type de fenêtre à créer pour le rapport. Par défaut, une fenêtre de rapport Visible sera créée. Une fenêtre Invisible ne s&apos;affichera pas à l&apos;écran, mais sera visible par les fonctions comme Window(). Une fenêtre Private répond à la plupart des messages de fenêtre mais n&apos;est pas visible et doit être adressée au moyen de l&apos;objet rapport

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate(
	Window View( "Private" ),
	Y( :weight ),
	X( :height ),
	Fit Line
);
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit",
		Text Box( eqn, <<Set Base Font( "Title" ) )
	)
);

```

## Surface Frame3D

### Constructeurs associés

#### Surface Frame3D

**Syntaxe :** Surface Frame3D( &lt;commands passed to Frame3D&gt; )

**Description :** Envoie les commandes d’affichage au graphique 3D.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);

```

### Messages d'éléments

#### Add Ellipsoid

**Syntaxe :** obj &lt;&lt; Add Ellipsoid( 4x4 matrix )obj &lt;&lt; Add Ellipsoid(3x3 cov,3x1 means)obj &lt;&lt; Add Ellipsoid(3x3 corr,3x1 means,3x1 std dev)

**Description :** Dessine un ellipsoïde sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D(
	Add Ellipsoid(
		[1 0.42632 0.85183, 0.42632 1 0.34418, 0.85183 0.34418 1],
		[6.55099 2.96919 5.5066],
		[0.57829 0.29087 0.53668]
	)
);

```

#### Add Markers

**Syntaxe :** obj &lt;&lt; Add Markers( [ nx1 X matrix ], [ nx1 Y matrix ], [ nx1 Z matrix ] )

**Description :** Dessine n marqueurs sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Add Markers( [2 3 4], [5 6 7], [1 8 9] ) );

```

#### Add Vector

**Syntaxe :** obj &lt;&lt; Add Vector( [ 3xn from matrix ], [ 3xn to matrix ], FromCap( CutOff|Sphere|Point|Feather ), ToCap( CutOff|Sphere|Point|Feather ), Facets( Triangle|Square|Round ), Shaft Color( color ), Shaft Thickness( number ), From Thickness( number ), To Thickness( number ), From Color( number ), To Color( number ) ) )

**Description :** Dessine un vecteur ou une flèche sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D(
	Add Vector( [4.5 2 1], [7.5 4 6], FromCap( "Feather" ), ToCap( "Point" ) )
);

```

#### Get Axes

**Syntaxe :** obj &lt;&lt; Get Axes

**Description :** Renvoie l’état de l’affichage des axes sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
s = obj << Frame3D( Get Axes );
Show( s );

```

#### Get Box

**Syntaxe :** obj &lt;&lt; Get Box

**Description :** Renvoie l’état de l’affichage du cadre de la boîte sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
s = obj << Frame3D( Get Box );
Show( s );

```

#### Get Grab Handles

**Syntaxe :** obj &lt;&lt; Get Grab Handles

**Description :** Renvoie l’état de l’affichage des poignées d’accrochage sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
s = obj << Frame3D( Get Box );
Show( s );

```

#### Get Graph Size

**Syntaxe :** obj &lt;&lt; Get Graph Size

**Description :** Renvoie la taille du graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
s = obj << Frame3D( Get Graph Size );
Show( s );

```

#### Get Grids

**Syntaxe :** obj &lt;&lt; Get Grids

**Description :** Renvoie l’état de l’affichage des grilles sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
s = obj << Frame3D( Get Grids );
Show( s );

```

#### Get Hide Lights Border

**Syntaxe :** obj &lt;&lt; Get Hide Lights Border

**Description :** Renvoie l’état de la brodure de lumière tout autour du graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
state = obj << Frame3D( Get Hide Lights Border );
Show( state );

```

#### Get Line Scale

**Syntaxe :** obj &lt;&lt; Get Line Scale

**Description :** Renvoie la largeur de trait du graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
w = obj << Frame3D( Get Line Scale );
Show( w );

```

#### Get Marker Quality

**Syntaxe :** obj &lt;&lt; Get Marker Quality

**Description :** Renvoie les caractéristiques du marqueur appliqué au graphique, forme et ombre par exemple.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
q = obj << Frame3D( Get Marker Quality );
Show( q );

```

#### Get Marker Scale

**Syntaxe :** obj &lt;&lt; Get Marker Scale

**Description :** Renvoie la taille du marqueur appliqué au graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
s = obj << Frame3D( Get Marker Scale );
Show( s );

```

#### Get Marker Transparency

**Syntaxe :** obj &lt;&lt; Get Marker Transparency

**Description :** Renvoie la transparence du marqueur appliqué au graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
t = obj << Frame3D( Get Marker Transparency );
Show( t );

```

#### Get Rotation

**Syntaxe :** obj &lt;&lt; Get Rotation

**Description :** Renvoie la rotation actuelle du cadre.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
r = obj << Frame3D( Get Rotation() );
Show( r );

```

#### Get Text Scale

**Syntaxe :** obj &lt;&lt; Get Text Scale

**Description :** Renvoie la taille du texte du graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
s = obj << Frame3D( Get Text Scale );
Show( s );

```

#### Get View Ortho

**Syntaxe :** obj &lt;&lt; Get View Ortho

**Description :** Renvoie l’état de la vue orthographique du graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
o = obj << Frame3D( Get View Ortho );
Show( o );

```

#### Get View Perspective

**Syntaxe :** obj &lt;&lt; Get View Perspective

**Description :** Renvoie l’affichage de la perspective du graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
p = obj << Frame3D( Get View Perspective );
Show( p );

```

#### Get View Zoom

**Syntaxe :** obj &lt;&lt; Get View Zoom

**Description :** Renvoie le zoom actuel du graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
z = obj << Frame3D( Get View Zoom );
Show( z );

```

#### Get Wall Color

**Syntaxe :** obj &lt;&lt; Get Wall Color

**Description :** Renvoie la couleur de fond du graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
c = obj << Frame3D( Get Wall Color );
Show( c );

```

#### Get Walls

**Syntaxe :** obj &lt;&lt; Get Walls

**Description :** Renvoie l’état de l’affichage des murs sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
s = obj << Frame3D( Get Walls );
Show( s );

```

#### Get X Axis Color

**Syntaxe :** obj &lt;&lt; Get X Axis Color

**Description :** Renvoie la couleur de l’axe X sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
c = obj << Frame3D( Get X Axis Color );
Show( c );

```

#### Get X Axis Label

**Syntaxe :** obj &lt;&lt; Get X Axis Label

**Description :** Renvoie l’étiquette de l’axe X sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
label = obj << Frame3D( Get X Axis Label );
Show( label );

```

#### Get Y Axis Color

**Syntaxe :** obj &lt;&lt; Get Y Axis Color

**Description :** Renvoie la couleur de l’axe Y sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
c = obj << Frame3D( Get Y Axis Color );
Show( c );

```

#### Get Y Axis Label

**Syntaxe :** obj &lt;&lt; Get Y Axis Label

**Description :** Renvoie l’étiquette de l’axe Y sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
label = obj << Frame3D( Get Y Axis Label );
Show( label );

```

#### Get Z Axis Color

**Syntaxe :** obj &lt;&lt; Get Z Axis Color

**Description :** Renvoie la couleur de l’axe Z sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
c = obj << Frame3D( Get Z Axis Color );
Show( c );

```

#### Get Z Axis Label

**Syntaxe :** obj &lt;&lt; Get Z Axis Label

**Description :** Définit l’étiquette de l’axe Z sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
label = obj << Frame3D( Get Z Axis Label );
Show( label );

```

#### Legend

**Syntaxe :** obj &lt;&lt; Legend( state=0|1 )

**Description :** Affiche ou masque la légende sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface2( Both Sides )
);
obj << Frame3D( Legend( 0 ) );
Wait( 2 );
obj << Frame3D( Legend( 1 ) );

```

#### Set Axes

**Syntaxe :** obj &lt;&lt; Set Axes( state=0|1 )

**Description :** Affiche ou masque les axes X, Y, et Z sur le graphique. Activé par défaut.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Axes( 1 ) );

```

#### Set Box

**Syntaxe :** obj &lt;&lt; Set Box( state=0|1 )

**Description :** Affiche ou masque le cadre de la boîte sur le graphique. Activé par défaut.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Box( 1 ) );

```

#### Set Graph Size

**Syntaxe :** obj &lt;&lt; Set Graph Size( x, y )

**Description :** Définit la taille du graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Graph Size( 700, 800 ) );

```

#### Set Grids

**Syntaxe :** obj &lt;&lt; Set Grids( state=0|1 )

**Description :** Affiche ou masque les grilles sur le graphique. Activé par défaut.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Grids( 1 ) );

```

#### Set Hide Lights Border

**Syntaxe :** obj &lt;&lt; Set Hide Lights Border( state=0|1 )

**Description :** Masque ou affiche la brodure de lumière tout autour du graphique. Activé par défaut.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Hide Lights Border( 0 ) );

```

#### Set Line Scale

**Syntaxe :** obj &lt;&lt; Set Line Scale( number )

**Description :** Définit la largeur de trait de la grille sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Line Scale( 6.5 ) );

```

#### Set Marker Quality

**Syntaxe :** obj &lt;&lt; Set Marker Quality( number )

**Description :** Définit les caractéristiques du marqueur appliqué au graphique, forme et ombre par exemple.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Marker Scale( 3 ), Set Marker Quality( 0.2625 ) );

```

#### Set Marker Scale

**Syntaxe :** obj &lt;&lt; Set Marker Scale( number )

**Description :** Définit la taille du marqueur appliqué au graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Marker Scale( 3.5 ) );

```

#### Set Marker Transparency

**Syntaxe :** obj &lt;&lt; Set Marker Transparency( fraction )

**Description :** Définit la transparence du marqueur appliqué au graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Marker Transparency( 0.4125 ) );

```

#### Set Oscillation

**Syntaxe :** obj &lt;&lt; Set Oscillation( X, Y, Z, duration )

**Description :** Définit le taux d’oscillation sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Rotation( -60, -3, 35 ), Set Oscillation( -54, 0, 38, 100 ) );

```

#### Set Rotation

**Syntaxe :** obj &lt;&lt; Set Rotation( X, Y, Z )

**Description :** Fait pivoter le cadre jusqu’à atteindre les coordonnées spécifiées.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Rotation( -60, -3, 35 ) );

```

#### Set Spin

**Syntaxe :** obj &lt;&lt; Set Spin( dx, dy, sx, sy )

**Description :** Fait tourner le graphique autour d’un axe spécifié. Les valeurs dx et dy représentent le déplacement différentiel de la souris partant du point, (sx, sy).

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Spin( .01, .01, 0, 0 ) );

```

#### Set Text Scale

**Syntaxe :** obj &lt;&lt; Set Text Scale( number )

**Description :** Définit la taille du texte de l’axe sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Text Scale( 1.4 ) );

```

#### Set View Ortho

**Syntaxe :** obj &lt;&lt; Set View Ortho( state=0|1 )

**Description :** Affiche le graphique de manière orthographique ou linéaire.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set View Ortho( 1 ) );

```

#### Set View Perspective

**Syntaxe :** obj &lt;&lt; Set View Perspective( fraction )

**Description :** Définit l’affichage de la perspective sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set View Perspective( 0.275 ) );

```

#### Set View Zoom

**Syntaxe :** obj &lt;&lt; Set View Zoom( number )

**Description :** Définit le zoom sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set View Zoom( 0.5 ) );
Wait( 2 );
obj << Frame3D( Set View Zoom( 2 ) );

```

#### Set Wall Color

**Syntaxe :** obj &lt;&lt; Set Wall Color( number )

**Description :** Définit la couleur de fond du graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Wall Color( -16775543 ) );

```

#### Set Walls

**Syntaxe :** obj &lt;&lt; Set Walls( state=0|1 )

**Description :** Affiche ou masque les murs sur le graphique. Activé par défaut.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Walls( 1 ) );

```

#### Set X Axis Color

**Syntaxe :** obj &lt;&lt; Set X Axis Color( color )

**Description :** Définit la couleur de l’axe X sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set X Axis Color( 5 ) );

```

#### Set X Axis Label

**Syntaxe :** obj &lt;&lt; Set X Axis Label( string )

**Description :** Définit l’étiquette de l’axe X sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set X Axis Label( "Iris Sepal Length" ) );

```

#### Set Y Axis Color

**Syntaxe :** obj &lt;&lt; Set Y Axis Color( color )

**Description :** Définit la couleur de l’axe Y sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Y Axis Color( 11 ) );

```

#### Set Y Axis Label

**Syntaxe :** obj &lt;&lt; Set Y Axis Label( string )

**Description :** Définit l’étiquette de l’axe Y sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Y Axis Label( "Iris Petal Length" ) );

```

#### Set Z Axis Color

**Syntaxe :** obj &lt;&lt; Set Z Axis Color( color )

**Description :** Définit la couleur de l’axe Z sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Z Axis Color( "Green" ) );

```

#### Set Z Axis Label

**Syntaxe :** obj &lt;&lt; Set Z Axis Label( string )

**Description :** Définit l’étiquette de l’axe Z sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Z Axis Label( "Iris Sepal Width" ) );

```

#### XAxis

**Syntaxe :** obj &lt;&lt; XAxis( Min( number ), Max( number ), Inc( number ), Format( ) )

**Description :** Définit les valeurs de l’axe X sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( XAxis( Min( 3 ), Max( 10 ) ) );

```

#### YAxis

**Syntaxe :** obj &lt;&lt; YAxis( Min( number ), Max( number ), Inc( number ), Format( ) )

**Description :** Définit les valeurs de l’axe Y sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( YAxis( Min( 1 ), Max( 10 ), Inc( 0.5 ) ) );

```

#### Z Axis

**Syntaxe :** obj &lt;&lt; Z Axis( Min( number ), Max( number ), Inc( number ), Format( ) )

**Description :** Définit les valeurs de l’axe Z sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( ZAxis( Min( 1 ), Max( 5 ), Inc( 0.25 ) ) );

```

#### get light active

**Syntaxe :** obj &lt;&lt; get light active( light number )

**Description :** Renvoie l’activation de la lumière spécifiée brillant sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
p = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Active( 2 ) );
Show( p );

```

#### get light color

**Syntaxe :** obj &lt;&lt; get light color( light number )

**Description :** Renvoie la couleur de la lumière spécifiée brillant sur le graphique sous forme de liste {red, green, blue}.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
c = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Color( 1 ) );
Show( c );

```

#### get light position

**Syntaxe :** obj &lt;&lt; get light position( light number )

**Description :** Renvoie la position de la lumière spécifiée brillant sur le graphique sous forme de liste {x, y, z}.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
p = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Position( 2 ) );
Show( p );

```

#### set light active

**Syntaxe :** obj &lt;&lt; set light active( light number, state=0|1 )

**Description :** Allume la lumière spécifiée brillant sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Active( 4, 1 ) );

```

#### set light color

**Syntaxe :** obj &lt;&lt; set light color( light number, red value, green value, blue value )

**Description :** Définit la couleur de la lumière brillant sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Color( 2, 240, 50, 70 ) );

```

#### set light position

**Syntaxe :** obj &lt;&lt; set light position( light number, X, Y, Z )

**Description :** Définit la position de la lumière brillant sur le graphique.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D(
	Set Hide Lights Border( 0 ),
	Set Light Position( 2, -1.5833, 10, 0 )
);

```

