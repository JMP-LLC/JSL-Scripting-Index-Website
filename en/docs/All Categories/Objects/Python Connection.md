# Python Connection



## Item Messages

### Create JPIP CMD

**Syntax:** obj &lt;&lt; Create JPIP CMD()

**Description:** Triggers the creation of a jpip command line wrapper script for Python&apos;s pip command. A directory picker dialog will ask where to save the generated script. This script then provides the full capabilities of pip, while correctly establishing the necessary environment variables for JMP&apos;s isolated Python environment.

**Example 1**

```jsl

Names Default To Here( 1 );
// install numpy and pandas packages
conn = Python Connect();
conn << Create JPIP CMD();

```

**Example 2**

```jsl

Names Default To Here( 1 );
Python Create JPIP CMD();

```

### Disconnect

**Syntax:** obj &lt;&lt; Disconnect

**Description:** Note: This function is deprecated as of JMP 18 and has no effect.

### Execute

**Syntax:** list = obj &lt;&lt; Execute( { list of Inputs }, { list of Outputs }, statements &lt; , echo( 1 | 0 ) &gt; )

**Description:** Sends a list of inputs, executes statements and returns a list of outputs. Optional echo() parameter defaults to True. The echo parameter controls echoing the Python source to the log. Logical True (1) enables echo of source while 0 suppresses the echo to the log.

**Example 1**

```jsl

Names Default To Here( 1 );
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

**Example 2**

```jsl

Names Default To Here( 1 );
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

**Syntax:** y = obj &lt;&lt; Get( name )

**Description:** Returns data from Python, where the name argument can represent any of the following Python data types ( numeric | string | matrix | list | dict | data table | data frame | datetime | numpy.datetime64 ).

**Datetime**

```jsl

Names Default To Here( 1 );

PythonConnection = Python Connect();
date1 = As Date( Today() );
PythonConnection << Set( date1 );
date2 = PythonConnection << Get( date1 );
Show( date1, date2 );

```

**Example 1**

```jsl

Names Default To Here( 1 );

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

**numpy.datetime64**

```jsl

Names Default To Here( 1 );

PythonConnection = Python Connect();
PythonConnection << Install Packages( "numpy" );
PythonConnection << Submit( "import numpy as np" );
PythonConnection << Submit( "datetime64 = np.datetime64('1989-10-05')" );
numpy_datetime = PythonConnection << Get( datetime64 );
Show( numpy_datetime );

```

### Get Version

**Syntax:** version = obj &lt;&lt; Get Version

**Description:** Returns the version number of Python used in the current connection.

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
version = PythonConnection << Get Version;
Show( version );

```

### Install Packages

**Syntax:** obj &lt;&lt; Install Packages( packages )

**Description:** This wraps the install of Python packages into the JMP site-packages directory. For operations beyond simple package installation, see Python Create JPIP CMD() to create a command line pip wrapper script in a directory chosen with Directory Pick(). Alternatively, to run the install from a JMP Python script window, look at jmputils.jpip under the Python category here in the Scripting Index.

**Example 1**

```jsl

Names Default To Here( 1 );
// install numpy and pandas packages
conn = Python Connect();
conn << Install Packages( "numpy pandas" );

```

**Example 2**

```jsl

Names Default To Here( 1 );
// install numpy and pandas packages
Python Install Packages( "numpy pandas" );

```

**Example 3**

```jsl

Names Default To Here( 1 );
// install numpy and pandas packages
Python Install Packages( {"numpy", "pandas"} );

```

### Is Connected

**Syntax:** x = obj &lt;&lt; Is Connected

**Description:** Note: This function is deprecated as of JMP 18 and always returns 1.

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
x = PythonConnection << Is Connected;
Show( x );

```

### JMP Name To Python Name

**Syntax:** Python Name = PythonConnection &lt;&lt; JMP Name To Python Name( JMP name )

**Description:** Maps a JMP variable name to a Python variable name using Python variable naming rules.

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
Python Name = PythonConnection << JMP Name To Python Name( a b c );
Show( Python Name );

```

### Reset

**Syntax:** PythonConnection &lt;&lt; Reset

**Description:** Reset the shared Python environment.

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
pi = 3.1415927;
PythonConnection << Send( pi );
PythonConnection << Submit( "print(pi)" );
PythonConnection << Reset();
// will show error, pi not defined
PythonConnection << Submit( "print(pi)" );

```

### Send

**Syntax:** y = obj &lt;&lt; Send( name, &lt;Python Name( name )&gt; )

**Description:** Sends data to Python, where the name argument can represent any of the following JMP data types ( numeric | string | matrix | list | data table | date ).

**Date**

```jsl

Names Default To Here( 1 );

PythonConnection = Python Connect();
date = As Date( Today() );
PythonConnection << Send( date );
PythonConnection << Submit( "print(date)" );

```

**Example 1**

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
x = [1, 2, 3];
PythonConnection << Send( x );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
PythonConnection << Send( dt );
PythonConnection << Submit( "print(x)" );
PythonConnection << Submit( "print(dt)" );

```

### Send File

**Syntax:** y = obj &lt;&lt; Send File( filename, &lt;Python Name( name )&gt; )

**Description:** Sends a data file to Python, where the filename argument is a string specifying a pathname to the file to be sent to Python.

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
PythonConnection << Send File( "$SAMPLE_DATA/Big Class.jmp" );
dtname = "$SAMPLE_DATA/Baseball.jmp";
PythonConnection << Send File( dtname );
PythonConnection << Submit( "print(Big_Class)" );
PythonConnection << Submit( "print(Baseball)" );

```

### Set

**Syntax:** y = obj &lt;&lt; Set( name, &lt;Python Name( name )&gt; )

**Description:** Sends data to Python, where the name argument can represent any of the following JMP data types ( numeric | string | matrix | list | data table | date ).

**Date**

```jsl

Names Default To Here( 1 );

PythonConnection = Python Connect();
date = As Date( Today() );
PythonConnection << Set( date );
PythonConnection << Submit( "print(date)" );

```

**Example 1**

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
x = [1, 2, 3];
PythonConnection << Set( x );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
PythonConnection << Set( dt );
PythonConnection << Submit( "print(x)" );
PythonConnection << Submit( "print(dt)" );

```

### Submit

**Syntax:** obj &lt;&lt; Submit( statements &lt; , echo( 1 | 0 ) &gt; )

**Description:** Submits statements to Python. Statements can be in the form of a string value or list of string values. Optional echo() parameter defaults to True. The echo parameter controls echoing the Python source to the log. Logical True (1) enables echo of source while 0 suppresses the echo to the log.

```jsl

Names Default To Here( 1 );
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

**Syntax:** obj &lt;&lt; Submit File( path )

**Description:** Submits statements to Python using a file specified by the path argument.

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
PythonConnection << Submit File( "some_Python_source.py" );

```

