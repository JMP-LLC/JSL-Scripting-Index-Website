# JMP Live Content



## 关联的构造器

### JMP Live Content

**语法:** obj = New JMP Live Content(jmpreport|Image(path_to_image)|Data(jmpdatatable)|Map(jmpmap), <Title(...)>, <Description(...)>, <Publish Data(0|1)>, <Enable Warnings(0|1)>, <Optimization("Interactivity" | "Performance")>

**说明:** 创建用于在 JMP Live 中发布的交互式内容。

	第一个参数是必需的，它指定要用于内容的数据。该数据可以是报表、数据表、地图或图像。

	“标题”和“说明”用于定制将要发布的任何类型的内容。其余参数是可选的，仅用于定制报表内容。

	“发布数据”指示报表中使用的数据是否发布至 JMP Live。默认发布报表的数据。

	“启用警告”指示是否应为报表启用“控制图警告”。默认禁用“控制图警告”。

	“优化”用于定制报表发布至 JMP Live 的方式。默认发布报表是为了支持更强的交互性。

**示例 1**

```jsl

Names Default To Here( 1 );
bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
dist = bc << Run Script( "Distribution" );

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Folder for Sample Content" )
);
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content(
	dist,
	Title( "Distribution Web Report" ),
	Description( "This report was created with the sample found in the Scripting Index" ),
	Publish Data( 1 ),
	Optimization( "Interactivity" )
);

jmpliveresult = liveconnection << Publish( content, Folder( folder ) );

```

**示例 2**

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Folder for Data Content" )
);
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content(
	Data( "$SAMPLE_DATA/Big Class.jmp" ),
	Title( "Big Class Sample Table" ),
	Description(
		"This data table was published with the sample found in the Scripting Index"
	)
);

jmpliveresult = liveconnection << Publish( content, Folder( folder ) );

```

**示例 3**

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Folder for Map Content" )
);
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content( Map( "$SAMPLE_DATA/S4-XY.jmp" ) );

jmpliveresult = liveconnection << Publish( content, Folder( folder ) );

```

**示例 4**

```jsl

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Folder for Image Content" )
);
folder = jmpliveresult << As Scriptable;

imageContent = New JMP Live Content(
	Image( "$SAMPLE_IMAGES/black rhino footprint.jpg" ),
	Title( "Rhino Footprint" ),
	Description( "An image of a rhino footprint from the Sample Data" )
);

jmpliveresult = liveconnection << Publish( imageContent, Folder( folder ) );

```

