# Data Connector Metadata



## Item Messages

### Get Description

**Syntax:** metadata &lt;&lt; Get Description()

**Description:** Gets the data connector description

**JMP Version Added:** 18

```jsl


description = metadata << Get Description();

```

### Get Driver

**Syntax:** metadata &lt;&lt; Get Driver()

**Description:** Gets data connector driver, if there is one.

**JMP Version Added:** 18

```jsl


type = metadata << Get Driver();

```

### Get Name

**Syntax:** metadata &lt;&lt; Get Name()

**Description:** Gets the data connector name

**JMP Version Added:** 18

```jsl


name = metadata << Get Name();

```

### Get Path

**Syntax:** metadaata &lt;&lt; Get Path()

**Description:** Gets data connector path

**JMP Version Added:** 18

```jsl


path = metadata << Get Path();

```

### Get Type

**Syntax:** metadata &lt;&lt; Get Type()

**Description:** Gets the data connector type

**JMP Version Added:** 18

```jsl


type = metadata << Get Type();

```

### Set Description

**Syntax:** metadata &lt;&lt; Set Description(description)

**Description:** Sets the data connector description

**JMP Version Added:** 18

```jsl


metadata << Set Description( "My frequently used SQL Server connection." );

```

### Set Name

**Syntax:** metadata &lt;&lt; Set Name( name )

**Description:** Sets the data connector name

**JMP Version Added:** 18

```jsl


metadata << Set Name( "A new Name" );

```

