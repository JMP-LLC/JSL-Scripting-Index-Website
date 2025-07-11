# JMP Live Space



### Get Description

**Syntaxe :** string = jmplivespace << Get Description()

**Description :** Récupère la description de l&apos;espace JMP Live

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Find Spaces( Search( "~" ) );

spaceList = jmpliveresult << As Scriptable;
space = spaceList[1];

Write( "Description: ", space << Get Description );

```

### Get Key

**Syntaxe :** string = jmplivespace << Get Key()

**Description :** Récupère la clé de l&apos;espace pour l&apos;espace JMP Live

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Find Spaces( Search( "~" ) );

spaceList = jmpliveresult << As Scriptable;
space = spaceList[1];

Write( "Key: ", space << Get Key );

```

### Get Name

**Syntaxe :** string = jmplivespace << Get Name()

**Description :** Récupère le nom de l&apos;espace JMP Live

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Find Spaces( Search( "~" ) );

spaceList = jmpliveresult << As Scriptable;
space = spaceList[1];

Write( "Name: ", space << Get Name );

```

### Get Type

**Syntaxe :** string = jmplivespace << Get Type()

**Description :** Récupère le type de l&apos;espace JMP Live (Personnel or Normal)

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Find Spaces( Search( "~" ) );

spaceList = jmpliveresult << As Scriptable;
space = spaceList[1];

Write( "Type: ", space << Get Type );

```

