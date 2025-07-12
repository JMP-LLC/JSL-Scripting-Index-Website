# Data Connector Metadata



## 項目のメッセージ

### Get Description

**構文:**  metadata << Get Description()

**説明:** データコネクタの説明を取得する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );

description = metadata << Get Description();

```

### Get Driver

**構文:**  metadata << Get Driver()

**説明:** データコネクタのドライバがある場合にそれを取得する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );

type = metadata << Get Driver();

```

### Get Name

**構文:**  metadata << Get Name()

**説明:** データコネクタ名を取得する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );

name = metadata << Get Name();

```

### Get Path

**構文:** metadaata << Get Path()

**説明:** データコネクタのパスを取得する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );

path = metadata << Get Path();

```

### Get Type

**構文:**  metadata << Get Type()

**説明:** データコネクタの種類を取得する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );

type = metadata << Get Type();

```

### Set Description

**構文:**  metadata << Set Description(description)

**説明:** データコネクタの説明を設定する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );

metadata << Set Description( "My frequently used SQL Server connection." );

```

### Set Name

**構文:**  metadata << Set Name( name )

**説明:** データコネクタ名を設定する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );

metadata << Set Name( "A new Name" );

```

