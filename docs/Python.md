# Python



### Python Connect

**Syntax:** PythonConnection = Python Connect ()

**Description:** Returns a Python connection scriptable object.

**JMP Version Added:** 14

```

Names Default To Here( 1 );
PythonConnection = Python Connect();
version = PythonConnection << Get Version;
Show( version );

```

### Python Create JPIP CMD

**Syntax:** Python Create JPIP CMD()

**Description:** Triggers the creation of a jpip command line wrapper script for Python&apos;s pip command. A directory picker dialog will ask for the directory location to save the generated script. This script then provides the full capabilities of pip, while correctly establishing the necessary environment variables for JMP&apos;s isolated Python environment.

**JMP Version Added:** 18

**Example 1**

```

Names Default To Here( 1 );
Python Create JPIP CMD();

```

**Example 2**

```

Names Default To Here( 1 );
// install numpy and pandas packages
conn = Python Connect();
conn << Create JPIP CMD();

```

### Python Execute

**Syntax:** Python Execute( { list of Inputs }, { list of Outputs }, statements < , echo( 1 | 0 ) > )

**Description:** Sends a list of inputs, executes statements and returns a list of outputs. Optional echo() parameter defaults to True. The echo parameter controls echoing the Python source to the log. Logical True (1) enables echo of source while 0 suppresses the echo to the log.

**JMP Version Added:** 14

**Example 1**

```

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

**Example 2**

```

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

**Syntax:** y = Python Get( name )

**Description:** Returns data from Python, where the name argument can represent any of the following Python data types ( numeric | string | matrix | list | dict | data table | data frame | datetime | numpy.datetime64 ).

**JMP Version Added:** 14

**Datetime**

```

Names Default To Here( 1 );

date1 = As Date( Today() );
Python Send( date1 );
date2 = Python Get( date1 );
Show( date1, date2 );

```

**Example 1**

```

Names Default To Here( 1 );

x1 = {1, 2, 3};
Python Send( x1 );
x2 = Python Get( x1 );
Show( x1, x2 );

```

**numpy.datetime64**

```

Names Default To Here( 1 );

Python Install Packages( "numpy" );
Python Submit( "import numpy as np" );
Python Submit( "datetime64 = np.datetime64('1989-10-05')" );
numpy_datetime = Python Get( datetime64 );
Show( numpy_datetime );

```

### Python Get Version

**Syntax:** version = Python Get Version()

**Description:** Returns the version number of Python being used with the JMP Python interfaces.

**JMP Version Added:** 14

```

Names Default To Here( 1 );
version = Python Get Version();
Show( version );

```

### Python Init

**Syntax:** PythonConnection = Python Init( )

**Description:** Note: This function is deprecated as of JMP 18 and is equivalent to Python Connect().

**JMP Version Added:** 14

**Example 1**

```

Names Default To Here( 1 );

Python Init();
Python Submit( "\[
str = 'The quick brown fox jumps over the lazy dog';
]\" );
getStr = Python Get( str );
Show( getStr );

```

**Example 2**

```

Names Default To Here( 1 );

PythonConnection = Python Init();
PythonConnection << Submit( "\[
str = 'The quick brown fox jumps over the lazy dog';
]\" );
getStr = Python Get( str );
Show( getStr );

```

### Python Install Packages

**Syntax:** Python Install Packages( packages )

**Description:** This wrappers the install of Python packages into the JMP site-packages directory. For operations beyond simple package installation, see Python Create JPIP CMD() to create a command line pip wrapper script in a directory chosen with Directory Pick(). Alternatively, to run the install from a JMP Python script window look at jmputils.jpip under the Python category here in the Scripting Index.

**JMP Version Added:** 18

**Example 1**

```

Names Default To Here( 1 );
// install numpy and pandas packages
Python Install Packages( "numpy pandas" );

```

**Example 2**

```

Names Default To Here( 1 );
// install numpy and pandas packages
Python Install Packages( {"numpy", "pandas"} );

```

**Example 3**

```

Names Default To Here( 1 );
// install numpy and pandas packages
conn = Python Connect();
conn << Install Packages( "numpy pandas" );

```

### Python Is Connected

**Syntax:** connected = Python Is Connected()

**Description:** Note: This function is deprecated as of JMP 18 and always returns 1.

**JMP Version Added:** 14

```

Names Default To Here( 1 );
x = Python Is Connected();
Show( x );

```

### Python JMP Name to Python Name

**Syntax:** Python name = Python JMP Name To Python Name( JMP name )

**Description:** Maps a JMP variable name to a Python variable name using Python variable naming rules.

**JMP Version Added:** 14

```

Names Default To Here( 1 );
Python name = Python JMP Name to Python Name( a b c );
Show( Python name );

```

### Python Send

**Syntax:** Python Send( name, <Python Name( name ) | "as_name" > )

**Description:** Python, where the name argument can represent any of the following JMP data types ( numeric | string | matrix | list | data table | data table column | date ).

**JMP Version Added:** 14

**Column**

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Python Send( dt:weight );
Python Submit( "print(weight)" );

```

**Data Table**

```

Names Default To Here( 1 );

x = {1, 2, 3};
Python Send( x );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Python Send( dt );
Python Submit( "print(x)" );
Python Submit( "print(dt)" );

```

**Date**

```

Names Default To Here( 1 );

date = As Date( Today() );
Python Send( date );
Python Submit( "print(date)" );

```

### Python Send File

**Syntax:** Python Send File( filename, <Python Name( name )> )

**Description:** Sends a data file to Python, where the filename argument is a string specifying a pathname to the file to be sent to Python.

**JMP Version Added:** 14

```

Names Default To Here( 1 );

Python Send File( "$SAMPLE_DATA/Big Class.jmp" );
Python Send File( "$SAMPLE_DATA/Baseball.jmp" );
Python Submit( "print(Big_Class)" );
Python Submit( "print(Baseball)" );

```

### Python Submit

**Syntax:** Python Submit( statements < , echo( 1 | 0 ) > )

**Description:** Submits statements to Python. Statements can be in the form of a string value or list of string values. Optional echo() parameter defaults to 1. The echo parameter controls echoing the Python source to the log. Logical True (1) enables echo of source while 0 suppresses the echo to the log.

**JMP Version Added:** 14

```

Names Default To Here( 1 );
Python Submit( "\[
str = 'The quick brown fox jumps over the lazy dog'
a = 200]\" );
getStr = Python Get( str );
getNum = Python Get( a );
Show( getStr, getNum );

```

### Python Submit File

**Syntax:** Python Submit File( path )

**Description:** Submits statements to Python using a file specified by the path argument.

**JMP Version Added:** 14

```

Names Default To Here( 1 );
Python Submit File( "some_Python_source.py" );

```

### Python Term

**Syntax:** Python Term()

**Description:** Note: This function is deprecated as of JMP 18 and has no effect.

**JMP Version Added:** 14

