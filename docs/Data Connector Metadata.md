# Data Connector Metadata



### Get Description

**Syntax:**  metadata << Get Description()

**Description:** Gets the data connector description

**JMP Version Added:** 18

```

Names Default To Here( 1 );

description = metadata << Get Description();

```

### Get Driver

**Syntax:**  metadata << Get Driver()

**Description:** Gets data connector driver, if there is one.

**JMP Version Added:** 18

```

Names Default To Here( 1 );

type = metadata << Get Driver();

```

### Get Name

**Syntax:**  metadata << Get Name()

**Description:** Gets the data connector name

**JMP Version Added:** 18

```

Names Default To Here( 1 );

name = metadata << Get Name();

```

### Get Path

**Syntax:** metadaata << Get Path()

**Description:** Gets data connector path

**JMP Version Added:** 18

```

Names Default To Here( 1 );

path = metadata << Get Path();

```

### Get Type

**Syntax:**  metadata << Get Type()

**Description:** Gets the data connector type

**JMP Version Added:** 18

```

Names Default To Here( 1 );

type = metadata << Get Type();

```

### Set Description

**Syntax:**  metadata << Set Description(description)

**Description:** Sets the data connector description

**JMP Version Added:** 18

```

Names Default To Here( 1 );

metadata << Set Description( "My frequently used SQL Server connection." );

```

### Set Name

**Syntax:**  metadata << Set Name( name )

**Description:** Sets the data connector name

**JMP Version Added:** 18

```

Names Default To Here( 1 );

metadata << Set Name( "A new Name" );

```

