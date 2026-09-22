# JMP Live



### New JMP Live

**構文:** New JMP Live(Connection("Connection Name"), &lt;Prompt("No" | "If Needed")&gt;)

**説明:** 保存されている接続情報を使ってJMP Liveへの接続を開始する。Connectionはオプションで、「接続の管理」でデフォルトに指定されている接続がデフォルトで使用される。Connectionが指定されている場合は、名前で接続先が検索される。Promptはオプションで、デフォルトは「No」。Promptの有効な値は「Yes」、「No」、「If Needed」。「Yes」にするとログイン情報を求めるプロンプトが必ず表示される。「No」にするとログイン情報を求めるプロンプトは表示されない。「If Needed」にすると現在保存されているログイン情報が有効でない場合のみプロンプトが表示される。JMP Live接続オブジェクトを戻す。

**JMP追加されたバージョン:** 15

**例 1**

```jsl

jmplive = New JMP Live();

```

**例 2**

```jsl

jmplive = New JMP Live( Connection( "MyJMPLive" ), Prompt( No ) );

```

**例 3**

```jsl

jmplive = New JMP Live( Connection( "MyJMPLive" ), Prompt( If Needed ) );

```

### New JMP Live Content

**構文:** obj = New JMP Live Content(jmpreport|Image(path_to_image)|Data(jmpdatatable)|Map(jmpmap), &lt;Title(...)&gt;, &lt;Description(...)&gt;, &lt;Publish Data(0|1)&gt;, &lt;Enable Warnings(0|1)&gt;, &lt;Optimization("Interactivity" | "Performance")&gt;

**説明:** JMP Liveで発行するインタラクティブなコンテンツを作成する。

	最初のパラメータは必須で、コンテンツに使用するデータを指定する。データには、レポート・データテーブル・地図・画像が使用できる。

	TitleとDescriptionは、発行するコンテンツのカスタマイズに使用される。その他のパラメータは任意で、レポートコンテンツのカスタマイズのみで使用される。

	Publish Dataは、レポートで使用されているデータがJMP Liveに発行されるかどうかを示す。レポートのデータはデフォルトでは発行される。

	Enable Warningsは、管理図の警告を有効にすべきかどうかを指定する。管理図の警告はデフォルトでは無効。

	Optimizationは、JMP Liveへのレポートの発行方法をカスタマイズするのに使用する。デフォルトでは、レポートは対話性を最適化した形で発行される。

**JMP追加されたバージョン:** 17

**例 1**

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );dist = bc << Run Script( "Distribution" );liveconnection = New JMP Live();jmpliveresult = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Folder for Sample Content" ));folder = jmpliveresult << As Scriptable;content = New JMP Live Content(	dist,	Title( "Distribution Web Report" ),	Description( "This report was created with the sample found in the Scripting Index" ),	Publish Data( 1 ),	Optimization( "Interactivity" ));jmpliveresult = liveconnection << Publish( content, Folder( folder ) );

```

**例 2**

```jsl

liveconnection = New JMP Live();jmpliveresult = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Folder for Data Content" ));folder = jmpliveresult << As Scriptable;content = New JMP Live Content(	Data( "$SAMPLE_DATA/Big Class.jmp" ),	Title( "Big Class Sample Table" ),	Description(		"This data table was published with the sample found in the Scripting Index"	));jmpliveresult = liveconnection << Publish( content, Folder( folder ) );

```

**例 3**

```jsl

liveconnection = New JMP Live();jmpliveresult = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Folder for Map Content" ));folder = jmpliveresult << As Scriptable;content = New JMP Live Content( Map( "$SAMPLE_DATA/S4-XY.jmp" ) );jmpliveresult = liveconnection << Publish( content, Folder( folder ) );

```

**例 4**

```jsl

liveconnection = New JMP Live();jmpliveresult = liveconnection << Create Folder(	Parent Folder( "~" ),	Title( "Folder for Image Content" ));folder = jmpliveresult << As Scriptable;imageContent = New JMP Live Content(	Image( "$SAMPLE_IMAGES/black rhino footprint.jpg" ),	Title( "Rhino Footprint" ),	Description( "An image of a rhino footprint from the Sample Data" ));jmpliveresult = liveconnection << Publish( imageContent, Folder( folder ) );

```

