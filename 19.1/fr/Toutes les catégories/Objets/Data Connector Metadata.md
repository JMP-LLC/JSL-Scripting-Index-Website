# Data Connector Metadata



## Messages d'éléments

### Get Description

**Syntaxe :** metadata &lt;&lt; Get Description()

**Description :** Récupère la description du connecteur de données

**JMP Version ajoutée :** 18

```jsl

description = metadata << Get Description();

```

### Get Driver

**Syntaxe :** metadata &lt;&lt; Get Driver()

**Description :** Récupère le pilote du connecteur de données, le cas échéant.

**JMP Version ajoutée :** 18

```jsl

type = metadata << Get Driver();

```

### Get Name

**Syntaxe :** metadata &lt;&lt; Get Name()

**Description :** Récupère le nom du connecteur de données

**JMP Version ajoutée :** 18

```jsl

name = metadata << Get Name();

```

### Get Path

**Syntaxe :** metadaata &lt;&lt; Get Path()

**Description :** Récupère le chemin du connecteur de données

**JMP Version ajoutée :** 18

```jsl

path = metadata << Get Path();

```

### Get Type

**Syntaxe :** metadata &lt;&lt; Get Type()

**Description :** Récupère le type du connecteur de données

**JMP Version ajoutée :** 18

```jsl

type = metadata << Get Type();

```

### Set Description

**Syntaxe :** metadata &lt;&lt; Set Description(description)

**Description :** Définit la description du connecteur de données

**JMP Version ajoutée :** 18

```jsl

metadata << Set Description( "My frequently used SQL Server connection." );

```

### Set Name

**Syntaxe :** metadata &lt;&lt; Set Name( name )

**Description :** Définit le nom du connecteur de données

**JMP Version ajoutée :** 18

```jsl

metadata << Set Name( "A new Name" );

```

