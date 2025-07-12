# Data Connector Metadata



## Mensajes del elemento

### Get Description

**Sintaxis:**  metadata << Get Description()

**Descripción:** Obtiene la descripción del conector de datos.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );

description = metadata << Get Description();

```

### Get Driver

**Sintaxis:**  metadata << Get Driver()

**Descripción:** Obtiene el controlador del conector de datos, si lo hay.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );

type = metadata << Get Driver();

```

### Get Name

**Sintaxis:**  metadata << Get Name()

**Descripción:** Obtiene el nombre del conector de datos.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );

name = metadata << Get Name();

```

### Get Path

**Sintaxis:** metadaata << Get Path()

**Descripción:** Obtiene la ruta del conector de datos.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );

path = metadata << Get Path();

```

### Get Type

**Sintaxis:**  metadata << Get Type()

**Descripción:** Obtiene el tipo de conector de datos.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );

type = metadata << Get Type();

```

### Set Description

**Sintaxis:**  metadata << Set Description(description)

**Descripción:** Establece la descripción del conector de datos.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );

metadata << Set Description( "My frequently used SQL Server connection." );

```

### Set Name

**Sintaxis:**  metadata << Set Name( name )

**Descripción:** Establece el nombre del conector de datos.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );

metadata << Set Name( "A new Name" );

```

