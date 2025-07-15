# JMP Live Space



## 項目のメッセージ

### Get Description

**構文:** string = jmplivespace &lt;&lt; Get Description()

**説明:** JMP Liveスペースの説明を取得する

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Find Spaces( Search( "~" ) );

spaceList = jmpliveresult << As Scriptable;
space = spaceList[1];

Write( "Description: ", space << Get Description );

```

### Get Key

**構文:** string = jmplivespace &lt;&lt; Get Key()

**説明:** JMP Liveスペースのスペースキーを取得する

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Find Spaces( Search( "~" ) );

spaceList = jmpliveresult << As Scriptable;
space = spaceList[1];

Write( "Key: ", space << Get Key );

```

### Get Name

**構文:** string = jmplivespace &lt;&lt; Get Name()

**説明:** JMP Liveスペースの名前を取得する

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Find Spaces( Search( "~" ) );

spaceList = jmpliveresult << As Scriptable;
space = spaceList[1];

Write( "Name: ", space << Get Name );

```

### Get Type

**構文:** string = jmplivespace &lt;&lt; Get Type()

**説明:** JMP Liveスペースのタイプ(個人または標準)を取得する

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Find Spaces( Search( "~" ) );

spaceList = jmpliveresult << As Scriptable;
space = spaceList[1];

Write( "Type: ", space << Get Type );

```

