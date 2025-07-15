# Data Connector Metadata



## Item Messages

### Get Description

**Syntax:** metadata &lt;&lt; Get Description()

**Description:** Gets the data connector description

```jsl

Names Default To Here( 1 );

description = metadata << Get Description();

```

### Get Driver

**Syntax:** metadata &lt;&lt; Get Driver()

**Description:** Gets data connector driver, if there is one.

```jsl

Names Default To Here( 1 );

type = metadata << Get Driver();

```

### Get Name

**Syntax:** metadata &lt;&lt; Get Name()

**Description:** Gets the data connector name

```jsl

Names Default To Here( 1 );

name = metadata << Get Name();

```

### Get Path

**Syntax:** metadaata &lt;&lt; Get Path()

**Description:** Gets data connector path

```jsl

Names Default To Here( 1 );

path = metadata << Get Path();

```

### Get Type

**Syntax:** metadata &lt;&lt; Get Type()

**Description:** Gets the data connector type

```jsl

Names Default To Here( 1 );

type = metadata << Get Type();

```

### Set Description

**Syntax:** metadata &lt;&lt; Set Description(description)

**Description:** Sets the data connector description

```jsl

Names Default To Here( 1 );

metadata << Set Description( "My frequently used SQL Server connection." );

```

### Set Name

**Syntax:** metadata &lt;&lt; Set Name( name )

**Description:** Sets the data connector name

```jsl

Names Default To Here( 1 );

metadata << Set Name( "A new Name" );

```

