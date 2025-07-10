# JMP Live Space



### Get Description

**Syntax:** string = jmplivespace << Get Description()

**Beschreibung:** Ruft die Beschreibung des JMP Live-Arbeitsbereichs ab

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Find Spaces( Search( "~" ) );

spaceList = jmpliveresult << As Scriptable;
space = spaceList[1];

Write( "Description: ", space << Get Description );

```

### Get Key

**Syntax:** string = jmplivespace << Get Key()

**Beschreibung:** Ruft den Arbeitsbereichsschlüssel für den JMP Live-Arbeitsbereich ab

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Find Spaces( Search( "~" ) );

spaceList = jmpliveresult << As Scriptable;
space = spaceList[1];

Write( "Key: ", space << Get Key );

```

### Get Name

**Syntax:** string = jmplivespace << Get Name()

**Beschreibung:** Ruft den Namen des JMP Live-Arbeitsbereichs ab

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Find Spaces( Search( "~" ) );

spaceList = jmpliveresult << As Scriptable;
space = spaceList[1];

Write( "Name: ", space << Get Name );

```

### Get Type

**Syntax:** string = jmplivespace << Get Type()

**Beschreibung:** Ruft den Typ des JMP Live-Arbeitsbereichs (persönlich oder normal) ab

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Find Spaces( Search( "~" ) );

spaceList = jmpliveresult << As Scriptable;
space = spaceList[1];

Write( "Type: ", space << Get Type );

```

