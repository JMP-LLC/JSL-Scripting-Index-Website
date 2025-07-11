# Data Connector Metadata



### Get Description

**Syntax:**  metadata << Get Description()

**Beschreibung:** Ruft die Beschreibung des Datenkonnektors ab

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );

description = metadata << Get Description();

```

### Get Driver

**Syntax:**  metadata << Get Driver()

**Beschreibung:** Ruft den Treiber des Datenkonnektors ab, sofern einer vorhanden ist.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );

type = metadata << Get Driver();

```

### Get Name

**Syntax:**  metadata << Get Name()

**Beschreibung:** Ruft den Namen des Datenkonnektors ab

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );

name = metadata << Get Name();

```

### Get Path

**Syntax:** metadaata << Get Path()

**Beschreibung:** Ruft den Pfad des Datenkonnektors ab

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );

path = metadata << Get Path();

```

### Get Type

**Syntax:**  metadata << Get Type()

**Beschreibung:** Ruft den Typ des Datenkonnektors ab

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );

type = metadata << Get Type();

```

### Set Description

**Syntax:**  metadata << Set Description(description)

**Beschreibung:** Legt die Beschreibung des Datenkonnektors fest

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );

metadata << Set Description( "My frequently used SQL Server connection." );

```

### Set Name

**Syntax:**  metadata << Set Name( name )

**Beschreibung:** Legt den Namen des Datenkonnektors fest

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );

metadata << Set Name( "A new Name" );

```

