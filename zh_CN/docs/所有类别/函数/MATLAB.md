# MATLAB



### Check MATLAB Dependencies

**语法:** Check MATLAB Dependencies()

**说明:** 检查 MATLAB 依赖项是否已安装。

**JMP添加的版本:** 早于版本 14

```jsl

If( !Check MATLAB Dependencies(),	Install MATLAB Dependencies();	Print( "Dependencies are installed" );,	Print( "Dependencies are installed" ));

```

### Install MATLAB Dependencies

**语法:** Install MATLAB Dependencies(&lt;Patch(0|1)&gt;)

**说明:** 安装必需的 MATLAB 依赖项。

**JMP添加的版本:** 早于版本 14

```jsl

If( !Check MATLAB Dependencies(),	Install MATLAB Dependencies(),	Print( "Dependencies are installed" ));

```

### MATLAB Connect

**语法:** MATLABConnection = MATLAB Connect(&lt;Echo(0|1)&gt;)

**说明:** 返回 MATLAB 连接的可脚本化对象。

**JMP添加的版本:** 早于版本 14

```jsl

MATLABConnection = MATLAB Connect();x = MatlabConnection << Is Connected;Show( x );

```

### MATLAB Control

**语法:** MATLAB Control( Echo(bool) )

**说明:** 更改 MATLAB 的控制选项。

**JMP添加的版本:** 早于版本 14

```jsl

MATLAB Init( Echo( true ) );MATLAB Control( Echo( false ) );MATLAB Submit(	"\[	v = [9 8 7, 6 5 4, 3 2 1];	m = [1 2 3, 4 5 6, 7 8 9];	rowjoin = [v ; m]	coljoin = [v , m]]\");MATLAB Term();

```

### MATLAB Execute

**语法:** MATLAB Execute( { list of Inputs }, { list of Outputs }, statements, &lt;Echo(0|1)&gt;, &lt;Expand(0|1)&gt; )

**说明:** 发送输入列表、执行语句并返回输出列表。

**JMP添加的版本:** 早于版本 14

```jsl

MATLAB Init();a = "abcdef";d = 3.141;v = [9 8 7, 6 5 4, 3 2 1];m = [1 2 3, 4 5 6, 7 8 9];ml = MATLAB Execute(	{v, m, a, d},	{x, z, a, d},	"\[a = v * m; % matrix productd = v / m; % = v * inv(m) called Right divisionz = m \ v; % = m * inv(v) called Left divisionx = m .* v; % element-wise product]\");Show( v, m, ml, x, z, a, d );MATLAB Term();

```

### MATLAB Get

**语法:** y = MATLAB Get( name )

**说明:** 从 MATLAB 返回数据，其中 name 参数可以代表下列任何 MATLAB 数据类型 ( numeric | string | matrix | list | data frame)。

**JMP添加的版本:** 早于版本 14

```jsl

MATLAB Init();x1 = [1, 2, 3];MATLAB Send( x1 );x2 = MATLAB Get( x1 );Show( x1, x2 );dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );MATLAB Send( dt1 );dt2 = MATLAB Get( dt1 );dt2 << New Data View;Close( dt1 );MATLAB Term();

```

### MATLAB Get Graphics

**语法:** MATLAB graphics = MATLAB Get Graphics( format )

**说明:** 以 format 参数指定的图形格式，返回写入 MATLAB 图形显示窗口的最后一个图形对象。

**JMP添加的版本:** 早于版本 14

```jsl

MATLAB Init();ml = MATLAB Submit( "\[plot(1:10)]\" );plot = MATLAB Get Graphics( png );pngJMP = New Window( "Plot", Picture Box( plot ) );pngJMP << Close Window;MATLAB Submit( "close" );//Needed this command to close the figure generated from MatlabMATLAB Term();

```

### MATLAB Get Version

**语法:** version = MATLAB Get Version()

**说明:** 返回 JMP MATLAB 接口中使用的 MATLAB 版本号。

**JMP添加的版本:** 14

```jsl

MATLAB Init();version = MATLAB Get Version();Show( version );MATLAB Term();

```

### MATLAB Init

**语法:** MATLAB Init(&lt;Echo(0|1)&gt;)

**说明:** 初始化 MATLAB 接口。

**JMP添加的版本:** 早于版本 14

```jsl

MATLAB Init();MATLAB Submit( "\[str = 'The quick brown fox jumps over the lazy dog';]\" );getStr = MATLAB Get( str );Show( getStr );MATLAB Term();

```

### MATLAB Is Connected

**语法:** connected = MATLAB Is Connected()

**说明:** 若存在活动的 MATLAB 连接，则返回 1；否则返回 0。

**JMP添加的版本:** 早于版本 14

```jsl

MATLAB Init();x = MATLAB Is Connected();Show( x );MATLAB Term();

```

### MATLAB JMP Name to MATLAB Name

**语法:** MATLAB name = MATLAB JMP Name To MATLAB Name( JMP name )

**说明:** 使用 MATLAB 变量命名规则将 JMP 变量名称映射到 MATLAB 变量名称。

**JMP添加的版本:** 早于版本 14

```jsl

MATLAB Init();MATLAB name = MATLAB JMP Name to MATLAB Name( a b c );Show( MATLAB name );MATLAB Term();

```

### MATLAB Load

**语法:** MATLAB Load( path )

**说明:** 将 .mat 文件中的变量加载到 MATLAB 中并将变量返回给 JSL 关联数组。

**JMP添加的版本:** 19

```jsl

MATLAB Init();// if .mat file contained: x = 40; y = 'hello';vars = MATLAB Load( "path/to/.mat" );Show( vars << Get Value( "x" ), vars << Get Value( "y" ) );MATLAB Term();

```

### MATLAB Send

**语法:** MATLAB Send( name, &lt;MATLAB Name( name )&gt;, &lt;Named Arguments&gt; )

**说明:** 将数据发送至 MATLAB，其中 name 参数可以代表下列任何 JMP 数据类型 ( numeric | string | matrix | list | data table)。

**JMP添加的版本:** 早于版本 14

```jsl

MATLAB Init();x = [1, 2, 3];MATLAB Send( x );dt = Open( "$SAMPLE_DATA/Big Class.jmp" );MATLAB Send( dt );Close( dt );MATLAB Submit( "x" );MATLAB Submit( "dt" );MATLAB Term();

```

### MATLAB Send File

**语法:** MATLAB Send File( filename, &lt;MATLAB Name( name )&gt; )

**说明:** 将数据文件发送至 MATLAB，其中 filename 参数是一个字符串，用来指定要发送到 MATLAB 的文件的路径名称。

**JMP添加的版本:** 早于版本 14

```jsl

MATLAB Init();MATLAB Send File( "$SAMPLE_DATA/Big Class.jmp" );MATLAB Send File( "$SAMPLE_DATA/Baseball.jmp" );MATLAB Submit( "BigClass" );MATLAB Submit( "Baseball" );MATLAB Term();

```

### MATLAB Submit

**语法:** MATLAB Submit( statements, &lt;Echo(0|1)&gt;, &lt;Expand(0|1)&gt; )

**说明:** 将语句发送到 MATLAB。语句可以采用单个字符串值形式，也可以是字符串值列表。

**JMP添加的版本:** 早于版本 14

```jsl

MATLAB Init();MATLAB Submit( "\[str = 'The quick brown fox jumps over the lazy dog';a = 200;]\" );getStr = MATLAB Get( str );getNum = MATLAB Get( a );Show( getStr, getNum );MATLAB Term();

```

### MATLAB Submit File

**语法:** MATLAB Submit File( path, &lt;Echo(0|1)&gt;, &lt;Expand(0|1)&gt; )

**说明:** 使用 path 参数指定的文件将语句提交至 MATLAB。

**JMP添加的版本:** 早于版本 14

```jsl

MATLAB Init();MATLAB Submit File( "file containing MATLAB source.m" );MATLAB Term();

```

### MATLAB Term

**语法:** MATLAB Term()

**说明:** 终止 MATLAB 接口。

**JMP添加的版本:** 早于版本 14

```jsl

MATLAB Init();MATLAB Submit( "\[str = 'The quick brown fox jumps over the lazy dog';]\" );getStr = MATLAB Get( str );Show( getStr );MATLAB Term();

```

### Update MATLAB Dependencies

**语法:** Update MATLAB Dependencies(&lt;Patch(0|1)&gt;)

**说明:** 更新必需的 MATLAB 依赖项。

**JMP添加的版本:** 早于版本 14

```jsl

If( Check MATLAB Dependencies(),	Update MATLAB Dependencies(),	Print( "Dependencies are updated" ));

```

