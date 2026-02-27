# Custom Function



## Item Messages

### Custom Format Category

**Syntax:** f &lt;&lt; Custom Format Category(1|0)

**Description:** Treat the custom function as a custom format. Specify 0 to exclude the function from the custom format menu.

**JMP Version Added:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Custom Format Category( 1 );

```

### Description

**Syntax:** obj &lt;&lt; Description( text )

**Description:** Set the description for the custom function. This description will show up in the Scripting Index and in tooltips.

**JMP Version Added:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Description( "Add two numbers together, but subtract 1" );

```

### Example

**Syntax:** f &lt;&lt; Example(example text | Expr(example JSL code), &lt;example name&gt;)

**Description:** Add an example that shows how to effectively use the function. The example should be passed in as a text string or as JSL code wrapped with the Expr command. You can send the message multiple times to add more than one example.

**JMP Version Added:** 14

**Example 1**

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Example( "Add(1, 2)" );

```

**Example 2**

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Example( "Add(1, 2)", "small add" );myAdd << Example( "Add(1, 500)", "bigger add" );

```

### Formula Category

**Syntax:** f &lt;&lt; Formula Category(name|""|1|0)

**Description:** Include the function in the specified Formula Editor category. If specified, this function will be added at the end of the matching category. If the category doesn&apos;t exist, a new category will be created. Specify 0 or empty string to not show the function in the formula editor tree.

**JMP Version Added:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Formula Category( "NumberStuff" );

```

### Get Custom Format Category

**Syntax:** f &lt;&lt; Get Custom Format Category

**Description:** Get the custom format category for the custom function.

**JMP Version Added:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Custom Format Category( 1 );myAdd << Get Custom Format Category;

```

### Get Description

**Syntax:** f &lt;&lt; Get Description

**Description:** Get the description for the custom function.

**JMP Version Added:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Description( "Add two numbers together, but subtract 1" );myAdd << Get Description;

```

### Get Examples

**Syntax:** f &lt;&lt; Get Examples

**Description:** Retrieve the list of examples, as strings

**JMP Version Added:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Example( "Add(1, 2)", "small add" );myAdd << Example( "Add(1, 500)", "bigger add" );myAdd << Get Examples;

```

### Get Formula Category

**Syntax:** f &lt;&lt; Get Formula Category

**Description:** Return which Formula Editor category this function should be part of, if any.

**JMP Version Added:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Formula Category( "NumberStuff" );myAdd << Get Formula Category;

```

### Get Function

**Syntax:** f &lt;&lt; Get Function

**Description:** Retrieve the function definition.

**JMP Version Added:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Get Function;

```

### Get Name

**Syntax:** f &lt;&lt; Get Name

**Description:** Retrieve the function name.

**JMP Version Added:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Get Name;

```

### Get Namespace

**Syntax:** f &lt;&lt; Get Namespace

**Description:** Retrieve the function namespace.

**JMP Version Added:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Get Namespace;

```

### Get Parameters

**Syntax:** f &lt;&lt; Get Parameters

**Description:** Retrieve the list of parameters.

**JMP Version Added:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Parameter( "Number", "number" );myAdd << Parameter( "Number", "<number=1>" );myAdd << Get Parameters;

```

### Get Prototype

**Syntax:** f &lt;&lt; Get Prototype

**Description:** Get the prototype that shows up for this function in the Scripting Index

**JMP Version Added:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Prototype( "Add(number, <number=1>)" );myAdd << Get Prototype;

```

### Get Result Type

**Syntax:** f &lt;&lt; Get Result Type

**Description:** Get the result type of the function.

**JMP Version Added:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Result Type( "Number" );myAdd << Get Result Type;

```

### Get Scripting Index Category

**Syntax:** f &lt;&lt; Get Scripting Index Category

**Description:** Get the category for the custom function in the Scripting Index.

**JMP Version Added:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Scripting Index Category( "My Functions" );myAdd << Get Scripting Index Category;

```

### Get Transform Category

**Syntax:** f &lt;&lt; Get Transform Category

**Description:** Get the transform category for the custom function.

**JMP Version Added:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Transform Category( 1 );myAdd << Get Transform Category;

```

### Parameter

**Syntax:** f &lt;&lt; Parameter(typename | {typename1, typename2, ...}, hint text)

**Description:** Add information about a parameter of the function. Send this message once for each parameter the function takes. This can be used for code validation. Valid choices for the parameter types are Any, Name, Number, String, List, Matrix, RowState. If multiple result types are possible, supply the type names in a list. The hint text is used to indicate what data should be used in the corresponding argument in the formula editor. Specify an empty string if no hint text is desired.

**JMP Version Added:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Parameter( "Number", "number" );myAdd << Parameter( "Number", "<number=1>" );

```

### Prototype

**Syntax:** obj &lt;&lt; Prototype( text )

**Description:** Set the prototype that shows up for this function in the Scripting Index

**JMP Version Added:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Prototype( "Add(number, <number=1>)" );

```

### Result Type

**Syntax:** f &lt;&lt; Result Type(typename | {typename1, typename2 ...})

**Description:** Set the result type of the function. This can be used for code validation. Valid choices are Any, Name, Number, String, List, Matrix, RowState. If multiple result types are possible, supply the type names in a list.

**JMP Version Added:** 14

**Example 1**

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Result Type( "Number" );

```

**Example 2**

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Result Type( {"Number", "String"} );

```

### Scripting Index Category

**Syntax:** f &lt;&lt; Scripting Index Category(name|""|1|0)

**Description:** Sets the category for the custom function in the Scripting Index. Every custom function will be listed in the All Functions category in addition to the category that you specify. Specify 0 or "" to list the function in the All Functions category only.

**JMP Version Added:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Scripting Index Category( "My Functions" );

```

### Transform Category

**Syntax:** f &lt;&lt; Transform Category(1|0)

**Description:** Treat the custom function as a column transform. Specify 0 to exclude the function from the column transform menu.

**JMP Version Added:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Transform Category( 1 );

```

