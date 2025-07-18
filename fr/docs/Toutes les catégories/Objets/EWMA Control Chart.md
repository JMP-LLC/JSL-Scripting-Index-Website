# EWMA Control Chart



## Colonnes

### By

**Syntaxe :** obj = EWMA Control Chart(...&lt;By( column(s) )&gt;...)

**Description :** Spécifie la colonne Par groupe durant le lancement.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EWMA Control Chart( Y( :Gap ), By( _bycol ) );

```

### Subgroup

**Syntaxe :** obj = EWMA Control Chart(...&lt;Subgroup( column )&gt;...)

**Description :** Spécifie la colonne de sous-groupe durant le lancement.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ), Subgroup( :Sample ) );

```

### Y

**Syntaxe :** obj = EWMA Control Chart(...Y( column(s) )...)

**Description :** Spécifie la colonne Y durant le lancement.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );

```

## Constructeurs associés

### EWMA Control Chart

**Syntaxe :** EWMA Control Chart( Y( column ), &lt;Subgroup( column )&gt;, &lt;By( column )&gt;, &lt;Center Data( 1 )&gt; )

**Description :** Crée un graphique qui représente les moyennes mobiles exponentiellement pondérées et un graphique qui représente les observations individuelles ou les moyennes des sous-groupes. Une carte EWMA est également appelée une carte de contrôle par rétroaction.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );

```

## Messages d'éléments

### Alarm Script

**Syntaxe :** Alarm Script(Write("...")|Speak("...")|Mail(address, subject,"...") )

**Description :** Envoie un message si un point d&apos;une carte de contrôle échoue un test donné. Le message peut être envoyé au journal, prendre la forme d&apos;un message sonore ou être envoyé par e-mail.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart(
	Alarm Script(
		Write(
			"Out of Control for test ",
			qc_test,
			" in column ",
			qc_col,
			" in sample ",
			qc_sample,
			". \!N"
		)
	),
	Y( :Gap ),
	Subgroup( :Sample )
);
obj << Test Beyond Limits( 1 );

```

### Center Data

**Syntaxe :** obj = EWMA Control Chart(...Center Data( state=0|1 )...)

**Description :** Spécifie que les données sont centrées en soustrayant la cible de chaque observation.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ), Lambda( 0.2 ), Center Data( 1 ) );

```

### Connect Thru Missing

**Syntaxe :** obj &lt;&lt; Connect Thru Missing( state=0|1 )

**Description :** Connecte les points lorsque certains échantillons ont des valeurs manquantes ou des lignes exclues.

**JMP Version ajoutée :** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
Wait( 1 );
obj << Connect Thru Missing( 1 );

```

### Constant Limits

**Syntaxe :** obj &lt;&lt; Constant Limits( state=0|1 )

**Description :** Utilise une expression asymptotique pour former les limites EWMA constantes.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
Wait();
obj << Constant Limits( 1 );

```

### Control Panel

**Syntaxe :** obj &lt;&lt; Control Panel( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient les valeurs actuelles des paramètres et vous permet de les modifier. Actif par défaut.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Control Panel( 0 );

```

### Get Limits

**Syntaxe :** obj &lt;&lt; Get Limits( filename )

**Description :** Importe les limites de contrôle à partir d&apos;une table de données sélectionnée et remplace les limites calculées sur la carte.

**JMP Version ajoutée :** 17

```jsl

dtLimits = New Table( "EWMA Limits",
	New Column( "_LimitsKey",
		Character,
		Set Values( {"_KSigma", "_Weight", "_Mean", "_Std Dev"} )
	),
	New Column( "Gap", Set Values( [4, 0.3, 15, 0.2655555] ) )
);
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
Wait( 1 );
obj << Get Limits( dtLimits );

```

### K Sigma

**Syntaxe :** obj &lt;&lt; K Sigma( K value=3 )

**Description :** Définit la valeur de K à multiplier par sigma pour former les limites de contrôle de la moyenne. "3" par défaut.

**JMP Version ajoutée :** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
Wait( 1 );
obj << K Sigma( 4 );

```

### Lambda

**Syntaxe :** obj &lt;&lt; Lambda( number=0.2 )

**Description :** Spécifie la constante de lissage pour la pondération des échantillons a priori. "0.2" par défaut.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Lambda( 0.5 );

```

### Lambda Slider

**Syntaxe :** obj &lt;&lt; Lambda Slider( state=0|1 )

**Description :** Affiche ou masque le curseur lambda sur le panneau de contrôle.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Lambda Slider( 1 );

```

### Overlay Charts

**Syntaxe :** obj &lt;&lt; Overlay Charts( state=0|1 )

**Description :** Superpose des points individuels, ou des points X-barre si les données sont résumées, sur la carte EWMA.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Overlay Charts( 1 );

```

### Parameters Report

**Syntaxe :** obj &lt;&lt; Parameters Report( state=0|1 )

**Description :** Affiche ou masque le rapport des paramètres.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Parameters Report( 1 );

```

### Reset to Defaults

**Syntaxe :** obj &lt;&lt; Reset to Defaults

**Description :** Rétablit les valeurs par défaut de tous les paramètres.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Lambda( .9 );
Wait( 1 );
obj << Reset to Defaults();

```

### Restart EWMA after Empty Subgroup

**Syntaxe :** obj &lt;&lt; Restart EWMA after Empty Subgroup( state=0|1 )

**Description :** Redémarre le calcul des statistiques EWMA après chaque sous-groupe manquant ou exclu.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
dt << Select Rows( {31, 32, 33, 34, 35} ) << exclude << hide;
Wait();
obj = dt << EWMA Control Chart( Y( :Gap ), Subgroup( :Sample ) );
Wait( 1 );
obj << Restart EWMA after empty subgroup( 1 );

```

### Save Limits

**Syntaxe :** obj &lt;&lt; Save Limits( "dans une colonne"|"dans une nouvelle table de données" )

**Description :** Enregistre les paramètres du graphique dans une propriété de colonne ou dans une nouvelle table de données.



Si in Column est spécifié, la valeur moyenne est enregistrée dans une propriété de colonne EWMA Limites de contrôle.



Si in New Table est spécifié, le lambda (ou la pondération), l&apos;écart-type et la moyenne pour chaque graphique sont enregistrés dans une nouvelle table de données.

**JMP Version ajoutée :** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Save Limits( "in Column" );
obj << Save Limits( "in New Table" );

```

### Save Sigma

**Syntaxe :** obj &lt;&lt; Save Sigma

**Description :** Enregistre le sigma utilisé dans la carte de contrôle en tant que propriété de colonne dans la table de données.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Save Sigma;

```

### Save Summaries

**Syntaxe :** obj &lt;&lt; Save Summaries

**Description :** Crée une nouvelle table de données qui contient les statistiques résumées et les limites pour chaque sous-groupe.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Save Summaries;

```

### Show ARL

**Syntaxe :** obj &lt;&lt; Show ARL( state=0|1 )

**Description :** Affiche ou masque un rapport contenant la période opérationnelle moyenne calculée à partir de la carte EWMA et du graphique X associés.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Show ARL( 1 );

```

### Show Center Line

**Syntaxe :** obj &lt;&lt; Show Center Line( state=0|1 )

**Description :** Affiche ou masque la ligne centrale sur le graphique. Actif par défaut.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Show Center Line( 0 );

```

### Show Excluded Region

**Syntaxe :** obj = EWMA Control Chart(...Show Excluded Region( state=0|1 )...)

**Description :** Affiche ou masque la région exclue sur l&apos;axe du sous-groupe. S&apos;applique uniquement aux variables de sous-groupe.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
dt << Select Rows( {31, 32, 33, 34, 35, 36, 37, 38, 39, 40} ) << exclude << hide;
obj = dt << EWMA Control Chart(
	Y( :Gap ),
	Subgroup( :Sample ),
	Show Excluded Region( 0 )
);

```

### Show Limits

**Syntaxe :** obj &lt;&lt; Show Limits( state=0|1 )

**Description :** Affiche ou masque les limites. Actif par défaut.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Show Limits( 0 );

```

### Show Residuals Chart

**Syntaxe :** obj &lt;&lt; Show Residuals Chart( state=0|1 )

**Description :** Affiche ou masque une carte de résidus.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Show Residuals Chart( 0 );

```

### Show Shift Lines

**Syntaxe :** obj &lt;&lt; Show Shift Lines( state=0|1 )

**Description :** Affiche ou masque des lignes verticales qui désignent des décalages dans le graphique. Les lignes de décalage sont dessinées au début d&apos;un décalage. Disponible uniquement lorsqu&apos;une dérive est détectée dans les données. Actif par défaut.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
Wait( 1 );
obj << Show Shift Lines( 0 );

```

### Show X Chart

**Syntaxe :** obj &lt;&lt; Show X Chart( state=0|1 )

**Description :** Affiche ou masque la carte X ou XBar sous la carte EWMA. Actif par défaut.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Show X Chart( 0 );

```

### Show X Limits on Overlay Charts

**Syntaxe :** obj &lt;&lt; Show X Limits on Overlay Charts( state=0|1 )

**Description :** Superpose les limites du diagramme de tendance centrale sur la carte EWMA lorsque l&apos;option Superposer les diagrammes est sélectionnée.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart(
	Y( :Gap ),
	Show X Limits On Overlay Charts( 1 ),
	Overlay Charts( 1 )
);

```

### Sigma

**Syntaxe :** obj &lt;&lt; Sigma( number )

**Description :** Spécifie la valeur connue de l&apos;écart-type. Par défaut, ce paramètre est défini à l&apos;étendue mobile moyenne de la colonne Y. S&apos;il y a une variable de sous-groupe, le paramètre Sigma est défini comme la moyenne des étendues mobiles de la moyenne des sous-groupes.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Sigma( 2 );

```

### Target

**Syntaxe :** obj &lt;&lt; Target( number )

**Description :** Spécifie la valeur connue de la moyenne. Il s&apos;agit de la valeur de la ligne centrale dans le graphique. Par défaut, ce paramètre est défini à la valeur cible dans la propriété de colonne Limites de spécification pour la colonne Y. Si la colonne Y n&apos;a pas de valeur cible dans la propriété de colonne Limites de spécification, ce paramètre est défini à la moyenne globale de la colonne Y.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Target( 14.65 );

```

### Test Beyond Limits

**Syntaxe :** obj &lt;&lt; Test Beyond Limits( state=0|1 )

**Description :** Affiche ou masque un cercle rouge autour de tout point situé au-dessus de la limite supérieure ou au-dessous de la limite inférieure dans les cartes EWMA et les graphiques X.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Test Beyond Limits( 1 );

```

### Use Overall Mean for Target

**Syntaxe :** obj &lt;&lt; Use Overall Mean for Target( state=0|1 )

**Description :** Définit la Cible à la grande moyenne. Remarque : applicable uniquement lorsque la Cible est définie avec la propriété Limites de spécification pour la Cible.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ), Subgroup( :Date ) );
Wait( 1 );
obj << Use Overall Mean for Target();

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

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Syntaxe :** obj &lt;&lt; Broadcast(message)

**Description :** Diffuse un message sur une plate-forme. Si les résultats de renvoi des objets individuels sont des tables, elles sont concaténées si possible, et le format final est identique au résultat de l&apos;option Enregistrer la table de données combinée dans une boîte de tableau ou au résultat de l&apos;option Concaténer avec une colonne Source. Sinon, les résultats sont stockés dans une liste et renvoyés.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### Copy ByGroup Script

**Syntaxe :** obj &lt;&lt; Copy ByGroup Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EWMA Control Chart( Y( :Gap ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntaxe :** obj &lt;&lt; Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Copy Script;

```

### Data Table Window

**Syntaxe :** obj &lt;&lt; Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
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

### Get ByGroup Script

**Syntaxe :** obj &lt;&lt; Get ByGroup Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EWMA Control Chart( Y( :Gap ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntaxe :** obj &lt;&lt; Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

#### Général

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
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

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Syntaxe :** obj &lt;&lt; Get Group Platform

**Description :** Renvoie l&apos;objet de Plate-forme de groupe si cette plate-forme fait partie d&apos;un groupe. Sinon, renvoie Empty().

```jsl

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

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntaxe :** obj &lt;&lt; Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntaxe :** obj &lt;&lt; Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
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

### Redo Analysis

**Syntaxe :** obj &lt;&lt; Redo Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntaxe :** obj &lt;&lt; Redo ByGroup Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EWMA Control Chart( Y( :Gap ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntaxe :** obj &lt;&lt; Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntaxe :** obj &lt;&lt; Relaunch ByGroup

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EWMA Control Chart( Y( :Gap ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

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

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntaxe :** obj &lt;&lt; Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EWMA Control Chart( Y( :Gap ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EWMA Control Chart( Y( :Gap ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EWMA Control Chart( Y( :Gap ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntaxe :** obj &lt;&lt; Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntaxe :** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

#### Exemple 1

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EWMA Control Chart( Y( :Gap ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

#### Exemple 2

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EWMA Control Chart( Y( :Gap ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntaxe :** obj &lt;&lt; Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Syntaxe :** obj &lt;&lt; Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntaxe :** obj &lt;&lt; Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
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

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Title( "My Platform" );

```

### Top Report

**Syntaxe :** obj &lt;&lt; Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Syntaxe :** obj = EWMA Control Chart(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Définir le type de fenêtre à créer pour le rapport. Par défaut, une fenêtre de rapport Visible sera créée. Une fenêtre Invisible ne s&apos;affichera pas à l&apos;écran, mais sera visible par les fonctions comme Window(). Une fenêtre Private répond à la plupart des messages de fenêtre mais n&apos;est pas visible et doit être adressée au moyen de l&apos;objet rapport

```jsl

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

