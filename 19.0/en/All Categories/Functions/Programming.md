# Programming



### Add Custom Functions

**Syntax:** Add Custom Functions({f1, f2, ...} | f)

**Description:** Defines a list of custom functions for use in scripting and the Formula Editor. The command also adds the list to the environment.

**JMP Version Added:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y}, x + y - 1 ) );
mySub = New Custom Function( "custom", "Sub", Function( {x, y}, x - y + 1 ) );
Add Custom Functions( {myAdd, mySub} );

```

### As Boolean

**Syntax:** b = As Boolean( x )

**Description:** Evaluates an expression and returns a Boolean value.

**JMP Version Added:** 14

```jsl

x = 45;
b = As Boolean( x > 2 );
Show( b );

```

### As Column

**Syntax:** y = :name;y = dataTable:name;y = As Column( name );y = As Column( dataTable, name )

**Description:** Accesses the specified column in the specified or current data table. An error is thrown if no such column or data table is found.

**JMP Version Added:** Before version 14

```jsl

exdt = Open( "$SAMPLE_DATA/Big Class.jmp" );
exdt:height[1] + :height[2] + As Column( "height" )[3];

```

### As Constant

**Syntax:** y = As Constant( x )

**Description:** Evaluates an expression to create a constant value that does not change after it has been computed

**JMP Version Added:** Before version 14

**Example 1**

```jsl

New Table( "As Constant Demo Table 1",
	Add Rows( 10 ),
	New Column( "Non-Constant", Formula( Random Uniform() ) ),
	New Column( "Constant", Formula( As Constant( Random Uniform() ) ) )
);

```

**Example 2**

```jsl

New Table( "As Constant Demo Table 2",
	Add Rows( 1000 ),
	New Column( "What's on Your Desktop?",
		"character",
		Formula(
			As Constant( xFiles = Files In Directory( "$Desktop" ) );
			iR = Row();
			If( iR <= N Items( xFiles ),
				xFiles[iR],
				"---"
			);
		)
	)
);

```

**Example 3**

```jsl

For( i = 1, i <= 10, i++,
	x = 2;
	y = 100;
	z = As Constant( x + y );
	x *= i;
	y /= i;
	Show( i, x + y, z );
);

```

### As Global

**Syntax:** y = ::name; y = As Global( name )

**Description:** Accesses the specified global variable or throws an error if no such global variable exists.

**JMP Version Added:** Before version 14

```jsl

::ex = 23;
Local( {ex = 12}, Eval List( {ex, ::ex, As Global( "ex" )} ) );

```

### As List

**Syntax:** y = As List( matrix )

**Description:** Returns a list representation of a matrix. Multi-column matrices are converted to a list of lists, one per row, as would be expected by the Matrix operator.

**JMP Version Added:** Before version 14

```jsl

As List( [11 22 33, 44 55 66] );

```

### As Name

**Syntax:** y = As Name( s )

**Description:** Converts a string into a name or a list of strings into a list of names.

**JMP Version Added:** Before version 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:(As Name( "height" ))[3];

```

### As Namespace

**Syntax:** asns = As Namespace( ns )

**Description:** Accesses the specified Namespace or throws an error if no such namespace exists.

**JMP Version Added:** Before version 14

```jsl

ns = New Namespace(
	"complex"
);
As Namespace( ns );

```

### As Root

**Syntax:** y = :::name; y = As Root( name )

**Description:** Accesses the specified root-scoped variable or throws an error if no such root-scoped variable exists.

**JMP Version Added:** 15

```jsl

::: ex = 23;
Local( {ex = 12}, Eval List( {ex, ::: ex, As Global( "ex" )} ) );

```

### As Scoped

**Syntax:** y = namespace:variable; y = As Scoped( namespace, variable )

**Description:** Accesses the specified scoped variable or throws an error if no such scoped variable exists.

**JMP Version Added:** Before version 14

```jsl

Here:z = 23.5;
As Scoped( Here, z );

```

### Associative Array

**Syntax:** y = Associative Array( {{key1, value1}, ...} );y = Associative Array( keys, values )

**Description:** Creates an associative array, which is also known as a dictionary or a hash map. In the two-argument form, keys and values can be a list, matrix, or data table column.

**JMP Version Added:** Before version 14

```jsl

ex = Associative Array( {"red", "blue"}, {1, 2} );
ex["green"] = 3;
ex << get contents;

```

### Choose Closest

**Syntax:** Choose Closest(source string, {canonical strings...}, &lt;Ignore Case(ignore=1|0)&gt;, &lt;Ignore Nonprintable(ignore=1|0)&gt;, &lt;Ignore Whitespace(ignore=1|0)&gt;, &lt;Max Edit Count(count)&gt;, &lt;Max Edit Ratio([0..1])&gt;, &lt;Min String Length(&lt;count=3&gt;)&gt;, &lt;Replace Unmatched(replace=0|1)&gt;, &lt;Unmatched Value(&lt;value=""&gt;)&gt;)

**Description:** Pick the closest string within the given rules and return it. 

By default character case is ignored; use Ignore Case to specify.

By default non-printable characters are ignored; Use Ignore Nonprintable to specify.

By default, whitespace is ignored; use Ignore Whitespace to specify.

By default, character changes are not allowed to find a match.

	Use Max Edit Count to control how many edits may be made.

	Use Max Edit Ratio to control the percent change (in terms of characters in the original string) that is allowed.

	Both of these settings are applied if specified.

By default, strings shorter than 3 characters will not be matched; use Min String Length to specify a different length.

Unmatched strings

	By default, if no canonical string matches within the given rules, the source string is returned.

	Use Replace Unmatched to specify whether the source string will be returned.

	Use Unmatched to specify the value to be returned.

**JMP Version Added:** 15

#### Allow edits

```jsl

Choose Closest( "MARTA", {"MARTHA"}, Max Edit Count( 2 ) );

```

#### Choose among strings, no edits

```jsl

Choose Closest( "MARTHA_", {"Martha", "MARY"} );

```

#### Keep punctuation

```jsl

Choose Closest( "MARTHA_", {"MARTHA"}, Ignore Punctuation( 0 ) );

```

#### Unmatched

```jsl

Choose Closest( "MARTHA", {"Martha"}, Ignore Case( 0 ), Unmatched() );

```

### Class Exists

**Syntax:** nsexists = Class Exists( class name )

**Description:** Returns 1 if the class specified by the name argument exists. Otherwise, a 0 is returned.

**JMP Version Added:** Before version 14

```jsl

Define Class(
	"complex",
	real = 0;
	imag = 0;
	_init_ = Method( {a, b},
		real = a;
		imag = b;
	);
	Add = Method( {y},
		New Object( complex( real + y:real, imag + y:imag ) )
	);
	Sub = Method( {y},
		New Object( complex( real - y:real, imag - y:imag ) )
	);
	Mul = Method( {y},
		New Object( complex( real * y:real - imag * y:imag, imag * y:real + real * y:imag ) )
	);
	Div = Method( {y},
		t = New Object( complex( 0, 0 ) );
		mag2 = y:Magsq();
		t:real = real * y:real + imag * y:imag;
		t:imag = imag * y:real + real * y:imag;
		t:real = t:real / mag2;
		t:imag = t:imag / mag2;
		t;
	);
	Magsq = Method( {},
		real * real + imag * imag
	);
	Mag = Method( {},
		Sqrt( real * real + imag * imag )
	);
	_to string_ = Method( {},
		Char( real ) || " + " || Char( imag ) || "i"
	);
	_show_ = _to string_;
);
cl = New Object( complex( 1, 2 ) );
clexists = Class Exists( cl );
Show( clexists );
cl << Delete;
Delete Classes( "complex" );

```

### Clear Globals

**Syntax:** Clear Globals( &lt; varname, ... &gt; )

**Description:** Clears the values of all currently defined global symbols.

**JMP Version Added:** Before version 14

```jsl

Clear Globals();

```

### Clear Log

**Syntax:** Clear Log()

**Description:** Makes the log empty.

**JMP Version Added:** Before version 14

```jsl

Clear Log();

```

### Clear Symbols

**Syntax:** Clear Symbols( &lt; varname, ... &gt; )

**Description:** Clears the values of all currently defined symbols.

**JMP Version Added:** Before version 14

```jsl

Clear Symbols();

```

### Close Log

**Syntax:** Close Log()

**Description:** Close the log window

**JMP Version Added:** Before version 14

```jsl

Close Log();
Show( Is Log Open() );

```

### Define Class

**Syntax:** Define Class("class name", &lt;Base Class{ "base class name", ... }&gt;, &lt;Show( All( boolean ) | ( Members( boolean ) | Methods( boolean ) | Functions( boolean ) )+ )&gt;, { method* | member* | function* } )

**Description:** Define a New Class

**JMP Version Added:** 14

```jsl

Define Class(
	"complex",
	real = 0;
	imag = 0;
	_init_ = Method( {a, b},
		real = a;
		imag = b;
	);
	Add = Method( {y},
		New Object( complex( real + y:real, imag + y:imag ) )
	);
	Sub = Method( {y},
		New Object( complex( real - y:real, imag - y:imag ) )
	);
	Mul = Method( {y},
		New Object( complex( real * y:real - imag * y:imag, imag * y:real + real * y:imag ) )
	);
	Div = Method( {y},
		t = New Object( complex( 0, 0 ) );
		mag2 = y:Magsq();
		t:real = real * y:real + imag * y:imag;
		t:imag = imag * y:real + real * y:imag;
		t:real = t:real / mag2;
		t:imag = t:imag / mag2;
		t;
	);
	Magsq = Method( {},
		real * real + imag * imag
	);
	Mag = Method( {},
		Sqrt( real * real + imag * imag )
	);
	_to string_ = Method( {},
		Char( real ) || " + " || Char( imag ) || "i"
	);
	_show_ = _to string_;
);
cl = New Object( complex( 1, 2 ) );
cl << Delete;
Delete Classes( complex );

```

### Delete Classes

**Syntax:** Delete Classes( &lt;Force( boolean )&gt;, &lt;class reference, ...&gt; )

**Description:** Deletes all class definitions or one or more specific class definitions.

**JMP Version Added:** Before version 14

```jsl

Define Class(
	"aa",
	{_init_ = Method( {} ), x = 1, m1 = Method( {a, b}, a * b )}
);
Define Class(
	"bb",
	{_init_ = Method( {} ), y = 1, m2 = Method( {a, b}, a / b )}
);
lcaa = New Object( aa() );
lcbb = New Object( bb() );
lcl = Get Classes();
Show( lcl );
Show Classes();
Clear Symbols( lcl );
lcaa << Delete;
lcbb << Delete;
Delete Classes( "aa", "bb" );
Show Classes();

```

### Delete Globals

**Syntax:** Delete Globals( &lt; varname, ... &gt; )

**Description:** Deletes all the currently defined global symbols and their values.

**JMP Version Added:** Before version 14

```jsl

Delete Globals();

```

### Delete Namespaces

**Syntax:** Delete Namespaces( &lt;Force( boolean )&gt;, &lt;namespace reference, ...&gt; )

**Description:** Deletes all namespaces or one or more specific namespaces.

**JMP Version Added:** Before version 14

```jsl


nsaa = New Namespace(
	"aa",
	{
		x = 1
	}
);
nsbb = New Namespace(
	"bb",
	{
		y = 1
	}
);
Show Namespaces();
Delete Namespaces( nsaa, nsbb );
Show Namespaces();

```

### Delete Symbols

**Syntax:** Delete Symbols( &lt; varname, ... &gt; )

**Description:** Deletes all the currently defined symbols and their values.

**JMP Version Added:** Before version 14

```jsl

Delete Symbols();

```

### Eval

**Syntax:** y = Eval( x )

**Description:** Evaluates the argument and returns the result.

**JMP Version Added:** Before version 14

```jsl

Eval( Expr( 1 + 2 ) );

```

### Eval Insert

**Syntax:** y = Eval Insert( string, &lt;startChar="^"&gt;, &lt;endChar=startChar&gt; )

**Description:** Looks for substrings enclosed by the startChar/endChar pair and replaces them with the evaluated expression within.

**JMP Version Added:** Before version 14

```jsl

Eval Insert( "Today is ^As Date( Today())^" );

```

### Eval Insert Into

**Syntax:** Eval Insert Into( l_string, &lt;startChar="^"&gt;, &lt;endChar=startChar&gt; )

**Description:** Looks for substrings enclosed by the startChar/endChar pair and replaces them with the evaluated expression within, replacing l_string.

**JMP Version Added:** Before version 14

```jsl

ex = "Today is ^As Date( Today())^";
Eval Insert Into( ex );
ex;

```

### Eval List

**Syntax:** y = Eval List( list )

**Description:** Returns a list where every item in the list has been evaluated.

**JMP Version Added:** Before version 14

**Example 1**

```jsl

Eval List( {1 + 2, 3 + 4} );

```

**Example 2**

```jsl

x = 5;
y = 10;
Eval List( {x, y} );

```

### Exit

**Syntax:** Quit(&lt;"No Save"&gt;); Exit(&lt;"No Save"&gt;)

**Description:** Exits JMP.

**JMP Version Added:** Before version 14

```jsl

If(
	New Window( "Exit() example",
		<<Type( "Modal" ),
		Text Box( "Shut down JMP?" ),
		H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
	)["Button"] == 1, /*OK==1*/Exit(), /*cancel==-1*/"Good choice."
);

```

### First

**Syntax:** y = First( x1, x2, ... )

**Description:** Evaluates each argument and returns the value of the first argument.

**JMP Version Added:** Before version 14

```jsl

First( 11, 22 );

```

### Function

**Syntax:** y = Function( {arg1=val1, ...}, &lt;{local1=val1, ...}&gt;, expr )

**Description:** Defines a function with the specified arguments, default values, and optional local variables. Arguments with default values are optional on invocation of the function. If Return() is used within the function&apos;s script, the expression within is returned.

**JMP Version Added:** Before version 14

**Example 1**

```jsl

exsqr = Function( {x}, x * x );
exsqr( 5 );

```

**Example 2**

```jsl

// y is an optional argument
exmul = Function( {x, y = 3}, x * y );
a = exmul( 5 );
b = exmul( 5, 10 );
Show( a, b );

```

**Example 3**

```jsl

posorneg = Function( {x},
	{},
	If(
		x > 0, Return( "positive" ),
		x == 0, Return( "zero" ),
		Return( "negative" )
	)
);
posorneg( -5.5 );

```

### Get Class Names

**Syntax:** Get Class Names( &lt; &lt;class reference&gt;, ... &gt; )

**Description:** Returns a list of names of all currently defined classes.

**JMP Version Added:** 14

```jsl

Define Class(
	"aa",
	{_init_ = Method( {} ), x = 1, m1 = Method( {a, b}, a * b )}
);
Define Class(
	"bb",
	{_init_ = Method( {} ), y = 1, m2 = Method( {a, b}, a / b )}
);
lcaa = New Object( aa() );
lcbb = New Object( bb() );
lcl = Get Class Names();
Show( lcl );
lcaa << Delete;
lcbb << Delete;
Delete Classes( "aa", "bb" );

```

### Get Classes

**Syntax:** Get Classes( &lt; &lt;class reference&gt;, ... &gt; )

**Description:** Returns a list of references to all currently defined classes

**JMP Version Added:** Before version 14

```jsl

Define Class(
	"aa",
	{_init_ = Method( {} ), x = 1, m1 = Method( {a, b}, a * b )}
);
Define Class(
	"bb",
	{_init_ = Method( {} ), y = 1, m2 = Method( {a, b}, a / b )}
);
lcaa = New Object( aa() );
lcbb = New Object( bb() );
lcl = Get Classes();
Show( lcl );
Clear Symbols( lcl );
lcaa << Delete;
lcbb << Delete;
Delete Classes( "aa", "bb" );

```

### Get Custom Functions

**Syntax:** Get Custom Functions(&lt;{function 1 full name, function 2 full name, ...} | function full name&gt;)

**Description:** Get a list of custom functions

**JMP Version Added:** 14

**Example 1**

```jsl

Get Custom Functions();

```

**Example 2**

```jsl

Get Custom Functions( {"custom:Add", "custom:Sub"} );

```

### Get Environment Variable

**Syntax:** value = Get Environment Variable( string )

**Description:** Returns the value of the specified environment variable from the operating system.



NOTE: On the Macintosh operating system, the variable name is case-sensitive.

**JMP Version Added:** Before version 14

```jsl

Get Environment Variable( "PATH" );

```

### Get Locale Setting

**Syntax:** value = Get Locale Setting( settingName )

**Description:** Retrieves a locale setting such as decimal separator

**JMP Version Added:** 16

```jsl

Get Locale Setting( "Decimal Separator" );

```

### Get Log

**Syntax:** list = Get Log( &lt;N&gt; )

**Description:** Returns a list of lines from the log. If no argument is specified, all the lines from the log are returned. If the numeric argument N is positive, the first N lines from the log are returned. If N is negative, the last N lines from the log are returned. If N is zero, no lines are returned.

**JMP Version Added:** Before version 14

```jsl

all contents = Get Log();
headcontents = Get Log( 10 );
tailcontents = Get Log( -5 );

```

### Get Namespace Names

**Syntax:** Get Namespace Names( &lt; &lt;namespace reference&gt;, ... &gt; )

**Description:** Returns a list of names of all currently defined namespaces.

**JMP Version Added:** 14

```jsl

nsaa = New Namespace(
	"aa",
	{
		x = 1
	}
);
nsbb = New Namespace(
	"bb",
	{
		y = 1
	}
);
lns = Get Namespace Names();
Show( lns );
nsaa << Delete;
nsbb << Delete;

```

### Get Namespaces

**Syntax:** Get Namespaces( &lt; &lt;namespace reference&gt;, ... &gt; )

**Description:** Returns a list of references to all currently defined namespaces

**JMP Version Added:** Before version 14

```jsl

nsaa = New Namespace(
	"aa",
	{
		x = 1
	}
);
nsbb = New Namespace(
	"bb",
	{
		y = 1
	}
);
lns = Get Namespaces();
Show( lns );
Clear Symbols( lns );
nsaa << Delete;
nsbb << Delete;

```

### Get Punctuation Characters

**Syntax:** Get Punctuation Characters(&lt;Exclude Chars(chars) | Include Chars(chars)&gt;)

**Description:** Returns a string containing the punctuation characters that are typically used for delimiting words. These include ,:;.?!\\/#@&~()[]<>"\*`%$+=^|{} and some common Unicode punctuation.

**JMP Version Added:** 15

**Example 1**

```jsl

Get Punctuation Characters();

```

**Example 2**

```jsl

Get Punctuation Characters( Include Chars( "_" ) );

```

**Example 3**

```jsl

Get Punctuation Characters( Exclude Chars( "$[]" ) );

```

**Example 4**

```jsl

Collapse Whitespace(
	Substitute( "This...string..has..dots", Items( Get Punctuation Characters(), "" ), " " )
);

```

### Get Session Script

**Syntax:** Get Session Script( win1, ... )

**Description:** Returns the session script for the specified windows. The session script is a JSL expression that will recreate the given windows, including data tables, script windows, journals, and reports. Reports created via JSL scripts have limited support, and will only attempt to recreate the display layout.

**JMP Version Added:** 17

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << RunScript( "Bivariate" );
Get Session Script( Report( biv ) );

```

### Get Whitespace Characters

**Syntax:** Get Whitespace Characters()

**Description:** Returns a string containing all of the whitespace characters that are typically used.

**JMP Version Added:** Before version 14

```jsl

Get Whitespace Characters();

```

### Include

**Syntax:** y = Include( filepath, &lt; &lt;&lt;Parse Only&gt;, &lt; &lt;&lt;New Context&gt;, &lt; &lt;&lt;Names Default to Here&gt; )

**Description:** Executes the JSL in the specified file. If Parse Only is specified, the script is parsed rather than executed. If New Context is specified, the included JSL is executed in its own unique namespace. If both the parent and included scripts use the global namespace, then specify both New Context and Names Default to Here to avoid name collisions.

**JMP Version Added:** Before version 14

```jsl

Include( "$SAMPLE_SCRIPTS/chaosGame.jsl" );

```

### Include File List

**Syntax:** y = Include File List()

**Description:** Returns a list of included files at the point of execution.

**JMP Version Added:** Before version 14

```jsl

y = Include File List();

```

### Is Log Open

**Syntax:** Is Log Open()

**Description:** Return result to indicate whether the log window is open

**JMP Version Added:** Before version 14

**Example 1**

```jsl

If( Is Log Open(),
	Close Log()
);

```

**Example 2**

```jsl

If( !Is Log Open(),
	Open Log()
);

```

### Length

**Syntax:** l = Length( x )

**Description:** Returns the length of the given string (in characters), list (in items), associative array (in number of keys), blob (in bytes), matrix (in elements), or namespace/class (in number of functions and variables).

**JMP Version Added:** Before version 14

**Example 1**

```jsl

Length( "Café" );

```

**Example 2**

```jsl

Length( {1, 2 + 3, [11 22]} );

```

**Example 3**

```jsl

Length( ["a" => 10, "b" => 3, => 0] );

```

**Example 4**

```jsl

Length( Char To Blob( "Café" ) );

```

### List

**Syntax:** y = {a, b, ...}; y = List( a, b, ... )

**Description:** Creates a list of items without evaluating them.

**JMP Version Added:** Before version 14

```jsl

{1, 2 + 3, [11 22]};

```

### Local

**Syntax:** y = Local( {name=value, ...}, expression )

**Description:** Resolves names to local variables.

**JMP Version Added:** Before version 14

```jsl

Local( {a = 1, b},
	b = 2;
	a + b;
);

```

### Local Here

**Syntax:** y = Local Here( expression )

**Description:** Executes expression with local Names Default To Here(1)

**JMP Version Added:** Before version 14

```jsl

y = Local Here(
	a = 1;
	b = 2;
	c = a + b;
	c;
);

```

### Lock Globals

**Syntax:** Lock Globals( name, ... )

**Description:** Locks specified global names, preventing them from being modified or being cleared by the Clear Globals function.

**JMP Version Added:** Before version 14

```jsl

exalpha = 0.05;
exdelta = 0.5;
Watch( exalpha, exdelta );
Wait( 3 );
Lock Globals( exalpha );
Wait( 3 );
Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );
Try( exdelta = 0.6, Show( "invalid - exdelta is locked" ) );
Wait( 3 );
Unlock Globals( exalpha );
Wait( 3 );
Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );

```

### Lock Symbols

**Syntax:** Lock Symbols( name, ... )

**Description:** Locks specified global names, preventing them from being modified or being cleared by the Clear Symbols function.

**JMP Version Added:** Before version 14

```jsl

exalpha = 0.05;
exdelta = 0.5;
Watch( exalpha, exdelta );
Wait( 3 );
Lock Symbols( exalpha );
Wait( 3 );
Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );
Try( exdelta = 0.6, Show( "invalid - exdelta is locked" ) );
Wait( 3 );
Unlock Symbols( exalpha );
Wait( 3 );
Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );

```

### Log Capture

**Syntax:** string = Log Capture( expr )

**Description:** Evaluates the expr argument and captures the output that would have appeared in the JMP log window and returns it in a string instead.

**JMP Version Added:** Before version 14

```jsl

"captured:" || Log Capture(
	For( i = 1, i <= 3, i++,
		Write( Char( i ) );
		Write( " " );
	)
);

```

### Map Value

**Syntax:** Map Value(string | number, {key1, value1...|{key1...},{value1...}}, &lt;Unmatched(value)&gt;)

**Description:** Evaluate the initial value and return the mapped result or a default.

**JMP Version Added:** 15

**Example 1**

```jsl

Map Value( "celry", {"celry", "celery"} );

```

**Example 2**

```jsl

Map Value( "carrot", {"celry", "celery"}, Unmatched( "not found" ) );

```

**Example 3**

```jsl

Map Value( 10, {10, "celery", 11, "banana"} );

```

**Example 4**

```jsl

Map Value( 10, {{1, 2, 3}, {100, 200, 300}} );

```

### Method

**Syntax:** m = Method( { arg1 = val1, ... }, expression* )

**Description:** Create a Method within a Class

**JMP Version Added:** Before version 14

```jsl

Define Class(
	"complex",
	real = 0;
	imag = 0;
	_init_ = Method( {a, b},
		real = a;
		imag = b;
	);
	Add = Method( {y},
		New Object( complex( real + y:real, imag + y:imag ) )
	);
	Sub = Method( {y},
		New Object( complex( real - y:real, imag - y:imag ) )
	);
	Mul = Method( {y},
		New Object( complex( real * y:real - imag * y:imag, imag * y:real + real * y:imag ) )
	);
	Div = Method( {y},
		t = New Object( complex( 0, 0 ) );
		mag2 = y:Magsq();
		t:real = real * y:real + imag * y:imag;
		t:imag = imag * y:real + real * y:imag;
		t:real = t:real / mag2;
		t:imag = t:imag / mag2;
		t;
	);
	Magsq = Method( {},
		real * real + imag * imag
	);
	Mag = Method( {},
		Sqrt( real * real + imag * imag )
	);
	_to string_ = Method( {},
		Char( real ) || " + " || Char( imag ) || "i"
	);
	_show_ = _to string_;
);
cl = New Object( complex( 1, 2 ) );
cl << Delete;
Delete Classes( "complex" );

```

### N Items

**Syntax:** y = N Items( x )

**Description:** Returns the number of items in a list, the number of elements in a matrix, the number of keys in an associative array, the number of functions and variables in a namespace, the number of methods and variables in a class object, or the number of children of a display box.

**JMP Version Added:** Before version 14

**Example 1**

```jsl

N Items( {1, 2 + 3, [11 22]} );

```

**Example 2**

```jsl

N Items( ["a" => 10, "b" => 3, => 0] );

```

**Example 3**

```jsl

New Window( "boxes", hlist = H List Box( Button Box( "a" ), Button Box( "b" ) ) );
N Items( hlist );

```

### Names Default To Here

**Syntax:** Names Default To Here( boolean )

**Description:** Determines where unresolved names are stored, either as a global/local ( 0 ) or in the Here: namespace ( 1 ).

**JMP Version Added:** Before version 14

```jsl

/* Variable x will be stored in the Here: namespace by default */x = 1;
Show( x );

```

### Namespace

**Syntax:** ns = Namespace( namespace reference )

**Description:** Return a reference to the namespace specified by the name argument.

**JMP Version Added:** Before version 14

```jsl

New Namespace(
	"complex",
	{
		make = Function( {a, b},
			Index( a, b, b - a )
		),
		add = Function( {x, y}, x + y ),
		sub = Function( {x, y}, x - y ),
		mul = Function( {x, y},
			local:z = J( 1, 2 );
			local:z[1] = x[1] * y[1] - x[2] * y[2];
			local:z[2] = x[1] * y[2] + x[2] * y[1];
			local:z;
		),
		div = Function( {x, y},
			local:z = J( 1, 2 );
			local:d = (y[1] ^ 2 + y[2] ^ 2);
			local:z[1] = (x[1] * y[1] + x[2] * y[2]) / local:d;
			local:z[2] = (x[2] * y[1] - x[1] * y[2]) / local:d;
			local:z;
		),
		write = Function( {x},
			Write( x[1], " + ", x[2], "i\!n" )
		)
	}
);
ns = Namespace( "complex" );
Show( ns );
ns << Delete;

```

### Namespace Exists

**Syntax:** nsexists = Namespace Exists( namespace reference )

**Description:** Returns 1 if the namespace specified by the name argument exists; otherwise a 0 is returned.

**JMP Version Added:** Before version 14

```jsl

ns = New Namespace(
	"complex",
	{
		make = Function( {a, b},
			Index( a, b, b - a )
		),
		add = Function( {x, y}, x + y ),
		sub = Function( {x, y}, x - y ),
		mul = Function( {x, y},
			local:z = J( 1, 2 );
			local:z[1] = x[1] * y[1] - x[2] * y[2];
			local:z[2] = x[1] * y[2] + x[2] * y[1];
			local:z;
		),
		div = Function( {x, y},
			local:z = J( 1, 2 );
			local:d = (y[1] ^ 2 + y[2] ^ 2);
			local:z[1] = (x[1] * y[1] + x[2] * y[2]) / local:d;
			local:z[2] = (x[2] * y[1] - x[1] * y[2]) / local:d;
			local:z;
		),
		write = Function( {x},
			Write( x[1], " + ", x[2], "i\!n" )
		)
	}
);
nsexists = Namespace Exists( ns );
Show( nsexists );
ns << Delete;

```

### New Custom Function

**Syntax:** f=New Custom Function(namespace, name, function definition)

**Description:** Create a new custom function object. A custom function will be colorized in the script editor and show up in the Scripting Index. The required information for a custom user function are a namespace (to prevent collisions with global functions), a name, and a function definition. Other help information can be added using messages. Use the Add Custom Functions command to publish the new function into the JMP environment.

**JMP Version Added:** 14

**Example 1**

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );

```

**Example 2**

```jsl

/*Create a custom function that can be used as a format*/
Add Custom Functions(
	{New Custom Function(
		"custom",
		"User Defined Format Function",
		Function( {inches},
			Char( inches ) || " in"
		),
		<<Custom Format Category( "Custom" ), 

	)}
);

```

**Example 3**

```jsl

/*Create a custom function that can be used as a transform*/
Add Custom Functions(
	{New Custom Function(
		"custom",
		"User Defined Transform Function",
		Function( {inches},
			inches * 2.54
		),
		<<Transform Category( "Custom" ), 

	)}
);

```

### New Namespace

**Syntax:** ns = New Namespace( &lt;name&gt;, &lt;list of expressions&gt; )

**Description:** Create a new namespace with the name specified by the name argument or with an anonymous name if name is not specified.

**JMP Version Added:** Before version 14

```jsl

ns = New Namespace(
	"complex",
	{
		make = Function( {a, b},
			Index( a, b, b - a )
		),
		add = Function( {x, y}, x + y ),
		sub = Function( {x, y}, x - y ),
		mul = Function( {x, y},
			local:z = J( 1, 2 );
			local:z[1] = x[1] * y[1] - x[2] * y[2];
			local:z[2] = x[1] * y[2] + x[2] * y[1];
			local:z;
		),
		div = Function( {x, y},
			local:z = J( 1, 2 );
			local:d = (y[1] ^ 2 + y[2] ^ 2);
			local:z[1] = (x[1] * y[1] + x[2] * y[2]) / local:d;
			local:z[2] = (x[2] * y[1] - x[1] * y[2]) / local:d;
			local:z;
		),
		write = Function( {x},
			Write( x[1], " + ", x[2], "i\!n" )
		)
	}
);
Show( ns );
ns << Delete;

```

### New Object

**Syntax:** New Object( "class name" | class name | class reference( constructor arguments* ) )

**Description:** Creates an instance object of a class.

**JMP Version Added:** 14

```jsl

Define Class(
	"complex",
	real = 0;
	imag = 0;
	_init_ = Method( {a, b},
		real = a;
		imag = b;
	);
	Add = Method( {y},
		New Object( complex( real + y:real, imag + y:imag ) )
	);
	Sub = Method( {y},
		New Object( complex( real - y:real, imag - y:imag ) )
	);
	Mul = Method( {y},
		New Object( complex( real * y:real - imag * y:imag, imag * y:real + real * y:imag ) )
	);
	Div = Method( {y},
		t = New Object( complex( 0, 0 ) );
		mag2 = y:Magsq();
		t:real = real * y:real + imag * y:imag;
		t:imag = imag * y:real + real * y:imag;
		t:real = t:real / mag2;
		t:imag = t:imag / mag2;
		t;
	);
	Magsq = Method( {},
		real * real + imag * imag
	);
	Mag = Method( {},
		Sqrt( real * real + imag * imag )
	);
	_to string_ = Method( {},
		Char( real ) || " + " || Char( imag ) || "i"
	);
	_show_ = _to string_;
);
cl = New Object( complex( 1, 2 ) );
cl << Delete;
Delete Classes( "complex" );

```

### Open Log

**Syntax:** Open Log( &lt;bring window to top&gt; )

**Description:** Open the log window

**JMP Version Added:** Before version 14

**Example 1**

```jsl

Open Log();
Show( Is Log Open() );

```

**Example 2**

```jsl

/* Bring Log Windows to the Top */
Open Log( 1 );
Show( Is Log Open() );

```

### Parameter

**Syntax:** y = Parameter( {name=value, ...}, model expression )

**Description:** Defines formula parameters for models for the Nonlinear platform.

**JMP Version Added:** Before version 14

```jsl

Parameter( {a = 1}, a + 1 );

```

### Parse

**Syntax:** y = Parse( s )

**Description:** Parses the string and returns the resulting JSL expression.

**JMP Version Added:** Before version 14

```jsl

Parse( "x+y" );

```

### Print

**Syntax:** Print( x, ... )

**Description:** Displays values of the arguments in the log, one per line.

**JMP Version Added:** Before version 14

```jsl

Print( 355 / 113, Pi() );

```

### Quit

**Syntax:** Quit(&lt;"No Save"&gt;); Exit(&lt;"No Save"&gt;)

**Description:** Exits JMP.

**JMP Version Added:** Before version 14

```jsl

If(
	New Window( "Quit() example",
		<<Type( "Modal" ),
		Text Box( "Shut down JMP?" ),
		H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
	)["Button"] == 1, /*OK==1*/Quit(), /*cancel==-1*/"Good choice."
);

```

### Recode

**Syntax:** recode(string|number|list, {&lt;transform&gt;, ...}, &lt;Multiple Response (Separator(sepChar))&gt;, &lt;By Word(Delimiters(&lt;chars&gt;)&gt;)

**Description:** Apply the listed transformations to the input value(s) and return the result. The Multiple Response and By Word options split supplied character data into smaller input values. Once the input values are determined, the transformations are applied to those values separately.

Special JSL variables are populated during the execution of the command:

	_rcNow is the current value of the input after the previous transformation(s).

	_rcOrig is the original value of the input.

**JMP Version Added:** 15

**Example 1**

```jsl

Recode(
	"27513-0000",
	{Regex( _rcNow, "(\d\d\d\d\d)-\d+", "\1", GLOBALREPLACE ), Num( _rcNow )}
);

```

**Example 2**

```jsl

Recode(
	"A B C",
	{Map Value( _rcNow, {"A", "Apple", "B", "Banana"}, Unmatched( "Unknown fruit" ) )},
	By Word
);

```

### Recurse

**Syntax:** y = Recurse( x1, ... )

**Description:** Calls the containing function.

**JMP Version Added:** Before version 14

```jsl

ex rev = Function( {s},
	If( Length( s ) <= 1,
		s,
		Recurse( Substr( s, 2 ) ) || Left( s, 1 )
	)
);
ex rev( "abcd" );

```

### Remove Custom Functions

**Syntax:** Remove Custom Functions({function 1 full name, function 2 full name, ...} | function full name)

**Description:** Removes a list of custom functions from the environment.

**JMP Version Added:** 14

```jsl

Remove Custom Functions( {"custom:Add", "custom:Sub"} );

```

### Save Log

**Syntax:** f = Save Log( &lt;path&gt; )

**Description:** Writes the contents of the log to the specified file location. If the write is successful, this function returns the name of the created file.

**JMP Version Added:** Before version 14

```jsl

Save Log( "$TEMP/log.txt" );
exlogText = Load Text File( "$TEMP/log.txt" );
Substr( exlogText, 1, 30 );

```

### Send

**Syntax:** r = obj &lt;&lt; msg( args ); r = obj &lt;&lt; msg; r = Send( obj, msg )

**Description:** Sends a message (in the form of an expression) to an object.

**JMP Version Added:** Before version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Bivariate( Y( :weight ), X( :height ) ) << Fit Line;

```

### Set Environment Variable

**Syntax:** value = Set Environment Variable( string, &lt; string&gt; )

**Description:** Sets the value of the specified environment variable in the operating system. If the second argument is either missing or is an empty string then the environment variable is deleted.



NOTE: On the Macintosh operating system, the variable name is case-sensitive.

**JMP Version Added:** Before version 14

```jsl

Set Environment Variable( "PATH", "some path to a directory" );

```

### Show

**Syntax:** Show( x, ... )

**Description:** Displays the name and value of the arguments in the log, one per line.

**JMP Version Added:** Before version 14

```jsl

Show( 355 / 113, Pi() );

```

### Show Classes

**Syntax:** Show Classes( &lt; &lt;class name | class reference&gt;, ... &gt; )

**Description:** Show the contents of all user-defined classes.

**JMP Version Added:** Before version 14

```jsl

Define Class(
	"complex",
	real = 0;
	imag = 0;
	_init_ = Method( {a, b},
		real = a;
		imag = b;
	);
	Add = Method( {y},
		New Object( complex( real + y:real, imag + y:imag ) )
	);
	Sub = Method( {y},
		New Object( complex( real - y:real, imag - y:imag ) )
	);
	Mul = Method( {y},
		New Object( complex( real * y:real - imag * y:imag, imag * y:real + real * y:imag ) )
	);
	Div = Method( {y},
		t = New Object( complex( 0, 0 ) );
		mag2 = y:Magsq();
		t:real = real * y:real + imag * y:imag;
		t:imag = imag * y:real + real * y:imag;
		t:real = t:real / mag2;
		t:imag = t:imag / mag2;
		t;
	);
	Magsq = Method( {},
		real * real + imag * imag
	);
	Mag = Method( {},
		Sqrt( real * real + imag * imag )
	);
	_to string_ = Method( {},
		Char( real ) || " + " || Char( imag ) || "i"
	);
	_show_ = _to string_;
);
Show Classes();

```

### Show Globals

**Syntax:** Show Globals()

**Description:** Lists all the currently defined global symbols and their values.

**JMP Version Added:** Before version 14

```jsl

Show Globals();

```

### Show Namespaces

**Syntax:** Show Namespaces( &lt; &lt;namespace reference&gt;, ... &gt; )

**Description:** Show the contents of all user defined namespaces, both named and anonymous.

**JMP Version Added:** Before version 14

```jsl

New Namespace(
	"complex",
	{
		make = Function( {a, b},
			Index( a, b, b - a )
		),
		add = Function( {x, y}, x + y ),
		sub = Function( {x, y}, x - y ),
		mul = Function( {x, y},
			local:z = J( 1, 2 );
			local:z[1] = x[1] * y[1] - x[2] * y[2];
			local:z[2] = x[1] * y[2] + x[2] * y[1];
			local:z;
		),
		div = Function( {x, y},
			local:z = J( 1, 2 );
			local:d = (y[1] ^ 2 + y[2] ^ 2);
			local:z[1] = (x[1] * y[1] + x[2] * y[2]) / local:d;
			local:z[2] = (x[2] * y[1] - x[1] * y[2]) / local:d;
			local:z;
		),
		write = Function( {x},
			Write( x[1], " + ", x[2], "i\!n" )
		)
	}
);
Show Namespaces( "complex" );
Delete Namespaces( "complex" );

```

### Show Symbols

**Syntax:** Show Symbols()

**Description:** Lists all the currently defined symbols and their values.

**JMP Version Added:** Before version 14

```jsl

Show Symbols();

```

### Sort List

**Syntax:** y = Sort List( x )

**Description:** Returns a copy of list x with the items in ascending order.

**JMP Version Added:** Before version 14

```jsl

Sort List( {111, 212, 133, 114, 55} );

```

### Sort List Into

**Syntax:** Sort List Into( x )

**Description:** Modifies list x with the items in ascending order. Note that the x argument must be a variable.

**JMP Version Added:** Before version 14

```jsl

ex = {111, 212, 133, 114, 55};
Sort List Into( ex );
ex;

```

### Throw

**Syntax:** Throw(&lt;message&gt;, &lt;Boolean&gt;)

**Description:** Diverts execution to the enclosing Try(). Otherwise, script execution is stopped. If message begins with an exclamation point, the error will be fatal and cannot be caught by Try(). The second argument is an optional boolean for including a traceback.

**JMP Version Added:** Before version 14

#### Fatal Throw

```jsl


Try( Throw( "!This is a fatal error" ), Print( "CATCH message not reached" ) );
Print( "AFTER TRY message not reached" );

```

#### Traceback

```jsl

Throw( "A line number is included in this error", 1 );

```

#### Try-Catch

```jsl

Try( If( Random Uniform() < 0.5, 1, Throw() ), "thrown" );

```

### Try

**Syntax:** y = Try( expr, &lt;catchExpr&gt; )

**Description:** Evaluates and returns the expr argument, unless the evaluation causes a Throw() or internal exception. In that case, the evaluation of catchExpr is returned. If you use exception_msg as the catchExpr, a list containing more information about the error is returned.

**JMP Version Added:** Before version 14

**Example 1**

```jsl

Try( Sqrt( "s" ), "invalid" );

```

**Example 2**

```jsl

Try( Sqrt( "s" ), exception_msg );

```

### Type

**Syntax:** y = Type( x )

**Description:** Returns a string naming the type of the value of the argument x.

**JMP Version Added:** Before version 14

```jsl

Type( [1 2 3] );

```

### Unlock Globals

**Syntax:** Unlock Globals( name, ... )

**Description:** Unlocks specified global names, allowing them to be modified and to be cleared by the Clear Globals function.

**JMP Version Added:** Before version 14

```jsl

exalpha = 0.05;
exdelta = 0.5;
Watch( exalpha, exdelta );
Wait( 3 );
Lock Globals( exalpha );
Wait( 3 );
Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );
Try( exdelta = 0.6, Show( "invalid - exdelta is locked" ) );
Wait( 3 );
Unlock Globals( exalpha );
Wait( 3 );
Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );

```

### Unlock Symbols

**Syntax:** Unlock Symbols( name, ... )

**Description:** Unlocks specified global names, allowing them to be modified and to be cleared by the Clear Symbols function.

**JMP Version Added:** Before version 14

```jsl

exalpha = 0.05;
exdelta = 0.5;
Watch( exalpha, exdelta );
Wait( 3 );
Lock Symbols( exalpha );
Wait( 3 );
Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );
Try( exdelta = 0.6, Show( "invalid - exdelta is locked" ) );
Wait( 3 );
Unlock Symbols( exalpha );
Wait( 3 );
Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );

```

### Wait

**Syntax:** Wait( &lt;x&gt; )

**Description:** Waits for x seconds before proceeding with execution. The default value for x is 3 seconds. If x is 0 or greater, JMP will complete any operating system events (e.g. screen drawing) as well as any pending callbacks (e.g. formula evaluation) in addition to the wait. If x is less than 0, only the screen drawing and pending OS events are confirmed to be completed before proceeding.

**JMP Version Added:** Before version 14

#### Callbacks

```jsl

Wait( 0 ); // Wait for OS events and callbacks

```

#### OS Events

```jsl

Wait( -1 ); // Wait for OS events

```

#### Simple

```jsl

Wait( 1.5 );

```

### Watch

**Syntax:** w = Watch( all|name1, ... )

**Description:** Creates a window showing variables from Global, Here, and Local namespaces and their values.

**JMP Version Added:** Before version 14

```jsl

x = 1;
y = 2;
z = "abc";
w = Watch( all );
Wait( 5 );
x = x * 5;
y = y / 25;
z = z || "def";
Wait( 5 );
w << close Window();

```

### Where

**Syntax:** Where( &lt;dt&gt;, clause )

**Description:** Returns indices (usually row numbers) matching the given where clause. The optional dt changes the Current Data Table during the evaluation. These clauses are often written by JMP using the Data Filter. This will often by faster than using Loc, <<Get Rows Where or <<Select Where. The behavior is undefined if the clause modifies the sequences or any symbols during evaluation.

**JMP Version Added:** 18

#### Column Functions

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Select << Select Rows( Where( Col Max( :height, :age ) >= 68 ) );
dt << Clear Select << Select Rows( Where( :height == Col Max( :height, :age ) ) );

```

#### Columns

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Get Rows Where( :sex == "M" );
Where( :sex == "M" );
Where( dt, :sex == "M" );

```

#### Matrix/List

```jsl

xs = [10 20 30 . 50];
xs[Where( xs >= 20 )];
xs[Where( !Is Missing( xs ) )];
ys = {10, 20, "30", ., 50};
ys[Where( ys >= 20 )];

```

#### Other

```jsl

xs = [10 20 30 . 50];
ys = [0 0 0 1 1];
Where( xs > 20 & ys );

xs = {{10}, {20}, {15}};
Where( xs[1] < 18 );

```

#### Row States

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [2 4 6] ) << Exclude( 1 );
Where( Excluded() );
Where( !Excluded() );

```

### Wild

**Syntax:** Wild()

**Description:** Denotes a wildcard position that matches any expression (only used in expression patterns).

**JMP Version Added:** Before version 14

```jsl

extestexpr = Expr(
	For( i = 1, i <= 14, i++, Print( "YES!!!" ) );
	Show( "END" );
);
Extract Expr( extestexpr, For( i = 1, Wild(), i++, Print( "YES!!!" ) ) );

```

### Wild List

**Syntax:** Wild List()

**Description:** Denotes a series of wildcard arguments that match anything (only used in expression patterns).

**JMP Version Added:** Before version 14

```jsl

extestexpr = Expr(
	For( i = 1, i <= 14, i++, Print( "YES!!!" ) );
	Show( "END" );
);
Extract Expr( extestexpr, For( i = 1, Wild List(), Print( "YES!!!" ) ) );

```

### Write

**Syntax:** Write( x, ... )

**Description:** Displays the specified values in the log without adding quotation marks, spaces, or line breaks (as Print() does).

**JMP Version Added:** Before version 14

```jsl

Write( "fraction = ", 355 / 113, "\!N", "pi       = ", Pi() );

```

