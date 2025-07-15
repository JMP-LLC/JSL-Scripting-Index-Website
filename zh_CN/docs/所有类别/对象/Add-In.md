# Add-In



## 项消息

### Auto Load

**语法:** addin &lt;&lt; Auto Load( boolean )

**说明:** 设置在 JMP 启动过程中是否应自动加载插件。

```jsl

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Auto Load( 1 ),
	Print( "Add-In ID Not Found" )
);

```

### Display Name

**语法:** name = addin &lt;&lt; Display Name

**说明:** 返回插件的显示名称。

**示例 1**

```jsl

Names Default To Here( 1 );
addins = Get Addins();
addins << Display Name();

```

**示例 2**

```jsl

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Display Name(),
	Print( "Add-In ID Not Found" )
);

```

### Home Folder

**语法:** folder = addin &lt;&lt; Home Folder

**说明:** 返回插件的主文件夹。

**示例 1**

```jsl

Names Default To Here( 1 );
addins = Get Addins();
addins << Home Folder();

```

**示例 2**

```jsl

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Home Folder(),
	Print( "Add-In ID Not Found" )
);

```

### ID

**语法:** id = addin &lt;&lt; ID

**说明:** 返回插件的唯一 ID。

**示例 1**

```jsl

Names Default To Here( 1 );
addins = Get Addins();
addins << ID();

```

**示例 2**

```jsl

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << ID(),
	Print( "Add-In ID Not Found" )
);

```

### Is Loaded

**语法:** x = addin &lt;&lt; Is Loaded

**说明:** 返回是否当前已加载插件。

**示例 1**

```jsl

Names Default To Here( 1 );
addins = Get Addins();
addins << Is Loaded();

```

**示例 2**

```jsl

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Is Loaded(),
	Print( "Add-In ID Not Found" )
);

```

### Load

**语法:** addin &lt;&lt; Load

**说明:** 加载插件。

```jsl

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Load(),
	Print( "Add-In ID Not Found" )
);

```

### Unload

**语法:** addin &lt;&lt; Unload

**说明:** 卸载插件。

```jsl

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Unload(),
	Print( "Add-In ID Not Found" )
);

```

### Version

**语法:** ver = addin &lt;&lt; Version

**说明:** 返回插件的版本号。

**示例 1**

```jsl

Names Default To Here( 1 );
addins = Get Addins();
addins << Version();

```

**示例 2**

```jsl

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Version(),
	Print( "Add-In ID Not Found" )
);

```

