# Python Connection



## 项消息

### Create JPIP CMD

**语法:** obj &lt;&lt; Create JPIP CMD()

**说明:** 触发为 Python 的 pip 命令创建 jpip 命令行包装脚本。目录选择器对话框将询问生成的脚本的保存位置。然后，该脚本提供 pip 的完整功能，同时为 JMP 的隔离 Python 环境正确建立必要的环境变量。

**JMP添加的版本:** 18

#### 示例 1

```jsl

// install numpy and pandas packages
conn = Python Connect();
conn << Create JPIP CMD();

```

#### 示例 2

```jsl

Python Create JPIP CMD();

```

### Disconnect

**语法:** obj &lt;&lt; Disconnect

**说明:** 注意: 自 JMP 18 起该函数已废弃，并且没有任何作用。

**JMP添加的版本:** 14

### Execute

**语法:** list = obj &lt;&lt; Execute( { list of Inputs }, { list of Outputs }, statements &lt; , echo( 1 | 0 ) &gt; )

**说明:** 发送输入列表、执行语句并返回输出列表。可选 echo() 参数默认值为 True。echo 参数控制将 Python 源回显到日志。逻辑 True (1) 允许对源回显，而 0 禁止回显到日志。

**JMP添加的版本:** 14

#### 示例 1

```jsl

PythonConnection = Python Connect();
// NOTE: a,d,x,z must be declared before Execute()
// as this is the location the results will be written.
a = "abcdef";
d = 3.141;
x = 0;
z = 0;
v = [1 0 0, 0 1 0, 0 0 1];
// pi, e, phi, c, Plank's, Faraday, 345 triangle
m = [3.141 2.718 1.618,
2.997 6.626 9.648,
3 4 5];
ml = PythonConnection << Execute(
	{v, m, a, d},
	{x, z, a, d},
	"\[
import numpy as np
a = np.multiply(v, m) # matrix product
d = np.divide(v, m) # matrix division
z = np.multiply(m, np.linalg.inv(v)) # m * inv(v) called Left division
x = np.multiply(np.linalg.inv(m), v) # inv(m) * v called right division
	]\"
);
Show( v, m, ml, x, z, a, d );

```

#### 示例 2

```jsl

PythonConnection = Python Connect();
x1 = 0;
x2 = 0;
y1 = 0;
y2 = 0;
z1 = 0;
z2 = 0;
v = [1 0 0, 0 1 0, 0 0 1];
// pi, e, phi, c, Plank's, Faraday, 345 triangle
m = [3.141 2.718 1.618,
2.997 6.626 9.648,
3 4 5];
ml = Python Execute(
	{v, m},
	{x1, x2, y1, y2, z1, z2},
	"\[
import numpy as np
x1 = np.multiply(v, m) # matrix product
print('x1=', x1)
x2 = np.divide(v, m) # matrix division
print('x2=', x2)
y1 = np.dot(v, m) # dot product of v and m
print('y1=', y1)
y2 = np.dot(m, v) # dot product of m and v
print('y2=', y2)
z1 = np.inner(v, m) # inner product of v and m
print('z1=', z1)
z2 = np.inner(m, v) # innder product of m and v
print('z2=', z2)
		]\"
);
Show( v, m, ml, x1, x2, y1, y2, z1, z2 );

```

### Get

**语法:** y = obj &lt;&lt; Get( name )

**说明:** 从 Python 返回数据，其中 name 参数可以代表下列任何 Python 数据类型 (numeric | string | matrix | list | dict | data table | data frame | datetime | numpy.datetime64)。

**JMP添加的版本:** 14

#### Datetime

```jsl


PythonConnection = Python Connect();
date1 = As Date( Today() );
PythonConnection << Set( date1 );
date2 = PythonConnection << Get( date1 );
Show( date1, date2 );

```

#### numpy.datetime64

```jsl


PythonConnection = Python Connect();
PythonConnection << Install Packages( "numpy" );
PythonConnection << Submit( "import numpy as np" );
PythonConnection << Submit( "datetime64 = np.datetime64('1989-10-05')" );
numpy_datetime = PythonConnection << Get( datetime64 );
Show( numpy_datetime );

```

#### 示例 1

```jsl


PythonConnection = Python Connect();
x1 = [1, 2, 3];
PythonConnection << Set( x1 );
x2 = PythonConnection << Get( x1 );
Show( x1, x2 );
dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
PythonConnection << Set( dt1 );
dt2 = PythonConnection << Get( dt1 );
dt2 << New Data View;
Close( dt1 );

```

### Get Version

**语法:** version = obj &lt;&lt; Get Version

**说明:** 返回当前连接中使用的 Python 的版本号。

**JMP添加的版本:** 14

```jsl

PythonConnection = Python Connect();
version = PythonConnection << Get Version;
Show( version );

```

### Install Packages

**语法:** obj &lt;&lt; Install Packages( packages )

**说明:** 这会将 Python 包的安装封装到 JMP 软件安装点包目录中。对于简单包安装之外的操作，请参见 Python Create JPIP CMD() 以在使用 Directory Pick() 选择的目录中创建命令行 pip 包装脚本。或者，要从 JMP Python 脚本窗口运行安装，请查看“脚本索引”中 Python 类别下的 jmputils.jpip。

**JMP添加的版本:** 18

#### 示例 1

```jsl

// install numpy and pandas packages
conn = Python Connect();
conn << Install Packages( "numpy pandas" );

```

#### 示例 2

```jsl

// install numpy and pandas packages
Python Install Packages( "numpy pandas" );

```

#### 示例 3

```jsl

// install numpy and pandas packages
Python Install Packages( {"numpy", "pandas"} );

```

### Is Connected

**语法:** x = obj &lt;&lt; Is Connected

**说明:** 注意: 自 JMP 18 起该函数已废弃，并且始终返回 1。

**JMP添加的版本:** 14

```jsl

PythonConnection = Python Connect();
x = PythonConnection << Is Connected;
Show( x );

```

### JMP Name To Python Name

**语法:** Python Name = PythonConnection &lt;&lt; JMP Name To Python Name( JMP name )

**说明:** 使用 Python 变量命名规则将 JMP 变量名称映射到 Python 变量名称。

**JMP添加的版本:** 14

```jsl

PythonConnection = Python Connect();
Python Name = PythonConnection << JMP Name To Python Name( a b c );
Show( Python Name );

```

### Reset

**语法:** PythonConnection &lt;&lt; Reset

**说明:** Reset the shared Python environment.

**JMP添加的版本:** 19

```jsl

PythonConnection = Python Connect();
pi = 3.1415927;
PythonConnection << Send( pi );
PythonConnection << Submit( "print(pi)" );
PythonConnection << Reset();
// will show error, pi not defined
PythonConnection << Submit( "print(pi)" );

```

### Send

**语法:** y = obj &lt;&lt; Send( name, &lt;Python Name( name )&gt; )

**说明:** 将数据发送至 Python，其中 name 参数可以代表下列任何 JMP 数据类型 ( numeric | string | matrix | list | data table | date )。

**JMP添加的版本:** 14

#### Date

```jsl


PythonConnection = Python Connect();
date = As Date( Today() );
PythonConnection << Send( date );
PythonConnection << Submit( "print(date)" );

```

#### 示例 1

```jsl

PythonConnection = Python Connect();
x = [1, 2, 3];
PythonConnection << Send( x );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
PythonConnection << Send( dt );
PythonConnection << Submit( "print(x)" );
PythonConnection << Submit( "print(dt)" );

```

### Send File

**语法:** y = obj &lt;&lt; Send File( filename, &lt;Python Name( name )&gt; )

**说明:** 将数据文件发送至 Python，其中 filename 参数是一个字符串，用于指定将要发送至 Python 的文件的路径名。

**JMP添加的版本:** 14

```jsl

PythonConnection = Python Connect();
PythonConnection << Send File( "$SAMPLE_DATA/Big Class.jmp" );
dtname = "$SAMPLE_DATA/Baseball.jmp";
PythonConnection << Send File( dtname );
PythonConnection << Submit( "print(Big_Class)" );
PythonConnection << Submit( "print(Baseball)" );

```

### Set

**语法:** y = obj &lt;&lt; Set( name, &lt;Python Name( name )&gt; )

**说明:** 将数据发送至 Python，其中 name 参数可以代表下列任何 JMP 数据类型 ( numeric | string | matrix | list | data table | date )。

**JMP添加的版本:** 14

#### Date

```jsl


PythonConnection = Python Connect();
date = As Date( Today() );
PythonConnection << Set( date );
PythonConnection << Submit( "print(date)" );

```

#### 示例 1

```jsl

PythonConnection = Python Connect();
x = [1, 2, 3];
PythonConnection << Set( x );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
PythonConnection << Set( dt );
PythonConnection << Submit( "print(x)" );
PythonConnection << Submit( "print(dt)" );

```

### Submit

**语法:** obj &lt;&lt; Submit( statements &lt; , echo( 1 | 0 ) &gt; )

**说明:** 将语句提交至 Python。语句可以采用字符串值或字符串值列表的形式。可选 echo() 参数默认值为 True。echo 参数控制将 Python 源回显到日志。逻辑 True (1) 允许对源回显，而 0 禁止回显到日志。

**JMP添加的版本:** 14

```jsl

PythonConnection = Python Connect();
PythonConnection << Submit(
	"\[
str = 'The quick brown fox jumps over the lazy dog';
a = 200;
]\"
);
getStr = PythonConnection << Get( str );
getNum = PythonConnection << Get( a );
Show( getStr, getNum );

```

### Submit File

**语法:** obj &lt;&lt; Submit File( path )

**说明:** 使用 path 参数指定的文件将语句提交至 Python。

**JMP添加的版本:** 14

```jsl

PythonConnection = Python Connect();
PythonConnection << Submit File( "some_Python_source.py" );

```

