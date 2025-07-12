# WebReport



## 项消息

### Add Image

**语法:** obj << Add Image("path to image" | File("path to image"), <Title(...)>,<Description(...)>)

**说明:** 添加图像以在 Web 报表中发布。可选参数包括标题和说明。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

webreport = New Web Report();
webreport << Add Image(
	File( "$SAMPLE_IMAGES/black rhino footprint.jpg" ),
	Title( "Black Rhino Footprint" )
);

```

### Add Report

**语法:** obj << Add Report( jmpreport, <Title(...)>, <Description(...)>, <Publish Data(0|1)>, <Enable Warnings(0|1)>, <Optimization("Interactivity" | "Performance")> )

**说明:** 添加报表以在 Web 报表中发布。可选参数包括标题和说明。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );
jmpreport = Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
webreport = New Web Report();
webreport << Add Report( jmpreport );

```

### Add Reports

**语法:** obj << Add Reports( reports )

**说明:** 使用默认选项将 JMP 报表列表添加至 Web 报表。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );
Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
Bivariate(
	Y( :weight ),
	X( :height ),
	Automatic Recalc( 1 ),
	Fit Line( {Line Color( {213, 72, 87} )} ),
	Local Data Filter( Add Filter( columns( :sex ) ) )
);
windows = Find All( Reports );
If( N Items( windows ) > 0,
	webreport = New Web Report();
	webreport << Title( "Big Class Reports" );
	webreport << Description( "Multiple reports found in Big Class." );
	webreport << Add Reports( windows );
);

```

### Description

**语法:** obj << Description(...)

**说明:** 设置 Web 报表的说明。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );
jmpreport_1 = Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
jmpreport_2 = Bivariate(
	Y( :weight ),
	X( :height ),
	Automatic Recalc( 1 ),
	Fit Line( {Line Color( {213, 72, 87} )} ),
	Local Data Filter( Add Filter( columns( :sex ) ) )
);
webreport = New Web Report();
webreport << Add Report( jmpreport_1 );
webreport << Add Report( jmpreport_2 );
webreport << Title( "Publish Test" );
webreport << Description( "This is a multiple report publish" );
file = webreport << Save( "$TEMP" );
If( !Is Empty( file ),
	Web( file )
);

```

### Index

**语法:** obj << Index( Title(...), <Description(...)>, <Timestamp(1 | 0)>, <Font(name, style)>, <Logo(image path)>, <CSS(css path)>, <Theme(Default | Orange | Blue | Red | Green | Black)>, <Style(LargeList | SmallList | Grid | Custom)> )

**说明:** 将定制索引页添加至 Web 报表。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );
jmpreport1 = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
jmpreport2 = dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );
webreport = New Web Report();
webreport << Add Report( jmpreport1 );
webreport << Add Report(
	jmpreport2,
	Title( "Oneway Analysis" ),
	Description( "shows height by sex" )
);
webreport << Index(
	Title( "Publish Test" ),
	Description( "This is a multiple report publish with a custom index page" ),
	Timestamp( 1 ),
	Font( "Arial Narrow", "Bold Italic" ),
	Logo( "$SAMPLE_IMAGES/pi.gif" ),
	Theme( "Orange" ),
	Style( "Grid" )
);
file = webreport << Save( "$TEMP" );
If( !Is Empty( file ),
	Web( file )
);

```

### Reset

**语法:** obj << Reset()

**说明:** 将 Web 报表重置为新值。这将清除任何公共指定、文件位置和其他缓存信息。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );
jmpreport = Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
Bivariate(
	Y( :weight ),
	X( :height ),
	Automatic Recalc( 1 ),
	Fit Line( {Line Color( {213, 72, 87} )} ),
	Local Data Filter( Add Filter( columns( :sex ) ) )
);
windows = Find All( Reports );
If( N Items( windows ) > 0,
	webreport = New Web Report();
	webreport << Add Reports( windows );
);
webreport << Reset();
webreport << Add Report( jmpreport );

```

### Save

**语法:** obj << Save ("directory path", <Replace(<0>|<1>)>, <Publish Data(<0>|<1>)>)

**说明:** 将 Web 报表保存至指定的目录。一旦成功，返回已发布报表位置的文件名。本地保存的 Web 报表可以包含嵌入用户数据。将“Publish Data”值设置为 False 时，这将使用静态图像而不是嵌入用户数据来创建报表。默认值为 True。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );
jmpreport = Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
webreport = New Web Report();
webreport << Add Report( jmpreport );
file = webreport << Save( "$TEMP" );
If( !Is Empty( file ),
	Web( file )
);

```

### Title

**语法:** obj << Title(...)

**说明:** 设置 Web 报表的标题。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );
jmpreport_1 = Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
jmpreport_2 = Bivariate(
	Y( :weight ),
	X( :height ),
	Automatic Recalc( 1 ),
	Fit Line( {Line Color( {213, 72, 87} )} ),
	Local Data Filter( Add Filter( columns( :sex ) ) )
);
webreport = New Web Report();
webreport << Add Report( jmpreport_1 );
webreport << Add Report( jmpreport_2 );
webreport << Title( "Publish Test" );
file = webreport << Save( "$TEMP" );
If( !Is Empty( file ),
	Web( file )
);

```

