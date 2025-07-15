# Data Connector Metadata



## Elementmeldungen

### Get Description

**Syntax:** metadata &lt;&lt; Get Description()

**Beschreibung:** Ruft die Beschreibung des Datenkonnektors ab

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

description = metadata << Get Description();

```

### Get Driver

**Syntax:** metadata &lt;&lt; Get Driver()

**Beschreibung:** Ruft den Treiber des Datenkonnektors ab, sofern einer vorhanden ist.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

type = metadata << Get Driver();

```

### Get Name

**Syntax:** metadata &lt;&lt; Get Name()

**Beschreibung:** Ruft den Namen des Datenkonnektors ab

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

name = metadata << Get Name();

```

### Get Path

**Syntax:** metadaata &lt;&lt; Get Path()

**Beschreibung:** Ruft den Pfad des Datenkonnektors ab

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

path = metadata << Get Path();

```

### Get Type

**Syntax:** metadata &lt;&lt; Get Type()

**Beschreibung:** Ruft den Typ des Datenkonnektors ab

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

type = metadata << Get Type();

```

### Set Description

**Syntax:** metadata &lt;&lt; Set Description(description)

**Beschreibung:** Legt die Beschreibung des Datenkonnektors fest

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

metadata << Set Description( "My frequently used SQL Server connection." );

```

### Set Name

**Syntax:** metadata &lt;&lt; Set Name( name )

**Beschreibung:** Legt den Namen des Datenkonnektors fest

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );

metadata << Set Name( "A new Name" );

```

