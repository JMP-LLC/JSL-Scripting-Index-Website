# Notebook



## Constructeurs associés

### Notebook

**Syntaxe :** nb = Notebook( name|number )

**Description :** Crée un notebook ou renvoie le notebook avec le nom ou l&apos;indice fourni.

```jsl

Names Default To Here( 1 );

nb = Notebook();

```

## Messages d'éléments

### Enable Inline Logging

**Syntaxe :** obj &lt;&lt; Enable Inline Logging( 0|1 )

**Description :** Active ou désactive la journalisation de la sortie dans les blocs de notebook.

```jsl

Names Default To Here( 1 );


nb = Notebook();

nb << Enable Inline Logging( 0 );

```

### Export to a Workflow

**Syntaxe :** obj &lt;&lt; Export to a Workflow( &lt;Create(wfb name)&gt;|&lt;AddTo(wfb name)&gt; )

**Description :** Exporte les blocs du notebook vers un flux de travail.

```jsl

Names Default To Here( 1 );


nb = Notebook();

nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );
nb << Add New Block(
	"JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )"
);
nb << Export to a Workflow;

```

### Get Window

**Syntaxe :** obj &lt;&lt; Get Window

**Description :** Renvoie la fenêtre de ce notebook.

```jsl

Names Default To Here( 1 );


nb = Notebook();

nb << Get Window;

```

### Import .ipynb File

**Syntaxe :** obj &lt;&lt; Import .ipynb File( file path )

**Description :** Charge le fichier .ipynb fourni sous forme de blocs dans le notebook.

```jsl

Names Default To Here( 1 );


nb = Notebook();

nb << Import .ipynb File( NOTEBOOKPATH );

```

### Run All Scripts

**Syntaxe :** obj &lt;&lt; Run All Scripts

**Description :** Exécute le notebook complet.

```jsl

Names Default To Here( 1 );


nb = Notebook();

nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );
nb << Add New Block(
	"JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )"
);
Wait( 1 );
nb << Run All Scripts;

```

### Show Embedded Log

**Syntaxe :** obj &lt;&lt; Show Embedded Log( 0|1 )

**Description :** Active ou désactive le log intégré dans le notebook.

```jsl

Names Default To Here( 1 );


nb = Notebook();

nb << Show Embedded Log( 1 );

```

### Title

**Syntaxe :** obj &lt;&lt; Title( title )

**Description :** Définit le titre de ce notebook.

```jsl

Names Default To Here( 1 );


nb = Notebook();

nb << Title( "Example Title" );
Show( nb << Title );

```

## Block

### Constructeurs associés

#### Block

**Syntaxe :** Block

```jsl

Names Default To Here( 1 );

nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

```

### Messages d'éléments

#### Block Name

**Syntaxe :** obj &lt;&lt; Block Name( name )

**Description :** Définit ou récupère le titre de ce bloc.

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Block Name( "Test Block Name" );

```

#### Duplicate Block

**Syntaxe :** obj &lt;&lt; Duplicate Block

**Description :** Réplique ce bloc et ajoute le nouveau bloc comme son frère.

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Duplicate Block;

```

#### Get Content

**Syntaxe :** obj &lt;&lt; Get Content

**Description :** Récupère le contenu du bloc.

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

Show( block << Get Content );

```

#### Get Output

**Syntaxe :** obj &lt;&lt; Get Output

**Description :** Récupère la sortie de l&apos;arbre d&apos;affichage du bloc.

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block2 = nb << Add New Block(
	"JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )"
);
Wait( 1 );
nb << Run All Scripts;
block2 << Get Output;

```

#### Import .ipynb File

**Syntaxe :** obj &lt;&lt; Import .ipynb File( file path )

**Description :** Charge le fichier .ipynb fourni sous forme de blocs ajoutés à cette section.

```jsl

Names Default To Here( 1 );

nb = Notebook();
section = nb << Add New Block( "Section" );
section << Import .ipynb File( NOTEBOOKPATH );

```

#### Line Count

**Syntaxe :** obj &lt;&lt; Line Count( number )

**Description :** Définit le nombre maximum de lignes affichées dans ce bloc avant d&apos;activer le défilement. Une valeur de 0 signifie un dimensionnement automatique.

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Line Count( 1 );

```

#### Move Block Down

**Syntaxe :** obj &lt;&lt; Move Block Down

**Description :** Déplace ce bloc d&apos;un pas vers le bas dans la liste.

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block2 = nb << Add New Block(
	"JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )"
);
block << Move Block Down;

```

#### Move Block Up

**Syntaxe :** obj &lt;&lt; Move Block Up

**Description :** Déplace ce bloc d&apos;un pas vers le haut dans la liste.

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block2 = nb << Add New Block(
	"JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )"
);
block2 << Move Block Up;

```

#### Popout Results

**Syntaxe :** obj &lt;&lt; Popout Results

**Description :** Envoie la sortie actuelle de ce bloc vers une nouvelle fenêtre.

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block2 = nb << Add New Block(
	"JSL", "Data Table ( \!"Big Class\!" ) << Distribution ( Y(:age, :sex) )"
);
Wait( 1 );
nb << Run All Scripts;
block2 << Popout Results;

```

#### Remove Block

**Syntaxe :** obj &lt;&lt; Remove Block

**Description :** Supprime ce bloc de son parent.

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Remove Block;

```

#### Remove Section

**Syntaxe :** obj &lt;&lt; Remove Section

**Description :** Supprime cette section de son parent.

```jsl

Names Default To Here( 1 );

nb = Notebook();
section = nb << Add New Block( "Section" );
section << Remove Section;

```

#### Run Script

**Syntaxe :** obj &lt;&lt; Run Script

**Description :** Exécute le contenu du bloc actif.

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

Wait( 1 );
block << Run Script;

```

#### Run Section

**Syntaxe :** obj &lt;&lt; Run Section

**Description :** Exécute les éléments enfants de cette section dans l&apos;ordre.

```jsl

Names Default To Here( 1 );

nb = Notebook();
section = nb << Add New Block( "Section" );
section << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );
Wait( 1 );
section << Run Section;

```

#### Set Content

**Syntaxe :** obj &lt;&lt; Set Content( content )

**Description :** Définit le contenu du bloc.

```jsl

Names Default To Here( 1 );


nb = Notebook();
block = nb << Add New Block( "JSL", "Open (\!"$SAMPLE_DATA/Big Class.jmp\!")" );

block << Set Content( "Print(Char(Pi(), 10))" );

```

