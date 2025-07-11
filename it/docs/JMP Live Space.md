# JMP Live Space



### Get Description

**Sintassi:** string = jmplivespace << Get Description()

**Descrizione:** Ottiene la descrizione dello spazio JMP Live

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Find Spaces( Search( "~" ) );

spaceList = jmpliveresult << As Scriptable;
space = spaceList[1];

Write( "Description: ", space << Get Description );

```

### Get Key

**Sintassi:** string = jmplivespace << Get Key()

**Descrizione:** Ottiene il carattere spazio per lo spazio JMP Live

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Find Spaces( Search( "~" ) );

spaceList = jmpliveresult << As Scriptable;
space = spaceList[1];

Write( "Key: ", space << Get Key );

```

### Get Name

**Sintassi:** string = jmplivespace << Get Name()

**Descrizione:** Ottiene il nome dello spazio JMP Live

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Find Spaces( Search( "~" ) );

spaceList = jmpliveresult << As Scriptable;
space = spaceList[1];

Write( "Name: ", space << Get Name );

```

### Get Type

**Sintassi:** string = jmplivespace << Get Type()

**Descrizione:** Ottiene il tipo di spazio JMP Live (personale o normale)

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Find Spaces( Search( "~" ) );

spaceList = jmpliveresult << As Scriptable;
space = spaceList[1];

Write( "Type: ", space << Get Type );

```

