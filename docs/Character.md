# Character



### Blob To Char

**Syntax:** s = Blob To Char( blob, <encoding="utf-8"> )

**Description:** Makes a character string from a BLOB (Binary Large Object), using the specified encoding. Supported encodings include utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, shift_jis, euc-jp, and ascii~hex.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
Blob To Char( Hex To Blob( "436166C3A9" ) ) || Blob To Char(
	Hex To Blob( "436166C3A9" ),
	"ascii~hex"
);

```

### Blob To Matrix

**Syntax:** m = Blob To Matrix( blob, type, bytesEach, endian, <nCols=1> )

**Description:** Makes a matrix by converting bytes in the blob to numbers. type is either "int", "uint" or "float". bytesEach is either 1, 2, 4, or 8. endian indicates whether the first byte is the most significant ("big") or the least significant ("little"); "native" indicates the machine&apos;s native format.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
Blob To Matrix( Hex To Blob( "00010002FFFFFFFE" ), "int", 2, "big", 2 );

```

### Char

**Syntax:** s = Char( x, <w>, <d>, < <<Use Locale( Boolean ) >, < <<Full Precision( Boolean ) > )

**Description:** Returns a representation of x as a character string, using the maximum width w and decimal places d if the x argument is numeric. <<FullPrecision writes numeric values using all available precision.

**JMP Version Added:** Before version 14

**Full Precision**

```

Names Default To Here( 1 );
Show( Char( 88.54 ), Char( 88.54, <<Full Precision( 1 ) ) );

```

**Simple**

```

Names Default To Here( 1 );
Char( Pi(), 10, 4 );

```

**Use Locale**

```

Names Default To Here( 1 );
Char( 2.1, <<Use Locale( 1 ) );

```

### Char To Blob

**Syntax:** blob = Char To Blob( string, <encoding="utf-8"> )

**Description:** Makes a BLOB (Binary Large Object) from a string of characters, using the specified encoding. Supported encodings include utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, shift_jis, euc-jp, and ascii~hex.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
Char To Blob( "Café", "utf-16be" );

```

### Char To Hex

**Syntax:** h = Char To Hex( value, <"integer">|<encoding="utf-8"> )

**Description:** Returns the hexadecimal text corresponding to the given value and encoding, which can be a number, a string, or a blob. If the value is a number, IEEE 754 64-bit encoding is used unless the optional argument, "integer", is provided. Supported encodings include utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, ascii~hex, shift_jis, and euc-jp.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
Hex( 1024, "integer" ) || " " || Hex( "Café", "utf-16be" );

```

### Collapse Whitespace

**Syntax:** scw = Collapse Whitespace( s )

**Description:** Trims leading and trailing whitespace and removes duplicate interior white spaces

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
Collapse Whitespace( "  The  dog    crossed    the  road  " );

```

### Concat

**Syntax:** s = s1 || s2 ...; m = m1 || m2 ...; s = Concat( s1, s2, ... )

**Description:** Concatenates strings into a longer string or matrices into a wider matrix.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
[1 2] || [3 4] || [5 6];

```

### Concat Items

**Syntax:** string = Concat Items( {list of strings}, <separatorString> )

**Description:** Joins a list of strings into one long string, separating each from next with the separator, a blank if unspecified.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
Concat Items( {"www", "jmp", "com"}, "." );

```

### Concat To

**Syntax:** string1 ||= string2; matrix1 ||= matrix2; Concat To( a, b )

**Description:** Concatenates in place. a ||= b is equivalent to a = a || b. This is an assignment operator.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
ex = "hello ";
ex ||= "world";

```

### Contains

**Syntax:** pos = Contains( x, item, <start=1> )

**Description:** Returns the position of item within x, starting at position start if provided. If start is negative, the search starts backward from length( x ) - start. The argument x can be a string or a list.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
Show( Contains( "redreed", "re", -1 ) );
Show( Contains( {"A", 2, "C", [1 5], "C"}, "C", 4 ) );

```

### Contains Item

**Syntax:** b = Contains Item( x, item | list | Pat Regex(), <delimiter> )

**Description:** Returns a Boolean indicating whether the word [item], one of a list of words [list], or pattern [pattern] matches one of the words in the text represented by [x]. Words are delimited by the characters in the optional delimiter [delimiter] string. A comma, ",", character is the default delimiter. Blanks are trimmed from the ends of each extracted word from the input text string [x].

**JMP Version Added:** Before version 14

**Example 1**

```

Names Default To Here( 1 );
Show( Contains Item( "A, 2, C, D, C", "C", ", " ) );

```

**Example 2**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Food Journal.jmp" );
dt << New Column( "Cheese",
	numeric,
	continuous,
	Formula( Contains Item( dt:Item Name, "Cheese", ", " ) )
);
dt << Distribution( Column( :Cheese ) );

```

**Example 3**

```

Names Default To Here( 1 );
//find repeated character c in cdcef
Contains Item( "abcde,bcdef,cdcef", Pat Regex( "(.).*?\1" ), "," );

```

### Ends With

**Syntax:** b = Ends With( s, sub )

**Description:** Returns 1 if s ends with sub, otherwise returns 0. The s and sub arguments can be both strings or both lists. Equivalent to Right( s, Length( sub )) == sub.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
Ends With( "http://www.jmp.com", ".com" );

```

### Hex

**Syntax:** h = Hex( value, <"integer">|<encoding="utf-8">|<Base(number)>,<Pad To(number)> )

**Description:** Returns the hexadecimal (or other base number system) text corresponding to the given value and encoding, which can be a number a string or a blob. If the value is a number, IEEE 754 64-bit encoding is used unless one of the optional arguments, integer or Base, is provided. If Base is specified, the function returns the text corresponding to the specified number in that base number system instead of hexadecimal. The base must be an integer value between 2 and 36 inclusive. Supported encodings include utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, ascii~hex, shift_jis and euc-jp.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
Hex( 1024, "integer" ) || " " || Hex( "Café", "utf-16be" ) || " " ||
Hex( 11, Base( 2 ), Pad To( 8 ) );

```

### Hex To Blob

**Syntax:** blob = Hex To Blob( hex string )

**Description:** Makes a BLOB (Binary Large OBject) from the given string of hexadecimal codes, which can also include spaces, commas, carriage returns, and line feeds.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
Hex To Blob( "FF78CE" );

```

### Hex To Char

**Syntax:** s = Hex To Char( hextext, <encoding="utf-8"> )

**Description:** Returns the text corresponding to the hexadecimal text, using the specified encoding. Supported encodings include utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, ascii~hex, shift_jis, and euc-jp.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
Hex To Char( "436166C3A9" ) || Hex To Char( "00430061006600E9", "utf-16be" );

```

### Hex To Number

**Syntax:** x = Hex To Number( hextext, <Base(number)> )

**Description:** Returns the number corresponding to the hexadecimal (or other base number system) text. 16 hex digits are converted as IEEE 754 64-bit floating point numbers; otherwise the input is treated as a hex integer. If Base is specified, the text is treated as a string representing the number in that base. Base must be an integer between 2 and 36 inclusive.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
Hex To Number( "11110000", Base( 2 ) );

```

### Insert

**Syntax:** z = Insert( x, y, <i> )

**Description:** Returns a copy of list x with y inserted at the ith position or appended to the end if the optional i argument is not specified.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
z = {11, 22, 33};
z = Insert( z, 99, 2 );

```

### Insert Into

**Syntax:** Insert Into( x, y, <i> )

**Description:** Modifies list, associative array, or display box x with y inserted into the collection. Lists and display boxes support an optional i to specify the position, or the items will be appended if the position is not specified. Note that the x argument must be a variable.

**JMP Version Added:** Before version 14

**Example 1**

```

Names Default To Here( 1 );
ex = {11, 22, 33};
Insert Into( ex, 99 );
ex;

```

**Example 2**

```

Names Default To Here( 1 );
ex = ["a" => 10, "b" => 3, => 0];
Insert Into( ex, "c", 12 );
ex;

```

**Example 3**

```

Names Default To Here( 1 );
New Window( "boxes", hlist = H List Box( Button Box( "a" ), Button Box( "b" ) ) );
Wait( 1 );
Insert Into( hlist, Button Box( "c" ) );

```

### Item

**Syntax:** w = Item( n|[first last], s, <delim>, <Unmatched(result string)>, <Include Boundary Delimiters(0|1)>)

**Description:** Returns the nth item of the s argument, where items are the (possibly empty) sub-strings separated by exactly one of any of the characters specified in the delim argument. If delim is absent, the space character is used. If delim is the empty string, each character is treated as a separate item.

**JMP Version Added:** Before version 14

**Example 1**

```

Names Default To Here( 1 );
Item( 5, "http://www.jmp.com", ":/." );

```

**Example 2**

```

Names Default To Here( 1 );
Item( [2 -1], "This is a sentence" );

```

**Example 3**

```

Names Default To Here( 1 );
Item( 4, "Apple+Banana Tree,,Pear,,Peach,,Grape", Get Punctuation Characters() );

```

**Example 4**

```

Names Default To Here( 1 );
Item( 5, "a b c d", Unmatched( "None" ) );

```

**Example 5**

```

Names Default To Here( 1 );
Item( 2, "abcd", "" );

```

**Example 6**

```

Names Default To Here( 1 );
Item( 2, ",abcd", ",", Include Boundary Delimiters );

```

### Items

**Syntax:** wl = Items(<[first last]>, s, <delim>, <Include Boundary Delimiters(0|1)>)

**Description:** Returns a list of (possibly empty) sub-strings separated by exactly one of any of the characters specified in the delim argument. If delim is absent, the space character is used. If delim is the empty string, each character is treated as a separate item.

**JMP Version Added:** 15

**Example 1**

```

Names Default To Here( 1 );
Eval List( {Items( "http://www.jmp.com", ":/." ), Items( "hello", "" )} );

```

**Example 2**

```

Names Default To Here( 1 );
Items( ",Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

**Example 3**

```

Names Default To Here( 1 );
Items(
	",Apple,Banana Tree,Peach",
	Get Punctuation Characters(),
	Include Boundary Delimiters
);

```

**Example 4**

```

Names Default To Here( 1 );
Items( [1 2], ",Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

### Left

**Syntax:** sub = Left( s, n, <filler> )

**Description:** Returns a truncated or padded version of the original string or list s. The result contains the left n characters or list items, padded with any filler on the right if the length of s is less than n.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
exurl = "http://www.jmp.com";
Left( exurl, Contains( exurl, ":" ) - 1 );

```

### Length

**Syntax:** l = Length( x )

**Description:** Returns the length of the given string (in characters), list (in items), associative array (in number of keys), blob (in bytes), matrix (in elements), or namespace/class (in number of functions and variables).

**JMP Version Added:** Before version 14

**Example 1**

```

Names Default To Here( 1 );
Length( "Café" );

```

**Example 2**

```

Names Default To Here( 1 );
Length( {1, 2 + 3, [11 22]} );

```

**Example 3**

```

Names Default To Here( 1 );
Length( ["a" => 10, "b" => 3, => 0] );

```

**Example 4**

```

Names Default To Here( 1 );
Length( Char To Blob( "Café" ) );

```

### Lowercase

**Syntax:** sl = Lowercase( s )

**Description:** Converts uppercase letters to lowercase letters in the specified string. Rules for upper and lower case are locale dependent.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
Lowercase( "CAFÉ #23" );

```

### Matrix To Blob

**Syntax:** m = Matrix To Blob( matrix, type, bytesEach, endian )

**Description:** Makes a blob from a matrix by converting the matrix elements to 1, 2, or 4 byte signed or unsigned integers or 4 or 8 byte floating point numbers.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
Matrix To Blob( [3.14, 1.414], "float", 4, "big" );

```

### Munger

**Syntax:** r = Munger( s, startPos, findStringOrNChars, <replaceString> )

**Description:** Searches the s argument for a substring or position depending on combination of arguments.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
Eval List( {Munger( "over there", 1, "t", "" ), Munger( "17 June 2000", 4, 4, "March" )} );

```

### Num

**Syntax:** y = Num( s, < <<Use Locale( use=1 ) >, < <<Restrict > )

**Description:** Converts s to a number using any built-in format, including date and currency formats. Returns missing if the conversion fails. The optional <<Restrict only allows conversion using integer, decimal, and scientific formats.

**JMP Version Added:** Before version 14

**Example 1**

```

Names Default To Here( 1 );
Show( Num( "3.1e6" ), Num( "1989-10-04" ), Num( "5%" ), Num( "£23" ) );

```

**Example 2**

```

Names Default To Here( 1 );
Show(
	Num( "3.1e6", <<Restrict ),
	Num( "1989-10-04", <<Restrict ),
	Num( "5%", <<Restrict ),
	Num( "£23", <<Restrict )
);

```

### Regex

**Syntax:** result = Regex( source, pattern, <format, <IGNORECASE>, <GLOBALREPLACE>> )

**Description:** Searches in the source text for a match to the pattern. The format defaults to "\0" (the entire match) but could be "Fred" (for a constant replacement) or "\1" (to use the text matched by the first parenthesis in the pattern). Returns numeric missing for no match. Case must match by default.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
Regex(
	"   Are you there Alice?, asked Jerry.",
	" (here|there) (\w+).+(said|asked) (\w+)\.",
	"  I am \1, \4, replied \2."
);

```

### Remove

**Syntax:** y = Remove( x, <i>, <n=1> ); y = Remove( x, {list} )

**Description:** Returns a copy of list x, deleting n items starting with the ith item or deleting a list of items specified by the list argument.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
Remove( {11, 22, 33, 44, 55}, 3, 2 );

```

### Remove From

**Syntax:** Remove From( x, <i>, <n=1> )

**Description:** Modifies list, associative array, or display box x by removing items. Associative arrays specify the item to be removed with a key value i. Lists and display boxes remove starting with the item in position i. A list will remove multiple items at once if the n option is specified. Note that the x argument must be a variable.

**JMP Version Added:** Before version 14

**Example 1**

```

Names Default To Here( 1 );
ex = {11, 22, 33, 44, 55};
Remove From( ex, 3, 2 );
ex;

```

**Example 2**

```

Names Default To Here( 1 );
ex = ["a" => 10, "b" => 3, "c" => 12, => 0];
Remove From( ex, "c" );
ex;

```

**Example 3**

```

Names Default To Here( 1 );
New Window( "boxes",
	hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) )
);
Wait( 1 );
Remove From( hlist, 1 );

```

### Repeat

**Syntax:** s = Repeat( x, n, <m=1> )

**Description:** Returns the text, matrix, or list specified by the x argument concatenated with itself n times. If x is a number or a matrix, then n indicates vertical repetition and the optional argument m designates horizontal repetition.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
Show( Repeat( {"A", "B"}, 3 ), Repeat( 2, 3 ), Repeat( 2, 1, 3 ) );

```

### Reverse

**Syntax:** y = Reverse( x )

**Description:** Returns a copy of list x with the item order reversed.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
Reverse( {11, 22, 33, 44, 55} );

```

### Reverse Into

**Syntax:** Reverse Into( x )

**Description:** Modifies list or display box x with the item order reversed. Note that the x argument must be a variable.

**JMP Version Added:** Before version 14

**Example 1**

```

Names Default To Here( 1 );
ex = {11, 22, 33, 44, 55};
Reverse Into( ex );
ex;

```

**Example 2**

```

Names Default To Here( 1 );
New Window( "boxes",
	hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) )
);
Wait( 1 );
Reverse Into( hlist );

```

### Right

**Syntax:** sub = Right( s, n, <filler> )

**Description:** Returns a truncated or padded version of the original string or list s. The result contains the right n characters or list items, padded with any filler on the left if the length of s is less than n.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
Right( "http://www.jmp.com", 3 );

```

### Set Difference

**Syntax:** list = Set Difference( list1, list2 )

**Description:** Returns the list of items that occur in list1 but not in list2. Items can be repeated. If an argument is a multiple-response column reference, it is treated as a list of its values in the current row.

**JMP Version Added:** 19

```

Names Default To Here( 1 );
Show( Set Difference( {1, 3}, {3, 2} ) );
Show( Set Difference( {1, 3, 4, 3}, {3, 2, 3, 5, 3} ) );

```

### Set Intersection

**Syntax:** list = Set Intersect( list1, list2 )

**Description:** Returns the list of items that occur in both lists. Items can be repeated. If an argument is a multiple-response column reference, it is treated as a list of its values in the current row.

**JMP Version Added:** 19

```

Names Default To Here( 1 );
Show( Set Intersection( {1, 3}, {3, 2} ) );
Show( Set Intersection( {1, 3, 4, 3}, {3, 2, 3, 5, 3} ) );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << get rows where( Set Intersection( :sports, {"Soccer"} ) != {} );

```

### Set Union

**Syntax:** list = Set Union( list1, list2 )

**Description:** Returns the list of items that occur in either list. Items can be repeated. If an argument is a multiple-response column reference, it is treated as a list of its values in the current row.

**JMP Version Added:** 19

```

Names Default To Here( 1 );
Show( Set Union( {1, 3}, {3, 2} ) );
Show( Set Union( {1, 3, 4, 3}, {3, 2, 3, 5, 3} ) );
all = {};
Open( "$SAMPLE_DATA/Big Class Families.jmp" );
For Each Row( all = Set Union( all, :sports ) );
all = Set Unique( all );
Show( all );

```

### Set Unique

**Syntax:** list = Set Unique( list )

**Description:** Returns the list of unique items that occur in the input list. If an argument is a multiple-response column reference, it is treated as a list of its values in the current row.

**JMP Version Added:** 19

```

Names Default To Here( 1 );
Show( Set Unique( {1, 3, 2} ) );
Show( Set Unique( {1, 3, 4, 3, 3, 2, 3, 5, 3} ) );
Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Row() = 1;
Show( Set Unique( :sports ) );

```

### Shift

**Syntax:** y = Shift( x, <n=1> )

**Description:** Returns a copy of list x with the first n items moved to the end of the list, or, if n is negative, the last n items moved to the start.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
Shift( {11, 22, 33, 44, 55}, 2 );

```

### Shift Into

**Syntax:** Shift Into( x, <n=1> )

**Description:** Modifies list or display box x with the first n items moved to the end of the list, or, if n is negative, the last n items moved to the start. Note that the x argument must be a variable.

**JMP Version Added:** Before version 14

**Example 1**

```

Names Default To Here( 1 );
ex = {11, 22, 33, 44, 55};
Shift Into( ex, -2 );
ex;

```

**Example 2**

```

Names Default To Here( 1 );
New Window( "boxes",
	hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) )
);
Wait( 1 );
Shift Into( hlist, -2 );

```

### Starts With

**Syntax:** b = Starts With( s, sub )

**Description:** Returns 1 if s starts with sub, otherwise returns 0. The s and sub arguments can be both strings or both lists. Equivalent to Left( s, Length( sub )) == sub.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
Starts With( "http://www.jmp.com", "http:" );

```

### Substitute

**Syntax:** y = Substitute( x, patternExpr1, replacementExpr1, ... )

y = Substitute( x, patternString1, replacementString1, ..., < <<IGNORECASE > )

**Description:** Returns a copy of string, list or expression x, replacing instances of each pattern expression with the corresponding replacement expression. The optional <<IGNORECASE argument enables case-insensitive matching if x is a string.

**JMP Version Added:** Before version 14

**Example 1**

```

Names Default To Here( 1 );
Substitute( Expr( a + Sqrt( a ) ), Expr( a ), Expr( b ) );

```

**Example 2**

```

Names Default To Here( 1 );
Substitute( "All things considered", "All", "Some" );

```

**Example 3**

```

Names Default To Here( 1 );
lst = {"a", "b", "c"};
Substitute( lst, "a", "A" );

```

**Example 4**

```

Names Default To Here( 1 );
Substitute( "All things considered", {"things", "All"}, {"ideas", "Some"} );

```

**Example 5**

```

Names Default To Here( 1 );
Substitute( "Apple,orange,banana-grape",
	Items( Get Punctuation Characters() || "-'", "" ), " "
);

```

**Example 6**

```

Names Default To Here( 1 );
Substitute( "Apple,APPLE,apple", "apple", "orange", <<IGNORECASE );

```

### Substitute Into

**Syntax:** Substitute Into( x, patternExpr1, replacementExpr1, ... )

Substitute Into( x, patternString1, replacementString1, ..., < <<IGNORECASE > )

**Description:** Modifies string, list or expression x, replacing instances of each pattern expression with the corresponding replacement expression. Note that the x argument must be a variable. The optional <<IGNORECASE argument enables case-insensitive matching if x is a string.

**JMP Version Added:** Before version 14

**Example 1**

```

Names Default To Here( 1 );
ex = Expr( a + Sqrt( a ) );
Substitute Into( ex, Expr( a ), Expr( b ) );
Name Expr( ex );

```

**Example 2**

```

Names Default To Here( 1 );
ex = "All things considered";
Substitute Into( ex, "All", "Some" );
Show( ex );

```

**Example 3**

```

Names Default To Here( 1 );
lst = {"a", "b", "c"};
Substitute Into( lst, "a", "A" );
Show( lst );

```

**Example 4**

```

Names Default To Here( 1 );
s = "Apple,APPLE,apple";
Substitute Into( s, "apple", "orange", <<IGNORECASE );
Show( s );

```

### Substr

**Syntax:** sub = Substr( s, start, <count> )

**Description:** Returns the part of string s composed of count characters starting at position start. A negative or absent count means the rest of the string. A negative start means starting start characters from the end. The Substr() function can also be applied to lists.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
Eval List( {Substr( "undergo", 4 ), Substr( {10, 11, 12, 13, 14}, 2, 3 )} );

```

### Text Score

**Syntax:** score vector = Text Score( text column, text-to-number, <weighting>, <{<center>, <scale>, scoring matrix}>);

**Description:** Used to create scoring formulas in Text Explorer. The text-to-number argument is an associative array mapping lowercase words to numbers. The weighting argument is either "Binary", "Ternary", "Count", "LogCount", "LCA" or an array of inverse document frequency weights for TFLogIDF. The scoring matrix must have the same number of columns as words in the associative array, or one more if LCA. The output is a vector of scores. If no scoring matrix is specified, it returns a vector of count scores. If no weighting is specified, it uses Count. This function does not support the Stem for Combining option.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
score = Text Score(
	"over the lazy dogs back",
	["lazy" => 1, "dogs" => 2],
	"Count",
	[1 0, 0 1]
);
Show( score );

```

### Titlecase

**Syntax:** st = Titlecase( s )

**Description:** Converts to title case

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
Titlecase( "The dog crossed the road" );

```

### Trim

**Syntax:** sub = Trim( s, <left|right|both> )

**Description:** Returns a copy of string s with any leading or trailing whitespace characters removed. The second argument specifies either the leading or trailing whitespace characters. If you do not specify the second argument, whitespace characters are removed from both ends.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
Trim( " title   ", both );

```

### Trim Whitespace

**Syntax:** sub = Trim Whitespace( s, <left|right|both> )

**Description:** Returns a copy of string s with any leading or trailing whitespace characters removed. The second argument specifies either the leading or trailing whitespace characters. If you do not specify the second argument, whitespace characters are removed from both ends.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
Trim Whitespace( "  The  dog    crossed    the  road  " );

```

### Uppercase

**Syntax:** su = Uppercase( s )

**Description:** Converts lowercase letters to uppercase letters in the specified string. Rules for upper and lower case are locale dependent.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
Uppercase( "Café #23" );

```

### Word

**Syntax:** w = Word( n|[first last], s, <delim>, <Unmatched(result string)>

**Description:** Returns the nth word of string s, where words are sub-strings separated by any number of any of the characters in the delim argument. If delim is absent, the space character is used. If delim is the empty string, each character is treated as a separate word.

**JMP Version Added:** Before version 14

**Example 1**

```

Names Default To Here( 1 );
Word( 3, "http://www.jmp.com", ":/." );

```

**Example 2**

```

Names Default To Here( 1 );
Word( [2 -1], "This is a sentence" );

```

**Example 3**

```

Names Default To Here( 1 );
Word( 4, "Apple+Banana Tree,,Pear,,Peach,,Grape", Get Punctuation Characters() );

```

**Example 4**

```

Names Default To Here( 1 );
Word( 5, "a b c d", Unmatched( "None" ) );

```

**Example 5**

```

Names Default To Here( 1 );
Word( 2, "abcd", "" );

```

### Words

**Syntax:** wl = Words( <[first last]>, s, <delim>)

**Description:** Returns a list of sub-strings separated by any of the characters specified in the delim argument. If delim is absent, the space character is used. If delim is the empty string, each character is treated as a separate word.

**JMP Version Added:** Before version 14

**Example 1**

```

Names Default To Here( 1 );
Eval List( {Words( "http://www.jmp.com", ":/." ), Words( "hello", "" )} );

```

**Example 2**

```

Names Default To Here( 1 );
Words( "Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

**Example 3**

```

Names Default To Here( 1 );
Words( [1 2], "Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

### XPath Query

**Syntax:** result = XPath Query(xml, xpath expression)

**Description:** Runs an XPath query against an XML document.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
result = XPath Query(
	"<doc><colors><color>red</color><color>green</color><color>blue</color></colors></doc>",
	"//color/text()"
);

```

