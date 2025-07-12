# Data Connector Metadata



## Messaggi degli elementi

### Get Description

**Sintassi:**  metadata << Get Description()

**Descrizione:** Ottiene la descrizione del connettore dati

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

description = metadata << Get Description();

```

### Get Driver

**Sintassi:**  metadata << Get Driver()

**Descrizione:** Ottiene il driver del connettore dati, se esiste.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

type = metadata << Get Driver();

```

### Get Name

**Sintassi:**  metadata << Get Name()

**Descrizione:** Ottiene il nome del connettore dati

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

name = metadata << Get Name();

```

### Get Path

**Sintassi:** metadaata << Get Path()

**Descrizione:** Ottiene il percorso del connettore dati

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

path = metadata << Get Path();

```

### Get Type

**Sintassi:**  metadata << Get Type()

**Descrizione:** Ottiene il tipo del connettore dati

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

type = metadata << Get Type();

```

### Set Description

**Sintassi:**  metadata << Set Description(description)

**Descrizione:** Imposta la descrizione del connettore dati

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

metadata << Set Description( "My frequently used SQL Server connection." );

```

### Set Name

**Sintassi:**  metadata << Set Name( name )

**Descrizione:** Imposta il nome del connettore dati

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );

metadata << Set Name( "A new Name" );

```

