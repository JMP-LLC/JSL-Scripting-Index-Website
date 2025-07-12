# R Connection



## 关联的构造器

### R Connect

**语法:** RConnection = R Connect()

**说明:** 返回 R 连接可脚本化对象。

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
x = RConnection << Is Connected;
Show( x );

```

## 项消息

### Control

**语法:** obj << Control( Echo( Boolean ) )

**说明:** 更改 R 的控制选项。

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
RConnection << Control( Echo( 0 ) );
RConnection << Submit( "rnorm(10)" );

```

### Disconnect

**语法:** obj << Disconnect

**说明:** 在 JMP 19 中已废弃且没有任何作用。

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
RConnection << Disconnect;

```

### Execute

**语法:** list = obj << Execute( { list of Inputs }, { list of Outputs }, statements )

**说明:** 发送输入列表、执行语句并返回输出列表。

```jsl

Names Default To Here( 1 );

RConnection = R Connect();
a = "abcdef";
d = 3.1415927;
x = 0;
z = 0;
v = [9 8 7, 6 5 4, 3 2 1];
m = [1 2 3, 4 5 6, 7 8 9];
rc = RConnection << Execute( {v, m, a, d}, {x, z, a, d}, "\[
x <- rnorm(5)
z <- v * m
]\" );
Show( v, m, rc, x, z, a, d );

```

### Get

**语法:** y = obj << Get( name )

**说明:** 从 R 返回数据，其中 name 参数可以代表下列任何 R 数据类型 ( numeric | string | matrix | list | data frame)。

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
x1 = [1, 2, 3];
RConnection << Set( x1 );
x2 = RConnection << Get( x1 );
Show( x1, x2 );
dt1 = New Table( "Test", New Column( "Col", Values( [10, 20, 30] ) ) );
RConnection << Set( dt1 );
dt2 = RConnection << Get( dt1 );
Close( dt1, No Save );

```

### Get Graphics

**语法:** R graphics = obj << Get Graphics( format )

**说明:** 在 JMP 19 中已废弃且没有任何作用。作为替代方式，将设备设置为 png("r_plot.png") 之类的文件名，然后打开该文件以检索图像。该选项将从 JMP 20 中删除。下面的代码显示了解决方法。

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
img_path = Get Path Variable( "TEMP" ) || "r_plot.png";
RConnection << Execute( {img_path}, {}, "\[
png(img_path)
plot(1:10)
dev.off()
]\" );
plot = Open( img_path );
rc = Delete File( img_path );

```

### Get Version

**语法:** version = obj << Get Version

**说明:** 返回当前连接中使用的 R 的版本号。

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
version = RConnection << Get Version;
Show( version );

```

### Is Connected

**语法:** x = obj << Is Connected

**说明:** 若存在活动的 R 连接，则返回 1；否则返回 0。

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
x = RConnection << Is Connected;
Show( x );

```

### JMP Name To R Name

**语法:** Rname = JMP Name To R Name( JMP name )

**说明:** 使用 R 变量命名规则将 JMP 变量名称映射到 R 变量名称。

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
RName = RConnection << JMP Name To R Name( a b c );
Show( RName );

```

### Send

**语法:** y = obj << Send( name, <R Name( name )> )

**说明:** 将数据发送至 R，其中 name 参数可以代表下列任何 JMP 数据类型 ( numeric | string | matrix | list | data table)。

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
x = [1, 2, 3];
RConnection << Send( x );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
RConnection << Send( dt );
Close( dt );
RConnection << Submit( "dt" );

```

### Send File

**语法:** y = obj << Send File( filename, <R Name( name )> )

**说明:** 将数据文件发送至 R，其中 filename 参数是一个字符串，用于指定将要发送至 R 的文件的路径名。

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
RConnection << Send File( "$SAMPLE_DATA/Big Class.jmp" );
RConnection << Disconnect;
dtname = "$SAMPLE_DATA/Baseball.jmp";
RConnection << Send File( dtname );

```

### Set

**语法:** y = obj << Set( name, <R Name( name )> )

**说明:** 将数据发送至 R，其中 name 参数可以代表下列任何 JMP 数据类型 ( numeric | string | matrix | list | data table)。

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
x = [1, 2, 3];
RConnection << Set( x );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
RConnection << Set( dt );
Close( dt );
RConnection << Submit( "dt" );

```

### Submit

**语法:** obj << Submit( statements )

**说明:** 将语句发送到 R。语句可以单个字符串值形式，也可以是字符串值列表。

```jsl

Names Default To Here( 1 );

RConnection = R Connect();
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
RConnection << Submit( r_code );
Wait( 3 );
plot = Open( img_path );
rc = Delete File( img_path );

```

### Submit File

**语法:** obj << Submit File( path )

**说明:** 使用 path 参数指定的文件将语句提交至 R。

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
RConnection << Submit File( "file containing R source." );

```

