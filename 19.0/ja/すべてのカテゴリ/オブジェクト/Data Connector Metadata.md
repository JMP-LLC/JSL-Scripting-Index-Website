# Data Connector Metadata



## 項目のメッセージ

### Get Description

**構文:** metadata &lt;&lt; Get Description()

**説明:** データコネクタの説明を取得する。

**JMP追加されたバージョン:** 18

```jsl


description = metadata << Get Description();

```

### Get Driver

**構文:** metadata &lt;&lt; Get Driver()

**説明:** データコネクタのドライバがある場合にそれを取得する。

**JMP追加されたバージョン:** 18

```jsl


type = metadata << Get Driver();

```

### Get Name

**構文:** metadata &lt;&lt; Get Name()

**説明:** データコネクタ名を取得する。

**JMP追加されたバージョン:** 18

```jsl


name = metadata << Get Name();

```

### Get Path

**構文:** metadaata &lt;&lt; Get Path()

**説明:** データコネクタのパスを取得する。

**JMP追加されたバージョン:** 18

```jsl


path = metadata << Get Path();

```

### Get Type

**構文:** metadata &lt;&lt; Get Type()

**説明:** データコネクタの種類を取得する。

**JMP追加されたバージョン:** 18

```jsl


type = metadata << Get Type();

```

### Set Description

**構文:** metadata &lt;&lt; Set Description(description)

**説明:** データコネクタの説明を設定する。

**JMP追加されたバージョン:** 18

```jsl


metadata << Set Description( "My frequently used SQL Server connection." );

```

### Set Name

**構文:** metadata &lt;&lt; Set Name( name )

**説明:** データコネクタ名を設定する。

**JMP追加されたバージョン:** 18

```jsl


metadata << Set Name( "A new Name" );

```

