# Preferences



## 项消息

### Add Color Theme

**语法:** obj << Add Color Theme( Add Color Theme({"Name", <type|style>, {color, ..., <Missing(color)>}, <{position, ...}>}, <color blindness discernability>) )

**说明:** 创建一个新的自定义颜色主题，并将其注册到主题选择器。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Set Preference(
	Add Color Theme(
		{"Sunny", {{255, 255, 0}, {255, 128, 64}, {255, 0, 0}, {163, 12, 27}}, {0, 0.5,
		0.642857142857143, 1}}
	)
);
Show( Get Color Theme Detail( "Sunny" ) );

```

### Add Rows default number of rows

**语法:** obj << Add Rows default number of rows( number )

**说明:** “添加行”窗口中的初始行数

**JMP添加的版本:** 18

### Add Rows recall last value

**语法:** obj << Add Rows recall last value( state=0|1 )

**说明:** 最后输入的值用于要添加的行数

**JMP添加的版本:** 18

### Add files opened by scripts to the Recent Files list

**语法:** obj << Add files opened by scripts to the Recent Files list( state=0|1 )

**说明:** 更改该功能的默认设置: 使用 JSL Open() 函数打开的文件是否添加到“最近使用的文件”列表。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Add files opened by scripts to the Recent Files list( 1 ) );

```

### Allow 16 Bit List Check Compression

**语法:** obj << Allow 16 Bit List Check Compression( state=0|1 )

**说明:** 指定当列中有超过 255 个非重复值时是否使用“列表检查”进行值编码。若进行编码，则 JMP 14 和更低版本无法读取这些列。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Allow 16 Bit List Check Compression( 1 ) );

```

### Allow Compress Selected Columns to create compact columns

**语法:** obj << Allow Compress Selected Columns to create compact columns( state=0|1 )

**说明:** 若使用更少的磁盘空间，“压缩选定列”将压缩列。

**JMP添加的版本:** 18

### Allow Unquoted Strings in JSL

**语法:** obj << Allow Unquoted Strings in JSL( "否"|"是（带警告）"|"是（无警告）" )

### Allow mixed ISO format patterns

**语法:** obj << Allow mixed ISO format patterns( state=0|1 )

**说明:** 允许格式模式日期同时使用 ISO 周 (<ww>) 和非 ISO 年（<YYYY> 或 <YY>），以及同时使用非 ISO 周（<WW1> 或 <WW2>）和 ISO 年（<yyyy> 或 <yy>）。ISO 周和年与非 ISO 周和年不兼容。它们不应混在一起。默认情况下，JMP 不允许创建此类日期格式。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Allow mixed ISO format patterns( 1 ) );

```

### Allow short numeric data format

**语法:** obj << Allow short numeric data format( state=0|1 )

**说明:** 更改允许短数值数据格式的默认设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Allow short numeric data format( 1 ) );

```

### Auto Hide Menus

**语法:** obj << Auto Hide Menus( "始终"|"从不"|"基于窗口大小" )

**说明:** 指定 JMP 是否及何时自动隐藏菜单和工具栏。注意: 仅在 Windows 中可用。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Auto Hide Menus( "Always" ) );

```

### Auto Run Recent JSL

**语法:** obj << Auto Run Recent JSL( state=0|1 )

**说明:** 更改自动运行最近提交的 JSL 脚本的默认行为。注意: 仅在 Windows 中可用。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will affect 
//the default behavior of JMP. 

Preferences[1] << Set( Auto Run Recent JSL( 1 ) );

```

### Auto match brackets in script editor

**语法:** obj << Auto match brackets in script editor( state=0|1 )

**说明:** 更改脚本窗口中括号自动配对的默认设置。注意: 仅在 Windows 中可用。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will affect 
//the default behavior of JMP. 

Preferences[1] << Set( Auto match brackets in script editor( 1 ) );

```

### Autosave maximum data table columns

**语法:** obj << Autosave maximum data table columns( number )

**说明:** 要自动保存的数据表列的最大数目。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Autosave Maximum Data Table Columns( 1000 ) );

```

### Autosave maximum data table rows

**语法:** obj << Autosave maximum data table rows( number )

**说明:** 要自动保存的数据表行的最大数目。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Autosave Maximum Data Table Rows( 10000 ) );

```

### Autosave timeout

**语法:** obj << Autosave timeout( number )

**说明:** 自动保存超时间隔以分钟为单位。一达到超时间隔即保存所有打开的和修改的文件。默认值为“0”，该值指示不执行自动保存处理。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Autosave Timeout( 15 ) );

```

### Axis Title Above

**语法:** obj << Axis Title Above( state=0|1 )

**说明:** 更改图形中 y 轴标签的位置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Axis Title Above( 1 ) );

```

### Background Color

**语法:** obj << Background Color( color )

**说明:** 更改所有窗口中背景颜色的默认设置。注意: 仅适用于 Windows 系统。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Background Color( "Light Blue" ) );

```

### Bad to Good Color Theme

**语法:** obj << Bad to Good Color Theme( "name" )

**说明:** 更改所有图形中连续颜色主题的默认设置。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Show( Get Preference( Continuous Color Theme ) );
Set Preference( Bad to Good Color Theme( "Green to Purple" ) );
Show( Get Preference( Bad to Good Color Theme ) );

```

### Box Plot Line Width

**语法:** obj << Box Plot Line Width( number )

**说明:** 更改箱线图的默认线条粗细。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will
//affect the default behavior of JMP.

Preferences[1] << Set( Box Plot Line Width( 2 ) );

```

### Bypass Proxy

**语法:** obj << Bypass Proxy( text )

**说明:** 为特定主机禁用代理

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Bypass Proxy( "www.example.com" ) );

```

### Categorical Color Theme

**语法:** obj << Categorical Color Theme( "name" )

**说明:** 更改所有图形中类别颜色主题的默认设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Show( Get Preference( Categorical Color Theme ) );
Set Preference( Categorical Color Theme( "Jet" ) );
Show( Get Preference( Categorical Color Theme ) );

```

### Categorical graph type

**语法:** obj << Categorical graph type( "自动"|"直方图"|"条形图"|"热图"|"马赛克图"|"运行图"|"运行图" )

**说明:** 要在名义型和有序型列的列标题中显示的默认图形。

**JMP添加的版本:** 18

### Classic Data Table Selection

**语法:** obj << Classic Data Table Selection( state=0|1 )

**说明:** 在数据表中启用经典的点击选择行为。在这种模式中，选择一列对行选择没有影响，选择一行对列选择没有影响。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Classic Data Table Selection( 1 ) );

```

### Color Mode

**语法:** obj << Color Mode( "使用系统设置"|"浅色"|"深色"|"高对比度" )

**说明:** 更改 JMP 是使用特定的窗口颜色主题还是接受操作系统设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will affect 
//the default behavior of JMP. 

Preferences[1] << Set( Color Mode( Dark ) );

```

### Columns Manager

**语法:** obj << Columns Manager

**JMP添加的版本:** 18

### Conditional formatting rules

**语法:** obj << Conditional formatting rules

**说明:** 创建自定义条件规则，它显示或不显示是根据“显示条件格式”首选项设置而定的。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences(
	Conditional Formatting Rules(
		RuleSet(
			RuleName( "My Special Rule" ),
			GreaterThan(
				Value( 0 ),
				Inclusive( 0 ),
				Format(
					Text Color( "Medium Dark Red" ),
					Back Color( "Light Yellow" ),
					Annotation( 1 ),
					FontStyle( Bold )
				)
			)
		)
	)
);

```

### Continuous Color Theme

**语法:** obj << Continuous Color Theme( "name" )

**说明:** 更改所有图形中连续颜色主题的默认设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Show( Get Preference( Continuous Color Theme ) );
Set Preference( Continuous Color Theme( "Green to Purple" ) );
Show( Get Preference( Continuous Color Theme ) );

```

### Continuous graph type

**语法:** obj << Continuous graph type( "自动"|"直方图"|"条形图"|"热图"|"马赛克图"|"运行图"|"运行图" )

**说明:** 要在连续列的列标题中显示的默认图形。

**JMP添加的版本:** 18

### Custom Locale Settings

**语法:** obj << Custom Locale Settings

**说明:** 覆盖语言/区域设置，例如小数分隔符和千位分隔符

**JMP添加的版本:** 16

**示例 1**

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Custom Locale Settings( Decimal Separator( "," ) ) );
Print( Format( 1.25, "Best" ) );
Preferences( Custom Locale Settings( Decimal Separator( "." ) ) );
Print( Format( 1.25, "Best" ) );
Preferences( Custom Locale Settings( Decimal Separator() ) );

```

**示例 2**

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

// Clear all locale overrides...
Preferences( Custom Locale Settings( Reset to Defaults ) );

```

**示例 3**

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Get Preferences( Custom Locale Settings );

```

### Data Filter Auto Clear

**语法:** obj << Data Filter Auto Clear( state=0|1 )

### Data Filter Check Box Display

**语法:** obj << Data Filter Check Box Display( state=0|1 )

**说明:** 分类过滤器列默认显示为复选框。

### Data Filter Conditional

**语法:** obj << Data Filter Conditional( state=0|1 )

### Data Filter Group is AND

**语法:** obj << Data Filter Group is AND( state=0|1 )

### Data Filter Histograms and Bars

**语法:** obj << Data Filter Histograms and Bars( state=0|1 )

**说明:** 为可用的过滤器列显示直方图和直条

**JMP添加的版本:** 15

### Data Filter Include Check

**语法:** obj << Data Filter Include Check( state=0|1 )

### Data Filter Select Check

**语法:** obj << Data Filter Select Check( state=0|1 )

### Data Filter Show Check

**语法:** obj << Data Filter Show Check( state=0|1 )

### Data Table Actions

**语法:** obj << Data Table Actions( state=0|1 )

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Data Table Actions( 1 ) );

```

### Data Table Title on Output

**语法:** obj << Data Table Title on Output( state=0|1 )

**说明:** 更改在报表输出的顶部显示数据表名的默认设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Data Table Title on Output( 1 ) );

```

### Date Title on Output

**语法:** obj << Date Title on Output( state=0|1 )

**说明:** 更改在输出标题中显示日期的默认设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Date Title on Output( 1 ) );

```

### Default Field Width

**语法:** obj << Default Field Width( number )

**说明:** 更改用于新数值列的默认字段宽度。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Default Field Width( 16 ) );

```

### Default Project Show Bookmarks

**语法:** obj << Default Project Show Bookmarks( state=0|1 )

**说明:** 在新项目中显示“项目”窗格

**JMP添加的版本:** 16

### Default Project Show Contents

**语法:** obj << Default Project Show Contents( state=0|1 )

**说明:** 在新项目中显示“内容”窗格

**JMP添加的版本:** 16

### Default Project Show Log

**语法:** obj << Default Project Show Log( state=0|1 )

**说明:** 在新项目中显示“日志”窗格

**JMP添加的版本:** 16

### Default Project Show Recent Files

**语法:** obj << Default Project Show Recent Files( state=0|1 )

**说明:** 在新项目中显示“最近使用的文件”窗格

**JMP添加的版本:** 16

### Default Project Show Workspace

**语法:** obj << Default Project Show Workspace( state=0|1 )

**说明:** 在新项目中显示“工作区”窗格

**JMP添加的版本:** 16

### Display JSL SAS results as HTML

**语法:** obj << Display JSL SAS results as HTML( state=0|1 )

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( "Display JSL SAS results as HTML"n( 1 ) );

```

### Display indexes in English

**语法:** obj << Display indexes in English( state=0|1 )

**说明:** 以英语显示对象脚本索引、JSL 函数索引以及显示框索引。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Display indexes in English( 1 ) );

```

### Double Click Opens Column Info

**语法:** obj << Double Click Opens Column Info( state=0|1 )

**说明:** 双击列标题将打开列信息对话框而不是编辑列名。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Double Click Opens Column Info( 1 ) );

```

### Empty Project at Startup

**语法:** obj << Empty Project at Startup( "始终"|"若未打开其他项目"|"从不" )

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Create an empty project when starting JMP( "Always" ) );

```

### Emulate Zoom Mode

**语法:** obj << Emulate Zoom Mode( state=0|1 )

**说明:** 指定 JMP 是否在最大化窗口中包含窗口列表

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Emulate Zoom Mode( 1 ) );

```

### Enable Advanced Linear Algebra Routines

**语法:** obj << Enable Advanced Linear Algebra Routines( state=0|1 )

**说明:** 更改在多个平台和 JSL 函数中使用的线性代数计算例程。选中时，该首选项允许基于 BLAS 和 LAPACK 逻辑库的高级线性代数例程。JMP 文档包含有关该首选项所影响的平台和 JSL 函数的更多信息。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enable Advanced Linear Algebra Routines( 0 ) );

```

### Enable Telemetry

**语法:** obj << Enable Telemetry( state=0|1 )

### Enable direct input from IME

**语法:** obj << Enable direct input from IME( state=0|1 )

### End Menu Item Marking After Deadline

**语法:** obj << End Menu Item Marking After Deadline( state=0|1 )

**说明:** 时限过后的菜单项将不再被标记

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( End Menu Item Marking After Deadline( 0 ) );

```

### Enhanced Log Alternate Table Rows

**语法:** obj << Enhanced Log Alternate Table Rows( state=0|1 )

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Shade Alternate Table Rows( 1 ) );

```

### Enhanced Log Color By Window

**语法:** obj << Enhanced Log Color By Window( state=0|1 )

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Color By Window( 1 ) );

```

### Enhanced Log Color By Window Color Theme

**语法:** obj << Enhanced Log Color By Window Color Theme( "name" )

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Show( Get Preference( Enhanced Log Color By Window Color Theme ) );
Set Preference( Enhanced Log Color By Window Color Theme( "Jet" ) );
Show( Get Preference( Enhanced Log Color By Window Color Theme ) );

```

### Enhanced Log Filter Action

**语法:** obj << Enhanced Log Filter Action( state=0|1 )

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Filter Action( 1 ) );

```

### Enhanced Log Filter Error

**语法:** obj << Enhanced Log Filter Error( state=0|1 )

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Filter Error( 1 ) );

```

### Enhanced Log Filter Log

**语法:** obj << Enhanced Log Filter Log( state=0|1 )

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Filter Log( 1 ) );

```

### Enhanced Log Filter Result

**语法:** obj << Enhanced Log Filter Result( state=0|1 )

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Filter Result( 1 ) );

```

### Enhanced Log Filter Script

**语法:** obj << Enhanced Log Filter Script( state=0|1 )

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Filter Script( 1 ) );

```

### Enhanced Log Filter Warn

**语法:** obj << Enhanced Log Filter Warn( state=0|1 )

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Filter Warn( 1 ) );

```

### Enhanced Log Origin Column

**语法:** obj << Enhanced Log Origin Column( state=0|1 )

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Origin Column( 1 ) );

```

### Enhanced Log Result Column

**语法:** obj << Enhanced Log Result Column( state=0|1 )

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Result Column( 1 ) );

```

### Enhanced Log Shade Table Cells

**语法:** obj << Enhanced Log Shade Table Cells( state=0|1 )

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Shade Table Cells( 1 ) );

```

### Enhanced Log Shade Table Headings

**语法:** obj << Enhanced Log Shade Table Headings( state=0|1 )

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Shade Table Headings( 1 ) );

```

### Enhanced Log Table Column Borders

**语法:** obj << Enhanced Log Table Column Borders( state=0|1 )

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Table Column Borders( 1 ) );

```

### Enhanced Log Table Heading Column Borders

**语法:** obj << Enhanced Log Table Heading Column Borders( state=0|1 )

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Table Heading Column Borders( 1 ) );

```

### Enhanced Log Table Row Borders

**语法:** obj << Enhanced Log Table Row Borders( state=0|1 )

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Table Row Borders( 1 ) );

```

### Enhanced Log Timestamp Column

**语法:** obj << Enhanced Log Timestamp Column( state=0|1 )

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Timestamp Column( 1 ) );

```

### Enhanced Log Underline Table Headings

**语法:** obj << Enhanced Log Underline Table Headings( state=0|1 )

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Underline Table Headings( 1 ) );

```

### Enter Key moves down

**语法:** obj << Enter Key moves down( state=0|1 )

**说明:** 更改 Enter 键移动的默认设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enter Key moves down( 1 ) );

```

### Evaluate OnOpen Scripts

**语法:** obj << Evaluate OnOpen Scripts( "提示"|"从不"|"始终" )

**说明:** 设置为“从不”以绝对不允许运行 OnOpen 脚本。不应运行来自未知源的脚本。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Evaluate OnOpen Scripts( "Prompt" ) );

```

### Excel Open Method

**语法:** obj << Excel Open Method( "打开所有工作表"|"选择单个工作表"|"使用 Excel 向导" )

### Fast Marker Threshold

**语法:** obj << Fast Marker Threshold( number )

**说明:** 更改刷新图形标记的默认设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Fast Marker Threshold( 100000 ) );

```

### Fill Hollow Markers

**语法:** obj << Fill Hollow Markers( state=0|1 )

**说明:** 空心标记将使用图形背景色填充

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Fill Hollow Markers( 1 ) );

```

### Fill Selection Color

**语法:** obj << Fill Selection Color( color )

**说明:** 当“填充选择模式”为“选中项相同颜色”时填充选择的颜色。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Fill Selection Color( "Red" ) );

```

### Fill Selection Fade

**语法:** obj << Fill Selection Fade( number )

**说明:** 更改未选中填充变淡程度的默认设置。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Fill Selection Fade( 50 ) );

```

### Fill Selection Mode

**语法:** obj << Fill Selection Mode( "选中项带图案"|"选中项变深"|"选中项带轮廓"|"选中项相同颜色"|"未选中项变淡" )

**说明:** 更改为填充区域指出选中项的方式。默认方式带有图案。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Fill Selection Mode( "Selected Patterned" ) );

```

### Formula Evaluation

**语法:** obj << Formula Evaluation( "空闲时"|"立即" )

**说明:** 确定公式计算是在空闲时进行还是立即在前台运行

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Formula Evaluation( "Immediate" ) );

```

### Frame Border

**语法:** obj << Frame Border( state=0|1 )

**说明:** 更改在所有图形非轴两侧显示框架边框的默认设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Frame Border( 1 ) );

```

### Frame Color

**语法:** obj << Frame Color( color )

**说明:** 更改在所有图形中绘制框架边框颜色的默认设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Frame Color( "Green" ) );

```

### Get

**语法:** obj << Get

**说明:** 返回设置指定首选项的脚本。

```jsl

Names Default To Here( 1 );
a = Preferences[1] << Get( Show the Tip of the Day at startup );
Show( a );

```

### Get Script

**语法:** obj << Get Script

**说明:** 返回设置首选项的脚本。

```jsl

Names Default To Here( 1 );
a = Preferences[1] << Get Script;
Show( a );

```

### Graph Background Color

**语法:** obj << Graph Background Color( color )

**说明:** 更改所有图形中背景色的默认设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Graph Background Color( "Light Green" ) );

```

### Graph Border

**语法:** obj << Graph Border( state=0|1 )

**说明:** 更改在所有图形中显示图形边框的默认设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Graph Border( 1 ) );

```

### Graph Height

**语法:** obj << Graph Height( number )

**说明:** 更改所有图形的图形高度的默认设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Graph Height( 1 ) );

```

### Graph Marker

**语法:** obj << Graph Marker( marker )

**说明:** 更改所有图形中标记形状的默认设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Graph Marker( "Diamond" ) );

```

### Graph Marker Theme

**语法:** obj << Graph Marker Theme( "标准"|"空心"|"实心"|"成对"|"经典"|"字母数字" )

**说明:** 更改所有图形中标记主题的默认设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Graph Marker Theme( "Classic" ) );

```

### Graph Marker Unselected Fade

**语法:** obj << Graph Marker Unselected Fade( number )

**说明:** 更改在所有图形中显示框架边框的默认设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Graph Marker Unselected Fade( 45 ) );

```

### Graph Marker size

**语法:** obj << Graph Marker size( "点"|"小"|"中"|"大"|"特大"|"超大"|"最大" )

**说明:** 更改所有图形中标记大小的默认设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Graph Marker size( "Large" ) );

```

### HDF5PathDelimiter

**语法:** obj << HDF5PathDelimiter( text )

**JMP添加的版本:** 17

### Header summary heat map color theme

**语法:** obj << Header summary heat map color theme( "name" )

**说明:** 更改所有图形中连续颜色主题的默认设置。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will
//affect the default behavior of JMP.
Show( Get Preference( Header summary heat map color theme ) );
Set Preference( Header summary heat map color theme( "Green to Purple" ) );
Show( Get Preference( Header summary heat map color theme ) );

```

### Hide 'Find and Replace' window

**语法:** obj << Hide &apos;Find and Replace&apos; window( state=0|1 )

**说明:** 更改在查找和替换后保持“查找和替换”窗口为打开状态的默认设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( "Hide 'Find and Replace' window"n( 1 ) );

```

### Hide ODBC Connection Strings

**语法:** obj << Hide ODBC Connection Strings( state=0|1 )

### Hide Overlapping Labels

**语法:** obj << Hide Overlapping Labels( state=0|1 )

**说明:** 隐藏图形中的重叠标签。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Hide Overlap Labels( 0 ) );

```

### Histogram Color

**语法:** obj << Histogram Color( color )

**说明:** 更改直方图的默认颜色。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Histogram Color( "Light Yellow" ) );

```

### Histogram Line Color

**语法:** obj << Histogram Line Color( color )

**说明:** 更改直方图的默认线条颜色。

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 
 
Preferences[1] << Set( Histogram Line Color( "Red" ) );

```

### Hover Help

**语法:** obj << Hover Help( state=0|1 )

**说明:** 工具提示样式有助于对鼠标环形移动作出响应

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Hover Help( 1 ) );

```

### Image Format for PowerPoint

**语法:** obj << Image Format for PowerPoint( "默认 OS 格式"|"PNG"|"JPEG" )

### Include Responses Not in Data

**语法:** obj << Include Responses Not in Data( state=0|1 )

**说明:** 显示数据表中未出现的响应的标签。

### Initial JMP Window

**语法:** obj << Initial JMP Window( "主窗口"|"JMP 起始页"|"窗口列表" )

**说明:** 确定 JMP 启动时创建的 JMP 窗口

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Initial JMP Window( "Home Window" ) );

```

### Initial Log Window

**语法:** obj << Initial Log Window( state=0|1 )

**说明:** 更改显示初始日志窗口的默认设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Initial Log Window( 1 ) );

```

### Initial Splash Window

**语法:** obj << Initial Splash Window( state=0|1 )

**说明:** 更改显示初始启动画面窗口的默认设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Initial Splash Window( 1 ) );

```

### Inside Ticks

**语法:** obj << Inside Ticks( state=0|1 )

**说明:** 更改在图形框架内侧显示轴刻度标的默认设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Inside Ticks( 1 ) );

```

### Interactive HTML Color

**语法:** obj << Interactive HTML Color( "浅色背景"|"深色背景"|"灰色背景" )

**说明:** 更改交互式 HTML 颜色主题的默认设置。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Interactive HTML Color( "Light Background" ) );

```

### Internet Open Timeout

**语法:** obj << Internet Open Timeout( number )

**说明:** “从 Internet 打开”将等待很长时间才放弃。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Internet Open Timeout( 300 /* 5 minutes */ ) );

```

### JMP Live Timeout

**语法:** obj << JMP Live Timeout( number )

**说明:** 设置发布至 JMP Live 的超时值。默认值为 180 秒。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( JMP Live Timeout( 120 ) );

```

### JMP Theme

**语法:** obj << JMP Theme( "传统"|"舒适"|"JMP Live"|"JMP Clinical" )

**说明:** 切换所有 JMP 的主题。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );

restore theme = Get Preference( JMP Theme );
Set Preference( JMP Theme( "Traditional" ) );
Wait( 2 );
Set Preference( JMP Theme( "Comfortable" ) );
Wait( 2 );
Set Preference( JMP Theme( "JMP Live" ) );
Wait( 2 );
restore theme;

```

### JSL save column groups with group name

**语法:** obj << JSL save column groups with group name( state=0|1 )

**说明:** 当带列的列表保存脚本时，若列的列表是列组，则使用“列组”语法

**JMP添加的版本:** 16

### JSS Dir

**语法:** obj << JSS Dir( text )

**说明:** Changes the JSS directory for development use.

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Set Preference( JSS Dir( "C:\My\Path\To\jss\" ) );

```

### Journal Freeze Backward Compatible

**语法:** obj << Journal Freeze Backward Compatible( state=0|1 )

### Language Switch Warning

**语法:** obj << Language Switch Warning( state=0|1 )

**说明:** 更改检测到语言中的更改时发出警告的默认设置。注意: 仅在 Windows 中可用。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Language Switch Warning( 1 ) );

```

### Laser pointer

**语法:** obj << Laser pointer( "关"|"紫色"|"蓝色"|"绿色"|"黄色"|"橙色"|"红色" )

**说明:** 更改显示激光笔（用于强调报表的某些部分）的默认设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Laser pointer( "Purple" ) );

```

### Line Width

**语法:** obj << Line Width( number )

**说明:** 更改图形内容的默认线条粗细。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Line Width( 2 ) );

```

### Log Mode

**语法:** obj << Log Mode( "增强"|"文本" )

**说明:** 更改如何显示日志的默认设置。这包括主日志和项目日志。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Log Mode( "Text" ) );

```

### Log Window Height

**语法:** obj << Log Window Height( number )

**说明:** 更改日志窗口大小的默认设置。注意: 仅在 Windows 中可用。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will affect 
//the default behavior of JMP. 

Preferences[1] << Set( Log Window Height( 200 ) );

```

### Major Grid Line Color

**语法:** obj << Major Grid Line Color( color )

**说明:** 更改图形中主网格线的默认颜色。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Major Grid Line Color( "Blue" ) );

```

### Major Grid Lines

**语法:** obj << Major Grid Lines( state=0|1 )

**说明:** 更改在图形中显示主网格线的默认设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Major Grid Lines( 1 ) );

```

### Mark Menu Items Added Since

**语法:** obj << Mark Menu Items Added Since( "无"|"当前版本"|"18"|"17"|"16"|"15"|"14" )

**说明:** 标记晚于特定 JMP 版本的菜单项。

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Mark Items Added Since( "16" ) );

```

### Marker Label Color

**语法:** obj << Marker Label Color( color )

**说明:** 当“标记标签颜色样式”设置为“固定”时标记标签的颜色

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Marker Label Color( "Blue" ) );

```

### Marker Label Color Style

**语法:** obj << Marker Label Color Style( "标记颜色"|"标记颜色变淡"|"固定颜色" )

**说明:** 更改标记标签的默认颜色样式

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Marker Label Color Style( "Marker Color" ) );

```

### Marker Selection Mode

**语法:** obj << Marker Selection Mode( "未选中项变淡"|"选中项变大"|"选中项带光环"|"选中项带轮廓"|"选中项相同颜色" )

**说明:** 更改标记选择模式的默认设置。默认设置为“未选中项变淡”。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Marker Selection Mode( "Selection Haloed" ) );

```

### Maximum Auto Size Column List Width

**语法:** obj << Maximum Auto Size Column List Width( number )

**JMP添加的版本:** 18

### Maximum JMP Call Depth

**语法:** obj << Maximum JMP Call Depth( number )

**说明:** 更改 JMP 最大调用深度的默认设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Maximum JMP call depth( 50 ) );

```

### Maximum Parse Depth

**语法:** obj << Maximum Parse Depth( number )

**说明:** 更改“最大解析深度”的默认设置。默认值为 512。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Maximum Parse Depth( 600 ) );

```

### Maximum Symbol Evaluation Recursion Depth

**语法:** obj << Maximum Symbol Evaluation Recursion Depth( number )

**说明:** 更改“最大符号计算递归深度”的默认设置。默认值为 25。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Maximum Symbol Evaluation Recursion Depth( 50 ) );

```

### Minor Grid Line Color

**语法:** obj << Minor Grid Line Color( color )

**说明:** 更改图形中副网格线的默认颜色。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Minor Grid Line Color( "Black" ) );

```

### Minor Grid Lines

**语法:** obj << Minor Grid Lines( state=0|1 )

**说明:** 更改在图形中显示副网格线的默认设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Minor Grid Lines( 1 ) );

```

### New Project Template

**语法:** obj << New Project Template( text )

**说明:** 用于新的空项目的文件。

**JMP添加的版本:** 16

### New character columns default to compact

**语法:** obj << New character columns default to compact( state=0|1 )

**说明:** 新字符列或切换为字符数据类型的列自动成为紧凑列

**JMP添加的版本:** 18

### OAuth2 Authentication Browser

**语法:** obj << OAuth2 Authentication Browser( text=Default )

**说明:** 使用指定的浏览器类型登录 OAuth2 服务器。有效值为“默认”、“嵌入”、“外部”。 默认为“Default”。

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set(
	Sign in to OAuth2 servers with the specified browser type( "Embedded" )
);

```

### ODBC Allow Table Replace

**语法:** Preferences[1] << Name("ODBC Allow Table Replace") ( state = 0|1 )

**说明:** 选择该选项可允许 ODBC 表进行替换。默认选中该选项。替换 ODBC 表将删除数据库中的现有表并将其替换为新表。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will
//affect the default behavior of JMP.
     
Preferences[1] << Name( "ODBC Allow Table Replace" )(0);

```

### ODBC Hide Connection String

**语法:** obj << ODBC Hide Connection String( state=0|1 )

### Open Text File Charset

**语法:** obj << Open Text File Charset( "最佳推测"|"ASMO-708"|"big5"|"cp1025"|"cp866"|"cp875"|"csISO2022JP"|"DOS-720"|"DOS-862"|"EUC-CN"|"EUC-JP"|"euc-kr"|"GB18030"|"gb2312"|"hz-gb-2312"|"IBM00858"|"IBM00924"|"IBM01047"|"IBM01140"|"IBM01141"|"IBM01142"|"IBM01143"|"IBM01144"|"IBM01145"|"IBM01146"|"IBM01147"|"IBM01148"|"IBM01149"|"IBM037"|"IBM1026"|"IBM273"|"IBM277"|"IBM278"|"IBM280"|"IBM284"|"IBM285"|"IBM290"|"IBM297"|"IBM420"|"IBM423"|"IBM424"|"IBM437"|"IBM500"|"ibm737"|"ibm775"|"ibm850"|"ibm852"|"IBM855"|"ibm857"|"IBM860"|"ibm861"|"IBM863"|"IBM864"|"IBM865"|"ibm869"|"IBM870"|"IBM871"|"IBM880"|"IBM905"|"IBM-Thai"|"iso-2022-jp"|"iso-2022-jp"|"iso-2022-kr"|"iso-8859-1"|"iso-8859-13"|"iso-8859-15"|"iso-8859-2"|"iso-8859-3"|"iso-8859-4"|"iso-8859-5"|"iso-8859-6"|"iso-8859-7"|"iso-8859-8"|"iso-8859-8-i"|"iso-8859-9"|"Johab"|"koi8-r"|"koi8-u"|"ks_c_5601-1987"|"macintosh"|"shift_jis"|"us-ascii"|"utf-16"|"utf-16BE"|"utf-32"|"utf-7"|"utf-8"|"windows-1250"|"windows-1251"|"Windows-1252"|"windows-1253"|"windows-1254"|"windows-1255"|"windows-1256"|"windows-1257"|"windows-1258"|"windows-874"|"x-Chinese-CNS"|"x-Chinese-Eten"|"x-cp20001"|"x-cp20003"|"x-cp20004"|"x-cp20005"|"x-cp20261"|"x-cp20269"|"x-cp20936"|"x-cp20949"|"x-cp50227"|"x-EBCDIC-KoreanExtended"|"x-IA5"|"x-IA5-German"|"x-IA5-Norwegian"|"x-IA5-Swedish"|"x-iscii-as"|"x-iscii-be"|"x-iscii-de"|"x-iscii-gu"|"x-iscii-ka"|"x-iscii-ma"|"x-iscii-or"|"x-iscii-pa"|"x-iscii-ta"|"x-iscii-te"|"x-mac-arabic"|"x-mac-ce"|"x-mac-chinesesimp"|"x-mac-chinesetrad"|"x-mac-croatian"|"x-mac-cyrillic"|"x-mac-greek"|"x-mac-hebrew"|"x-mac-icelandic"|"x-mac-japanese"|"x-mac-korean"|"x-mac-romanian"|"x-mac-thai"|"x-mac-turkish"|"x-mac-ukrainian" )

**说明:** 指定未找到 Unicode 字节顺序标记时使用的编码；默认情况下根据文件内容推测编码。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Open Text File Charset( "utf-8" ) );

```

### Open character columns as compact columns

**语法:** obj << Open character columns as compact columns( state=0|1 )

**说明:** 当 JMP 确定字符列有优势时自动将字符列作为紧凑列打开

**JMP添加的版本:** 18

### Open files from outside projects in

**语法:** obj << Open files from outside projects in( "无项目"|"打开项目或无项目"|"打开项目或新建项目"|"新建项目" )

**JMP添加的版本:** 16

### Outline Close Orientation

**语法:** obj << Outline Close Orientation( "自动"|"水平"|"垂直" )

**说明:** 分级显示框垂直折叠以节省水平空间的选项

### Parallel Data Table Column Decompression

**语法:** obj << Parallel Data Table Column Decompression( state=0|1 )

**说明:** 更改用于并行解压缩列的默认设置。默认值为启用。关闭该选项可能会允许加载一些非常大的表。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will
//affect the default behavior of JMP.

Preferences[1] << Set( Parallel Data Table Column Decompression( 0 ) );

```

### Partial Selection Indicator

**语法:** obj << Partial Selection Indicator( "无"|"条形图"|"饼图"|"华夫图" )

**说明:** 如何显示组的部分选择。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Partial Selection Mode( "Bar" ) );

```

### Platform Launch Actions

**语法:** obj << Platform Launch Actions( state=0|1 )

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Platform Launch Actions( 1 ) );

```

### Prefer DSN-less ODBC Connection Strings

**语法:** Preferences[1] << Name("Prefer DSN-less ODBC Connection Strings") ( state = 0|1 )

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 
     
Preferences[1] << Name( "Prefer DSN-less ODBC Connection Strings" )(1);

```

### Preserve SAS formats when exporting to SAS

**语法:** obj << Preserve SAS formats when exporting to SAS( state=0|1 )

**说明:** 更改导出至 SAS 时保留 SAS 格式的默认设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Preserve SAS formats when exporting to SAS( 1 ) );

```

### Preserve SAS variable names when exporting to SAS

**语法:** obj << Preserve SAS variable names when exporting to SAS( state=0|1 )

**说明:** 更改导出至 SAS 时保留 SAS 变量名的默认设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Preserve SAS variable names when exporting to SAS( 1 ) );

```

### Print Data Grid as is

**语法:** obj << Print Data Grid as is( state=0|1 )

**说明:** 更改数据网格在屏幕上出现时进行打印的默认设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Print Data Grid as is( 1 ) );

```

### Prompt to save when closing summary tables

**语法:** obj << Prompt to save when closing summary tables( state=0|1 )

**说明:** 关闭汇总表时提示或不提示。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Close report action( "Prompt" ) );

```

### Proxy Port

**语法:** obj << Proxy Port( number )

**说明:** 使用指定的代理端口。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Proxy Port( 80 ) );

```

### Proxy Server

**语法:** obj << Proxy Server( text )

**说明:** 使用指定的代理。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

//Caution: Changing a preference will 
//affect the default behavior of JMP.

url = "http:://myproxy.com:80";
Preferences[1] << Set( Proxy Server( url ) );

```

### Proxy User

**语法:** obj << Proxy User( text )

**说明:** 用于代理身份验证的用户名和密码。[用户名]:[密码]

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Proxy User( "clark%20kent:superman" ) );

```

### Reopen the initial JMP window on last window close

**语法:** obj << Reopen the initial JMP window on last window close( state=0|1 )

**说明:** 确定最后一个 JMP 窗口关闭后是否自动重新打开初始 JMP 窗口

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Reopen the initial JMP window on last window close( 1 ) );

```

### Report Invalid Display Box Messages

**语法:** obj << Report Invalid Display Box Messages( state=0|1 )

**说明:** 更改在显示框的无效消息上输出错误的默认设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Report Invalid Display Box Messages( 1 ) );

```

### Report JSL warnings and errors interactively

**语法:** obj << Report JSL warnings and errors interactively( state=0|1 )

**说明:** 提交 JSL 发生的警告和错误将以交互方式记录和显示。当禁用时，仅记录警告和错误

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Report JSL warnings and errors interactively( 1 ) );

```

### Report Recent Problems

**语法:** obj << Report Recent Problems( state=0|1 )

### Report Snapshot On Close

**语法:** obj << Report Snapshot On Close( state=0|1 )

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Report Snapshot On Close( 1 ) );

```

### Row Editor Always Show All Columns

**语法:** obj << Row Editor Always Show All Columns( state=0|1 )

**说明:** 若选中，不论是否存在选定列，行编辑器将显示数据表中的所有列。

**JMP添加的版本:** 16

### Ruler Tool Units

**语法:** obj << Ruler Tool Units( "公里"|"英里" )

**说明:** 更改在“图形生成器”中的地图上使用时图形工具标尺显示的单位。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Ruler Tool Units( "Miles" ) );

```

### SAS Automatically Generate ODS results

**语法:** obj << SAS Automatically Generate ODS results( state=0|1 )

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( "SAS Automatically Generate ODS results"n( 1 ) );

```

### SAS Connect to CAS with SAS Viya

**语法:** obj << SAS Connect to CAS with SAS Viya( state=0|1 )

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 
          
Preferences[1] << Set( "SAS Connect to CAS with SAS Viya"n( 1 ) );

```

### SAS Data Import Close Warning

**语法:** obj << SAS Data Import Close Warning( state=0|1 )

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( "SAS Data Import Close Warning"n( 0 ) );

```

### SAS Data Import Uses Labels

**语法:** obj << SAS Data Import Uses Labels( state=0|1 )

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( "SAS Data Import Uses Labels"n( 1 ) );

```

### SAS Import generated datasets into JMP

**语法:** obj << SAS Import generated datasets into JMP( state=0|1 )

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( "SAS Import generated datasets into JMP"n( 1 ) );

```

### SAS ODS Results Format

**语法:** obj << SAS ODS Results Format( "HTML"|"文本" )

### SAS ODS Style

**语法:** obj << SAS ODS Style( text=Statistical )

**说明:** 默认为“Statistical”。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( "SAS ODS Style"n( "HTMLBlue" ) );

```

### SAS Organize results in JMP project

**语法:** obj << SAS Organize results in JMP project( state=0|1 )

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( "SAS Organize results in JMP project"n( 1 ) );

```

### SAS Transport Use UTF8

**语法:** obj << SAS Transport Use UTF8( state=0|1 )

**说明:** 将传输文件的默认字符编码更改为 UTF-8

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( SAS Transport Use UTF8( 1 ) );

```

### SPSSMultiResponseDelimiter

**语法:** obj << SPSSMultiResponseDelimiter( text=| )

**说明:** 默认为“|”。

**JMP添加的版本:** 16

### Save Data Table Columns GZ Compressed

**语法:** obj << Save Data Table Columns GZ Compressed( state=0|1 )

**说明:** 更改以 GZip 压缩格式保存数据表的默认设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Save Data Table Columns GZ Compressed( 1 ) );

```

### Save Image DPI

**语法:** obj << Save Image DPI( number )

**说明:** 指定保存图像时使用的 DPI 设置，否则使用默认值。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 
            
Preferences[1] << Set( Save Image DPI( 300 ) );

```

### Save Journals GZ Compressed

**语法:** obj << Save Journals GZ Compressed( state=0|1 )

**说明:** 更改以 GZip 压缩格式保存记录的默认设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Save Journals GZ Compressed( 1 ) );

```

### Save Scripts in English

**语法:** obj << Save Scripts in English( state=0|1 )

**说明:** 更改以英文而不是所显示语言保存脚本的默认设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Save Scripts in English( 1 ) );

```

### Save Text Files as Unicode

**语法:** obj << Save Text Files as Unicode( state=0|1 )

**说明:** 更改以 Unicode 格式保存文本文件的默认设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Save Text Files as Unicode( 1 ) );

```

### Save table with report

**语法:** obj << Save table with report( "嵌入"|"分隔"|"提示" )

**说明:** 更改随保存的报表储存数据的方式

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Save table with report( prompt | embed | separate ) );

```

### Save the session when exiting

**语法:** obj << Save the session when exiting( "始终"|"从不"|"提示" )

**说明:** 更改保存现有 JMP 会话的默认设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Save table with report( "Prompt" ) );

```

### Selected Marker Color

**语法:** obj << Selected Marker Color( color )

**说明:** 更改在“标记选择模式”中使用“选中项相同颜色”时选定标记的颜色

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Selected Marker Color( "Cyan" ) );

```

### Semantic formatting

**语法:** obj << Semantic formatting

**说明:** 创建当其条件匹配当前报表上下文时使用的语义格式。

**JMP添加的版本:** 17

**示例 1**

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );

Preferences(
	Semantic formatting(
		Add Semantic Format(
			Format Name( "My Format 1" ),
			Semantic Format( Format( "Fixed Dec", 11, 1 ) ),
			Criteria(
				Object Name( "*mean*" ),
				Outline Path( "** :: Means for Oneway Anova" )
			)
		),
		Add Semantic Format(
			Format Name( "My Format 2" ),
			Semantic Format( Format( "Fixed Dec", 11, 2 ) ),
			Criteria(
				Object Name( "*mean*" ),
				Outline Path( "** :: Means for Oneway Anova" ),
				Row Name( "M" )
			)
		)
	)
);

```

**示例 2**

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Semantic formatting( Clear ) );

```

### Sequential Color Theme

**语法:** obj << Sequential Color Theme( "name" )

**说明:** 更改所有图形中连续颜色主题的默认设置。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Show( Get Preference( Continuous Color Theme ) );
Set Preference( Sequential Color Theme( "Green to Purple" ) );
Show( Get Preference( Sequential Color Theme ) );

```

### Set

**语法:** obj << Set

**说明:** 设置指定首选项。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 
Preferences[1] << Set( Show the Tip of the Day at startup( 1 ) );

```

### Shade Alternate Table Rows

**语法:** obj << Shade Alternate Table Rows( state=0|1 )

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Shade Alternate Table Rows( 1 ) );

```

### Shade Table Cells

**语法:** obj << Shade Table Cells( state=0|1 )

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Shade Table Cells( 1 ) );

```

### Shade Table Headings

**语法:** obj << Shade Table Headings( state=0|1 )

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Shade Table Headings( 1 ) );

```

### Shape Boundary Color

**语法:** obj << Shape Boundary Color( color )

**说明:** 更改绘制在所有图形上的形状边界颜色的默认设置，例如背景地图。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Shape Boundary Color( "Black" ) );

```

### Show Alternate Column Name

**语法:** obj << Show Alternate Column Name( state=0|1 )

**说明:** 更改在对话框和数据表列面板中显示备用名称的默认设置

### Show Personalization at startup

**语法:** obj << Show Personalization at startup( state=0|1 )

**说明:** 下次 JMP 启动时将显示“个性化”对话框。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Show Personalization at startup( 1 ) );

```

### Show SAS Log

**语法:** obj << Show SAS Log( "Never"|"Always"|"On Error" )

### Show Search box on Columns Panel

**语法:** obj << Show Search box on Columns Panel( state=0|1 )

**说明:** 默认在列面板中显示搜索编辑框

**JMP添加的版本:** 16

### Show Status Bar

**语法:** obj << Show Status Bar( state=0|1 )

**说明:** 更改显示状态栏的默认设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Show Status Bar( 1 ) );

```

### Show conditional formatting

**语法:** obj << Show conditional formatting( "始终"|"仅屏幕"|"从不" )

**说明:** 更改显示报表中条件格式的默认设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Show conditional formatting( "Always" ) );

```

### Show menu tips

**语法:** obj << Show menu tips( state=0|1 )

**说明:** 更改鼠标停留在红色小三角菜单项上方时显示菜单提示的默认设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Show menu tips( 1 ) );

```

### Show missing data bars or bins in summary graphs

**语法:** obj << Show missing data bars or bins in summary graphs( state=0|1 )

**说明:** 缺失数据直条或箱最初是否显示在汇总图形中。无论此处的值如何，可以右击汇总图形并选择“缺失值直条”或“缺失值箱”切换各汇总图形的直条或箱显示。

**JMP添加的版本:** 16

### Show semantic formatting

**语法:** obj << Show semantic formatting( "始终"|"No Row Matching"|"从不" )

**说明:** 更改在报表中使用语义格式的默认设置。可能值为“始终”、“无行匹配”和“从不”。使用“无行匹配”可禁用特定于行的语义格式。

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Show semantic formatting( "Always" ) );

```

### Show summary graphs below column names

**语法:** obj << Show summary graphs below column names( state=0|1 )

**说明:** 若行数低于某个性能阈值（三百万行），汇总图形最初是否显示在数据表的列名和数据单元格之间。无论初始状态如何，对于列名旁边带有图标的单个数据表，可以切换显示。

**JMP添加的版本:** 15

### Show the Quick Start at startup

**语法:** obj << Show the Quick Start at startup( state=0|1 )

**说明:** 更改显示“快速入门”窗口的默认设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Show the Quick Start at startup( 1 ) );

```

### Summary Graph Continuous Color

**语法:** obj << Summary Graph Continuous Color( color )

**说明:** 设置汇总图形和数据过滤器中连续数据的颜色

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Continuous Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Continuous Highlight Color

**语法:** obj << Summary Graph Continuous Highlight Color( color )

**说明:** 设置汇总图形和数据过滤器中连续数据的突出显示颜色

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Continuous Highlight Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Continuous Missing Color

**语法:** obj << Summary Graph Continuous Missing Color( color )

**说明:** 设置汇总图形和数据过滤器中缺失连续数据的颜色

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Continuous Missing Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Continuous Missing Highlight Color

**语法:** obj << Summary Graph Continuous Missing Highlight Color( color )

**说明:** 设置汇总图形和数据过滤器中缺失连续数据的突出显示颜色

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Continuous Missing Highlight Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Name Ordered Color

**语法:** obj << Summary Graph Name Ordered Color( color )

**说明:** 设置汇总图形和数据过滤器中按名称排序的数据的颜色

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Name Ordered Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Name Ordered Highlight Color

**语法:** obj << Summary Graph Name Ordered Highlight Color( color )

**说明:** 设置汇总图形和数据过滤器中按名称排序的数据的突出显示颜色

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Name Ordered Highlight Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Other Color

**语法:** obj << Summary Graph Other Color( color )

**说明:** 设置汇总图形和数据过滤器中其他直条的颜色

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Other Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Other Highlight Color

**语法:** obj << Summary Graph Other Highlight Color( color )

**说明:** 设置汇总图形和数据过滤器中其他直条的突出显示颜色

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Other Highlight Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Run Chart Color

**语法:** obj << Summary Graph Run Chart Color( color )

**说明:** 设置汇总图形和数据过滤器中其他直条的颜色

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will
//affect the default behavior of JMP.

Preferences( Summary Graph Run Chart Color( RGB Color( 0.5, 0.1, 0.9 ) ) );

```

### Summary Graph Size Ordered Color

**语法:** obj << Summary Graph Size Ordered Color( color )

**说明:** 设置汇总图形和数据过滤器中按大小排序的数据的颜色

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Size Ordered Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Size Ordered Highlight Color

**语法:** obj << Summary Graph Size Ordered Highlight Color( color )

**说明:** 设置汇总图形和数据过滤器中按大小排序的数据的突出显示颜色

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Size Ordered Highlight Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Suppress Formula Eval on Open

**语法:** obj << Suppress Formula Eval on Open( state=0|1 )

**说明:** 更改打开数据表时禁止公式计算的默认设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Suppress Formula Eval on Open( 1 ) );

```

### Table Column Borders

**语法:** obj << Table Column Borders( state=0|1 )

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Table Column Borders( 1 ) );

```

### Table Column Group Borders

**语法:** obj << Table Column Group Borders( state=0|1 )

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Table Column Group Borders( 1 ) );

```

### Table Heading Column Borders

**语法:** obj << Table Heading Column Borders( state=0|1 )

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Table Heading Column Borders( 1 ) );

```

### Table Row Borders

**语法:** obj << Table Row Borders( state=0|1 )

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Table Row Borders( 1 ) );

```

### Task Bar Strategy

**语法:** obj << Task Bar Strategy( "All windows"|"Main window only"|"Main and data tables" )

**说明:** 指定在 Windows 任务栏中显示的 JMP 窗口

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Task Bar Strategy( "All Windows" ) );

```

### Transparent background for report PNG images

**语法:** obj << Transparent background for report PNG images( state=0|1 )

**说明:** 报表或部分报表另存为 PNG 图像时，背景为透明。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Transparent background for report PNG images( 1 ) );

```

### Underline Table Headings

**语法:** obj << Underline Table Headings( state=0|1 )

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Underline Table Headings( 1 ) );

```

### Use Excel Labels as Headings

**语法:** obj << Use Excel Labels as Headings( "使用最佳推测"|"始终"|"从不" )

**说明:** 更改打开 Excel 文件时导入 Excel 标签作为 JMP 列名的默认设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Use Excel Labels as Headings( "Always" ) );

```

### Use Greek letters

**语法:** obj << Use Greek letters( state=0|1 )

**说明:** 更改在 JMP 报表中启用希腊字母的默认设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Use Greek letters( 1 ) );

```

### Use JMP Locale Settings

**语法:** obj << Use JMP Locale Settings( state=0|1 )

**说明:** 更改显示数字、日期和货币的格式的默认行为。注意: 仅在 Windows 中可用。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will affect 
//the default behavior of JMP. 

Preferences[1] << Set( Use JMP Locale Settings( 1 ) );

```

### Use Numerical Ordering

**语法:** obj << Use Numerical Ordering( state=0|1 )

**说明:** 配置新列的列排序，以便包含数字的文本按数值顺序排序。若转换为字符类型的列仍不包含“值顺序”属性，则这些列也将受影响。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Use Numerical Ordering( 0 ) );

```

### Use Project Log

**语法:** obj << Use Project Log( "始终"|"条件打开"|"从不" )

**说明:** 是否将项目中的脚本和窗口生成的日志消息发送到项目日志窗口（而不是主日志窗口）

**JMP添加的版本:** 16

### Use SPSS labels for column names during import

**语法:** obj << Use SPSS labels for column names during import( state=0|1 )

**说明:** 更改打开 SPSS 文件时导入 SPSS 标签作为 JMP 列名的默认设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Use SPSS labels for column names during import( 1 ) );

```

### Use Thousands Separator

**语法:** obj << Use Thousands Separator( state=0|1 )

**说明:** 更改在数值输出中使用千位分隔符的默认设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Use Thousands Separator( 1 ) );

```

### Use Triple-S Labels as Headings

**语法:** obj << Use Triple-S Labels as Headings( state=0|1 )

**说明:** 更改使用 3S 变量的标签作为列名的默认设置

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( "Use Triple-S Labels as Headings"n( 1 ) );

```

### Use a Floating Window for Data Filters

**语法:** obj << Use a Floating Window for Data Filters( state=0|1 )

**说明:** 设置后，数据过滤器会使用一个浮动在其数据表和关联窗口上的窗口，否则数据过滤器会使用通常可与其他窗口一并排列的窗口。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Use a Floating Window for Data Filters( 1 ) );

```

### Use an Asterisk with the PValue Format

**语法:** obj << Use an Asterisk with the PValue Format( state=0|1 )

**说明:** p 值格式将在数值列中追加一个星号

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Use an Asterisk with the PValue Format( 1 ) );

```

### Use column references in Dispatch

**语法:** obj << Use column references in Dispatch( state=0|1 )

**说明:** 当保存报表定制时，引用定制的元素时使用列引用而非字符串。这将生成对列名更改更稳健的脚本。请注意，使用该首选项保存的定制可能仅在 JMP 18.0 和更高版本中适用。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Use column references in Dispatch( 1 ) );

```

### Use math symbols

**语法:** obj << Use math symbols( state=0|1 )

**说明:** 更改在 JMP 报表中启用数学符号的默认设置。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Use math symbols( 1 ) );

```

### Virtual Join Auto Open Linked Table

**语法:** obj << Virtual Join Auto Open Linked Table( state=0|1 )

**说明:** 自动打开该列引用的数据表。

**JMP添加的版本:** 16

### Virtual Join Use Linked Column Name

**语法:** obj << Virtual Join Use Linked Column Name( state=0|1 )

**说明:** 使用链接的列名命名虚拟列。

**JMP添加的版本:** 16

### Warn that compact columns cannot be opened in JMP 17 and earlier

**语法:** obj << Warn that compact columns cannot be opened in JMP 17 and earlier( state=0|1 )

**说明:** 无法在 JMP 17 和更早版本中打开紧凑文件格式。

**JMP添加的版本:** 18

### Warn when referenced table name has changed

**语法:** obj << Warn when referenced table name has changed( state=0|1 )

**说明:** 虚拟链接（引用）的表名更改时提供警告消息。

**JMP添加的版本:** 15

## Platform Preferences

### 项消息

#### Get

**语法:** obj << Get

**说明:** 返回设置指定首选项的脚本。

```jsl

Names Default To Here( 1 );
a = Platform Preferences[1] << Get( Distribution );
Show( a );

```

#### Get Script

**语法:** obj << Get Script

**说明:** 返回设置首选项的脚本。

```jsl

Names Default To Here( 1 );
a = Platform Preferences[1] << Get Script;
Show( a );

```

#### Set

**语法:** obj << Set

**说明:** 设置指定首选项。

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Platform Preferences[1] << Set( Distribution( Vertical( 1 ) ) );

```

