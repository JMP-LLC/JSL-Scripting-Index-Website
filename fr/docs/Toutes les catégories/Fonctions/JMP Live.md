# JMP Live



## Fonctions

### New JMP Live

**Syntaxe :** New JMP Live(Connection("Connection Name"), <Prompt("No" | "If Needed")>)

**Description :** Démarre une connexion à JMP Live en utilisant les informations de connexion enregistrées. L&apos;argument Connexion est facultatif et prend par défaut la connexion spécifiée dans le gestionnaire de connexions. L&apos;argument Prompt est facultatif et « No » par défaut. Les valeurs valides de Prompt sont « Yes », « No » et « If Needed ». Une valeur de « Yes » demande toujours les identifiants de connexion. Une valeur de « No » ne demande jamais les identifiants de connexion, mais pourrait causer un échec d&apos;authentification. Une valeur de « If Needed » demande les identifiants uniquement si les identifiants actuellement enregistrés ne sont pas valides. Renvoie un objet Connexion JMP Live.

**JMP Version ajoutée :** 15

**Exemple 1**

```jsl

Names Default To Here( 1 );
jmplive = New JMP Live();

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
jmplive = New JMP Live( Connection( "MyJMPLive" ), Prompt( No ) );

```

**Exemple 3**

```jsl

Names Default To Here( 1 );
jmplive = New JMP Live( Connection( "MyJMPLive" ), Prompt( If Needed ) );

```

### New JMP Live Content

**Syntaxe :** obj = New JMP Live Content(jmpreport|Image(path_to_image)|Data(jmpdatatable)|Map(jmpmap), <Title(...)>, <Description(...)>, <Publish Data(0|1)>, <Enable Warnings(0|1)>, <Optimization("Interactivity" | "Performance")>

**Description :** Permet de créer du contenu interactif pour le publier sur JMP Live. 

	Le premier paramètre est obligatoire. Il spécifie les données à utiliser pour le contenu. Ces données peuvent être un rapport, une table de données, une carte ou une image. 

	Le titre et la description servent à personnaliser n&apos;importe quel type de contenu publié. Les paramètres restant sont facultatifs et servent à personnaliser le contenu du rapport uniquement. 

	Publier les données indique si les données utilisées dans le rapport sont publiées sur JMP Live ou non. Les données du rapport sont publiées par défaut.

	Activer les avertissements indique si les avertissements relatifs à la carte de contrôle doivent être activés ou non pour le rapport. Les avertissements relatifs à la carte de contrôle sont désactivés par défaut. 

	L&apos;optimisation sert à personnaliser la manière dont le rapport est publié sur JMP Live. Le rapport est publié pour permettre une plus grande interactivité par défaut.

**JMP Version ajoutée :** 17

**Exemple 1**

```jsl

Names Default To Here( 1 );
bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
dist = bc << Run Script( "Distribution" );

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Folder for Sample Content" )
);
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content(
	dist,
	Title( "Distribution Web Report" ),
	Description(
		"This report was created with the sample found in the Scripting Index"
	),
	Publish Data( 1 ),
	Optimization( "Interactivity" )
);

jmpliveresult = liveconnection << Publish( content, Folder( folder ) );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Folder for Data Content" )
);
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content(
	Data( "$SAMPLE_DATA/Big Class.jmp" ),
	Title( "Big Class Sample Table" ),
	Description(
		"This data table was published with the sample found in the Scripting Index"
	)
);

jmpliveresult = liveconnection << Publish( content, Folder( folder ) );

```

**Exemple 3**

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Folder for Map Content" )
);
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content( Map( "$SAMPLE_DATA/S4-XY.jmp" ) );

jmpliveresult = liveconnection << Publish( content, Folder( folder ) );

```

**Exemple 4**

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Folder for Image Content" )
);
folder = jmpliveresult << As Scriptable;

imageContent = New JMP Live Content(
	Image( "$SAMPLE_IMAGES/black rhino footprint.jpg" ),
	Title( "Rhino Footprint" ),
	Description( "An image of a rhino footprint from the Sample Data" )
);

jmpliveresult = liveconnection << Publish( imageContent, Folder( folder ) );

```

