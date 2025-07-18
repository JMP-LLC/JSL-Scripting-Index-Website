# JMP Live Space



## Mensajes del elemento

### Get Description

**Sintaxis:** string = jmplivespace &lt;&lt; Get Description()

**Descripción:** Obtiene la descripción del espacio de JMP Live

**JMP Versión agregada:** 18

```jsl

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Find Spaces( Search( "~" ) );

spaceList = jmpliveresult << As Scriptable;
space = spaceList[1];

Write( "Description: ", space << Get Description );

```

### Get Key

**Sintaxis:** string = jmplivespace &lt;&lt; Get Key()

**Descripción:** Obtiene la clave del espacio del espacio de JMP Live

**JMP Versión agregada:** 18

```jsl

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Find Spaces( Search( "~" ) );

spaceList = jmpliveresult << As Scriptable;
space = spaceList[1];

Write( "Key: ", space << Get Key );

```

### Get Name

**Sintaxis:** string = jmplivespace &lt;&lt; Get Name()

**Descripción:** Obtiene el nombre del espacio de JMP Live

**JMP Versión agregada:** 18

```jsl

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Find Spaces( Search( "~" ) );

spaceList = jmpliveresult << As Scriptable;
space = spaceList[1];

Write( "Name: ", space << Get Name );

```

### Get Type

**Sintaxis:** string = jmplivespace &lt;&lt; Get Type()

**Descripción:** Obtiene el tipo de espacio de JMP Live (personal o normal)

**JMP Versión agregada:** 18

```jsl

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Find Spaces( Search( "~" ) );

spaceList = jmpliveresult << As Scriptable;
space = spaceList[1];

Write( "Type: ", space << Get Type );

```

