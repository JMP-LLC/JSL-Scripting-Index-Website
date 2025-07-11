# Data Connector Metadata



### Get Description

**Syntaxe :**  metadata << Get Description()

**Description :** Récupère la description du connecteur de données

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );

description = metadata << Get Description();

```

### Get Driver

**Syntaxe :**  metadata << Get Driver()

**Description :** Récupère le pilote du connecteur de données, le cas échéant.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );

type = metadata << Get Driver();

```

### Get Name

**Syntaxe :**  metadata << Get Name()

**Description :** Récupère le nom du connecteur de données

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );

name = metadata << Get Name();

```

### Get Path

**Syntaxe :** metadaata << Get Path()

**Description :** Récupère le chemin du connecteur de données

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );

path = metadata << Get Path();

```

### Get Type

**Syntaxe :**  metadata << Get Type()

**Description :** Récupère le type du connecteur de données

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );

type = metadata << Get Type();

```

### Set Description

**Syntaxe :**  metadata << Set Description(description)

**Description :** Définit la description du connecteur de données

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );

metadata << Set Description( "My frequently used SQL Server connection." );

```

### Set Name

**Syntaxe :**  metadata << Set Name( name )

**Description :** Définit le nom du connecteur de données

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );

metadata << Set Name( "A new Name" );

```

