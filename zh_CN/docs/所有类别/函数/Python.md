# Python



### Python Connect

**语法:** PythonConnection = Python Connect ()

**说明:** 返回 Python 连接可脚本化对象。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
version = PythonConnection << Get Version;
Show( version );

```

### Python Create JPIP CMD

**语法:** Python Create JPIP CMD()

**说明:** 触发 jpip 命令行包装脚本的创建（为 Python 的 pip 命令）。目录选择器对话框将询问保存生成的脚本的目录位置。然后该脚本提供 pip 的完整功能，同时为 JMP 隔离的 Python 环境正确建立必要的环境变量。

**JMP添加的版本:** 18

**示例 1**

```jsl

Names Default To Here( 1 );
Python Create JPIP CMD();

```

**示例 2**

```jsl

Names Default To Here( 1 );
// install numpy and pandas packages
conn = Python Connect();
conn << Create JPIP CMD();

```

### Python Execute

**语法:** Python Execute( { list of Inputs }, { list of Outputs }, statements &lt; , echo( 1 | 0 ) &gt; )

**说明:** 发送输入列表、执行语句并返回输出列表。可选 echo() 参数默认值为 True。echo 参数控制将 Python 源回显到日志。逻辑 True (1) 允许对源回显，而 0 禁止回显到日志。

**JMP添加的版本:** 14

**示例 1**

```jsl

Names Default To Here( 1 );

a = "abcdef";
d = 3.141;
x = 0;
z = 0;
v = [1 0 0, 0 1 0, 0 0 1];
// pi, e, phi, c, Plank's, Faraday, 345 triangle
m = [3.141 2.718 1.618,
2.997 6.626 9.648,
3 4 5];
ml = Python Execute(
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

**示例 2**

```jsl

Names Default To Here( 1 );

x1 = 1;
x2 = 2;
y1 = 1;
y2 = 2;
z1 = 1;
z2 = 2;
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

### Python Get

**语法:** y = Python Get( name )

**说明:** 从 Python 返回数据，其中 name 参数可以代表下列任何 Python 数据类型 (numeric | string | matrix | list | dict | data table | data frame | datetime | numpy.datetime64)。

**JMP添加的版本:** 14

**Datetime**

```jsl

Names Default To Here( 1 );

date1 = As Date( Today() );
Python Send( date1 );
date2 = Python Get( date1 );
Show( date1, date2 );

```

**numpy.datetime64**

```jsl

Names Default To Here( 1 );

Python Install Packages( "numpy" );
Python Submit( "import numpy as np" );
Python Submit( "datetime64 = np.datetime64('1989-10-05')" );
numpy_datetime = Python Get( datetime64 );
Show( numpy_datetime );

```

**示例 1**

```jsl

Names Default To Here( 1 );

x1 = {1, 2, 3};
Python Send( x1 );
x2 = Python Get( x1 );
Show( x1, x2 );

```

### Python Get Version

**语法:** version = Python Get Version()

**说明:** 返回与 JMP Python 界面一起使用的 Python 版本号。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
version = Python Get Version();
Show( version );

```

### Python Init

**语法:** PythonConnection = Python Init( )

**说明:** 注意: 自 JMP 18 起该函数已废弃，它等价于 Python Connect()。

**JMP添加的版本:** 14

**示例 1**

```jsl

Names Default To Here( 1 );

Python Init();
Python Submit( "\[
str = 'The quick brown fox jumps over the lazy dog';
]\" );
getStr = Python Get( str );
Show( getStr );

```

**示例 2**

```jsl

Names Default To Here( 1 );

PythonConnection = Python Init();
PythonConnection << Submit( "\[
str = 'The quick brown fox jumps over the lazy dog';
]\" );
getStr = Python Get( str );
Show( getStr );

```

### Python Install Packages

**语法:** Python Install Packages( packages )

**说明:** 这将 Python 包的安装包装到 JMP 软件安装点包目录中。对于简单包安装之外的操作，请参见 Python Create JPIP CMD() 以在使用 Directory Pick() 选择的目录中创建命令行 pip 包装脚本。此外，要从 JMP Python 脚本窗口运行安装，请查看“脚本索引”中 Python 类别下的 jmputils.jpip。

**JMP添加的版本:** 18

**示例 1**

```jsl

Names Default To Here( 1 );
// install numpy and pandas packages
Python Install Packages( "numpy pandas" );

```

**示例 2**

```jsl

Names Default To Here( 1 );
// install numpy and pandas packages
Python Install Packages( {"numpy", "pandas"} );

```

**示例 3**

```jsl

Names Default To Here( 1 );
// install numpy and pandas packages
conn = Python Connect();
conn << Install Packages( "numpy pandas" );

```

### Python Is Connected

**语法:** connected = Python Is Connected()

**说明:** 注意: 自 JMP 18 起该函数已废弃，并且始终返回 1。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
x = Python Is Connected();
Show( x );

```

### Python JMP Name to Python Name

**语法:** Python name = Python JMP Name To Python Name( JMP name )

**说明:** 使用 Python 变量命名规则将 JMP 变量名称映射到 Python 变量名称。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
Python name = Python JMP Name to Python Name( a b c );
Show( Python name );

```

### Python Reset

**语法:** Python Reset()

**说明:** Resets the shared Python environment, primarily clearing all references to objects. This does not change the import cache of imported modules. This is a limitation of the Python environment itself.  Modules that load shared libraries cannot be unloaded by the running process. To reload pure Python code, see the Python.org documentation on importlib reload().

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
pi = 3.1415927;
Python Send( pi );
Python Submit( "print(pi)" );
Python Reset();
// will show error, pi not defined
Python Submit( "print(pi)" );

```

### Python Send

**语法:** Python Send( name, &lt;Python Name( name ) | "as_name" &gt; )

**说明:** Sends data to Python, where the name argument can represent any of the following JMP data types ( numeric | string | matrix | list | data table | data table column | date ).

**JMP添加的版本:** 14

**列**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Python Send( dt:weight );
Python Submit( "print(weight)" );

```

**数据表**

```jsl

Names Default To Here( 1 );

x = {1, 2, 3};
Python Send( x );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Python Send( dt );
Python Submit( "print(x)" );
Python Submit( "print(dt)" );

```

**日期**

```jsl

Names Default To Here( 1 );

date = As Date( Today() );
Python Send( date );
Python Submit( "print(date)" );

```

### Python Send File

**语法:** Python Send File( filename, &lt;Python Name( name )&gt; )

**说明:** 将数据文件发送至 Python，其中 filename 参数是一个字符串，用于指定将要发送至 Python 的文件的路径名。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

Python Send File( "$SAMPLE_DATA/Big Class.jmp" );
Python Send File( "$SAMPLE_DATA/Baseball.jmp" );
Python Submit( "print(Big_Class)" );
Python Submit( "print(Baseball)" );

```

### Python Submit

**语法:** Python Submit( statements &lt; , echo( 1 | 0 ) &gt; )

**说明:** 将语句提交至 Python。语句可以采用字符串值或字符串值列表的形式。可选 echo() 参数默认值为 1。echo 参数控制将 Python 源回显到日志。逻辑 True (1) 允许对源回显，而 0 禁止回显到日志。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
Python Submit( "\[
str = 'The quick brown fox jumps over the lazy dog'
a = 200]\" );
getStr = Python Get( str );
getNum = Python Get( a );
Show( getStr, getNum );

```

### Python Submit File

**语法:** Python Submit File( path )

**说明:** 使用 path 参数指定的文件将语句提交至 Python。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
Python Submit File( "some_Python_source.py" );

```

### Python Term

**语法:** Python Term()

**说明:** 注意: 自 JMP 18 起该函数已废弃，并且没有任何作用。

**JMP添加的版本:** 14

