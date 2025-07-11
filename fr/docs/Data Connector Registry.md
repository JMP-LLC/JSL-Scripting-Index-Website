# Data Connector Registry



### Get

**Syntaxe :** Data Connector Registry() << Get ( name )

**Description :** Récupère un connecteur de données à partir du Registre

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );

dc = Data Connector Registry() << Get( "com.jmp.sql_server" );

```

### Get Available

**Syntaxe :** Data Connector Registry() << Get Available()

**Description :** Récupère une liste des connecteurs de données disponibles dans le Registre

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );

list = Data Connector Registry() << Get Available();

```

### Get Metadata

**Syntaxe :** Data Connector Registry() << Get Metadata ( name )

**Description :** Récupère les métadonnées du connecteur de données à partir du Registre

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );

metadata = Data Connector Registry() << Get Metadata( "com.jmp.sql_server" );

```

### Register

**Syntaxe :** Data Connector Registry() << Register( Path(path), <Name(name)>, <Description(Description)> )

**Description :** Ajoute un connecteur de données au Registre

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );

Data Connector Registry() << Register(
	Path( "$DOCUMENTS/my connector.jmpdc" ),
	Name( "My Data Connector" )
);

```

### Unregister

**Syntaxe :** Data Connector Registry() << Unregister ( name )

**Description :** Supprime un connecteur de données du Registre

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );

dc = Data Connector Registry() << Unregister( "My Data Connector" );

```

