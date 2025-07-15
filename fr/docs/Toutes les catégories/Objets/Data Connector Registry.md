# Data Connector Registry



## Messages d'éléments

### Get

**Syntaxe :** Data Connector Registry() &lt;&lt; Get ( name )

**Description :** Récupère un connecteur de données à partir du Registre

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );

dc = Data Connector Registry() << Get( "com.jmp.sql_server" );

```

### Get Available

**Syntaxe :** Data Connector Registry() &lt;&lt; Get Available()

**Description :** Récupère une liste des connecteurs de données disponibles dans le Registre

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );

list = Data Connector Registry() << Get Available();

```

### Get Metadata

**Syntaxe :** Data Connector Registry() &lt;&lt; Get Metadata ( name )

**Description :** Récupère les métadonnées du connecteur de données à partir du Registre

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );

metadata = Data Connector Registry() << Get Metadata( "com.jmp.sql_server" );

```

### Register

**Syntaxe :** Data Connector Registry() &lt;&lt; Register( Path(path), &lt;Name(name)&gt;, &lt;Description(Description)&gt; )

**Description :** Ajoute un connecteur de données au Registre

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );

Data Connector Registry() << Register(
	Path( "$DOCUMENTS/my connector.jmpdc" ),
	Name( "My Data Connector" )
);

```

### Unregister

**Syntaxe :** Data Connector Registry() &lt;&lt; Unregister ( name )

**Description :** Supprime un connecteur de données du Registre

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );

dc = Data Connector Registry() << Unregister( "My Data Connector" );

```

