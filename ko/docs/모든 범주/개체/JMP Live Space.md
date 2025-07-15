# JMP Live Space



## 항목 메시지

### Get Description

**구문:** string = jmplivespace &lt;&lt; Get Description()

**설명:** JMP Live 공간의 설명을 가져옵니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Find Spaces( Search( "~" ) );

spaceList = jmpliveresult << As Scriptable;
space = spaceList[1];

Write( "Description: ", space << Get Description );

```

### Get Key

**구문:** string = jmplivespace &lt;&lt; Get Key()

**설명:** JMP Live 공간의 공간 키를 가져옵니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Find Spaces( Search( "~" ) );

spaceList = jmpliveresult << As Scriptable;
space = spaceList[1];

Write( "Key: ", space << Get Key );

```

### Get Name

**구문:** string = jmplivespace &lt;&lt; Get Name()

**설명:** JMP Live 공간의 이름을 가져옵니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Find Spaces( Search( "~" ) );

spaceList = jmpliveresult << As Scriptable;
space = spaceList[1];

Write( "Name: ", space << Get Name );

```

### Get Type

**구문:** string = jmplivespace &lt;&lt; Get Type()

**설명:** JMP Live 공간의 유형을 가져옵니다(개인 또는 일반).

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Find Spaces( Search( "~" ) );

spaceList = jmpliveresult << As Scriptable;
space = spaceList[1];

Write( "Type: ", space << Get Type );

```

