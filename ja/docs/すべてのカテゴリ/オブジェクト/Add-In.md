# Add-In



## 項目のメッセージ

### Auto Load

**構文:** addin &lt;&lt; Auto Load( boolean )

**説明:** JMP起動時にアドインを自動的にロードするかどうかを設定する。

```jsl

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Auto Load( 1 ),
	Print( "Add-In ID Not Found" )
);

```

### Display Name

**構文:** name = addin &lt;&lt; Display Name

**説明:** アドインの表示名を戻す。

**例 1**

```jsl

Names Default To Here( 1 );
addins = Get Addins();
addins << Display Name();

```

**例 2**

```jsl

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Display Name(),
	Print( "Add-In ID Not Found" )
);

```

### Home Folder

**構文:** folder = addin &lt;&lt; Home Folder

**説明:** アドインのホームフォルダを戻す。

**例 1**

```jsl

Names Default To Here( 1 );
addins = Get Addins();
addins << Home Folder();

```

**例 2**

```jsl

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Home Folder(),
	Print( "Add-In ID Not Found" )
);

```

### ID

**構文:** id = addin &lt;&lt; ID

**説明:** アドインの一意のIDを戻す。

**例 1**

```jsl

Names Default To Here( 1 );
addins = Get Addins();
addins << ID();

```

**例 2**

```jsl

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << ID(),
	Print( "Add-In ID Not Found" )
);

```

### Is Loaded

**構文:** x = addin &lt;&lt; Is Loaded

**説明:** アドインが現在ロードされているかどうかを戻す。

**例 1**

```jsl

Names Default To Here( 1 );
addins = Get Addins();
addins << Is Loaded();

```

**例 2**

```jsl

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Is Loaded(),
	Print( "Add-In ID Not Found" )
);

```

### Load

**構文:** addin &lt;&lt; Load

**説明:** アドインをロードする。

```jsl

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Load(),
	Print( "Add-In ID Not Found" )
);

```

### Unload

**構文:** addin &lt;&lt; Unload

**説明:** アドインをアンロードする。

```jsl

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Unload(),
	Print( "Add-In ID Not Found" )
);

```

### Version

**構文:** ver = addin &lt;&lt; Version

**説明:** アドインのバージョン番号を戻す。

**例 1**

```jsl

Names Default To Here( 1 );
addins = Get Addins();
addins << Version();

```

**例 2**

```jsl

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );
If( !Is Missing( addin ),
	addin << Version(),
	Print( "Add-In ID Not Found" )
);

```

