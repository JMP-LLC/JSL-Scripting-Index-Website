# Data Connector Registry



## 项消息

### Get

**语法:** Data Connector Registry() &lt;&lt; Get ( name )

**说明:** 从注册表中检索数据连接器

**JMP添加的版本:** 18

```jsl

dc = Data Connector Registry() << Get( "com.jmp.sql_server" );

```

### Get Available

**语法:** Data Connector Registry() &lt;&lt; Get Available()

**说明:** 检索注册表中可用的数据连接器的列表

**JMP添加的版本:** 18

```jsl

list = Data Connector Registry() << Get Available();

```

### Get Metadata

**语法:** Data Connector Registry() &lt;&lt; Get Metadata ( name )

**说明:** 从注册表中获取数据连接器元数据

**JMP添加的版本:** 18

```jsl

metadata = Data Connector Registry() << Get Metadata( "com.jmp.sql_server" );

```

### Register

**语法:** Data Connector Registry() &lt;&lt; Register( Path(path), &lt;Name(name)&gt;, &lt;Description(Description)&gt; )

**说明:** 将数据连接器添加至注册表

**JMP添加的版本:** 18

```jsl

Data Connector Registry() << Register(	Path( "$DOCUMENTS/my connector.jmpdc" ),	Name( "My Data Connector" ));

```

### Unregister

**语法:** Data Connector Registry() &lt;&lt; Unregister ( name )

**说明:** 从注册表中删除数据连接器

**JMP添加的版本:** 18

```jsl

dc = Data Connector Registry() << Unregister( "My Data Connector" );

```

