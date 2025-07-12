# JMP Live Space



## 项消息

### Get Description

**语法:** string = jmplivespace << Get Description()

**说明:** 获取 JMP Live 空间的说明

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Find Spaces( Search( "~" ) );

spaceList = jmpliveresult << As Scriptable;
space = spaceList[1];

Write( "Description: ", space << Get Description );

```

### Get Key

**语法:** string = jmplivespace << Get Key()

**说明:** 获取 JMP Live 空间的空间键

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Find Spaces( Search( "~" ) );

spaceList = jmpliveresult << As Scriptable;
space = spaceList[1];

Write( "Key: ", space << Get Key );

```

### Get Name

**语法:** string = jmplivespace << Get Name()

**说明:** 获取 JMP Live 空间的名称

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Find Spaces( Search( "~" ) );

spaceList = jmpliveresult << As Scriptable;
space = spaceList[1];

Write( "Name: ", space << Get Name );

```

### Get Type

**语法:** string = jmplivespace << Get Type()

**说明:** 获取 JMP Live 空间的类型（个人或正常）

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Find Spaces( Search( "~" ) );

spaceList = jmpliveresult << As Scriptable;
space = spaceList[1];

Write( "Type: ", space << Get Type );

```

