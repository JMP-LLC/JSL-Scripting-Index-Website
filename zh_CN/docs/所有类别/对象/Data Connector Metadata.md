# Data Connector Metadata



## 项消息

### Get Description

**语法:**  metadata << Get Description()

**说明:** 获取数据连接器说明

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

description = metadata << Get Description();

```

### Get Driver

**语法:**  metadata << Get Driver()

**说明:** 获取数据连接器驱动程序（若存在）。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

type = metadata << Get Driver();

```

### Get Name

**语法:**  metadata << Get Name()

**说明:** 获取数据连接器名称

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

name = metadata << Get Name();

```

### Get Path

**语法:** metadaata << Get Path()

**说明:** 获取数据连接器路径

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

path = metadata << Get Path();

```

### Get Type

**语法:**  metadata << Get Type()

**说明:** 获取数据连接器类型

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

type = metadata << Get Type();

```

### Set Description

**语法:**  metadata << Set Description(description)

**说明:** 设置数据连接器说明

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

metadata << Set Description( "My frequently used SQL Server connection." );

```

### Set Name

**语法:**  metadata << Set Name( name )

**说明:** 设置数据连接器名称

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

metadata << Set Name( "A new Name" );

```

