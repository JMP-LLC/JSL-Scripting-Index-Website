# JMP Live Space



## Messaggi degli elementi

### Get Description

**Sintassi:** string = jmplivespace &lt;&lt; Get Description()

**Descrizione:** Ottiene la descrizione dello spazio JMP Live

**JMP Versione aggiunta:** 18

```jsl

liveconnection = New JMP Live();jmpliveresult = liveconnection << Find Spaces( Search( "~" ) );spaceList = jmpliveresult << As Scriptable;space = spaceList[1];Write( "Description: ", space << Get Description );

```

### Get Key

**Sintassi:** string = jmplivespace &lt;&lt; Get Key()

**Descrizione:** Ottiene il carattere spazio per lo spazio JMP Live

**JMP Versione aggiunta:** 18

```jsl

liveconnection = New JMP Live();jmpliveresult = liveconnection << Find Spaces( Search( "~" ) );spaceList = jmpliveresult << As Scriptable;space = spaceList[1];Write( "Key: ", space << Get Key );

```

### Get Name

**Sintassi:** string = jmplivespace &lt;&lt; Get Name()

**Descrizione:** Ottiene il nome dello spazio JMP Live

**JMP Versione aggiunta:** 18

```jsl

liveconnection = New JMP Live();jmpliveresult = liveconnection << Find Spaces( Search( "~" ) );spaceList = jmpliveresult << As Scriptable;space = spaceList[1];Write( "Name: ", space << Get Name );

```

### Get Type

**Sintassi:** string = jmplivespace &lt;&lt; Get Type()

**Descrizione:** Ottiene il tipo di spazio JMP Live (personale o normale)

**JMP Versione aggiunta:** 18

```jsl

liveconnection = New JMP Live();jmpliveresult = liveconnection << Find Spaces( Search( "~" ) );spaceList = jmpliveresult << As Scriptable;space = spaceList[1];Write( "Type: ", space << Get Type );

```

