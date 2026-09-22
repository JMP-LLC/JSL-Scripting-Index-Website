# Data Connector Metadata



## Mensajes del elemento

### Get Description

**Sintaxis:** metadata &lt;&lt; Get Description()

**Descripción:** Obtiene la descripción del conector de datos.

**JMP Versión agregada:** 18

```jsl

description = metadata << Get Description();

```

### Get Driver

**Sintaxis:** metadata &lt;&lt; Get Driver()

**Descripción:** Obtiene el controlador del conector de datos, si lo hay.

**JMP Versión agregada:** 18

```jsl

type = metadata << Get Driver();

```

### Get Name

**Sintaxis:** metadata &lt;&lt; Get Name()

**Descripción:** Obtiene el nombre del conector de datos.

**JMP Versión agregada:** 18

```jsl

name = metadata << Get Name();

```

### Get Path

**Sintaxis:** metadaata &lt;&lt; Get Path()

**Descripción:** Obtiene la ruta del conector de datos.

**JMP Versión agregada:** 18

```jsl

path = metadata << Get Path();

```

### Get Type

**Sintaxis:** metadata &lt;&lt; Get Type()

**Descripción:** Obtiene el tipo de conector de datos.

**JMP Versión agregada:** 18

```jsl

type = metadata << Get Type();

```

### Set Description

**Sintaxis:** metadata &lt;&lt; Set Description(description)

**Descripción:** Establece la descripción del conector de datos.

**JMP Versión agregada:** 18

```jsl

metadata << Set Description( "My frequently used SQL Server connection." );

```

### Set Name

**Sintaxis:** metadata &lt;&lt; Set Name( name )

**Descripción:** Establece el nombre del conector de datos.

**JMP Versión agregada:** 18

```jsl

metadata << Set Name( "A new Name" );

```

