# R



### R Connect

**语法:** RConnection = R Connect()

**说明:** 返回 R 连接可脚本化对象。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
RConnection = R Connect();

```

### R Control

**语法:** R Control( Interrupt | Async( bool ) | Echo( bool ) )

**说明:** 更改 R 的控制选项

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
R Init( Echo( true ) );
R Control( Echo( false ) );
R Submit( "Add R code" );

```

### R Execute

**语法:** R Execute( { list of Inputs }, { list of Outputs }, statements )

**说明:** 发送输入列表、执行语句并返回输出列表。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
R Init();
a = "abcdef";
d = 3.141;
x = 0;
z = 0;
v = [9 8 7, 6 5 4, 3 2 1];
m = [1 2 3, 4 5 6, 7 8 9];
rc = R Execute( {v, m, a, d}, {x, z, a, d}, "\[
x <- rnorm(5)
z <- v * m
]\" );
Show( v, m, rc, x, z, a, d );

```

### R Get

**语法:** y = R Get( name )

**说明:** 从 R 返回数据，其中 name 参数可以代表下列任何 R 数据类型 ( numeric | string | matrix | list | data frame)。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
R Init();
x1 = [1, 2, 3];
R Send( x1 );
x2 = R Get( x1 );
Show( x1, x2 );
dt1 = New Table( "Test", New Column( "Col", Values( [10, 20, 30] ) ) );
R Send( dt1 );
dt2 = R Get( dt1 );
Close( dt1, No Save );

```

### R Get Graphics

**语法:** R graphics = R Get Graphics( format )

**说明:** 在 JMP 19 中已废弃且没有任何作用。作为替代方式，将设备设置为 png("r_plot.png") 之类的文件名，然后打开该文件以检索图像。该选项将从 JMP 20 中删除。下面的代码显示了解决方法。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
R Init();
img_path = Get Path Variable( "TEMP" ) || "r_plot.png";
R Execute( {img_path}, {}, "\[
png(img_path)
plot(1:10)
dev.off()
]\" );
plot = Open( img_path );
rc = Delete File( img_path );

```

### R Get Version

**语法:** version = R Get Version()

**说明:** 返回与 JMP R 界面一起使用的 R 版本号。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
R Init();
version = R Get Version();
Show( version );

```

### R Init

**语法:** R Init()

**说明:** 初始化 R 接口。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
R Init();

```

### R Is Connected

**语法:** connected = R Is Connected()

**说明:** 若存在活动的 R 连接，则返回 1；否则返回 0。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
R Init();
connected = R Is Connected();

```

### R JMP Name to R Name

**语法:** R name = R JMP Name To R Name( JMP name )

**说明:** 使用 R 变量命名规则将 JMP 变量名称映射到 R 变量名称。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
R name = R JMP Name to R Name( a b c );

```

### R Send

**语法:** R Send( name, &lt;R Name( as_name ) | "as_name"&gt; )

**说明:** 将数据发送至 R，其中 name 参数可以代表下列任何 JMP 数据类型 (numeric | string | matrix | list | data table | data table column)。

**JMP添加的版本:** 早于版本 14

**列**

```jsl

Names Default To Here( 1 );
R Init();
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
R Send( dt:weight );
Close( dt );
w = R Get( "weight" );

```

**数据表**

```jsl

Names Default To Here( 1 );
R Init();
x = [1, 2, 3];
R Send( x, "x1" );
rx = R Get( "x1" );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
R Send( dt );
Close( dt );
R Submit( "dt" );

```

### R Send File

**语法:** R Send File( filename, &lt;R Name( name )&gt; )

**说明:** 将数据文件发送至 R，其中 filename 参数是一个字符串，用于指定将要发送至 R 的文件的路径名。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
R Init();
R Send File( "$SAMPLE_DATA/Big Class.jmp" );
R Send File( "$SAMPLE_DATA/Baseball.jmp" );
R Submit( "Big.Class" );
R Submit( "Baseball" );

```

### R Submit

**语法:** R Submit( statements )

**说明:** 将语句发送到 R。语句可以单个字符串值形式，也可以是字符串值列表。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );

R Init();
img_path = Get Path Variable( "TEMP" ) || "r_plot.png";
code =
"\[
x <- rnorm(1000)
hx <- hist(x, breaks=100, plot=FALSE)
png("IMG_PATH")
plot(hx, col=ifelse(abs(hx$breaks) < 1.669, 4, 2))
dev.off()
x <- rnorm (100)
y <- x**2 + rnorm (100)
summary(y)
]\";
// substitue portable path into R code
r_code = Substitute( code, "IMG_PATH", img_path );
R Submit( r_code );
Wait( 3 );
plot = Open( img_path );
rc = Delete File( img_path );

```

### R Submit File

**语法:** R Submit File( path )

**说明:** 使用 path 参数指定的文件将语句提交至 R。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );

R Init();
file_path = Get Path Variable( "SAMPLE_SCRIPTS" ) || "R/SI_example.R";
R Submit File( file_path );

```

### R Term

**语法:** R Term()

**说明:** 在 JMP 19 中已废弃且没有任何作用。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
R Init();
R Term();

```

