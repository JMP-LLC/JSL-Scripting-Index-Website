# List



### As List

**Syntax:** y = As List( matrix )

**Description:** Returns a list representation of a matrix. Multi-column matrices are converted to a list of lists, one per row, as would be expected by the Matrix operator.

**JMP Version Added:** Before version 14

```jsl

As List( [11 22 33, 44 55 66] );

```

### Concat Items

**Syntax:** string = Concat Items( {list of strings}, &lt;separatorString&gt; )

**Description:** Joins a list of strings into one long string, separating each from next with the separator, a blank if unspecified.

**JMP Version Added:** Before version 14

```jsl

Concat Items( {"www", "jmp", "com"}, "." );

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

x = 5;y = 10;Eval List( {x, y} );

```

### Insert

**Syntax:** z = Insert( x, y, &lt;i&gt; )

**Description:** Returns a copy of list x with y inserted at the ith position or appended to the end if the optional i argument is not specified.

**JMP Version Added:** Before version 14

```jsl

z = {11, 22, 33};z = Insert( z, 99, 2 );

```

### Insert Into

**Syntax:** Insert Into( x, y, &lt;i&gt; )

**Description:** Modifies list, associative array, or display box x with y inserted into the collection. Lists and display boxes support an optional i to specify the position, or the items will be appended if the position is not specified. Note that the x argument must be a variable.

**JMP Version Added:** Before version 14

**Example 1**

```jsl

ex = {11, 22, 33};Insert Into( ex, 99 );ex;

```

**Example 2**

```jsl

ex = ["a" => 10, "b" => 3, => 0];Insert Into( ex, "c", 12 );ex;

```

**Example 3**

```jsl

New Window( "boxes", hlist = H List Box( Button Box( "a" ), Button Box( "b" ) ) );Wait( 1 );Insert Into( hlist, Button Box( "c" ) );

```

### Is List

**Syntax:** y = Is List( x )

**Description:** Returns 1 if the x argument is a list, 0 otherwise.

**JMP Version Added:** Before version 14

```jsl

Is List( {1, 2, 3} );

```

### Items

**Syntax:** wl = Items(&lt;[first last]&gt;, s, &lt;delim&gt;, &lt;Include Boundary Delimiters(0|1)&gt;)

**Description:** Returns a list of (possibly empty) sub-strings separated by exactly one of any of the characters specified in the delim argument. If delim is absent, the space character is used. If delim is the empty string, each character is treated as a separate item.

**JMP Version Added:** 15

**Example 1**

```jsl

Eval List( {Items( "http://www.jmp.com", ":/." ), Items( "hello", "" )} );

```

**Example 2**

```jsl

Items( ",Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

**Example 3**

```jsl

Items(	",Apple,Banana Tree,Peach",	Get Punctuation Characters(),	Include Boundary Delimiters);

```

**Example 4**

```jsl

Items( [1 2], ",Apple,Banana Tree,Peach", Get Punctuation Characters() );

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

New Window( "boxes", hlist = H List Box( Button Box( "a" ), Button Box( "b" ) ) );N Items( hlist );

```

### Remove

**Syntax:** y = Remove( x, &lt;i&gt;, &lt;n=1&gt; ); y = Remove( x, {list} )

**Description:** Returns a copy of list x, deleting n items starting with the ith item or deleting a list of items specified by the list argument.

**JMP Version Added:** Before version 14

```jsl

Remove( {11, 22, 33, 44, 55}, 3, 2 );

```

### Remove From

**Syntax:** Remove From( x, &lt;i&gt;, &lt;n=1&gt; )

**Description:** Modifies list, associative array, or display box x by removing items. Associative arrays specify the item to be removed with a key value i. Lists and display boxes remove starting with the item in position i. A list will remove multiple items at once if the n option is specified. Note that the x argument must be a variable.

**JMP Version Added:** Before version 14

**Example 1**

```jsl

ex = {11, 22, 33, 44, 55};Remove From( ex, 3, 2 );ex;

```

**Example 2**

```jsl

ex = ["a" => 10, "b" => 3, "c" => 12, => 0];Remove From( ex, "c" );ex;

```

**Example 3**

```jsl

New Window( "boxes",	hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) ));Wait( 1 );Remove From( hlist, 1 );

```

### Reverse

**Syntax:** y = Reverse( x )

**Description:** Returns a copy of list x with the item order reversed.

**JMP Version Added:** Before version 14

```jsl

Reverse( {11, 22, 33, 44, 55} );

```

### Reverse Into

**Syntax:** Reverse Into( x )

**Description:** Modifies list or display box x with the item order reversed. Note that the x argument must be a variable.

**JMP Version Added:** Before version 14

**Example 1**

```jsl

ex = {11, 22, 33, 44, 55};Reverse Into( ex );ex;

```

**Example 2**

```jsl

New Window( "boxes",	hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) ));Wait( 1 );Reverse Into( hlist );

```

### Set Difference

**Syntax:** list = Set Difference( list1, list2 )

**Description:** Returns the list of items that occur in list1 but not in list2. Items can be repeated. If an argument is a multiple-response column reference, it is treated as a list of its values in the current row.

**JMP Version Added:** 19

```jsl

Show( Set Difference( {1, 3}, {3, 2} ) );Show( Set Difference( {1, 3, 4, 3}, {3, 2, 3, 5, 3} ) );

```

### Set Intersection

**Syntax:** list = Set Intersect( list1, list2 )

**Description:** Returns the list of items that occur in both lists. Items can be repeated. If an argument is a multiple-response column reference, it is treated as a list of its values in the current row.

**JMP Version Added:** 19

```jsl

Show( Set Intersection( {1, 3}, {3, 2} ) );Show( Set Intersection( {1, 3, 4, 3}, {3, 2, 3, 5, 3} ) );dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );dt << get rows where( Set Intersection( :sports, {"Soccer"} ) != {} );

```

### Set Union

**Syntax:** list = Set Union( list1, list2 )

**Description:** Returns the list of items that occur in either list. Items can be repeated. If an argument is a multiple-response column reference, it is treated as a list of its values in the current row.

**JMP Version Added:** 19

```jsl

Show( Set Union( {1, 3}, {3, 2} ) );Show( Set Union( {1, 3, 4, 3}, {3, 2, 3, 5, 3} ) );all = {};Open( "$SAMPLE_DATA/Big Class Families.jmp" );For Each Row( all = Set Union( all, :sports ) );all = Set Unique( all );Show( all );

```

### Set Unique

**Syntax:** list = Set Unique( list )

**Description:** Returns the list of unique items that occur in the input list. If an argument is a multiple-response column reference, it is treated as a list of its values in the current row.

**JMP Version Added:** 19

```jsl

Show( Set Unique( {1, 3, 2} ) );Show( Set Unique( {1, 3, 4, 3, 3, 2, 3, 5, 3} ) );Open( "$SAMPLE_DATA/Big Class Families.jmp" );Row() = 1;Show( Set Unique( :sports ) );

```

### Shift

**Syntax:** y = Shift( x, &lt;n=1&gt; )

**Description:** Returns a copy of list x with the first n items moved to the end of the list, or, if n is negative, the last n items moved to the start.

**JMP Version Added:** Before version 14

```jsl

Shift( {11, 22, 33, 44, 55}, 2 );

```

### Shift Into

**Syntax:** Shift Into( x, &lt;n=1&gt; )

**Description:** Modifies list or display box x with the first n items moved to the end of the list, or, if n is negative, the last n items moved to the start. Note that the x argument must be a variable.

**JMP Version Added:** Before version 14

**Example 1**

```jsl

ex = {11, 22, 33, 44, 55};Shift Into( ex, -2 );ex;

```

**Example 2**

```jsl

New Window( "boxes",	hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) ));Wait( 1 );Shift Into( hlist, -2 );

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

ex = {111, 212, 133, 114, 55};Sort List Into( ex );ex;

```

### Substitute

**Syntax:** y = Substitute( x, patternExpr1, replacementExpr1, ... ) y = Substitute( x, patternString1, replacementString1, ..., &lt; &lt;&lt;IGNORECASE &gt; )

**Description:** Returns a copy of string, list or expression x, replacing instances of each pattern expression with the corresponding replacement expression. The optional <<IGNORECASE argument enables case-insensitive matching if x is a string.

**JMP Version Added:** Before version 14

**Example 1**

```jsl

Substitute( Expr( a + Sqrt( a ) ), Expr( a ), Expr( b ) );

```

**Example 2**

```jsl

Substitute( "All things considered", "All", "Some" );

```

**Example 3**

```jsl

lst = {"a", "b", "c"};Substitute( lst, "a", "A" );

```

**Example 4**

```jsl

Substitute( "All things considered", {"things", "All"}, {"ideas", "Some"} );

```

**Example 5**

```jsl

Substitute( "Apple,orange,banana-grape",	Items( Get Punctuation Characters() || "-'", "" ), " ");

```

**Example 6**

```jsl

Substitute( "Apple,APPLE,apple", "apple", "orange", <<IGNORECASE );

```

### Substitute Into

**Syntax:** Substitute Into( x, patternExpr1, replacementExpr1, ... ) Substitute Into( x, patternString1, replacementString1, ..., &lt; &lt;&lt;IGNORECASE &gt; )

**Description:** Modifies string, list or expression x, replacing instances of each pattern expression with the corresponding replacement expression. Note that the x argument must be a variable. The optional <<IGNORECASE argument enables case-insensitive matching if x is a string.

**JMP Version Added:** Before version 14

**Example 1**

```jsl

ex = Expr( a + Sqrt( a ) );Substitute Into( ex, Expr( a ), Expr( b ) );Name Expr( ex );

```

**Example 2**

```jsl

ex = "All things considered";Substitute Into( ex, "All", "Some" );Show( ex );

```

**Example 3**

```jsl

lst = {"a", "b", "c"};Substitute Into( lst, "a", "A" );Show( lst );

```

**Example 4**

```jsl

s = "Apple,APPLE,apple";Substitute Into( s, "apple", "orange", <<IGNORECASE );Show( s );

```

### Words

**Syntax:** wl = Words( &lt;[first last]&gt;, s, &lt;delim&gt;)

**Description:** Returns a list of sub-strings separated by any of the characters specified in the delim argument. If delim is absent, the space character is used. If delim is the empty string, each character is treated as a separate word.

**JMP Version Added:** Before version 14

**Example 1**

```jsl

Eval List( {Words( "http://www.jmp.com", ":/." ), Words( "hello", "" )} );

```

**Example 2**

```jsl

Words( "Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

**Example 3**

```jsl

Words( [1 2], "Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

