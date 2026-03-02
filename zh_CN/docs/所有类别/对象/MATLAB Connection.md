# MATLAB Connection



## 项消息

### Control

**语法:** obj &lt;&lt; Control(&lt;Echo(Boolean)&gt;)

**说明:** 控制 MATLAB 的执行。

```jsl

conn = MATLAB Connect();conn << Control( Echo( 0 ) );conn << Submit( "\[ a = 'hello'; ]\" ); // no echoconn << Control( Echo( 1 ) );conn << Submit( "\[ a = 'hello'; ]\" ); // echo

```

### Disconnect

**语法:** obj &lt;&lt; Disconnect

**说明:** 终止 MATLAB 接口。

```jsl

MATLABConnection = MATLAB Connect();MATLABConnection << Disconnect;

```

### Execute

**语法:** obj &lt;&lt; Execute( { list of Inputs }, { list of Outputs }, statements, &lt;Echo(0|1)&gt;, &lt;Expand(0|1)&gt; )

**说明:** 发送输入列表、执行语句并返回输出列表。可选 echo() 参数默认值为 True。echo 参数控制将 MATLAB 源回显到日志。逻辑 True (1) 允许对源回显，而 0 禁止回显到日志。

```jsl

MATLABConnection = MATLAB Connect();a = "abcdef";d = 3.141;v = [9 8 7, 6 5 4, 3 2 1];m = [1 2 3, 4 5 6, 7 8 9];MATLABConnection << Execute(	{v, m, a, d},	{x, z, a, d},	"\[a = v * m; % matrix productd = v / m; % = v * inv(m) called Right divisionz = m \ v; % = m * inv(v)	called Left divisionx = m .* v; % element-wise product]\");Show( v, m, x, z, a, d );MATLABConnection << Disconnect;

```

### Get

**语法:** y = obj &lt;&lt; Get( name )

**说明:** 从 MATLAB 返回数据，其中 name 参数可以代表下列任何 MATLAB 数据类型 ( numeric | string | matrix | list | data frame)。

```jsl

MATLABConnection = MATLAB Connect();x1 = [1, 2, 3];MATLABConnection << Set( x1 );x2 = MATLABConnection << Get( x1 );Show( x1, x2 );dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );MATLABConnection << Set( dt1 );dt2 = MATLABConnection << Get( dt1 );dt2 << New Data View;Close( dt1 );MATLABConnection << Disconnect;

```

### Get Graphics

**语法:** MATLAB graphics = obj &lt;&lt; Get Graphics( format )

**说明:** 以 format 参数指定的图形格式，返回写入 MATLAB 图形显示窗口的最后一个图形对象。

```jsl

MATLABConnection = MATLAB Connect();ml = MATLABConnection << Submit( "\[x = 0:pi/100:2*pi;y = sin(x);plot(x,y)]\" );plot = MATLABConnection << Get Graphics( png );New Window( "Plot", Picture Box( plot ) );MATLABConnection << Disconnect;

```

### Get Version

**语法:** version = obj &lt;&lt; Get Version

**说明:** 返回当前连接中使用的 MATLAB 的版本号。

```jsl

MATLABConnection = MATLAB Connect();version = MATLABConnection << Get Version;Show( version );MATLABConnection << Disconnect;

```

### Is Connected

**语法:** x = obj &lt;&lt; Is Connected

**说明:** 若存在活动的 MATLAB 连接，则返回 1；否则返回 0。

```jsl

MATLABConnection = MATLAB Connect();x = MATLABConnection << Is Connected;Show( x );MATLABConnection << Disconnect;

```

### JMP Name To MATLAB Name

**语法:** obj &lt;&lt; JMP Name To MATLAB Name( JMP name )

**说明:** 使用 MATLAB 变量命名规则将 JMP 变量名称映射到 MATLAB 变量名称。

```jsl

MATLABConnection = MATLAB Connect();MATLAB Name = MATLABConnection << JMP Name To MATLAB Name( a b c );Show( MATLAB Name );MATLABConnection << Disconnect;

```

### Load

**语法:** obj &lt;&lt; Load( path )

**说明:** 将“.mat”文件加载到 MATLAB 中并将变量返回给 JSL 关联数组。

```jsl

MATLABConnection = MATLAB Connect();// .mat file has x, y variables with valuesvars = MATLABConnection << Load( "path/to/matfile.mat" );Show( vars << Get Value( "x" ), vars << Get Value( "y" ) );MATLABConnection << Disconnect;

```

### Send

**语法:** y = obj &lt;&lt; Send( name, &lt;Named Arguments&gt; )

**说明:** 将数据发送至 MATLAB，其中 name 参数可以代表下列任何 JMP 数据类型 ( numeric | string | matrix | list | data table)。

```jsl

MATLABConnection = MATLAB Connect();x = [1, 2, 3];MATLABConnection << Send( x );dt = Open( "$SAMPLE_DATA/Big Class.jmp" );MATLABConnection << Send( dt );Close( dt );MATLABConnection << Submit( "x" );MATLABConnection << Submit( "dt" );MATLABConnection << Disconnect;

```

### Send File

**语法:** y = obj &lt;&lt; Send File( filename, &lt;MATLAB Name ( name )&gt; )

**说明:** 将数据文件发送至 MATLAB，其中 filename 参数是一个字符串，用来指定要发送到 MATLAB 的文件的路径名称。

```jsl

MATLABConnection = MATLAB Connect();MATLABConnection << Send File( "$SAMPLE_DATA/Big Class.jmp" );dtname = "$SAMPLE_DATA/Baseball.jmp";MATLABConnection << Send File( dtname );MATLABConnection << Submit( "BigClass" );MATLABConnection << Submit( "Baseball" );MATLABConnection << Disconnect;

```

### Set

**语法:** y = obj &lt;&lt; Set( name, &lt;MATLAB Name ( name )&gt; )

**说明:** 将数据发送至 MATLAB，其中 name 参数可以代表下列任何 JMP 数据类型 ( numeric | string | matrix | list | data table)。

```jsl

MATLABConnection = MATLAB Connect();x = [1, 2, 3];MATLABConnection << Set( x );dt = Open( "$SAMPLE_DATA/Big Class.jmp" );MATLABConnection << Set( dt );Close( dt );MATLABConnection << Submit( "x" );MATLABConnection << Submit( "dt" );MATLABConnection << Disconnect;

```

### Submit

**语法:** obj &lt;&lt; Submit( statements )

**说明:** 将语句发送到 MATLAB。语句可以单个字符串值形式，也可以是字符串值列表。

```jsl

MATLABConnection = MATLAB Connect();MATLABConnection << Submit(	"\[str = 'The quick brown fox jumps over the lazy dog';a = 200;]\");getStr = MATLABConnection << Get( str );getNum = MATLABConnection << Get( a );Show( getStr, getNum );MATLABConnection << Disconnect;

```

### Submit File

**语法:** obj &lt;&lt; Submit File( path )

**说明:** 使用 path 参数指定的文件将语句提交至 MATLAB。

```jsl

MATLABConnection = MATLAB Connect();MATLABConnection << Submit File( "file containing MATLAB source." );MATLABConnection << Disconnect;

```

