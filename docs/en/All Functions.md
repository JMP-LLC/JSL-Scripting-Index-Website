# All Functions



### ARIMA Forecast

**Syntax:** x = ARIMA Forecast( dtcol, length, model, estimates, from, to )

**Description:** Returns a vector of forecasted values for the dtcol column in the range determined by the from and to arguments. The length argument specifies a portion of the column for the function to use. The model argument matches messages that are sent to the Time Series platform to fit a model. The estimates argument matches the child of a Get Models message result of a single model. Typically, the from value is between 1 and the to value, inclusive. However, if from<=0 and from<=to, part of the results are filtered predictions.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
ARIMA Forecast(
	:Steel Shipments,
	96,
	ARIMA( 1, 0, 1 ),
	{AR Coefficients( {0.900397691783565} ), MA Coefficients( {0.483316746530245} ),
	Intercept( 6466.03264802329 )},
	1,
	2
);

```

### ATan

**Syntax:** y = ArcTangent( x1, <x2=1> )

**Description:** Returns the inverse trigonometric tangent of x1/x2, where the result is in the range [-Pi()/2, Pi()/2].

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
4 * ArcTangent( 1 );

```

### Abbrev Date

**Syntax:** s = Abbrev Date( datetime, <format> )

**Description:** Returns an abbreviated locale-specific representation of a date-time value.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Abbrev Date( Today() );

```

### Abs

**Syntax:** y = Abs( x )

**Description:** Returns the absolute value of x. Argument can be a number, matrix, or list of numbers.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Abs( -5 );

```

### Add

**Syntax:** y = x0 + x1; y = Add( x0, x1, ... )

**Description:** Adds all arguments, which can be numbers, matrices, or lists of numbers.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Pi() + 10;

```

### Add Color Theme

**Description:** Creates a new custom color theme and registers it with the theme picker.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Add Color Theme( {"Yellow To Blue", 0, {{255, 255, 0}, {0, 0, 255}}, {0.0, 1.0}} );

```

**Example 2**

```js

Names Default To Here( 1 );
Add Color Theme(
	{"Black To Red To White", {"Continuous", "Categorical", "Diverging"}, {{0, 0, 0}, {255,
	0, 0}, {255, 255, 255}, Missing( "Green" )}, {"Full Color", "Tritanopia",
	"Tritanomaly"}}
);

```

### Add Custom Functions

**Syntax:** Add Custom Functions({f1, f2, ...} | f)

**Description:** Defines a list of custom functions for use in scripting and the Formula Editor. The command also adds the list to the environment.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y}, x + y - 1 ) );
mySub = New Custom Function( "custom", "Sub", Function( {x, y}, x - y + 1 ) );
Add Custom Functions( {myAdd, mySub} );

```

### Add To

**Syntax:** y += x; Add To( y, x )

**Description:** Adds a value to a variable or to a list of variables.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
ex = 1;
ex += 2;
ex;

```

### Add Vectors BLAS

**Syntax:** z = Add Vectors BLAS( x, y, alpha )

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
x = [1, 2, 3, 4];
y = [5, 6, 7, 8];
alpha = 0.5;
z = Add Vectors BLAS( x, y, alpha );

```

### Alignment Cell Box

**Syntax:** y = Alignment Cell Box( row, col, nRow, nCol, <Sides(left+2*top+4*right+8*bottom=15)> <RowSpan(nRow matrix)> <ColSpan(nCol matrix)>, matrix or list of strings )

**Description:** Returns a reference to a display box that contains the row (or column) contents that are contained inside of an Alignment Grid Box.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );

New Window( "Crosstab",
	Alignment Grid Box(
		Alignment Cell Box( 0, 1, 1, 1, ColSpan( [3] ), {"sex"} ),
		Alignment Cell Box( 1, 1, 1, 3, {"F", "M", "Total"} ),
		Alignment Cell Box( 3, 0, 1, 1, Sides( 0 ), ColSpan( [4] ), {"age"} ),
		Alignment Cell Box( 4, 0, 6, 1, {"  12", "  13", "  14", "  15", "  16", "  17"} ),
		Alignment Cell Box(
			4,
			1,
			6,
			3,
			{"5 (28%)", "3 (14%)", "8 (20%)", "3 (17%)", "4 (18%)", "7 (18%)", "5 (28%)",
			"7 (32%)", "12 (30%)", "2 (11%)", "5 (23%)", "7 (18%)", "2 (11%)", "1 (5%)",
			"3 (8%)", "1 (6%)", "2 (9%)", "3 (8%)"}
		)
	)
);

```

### Alignment Grid Box

**Syntax:** y = Alignment Grid Box( alignment cell boxes )

**Description:** Returns a reference to a display box that can contain alignment cell boxes.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );

New Window( "Crosstab",
	Alignment Grid Box(
		Alignment Cell Box( 0, 1, 1, 1, ColSpan( [3] ), {"sex"} ),
		Alignment Cell Box( 1, 1, 1, 3, {"F", "M", "Total"} ),
		Alignment Cell Box( 3, 0, 1, 1, Sides( 0 ), ColSpan( [4] ), {"age"} ),
		Alignment Cell Box( 4, 0, 6, 1, {"  12", "  13", "  14", "  15", "  16", "  17"} ),
		Alignment Cell Box(
			4,
			1,
			6,
			3,
			{"5 (28%)", "3 (14%)", "8 (20%)", "3 (17%)", "4 (18%)", "7 (18%)", "5 (28%)",
			"7 (32%)", "12 (30%)", "2 (11%)", "5 (23%)", "7 (18%)", "2 (11%)", "1 (5%)",
			"3 (8%)", "1 (6%)", "2 (9%)", "3 (8%)"}
		)
	)
);

```

### Alignment Multi Box

**Syntax:** y = Alignment Multi Box( row, col, nRow, nCol, nElements, list-of-nElements-matrices or empty values, list-of-nElements-lists of strings or empty values )

**Description:** Returns a reference to a display box that contains multiple elements inside each cell that is contained inside of an Alignment Grid Box.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );

New Window( "Alignment MultiBox",
	Border Box( Top( 15 ), Left( 15 ), Right( 15 ), Bottom( 15 ),
		Alignment Grid Box(
			Alignment Multi Box( 0, 1, 1, 1, 2, {}, {{"Freq"}, {"Share"}} ),
			Alignment Cell Box( 0, 2, 1, 1, ColSpan( [2] ), {"sex"} ),
			Alignment Cell Box( 1, 2, 1, 2, ColSpan( [1, 1] ), {"F", "M"} ),
			Alignment Cell Box( 2, 0, 1, 1, RowSpan( [7] ), {"age"} ),
			Alignment Cell Box(
				2,
				1,
				7,
				1,
				{"12", "13", "14", "15", "16", "17", "Total Responses"}
			),
			Alignment Multi Box(
				2,
				2,
				6,
				2,
				2,
				{[5 3, 5 2, 2 1, 3 4, 7 5, 1 2], [0.277 0.167, 0.278 0.111, 0.111 0.055,
				0.136 0.181, 0.318 0.227, 0.045 0.090]},
				{Empty(), Empty()}
			),
			Alignment Cell Box( 8, 2, 1, 2, [18 22] )
		)
	)
);

```

### All

**Syntax:** y = All( x, ... )

**Description:** Returns 1 if all elements are nonzero, zero otherwise.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
All( [1 2 3] );

```

### Alpha Shape

**Syntax:** ashape = Alpha Shape(Triangulation)

**Description:** Returns the alpha shape for the given triangulation.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = Alpha Shape( triang );

```

### And

**Syntax:** y = x1 & x2; y = And( x1, x2, ... )

**Description:** Returns the logical AND of all arguments: 1 if all arguments are nonzero and 0 otherwise.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
1 < 2 & 3 < 4;

```

### AndMZ

**Syntax:** y = AndMZ( x1, x2, ... )

**Description:** Returns the logical AND of all arguments with missing values treated as zeros: 1 if all arguments are nonzero and 0 otherwise.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
AndMZ( 1 < 2, 3 < 4 );

```

### Any

**Syntax:** y = Any( x, ... )

**Description:** Returns 1 if any element is nonzero, zero otherwise.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Any( [1 0 2] );

```

### ArCos

**Syntax:** y = ArcCosine( x )

**Description:** Returns the inverse trigonometric cosine of x, where x is in the range [-1, 1] and the result is in the range [0, Pi()].

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
ArcCosine( 0.5 );

```

### ArSin

**Syntax:** y = ArcSine( x )

**Description:** Returns the inverse trigonometric sine of x, where x is in the range [-1, 1] and the result is in the range [-Pi()/2, Pi()/2].

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
ArcSine( 0.5 );

```

### Arc

**Syntax:** Arc( left, top, right, bottom, startAngle, endAngle )

**Description:** Draws an arc of an oval.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Color( "red" );
		Arc( 10, 80, 70, 30, 0, 90 );
	)
);

```

### Arc Finder

**Syntax:** Arc Finder( Group( lot, wafer ), X( col ), Y( col ), <optional arguments> )

**Description:** Finds the arcs in the point data and creates a new column identifying the arcs.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Wafer Stacked.jmp" );
Arc Finder(
	Group( :Lot, :Wafer ),
	X( :X_Die ),
	Y( :Y_Die ),
	Min Distance( 12 ), // minimum distance among 3 points to seed an arc
	Min Radius( 15 ), // minimum radius of the acceptable arc
	Max Radius( 2000 ), // maximum radius of acceptable arc
	Max Radius Error( 2 ), // how close a point needs to be added
	Min Arc Points( 5 ), // how many points to define an arc
	Number of Searches( 500 ), // how many random probes of data
	Max Number Arcs( 3 ) // number of arcs searched for
);
dt << Color or Mark by Column( :Arc Number );
dt << Graph Builder(
	Size( 1539, 921 ),
	Variables( X( :X_Die ), Y( :Y_Die ), Wrap( :Lot_Wafer Label ), Color( :Arc Number ) ),
	Elements( Points( X, Y, Legend( 6 ) ) )
);

```

### ArcCosH

**Syntax:** y = ArcCosH( x )

**Description:** Returns the inverse hyperbolic cosine of x.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
ArcCosH( 1 );

```

### ArcCosine

**Syntax:** y = ArcCosine( x )

**Description:** Returns the inverse trigonometric cosine of x, where x is in the range [-1, 1] and the result is in the range [0, Pi()].

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
ArcCosine( 0.5 );

```

### ArcSinH

**Syntax:** y = ArcSinH( x )

**Description:** Returns the inverse hyperbolic sine of x.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
ArcSinH( 1 );

```

### ArcSine

**Syntax:** y = ArcSine( x )

**Description:** Returns the inverse trigonometric sine of x, where x is in the range [-1, 1] and the result is in the range [-Pi()/2, Pi()/2].

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
ArcSine( 0.5 );

```

### ArcTan

**Syntax:** y = ArcTangent( x1, <x2=1> )

**Description:** Returns the inverse trigonometric tangent of x1/x2, where the result is in the range [-Pi()/2, Pi()/2].

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
4 * ArcTangent( 1 );

```

### ArcTanH

**Syntax:** y = ArcTanH( x )

**Description:** Returns the inverse hyperbolic tangent of x.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
ArcTanH( 0.5 );

```

### ArcTangent

**Syntax:** y = ArcTangent( x1, <x2=1> )

**Description:** Returns the inverse trigonometric tangent of x1/x2, where the result is in the range [-Pi()/2, Pi()/2].

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
4 * ArcTangent( 1 );

```

### Arg

**Syntax:** y = Arg( x, i )

**Description:** Returns the ith argument of the evaluated expression or Empty() if there is no ith argument.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Arg( Expr( Sum( a, b, c ) ), 2 );

```

### Arg Expr

**Syntax:** y = Arg Expr( expr, i )

**Description:** Returns the ith argument of the expression or Empty() if there is no ith argument. This function is deprecated. Please use Arg() instead.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
// See Example 2 for the deprecated Arg Expr() equivalent
Arg( Expr( Sum( a, b, c ) ), 2 );

```

**Example 2**

```js

Names Default To Here( 1 );
// Deprecated
Arg Expr( Sum( a, b, c ), 2 );

```

### Arrhenius

**Syntax:** y = Arrhenius( tempC )

**Description:** Returns the non-specific component of the Arrhenius relationship that is then multiplied by the activation energy in the Arrhenius equation. Returns 11604.5181215503 / (tempC + 273.15).

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Arrhenius( 100 );

```

### Arrhenius Inv

**Syntax:** tempC = Arrhenius Inv( y )

**Description:** Returns the inverse of the Arrhenius function, which is (11604.5181215503 / y) - 273.15.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Arrhenius Inv( 100 );

```

### Arrow

**Syntax:** Arrow( {x1, y1}, {x2, y2}, ... ); Arrow( xMatrix, yMatrix )

**Description:** Draws a line with an arrow or a sequence of such lines.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Size( 4 );
		Arrow( [10 30 90], [88 22 44] );
	)
);

```

### As Boolean

**Syntax:** b = As Boolean( x )

**Description:** Evaluates an expression and returns a Boolean value.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
x = 45;
b = As Boolean( x > 2 );
Show( b );

```

### As C Expr

**Syntax:** y = As C Expr( x )

**Description:** Returns an equivalent expression in the C programming language.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
As C Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As Column

**Syntax:** y = :name;

y = dataTable:name;

y = As Column( name );

y = As Column( dataTable, name )

**Description:** Accesses the specified column in the specified or current data table. An error is thrown if no such column or data table is found.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
exdt = Open( "$SAMPLE_DATA/Big Class.jmp" );
exdt:height[1] + :height[2] + As Column( "height" )[3];

```

### As Constant

**Syntax:** y = As Constant( x )

**Description:** Evaluates an expression to create a constant value that does not change after it has been computed

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
New Table( "As Constant Demo Table 1",
	Add Rows( 10 ),
	New Column( "Non-Constant", Formula( Random Uniform() ) ),
	New Column( "Constant", Formula( As Constant( Random Uniform() ) ) )
);

```

**Example 2**

```js

Names Default To Here( 1 );
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

```js

Names Default To Here( 1 );
For( i = 1, i <= 10, i++,
	x = 2;
	y = 100;
	z = As Constant( x + y );
	x *= i;
	y /= i;
	Show( i, x + y, z );
);

```

### As Date

**Syntax:** dt = As Date( datetime )

**Description:** Returns a date-time value marked internally as a date for output purposes.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
As Date( Today() );

```

### As Global

**Syntax:** y = ::name; y = As Global( name )

**Description:** Accesses the specified global variable or throws an error if no such global variable exists.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
::ex = 23;
Local( {ex = 12}, Eval List( {ex, ::ex, As Global( "ex" )} ) );

```

### As JSON Expr

**Syntax:** y = As JSON Expr( x )

**Description:** Returns a JSON (JavaScript Object Notation) representation of the expression.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
As JSON Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As JavaScript Expr

**Syntax:** y = As JavaScript Expr( x )

**Description:** Returns an equivalent expression in the JavaScript programming language.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
As JavaScript Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As List

**Syntax:** y = As List( matrix )

**Description:** Returns a list representation of a matrix. Multi-column matrices are converted to a list of lists, one per row, as would be expected by the Matrix operator.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
As List( [11 22 33, 44 55 66] );

```

### As Name

**Syntax:** y = As Name( s )

**Description:** Converts a string into a name or a list of strings into a list of names.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:(As Name( "height" ))[3];

```

### As Namespace

**Syntax:** asns = As Namespace( ns )

**Description:** Accesses the specified Namespace or throws an error if no such namespace exists.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
ns = New Namespace(
	"complex"
);
As Namespace( ns );

```

### As Python Expr

**Syntax:** y = As Python Expr( x )

**Description:** Returns an equivalent expression in the Python programming language.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
As Python Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As Root

**Syntax:** y = :::name; y = As Root( name )

**Description:** Accesses the specified root-scoped variable or throws an error if no such root-scoped variable exists.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
::: ex = 23;
Local( {ex = 12}, Eval List( {ex, ::: ex, As Global( "ex" )} ) );

```

### As Row State

**Syntax:** rs = As Row State( x )

**Description:** Converts a number into a row state value.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row(
	Row State() = As Row State(
		(:sex == "F") * 2 + (:sex == "M") * 4 + ((:sex == "F") * 2 + (:sex == "M") * 6) *
		16 + (:age - 11) * 256
	)
);

```

### As SAS Expr

**Syntax:** y = As SAS Expr( x )

**Description:** Returns a version of the expression more suitable for a SAS DATA step. The code must be wrapped in a PROC DS2 call.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
As SAS Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As SQL Expr

**Syntax:** y = As SQL Expr( x, <style> )

**Description:** Returns a string that contains the expression converted to valid SQL syntax for use in an SQL Select statement.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
As SQL Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ), "MySQL" );

```

### As Scoped

**Syntax:** y = namespace:variable; y = As Scoped( namespace, variable )

**Description:** Accesses the specified scoped variable or throws an error if no such scoped variable exists.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Here:z = 23.5;
As Scoped( Here, z );

```

### As Table

**Syntax:** dt = As Table( matrix, <matrix2,...> < <<invisible/private>, < <<Column Names(name list) > )

**Description:** Converts a matrix into a data table. The invisible option can be used to avoid displaying the table.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
As Table( [1 2 3, 4 5 6] );

```

### Assign

**Syntax:** y = x; Assign( y, x )

**Description:** Assigns a value to a variable or a list of variables.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
{ex1, ex2} = {Pi(), 1};
ex1 + ex1;

```

### Associative Array

**Syntax:** y = Associative Array( {{key1, value1}, ...} );

y = Associative Array( keys, values )

**Description:** Creates an associative array, which is also known as a dictionary or a hash map. In the two-argument form, keys and values can be a list, matrix, or data table column.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
ex = Associative Array( {"red", "blue"}, {1, 2} );
ex["green"] = 3;
ex << get contents;

```

### B Spline Coef

**Syntax:** coef = B Spline Coef( x, Internal Knot Grid, <degree = 3>, <KnotEndPoints = min(x) || max(x)> )

**Description:** Returns the matrix of B-Spline coefficients. Internal Knot Grid is either the number of desired knot points based on percentiles of x or a vector specifying the internal knot points. Optional parameter degree specifies the degree of the B-splines with a default of 3. Optional parameter KnotEndPoints takes a 2x1 matrix containing [lower, upper] locations for the knots on the boundary. The knot end points default to the min and max of x. The second example demonstrates how B-spline coefficients can be used as the design matrix in a linear model.

**JMP Version Added:** 14

**Example 1**

```js

Names Default To Here( 1 );
B Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2 );
B Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [3, 7] );

```

**Example 2**

```js

Names Default To Here( 1 );
xx = (0 :: 10)`;
yy = [0, 1, 0, -1, 0, 1, 0, -1, 0, 1, 0];
designMat = B Spline Coef( xx, 2 );
Linear Regression( yy, designMat, <<nointercept );

```

### Back Color

**Syntax:** Back Color( <name|index|rgbList> )

**Description:** Sets the background color for the erase mode in the Text() function.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Back Color( "red" );
		Text( Erased, {50, 20}, "Hello" );
	)
);

```

### Beep

**Syntax:** Beep()

**Description:** Makes an alert sound.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Beep();

```

### Best Partition

**Syntax:** {c1, c2, g2} = Best Partition( xIndices, yIndices, <<Ordered, <<ContinuousY, <<ContinuousX )

**Description:** Determines the optimal grouping (experimental function).

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
/*Example for Continuous X and Continuous Y*/Best Partition(
	[1.2, 2.2, 3.5, 4.4, 5.6, 7.8],
	[11.2, 11.5, 11.8, 100.5, 100.7, 100.8],
	<<ContinuousX,
	<<ContinuousY
);

```

### Beta

**Syntax:** z = Beta( x, y )

**Description:** Returns Beta function of x and y, defined as Gamma( x ) * Gamma( y ) / Gamma( x + y ).

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Beta( 5, 4 );

```

### Beta Binomial Distribution

**Syntax:** cumprob = Beta Binomial Distribution( k, p, n, delta )

**Description:** Returns the probability that a Beta Binomial distributed random variable is less than or equal to k.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
p = 0.5;
n = 25;
delta = 0;
New Window( "Example: BetaBinomial Distribution",
	y = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, n + 1 ),
		Pen Color( "red" ),
		Pen Size( 1 );
		For( k = 0, k <= n, k++,
			H Line( k, k + 1, Beta Binomial Distribution( k, p, n, delta ) );
			V Line(
				k + 1,
				Beta Binomial Distribution( k, p, n, delta ),
				Beta Binomial Distribution( k + 1, p, n, delta )
			);
		);
		Text( {15, 0.1}, "n=", Round( n ), " p=", Round( p, 2 ) );
		Text( {15, 0.04}, "Dispersion=", Round( delta, 2 ) );
	),
	H List Box( Slider Box( 0.01, 0.99, p, y << reshow ), Text Box( " p" ) ),
	H List Box( Slider Box( -0.01, 0.99, delta, y << reshow ), Text Box( " Dispersion" ) )
);

```

### Beta Binomial Probability

**Syntax:** prob = Beta Binomial Probability( k, p, n, delta )

**Description:** Returns the probability that a Beta Binomial distributed random variable is equal to k.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
n = 25;
p = 0.5;
delta = 0;
New Window( "Binomial and BetaBinomial Probabilities",
	clty = Graph Box(
		Y Scale( 0, 0.3 ),
		X Scale( -1, n + 1 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( x = 0, x <= n, x++,
			Pen Color( "red" );
			V Line( x, 0, Binomial Probability( p, n, x ) );
			Pen Color( "blue" );
			V Line( x + 0.35, 0, Beta Binomial Probability( x, p, n, delta ) );
		);
		Text( {1, 0.25}, "p=", Round( p, 8 ), " Dispersion=", Round( delta, 8 ) );
		Text( {0, 0.28}, "Red = Binomial, Blue = BetaBinomial" );
	),
	H List Box( Slider Box( 0.2, 0.8, p, clty << reshow ), Text Box( " p" ) ),
	H List Box(
		Slider Box( -0.05, 0.999, delta, clty << reshow ),
		Text Box( " Dispersion" )
	)
);

```

### Beta Binomial Quantile

**Syntax:** q = Beta Binomial Quantile( p, n, delta, cumprob )

**Description:** Returns the smallest integer quantile for which the cumulative probability of the Beta Binomial( p, n, delta ) distribution is larger than or equal to cumprob.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
qbinexp = 0.3;
qbinexn = 20;
qbinexq = 0.5;
delta = 0;
New Window( "Example: BetaBinomial Quantile",
	qbinexy = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, 41 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( qbinexk = 0, qbinexk < Round( qbinexn ), qbinexk++,
			H Line(
				qbinexk,
				qbinexk + 1,
				Beta Binomial Distribution( qbinexk, qbinexp, Round( qbinexn ), delta )
			);
			V Line(
				qbinexk + 1,
				Beta Binomial Distribution( qbinexk, qbinexp, Round( qbinexn ), delta ),
				Beta Binomial Distribution(
					qbinexk + 1,
					qbinexp,
					Round( qbinexn ),
					delta
				)
			);
		);
		Pen Color( "blue" );
		V Line(
			Beta Binomial Quantile( qbinexp, Round( qbinexn ), delta, qbinexq ),
			0,
			1
		);
		Text(
			{6, 0.17},
			"n=",
			Round( qbinexn ),
			" p=",
			Round( qbinexp, 2 ),
			" Disp.=",
			Round( Delta, 2 ),
			" q=",
			Round( qbinexq, 2 )
		);
		Text(
			{6, 0.1},
			"quantile=",
			Round( Beta Binomial Quantile( qbinexp, Round( qbinexn ), delta, qbinexq ) )
		);
	),
	H List Box( Slider Box( 0, 0.99, qbinexp, qbinexy << reshow ), Text Box( " p" ) ),
	H List Box( Slider Box( 0, 40, qbinexn, qbinexy << reshow ), Text Box( " n" ) ),
	H List Box(
		Slider Box( -0.01, 0.99, delta, qbinexy << reshow ),
		Text Box( " Dispersion" )
	),
	H List Box( Slider Box( 0, 1, qbinexq, qbinexy << reshow ), Text Box( " q" ) )
);

```

### Beta Density

**Syntax:** y = Beta Density( q, alpha, beta, <theta=0>, <sigma=1> )

**Description:** Returns the density at q for a beta distribution, where q is in the interval theta to theta + sigma, alpha and beta are shape parameters, and theta and sigma are threshold and range parameters, respectively.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
alpha = 0.5;
beta = 0.5;
New Window( "Example: Beta Density",
	y = Graph Box(
		Y Scale( 0, 2.5 ),
		X Scale( 0, 1 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Beta Density( q, alpha, beta ), q );
		Text( {0.55, 2.2}, "\!U03B1=", Round( alpha, 2 ), " \!U03B2=", Round( beta, 2 ) );
	),
	H List Box( Slider Box( 0, 10, alpha, y << reshow ), Text Box( " \!U03B1" ) ),
	H List Box( Slider Box( 0, 10, beta, y << reshow ), Text Box( " \!U03B2" ) )
);

```

### Beta Distribution

**Syntax:** p = Beta Distribution( q, alpha, beta, <theta=0>, <sigma=1> )

**Description:** Returns the probability that a beta distributed random variable is less than q, where alpha and beta are shape parameters and theta and sigma are threshold and range parameters, respectively.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
alpha = 0.5;
beta = 0.5;
New Window( "Example: Beta Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 1 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Beta Distribution( q, alpha, beta ), q );
		Text( {0.1, 0.9}, "\!U03B1=", Round( alpha, 2 ), " \!U03B2=", Round( beta, 2 ) );
	),
	H List Box( Slider Box( 0, 10, alpha, y << reshow ), Text Box( " \!U03B1" ) ),
	H List Box( Slider Box( 0, 10, beta, y << reshow ), Text Box( " \!U03B2" ) )
);

```

### Beta Quantile

**Syntax:** q = Beta Quantile( p, alpha, beta, <theta=0>, <sigma=1> )

**Description:** Returns the quantile from a Beta distribution, the value for which the probability is p that a random value would be lower, where alpha and beta are shape parameters and theta and sigma are threshold and range parameters, respectively.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Beta Quantile( 0.95, 2, 5 );

```

### Binomial Distribution

**Syntax:** cumprob = Binomial Distribution( p, n, k )

**Description:** Returns the probability that a Binomially distributed random variable is less than or equal to k.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
p = 0.5;
n = 30;
New Window( "Example: Binomial Distribution",
	y = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, 31 ),
		Pen Color( "red" ),
		Pen Size( 1 );
		For( k = 0, k <= n, k++,
			H Line( k, k + 1, Binomial Distribution( p, n, k ) );
			V Line(
				k + 1,
				Binomial Distribution( p, n, k ),
				Binomial Distribution( p, n, k + 1 )
			);
		);
		Text( {20, 0.1}, "n=", Round( n ), " p=", Round( p, 2 ) );
	),
	H List Box( Slider Box( 0, 1, p, y << reshow ), Text Box( " p" ) ),
	H List Box( Slider Box( 0, 30, n, y << reshow ), Text Box( " n" ) )
);

```

### Binomial Probability

**Syntax:** prob = Binomial Probability( p, n, k )

**Description:** Returns the probability that a Binomially distributed random variable is equal to k.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
cltp = 0.03;
cltn = 30;
New Window( "Example: Binomial Probability and Central Limit Theorem",
	clty = Graph Box(
		Y Scale( 0, 0.3 ),
		X Scale( -1, 60 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( cltk = 0, cltk <= cltn, cltk++,
			V Line( cltk, 0, Binomial Probability( cltp, cltn, cltk ) )
		);
		Text( {15, 0.09}, "n=", Round( cltn ), " p=", Round( cltp, 2 ) );
	),
	H List Box( Slider Box( 0.01, 0.99, cltp, clty << reshow ), Text Box( " p" ) ),
	H List Box(
		Slider Box( 0, 2000, cltn, clty << reshow ),
		Text Box( " n ( Drag me and see Central Limit Theorem )" )
	)
);

```

### Binomial Quantile

**Syntax:** q = Binomial Quantile( p, n, cumprob )

**Description:** Returns the smallest integer quantile for which the cumulative probability of the Binomial( p, n ) distribution is larger than or equal to cumprob.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
qbinexp = 0.3;
qbinexn = 20;
qbinexq = 0.5;
New Window( "Example: Binomial Quantile",
	qbinexy = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, 41 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( qbinexk = 0, qbinexk < Round( qbinexn ), qbinexk++,
			H Line(
				qbinexk,
				qbinexk + 1,
				Binomial Distribution( qbinexp, Round( qbinexn ), qbinexk )
			);
			V Line(
				qbinexk + 1,
				Binomial Distribution( qbinexp, Round( qbinexn ), qbinexk ),
				Binomial Distribution( qbinexp, Round( qbinexn ), qbinexk + 1 )
			);
		);
		Pen Color( "blue" );
		V Line( Binomial Quantile( qbinexp, Round( qbinexn ), qbinexq ), 0, 1.0 );
		Text(
			{6, 0.17},
			"n=",
			Round( qbinexn ),
			" p=",
			Round( qbinexp, 2 ),
			" q=",
			Round( qbinexq, 2 ),
			" quantile=",
			Round( Binomial Quantile( qbinexp, Round( qbinexn ), qbinexq ) )
		);
	),
	H List Box( Slider Box( 0, 1, qbinexp, qbinexy << reshow ), Text Box( " p" ) ),
	H List Box( Slider Box( 0, 40, qbinexn, qbinexy << reshow ), Text Box( " n" ) ),
	H List Box( Slider Box( 0, 1, qbinexq, qbinexy << reshow ), Text Box( " q" ) )
);

```

### Blend Colors

**Syntax:** color = Blend Colors( color1, color2, <percent2>, <colorSpace>, <hueDirection> )

**Description:** Blends two colors with a configurable percentage and color space.

**JMP Version Added:** 18

**Example 1**

```js

Names Default To Here( 1 );
Blend Colors( "black", "white", 0.25 );

```

**Example 2**

```js

Names Default To Here( 1 );
Blend Colors( "red", "blue", "sRGB" );

```

**Example 3**

```js

Names Default To Here( 1 );
Blend Colors( "red", "blue", "lRGB" );

```

**Example 4**

```js

Names Default To Here( 1 );
Blend Colors( "red", "blue", 0.5, "LUV" );

```

**Example 5**

```js

Names Default To Here( 1 );
Blend Colors( "red", "blue", 0.75, "HLS" );

```

**Example 6**

```js

Names Default To Here( 1 );
Names Default To Here( 1 );
c1 = "red";
c2 = "blue";
steps = 20;
New Window( "HLS Radial Color Blending",
	Graph(
		frameSize( 290, 110 ),
		X Scale( 0, 150 ),
		Y Scale( 0, 55 ),
		Suppress Axes,
		Text( {2, 47}, "Short" ),
		Text( {2, 32}, "Long" ),
		Text( {2, 17}, "Positive" ),
		Text( {2, 2}, "Negative" ),
		For( i = 0, i < steps, i += 1,
			x = i * 6 + 30;
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HLS", "Short" ) );
			Rect( x, 45, x + 5, 55, 1 );
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HLS", "Long" ) );
			Rect( x, 30, x + 5, 40, 1 );
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HLS", "Positive" ) );
			Rect( x, 15, x + 5, 25, 1 );
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HLS", "Negative" ) );
			Rect( x, 0, x + 5, 10, 1 );
		)
	)
);

```

**Example 7**

```js

Names Default To Here( 1 );
Names Default To Here( 1 );
c1 = "blue";
c2 = "red";
steps = 20;
New Window( "HCLuv Radial Color Blending",
	Graph(
		frameSize( 290, 110 ),
		X Scale( 0, 150 ),
		Y Scale( 0, 55 ),
		Suppress Axes,
		Text( {2, 47}, "Short" ),
		Text( {2, 32}, "Long" ),
		Text( {2, 17}, "Positive" ),
		Text( {2, 2}, "Negative" ),
		For( i = 0, i < steps, i += 1,
			x = i * 6 + 30;
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HCLuv", "Short" ) );
			Rect( x, 45, x + 5, 55, 1 );
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HCLuv", "Long" ) );
			Rect( x, 30, x + 5, 40, 1 );
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HCLuv", "Positive" ) );
			Rect( x, 15, x + 5, 25, 1 );
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HCLuv", "Negative" ) );
			Rect( x, 0, x + 5, 10, 1 );
		)
	)
);

```

### Blob MD5

**Syntax:** blobResult = Blob MD5( blob )

**Description:** Makes a 16-byte result BLOB from a source BLOB (Binary Large OBject). The 16 byte BLOB is the MD5 checksum (or the hash) of the source BLOB.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Hex(/* make it printable */ Blob MD5(/* get the hash */
		Load Text File(/* a file from the samples */ "$SAMPLE_IMPORT_DATA/animals.txt",
			BLOB/* the result is a BLOB, not a string */
		)
	)
) == "763D3C9F5F3E92951B3A3DC965084DAC" /* benchmark hash value */ /* the result is 1 if the benchmark matches */
;

```

### Blob Peek

**Syntax:** blobResult = Blob Peek( blob, offset, <length> )

**Description:** Makes a new blob from a subrange of bytes of the given blob. The offset argument is zero-based, so the first byte is at offset zero.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Blob Peek( Char To Blob( "Quick Bob, eat your lunch!" ), 6 /*Zero based!*/, 3 );

```

### Blob To Char

**Syntax:** s = Blob To Char( blob, <encoding="utf-8"> )

**Description:** Makes a character string from a BLOB (Binary Large Object), using the specified encoding. Supported encodings include utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, shift_jis, euc-jp, and ascii~hex.

**JMP Version Added:** Before version 14

```js

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

```js

Names Default To Here( 1 );
Blob To Matrix( Hex To Blob( "00010002FFFFFFFE" ), "int", 2, "big", 2 );

```

### Border Box

**Syntax:** y = Border Box( <Left( pix )>, <Right( pix )>, <Top( pix )>, <Bottom( pix )>, <Sides( 0 )>, displayBoxArg )

**Description:** Returns a display box to add space around the argument display box.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Lineup Box( N Col( 1 ), spacing( 10 ),
		Text Box( "Quadratic Formula" ),
		Border Box( Left( 10 ), Right( 10 ), bottom( 10 ), top( 10 ), sides( 15 ),
			Expr As Picture( Expr( (-b + Sqrt( b ^ 2 - 4 * a * c )) / (2 * a) ) )
		)
	)
);

```

### Box Cox Inverse Transform

**Syntax:** x = Box Cox Inverse Transform( y, lambda )

**Description:** Returns the inverse Box-Cox transformation of the argument.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
Box Cox Inverse Transform( 3, 2 );

```

### Box Cox Transform

**Syntax:** y = Box Cox Transform( x, lambda )

**Description:** Returns the Box-Cox transformation of the argument.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
Box Cox Transform( 3, 2 );

```

### Box Plot Seg

**Syntax:** b = Box Plot Seg(<data>, <frequency>, <weight>, <vertical=0|1>)

**Description:** Returns a display seg representing a box plot based on the passed in x and y values.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 5 ), Box Plot Seg( [1, 2, 3, 4] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));

```

### Break

**Syntax:** Break()

**Description:** Causes a break in flow of control within a For or While loop.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
For( i = 1, i <= 10, i++,
	If( i == 5, Break() );
	Print( "i=" || Char( i ) );
);

```

### Build Information

**Syntax:** y = Build Information()

**Description:** Returns the build date and time, release or debug build, and product name.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Build Information();

```

### Busy Light

**Syntax:** y = Busy Light( < <<Automatic(0|1)>, <Size(x, y)>, < <<Disable> )

**Description:** Creates a rotating image to indicate a busy process.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example", Busy Light( <<automatic ) );

```

### Button Box

**Syntax:** y = Button Box( title, script )

**Description:** Returns a display box to show a titled button. The script argument is run when the button is clicked.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example", Button Box( "Press Me", Print( "Pressed." ) ) );

```

### CAS Connect

**Syntax:** CAS Connect(<URL(...)>, <Username(...)>, <Password(...)>, <Prompt(Never | Always | IfNeeded)>, <Session("session id")>, <Proxy Server("http://my_proxy:80")>, <Proxy User("proxy_username")>, <Bypass Proxy("http://localhost:80")>, <Certificates(...)>, <Verify Certificates(1 | 0)>, <No Verify Certificates(1 | 0)>, <Timeout(seconds)>, <Authorization Method("Basic" | "Bearer")>)

**Description:** Connects to a new CAS server. CAS Connect uses URL, User name, Password arguments and optionally Prompt and Session. Prompt can be IfNeeded, Always, or Never. URL, user name, password can be omitted if the Prompt argument is IfNeeded or Always. The default value for Prompt is Never. Session can be used to reconnect to an existing CAS session. The session must be valid for the URL, user name, and password used in the connection. The optional Certificates argument is useful for supplying trusted certificates for https connections to CAS. The optional Verify Certificates or No Verify Certificates argument is useful to temporarily accept self-signed certificates. The optional Proxy Server argument is useful for supplying a proxy host in a proxy environment. The optional Proxy User argument is useful for supplying user and password information for a proxy environment. The optional Bypass Proxy argument is use for bypassing the proxy for certain hosts. The optional Timeout argument sets a timeout value for the CAS connection operations. The optional Authorization Method argument specifies how JMP connects to CAS. This is dependent on the CAS deployment.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );

url = "http://myCasURL";
cas = CAS Connect(
	URL( url ),
	Username( "myCas_user" ),
	Prompt( Always ),
	Certificates( "c:\mycerts.crt" )
);

```

### CAS Delete Table

**Syntax:** CAS Delete Table(tablename, <remove>)

**Description:** This action deletes the filesystem table. The in memory table is not affected. Specifying Quiet will suppress errors for a non-existent table. Specifying remACs will remove access controls for a table. Specifying Remove will also remove the table from memory.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );

CAS Connect( Prompt( ifNeeded ) );
CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );
CAS Delete Table( "Casuser", "Big Class" );

```

### CAS Disconnect

**Syntax:** CAS Disconnect()

**Description:** Disconnects from a CAS server and optionally terminates the session. By default, the session is terminated when disconnected.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );

url = "http://myCasURL";
cas = CAS Connect( URL( url ), Username( "myCas_user" ), Prompt( Always ) );
CAS Disconnect();

```

### CAS Export Data

**Syntax:** y = CAS Export Data(jmp_data_table, cas_libref, cas_dataset, <named_arguments>)

**Description:** Exports a table to a CAS server. jmp_data_table is the JMP data table to export while cas_libref and cas_dataset are the target locations on the CAS server. The optional named argument is Save(1|0). When a table is exported to CAS, it is not persisted to CAS filesystem unless the Save option is used. Most CAS actions occur in memory.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );

CAS Connect( Prompt( ifNeeded ) );
CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "CASUSER", "Big Class" );

```

### CAS Get Data Sets

**Syntax:** y = CAS Get Data Sets(<"caslib">)

**Description:** Gets a list of available CAS data sets. These data sets are found on the CAS filesystem. The optional argument limits the list of data sets to the CAS library. If no argument is used, then the data set list contains the fully qualified data set name (library.dataset). If the argument is used, then the data set list is a list of data set names.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );

cas = Current CAS Connection();
cas << Export Data(
	Open( "$SAMPLE_DATA\Big Class.jmp" ),
	"Casuser",
	"Big Class",
	Save( 1 )
);
datasets = CAS Get Data Sets( "casuser" );
Show( datasets );
cas << Delete Table( "Casuser", "Big Class" );
datasets = CAS Get Data Sets( "casuser" );
Show( datasets );

```

### CAS Get Libraries

**Syntax:** y = CAS Get Libraries()

**Description:** Gets a list of available CAS libraries.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );

CAS Connect( Prompt( ifNeeded ) );
libraries = CAS Get Libraries();
Show( libraries );

```

### CAS Import Data

**Syntax:** dt = CAS Import Data(libref, dataset, <named_arguments>)

**Description:** Imports a table from a CAS server. Optional named arguments are Invisible(0|1), Private(0|1) and UseLabelsForVarNames(0|1).

**JMP Version Added:** 15

```js

Names Default To Here( 1 );

CAS Connect( Prompt( ifNeeded ) );
CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );
CAS Import Data( "Casuser.Big Class" );

```

### CAS Is Connected

**Syntax:** CAS Is Connected

**Description:** Returns 1 if there is an active CAS server connection. Otherwise, returns 0.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );

connected = CAS Is Connected();
Show( connected );

```

### CAS Remove Table

**Syntax:** CAS Remove Table(tablename, <delete>)

**Description:** This action drops the in-memory table. The file that was created with the save action is not affected. Specifying delete will also delete the table from the file system.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );

CAS Connect( Prompt( ifNeeded ) );
CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );
CAS Remove Table( "Casuser", "Big Class" );

```

### CAS Table To Data Table

**Syntax:** dt = CAS Table To Data Table(jsonstring, <Invisible(1|0) | Private(1|0) | Use Labels for Var Names(1|0)>)

**Description:** Converts a SAS CAS Table JSON text to a JMP data table.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );

json =
"\[
{
  "_ctb": true,
  "label": "Selected Rows from Table BIG CLASS",
  "name": "Fetch",
  "title": "Selected Rows from Table BIG CLASS",
  "schema": [
    {
      "format": "",
      "label": "",
      "name": "_Index_",
      "type": "int",
      "width": 4
    },
    {
      "format": "",
      "label": "",
      "name": "name",
      "type": "string",
      "width": 9
    },
    {
      "format": "",
      "label": "",
      "name": "age",
      "type": "double",
      "width": 8
    },
    {
      "format": "",
      "label": "",
      "name": "sex",
      "type": "string",
      "width": 1
    },
    {
      "format": "",
      "label": "",
      "name": "height",
      "type": "double",
      "width": 8
    },
    {
      "format": "",
      "label": "",
      "name": "weight",
      "type": "double",
      "width": 8
    }
  ],
  "rows": [
    [
      1,
      "KATIE",
      12,
      "F",
      59,
      95
    ],
    [
      2,
      "LOUISE",
      12,
      "F",
      61,
      123
    ],
    [
      3,
      "JANE",
      12,
      "F",
      55,
      74
    ],
    [
      4,
      "JACLYN",
      12,
      "F",
      66,
      145
    ],
    [
      5,
      "LILLIE",
      12,
      "F",
      52,
      64
    ],
    [
      6,
      "TIM",
      12,
      "M",
      60,
      84
    ],
    [
      7,
      "JAMES",
      12,
      "M",
      61,
      128
    ],
    [
      8,
      "ROBERT",
      12,
      "M",
      51,
      79
    ],
    [
      9,
      "BARBARA",
      13,
      "F",
      60,
      112
    ],
    [
      10,
      "ALICE",
      13,
      "F",
      61,
      107
    ],
    [
      11,
      "SUSAN",
      13,
      "F",
      56,
      67
    ],
    [
      12,
      "JOHN",
      13,
      "M",
      65,
      98
    ],
    [
      13,
      "JOE",
      13,
      "M",
      63,
      105
    ],
    [
      14,
      "MICHAEL",
      13,
      "M",
      58,
      95
    ],
    [
      15,
      "DAVID",
      13,
      "M",
      59,
      79
    ],
    [
      16,
      "JUDY",
      14,
      "F",
      61,
      81
    ],
    [
      17,
      "ELIZABETH",
      14,
      "F",
      62,
      91
    ],
    [
      18,
      "LESLIE",
      14,
      "F",
      65,
      142
    ],
    [
      19,
      "CAROL",
      14,
      "F",
      63,
      84
    ],
    [
      20,
      "PATTY",
      14,
      "F",
      62,
      85
    ]
  ]
}
]\";
dt = CAS Table To Data Table( json );

```

### CAS Terminate Sessions

**Syntax:** CAS Terminate Sessions

**Description:** Terminates all CAS sessions owned by the current user.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );

CAS Connect( Prompt( ifNeeded ) );
CAS Terminate Sessions();

```

### CDF

**Syntax:** {QuantVec, CumProbVec} = CDF( Y )

**Description:** Returns values of the empirical cumulative probability distribution function for vector or list Y. Cumulative probability is the proportion of data values less than or equal to the corresponding entry in vector QuantVec

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
/* Generate random values, Normal(0,1) */
Y = J( 150, 1, Random Normal() );

/* CDF function */
{Quant, CumProb} = CDF( Y ); 

/* Draw empirical and theorical CDF */
New Window( "Empirical CDF",
	Graph Box(
		X Scale( -3, 3 ),
		Y Scale( 0, 1 ),
		Pen Color( "red" );
		For( i = 2, i <= N Row( Quant ), i++,
			H Line( Quant[i - 1], Quant[i], CumProb[i] );
			V Line( Quant[i - 1], CumProb[i - 1], CumProb[i] );
		);
		i = N Row( Quant );
		V Line( Quant[i], CumProb[i], 1 );
		Pen Color( "blue" );
		Y Function( Normal Distribution( q ), q );
	)
);

```

### Calendar Box

**Syntax:** y = Calendar Box()

**Description:** Returns a display box containing a calendar control. The calendar supports single-selection of a date and optional time.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Calendar Box Example", Calendar Box() );

```

### Caption

**Syntax:** y = Caption( <{h, v}>, text | remove, <Delayed( seconds )>, <Font(font)>, <Font Size(size)>, <Text Color(color)>, <Back Color(color)>, <Spoken(bool)> )

**Description:** Shows a caption window at the location specified by {h, v} and containing the text specified by the text argument. The Delayed( seconds ) argument sets the waiting time in seconds before each caption.

**JMP Version Added:** Before version 14

**Formatted Caption**

```js

Names Default To Here( 1 );
Caption(
	{100, 200},
	"explanation",
	Font( "Arial Black" ),
	Font Size( 16 ),
	Text Color( "blue" ),
	Back Color( "yellow" ),
	Spoken( 1 )
);

```

**Remove Caption**

```js

Names Default To Here( 1 );
Caption( "explanation" );
Wait( 2 );
Caption( remove );

```

### Cauchy Density

**Syntax:** y = Cauchy Density( q, <center>, <scale> )

**Description:** Returns the density at q of a Cauchy distribution with center mu and scale sigma.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example: Cauchy Density",
	y = Graph Box(
		Y Scale( 0, .4 ),
		X Scale( -6, 6 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Cauchy Density( q ), q );
	)
);

```

### Cauchy Distribution

**Syntax:** p = Cauchy Distribution( q, <center>, <scale> )

**Description:** Returns the probability that a Cauchy distributed random variable is less than q.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example: Cauchy Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -6, 6 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Cauchy Distribution( q ), q );
	)
);

```

### Cauchy Quantile

**Syntax:** q = Cauchy Quantile( p, <center>, <scale> )

**Description:** Returns the quantile from a Cauchy distribution, the value for which the probability is p that a random value would be lower.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example: Cauchy Quantile",
	Graph Box(
		Y Scale( -6, 6 ),
		X Scale( 0, 1 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Cauchy Quantile( p ), p );
	)
);

```

### Ceiling

**Syntax:** y = Ceiling( x )

**Description:** Returns the smallest integer greater than or equal to x. Argument can be a number, matrix, or list of numbers.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Ceiling( 1.2 );

```

### Char

**Syntax:** s = Char( x, <w>, <d>, < <<Use Locale( Boolean ) >, < <<Full Precision( Boolean ) > )

**Description:** Returns a representation of x as a character string, using the maximum width w and decimal places d if the x argument is numeric. <<FullPrecision writes numeric values using all available precision.

**JMP Version Added:** Before version 14

**Full Precision**

```js

Names Default To Here( 1 );
Show( Char( 88.54 ), Char( 88.54, <<Full Precision( 1 ) ) );

```

**Simple**

```js

Names Default To Here( 1 );
Char( Pi(), 10, 4 );

```

**Use Locale**

```js

Names Default To Here( 1 );
Char( 2.1, <<Use Locale( 1 ) );

```

### Char To Blob

**Syntax:** blob = Char To Blob( string, <encoding="utf-8"> )

**Description:** Makes a BLOB (Binary Large Object) from a string of characters, using the specified encoding. Supported encodings include utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, shift_jis, euc-jp, and ascii~hex.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Char To Blob( "Café", "utf-16be" );

```

### Char To Hex

**Syntax:** h = Char To Hex( value, <"integer">|<encoding="utf-8"> )

**Description:** Returns the hexadecimal text corresponding to the given value and encoding, which can be a number, a string, or a blob. If the value is a number, IEEE 754 64-bit encoding is used unless the optional argument, "integer", is provided. Supported encodings include utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, ascii~hex, shift_jis, and euc-jp.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Hex( 1024, "integer" ) || " " || Hex( "Café", "utf-16be" );

```

### Char To Path

**Syntax:** m = Char To Path( pathText )

**Description:** Converts a path specification from character form to matrix form.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Show( Char To Path( "M10 10 L50 10 L30 50 Z M20 20 L40 20 L30 40 Z" ) );

```

### Check Box

**Syntax:** y = Check Box( {item, ...}, <script> )

**Description:** Returns a display box to show one or more check boxes.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example", cb = Check Box( {"Good"}, Show( cb << Get() ) ) );

```

### ChiSquare Density

**Syntax:** p = ChiSquare Density( q, df, <nonCentrality=0> )

**Description:** Returns the density at q of a Chi-square distribution with df degrees of freedom.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
cdedf = 2;
New Window( "Example: ChiSquare Density",
	cdey = Graph Box(
		Y Scale( 0, 0.4 ),
		X Scale( 0, 10 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( ChiSquare Density( cdeq, cdedf ), cdeq );
		Text( {7, 0.35}, "df=", Round( cdedf, 2 ) );
	),
	H List Box( Text Box( "df " ), Slider Box( 0.5, 10, cdedf, cdey << reshow ) )
);

```

### ChiSquare Distribution

**Syntax:** p = ChiSquare Distribution( q, df, <nonCentrality=0> )

**Description:** Returns the probability that a Chi-square distributed random variable is less than q.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
cdidf = 2;
New Window( "Example: ChiSquare Distribution",
	cdiy = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 10 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( ChiSquare Distribution( cdiq, cdidf ), cdiq );
		Text( {1, 0.9}, "df=", Round( cdidf, 2 ) );
	),
	H List Box( Text Box( "df " ), Slider Box( 0.5, 10, cdidf, cdiy << reshow ) )
);

```

### ChiSquare Log CDistribution

**Syntax:** y = ChiSquare Log CDistribution( x, df, <nonCentrality=0> )

**Description:** Returns the log of 1 - Chi-square distribution.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
clcdidf = 2;
New Window( "Example: ChiSquare Log CDistribution",
	clcdiy = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 10 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( ChiSquare Log CDistribution( clcdiq, clcdidf ), clcdiq );
		Text( {1, -0.9}, "df=", Round( clcdidf, 2 ) );
	),
	H List Box( Text Box( "df " ), Slider Box( 1, 10, clcdidf, clcdiy << reshow ) )
);

```

### ChiSquare Log Density

**Syntax:** y = ChiSquare Log Density( x, df, <nonCentrality=0> )

**Description:** Returns the log of the Chi-square probability density.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
cldedf = 1;
New Window( "Example: ChiSquare Log Density",
	cldey = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 10 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( ChiSquare Log Density( cldeq, cldedf ), cldeq );
		Text( {7, -0.35}, "df=", Round( cldedf, 2 ) );
	),
	H List Box( Text Box( "df " ), Slider Box( 0.5, 10, cldedf, cldey << reshow ) )
);

```

### ChiSquare Log Distribution

**Syntax:** y = ChiSquare Log Distribution( x, df, <nonCentrality=0> )

**Description:** Returns the log of the Chi-square distribution.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
cldidf = 2;
New Window( "Example: ChiSquare Log Distribution",
	cldiy = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 10 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( ChiSquare Log Distribution( cldiq, cldidf ), cldiq );
		Text( {1, -0.9}, "df=", Round( cldidf, 2 ) );
	),
	H List Box( Text Box( "df " ), Slider Box( 1, 10, cldidf, cldiy << reshow ) )
);

```

### ChiSquare Noncentrality

**Syntax:** nc = ChiSquare Noncentrality( x, df, prob )

**Description:** Returns the noncentrality parameter nc such that prob is equal to the probability that a Chi-square distributed random variable with df degrees of freedom is less than x.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example: ChiSquare Noncentrality",
	chincgr = Graph Box(
		Y Scale( 0.01, 0.99 ),
		X Scale( 0.01, 0.99 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function(
			ChiSquare Noncentrality( 3, 2, ChiSquare Distribution( 3, 2, q ) ),
			q
		);
	)
);
ChiSquare Noncentrality( 3, 2, ChiSquare Distribution( 3, 2, 0.5 ) );

```

### ChiSquare Quantile

**Syntax:** q = ChiSquare Quantile( p, df, <nonCentrality=0> )

**Description:** Returns the quantile from a Chi-Square distribution, the value for which the probability is p that a random value would be lower.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
ChiSquare Quantile( 0.15, 5 );

```

### Chol Update

**Syntax:** L2 = Chol Update( L, V, C )

**Description:** Returns an updated Cholesky root of A+V*C*V&apos; where C is an m by m symmetric matrix and V is an n by m matrix. The argument L must be the Cholesky root of an n by n matrix A.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
/* The inner product of a design matrix */
exS = [16 1 0 11 -1 12,
1 11 -1 1 -1 1,
0 -1 12 -1 1 0,
11 1 -1 11 -1 9,
-1 -1 1 -1 9 -1,
12 1 0 9 -1 12];
/* Conduct the Cholesky decomposition */
exAchol = Cholesky( exS );

/* Two column vectors to be applied to change the design matrix */
exV = [1 1, 0 0, 0 1, 0 0, 0 0, 0 1];

/* The first column vector is added to one of the rows in the design matrix */
/* The second column vector is subtracted from one of the rows in the design matrix */
exC = [1 0, 0 -1];

/* Update the Cholesky decomposition manually */
exAnew = exS + exV * exC * exV`;
exAcholnew = Cholesky( exAnew );

/* Update the Cholesky decomposition more efficiently */
exAcholnew_test = Chol Update( exAchol, exV, exC );

/* Results are the same */
Show( exAcholnew_test );
Show( exAcholnew );

```

### Cholesky

**Syntax:** L = Cholesky( A )

**Description:** Returns the Cholesky decomposition of a positive semi-definite matrix. L is a lower triangular matrix such that L*L` = A.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Cholesky( [1 2, 2 13] );

```

### Choose

**Syntax:** y = Choose( i, expr1, expr2, ..., exprElse )

**Description:** Evaluates and returns the ith expr argument or the exprElse argument if there is no ith expr argument.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Choose( Random Integer( 1, 5 ), "red", "blue", "other" );

```

### Choose Closest

**Syntax:** Choose Closest(source string, {canonical strings...}, <Ignore Case(ignore=1|0)>, <Ignore Nonprintable(ignore=1|0)>, <Ignore Whitespace(ignore=1|0)>, <Max Edit Count(count)>, <Max Edit Ratio([0..1])>, <Min String Length(<count=3>)>, <Replace Unmatched(replace=0|1)>, <Unmatched Value(<value="">)>)

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

**Allow edits**

```js

Names Default To Here( 1 );
Choose Closest( "MARTA", {"MARTHA"}, Max Edit Count( 2 ) );

```

**Choose among strings, no edits**

```js

Names Default To Here( 1 );
Choose Closest( "MARTHA_", {"Martha", "MARY"} );

```

**Keep punctuation**

```js

Names Default To Here( 1 );
Choose Closest( "MARTHA_", {"MARTHA"}, Ignore Punctuation( 0 ) );

```

**Unmatched**

```js

Names Default To Here( 1 );
Choose Closest( "MARTHA", {"Martha"}, Ignore Case( 0 ), Unmatched() );

```

### Circle

**Syntax:** Circle( {x, y}, radius|PixelRadius( px ), ..., <"FILL"> )

**Description:** Draws a circle centered at {x, y}. The radius can be specified as an integer based on the vertical axis or as a number of pixels. A pixel-based radius creates a circle that does not vary in size when the vertical axis changes. Arguments can be repeated in any order to draw multiple circles. "FILL", if used, must be last, and fills the circles with the fill color rather than drawing them with the pen color.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Color( "red" );
		Circle( {20, 20}, 4, 7, 10/* no fill for concentric circles */ );
		Fill Color( "blue" );
		Transparency( .25 );/* transparent fill for concentric circles */
		Circle( {60, 20}, 4, 7, 10, "FILL" );
		Fill Color( "green" );
		Transparency( 1 );/* solid fill */Circle(
			PixelRadius( 18 ),
			{40, 20},
			{40, 50},
			{40, 80},
			"FILL"
		);
	)
);

```

### Class Exists

**Syntax:** nsexists = Class Exists( class name )

**Description:** Returns 1 if the class specified by the name argument exists. Otherwise, a 0 is returned.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
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
		New Object(
			complex( real * y:real - imag * y:imag, imag * y:real + real * y:imag )
		)
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

### Clear Global Window Handler

**Syntax:** Clear Global Window Handler()

**Description:** Clears a window handler previously set by Set Global Window Handler.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
Set Global Window Handler(
	Function( {window},
		Print( window << get window title() );
		window << close window();
	)
);
New Window( "My Window" );
Clear Global Window Handler();

```

### Clear Globals

**Syntax:** Clear Globals( < varname, ... > )

**Description:** Clears the values of all currently defined global symbols.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Clear Globals();

```

### Clear Log

**Syntax:** Clear Log()

**Description:** Makes the log empty.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Clear Log();

```

### Clear Symbols

**Syntax:** Clear Symbols( < varname, ... > )

**Description:** Clears the values of all currently defined symbols.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Clear Symbols();

```

### Clipboard Capture

**Syntax:** clp = Clipboard Capture( box << Copy )

**Description:** If the JSL within this function would have normally copied something to the OS Clipboard, it is instead copied to a Clipboard object and returned.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Property( "Units", "in" );
clp = Clipboard Capture( dt << Select Columns( :height ) << Copy Column Properties );
Show( Get Clipboard() );
Show( clp << Get Flavor Data( "Text", <<Text ) );

```

### Close

**Syntax:** Close( <dataTableRef|name>, <NoSave|Save( "path" )> )

**Description:** Closes the data table referenced by the first argument, which defaults to the current data table in the current project (or no project if not running the script in a project).



To specify a project, use the optional Project() argument with a title, index, display box, or window object. Use Project(0) to specify no project when running the script in a project.



The second argument is used to save the data table. Use an appropriate file extension in the path to save the data table as a non-JMP format. Specifying NoSave bypasses the prompt to save or disregard changes.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
exdt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 3 );
Close( exdt, NoSave );

```

### Close All

**Syntax:** Close All( <Project(title|index|box|window)>, Data Tables | Reports | Journals, <invisible | private>, <NoSave|Save> )

**Description:** Closes all open resources of a specific type: data tables, journals, or reports.



Only windows in the current project (or no project if not running the script in a project) will be closed. To specify a project, use the optional Project() argument with a title, index, display box, or window object. Use Project(0) to specify no project when running the script in a project.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
exdt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
exdt2 = Open( "$SAMPLE_DATA/Animals.jmp" );
Wait( 3 );
Close All( Data Tables, NoSave );

```

### Close Database Connection

**Syntax:** Close Database Connection(databaseConnectionHandle)

**Description:** Closes a database connection returned from Create Database Connection

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Close Database Connection( databaseConnectionHandle );

```

### Close Log

**Syntax:** Close Log()

**Description:** Close the log window

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Close Log();
Show( Is Log Open() );

```

### Col At

**Syntax:** y = Col At( col, index, <byVar, ...>, < <<relative(bool)>, < <<skip missing(expr)> )

**Description:** Returns the value of col at row position index within its byVar group. Rows where the skip missing expression evaluates to a missing value are not included in the indexing.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Lag Height by Sex", Formula( Col At( :height, -1, :sex, <<relative( 1 ) ) ) );
New Column( "Relative to First Height", Formula( :height / Col At( :height, 1, :sex ) ) );
New Column( "Relative to Last Height", Formula( :height / Col At( :height, -1, :sex ) ) );

```

### Col Box

**Syntax:** y = Col Box( title, boxes )

**Description:** Returns a column box made up of the given display boxes.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
dt = New Window( "Example",
	exx = 1;
	exy = 4;
	exz = 8;
	Table Box(
		String Col Box( "strings", {"x", "y", "z"} ),
		Col Box(
			"boxes",
			Slider Box( 0, 10, exx, Show( exx ) ),
			Slider Box( 0, 10, exy, Show( exy ) ),
			Slider Box( 0, 10, exz, Show( exz ) )
		)
	);
);

```

### Col Cumulative Sum

**Syntax:** y = Col Cumulative Sum( xCol, <byVar, <Excluded( Row State() )>, ...>, < << Freq( freqCol ) > )

**Description:** Returns the cumulative sum for the current row. By variables do not need to be presorted.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 40;
Col Cumulative Sum( :height, :sex );

```

**Example 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Cumulative Sum for each Sex",
	Formula( Col Cumulative Sum( :height, :sex ) )
);
dt << New Column( "Col Cumulative Sum for each Sex grouped by Excluded",
	Formula( Col Cumulative Sum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Interpolate

**Syntax:** y = Col Interpolate( v, xCol, yCol, <byVar, ...>, < <<method(linear|nearest|previous|next)>, < <<extrapolate(bool)> )

**Description:** Returns an interpolated value within yCol, corresponding to the position of v with xCol]. Values outside the range of xCol will be missing unless extrapolate is on, in which case the nearest yCol value will be returned.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/GNP.jmp" );
dt << New Column( "date30", Formula( :date + 30 ) );
dt << New Column( "gnp30",
	Formula( Col Interpolate( :date30, :date, :"gross national product ($billions)"n ) )
);

```

### Col List Box

**Syntax:** y = Col List Box( <Data Table( name )>, <all>|<character|numeric>, <width( pix )>, <grouped>, <maxSelected( n )>, <nlines( n )>, <MaxItems( n )>, <MinItems( n )>, <onChange( expr )>, < <<Modeling Type({"Any","Continuous","Nominal","Ordinal","Multiple Response","Unstructured Text","Vector","None","Row State"}) >, < << Set Data Type(Any|Numeric|Character)>, <script> )

**Description:** Returns a display box to show list box to select data table columns. Use the <<Modeling Type message to allow specialty modeling types or to restrict the types allowed. The default value of "Any" will allow any column with a classic modeling type ("Continuous", "Nominal", "Ordinal").

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Col List Box Example 1",
	Col List Box( all, width( 250 ), maxSelected( 1 ) )
);

```

**Example 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Col List Box Example 2",
	Col List Box( all, <<Set Data Type( "numeric" ), width( 250 ), maxSelected( 1 ) )
);

```

**Example 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Col List Box Example 3",
	H List Box(
		ll1 = Col List Box( all ),
		Button Box( "Add", ll2 << append( ll1 << get selected ) ),
		ll2 = Col List Box( "numeric", MaxItems( 1 ), nlines( 1 ) ),
		Button Box( "Remove", ll2 << remove selected )
	)
);

```

### Col Max

**Syntax:** y = Col Maximum( xCol, <byVar, <Excluded( Row State() )>, ...> )

**Description:** Returns the maximum value across rows in a column. The result is cached internally so that multiple evaluations will be efficient. The optional byVar arguments specify by groups for the calculation. Note that byVar arguments should be used in a column formula or in a For Each Row() function.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Maximum( :height );

```

**Example 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Maximum( :height, :age ) ) );

```

**Example 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Maximum Value for Each Age and Sex Group",
	Formula( Col Maximum( :height, :age, :sex ) )
);

```

**Example 4**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Max for each Sex", Formula( Col Maximum( :height, :sex ) ) );
dt << New Column( "Col Max for each Sex grouped by Excluded",
	Formula( Col Maximum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Maximum

**Syntax:** y = Col Maximum( xCol, <byVar, <Excluded( Row State() )>, ...> )

**Description:** Returns the maximum value across rows in a column. The result is cached internally so that multiple evaluations will be efficient. The optional byVar arguments specify by groups for the calculation. Note that byVar arguments should be used in a column formula or in a For Each Row() function.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Maximum( :height );

```

**Example 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Maximum( :height, :age ) ) );

```

**Example 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Maximum Value for Each Age and Sex Group",
	Formula( Col Maximum( :height, :age, :sex ) )
);

```

**Example 4**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Max for each Sex", Formula( Col Maximum( :height, :sex ) ) );
dt << New Column( "Col Max for each Sex grouped by Excluded",
	Formula( Col Maximum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Mean

**Syntax:** y = Col Mean( xCol, <byVar, <Excluded( Row State() )>, ...>, < << Freq( freqCol ) > )

**Description:** Returns the sample mean across rows in a column. The result is cached internally so that multiple evaluations will be efficient. The optional byVar arguments specify by groups for the calculation. Note that byVar arguments should be used in a column formula or in a For Each Row() function.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Mean( :height );

```

**Example 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Mean( :height, <<Freq( :weight ) );

```

**Example 3**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Mean( :height, :age ) ) );

```

**Example 4**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Mean for Each Age and Sex Group",
	Formula( Col Mean( :height, :age, :sex ) )
);

```

**Example 5**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Mean for each Sex", Formula( Col Mean( :height, :sex ) ) );
dt << New Column( "Col Mean for each Sex grouped by Excluded",
	Formula( Col Mean( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Median

**Syntax:** y = Col Median( xCol, <byVar, <Excluded( Row State() )>, ...>, < << Freq( freqCol ) > )

**Description:** Returns the specified median across rows in a column. The ordering is cached internally so that multiple evaluations will be efficient.

**JMP Version Added:** 15

**Example 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Col Median Height",
	numeric,
	continuous,
	formula( Col Median( :height ) )
);
dt << New Column( "Col Median Height by Age",
	numeric,
	continuous,
	formula( Col Median( :height, :age ) )
);

```

**Example 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 1;
Show( Col Median( :height ) );
Row() = 1;
Show( Col Median( :height, :age ) );

```

**Example 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Median for each Sex", Formula( Col Median( :height, :sex ) ) );
dt << New Column( "Col Median for each Sex grouped by Excluded",
	Formula( Col Median( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Min

**Syntax:** y = Col Minimum( xCol, <byVar, <Excluded( Row State() )>, ...> )

**Description:** Returns the minimum value across rows in a column. The result is cached internally so that multiple evaluations will be efficient. The optional byVar arguments specify by groups for the calculation. Note that byVar arguments should be used in a column formula or in a For Each Row() function.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Minimum( :height );

```

**Example 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Minimum( :height, :age ) ) );

```

**Example 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Minimum Value for Each Age and Sex Group",
	Formula( Col Minimum( :height, :age, :sex ) )
);

```

**Example 4**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Min for each Sex", Formula( Col Minimum( :height, :sex ) ) );
dt << New Column( "Col Min for each Sex grouped by Excluded",
	Formula( Col Minimum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Minimum

**Syntax:** y = Col Minimum( xCol, <byVar, <Excluded( Row State() )>, ...> )

**Description:** Returns the minimum value across rows in a column. The result is cached internally so that multiple evaluations will be efficient. The optional byVar arguments specify by groups for the calculation. Note that byVar arguments should be used in a column formula or in a For Each Row() function.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Minimum( :height );

```

**Example 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Minimum( :height, :age ) ) );

```

**Example 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Minimum Value for Each Age and Sex Group",
	Formula( Col Minimum( :height, :age, :sex ) )
);

```

**Example 4**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Min for each Sex", Formula( Col Minimum( :height, :sex ) ) );
dt << New Column( "Col Min for each Sex grouped by Excluded",
	Formula( Col Minimum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Mode

**Syntax:** y = Col Mode( xCol, <byVar, <Excluded( Row State() )>, ...>, < << Freq( freqCol ) > )

**Description:** Returns the sample mode across rows in a column, selecting the smallest in the case of multiple modes. The result is cached internally so that multiple evaluations will be efficient. The optional byVar arguments specify by groups for the calculation. Note that byVar arguments should be used in a column formula or in a For Each Row() function.

**JMP Version Added:** 17

**Example 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Mode( :height );

```

**Example 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Mode( :height, :age ) ) );

```

**Example 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Mode for Each Age and Sex Group",
	Formula( Col Mode( :height, :age, :sex ) )
);

```

**Example 4**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Mode for each Sex", Formula( Col Mode( :height, :sex ) ) );
dt << New Column( "Col Mode for each Sex grouped by Excluded",
	Formula( Col Mode( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Moving Average

**Syntax:** y = Col Moving Average( xCol, <weighting=0.25>, <before=-1>, <after=0>, <partial window is missing=1>, <byVar, <Excluded( Row State() )>, ...> )

**Description:** Returns the moving average over a given interval based at the current row. For the weight multiplier, 1 means equal weighting, 0 means linear weighting, and other values act as an exponential weighting multiplier. By variables do not need to be presorted.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 40;
Col Moving Average( :height, 1, 5, 0, :sex );

```

**Example 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Moving Average for each Sex",
	Formula( Col Moving Average( :height, :sex ) )
);
dt << New Column( "Col Moving Average for each Sex grouped by Excluded",
	Formula( Col Moving Average( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col N Missing

**Syntax:** y = Col N Missing( xCol, <byVar, <Excluded( Row State() )>, ...> )

**Description:** Returns the number of missing values across rows in a column. The result is cached internally so that multiple evaluations will be efficient. The optional byVar arguments specify by groups for the calculation. Note that byVar arguments should be used in a column formula or in a For Each Row() function.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Col N Missing( :height );

```

**Example 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col N Missing( :height, :age ) ) );

```

**Example 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Number of Missing Values for Each Age and Sex Group",
	Formula( Col N Missing( :height, :age, :sex ) )
);

```

**Example 4**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:height[10] = .;
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col N Missing for each Sex",
	Formula( Col N Missing( :height, :sex ) )
);
dt << New Column( "Col N Missing for each Sex grouped by Excluded",
	Formula( Col N Missing( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col N Unique

**Syntax:** y = Col N Unique( xCol, <byVar, ...>, < <<score missing(bool)> )

**Description:** Returns the number of unique values in a column. If missing values are requested, all missing value codes are counted as a single value.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "N unique age by sex", Formula( Col N Unique( :age, :sex ) ) );
New Column( "N unique height by age", Formula( Col N Unique( :height, :age ) ) );

```

### Col Number

**Syntax:** y = Col Number( xCol, <byVar, <Excluded( Row State() )>, ...>, < << Freq( freqCol ) > )

**Description:** Returns the number of nonmissing values across rows in a column. The result is cached internally so that multiple evaluations will be efficient. The optional byVar arguments specify by groups for the calculation. Note that byVar arguments should be used in a column formula or in a For Each Row() function.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Number( :height );

```

**Example 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Number( :height, :age ) ) );

```

**Example 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Number of Nonmissing Values for Each Age and Sex Group",
	Formula( Col Number( :height, :age, :sex ) )
);

```

**Example 4**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:height[10] = .;
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Number for each Sex", Formula( Col Number( :height, :sex ) ) );
dt << New Column( "Col Number for each Sex grouped by Excluded",
	Formula( Col Number( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Quantile

**Syntax:** y = Col Quantile( xCol, p, <byVar, <Excluded( Row State() )>, ...>, < << Freq( freqCol ) > )

**Description:** Returns the specified quantile across rows in a column. The ordering is cached internally so that multiple evaluations will be efficient.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Col Quantile Height",
	numeric,
	continuous,
	formula( Col Quantile( :height, 0.5 ) )
);
dt << New Column( "Col Quantile Height by Age",
	numeric,
	continuous,
	formula( Col Quantile( :height, 0.5, :age ) )
);

```

**Example 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 1;
Show( Col Quantile( :height, 0.5 ) );
Row() = 1;
Show( Col Quantile( :height, 0.5, :age ) );

```

**Example 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Quantile for each Sex",
	Formula( Col Quantile( :height, 0.5, :sex ) )
);
dt << New Column( "Col Quantile for each Sex grouped by Excluded",
	Formula( Col Quantile( :height, 0.5, :sex, Excluded( Row State() ) ) )
);

```

### Col Rank

**Syntax:** y = Col Rank( xCol, <byVar, <Excluded( Row State() )>, ...>, < <<tie("average"|"row"|"minimum"|"maximum"|"arbitrary")> )

**Description:** Returns the rank, ranging from 1 as the lowest, with row-order tie-breaking unless specified by the <<Tie argument. "average" produces the average for tied ranks, and "minimum" produces the lowest of tied ranks. For "row" and "arbitrary" each row has a unique rank.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Rank Height", Formula( Col Rank( :height, <<tie( "average" ) ) ) );
New Column( "Rank Height by age", Formula( Col Rank( :height, :age ) ) );

```

**Example 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Rank for each Sex", Formula( Col Rank( :height, :sex ) ) );
dt << New Column( "Col Rank for each Sex grouped by Excluded",
	Formula( Col Rank( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Score

**Syntax:** y = Col Score( xCol, <byVar, ...>, < <<score missing(bool)> )

**Description:** Returns an integer score for each unique value, ordering according to any relevant column properties.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Score Height", Formula( Col Score( :height ) ) );
New Column( "Score Height by age", Formula( Col Score( :height, :age ) ) );

```

### Col Sequence

**Syntax:** y = Col Sequence( <byVar, ...>, < <<skip missing(expr)>, < <<sequence(start=1, end=unbounded, incr=1, repeat=1)>)

**Description:** Returns the position of this row within its byVar group, adjusted by skip missing and any sequence parameters.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Row within sex", Formula( Col Sequence( :sex ) ) );
New Column( "Alternate within sex", Formula( Col Sequence( :sex, <<Sequence( 1, 2 ) ) ) );
New Column( "Row within sex, 60+",
	Formula( Col Sequence( :sex, <<skip missing( Sqrt( :height - 60 ) ) ) )
);

```

### Col Shuffle

**Syntax:** y = Col Shuffle(<byVar, <Excluded( Row State() )>, ...>)

**Description:** Returns a random integer between 1 and the number of rows of the current data table. When used in a column formula, Col Shuffle() creates a random ordering of row numbers with each row number appearing only once. The ordering is cached internally so that multiple evaluations are efficient.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Shuffle 1", Numeric, Continuous, Set Formula( Col Shuffle() ) );
dt << New Column( "Shuffle 2", Numeric, Continuous, Set Formula( Col Shuffle() ) );

```

**Example 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Shuffle", Numeric, Continuous, Set Formula( Col Shuffle( :age ) ) );

```

**Example 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Shuffle for each Sex", Formula( Col Shuffle( :height, :sex ) ) );
dt << New Column( "Col Shuffle for each Sex grouped by Excluded",
	Formula( Col Shuffle( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Simple Exponential Smoothing

**Syntax:** y = Col Simple Exponential Smoothing( xCol, alpha, <byVar, ...> )

**Description:** Returns the simple exponential smoothing prediction for the current row, using smoothing weight alpha. By variables do not need to be presorted. Formula is Predicted Value[t]=alpha * Observed Value[t-1] + (1-alpha) * Predicted Value[t-1], with Predicted Value[1] = Observed Value[1].

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Time Series/Seriesa.jmp" );
Row() = 40;
Col Simple Exponential Smoothing( :Column1, .7 );

```

### Col Span Box

**Syntax:** y = Col Span Box( title, children )

**Description:** Returns a column that has a header that spans child columns

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "test",
	Table Box(
		Col Span Box(
			"Col Span",
			String Col Box( "col 1", {"A", "B", "C"} ),
			Number Col Box( "col2", {1, 2, 3} )
		)
	)
);

```

### Col Standardize

**Syntax:** y = Col Standardize( xCol, <byVar, <Excluded( Row State() )>, ...> )

**Description:** Returns the value minus the column mean divided by the column standard deviation across rows in a column. If by-group columns are specified, the value is standardized against the mean and standard deviation of the by-group.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 1;
Col Standardize( :height );

```

**Example 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Standardize( :height, :age ) ) );

```

**Example 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Standardize for each Sex",
	Formula( Col Standardize( :height, :sex ) )
);
dt << New Column( "Col Standardize for each Sex grouped by Excluded",
	Formula( Col Standardize( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Std Dev

**Syntax:** y = Col Std Dev( xCol, <byVar, <Excluded( Row State() )>, ...>, < << Freq( freqCol ) > )

**Description:** Returns the sample standard deviation across rows in a column. The result is cached internally so that multiple evaluations will be efficient. The optional byVar arguments specify by groups for the calculation. Note that byVar arguments should be used in a column formula or in a For Each Row() function.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Std Dev( :height );

```

**Example 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Std Dev( :height, :age ) ) );

```

**Example 3**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Std Dev( :height, :age, <<Freq( :weight ) ) ) );

```

**Example 4**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Standard Deviation for Each Age and Sex Group",
	Formula( Col Std Dev( :height, :age, :sex ) )
);

```

**Example 5**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Standard Deviation for each Sex",
	Formula( Col Std Dev( :height, :sex ) )
);
dt << New Column( "Col Standard Deviation for each Sex grouped by Excluded",
	Formula( Col Std Dev( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Stored Value

**Syntax:** y = Col Stored Value( <dt>, xCol, <row=Row()> )

**Description:** Returns column value that has not had column properties applied to it. If row option is not specified, then the current row is assumed.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Equity.jmp" );
:JOB << Set Property( "Missing Value Codes", {"Other"} );
y1 = Col Stored Value( :JOB, 10 );
y2 = Col Stored Value( :JOB, 11 );
y3 = Col Stored Value( :JOB, 14 );
y4 = Col Stored Value( :JOB, 15 );
Show( y1, y2, y3, y4 );

```

### Col Sum

**Syntax:** y = Col Sum( xCol, <byVar, <Excluded( Row State() )>, ...>, < << Freq( freqCol ) > )

**Description:** Returns the sum across rows in a column. The result is cached internally so that multiple evaluations will be efficient. The optional byVar arguments specify by groups for the calculation. Note that byVar arguments should be used in a column formula or in a For Each Row() function.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Sum( :height );

```

**Example 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Sum( :height, <<Freq( :weight ) );

```

**Example 3**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Sum( :height, :age ) ) );

```

**Example 4**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Sum for Each Age and Sex Group",
	Formula( Col Sum( :height, :age, :sex ) )
);

```

**Example 5**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Sum for each Sex", Formula( Col Sum( :height, :sex ) ) );
dt << New Column( "Col Sum for each Sex grouped by Excluded",
	Formula( Col Sum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Collapse Whitespace

**Syntax:** scw = Collapse Whitespace( s )

**Description:** Trims leading and trailing whitespace and removes duplicate interior white spaces

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Collapse Whitespace( "  The  dog    crossed    the  road  " );

```

### Color Difference

**Syntax:** color = Color Difference( color1, color2, <difference metric>)

**Description:** Returns the difference between two colors under a specified color difference metric.

**JMP Version Added:** 18

**Example 1**

```js

Names Default To Here( 1 );
Color Difference( "red", "blue" );

```

**Example 2**

```js

Names Default To Here( 1 );
Color Difference( "red", "blue", "sRGB" );

```

**Example 3**

```js

Names Default To Here( 1 );
Color Difference( "red", "blue", "redmean" );

```

**Example 4**

```js

Names Default To Here( 1 );
Color Difference( "red", "blue", "CIE76" );

```

**Example 5**

```js

Names Default To Here( 1 );
Color Difference( "red", "blue", "CIE94" );

```

**Example 6**

```js

Names Default To Here( 1 );
Color Difference( "red", "blue", "CIEDE2000" );

```

**Example 7**

```js

Names Default To Here( 1 );
Color Difference( "red", "blue", "dEok" );

```

### Color Of

**Syntax:** y = Color Of( <rs> ); Color Of( <Row State( <r> )> ) = y

**Description:** Returns the color component of the specified row state value, either a positive JMP color palette index or a negative RGB-encoded value. If Color Of is used as an L-value, it changes the color of the current (or rth) row in the current data table.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" ) << Color By Column( :height );
Color To RGB( Color Of( Row State( 3 ) ) );
Row() = 3;
Color To RGB( Color Of() );

```

### Color State

**Syntax:** rs = Color State( color )

**Description:** Returns a row state value with the color component set to the specified value. The color argument can be any valid JSL color.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Color State( {1, 0.5, 1} );
Color To RGB( Color Of( Row State( 3 ) ) );

```

### Color To HLS

**Syntax:** {h, l, s} = Color To HLS( color )

**Description:** Returns a list of the hue, lightness, and saturation components.  The color argument can be any valid JSL color, or a matrix of color numbers.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Color To HLS( RGB Color( 1.0, 0.5, 0.5 ) );

```

### Color To RGB

**Syntax:** {r, g, b} = Color To RGB( color )

**Description:** Returns a list of the red, green, and blue components, between 0 and 1. The color argument can be any valid JSL color, or a matrix of color numbers.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Color To RGB( HLS Color( 30 / 360, 0.5, 1 ) );

```

### Column

**Syntax:** y = Column( name|number );

y = Column( dataTable, name|number, <"formatted"> )

**Description:** Returns a reference to the specified data table column. The keyword "formatted" allows accessing formatted data, like the value label.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
col4 = Column( 4 );
ht = Column( "height" );
col4[1] + ht[2];

```

**Example 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << run script( "Set Sex Value Labels" );
col = Column( dt, "sex", "formatted" );
Write( "\!n", col[5] );
Write( "\!nData value returned is the formatted value of row 5." );

```

### Column Dialog

**Syntax:** y = Column Dialog( <var = ColList("Label", <Min Col(min)>, <Max Col(max)>, <Width(w)>, <Data Type("Numeric"|"Character"|"Any")>, <Modeling Type({<"Continuous">, <"Nominal">, <"Ordinal">, <"None">, <"Multiple Response">, <"Unstructured Text">, <"Vector">})> )>, <var=EditText("string")>, <var=EditNumber(num)>, <var=Check Box( "Text", 0|1)>, <var=RadioButtons( "a", "b" )>, <var=Combo Box("choice1", ...)>, <HList(box, ...)>, <VList(box, ...)>, <LineUp(ncol, box, ...)>, <Text Box("string")>, <Window Title("title")>, <Window Icon("icon string")>, <Dialog Description("description")>, <Recall(script)>, <Help Script(script)>)

**Description:** Prompts the user with a modal window with fields to select columns of a data table. The specification can include several types of input boxes as well as container boxes to organize the window.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
Column Dialog(
	ex y = ColList( "Y", Min Col( 1 ), Max Col( 2 ), Data Type( "Numeric" ) ),
	ex x = ColList( "X",
		Max Col( 1 ),
		Modeling Type( {"Continuous", "Multiple Response"} )
	),
	Line Up( 2,
		Text Box( "Alpha" ), ex = EditNumber( .05 ),
		Text Box( "Beta" ), ey = EditText( "xyz" )
	),
	HList( cb = Check Box( "check", 1 ) ),
	HList( combo = Combo Box( "option1", "option2" ) ),
	HList( rb = RadioButtons( "a", "b" ) ),
	Window Title( "Custom Launch Dialog" ),
	Window Icon( "RowState" ), //icon string can be a full path file name of an image file.
	Dialog Description( "The dialog before a groundbreaking discovery!" ),
	Recall Script(
		Function( {dlgBox},
			dlgBox[list box box( 2 )] << remove all;
			dlgBox[list box box( 1 )] << clear selection;
			dlgBox[list box box( 1 )] << set selected( 3 );
			dlgBox[Button Box( 2 )] << click;
		)
	),
	Help Script( Web( "http://www.jmp.com/" ) )
);

```

### Column Name

**Syntax:** name = Column Name( n )

**Description:** Returns the name of the nth column of the current data table.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Column Name( 4 );

```

### Combine States

**Syntax:** rs = Combine States( rs1, ... )

**Description:** Combines several row state values into one.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Combine States( Hue State( 5 ), Shade State( 1 ) );

```

### Combo Box

**Syntax:** y = Combo Box( {item <( tipstr )>, ...}, <script> )

**Description:** Returns a display box to show a combo box with a popup menu. Each item in the combo box can have an optional tooltip that is specified as a string inside of parentheses following the item text string.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	cb = Combo Box( {"single", "double", "triple"("tool tip")}, Show( cb << Get() ) )
);

```

### Concat

**Syntax:** s = s1 || s2 ...; m = m1 || m2 ...; s = Concat( s1, s2, ... )

**Description:** Concatenates strings into a longer string or matrices into a wider matrix.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
[1 2] || [3 4] || [5 6];

```

### Concat Items

**Syntax:** string = Concat Items( {list of strings}, <separatorString> )

**Description:** Joins a list of strings into one long string, separating each from next with the separator, a blank if unspecified.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Concat Items( {"www", "jmp", "com"}, "." );

```

### Concat To

**Syntax:** string1 ||= string2; matrix1 ||= matrix2; Concat To( a, b )

**Description:** Concatenates in place. a ||= b is equivalent to a = a || b. This is an assignment operator.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
ex = "hello ";
ex ||= "world";

```

### Constrained Maximize

**Syntax:** Constrained Maximize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, <<LessThanEQ({mat_A, vec_b}), <<GreaterThanEQ({mat_A, vec_b}), <<EqualTo({mat_A, vec_b}), <<MaxIter( 250 ), <<tolerance( .00001 ), <<ShowDetails(True), <<StartingValues([x1, x2, ... ])), <<SetVariableLimit({lowerLimitVector,upperLimitVector})

**Description:** Finds values for the function&apos;s arguments, given in the list {x1, x2, ...}, that maximize the expr expression with optional linear constraints. The variables, x1, x2, and so on, can be scalars or vectors. Lower and upper bounds must be specified for each variable in parentheses following the variable&apos;s name or with the optional parameter <<SetVariableLimits(). Optional arguments for the Constrained Maximize function enable you to specify the following: linear constraints, maximum number of iterations, desired tolerance, output details, starting values, and limits for the optimization variables. (See example 2.) Linear constraints are specified using the mat_A coefficient matrix and the vec_b right hand side vector.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
/*Simple Example*/
f = Expr(
	-2 * x1 ^ 2 - 2 * x2 ^ 2 + 2 * x1 * x2 + 4 * x1 + 6 * x2
);
A = [1 1, 1 5];
b = [2, 5];
minFun = Constrained Maximize(
	f,
	{x1( 0, 5 ), x2( 0, 5 )},
	<<lessthanEQ( {A, b} )/*and/or <<GreaterThanEQ({A,b}) and/or <<EqualTo({A,b})*/,
	<<StartingValues( [1, .5] )
);
Eval List( {x1, x2, minFun} );

```

**Example 2**

```js

Names Default To Here( 1 );
/*Simple Example with optional parameters included*/ 
x = [., .];
f = Expr(
	-2 * x[1] ^ 2 - 2 * x[2] ^ 2 + 2 * x[1] * x[2] + 4 * x[1] + 6 * x[2]
);
A = [1 1, 1 5];
b = [2, 5];
{objVal, iters, gradient, hessian} = Constrained Maximize(
	f,
	{x},
	<<lessthanEQ( {A, b} )/*and/or <<GreaterThanEQ({A,b}) and/or <<EqualTo({A,b})*/,
	MaxIter( 250 ),
	<<tolerance( 1e-5 ),
	<<showDetails( True ),
	<<StartingValues( [1, .5] ),
	<<setVariableLimit( {[0, 0], [5, 5]} )
);
Show( x, objVal, iters, gradient, hessian );

```

### Constrained Minimize

**Syntax:** Constrained Minimize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, <<LessThanEQ({mat_A, vec_b}), <<GreaterThanEQ({mat_A, vec_b}), <<EqualTo({mat_A, vec_b}), <<MaxIter( 250 ), <<tolerance( .00001 ), <<ShowDetails(True), <<StartingValues([x1, x2, ... ])), <<SetVariableLimit({low,high})

**Description:** Finds values for the function&apos;s arguments, given in the list {x1, x2, ...}, that minimize the expr expression with optional linear constraints. The variables, x1, x2, and so on, can be scalars or vectors. Lower and upper bounds must be specified for each variable in parentheses following the variable&apos;s name or with the optional parameter <<SetVariableLimits(). Optional arguments for the Constrained Minimize function enable you to specify the following: linear constraints, maximum number of iterations, desired tolerance, output details, starting values, and limits for the optimization variables. (See example 2.) Linear constraints are specified using the mat_A coefficient matrix and the vec_b right hand side vector.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
/*Simple Example*/
f = Expr(
	2 * x1 ^ 2 + 2 * x2 ^ 2 - 2 * x1 * x2 - 4 * x1 - 6 * x2
);
A = [1 1, 1 5];
b = [2, 5];
minFun = Constrained Minimize(
	f,
	{x1( 0, 5 ), x2( 0, 5 )},
	<<lessthanEQ( {A, b} )/*and/or <<GreaterThanEQ({A,b}) and/or <<EqualTo({A,b})*/,
	<<StartingValues( [1, .5] )
);
Eval List( {x1, x2, minFun} );

```

**Example 2**

```js

Names Default To Here( 1 );
/*Simple Example with optional parameters included*/ 
x = [., .];
f = Expr(
	2 * x[1] ^ 2 + 2 * x[2] ^ 2 - 2 * x[1] * x[2] - 4 * x[1] - 6 * x[2]
);
A = [1 1, 1 5];
b = [2, 5];
{objVal, iters, gradient, hessian} = Constrained Minimize(
	f,
	{x},
	<<lessthanEQ( {A, b} ) /*and/or <<GreaterThanEQ({A,b}) and/or <<EqualTo({A,b})*/,
	MaxIter( 250 ),
	<<tolerance( 1e-5 ),
	<<showDetails( True ),
	<<StartingValues( [1, .5] ),
	<<setVariableLimit( {[0, 0], [5, 5]} )
);
Show( x, objVal, iters, gradient, hessian );

```

### Contains

**Syntax:** pos = Contains( x, item, <start=1> )

**Description:** Returns the position of item within x, starting at position start if provided. If start is negative, the search starts backward from length( x ) - start. The argument x can be a string or a list.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Show( Contains( "redreed", "re", -1 ) );
Show( Contains( {"A", 2, "C", [1 5], "C"}, "C", 4 ) );

```

### Contains Item

**Syntax:** b = Contains Item( x, item | list | Pat Regex(), <delimiter> )

**Description:** Returns a Boolean indicating whether the word [item], one of a list of words [list], or pattern [pattern] matches one of the words in the text represented by [x]. Words are delimited by the characters in the optional delimiter [delimiter] string. A comma, ",", character is the default delimiter. Blanks are trimmed from the ends of each extracted word from the input text string [x].

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Show( Contains Item( "A, 2, C, D, C", "C", ", " ) );

```

**Example 2**

```js

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

```js

Names Default To Here( 1 );
//find repeated character c in cdcef
Contains Item( "abcde,bcdef,cdcef", Pat Regex( "(.).*?\1" ), "," );

```

### Context Box

**Syntax:** y = Context Box( displayBox, ... )

**Description:** Returns a display box that establishes a scoped evaluation context. Allows different parts of a display window to be executed independently of each other.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Context Box(
		Outline Box( "Picker",
			V List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
		)
	)
);

```

### Continue

**Syntax:** Continue()

**Description:** Causes a continuation of next iteration of flow of control within a For or While loop.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
For( i = 1, i <= 10, i++,
	If( i < 2, Continue() );
	Print( "i=" || Char( i ) );
);

```

### Contour

**Syntax:** Contour( xVector, yVector, zGridMatrix, zContours, < <<zColor( color, option )>, < <<Fill|Fill Between|Fill Below|Fill Above>, < <<Transparency(vector)> )

**Description:** Draws contours given a grid of values. If there are fewer colors specified than there are contours, options of "Interpolate Colors" or "Cycle Colors" determines how the colors will be applied.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );

New Window( "Example",
	H List Box(
		Outline Box( "Line",
			Graph Box(
				Contour( 1 :: 100, 1 :: 100, (1 :: 100)` * (1 :: 100), 7 ^ (0 :: 4) )
			)
		),
		Outline Box( "Line Colors",
			Graph Box(
				Contour(
					1 :: 100,
					1 :: 100,
					(1 :: 100)` * (1 :: 100),
					7 ^ (0 :: 4),
					<<zColor( {"Blue", "Red"} )
				)
			)
		)
	),
	H List Box(
		Outline Box( "Fill Cycle",
			Graph Box(
				Contour(
					1 :: 100,
					1 :: 100,
					(1 :: 100)` * (1 :: 100),
					7 ^ (0 :: 4),
					<<zColor(
						{RGB Color( 218, 218, 255 ), RGB Color( 255, 218, 218 )},
						"Cycle Colors"
					),
					fill
				)
			)
		),
		Outline Box( "Fill Interpolate",
			Graph Box(
				Contour(
					1 :: 100,
					1 :: 100,
					(1 :: 100)` * (1 :: 100),
					7 ^ (0 :: 4),
					<<zColor( {"Blue", "Red"}, "Interpolate Colors" ),
					fill
				)
			)
		)
	)
);

```

### Contour Function

**Syntax:** Contour Function( zExpr, xName, yName, z|zMatrix, < <<XGrid( min, max, incr )>, < <<YGrid( min, max, incr )>, < <<ZColor( color, option )>, < <<ZLabeled>, < <<Filled>, < <<FillBetween>, < <<Ternary>, < <<Transparency( t )> )

**Description:** Evaluates the expression on a grid of xName and yName values and draws the contour lines. The color can be specified as a number, a matrix, a list of RGB values, a list of color names, or a Color Theme.  The transparency t can be specified as a number or as a matrix.  If the Ternary option is specified, the contours are clipped to a ternary coordinate system.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Contour Function(
			Log( a * a + b * b ),
			a,
			b,
			1 :: 10,
			<<ZColor( {"blue", "green", "red"}, "Cycle Colors" ),
			Transparency( 0.9 )
		)
	)
);

```

**Example 2**

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Contour Function(
			Log( a * a + b * b ),
			a,
			b,
			1 :: 10,
			<<Filled,
			<<ZColor(
				{{1, 0.1, 0.1}, {0.1, 1, 0.1}, {0.1, 0.1, 1}}, "Interpolate Colors"
			)
		)
	)
);

```

### Contour Seg

**Syntax:** me = Contour Seg( Triangulation, [ levels ], < zColor([colors], <Cycle Colors|Interpolate Colors>) >, < Transparency([] | t) >

**Description:** Returns a display seg representing contours of a Triangulation.  Optional colors can be specified for each level as a matrix or list.  The transparency can be specified as a number or matrix.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
{xx, yy} = tri << Get Points();
New Window( "Contour Seg Example",
	g = Graph Box(
		X Scale( Min( xx ) - .1, Max( xx ) + .1 ),
		Y Scale( Min( yy ) - .1, Max( yy ) + .1 ),
		Contour Seg(
			tri,
			[0, 400, 1000, 2000, 9000],
			zColor( 5 + [64 32 0 16 48] ),
			Transparency( [1, 1, 1, 1, 1] )
		)
	)
);

```

### Convert File Path

**Syntax:** path = Convert File Path( path, <absolute|relative>, <posix|windows>, <base( path )>, <search> )

**Description:** Returns the converted path.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
For Each( {pv},
	{"HOME", "DOCUMENTS", "SAMPLE_DATA", "SAMPLE_IMPORT_DATA", "SAMPLE_SCRIPTS",
	"SAMPLE_IMAGES", "USER_APPDATA", "USER_JMPDATA", "MAPS", "USER_JMPDATA_ALL", "TEMP"},
	Write(
		pv || Repeat( " ", 20 - Length( pv ) ) || " => " || Convert File Path( "$" || pv )
		 || "\!N"
	)
);

```

### Copy Directory

**Syntax:** rc = Copy Directory( from, to, <recursive(0|1)> )

**Description:** Copies files from one directory to another, optionally copying subdirectories. The directory name will be created at the to-path and should not be part of the to-path. Returns 1 if the directory was copied or 0 if the directory was unable to be copied. Throws an error if the path is invalid or does not exist.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
rc0 = Copy Directory( "$SAMPLE_DATA/Loss Function Templates", "$TEMP" );/* creates $TEMP/Loss Function Templates */ 
rc1 = File Exists( "$TEMP/Loss Function Templates/Normal.jmp" );
rc2 = Delete File( "$TEMP/Loss Function Templates/Normal.jmp" );
rc3 = File Exists( "$TEMP/Loss Function Templates/Normal.jmp" );
rc4 = Delete Directory( "$TEMP/Loss Function Templates" );
rc5 = Directory Exists( "$TEMP/Loss Function Templates" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||
Char( rc4 ) || " " || Char( rc5 );/* 1 1 1 0 1 0 */

```

### Copy File

**Syntax:** rc = Copy File( from, to )

**Description:** Copies a file from the original file to a new file with the same or a different name. Specify a complete path and file name for the destination. Returns 1 if the file was copied or 0 if the file was unable to be copied. Throws an error if the path is invalid or does not exist. A file cannot be copied when either the from or to path is invalid, or if the to file already exists.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
rc0 = File Exists( "$TEMP/x.jmp" );
rc1 = Copy File( "$SAMPLE_DATA/Loss Function Templates/Normal.jmp", "$TEMP/x.jmp" );
rc2 = File Exists( "$TEMP/x.jmp" );
rc3 = Delete File( "$TEMP/x.jmp" );
rc4 = File Exists( "$TEMP/x.jmp" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||
Char( rc4 );/* 0 1 1 1 0 */

```

### Correlation

**Syntax:** y = Correlation( x , < <<"Pairwise" >, < <<"Shrink" >, < <<Freq(vector) >, < <<Weight(vector) > )

**Description:** Returns the correlation matrix of the matrix argument x. The "Pairwise" argument handles missing values in pairwise rather than rowwise fashion. The "Shrink" argument reduces the off-diagonal elements by a factor that is determined using the method described in Schafer and Strimmer, 2005. The Freq and Weight arguments specify vectors of frequency or weight values, respectively.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Correlation( [1 3 5, 3 2 6, 5 6 1] );

```

### Cos

**Syntax:** y = Cosine( x )

**Description:** Returns the trigonometric cosine of x, where x is an angle in radians.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Cosine( Pi() / 2 );

```

### CosH

**Syntax:** y = CosH( x )

**Description:** Returns the hyperbolic cosine of x.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
CosH( 1 );

```

### Cosine

**Syntax:** y = Cosine( x )

**Description:** Returns the trigonometric cosine of x, where x is an angle in radians.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Cosine( Pi() / 2 );

```

### Count

**Syntax:** y = Count( start, end, s, <n=1> )

**Description:** Returns the ith value in the sequence of numbers from start to end taking s steps and repeating each number n times, where i is determined by the value of the Row() function. Being dependent on the Row() function, the Count() function is generally used in column formulas.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Table( "Count Example",
	Add Rows( 12 ),
	New Column( "Count1" ),
	New Column( "Count2" ),
	New Column( "Count3", Set Formula( Count( 0, 6, 4, 1 ) ) )
);
For Each Row(
	:Count1[Row()] = Count( 0, 6, 4, 1 );
	:Count2[Row()] = Count( 0, 6, 3, 2 );
);

```

### Covariance

**Syntax:** y = Covariance( x , < <<"Pairwise" >, < <<"Shrink" >, < <<Freq(vector) >, < <<Weight(vector) > )

**Description:** Returns the covariance matrix of the matrix argument x. The "Pairwise" argument handles missing values in pairwise rather than rowwise fashion. The "Shrink" argument reduces the off-diagonal elements by a factor that is determined using the method described in Schafer and Strimmer, 2005. The Freq and Weight arguments specify vectors of frequency or weight values, respectively.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Covariance( [1 3 5, 3 2 6, 5 6 1] );

```

### Create Database Connection

**Syntax:** dbc = Create Database Connection( dataSourceName|"Connect Dialog", <DriverPrompt(true|false)> )

**Description:** Creates a database connection and returns a handle to the connection. If DriverPrompt is true, the user will be prompted using the ODBC driver&apos;s prompt to supply credentials if necessary.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
dbc = Create Database Connection(
	"DSN=dBASE Files;DBQ=C:/Program Files/JMP/JMPPRO/19/Samples/Import Data/;"
);

```

### Create Directory

**Syntax:** rc = Create Directory( path )

**Description:** Creates a directory. Returns 1 if directory was created. Returns 0 if the directory already exists or if JMP was unable to create the directory.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Delete Directory( "$TEMP/sub1" );
rc0 = Create Directory( "$TEMP/sub1/sub2/sub3" );
Save Text File( "$TEMP/sub1/sub2/sub3/temp.txt", "example text" );
date = Last Modification Date( "$TEMP/sub1/sub2/sub3/temp.txt" );
rc1 = Delete Directory( "$TEMP/sub1" );
rc2 = File Exists( "$TEMP/sub1/sub2/sub3/temp.txt" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " ||
Format( date, "ddmonyyyy:h:m:s" );/* 1 1 0 date:time */

```

### Create Excel Workbook

**Syntax:** Create Excel Workbook(<Workbook Name>, <{List of open tables}>, <Optional list of worksheet names> )

**Description:** Generate an Excel Workbook from open JMP Data Tables

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt2 = Open( "$SAMPLE_DATA/Abrasion.jmp" );
Create Excel Workbook( "$TEMP/MyWorkbook.xlsx", {dt1, dt2}, {"Big", "Abrasive"} );

```

**Example 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Abrasion.jmp" );
Create Excel Workbook(
	"$TEMP/MyWorkbook.xlsx",
	{"Big Class", "Abrasion"},
	{"Big", "Abrasive"}
);

```

### Creation Date

**Syntax:** date = Creation Date( path )

**Description:** Returns the creation date of a file or directory. Throws an error when path is invalid or does not exist.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Format( Creation Date( "$SAMPLE_DATA/Big Class.jmp" ), "ddmonyyyy:h:m:s" );

```

### Cumulative Sum

**Syntax:** y = Cumulative Sum( x )

**Description:** Returns a matrix of partial sums for the input matrix.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Cumulative Sum( [1 1 1 1 . 10 20] );

```

### Current CAS Connection

**Syntax:** Current CAS Connection()

**Description:** Obtains the connection to the current CAS Server.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );

connection = Current CAS Connection();
Show( connection );

```

### Current Data Table

**Syntax:** dt = Current Data Table( <Project(title|index|box|window)> ); Current Data Table( dt )

**Description:** Returns the current data table or makes the specified data table current if there is one specified.



To specify a project, use the optional Project() argument with a title, index, display box, or window object. Use Project(0) to specify no project when running the script in a project.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Current Data Table() << Get Column Names;

```

### Current Journal

**Syntax:** y = Current Journal( <Project(title|index|box|window)> )

**Description:** Returns a reference to the current journal in the current project (or no project when not running the script in a project).



To specify a project, use the optional Project() argument with a title, index, display box, or window object. Use Project(0) to specify no project when running the script in a project.



If no current journal exists in the given project, one will be created automatically.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Current Journal();

```

### Current Report

**Syntax:** y = Current Report( <Project(title|index|box|window)> )

**Description:** Returns a display box reference to the current report in the current project (or no project when not running the script in a project).



To specify a project, use the optional Project() argument with a title, index, display box, or window object. Use Project(0) to specify no project when running the script in a project.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Current Report();

```

### Current Window

**Syntax:** y = Current Window( <Project(title|index|box|window)> )

**Description:** Returns a reference to the current window in the current project (or no project when not running the script in a project).



To specify a project, use the optional Project() argument with a title, index, display box, or window object. Use Project(0) to specify no project when running the script in a project.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Example Outline",
		Text Box( "Example Text" ),
		Button Box( "Close", Current Window() << Close Window )
	)
);

```

### Cytometry Logicle

**Syntax:** y = Cytometry Logicle( x, T, W, M, A )

**Description:** Compute cytometry logicle transformation.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Cytometry Logicle( 100, 10000, .15, .45, 0 );

```

### Cytometry Logicle Inverse

**Syntax:** x = Cytometry Logicle Inverse( y, T, W, M, A )

**Description:** Compute inverse cytometry logicle transformation.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Cytometry Logicle Inverse( 100, 10000, .15, .45, 0 );

```

### Data Connector Registry

**Syntax:** Data Connector Registry()

**Description:** The collection of data connectors for JMP.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );

dc = Data Connector Registry() << Get( "com.jmp.sql_server" );

```

### Data Filter Context Box

**Syntax:** y = Data Filter Context Box( displayBox )

**Description:** Returns a display box that defines the extent of the local data filters contained in a display tree. Data filters and Data Filter Context Boxes can be arranged in a hierarchy and will be shared among platforms or boxes contained within the Data Filter Context Boxes.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Shared Local Filter",
	Data Filter Context Box(
		H List Box(
			dt << Data Filter(
				Local,
				Add Filter( columns( :sex ), Where( :sex == "F" ) )
			),
			dt << Bubble Plot(
				X( :weight ),
				Y( :height ),
				Fit To Window( "On" ),
				Sizes( :age ),
				Title Position( 0, 0 )
			),
			dt << Graph Builder(
				Size( 525, 456 ),
				Show Control Panel( 0 ),
				Fit To Window( "On" ),
				Variables( X( :weight ), Y( :age ) ),
				Elements( Box Plot( X, Y, Legend( 4 ) ) ),

			)
		)
	)
);

```

### Data Filter Source Box

**Syntax:** y = Data Filter Source Box( displayBox )

**Description:** Returns a display box that defines the source of a selection filter. Selected rows in reports contained by the Data Filter Source Box will be included for analysis in the other reports contained within a common Data Filter Context Box.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Selection Filter",
	Data Filter Context Box(
		H List Box(
			Data Filter Source Box(
				Graph Builder(
					Size( 208, 207 ),
					Show Control Panel( 0 ),
					Show Legend( 0 ),
					Variables( X( :age ) ),
					Elements( Bar( X, Legend( 3 ) ) ),
					SendToReport(
						Dispatch( {}, "Graph Builder", OutlineBox,
							{Set Title( "Filter" )}
						)
					)
				)
			),
			Platform(
				Current Data Table(),
				Bubble Plot(
					X( :weight ),
					Y( :height ),
					Sizes( :age ),
					Title Position( 0, 0 )
				)
			)
		)
	)
);

```

### Data Grid Box

**Syntax:** y = Data Grid Box(  )

**Description:** Returns a display box that can hold a data table.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example", x = Data Grid Box() );
x << Set Data Table( dt );

```

### Data Table

**Syntax:** dt = Data Table( name|number )

**Description:** Returns a reference to the specified data table.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Cars.jmp" );
Data Table( 1 );

```

### Data Table Box

**Syntax:** y = Data Table Box( datatable )

**Description:** Returns a table box representing the given data table.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example", Data Table Box( dt ) );

```

### Data Table Col Box

**Syntax:** y = Data Table Col Box( col )

**Description:** Returns a column box corresponding to the given data table column.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	Table Box( Data Table Col Box( :name ), Data Table Col Box( :height ) )
);

```

### Data Table Plot Col Box

**Syntax:** y = Data Table Plot Col Box( col )

**Description:** Returns a Plot Col Box corresponding to the given data table column and optionally uses the second and third data table columns to create control limits.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	Table Box( Data Table Plot Col Box( :weight ), Data Table Plot Col Box( :height ) )
);

```

### Datafeed

**Syntax:** y = Open Datafeed( ... )

**Description:** Creates an object and window you can send messages to manage real-time data feeds.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
exfeed = Open Datafeed(/*Connect( Port( "com3" ), Baud( 4800 ), DataBits( 8 ) ),*/
	Set Script(
		ex = exfeed << getLine;
		Show( ex );
	)
);
For( exi = 0, exi < 5, exi++, /* this is just a way to test a feed when the real data source is not available...*/
	exfeed << Queue Line( Char( exi ) );
	Wait( .5 );
);

```

### Date DMY

**Syntax:** z = Date DMY( d, m, y )

**Description:** Converts day, month, and year into a JMP date-time value, which is the number of seconds since 01Jan1904.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
As Date( Date DMY( 15, 7, 2000 ) );

```

### Date Difference

**Syntax:** delta = Date Difference( dt1, dt2, intervalName, <alignment="start"> )

**Description:** Returns the difference in intervals of two date/time values. Supported values of intervalName are "Year", "Quarter", "Month", "Week", "Day", "Hour", "Minute", "Second", and "Numeric". An alignment of "Start" includes full or partial intervals, while "Actual" only includes full intervals. An alignment of "Fractional" returns fractional differences, using averages for the duration of "Year", "Quarter", and "Month" intervals.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Date Difference( Date DMY( 31, 1, 2015 ), Date DMY( 1, 3, 2015 ), "Month", "start" );

```

**Example 2**

```js

Names Default To Here( 1 );
Date Difference( Date DMY( 31, 1, 2015 ), Date DMY( 1, 3, 2015 ), "Month", "actual" );

```

**Example 3**

```js

Names Default To Here( 1 );
Date Difference( Date DMY( 31, 1, 2015 ), Date DMY( 1, 3, 2015 ), "Month", "fractional" );

```

### Date Increment

**Syntax:** d = Date Increment( datetime, intervalName, <incr=1>, <alignment="start"> )

**Description:** Returns a new date-time value by adding incr number of intervals. Supported values of intervalName are "Year", "Quarter", "Month", "Week", "Day", "Hour", "Minute", "Second", and "Numeric". An alignment of "Start" truncates to the nearest interval prior to adding the increment, while "Actual" retains the full input date/time. An alignment of "Fractional" allows fractional incr values, using averages for the duration of "Year", "Quarter", and "Month" intervals.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Date Increment( Today(), "Month", 100, "start" );

```

**Example 2**

```js

Names Default To Here( 1 );
Date Increment( Today(), "Month", 100, "actual" );

```

**Example 3**

```js

Names Default To Here( 1 );
Date Increment( Today(), "Month", 100, "fractional" );

```

### Date MDY

**Syntax:** z = Date MDY( m, d, y )

**Description:** Converts month, day, and year into a JMP date value, which is the number of seconds since 01Jan1904.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
As Date( Date MDY( 7, 15, 2000 ) );

```

### Day

**Syntax:** d = Day( datetime )

**Description:** Returns the day of month part of a date-time value, 1 - 31.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Day( Today() );

```

### Day Of Week

**Syntax:** d = Day Of Week( datetime )

**Description:** Returns the day of the week of a date-time value. Sunday = 1, ..., Saturday = 7.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Day Of Week( Today() );

```

### Day Of Year

**Syntax:** d = Day Of Year( datetime )

**Description:** Returns the day of the year of a date-time value. January 1 is 1.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Day Of Year( Today() );

```

### Days In Month

**Syntax:** v = Days In Month(year, month)

**Description:** Return the number of days in a given month.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
v = Days In Month( 2016, 2 );

```

### Debug Break

**Syntax:** Debug Break()

**Description:** When this expression is evaluated within the JSL Debugger, the Debugger stops executing the script.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
// Right-click and select Debug.
// In the JSL Debugger, click Run.
x = 5;
y = 8;
Debug Break();
z = x + yy;
Show( z );

```

### Decode URI

**Syntax:** Decode URI( value )

**Description:** Encode the string using URI encoding

**JMP Version Added:** 14

```js

Names Default To Here( 1 );

Decode URI( "Foo%20Bar" );

```

### Decode64 Blob

**Syntax:** y = Decode64 Blob( base64String )

**Description:** Decodes a printable string of base 64 text into a blob.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
Decode64 Blob( "dGhlIHF1aWNrIGJyb3duIGZveA==" );

```

### Decode64 Double

**Syntax:** y = Decode64 Double( base64String )

**Description:** Returns the double-precision floating point number from the Base64 encoded string.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Decode64 Double( "P/lUWYIBG9Q=" );

```

### Define Class

**Syntax:** Define Class("class name", <Base Class{ "base class name", ... }>, <Show( All( boolean ) | ( Members( boolean ) | Methods( boolean ) | Functions( boolean ) )+ )>, { method* | member* | function* } )

**Description:** Define a New Class

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
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
		New Object(
			complex( real * y:real - imag * y:imag, imag * y:real + real * y:imag )
		)
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

**Syntax:** Delete Classes( <Force( boolean )>, <class reference, ...> )

**Description:** Deletes all class definitions or one or more specific class definitions.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
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

### Delete Directory

**Syntax:** rc = Delete Directory( path, <Allow Undo( boolean )> )

**Description:** Deletes a directory and its files and subdirectories. Returns 1 if the directory was deleted. Returns 0 if directory was unable to be deleted or the path is invalid.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Delete Directory( "$TEMP/sub1" );
rc0 = Create Directory( "$TEMP/sub1/sub2/sub3" );
Save Text File( "$TEMP/sub1/sub2/sub3/temp.txt", "example text" );
date = Last Modification Date( "$TEMP/sub1/sub2/sub3/temp.txt" );
rc1 = Delete Directory( "$TEMP/sub1" );
rc2 = File Exists( "$TEMP/sub1/sub2/sub3/temp.txt" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " ||
Format( date, "ddmonyyyy:h:m:s" );/* 1 1 0 date:time */

```

### Delete File

**Syntax:** rc = Delete File( path, <Allow Undo( boolean )> )

**Description:** Deletes a file. Returns 1 if the file was deleted. Returns 0 if file was unable to be deleted. Throws an error when path is invalid or does not exist.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
rc0 = Copy File( "$SAMPLE_DATA/Loss Function Templates/Normal.jmp", "$TEMP/x.jmp" );
rc1 = File Exists( "$TEMP/x.jmp" );
rc2 = Delete File( "$TEMP/x.jmp" );
rc3 = File Exists( "$TEMP/x.jmp" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) /* 1 1 1 0 */
;

```

### Delete Globals

**Syntax:** Delete Globals( < varname, ... > )

**Description:** Deletes all the currently defined global symbols and their values.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Delete Globals();

```

### Delete Namespaces

**Syntax:** Delete Namespaces( <Force( boolean )>, <namespace reference, ...> )

**Description:** Deletes all namespaces or one or more specific namespaces.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );

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

**Syntax:** Delete Symbols( < varname, ... > )

**Description:** Deletes all the currently defined symbols and their values.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Delete Symbols();

```

### Derivative

**Syntax:** y = Derivative( expr, name )

**Description:** Returns the symbolic derivative for the given expression with respect to the specified variable name.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Derivative( Sin( x ), x );

```

### Design

**Syntax:** y = Design( v, < levelsList|<<Levels, <<ElseMissing > )

**Description:** Creates a design matrix that contains a column of 1s and 0s for each unique value of the argument. Use the levelsList argument to specify a list of the levels for the design matrix. If the <<Levels argument is specified, the return value is a list that contains the design matrix and a list of the levels. If the <<ElseMissing argument is specified, missing values are placed in the design matrix for values in the v argument that do not appear in the levelsList. Otherwise, 0s are placed in the design matrix.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
/* example that Design(...) takes one argument */
exLevels = [1, 2, 3, 2, 1];
Show( Design( exLevels ) );
/* Also see DesignNom, DesignOrd */

/* example that Design(...) takes two arguments */
Show( Design( 3, {1, 2, 3} ) );
Show( Design( [1 2], {1, 2, 3} ) );
exLevels = [1, 2, 3, 2, 1, 2, 3];
Show( Design( exLevels, {1, 2, 3} ) );
Show( Design( {"a", "b"}, {"a", "b", "c"} ) );

/* example that Design(...) takes three arguments */
Show( Design( [1, 2, 3, 4, 5], {1, 2, 3, 4}, <<ElseMissing ) );
Show( Design( [1, 2, 3, 4, 5], {1, 2, 3, 4} ) );

```

### Design Last

**Syntax:** y = Design Last( v, < levelsList, <<ElseMissing > )

**Description:** Creates a design matrix that contains a column of 1s and 0s for all but the last of the unique values of the argument. The last level is coded as a row of 0s. If the levelsList argument is specified, the last level is the last level in levelsList. Otherwise, the last level is defined as the largest value in v. If the <<Levels argument is specified, the return value is a list that contains the design matrix and a list of the levels. If the <<ElseMissing argument is specified, missing values are placed in the design matrix for values in the v argument that do not appear in the levelsList. Otherwise, 0s are placed in the design matrix.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
/* example that Design Last(...) takes one argument */
exLevels = [1, 2, 3, 2, 1];
Show( Design Last( exLevels ) );
/* see what is different from Design(...) */
Show( Design( exLevels ) );

/* Also see Design, DesignOrd */

/* example that Design Last(...) takes two arguments */
Show( Design Last( 3, {1, 2, 3} ) );
Show( Design( 3, {1, 2, 3} ) );
Show( Design Last( [1 2], {1, 2, 3} ) );
Show( Design( [1 2], {1, 2, 3} ) );
exLevels = [1, 2, 3, 2, 1, 2, 3];
Show( Design Last( exLevels, {1, 2, 3} ) );
Show( Design( exLevels, {1, 2, 3} ) );
Show( Design Last( {"a", "b"}, {"a", "b", "c"} ) );
Show( Design( {"a", "b"}, {"a", "b", "c"} ) );

/* example that Design Last(...) takes three arguments */
Show( Design Last( [1, 2, 3, 4, 5], {1, 2, 3, 4}, <<ElseMissing ) );
Show( Design Last( [1, 2, 3, 4, 5], {1, 2, 3, 4} ) );

```

### Design Nom

**Syntax:** y = Design Nom( v, < levelsList|<<Levels, <<ElseMissing > )

**Description:** Creates a design matrix that contains a column of 1s and 0s for all but the last of the unique values of the argument. The last level is coded as a row of -1s. If the levelsList argument is specified, the last level is the last level in levelsList. Otherwise, the last level is defined as the largest value in v. If the <<Levels argument is specified, the return value is a list that contains the design matrix and a list of the levels. If the <<ElseMissing argument is specified, missing values are placed in the design matrix for values in the v argument that do not appear in the levelsList. Otherwise, 0s are placed in the design matrix.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
/* example that Design Nom(...) takes one argument */
exLevels = [1, 2, 3, 2, 1];
Show( Design Nom( exLevels ) );
/* see what is different from Design(...) */
Show( Design( exLevels ) );

/* Also see Design, DesignOrd */

/* example that Design Nom(...) takes two arguments */
Show( Design Nom( 3, {1, 2, 3} ) );
Show( Design( 3, {1, 2, 3} ) );
Show( Design Nom( [1 2], {1, 2, 3} ) );
Show( Design( [1 2], {1, 2, 3} ) );
exLevels = [1, 2, 3, 2, 1, 2, 3];
Show( Design Nom( exLevels, {1, 2, 3} ) );
Show( Design( exLevels, {1, 2, 3} ) );
Show( Design Nom( {"a", "b"}, {"a", "b", "c"} ) );
Show( Design( {"a", "b"}, {"a", "b", "c"} ) );

 /* example that Design Nom(...) takes three arguments */
Show( Design Nom( [1, 2, 3, 4, 5], {1, 2, 3, 4}, <<ElseMissing ) );
Show( Design Nom( [1, 2, 3, 4, 5], {1, 2, 3, 4} ) );

```

### Design Ord

**Syntax:** y = Design Ord( v, < levelsList|<<Levels, <<ElseMissing > )

**Description:** Creates a design matrix that contains a column for all but the last of the unique values of the argument. The first level is coded as a row of 0s. Each subsequent (nth) level in the levelsList argument is coded as a row of (n-1) 1s and the rest 0s. If the <<Levels argument is specified, the return value is a list that contains the design matrix and a list of the levels. If the <<ElseMissing argument is specified, missing values are placed in the design matrix for values in the v argument that do not appear in the levelsList. Otherwise, 0s are placed in the design matrix.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
/* example that Design Ord(...) takes one argument */
exLevels = [1, 2, 3, 2, 1];
Show( Design Ord( exLevels ) );
/* see what is different from Design Nom(...) */
Show( Design Nom( exLevels ) );

/* Also see Design, Design Nom */

/* example that Design Ord(...) takes two arguments */
Show( Design Ord( 3, {1, 2, 3} ) );
Show( Design Nom( 3, {1, 2, 3} ) );
Show( Design Ord( [1 2], {1, 2, 3} ) );
Show( Design Nom( [1 2], {1, 2, 3} ) );
exLevels = [1, 2, 3, 2, 1, 2, 3];
Show( Design Ord( exLevels, {1, 2, 3} ) );
Show( Design Nom( exLevels, {1, 2, 3} ) );
Show( Design Ord( {"a", "b"}, {"a", "b", "c"} ) );
Show( Design Nom( {"a", "b"}, {"a", "b", "c"} ) );

/* example that Design Ord(...) takes three arguments */
Show( Design Ord( [1, 2, 3, 4, 5], {1, 2, 3, 4}, <<ElseMissing ) );
Show( Design Ord( [1, 2, 3, 4, 5], {1, 2, 3, 4} ) );

```

### DesignF

**Syntax:** y = DesignF( v, < levelsList|<<Levels, <<ElseMissing > )

**Description:** Creates a design matrix that contains a column of 1s and 0s for all but the last of the unique values of the argument. The last level is coded as a row of -1s. If the levelsList argument is specified, the last level is the last level in levelsList. Otherwise, the last level is defined as the largest value in v. If the <<Levels argument is specified, the return value is a list that contains the design matrix and a list of the levels. If the <<ElseMissing argument is specified, missing values are placed in the design matrix for values in the v argument that do not appear in the levelsList. Otherwise, 0s are placed in the design matrix.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
/* example that DesignF(...) takes one argument */
exLevels = [1, 2, 3, 2, 1];
Show( DesignF( exLevels ) );
/* see what is different from Design(...) */
Show( Design( exLevels ) );

/* Also see Design, DesignOrd */

/* example that DesignF(...) takes two arguments */
Show( DesignF( 3, {1, 2, 3} ) );
Show( Design( 3, {1, 2, 3} ) );
Show( DesignF( [1 2], {1, 2, 3} ) );
Show( Design( [1 2], {1, 2, 3} ) );
exLevels = [1, 2, 3, 2, 1, 2, 3];
Show( DesignF( exLevels, {1, 2, 3} ) );
Show( Design( exLevels, {1, 2, 3} ) );
Show( DesignF( {"a", "b"}, {"a", "b", "c"} ) );
Show( Design( {"a", "b"}, {"a", "b", "c"} ) );

/* example that DesignF(...) takes three arguments */
Show( DesignF( [1, 2, 3, 4, 5], {1, 2, 3, 4}, <<ElseMissing ) );
Show( DesignF( [1, 2, 3, 4, 5], {1, 2, 3, 4} ) );

```

### Desirability

**Syntax:** des = Desirability( yVector, dVector, y )

**Description:** Returns a desirability curve, where yVector is a vector of 3 input values, dVector is the corresponding 3 desirability values, and y is the argument of which to calculate the desirability.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
dvec = [0.1 0.9 0.1];
yvec = [1 5 10];
New Window( "Desirability",
	Graph Box(
		X Scale( 0, 12 ),
		Y Scale( 0, 1 ),
		Frame Size( 500, 400 ),
		Drag Marker( yvec, dvec );
		Y Function( Desirability( yvec, dvec, x ), x );
	)
);

```

### Det

**Syntax:** y = Det( x )

**Description:** Returns the determinant of a square matrix.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Det( [11 22, 33 44] );

```

### Diag

**Syntax:** y = Diag( matrix ); y = Diag( vector ); y = Diag( matrix1, matrix )

**Description:** Constructs a diagonal matrix from either a matrix or a vector. If two arguments are specified, the function returns the concatenation of the matrices diagonally.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Diag( [11 22] );

```

### Dialog

**Syntax:** y = Dialog( specification )

**Description:** Prompts the user with a modal window. This function is deprecated. Please use the New Window function with the <<Modal argument.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
// See Example 2 for the deprecated Dialog equivalent
If(
	ex = New Window( "Dialog() example",
		<<Modal,
		<<Return Result,
		V List Box(
			H List Box( "Set this value", variable = Number Edit Box( 42 ) ),
			H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
		)
	);
	ex["button"] == 1;
,
	ex["variable"],
	"CANCEL"
);

```

**Example 2**

```js

Names Default To Here( 1 );
// Deprecated
If(
	ex = Dialog(
		Title( " Dialog() example" ),
		vlist(
			hlist( "Set this value", variable = EditNumber( 42 ) ),
			hlist( Button( "OK" ), Button( "Cancel" ) )
		)
	);
	ex["button"] == 1;
,
	ex["variable"],
	"CANCEL"
);

```

### Dif

**Syntax:** y = Dif( x, <n=1> )

**Description:** Returns x - Lag( x, n ), also known as the "first difference". Being dependent on Row(), Dif() is mainly useful in column formulas.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 3;
Dif( :height, 2 );

```

### Digamma

**Syntax:** y = Digamma( x )

**Description:** Returns the digamma function evaluated at x, where the digamma function is the derivative of the logarithm of the gamma function.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Digamma( 5 );

```

### Dim

**Syntax:** y = Dim(); y = Dim( dt ); y = Dim( matrix )

**Description:** Returns a row vector with the dimensions of the current data table, a specified data table, or a matrix. The dimensions are the number of rows and the number of columns and are listed in that order.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
Dim( [11 22, 33 44, 55 66] );

```

### Direct Product

**Syntax:** y = Direct Product( A, B )

**Description:** Returns the direct or Kronecker product. Result has A[i,j]*B, expanding to all possible products.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
exA = [1 2, 3 4];
exB = [1 1 1, 2 2 2, 3 3 3];
exProd = Direct Product( exA, exB );
Show( exProd );

/* verify results */
Show( exProd[1 :: 3, 1 :: 3] == exB );
Show( exProd[4 :: 6, 1 :: 3] == (exB * 3) );
Show( exProd[1 :: 3, 4 :: 6] == (exB * 2) );
Show( exProd[4 :: 6, 4 :: 6] == (exB * 4) );

/* Also see H Direct Product */

```

### Directory Exists

**Syntax:** rc = Directory Exists( path )

**Description:** Determine whether the directory exists. Returns 1 if the path exists. Returns 0 if the path is invalid or does not exist.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
If( Directory Exists( "$SAMPLE_DATA/Loss Function Templates" ),
	"ok",
	"missing!"
);

```

### Disable JMP Live URL

**Syntax:** Disable JMP Live URL(url)

**Description:** Disables a JMP Live URL. This method is available only during jmpStartAdmin.jsl. An asterisk * can be used a wildcard to specify URLs as * (any URL), *.jmp.com (a URL ending in .jmp.com), http://public.* (a URL starting with http://public.), or *public* (a URL that contains public).

**JMP Version Added:** 15

```js

Names Default To Here( 1 );

Disable JMP Live URL( "*public.jmp.com" );

```

### Disable Proxy Settings

**Syntax:** Disable Proxy Settings( 1|0 )

**Description:** Disables or enables proxy settings during jmpStartAdmin.jsl execution. Proxy settings are enabled by default.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );

Disable Proxy Settings( 1 );

```

### Distance

**Syntax:** y = Distance( x1, x2, <scales>, <powers> )

**Description:** Produces a matrix of distances between rows of x1 and rows of x2. To customize the scaling and powers for each column, specify the extra arguments scale and powers. For Kriging, Exp(-distance(x1,x2)) is used.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
/*1-D example*/
exX1 = [1, 2, 3, 4];
exX2 = [2, 4, 6, 8]; 
/*Compute squared Euclidean distance*/
exD = Distance( exX1, exX2 ); 
/*Verify result*/
exDm = J( 4, 4, . );
For( exi = 1, exi <= 4, exi++,
	For( exj = 1, exj <= 4, exj++,
		exDm[exi, exj] = Sum( (exX1[exi, 0] - exX2[exj, 0]) ^ 2 )
	)
);
Show( exDm == exD ); 

/*2-D example*/
exX1 = [1 1, 2 2, 3 3, 4 4];
exX2 = [2 1, 4 2, 6 0, 8 7]; 
/*Compute squared Euclidean distance*/
exD = Distance( exX1, exX2 ); 
/*Verify result*/
exDm = J( 4, 4, . );
For( exi = 1, exi <= 4, exi++,
	For( exj = 1, exj <= 4, exj++,
		exDm[exi, exj] = Sum( (exX1[exi, 0] - exX2[exj, 0]) ^ 2 )
	)
);
Show( exDm == exD ); 

/*2-D example*/
exX1 = [1 1, 2 2, 3 3, 4 4];
exX2 = [2 1, 4 2, 6 0, 8 7]; 
/*Compute squared Euclidean distance, with a scaler [0.5 2.0]*/
exD = Distance( exX1, exX2, [0.5 2.0] ); 
/*Verify result*/
exDm = J( 4, 4, . );
For( exi = 1, exi <= 4, exi++,
	For( exj = 1, exj <= 4, exj++,
		exDm[exi, exj] = Sum( [0.5 2.0] :* (Abs( exX1[exi, 0] - exX2[exj, 0] ) ^ 2) )
	)
);
Show( exDm == exD ); 

/*2-D example*/
exX1 = [1 1, 2 2, 3 3, 4 4];
exX2 = [2 1, 4 2, 6 0, 8 7]; 
/*Compute squared Euclidean distance, with scalers [0.5 2.0] and powers [1.5 2.0]*/
exD = Distance( exX1, exX2, [0.5 2.0], [1.5 2.0] ); 
/*Verify result*/
exDm = J( 4, 4, . );
For( exi = 1, exi <= 4, exi++,
	For( exj = 1, exj <= 4, exj++,
		exDm[exi, exj] = Sum(
			[0.5 2.0] :* (Abs( exX1[exi, 0] - exX2[exj, 0] ) :^ [1.5 2.0])
		)
	)
);
Show( exDm == exD );

```

### Divide

**Syntax:** y = x0 / x1; y = Divide( x0, <x1>, ... )

**Description:** Divides all subsequent arguments from the first argument. Arguments can be numbers, matrices, or lists of numbers. When called with only one argument, the result will be the reciprocal.

**JMP Version Added:** Before version 14

**Reciprocal**

```js

Names Default To Here( 1 );
x = Divide( 5 );
y = 1 / 5;
Show( x, y );

```

**Simple**

```js

Names Default To Here( 1 );
6 / 3 / 2;

```

### Divide To

**Syntax:** y /= x; Divide To( y, x )

**Description:** Divides a value into a variable or into a list of variables.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
ex = 1;
ex /= 2;
ex;

```

### Double Declining Balance

**Syntax:** x = Double Declining Balance( cost, salvage, life, period, <factor=2> )

**Description:** Returns the depreciation of an asset for a specified period using the double-declining balance method or some other depreciation factor. Equivalent to the DDB function in Microsoft Excel.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Double Declining Balance( 10000, 100, 3, 2 );

```

### Drag Line

**Syntax:** Drag Line( xMatrixName, yMatrixName, <dragScript>, <MouseUpScript> )

**Description:** Draws a polyline at the indicated points. Unlike Line though, the points can be dragged across the screen, updating the values in the (LValue) matrix arguments.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	exx = [11 33 77];
	exy = [88 22 44];,
	Graph Box(
		Drag Line( exx, exy );
		Line( exx, exy );
	)
);

```

### Drag Marker

**Syntax:** Drag Marker( xMatrixName, yMatrixName, <dragScript>, <MouseUpScript> )

**Description:** Draws movable markers at the indicated points. The matrix values are updated as the markers are moved.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	exx = [11 33 77];
	exy = [88 22 44];,
	Graph Box(
		Drag Marker( exx, exy );
		Line( exx, exy );
	)
);

```

### Drag Polygon

**Syntax:** Drag Polygon( xMatrixName, yMatrixName, <dragScript>, <MouseUpScript> )

**Description:** Draws a filled polygon at the indicated points. The points can be dragged across the screen, updating the values in the (LValue) matrix arguments.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	exx = [11 33 77];
	exy = [88 22 44];,
	Graph Box(
		Drag Polygon( exx, exy );
		Line( exx, exy );
	)
);

```

### Drag Rect

**Syntax:** Drag Rect( xMatrixName, yMatrixName, <dragScript>, <MouseUpScript> )

**Description:** Draws a rectangle at the indicated points. Unlike Rect though, these corners can be dragged across the screen, updating the values in the (LValue) matrix arguments.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	exx = [11 33];
	exy = [88 22];,
	Graph Box(
		Drag Rect( exx, exy );
		Line( exx, exy );
	)
);

```

### Drag Text

**Syntax:** Drag Text( xMatrixName, yMatrixName, text, <dragScript>, <MouseUpScript> )

**Description:** Draws the text at the indicated points. Unlike the Text() function, however, the points can be dragged across the screen, updating the values in the xMatrixName and yMatrixName matrix arguments. The text argument can be a string argument or a list of strings.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	exx = [11 33 77];
	exy = [88 22 44];,
	Graph Box(
		Drag Text( exx, exy, "hello" );
		Line( exx, exy );
	)
);

```

### Dunnett P value

**Syntax:** p = Dunnett P value( q, nTrt, dfe, <lambdaVec = .> )

**Description:** Returns the p-value from Dunnett&apos;s multiple comparisons test, where q is the test statistic, nTrt is the number of treatments being compared to the control group, dfe is the error degrees of freedom (based on the total study sample), and the optional lambdaVec is a vector of parameters, which by default are set to 1/sqrt(2).

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Dunnett P value( 1.67623, 3, 11 );

```

### Dunnett Quantile

**Syntax:** q = Dunnett Quantile( 1-alpha, nTrt, dfe, <lambdaVec = .> )

**Description:** Returns the quantile needed in Dunnett&apos;s multiple comparisons test, where 1-alpha is the confidence level, nTrt is the number of treatments being compared to the control group, dfe is the error degrees of freedom (based on the total study sample), and the optional lambdaVec is a vector of parameters, which by default are set to 1/sqrt(2).

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Dunnett Quantile( 0.95, 3, 11 );

```

### E Div

**Syntax:** y = A :/ B; y = E Div( A, B )

**Description:** Returns an element-wise division of matrices.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
[11 22 33] :/ [1 2 3];

```

### E Max

**Syntax:** y = E Max( A, B )

**Description:** Returns a matrix that is the maximum of corresponding elements of its arguments.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
E Max( [1 22 33], [11 2 3] );

```

### E Min

**Syntax:** y = E Min( A, B )

**Description:** Returns a matrix that is the minimum of corresponding elements of its arguments.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
E Min( [1 22 33], [11 2 3] );

```

### E Mult

**Syntax:** y = A :* B; y = E Mult( A, B )

**Description:** Returns an element-wise multiplication of matrices.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
[1 2 3] :* [11 22 33];

```

### Eigen

**Syntax:** {M, E} = Eigen( X )

**Description:** Performs eigenvalue decomposition of symmetric matrix X. Returns list {M, E} such that E*Diag(M)*E` = X.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
X = [11 22, 22 33];
{M, E} = Eigen( X );
E * Diag( M ) * E`;

```

### Eigen BLAS

**Syntax:** z = Eigen BLAS( X, <nvec = ncol> )

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
X = [5 4 1 1, 4 5 1 1, 1 1 4 2, 1 1 2 4];
{M1, E1} = Eigen BLAS( X );

```

### Empty

**Syntax:** y = Empty()

**Description:** Returns an empty value. Used in formula editor for unspecified arguments.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Empty();

```

### Enable JMP Live URL

**Syntax:** Enable JMP Live URL(url)

**Description:** Enables a JMP Live URL. This method is available only during jmpStartAdmin.jsl. An asterisk * can be used a wildcard to specify URLs as * (any URL), *.jmp.com (a URL ending in .jmp.com), http://public.* (a URL starting with http://public.), or *public* (a URL that contains public).

**JMP Version Added:** 15

```js

Names Default To Here( 1 );

Enable JMP Live URL( "https://public.jmp.com" );

```

### Enable Proxy Settings

**Syntax:** Enable Proxy Settings( 1|0 )

**Description:** Enables or disables proxy settings during jmpStartAdmin.jsl execution. Proxy settings are enabled by default.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );

Enable Proxy Settings( 0 );

```

### Encode URI

**Syntax:** Encode URI( value )

**Description:** Encode the string using URI encoding

**JMP Version Added:** 14

```js

Names Default To Here( 1 );

Encode URI( "Foo Bar" );

```

### Encode64 Blob

**Syntax:** s = Encode64 Blob( x )

**Description:** Encodes a blob into a printable string of base 64 text.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
Encode64 Blob( Char To Blob( "the quick brown fox" ) );

```

### Encode64 Double

**Syntax:** s = Encode64 Double( x )

**Description:** Returns a Base64 string encoding of the floating point number.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Encode64 Double( -1.5831 );

```

### Ends With

**Syntax:** b = Ends With( s, sub )

**Description:** Returns 1 if s ends with sub, otherwise returns 0. The s and sub arguments can be both strings or both lists. Equivalent to Right( s, Length( sub )) == sub.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Ends With( "http://www.jmp.com", ".com" );

```

### Equal

**Syntax:** z = x == y == ...; z = Equal( x, y, ... )

**Description:** Returns 1 if each argument is equal to the next argument; returns 0 otherwise.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
1 == 1;

```

### Estimate Bartlett Factor Score

**Syntax:** {factorScores} = Estimate Bartlett Factor Score( dataRow , mvMeanVec, lvMeanVec, modSRAM, modARAM )

**Description:** Estimates factor scores, using Bartlett&apos;s method, from a structural equation model (SEM). The input arguments are a row vector of data, the model-implied means for the manifest variables, the model-implied means for the latent variables, the S RAM matrix from an SEM, and the A RAM matrix from an SEM. It returns a row vector with estimated factor scores based on the SEM.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
Estimate Bartlett Factor Score(
	[2 2 0],
	[2.085 2.76 1.56],
	[0],
	[1 0 0 0 0,
	0 0.684181992749 0 0 0,
	0 0 1.19686444665695 0 0,
	0 0 0 0.875198112795068 0,
	0 0 0 0 0.953592961124492],
	[0 0 0 0 0,
	2.085 0 0 0 1,
	2.76 0 0 0 0.61913203807175,
	1.56 0 0 0 0.710365935511608,
	0 0 0 0 0]
);

```

### Estimate Factor Score

**Syntax:** {factorScores} = Estimate Factor Score( dataRow , modImpVarCov, mvMeanVec, lvMeanVec )

**Description:** Estimates factor scores, using the regression method, from a structural equation model (SEM). The input arguments are a row vector of data, a model-implied variance-covariance matrix, a vector of model-implied manifest variable means, and a vector of model-implied latent variable means. It returns a row vector with estimated factor scores based on the SEM.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
Estimate Factor Score(
	[7 10 5 2 2 0],
	[1.66 0.45 0.58 -0.58 -0.44 -0.5 0.59 -0.58,
	0.45 1.22 0.44 -0.44 -0.33 -0.38 0.45 -0.44,
	0.58 0.44 1.88 -0.57 -0.43 -0.49 0.58 -0.57,
	-0.58 -0.44 -0.57 1.64 0.57 0.65 -0.58 0.76,
	-0.44 -0.33 -0.43 0.57 1.56 0.49 -0.44 0.57,
	-0.5 -0.38 -0.49 0.65 0.49 1.36 -0.5 0.65,
	0.59 0.45 0.58 -0.58 -0.44 -0.5 0.59 -0.58,
	-0.58 -0.44 -0.57 0.76 0.57 0.65 -0.58 0.76],
	[6.59, 8.81, 2.92, 2.09, 2.76, 1.56],
	[0, 0]
);

```

### Eval

**Syntax:** y = Eval( x )

**Description:** Evaluates the argument and returns the result.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Eval( Expr( 1 + 2 ) );

```

### Eval Expr

**Syntax:** y = Eval Expr( x )

**Description:** Returns a copy of expression x with each Expr() clause within x replaced with its evaluated value.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Eval Expr( Length( Expr( "X" || Char( 12 ) ) ) );

```

### Eval Insert

**Syntax:** y = Eval Insert( string, <startChar="^">, <endChar=startChar> )

**Description:** Looks for substrings enclosed by the startChar/endChar pair and replaces them with the evaluated expression within.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Eval Insert( "Today is ^As Date( Today())^" );

```

### Eval Insert Into

**Syntax:** Eval Insert Into( l_string, <startChar="^">, <endChar=startChar> )

**Description:** Looks for substrings enclosed by the startChar/endChar pair and replaces them with the evaluated expression within, replacing l_string.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
ex = "Today is ^As Date( Today())^";
Eval Insert Into( ex );
ex;

```

### Eval List

**Syntax:** y = Eval List( list )

**Description:** Returns a list where every item in the list has been evaluated.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Eval List( {1 + 2, 3 + 4} );

```

**Example 2**

```js

Names Default To Here( 1 );
x = 5;
y = 10;
Eval List( {x, y} );

```

### ExGaussian Density

**Syntax:** y = ExGaussian Density( x, location, scale, shape )

**Description:** Returns the density at x of an ExGaussian distribution.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
New Window( "Example: ExGaussian Density",
	y = Graph Box(
		Y Scale( 0, .2 ),
		X Scale( -2, 15 ),
		XName( "x" ),
		Pen Color( "red" );
		Y Function( ExGaussian Density( x, 0, .5, .25 ), x );
	)
);

```

### ExGaussian Distribution

**Syntax:** y = ExGaussian Distribution( x, location, scale, shape )

**Description:** Returns the probability that an ExGaussian distributed random variable is less than x.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
New Window( "Example: ExGaussian Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -2, 15 ),
		XName( "x" ),
		Pen Color( "red" );
		Y Function( ExGaussian Distribution( x, 0, .5, .25 ), x );
	)
);

```

### ExGaussian Quantile

**Syntax:** q = ExGaussian Quantile( p, mu, sigma, lambda )

**Description:** Returns the quantile from an ExGaussian distribution, the value for which the probability is p that a random value would be lower.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
New Window( "Example: ExGaussian Quantile",
	Graph Box(
		Y Scale( -2, 15 ),
		X Scale( 0, 1 ),
		XName( "p" ),
		Pen Color( "red" );
		Y Function( ExGaussian Quantile( p, 0, .5, .25 ), p );
	)
);

```

### Excerpt Box

**Syntax:** y = Excerpt Box( rptnum, lstSubscripts )

**Description:** Returns a display box containing the excerpt designated by the report held at number rptnum and the list of display subscripts lstSubscripts. The subscripts reflect the current state of the report, after previous excerpts have been removed.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	V Sheet Box(
		<<Hold( Bivariate( Y( :weight ), X( :height ), Fit Line() ) ),
		<<Hold(
			Distribution(
				Automatic Recalc( 1 ),
				Continuous Distribution(
					Column( :height ),
					Horizontal Layout( 1 ),
					Vertical( 0 ),
					Outlier Box Plot( 0 )
				)
			)
		),
		<<Hold( Treemap( Categories( :age ) ) ),
		<<Hold(
			Bubble Plot(
				X( :height ),
				Y( :weight ),
				Sizes( :age ),
				Coloring( :sex ),
				Circle Size( 6.226 ),
				All Labels( 0 )
			)
		),
		H Sheet Box(
			Sheet Part( "weight by height", Excerpt Box( 1, {Picture Box( 1 )} ) ),
			Sheet Part( "height", Excerpt Box( 2, {Picture Box( 1 )} ) )
		),
		H Sheet Box(
			Sheet Part( "", Excerpt Box( 3, {Picture Box( 1 )} ) ),
			Sheet Part( "height by weight", Excerpt Box( 4, {Picture Box( 1 )} ) )
		)
	)
);

```

### Excluded

**Syntax:** y = Excluded( <rs> ); Excluded( <Row State( <r> )> ) = y

**Description:** Returns the excluded component of the specified row state value, 0 or 1. If the Excluded() function is used as an L-value, it changes the excluded state of the current (or rth) row in the current data table.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Excluded State( 1 );
Excluded( Row State( 3 ) );
Row() = 3;
Excluded();

```

### Excluded State

**Syntax:** rs = Excluded State( x )

**Description:** Returns a row state value with the excluded component set to the specified value.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Excluded State( 1 );
Excluded( Row State( 3 ) );

```

### Execute SQL

**Syntax:** dt = Execute SQL(databaseConnectionHandle|dataConnector,  "SELECT ..."|"SQLFILE=..."|tableName, <invisible(0|1)>, <outputTableName>, <Batch Submit(0|1)> )

**Description:** Executes SQL against a database connection returned from Create Database Connection or a Data Connector. Enabling Batch Submit allows for receiving multiple results from multiple SQL statements, returning a list with the results (supporting drivers only).

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
dt = Execute SQL(
	databaseConnectionHandle,
	"SELECT HEIGHT, WEIGHT FROM Bigclass",
	"NewTable"
);

```

**Example 2**

```js

Names Default To Here( 1 );
dc = Data Connector Registry() << Get( "com.jmp.sql_server" );
dt = Execute SQL( dc, "SELECT HEIGHT, WEIGHT FROM Bigclass" );

```

**Example 3**

```js

Names Default To Here( 1 );
dc = Data Connector Registry() << Get( "com.jmp.sql_server" );
resultList = Execute SQL(
	dc,
	"SELECT HEIGHT, WEIGHT FROM Bigclass; SELECT AGE, WEIGHT FROM BigClass;",
	Batch Submit( 1 )
);

```

### Exit

**Syntax:** Quit(<"No Save">); Exit(<"No Save">)

**Description:** Exits JMP.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
If(
	New Window( "Exit() example",
		<<Type( "Modal" ),
		Text Box( "Shut down JMP?" ),
		H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
	)["Button"] == 1, /*OK==1*/Exit(), /*cancel==-1*/"Good choice."
);

```

### Exp

**Syntax:** y = Exp( <x=1> )

**Description:** Returns e raised to the x power. Argument can be a number, matrix, or list of numbers.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Round( Exp( 1 ), 5 );

```

### Exp Density

**Syntax:** y = Exp Density( x, <theta=1> )

**Description:** Returns the density at x of an exponential distribution with parameter theta.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
New Window( "Example: Exp Density",
	y = Graph Box(
		Y Scale( 0, 0.45 ),
		X Scale( 0, 4 ),
		XName( "x" ),
		Pen Color( "red" );
		Y Function( Exp Density( x, 2 ), x );
	)
);

```

### Exp Distribution

**Syntax:** p = Exp Distribution( x, <theta=1> )

**Description:** Returns the probability that an exponentially distributed random variable is less than x.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
New Window( "Example: Exp Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 4 ),
		XName( "x" ),
		Pen Color( "red" );
		Y Function( Exp Distribution( x, 2 ), x );
	)
);

```

### Exp Quantile

**Syntax:** q = Exp Quantile( p, <theta=1> )

**Description:** Returns the quantile from an exponential distribution, the value for which the probability is p that a random value would be lower.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
New Window( "Example: Exp Quantile",
	y = Graph Box(
		Y Scale( 0, 4 ),
		X Scale( 0, 1 ),
		Pen Color( "red" );
		Y Function( Exp Quantile( qq, 2 ), qq );
	)
);

```

### ExpM1

**Syntax:** y = ExpM1( x )

**Description:** Returns a more accurate calculation of Exp(x)-1 when x is very small.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Show( ExpM1( 1.1e-18 ), Exp( 1.1e-18 ) - 1 );

```

### Exponential Density

**Syntax:** y = Exponential Density( x, <theta=1> )

**Description:** Returns the density at x of an exponential distribution with parameter theta.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
New Window( "Example: Exponential Density",
	y = Graph Box(
		Y Scale( 0, 0.45 ),
		X Scale( 0, 4 ),
		XName( "x" ),
		Pen Color( "red" );
		Y Function( Exponential Density( x, 2 ), x );
	)
);

```

### Exponential Distribution

**Syntax:** p = Exponential Distribution( x, <theta=1> )

**Description:** Returns the probability that an exponentially distributed random variable is less than x.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
New Window( "Example: Exponential Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 4 ),
		XName( "x" ),
		Pen Color( "red" );
		Y Function( Exponential Distribution( x, 2 ), x );
	)
);

```

### Exponential Quantile

**Syntax:** q = Exponential Quantile( p, <theta=1> )

**Description:** Returns the quantile from an exponential distribution, the value for which the probability is p that a random value would be lower.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
New Window( "Example: Exponential Quantile",
	y = Graph Box(
		Y Scale( 0, 4 ),
		X Scale( 0, 1 ),
		Pen Color( "red" );
		Y Function( Exponential Quantile( qq, 2 ), qq );
	)
);

```

### Expr

**Syntax:** y = Expr( x )

**Description:** Returns its argument unevaluated. Used to quote expressions.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Expr( x + y );

```

### Expr As Picture

**Syntax:** y = Expr As Picture( expr( ... ), <width in pixels>, <Max Matrix Size( dim )> )

**Description:** Returns an image containing the specified expression as a formula picture. The default width is 600 pixels and the default max matrix size is 100.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Lineup Box( N Col( 1 ), spacing( 10 ),
		Text Box( "Quadratic Formula" ),
		Border Box( Left( 10 ), Right( 10 ), bottom( 10 ), top( 10 ), sides( 15 ),
			Expr As Picture( Expr( (-b + Sqrt( b ^ 2 - 4 * a * c )) / (2 * a) ) )
		)
	)
);

```

### Extract Expr

**Syntax:** y = Extract Expr( expr, pattern )

**Description:** Returns a subexpression matching the specified pattern.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Extract Expr( a + b * c, Wild() * Wild() );

```

### F Density

**Syntax:** y = F Density( q, dfnum, dfden, <nonCentrality=0> )

**Description:** Returns the density at q of an F distribution with dfn and dfd degrees of freedom.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
fdedfn = 2;
fdedfd = 2;
New Window( "Example: F Density",
	fdey = Graph Box(
		Y Scale( 0, 0.8 ),
		X Scale( 0, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( F Density( fdeq, fdedfn, fdedfd ), fdeq );
		Text( {2.5, 0.7}, "dfn=", Round( fdedfn, 2 ), " dfd=", Round( fdedfd, 2 ) );
	),
	H List Box( Text Box( "dfn " ), Slider Box( 1, 10, fdedfn, fdey << reshow ) ),
	H List Box( Text Box( "dfd " ), Slider Box( 1, 10, fdedfd, fdey << reshow ) )
);

```

### F Distribution

**Syntax:** y = F Distribution( q, dfnum, dfden, <nonCentrality=0> )

**Description:** Returns the probability that an F distributed random variable is less than q.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
fdidfn = 5;
fdidfd = 5;
New Window( "Example: F Distribution",
	fdiy = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 10 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( F Distribution( fdiq, fdidfn, fdidfd ), fdiq );
		Text( {0.5, 0.9}, "dfn=", Round( fdidfn, 2 ), " dfd=", Round( fdidfd, 2 ) );
	),
	H List Box( Text Box( "dfn " ), Slider Box( 0.5, 10, fdidfn, fdiy << reshow ) ),
	H List Box( Text Box( "dfd " ), Slider Box( 0.5, 10, fdidfd, fdiy << reshow ) )
);

```

### F Log CDistribution

**Syntax:** y = F Log CDistribution( x, dfnum, dfden, <nonCentrality=0> )

**Description:** Returns the log of 1 - F Distribution.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
flcddfn = 5;
flcddfd = 5;
New Window( "Example: F Log CDistribution",
	flcdy = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 10 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( F Log CDistribution( flcdq, flcddfn, flcddfd ), flcdq );
		Text( {0.5, -0.9}, "dfn=", Round( flcddfn, 2 ), " dfd=", Round( flcddfd, 2 ) );
	),
	H List Box( Text Box( "dfn " ), Slider Box( 1, 10, flcddfn, flcdy << reshow ) ),
	H List Box( Text Box( "dfd " ), Slider Box( 1, 30, flcddfd, flcdy << reshow ) )
);

```

### F Log Density

**Syntax:** y = F Log Density( x, dfnum, dfden, <nonCentrality=0> )

**Description:** Returns the log of the F probability density.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
fldedfn = 1;
fldedfd = 1;
New Window( "Example: F Log Density",
	fldey = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( F Log Density( fldeq, fldedfn, fldedfd ), fldeq );
		Text( {2.5, -0.7}, "dfn=", Round( fldedfn, 2 ), " dfd=", Round( fldedfd, 2 ) );
	),
	H List Box( Text Box( "dfn " ), Slider Box( 1, 10, fldedfn, fldey << reshow ) ),
	H List Box( Text Box( "dfd " ), Slider Box( 1, 10, fldedfd, fldey << reshow ) )
);

```

### F Log Distribution

**Syntax:** y = F Log Distribution( x, dfnum, dfden, <nonCentrality=0> )

**Description:** Returns the log of the F distribution.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
flddfn = 5;
flddfd = 5;
New Window( "Example: F Log Distribution",
	fldy = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 10 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( F Log Distribution( fldq, flddfn, flddfd ), fldq );
		Text( {0.5, -0.9}, "dfn=", Round( flddfn, 2 ), " dfd=", Round( flddfd, 2 ) );
	),
	H List Box( Text Box( "dfn " ), Slider Box( 1, 10, flddfn, fldy << reshow ) ),
	H List Box( Text Box( "dfd " ), Slider Box( 1, 30, flddfd, fldy << reshow ) )
);

```

### F Noncentrality

**Syntax:** nc = F Noncentrality( x, dfnum, dfden, prob )

**Description:** Solves for the noncentrality parameter nc such that prob = F Distribution( x, ndf, ddf, nc ).

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example: F Noncentrality",
	fncgr = Graph Box(
		Y Scale( 0.01, 0.99 ),
		X Scale( 0.01, 0.99 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( F Noncentrality( 3, 2, 5, F Distribution( 3, 2, 5, q ) ), q );
	)
);
F Noncentrality( 3, 2, 5, F Distribution( 3, 2, 5, 0.4 ) );

```

### F Power

**Syntax:** p = F Power( alpha, dfh, dfm, d, n )

**Description:** Calculates the power of an F Test, where alpha is the significance level, dfh is the hypothesis degrees of freedom, dfm is the degrees of freedom in the whole model, d is the squared effect size, SSH/(n*sigma^2) where SSH is the sum of squares for the hypothesis, and n is the total number of observations. Note that for the ANOVA model, d = Sum(a[i]^2)/(k * sigma^2) where a[i] are effects and k is the number of means.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
alpha = 0.05;
obs = 25;
dfh = 5;
dfm = 5;
d = 1;
New Window( "Example: F Power (alpha=.05,dfh=5,dfm=5)",
	fpdigr = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( 0, 1 ),
		YName( "Power" ),
		XName( "d" ),
		Pen Color( "red" );
		Y Function( F Power( alpha, dfh, dfm, d, obs ), d );
		Text( {0.75, 0.1}, "obs=", Round( obs ) );
	),
	H List Box( Text Box( "obs" ), Slider Box( 10, 100, obs, fpdigr << reshow ) )
);

```

### F Quantile

**Syntax:** q = F Quantile( p, dfnum, dfden, <nonCentrality=0> )

**Description:** Returns the quantile from an F distribution, the value for which the probability is p that a random value would be lower.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
F Quantile( 0.7, 5, 3 );

```

### F Sample Size

**Syntax:** n = F Sample Size( alpha, dfh, dfm, d, power )

**Description:** Calculates the sample size, where alpha is the significance level, dfh is the hypothesis degrees of freedom, dfm is the degrees of freedom in the whole model, d is the squared effect size, SSH/(n*sigma^2) where SSH is the sum of squares for the hypothesis, and power is the power desired. Note that for the ANOVA model, d = Sum(a[i]^2)/(k * sigma^2) where a[i] are effects and k is the number of means.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
alpha = 0.05;
pow = 0.6;
dfh = 5;
dfm = 5;
d = 1;
New Window( "Example: F Sample Size (alpha=.05,dfh=5,dfm=5)",
	fpdigr = Graph Box(
		Y Scale( 0, 50 ),
		X Scale( 0.5, 5 ),
		YName( "Sample Size" ),
		XName( "d" ),
		Pen Color( "red" );
		Y Function( F Sample Size( alpha, dfh, dfm, d, pow ), d );
		Text( {0.75, 0.2}, "power=", Round( pow, 2 ) );
	),
	H List Box( Text Box( "power" ), Slider Box( 0.2, 0.95, pow, fpdigr << reshow ) )
);

```

### FDR Adjust

**Syntax:** y = FDR Adjust( matrix )

**Description:** Returns the false discovery rate adjustment for the specified p-values using the Benjamini-Hochberg method.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
FDR Adjust( [0.5, 0.2, 0.05, 0.01] );

```

### FFT

**Syntax:** ret = FFT( L, <<inverse( 0 ), <<multivariate( 0 ), <<scale( 1.0 ) )

**Description:** Conducts Fast Fourier Transformation (FFT) on argument L, a required list consisting of real and imaginary parts of the data in matrix forms. If L consists of only one matrix, the matrix is considered to be the real part. If L consists of two matrices, the first is the real part, and the second is the imaginary part. The two matrices must have the same dimensions and must have more than one row. There are three optional arguments. The inverse argument determines whether to conduct inverse FFT. The multivariate argument determines whether to conduct spatial or multivariate FFT. The scale argument determines the constant by which the return values should be multiplied. Return value is a list of two matrices with the same dimensions as the first input argument.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
FFT( {[1, 2, 3, 4, 4, 5, 5, 6, 7, 7, 2, 3, 6, 6, 2, 2, 2, 3, 3, 3]} );
A = [1, 2, 3, 4, 4, 5, 5, 6, 7, 7, 2, 3, 6, 6, 2, 2, 2, 3, 3, 3];
res = FFT( {A} );
res = FFT( {A}, <<Inverse( 1 ) );
res = FFT( {A}, <<multivariate( 1 ) );
res = FFT( FFT( {A} ), <<Inverse( 1 ), <<scale( 1 / 20 ) );
B = FFT( {A} );
FFT( B, <<Inverse( 1 ), <<scale( 1 / 20 ) );
Afun = Function( {},
	[1, 2, 3, 4, 4, 5, 5, 6, 7, 7, 2, 3, 6, 6, 2, 2, 2, 3, 3, 3]
);
FFT( FFT( {Afun()} ), <<Inverse( 1 ), <<scale( 1 / 20 ) );
Afun = Function( {},
	{[1, 2, 3, 4, 4, 5, 5, 6, 7, 7, 2, 3, 6, 6, 2, 2, 2, 3, 3, 3]}
);
FFT( FFT( Afun() ), <<Inverse( 1 ), <<scale( 1 / 20 ) );
A = [1 3, 2 4, 3 1, 4 3, 4 5, 5 2, 5 7, 6 9, 7 5, 7 3, 2 7, 3 4, 6 7, 6 4, 2 7, 2 4, 2 6,
3 5, 3 6, 3 1];
res = FFT( {A} );
res = FFT( {A}, <<multivariate( 1 ) );
res = FFT( FFT( {A} ), <<Inverse( 1 ), <<scale( 1 / 40 ) );
res = FFT(
	FFT( {A}, <<multivariate( 1 ) ),
	<<multivariate( 1 ),
	<<Inverse( 1 ),
	<<scale( 1 / 20 )
);
A = [1 3 1,
2 4 3,
3 1 2,
4 3 3,
4 5 9,
5 2 8,
5 7 6,
6 9 5,
7 5 3,
7 3 2,
2 7 1,
3 4 3,
6 7 3,
6 4 2,
2 7 4,
2 4 1,
2 6 5,
3 5 1,
3 6 2,
3 1 9];
res = FFT( {A} );
res = FFT( {A}, <<multivariate( 1 ) );
FFT( FFT( {A} ), <<Inverse( 1 ), <<scale( 1 / 60 ) );
fin = FFT(
	FFT( {A}, <<multivariate( 1 ) ),
	<<Inverse( 1 ),
	<<multivariate( 1 ),
	<<scale( 1 / 20 )
);
Show( fin );

```

### Factorial

**Syntax:** y = Factorial( x )

**Description:** Returns the factorial of x, which is the same as Gamma( x + 1 ). If x is an integer, the result is the product 1 * 2 * ... * x.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Factorial( 5 );

```

### Faure Quasi Random Sequence

**Syntax:** points = Faure Quasi Random Sequence(nDim, nRow)

**Description:** Generate a sequence of space filling quasi-random numbers using the Faure sequence.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
A = Faure Quasi Random Sequence( 3, 100 );
As Table( A );
Scatterplot 3D( Y( :Col1, :Col2, :Col3 ) );

```

### File Exists

**Syntax:** rc = File Exists( path )

**Description:** Determine whether the file exists. Returns 1 if the file path exists. Returns 0 if the path is invalid or does not exist.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
If( File Exists( "$SAMPLE_DATA/Big Class.jmp" ),
	"ok",
	"missing!"
);

```

### File Size

**Syntax:** size = File Size( path )

**Description:** Returns the size of the file at the given path. Returns missing when file path is invalid or does not exist.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
File Size( "$SAMPLE_DATA/Big Class.jmp" );

```

### Files In Directory

**Syntax:** y = Files In Directory( "path", <recursive(0|1)>, <include hidden(0|1)> )

**Description:** Returns the list of file names in a directory that is specified by path. If the Recursive argument is not specified, directory names are included in the list.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Files In Directory( "$HOME" );

```

**Example 2**

```js

Names Default To Here( 1 );
Filter Each( {fn}, Files In Directory( "$SAMPLE_DATA", recursive( 1 ) ),
	Contains( Lowercase( fn ), "stacked" )
);

```

### Fill Color

**Syntax:** Fill Color( <name|index|rgbList> )

**Description:** Sets the color for drawing filled areas.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( {1, 1, .5} );
		Polygon( [10 30 90], [88 22 44] );
	)
);

```

### Fill Pattern

**Syntax:** Fill Pattern( name|mask|image )

**Description:** Sets the pattern for drawing filled areas. A mask is a matrix of values between 0 and 1 to be applied to the current fill color.

**JMP Version Added:** Before version 14

**Image**

```js

Names Default To Here( 1 );

image = New Image( "$SAMPLE_IMAGES/pi.gif" );
New Window( "Example",
	Graph Box(
		Fill Pattern( image );
		Polygon( [10 30 90], [88 22 44] );
	)
);

```

**Mask**

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Pattern( [1 0.5 0 0, 0.5 0 0 1, 0 0 1 0.5, 0 1 0.5 0] );
		Polygon( [10 30 90], [88 22 44] );
	)
);

```

### Filter Col Selector

**Syntax:** y = Filter Col Selector(<Data Table(name)>, <width(pixels)>, <nlines(n)>, <script>, <onchange(expr)>)

**Description:** Returns a display box that contains a list of items. Control allows column filtering.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Col List Box Example", fontobj = lb = Filter Col Selector( width( 250 ) ) );

```

### Filter Each

**Syntax:** list = Filter Each({<value>, <index>} | {<element>, <index | {row, col}>} | {<key | {key, value}>, <index>} | {<values | {value1, ..., valueN}>, <index>}, list | matrix | associative array | expression | Across( container1, ..., <containerN>, <Count( "Longest" | "Shortest" | "Enforce Equal" | n )> ), <locals list>, body)

**Description:** Does everything that the For Each function does, but also returns a list of filtered values from the original container based on a boolean value result. The type of the result will match the type of the input container. For Matrix input, a row vector matrix will be returned, since the size of the matrix cannot be known.

**JMP Version Added:** 16

**Associative Array**

```js

Names Default To Here( 1 );
values = Filter Each( {{key, value}}, ["A" => 8, "B" => 6, "C" => 10], value > 6 );
Show( values );

```

**Expression**

```js

Names Default To Here( 1 );
values = Filter Each( {value}, Expr( MyExpr( 1, 2, 3, 4 ) ), Mod( value, 2 ) == 0 );
Show( values );

```

**List**

```js

Names Default To Here( 1 );
values = Filter Each( {x}, {0, -5, 2, -10, 4}, x > 0 );
Show( values );

```

**Matrix**

```js

Names Default To Here( 1 );
values = Filter Each( {x, i}, 100 :: 120, i > 10 );
Show( values );

```

### Find All

**Syntax:** Find All( <Project(title|index|box|window)>, Data Tables | Reports | Journals, <invisible | private> )

**Description:** Finds all open resources of a specific type: data tables, journals, or reports.



Only windows in the current project (or no project if not running the script in a project) will be included. To specify a project, use the optional Project() argument with a title, index, display box, or window object. Use Project(0) to specify no project when running the script in a project.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );

exdt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
exdt2 = Open( "$SAMPLE_DATA/Animals.jmp" );
windows = Find All( Data Tables );
For( i = 1, i <= N Items( windows ), i++,
	Write( Char( windows[i] << Get Window Title ) || "\!N" )
);

```

### First

**Syntax:** y = First( x1, x2, ... )

**Description:** Evaluates each argument and returns the value of the first argument.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
First( 11, 22 );

```

### Fit Censored

**Syntax:** result = FitCensored( Distribution(name), YLow(vector) | Y(vector), <YHigh(vector)>, <Weight(vector)>, <X(matrix)>, <Z(matrix)>, <HoldParm(vector)>, <Use random sample to compute initial values(percent)>, <Use first N observations to compute initial values(nobs)> )

**Description:** Fits a distribution using censored data. The required arguments are Distribution and either YLow or Y. The function returns a list that contains parameter estimates, covariance matrix, log-likelihood, AICc, BIC, and a convergence message. The X and Z arguments specify regression design matrices for location and scale, respectively. When the data vector is large, two optional arguments can be used to specify a sample to compute the initial values. You can specify a percent of the observations or the first nobs observations, but the total sample size must be greater than 100.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
result = Fit Censored(
	Distribution( "Weibull" ),
	Y( [142, 156, 163, 198, 204, 205, 232, 239, 240, 261, 280, 296, 323, 344] )
);
Show( result );

```

### Fit Circle

**Syntax:** {xCenter, yCenter, radius, sse} = Fit Circle( Xvec, Yvec )

**Description:** Fits the circle that best goes through three or more points that are defined by two vectors of coordinates. The result is a list that contains the X and Y coordinates of the center point of the circle, the length of the radius, and the sum of squared errors.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
x = [68, 77, 85, 88, 93, 93, 95, 98];
y = [1, 9, 18, 94, 35, 82, 40, 59];
result = Fit Circle( x, y );
New Window( "Fit Circle",
	Graph Box(
		X Scale( -50, 100 ),
		Y Scale( -20, 130 ),
		FrameSize( 300, 300 ),
		Marker( x, y );
		Circle( {result[1], result[2]}, result[3] );
	)
);

```

### Fit Transform To Normal

**Syntax:** result = Fit Transform To Normal( Distribution(name), Y(vector), <Freq(vector)> )

**Description:** Fits a transformation to normality for a vector of data. This includes the Johnson Sl, Johnson Sb, Johnson Su, and GLog distributions. The function returns a list containing parameter estimates, covariance matrix, log-likelihood, AICc, a convergence message, and transformed values.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
datavec = [-3.7975076, 0.48221038, -1.3082712, -1.860647, -6.9470789, -17.237024,
-19.470857, -6.1855986, 2.16525629, -30.990061];
freqvec = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2];
As Table( datavec || freqvec );
Column( 1 ) << set name( "x" );
Column( 2 ) << set name( "freq vec" );
Distribution(
	Freq( :freq vec ),
	Continuous Distribution( Column( :x ), Fit Distribution( GLog ) )
);
results = Fit Transform To Normal( Distribution( "glog" ), Y( datavec ), freq( freqvec ) );
Show( results );

```

### Floor

**Syntax:** y = Floor( x )

**Description:** Returns the largest integer less than or equal to x. Argument can be a number, matrix, or list of numbers.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Floor( 1.2 );

```

### For

**Syntax:** For( initExpr, whileExpr, nextExpr, bodyExpr )

**Description:** Evaluates initExpr once and repeatedly evaluates whileExpr, bodyExpr, and nextExpr as long as whileExpr evaluates to a nonzero value.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
s = "";
For( i = 1, i < 10, i++,
	s ||= " " || Char( i )
);
Trim( s );

```

### For Each

**Syntax:** For Each({<value>, <index>} | {<element>, <index | {row, col}>} | {<key | {key, value}>, <index>} | {<values | {value1, ..., valueN}>, <index>}, list | matrix | associative array | expression | Across( container1, ..., <containerN>, <Count( "Longest" | "Shortest" | "Enforce Equal" | n )> ), <locals list>, body)

**Description:** Iterates over a container, either a list, matrix, associative array, or expression, providing the value, element, or key at each iteration. The index number is also available at each iteration. For Associative Array containers, the key and value can be accessed using a two-item list. For Matrix containers, a linear index is provided by default, but a two item list can be used to access the row and column indices. These symbols are provided within the body of the loop only, with a built-in Local block. A locals list can also be provided, which are initialized after the first iteration symbols are set.

**JMP Version Added:** 16

**Across**

```js

Names Default To Here( 1 );

// Across multiple containers
x = {1, 3};
y = {2, 4};
For Each( {{a, b}, index}, Across( x, y ), Show( a, b, index ) );

// Across list of containers
xy = {{1, 3}, {2, 4}};
For Each( {{a, b}, index}, Across( xy ), Show( a, b, index ) );

```

**Across - Count**

```js

Names Default To Here( 1 );

list1 = {1, 3, 5, 7, 9};
list2 = {2, 4}; 

Write( "\!N===Longest [default]===" );
For Each( {{l1, l2}}, Across( list1, list2, Count( "Longest" ) ), Show( l1, l2 ) );

Write( "\!N===Shortest===" );
For Each( {{s1, s2}}, Across( list1, list2, Count( "Shortest" ) ), Show( s1, s2 ) );

Write( "\!N===N===" );
For Each( {{n1, n2}}, Across( list1, list2, Count( 7 ) ), Show( n1, n2 ) );

Write( "\!N===Enforce Equal===" );
Try(
	For Each( {values}, Across( list1, list2, Count( "Enforce Equal" ) ), Show( values ) ),
	Print( "Error occurred" )
);

```

**Associative Array**

```js

Names Default To Here( 1 );
For Each( {{key, value}, index}, ["A" => 8, "B" => 6, "C" => 10],
	Show( key, value, index )
);

```

**Expression**

```js

Names Default To Here( 1 );
For Each( {value, index}, Expr( MyExpr( 10, 20, 30 ) ), Show( value ) );

```

**List**

```js

Names Default To Here( 1 );
For Each( {value, index}, {10, 20, 30}, Show( value, index ) );

```

**Matrix**

```js

Names Default To Here( 1 );
For Each( {element, {row, col}}, 10 :: 15, Show( element, row, col ) );

```

**Matrix - Linear Index**

```js

Names Default To Here( 1 );
For Each( {element, index}, 10 :: 15, Show( element, index ) );

```

### For Each Row

**Syntax:** y = For Each Row( <dt>, body )

**Description:** Evaluates the body expression iteratively for each row in the current data table.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( :height = -:height );

```

### Force Action Notes

**JMP Version Added:** 16

### Format

**Syntax:** s = Format( x, formatString, <options> )

s = Format( x, "Format Pattern", pattern, <options> )

**Description:** Returns the number in the specified format. Formats include items in the Column Info dialog, such as "Best" and "h:m:s". See Topic Help for other options, including p-value, currency, date and time, and geographic formats.

**JMP Version Added:** Before version 14

**Date Time**

```js

Names Default To Here( 1 );
Print( Format( Today(), "yyyyQq" ), Format( Today(), "m/d/y h:m" ) );

```

**Format Pattern**

```js

Names Default To Here( 1 );
Print( Format( Today(), "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm><:><ss>" ) );

```

**Full Precision**

```js

Names Default To Here( 1 );
Show( Format( 88.54, "Best" ), Format( 88.54, "Best", "Full Precision" ) );

```

**Percent, Currency**

```js

Names Default To Here( 1 );
pct = Format( 0.123, "Percent", 2 );
amt = Format( 123.4567, "Currency", "EUR", 2 );
result = "Revenue increase: " || amt || " or " || pct || ".";

```

### Format Date

**Syntax:** s = Format( x, formatString, <options> )

s = Format( x, "Format Pattern", pattern, <options> )

**Description:** Returns the number in the specified format. Formats include items in the Column Info dialog, such as "Best" and "h:m:s". See Topic Help for other options, including p-value, currency, date and time, and geographic formats.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Print( Format( Today(), "yyyyQq" ), Format( Today(), "m/d/y h:m" ) );

```

**Example 2**

```js

Names Default To Here( 1 );
Print( Format( Today(), "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm><:><ss>" ) );

```

**Example 3**

```js

Names Default To Here( 1 );
pct = Format( 0.123, "Percent", 2 );
amt = Format( 123.4567, "Currency", "EUR", 2 );
result = "Revenue increase: " || amt || " or " || pct || ".";

```

### Format Pattern

**Syntax:** s = Format( x, "Format Pattern", pattern, <width>, <dec>)

x = In Format( s, "Format Pattern", pattern, < <<Use Locale(b=1)> )

obj = Format("Format Pattern", pattern, <width>, <dec>)

**Description:** Format Patterns are strings that define a date-time format, such as "<YYYY></><MM></><DD> <hh><:><mm><:><ss><ampm>". The parts of the pattern in angle brackets are called field descriptors. The field descriptors represent a value (such as "<YYYY>", which is a four-digit year) or other date-time text (such as "</>", which is a locale-specific date separator). A format pattern enables you to build formats that aren&apos;t provided in JMP. These formats can be used for both formatting and inputting data.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
s = Format( Today(), "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm>" );
x = Informat( "2020/02/10 14:54", "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm>" );
Show( s, x );
                                        /*
Field Descriptors

Dates
(cannot be used with Duration field descriptors)
================================================================================
<YYYY>        Four-digit year. (Accepts 1-4 digits on input.)
<YY>          Two-digit year
<yyyy>        Four digit ISO year; corresponds to ISO weeks. (Accepts 1-4 digits
              on input.)
<yy>          Two digit ISO year; corresponds to ISO weeks.
<YYYY.>       Year with fractional year. Completely describes the date and time.
<M>           Month number (1..12)
<MM>          Month number, zero-padded (01..12)
<Month>       Long month name
<Mmm>         Abbreviated month name
<MMM>         "In-line" month name. Always three letters.
<WW1>         Two digit week number, zero-padded. Week 2 begins on first Sunday
              of year. Week 1 is partial week before first Sunday. (01..54)
<WW2>         Two digit week number, zero-padded. Week 1 begins on first Sunday
              of year. Week 0 is partial week before first Sunday. (00..53)
<ww>          Two digit ISO week number, zero-padded. Weeks begin on Monday.
              Week 1 is first week in that year with 4 or more days. There are
              no partial weeks, instead the first or last week can extend into
              the previous or next year, respectively. (01..53)
<D>           Day of the month (1..31)
<DD>          Day of the month, zero-padded (01..31)
<Q>           Quarter of the year (1..4)
<Q#>          "Q" followed by quarter of the year (1..4)
<DayOfWeek>   Name of the day of the week
<DW>          Day of week as a number. 1 = Sunday, 7 = Saturday
<dw>          Day of week as a number. 1 = Monday, 7 = Sunday
</>           The locale date separator. (Accepts most common separators on
              input.)
<->           The ISO date separator '-'. (Accepts most common separators on
              input.)
</?>          Optional date separator on the date input. The separator is never
              written on output.
<'T'>         The 'T' in ISO dates

Times
(some can be used with Duration field descriptors)
================================================================================
<hh>          Hour formatted according to the current locale. If a <ampm>
              descriptor is present, will use a 12 or 24 hour clock depending on
              locale. If a <AMPM> descriptor is present, will use a 12 hour
              clock. Otherwise, will use a 24 hour clock. (Cannot be used with
              duration field descriptors.)
<zhh>         Hour formatted according to the current locale and zero-padded. If
              a <ampm> descriptor is present, will use a 12 or 24 hour clock
              depending on locale. If a <AMPM> descriptor is present, will use a
              12 hour clock. Otherwise, will use a 24 hour clock. (Cannot be
              used with duration field descriptors.)
<hh24>        Hour in 24-hour format and zero-padded (00..23)
<mm>          Minute, zero-padded (00..59)
<ss>          Second, zero-padded (00..59)
<ampm>        AM/PM symbol for the current locale. (Cannot be used with duration
              field descriptors.)
<AMPM>        Locale-independent AM/PM symbol "AM" or "PM". (Cannot be used with
              duration field descriptors.)
<:>           The locale time separator.
<::>          The ISO time separator ':'. (Also accepts locale time separator on
              input.)
<:?>          Optional time separator on the date input. The separator is never
              written on output.

Durations
(cannot be used with Date field descriptors)
================================================================================
<Day>         Day count. Used as most significant field in durations. Cannot be
              used with any other "count".
<Hour>        Hour count. Used as most significant field in durations. Cannot be
              used with any other "count".
<Minute>      Minute count. Used as most significant field in durations. Cannot
              be used with any other "count".

Other
================================================================================
<<>           Replaced with a "<"
*/

```

### Fourier Basis Coef

**Syntax:** coef = Fourier Basis Coef( x, Number Pairs, <Period = max(x)-min(x)+1> )

**Description:** Returns the matrix of Fourier Basis coefficients. Number Pairs is the number of sin() and cos() pairs for the basis. Optional parameter Period specifies the period for the trigonometric functions and defaults to max(x) - min(x) + 1.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
Fourier Basis Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] / 10, 2 );
Fourier Basis Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] / 10, 2, 2 );

```

### Frechet Density

**Syntax:** y = Frechet Density( x, mu, sigma )

**Description:** Returns the density at x of a Fréchet distribution with location mu and scale sigma.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
mu = 0;
sig = .5;
New Window( "Example: Frechet Density",
	y = Graph Box(
		Y Scale( 0, .06 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( Frechet Density( x, mu, sig ), x );
		Text( {0, .055}, "mu=", Round( mu, 2 ) );
		Text( {0, .045}, "sig=", Round( sig, 2 ) );
	),
	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( "mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( "sig" ) ), 

);

```

### Frechet Distribution

**Syntax:** p = Frechet Distribution( x, mu, sigma )

**Description:** Returns the probability at x of a Fréchet distribution with location mu and scale sigma.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
mu = 0;
sig = .5;
New Window( "Example: Frechet Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( Frechet Distribution( x, mu, sig ), x );
		Text( {0.1, 0.9}, "mu=", Round( mu, 2 ) );
		Text( {0.1, 0.8}, "sig=", Round( sig, 2 ) );
	),
	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) )
);

```

### Frechet Quantile

**Syntax:** q = Frechet Quantile( p, mu, sigma )

**Description:** Returns the quantile at p of a Fréchet distribution with location mu and scale sigma.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
mu = 0;
sig = .5;
qq = .5;
New Window( "Example: Frechet Quantile",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( Frechet Distribution( qq, mu, sig ), qq );
		Pen Color( "blue" );
		V Line( Frechet Quantile( qq, mu, sig ), 0, 1 );
		Text(
			{0.1, 0.9},
			" mu=",
			Round( mu, 2 ),
			" sig=",
			Round( sig, 2 ),
			" quantile=",
			Round( qq, 2 )
		);
	),
	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) ),
	H List Box( Slider Box( 0.01, 0.99, qq, y << reshow ), Text Box( " quantile" ) )
);

```

### Function

**Syntax:** y = Function( {arg1=val1, ...}, <{local1=val1, ...}>, expr )

**Description:** Defines a function with the specified arguments, default values, and optional local variables. Arguments with default values are optional on invocation of the function. If Return() is used within the function&apos;s script, the expression within is returned.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
exsqr = Function( {x}, x * x );
exsqr( 5 );

```

**Example 2**

```js

Names Default To Here( 1 );
// y is an optional argument
exmul = Function( {x, y = 3}, x * y );
a = exmul( 5 );
b = exmul( 5, 10 );
Show( a, b );

```

**Example 3**

```js

Names Default To Here( 1 );
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

### Future Value

**Syntax:** x = Future Value( rate, nper, pmt, <pv=0>, <type=0> )

**Description:** Returns the future value of an investment based on periodic, constant payments and a constant interest rate. The type argument is 0 for end-of-period payments and 1 for beginning-of-period payments. Equivalent to the FV function in Microsoft Excel.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Future Value( .03, 12, 100, 0, 1 );

```

### G Inverse

**Syntax:** g = G Inverse( A )

**Description:** Returns the generalized (Moore-Penrose) matrix inverse.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Round( G Inverse( [11 22, 33 44] ), 2 );

```

### GLog Density

**Syntax:** y = GLog Density( q, mu, sigma, lambda )

**Description:** Returns the density at q of a generalized logarithm distribution with location mu, scale sigma, and shape lambda.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
mu = 0;
sigma = 1;
lambda = 1;
New Window( "Example: GLog Density",
	gdey = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -10, 10 ),
		XName( "y" ),
		Pen Color( "red" );
		Y Function( GLog Density( y, mu, sigma, lambda ), y );
		Text( {-9, 0.9}, "\!U03BC=", Round( mu, 4 ), " \!U03C3=", Round( sigma, 4 ) );
		Text( {-9, 0.8}, "\!U03BB=", Round( lambda, 4 ) );
	),
	H List Box( Slider Box( -5, 5, mu, gdey << reshow ), Text Box( " \!U03BC" ) ),
	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( " \!U03C3" ) ),
	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( " \!U03BB" ) )
);

```

### GLog Distribution

**Syntax:** p = GLog Distribution( q, mu, sigma, lambda )

**Description:** Returns the probability that a generalized logarithm distributed random variable is less than q.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
mu = 0;
sigma = 1;
lambda = 1;
New Window( "Example: Glog Distribution",
	gdey = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -20, 20 ),
		XName( "y" ),
		Pen Color( "red" );
		Y Function( GLog Distribution( y, mu, sigma, lambda ), y );
		Text( {-9, 0.9}, "\!U03BC=", Round( mu, 4 ), " \!U03C3=", Round( sigma, 4 ) );
		Text( {-9, 0.8}, "\!U03BB=", Round( lambda, 4 ) );
	),
	H List Box( Slider Box( -5, 5, mu, gdey << reshow ), Text Box( " \!U03BC" ) ),
	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( " \!U03C3" ) ),
	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( " \!U03BB" ) )
);

```

### GLog Quantile

**Syntax:** q = GLog Quantile( p, mu, sigma, lambda )

**Description:** Returns the quantile from a generalized logarithm distribution, the value for which the probability is p that a random value would be lower.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
mu = 0;
sigma = 1;
lambda = 1;
p = 0.4;
New Window( "Example: GLog Quantile",
	gdey = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -20, 20 ),
		XName( "y" ),
		Pen Color( "red" );
		Y Function( GLog Distribution( x, mu, sigma, lambda ), x );
		Pen Color( "Blue" );
		V Line( GLog Quantile( p, mu, sigma, lambda ), 0, 1 );
		Text(
			{-9, 0.9},
			"\!U03BC=",
			Round( mu, 4 ),
			" \!U03C3=",
			Round( sigma, 4 ),
			" \!U03BB=",
			Round( lambda, 4 )
		);
		Text( {-9, 0.8}, "p=", Round( p, 3 ) );
		Text( {-9, 0.7}, "quantile= ", Round( GLog Quantile( p, mu, sigma, lambda ), 2 ) );
	),
	H List Box( Slider Box( -2, 2, mu, gdey << reshow ), Text Box( " \!U03BC" ) ),
	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( " \!U03C3" ) ),
	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( " \!U03BB" ) ),
	H List Box( Slider Box( 0.01, 0.99, p, gdey << reshow ), Text Box( " p" ) )
);

```

### Gamma

**Syntax:** y = Gamma( x, <limit> )

**Description:** Returns Gamma function of x, defined as the integral of z^(x-1)*exp(-z) dz from 0 to ∞. If limit is present, an incomplete Gamma is computed using that limit of integration.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Gamma( 5 );

```

### Gamma Density

**Syntax:** y = Gamma Density( q, <alpha=1>, <scale=1>, <threshold=0> )

**Description:** Returns the density at q of a Gamma probability distribution, where the alpha shape parameter argument must be positive.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
gdealpha = Log( 1.5 );
New Window( "Example: Gamma Density",
	gdey = Graph Box(
		Y Scale( 0, 0.5 ),
		X Scale( 0, 12 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Gamma Density( gdeq, Exp( gdealpha ) ), gdeq );
		Text( {9, 0.45}, "\!U03B1=", Round( Exp( gdealpha ), 2 ) );
	),
	H List Box(
		Slider Box( Log( 0.1 ), Log( 12 ), gdealpha, gdey << reshow ),
		Text Box( " \!U03B1" )
	)
);

```

### Gamma Distribution

**Syntax:** p = Gamma Distribution( q, <alpha=1>, <scale=1>, <threshold=0> )

**Description:** Returns the probability that a Gamma distributed random variable is less than q, where the alpha shape parameter argument must be positive. IGamma() is an alias name to Gamma Distribution(). The Gamma Distribution() function is equivalent to Gamma(alpha,q)/Gamma(alpha).

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
gdialpha = Log( 1.5 );
New Window( "Example: Gamma Distribution",
	gdiy = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 12 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Gamma Distribution( gdiq, Exp( gdialpha ) ), gdiq );
		Text( {1, 0.9}, "\!U03B1=", Round( Exp( gdialpha ), 2 ) );
	),
	H List Box(
		Slider Box( Log( 0.1 ), Log( 12 ), gdialpha, gdiy << reshow ),
		Text Box( " \!U03B1" )
	)
);

```

### Gamma Log CDistribution

**Syntax:** p = Gamma Log CDistribution( x, <alpha=1>, <scale=1>, <threshold=0> )

**Description:** Returns the log of 1 - Gamma distribution.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
glcdialpha = Log( 1.5 );
New Window( "Example: Gamma Log CDistribution",
	glcdiy = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 12 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Gamma Log CDistribution( glcdiq, Exp( glcdialpha ) ), glcdiq );
		Text( {1, -0.9}, "\!U03B1=", Round( Exp( glcdialpha ), 2 ) );
	),
	H List Box(
		Slider Box( Log( 0.1 ), Log( 12 ), glcdialpha, glcdiy << reshow ),
		Text Box( " \!U03B1" )
	)
);

```

### Gamma Log Density

**Syntax:** y = Gamma Log Density( x, <alpha=1>, <scale=1>, <threshold=0> )

**Description:** Returns the log of the Gamma probability density.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
gldealpha = Log( 1.5 );
New Window( "Example: Gamma Log Density",
	gldey = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 12 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Gamma Log Density( gldeq, Exp( gldealpha ) ), gldeq );
		Text( {9, -0.45}, "\!U03B1=", Round( Exp( gldealpha ), 2 ) );
	),
	H List Box(
		Slider Box( Log( 0.1 ), Log( 12 ), gldealpha, gldey << reshow ),
		Text Box( " \!U03B1" )
	)
);

```

### Gamma Log Distribution

**Syntax:** p = Gamma Log Distribution( x, <alpha=1>, <scale=1>, <threshold=0> )

**Description:** Returns the log of the Gamma distribution.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
gldialpha = Log( 1.5 );
New Window( "Example: Gamma Log Distribution",
	gldiy = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 12 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Gamma Log Distribution( gldiq, Exp( gldialpha ) ), gldiq );
		Text( {1, -0.9}, "\!U03B1=", Round( Exp( gldialpha ), 2 ) );
	),
	H List Box(
		Slider Box( Log( 0.1 ), Log( 12 ), gldialpha, gldiy << reshow ),
		Text Box( " \!U03B1" )
	)
);

```

### Gamma Poisson Distribution

**Syntax:** cumprob = Gamma Poisson Distribution( k, lambda, sigma )

**Description:** Returns the probability that a gamma Poisson distributed random variable is less than or equal to k, where lambda is the mean parameter, sigma is the overdispersion parameter, and k is the count of interest.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
lambda = 20;
sigma = 2;
New Window( "Example: Gamma Poisson Distribution",
	ppy = Graph Box(
		Y Scale( 0, 1.01 ),
		X Scale( -1, 40 ),
		Pen Color( "red" ),
		Pen Size( 1 );
		For( k = 0, k <= 40, k++,
			H Line( k, k + 1, Gamma Poisson Distribution( k, lambda, sigma ) );
			V Line(
				k + 1,
				Gamma Poisson Distribution( k, lambda, sigma ),
				Gamma Poisson Distribution( k + 1, lambda, sigma )
			);
		);
		Text( {2, 0.95}, "\!U03BB=", Round( lambda, 2 ) );
		Text( {2, 0.87}, "\!U03C3=", Round( sigma, 2 ) );
	),
	H List Box( Slider Box( 3, 40, lambda, ppy << reshow ), Text Box( " \!U03BB" ) ),
	H List Box( Slider Box( 1, 5, sigma, ppy << reshow ), Text Box( " \!U03C3" ) )
);

```

### Gamma Poisson Probability

**Syntax:** prob = Gamma Poisson Probability( k, lambda, sigma )

**Description:** Returns the probability that a gamma Poisson distributed random variable is equal to k, where lambda is the mean parameter, sigma is the overdispersion parameter, and k is the count of interest.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
lambda = 5;
sigma = 2;
New Window( "Poisson and Gamma Poisson",
	clty = Graph Box(
		Y Scale( 0, 0.3 ),
		X Scale( -1, 20.5 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( x = 0, x <= 20, x++,
			Pen Color( "red" );
			V Line( x, 0, Poisson Probability( lambda, x ) );
			Pen Color( "blue" );
			V Line( x + 0.35, 0, Gamma Poisson Probability( x, lambda, sigma ) );
		);
		Text( {1, 0.25}, "\!U03BB=", Round( lambda, 8 ), " \!U03C3=", Round( sigma, 8 ) );
		Text( {0, 0.28}, "Red = Poisson, Blue = Gamma Poisson" );
	),
	H List Box( Slider Box( 3, 10, lambda, clty << reshow ), Text Box( " \!U03BB" ) ),
	H List Box( Slider Box( 1, 5, sigma, clty << reshow ), Text Box( " \!U03C3" ) )
);

```

### Gamma Poisson Quantile

**Syntax:** q = Gamma Poisson Quantile( lambda, sigma, cumprob )

**Description:** Returns the smallest integer quantile for which the cumulative probability of the Gamma Poisson( lambda, sigma ) distribution is larger than or equal to cumprob.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
qexpl = 20;
qexps = 2;
qexpn = 40;
qexpq = 0.5;
New Window( "Example: Gamma Poisson Quantile",
	qexpy = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, 41 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( qexpk = 0, qexpk < Round( qexpn ), qexpk++,
			H Line( qexpk, qexpk + 1, Gamma Poisson Distribution( qexpk, qexpl, qexps ) );
			V Line(
				qexpk + 1,
				Gamma Poisson Distribution( qexpk, qexpl, qexps ),
				Gamma Poisson Distribution( qexpk + 1, qexpl, qexps )
			);
		);
		Pen Color( "blue" );
		V Line( Gamma Poisson Quantile( qexpl, qexps, qexpq ), 0, 1 );
		Text( {1, 0.9}, " \!U03BB=", Round( qexpl, 2 ), " \!U03C3=", Round( qexps, 2 ) );
		Text(
			{1, 0.8},
			" q=",
			Round( qexpq, 2 ),
			" quantile=",
			Round( Gamma Poisson Quantile( qexpl, qexps, qexpq ) )
		);
	),
	H List Box( Slider Box( 3, 40, qexpl, qexpy << reshow ), Text Box( " \!U03BB" ) ),
	H List Box( Slider Box( 1, 5, qexps, qexpy << reshow ), Text Box( " \!U03C3" ) ),
	H List Box( Slider Box( 0, 1, qexpq, qexpy << reshow ), Text Box( " q" ) )
);

```

### Gamma Quantile

**Syntax:** q = Gamma Quantile( p, <alpha=1>, <scale=1>, <threshold=0> )

**Description:** Returns the quantile from a Gamma distribution, the value for which the probability is p that a random value would be lower.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Gamma Quantile( 0.75, 4 );

```

### GenGamma Density

**Syntax:** y = GenGamma Density( x, mu, sigma, lambda )

**Description:** Returns the density at x of an extended generalized gamma probability distribution with parameters mu, sigma, and lambda.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
mu = 0;
sigma = 1;
lambda = 1;
New Window( "Example: GenGamma Density",
	gdey = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -5, 10 ),
		XName( "y" ),
		Pen Color( "red" );
		Y Function( GenGamma Density( y, mu, sigma, lambda ), y );
		Text( {-4, 0.9}, "\!U03BC=", Round( mu, 4 ), " \!U03C3=", Round( sigma, 4 ) );
		Text( {-4, 0.8}, "\!U03BB=", Round( lambda, 4 ) );
	),
	H List Box( Slider Box( -5, 5, mu, gdey << reshow ), Text Box( "\!U03BC" ) ),
	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( "\!U03C3" ) ),
	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( "\!U03BB" ) )
);

```

### GenGamma Distribution

**Syntax:** p = GenGamma Distribution( x, mu, sigma, lambda )

**Description:** Returns the probability that an extended generalized gamma distributed random variable (with parameters mu, sigma, and lambda) is less than x.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
mu = 0;
sigma = 1;
lambda = 1;
New Window( "Example: GenGamma Distribution",
	gdey = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -10, 20 ),
		XName( "y" ),
		Pen Color( "red" );
		Y Function( GenGamma Distribution( y, mu, sigma, lambda ), y );
		Text( {-9, 0.9}, "\!U03BC=", Round( mu, 4 ), " \!U03C3=", Round( sigma, 4 ) );
		Text( {-9, 0.8}, "\!U03BB=", Round( lambda, 4 ) );
	),
	H List Box( Slider Box( -5, 5, mu, gdey << reshow ), Text Box( "\!U03BC" ) ),
	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( "\!U03C3" ) ),
	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( "\!U03BB" ) )
);

```

### GenGamma Quantile

**Syntax:** q = GenGamma Quantile( p, mu, sigma, lambda )

**Description:** Returns the quantile from an extended generalized gamma distribution (with parameters mu, sigma, and lambda), the value for which the probability is p that a random value would be lower.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
mu = 0;
sigma = 1;
lambda = 1;
p = 0.4;
New Window( "Example: GenGamma Quantile",
	gdey = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -10, 20 ),
		XName( "y" ),
		Pen Color( "red" );
		Y Function( GenGamma Distribution( x, mu, sigma, lambda ), x );
		Pen Color( "Blue" );
		V Line( GenGamma Quantile( p, mu, sigma, lambda ), 0, 1 );
		Text(
			{-9, 0.9},
			"\!U03BC=",
			Round( mu, 4 ),
			" \!U03C3=",
			Round( sigma, 4 ),
			" \!U03BB=",
			Round( lambda, 4 )
		);
		Text( {-9, 0.8}, "p=", Round( p, 3 ) );
		Text(
			{-9, 0.7},
			"quantile= ",
			Round( GenGamma Quantile( p, mu, sigma, lambda ), 2 )
		);
	),
	H List Box( Slider Box( -2, 2, mu, gdey << reshow ), Text Box( "\!U03BC" ) ),
	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( "\!U03C3" ) ),
	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( "\!U03BB" ) ),
	H List Box( Slider Box( 0.01, 0.99, p, gdey << reshow ), Text Box( " p" ) )
);

```

### Get Addin

**Syntax:** Get Addin( ID )

**Description:** Retrieves a registered add-in specified by its ID.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
addin = Get Addin( "com.mycompany.myaddin" );

```

### Get Addins

**Syntax:** Get Addins( )

**Description:** Returns a list of all registered add-ins.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
addins = Get Addins();
addin ids = Get Addins() << id;
Show( addins, addin ids );

```

### Get Addr Info

**Syntax:** Get Addr Info( string )

**Description:** Looks up the numeric address for a name. In most cases the name should be used for future IPV6 compatibility.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Get Addr Info( "www.jmp.com" )[3][4];

```

### Get Class Names

**Syntax:** Get Class Names( < <class reference>, ... > )

**Description:** Returns a list of names of all currently defined classes.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
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

**Syntax:** Get Classes( < <class reference>, ... > )

**Description:** Returns a list of references to all currently defined classes

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
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

### Get Clipboard

**Syntax:** Get Clipboard()

**Description:** Get the current contents of the clipboard

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Get Clipboard();

```

### Get Color Theme Detail

**Syntax:** script = Get Color Theme Detail(name)

**Description:** Returns the script for a given color theme name

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Get Color Theme Detail( "JMP Default" );

```

### Get Color Theme Names

**Syntax:** {list of names} = Get Color Theme Names(<kind>)

**Description:** Returns a list of color theme strings which match the optional parameter kind. kind is one of the following: "continuous", "categorical", "sequential", "diverging", "qualitative", or "chromatic".

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Get Color Theme Names();

```

**Example 2**

```js

Names Default To Here( 1 );
Get Color Theme Names( "sequential" );

```

### Get Custom Functions

**Syntax:** Get Custom Functions(<{function 1 full name, function 2 full name, ...} | function full name>)

**Description:** Get a list of custom functions

**JMP Version Added:** 14

**Example 1**

```js

Names Default To Here( 1 );
Get Custom Functions();

```

**Example 2**

```js

Names Default To Here( 1 );
Get Custom Functions( {"custom:Add", "custom:Sub"} );

```

### Get Data Table

**Syntax:** dt = Get Data Table( <Project(title|index|box|window)>, name|index )

**Description:** Returns a reference to the specified data table.



The search is limited to tables in the current project (or no project when not running the script in a project).



To specify a project, use the optional Project() argument with a title, index, display box, or window object. Use Project(0) to specify no project when running the script in a project.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Cars.jmp" );
Get Data Table( 1 );

```

### Get Data Table List

**Syntax:** tableList = Get Data Table List( <Project(title|index|box|window)> )

**Description:** Returns a list of all open data tables.



The list is limited to tables in the current project (or no project when not running the script in a project).



To specify a project, use the optional Project() argument with a title, index, display box, or window object. Use Project(0) to specify no project when running the script in a project.

**JMP Version Added:** 14

**Example 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Cars.jmp" );
Get Data Table List();

```

**Example 2**

```js

Names Default To Here( 1 );
project = Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );
Get Data Table List( Project( project ) );

```

### Get Default Directory

**Syntax:** y = Get Default Directory()

**Description:** Returns the JMP default directory, which is used as a base for subsequent relative paths. This path is the directory containing the currently executing script if the script is saved.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Show( Get Default Directory() );
Set Default Directory( "$SAMPLE_DATA" );
Show( Get Default Directory() );

```

### Get Environment Variable

**Syntax:** value = Get Environment Variable( string )

**Description:** Returns the value of the specified environment variable from the operating system.



NOTE: On the Macintosh operating system, the variable name is case-sensitive.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Get Environment Variable( "PATH" );

```

### Get Excel Worksheets

**Syntax:** list = Get Excel Worksheets("filepath")

**Description:** Returns a list of worksheets within an Excel Workbook

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
sheetList = Get Excel Worksheets( "$SAMPLE_IMPORT_DATA\Team Results.xlsx" );
Show( sheetList );

```

### Get Expr Location

**Syntax:** Get Expr Location(<expression>, [{"TokenStartLine"|"TokenStartCol"|"TokenStart"|"TokenLength"|"TreeStart"|"TreeEnd"|"TreeLength"}+]

**Description:** Retrieve the locations of the top token in a parsed expression. The default invocation returns {the source file, TokenStartLine, TokenStartCol, TokenLength}.

**JMP Version Added:** 17

**Default output**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
e = Parse( ":height + 20" );
Get Expr Location( e );

```

**Replace a substring**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
data = " :height + 20 ";
e = Parse( data );
positions = Get Expr Location( Arg( e, 2 ), {"TreeStart", "TreeLength"} );
Munger( data, positions[1], positions[2], "45" );

```

**Select output**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
e = Parse( " :height + 20 " );
Get Expr Location( e, {"TreeStart", "TreeEnd"} );

```

### Get File Search Path

**Syntax:** y = Get File Search Path()

**Description:** Returns the current list of directories to search for opening files.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Get File Search Path();

```

### Get Locale Setting

**Syntax:** value = Get Locale Setting( settingName )

**Description:** Retrieves a locale setting such as decimal separator

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
Get Locale Setting( "Decimal Separator" );

```

### Get Log

**Syntax:** list = Get Log( <N> )

**Description:** Returns a list of lines from the log. If no argument is specified, all the lines from the log are returned. If the numeric argument N is positive, the first N lines from the log are returned. If N is negative, the last N lines from the log are returned. If N is zero, no lines are returned.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
all contents = Get Log();
headcontents = Get Log( 10 );
tailcontents = Get Log( -5 );

```

### Get Name Info

**Syntax:** Get Name Info( string )

**Description:** Looks up the name for a numeric address. In most cases the name should be used for future IPV6 compatibility.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Get Name Info( "149.173.5.120" )[3][4];

```

### Get Namespace Names

**Syntax:** Get Namespace Names( < <namespace reference>, ... > )

**Description:** Returns a list of names of all currently defined namespaces.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
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

**Syntax:** Get Namespaces( < <namespace reference>, ... > )

**Description:** Returns a list of references to all currently defined namespaces

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
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

### Get Notebook List

**Syntax:** notebookList = Get Notebook List()

**Description:** Returns a list of all open notebooks.

**JMP Version Added:** 19

### Get OAuth2 Grant Types

**Syntax:** Get OAuth2 Grant Types

**Description:** Gets the supported JMP OAuth2 grant types.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );

/*
https://oauth.net/2/grant-types/
*/
grant_types = Get OAuth2 Grant Types();
Show( grant_types );

```

### Get OpenID Connect Discovery

**JMP Version Added:** 15

```js

Names Default To Here( 1 );

url = "https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration";
aa = Get OpenID Connect Discovery( url );
Show( aa );

```

### Get OpenIDC Discovery

**JMP Version Added:** 15

### Get Path Variable

**Syntax:** value = Get Path Variable( name )

**Description:** Returns the value of a path variable, which is a name like SAMPLE_DATA that is substituted for when found in pathnames.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Get Path Variable( "SAMPLE_DATA" );
/* try: SAMPLE_DATA, SAMPLE_IMPORT_DATA, SAMPLE_SCRIPTS
See full listing of Path Variables in the other example
See also Convert File Path() and Set Path Variable() */

```

**Listing**

```js

Names Default To Here( 1 );
// Run for a Path Variable listing
path vars = {"SAMPLE_DATA", "DESKTOP", "DOCUMENTS", "DOWNLOADS", "TEMP", "HOME",
"USER_APPDATA", "ALL_HOME", "BUILTIN_SCRIPTS", "SAMPLE_APPS", "SAMPLE_DASHBOARDS",
"SAMPLE_IMAGES", "SAMPLE_IMPORT_DATA", "SAMPLE_PROJECTS", "SAMPLE_SCRIPTS"};
path vars ||= Transform Each( {id}, Get Addins() << ID,
	Eval Insert( "ADDIN_HOME(^id^)" )
);
path vars = Filter Each( {var}, path vars, Directory Exists( Get Path Variable( var ) ) );

New Window( "Path Variables",
	<<Type( "Dialog" ),
	Outline Box( "Path Variables",
		H List Box(
			Button Box( "Open Paths",
				For Each( {row}, tbl << Get Selected Rows, {path},
					path = tbl[String Col Box( 2 )] << Get( row );
					Open( path );
				)
			),
			Button Box( "Copy Paths",
				If( N Items( tbl << Get Selected Rows ),
					Set Clipboard(
						Concat Items(
							Transform Each( {row}, tbl << Get Selected Rows,
								Output( "List" ),
								tbl[String Col Box( 2 )] << Get( row )
							),
							"\!N"
						)
					)
				)
			)
		),
		window:tbl = Table Box(
			String Col Box( "Variable", path vars ),
			String Col Box( "Path",
				Transform Each( {var}, path vars, Get Path Variable( var ) )
			),
			<<Set Selectable Rows
		)
	)
);

```

### Get Platform Preference

**Syntax:** Get Platform Preferences( < platformName < ( optionName, ... ) > ... > )

**Description:** Gets platform preferences as specified.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Get Platform Preferences( Bivariate( Fit Line ), DOE );

```

### Get Platform Preferences

**Syntax:** Get Platform Preferences( < platformName < ( optionName, ... ) > ... > )

**Description:** Gets platform preferences as specified.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Get Platform Preferences( Bivariate( Fit Line ), DOE );

```

### Get Policies

**Syntax:** Get Policies( <Machine|User|Both> )

**Description:** Returns an associative array containing the current policy names and values.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Get Policies();

```

### Get Policy

**Syntax:** Get Policy( "PolicyName" )

**JMP Version Added:** 18

### Get Preference

**Syntax:** Get Preferences( pref1, ... )

**Description:** Gets preferences as specified.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Get Preferences( Graph marker size );

```

### Get Preferences

**Syntax:** Get Preferences( pref1, ... )

**Description:** Gets preferences as specified.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Get Preferences( Graph marker size );

```

### Get Project

**Syntax:** project = Get Project( title|index|box|window )

**Description:** Returns a reference to a specific open project by title, index, or box.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_PROJECTS/Big Class.jmpprj" );
Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );
                             
Print( Get Project( 2 ) << Get Window Title() );

```

**Example 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_PROJECTS/Big Class.jmpprj" );
Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );
                             
project = Get Project( "Big Class" );

```

### Get Project List

**Syntax:** projectList = Get Project List()

**Description:** Returns a list of all open projects.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Project();
Open( "$SAMPLE_PROJECTS/Big Class.jmpprj" );
                             
Print( Get Project List() << Get Window Title() );

```

### Get Punctuation Characters

**Syntax:** Get Punctuation Characters(<Exclude Chars(chars) | Include Chars(chars)>)

**Description:** Returns a string containing the punctuation characters that are typically used for delimiting words. These include ,:;.?!\/#@&~()[]<>"*`%$+=^|{} and some common Unicode punctuation.

**JMP Version Added:** 15

**Example 1**

```js

Names Default To Here( 1 );
Get Punctuation Characters();

```

**Example 2**

```js

Names Default To Here( 1 );
Get Punctuation Characters( Include Chars( "_" ) );

```

**Example 3**

```js

Names Default To Here( 1 );
Get Punctuation Characters( Exclude Chars( "$[]" ) );

```

**Example 4**

```js

Names Default To Here( 1 );
Collapse Whitespace(
	Substitute( "This...string..has..dots",
		Items( Get Punctuation Characters(), "" ), " "
	)
);

```

### Get Session Script

**Syntax:** Get Session Script( win1, ... )

**Description:** Returns the session script for the specified windows. The session script is a JSL expression that will recreate the given windows, including data tables, script windows, journals, and reports. Reports created via JSL scripts have limited support, and will only attempt to recreate the display layout.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << RunScript( "Bivariate" );
Get Session Script( Report( biv ) );

```

### Get Whitespace Characters

**Syntax:** Get Whitespace Characters()

**Description:** Returns a string containing all of the whitespace characters that are typically used.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Get Whitespace Characters();

```

### Get Window

**Syntax:** window = Get Window( <Project(title|index|box|window)>, <Type(string)>, title|index|box )

**Description:** Returns a reference to a specific open window by title, index, or box.



The search is limited to windows in the current project (or no project when not running the script in a project).



To specify a project, use the optional Project() argument with a title, index, display box, or window object. Use Project(0) to specify no project when running the script in a project.



Use the optional Type() argument with one of "Data Tables", "Journals", "Reports", or "Dialogs" to limit the search to windows of a particular type.

**JMP Version Added:** 14

**Example 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA\Big Class.jmp" );
                                        
window = Get Window( "Big Class" );

```

**Example 2**

```js

Names Default To Here( 1 );
project = Open( "$SAMPLE_PROJECTS\Big Class.jmpprj" );
                             
window = Get Window( Project( project ), "Big Class" );

```

### Get Window List

**Syntax:** windowList = Get Window List( <Project(title|index|box|window)>, <Type(string)> )

**Description:** Returns a list of all open windows.



The list is limited to windows in the current project (or no project when not running the script in a project).



To specify a project, use the optional Project() argument with a title, index, display box, or window object. Use Project(0) to specify no project when running the script in a project.



Use the optional Type() argument with one of "Data Tables", "Journals", "Reports", or "Dialogs" to limit the list to windows of a particular type.

**JMP Version Added:** 14

**Example 1**

```js

Names Default To Here( 1 );
Print( Get Window List() << Get Window Title() );

```

**Example 2**

```js

Names Default To Here( 1 );
project = Open( "$SAMPLE_PROJECTS\Big Class.jmpprj" );
                             
Print( Get Window List( Project( project ) ) << Get Window Title() );

```

**Example 3**

```js

Names Default To Here( 1 );
project = Open( "$SAMPLE_PROJECTS\Big Class.jmpprj" );
                             
Print(
	Get Window List( Project( project ), Type( "Data Tables" ) ) << Get Window Title()
);

```

### Global Box

**Syntax:** box = Global Box( name )

**Description:** Creates a display box showing the value of a global variable.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
ex = .6;
New Window( "Example", Global Box( ex ) );

```

### Glue

**Syntax:** y = ( expr1; expr2; ... ); y = Glue( expr1, expr2, ... )

**Description:** Evaluates each argument and returns the last result.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
ex1 = 1;
ex2 = 2;

```

### Google Sheet Export

**Syntax:** Google Sheet Export(dt, Email(address), Spreadsheet(url|id) | New Spreadsheet(name), Sheet Name(name))

**Description:** Exports a Data Table to a new Google Spreadsheet or a new Sheet within an existing Google Spreadsheet.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
email = "youremail@gmail.com"; //Replace this with your email
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Google Sheet Export(
	dt,
	Email( email ),
	New Spreadsheet( "JSL Example" ),
	Sheet Name( "Example 1" )
);

```

### Google Sheet Import

**Syntax:** Google Sheet Import(Email(address), Spreadsheet(url|id), <Sheets("sheetName1", ... "sheetNameN")>, <Sheet Settings( Has Column Headers(Boolean), Data Starts on Row(n), Cell Range(range), Import Cell Colors(Boolean), Supress Empty Columns(Boolean))>)

**Description:** Opens a Google Sheet file.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
email = "youremail@gmail.com"; //Replace this with your email
spreadsheet =
"https://docs.google.com/spreadsheets/d/1AqV2ZkzzMtFrk-devlFdQW2Sb09ipOQaCQ1p0iho-iE/"; 
                                        
Google Sheet Import(
	Email( email ),
	Spreadsheet( spreadsheet ),
	Sheets( "Sheet1", "Sheet2" ),
	Sheet Settings(
		Has Column Headers( 0 ),
		Data Starts on Row( 1 ),
		Cell Range( "A1:C2" ),
		Import Cell Colors( 0 ),
		Suppress Empty Columns( 1 )
	)
);

```

### Gradient Function

**Syntax:** Gradient Function( zExpr, xName, yName, zLimits, zColor( color list or matrix ), < <<XGrid( min, max, incr )>, < <<YGrid( min, max, incr )>, < <<Transparency( t )> )

**Description:** Fills the graph with a gradient between two colors. The zExpr argument is a function in terms of the variables specified by xName and yName. The vector zLimits specifies the range of values for zExpr. The zColor argument is a vector or list that defines the two colors that are blended together to create the gradient. The Transparency is a single value applied to the entire grid.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Gradient Function(
			Log( a * a + b * b ),
			a,
			b,
			[2 10],
			Z Color( {"Green", "Orange"} )
		)
	)
);

```

### Graph

**Syntax:** y = Graph Box( props, script )

**Description:** Returns a display box containing a graph with axes. Named property arguments can be title("title"), XScale(low,high), YScale(low,high), FrameSize(h,v), XName("x"), yName("y"), DoubleBuffer, and SuppressAxes.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Frame Size( 300, 300 ),
		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
		Pen Color( "Blue" );
		Line( [10 30 70], [88 22 44] );
	)
);

```

### Graph 3D Box

**Syntax:** y = Graph 3D Box()

**Description:** (Experimental) Returns a display box with 3D content that can be used with other display boxes to create custom reports.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
x3d = Graph 3D Box(
	framesize( 300, 300 ),
	Xname( "X Axis" ),
	Yname( "Y Axis" ),
	Zname( "Z Axis" )
);
New Window( "Graph3DBox Example", x3d );
x3d << addmarkers( /*x*/[20 20 20 20], /*y*/[20 20 20 20], /*z*/[10 20 30 40] );
x3d << AddVector(
	[60 60 60]/*from*/,
	[90 60 60, 60 90 60, 60 60 90]/*to*/,
	ShaftThickness( [.1] ),
	FromThickness( [.2] ),
	ToThickness( [.3] ),
	ShaftColor( [-255] ),
	FromColor( [-16711680] ),
	ToColor( [-65280] ),
	Facets( Round ),
	FromCap( Sphere ),
	toCap( Point )
);

```

### Graph Box

**Syntax:** y = Graph Box( props, script )

**Description:** Returns a display box containing a graph with axes. Named property arguments can be title("title"), XScale(low,high), YScale(low,high), FrameSize(h,v), XName("x"), yName("y"), DoubleBuffer, and SuppressAxes.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Frame Size( 300, 300 ),
		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
		Pen Color( "Blue" );
		Line( [10 30 70], [88 22 44] );
	)
);

```

### Greater

**Syntax:** z = x > y > ... ; z = Greater( x, y, ... )

**Description:** Returns 1 if each argument is greater than the next argument; returns 0 otherwise.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
3 > 2 > 1;

```

### Greater or Equal

**Syntax:** z = x >= y >= ... ; z = Greater or Equal( x, y, ... )

**Description:** Returns 1 if each argument is greater than or equal to the next argument; returns 0 otherwise.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
3 >= 2 >= 2;

```

### Gzip Compress

**Syntax:** blob = Gzip Compress( blob )

**Description:** Compresses a blob of data into a gzip blob.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
Gzip Compress(
	Char To Blob( "random data does not usually compress well and may get larger" )
);

```

### Gzip Uncompress

**Syntax:** blob = Gzip Uncompress( blob )

**Description:** Uncompresses a blob of gzip data into a blob.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
Gzip Uncompress(/*typically this data might come from GzipCompress() but might also come from a .gz file using loadTextFile with the blob option*/
	Char To Blob(
		"~1F~8B~08~00~00~00~00~00~00~0A~0D~CA~C1~0D~00~21~08~04~C0V~B6~B5~CDA~FC~80~5C~00c~EC^~E7=~C9)~E1~106~21~A1~85~19~8DU~8Bf~07_~F8~9FZ~85~ADfx~13~CE~83~A1~0Dc~0E~CD~0B~94*~16~1E=~00~00~00",
		"ascii~hex"
	)
);

```

### H Center Box

**Syntax:** y = H Center Box( <childbox> )

**Description:** Returns a display box with the childbox display box argument centered in the horizontal space defined by the maximum size of that child and all the other siblings of the center box.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "test",
	H List Box(
		V Center Box( Text Box( "V+V" ) ),
		V List Box(
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			H Center Box( Text Box( "H+H" ) ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" )
		)
	)
);

```

### H Direct Product

**Syntax:** y = H Direct Product( A, B )

**Description:** Returns the horizontal direct product, which is the direct product of each row of matrices A and B.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
exA = [1 2, 3 4];
exB = [1 1 1, 2 2 2];
exProd = H Direct Product( exA, exB );
Show( exProd );

/* verify result */
Show( exProd[1, 1 :: 6] == Direct Product( exA[1, 1 :: 2], exB[1, 1 :: 3] ) );
Show( exProd[2, 1 :: 6] == Direct Product( exA[2, 1 :: 2], exB[2, 1 :: 3] ) );

```

### H Line

**Syntax:** H Line( y ); H Line( x1, x2, y )

**Description:** Draws a horizontal line at y from x1 to x2 or through the entire frame.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Size( 2 );
		H Line( 10, 50, 20 );
	)
);

```

### H List Box

**Syntax:** y = H List Box( <Align( center|bottom )>, displayBox, ... )

**Description:** Returns a display box that arranges the display boxes provided by the arguments in a horizontal layout. The <<Hold message tells the sheet to own the report(s) that will be excerpted. The optional Align argument allows for bottom or center alignment of the contents inside the display box.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Picker",
		H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
	)
);

```

### H Scroll Box

**Syntax:** y = H Scroll Box( <Size( x )>, displayBox )

**Description:** Returns a display box that positions a larger child box using a horizontal scroll bar.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Picker",
		H Scroll Box(
			Size( 200 ),
			H List Box(
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
			),
			<<Set Stretch( "Window", "Window" )
		)
	)
);

```

### H Sheet Box

**Syntax:** y = H Sheet Box( <<Hold( rpt ), displayBox, ... )

**Description:** Returns a display box that arranges the display boxes provided by the arguments in a horizontal layout. The <<Hold message tells the sheet to own the report(s) that will be excerpted. The optional Align argument allows for right or center alignment of the contents inside the display box.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	V Sheet Box(
		<<Hold( Bivariate( Y( :weight ), X( :height ), Fit Line() ) ),
		<<Hold(
			Distribution(
				Automatic Recalc( 1 ),
				Continuous Distribution(
					Column( :height ),
					Horizontal Layout( 1 ),
					Vertical( 0 ),
					Outlier Box Plot( 0 )
				)
			)
		),
		<<Hold( Treemap( Categories( :age ) ) ),
		<<Hold(
			Bubble Plot(
				X( :height ),
				Y( :weight ),
				Sizes( :age ),
				Coloring( :sex ),
				Circle Size( 6.226 ),
				All Labels( 0 )
			)
		),
		H Sheet Box(
			Sheet Part( "weight by height", Excerpt Box( 1, {Picture Box( 1 )} ) ),
			Sheet Part( "height", Excerpt Box( 2, {Picture Box( 1 )} ) )
		),
		H Sheet Box(
			Sheet Part( "", Excerpt Box( 3, {Picture Box( 1 )} ) ),
			Sheet Part( "height by weight", Excerpt Box( 4, {Picture Box( 1 )} ) )
		)
	)
);

```

### H Size

**Syntax:** h = H Size()

**Description:** Returns the horizontal size of the graphics frame in pixels.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Size( H Size() / 20 );
		Line( [10 30 90], [88 22 44] );
	)
);

```

### H Splitter Box

**Syntax:** y = H Splitter Box( <Size(x,y)>, displayBox, ... )

**Description:** Returns a display box that arranges other display boxes horizontally, with interactive control of sizes. Child sizes are specified as a proportion of the width or height of the Splitter Box. The optional Size argument is only used for the top-most Splitter Box; lower level boxes are sized like any other child box.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Splitter",
	V Splitter Box(
		Size( 800, 600 ),
		H Splitter Box( graph = Graph Box(), Script Box(), <<Sizes( {0.6, 0.4} ) ),
		H Splitter Box(
			pict = Picture Box( Open( "$SAMPLE_IMAGES/tile.jpg", jpg ) ),
			spacer = Spacer Box(),
			<<Sizes( {0.4, 0.6} )
		)
	)
);
graph[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
pict << Set Min Size( 100, 100 );
pict << Set Max Size( 500, 500 );
pict << Set Stretch( "Window", "Window" );
spacer << Set Fill( 1 );
spacer << Color( "Red" );
spacer << Set Stretch( "Window", "Window" );

```

### HLS Color

**Syntax:** y = HLS Color( h, l, s ); y = HLS Color( {h, l, s} )

**Description:** Returns a color number from the hue, lightness, and saturation components, all between 0 and 1.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Color Wheel",
	Graph(
		frameSize( 200, 200 ),
		For( hue = 0, hue < 360, hue += 30,
			y = 50 - 40 * Cos( hue * 2 * Pi() / 360 );
			x = 50 + 40 * Sin( hue * 2 * Pi() / 360 );
			Fill Color( HLS Color( hue / 360, 0.5, 1 ) );
			Oval( x - 10, y - 10, x + 10, y + 10, 1 );
		)
	)
);

```

### HP Time

**Syntax:** t = HP Time()

**Description:** Returns a High Precision time value in microseconds. Only useful relative to another HP Time() value. The time value represents the number of microseconds since the start of the JMP session.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
bt = HP Time();
Open( "$SAMPLE_DATA/Big Class.jmp" );
et = HP Time();
it = et - bt;
Show( it );

```

### Hadamard

**Syntax:** y = Hadamard( n, <normalize = 0> )

**Description:** Creates a Hadamard matrix of order n.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
Show( Hadamard( 12 ), Hadamard( 12, 1 ) );

```

### Handle

**Syntax:** Handle( xPos, yPos, dragScript, <mouseUpScript> )

**Description:** Draws a square marker at the coordinates specified by xPos and yPos and repeatedly evaluates the dragScript expression when the mouse is pressed over the marker. Before running the script, the globals x and y are set to the mouse value and are restored to their original values afterward. The mouseUpScript expression is run after the mouse button is released.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	exx = 20;
	exy = 50;,
	Graph Box(
		Frame Size( 200, 200 ),
		Handle(
			exx,
			exy,
			exx = x;
			exy = y;
		);
		Circle( {0, 0}, Sqrt( exx * exx + exy * exy ) );
	)
);

```

### Head

**Syntax:** y = Head( x )

**Description:** Returns the head of the evaluated expression, without its arguments.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Head( Expr( Sum( a, b, c ) ) );

```

### Head Expr

**Syntax:** y = Head Expr( expr )

**Description:** Returns the head of the expression, without its arguments. This function is deprecated. Please use Head() instead.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
// See Example 2 for the deprecated Head Expr() equivalent
Head( Expr( Sum( a, b, c ) ) );

```

**Example 2**

```js

Names Default To Here( 1 );
// Deprecated
Head Expr( Sum( a, b, c ) );

```

### Head Name

**Syntax:** y = Head Name( x )

**Description:** Returns the head of the evaluated expression as a string, without its arguments.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Head Name( Expr( Sum( a, b, c ) ) );

```

### Head Name Expr

**Syntax:** y = Head Name Expr( expr )

**Description:** Returns the head of the expression as a string, without its arguments. This function is deprecated. Please use Head Name() instead.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
// See Example 2 for the deprecated Head Name Expr() equivalent
Head Name( Expr( Sum( a, b, c ) ) );

```

**Example 2**

```js

Names Default To Here( 1 );
// Deprecated
Head Name Expr( Sum( a, b, c ) );

```

### Heat Color

**Syntax:** y = Heat Color( x ); y = Heat Color( x, < <<theme> )

**Description:** Returns a color corresponding to a value between 0 and 1. Default theme is "Blue to Gray to Red". Any theme supported by Cell Plot is supported here. Matrix arguments supported.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Color Bar",
	Graph(
		For( z = 0, z < 1, z += .1,
			x = 10 + 80 * z;
			Fill Color( Heat Color( z, <<"Green to Black to Red" ) );
			Rect( x - 5, 45, x + 5, 55, 1 );
		)
	)
);

```

### Hex

**Syntax:** h = Hex( value, <"integer">|<encoding="utf-8">|<Base(number)>,<Pad To(number)> )

**Description:** Returns the hexadecimal (or other base number system) text corresponding to the given value and encoding, which can be a number a string or a blob. If the value is a number, IEEE 754 64-bit encoding is used unless one of the optional arguments, integer or Base, is provided. If Base is specified, the function returns the text corresponding to the specified number in that base number system instead of hexadecimal. The base must be an integer value between 2 and 36 inclusive. Supported encodings include utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, ascii~hex, shift_jis and euc-jp.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Hex( 1024, "integer" ) || " " || Hex( "Café", "utf-16be" ) || " " ||
Hex( 11, Base( 2 ), Pad To( 8 ) );

```

### Hex To Blob

**Syntax:** blob = Hex To Blob( hex string )

**Description:** Makes a BLOB (Binary Large OBject) from the given string of hexadecimal codes, which can also include spaces, commas, carriage returns, and line feeds.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Hex To Blob( "FF78CE" );

```

### Hex To Char

**Syntax:** s = Hex To Char( hextext, <encoding="utf-8"> )

**Description:** Returns the text corresponding to the hexadecimal text, using the specified encoding. Supported encodings include utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, ascii~hex, shift_jis, and euc-jp.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Hex To Char( "436166C3A9" ) || Hex To Char( "00430061006600E9", "utf-16be" );

```

### Hex To Number

**Syntax:** x = Hex To Number( hextext, <Base(number)> )

**Description:** Returns the number corresponding to the hexadecimal (or other base number system) text. 16 hex digits are converted as IEEE 754 64-bit floating point numbers; otherwise the input is treated as a hex integer. If Base is specified, the text is treated as a string representing the number in that base. Base must be an integer between 2 and 36 inclusive.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Hex To Number( "11110000", Base( 2 ) );

```

### Hidden

**Syntax:** y = Hidden( <rs> ); Hidden( <Row State( <r> )> ) = y

**Description:** Returns the hidden component of the specified row state value, 0 or 1. If Hidden is used as an L-value, it changes the hidden state of the current (or rth) row in the current data table.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Hidden State( 1 );
Hidden( Row State( 3 ) );
Row() = 3;
Hidden();

```

### Hidden State

**Syntax:** rs = Hidden State( x )

**Description:** Returns a row state value with the hidden component set to the specified value.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Hidden State( 1 );
Hidden( Row State( 3 ) );

```

### Hier Box

**Syntax:** y = Hier Box( text, Hier Box( ... ), Hier Box( ... ), ... )

**Description:** Returns a display box for hierarchy trees. The text argument is the node&apos;s name and can be a Text Edit Box.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Hier Box(
		Text Edit Box( "Cause 1" ),
		Hier Box( Text Edit Box( "Subcause 1.1" ), <<direction( 1 ) ),
		Hier Box( Text Box( "Subcause 1.2" ) ),
		<<Change Type( Fishbone ),
		<<direction( 1 )
	)
);

```

### Hier Clust

**Syntax:** {c1, c2, c3, c4, c5} = Hier Clust( x )

**Description:** Returns the clustering history for a hierarchical clustering using Ward&apos;s method (without standardizing data), where x is a data matrix.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
exdt = Open( "$SAMPLE_DATA/Body Measurements.jmp" );
ex = exdt << get as matrix();
exhc = Hierarchical Cluster(
	Y( Eval( exdt << Get Column Names ) ),
	Method( Ward ),
	Standardize( 0 ),
	Dendrogram Scale( Even Spacing ),
	Number of Clusters( 3 )
);
Report( exhc )["Dendrogram"] << Close( 1 );
Report( exhc )["Clustering History"] << Close( 0 );
exhistory = Hier Clust( ex );
exhistory[3, 1];

```

### Hist Seg

**Syntax:** b = Hist Seg([data], <[freq data]>,<[weight data]>, <vertical=0|1>, <Row States()>)

**Description:** Returns a hist seg

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, .2 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);

```

### Host is

**Syntax:** y = Host is( "Mac"|"Windows")

**Description:** Returns 1 if the JMP application matches the argument; returns 0 otherwise. The arguments Windows or Mac test for the specified operating system, and the arguments Bits32 or Bits64 test for the specified 32-bit or 64-bit JMP application. Only one argument can be tested at a time.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
If( Host is( "Mac" ),
	"Can't use Load DLL()."
);

```

### Hough Line Transform

**Syntax:** accum = Hough Line Transform( matrix, <NAngle(number)> <NRadius(number)> )

**Description:** Returns the Hough transform for detecting lines in image data

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
xx = .4;
yy = .4;
angleDegrees = (1 :: 180)`;
angle = Pi() * angleDegrees / (180);
New Window( "Hough Transform Demo 1",
	Border Box( Left( 20 ), Top( 20 ), Right( 15 ), Bottom( 15 ),
		V List Box(
			Text Box( "Click and drag the circle in a straight line." ),
			Graph Box(
				X Scale( -1, 1 ),
				Y Scale( -1, 1 ),
				Circle( {xx, yy}, .05 );
				Text( {xx + .1, yy + .1}, Char( xx, 4 ) || " " || Char( yy, 4 ) );
				Mousetrap(
					xx = x;
					yy = y;
					gb << reshow;
				);
			),
			Text Box( "For angle 1 to 180 , x*Cos(angle)+y*Sin(angle)" ),
			Text Box( "What position stays constant as you move?" ),
			gb = Graph Box(
				X Scale( 0, 180 ),
				XName( "Angle" ),
				Y Scale( -1.5, 1.5 ),
				YName( "Distance to Line" ),
				Line( angleDegrees, xx * Cos( angle ) + yy * Sin( angle ) )
			)
		)
	)
);

```

**Example 2**

```js

Names Default To Here( 1 );
nRow = 35;
nCol = 35;

// Make a wafer template missing outside a radius
waferTemplate = J( nRow, nCol, 0 );
If( 0,
	For( i = 1, i <= nRow, i++,
		For( j = 1, j <= nCol, j++,
			If( (i - nrow / 2) ^ 2 + (j - nCol / 2) ^ 2 > ((nRow + nCol) / 4) ^ 2,
				waferTemplate[i, j] = .
			)
		)
	)
);
wafer = waferTemplate;
wafer[5, 22] = 1;
lightGray = RGB Color( .9, .9, .9 );
showWafer = Expr(
	For( i = 1, i <= nRow, i++,
		For( j = 1, j <= nCol, j++,
			z = wafer[i, j];
			If( Is Missing( z ),
				Continue()
			);
			Fill Color( If( z == 0, lightGray, 3 ) );
			Rect( i - nrow / 2, j - nCol / 2, i - nrow / 2 - 1, j - nCol / 2 + 1, 1 );
		)
	)
);
showHough = Expr(
	accum = Hough Line Transform( wafer );
	maxAccum = Max( Max( accum ), 1 );
	accumHeat = Heat Color( accum / maxAccum );
	nr = N Row( accum );
	nc = N Col( accum );
	For( i = 1, i <= nr, i++,
		For( j = 1, j <= nc, j++,
			z = accumHeat[i, j];
			Fill Color( z );
			Rect( j - 1, nr - i, j, nr - i + 1, 1 );
		)
	);
    //Marginals
	radiusDensity = V Max( accum` );
	radiusScale = 3 * Max( radiusDensity ) / Mean( radiusDensity );
	radiusColor = Heat Color( radiusDensity / radiusScale );
	If( 1,
		angleDensity = V Max( accum );
		angleScale = 3 * Max( angleDensity ) / Mean( angleDensity );
		angleColor = Heat Color( angleDensity / angleScale );
	,
		angle1 = angleDensity - Mean( angleDensity );
		angle1 = angle1 :* (angle1 > 0);
		angleColor = Heat Color( angle1 / Max( angle1 ) );
	);
	For( j = 1, j <= nc, j++,
		Fill Color( angleColor[j] );
		Rect( j - 1, -5, j, -8, 1 );
	);
	For( i = 1, i <= nr, i++,
		Fill Color( radiusColor[i] );
		Rect( 185, nr - i, 190, nr - i + 1, 1 );
	);
);
mouseAction = Expr(
	i = Floor( x + nrow / 2 + .5 );
	j = Floor( y + ncol / 2 + .5 );
	If( i > 0 & i <= nRow & j > 0 & j <= nCol,
		wafer[i, j]
		++);
	bothBox << reshow;
);
New Window( "Hough Transform Demo 2",
	Border Box( Left( 15 ), Top( 15 ), Right( 10 ), Bottom( 10 ),
		bothBox = V List Box(
			Text Box( "Click to add points in the top frame along a slanted line." ),
			Text Box( "The Hough transform is shown below with marginal densities." ),
			Text Box( "" ),
			H List Box(
				Button Box( "Clear",
					wafer = waferTemplate;
					bothBox << Reshow;
				),
				Button Box( "Add Random",
					wafer = wafer | J( nRow, nCol, Random Uniform() < .05 );
					bothBox << Reshow;
				)
			),
			waferBox = Graph Box(
				X Scale( -18, 18 ),
				Y Scale( -18, 18 ),
				FrameSize( 300, 300 ),
				XName( "Angle" ),
				YName( "Radius" ),
				Mousetrap( mouseAction ),
				showWafer
			),
			houghBox = Graph Box(
				X Scale( 0, 190 ),
				Y Scale( -10, 50 ),
				FrameSize( 500, 200 ),
				showHough
			)
		)
	)
);

```

### Hour

**Syntax:** hr = Hour( datetime, <12> )

**Description:** Returns the hours part of a date-time value, in 12-hour mode (12, 1 - 11) or 24-hour mode (0 - 23).

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Hour( Today() );

```

### Hue State

**Syntax:** rs = Hue State( x )

**Description:** Returns a row state value with the color hue component set to the specified value. Needs to be combined with a Shade State() value to produce a valid color.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Combine States( Hue State( 5 ), Shade State( 1 ) );

```

### Hypergeometric Distribution

**Syntax:** cumprob = Hypergeometric Distribution( N, K, n, x, <r> )

**Description:** Returns the probability that a hypergeometrically distributed random variable is less than or equal to x, where N is the population size, K is the number of items in the category of interest, n is the sample size, x is the count of interest, and r is the optional odds ratio.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
exhdK = 10;
exhdn = 10;
New Window( "Example: Hypergeometric Distribution",
	exy = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, 21 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( exhdx = 0, exhdx < Round( exhdn ), exhdx++,
			H Line(
				exhdx,
				exhdx + 1,
				Hypergeometric Distribution( 20, Round( exhdK ), Round( exhdn ), exhdx )
			);
			V Line(
				exhdx + 1,
				Hypergeometric Distribution( 20, Round( exhdK ), Round( exhdn ), exhdx ),
				Hypergeometric Distribution(
					20,
					Round( exhdK ),
					Round( exhdn ),
					exhdx + 1
				)
			);
		);
		Text( {10, 0.17}, "N=", 20, " K=", Round( exhdK ), " n=", Round( exhdn ) );
	),
	H List Box( Slider Box( 0, 20, exhdK, exy << reshow ), Text Box( " K" ) ),
	H List Box( Slider Box( 0, 20, exhdn, exy << reshow ), Text Box( " n" ) )
);

```

### Hypergeometric Probability

**Syntax:** prob = Hypergeometric Probability( N, K, n, x, <r> )

**Description:** Returns the probability that a hypergeometrically distributed random variable is equal to x, where N is the population size, K is the number of items in the category of interest, n is the sample size, x is the count of interest, and r is the optional odds ratio.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
exhdK = 10;
exhdn = 10;
New Window( "Example: Hypergeometric Probability",
	exhdy = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, 21 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( exhdx = 0, exhdx <= Round( exhdn ), exhdx++,
			V Line(
				exhdx,
				0,
				Hypergeometric Probability( 20, Round( exhdK ), Round( exhdn ), exhdx )
			)
		);
		Text( {10, 0.17}, "N=", 20, " K=", Round( exhdK ), " n=", Round( exhdn ) );
	),
	H List Box( Slider Box( 0, 20, exhdK, exhdy << reshow ), Text Box( " K" ) ),
	H List Box( Slider Box( 0, 20, exhdn, exhdy << reshow ), Text Box( " n" ) )
);

```

### IGamma

**Syntax:** p = Gamma Distribution( q, <alpha=1>, <scale=1>, <threshold=0> )

**Description:** Returns the probability that a Gamma distributed random variable is less than q, where the alpha shape parameter argument must be positive. IGamma() is an alias name to Gamma Distribution(). The Gamma Distribution() function is equivalent to Gamma(alpha,q)/Gamma(alpha).

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
gdialpha = Log( 1.5 );
New Window( "Example: Gamma Distribution",
	gdiy = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 12 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Gamma Distribution( gdiq, Exp( gdialpha ) ), gdiq );
		Text( {1, 0.9}, "\!U03B1=", Round( Exp( gdialpha ), 2 ) );
	),
	H List Box(
		Slider Box( Log( 0.1 ), Log( 12 ), gdialpha, gdiy << reshow ),
		Text Box( " \!U03B1" )
	)
);

```

### IRT Ability

**Syntax:** y = IRT Ability( Q1, ..., Qn, parmMatrix )

**Description:** Produces scores for the latent variable in an item response theory model with n binary items and a matrix of known parameters, specified by parmMatrix. The parameter matrix should contain as many rows as there are parameters in the model and as many columns as there are items in the analysis.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/MathScienceTest.jmp" );
obj = dt << Item Analysis( Y( :Q1, :Q2, :Q3, :Q4, :Q5 ), Model( "Logistic 2PL" ) );
obj << Save Ability Formula;
Column( dt, N Cols( dt ) ) << Get Formula;

```

**Example 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/MathScienceTest.jmp" );
mth = (dt << get as matrix)[0, Index( 2, 6 )];
mthlst = {};
i = Floor( Random Uniform( 1, N Rows( mth ) ) );
mthlst[1] = mth[i, 1] |/ mth[i, 2] |/ mth[i, 3] |/ mth[i, 4] |/ mth[i, 5];
mthlst[2] = IRT Ability(
	mth[i, 1],
	mth[i, 2],
	mth[i, 3],
	mth[i, 4],
	mth[i, 5],
	[0.28 1.93 1.9 1.67 1, -0.06 -0.55 0.5 -1.89 0.04]
);
mthlst;

```

### ISO Year

**Syntax:** yr = ISO Year( datetime )

**Description:** Returns the ISO Year of a date-time value. ISO Years correspond to ISO Weeks; they begin on the Monday of the first week containing at least four days.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
ISO Year( Today() );

```

### Icon Box

**Syntax:** Box = Icon Box( "Name" )

**Description:** Constructs a display box containing an icon, where the name argument can be a JMP icon name or a path to a an image.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
New Window( "Example",
	ex1 = Icon Box( "Popup" ),
	ex2 = Icon Box( "Locked" ),
	ex3 = Icon Box( "Labeled" ),
	ex4 = Icon Box( "Sub" ),
	ex5 = Icon Box( "Excluded" ),
	ex6 = Icon Box( "Hidden" ),
	ex7 = Icon Box( "Continuous" ),
	ex8 = Icon Box( "Nominal" ),
	ex9 = Icon Box( "Ordinal" )
);

```

**Example 2**

```js

Names Default To Here( 1 );
New Window( "Example with Path", ex = Icon Box( "$SAMPLE_IMAGES/pi.gif" ) );

```

### Identity

**Syntax:** y = Identity( n )

**Description:** Creates an n-by-n identity matrix, with ones on diagonal, zeros elsewhere.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Identity( 2 );

```

### If

**Syntax:** y = If( condition1, result1, <condition2, result2>, ..., <elseResult> )

**Description:** Evaluates the first of each pair of arguments and returns the evaluation of the result expression associated with the first condition argument that evaluates to a nonzero result. The condition arguments are evaluated in order. If all of the condition arguments evaluate to zero, the optional elseResult is evaluated and the result is returned. If no elseResult is specified, and none of the conditions are true, a missing value is returned. If all of the condition arguments evaluate to missing, a missing value is returned.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
If( Random Uniform() < 0.5,
	"heads",
	"tails"
);

```

### If Box

**Syntax:** box = If Box( 0|1, displayBoxArgs )

**Description:** Returns a display box that conditionally displays the specified display box arguments.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	H List Box(
		englishBox = If Box( 1, Text Box( "Good day" ) ),
		frenchBox = If Box( 0, Text Box( "Bon Jour" ) )
	)
);
Wait( 5 );
englishBox << Set( 0 );
frenchBox << Set( 1 );

```

### If Seg

**Syntax:** seg = If Seg(<state=0|1>)

**Description:** Returns a display seg that shows or hides display seg children.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example",
	g = Graph Box( If Seg( true, <<append( Lines Seg( lines ) ) ) )
);

```

### IfMZ

**Syntax:** y = IfMZ( condition1, result1, <condition2, result2>, ..., <elseResult> )

**Description:** Evaluates the first of each pair of arguments and returns the evaluation of the result expression associated with the first condition argument that evaluates to a nonzero result. The condition arguments are evaluated in order. If all condition arguments evaluate to zero or missing, the optional elseResult is evaluated and the result is returned. If no elseResult is specified, and none of the conditions are true, a missing value is returned. (IfMZ() is equivalent to If() where missing values for evaluated condition arguments are treated as zero.)

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
x = 1;
Show( IfMZ( x == 1, 10, x == 2, 20, 30 ) );
x = .;
Show( IfMZ( x == 1, 10, x == 2, 20, 30 ) );
x = .;
Show( If( x == 1, 10, x == 2, 20, 30 ) );

```

### IfMax

**Syntax:** y = IfMax( expr1, result1, expr2, result2, ..., <allMissingResult> )

**Description:** Evaluates the first of each pair of arguments, and returns the evaluation of the result expression associated with the maximum of the expressions. If there are ties, it returns the first maximum. If all expressions are missing, it returns Empty if an even number of arguments, or the last argument if odd. The test expressions must evaluate to numeric, but the result expressions can be anything.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
TomScore = 45;
JonScore = 47;
TimScore = 46;
highestScorer = IfMax( TomScore, "Tom", JonScore, "Jon", TimScore, "Tim", "Noone" );

```

### IfMin

**Syntax:** y = IfMin( expr1, result1, expr2, result2, ..., <allMissingResult> )

**Description:** Evaluates the first of each pair of arguments, and returns the evaluation of the result expression associated with the minimum of the expressions. If there are ties, it returns the first minimum. If all expressions are missing, it returns Empty if an even number of arguments, or the last argument if odd. The test expressions must evaluate to numeric, but the result expressions can be anything.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
TomScore = 45;
JonScore = 47;
TimScore = 46;
lowestScorer = IfMin( TomScore, "Tom", JonScore, "Jon", TimScore, "Tim", "Noone" );

```

### In Days

**Syntax:** y = In Days( <x=1> )

**Description:** Converts x from a number of days to the equivalent number of seconds.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
In Days( 1.5 );

```

### In Hours

**Syntax:** y = In Hours( <x=1> )

**Description:** Converts x from a number of hours to the equivalent number of seconds.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
In Hours( 0.5 );

```

### In Minutes

**Syntax:** y = In Minutes( <x=1> )

**Description:** Converts x from a number of minutes to the equivalent number of seconds.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
In Minutes( 1 );

```

### In Path

**Syntax:** b = In Path( x, y, pathMatrix|pathText )

**Description:** Returns 1 if the point (x,y) is in the given path, otherwise returns 0.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );

New Window( "Example",
	window:p = "M10 10 L52 10 L37 52 Z M20 16 L40 20 L35 40 Z";
	Graph Box(
		Fill Color( "light blue" );
		Path( window:p, 1 );
		For Each( {x}, 5 :: 55 :: 5,
			For Each( {y}, 5 :: 55 :: 5,
				Marker(
					Marker State( If( In Path( x, y, window:p ), "x", "circle" ) ),
					{x, y}
				)
			)
		);
	);
);

```

### In Polygon

**Syntax:** b = In Polygon( x, y, xMatrix, <yMatrix> )

**Description:** Returns 1 if the point (x,y) is in the polygon defined by the vector arguments, otherwise returns 0.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
In Polygon( 11, 22, [10 20 30], [10 30 20] );

```

### In Weeks

**Syntax:** y = In Weeks( <x=1> )

**Description:** Converts x from a number of weeks to the equivalent number of seconds.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
In Weeks( 1 );

```

### In Years

**Syntax:** y = In Years( <x=1> )

**Description:** Converts x from a number of years to the equivalent number of seconds.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
In Years( 1 );

```

### Include

**Syntax:** y = Include( filepath, < <<Parse Only>, < <<New Context>, < <<Names Default to Here> )

**Description:** Executes the JSL in the specified file. If Parse Only is specified, the script is parsed rather than executed. If New Context is specified, the included JSL is executed in its own unique namespace. If both the parent and included scripts use the global namespace, then specify both New Context and Names Default to Here to avoid name collisions.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Include( "$SAMPLE_SCRIPTS/chaosGame.jsl" );

```

### Include File List

**Syntax:** y = Include File List()

**Description:** Returns a list of included files at the point of execution.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
y = Include File List();

```

### Index

**Syntax:** ii = n1::n2; ii = n1::n2::n3; ii = Index( n1, n2, <n3=1>)

**Description:** Returns a row matrix that contains the sequence of values from n1 to n2 by increments of n3.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
1 :: 10;

```

### Informat

**Syntax:** dt = In Format( s, formatString, < <<Use Locale(b=1)>, < <<Restrict > )

dt = In Format( s, "Format Pattern", pattern, < <<Use Locale(b=1)> )

**Description:** Parses a string of a given format. If the format is a date-time format, the value is expressed as if surrounded by As Date(), returning the date in ddMonyyyy format. The optional <<Restrict used with the "Best" formatString only allows conversion using integer, decimal, and scientific formats.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Informat( "07152000", "MMDDYYYY" );

```

**Example 2**

```js

Names Default To Here( 1 );
Informat( "07.15.2000", "Format Pattern", "<MM>.<DD>.<YYYY>" );

```

**Example 3**

```js

Names Default To Here( 1 );
Informat( "86.8287° W", "Longitude DDD" );

```

**Example 4**

```js

Names Default To Here( 1 );
Informat( "123.45%", "Percent" );

```

**Example 5**

```js

Names Default To Here( 1 );
Show(
	Informat( "1.23e4", "Best" ),
	Informat( "1.23e4", "Best", <<Restrict ),
	Informat( "1989-10-04", "Best" ),
	Informat( "1989-10-04", "Best", <<Restrict )
);

```

### Inner Product BLAS

**Syntax:** y = Inner Product BLAS( A, B, ... )

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
a = [1, 2, 3, -2, 0, -1, 0, 1, 1];
b = [4, 5, 6, -2, 0, -1, 0, 7, 2];
y = Inner Product BLAS( a, b );

```

### Insert

**Syntax:** z = Insert( x, y, <i> )

**Description:** Returns a copy of list x with y inserted at the ith position or appended to the end if the optional i argument is not specified.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
z = {11, 22, 33};
z = Insert( z, 99, 2 );

```

### Insert Into

**Syntax:** Insert Into( x, y, <i> )

**Description:** Modifies list, associative array, or display box x with y inserted into the collection. Lists and display boxes support an optional i to specify the position, or the items will be appended if the position is not specified. Note that the x argument must be a variable.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
ex = {11, 22, 33};
Insert Into( ex, 99 );
ex;

```

**Example 2**

```js

Names Default To Here( 1 );
ex = ["a" => 10, "b" => 3, => 0];
Insert Into( ex, "c", 12 );
ex;

```

**Example 3**

```js

Names Default To Here( 1 );
New Window( "boxes", hlist = H List Box( Button Box( "a" ), Button Box( "b" ) ) );
Wait( 1 );
Insert Into( hlist, Button Box( "c" ) );

```

### Integrate

**Syntax:** y = Integrate( expr, varname, lowLimit, upLimit, <<Tolerance(1e-10), <<StoreInfo(list), <<StartingValue(val) )

**Description:** Integrates an expression with respect to a scalar value, using adaptive quadrature method from Gander and Gautschi (2000). If the variable specified with varname has a value assigned to it or the <<StartingValue() optional argument specifies a starting value, that value is used as a typical value to improve the accuracy of the integral. To specify infinite ranges of integration, set lowLimit, upLimit, or both to missing. If <<StoreInfo() is specified, the argument of <<StoreInfo() will contain diagnostics of the numerical integration routine. If <<Tolerance() is specified, the argument of <<Tolerance() is used as the tolerance level in the autointegration function used to evaluate the integral. Smaller values result in longer run time but more precise results.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Integrate( Exp( -x ), x, 0, . );

```

**Example 2**

```js

Names Default To Here( 1 );
x = 100;
Integrate( Normal Density( x - 100 ), x, ., . );

```

### Interest Payment

**Syntax:** x = Interest Payment( rate, per, nper, pv, <fv=0>, <type=0> )

**Description:** Returns the interest payment for a given period for an investment based on periodic, constant payments and a constant interest rate. The type argument is 0 for end-of-period payments and 1 for beginning-of-period payments. Equivalent to the IPMT function in Microsoft Excel.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Payment( .05 / 12, 30 * 12, 100000 ) - Interest Payment( .05 / 12, 13, 30 * 12, 100000 )
 - Principal Payment( .05 / 12, 13, 30 * 12, 100000 );

```

### Interest Rate

**Syntax:** x = Interest Rate( nper, pmt, pv, <fv=0>, <type=0>, <guess=0.1> )

**Description:** Returns the interest rate per period of an annuity. The type argument is 0 for end-of-period payments and 1 for beginning-of-period payments. Equivalent to the RATE function in Microsoft Excel.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Interest Rate( 30 * 12, Payment( .05 / 12, 30 * 12, 100000 ), 100000 );

```

### Internal Rate of Return

**Syntax:** x = Internal Rate of Return( values, <guess=0.1> );

x = Internal Rate of Return( guess, value1, value2, <value3, ...> )

**Description:** Returns the internal rate of return for a series of cash flows represented by the numbers in the values argument. Equivalent to the IRR function in Microsoft Excel. The second prototype of the function accepts all scalar arguments.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Internal Rate of Return( [-10000, 1000, 900, 950] );
Internal Rate of Return( .01, -10000, 1000, 900, 950 );

```

### Interpolate

**Syntax:** y = Interpolate(x|xmatrix|xlist, x1, y1, x2, y2);

y = Interpolate(x | xmatrix | xlist, xmatrix, ymatrix);

z = Interpolate({ x, y }, xvector, yvector, zmatrix)

**Description:** Finds the xi arguments that x is between and linearly interpolates the corresponding yi arguments. Note that the xi arguments must be specified in order.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );

New Window( "Interpolate",
	window:x = (2 :: 9) * 10;
	window:y = 50 + Sin( (2 :: 9) ) * 40;
	Graph Box(
		Pen Color( "blue" );
		Marker( window:x, window:y );
		Y Function( Interpolate( a, window:x, window:y ), a );
	);
)
;

```

**Example 2**

```js

Names Default To Here( 1 );
Interpolate( 2.5, [1 2 3], [15, 20, 30] );

```

**Example 3**

```js

Names Default To Here( 1 );
Interpolate( {.5, .8}, [0 1], [0 1], [10 20, 12 18] );

```

**Example 4**

```js

Names Default To Here( 1 );

xd = Transpose( Index( 1, 6 * Pi(), 0.3 ) );
yd = Sin( xd );
                                    
xd2 = xd + 0.15;
yd2 = Interpolate( xd2, xd, yd );
                                    
New Window( "Interpolated values are blue",
	Graph Box(
		X Scale( 1, 6 * Pi() ),
		Y Scale( -1, 1 ),
		For( i = 0, i < N Rows( xd ), i++,
			Pen Color( "red" );
			Circle( {xd[i], yd[i]}, 0.01 );
			Pen Color( "blue" );
			Circle( {xd2[i], yd2[i]}, 0.01 );
		)
	)
);

```

### Inv

**Syntax:** y = Inverse( x ); y = Inv( x )

**Description:** Returns the inverse of the x argument, which must be a square non-singular matrix.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Round( Inverse( [11 22, 33 44] ), 2 );

```

### Inv Update

**Syntax:** y = Inv Update( S, X, <w=1> )

**Description:** Returns an updated inverse matrix, where the first argument S is a symmetric positive definite matrix with the same number of columns as X, the second argument X is a matrix that contains the rows to add or delete, and the third argument w determines whether to add or delete rows (use 1 to add rows and -1 to delete rows). This function evaluates as S-w*S*X`*Inv(I+w*X*S*X`)*X*S, where I is an identity matrix and Inv(A) means an inverse matrix of A.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
/* Generate a design matrix */
exX = [1 0 4 2,
1 0 5 1,
1 0 2 4,
5 4 4 5,
0 1 4 3,
0 1 9 1,
0 1 2 4,
0 1 1 9,
0 1 5 2,
0 1 2 1,
0 1 4 5];
S = Inverse( exX` * exX );
Show( "----------Adding Rows (w=1) --------" );
X = [5 4 3 3, 4 3 2 1, 9 1 2 5];
w = 1;
y = Inv Update( S, X, w );
Show( "Result of Inv Update" );
Show( y );
Show( "Result of updating formula" );
Show( S - w * S * X` * Inv( Identity( N Row( X ) ) + w * X * S * X` ) * X * S );
Show( "Result of direct calculation" );
Show( Inverse( (exX |/ X)` * (exX |/ X) ) );
Show( "----------Deleting Rows (w=-1) --------" );
X = [0 1 5 2, 0 1 2 1, 0 1 4 5];
w = -1;
y = Inv Update( S, X, w );
Show( "Result of Inv Update" );
Show( y );
Show( "Result of updating formula" );
Show( S - w * S * X` * Inv( Identity( N Row( X ) ) + w * X * S * X` ) * X * S );
Show( "Result of direct calculation" );
p = N Row( exX ) - 3;
Show( Inverse( exX[Index( 1, p ), 0]` * exX[Index( 1, p ), 0] ) );

```

### Inverse

**Syntax:** y = Inverse( x ); y = Inv( x )

**Description:** Returns the inverse of the x argument, which must be a square non-singular matrix.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Round( Inverse( [11 22, 33 44] ), 2 );

```

### Invert Expr

**Syntax:** y = Invert Expr( expr, xname, yname )

**Description:** Inverts the expr expression argument, unfolding around the single occurrence of xname.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Invert Expr( Sqrt( Log( x ) ), x, y );

```

### Is Alt Key

**Syntax:** y = Is Alt Key()

**Description:** Returns 1 if the Alt key is being pressed; returns 0 otherwise. Intended to be used in graphics callback scripts. On the Mac, Alt means Option key.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Show me the key",
	Graph Box(
		Rect( 45, 55, 55, 45, 1 );
		If( Is Shift Key(),
			Text( {50, 60}, "Shift Key" )
		);
		If( Is Control Key(),
			Text( {60, 50}, "Control Key" )
		);
		If( Is Alt Key(),
			Text( {50, 35}, "Alt Key" )
		);
		Mousetrap( {} );
	)
);

```

### Is Associative Array

**Syntax:** y = Is Associative Array( x )

**Description:** Returns 1 is the x argument is an associative array, otherwise returns 0.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Is Associative Array( [1 => 2] );

```

### Is Class

**Syntax:** isns = Is Class( class reference )

**Description:** Returns 1 if the class argument is a class. Otherwise, a 0 is returned.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
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
		New Object(
			complex( real * y:real - imag * y:imag, imag * y:real + real * y:imag )
		)
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
iscl = Is Class( cl );
Show( iscl );
cl << Delete;
Delete Classes( "complex" );

```

### Is Command Key

**Syntax:** y = Is Command Key()

**Description:** Returns 1 if the Command key is being pressed; returns 0 otherwise. Intended to be used in graphics callback scripts.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Show me the key",
	Graph Box(
		Rect( 45, 55, 55, 45, 1 );
		If( Is Shift Key(),
			Text( {50, 60}, "Shift Key" )
		);
		If( Is Command Key(),
			Text( {60, 50}, "Command Key" )
		);
		If( Is Alt Key(),
			Text( {50, 35}, "Alt Key" )
		);
		Mousetrap( {} );
	)
);

```

### Is Context Key

**Syntax:** y = Is Context Key()

**Description:** Returns 1 if the Context key is being pressed; returns 0 otherwise. Intended to be used in graphics callback scripts.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Show me the key",
	Graph Box(
		Rect( 45, 55, 55, 45, 1 );
		If( Is Shift Key(),
			Text( {50, 60}, "Shift Key" )
		);
		If( Is Context Key(),
			Text( {60, 50}, "Context Key" )
		);
		If( Is Alt Key(),
			Text( {50, 35}, "Alt Key" )
		);
		Mousetrap( {} );
	)
);

```

### Is Control Key

**Syntax:** y = Is Control Key()

**Description:** Returns 1 if the Control key is being pressed; returns 0 otherwise. Intended to be used in graphics callback scripts. On the Mac, Control means Command key.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Show me the key",
	Graph Box(
		Rect( 45, 55, 55, 45, 1 );
		If( Is Shift Key(),
			Text( {50, 60}, "Shift Key" )
		);
		If( Is Control Key(),
			Text( {60, 50}, "Control Key" )
		);
		If( Is Alt Key(),
			Text( {50, 35}, "Alt Key" )
		);
		Mousetrap( {} );
	)
);

```

### Is Directory

**Syntax:** rc = Is Directory( path )

**Description:** Determine if the given path is a directory. Returns 0 when path is invalid or does not exist.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
rc0 = Is Directory( "$SAMPLE_DATA" );
rc1 = Is Directory( "$SAMPLE_DATA/Big Class.jmp" );
Char( rc0 ) || " " || Char( rc1 );/* 1 0 */

```

### Is Directory Writable

**Syntax:** rc = Is Directory Writable( path )

**Description:** Determine if the given directory path is writable. Returns 0 when path is invalid or does not exist.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Is Directory Writable( "$SAMPLE_DATA" );

```

### Is Empty

**Syntax:** y = Is Empty( name )

**Description:** Returns 1 if the variable is undefined or holds the Empty() value.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Is Empty( x );

```

**Example 2**

```js

Names Default To Here( 1 );
x = Empty();
Is Empty( x );

```

**Example 3**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
If( Is Empty( dt ),
	Print( "There is no open data table." ),
	Print( "This data table is open: " || (dt << Get Name()) )
);
Wait( 1 );
Close( DT, "nosave" );
Wait( 1 );
If( Is Empty( dt ),
	Print( "There is no open data table." ),
	Print( "This data table is open: " || (dt << Get Name()) )
);

```

### Is Expr

**Syntax:** y = Is Expr( x )

**Description:** Returns 1 if the x argument is an expression, 0 otherwise.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Is Expr( Expr( x ) );

```

### Is File

**Syntax:** rc = Is File( path )

**Description:** Determine if the given path is a file. Returns 0 when path is invalid or does not exist.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
rc0 = Is File( "$SAMPLE_DATA" );
rc1 = Is File( "$SAMPLE_DATA/Big Class.jmp" );
Char( rc0 ) || " " || Char( rc1 );/* 0 1 */

```

### Is File Writable

**Syntax:** rc = Is File Writable( path )

**Description:** Determine if the given file path is writable. Returns 0 when path is invalid or does not exist.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Is File Writable( "$SAMPLE_DATA/Big Class.jmp" );

```

### Is JMP Live URL Enabled

**Syntax:** Is JMP Live URL Enabled(url)

**Description:** Determines if the specified URL can be used in this JMP session. URLs can be enabled and/or disabled using the jmpStartAdmin.jsl script. This does not determine if it is a valid URL, nor if the user is able to login. It only determines if the URL is blocked by JMP.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );

url = "http://public.jmp.com";
Show( Is JMP Live URL Enabled( url ) );

```

### Is Leap Year

**Syntax:** v = Is Leap Year(year)

**Description:** Return whether a given year is a leap year.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
v = Is Leap Year( 2016 );

```

### Is List

**Syntax:** y = Is List( x )

**Description:** Returns 1 if the x argument is a list, 0 otherwise.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Is List( {1, 2, 3} );

```

### Is Log Open

**Syntax:** Is Log Open()

**Description:** Return result to indicate whether the log window is open

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
If( Is Log Open(),
	Close Log()
);

```

**Example 2**

```js

Names Default To Here( 1 );
If( !Is Log Open(),
	Open Log()
);

```

### Is Matrix

**Syntax:** y = Is Matrix( x )

**Description:** Returns 1 if the argument is a matrix, 0 otherwise.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Is Matrix( [11 22 33] );

```

### Is Missing

**Syntax:** y = Is Missing( x )

**Description:** Returns 1 if the x argument is a missing value; returns 0 otherwise.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Is Missing( . );

```

### Is Name

**Syntax:** y = Is Name( x )

**Description:** Returns 1 if the x argument is a name, 0 otherwise.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Is Name( Name Expr( n ) );

```

### Is Namespace

**Syntax:** isns = Is Namespace( namespace reference )

**Description:** Returns 1 if the namespace argument is a namespace; otherwise a 0 is returned.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
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
isns = Is Namespace( ns );
Show( isns );
ns << Delete;

```

### Is Number

**Syntax:** y = Is Number( x )

**Description:** Returns 1 if the x argument is a number, 0 otherwise.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Is Number( 213 );

```

### Is Option Key

**Syntax:** y = Is Option Key()

**Description:** Returns 1 if the Option key is being pressed; returns 0 otherwise. Intended to be used in graphics callback scripts.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Show me the key",
	Graph Box(
		Rect( 45, 55, 55, 45, 1 );
		If( Is Shift Key(),
			Text( {50, 60}, "Shift Key" )
		);
		If( Is Option Key(),
			Text( {60, 50}, "Option Key" )
		);
		If( Is Alt Key(),
			Text( {50, 35}, "Alt Key" )
		);
		Mousetrap( {} );
	)
);

```

### Is Same Color

**Syntax:** x = Is Same Color( color1, color2, ... )

**Description:** Compares colors for equality.

**JMP Version Added:** 18

**Example 1**

```js

Names Default To Here( 1 );
Is Same Color( "black", 0 );

```

**Example 2**

```js

Names Default To Here( 1 );
Is Same Color( "red", "green", "blue" );

```

**Example 3**

```js

Names Default To Here( 1 );
Is Same Color( "red", To Color Space( "hls", "red" ) );

```

**Example 4**

```js

Names Default To Here( 1 );
Is Same Color( To Color Space( "LUV", "red" ), "red" );

```

### Is Scriptable

**Syntax:** tf = Is Scriptable( x )

**Description:** Returns 1 if the x argument is a scriptable object, 0 otherwise.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Is Scriptable( Bivariate( Y( :weight ), X( :height ) ) );

```

### Is Shift Key

**Syntax:** y = Is Shift Key()

**Description:** Returns 1 if the Shift key is being pressed; returns 0 otherwise. Intended to be used in graphics callback scripts.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Show me the key",
	Graph Box(
		Rect( 45, 55, 55, 45, 1 );
		If( Is Shift Key(),
			Text( {50, 60}, "Shift Key" )
		);
		If( Is Control Key(),
			Text( {60, 50}, "Control Key" )
		);
		If( Is Alt Key(),
			Text( {50, 35}, "Alt Key" )
		);
		Mousetrap( {} );
	)
);

```

### Is String

**Syntax:** y = Is String( x )

**Description:** Returns 1 if the x argument is a string, 0 otherwise.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Is String( "abc" );

```

### Item

**Syntax:** w = Item( n|[first last], s, <delim>, <Unmatched(result string)>, <Include Boundary Delimiters(0|1)>)

**Description:** Returns the nth item of the s argument, where items are the (possibly empty) sub-strings separated by exactly one of any of the characters specified in the delim argument. If delim is absent, the space character is used. If delim is the empty string, each character is treated as a separate item.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Item( 5, "http://www.jmp.com", ":/." );

```

**Example 2**

```js

Names Default To Here( 1 );
Item( [2 -1], "This is a sentence" );

```

**Example 3**

```js

Names Default To Here( 1 );
Item( 4, "Apple+Banana Tree,,Pear,,Peach,,Grape", Get Punctuation Characters() );

```

**Example 4**

```js

Names Default To Here( 1 );
Item( 5, "a b c d", Unmatched( "None" ) );

```

**Example 5**

```js

Names Default To Here( 1 );
Item( 2, "abcd", "" );

```

**Example 6**

```js

Names Default To Here( 1 );
Item( 2, ",abcd", ",", Include Boundary Delimiters );

```

### Items

**Syntax:** wl = Items(<[first last]>, s, <delim>, <Include Boundary Delimiters(0|1)>)

**Description:** Returns a list of (possibly empty) sub-strings separated by exactly one of any of the characters specified in the delim argument. If delim is absent, the space character is used. If delim is the empty string, each character is treated as a separate item.

**JMP Version Added:** 15

**Example 1**

```js

Names Default To Here( 1 );
Eval List( {Items( "http://www.jmp.com", ":/." ), Items( "hello", "" )} );

```

**Example 2**

```js

Names Default To Here( 1 );
Items( ",Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

**Example 3**

```js

Names Default To Here( 1 );
Items(
	",Apple,Banana Tree,Peach",
	Get Punctuation Characters(),
	Include Boundary Delimiters
);

```

**Example 4**

```js

Names Default To Here( 1 );
Items( [1 2], ",Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

### J

**Syntax:** y = J( nr, <nc>, <v> ); y = J( nr, nc ); y = J( n )

**Description:** Creates a matrix (nr by nc) of values that are determined by the third argument. The default value of the second argument equals the first argument. The default value of the third argument is 1. But the third argument can be a number, a variable name of a number, or JSL code. If the third argument is code, the code is evaluated and assigned the return value to every element in the matrix, element by element, row by row.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );

// Produce a 2x3 matrix, filled with 15.
m = J( 2, 3, 15 );
// Produce a default 4x4 matrix, filled with 1.
m = J( 4 );
// Produce a 2x3 matrix, filled with a number determined by a variable.
a = 3.14;
m = J( 2, 3, a );
// Produce a vector of random numbers from the Uniform distribution.
m = J( 1, 100, Random Uniform() );
// Produce a 2x3 matrix, filled with a sequence of integers.
a = 0;
m = J( 2, 3, a = a + 1 );
// This is a fun example to illustrate what is possible for the third argument.
i = 1;
J(
	10,
	1,
	Print(
		Eval Insert(
			"For the ^i^^if(i < 4, words(\!"st,nd,rd\!",\!",\!")[i], \!"th\!")^ time, I'm not a loop!"
		)
	);
	Round( 1 / Sqrt( 5 ) * ((1 + Sqrt( 5 )) / 2) ^ i++ );
);

```

### JMP Product Name

**Syntax:** y = JMP Product Name()

**Description:** Returns "Standard" or "Pro" based on the version of the product that has been licensed.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
JMP Product Name();

```

### JMP Version

**Syntax:** y = JMP Version()

**Description:** Returns the JMP version (release.revision{.fix}); not available before 6.0.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
JMP Version();

```

### JSL Encrypted

**Syntax:** y = JSL Encrypted(script)

**Description:** Embeds an encrypted script within another script. Create an encrypted script by selecting Edit > Encrypt Script from the main menu of a script editor. Enter your passwords and the encrypted text will appear in a new window. Copy this text into a JSL Encrypted("") command to embed the encrypted script in another script.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
JSL Encrypted(
	"//-e6.0.2\!NWUSXEHSB?SRAMXPSY?;KDGMNGPQFZP;?><JLEXCQZYIGWSI@<FOPBLDKJ?HEUPTOGSZDYWFDMB;NEVB;HFP=VQ@N;LCVQPWRHIXEIPFKGO=H?DWS?KFQRIPBEPSAE<AM?YG=C@VFRENPEW>@;ND=JA<?=WOZZOG>FZBZKZLMFOX?YF@LWA=B=SJXDGVW>VYLBRJT<I<MFE<Q??QCUOZM?RY>RXLBJRH=BH<EGVSEMABSS<IE=CAPID;XM;;?XIU<FA=SCE<CB;AGOCZWHZXK;*"
);

```

### JSL Quote

**Syntax:** y = JSL Quote(script)

**Description:** Store a JSL script in a variable, including all comments and formatting.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );

x = JSL Quote(/* Begin quote. */
    For (i = 1, i <= 5, i++,
        // Print the value of i.
        Print(i);
    );
    // End expression.
);
New Window( "editor", Script Box( x ) );

```

### JSON Literal

**Syntax:** l = JSON Literal( string )

**Description:** Returns a valid JSON Boolean or null constant value depending on the specification of the parameter.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );

myJSON =
"{ \!"myChar\!": \!"Character Value\!", \!"myNum\!": 12345, \!"myBool\!": true, \!"myOtherChar\!": \!"Another char value\!", \!"myNull\!": null, \!"x\!": 54321, \!"myOtherBool\!": false, \!"y\!": \!"Hello\!" }";
parsed = Parse JSON( myJSON );
x = parsed["myBool"];
Show( x );
If( x == JSON Literal( true ),
	Show( "Worked" ),
	Show( "Didn't work" )
);

```

### JSON To Data Table

**Syntax:** dt = JSON To Data Table( jsonstring, <Invisible( boolean ) | Private( boolean )>, <Guess(Stack(Boolean)|"Tall"|"Wide")>, <JSON Settings(...)> )

**Description:** Convert JSON text to a JMP data table

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
dt = JSON To Data Table(
	"[ { \!"name\!": \!"KATIE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 59, \!"weight\!": 95 }, { \!"name\!": \!"LOUISE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 61, \!"weight\!": 123 }, { \!"name\!": \!"JANE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 55, \!"weight\!": 74 } ]"
);

```

### JSON To List

**Syntax:** l = JSON To List( jsonstring )

**Description:** Convert JSON text to a JSL list representing the structure specified by the JSON data.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
l = JSON To List(
	"[ { \!"name\!": \!"KATIE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 59, \!"weight\!": 95 }, { \!"name\!": \!"LOUISE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 61, \!"weight\!": 123 }, { \!"name\!": \!"JANE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 55, \!"weight\!": 74 } ]"
);
Show( l );

```

### JSS Context Box

**Syntax:** y = JSS Context Box( displayBox )

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
New Window( "JSS Context",
	JSS Context Box(
		V List Box(
			Panel Box( "Panel", Text Box( "Hi" ), Button Box( "Press Me" ), ),
			Button Box( "Outside" ),

		),
		<<Set JSS(
			Expr(
				Type( TextBox ) << Background Color( "Red" );
				Type( ButtonBox ) << Background Color( "Green" );
				Descend( Type( PanelBox ), Type( ButtonBox ) ) <<
				Background Color( "Blue" );
			)
		)
	)
);

```

### Johnson Sb Density

**Syntax:** y = Johnson Sb Density( q, gamma, delta, theta, sigma )

**Description:** Returns the density at q of a Johnson Sb distribution, where q is in the interval theta to theta + sigma, delta>0 and gamma between -∞ and +∞ are shape parameters, sigma>0 is a scale parameter, and theta between -∞ and +∞ is a threshold parameter. Note: theta is the lower endpoint of the distribution and sigma is the range of the support of the distribution.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
gamma = 0.5;
delta = 0.5;
theta = 0.5;
sigma = 1;
New Window( "Example: Johnson Sb Density",
	jsbp = Graph Box(
		Y Scale( 0, 5.5 ),
		X Scale( 0.2, 1.8 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Johnson Sb Density( q, gamma, delta, theta, sigma ), q );
		Text(
			{0.5, 4.5},
			"\!U03B3=",
			Round( gamma, 2 ),
			" \!U03B4=",
			Round( delta, 2 ),
			" \!U03B8=",
			Round( theta, 2 ),
			" \!U03C3=",
			Round( sigma, 2 )
		);
	),
	H List Box( Slider Box( 0, 1, gamma, jsbp << reshow ), Text Box( " \!U03B3" ) ),
	H List Box( Slider Box( 0, 2, delta, jsbp << reshow ), Text Box( " \!U03B4" ) ),
	H List Box( Slider Box( -2, 2, theta, jsbp << reshow ), Text Box( " \!U03B8" ) ),
	H List Box( Slider Box( 0, 10, sigma, jsbp << reshow ), Text Box( " \!U03C3" ) )
);

```

### Johnson Sb Distribution

**Syntax:** p = Johnson Sb Distribution( q, gamma, delta, theta, sigma )

**Description:** Returns the probability that a Johnson Sb distributed random variable is less than q. (Note: see the Johnson Sb Density() function for parameter descriptions.)

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
gamma = 0.5;
delta = 0.5;
theta = 0.5;
sigma = 3;
New Window( "Example: Johnson Sb Distribution",
	jsbc = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0.2, 3.8 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Johnson Sb Distribution( q, gamma, delta, theta, sigma ), q );
		Text(
			{0.3, 0.8},
			"\!U03B3=",
			Round( gamma, 2 ),
			" \!U03B4=",
			Round( delta, 2 ),
			" \!U03B8=",
			Round( theta, 2 ),
			" \!U03C3=",
			Round( sigma, 2 )
		);
	),
	H List Box( Slider Box( 0, 1, gamma, jsbc << reshow ), Text Box( " \!U03B3" ) ),
	H List Box( Slider Box( 0, 1, delta, jsbc << reshow ), Text Box( " \!U03B4" ) ),
	H List Box( Slider Box( 0, 1, theta, jsbc << reshow ), Text Box( " \!U03B8" ) ),
	H List Box( Slider Box( 0, 4, sigma, jsbc << reshow ), Text Box( " \!U03C3" ) )
);

```

### Johnson Sb Quantile

**Syntax:** q = Johnson Sb Quantile( p, gamma, delta, theta, sigma )

**Description:** Returns the quantile from a Johnson Sb distribution, the value for which the probability is p that a random value would be lower. (Note: p is the first parameter. See the Johnson Sb Density() function for parameter descriptions.)

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Johnson Sb Quantile( 0.5, 0.5, 1, 1, 1 );

```

### Johnson Sl Density

**Syntax:** y = Johnson Sl Density( q, gamma, delta, theta, <sigma=1> )

**Description:** Returns the density at q of a Johnson Sl distribution, where q is in the interval theta to +∞, delta>0 and gamma between -∞ and +∞ are shape parameters, sigma equal to +1 or -1 is a scale parameter, and theta between -∞ and +∞ is a threshold parameter. Note: When sigma = 1, theta is the lower bound on the distribution, and when sigma=-1, theta is the upper bound. Also, positive sigma implies positive skew, and negative sigma implies negative skew.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
gamma = 0.5;
delta = 1;
theta = 0;
sigma = 1;
New Window( "Example: Johnson Sl Density",
	jslp = Graph Box(
		Y Scale( 0, 1.5 ),
		X Scale( -5, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Johnson Sl Density( q, gamma, delta, theta, sigma ), q );
		Text(
			{-1, 1.1},
			"\!U03B3=",
			Round( gamma, 2 ),
			" \!U03B4=",
			Round( delta, 2 ),
			" \!U03B8=",
			Round( theta, 2 )
		);
	),
	jslpcb = Check Box(
		{"\!U03C3 = +1 (Note: When unchecked \!U03C3 = -1)"},
		<<set( 1 ),
		sigma = [-1, 1][((jslpcb << get()) + 1)];
		jslp << reshow;
	),
	H List Box( Slider Box( -15, 15, gamma, jslp << reshow ), Text Box( " \!U03B3" ) ),
	H List Box( Slider Box( 0, 10, delta, jslp << reshow ), Text Box( " \!U03B4" ) ),
	H List Box( Slider Box( -5, 5, theta, jslp << reshow ), Text Box( " \!U03B8" ) )
);

```

### Johnson Sl Distribution

**Syntax:** p = Johnson Sl Distribution( q, gamma, delta, theta, <sigma=1> )

**Description:** Returns the probability that a Johnson Sl distributed random variable is less than q. (Note: see the Johnson Sl Density() function for parameter descriptions.)

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
gamma = 0.5;
delta = 1;
theta = 0;
sigma = 1;
New Window( "Example: Johnson Sl Distribution",
	jslc = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -5, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Johnson Sl Distribution( q, gamma, delta, theta, sigma ), q );
		Text(
			{-1, 0.9},
			"\!U03B3=",
			Round( gamma, 2 ),
			" \!U03B4=",
			Round( delta, 2 ),
			" \!U03B8=",
			Round( theta, 2 )
		);
	),
	jslccb = Check Box(
		{"\!U03C3 = +1 (Note: When unchecked \!U03C3 = -1)"},
		<<set( 1 ),
		sigma = [-1, 1][((jslccb << get()) + 1)];
		jslc << reshow;
	),
	H List Box( Slider Box( -15, 15, gamma, jslc << reshow ), Text Box( " \!U03B3" ) ),
	H List Box( Slider Box( 0, 10, delta, jslc << reshow ), Text Box( " \!U03B4" ) ),
	H List Box( Slider Box( -5, 5, theta, jslc << reshow ), Text Box( " \!U03B8" ) )
);

```

### Johnson Sl Quantile

**Syntax:** q = Johnson Sl Quantile( p, gamma, delta, theta, <sigma=1> )

**Description:** Returns the quantile from a Johnson Sl distribution, the value for which the probability is p that a random value would be lower. (Note: p is the first parameter. See the Johnson Sl Density() function for parameter descriptions.)

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Johnson Sl Quantile( 0.5, 0.5, 1, 1, 1 );

```

### Johnson Su Density

**Syntax:** y = Johnson Su Density( q, gamma, delta, theta, sigma )

**Description:** Returns the density at q of a Johnson Su distribution, where q is between -∞ and +∞, delta>0 and gamma between -∞ and +∞ are shape parameters, sigma>0 is a scale parameter, and theta between -∞ and +∞ is a threshold parameter.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
gamma = 0.5;
delta = 1;
theta = 1;
sigma = 1;
New Window( "Example: Johnson Su Density",
	y = Graph Box(
		Y Scale( 0, 1.5 ),
		X Scale( -2, 2 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Johnson Su Density( q, gamma, delta, theta, sigma ), q );
		Text(
			{-1, 1.3},
			"\!U03B3=",
			Round( gamma, 2 ),
			" \!U03B4=",
			Round( delta, 2 ),
			" \!U03B8=",
			Round( theta, 2 ),
			" \!U03C3=",
			Round( sigma, 2 )
		);
	),
	H List Box( Slider Box( 0, 1, gamma, y << reshow ), Text Box( " \!U03B3" ) ),
	H List Box( Slider Box( 0, 2, delta, y << reshow ), Text Box( " \!U03B4" ) ),
	H List Box( Slider Box( 0, 2, theta, y << reshow ), Text Box( " \!U03B8" ) ),
	H List Box( Slider Box( 0, 2, sigma, y << reshow ), Text Box( " \!U03C3" ) )
);

```

### Johnson Su Distribution

**Syntax:** p = Johnson Su Distribution( q, gamma, delta, theta, sigma )

**Description:** Returns the probability that a Johnson Su distributed random variable is less than q. (Note: see the Johnson Su Density() function for parameter descriptions.)

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
gamma = 0.5;
delta = 1;
theta = 1;
sigma = 1;
New Window( "Example: Johnson Su Distribution",
	jsuc = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -2, 2 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Johnson Su Distribution( q, gamma, delta, theta, sigma ), q );
		Text(
			{-1, 0.9},
			"\!U03B3=",
			Round( gamma, 2 ),
			" \!U03B4=",
			Round( delta, 2 ),
			" \!U03B8=",
			Round( theta, 2 ),
			" \!U03C3=",
			Round( sigma, 2 )
		);
	),
	H List Box( Slider Box( 0, 1, gamma, jsuc << reshow ), Text Box( " \!U03B3" ) ),
	H List Box( Slider Box( 0, 2, delta, jsuc << reshow ), Text Box( " \!U03B4" ) ),
	H List Box( Slider Box( 0, 2, theta, jsuc << reshow ), Text Box( " \!U03B8" ) ),
	H List Box( Slider Box( 0, 2, sigma, jsuc << reshow ), Text Box( " \!U03C3" ) )
);

```

### Johnson Su Quantile

**Syntax:** q = Johnson Su Quantile( p, gamma, delta, theta, sigma )

**Description:** Returns the quantile from a Johnson Su distribution, the value for which the probability is p that a random value would be lower. (Note: p is the first parameter. See the Johnson Su Density() function for parameter descriptions.)

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Johnson Su Quantile( 0.5, 0.5, 1, 1, 1 );

```

### Journal Box

**Syntax:** y = Journal Box( journalText )

**Description:** Constructs a display box from instructions that would be stored in a journal.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
sample = Distribution( Y( :height ) );
sampjourn = sample << Get Journal;
New Window( "Distribution of Height",
	Text Box( "Here is the result of the distribution platform for Height." ),
	Journal Box( sampjourn )
);

```

### KDE

**Syntax:** {Estimates, Bins, Counts, ActualBandwidth, Error} = KDE( Vector, <<weights, <<bandwidth( 0 ), <<bandwidth scale( 1 ), <<bandwidth selection( 0 ), <<kernel )

**Description:** Returns a kernel density estimator with automatic bandwidth selection. The optional weights argument must be a vector of the same length as the Vector argument. The optional bandwidth argument must be a nonnegative real number or zero, which forces the use of the value of the bandwidth selection argument. The optional bandwidth scale argument must be a positive real number. The optional bandwidth selection argument must be either 0, 1, 2, or 3, corresponding to Sheather and Jones, Normal Reference, Silverman rule of thumb, or Oversmoother, respectively. The optional kernel argument accepts the values 0, 1, 2, 3, or 4, corresponding to Gaussian, Epanechnikov, Biweight, Triangular, or Rectangular, respectively.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
// generate sample dataset from a mixture of 3 normal distributions
ndata3 = 25;
Random Reset( 113 );
channel = J( 1, ndata3 * 3, 0 );
For( i = 1, i <= ndata3, i++,
	channel[1, i] = Random Normal() - 3;
	channel[1, ndata3 + i] = Random Normal() / 2;
	channel[1, ndata3 + ndata3 + i] = Random Normal() + 3;
);

// use kernel density estimator to estimate the underlying distribution
bw = .; // automatic bandwidth
bscl = 1; // bandwidth multiplier
bsel = 0; // Sheather and Jones bandwith selection

// Create data table with estimates from all smoothing KDEs and Bins
dt = New Table( "KDE Smoothing",
	New Column( "Kernel", "Character" ),
	New Column( "Bin" ),
	New Column( "Density Estimate" ),
	New Column( "Counts" )
);

kernels = {"Gaussian", "Epanechnikov", "Biweight", "Triangular", "Rectangular"};
For( kernel = 0, kernel < N Items( kernels ), kernel++,
	res = KDE(
		channel,
		<<bandwidth( bw ),
		<<bandwidth scale( bscl ),
		<<bandwidth selection( bsel ),
		<<kernel( kernel )
	);
	nbin = N Items( res["Bins"] );
	rows = (N Rows( dt ) + 1) :: (N Rows( dt ) + nbin);
	dt << Add Rows( nbin );
	dt[rows, "Kernel"] = kernels[kernel + 1];
	dt[rows, "Bin"] = res["Bins"]`;
	dt[rows, "Density Estimate"] = res["Estimates"]`;
	dt[rows, "Counts"] = res["Counts"]`;
);

dt << Graph Builder(
	Size( 1000, 376 ),
	Show Control Panel( 0 ),
	Legend Position( "Bottom" ),
	Variables(
		X( :Bin ),
		Y( :Density Estimate, Side( "Right" ) ),
		Y( :Counts, Position( 1 ) ),
		Overlay( :Kernel )
	),
	Elements(
		Bar( X, Y( 2 ), Overlay( 0 ), Legend( 2 ), Bar Style( "Needle" ) ),
		Line( X, Y( 1 ), Legend( 3 ) )
	)
);

```

### KDTable

**Syntax:** tab = KDTable( [ 1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6 ] )

**Description:** Returns a table for efficiently looking up near neighbors. The matrix arguments are k-dimensional points. There is no built in limit on the number of dimensions or points.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
tab = KDTable( [1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6] );
{rows, dist} = tab << K nearest rows( 2, 1 );
"2 nearest rows to row 1 are " || Char( rows );

```

### LEV Density

**Syntax:** y = LEV Density( x, mu, sigma )

**Description:** Returns the density at x of a largest extreme distribution with location mu and scale sigma.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
mu = 10;
sig = 5;
New Window( "Example: LEV Density",
	y = Graph Box(
		Y Scale( 0, .08 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( LEV Density( x, mu, sig ), x );
		Text( {0, .055}, "mu=", Round( mu, 2 ) );
		Text( {0, .045}, "sig=", Round( sig, 2 ) );
	),
	H List Box( Slider Box( 0, 100, mu, y << reshow ), Text Box( "mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( "sig" ) ), 

);

```

### LEV Distribution

**Syntax:** p = LEV Distribution( x, mu, sigma )

**Description:** Returns the probability at x of a largest extreme distribution with location mu and scale sigma.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
mu = 10;
sig = 5;
New Window( "Example: LEV Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( LEV Distribution( x, mu, sig ), x );
		Text( {0.1, 0.9}, "mu=", Round( mu, 2 ) );
		Text( {0.1, 0.8}, "sig=", Round( sig, 2 ) );
	),
	H List Box( Slider Box( 0, 100, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) )
);

```

### LEV Quantile

**Syntax:** q = LEV Quantile( p, mu, sigma )

**Description:** Returns the quantile at p of a largest extreme distribution with location mu and scale sigma.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
mu = 10;
sig = 5;
qq = .5;
New Window( "Example: LEV Quantile",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( LEV Distribution( qq, mu, sig ), qq );
		Pen Color( "blue" );
		V Line( LEV Quantile( qq, mu, sig ), 0, 1 );
		Text(
			{0.1, 0.9},
			" mu=",
			Round( mu, 2 ),
			" sig=",
			Round( sig, 2 ),
			" quantile=",
			Round( qq, 2 )
		);
	),
	H List Box( Slider Box( 0, 80, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) ),
	H List Box( Slider Box( 0.01, 0.99, qq, y << reshow ), Text Box( " quantile" ) )
);

```

### LGamma

**Syntax:** y = LGamma( x )

**Description:** Returns the natural logarithm of the Gamma function of x. Useful when Gamma(x) is too large to use directly.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
LGamma( 5 );

```

### LPSolve

**Syntax:** {x, z} = LPSolve( A, b, c, L, U, neq, nle, nge, <slackVars=0> )

**Description:** Minimizes the objective function subject to the given constraints and returns a list of two items. The first list item, x, contains the decision variables (and slack variable values if slackVars=1). The second list item, z, contains optimal objective function value (if one exists). The first five arguments are matrices. The A argument is the matrix of constraint coefficients. The b argument is the column of right hand side values of the constraints. The c argument is the vector of cost coefficients of the objective function. The L and U arguments are the lower and upper bounds for the variables, respectively. The neq, nle, and nge arguments are the number of equality constraints, less than or equal constraints, and greater than or equal constraints, respectively. Note that the constraints must be listed as equality first, less than or equal next, and greater than or equal last.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
A = [5 -2 6, 2 4 0, 3 8 -4];
b = [17, 19, 14];
c = [9 6 -4];
L = [. 0 .];
U = [0 . .];
{x, z} = LPSolve( A, b, c, L, U, 1, 1, 1, 1 );
Show( x, z );

```

### Labeled

**Syntax:** y = Labeled( <rs> ); Labeled( <Row State( <r> )> ) = y

**Description:** Returns the labeled component of the specified row state value, 0 or 1. If Labeled is used as an L-value, it changes the labeled state of the current (or rth) row in the current data table.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Labeled State( 1 );
Labeled( Row State( 3 ) );
Row() = 3;
Labeled();

```

### Labeled State

**Syntax:** rs = Labeled State( x )

**Description:** Returns a row state value with the labeled component set to the specified value.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Labeled State( 1 );
Labeled( Row State( 3 ) );

```

### Lag

**Syntax:** y = Lag( <x>, <n=1> )

**Description:** Returns the value of the x argument with the current row set to Row() - n. Being dependent on Row(), Lag() is mainly useful in column formulas.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 3;
Lag( :height, 2 );

```

### Last Modification Date

**Syntax:** date = Last Modification Date( path )

**Description:** Returns the last modification date of a file or directory. Throws an error when path is invalid or does not exist.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Format( Last Modification Date( "$SAMPLE_DATA/Big Class.jmp" ), "ddmonyyyy:h:m:s" );

```

### Least Squares Solve

**Syntax:** {Beta, VarBeta} = Least Squares Solve(y, X, <<noIntercept, <<weights(optionalWeightVector), <<method("Sweep"|"GInv"))

**Description:** Returns a list that contains a vector of estimates, Beta = Inverse(X&apos;X)X&apos;y, and the estimated variance matrix of Beta. The optional <<noIntercept argument specifies a no-intercept model. The optional <<weights argument specifies a vector of weights to perform weighted least squares. The optional <<method argument enables you to choose between the default Sweep method and a generalized inverse ("GInv") method for solving the normal equations.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
/*Simple Linear Regression*/
y = [3, 5, 7, 5];
X = [1, 2, 3, 4];
{Beta, VarBeta} = Least Squares Solve( y, X );

```

### Left

**Syntax:** sub = Left( s, n, <filler> )

**Description:** Returns a truncated or padded version of the original string or list s. The result contains the left n characters or list items, padded with any filler on the right if the length of s is less than n.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
exurl = "http://www.jmp.com";
Left( exurl, Contains( exurl, ":" ) - 1 );

```

### Length

**Syntax:** l = Length( x )

**Description:** Returns the length of the given string (in characters), list (in items), associative array (in number of keys), blob (in bytes), matrix (in elements), or namespace/class (in number of functions and variables).

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Length( "Café" );

```

**Example 2**

```js

Names Default To Here( 1 );
Length( {1, 2 + 3, [11 22]} );

```

**Example 3**

```js

Names Default To Here( 1 );
Length( ["a" => 10, "b" => 3, => 0] );

```

**Example 4**

```js

Names Default To Here( 1 );
Length( Char To Blob( "Café" ) );

```

### LenthPSE

**Syntax:** y = LenthPSE( x )

**Description:** Returns Lenth&apos;s pseudo-standard error of the values within a single vector x.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Eval List( {LenthPSE( [1, 2, 3, 4, 5] ), Std Dev( [1, 2, 3, 4, 5] )} );

```

### Less

**Syntax:** z = x < y < ... ; z = Less( x, y, ... )

**Description:** Returns 1 if each argument is less than the next argument; returns 0 otherwise.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
[1 1 1] < [0 1 2];

```

### Less LessEqual

**Syntax:** z = x < y <= ... ; z = Less LessEqual( x, y, ... )

**Description:** Returns 1 if the first argument is less than the second argument and each argument except the first is less than or equal to the next argument; returns 0 otherwise.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
1 < 2 <= 2;

```

### Less or Equal

**Syntax:** z = x <= y <= ... ; z = Less or Equal( x, y, ... )

**Description:** Returns 1 if each argument is less than or equal to the next argument; returns 0 otherwise.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
1 <= 2 <= 2;

```

### LessEqual Less

**Syntax:** z = x <= y < ... ; z = LessEqual Less( x, y, ... )

**Description:** Returns 1 if the first argument is less than or equal to the second argument and each argument except the first is less than the next argument; returns 0 otherwise.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
2 <= 2 < 3;

```

### Level Color

**Syntax:** y = Level Color( i ); y = Level Color( i, n ); y = Level Color( i, n, <theme> ); y = Level Color( i, <theme> )

**Description:** Returns a category color, where i is the category level; n is the number of categories (optional); and theme are the color themes in the Column Info dialog&apos;s Value Color combo box. ("JMP Default" is the default theme.) The category index must be >= 1 and <= the number of categories specified in the call or defined by the theme. If the second argument is a character, it is the color theme and n is unspecified.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Color Bar",
	Graph(
		For( x = 1, x <= 100, x += 5,
			Fill Color( Level Color( x, 100, "Green to Black to Red" ) );
			Rect( x - 5, 45, x + 5, 55, 1 );
		)
	)
);

```

### Line

**Syntax:** Line( {x1, y1}, {x2, y2}, ..., < <<Value Space( 0|1 ) >, < <<Smooth( tension, domain, min response, max response ) > ); Line( xMatrix, yMatrix, < <<Value Space(0 | 1) >, < <<Smooth( tension, domain, min response, max response ) > )

**Description:** Draws a line or connected lines. In the default case, the line is drawn linearly between the endpoints. If the Value Space option is set, the line follows the projection specified by the underlying axis scales. If the Smooth option is set, connections are smoothed, constrained by tension, domain dimension, min response, and max response.

**JMP Version Added:** Before version 14

**Constrained smoothing**

```js

Names Default To Here( 1 );
New Window( "Constrained smoothing",
	Graph Box(
		Pen Color( "gray" );
		H Line( 90 );
		H Line( 92 );
		H Line( 10 );
		H Line( 8 );
		Pen Color( "red" );
		Line( Index( 10, 90, 10 ), [20 10 90 90 60 70 10 10 40], <<Smooth( . ) );
		Pen Color( "blue" );
		Line(
			Index( 10, 90, 10 ),
			[20 10 90 90 60 70 10 10 40],
			<<Smooth( ., "X", 8, 92 )
		);
	)
);

```

**Polyline**

```js

Names Default To Here( 1 );
New Window( "Example", Graph Box( Line( [10 30 90], [88 22 44] ) ) );

```

**Smoothing**

```js

Names Default To Here( 1 );
New Window( "Smoothing",
	Graph Box(
		XAxis( Min( 0 ), Max( 10 ), Inc( 2 ) ),
		YAxis( Min( -1.1 ), Max( 1.1 ), Inc( 1 ) ),
		Pen Color( "gray" );
		H Line( 1 );
		H Line( -1 );
		H Line( 0 );
		Line( 0 :: 10, Sin( 0 :: 10 ) );
		Pen Color( "red" );
		Line( 0 :: 10, Sin( 0 :: 10 ), <<Smooth( . ) );
		Pen Color( "blue" );
		Line( 0 :: 10, Sin( 0 :: 10 ), <<Smooth( 0.25 ) );
	)
);

```

**Value space interpolation**

```js

Names Default To Here( 1 );
New Window( "Interpolate in value space",
	Graph Box(
		XAxis( Scale( "Log" ), Min( 10 ), Max( 100 ) ),
		YAxis( Scale( "Log" ), Min( 10 ), Max( 100 ) ),
		Line( [10 30 90], [88 22 44], <<Value Space( 1 ) )
	)
);

```

### Line Seg

**Syntax:** ls = Line Seg(x values, y values, <Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) >, < Sizes( s ) > )>)

**Description:** Returns a display seg with lines connecting all of the x and y values.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
x = [10, 50, 90];
y = [10, 90, 10];
New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Line Seg" ));

```

**Example 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
x = [10, 50, 90];
y = [10, 90, 10];
New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y, RowStates( dt ) ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Line Seg" ));

```

**Example 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
x = [10, 50, 90];
y = [10, 90, 10];
New Window( "Line Seg Example",
	g = Graph Box( Line Seg( x, y, RowStates( dt, {1, 3, 5} ) ) )
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Line Seg" ));

```

### Line Style

**Syntax:** Line Style( x )

**Description:** Sets the current line style, which can be one of: 0 (Solid), 1 (Dotted), 2 (Dashed), 3 (DashDot), or 4 (DashDotDot).

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Line Style Example",
	Graph Box(
		Frame Size( 500, 400 ),
		named line styles = {"Solid", "Dotted", "Dashed", "Dash Dot", "Dash Dot Dot",
		"Dash Dash Dot", "Dash Dash Dot Dot", "Long Dash", "Long Dash Dash", "Dense Dash",
		"Sparse Dash", "Sparse Dot", "Sparse Dash Dot"};
		For Each( {istyle, i}, named line styles, {x = 5 :: 75, y = 12 * Sin( x / 12 )},
			Text( {x[N Items( x )] + 1, y[N Items( y )] + 92 - 6 * i - 1.5}, istyle );
			Line Style( istyle );
			Pen Size( 2 );
			Line( x, y + 92 - 6 * i );
		);
	)
);

```

### Linear Regression

**Syntax:** {Estimates, Std_Error, Diagnostics} = Linear Regression(y, X, <<noIntercept, <<printToLog, <<weight(WeightVector), <<freq(FrequencyVector)

**Description:** Fits a linear regression for the assumed model y = X * beta + error. The optional <<noIntercept argument specifies a no-intercept model. The optional <<printToLog argument specifies that a summary of fit is printed to the log window. The optional weight argument specifies a vector of weights to perform weighted least squares, and the optional freq argument specifies a vector of frequencies. Returns a list containing a vector of the estimates, a vector of the standard errors, and a list of diagnostics. The list of diagnostics contains vectors of the t statistics and p-values for the estimates, as well as the R-Square and adjusted R-Square values for the regression fit.

**JMP Version Added:** 14

**Example 1**

```js

Names Default To Here( 1 );
/*Simple Linear Regression: y = intercept + beta * x + error*/
y = [3, 5, 7, 5];
X = [1, 2, 3, 4];
{Estimates, Std_Error, Diagnostics} = Linear Regression( y, X, <<printToLog ); 
/*
t_ratio = Diagnostics["t_ratio"]; 
p_value = Diagnostics["p_value"]; 
RSquare = Diagnostics["RSquare"]; 
RSquare Adj = Diagnostics["RSquare Adj"];
*/

```

**Example 2**

```js

Names Default To Here( 1 );
/*Model: y = beta_1*x + beta_2*x^2 + error*/
y = [3, 5, 7, 5];
X = [1 1, 2 4, 3 9, 4 16];
{Estimates, Std_Error, Diagnostics} = Linear Regression(
	y,
	X,
	<<noIntercept,
	<<printToLog
);

```

**Example 3**

```js

Names Default To Here( 1 );
/*Categorical Variable Example*/
/*Model: y = beta_1*boy + beta_2*girl + beta_3*x + error*/
y = [3, 5, 7, 5];
x = [1, 2, 3, 4];
gender = {"boy", "girl", "girl", "boy"};
designMat = Design( gender ) || x;
{Estimates, Std_Error, Diagnostics} = Linear Regression(
	y,
	designMat,
	<<noIntercept,
	<<printToLog
);

```

### Lines Seg

**Syntax:** ls = Lines Seg([x1 y1 x2 y2,...])

**Description:** Returns a display seg with a sequence of line segments for the passed in x and y values.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Lines Seg" ));

```

### Lineup Box

**Syntax:** y = Lineup Box( <NCol( nc )>, <Spacing( pixels, <vspace> )>, displayBoxArgs, ... )

**Description:** Returns a display box to show an alignment of boxes in nc columns. The optional Spacing argument specifies the horizontal and vertical space around the display boxes. If the vspace argument is used, vspace is the vertical space and pixels is the horizontal space.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Lineup Box( N Col( 1 ), spacing( 10 ),
		Text Box( "Quadratic Formula" ),
		Border Box( Left( 10 ), Right( 10 ), bottom( 10 ), top( 10 ), sides( 15 ),
			Expr As Picture( Expr( (-b + Sqrt( b ^ 2 - 4 * a * c )) / (2 * a) ) )
		)
	)
);

```

### Lineup Ruler Box

**Syntax:** y = Lineup Box( <Widths( {width1, width2, ...} )>, displayBoxArgs, ... )

**Description:** Returns a display box that sets the column widths of the Lineup Boxes that it contains.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );

New Window( "Lineup Ruler",
	lrb = Lineup Ruler Box(
		Widths( {120, 200} ),
		Outline Box( "Customer 1",
			Lineup Box( N Col( 2 ),
				Text Box( "First Name:" ),
				Text Edit Box(),
				Text Box( "Last Name:" ),
				Text Edit Box(), 

			)
		),
		Outline Box( "Customer 2",
			Lineup Box( N Col( 2 ),
				Text Box( "First Name:" ),
				Text Edit Box(),
				Text Box( "Last Name:" ),
				Text Edit Box(), 

			)
		)
	)
);

```

### List

**Syntax:** y = {a, b, ...}; y = List( a, b, ... )

**Description:** Creates a list of items without evaluating them.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
{1, 2 + 3, [11 22]};

```

### List Box

**Syntax:** y = List Box( {item, ...}, <width( pixels )>, <maxSelected( 9999 )>, <nlines( 12 )>, <script> )

**Description:** Returns a display box to show a list box of selection items. If item itself is a two-item list containing the item name and a string specifying a modeling type or sorting order, such as "Ordinal" or "Ascending", the appropriate icon will show up next to that item in the list box.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
New Window( "Example", b = List Box( {"single", "double", "triple"}, nlines( 10 ) ) );

```

**Example 2**

```js

Names Default To Here( 1 );
New Window( "Example",
	lb = List Box(
		{{"First Item", "continuous"}, {"Second Item", "ordinal"}, {"Third Item",
		"nominal"}},
		width( 200 ),
		max selected( 2 ),
		nlines( 6 )
	)
);

```

### Ln

**Syntax:** y = Ln( x )

**Description:** Returns the natural logarithm of x.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Ln( Exp( 2 ) );

```

### Load DLL

**Syntax:** dll = Load DLL( file path | Base Name( file path without extension ), < AutoDeclare( bool | Quiet | Verbose) | Quiet | Verbose )> )

**Description:** Loads a DLL pointed to by the specified path.

**JMP Version Added:** Before version 14

**Cross platform using Base Name()**

```js

Names Default To Here( 1 );
dll = Load DLL( Base Name( "/path/to/dll/financial" ) );
// Loads "financial.dll" on Windows and "libfinancial.dylib" on Mac
// Declarations for "irr" and "npv" are auto-loaded
myirr = dll << irr( 0.1, -51000, 1000, 900, 950 );
mynpv = dll << npv( 0.05, -51000, 1000, 900, 9500 );
dll << UnloadDLL();

```

**Windows only**

```js

Names Default To Here( 1 );
If( Host is( "Windows" ),
	dll = Load DLL( "C:/Windows/System32/User32.DLL" );
	dll << CallDLL( "MessageBeep", "n", 0 );
	Wait( 1 );
	dll << CallDLL( "MessageBeep", "n", 0 );
	dll << UnloadDLL();
);

```

### Load Text File

**Syntax:** text = Load Text File( path, <Charset("best guess", <force("throw" | "alert" | "silent")>)>, <LineSeparator("\!N")>, <XMLParse>|<SASODSXML>|<JSON>|<BLOB( <readOffsetFromBegin(0)>|<readOffsetFromEnd(42)>, <readLength(2147483647)>, <base64Compressed( 1 /* 0: ascii~hex */)> )> )

**Description:** Reads a whole text file into a JSL variable. Load Text File() prompts for a file name. Load Text File( path ) returns a string. The XMLParse option converts XML into an expression tree. The SASODSXML parses as SAS ODS default XML. The [{JSON}] option converts JSON into an expression tree. The BLOB argument returns binary data in a JSL Blob variable; optional named parameters to BLOB enable reading a substring from the file.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
ex = Load Text File(
	Get Path Variable( "sample_import_data" ) || "/animals.txt"
/*, Charset("ascii")*/
/*, LineSeparator("\!r\!n")*/
/*, BLOB*/
);
Word( 4, ex, " \!t\!n\!r" );

```

### Loc

**Syntax:** y = Loc( m ); y = Loc( v, x )

**Description:** Returns a matrix of the positions of the matrix m that are nonzero.If two arguments are specified, Loc(v, x) returns a matrix of the positions of the list or matrix v that are equal to the value x. Prefer Where instead where possible.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
/*more examples, above*/
Show( Loc( [1 0 1 0 1 0] ) );
Show( Loc( {"A", 2, 3, 2, 5, 2, 4, [1 5]}, 2 ) );
Show( Loc( {"A", 2, 3, 2, 5, 2, 4, [1 5]}, [1 5] ) );

```

**Example 2**

```js

Names Default To Here( 1 );
Loc( [0, -2, 3, 0, 5, ., -7, ., 9] ) /*missing is not zero or non-zero*/;

```

**Example 3**

```js

Names Default To Here( 1 );
Loc( [5, 7, 5, ., 5], 5 );

```

**Example 4**

```js

Names Default To Here( 1 );
Loc( [5, 7, 5, ., 5] == 5 ) /*[5,7,5, . ,5]==5   ==>   [1, 0, 1, ., 1]*/;

```

**Example 5**

```js

Names Default To Here( 1 );
Loc( {"a", "fred", "b", "fred"}, "fred" );

```

### Loc Max

**Syntax:** y = Loc Max( x )

**Description:** Returns the first position in x of the maximum value.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Loc Max( [11 22 33 22 33 11] );

```

### Loc Min

**Syntax:** y = Loc Min( x )

**Description:** Returns the first position in x of the minimum value.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Loc Min( [11 22 33 22 33 11] );

```

### Loc Nonmissing

**Syntax:** y = Loc Nonmissing( matrixArg,...,{listArg},... )

**Description:** Returns a vector of row numbers in argument matrix rows that have no missing values, or for lists, those that are nonmissing numbers or nonempty character.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Loc Nonmissing( [1 2 3, 4 . 6, 7 8 ., 8 7 6] );

```

### Loc Sorted

**Syntax:** idx = Loc Sorted( x, y )

**Description:** Creates a column vector of subscript positions where the values of x have values less than or equal to the values in y based on a binary search. x must be a matrix sorted in ascending order without missing values.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Show(
	Loc Sorted( [11 22 33 44 55], [11 33 55] ),
	Loc Sorted( [11 22 33 44 55], [1] ),
	Loc Sorted( [11 22 33 44 55], [500] )
);

```

### Local

**Syntax:** y = Local( {name=value, ...}, expression )

**Description:** Resolves names to local variables.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Local( {a = 1, b},
	b = 2;
	a + b;
);

```

### Local Here

**Syntax:** y = Local Here( expression )

**Description:** Executes expression with local Names Default To Here(1)

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
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

```js

Names Default To Here( 1 );
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

```js

Names Default To Here( 1 );
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

### Log

**Syntax:** y = Log( x, <b> )

**Description:** Returns the base-b logarithm of x or the natural logarithm of x if b is not specified.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Log( 256, 2 );

```

### Log Capture

**Syntax:** string = Log Capture( expr )

**Description:** Evaluates the expr argument and captures the output that would have appeared in the JMP log window and returns it in a string instead.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
"captured:" || Log Capture(
	For( i = 1, i <= 3, i++,
		Write( Char( i ) );
		Write( " " );
	)
);

```

### Log Table Messages

**Syntax:** Log Table Messages( <On|Off>, <Enable(subject, ...)>, <Disable(subject, ...)>, <Include(msgname, ...)>, <Exclude(msgname, )>

**Description:** Control logging of data table messages (such as DtMsgClose). By default logging is off, but all subjects are enabled. (If you turn logging on, you do not need to enable the subjects you&apos;re interested in.) Only a subset of all messages are logged. Not available in retail builds.

**JMP Version Added:** 17

**Turn off logging**

```js

Names Default To Here( 1 );
Log Table Messages( Off );

```

**Turn on logging**

```js

Names Default To Here( 1 );
Log Table Messages( On );

```

**Turn on logging, and include all messages except "DtMsgClose"**

```js

Names Default To Here( 1 );
Log Table Messages( On, Exclude( "DtMsgClose" ) );

```

**Turn on logging, and include only the "DtMsgClose" message**

```js

Names Default To Here( 1 );
Log Table Messages( On, Include( "DtMsgClose" ) );

```

**Turn on logging, but ignore column messages**

```js

Names Default To Here( 1 );
Log Table Messages( On, Disable( "Column" ) );

```

**Turn on logging, but ignore table messages**

```js

Names Default To Here( 1 );
Log Table Messages( On );
Log Table Messages( Disable( "Table" ) );

```

### Log10

**Syntax:** y = Log10( x )

**Description:** Returns the base 10 logarithm of x.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Log10( 100 );

```

### Log1P

**Syntax:** y = Log1P( x )

**Description:** Returns a more accurate calculation of Log(1 + x) when x is very small.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Log1P( 1e-6 );

```

### LogGenGamma Density

**Syntax:** y = LogGenGamma Density( x, mu, sigma, lambda )

**Description:** Returns the density at x of a log generalized gamma probability distribution with parameters mu, sigma, and lambda.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
mu = 0;
sigma = 1;
lambda = 1;
New Window( "Example: LogGenGamma Density",
	gdey = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -10, 10 ),
		XName( "y" ),
		Pen Color( "red" );
		Y Function( LogGenGamma Density( y, mu, sigma, lambda ), y );
		Text( {-9, 0.9}, "\!U03BC=", Round( mu, 4 ), " \!U03C3=", Round( sigma, 4 ) );
		Text( {-9, 0.8}, "\!U03BB=", Round( lambda, 4 ) );
	),
	H List Box( Slider Box( -5, 5, mu, gdey << reshow ), Text Box( "\!U03BC" ) ),
	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( "\!U03C3" ) ),
	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( "\!U03BB" ) )
);

```

### LogGenGamma Distribution

**Syntax:** p = LogGenGamma Distribution( x, mu, sigma, lambda )

**Description:** Returns the probability that a log generalized gamma distributed random variable (with parameters mu, sigma, and lambda) is less than x.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
mu = 0;
sigma = 1;
lambda = 1;
New Window( "Example: LogGenGamma Distribution",
	gdey = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -20, 20 ),
		XName( "y" ),
		Pen Color( "red" );
		Y Function( LogGenGamma Distribution( y, mu, sigma, lambda ), y );
		Text( {-9, 0.9}, "\!U03BC=", Round( mu, 4 ), " \!U03C3=", Round( sigma, 4 ) );
		Text( {-9, 0.8}, "\!U03BB=", Round( lambda, 4 ) );
	),
	H List Box( Slider Box( -5, 5, mu, gdey << reshow ), Text Box( "\!U03BC" ) ),
	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( "\!U03C3" ) ),
	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( "\!U03BB" ) )
);

```

### LogGenGamma Quantile

**Syntax:** q = LogGenGamma Quantile( p, mu, sigma, lambda )

**Description:** Returns the quantile from a log generalized gamma distribution (with parameters mu, sigma, and lambda), the value for which the probability is p that a random value would be lower.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
mu = 0;
sigma = 1;
lambda = 1;
p = 0.4;
New Window( "Example: LogGenGamma Quantile",
	gdey = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -20, 20 ),
		XName( "y" ),
		Pen Color( "red" );
		Y Function( LogGenGamma Distribution( x, mu, sigma, lambda ), x );
		Pen Color( "Blue" );
		V Line( LogGenGamma Quantile( p, mu, sigma, lambda ), 0, 1 );
		Text(
			{-19, 0.9},
			"\!U03BC=",
			Round( mu, 4 ),
			" \!U03C3=",
			Round( sigma, 4 ),
			" \!U03BB=",
			Round( lambda, 4 )
		);
		Text( {-19, 0.8}, "p=", Round( p, 3 ) );
		Text(
			{-19, 0.7},
			"quantile= ",
			Round( LogGenGamma Quantile( p, mu, sigma, lambda ), 2 )
		);
	),
	H List Box( Slider Box( -2, 2, mu, gdey << reshow ), Text Box( "\!U03BC" ) ),
	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( "\!U03C3" ) ),
	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( "\!U03BB" ) ),
	H List Box( Slider Box( 0.01, 0.99, p, gdey << reshow ), Text Box( " p" ) )
);

```

### Logist

**Syntax:** y = Logist( x )

**Description:** Returns 1 / (1 + Exp( -x )), which converts a number in the domain -∞...+∞ into range 0...1. The Logist() function is useful in logistic regression.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Logist( 2 );

```

### Logist Percent

**Syntax:** y = Logist Percent( x )

**Description:** Logist function with result scaled 0 to 100.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Logist Percent( 10 );

```

### Logistic Density

**Syntax:** y = Logistic Density( x, mu, sigma )

**Description:** Returns the density at x of a logistic distribution with location mu and scale sigma.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
mu = 0;
sig = .2;
New Window( "Example: Logistic Density",
	y = Graph Box(
		Y Scale( 0, 2 ),
		X Scale( -10, 10 ),
		Pen Color( "red" );
		Y Function( Logistic Density( x, mu, sig ), x );
		Text( {0, 1.8}, "mu=", Round( mu, 2 ) );
		Text( {0, 1.6}, "sig=", Round( sig, 2 ) );
	),
	H List Box( Slider Box( -4, 4, mu, y << reshow ), Text Box( "mu" ) ),
	H List Box( Slider Box( 0.01, 2, sig, y << reshow ), Text Box( "sig" ) ), 

);

```

### Logistic Distribution

**Syntax:** p = Logistic Distribution( x, mu, sigma )

**Description:** Returns the probability at x of a logistic distribution with location mu and scale sigma.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
mu = 0;
sig = .2;
New Window( "Example: Logistic Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -10, 10 ),
		Pen Color( "red" );
		Y Function( Logistic Distribution( x, mu, sig ), x );
		Text( {0.1, 0.9}, "mu=", Round( mu, 2 ) );
		Text( {0.1, 0.8}, "sig=", Round( sig, 2 ) );
	),
	H List Box( Slider Box( -4, 4, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0.01, 2, sig, y << reshow ), Text Box( " sig" ) )
);

```

### Logistic Quantile

**Syntax:** q = Logistic Quantile( p, mu, sigma )

**Description:** Returns the quantile at p of a logistic distribution with location mu and scale sigma.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
mu = 0;
sig = .2;
qq = .5;
New Window( "Example: Logistic Quantile",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -10, 10 ),
		Pen Color( "red" );
		Y Function( Logistic Distribution( qq, mu, sig ), qq );
		Pen Color( "blue" );
		V Line( Logistic Quantile( qq, mu, sig ), 0, 1 );
		Text(
			{0.1, 0.9},
			" mu=",
			Round( mu, 2 ),
			" sig=",
			Round( sig, 2 ),
			" quantile=",
			Round( qq, 2 )
		);
	),
	H List Box( Slider Box( -4, 4, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0.01, 2, sig, y << reshow ), Text Box( " sig" ) ),
	H List Box( Slider Box( 0.01, 0.99, qq, y << reshow ), Text Box( " quantile" ) )
);

```

### Logit

**Syntax:** y = Logit( p )

**Description:** Returns the logit of p, which is defined as log(p / (1 - p)).

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Logit( 0.95 );

```

### Logit Percent

**Syntax:** y = Logit Percent( p )

**Description:** Logit function with argument 0 to 100, rather than 0 to 1.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Logit Percent( 95.0 );

```

### Loglogistic Density

**Syntax:** y = Loglogistic Density( x, mu, sigma )

**Description:** Returns the density at x of a loglogistic distribution with location mu and scale sigma.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
mu = 0;
sig = .2;
New Window( "Example: Loglogistic Density",
	y = Graph Box(
		Y Scale( 0, .06 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( Loglogistic Density( x, mu, sig ), x );
		Text( {0, .055}, "mu=", Round( mu, 2 ) );
		Text( {0, .045}, "sig=", Round( sig, 2 ) );
	),
	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( "mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( "sig" ) ), 

);

```

### Loglogistic Distribution

**Syntax:** p = Loglogistic Distribution( x, mu, sigma )

**Description:** Returns the probability at x of a loglogistic distribution with location mu and scale sigma.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
mu = 0;
sig = .2;
New Window( "Example: Loglogistic Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( Loglogistic Distribution( x, mu, sig ), x );
		Text( {0.1, 0.9}, "mu=", Round( mu, 2 ) );
		Text( {0.1, 0.8}, "sig=", Round( sig, 2 ) );
	),
	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) )
);

```

### Loglogistic Quantile

**Syntax:** q = Loglogistic Quantile( p, mu, sigma )

**Description:** Returns the quantile at p of a loglogistic distribution with location mu and scale sigma.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
mu = 0;
sig = .2;
qq = .5;
New Window( "Example: Loglogistic Quantile",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( Loglogistic Distribution( qq, mu, sig ), qq );
		Pen Color( "blue" );
		V Line( Loglogistic Quantile( qq, mu, sig ), 0, 1 );
		Text(
			{0.1, 0.9},
			" mu=",
			Round( mu, 2 ),
			" sig=",
			Round( sig, 2 ),
			" quantile=",
			Round( qq, 2 )
		);
	),
	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) ),
	H List Box( Slider Box( 0.01, 0.99, qq, y << reshow ), Text Box( " quantile" ) )
);

```

### Lognormal Density

**Syntax:** y = Lognormal Density( x, mu, sigma )

**Description:** Returns the density at x of a lognormal distribution with location mu and scale sigma.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
mu = 0;
sig = 1;
New Window( "Example: Lognormal Density",
	y = Graph Box(
		Y Scale( 0, .15 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( Lognormal Density( x, mu, sig ), x );
		Text( {0, .14}, "mu=", Round( mu, 2 ) );
		Text( {0, .12}, "sig=", Round( sig, 2 ) );
	),
	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( "mu" ) ),
	H List Box( Slider Box( 0, 2, sig, y << reshow ), Text Box( "sig" ) ), 

);

```

### Lognormal Distribution

**Syntax:** p = Lognormal Distribution( x, mu, sigma )

**Description:** Returns the probability at x of a lognormal distribution with location mu and scale sigma.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
mu = 0;
sig = 1;
New Window( "Example: Lognormal Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( Lognormal Distribution( x, mu, sig ), x );
		Text( {0.1, 0.9}, "mu=", Round( mu, 2 ) );
		Text( {0.1, 0.8}, "sig=", Round( sig, 2 ) );
	),
	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 2, sig, y << reshow ), Text Box( " sig" ) )
);

```

### Lognormal Quantile

**Syntax:** q = Lognormal Quantile( p, mu, sigma )

**Description:** Returns the quantile at p of a lognormal distribution with location mu and scale sigma.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
mu = 0;
sig = 1;
qq = .5;
New Window( "Example: Lognormal Quantile",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( Lognormal Distribution( qq, mu, sig ), qq );
		Pen Color( "blue" );
		V Line( Lognormal Quantile( qq, mu, sig ), 0, 1 );
		Text(
			{0.1, 0.9},
			" mu=",
			Round( mu, 2 ),
			" sig=",
			Round( sig, 2 ),
			" quantile=",
			Round( qq, 2 )
		);
	),
	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 3, sig, y << reshow ), Text Box( " sig" ) ),
	H List Box( Slider Box( 0.01, 0.99, qq, y << reshow ), Text Box( " quantile" ) )
);

```

### Long Date

**Syntax:** s = Long Date( datetime, <format> )

**Description:** Returns a long locale-specific representation of a date-time value.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Long Date( Today() );

```

### Low Rank Symmetric Update BLAS

**Syntax:** y = Low Rank Symmetric Update BLAS( A, U, s )

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
A = [2 0, 0 2];
U = [2 4, 3 5];
s = 2.5;
AUpdate = Low Rank Symmetric Update BLAS( A, U, s );

```

### Lowercase

**Syntax:** sl = Lowercase( s )

**Description:** Converts uppercase letters to lowercase letters in the specified string. Rules for upper and lower case are locale dependent.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Lowercase( "CAFÉ #23" );

```

### MDYHMS

**Syntax:** s = MDYHMS( datetime, <format> )

**Description:** Returns a representation of a date-time value with the ordering: month, day, year, hour, minute, second.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
MDYHMS( Today() );

```

### Mail

**Syntax:** Mail( "address", "subject", "message", <"attachment filepath"> | { "attachment filepath", ...} )

**Description:** Creates an outgoing e-mail message as specified if the operating system allows doing so. Not all options will work on all operating system versions. See Help for details.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Mail( "test@example.com", "revelation", "JMP is great.", "$SAMPLE_DATA/Big Class.jmp" );

```

### Main Menu

**Syntax:** menu = Main Menu( command, <window name> )

**Description:** Executes the specified main menu command.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Main Menu( "Sample Index" );

```

**Example 2**

```js

Names Default To Here( 1 );
Main Menu( "Help:Sample Index" );

```

### Make KFold Formula

**Syntax:** y = Make KFold Formula( folds, Y Columns( cols ), <<Stratification Columns( cols ), <<Grouping Columns( cols ) )

**Description:** Generates a validation column with folds levels when used in a column formula. This JSL function is primarily used by the Make Validation Column platform to generate formula columns.

**JMP Version Added:** 17

**Example 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "KFold Validation",
	"Numeric",
	"Nominal",
	Formula( Make KFold Formula( 5, <<Y Columns( :height ) ) )
);

```

**Example 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Stratified KFold",
	"Numeric",
	"Nominal",
	Formula(
		Make KFold Formula( 4, <<Y Columns( :height ), <<Stratification Columns( :sex ) )
	)
);

```

### Make Validation Formula

**Syntax:** y = Make Validation Formula( rates, <<Stratification Columns( cols ), <<Grouping Columns( cols ), <<Cutpoint Column ( col ), <<Cutpoint Batch ID( col ), <<Determine cutpoints using( "Proportions"|"Numbers of Rows"|"Fixed Time or Date"|"Elapsed Time" ), <<Assign Extra Rows( "To Training"|"To Validation"|"To Test" ) )

**Description:** Generates a two-level or three-level validation column when used in a column formula. The rates argument is a 3 by 1 matrix that contains the training, validation, and test rates, respectively. This JSL function is primarily used by the Make Validation Column platform to generate formula columns.

**JMP Version Added:** 15

**Example 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Validation",
	"Numeric",
	"Nominal",
	Formula( Make Validation Formula( [.6, .4, 0] ) ),
	Set Property( "Value Labels", {0 = "Training", 1 = "Validation"} )
);

```

**Example 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Validation",
	"Numeric",
	"Nominal",
	Formula( Make Validation Formula( [.6, .2, .2], <<Stratification Columns( :age ) ) ),
	Set Property( "Value Labels", {0 = "Training", 1 = "Validation", 2 = "Test"} )
);

```

**Example 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "Validation",
	"Numeric",
	"Nominal",
	Formula(
		Make Validation Formula(
			[20, 10, 4],
			<<Cutpoint Column( :Week of Year ),
			<<Cutpoint Batch ID( :ID ),
			<<Determine cutpoints using( "Numbers of Rows" )
		)
	),
	Set Property( "Value Labels", {0 = "Training", 1 = "Validation", 2 = "Test"} )
);

```

### Mandelbrot

**Syntax:** v = Mandelbrot( n, radius, x, y )

**Description:** calculates the value of the Mandelbrot function at x,y, stopping after n iterations or when radius exceeded

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
grid = 50;
rmax = 0/*zero for smooth*/;
nmax = 50;// http://wikipedia.org/wiki/Mandelbrot_set 
New Window( "Mandelbrot - use magnifier to zoom in",
	g = Graph Box(
		X Scale( -3, 3 ),
		Y Scale( -2, 2 ),
		framesize( 600, 400 ),
		Gradient Function(
			Mandelbrot( nmax, rmax, a, b ), // return value: number of iterations before something interesting happened
			a, // standard GradientFunction stuff...
			b,
			Matrix( {0, nmax} ), // range to map the colors onto
			Z Color(
				{RGB Color( 0, 0, 0 ), RGB Color( 1, 0, 0 ), RGB Color( 1, 1, 0 ),
				RGB Color( 0, 1, 0 ), RGB Color( 0, 1, 1 ), RGB Color( 0, 0, 1 ),
				RGB Color( .3, .3, .4 )}
			),
			<<xgrid(
				X Origin(), X Origin() + X Range(),
				X Range() / (Floor( grid * H Size() / V Size() ))
			),
			<<ygrid( Y Origin(), Y Origin() + Y Range(), Y Range() / (Floor( grid )) ), 

		)
	),
	H List Box( Slider Box( 2, 500, nmax, g << reshow ), Global Box( nmax ) ),
	H List Box( Slider Box( 0, 5, rmax, g << reshow ), Global Box( rmax ) ),
	H List Box( Slider Box( 2, 500, grid, g << reshow ), Global Box( grid ) ), 

);
g << Set X Axis(
	{Format( "Best", 15 ), Show Major Ticks( 0 ), Rotated Labels( "Parallel" )}
);
g << Set Y Axis(
	{Format( "Best", 15 ), Show Major Ticks( 0 ), Rotated Labels( "Parallel" )}
);

```

### Map Value

**Syntax:** Map Value(string | number, {key1, value1...|{key1...},{value1...}}, <Unmatched(value)>)

**Description:** Evaluate the initial value and return the mapped result or a default.

**JMP Version Added:** 15

**Example 1**

```js

Names Default To Here( 1 );
Map Value( "celry", {"celry", "celery"} );

```

**Example 2**

```js

Names Default To Here( 1 );
Map Value( "carrot", {"celry", "celery"}, Unmatched( "not found" ) );

```

**Example 3**

```js

Names Default To Here( 1 );
Map Value( 10, {10, "celery", 11, "banana"} );

```

**Example 4**

```js

Names Default To Here( 1 );
Map Value( 10, {{1, 2, 3}, {100, 200, 300}} );

```

### Marker

**Syntax:** Marker( <rs>, {x1, y1}, {x2, y2}, ... ); Marker( <rs>, xMatrix, yMatrix )

**Description:** Draws markers at the indicated coordinates.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example", Graph Box( Marker( Marker State( 3 ), [11 44 77], [75 25 50] ) ) );

```

### Marker Of

**Syntax:** y = Marker Of( <rs> ); Marker Of( <Row State( <r> )> ) = y

**Description:** Returns the marker component of the specified row state value. If Marker Of is used as an L-value, it changes the marker of the current (or rth) row in the current data table.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Marker State( 5 );
Marker Of( Row State( 3 ) );
Row() = 3;
Marker Of();

```

### Marker Seg

**Syntax:** me = Marker Seg( x, y, < Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) >, < Sizes( s ) > )

**Description:** Returns a display seg with markers for all of the x and y values.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
sz = Column( "age" ) << get values;
aa = [=> 0];
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ), sizes( sz ) )
	)
);

```

**Example 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = [1 2 3 4 5];
yy = [2 3 4 5 6];
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt, {3, 4, 11, 7, 13} ) )
	)
);

```

**Example 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = [1 2 3 4 5];
yy = [2 3 4 5 6];
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt, 11 :: 15 ) )
	)
);

```

**Example 4**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = [1 2 3 4 5];
yy = [2 3 4 5 6];
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg(
			xx,
			yy,
			Row States( dt, {{1, 2, 3}, {4, 5}, {6}, {7, 12, 15, 9}, {21, 8}} )
		)
	)
);

```

**Example 5**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = [1 2 3 4 5];
yy = [2 3 4 5 6];
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg(
			xx,
			yy,
			Row States(
				{Color State( "Blue" ), Color State( "Orange" ), Color State( "Green" ),
				Color State( "Purple" ), Color State( "Red" )}
			)
		)
	)
);

```

### Marker Size

**Syntax:** Marker Size( n )

**Description:** Sets the size markers are drawn in the graphics frame. 0 = dot, 1 = small, ....

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Marker Size( 5 );
		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
	)
);

```

### Marker State

**Syntax:** rs = Marker State( marker )

**Description:** Returns a row state value with the marker component set to the specified value. The marker argument specifies a marker and can be a positive integer, a character, a positive integer for Unicode character, or a hex character for Unicode character.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Marker State( 5 );
Marker Of( Row State( 3 ) );

```

### Match

**Syntax:** y = Match( x, v1, expr1, v2, expr2, ..., exprElse )

**Description:** Evaluates and returns the exprN argument corresponding to the first vN argument that equals x or evaluates and returns the exprElse argument if no value equals x.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Match( Year( Today() ), 2013, "snake", 2014, "horse", 2015, "goat", "other" );

```

### MatchMZ

**Syntax:** y = MatchMZ( x, v1, expr1, v2, expr2, ..., exprElse )

**Description:** Evaluates and returns the exprN argument corresponding to the first vN argument that equals x or evaluates and returns the exprElse argument if no value equals x. (The MatchMZ() function behaves the same as the Match() function, except that missing values are treated as 0.)

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
MatchMZ( Year( Today() ), 2013, "snake", 2014, "horse", 2015, "goat", "other" );

```

### Matrix

**Syntax:** y = Matrix( {{x11, ..., x1m}, {...}, {xn1, ..., xnm}} )

y = Matrix( {x1, ..., xn} )

y = Matrix( n, m )

**Description:** Constructs an n-by-m matrix. If you specify a list of n lists that each contain m row values, the matrix is formed by vertically concatenating the evaluated lists. If you specify a single list of n items, the return value is an n-by-1 column vector. If you specify two integer arguments, the return value is a matrix of zeros that contains n rows and m columns.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Matrix( {{11, 22, 33}, {44, 55, 66}} );

```

**Example 2**

```js

Names Default To Here( 1 );
Matrix( {{[1 2 3], 4, 5, 6, 7, 8, 9}} );

```

**Example 3**

```js

Names Default To Here( 1 );
Matrix( {2, 3 + 7} );

```

**Example 4**

```js

Names Default To Here( 1 );
Matrix( 2, 3 );

```

### Matrix Box

**Syntax:** y = Matrix Box( matrix, < <<Column Names( "c1", "c2", ... )>, < <<Row Names( "r1", "r2", ... )> )

**Description:** Returns a display box to show a matrix of numbers.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Matrix Box( [11 22 33, 44 55 66], <<RowNames( "First", "Second" ) )
);

```

### Matrix Mult

**Syntax:** y = Matrix Mult( A, B, ... ); y = A * B

**Description:** Performs matrix multiplication. The matrix arguments must be conformable: NCol(a)==NRow(b). Note that A * B also works.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
exMatA = [1 2 3, -2 0 -1, 0 1 1];
exMatB = [1 2, 1 2, 1 2];
exMatM1 = exMatA * exMatB;
exMatM2 = Matrix Mult( exMatA, exMatB );
exMatC = [1 2, 1 2];
exMatM3 = Matrix Mult( exMatA, exMatB, exMatC );
Show( exMatM1 );
Show( exMatM2 );
Show( exMatM3 );

```

### Matrix Mult BLAS

**Syntax:** y = Matrix Mult BLAS( A, B, ... )

**Description:** Performs matrix multiplication. The matrix arguments must be conformable: NCol(A)==NRow(B).

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
exMatA = [1 2 3, -2 0 -1, 0 1 1];
exMatB = [1 2, 1 2, 1 2];
exMatM2 = Matrix Mult BLAS( exMatA, exMatB );

```

### Matrix Rank

**Syntax:** r = Matrix Rank( X )

**Description:** Returns the rank of the matrix X.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
Matrix Rank( [1 0 0, 0 1 0, 0 1 0] );

```

### Matrix To Blob

**Syntax:** m = Matrix To Blob( matrix, type, bytesEach, endian )

**Description:** Makes a blob from a matrix by converting the matrix elements to 1, 2, or 4 byte signed or unsigned integers or 4 or 8 byte floating point numbers.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Matrix To Blob( [3.14, 1.414], "float", 4, "big" );

```

### Max

**Syntax:** y = Max( x1, ... ); y = Maximum( x1, ... )

**Description:** Returns the maximum value among the arguments or of the values within a single matrix or list argument.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Eval List( {Max( Pi(), e() ), Max( [33 44 22] )} );

```

### Maximize

**Syntax:** Maximize( expr, {x1, x2, ...} );

Maximize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, <<MaxIter( 250 ), <<Tolerance( .00000001 ), <<details(both | returnDetails | displaySteps), <<gradient(), <<hessian(), method(NR | SR1), <<useNumericDeriv(True))

**Description:** Finds values for the function&apos;s arguments, given in the list {x1, x2, ...}, that maximize the expr expression. You can specify lower and upper bounds for each argument in parentheses following the argument&apos;s name. If expr is not a concave function, Maximize might find a local maximum rather than the global maximum. If this is a concern, try multiple starting values. Also, Maximize works best for functions with a continuous second derivative. Additional arguments for the Maximize function enable you to set the maximum number of iterations, tolerance for convergence, and view more details about the optimization. Click the Topic Help button for more information about the optional arguments.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
/*Simple example*/ 
x = 0;
y = 0;
maxf = Maximize( ((2 * x ^ 2 + 12 * x * y - y * 3)), {x, y} );
Eval List( {x, y, maxf} );

```

**Example 2**

```js

Names Default To Here( 1 );
/*Find the MLE for a Normal Distribution with a random sample of 3 observations*/
x = [3 4 5]; /* observed values*/ 
n = 3;
logDens = Expr(
	(-n / 2) * Log( 2 * Pi() * sigSq ) - Summation( i = 1, 3, ((x[i] - mu) ^ 2) ) / (2 *
	sigSq)
);
mu = 3;
sigSq = 1;/*initial values*/ 
{maxReached, iters, gradient, hessian} = Maximize(
	logDens,
	{mu, sigSq( 0, . )},
	<<details( both )
);

```

**Example 3**

```js

Names Default To Here( 1 );
/*Simple example with all optional arguments*/ 
x = 0;
y = 0;
{objVal, iters, gradient, hessian} = Maximize(
	((2 * x ^ 2 + 12 * x * y - y * 3)),
	{x( -1, 1 ), y( -1, 1 )},
	<<maxIter( 200 ),
	<<tolerance( 10 ^ -6 ),
	<<details( both )
);

```

### Maximum

**Syntax:** y = Max( x1, ... ); y = Maximum( x1, ... )

**Description:** Returns the maximum value among the arguments or of the values within a single matrix or list argument.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Eval List( {Max( Pi(), e() ), Max( [33 44 22] )} );

```

### Mean

**Syntax:** y = Mean( x1, ... )

**Description:** Returns the arithmetic mean of the arguments or of the values within a single matrix or list argument.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Eval List( {Mean( Pi(), e() ), Mean( [33 44 22 20 30] )} );

```

### Median

**Syntax:** y = Median( x1, ... )

**Description:** Returns the median of the combined arguments, which can be scalar, matrix or list arguments.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
Median( [1.2, 1.5, 10, 25, 31, 40, 50, 99, 1000, 5000, 25000, 100000] );

```

### Method

**Syntax:** m = Method( { arg1 = val1, ... }, expression* )

**Description:** Create a Method within a Class

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
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
		New Object(
			complex( real * y:real - imag * y:imag, imag * y:real + real * y:imag )
		)
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

### Mimic

**Syntax:** mimic obj = Mimic(Box|PlatformRef)

**Description:** Creates a GUI automation object that mimics a real user. ONLY AVAILABLE IN INTERNAL JMP BUILDS.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :age ) );
outline = Report( obj )[Outline Box( 1 )];
mc = Mimic( obj );
mc << Mark( outline );
mc << Mouse Click( Offset( TopLeft( outline ), [25 15] ) );

```

### Min

**Syntax:** y = Min( x1, ... ); y = Minimum( x1, ... )

**Description:** Returns the minimum value among the arguments or of the values within a single matrix or list argument.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Eval List( {Min( Pi(), e() ), Min( [33 44 22] )} );

```

### Minimize

**Syntax:** Minimize( expr, {x1, x2, ...} );

Minimize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, <<MaxIter( 250 ), <<Tolerance( .00000001 ), <<details(both | returnDetails | displaySteps), <<gradient(), <<Hessian(), <<method(NR | SR1), <<useNumericDeriv(True))

**Description:** Finds values for the function&apos;s arguments, given in the list {x1, x2, ...}, that minimize the expr expression. You can specify lower and upper bounds for each argument in parentheses following the argument&apos;s name. If expr is not a convex function, Minimize might find a local minimum rather than the global minimum. If this is a concern, try multiple starting values. Also, Minimize works best for functions with a continuous second derivative. Additional arguments for the Minimize function enable you to set the maximum number of iterations, tolerance for convergence, and view more details about the optimization. Click the Topic Help button for more information about the optional arguments.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
/*Simple Example*/
x = 0;
y = 0;
minFun = Minimize( (y * 3 - 2 * x ^ 2 - 12 * x * y), {x, y} );
Eval List( {x, y, minFun} );

```

**Example 2**

```js

Names Default To Here( 1 );
/*Nonlinear Sums of Squares Example*/
x = [1.309, 1.471, 1.49, 1.565, 1.611, 1.68];
y = [2.138, 3.421, 3.597, 4.34, 4.882, 5.66];
sseExpr = Expr(
	Summation( i = 1, 6, (y[i] - b1 * x[i] ^ b2) ^ 2 )
);
b1 = 1;
b2 = 5;
{objVal, iters, gradient, hessian} = Minimize(
	sseExpr,
	{b1, b2},
	<<details( both ),
	<<tolerance( 10 ^ -16 )
);

```

**Example 3**

```js

Names Default To Here( 1 );
/*Simple example with some optional arguments*/
x = 0;
y = 0;
{objVal, iters, gradient, hessian} = Minimize(
	((2 * x ^ 2 + 12 * x * y - y * 3)),
	{x( -1, 1 ), y( -1, 1 )},
	<<maxIter( 200 ),
	<<tolerance( 10 ^ -6 ),
	<<details( both )
);

```

**Example 4**

```js

Names Default To Here( 1 );
/*Example with gradient, hessian, and method(nr) options*/
xx = [1.309, 1.471, 1.49, 1.565, 1.611, 1.68];
yy = [2.138, 3.421, 3.597, 4.34, 4.882, 5.66];
tmp3 = Expr(
	Summation( i = 1, 6, (yy[i] - b1 * xx[i] ^ b2) ^ 2 )
);
b1 = 1;
b2 = 5;
Minimize(
	tmp3,
	{b1, b2},
	<<details( both ),
	<<tolerance( 10 ^ -10 ),
	<<Method( nr ),
	<<gradient(
		{Summation( i = 1, 6, -2 * xx[i] ^ b2 * (yy[i] - b1 * xx[i] ^ b2) ),
		Summation(
			i = 1,
			6,
			2 * (b1 * Ln( xx[i] ) * xx[i] ^ b2) * (b1 * xx[i] ^ b2 - yy[i])
		)}
	),
	<<hessian(
		{{Summation( i = 1, 6, 2 * xx[i] ^ (2 * b2) ),
		Summation(
			i = 1,
			6,
			2 * Ln( xx[i] ) * xx[i] ^ b2 * (2 * b1 * xx[i] ^ b2 - yy[i])
		)}, {Summation(
			i = 1,
			6,
			2 * b1 * Ln( xx[i] ) ^ 2 * xx[i] ^ b2 * (2 * b1 * xx[i] ^ b2 - yy[i])
		)}}
	)
);

```

**Example 5**

```js

Names Default To Here( 1 );
/*Example with usNumericDeriv and method(sr1) options*/
xx = [1.309, 1.471, 1.49, 1.565, 1.611, 1.68];
yy = [2.138, 3.421, 3.597, 4.34, 4.882, 5.66];
tmp3 = Expr(
	Summation( i = 1, 6, (yy[i] - b1 * xx[i] ^ b2) ^ 2 )
);
b1 = 1;
b2 = 5;
{objValue, iter, gradient, hessian} = Minimize(
	tmp3,
	{b1, b2},
	<<details( both ),
	<<tolerance( 10 ^ -16 ),
	<<Method( sr1 ),
	<<useNumericDeriv( True )
);

```

### Minimum

**Syntax:** y = Min( x1, ... ); y = Minimum( x1, ... )

**Description:** Returns the minimum value among the arguments or of the values within a single matrix or list argument.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Eval List( {Min( Pi(), e() ), Min( [33 44 22] )} );

```

### Minus

**Syntax:** y = -x; y = Minus( x )

**Description:** Negates x, which can be a number, matrix, or list of numbers.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
-Pi();

```

### Minute

**Syntax:** min = Minute( datetime )

**Description:** Returns the minutes part of a date-time value, 0 - 59.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Minute( Today() );

```

### Mod

**Syntax:** z = Modulo( x, y )

**Description:** Returns the remainder from dividing x by y. The remainder has the same sign as x.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Modulo( 10, 3 );

```

### Mode

**Syntax:** y = Mode( list or matrix )

**Description:** Picks the &apos;most frequent&apos; item from a matrix or list, the lower value for ties

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Show( Mode( [1, 2, 3, 2, 1] ), Mode( {"a", "b", "c", "b", "a", "b"} ) );

```

### Modified Internal Rate of Return

**Syntax:** x = Modified Internal Rate of Return( values, finance_rate, reinvest_rate );

x = Modified Internal Rate of Return( finance_rate, reinvest_rate, value1, value2, <value3, ...> )

**Description:** Returns the modified internal rate of return for a series of periodic cash flows, taking into account both the cost of the investment and the interest received on reinvestment of cash. Equivalent to the MIRR function in Microsoft Excel. The second prototype of the function accepts all scalar arguments.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Modified Internal Rate of Return( [-10000, 1000, 900, 950], .1, -.12 );
Modified Internal Rate of Return( .1, -.12, -10000, 1000, 900, 950 );

```

### Modulo

**Syntax:** z = Modulo( x, y )

**Description:** Returns the remainder from dividing x by y. The remainder has the same sign as x.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Modulo( 10, 3 );

```

### Month

**Syntax:** mon = Month( datetime )

**Description:** Returns the month part of a date-time value, 1 - 12.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Month( Today() );

```

### MouseBox

**Syntax:** box = MouseBox( displayBoxArgs )

**Description:** Returns a box that can make JSL callbacks for mouse actions

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	MouseBox(/*first sibling*/Text Box( "drag from here" ),
		<<setDragText( "hello" ),
		<<setTooltip( "source" ),
		<<setDragEnable( 1 ),
		<<setDragBegin(/* decide if a drag is allowed */
			Function( {this, clickpt},
				"magic text";/* 0.0 to prevent the drag.  1.0 is the same as 'this<<getDragText' */
			)
		),
		<<setDragEnd(/* clean up after a drag finishes or cancels */
			Function( {this, clickpt, how}, /* how=move,copy,ignore */
				If(
					how != "ignore" & !Is Empty( this << getDestBox ) & this << getDestBox
					 == this << sib, /* the getDestBox check makes sure the destination of the drag-and-drop was my sibling and not some other program beyond our control */
					(this << child) << setText(
						"done!" /* 'move' suggests clearing the source */
					)
				)
			)
		)
	),
	MouseBox(/*second sibling*/Text Box( "drag to here" ),
		<<setTooltip( "destination" ),
		<<setDropEnable( 1 ),
		<<setDropTrack(/* decide if dropping is allowed, before the drop.  The getSourceBox check makes sure the source of the drag-and-drop is my sibling, and not some other program */
			Function( {this, clickpt},
				If(
					!Is Empty( this << getSourceBox ) & this == (this << getSourceBox) <<
					sib,
					1, /*else*/0
				)
			)
		),
		<<setDropCommit(/* accept the drop */Function( {this, clickpt, text},
				(this << child) << setText( text )
			)
		)
	)
);

```

### Mousetrap

**Syntax:** Mousetrap( dragScript, <mouseUpScript> )

**Description:** Evaluates the dragScript expression repeatedly while the mouse is pressed within the graph and not handled by another graph object. Before running the script, the globals x and y are set to the mouse value and are restored to their original values afterward. The mouseUpScript expression is run after the mouse button is released.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	exx = 20;
	exy = 50;,
	Graph Box(
		Frame Size( 200, 200 ),
		Mousetrap(
			exx = x;
			exy = y;
		);
		Circle( {0, 0}, Sqrt( exx * exx + exy * exy ) );
	)
);

```

### Move Directory

**Syntax:** rc = Move Directory( from, to )

**Description:** Moves a directory from one place to another. Returns 1 if the directory was moved. Returns 0 if the directory was unable to be moved. Throws an error if the path is invalid or does not exist.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Delete Directory( "$TEMP/subB" );
Delete Directory( "$TEMP/Loss Function Templates" );
rc0 = Copy Directory( "$SAMPLE_DATA/Loss Function Templates", "$TEMP" );
Create Directory( "$TEMP/subB" );
rc1 = Move Directory( "$TEMP/Loss Function Templates", "$TEMP/subB" );
rc2 = Directory Exists( "$TEMP/Loss Function Templates" );
rc3 = Directory Exists( "$TEMP/subB" );
rc4 = Delete Directory( "$TEMP/subB" );
rc5 = Directory Exists( "$TEMP/subB" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||
Char( rc4 ) || " " || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Move File

**Syntax:** rc = Move File( from, to )

**Description:** Moves a file from one place to another. Returns 1 if the file was moved. Returns 0 if the file was unable to be moved. Throws an error when the path is invalid or does not exist.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
If( File Exists( "$TEMP/y.jmp" ),
	Delete File( "$TEMP/y.jmp" )
);
rc0 = Copy File( "$SAMPLE_DATA/Loss Function Templates/Normal.jmp", "$TEMP/x.jmp" );
rc1 = Move File( "$TEMP/x.jmp", "$TEMP/y.jmp" );
rc2 = File Exists( "$TEMP/x.jmp" );
rc3 = File Exists( "$TEMP/y.jmp" );
rc4 = Delete File( "$TEMP/y.jmp" );
rc5 = File Exists( "$TEMP/y.jmp" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||
Char( rc4 ) || " " || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Move to Project

**Syntax:** Move to Project(<Source(project)>, <Destination(project)>, <Windows({list of windows to move})>)

**Description:** Moves one or more windows into a project, out of a project, or between projects. Only one of Source and Destination must be specified; the other will default to the current project. (Use only Source to move windows into the current project, and only Destination to move windows out of it.) A data table window will be moved together with its dependent reports, though only one need be specified in the Windows argument. If omitted, the Windows argument defaults to all open windows in the source project.

**JMP Version Added:** 14

**Example 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
report = dt << Run Script( "Bivariate" );
                             
project = New Project();
                             
Move to Project( destination( project ), windows( {report} ) );

```

**Example 2**

```js

Names Default To Here( 1 );
project = Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );
Move to Project( Source( project ) );
project << Close Window();

```

### Moving Average

**Syntax:** y = Moving Average( x, weighting, <before=-1>, <after=0>, <partial window is missing=0> )

**Description:** Returns a matrix of moving averages for the input matrix. before and after determine the range ("window") of items to average, where before can be -1 to indicate all prior items. If weighting is 1, all items have equal weight. If weighting is 0, items have linearly incremental weights. Otherwise, weighting is the parameter for exponential weighting (EWMA). partial window is missing indicates whether averages are reported when not all neighbors are present, which can occur at the ends or near missing values. If partial window is missing is nonzero, missing values are reported instead for such partial windows.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Eval List(
	{Moving Average( [1 2 1 2 3 4 9 9 9 9 9], 1, 3 ),
	Moving Average( [1 2 1 2 3 4 9 9 9 9 9], 0, 2, 2 ),
	Moving Average( [1 2 1 2 . 4 9 9 9 9 9], 1, 1, 1, 1 ),
	Moving Average( [1 2 1 2 3 4 9 9 9 9 9], 0.5 )}
);

```

### Multiple File Import

**Syntax:** mfiObj = Multiple File Import();

**Description:** Creates a Multiple File Import object; the object accepts messages to set a folder, filter files, and import. To bring up a dialog use the "Create Window" message. To immediately import use the "Import Data" message which will return a list of the tables that were created.

**JMP Version Added:** 14

**Interactive example**

```js

Names Default To Here( 1 );
// use the save-script-to-script-window button 
// in the MFI dialog to see more messages
// for filtering files and controlling the import
Multiple File Import(
	<<Set Folder( "$DESKTOP" ),
	<<Set Name Filter( "*.csv;" ),
	<<Set Name Enable( 1 )
) << Create Window;

```

**Scripting example**

```js

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Folder( "$SAMPLE_IMPORT_DATA" );
mfi << Set Name Filter( "*.txt" );
mfi << Set Name Enable( 1 );
tables = mfi << Import Data();

```

### Multiply

**Syntax:** y = x0 * x1; y = Multiply( x0, x1, ... )

**Description:** Multiplies all arguments, which can be numbers, matrices, or lists of numbers.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
2 * Pi();

```

### Multiply To

**Syntax:** y *= x; Multiply To( y, x )

**Description:** Multiplies a value to a variable or to a list of variables.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
ex = 3;
ex *= 2;
ex;

```

### Multivariate Normal Impute

**Syntax:** y = Multivariate Normal Impute( yVec, meanYvec, symCovMat, colMin, colMax )

**Description:** Returns a response vector with imputed values for the missing values in the yVec vector of responses. Imputations are based on a multivariate normal distribution with mean vector meanYvec and symmetric covariance matrix symCovMat. Optional arguments colMin and colMax are the respective vectors of column minimums and maximums. These arguments provide bounds for the imputations.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
mat = [0.430735257211985 -0.935632420013493 . 0.424649913158299,
. -0.687720061441453 0.29665732536624 -1.94898001941576,
-0.0425472526673373 0.463229145080277 0.635619352779951 .];
cov = Covariance( mat, <<"Pairwise"/*, <<"shrink"*/ );
colMean = V Mean( mat );
colMin = V Min( mat );
colMax = V Max( mat );
For( it = 1, it <= N Row( mat ), it++,
	mat[it, 0] = Multivariate Normal Impute( mat[it, 0], colMean, cov, colMin, colMax )`
);
Print( mat );

```

### Munger

**Syntax:** r = Munger( s, startPos, findStringOrNChars, <replaceString> )

**Description:** Searches the s argument for a substring or position depending on combination of arguments.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Eval List( {Munger( "over there", 1, "t", "" ), Munger( "17 June 2000", 4, 4, "March" )} );

```

### N Arg

**Syntax:** n = N Arg( expr )

**Description:** Returns the number of arguments of the evaluated expression head.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
N Arg( Expr( Sum( a, b, c ) ) );

```

### N Arg Expr

**Syntax:** n = N Arg Expr( expr )

**Description:** Returns the number of arguments of the expression head. This function is deprecated. Please use N Arg() instead.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
// See Example 2 for the deprecated N Arg Expr() equivalent
N Arg( Expr( Sum( a, b, c ) ) );

```

**Example 2**

```js

Names Default To Here( 1 );
// Deprecated
N Arg Expr( Sum( a, b, c ) );

```

### N Choose K

**Syntax:** m = N Choose K( n, k )

**Description:** Returns n! / (k! * (n - k)!), which is the number of ways to choose k items out of n, ignoring order.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
N Choose K( 5, 3 );

```

### N Col

**Syntax:** y = N Col(); y = N Col( dataTable ); y = N Col( matrix )

**Description:** Returns the number of columns in the current data table, a specified data table, or a matrix.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
N Col( [11 22, 33 44] );

```

### N Cols

**Syntax:** y = N Cols(); y = N Cols( dataTable ); y = N Col( matrix )

**Description:** Returns the number of columns in the current data table, a specified data table, or a matrix.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
N Col( [11 22, 33 44] );

```

### N Items

**Syntax:** y = N Items( x )

**Description:** Returns the number of items in a list, the number of elements in a matrix, the number of keys in an associative array, the number of functions and variables in a namespace, the number of methods and variables in a class object, or the number of children of a display box.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
N Items( {1, 2 + 3, [11 22]} );

```

**Example 2**

```js

Names Default To Here( 1 );
N Items( ["a" => 10, "b" => 3, => 0] );

```

**Example 3**

```js

Names Default To Here( 1 );
New Window( "boxes", hlist = H List Box( Button Box( "a" ), Button Box( "b" ) ) );
N Items( hlist );

```

### N Missing

**Syntax:** y = N Missing( x1, x2, ... )

**Description:** Returns the number of missing values among arguments.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
N Missing( 1, 2, ., 3, [11 22 . .], 4 );

```

### N Row

**Syntax:** y = N Row(); y = N Row( dt ); y = N Row( matrix )

**Description:** Returns the number of rows in the current data table, a specified data table, or a matrix.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
N Row( [11 22, 33 44] );

```

### N Rows

**Syntax:** y = N Rows(); y = N Rows( dt ); y = N Rows( matrix )

**Description:** Returns the number of rows in the current data table, a specified data table, or a matrix.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
N Rows( [11 22, 33 44] );

```

### N Table

**Syntax:** n = N Table()

**Description:** Returns the number of currently open data tables.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
N Table();

```

**Example 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Cars.jmp" );
Open( "$SAMPLE_DATA/Solubility.jmp" );
d = {};
For( i = 1, i <= N Table(), i++,
	d[i] = Data Table( i ) << GetName
);
d;

```

### NChooseK Matrix

**Syntax:** m = NChooseK Matrix( n, k )

**Description:** Creates a matrix of nChooseK(n,k) rows and k columns forming all the combinations of k integers from 1 to n.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Print( NChooseK Matrix( 5, 3 ) );

```

### Name

**Syntax:** Name(string)

**Description:** A name is simply something to call an item. Names are used for both variables and functions, and can be used directly in scripts as long as certain rules are followed. If the name begins with an alphabetic character or underscore, and continues with alphanumeric characters, whitespace, Unicode mathematical symbols and certain punctuation (apostrophes (’), percent signs (%), periods (.), backslashes (\), and underscores (_)), then the name can be used directly in scripts. Names that do not follow these rules can be used by using the Name() keyword.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
Name( "taxable income(2011)" ) = 456000;
tax = .25;
Print( tax * Name( "taxable income(2011)" ) );

```

### Name Expr

**Syntax:** y = Name Expr( x )

**Description:** Returns the value of a symbol, without evaluating it if it is an expression.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
ex = Expr( 1 + 2 );
Eval List( {ex, Name Expr( ex )} );

```

### Names Default To Here

**Syntax:** Names Default To Here( boolean )

**Description:** Determines where unresolved names are stored, either as a global/local ( 0 ) or in the Here: namespace ( 1 ).

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
/* Variable x will be stored in the Here: namespace by default */x = 1;
Show( x );

```

### Namespace

**Syntax:** ns = Namespace( namespace reference )

**Description:** Return a reference to the namespace specified by the name argument.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
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

```js

Names Default To Here( 1 );
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

### Neg Binomial Distribution

**Syntax:** cumprob = Neg Binomial Distribution( p, n, k )

**Description:** Returns the probability that a negative binomially distributed random variable is less than or equal to k, where the probability of success is p and the number of successes is n.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
exnbdp = 0.5;
exnbdn = 10;
New Window( "Example: Neg Binomial Distribution",
	exnbdy = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -1, 41 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( exnbdk = 0, exnbdk < 100, exnbdk++,
			H Line(
				exnbdk,
				exnbdk + 1,
				Neg Binomial Distribution( exnbdp, Round( exnbdn ), exnbdk )
			);
			V Line(
				exnbdk + 1,
				Neg Binomial Distribution( exnbdp, Round( exnbdn ), exnbdk ),
				Neg Binomial Distribution( exnbdp, Round( exnbdn ), exnbdk + 1 )
			);
		);
		Text( {30, 0.07}, "n=", Round( exnbdn ), " p=", Round( exnbdp, 2 ) );
	),
	H List Box( Slider Box( 0, 1, exnbdp, exnbdy << reshow ), Text Box( " p" ) ),
	H List Box( Slider Box( 1, 20, exnbdn, exnbdy << reshow ), Text Box( " n" ) )
);

```

### Neg Binomial Probability

**Syntax:** prob = Neg Binomial Probability( p, n, k )

**Description:** Returns the probability that a negative binomially distributed random variable is equal to k, where the probability of success is p and the number of successes is n.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
exnbpp = 0.5;
exnbpn = 10;
New Window( "Example: Neg Binomial Probability",
	exnbpy = Graph Box(
		Y Scale( 0, 0.3 ),
		X Scale( -1, 41 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( exnbpk = 0, exnbpk < 100, exnbpk++,
			V Line( exnbpk, 0, Neg Binomial Probability( exnbpp, exnbpn, exnbpk ) )
		);
		Text( {30, 0.27}, "n=", Round( exnbpn ), " p=", Round( exnbpp, 2 ) );
	),
	H List Box( Slider Box( 0, 1, exnbpp, exnbpy << reshow ), Text Box( " p" ) ),
	H List Box( Slider Box( 0, 40, exnbpn, exnbpy << reshow ), Text Box( " n" ) )
);

```

### Negative Binomial Distribution

**Syntax:** cumprob = Negative Binomial Distribution( k, lambda, sigma )

**Description:** Returns the probability that a Negative Binomial distributed random variable is less than or equal to k, where lambda is the location parameter, sigma is the scale parameter, and k is the count of interest.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
lambda = 20;
sigma = 2;
New Window( "Example: Negative Binomial Distribution",
	ppy = Graph Box(
		Y Scale( 0, 1.01 ),
		X Scale( -1, 40 ),
		Pen Color( "red" ),
		Pen Size( 1 );
		For( k = 0, k <= 40, k++,
			H Line( k, k + 1, Negative Binomial Distribution( k, lambda, sigma ) );
			V Line(
				k + 1,
				Negative Binomial Distribution( k, lambda, sigma ),
				Negative Binomial Distribution( k + 1, lambda, sigma )
			);
		);
		Text( {2, 0.95}, "\!U03BB=", Round( lambda, 2 ) );
		Text( {2, 0.87}, "\!U03C3=", Round( sigma, 2 ) );
	),
	H List Box( Slider Box( 3, 40, lambda, ppy << reshow ), Text Box( " \!U03BB" ) ),
	H List Box( Slider Box( .01, 5, sigma, ppy << reshow ), Text Box( " \!U03C3" ) )
);

```

### Negative Binomial Probability

**Syntax:** prob = Negative Binomial Probability( k, lambda, sigma )

**Description:** Returns the probability that a Negative Binomial distributed random variable is equal to k, where lambda is the location parameter, sigma is the scale parameter, and k is the count of interest.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
lambda = 5;
sigma = 2;
New Window( "Poisson and Negative Binomial",
	clty = Graph Box(
		Y Scale( 0, 0.3 ),
		X Scale( -1, 20.5 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( x = 0, x <= 20, x++,
			Pen Color( "red" );
			V Line( x, 0, Poisson Probability( lambda, x ) );
			Pen Color( "blue" );
			V Line( x + 0.35, 0, Negative Binomial Probability( x, lambda, sigma ) );
		);
		Text( {1, 0.25}, "\!U03BB=", Round( lambda, 8 ), " \!U03C3=", Round( sigma, 8 ) );
		Text( {0, 0.28}, "Red = Poisson, Blue = Negative Binomial" );
	),
	H List Box( Slider Box( 3, 10, lambda, clty << reshow ), Text Box( " \!U03BB" ) ),
	H List Box( Slider Box( .01, 5, sigma, clty << reshow ), Text Box( " \!U03C3" ) )
);

```

### Negative Binomial Quantile

**Syntax:** q = Gamma Negative Binomial Quantile( lambda, sigma, cumprob )

**Description:** Returns the smallest integer quantile for which the cumulative probability of the Negative Binomial( lambda, sigma ) distribution is larger than or equal to cumprob.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
qexpl = 20;
qexps = 2;
qexpn = 40;
qexpq = 0.5;
New Window( "Example: Negative Binomial Quantile",
	qexpy = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, 41 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( qexpk = 0, qexpk < Round( qexpn ), qexpk++,
			H Line(
				qexpk,
				qexpk + 1,
				Negative Binomial Distribution( qexpk, qexpl, qexps )
			);
			V Line(
				qexpk + 1,
				Negative Binomial Distribution( qexpk, qexpl, qexps ),
				Negative Binomial Distribution( qexpk + 1, qexpl, qexps )
			);
		);
		Pen Color( "blue" );
		V Line( Negative Binomial Quantile( qexpl, qexps, qexpq ), 0, 1 );
		Text( {1, 0.9}, " \!U03BB=", Round( qexpl, 2 ), " \!U03C3=", Round( qexps, 2 ) );
		Text(
			{1, 0.8},
			" q=",
			Round( qexpq, 2 ),
			" quantile=",
			Round( Negative Binomial Quantile( qexpl, qexps, qexpq ) )
		);
	),
	H List Box( Slider Box( 3, 40, qexpl, qexpy << reshow ), Text Box( " \!U03BB" ) ),
	H List Box( Slider Box( .01, 5, qexps, qexpy << reshow ), Text Box( " \!U03C3" ) ),
	H List Box( Slider Box( 0, 1, qexpq, qexpy << reshow ), Text Box( " q" ) )
);

```

### Net Present Value

**Syntax:** x = Net Present Value( rate, values );

x = Net Present Value( rate, value1, value2, <value3, ...> )

**Description:** Returns the net present value of an investment by using a discount rate and a series of future payments (negative values) and income (positive values). The values argument is a one dimensional matrix. Equivalent to the NPV function in Microsoft Excel. The second prototype of the function accepts all scalar arguments.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Net Present Value( .05, [-10000, 1000, 900, 9500] );
Net Present Value( .05, -10000, 1000, 900, 9500 );

```

### New CAS Action

**Syntax:** action = New CAS Action(...)

**Description:** Creates a CAS Action.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );

echo = [=> ];
echo["a"] = 1;
echo["b"] = JSON Literal( true );
echo["c"] = 3.141559;
action = New CAS Action( Action( "builtins.echo" ), JSON( echo ) );

```

### New CAS DATA Step action

**Syntax:** action = New CAS DATA Step Action(...)

**Description:** Creates a CAS DATA step action.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );

cas = Current CAS Connection();
code =
"\[
	data temp;
	x = 9.1; y = 6; z = sqrt(x**2 + y**2);
	A = "SAS"; B = "Statistics";
	put _ALL_;              /* display all variables and values */
	run;
]\";
action = New CAS DATA Step action( Code( code ) );
cas << Submit( action );

```

### New CAS Server

**Syntax:** cas = New CAS Server(<...>)

**Description:** Creates a new CAS server.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );

url = "http://myCasURL";
cas = New CAS Server( Connect( URL( url ), Prompt( IfNeeded ) ) );

```

### New Clipboard

**Syntax:** clp = New Clipboard( <<<Get From OS> )

**Description:** Creates a new Clipboard, either empty or with access to the OS clipboard.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );

clp = New Clipboard( <<Get From OS );
New Window( "Img", clp << Get Flavor Data( "Graphic" ) )
;

```

### New Column

**Syntax:** dc = New Column( name, <"Numeric"|"Character"|"RowState"|"Expression">, <"Continuous"|"Ordinal"|"Nominal"|"Multiple Response"|"Unstructured Text"|"Vector"|"None">, <Width( n )|Format(format name, width, precision)>, <Like(:other column)>, <actions> )

**Description:** Creates a new column in the current data table. The optional actions arguments are any messages that data columns support.

**JMP Version Added:** Before version 14

**Like**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "like name", Like( :name ) );

```

**Simple**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "example", "Numeric", "Continuous", Width( 5 ), <<Set Each Value( 100 ) );

```

### New Column by Text Matching

**Syntax:** dc = New Column by Text Matching( Column(:name), Set Regex(), <Output Column Name("Name")>, <Use Result(0 | 1)> )

**Description:** Creates a new column by performing a regular expression pattern match on an existing column.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );
New Column by Text Matching(
	Column( :Narrative Cause ),
	Set Regex( Library( "Words" ), Library( "Time" ), Library( "Units" ) ),
	Output Column Name( "Match Output" ),
	Use Result( 1 )
);

```

### New Custom Function

**Syntax:** f=New Custom Function(namespace, name, function definition)

**Description:** Create a new custom function object. A custom function will be colorized in the script editor and show up in the Scripting Index. The required information for a custom user function are a namespace (to prevent collisions with global functions), a name, and a function definition. Other help information can be added using messages. Use the Add Custom Functions command to publish the new function into the JMP environment.

**JMP Version Added:** 14

**Example 1**

```js

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );

```

**Example 2**

```js

Names Default To Here( 1 );
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

```js

Names Default To Here( 1 );
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

### New Data Connector

**Syntax:** result = New Data Connector( Type( type ) | ID( id ) | File( path ) | Spec( string ) | Base( data connector ), < Option1( value1 ) >, ..., < OptionN( valueN ) > )

**Description:** Create a data connector configuration object.

**JMP Version Added:** 18

**Example 1**

```js

Names Default To Here( 1 );

// Create a data connector from scratch
dc = New Data Connector( Type( "ODBC" ), Database( "foo" ), Server( "bar.example.com" ) );
Show( dc << Get( Database ) );  // Overridden database value "foo"
Show( dc << Get( Driver ) );  // Default driver value . (missing)
dc << Set( Database( "foo2" ), Driver( "SQL Server" ) );
Show( dc << Get( Database ) );  // New database value "foo2"
Show( dc << Get( Driver ) );  // New driver value "SQL Server"

```

**Example 2**

```js

Names Default To Here( 1 );

// Launch Query Builder from a SQL Server data source
dc = New Data Connector(
	ID( "com.jmp.sql_server" ), 
    // All these example values need to be replaced with real ones
	Server( "database.example.com" ),
	Database( "MainDatabase" ),
	User( "username" ),
	Password( "password" )
);
New SQL Query( Connection( dc ) ) << Modify;

```

### New HTTP Request

**Syntax:** obj = New HTTP Request(URL(...), Method(...), <Form(<Fields(...)>, <Files(...)>)> | <File(...)> | <Blob(...)> | <JSON(...)>, <QueryString(...)>, <Headers(...)>, <Username(...)>, <Password(...)>)

**Description:** Creates a request to send to a web service.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );

getSentiment = Function( {text},
	{Default Local},
	fields = Associative Array();
	fields["text"] = text;
	s = New HTTP Request(
		URL( "http://text-processing.com/api/sentiment/" ),
		Method( "POST" ),
		Form( Fields( fields ) ),
		Headers( {"Accept: application/json"} )
	) << Send;
	sAsList = Parse JSON( s );
	retval = Associative Array();
	retval["pos"] = sAsList["probability"]["pos"];
	retval["neg"] = sAsList["probability"]["neg"];
	retval["neutral"] = sAsList["probability"]["neutral"];
	retval["label"] = sAsList["label"];
	retval;
);
                         
addSentimentColumns = Function( {dt, colname, bLabel, bValues},
	{Default Local},
	col = Column( dt, colname );
	colLabel = "Sentiment_Label(" || colname || ")";
	colValPos = "Sentiment_Pos(" || colname || ")";
	colValNeg = "Sentiment_Neg(" || colname || ")";
	colValNeutral = "Sentiment_Neutral(" || colname || ")";
	If( bLabel,
		dt << New Column( colLabel, Character )
	);
	If( bValues,
		dt << New Column( colValPos, Numeric );
		dt << New Column( colValNeg, Numeric );
		dt << New Column( colValNeutral, Numeric );
	);
	For( i = 1, i <= N Rows( dt ), i++,
		sentiment = getSentiment( col[i] );
		If( bLabel,
			Column( dt, colLabel )[i] = sentiment["label"]
		);
		If( bValues,
			Column( dt, colValPos )[i] = sentiment["pos"];
			Column( dt, colValNeg )[i] = sentiment["neg"];
			Column( dt, colValNeutral )[i] = sentiment["neutral"];
		);
	);
);
                         
dt2 = Open( "$SAMPLE_DATA\Cereal.jmp" );
addSentimentColumns( dt2, "Name", 1, 1 );

```

### New Heat Image

**Syntax:** New Heat Image( Matrix, <Color Theme / gradient ( ... )>

**Description:** Creates a heat map image based on a matrix and color theme or gradient.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );

nx = 20; // data is this size
ny = 15;
data = J( ny, nx, Random Normal() ); // ny=rows, nx=cols
// create a magnified matrix for seeing each value
magnify = 10;
big data = J( N Rows( data ) * magnify, N Cols( data ) * magnify );
big data = Transform Each( {z, {row, col}}, big data, 
	// and filling each value with one from the small matrix
	data[Floor( (row - 1) / magnify ) + 1, Floor( (col - 1) / magnify ) + 1]
);
New Window( "small and big",
	Lineup Box( N Col( 3 ),
		New Heat Image(
			data,
			gradient(
				{Color Theme( "Blue To Gray To Orange" ),
				Scale Type( "Standard Deviation" )}
			)
		),
		New Heat Image(
			big data,
			gradient(
				{Color Theme( "Blue To Gray To Orange" ),
				Scale Type( "Standard Deviation" )}
			)
		),
		New Heat Image(
			Abs( big data ),
			gradient(
				{Color Theme( "White to Black" ), Scale Values( [0 2] ),
				Reverse Gradient( 1 )}
			)
		)
	)
);

```

### New IP21 Client

**Syntax:** New IP21 Client(URL(base URL), <Authentication Method("None"|"Basic"|"NTLM"|"Kerberos")>,

                   <Username(userid)>,<Password(password)>)

**Description:** Creates a new IP21 Client instance that can be used to import data from an AspenTech IP.21 server.

**JMP Version Added:** 19

### New Image

**Syntax:** img = New Image()

img = New Image( width, height )

img = New Image( pathname )

img = New Image( picture )

img = New Image( matrix of JSL color pixels ) 

img = New Image( rgb|r|g|rgba, {i, i, i} )

**Description:** Returns a new image which can then be edited through JSL commands. If a path is specified to an existing image file, the file should be a .JPG, .PNG, .GIF, .BMP or .TIF file.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
image = New Image( "$SAMPLE_IMAGES/windmap.png" );
New Window( "new image", image );

```

**Example 2**

```js

Names Default To Here( 1 );
pic = Open( "$SAMPLE_IMAGES/windmap.png", png );
image2 = New Image( pic );
New Window( "new image", image2 );

```

**Example 3**

```js

Names Default To Here( 1 );
image3 = New Image();
mat = J( 256, 256 );
For( y = 0, y < 256, y++,
	For( x = 0, x < 256, x++,
		mat[y * 256 + x] = RGB Color( y / 255.0, 0.0, x / 255.0 )
	)
);
image3 << Set Pixels( mat );
New Window( "image", image3 );

```

### New JMP Live

**Syntax:** New JMP Live(Connection("Connection Name"), <Prompt("No" | "If Needed")>)

**Description:** Start a connection to JMP Live using stored connection information. Connection is optional and defaults to the connection specified as the default in Connection Manager. If provided it looks up the connection by the name. Prompt is optional and defaults to "No". The valid values for prompt are "Yes", "No", and "If Needed". A value of "Yes" always prompts for login credentials. A value of "No" never prompts for login credentials, but could result in an authentication failure. A value of "If Needed"  prompts for credentials only if the current stored credentials are not valid. Returns a JMP Live Connection object.

**JMP Version Added:** 15

**Example 1**

```js

Names Default To Here( 1 );
jmplive = New JMP Live();

```

**Example 2**

```js

Names Default To Here( 1 );
jmplive = New JMP Live( Connection( "MyJMPLive" ), Prompt( No ) );

```

**Example 3**

```js

Names Default To Here( 1 );
jmplive = New JMP Live( Connection( "MyJMPLive" ), Prompt( If Needed ) );

```

### New JMP Live Content

**Syntax:** obj = New JMP Live Content(jmpreport|Image(path_to_image)|Data(jmpdatatable)|Map(jmpmap), <Title(...)>, <Description(...)>, <Publish Data(0|1)>, <Enable Warnings(0|1)>, <Optimization("Interactivity" | "Performance")>

**Description:** Creates interactive content for publishing on JMP Live. 

	The first parameter is required and specifies the data to use for the content. That data can be a report, a data table, a map or an image. 

	Title and Description are used to customize any type of content that is being published. The remaining parameters are optional and used to customize report content only. 

	Publish Data indicates whether the data used in the report is published to JMP Live. The data for the report is published by default.

	Enable Warnings indicates whether Control Chart Warnings should be enabled for the report. Control Chart Warnings are disabled by default. 

	Optimization is used to customize the way the report is published to JMP Live. The report is published to enable greater interactivity by default.

**JMP Version Added:** 17

**Example 1**

```js

Names Default To Here( 1 );
bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
dist = bc << Run Script( "Distribution" );

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Folder for Sample Content" )
);
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content(
	dist,
	Title( "Distribution Web Report" ),
	Description( "This report was created with the sample found in the Scripting Index" ),
	Publish Data( 1 ),
	Optimization( "Interactivity" )
);

jmpliveresult = liveconnection << Publish( content, Folder( folder ) );

```

**Example 2**

```js

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Folder for Data Content" )
);
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content(
	Data( "$SAMPLE_DATA/Big Class.jmp" ),
	Title( "Big Class Sample Table" ),
	Description(
		"This data table was published with the sample found in the Scripting Index"
	)
);

jmpliveresult = liveconnection << Publish( content, Folder( folder ) );

```

**Example 3**

```js

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Folder for Map Content" )
);
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content( Map( "$SAMPLE_DATA/S4-XY.jmp" ) );

jmpliveresult = liveconnection << Publish( content, Folder( folder ) );

```

**Example 4**

```js

Names Default To Here( 1 );
liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Folder for Image Content" )
);
folder = jmpliveresult << As Scriptable;

imageContent = New JMP Live Content(
	Image( "$SAMPLE_IMAGES/black rhino footprint.jpg" ),
	Title( "Rhino Footprint" ),
	Description( "An image of a rhino footprint from the Sample Data" )
);

jmpliveresult = liveconnection << Publish( imageContent, Folder( folder ) );

```

### New Multi HTTP Request

**Syntax:** multi_request = New Multi HTTP Request()

**Description:** Sends or downloads multiple HTTP requests in parallel.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );

requests = New Multi HTTP Request();
requests << Add(
	New HTTP Request(
		Method( "GET" ),
		URL(
			"http://cdimage.ubuntu.com/lubuntu/releases/20.04.3/release/lubuntu-20.04.3-desktop-amd64.iso"
		)
	)
);

requests << Add(
	New HTTP Request(
		Method( "GET" ),
		URL(
			"http://downloads.sourceforge.net/clonezilla/clonezilla-live-2.7.3-19-amd64.iso"
		)
	)
);

data = requests << Download( "show progress", "detailed" );
http_requests = requests << Get Requests();
For( i = 1, i <= N Items( http_requests ), i++,
	Show( http_requests[i] << Get Mime Type() )
);

```

### New Namespace

**Syntax:** ns = New Namespace( <name>, <list of expressions> )

**Description:** Create a new namespace with the name specified by the name argument or with an anonymous name if name is not specified.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
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

### New OAuth2

**Syntax:** oauth2 = New OAuth2()

**Description:** Creates a new OAuth2 authorization.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );

/*
https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow
*/

/*
Note: the "code" parameter is set automatically after the redirect occurs
*/
auth_url = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize";
token_url = "https://login.microsoftonline.com/common/oauth2/v2.0/token";
redirect_url = "http://localhost/myapp/";
client_id = "6731de76-14a6-49ae-97bc-6eba6914391e";
client_secret = "JqQX2PNo9bpM0uEihUPzyrh";
scope = "openid offline_access https://graph.microsoft.com/user.read";
auth_fields = [=> ];
token_fields = [=> ];
                                          
oauth2 = New OAuth2();
oauth2 << Grant Type( "Authorization Code" );
oauth2 << Auth URL( auth_url );
oauth2 << Token URL( token_url );
oauth2 << Redirect URL( redirect_url );
                                          
auth_fields["scope"] = scope;
auth_fields["client_id"] = client_id;
token_fields["client_secret"] = client_secret;
                                          
oauth2 << Auth Fields( auth_fields );
oauth2 << Token Fields( token_fields );
                                          
auth_header = oauth2 << Get Auth Header();
request = New HTTP Request(
	URL( "https://graph.microsoft.com/v1.0/me" ),
	Headers( {auth_header} ),
	Method( "GET" )
);
data = request << Send;

```

### New OAuth2 Token

**Syntax:** token = New OAuth2 Token( Account("jmpgoogldev@gmail.com"), Client ID("test"), Client Secret("test 2"), Refresh Token(""), Token URL(""))

**Description:** Creates an OAuth2 Token for securely accessing data across many different web APIs.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
token = New OAuth2 Token(
	Account( "jmpgoogldev@gmail.com" ),
	Client ID( "test" ),
	Client Secret( "test 2" ),
	Refresh Token( "" ),
	Token URL( "" )
);

```

### New Object

**Syntax:** New Object( "class name" | class name | class reference( constructor arguments* ) )

**Description:** Creates an instance object of a class.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
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
		New Object(
			complex( real * y:real - imag * y:imag, imag * y:real + real * y:imag )
		)
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

### New PI Client

**Syntax:** New Pi Client(URL(base URL), <Authentication Method("None"|"Basic"|"NTLM"|"Kerberos")>,

                   <Username(userid)>,<Password(password)>)

**Description:** Creates a new PI Client instance that can be used to import data from a PI server.

**JMP Version Added:** 17

**Example 1**

```js

Names Default To Here( 1 );
/* Import raw data */
client = New PI Client(
	URL( "https://myserver.com/piwebapi" ),
	Authentication Method( "basic" ),
	Username( "myuserid" ),
	Password( "mypassword" )
);
importer = client << Importer(
	AF Path(
		"\\myserver\PIData\Atlanta Data Center\Server Rack1\ION 6200 Power Meter1|I A"
	), /* Asset Framework path */
	Series( "raw" ),
	Start Time( "*-1d" ), /* PI time string */
	End Time( "*" ),      /* PI time string */
	Boundary Type( "inside" ), /* choices are "inside", "outside", "interpolated" */
	UTC( 0 ), /* whether specified start/end times are based on UTC - default is zero */
	Max Count( 5000 ), /* Max. number of values to fetch - default is 5000 */
	Filter( "" ), /* Optional filter */
	Retrieve Attribute Status( 0 ) /* Whether to retrieve value attributes (i.e. "good", "questionable", "substituted", "annotated") - default is 0 */
);
importer << Run;

```

**Example 2**

```js

Names Default To Here( 1 );
/* Import plot data using Kerberos for authentication */
client = New PI Client(
	URL( "https://myserver.com/piwebapi" ),
	Authentication Method( "kerberos" )
);
importer = client << Importer(
	AF Path(
		"\\myserver\PIData\Atlanta Data Center\Server Rack1\ION 6200 Power Meter1|I A"
	),
	Series( "plot" ),
	Start Time( "*-1d" ),
	End Time( "*" ),
	UTC( 0 ),
	Intervals( 24 )
); /* No of time intervals to fetch*/
importer << Run;

```

**Example 3**

```js

Names Default To Here( 1 );
/* Import interpolated data from a server that does not require authentication */
client = New PI Client(
	URL( "https://myserver.com/piwebapi" ),
	Authentication Method( "none" )
);
importer = client << Importer(
	AF Path(
		"\\myserver\PIData\Atlanta Data Center\Server Rack1\ION 6200 Power Meter1|I A"
	),
	Series( "interpolated" ),
	Start Time( "*-1d" ),
	End Time( "*" ),
	UTC( 0 ),
	Sync Time Boundary Type( "inside" ),   /*  choices are "inside", "outside" */
	Interval( "1h" ),            /* interval period */
	Sync Time( "01JUL2021" ),    /* optional sync point - ie. intervals begin from this point */
	Filter( "" )
);
importer << Run;

```

### New Project

**Syntax:** project = new Project( <project messages> )

**Description:** Creates a new empty project window. One or more project messages can be included as arguments in order to create a project in one step.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
project = New Project();

```

**Example 2**

```js

Names Default To Here( 1 );
project = New Project(
	Run Script(
		dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
		dt << Run Script( "Bivariate" );
	)
);

```

**Example 3**

```js

Names Default To Here( 1 );
project = New Project(
	Run Script(
		Open( "$SAMPLE_DATA/Big Class.jmp" );
		New Window( "Big Class - Bivariate of weight by height",
			Bivariate( Y( :weight ), X( :height ) )
		);
	)
);

```

**Example 4**

```js

Names Default To Here( 1 );
project = New Project(
	Set Bookmarks(
		{File( "$SAMPLE_DATA/Animals.jmp" ), File( "$SAMPLE_DATA/Big Class.jmp" )}
	),
	Run Script(
		Open( "$SAMPLE_DATA/Big Class.jmp" );
		New Window( "Big Class - Bivariate of weight by height",
			Bivariate( Y( :weight ), X( :height ) )
		);
	)
);

```

**Example 5**

```js

Names Default To Here( 1 );
project = New Project(
	Run Script(
		Open( "$SAMPLE_SCRIPTS/demoCorr.jsl", Set Window ID( "demoCorr" ), Script )
	),
	Set Layout(
		H Splitter Box(
			<<Set Sizes( {0.15, 0.85} ),
			Tab Page Box( Title( "Window List" ), Window ID( "Windows" ) ),
			V Splitter Box(
				<<Set Sizes( {0.7, 0.3} ),
				Tab Page Box( Title( "demoCorr" ), Window ID( "demoCorr" ) ),
				Tab Page Box( Title( "Log" ), Window ID( "Log" ) )
			)
		)
	)
);

```

### New SQL Query

**Syntax:** obj = New SQL Query( Connection( "ODBC:my_connection_string" ), Select( Column( "mycolumn", "t1" ) ), From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) ) );



		obj = New SQL Query( Connection( "ODBC:my_connection_string;" ), CustomSQL( "SELECT c1, c2, c3 FROM my_table;" ) )

**Description:** Creates an SQL Query object for the connection, columns and table specified, or for the custom SQL query specified. Use Query Builder to generate scripts that create queries.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );

obj = New SQL Query(
	Connection( "ODBC:DSN=mydsn" ),
	Select(),
	From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) )
);

```

### New Table

**Syntax:** dt = New Table( name, <visibility("private"|"invisible"|"visible")>, <Enable Filter Views(bool)>, <actions> )

**Description:** Creates a new data table. "Invisible" hides the data table from view but lists it in the JMP Home Window. "Private" hides the table completely. "Visible" is the default, and creates a normal table that is visible and listed in the JMP Home Window. The optional actions arguments are any messages that data tables support.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Table( "Little Class",
	Add Rows( 3 ),
	New Column( "name", Character, Nominal, Set Values( {"KATIE", "LOUISE", "JANE"} ) ),
	New Column( "age", Nominal, Set Values( [12, 13, 13] ) ),
	New Column( "weight", Continuous, Set Values( [95, 123, 74] ) )
);

```

### New Web Report

**Syntax:** obj = New Web Report(...)

**Description:** Creates an interactive HTML report.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );

Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );
webreport = New Web Report(
	Add Report(
		Distribution(
			Continuous Distribution( Column( :weight ) ),
			Nominal Distribution( Column( :age ) )
		),
		Title( "Distribution Web Report" ),
		Description(
			"This report was created with the sample found in the Scripting Index"
		)
	),
	Add Report(
		Bivariate(
			Y( :weight ),
			X( :height ),
			Automatic Recalc( 1 ),
			Fit Line( {Line Color( {213, 72, 87} )} ),
			Local Data Filter( Add Filter( columns( :sex ) ) )
		)
	)
);
webreport << Index( Title( "Big Class Report" ) );
file = webreport << Save( "$TEMP" );
If( !Is Empty( file ),
	Web( file )
);

```

### New Window

**Syntax:** w = New Window( title, < <<Type("Report" | "Dialog" | "Modal Dialog" | "Journal" | "Launcher" | "Script")>, < << Return Result>, < << On Open(expr | function | method)>, < << On Close(expr | function | method)>, < <<On Validate(expr | function | method)>, < <<Show Menu(0 | 1)>, < <<Show Toolbars(0 | 1)>, < <<Suppress AutoHide(0 | 1)>, < <<Window View("Visible" | "Invisible")>, < <<Language("C" | "JavaScript" | "JSL" | "JSON" | "Python" | "R" | "SAS"  | "SQL" | "Text" | "XML")>, < <<Size(x, y)>, displayBox | script)

**Description:** Creates a window containing the specified display box or script. A report window is created by default, unless the Type option is specified. A window of Type("Modal Dialog") halts execution until the dialog is responded to. On Open, On Validate, and Return Result are available only for modal windows. On Open() evaluates its expression, function, or class method when the window is created. If On Close() returns false, the window is prevented from closing. On Validate() runs its expression, function, or class method when the OK button is clicked. If the expression returns true, the window is closed. Otherwise, the window remains open. Return Result changes the window&apos;s return value when it closes to match that of the deprecated Dialog() function. For window types that support toolbars, use Show Toolbars to specify changes from the default behavior. The options Show Menu and Suppress AutoHide are Windows only. The Window View("Invisible") option can be used for any window other than a Modal Dialog. A window of Type("Script") creates a JSL document unless the <<Language option is specified.

**JMP Version Added:** Before version 14

**[Win] Toolbars and Menus**

```js

Names Default To Here( 1 );
// Compare settings for toolbars and menus
// Suppress AutoHide is Windows only
g = Graph Box(
	Frame Size( 300, 300 ),
	Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
	Pen Color( "Blue" );
	Line( [10 30 70], [88 22 44] );
);
New Window( "Default - menu and toolbars", g );
New Window( "Menu, no toolbars, suppress autohide",
	Suppress AutoHide( 1 ),
	Show Toolbars( 0 ),
	g
);
New Window( "Toolbars, no menu", Show Menu( 0 ), g );
New Window( "No menu, no toolbars", Show Menu( 0 ), Show Toolbars( 0 ), g );

```

**Dialog**

```js

Names Default To Here( 1 );

ex = New Window( "Dialog example",
	<<Type( "Dialog" ),
	V List Box(
		Panel Box( "Sample data dialog",
			Button Box( "Open Sample Data", Open( "$SAMPLE_DATA/Big Class.jmp" ) )
		),
		H List Box( Button Box( "Close", Try( ex << CloseWindow ) ) )
	)
);

```

**Invisible**

```js

Names Default To Here( 1 );

g = Graph Box(
	Frame Size( 300, 300 ),
	Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
	Pen Color( "Blue" );
	Line( [10 30 70], [88 22 44] );
);
w = New Window( "My Window's Title", <<WindowView( "Invisible" ), g );
p = w << Get Picture();
w << Close Window;
psize = p << Size;
New Window( "picture", Outline Box( "picture size: " || Char( psize ), p ) );

```

**Modal Dialog**

```js

Names Default To Here( 1 );

ex = New Window( "Modal Dialog example",
	<<Type( "Modal Dialog" ),
	<<Return Result,
	<<On Validate(
		num = myEditBox << Get;
		If( num >= 1 & num <= 100, // in range
			myEditBox << Background Color( "Background" ); // this field does not need attention
			1; //the number is good, validate
		, // else out of range
			myEditBox << Background Color( "Light Yellow" ); // this field needs attention
			0; // the number is bad, do not validate
		) // the result of this if(...) is the OnValidate( ) answer, 0 or 1
		;
	),
	V List Box(
		Text Box( "Enter a value between [1,100]:" ),
		H List Box( myEditBox = Number Edit Box( 42 ) ),
		H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
	)
);

//  the Modal window must be closed before the following code runs

If(
	ex["button"] == 1 // not canceled
, // then show the value
	Write( ex["myEditBox"] ); // note: myEditBox is the name of the variable holding the text edit box
, // else report no selection
	Write( "CANCEL" ); // cancel button or red X was pressed
);

```

**Python script**

```js

Names Default To Here( 1 );
pyscript = "\[import numpy as np
a = np.arange(15).reshape(3, 5)]\";
ex = New Window( "Script example", <<Type( "Script" ), <<Language( "Python" ), pyscript );

```

**Report**

```js

Names Default To Here( 1 );
g = Graph Box(
	Frame Size( 300, 300 ),
	Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
	Pen Color( "Blue" );
	Line( [10 30 70], [88 22 44] );
);
New Window( "My Window's Title", g );

```

**Script**

```js

Names Default To Here( 1 );
script = JSL Quote(Names Default To Here(1);
dt=Open("$SAMPLE_DATA/Big Class.jmp");
dt << Run Script("Bivariate");
);
ex = New Window( "Script example", <<Type( "Script" ), script );

```

### Normal Biv Distribution

**Syntax:** y = Normal Biv Distribution( x, y, r, <mu1=0>, <s1=1>, <mu2=0>, <s2=1> )

**Description:** Computes the probability that an observation (X, Y) is less than or equal to (x, y) with correlation coefficient r where X is marginally normally distributed with mean mu1 and standard deviation s1 and Y is marginally normally distributed with mean mu2 and standard deviation s2. If mu1, s1, mu2, and s2 are not given, the function assumes the standard normal bivariate distribution with mu1=0, s1=1, mu2=0, and s2=1.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Normal Biv Distribution( -2, -2, .5, 1, 1.5, -1, 2 );

```

### Normal Contour

**Syntax:** Normal Contour( prob, meanMatrix, stdMatrix, corrMatrix, <colorsMatrix>, <fill=0> )

**Description:** Draws normal probability contour(s) for k populations and two variables. The prob argument can be either a scalar probability or a matrix of probabilities. The meanMatrix and stdsMatrix arguments are k by 2 matrices, and the corrMatrix argument is a k by 1 vector. The colorsMatrix argument specifies the color(s) for the k contour(s); colors must be specified as JSL colors (either JSL color integer values or return values of JSL color functions such as the RGB Color() or HLS Color() functions). The fill argument specifies the amount of transparency for the contour fill color.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( "blue" );
		Normal Contour( 0.95, [40 40], [15 5], [0.5], Empty(), 0.1 );,
		Normal Contour(
			0.95,
			[40 40, 60 50],
			[15 5, 10 10],
			[-0.9, -0.5],
			Matrix( {RGB Color( {0.1, 0.9, 0.1} ), 3} ),
			0.2
		)
	)
);

```

### Normal Density

**Syntax:** y = Normal Density( q, <mu=0>, <sigma=1> )

**Description:** Returns the density at q of a Normal distribution with mean mu and standard deviation sigma.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example: Normal Density",
	y = Graph Box(
		Y Scale( 0, 0.45 ),
		X Scale( -4, 4 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Normal Density( q ), q );
	)
);

```

### Normal Distribution

**Syntax:** p = Normal Distribution( q, <mu=0>, <sigma=1> )

**Description:** Returns the probability that a normally distributed random variable is less than q.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example: Normal Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -4, 4 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Normal Distribution( q ), q );
	)
);

```

### Normal Integrate

**Syntax:** {mean, var} = Normal Integrate( muVector, sigmaMatrix, expr, x, NStrata, NSim )

**Description:** Returns the result of radial-spherical integration for smooth functions of multivariate normal variables. The basic idea is the same as one method in Genz and Monahan(1996). But Radau-Gauss-Laguerre type quadrature is used for the radial direction.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Normal Integrate(
	J( 3, 1, 0 ),
	Identity( 3 ),
	ex[1] ^ 4 * ex[2] ^ 2 * ex[3] ^ 2,
	ex,
	2,
	5000
);

```

### Normal Log CDistribution

**Syntax:** y = Normal Log CDistribution( x, <mean=0>, <std dev=1> )

**Description:** Returns the log of 1 - Normal distribution at x with mean mu and standard deviation sigma.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example: Normal Log CDistribution",
	nlcdiy = Graph Box(
		Y Scale( -10, 0.05 ),
		X Scale( -4, 4 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Normal Log CDistribution( q ), q );
	)
);

```

### Normal Log Density

**Syntax:** y = Normal Log Density( x, <mu=0>, <sigma=1>)

**Description:** Returns the log of the Normal probability density at x with mean mu and standard deviation sigma.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example: Normal Log Density",
	nldey = Graph Box(
		Y Scale( -9, 0.05 ),
		X Scale( -4, 4 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Normal Log Density( q ), q );
	)
);

```

### Normal Log Distribution

**Syntax:** y = Normal Log Distribution( x, <mean=0>, <std dev=1> )

**Description:** Returns the log of the Normal distribution at x with mean mu and standard deviation sigma.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example: Normal Log Distribution",
	nldiy = Graph Box(
		Y Scale( -10, 0.05 ),
		X Scale( -4, 4 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Normal Log Distribution( q ), q );
	)
);

```

### Normal Mixture Density

**Syntax:** y = Normal Mixture Density(q, meanvec, sdvec, probvec)

**Description:** Returns the density at q of a normal mixture distribution with group means meanvec, group standard deviations sdvec, and group probabilities probvec. Here meanvec, sdvec, and probvec are all vectors of the same size.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
mu1 = -2;
mu2 = 2;
sigma1 = 1;
sigma2 = 4;
p1 = .5;
t1 = mu1 |/ mu2;
t2 = sigma1 |/ sigma2;
t3 = p1 |/ (1 - p1);
New Window( "Univariate Normal Mixture Density",
	clty = Graph Box(
		Y Scale( 0, 0.4 ),
		X Scale( -8, 8 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		t1 = mu1 |/ mu2;
		t2 = sigma1 |/ sigma2;
		t3 = p1 |/ (1 - p1);
		Y Function(
			Normal Mixture Density( y, mu1 |/ mu2, sigma1 |/ sigma2, p1 |/ (1 - p1) ),
			y
		);
		Text( {-7, .37}, "Mean1=", Round( mu1, 2 ) );
		Text( {-2, .37}, "Mean2=", Round( mu2, 2 ) );
		Text( {-7, .34}, "SD1=", Round( sigma1, 2 ) );
		Text( {-2, .34}, "SD2=", Round( sigma2, 2 ) );
		Text( {-7, .31}, "P1=", Round( p1, 2 ) );
		Text( {-2, .31}, "P2=", Round( 1 - p1, 2 ) );
	),
	H List Box( Slider Box( -3, 3, mu1, clty << reshow ), Text Box( " Mean 1" ) ),
	H List Box( Slider Box( -3, 3, mu2, clty << reshow ), Text Box( " Mean 2" ) ),
	H List Box( Slider Box( .1, 9, sigma1, clty << reshow ), Text Box( " Std Dev 1" ) ),
	H List Box( Slider Box( .1, 9, sigma2, clty << reshow ), Text Box( " Std Dev 2" ) ),
	H List Box( Slider Box( 0, 1, p1, clty << reshow ), Text Box( " P 1" ) ), 

);

```

### Normal Mixture Distribution

**Syntax:** y = Normal Mixture Distribution(q, meanvec, sdvec, probvec)

**Description:** Returns the probability that a normal mixture distributed variable with group means meanvec, group standard deviations sdvec, and group probabilities probvec is less than q. Here meanvec, sdvec, and probvec are all vectors of the same size.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
mu1 = -2;
mu2 = 2;
sigma1 = 1;
sigma2 = 4;
p1 = .5;
New Window( "Univariate Normal Mixture Distribution",
	clty = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -8, 8 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		Y Function(
			Normal Mixture Distribution( y, mu1 |/ mu2, sigma1 |/ sigma2, p1 |/ (1 - p1) ),
			y
		);
		Text( {-7, .95}, "Mean1=", Round( mu1, 2 ) );
		Text( {-2, .95}, "Mean2=", Round( mu2, 2 ) );
		Text( {-7, .85}, "SD1=", Round( sigma1, 2 ) );
		Text( {-2, .85}, "SD2=", Round( sigma2, 2 ) );
		Text( {-7, .75}, "P1=", Round( p1, 2 ) );
		Text( {-2, .75}, "P2=", Round( 1 - p1, 2 ) );
	),
	H List Box( Slider Box( -3, 3, mu1, clty << reshow ), Text Box( " Mean 1" ) ),
	H List Box( Slider Box( -3, 3, mu2, clty << reshow ), Text Box( " Mean 2" ) ),
	H List Box( Slider Box( .1, 9, sigma1, clty << reshow ), Text Box( " Std Dev 1" ) ),
	H List Box( Slider Box( .1, 9, sigma2, clty << reshow ), Text Box( " Std Dev 2" ) ),
	H List Box( Slider Box( 0, 1, p1, clty << reshow ), Text Box( " P 1" ) ), 

);

```

### Normal Mixture Quantile

**Syntax:** q = Normal Mixture Quantile(p, meanvec, sdvec, probvec)

**Description:** Returns the quantile from a normal mixture distribution, the values for which the probability is p that a random value would be lower.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
extqdf = 1;
extqqq = 0.5;
mu1 = -1;
mu2 = 1;
sigma1 = 1;
sigma2 = 4;
p1 = .3;
New Window( "Example: Normal Mixture Quantile",
	extqgr = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -5, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Pen Size( 2 );
		Y Function(
			Normal Mixture Distribution( q, mu1 |/ mu2, sigma1 |/ sigma2, p1 |/ (1 - p1) ),
			q
		);
		Pen Color( "blue" );
		V Line(
			Normal Mixture Quantile(
				extqqq,
				mu1 |/ mu2,
				sigma1 |/ sigma2,
				p1 |/ (1 - p1)
			),
			0,
			1
		);
		Text( {-4.5, 0.9}, " quantile=", Round( extqqq, 2 ) );
	),
	H List Box(
		Slider Box( 0.01, 0.99, extqqq, extqgr << reshow ),
		Text Box( " quantile" )
	),
	H List Box( Slider Box( -3, 3, mu1, extqgr << reshow ), Text Box( " Mean 1" ) ),
	H List Box( Slider Box( -3, 3, mu2, extqgr << reshow ), Text Box( " Mean 2" ) ),
	H List Box( Slider Box( .1, 9, sigma1, extqgr << reshow ), Text Box( " Std Dev 1" ) ),
	H List Box( Slider Box( .1, 9, sigma2, extqgr << reshow ), Text Box( " Std Dev 2" ) ),
	H List Box( Slider Box( 0, 1, p1, extqgr << reshow ), Text Box( " P 1" ) ), 

);

```

### Normal Quantile

**Syntax:** q = Normal Quantile( p, <mu=0>, <sigma=1> ); q = Probit( p )

**Description:** Returns the quantile from a Normal distribution, the value for which the probability is p that a random value would be lower.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Normal Quantile( 0.9 );

```

### Normal Tolerance Factor

**Syntax:** q = Normal Tolerance Factor( 1-alpha, p, n, <One Sided> )

**Description:** Computes the tolerance factor for constructing a 1-alpha confidence interval to contain proportion p of the means with sample size n from the normal distribution. There is an option to request the factor for a one-sided tolerance interval.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
n = 15;
New Window( "Example: Tolerance Factor()",
	tdig = Graph Box(
		Y Scale( 0, 5 ),
		X Scale( 0.05, 0.95 ),
		Yname( "Tolerance Factor" ),
		Xname( "p" ),
		Pen Color( "red" );
		Y Function( Normal Tolerance Factor( 0.95, p, n ), p );
		Text( {0.1, 4}, "n=", Round( n ) );
	),
	H List Box( Text Box( "n" ), Slider Box( 5, 25, n, tdig << reshow ) )
);

```

### Not

**Syntax:** y = !x; y = Not( x )

**Description:** Returns the logical NOT of x: 1 if x is zero, missing if x is missing, and 0 otherwise.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
!(1 < 2);

```

### Not Equal

**Syntax:** z = x != y != ...; z = Not Equal( x, y, ... )

**Description:** Returns 1 if each argument is not equal to the next argument; returns 0 otherwise.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
1 != 2 != 1;

```

### Notebook

**Syntax:** nb = Notebook( name|number )

**Description:** Returns a reference to the specified notebook.

**JMP Version Added:** 19

### Nth Day Of Week in the Month

**Syntax:** n = Nth Day Of Week in the Month( datetime )

**Description:** Returns an integer that represents the number of instances of the day of the week of the datetime argument that have occurred in the month. For example, November 28, 2019 is the 4th Thursday of the month, so the function returns 4.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
Nth Day Of Week in the Month( Date MDY( 11, 28, 2019 ) );

```

### Num

**Syntax:** y = Num( s, < <<Use Locale( use=1 ) >, < <<Restrict > )

**Description:** Converts s to a number using any built-in format, including date and currency formats. Returns missing if the conversion fails. The optional <<Restrict only allows conversion using integer, decimal, and scientific formats.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Show( Num( "3.1e6" ), Num( "1989-10-04" ), Num( "5%" ), Num( "£23" ) );

```

**Example 2**

```js

Names Default To Here( 1 );
Show(
	Num( "3.1e6", <<Restrict ),
	Num( "1989-10-04", <<Restrict ),
	Num( "5%", <<Restrict ),
	Num( "£23", <<Restrict )
);

```

### Num Deriv

**Syntax:** y = Num Deriv( f( x, ... ),  <parnum>)

**Description:** Returns the numerical derivative of the f( x,... ) function with respect to one of its arguments. You can specify that argument as the second argument in the Num Deriv function. If no second argument is specified, the derivative is taken with respect to the function&apos;s first argument. The derivative is evaluated using numeric values specified in the f( x,... ) function expression.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
f = Function( {x, y}, x ^ 2 + y );
Num Deriv( f( 2, 1 ) );
Num Deriv( f( 2, 1 ), 2 );

```

### Num Deriv2

**Syntax:** y = Num Deriv2( f( x, ... ) )

**Description:** Returns the numerical second derivative of the f( x,... ) function with respect to x. The derivative is evaluated using numeric values specified in the f( x,... ) function expression.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
f = Function( {x}, x ^ 3 );
Num Deriv2( f( 2 ) );

```

### Number

**Syntax:** y = Number( x1, ... )

**Description:** Returns the number of non-missing arguments or values within a single matrix or list argument.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Eval List( {Number( 12, ., 11, 0, -42 ), Number( [33 . -42 . 0 . -30] )} );

```

### Number Col Box

**Syntax:** y = Number Col Box( title, numbers )

**Description:** Returns a display box to show the numbers specified by the numbers argument, which can be a list or matrix.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Table",
		Table Box(
			String Col Box( "names", {"x", "y", "z"} ),
			Number Col Box( "values", {11, 22, 33} ),
			Plot Col Box( "values", {11, 22, 33} )
		)
	)
);

```

### Number Col Edit Box

**Syntax:** y = Number Col Edit Box( title, numbers )

**Description:** Returns a display box to show the numbers specified by the numbers argument, which can be a list or matrix.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
x = y = z = 0;
New Window( "Example",
	Modal,
	<<Return Result,
	Outline Box( "Table", Table Box( neb = Number Col Edit Box( "values", {x, y, z} ) ) )
);

```

### Number Edit Box

**Syntax:** y = Number Edit Box( initValue, <width> )

**Description:** Returns an edit box that accepts only numeric input. Specify the optional width argument to set the width of the box in characters.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example", neb = Number Edit Box( 5 ) );
x = neb << get;

```

### Number of Periods

**Syntax:** x = Number of Periods( rate, pmt, pv, <fv=0>, <type=0> )

**Description:** Returns the number of periods for an investment based on periodic, constant payments and a constant interest rate. The type argument is 0 for end-of-period payments and 1 for beginning-of-period payments. Equivalent to the NPER function in Microsoft Excel.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Number of Periods( .05 / 12, -2000, 100000 );

```

### Open

**Syntax:** Open( filePath, <data table options | Excel import options | text import options | SAS import options | HTML import options | esriShapeFile import options | PDF import options | other file options > )

**Description:** Returns a reference to a data table or other JMP file or object created from a file. If no path is specified, the Open dialog appears. If a folder path is specified, the system file browser is opened and no object is returned. Refer to the Syntax Reference for a complete description of available options.

**JMP Version Added:** Before version 14

**Add-In**

```js

Names Default To Here( 1 );
/* Installing Add-In:
Open( Add-In to open,
    <Check For Updates( "never" | "startup" | "always")>, // "always" will check for updates at startup and while jmp is running
    <Update Prompt(0|1)>) // whether or not the add-in will silently update or prompt first */
Open( "$downloads\test.jmpaddin", Check For Updates( "always" ), Update Prompt( 1 ) );

```

**Data Table**

```js

Names Default To Here( 1 );
/* Data tables, other JMP files, external files:
   Open( filePath,
     <Invisible | Private>,
     <Select Columns( "col", ... )>,
     <Ignore Columns( "col", ... )>,
     <Add to Recent Files(bool)>,
     <Quarantine Action("Allow Scripts"|"Block Scripts"|"Do Not Open"|"Show Dialog")>
     <Force Refresh>,
     <Enable Filter Views(bool)>,
     <"file type">
   )
*/
//Basic data table open
dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
//Data table open with some options
dt2 = Open( "$SAMPLE_DATA/Fitness.jmp", Select Columns( "Name", "Sex", "Age", "Weight" ) );

```

**Excel**

```js

Names Default To Here( 1 );
/* Excel files imported into a data table:
   Open( excelFilePath,
     <Worksheets( "sheet name" | {"sheet name", "sheet name", ...} | "n" )>,
     <Use for all sheets(0|1)>,
     <Concatenate Worksheets(0|1)>,
     <Create Concatenation Column(0|1)>,
     <Worksheet Settings( 0|1,
       Has Column Headers(0|1),
       Number of Rows in Headers(n),
       Headers Start on Row(n),
       Data Starts on Row(n),
       Data Starts on Column(n),
       Data Ends on Row(n),
       Data Ends on Column(n),
       Replicated Spanned Rows(0|1),
       Suppress Hidden Rows(0|1),
       Suppress Hidden Columns(0|1),
       Treat as Hierarchy(0|1)
     )>,
     <Invisible | Private>
   )
*/

/* Using the Excel Wizard dialog:
   Open("$SAMPLE_IMPORT_DATA/Bigclass.xlsx", "Excel Wizard");  
*/

dt = Open(
	"$SAMPLE_IMPORT_DATA/Team Results.xlsx",
	Worksheets( "Ungrouped Team Results" ),
	Worksheet Settings( Headers Start on Row( 3 ), Data Starts on Row( 4 ) )
);

```

**Folder**

```js

Names Default To Here( 1 );
/* Open of folder launches file browser */
Open( "$SAMPLE_DATA" );

```

**Other**

```js

Names Default To Here( 1 );
/* Other options:
   SAS File imported as a data table:
   Open( sasFilePath,
     <Invisible | Private>,
     <Use Labels for Var Names(0|1)>,
     <Password( "password" )>
   )
   
   SAS Transport File imported as a data table, members are separate tables within the larger file:
   Open( sasTransportFilePath,
     <Use Labels for Var Names(0|1)>,
     <Members({"Table1", "Table2"})>
   )
   
   HTML file imported as a data table:
   Open( htmlFilePath,
     <Invisible | Private>,
     <HTML Table(n, <ColumnNames(n)>, DataStarts(n)>)>
   )
   
   Get column names as a list for a JMP Data Table without opening the table:
   Open( jmpDataTableFilePath, 
     "Column Names Only"
   )
   
   esriShapeFile opened for use as a map shape data table:
   Open( esriShapeFilePath,
     <Invisible | Private>,
     Columns( Shape=numeric(n),
     Part=numeric(n),
     X=numeric(n),
     Y=numeric(n) ),
              Polygon Import Options(Simplification Factor(f), Geodesic(g))
   )
*/
//SAS Example:
dt1 = Open( "$SAMPLE_IMPORT_DATA/Bigclass.sas7bdat", Use Labels for Var Names( 1 ) );

// HTML Example:
dt2 = Open(
	"https://en.wikipedia.org/wiki/Black_Mountains_(North_Carolina)",
	HTML Table( 3, Column Names( 1 ), Data Starts( 2 ) )
);

// Column Names Only Example: 
colNames = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp", "Column Names Only" );

// SHP Shapefile Example with polygon simplification: 
Open(
	"$SAMPLE_IMPORT_DATA/parishes.shp",
	Polygon Import Options( Simplification Factor( 200 ), Geodesic( 1 ) )
);

```

**PDF**

```js

Names Default To Here( 1 );
/* PDF file imported as one or multiple data tables
open(pdfFilePath,
    PDF Tables(Table(<Name(name)>, Add Rows(Page(n | {page list}), <Header Rows(n)>, Rect(top, left, right, bottom), <RowBorders(n, ...)>, <Column Borders(n, ....)>), ...)) |
    PDF All Tables(< Combine(All | Matching Headers | None)>, <Minimum Rows(n)>, <Minimum Columns(n)>) |
    PDF Text(<Pages(n, ...)>, <sort>) |
    PDF Wizard
);*/
dt = Open( "$SAMPLE_DATA\big class.jmp" );
w = New Window( "test", Data Table Box( dt ) );
w << save picture( "$DOCUMENTS\test.pdf", pdf );
pdftable = Open( "$DOCUMENTS\test.pdf", PDF All Tables( Combine( all ) ) ); // just some of the rows
pdftable2 = Open(
	"$DOCUMENTS\test.pdf",
	PDF Tables( Table( Table Name( "test" ), Add Rows( Page( 1 ), Rect( 0, 0, 5, 3 ) ) ) )
);

```

**Picture**

```js

Names Default To Here( 1 );
/* Picture file imported as a picture object */
pic = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
New Window( "Picture", Outline Box( "Picture", Picture Box( pic ) ) );

```

**Text**

```js

Names Default To Here( 1 );
/* Text files imported into a data table:
   Open( textFilePath,
     <Invisible | Private>,
     CharSet("option") // "Best Guess", "utf-8", "utf-16", "us-ascii", "windows-1252", "x-max-roman", "x-mac-japanese", "shift-jis", "euc-jp", "utf-16be", "gb2312"
     <Number of Columns(n)>,
     <Columns(colName=colType(colWidth),... )>,// colType is Character|Numeric and colWidth is an integer specifying the width of the column
     <End Of Field (Tab|Space|Comma|Semicolon|Other|None)>,
     <EOF Other ("char")>,
     <End Of Line (CRLF|CR|LF|Semicolon|Other)>,
     <EOL Other ("char")>,
     <Strip Quotes|Strip Enclosing Quotes (0|1)>,
     <Labels|Table Contains Column Headers (0|1)>,
     <Year Rule|Two digit year rule ("decade start")>, // For example, if the earliest date is 1979, use "1970". If the earliest date is 2001, use "20xx".
     Treat Empty Columns as Numeric(0|1)
     Scan Whole File(0|1) // 1 means scan the whole file and 0 means scan for 5 seconds.
     <Column Names Start|Column Names are on line (n)>,
     <Data Starts|Data starts on line (n)>,
     <Lines to Read>, // a number
     <Use Apostrophe as Quotation Mark>,
     <CompressNumericColumns(0|1)>,
     <CompressCharacterColumns(0|1)>,
     <CompressAllowListCheck(0|1)>
   )
*/
dt = Open( "$SAMPLE_IMPORT_DATA/EOF_comma.txt", Table Contains Column Headers( 0 ) );

```

### Open Database

**Syntax:** dt = Open Database( dataSourceName|"Connect Dialog", "SELECT ..."|"SQLFILE=..."|tableName, <invisible | private>, <outputTableName> )

**Description:** Opens a database using ODBC, runs the given SQL, and puts data into a data table with the given output table name.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Open Database(
	"DSN=dBASE Files;DBQ=C:/Program Files/JMP/JMPPRO/19/Samples/Import Data/;",
	"SELECT HEIGHT, WEIGHT FROM Bigclass",
	"hw"
);

```

### Open Datafeed

**Syntax:** y = Open Datafeed( ... )

**Description:** Creates an object and window you can send messages to manage real-time data feeds.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
exfeed = Open Datafeed(/*Connect( Port( "com3" ), Baud( 4800 ), DataBits( 8 ) ),*/
	Set Script(
		ex = exfeed << getLine;
		Show( ex );
	)
);
For( exi = 0, exi < 5, exi++, /* this is just a way to test a feed when the real data source is not available...*/
	exfeed << Queue Line( Char( exi ) );
	Wait( .5 );
);

```

### Open Help

**Syntax:** w = Open Help( "Help" | "Scripting Index", ... )

**Description:** Opens the online JMP help or the Scripting Index.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Open Help( "Help" );

```

**Example 2**

```js

Names Default To Here( 1 );
Open Help(
	"Scripting Index",
	Search(
		Term( "Open" ),
		Match( {"Contains Terms", "Match All Terms", "Ignore Case"} )
	),
	IndexContext( Category( "Functions" ) )
);

```

**Example 3**

```js

Names Default To Here( 1 );
Open Help(
	"Scripting Index",
	Search(
		Term( "alpha" ),
		Match( {"Contains Terms", "Match All Terms", "Ignore Case"} )
	),
	IndexContext(
		Category( "All Categories" ),
		Object( "Search results" ),
		Method( "Get Alpha" )
	)
);

```

### Open Log

**Syntax:** Open Log( <bring window to top> )

**Description:** Open the log window

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Open Log();
Show( Is Log Open() );

```

**Example 2**

```js

Names Default To Here( 1 );
/* Bring Log Windows to the Top */
Open Log( 1 );
Show( Is Log Open() );

```

### Or

**Syntax:** y = x1 | x2; y = Or( x1, x2, ... )

**Description:** Returns the logical OR of all arguments: 1 if any arguments are nonzero and 0 otherwise.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
1 < 2 | 3 < 2;

```

### OrMZ

**Syntax:** y = OrMZ( x1, x2, ... )

**Description:** Returns the logical OR of all arguments with missing values treated as zeros: 1 if any arguments are nonzero and 0 otherwise.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
OrMZ( 1 < 2, 3 < 2 );

```

### Ortho

**Syntax:** L = Ortho( A, <Centered( 0 )>, <Scaled( 1 )> )

**Description:** Orthogonalizes the columns of a matrix. Center option makes them sum to zero. Scale option makes them unit length.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Ortho( [1 1, 1 -1] );

```

### Ortho Poly

**Syntax:** L = Ortho Poly( V, order )

**Description:** Returns orthogonal polynomials of vector V up to order specified by the order argument. The V argument can be a row or column vector. Scale option makes them unit length.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Ortho Poly( 1 :: 10, 2 );

```

### Outline Box

**Syntax:** y = Outline Box( title, <command script pairs list>, displayBox, ... )

**Description:** Creates an outline element in the report, returning the display box reference. To include a menu in the outline node, specify the command script pairs list, a list specifying menu commands and associated scripts.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Picker",
		{"Show label value", Show( teb << get text )},
		H List Box( Text Box( "Label:" ), teb = Text Edit Box( Char( 213 ) ) )
	)
);

```

### Oval

**Syntax:** Oval( left, top, right, bottom, <fill=0> )

**Description:** Draws an oval within the specified rectangle, filled if fill is nonzero.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Color( "Green" );
		Pen Size( 2 );
		Fill Color( "Red" );
		Oval( 15, 75, 65, 55, 1 );
		Oval( 10, 80, 70, 50 );
	)
);

```

### P Spline Coef

**Syntax:** coef = P Spline Coef( x, Internal Knot Grid, <degree = 3>, <KnotEndPoints = min(x) || max(x)> )

**Description:** Returns the matrix of P-Spline coefficients. Internal Knot Grid is either the number of desired knot points based on percentiles of x or a vector specifying the internal knot points. Optional parameter degree specifies the degree of the P-splines with a default of 3.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
P Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2 );
P Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [3, 7] );

```

### Page Break Box

**Syntax:** Page Break Box()

**Description:** Creates a display box that forces a page break.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Frame Size( 300, 300 ),
		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
		Pen Color( "Blue" );
		Line( [10 30 70], [88 22 44] );
	),
	Page Break Box(),
	Graph Box(
		Frame Size( 300, 300 ),
		Marker( Marker State( 3 ), [77 44 11], [75 25 50] );
		Pen Color( "Red" );
		Line( [70 30 10], [88 22 44] );
	)
);

```

### Panel Box

**Syntax:** y = Panel Box( title, displayBoxArgs )

**Description:** Returns a display box to label and enclose the argument display box.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Tab Box(
		"alpha",
		Panel Box( "panel", Text Box( "text" ) ),
		"beta",
		Popup Box( {"x", ex = 1, "y", ex = 2} )
	)
);

```

### Parallel Assign

**Syntax:** tf = ParallelAssign( { thread_local_var = global_var, ... }, m[ a, b ] = expression using a and b )

**Description:** Use multiple threads to assign values to the matrix. If any thread throws an exception, a message will be printed to the log and the return value will be 0. If all threads complete without error, the return value will be 1. Functions that launch platforms, create or use data tables, or access the graphics subsystem are only supported on the main thread, and will throw an exception if called from a worker thread.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
m = J( 3, 2, -1 );
If( Parallel Assign( {/*no locals */ }, m[a/* 1,2,3 */, b/* 1,2 */ ] = a * a + b ) == 0,
	Throw( "thread failed" )
);
m;/* 1*1+1  1*1+2, 2*2+1  2*2+2, 3*3+1  3*3+2 */

```

### Parameter

**Syntax:** y = Parameter( {name=value, ...}, model expression )

**Description:** Defines formula parameters for models for the Nonlinear platform.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Parameter( {a = 1}, a + 1 );

```

### Parse

**Syntax:** y = Parse( s )

**Description:** Parses the string and returns the resulting JSL expression.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Parse( "x+y" );

```

### Parse Date

**Syntax:** dt = In Format( s, formatString, < <<Use Locale(b=1)>, < <<Restrict > )

dt = In Format( s, "Format Pattern", pattern, < <<Use Locale(b=1)> )

**Description:** Parses a string of a given format. If the format is a date-time format, the value is expressed as if surrounded by As Date(), returning the date in ddMonyyyy format. The optional <<Restrict used with the "Best" formatString only allows conversion using integer, decimal, and scientific formats.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Informat( "07152000", "MMDDYYYY" );

```

**Example 2**

```js

Names Default To Here( 1 );
Informat( "07.15.2000", "Format Pattern", "<MM>.<DD>.<YYYY>" );

```

**Example 3**

```js

Names Default To Here( 1 );
Informat( "86.8287° W", "Longitude DDD" );

```

**Example 4**

```js

Names Default To Here( 1 );
Informat( "123.45%", "Percent" );

```

**Example 5**

```js

Names Default To Here( 1 );
Show(
	Informat( "1.23e4", "Best" ),
	Informat( "1.23e4", "Best", <<Restrict ),
	Informat( "1989-10-04", "Best" ),
	Informat( "1989-10-04", "Best", <<Restrict )
);

```

### Parse JSON

**Syntax:** l = Parse JSON( jsonstring )

**Description:** Convert JSON text to a JSL list or associative array representing the structure specified by the JSON data.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
l = Parse JSON(
	"[ { \!"name\!": \!"KATIE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 59, \!"weight\!": 95 }, { \!"name\!": \!"LOUISE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 61, \!"weight\!": 123 }, { \!"name\!": \!"JANE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 55, \!"weight\!": 74 } ]"
);
Show( l );

```

### Parse XML

**Syntax:** Parse XML( string, OnElement( tagname, StartTag( expr ), EndTag( expr ) ), ... )

**Description:** Parses an XML expression using the OnElement expressions for specified XML tags.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
/*See example two for more details*/
ex =
"<table name='fromxml'><col name='x'>[1 2 3]</col><col name='y'>[11 22 33]</col></table>";
Parse XML( ex,
	On Element( "table", Start Tag( New Table( XML Attr( "name" ) ) ) ),
	On Element(
		"col",
		End Tag( New Column( XML Attr( "name" ), Set Values( Parse( XML Text() ) ) ) )
	)
);

```

**Example 2**

```js

Names Default To Here( 1 );

doc =
"
<a title='one'>
    WWWa
    <b>BB<c>ZZZ</c>B1</b>
    XXXa
    <b>BBB2</b>
    YYYa
    <c>CCC</c>
</a>";
// doc, above, has tags a, b, and c. The c tags are not handled by the parser, below,
// to show why text should be collected by Text(...) and then processed by EndTag(...)
// Text(...) captures the BB ZZZ B1 while using EndTag(...) only captures the final snippet.
docname = "undefined";
doctext = "";
recordtext = "";
records = {};
NestLevel = 0; // not really used here, but shows how to use Start/End Tag to track nesting level
Parse XML( doc,
	On Element(
		"a",
		Start Tag(
			docname = XML Attr( "title" );
			NestLevel++;
		), 
        // decide here to trim the CRLF and blanks and use a single blank
		Text( doctext = doctext || Trim( XML Text() ) || " " ),
		End Tag( NestLevel-- )
	),
	On Element(
		"b",
		Start Tag( NestLevel++ ), 
        // comment out the next line and...
		Text( recordtext = recordtext || Trim( XML Text() ) || " " ),
		End Tag(
            // ...uncomment the next line and observe the "B1" vs "BB ZZZ B1 " value in records
			// recordtext = XMLText();
			Insert Into( records, recordtext );
			recordtext = "";
			NestLevel--;
		)
	)
);

Show( docname, doctext, records, NestLevel );

```

### Pat Abort

**Syntax:** Pat Abort()

**Description:** Generates a pattern value that causes the entire match to fail immediately with no further backup and retry.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
source = "xxxxx";
n = 0;
pattern = Pat Succeed() + Pat Arb() >> xs + Expr(
	Show( xs );
	n = n + 1;
	If( n > 16,
		Pat Abort(),
		Pat Fail()
	);
);
rc = Pat Match( source, pattern, NULL, FULLSCAN );

```

### Pat Altern

**Syntax:** Pat Altern( pat1, pat2, ... )

**Description:** Generates a pattern value that matches any one of the supplied patterns. Generally written as pat1 | pat2 | ....

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Pat Match(
	"123456789",
	((Pat Pos( 2 ) + "1") | (Pat Pos( 1 ) + "2") | (Pat Pos( 0 ) + "3")) >> result
);
result;

```

### Pat Any

**Syntax:** Pat Any( string )

**Description:** Generates a pattern value that will match any one character in the string.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
operators = Pat Any( "*+-/" );
text = "abc+def";
Pat Match( text, operators >> op );
op;

```

### Pat Arb

**Syntax:** Pat Arb( pattern )

**Description:** Generates a pattern value that matches zero or more characters.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Pat Match(
	"123nonnumeric456",
	Pat Span( "0123456789" ) + Pat Arb() >> result + Pat Span( "0123456789" )
);
result;

```

### Pat Arb No

**Syntax:** Pat Arb No( pattern )

**Description:** Generates a pattern value that matches its argument zero or more times. Same as patRepeat(pattern,0,infinity,RELUCTANT); (*? in regex).

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Pat Match(
	"xyz aaaaabbbbbb@ccc no c is matched because reluctant",
	Pat Arb No( "a" ) >> a + Pat Arb No( "b" ) >> b + "@" + Pat Arb No( "c" ) >> c
);
" a=" || a || " b=" || b || " c=" || c;

```

### Pat At

**Syntax:** Pat At( variable )

**Description:** Generates a pattern value that matches zero characters and assigns the current cursor position to variable. Generally written as patpos()>>variable.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Pat Match( "123456789", Pat Len( 2 ) + Pat At( result ) );
result;

```

### Pat Break

**Syntax:** Pat Break( string )

**Description:** Generates a pattern value that matches zero or more characters not in the string, stopping before a (required) character in the string.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
b = "- ";
Pat Match( "one two three-", Pat Repeat( Pat Break( b ) >> word + Pat Any( b ) ) );
word;

```

### Pat Concat

**Syntax:** Pat Concat( pat1, pat2, ... )

**Description:** Generates a pattern value that matches each of the supplied patterns in turn. Generally written as pat1 + pat2 + ....

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
num = Pat Break( "," );
sep = ",";
Pat Match( "1.3,7.9,8.66", num + sep + num >> result + sep + num );
result;

```

### Pat Conditional

**Syntax:** Pat Conditional( pattern, variable )

**Description:** Generates a pattern value that matches the supplied pattern and stores the matched text in variable on success. Generally written as pattern >? variable.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
a = "unchanged";
b = "unchanged";
Pat Match( "123456789", (Pat Len( 2 ) >? a | Pat Len( 1 ) >? b) + "2" );
" a=" || a || " b=" || b;

```

### Pat Fail

**Syntax:** Pat Fail()

**Description:** Generates a pattern value that always fails to match going forward, forcing the matcher to retry alternatives.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
source = "xxxxx";
n = 0;
pattern = Pat Succeed() + Pat Arb() >> xs + Expr(
	Show( xs );
	n = n + 1;
	If( n > 16,
		Pat Abort(),
		Pat Fail()
	);
);
rc = Pat Match( source, pattern, NULL, FULLSCAN );

```

### Pat Fence

**Syntax:** Pat Fence()

**Description:** Generates a pattern value that matches zero characters going forwards and fails when backing up, causing the match to fail. Also used to trim down the pattern backup stack.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
rc = Pat Match( "123456789", (Pat Len( 1 ) | Pat Len( 2 )) >> result + Pat Fence() + "3" );
"rc=" || Char( rc ) || " result=" || result;

```

### Pat Immediate

**Syntax:** Pat Immediate( pattern, variable )

**Description:** Generates a pattern value that matches the supplied pattern and immediately stores the matched text in variable. Generally written as pattern >> variable.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
a = "unchanged";
b = "unchanged";
Pat Match( "123456789", (Pat Len( 2 ) >> a | Pat Len( 1 ) >> b) + "2" );
" a=" || a || " b=" || b;

```

### Pat Len

**Syntax:** Pat Len( n )

**Description:** Generates a pattern value that matches n characters.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Pat Match( "123456789", Pat Len( 2 ) + Pat Len( 3 ) >> result );
result;

```

### Pat Look Ahead

**Syntax:** Pat Look Ahead( pattern, <0|1> )

**Description:** A zero width pattern match after the current position. The second optional argument defaults to 0. 1 designates a negative match, or a non-match.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Test = "These are Bob's sons' nails.";
While( /* repeat the match until it fails */Pat Match(
		Test,
		"s" + Pat Look Ahead( "'" ),
		"z"
	), /* find an s that IS followed by an apostrophe and replace it with z */
	Print( test )
);

```

**Example 2**

```js

Names Default To Here( 1 );
Test = "These are Bob's sons' nails.";
While( /* repeat the match until it fails */Pat Match(
		Test,
		"s" + Pat Look Ahead( "'", 1 ),
		"z"
	), /* find an s that is NOT followed by an apostrophe and replace it with z */
	Print( test )
);

```

**Example 3**

```js

Names Default To Here( 1 );
Test = "a bb ccc dddd";
While( /* keep repeating the match until it won't match */
	Pat Match(
		Test,
		Pat Len( 1 ) >> xxx/* find any character */
		+ Pat Look Behind( Expr( xxx ) + Expr( xxx ) ) /* back up 2 positions, which includes the character just found */
		+ Pat Look Ahead( Expr( xxx ) /* and look ahead one position */ ),
		"@" /* replacement for the middle character of a triple */
	),
	Print( test ) /* show each intermediate result */
);

```

### Pat Look Behind

**Syntax:** Pat Look Behind( pattern, <0|1> )

**Description:** A zero width pattern match before the current position. The second optional argument defaults to 0. 1 designates a negative match, or a non-match.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Test = "These are Bob's sons' nails.";
While( /* repeat the match until it fails */Pat Match(
		Test,
		Pat Look Behind( "'" ) + "s",
		"z"
	), /* find an s that IS preceded by an apostrophe and replace it with z */
	Print( test )
);

```

**Example 2**

```js

Names Default To Here( 1 );
Test = "These are Bob's sons' nails.";
While( /* repeat the match until it fails */Pat Match(
		Test,
		Pat Look Behind( "'", 1 ) + "s",
		"z"
	), /* find an s that is NOT preceded by an apostrophe and replace it with a z */
	Print( test )
);

```

**Example 3**

```js

Names Default To Here( 1 );
Test = "a bb ccc dddd";
While( /* keep repeating the match until it won't match */
	Pat Match(
		Test,
		Pat Len( 1 ) >> xxx/* find any character */
		+ Pat Look Behind( Expr( xxx ) + Expr( xxx ) ) /* back up 2 positions, which includes the character just found */
		+ Pat Look Ahead( Expr( xxx ) /* and look ahead one position */ ),
		"@" /* replacement for the middle character of a triple */
	),
	Print( test ) /* show each intermediate result */
);

```

### Pat Match

**Syntax:** Pat Match( source, pattern, <replacement> )

**Description:** Executes the pattern match in the pattern variable against the string in the source variable; optional replacement text replaces the matched text.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
string = "John Smith";
Pat Match(
	string,
	Pat Break( " " ) >> first + Pat Span( " " ) + Pat Rem() >> last,
	last || ", " || first
);
string;

```

### Pat Not Any

**Syntax:** Pat Not Any( string )

**Description:** Generates a pattern value that will match any one character not in the string.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
delimiter = ";,-";
text = "fish,dog,cat,";
Pat Match( text, Pat Repeat( Pat Not Any( delimiter ) ) >> word + Pat Any( delimiter ) );
word;

```

### Pat Pos

**Syntax:** Pat Pos( n )

**Description:** Generates a pattern value that matches zero characters if the cursor is at position n. With no argument, the Pat Pos() function returns the cursor position for >> or >? assignment: patpos()>>variable.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Pat Match(
	"ab3defghi",
	Pat Pos( 2 ) + Pat Len( 1 ) >> v/*v=3*/+ Expr( Pat Len( v ) )
	+Pat Pos( /* no argument returns current position = 6 */ ) >> result
);
result;

```

### Pat R Pos

**Syntax:** Pat R Pos( n )

**Description:** Generates a pattern value that matches zero characters if the cursor is n characters from the end.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Pat Match( "quick brown fox", Pat R Pos( 3 ) + Pat Rem() >> result );
result;

```

### Pat R Tab

**Syntax:** Pat R Tab( n )

**Description:** Generates a pattern value that matches zero or more characters to move the cursor forward to n characters before the end.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Pat Match( "123456789", "23" + Pat R Tab( 2 ) >> result );
result;

```

### Pat Regex

**Syntax:** Pat Regex( string )

**Description:** Generates a pattern value that matches the regular expression in the string.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
string = "John Smith";
Regex Match( string, Pat Regex( "([^ ]+)([ ]+)([^ ]+)" ), "\3, \1" );
string;

```

### Pat Rem

**Syntax:** Pat Rem()

**Description:** Generates a pattern value that matches the remainder of the text.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Pat Match( "the quick fox", Pat R Pos( 3 ) + Pat Rem() >> result );
result;

```

### Pat Repeat

**Syntax:** Pat Repeat( pattern, <min=1>, <max=infinity>, <GREEDY or RELUCTANT=GREEDY> )

**Description:** Generates a pattern value that matches the supplied pattern between min and max times.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Pat Match(
	"xyz aaaaabbbbbbccc 3 c is matched because greedy",
	Pat Repeat( "a" ) >> a + Pat Repeat( "b" ) >> b + Pat Repeat( "c" ) >> c
);
" a=" || a || " b=" || b || " c=" || c;

```

### Pat Span

**Syntax:** Pat Span( string )

**Description:** Generates a pattern value that matches one or more characters in the string.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
sp = Pat Span( "0123456789.-" );
Pat Match( "junk=-33.44e33", sp >> result );
result;

```

### Pat String

**Syntax:** Pat String( string )

**Description:** Generates a pattern value that matches the string. Generally the string can be used without using the Pat String() function.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
x = Pat String( "a" || "b" );
Pat Match(
	"acbdbababc",
	Pat Arb() >> before + Pat Repeat( x ) >> match + Pat Rem() >> after
);
"before=" || before || " match=" || match || " after=" || after;

```

### Pat Succeed

**Syntax:** Pat Succeed()

**Description:** Generates a pattern value that always matches zero characters, even when backing up.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
source = "xxxxx";
n = 0;
pattern = Pat Succeed() + Pat Arb() >> xs + Expr(
	Show( xs );
	n = n + 1;
	If( n > 16,
		Pat Abort(),
		Pat Fail()
	);
);
rc = Pat Match( source, pattern, NULL, FULLSCAN );

```

### Pat Tab

**Syntax:** Pat Tab( n )

**Description:** Generates a pattern value that matches zero or more characters to move the cursor forward to position n.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Pat Match( "123456789", "23" + Pat Tab( 6 ) >> result );
result;

```

### Pat Test

**Syntax:** Pat Test( expression )

**Description:** Generates a pattern value that matches zero characters if the expression is nonzero. The expression is re-evaluated during each test, as if Expr() was used.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
nCats = 0;
whichCat = 3;
string = "catch a catnapping cat in a catsup factory";
rc = Pat Match(
	string,
	"cat" + Pat Test(
		nCats = nCats + 1;
		nCats == whichCat;
	),
	"dog"
);
string;

```

### Path

**Syntax:** Path( pathMatrix|pathText, <fill=0> )

**Description:** Draws a stroke along the given path if fill is 0, or paints the interior of the given path if fill is not 0. The path can be specified with an N x 3 matrix or with a text representation. A path matrix has three columns for x, y, and flags for each point in the path. The flag values are 0 for control, 1 for move, 2 for line segment, 3 for cubic Bézier segment, and are negative if the point also closes the path. Path text supports SVG syntax.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( "blue" );
		Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3], 1 );
		Path( "M20,20 C20,60 60,60 60,20 Z", 0 );
	)
);

```

### Path To Char

**Syntax:** s = Path To Char( pathMatrix )

**Description:** Converts a path specification from matrix form to character form.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Path To Char( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] );

```

### Payment

**Syntax:** x = Payment( rate, nper, pv, <fv=0>, <type=0> )

**Description:** Returns the payment for a loan based on constant payments and a constant interest rate. The type argument is 0 for end-of-period payments and 1 for beginning-of-period payments. Equivalent to the PMT function in Microsoft Excel.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Payment( .05 / 12, 30 * 12, 100000 ) - Interest Payment( .05 / 12, 13, 30 * 12, 100000 )
 - Principal Payment( .05 / 12, 13, 30 * 12, 100000 );

```

### Pdf Page Count

**Syntax:** Pdf Page Count( file name)

**Description:** Returns the number of pages in a PDF file.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
pageCount = Pdf Page Count( "$documents\myfile.pdf" );

```

### Pen Color

**Syntax:** Pen Color( <name|index|rgbList> )

**Description:** Sets the color for drawing lines.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Color( {.3, .5, .7} );
		Circle( {20, 20}, 10 );
	)
);

```

### Pen Size

**Syntax:** Pen Size( <x> )

**Description:** Sets the pen size in pixels for drawing lines.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Size( 4 );
		Line( [10 30 90], [88 22 44] );
	)
);

```

### Pi

**Syntax:** y = Pi()

**Description:** Returns the mathematical constant π, accurate to approximately 15 decimal digits: 3.1415926535....

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Char( Pi(), 5 );

```

### Pick Color

**Syntax:** color = Pick Color( <window title>, <name|index|rgbList> )

**Description:** Returns a color that was selected with the standard color picker.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
pickedColor = Pick Color( "Pick a Line Color", "Red" );
New Window( "Example",
	Graph Box(
		Frame Size( 300, 300 ),
		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
		Pen Color( pickedColor );
		Line( [10 30 70], [88 22 44] );
	)
);

```

### Pick Color Theme

**Syntax:** theme = Pick Color Theme( <window title>, <Color Theme(name|specification)>, <Type("Continuous" | "Sequential" | "Bad to Good" | "Categorical")>)

**Description:** Returns a color theme that was selected with the standard color theme picker. The initial theme can be specified explicitly or by specifying a Type to use the themes from preferences.

**JMP Version Added:** 17

**Graph Builder**

```js

Names Default To Here( 1 );

theme = Pick Color Theme( "Choose a color theme", Type( "Bad to Good" ) );
dt = Open( "$SAMPLE_DATA/SATByYear.jmp" );
gb = dt << Graph Builder(
	Show Control Panel( 0 ),
	Variables( Color( :SAT Math ), Shape( :State ) ),
	Elements( Map Shapes( Legend( 2 ) ) )
);
server = gb << Get Legend Server;
item = server << Get Legend Item( 2, 1 );
item << Set Properties( {Gradient( {Color Theme( theme )} )} );

```

**Row Legend**

```js

Names Default To Here( 1 );

pickedTheme = Pick Color Theme( "Pick a Color Theme" );
biv = Open( "$SAMPLE_DATA/Big Class.jmp" ) << Run Script( "Bivariate" );
Report( biv )[FrameBox( 1 )] << Row Legend( "age", Color Theme( pickedTheme ) );

```

### Pick Directory

**Syntax:** path = Pick Directory( <prompt>, <path>, <Show Files( boolean )> )

**Description:** Prompts the user with an Open Directory window, returning the pathname of the chosen directory. The optional prompt string is shown at the top of the window. Show Files can be any of the three arguments, and takes a Boolean argument. 1 shows files in the Pick Directory window, 0 does not. The default value is 0. The path string specifies the directory that the Pick Directory window initially displays. If you use the path string, it must follow the prompt string, but Show Files can be between them.

**JMP Version Added:** Before version 14

**Show Files**

```js

Names Default To Here( 1 );
Pick Directory( "Select a directory", "$DOCUMENTS", Show Files( 1 ) );

```

**Simple**

```js

Names Default To Here( 1 );
Pick Directory( "Select a directory" );

```

### Pick File

**Syntax:** path = Pick File( <prompt>, <initial directory>, <filterList>, <first filter>, <saveFlag=0|1>, <default file>, <multiple> )

**Description:** Prompts the user with an Open window, returning the pathname of the chosen file. The filterList argument is a list of strings of the form: "Label|suffix1;suffix2;...". The first filter argument specifies which filter is initially shown. The fifth argument indicates whether the window should function as a save (saveFlag = 1) or open (saveFlag = 0) window. The default file argument specifies the file that is initially selected. The multiple argument allows multiple files to be selected if saveFlag is 0.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Pick File(
	"Select JMP File",
	"$DOCUMENTS",
	{"JMP Files|jmp;jsl;jrn", "All Files|*"},
	1,
	0,
	"newJmpFile.jmp"
);

```

**Example 2**

```js

Names Default To Here( 1 );
Files = Pick File(
	"Select JMP File",
	"$SAMPLE_DATA",
	{"JMP Files|jmp;jsl;jrn", "All Files|*"},
	1,
	0,
	"",
	"multiple"
);
For( i = 1, i <= N Items( Files ), i++,
	Try( Open( Files[i] ) )
);

```

**Example 3**

```js

Names Default To Here( 1 );
filename = Pick File(
	"Save As Text",
	"$DOCUMENTS",
	{"Text File|txt"},
	1,
	1, // Save Flag
	"export.txt"
);
If( Is Missing( filename ),
	Print( "Canceled" ),
	Save Text File( filename, "The quick brown fox" )
);

```

### Picture Box

**Syntax:** pict = Picture Box( Picture Object )

**Description:** Creates a display box that contains a graphics picture object. You can either open a picture and then reference it, or you can use the Open command with a path to the picture in place of the Picture Object argument.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
New Window( "Example",
	Picture Box( Open( "$SAMPLE_IMAGES/black rhino footprint.jpg", jpg ) )
);

```

**Example 2**

```js

Names Default To Here( 1 );
pict = Open( "$SAMPLE_IMAGES/black rhino footprint.jpg", jpg );
New Window( "Example", Picture Box( pict ) );

```

### Pie

**Syntax:** Pie( left, top, right, bottom, startAngle, endAngle )

**Description:** Draws a pie slice.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( "red" );
		Pie( 10, 80, 70, 40, 0, 90 );
	)
);

```

### Pie Seg

**Syntax:** ps = Pie Seg(<{ xorigin, yorigin }>, <radius>, <style("pie", "ring", "coxcomb")>, values)

**Description:** Creates a Pie Seg at the specified origin, with the specified radius, based on values specified in matrix format.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );
New Window( "Pie Seg",
	Graph Box(
		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),
		Pie Seg( {75, 50}, .25, sumWt )
	)
);

```

### Pixel Line To

**Syntax:** Pixel Line To( h, v )

**Description:** Draws a line from the current pixel-based pen coordinate to the horizontal and vertical coordinates given.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pixel Origin( 50, 50 ); // in axis coordinates
		// others are pixels, relative to pixel origin
		Pixel Move To( 0, 0 );
		Pixel Line To( 0, 80 );
		Pixel Move To( 2, 0 );
		Pixel Line To( 2, 40 );
		Pixel Move To( 4, 0 );
		Pixel Line To( 4, 20 );
	)
);

```

### Pixel Move To

**Syntax:** Pixel Move To( h, v )

**Description:** Moves the pixel-addressed pen to the horizontal and vertical coordinate relative to the origin.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pixel Origin( 50, 50 ); // in axis coordinates
		// others are pixels, relative to pixel origin
		Pixel Move To( 0, 0 );
		Pixel Line To( 0, 80 );
		Pixel Move To( 2, 0 );
		Pixel Line To( 2, 40 );
		Pixel Move To( 4, 0 );
		Pixel Line To( 4, 20 );
	)
);

```

### Pixel Origin

**Syntax:** Pixel Origin( x, y )

**Description:** Sets the origin that pixel drawing commands are based on.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pixel Origin( 50, 50 ); // in axis coordinates
		// others are pixels, relative to pixel origin
		Pixel Move To( 0, 0 );
		Pixel Line To( 0, 80 );
		Pixel Move To( 2, 0 );
		Pixel Line To( 2, 40 );
		Pixel Move To( 4, 0 );
		Pixel Line To( 4, 20 );
	)
);

```

### Pixel Path

**Syntax:** PixelPath( h, v, pathMatrix|pathText, <fill=0>, <scale=1.0>, <orient={0.0,1.0}> )

**Description:** Draws a stroke along the given pixel-based path if fill is 0, or paints the interior of the given path if fill is not 0. The path can be specified with an N x 3 matrix or with a text representation. A path matrix has three columns for x, y, and flags for each point in the path. The flag values are 0 for control, 1 for move, 2 for line segment, 3 for cubic Bézier segment, and are negative if the point also closes the path. Path text supports SVG syntax. The path will be scaled and translated about its origin according to the optional parameters, with the orientation specified in the axis space.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( "blue" );
		angle = 45 * Pi() / 180; // 45 deg in radians
		Pixel Origin( 20, 80 );
		Pixel Path(
			0,
			0, // offset from pixel origin in pixels
			[-10 -10 1,
			10 -10 0,
			20 20 0,
			-10 20 -3],
			1, // fill
			2.0, // scale
			{Sin( angle ), Cos( angle )} // clockwise rotation
		);
		Pixel Origin( 80, 20 );
		Pixel Path(
			0,
			0,
			"M-10,-10 C10,-10 20,20 -10,20 Z",
			0,
			1.0,
			{Sin( -angle ), Cos( -angle )}
		);
	)
);

```

### Pixel Text

**Syntax:** Pixel Text( <properties>, {h, v}, text, ... )

**Description:** Moves to the {h, v} pixel position and draws text specified by the text argument. Named property arguments include Center Justified, Right Justified, Top Align, Bottom Align, Erased, Boxed, Counterclockwise, Clockwise. The position arguments, named arguments, and strings can be mixed in any order.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );

New Window( "Example",
	Graph Box(
		Pixel Origin( 10, 80 ); // in axis coordinates
		Pixel Move To( 0, 0 );
		Pixel Line To( 160, 140 ); // in pixels from pixel origin
		Pixel Text( {0, 0}, "default" );
		Pixel Text( Erased, Boxed, Clockwise, {75, 75}, "Erased Boxed Clockwise" );
		Pixel Text(
			Center Justified,
			Bottom Align,
			{160, 140},  // in pixels from pixel origin
			"Bottom Align\!NCenter Justified"
		);
	)
);

```

### Platform

**Syntax:** y = Platform( dataTable, script )

**Description:** Evaluates the given script in the context of the given data table. Returns the resulting display box for embedding in a display tree.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Platform example",
	H List Box(
		Platform(
			dt,
			Bubble Plot(
				X( :weight ),
				Y( :height ),
				Sizes( :age ),
				Title Position( 0, 0 )
			)
		),
		Platform(
			dt,
			Bubble Plot(
				X( :weight ),
				Y( :age ),
				Sizes( :height ),
				Title Position( 0, 0 )
			)
		)
	)
);

```

### Platform Preference

**Syntax:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**Description:** Sets platform preferences as specified.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Platform Preferences

**Syntax:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**Description:** Sets platform preferences as specified.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Plot Col Box

**Syntax:** y = Plot Col Box( title, numbers )

**Description:** Returns a display box to graph the numbers. The numbers argument can be a list or matrix.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Table",
		Table Box(
			String Col Box( "names", {"x", "y", "z"} ),
			Number Col Box( "values", {11, 22, 33} ),
			Plot Col Box( "values", {11, 22, 33} )
		)
	)
);

```

### Poisson Distribution

**Syntax:** cumprob = Poisson Distribution( lambda, k )

**Description:** Returns the probability that a Poisson distributed random variable is less than or equal to k, where lambda is the mean parameter and k is the count of interest.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
lambda = 4;
New Window( "Example: Poisson Distribution",
	ppy = Graph Box(
		Y Scale( 0, 1.01 ),
		X Scale( -1, 40 ),
		Pen Color( "red" ),
		Pen Size( 1 );
		For( k = 0, k <= 40, k++,
			H Line( k, k + 1, Poisson Distribution( lambda, k ) );
			V Line(
				k + 1,
				Poisson Distribution( lambda, k ),
				Poisson Distribution( lambda, k + 1 )
			);
		);
		Text( {2, 0.9}, "\!U03BB=", Round( lambda, 2 ) );
	),
	H List Box( Slider Box( 0, 40, lambda, ppy << reshow ), Text Box( " \!U03BB" ) )
);

```

### Poisson Probability

**Syntax:** prob = Poisson Probability( lambda, k )

**Description:** Returns the probability that a Poisson distributed random variable is equal to k, where lambda is the mean parameter and k is the count of interest.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
lambda = 4;
New Window( "Example: Poisson Probability",
	pdy = Graph Box(
		Y Scale( 0, 0.20 ),
		X Scale( -1, 40 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( k = 0, k <= 40, k++,
			V Line( k, 0, Poisson Probability( lambda, k ) )
		);
		Text( {30, 0.18}, "\!U03BB=", Round( lambda, 2 ) );
	),
	H List Box( Slider Box( 0, 40, lambda, pdy << reshow ), Text Box( " \!U03BB" ) )
);

```

### Poisson Quantile

**Syntax:** q = Poisson Quantile( lambda, cumprob )

**Description:** Returns the smallest integer quantile for which the cumulative probability of the Poisson( lambda ) distribution is larger than or equal to cumprob.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
qexpl = 20;
qexpn = 40;
qexpq = 0.5;
New Window( "Example: Poisson Quantile",
	qexpy = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, 41 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( qexpk = 0, qexpk < Round( qexpn ), qexpk++,
			H Line( qexpk, qexpk + 1, Poisson Distribution( qexpl, qexpk ) );
			V Line(
				qexpk + 1,
				Poisson Distribution( qexpl, qexpk ),
				Poisson Distribution( qexpl, qexpk + 1 )
			);
		);
		Pen Color( "blue" );
		V Line( Poisson Quantile( qexpl, qexpq ), 0, 1.0 );
		Text(
			{6, 0.17},
			" \!U03BB=",
			Round( qexpl, 2 ),
			" q=",
			Round( qexpq, 2 ),
			" quantile=",
			Round( Poisson Quantile( qexpl, qexpq ) )
		);
	),
	H List Box( Slider Box( 0, 40, qexpl, qexpy << reshow ), Text Box( " \!U03BB" ) ),
	H List Box( Slider Box( 0, 1, qexpq, qexpy << reshow ), Text Box( " q" ) )
);

```

### Poly Seg

**Syntax:** ps = Poly Seg(x values, y values)

**Description:** Returns a display seg that represents a polygon with vertices based on the passed in x and y values.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
x = [10, 50, 90];
y = [10, 90, 10];
New Window( "Poly Seg Example", g = Graph Box( Poly Seg( x, y ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Poly Seg" ));

```

### Polygon

**Syntax:** Polygon( {x1, y1}, {x2, y2}, ..., <<fill(bool) ); Polygon( xMatrix, <yMatrix>, <<fill(bool) )

**Description:** Draws the polygon specified by the points.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( "gray" );
		Polygon( [10 30 90], [88 22 44] );
		Polygon( [10 10, 50 80, 80 20, 50 50], <<Fill( 0 ) );
	)
);

```

### Polygon Area

**Syntax:** area = Polygon Area( {x1, y1}, {x2, y2}, ... );

area = Polygon Area( xMatrix, yMatrix )

**Description:** Calculates the area of the specified polygon.

**JMP Version Added:** 14

**Example 1**

```js

Names Default To Here( 1 );
area = Polygon Area( {0, 0}, {0, 10}, {10, 10}, {10, 0} );

```

**Example 2**

```js

Names Default To Here( 1 );
area = Polygon Area( [10 20 30], [10 30 20] );

```

### Polygon Centroid

**Syntax:** {cx, cy} = Polygon Centroid( {x1, y1}, {x2, y2}, ... );

centroid = Polygon Centroid( xMatrix, yMatrix )

**Description:** Calculates the centroid of the specified polygon.

**JMP Version Added:** 14

**Example 1**

```js

Names Default To Here( 1 );
{cx, cy} = Polygon Centroid( {0, 0}, {0, 10}, {10, 10}, {10, 0} );

```

**Example 2**

```js

Names Default To Here( 1 );
centroid = Polygon Centroid( [10 20 30], [10 30 20] );

```

### Polygon Simplify

**Syntax:** rows = Polygon Simplify( xMatrix|xyMatrix, <yMatrix>, <<<detail factor(f=200)>, <<<multiple(ids)>, <<<geodesic(bool)> )

**Description:** Removes points from a polygon that carry a low amount of detail and returns indices of the remaining points. detail factor is inversely proportional to the detail error tolerance. multiple(ids) indicates that many polygons should be simplified together so that common edges are treated consistently. ids is a matrix with one row per point. geodesic(1) indicates coordinates are latitude and longitude for distance measurement.

**JMP Version Added:** 19

**Example 1**

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( "cyan" );
		xx = 18 * [1 1 1 1 1 2 3 4 5 5 5 5 5 4 3 2] + J( 1, 16, Random Uniform( -5, 5 ) );
		yy = 18 * [1 2 3 4 5 5 5 5 5 4 3 2 1 1 1 1] + J( 1, 16, Random Uniform( -5, 5 ) );
		Polygon( xx, yy );
		rows = Polygon Simplify( xx, yy, <<detail factor( 10 ) );
		Polygon( xx[rows], yy[rows], <<Fill( 0 ) );
	)
);

```

**Multiple polygons**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_IMPORT_DATA/Parishes.shp" );
rows = Where( dt, 4 <= :Shape <= 7 );
polys = dt[rows, {"X", "Y"}];
ids = dt[rows, {"Shape"}] * 100 + dt[rows, {"Part"}];
Close( dt, NoSave );

simple rows = Polygon Simplify(
	polys,
	<<detail factor( 500 ),
	<<multiple( ids ),
	<<geodesic( 1 )
);
unique ids = Associative Array( ids );

minx = Min( polys[0, 1] );
maxx = Max( polys[0, 1] );
sx = maxx - minx;
miny = Min( polys[0, 2] );
maxy = Max( polys[0, 2] );
sy = maxy - miny;

New Window( "Parishes",
	Graph Box(
		Frame Size( 600, 600 ),
		X Scale( minx - sx * 0.02, maxx + sx * 0.02 ),
		Y Scale( miny - sy * 0.02, maxy + sy * 0.02 ), 
		
		For Each( {id}, unique ids, 

			rows = simple rows[Loc( ids[simple rows] == id )];
			Pen Color( "light red" );
			Pen Size( 4 );
			Polygon( polys[rows, 0], <<Fill( 0 ) );

			rows = Loc( ids == id );
			Pen Color( "black" );
			Pen Size( 1 );
			Polygon( polys[rows, 0], <<Fill( 0 ) );
			
			{cx, cy} = Polygon Centroid( polys[rows, 0] );
			Text( Center Justified, {cx, cy}, Char( id ) );
		)
	)
);

```

### Polytope Uniform Random

**Syntax:** points = Polytope Uniform Random( numSamples, A, b, L, U, neq, nle, nge, <nwarm=200>, <nstride=25> )

**Description:** Generates random uniform points over a convex polytope. The numSamples argument specifies the number of random points to be generated. The A argument is the constraint coefficient matrix. The B argument is the right hand side values of constraints. The L and U arguments are the lower and upper bounds for the variables, respectively. The neq, mle, and nge arguments are the number of equality constraints, the number of less than or equal constraints, and the number of greater than or equal constraints, respectively. The nwarm argument is the number of warm-up repetitions before points are written to the output matrix. The nstride argument is the number of repetitions between each point that is written to the output matrix. Note that the constraints must be listed as equality first, less than or equal next, and greater than or equal last.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
A = [1 1 1, 1 2 0];
b = [1, 0.5];
L = [0, 0, 0.1];
U = [1, 1, 1];
points = Polytope Uniform Random( 2000, A, b, L, U, 1, 0, 1, 300, 50 );
dt = As Table( points );
tobj = Report( Ternary Plot( X( :Col1, :Col2, :Col3 ) ) );
tfr = tobj[scalebox( 1 )] << clone box;
New Window( "Example: Polytope Uniform Random",
	Outline Box( "Points on a Ternary Plot", tfr ),
	Outline Box( "Constraints",
		Text Box( "X1 + x2 + x3 = 1" ),
		Text Box( "X2 + 2*x2 >= 0.5" )
	),
	Outline Box( "Variable Bounds",
		Text Box( "0 <= x1 <= 1" ),
		Text Box( "0 <= x2 <= 1" ),
		Text Box( ".1 < x3 <= 1" )
	)
);
Close( dt, no save );
Show( "see new window for example output" );

```

### Popup Box

**Syntax:** y = Popup Box( {label1, script1, ...} )

**Description:** Returns a display box with a popup menu defined by label/script pairs.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Tab Box(
		"alpha",
		Popup Box( {"x", ex = 1, "y", ex = 2} ),
		"beta",
		Panel Box( "panel", Text Box( "text" ) )
	)
);

```

### PostDecrement

**Syntax:** x--; PostDecrement( x )

**Description:** Subtracts 1 from a variable or from a list of variables.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
ex = 1;
ex--;
ex;

```

### PostIncrement

**Syntax:** x++; PostIncrement( x )

**Description:** Adds 1 to a variable or to a list of variables.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
ex = 1;
ex++;
ex;

```

### Power

**Syntax:** z = x ^ y; z = Power( x, <y=2> )

**Description:** Returns x raised to the y power. If x is negative, y must be an integer.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Power( 2, 5 );

```

### Pref

**Syntax:** Preferences( pref1( value1 ), ... )

**Description:** Sets preferences as specified.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Preferences( Graph marker size( "Large" ) );

```

### Preference

**Syntax:** Preferences( pref1( value1 ), ... )

**Description:** Sets preferences as specified.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Preferences( Graph marker size( "Large" ) );

```

### Preferences

**Syntax:** Preferences( pref1( value1 ), ... )

**Description:** Sets preferences as specified.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Preferences( Graph marker size( "Large" ) );

```

### Prefs

**Syntax:** Preferences( pref1( value1 ), ... )

**Description:** Sets preferences as specified.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Preferences( Graph marker size( "Large" ) );

```

### Present Value

**Syntax:** x = Present Value( rate, nper, pmt, <fv=0>, <type=0> )

**Description:** Returns the present value of an investment. The type argument is 0 for end-of-period payments and 1 for beginning-of-period payments. Equivalent to the PV function in Microsoft Excel.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Present Value( .05 / 12, 30 * 12, 1000 );

```

### Principal Payment

**Syntax:** x = Principal Payment( rate, per, nper, pv, <fv=0>, <type=0> )

**Description:** Returns the payment on the principal for a given period for an investment based on periodic, constant payments and a constant interest rate. The type argument is 0 for end-of-period payments and 1 for beginning-of-period payments. Equivalent to the PPMT function in Microsoft Excel.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Payment( .05 / 12, 30 * 12, 100000 ) - Interest Payment( .05 / 12, 13, 30 * 12, 100000 )
 - Principal Payment( .05 / 12, 13, 30 * 12, 100000 );

```

### Print

**Syntax:** Print( x, ... )

**Description:** Displays values of the arguments in the log, one per line.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Print( 355 / 113, Pi() );

```

### Print Matrix

**Syntax:** s = Print Matrix( M, <<ignore locale( 0 ), <<style( "parseable" ), <<separate( ", " ), <<line begin( "[ " ), <<line end( " ]" ) )

**Description:** Prints the matrix M. The optional argument ignore locale determines whether the printing of decimal separators should respect Locale information, where zero means to respect Locale. The optional argument style determines whether to use a style and which style to use. The available styles are parseable, which is a reformatted JSL matrix expression, latex, and other. When the style argument is other, the last three optional arguments define the beginning and ending characters of printed rows and separating characters of concatenated entries.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
A = [3.509 0.003, 874.4 0.00384, 0.03 0.093];
Print Matrix( A );
Print Matrix( A, <<ignore locale( 1 ) );
Print Matrix( A, <<style( "latex" ) );
Print Matrix(
	A,
	<<style( "other" ),
	<<line begin( "| " ),
	<<line end( " |" ),
	<<separate( " | " )
);

```

### Probit

**Syntax:** q = Normal Quantile( p, <mu=0>, <sigma=1> ); q = Probit( p )

**Description:** Returns the quantile from a Normal distribution, the value for which the probability is p that a random value would be lower.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Normal Quantile( 0.9 );

```

### Product

**Syntax:** y = Product( assignExpr, limit, bodyExpr )

**Description:** Returns the product of evaluations of the bodyExpr arguments, each time incrementing the variable from the assignExpr argument until it is greater than or equal to the limit argument.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
2 * Product( i = 1, 10000, 4 * i * i / (2 * i - 1) / (2 * i + 1) );

```

### Python Connect

**Syntax:** PythonConnection = Python Connect ()

**Description:** Returns a Python connection scriptable object.

**JMP Version Added:** 14

```js

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

```js

Names Default To Here( 1 );
Python Create JPIP CMD();

```

**Example 2**

```js

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

```js

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

```js

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

```js

Names Default To Here( 1 );

date1 = As Date( Today() );
Python Send( date1 );
date2 = Python Get( date1 );
Show( date1, date2 );

```

**Example 1**

```js

Names Default To Here( 1 );

x1 = {1, 2, 3};
Python Send( x1 );
x2 = Python Get( x1 );
Show( x1, x2 );

```

**numpy.datetime64**

```js

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

```js

Names Default To Here( 1 );
version = Python Get Version();
Show( version );

```

### Python Init

**Syntax:** PythonConnection = Python Init( )

**Description:** Note: This function is deprecated as of JMP 18 and is equivalent to Python Connect().

**JMP Version Added:** 14

**Example 1**

```js

Names Default To Here( 1 );

Python Init();
Python Submit( "\[
str = 'The quick brown fox jumps over the lazy dog';
]\" );
getStr = Python Get( str );
Show( getStr );

```

**Example 2**

```js

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

```js

Names Default To Here( 1 );
// install numpy and pandas packages
Python Install Packages( "numpy pandas" );

```

**Example 2**

```js

Names Default To Here( 1 );
// install numpy and pandas packages
Python Install Packages( {"numpy", "pandas"} );

```

**Example 3**

```js

Names Default To Here( 1 );
// install numpy and pandas packages
conn = Python Connect();
conn << Install Packages( "numpy pandas" );

```

### Python Is Connected

**Syntax:** connected = Python Is Connected()

**Description:** Note: This function is deprecated as of JMP 18 and always returns 1.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
x = Python Is Connected();
Show( x );

```

### Python JMP Name to Python Name

**Syntax:** Python name = Python JMP Name To Python Name( JMP name )

**Description:** Maps a JMP variable name to a Python variable name using Python variable naming rules.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
Python name = Python JMP Name to Python Name( a b c );
Show( Python name );

```

### Python Send

**Syntax:** Python Send( name, <Python Name( name ) | "as_name" > )

**Description:** Python, where the name argument can represent any of the following JMP data types ( numeric | string | matrix | list | data table | data table column | date ).

**JMP Version Added:** 14

**Column**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Python Send( dt:weight );
Python Submit( "print(weight)" );

```

**Data Table**

```js

Names Default To Here( 1 );

x = {1, 2, 3};
Python Send( x );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Python Send( dt );
Python Submit( "print(x)" );
Python Submit( "print(dt)" );

```

**Date**

```js

Names Default To Here( 1 );

date = As Date( Today() );
Python Send( date );
Python Submit( "print(date)" );

```

### Python Send File

**Syntax:** Python Send File( filename, <Python Name( name )> )

**Description:** Sends a data file to Python, where the filename argument is a string specifying a pathname to the file to be sent to Python.

**JMP Version Added:** 14

```js

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

```js

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

```js

Names Default To Here( 1 );
Python Submit File( "some_Python_source.py" );

```

### Python Term

**Syntax:** Python Term()

**Description:** Note: This function is deprecated as of JMP 18 and has no effect.

**JMP Version Added:** 14

### QR

**Syntax:** {Q, R} = QR( X )

**Description:** Creates an m by m orthogonal matrix Q and an m by n upper triangular matrix R, such that X = Q * R. The argument X is an m by n matrix.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
QR( [11 22, 33 44] );

```

### QR LAPACK

**Syntax:** {Q, R} = QR LAPACK( X )

**Description:** Creates an m by k orthogonal matrix Q and a k by n upper triangular matrix R, such that X = Q * R. The argument X is an m by n matrix, where k is min(m, n).

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
QR LAPACK( [11 22, 33 44] );

```

### Quadratic Form BLAS

**Syntax:** y = Quadratic Form BLAS( A, x )

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
A = [2 0, 0 2];
x = [2, 3];
y = Quadratic Form BLAS( A, x );

```

### Quantile

**Syntax:** y = Quantile( p, x1, ... )

**Description:** Returns the specified quantile p of the x arguments. The quantile argument can be a scalar or a matrix. The x values can also be specified as values within a single matrix or list argument.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Eval List(
	{Quantile( 0.75, 0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000 ),
	Quantile( 0.5, [1.2, 1.5, 10, 25, 31, 40, 50, 99, 1000, 5000, 25000, 100000] )}
);

```

### Quarter

**Syntax:** q = Quarter( datetime )

**Description:** Returns the quarter part of a date-time value, 1 - 4.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Quarter( Today() );

```

### Query

**Syntax:** result = Query( < < dt1 | Table( dt1, alias1 ) >, ..., < dtN | Table( dtN, aliasN ) > >,

     <Private|Invisible>, <Scalar>, sqlStatement )

**Description:** Perform an SQL query on JMP data tables. sqlStatement (the SQL query, most likely a SELECT statement) is required and must be the last argument. JMP data tables referenced by the SQL statement must be passed in as arguments to Query(), using Table(dt, "alias") to create an alias for the table that the SQL can use if desired. Invisible or Private can be passed in to control the visibility of the resulting data table. If the SQL statement returns a single value, pass in Scalar, which will cause the single value to be returned instead of a data table.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );
Query( dt, "SELECT name, age, height FROM 'Big Class'
         WHERE age > 14; " );

		// Using aliases, performing a join
dtSAT = Open( "$SAMPLE_DATA/SATByYear.jmp", Invisible );
dtUS = Open( "$SAMPLE_DATA/US Demographics.jmp", Invisible );
Query(
	Table( dtSAT, "t1" ),
	Table( dtUS, "t2" ), 

	"\[SELECT t1.State, t1."SAT Math", t2."College Degrees",
            t2."Eighth Grade Math"
       FROM t1
       LEFT OUTER JOIN t2
           ON t1.State = t2.State
       WHERE t1.'SAT Math' > 550;
      ]\"
);

		// Query that returns a scalar value
retval = Query( Scalar, dt, "SELECT AVG(height) from 'Big Class';" );
// Query with no tables
retval = Query( Scalar, "SELECT SQRT(152399025);" );

```

### Quit

**Syntax:** Quit(<"No Save">); Exit(<"No Save">)

**Description:** Exits JMP.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
If(
	New Window( "Quit() example",
		<<Type( "Modal" ),
		Text Box( "Shut down JMP?" ),
		H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
	)["Button"] == 1, /*OK==1*/Quit(), /*cancel==-1*/"Good choice."
);

```

### R Connect

**Syntax:** RConnection = R Connect()

**Description:** Returns an R connection scriptable object.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
RConnection = R Connect();

```

### R Control

**Syntax:** R Control( Interrupt | Async( bool ) | Echo( bool ) )

**Description:** Changes the control options for R

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
R Init( Echo( true ) );
R Control( Echo( false ) );
R Submit( "Add R code" );

```

### R Execute

**Syntax:** R Execute( { list of Inputs }, { list of Outputs }, statements )

**Description:** Sends a list of inputs, executes statements and returns a list of outputs.

**JMP Version Added:** Before version 14

```js

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

**Syntax:** y = R Get( name )

**Description:** Returns data from R, where the name argument can represent any of the following R data types ( numeric | string | matrix | list | data frame).

**JMP Version Added:** Before version 14

```js

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

**Syntax:** R graphics = R Get Graphics( format )

**Description:** DEPRECATED in JMP 19 and has no effect. As a replacement, set device to a file name such as png("r_plot.png"), and then open the file to retrieve the image. This option will be removed from JMP 20. Code below shows workaround.

**JMP Version Added:** Before version 14

```js

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

**Syntax:** version = R Get Version()

**Description:** Returns the version number of R being used with the JMP R interfaces.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
R Init();
version = R Get Version();
Show( version );

```

### R Init

**Syntax:** R Init()

**Description:** Initializes the R Interfaces.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
R Init();

```

### R Is Connected

**Syntax:** connected = R Is Connected()

**Description:** Returns 1 if there is an active R connection; otherwise, returns 0.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
R Init();
connected = R Is Connected();

```

### R JMP Name to R Name

**Syntax:** R name = R JMP Name To R Name( JMP name )

**Description:** Maps a JMP variable name to an R variable name using R variable naming rules.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
R name = R JMP Name to R Name( a b c );

```

### R Send

**Syntax:** R Send( name, <R Name( as_name ) | "as_name"> )

**Description:** Sends data to R, where the name argument can represent any of the following JMP data types ( numeric | string | matrix | list | data table | data table column).

**JMP Version Added:** Before version 14

**Column**

```js

Names Default To Here( 1 );
R Init();
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
R Send( dt:weight );
Close( dt );
w = R Get( "weight" );

```

**Data Table**

```js

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

**Syntax:** R Send File( filename, <R Name( name )> )

**Description:** Sends a data file to R, where the filename argument is a string specifying a pathname to the file to be sent to R.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
R Init();
R Send File( "$SAMPLE_DATA/Big Class.jmp" );
R Send File( "$SAMPLE_DATA/Baseball.jmp" );
R Submit( "Big.Class" );
R Submit( "Baseball" );

```

### R Submit

**Syntax:** R Submit( statements )

**Description:** Submit statements to R. Statements can be in the form of a string value or list of string values.

**JMP Version Added:** Before version 14

```js

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

**Syntax:** R Submit File( path )

**Description:** Submits statements to R using a file specified by the path argument.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );

R Init();
file_path = Get Path Variable( "SAMPLE_SCRIPTS" ) || "R/SI_example.R";
R Submit File( file_path );

```

### R Term

**Syntax:** R Term()

**Description:** Deprecated in JMP 19 and has no effect.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
R Init();
R Term();

```

### RGB Color

**Syntax:** y = RGB Color( r, g, b ); y = RGB Color( {r, g, b} )

**Description:** Returns a color number from the red, green, and blue components, all between 0 and 1. RGB Color(1, 1, 1) is white.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "RGB Color Example", 
    /* 1 through 16 are good */ 
	division = 6;
	blocks = division + 1;
	ysize = 400 / Sqrt( division );
	xsize = ysize * blocks;
	fract = 1 / division;
    /* 100 is default axis range */
	yBlockSize = 100 / blocks;
	xBlockSize = 100 / (blocks * blocks);
	Graph(
		frameSize( xsize, ysize ),
		For( blue = 0, blue <= 1, blue += fract,
			For( red = 0, red <= 1, red += fract,
				For( green = 0, green <= 1, green += fract,
					y = red / fract * yBlockSize;
					x = green / fract * xBlockSize + blue / fract * xBlockSize * blocks;
                    /* here's the example */
					Fill Color( RGB Color( red, green, blue ) );
					Rect( x, y, x + xBlockSize, y + yBlockSize, 1 );
				)
			)
		)
	);
);

```

### Radio Box

**Syntax:** y = Radio Box( {item, ...}, <script> )

**Description:** Returns a display box to show a set of radio buttons.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	rb = Radio Box( {"single", "double", "triple"}, Show( rb << Get() ) )
);

```

### Random Beta

**Syntax:** y = Random Beta( alpha, beta, <theta=0>, <sigma=1> )

**Description:** Returns a random number from a beta distribution.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random Beta( 1, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Beta( 1, 1 ) );
//show results
Show( x, v );

```

### Random Beta Binomial

**Syntax:** y = Random Beta Binomial( n, p, <delta=0> )

**Description:** Returns a random number from a beta binomial distribution for n trials with probability p and correlation delta.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random Beta Binomial( 14, .5, .2 );
//produce a vector of random numbers
v = J( 1, 10, Random Beta Binomial( 14, .5, .2 ) );
//show results
Show( x, v );

```

### Random Binomial

**Syntax:** y = Random Binomial( n, p )

**Description:** Returns a random number from a binomial distribution with n trials and event probability p.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
exrbinp = 0.5;
exrbinn = 40;
exrbinlsz = Log( 1000 );
New Window( "Example: Random Binomial and Empirical Distribution",
	exrbiny = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( 0, 40 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		exrbinsz = Round( Exp( exrbinlsz ) );
		exrbinsamp = J( Round( exrbinsz ), 1, . );
		exrbinfreq = J( Round( exrbinn + 1 ), 1, . );
		For( exrbink = 1, exrbink <= Round( exrbinsz ), exrbink++,
			exrbinsamp[exrbink] = Random Binomial( exrbinn, exrbinp )
		);
		For( exrbink = 0, exrbink <= Round( exrbinn ), exrbink++,
			exrbinfreq[exrbink + 1] = Sum( exrbinsamp <= exrbink ) / Round( exrbinsz )
		);
		For( exrbink = 0, exrbink < Round( exrbinn ), exrbink++,
			H Line(
				exrbink,
				exrbink + 1,
				Binomial Distribution( exrbinp, Round( exrbinn ), exrbink )
			);
			V Line(
				exrbink + 1,
				Binomial Distribution( exrbinp, Round( exrbinn ), exrbink ),
				Binomial Distribution( exrbinp, Round( exrbinn ), exrbink + 1 )
			);
		);
		Pen Color( "blue" );
		For( exrbink = 1, exrbink <= Round( exrbinn ), exrbink++,
			H Line( exrbink - 1, exrbink, exrbinfreq[exrbink] );
			V Line( exrbink, exrbinfreq[exrbink], exrbinfreq[exrbink + 1] );
		);
		Text(
			{0.5, 0.9},
			"n=",
			Round( exrbinn ),
			" p=",
			Round( exrbinp, 2 ),
			" size=",
			Round( exrbinsz )
		);
	),
	H List Box(
		Slider Box( Log( 10 ), Log( 5000 ), exrbinlsz, exrbiny << reshow ),
		Text Box( " random sample size" )
	)
);

```

### Random Category

**Syntax:** y = Random Category( probabilityA, resultA, probabilityB, resultB, resultElse )

**Description:** Returns a random category given pairs of probability and result expressions. A random uniform number is generated and compared to the probability arguments to determine which result argument is returned.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Random Category( .2, "A", .3, "B", .4, "C", "D" );

```

### Random Cauchy

**Syntax:** y = Random Cauchy()

**Description:** Returns a random number from a Cauchy distribution with a median of zero.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random Cauchy();
//produce a vector of random numbers
v = J( 1, 10, Random Cauchy() );
//show results
Show( x, v );

```

### Random ChiSquare

**Syntax:** y = Random ChiSquare( df, <nonCentrality=0> )

**Description:** Returns a random number from a Chi-Square distribution.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random ChiSquare( 2 );
//produce a vector of random numbers
v = J( 1, 10, Random ChiSquare( 2 ) );
//show results
Show( x, v );

```

### Random ExGaussian

**Syntax:** y = Random ExGaussian( location, scale, shape)

**Description:** Returns a random number from an ExGaussian distribution.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );

//produce a single random number
x = Random ExGaussian( 0, .5, .25 );
//produce a vector of random numbers
v = J( 1, 10, Random ExGaussian( 0, .5, .25 ) );
//show results
Show( x, v );

```

### Random Exp

**Syntax:** y = Random Exp()

**Description:** Returns a random number from an exponential distribution.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random Exp();
//produce a vector of random numbers
v = J( 1, 10, Random Exp() );
//show results
Show( x, v );

```

### Random F

**Syntax:** y = Random F( dfnum, dfden, <nonCentrality=0> )

**Description:** Returns a random number from an F distribution.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random F( 2, 2 );
//produce a vector of random numbers
v = J( 1, 10, Random F( 2, 2 ) );
//show results
Show( x, v );

```

### Random Frechet

**Syntax:** y = Random Frechet( <mu=0>, <sigma=1> )

**Description:** Returns a random number from a Fréchet distribution.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random Frechet( 10, 5 );
//produce a vector of random numbers
v = J( 1, 10, Random Frechet( 10, 5 ) );
//show results
Show( x, v );

```

### Random GLog

**Syntax:** y = Random GLog( mu, sigma, lambda )

**Description:** Returns a random number from a generalized logarithm distribution.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random GLog( 4, 1, 0.1 );
//produce a vector of random numbers
v = J( 1, 10, Random GLog( 4, 1, 0.1 ) );
//show results
Show( x, v );

```

### Random Gamma

**Syntax:** y = Random Gamma( alpha, <scale=1> )

**Description:** Returns a random number from a gamma distribution.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random Gamma( 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Gamma( 1 ) );
//show results
Show( x, v );

```

### Random Gamma Poisson

**Syntax:** y = Random Gamma Poisson( lambda, <sigma=1> )

**Description:** Returns a random number from a gamma Poisson distribution with parameters lambda and sigma.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random Gamma Poisson( 3, 2 );
//produce a vector of random numbers
v = J( 1, 10, Random Gamma Poisson( 3, 2 ) );
//show results
Show( x, v );

```

### Random GenGamma

**Syntax:** y = Random GenGamma( <mu=0>, <sigma=1>, <lambda=0> )

**Description:** Returns a random number from an extended generalized gamma distribution with parameters mu, sigma, and lambda.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random GenGamma( 2, 1.25 );
//produce a vector of random numbers
v = J( 1, 10, Random GenGamma( 2, 1.25 ) );
//show results
Show( x, v );

```

### Random Geometric

**Syntax:** y = Random Geometric( p )

**Description:** Returns a random number of non-events until an event occurs, for events with probability p.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
exrgeop = 0.1;
exrgeolsz = Log( 300 );
New Window( "Example: Random Geometric and Empirical Distribution",
	exrgeoy = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, 50 ),
		Pen Color( "red" ),
		Pen Size( 1 );
		exrgeosz = Round( Exp( exrgeolsz ) );
		exrgeosamp = J( Round( exrgeosz ), 1, . );
		exrgeofreq = J( Round( 50 + 1 ), 1, . );
		For( exrgeok = 1, exrgeok <= Round( exrgeosz ), exrgeok++,
			exrgeosamp[exrgeok] = Random Geometric( exrgeop )
		);
		For( exrgeok = 0, exrgeok <= 50, exrgeok++,
			exrgeofreq[exrgeok + 1] = Sum( exrgeosamp <= exrgeok ) / Round( exrgeosz )
		);
		exrgeotmp1 = 0;
		exrgeotmp2 = 0;
		For( exrgeok = 0, exrgeok < 50, exrgeok++,
			exrgeotmp2 = exrgeotmp2 + (1 - exrgeop) ^ exrgeok * exrgeop;
			H Line( exrgeok, exrgeok + 1, exrgeotmp2 );
			V Line( exrgeok, exrgeotmp1, exrgeotmp2 );
			exrgeotmp1 = exrgeotmp2;
		);
		Pen Color( "blue" );
		For( exrgeok = 0, exrgeok < 50, exrgeok++,
			H Line( exrgeok, exrgeok + 1, exrgeofreq[exrgeok + 1] );
			V Line( exrgeok + 1, exrgeofreq[exrgeok + 1], exrgeofreq[exrgeok + 2] );
		);
		Text( {10, 0.2}, " p=", Round( exrgeop, 2 ), " sample size=", Round( exrgeosz ) );
	),
	H List Box(
		Slider Box( Log( 10 ), Log( 5000 ), exrgeolsz, exrgeoy << reshow ),
		Text Box( " random sample size" )
	)
);

```

### Random Index

**Syntax:** x = Random Index( n, k )

**Description:** Returns a k by 1 matrix of random integers between 1 and n with no duplicates.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Random Index( 100, 5 );

```

### Random Integer

**Syntax:** y = Random Integer( n ); Random Integer( k, n )

**Description:** Returns a random integer between 1 and n (or between k and n) inclusive.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random Integer( 1, 10 );
//produce a vector of random numbers
v = J( 1, 10, Random Integer( 1, 10 ) );
//show results
Show( x, v );

```

### Random Johnson Sb

**Syntax:** y = Random Johnson Sb( gamma, delta, theta, sigma )

**Description:** Returns a random number from a Johnson Sb distribution.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random Johnson Sb( 0.5, 1, 1, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Johnson Sb( 0.5, 1, 1, 1 ) );
//show results
Show( x, v );

```

### Random Johnson Sl

**Syntax:** y = Random Johnson Sl( gamma, delta, theta, <sigma=1> )

**Description:** Returns a random number from a Johnson Sl distribution.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random Johnson Sl( 0.5, 1, 1, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Johnson Sl( 0.5, 1, 1, 1 ) );
//show results
Show( x, v );

```

### Random Johnson Su

**Syntax:** y = Random Johnson Su( gamma, delta, theta, sigma )

**Description:** Returns a random number from a Johnson Su distribution.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random Johnson Su( 0.5, 1, 1, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Johnson Su( 0.5, 1, 1, 1 ) );
//show results
Show( x, v );

```

### Random LEV

**Syntax:** y = Random LEV( <mu=0>, <sigma=1> )

**Description:** Returns a random number from a LEV distribution.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random LEV( 10, 5 );
//produce a vector of random numbers
v = J( 1, 10, Random LEV( 10, 5 ) );
//show results
Show( x, v );

```

### Random LogGenGamma

**Syntax:** y = Random LogGenGamma( <mu=0>, <sigma=1>, <lambda=0> )

**Description:** Returns a random number from a log generalized gamma distribution with parameters mu, sigma, and lambda.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random LogGenGamma( 2, 1.25 );
//produce a vector of random numbers
v = J( 1, 10, Random LogGenGamma( 2, 1.25 ) );
//show results
Show( x, v );

```

### Random Logistic

**Syntax:** y = Random Logistic( <mu=0>, <sigma=1> )

**Description:** Returns a random number from a logistic distribution.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random Logistic( 15, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Logistic( 15, 1 ) );
//show results
Show( x, v );

```

### Random Loglogistic

**Syntax:** y = Random Loglogistic( <mu=0>, <sigma=1> )

**Description:** Returns a random number from a loglogistic distribution.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random Loglogistic( 15, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Loglogistic( 15, 1 ) );
//show results
Show( x, v );

```

### Random Lognormal

**Syntax:** y = Random Lognormal( <mu=0>, <sigma=1> )

**Description:** Returns a random number from a lognormal distribution with location parameter mu and scale parameter sigma.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );

//produce a single random number
x = Random Lognormal( -1, 1.5 );
//produce a vector of random numbers
v = J( 1, 10, Random Lognormal( -1, 1.5 ) );
//show results
Show( x, v );

```

**Example 2**

```js

Names Default To Here( 1 );
exrlnn = 30;
New Window( "Example: Random Lognormal and Empirical Distribution",
	exrlny = Graph Box(
		Y Scale( -0.05, 1.05 ),
		X Scale( -.05, 10 ),
		Pen Color( "red" );
		exranlnorm = J( Round( exrlnn ), 1, . );
		For( k = 1, k <= Round( exrlnn ), k++,
			exranlnorm[k] = Random Lognormal( -1, 1.5 )
		);
		exranlnorm = Sort Ascending( exranlnorm );
		H Line( 0, exranlnorm[1], 0 );
		For( k = 2, k <= Round( exrlnn ), k++,
			H Line( exranlnorm[k - 1], exranlnorm[k], (k - 1) / Round( exrlnn ) )
		);
		H Line( exranlnorm[Round( exrlnn )], 10, 1.0 );
		Pen Color( "blue" );
		Y Function( Normal Distribution( Log( tdeq ), -1, 1.5 ), tdeq );
		Text( {-4, 0.8}, " n=", Round( exrlnn ) );
	),
	H List Box( Slider Box( 10, 2000, exrlnn, exrlny << reshow ), Text Box( " n" ) )
);

```

### Random Multivariate Normal

**Syntax:** y = Random Multivariate Normal( mean, covar, <nrows=1>)

**Description:** Returns a random nrows by p matrix from a multivariate normal distribution with mean vector mean and (positive semi-definite) covariance matrix covar, where p is defined as the number of rows of covar.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
meanvec = 1 :: 3;
covar = [1 .6 .6, .6 1 .6, .6 .6 1];
randmvnRow = Random Multivariate Normal( meanvec, covar );
randmvnMat = Random Multivariate Normal( meanvec, covar, 10 );

```

### Random Negative Binomial

**Syntax:** y = Random Negative Binomial( r, p )

**Description:** Returns a random number of non-events until r events occur, for events with probability p.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
exnbpp = 0.3;
exnbpn = 20;
exnbrn = Random Negative Binomial( 20, 0.3 );
New Window( "Example: Neg Binomial Probability",
	exnbpy = Graph Box(
		Y Scale( 0, 0.04 ),
		X Scale( -1, 100 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( exnbpk = 0, exnbpk < 1000, exnbpk++,
			V Line( exnbpk, 0, Neg Binomial Probability( exnbpp, exnbpn, exnbpk ) )
		);
		Pen Color( "blue" );,
		Pen Size( 4 ),
		V Line( exnbrn, 0, Neg Binomial Probability( exnbpp, exnbpn, exnbrn ) );
		Text( {1, 0.035}, "n=", Round( exnbpn ), " p=", Round( exnbpp, 2 ) );
		Text(
			{1, 0.030},
			"x=",
			Round( exnbrn, 2 ),
			" Prob=",
			Round( Neg Binomial Probability( exnbpp, exnbpn, exnbrn ), 2 )
		);
	),
	H List Box(
		Button Box( "Generate a Random Negative Binomial Number",
			exnbrn = Random Negative Binomial( 20, 0.3 );
			exnbpy << reshow;
		)
	)
);

```

### Random Normal

**Syntax:** y = Random Normal( <mu=0>, <sigma=1> )

**Description:** Returns a random number from a normal distribution with mean mu and standard deviation sigma.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );

//produce a single random number
x = Random Normal();
//produce a vector of random numbers
v = J( 1, 10, Random Normal() );
//show results
Show( x, v );

```

**Example 2**

```js

Names Default To Here( 1 );
exGcoordX = J( 50, 1, . );
exGcoordY = J( 50, 1, . );
For( k = 1, k <= 50, k++,
	exGcoordX[k] = Random Uniform( -5, 5 )
);
For( k = 1, k <= 50, k++,
	exGcoordY[k] = exGcoordX[k] + Random Normal()
);
New Window( "Random Normal, Linear Regression, and Outlier",
	V List Box(
		Graph Box(
			framesize( 600, 300 ),
			X Scale( -10, 10 ),
			Y Scale( 1.5 * Min( exGcoordY ), 1.5 * Max( exGcoordY ) ),
			double buffer,
			exsx = Sum( exGcoordX ),
			exsy = Sum( exGcoordY ),
			exsxx = Sum( (exGcoordX) ^ 2 );
			exsxy = Sum( exGcoordX :* exGcoordY );
			exbeta1 = (100 * exsxy - exsx * exsy) / (100 * exsxx - exsx * exsx);
			exbeta0 = (exsy - exbeta1 * exsx) / 100;
			exx1 = Min( exGcoordX );
			exy1 = exbeta0 + exbeta1 * Min( exGcoordX );
			exx2 = Max( exGcoordX );
			exy2 = exbeta0 + exbeta1 * Max( exGcoordX );
			Line( {exx1, exy1}, {exx2, exy2} );
			Marker Size( 5 );
			Drag Marker( exGcoordX, exGcoordY );
			Drag Text( [-7], [-5], "drag any marker" );
		)
	)
);

```

### Random Normal Mixture

**Syntax:** y = Random Normal Mixture( meanvec, sdvec, probvec )

**Description:** Returns a random number from a normal mixture distribution with group means meanvec, group standard deviations sdvec, and group probabilities probvec.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
dt = New Table( "Example",
	New Column( "Rand NM",
		set formula( Random Normal Mixture( [-3, 3], [1, 1], [.3, .7] ) )
	)
);
dt << add rows( 1000 );
Distribution( Continuous Distribution( Column( :Rand NM ), Vertical( 0 ) ) );

```

### Random Poisson

**Syntax:** y = Random Poisson( lambda )

**Description:** Returns a random number from a Poisson distribution.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
exrpoilambda = 20;
exrpoilsz = Log( 300 );
New Window( "Example: Random Poisson and Empirical Distribution",
	exrpoiy = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, 50 ),
		Pen Color( "red" ),
		Pen Size( 1 );
		exrpoisz = Round( Exp( exrpoilsz ) );
		exrpoisamp = J( Round( exrpoisz ), 1, . );
		exrpoifreq = J( Round( 50 + 1 ), 1, . );
		For( exrpoik = 1, exrpoik <= Round( exrpoisz ), exrpoik++,
			exrpoisamp[exrpoik] = Random Poisson( exrpoilambda )
		);
		For( exrpoik = 0, exrpoik <= 50, exrpoik++,
			exrpoifreq[exrpoik + 1] = Sum( exrpoisamp <= exrpoik ) / Round( exrpoisz )
		);
		exrpoitmp1 = 0;
		exrpoitmp2 = 0;
		For( exrpoik = 0, exrpoik < 50, exrpoik++,
			H Line( exrpoik, exrpoik + 1, Poisson Distribution( exrpoilambda, exrpoik ) );
			V Line(
				exrpoik + 1,
				Poisson Distribution( exrpoilambda, exrpoik ),
				Poisson Distribution( exrpoilambda, exrpoik + 1 )
			);
		);
		Pen Color( "blue" );
		For( exrpoik = 0, exrpoik < 50, exrpoik++,
			H Line( exrpoik, exrpoik + 1, exrpoifreq[exrpoik + 1] );
			V Line( exrpoik + 1, exrpoifreq[exrpoik + 1], exrpoifreq[exrpoik + 2] );
		);
		Text(
			{10, 0.2},
			" \!U03BB=",
			Round( exrpoilambda, 2 ),
			" sample size=",
			Round( exrpoisz )
		);
	),
	H List Box(
		Slider Box( Log( 10 ), Log( 5000 ), exrpoilsz, exrpoiy << reshow ),
		Text Box( " random sample size" )
	)
);

```

### Random Reset

**Syntax:** Random Reset( seed number )

**Description:** Restarts the random sequences with a new seed.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Random Reset( 1 );
Random Normal();

```

### Random SEV

**Syntax:** y = Random SEV( <mu=0>, <sigma=1> )

**Description:** Returns a random number from a SEV distribution.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random SEV( 50, 5 );
//produce a vector of random numbers
v = J( 1, 10, Random SEV( 50, 5 ) );
//show results
Show( x, v );

```

### Random SHASH

**Syntax:** y = Random SHASH( gamma, delta, theta, sigma )

**Description:** Returns a random number from the sinh-arcsinh (SHASH) distribution.

**JMP Version Added:** 14

**Example 1**

```js

Names Default To Here( 1 );

//produce a single random number
x = Random SHASH( 0, 1, 0, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random SHASH( 0, 1, 0, 1 ) );
//show results
Show( x, v );

```

**SHASH Transformation**

```js

Names Default To Here( 1 );
gamma = 1;
delta = .5;
theta = -1;
sigma = 2;
x = 3;
result1 = SHASHTrans( x, gamma, delta, theta, sigma );
result2 = SinH( gamma + delta * ArcSinH( (x - theta) / sigma ) );
Show( result1, result2 );

```

### Random SVD

**Syntax:** {U, M, V} = Random SVD( X , <nSingularValues=min(nRow,nCol)>, <nOver=10>, <nIter=2>)

**Description:** Computes the singular value decomposition of matrix X using the randomized singular value decomposition by returning a list {U, M, V} such that U*diag(M)*V` is equal to X.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
Random SVD( [11 22, 33 44], 1 );

```

### Random Seed State

**Syntax:** Random Seed State( <seed state> )

**Description:** Retrieves or restores the random seed state to or from a blob object.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
r = Random Seed State();
Random Seed State( r );

```

### Random Shuffle

**Syntax:** y = Random Shuffle( matrix )

**Description:** Returns the matrix with the elements shuffled into a random order.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
exA = [1 2 6, 3 5 8];
Random Shuffle( exA );

```

### Random Triangular

**Syntax:** y = Random Triangular( a, b, c );

y = Random Triangular( b, c );

y = Random Triangular( b )

**Description:** Returns a random number from a triangular distribution with lower limit a, mode b, and upper limit c. Random Triangular(b,c) is equivalent to Random Triangular(0,b,c). Random Triangular(b) is equivalent to Random Triangular(0,b,1).

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Random Reset( 13579 );
x = Random Triangular( 0.8 );
Random Reset( 13579 );
y = Random Triangular( 0, 0.8, 1 );
Show( x, y );

```

### Random Uniform

**Syntax:** y = Random Uniform( <min>, <max> )

**Description:** Returns a random number from a uniform distribution between min and max, exclusive.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );

//produce a single random number
x = Random Uniform( 1, 10 );
//produce a vector of random numbers
v = J( 1, 10, Random Uniform( 1, 10 ) );
//show results
Show( x, v );

```

**Example 2**

```js

Names Default To Here( 1 );
Random Uniform( 1, 10 );

```

### Random Weibull

**Syntax:** y = Random Weibull( beta, <alpha=1> )

**Description:** Returns a random number from a Weibull distribution.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random Weibull( 3, 20 );
//produce a vector of random numbers
v = J( 1, 10, Random Weibull( 3, 20 ) );
//show results
Show( x, v );

```

### Random ZI Negative Binomial

**Syntax:** y = Random ZI Negative Binomial( lambda, sigma, pi )

**Description:** Returns a random number from a zero-inflated Negative Binomial distribution with location parameter lambda, scale parameter sigma, and zero inflation parameter pi.

**JMP Version Added:** 19

**Example 1**

```js

Names Default To Here( 1 );
exnbpp = 0.3;
exnbpn = 20;
rnb = Random ZI Negative Binomial( 25, .5, .05 );
New Window( "Example: Zero Inflated Negative Binomial",
	exnbpy = Graph Box(
		Y Scale( 0, 0.075 ),
		X Scale( -1, 100 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( i = 0, i < 100, i++,
			V Line( i, 0, ZI Negative Binomial Probability( i, 25, .5, .05 ) )
		);
		Pen Color( "blue" );,
		Pen Size( 4 ),
		V Line( rnb, 0, ZI Negative Binomial Probability( rnb, 25, .5, .05 ) );
		Text(
			{25, 0.06},
			"lambda=",
			Round( 25 ),
			", sigma=",
			Round( .5, 2 ),
			", pi=",
			Round( .05, 2 )
		);
		Text(
			{25, 0.05},
			"x=",
			Round( rnb, 2 ),
			", Prob=",
			Round( ZI Negative Binomial Probability( rnb, 25, .5, .05 ), 4 )
		);
	),
	H List Box(
		Button Box( "Generate a Random Zero Inflated Negative Binomial Number",
			rnb = Random ZI Negative Binomial( 25, .5, .05 );
			exnbpy << reshow;
		)
	)
);

```

**Example 2**

```js

Names Default To Here( 1 );
Random Reset( 19 );
dt = As Table( J( 1000, 1, Random ZI Negative Binomial( 5, 2, .2 ) ) );
Column( 1 ) << set name( "Random ZiNB" );
dt << Distribution(
	Continuous Distribution(
		Column( :Random ZiNB ),
		Vertical( 0 ),
		Fit ZI Negative Binomial,
		CDF Plot( 1 )
	)
);

```

### Random ZI Poisson

**Syntax:** y = Random ZI Poisson Binomial( lambda, pi )

**Description:** Returns a random number from a zero-inflated Poisson distribution with location parameter lambda and zero inflation parameter pi.

**JMP Version Added:** 19

**Example 1**

```js

Names Default To Here( 1 );
exnbpp = 0.3;
exnbpn = 20;
rp = Random ZI Poisson( 20, .05 );
New Window( "Example: Zero Inflated Poisson",
	exnbpy = Graph Box(
		Y Scale( 0, 0.1 ),
		X Scale( -1, 60 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( i = 0, i < 100, i++,
			V Line( i, 0, ZI Poisson Probability( i, 20, .05 ) )
		);
		Pen Color( "blue" );,
		Pen Size( 4 ),
		V Line( rp, 0, ZI Poisson Probability( rp, 20, .05 ) );
		Text( {30, 0.06}, "lambda=", Round( 20 ), ", pi=", Round( .05, 2 ) );
		Text(
			{30, 0.05},
			"x=",
			Round( rp, 2 ),
			", Prob=",
			Round( ZI Poisson Probability( rp, 20, .05 ), 4 )
		);
	),
	H List Box(
		Button Box( "Generate a Random Zero Inflated Poisson Number",
			rp = Random ZI Poisson( 20, .05 );
			exnbpy << reshow;
		)
	)
);

```

**Example 2**

```js

Names Default To Here( 1 );
Random Reset( 19 );
dt = As Table( J( 1000, 1, Random ZI Poisson( 5, .2 ) ) );
Column( 1 ) << set name( "Random ZIP" );
dt << Distribution(
	Continuous Distribution(
		Column( :Random ZIP ),
		Vertical( 0 ),
		Fit ZI Poisson,
		CDF Plot( 1 )
	)
);

```

### Random t

**Syntax:** y = Random t( df, <nonCentrality=0> )

**Description:** Returns a random number from an t distribution.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random t( 2 );
//produce a vector of random numbers
v = J( 1, 10, Random t( 2 ) );
//show results
Show( x, v );

```

### Range

**Syntax:** y = Range( x1, ... )

**Description:** Returns the minimum and maximum values among the combined arguments, which can be scalar, matrix or list arguments.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
Eval List( {Range( Pi(), e() ), Range( [33 44 22] )} );

```

### Range Slider Box

**Syntax:** y = Range Slider Box( minValue, maxValue, lowVariable, highVariable, script )

**Description:** Returns a display box that shows a range slider control that ranges from minValue to maxValue. As the two sliders&apos; positions change, their values are placed into lowVariable and highVariable, and the script is run.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
sliderLowerValue = .5;
sliderUpperValue = .7;
New Window( "Example",
	Panel Box( "Range Slider",
		tb1 = Text Box( "Low Value: " || Char( sliderLowerValue ) ),
		tb2 = Text Box( "High Value: " || Char( sliderUpperValue ) ),
		sb = Range Slider Box(
			0,
			1,
			sliderLowerValue,
			sliderUpperValue,
			tb1 << Set Text( "Low Value: " || Char( sliderLowerValue ) );
			tb2 << Set Text( "High Value: " || Char( sliderUpperValue ) );
		)
	)
);

```

### Rank

**Syntax:** y = Rank Index( x )

**Description:** Returns a vector of indices that, used as a subscript to the original vector v, sorts the vector by rank. Excludes missing values.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Rank( [33, 22, 44, 11, ., 33] );

```

### Rank Index

**Syntax:** y = Rank Index( x )

**Description:** Returns a vector of indices that, used as a subscript to the original vector v, sorts the vector by rank. Excludes missing values.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Rank Index( [33, 22, 44, 11, ., 33] );

```

### Ranking

**Syntax:** y = Ranking( x, < <<tie("average"|"row"|"minimum"|"maximum"|"arbitrary")> )

**Description:** Returns a vector of ranks of the values of x, low to high as 1 to n, ties arbitrary.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Ranking( [33, 22, 44, 11, 33] );
Ranking( [22, 11, 33, 11, 44, 55, 44, 44, 44], <<Tie( "minimum" ) );

```

### Ranking Tie

**Syntax:** y = Ranking Tie( x, < <<tie("average"|"row"|"minimum"|"maximum"|"arbitrary")> )

**Description:** Returns a vector of ranks of the values of x, but ranks for ties averaged.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Ranking Tie( [33, 22, 44, 11, 33] );

```

### Recode

**Syntax:** recode(string|number|list, {<transform>, ...}, <Multiple Response (Separator(sepChar))>, <By Word(Delimiters(<chars>)>)

**Description:** Apply the listed transformations to the input value(s) and return the result. The Multiple Response and By Word options split supplied character data into smaller input values. Once the input values are determined, the transformations are applied to those values separately.

Special JSL variables are populated during the execution of the command:

	_rcNow is the current value of the input after the previous transformation(s).

	_rcOrig is the original value of the input.

**JMP Version Added:** 15

**Example 1**

```js

Names Default To Here( 1 );
Recode(
	"27513-0000",
	{Regex( _rcNow, "(\d\d\d\d\d)-\d+", "\1", GLOBALREPLACE ), Num( _rcNow )}
);

```

**Example 2**

```js

Names Default To Here( 1 );
Recode(
	"A B C",
	{Map Value( _rcNow, {"A", "Apple", "B", "Banana"}, Unmatched( "Unknown fruit" ) )},
	By Word
);

```

### Rect

**Syntax:** Rect( left, top, right, bottom, <fill=0> ); Rect( {left, top}, {right, bottom} )

**Description:** Draws a rectangle, filled if fill is nonzero.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Color( "Green" );
		Pen Size( 2 );
		Fill Color( "Red" );
		Rect( 15, 75, 65, 55, 1 );
		Rect( 10, 80, 70, 50 );
	)
);

```

### Recurse

**Syntax:** y = Recurse( x1, ... )

**Description:** Calls the containing function.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
ex rev = Function( {s},
	If( Length( s ) <= 1,
		s,
		Recurse( Substr( s, 2 ) ) || Left( s, 1 )
	)
);
ex rev( "abcd" );

```

### Regex

**Syntax:** result = Regex( source, pattern, <format, <IGNORECASE>, <GLOBALREPLACE>> )

**Description:** Searches in the source text for a match to the pattern. The format defaults to "\0" (the entire match) but could be "Fred" (for a constant replacement) or "\1" (to use the text matched by the first parenthesis in the pattern). Returns numeric missing for no match. Case must match by default.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Regex(
	"   Are you there Alice?, asked Jerry.",
	" (here|there) (\w+).+(said|asked) (\w+)\.",
	"  I am \1, \4, replied \2."
);

```

### Regex Match

**Syntax:** Regex Match( source, pattern, <replacement | NULL>, <MATCHCASE> )

**Description:** Executes a regular expression match and returns a list of the entire matched text and the matches for each back reference created by an open parenthesis. Optionally, the third argument specifies a replacement string for the entire match; the replacement string can use back references.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );

source = "believe";
// [aeiou] matches exactly one vowel
// .*? is a reluctant (vs greedy) match. try it without the ? to see the greedy behavior
// \1 is a back reference to the first ( group -- [aeiou] is inside the first ( group
matches = Regex Match(
	source, // a variable allows updating some text
	"([aeiou])(.*?)(\1)", // a regex with parens makes back references
	">\2<" // the match is replaced by text that uses a back reference
);
Show( source, matches );
// results:
// source = "b>li<ve";
// matches = {"elie", "e", "li", "e"};
// notes:
// matches[1] is the entire match AND the part that will be replaced
// matches[2] is back ref \1  this is the letter e matched by [aeiou]
// matches[3] is back ref \2  this is the letter li matched by .*?
// matches[4] is back ref \3  this is another letter e match by \1, which was an e
//
// the * operator is greedy by default, taking as many characters as it can, and
// only backing up if required. Adding the ? makes it reluctant, taking characters
// one at a time and allowing the remaining pattern to have a chance earlier.

```

### Register Addin

**Syntax:** Register Addin( uniqueId, homeFolder, <displayName(name)>, <MinJMPVersion(version)>, <MaxJMPVersion(version)>, <LoadsAtStartup(autoLoad)>, <LoadNow(load)> )

**Description:** Register an add-in

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Register Addin(
	"com.mycompany.myaddin",
	"$DOCUMENTS/myaddin",
	displayname( "Sample Addin" )
);

```

### Reload Policies

**Syntax:** Reload Policies()

**JMP Version Added:** 18

### Remove

**Syntax:** y = Remove( x, <i>, <n=1> ); y = Remove( x, {list} )

**Description:** Returns a copy of list x, deleting n items starting with the ith item or deleting a list of items specified by the list argument.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Remove( {11, 22, 33, 44, 55}, 3, 2 );

```

### Remove Color Theme

**Syntax:** Remove Color Theme("Name"|{"Name", <flags>, {color, ...}, <{position, ...}>})

**Description:** Removes a custom color theme from the global list, either by name or by the full color theme object.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Remove Color Theme( "Yellow To Blue" );

```

### Remove Custom Functions

**Syntax:** Remove Custom Functions({function 1 full name, function 2 full name, ...} | function full name)

**Description:** Removes a list of custom functions from the environment.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
Remove Custom Functions( {"custom:Add", "custom:Sub"} );

```

### Remove From

**Syntax:** Remove From( x, <i>, <n=1> )

**Description:** Modifies list, associative array, or display box x by removing items. Associative arrays specify the item to be removed with a key value i. Lists and display boxes remove starting with the item in position i. A list will remove multiple items at once if the n option is specified. Note that the x argument must be a variable.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
ex = {11, 22, 33, 44, 55};
Remove From( ex, 3, 2 );
ex;

```

**Example 2**

```js

Names Default To Here( 1 );
ex = ["a" => 10, "b" => 3, "c" => 12, => 0];
Remove From( ex, "c" );
ex;

```

**Example 3**

```js

Names Default To Here( 1 );
New Window( "boxes",
	hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) )
);
Wait( 1 );
Remove From( hlist, 1 );

```

### Rename Directory

**Syntax:** rc = Rename Directory( old, new )

**Description:** Renames a directory without moving or copying it; the new name does NOT include a path. Returns 1 if the directory was renamed. Returns 0 if the directory was unable to be renamed or the path is invalid.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Delete Directory( "$TEMP/subD" );
Delete Directory( "$TEMP/Loss Function Templates" );
rc0 = Copy Directory( "$SAMPLE_DATA/Loss Function Templates", "$TEMP" );
rc1 = Rename Directory( "$TEMP/Loss Function Templates", "subD" /* NO PATH */ );
rc2 = Directory Exists( "$TEMP/Loss Function Templates" );
rc3 = Directory Exists( "$TEMP/subD" );
rc4 = Delete Directory( "$TEMP/subD" );
rc5 = Directory Exists( "$TEMP/subD" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||
Char( rc4 ) || " " || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Rename File

**Syntax:** rc = Rename File( old, new )

**Description:** Renames a file without moving or copying it; the new name does NOT include a path. Returns 1 if the file was renamed. Returns 0 if the file was unable to be renamed. Throws an error when path is invalid or does not exist.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
rc0 = Copy File( "$SAMPLE_DATA/Loss Function Templates/Normal.jmp", "$TEMP/x.jmp" );
rc1 = Rename File( "$TEMP/x.jmp", "y.jmp" /* NO PATH */ );
rc2 = File Exists( "$TEMP/x.jmp" );
rc3 = File Exists( "$TEMP/y.jmp" );
rc4 = Delete File( "$TEMP/y.jmp" );
rc5 = File Exists( "$TEMP/y.jmp" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||
Char( rc4 ) || " " || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Repeat

**Syntax:** s = Repeat( x, n, <m=1> )

**Description:** Returns the text, matrix, or list specified by the x argument concatenated with itself n times. If x is a number or a matrix, then n indicates vertical repetition and the optional argument m designates horizontal repetition.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Show( Repeat( {"A", "B"}, 3 ), Repeat( 2, 3 ), Repeat( 2, 1, 3 ) );

```

### Report

**Syntax:** y = Report( platform object )

**Description:** Returns a reference to the display tree for the report from a platform.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Report( Bivariate( Y( :weight ), X( :height ), Fit Line ) );

```

### Resample Freq

**Syntax:** Resample Freq( <rate=1>, <column> )

**Description:** Generates a frequency count for sampling with replacement, useful for bootstrap samples. With no arguments, the function generates a 100% resample. The rate argument specifies the rate of resampling. If the column argument is specified, the sample size chosen is rate multiplied by the sum of the specified column. A negative rate signals that fractional frequencies are allowed.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Freq", numeric, formula( Resample Freq() ) );
New Window( "w", theBox = V List Box() );
For( i = 1, i <= 30, i++,
	Column( "Freq" ) << EvalFormula;
	theBox << append(
		V List Box(
			Bivariate( Y( :height ), X( :weight ), Freq( :Freq ), Fit Line( 1 ) )
		)
	);
);
newDt = theBox["Parameter Estimates", Table Box( 1 )] << MakeCombinedDataTable;
newDt << Distribution( Y( :Estimate ), By( :Term ), Horizontal Layout( 1 ) );
theBox << CloseWindow;

```

### Return

**Syntax:** Return(<Expr>, ..., <ExprN>)

**Description:** Returns an expression value from a user-defined function.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
vr = Function( {},
	x = 2;
	y = 4;
	Return( Char( x * y ) );
);
lvr = Function( {},
	x = 2;
	y = 4;
	For( i = 1, i < 5, i++,
		If( i == 3,
			Return( i * x * y )
		)
	);
);
nr = Function( {}, Return() );
vrv = vr();
lvrv = lvr();
nrv = nr();
Show( vrv, lvrv, nrv );

```

**Example 2**

```js

Names Default To Here( 1 );
f = Function( {a, b},
	Return( a - b, a + b )
);
{lo, hi} = f( 10, 1 );
Show( lo, hi );
Show( f( 7, 15 ) );

```

### Reverse

**Syntax:** y = Reverse( x )

**Description:** Returns a copy of list x with the item order reversed.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Reverse( {11, 22, 33, 44, 55} );

```

### Reverse Into

**Syntax:** Reverse Into( x )

**Description:** Modifies list or display box x with the item order reversed. Note that the x argument must be a variable.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
ex = {11, 22, 33, 44, 55};
Reverse Into( ex );
ex;

```

**Example 2**

```js

Names Default To Here( 1 );
New Window( "boxes",
	hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) )
);
Wait( 1 );
Reverse Into( hlist );

```

### Revert Menu

**Syntax:** Revert Menu()

**Description:** Reverts to factory default menus.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
/* Reverts menus back to factory default settings. */

```

### Right

**Syntax:** sub = Right( s, n, <filler> )

**Description:** Returns a truncated or padded version of the original string or list s. The result contains the right n characters or list items, padded with any filler on the left if the length of s is less than n.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Right( "http://www.jmp.com", 3 );

```

### Robust PCA

**Syntax:** {A,E} = Robust PCA( X , <Lambda(2/sqrt(max(nrow,ncol)))>, <tolerance=1e-10>,<maxit(75)>,<Center(1)>,<Scale(1)>

**Description:** Robustly decomposes data into a low-rank matrix and a sparse matrix of residuals. Outliers are detected in the residuals. It can also impute missing values.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
X = [1 -3, -1 -2, -3 -4, -4 -3, -3 1, 3 3] * [-2 5 -1 -2 1, 4 5 -4 -3 1];
X[2, 3] += 15;
Result = Robust PCA( X, Center( 0 ), Scale( 0 ), Lambda( .80 ) );

```

### Root

**Syntax:** y = Root( x, <n=2> )

**Description:** Returns the nth root of x.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Round( Root( 2, 3 ), 4 ) /* cube root */;

```

### Round

**Syntax:** y = Round( x, <n> )

**Description:** Rounds x to n digits after the decimal point (or 0 digits if n is not specified). Note that the n argument can be negative.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Round( 213, -1 );

```

### Row

**Syntax:** y = Row(); Row() = y

**Description:** Returns the current row in a data table. Can be set as an L-value. Reset the current row by assigning value of 0.

**JMP Version Added:** Before version 14

**Reset Row**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Add Rows( 5 );
Show( Row() );
Row() = 0;

```

**Set Row**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 3;
:height * :weight;

```

### Row State

**Syntax:** y = Row State( <dt>, <r> ); Row State( <dt>, <r> ) = y

**Description:** Returns the row state of the current (or rth) row in the current data table. If the Row State() function is used as an L-value, it changes the row state of the current (or rth) row in the current data table.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Color State( {1, .5, 1} );
Color To RGB( Color Of( Row State( 3 ) ) );

```

### Rummage

**Syntax:** treasures = Rummage( box, query )

**JMP Version Added:** 17

**Example 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Rummage( Window( dt ), "Wilcox" ) << title;

```

**Example 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Rummage( Report( obj ), "Wilcox" ) << details;

```

**Example 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Show(
	Rummage(
		Window( dt ),
		"graph builder",
		Algorithm( "FilterUtility" ),
		Match All Terms( 0 )
	)[1 :: 5] << Title
);
Show( Rummage( Window( dt ), "graph builder", Algorithm( "Basic" ) )[1 :: 3] << Title );

```

### Run Program

**Syntax:** obj = Run Program(

    Executable( "path/etc.exe" ),

  < Options( {"/a", "/b etc" } ) >,

  < Parameter( optParm ) >,

  < Read Function( Function( {this, optParm}, etc ) | "text" | "blob" ) >,

  < Write Function( Function( {this, optParm}, etc ) ) >

)

**Description:** Control an external program using stdin and stdout.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
RP = Run Program(
	Executable( "PING.EXE"/*path probably not needed*/ ),
	Options( {"-n 5", "localhost"} ),
	ReadFunction( Function( {this}, Write( this << read ) ) )
);

```

**Example 2**

```js

Names Default To Here( 1 );
RP = Run Program(
	Executable( "CMD.EXE"/*path probably not needed*/ ),
	Options( {"/a", "/q", "/c dir"} ),
	ReadFunction( Function( {this}, Write( this << read ) ) )
);

```

**Example 3**

```js

Names Default To Here( 1 );
commands = {"echo this is a test\!n", "ping -n 1 localhost\!n", "exit\!n"};
icommand = 0;
RP = Run Program(
	Executable( "CMD.EXE" ),
	Options( {"/a", "/q"} ),
	ReadFunction( Function( {this}, Write( this << Read ) ) ),
	WriteFunction(
		Function( {this},
			icommand++;
			If( icommand <= N Items( commands ),
				this << Write( commands[icommand] );
				Show( commands[icommand] );
			,
				this << WriteEOF;
				Show( this << CanRead, this << CanWrite, this << isReadEOF );
			);
		)
	)
);

```

### SAS Name

**Syntax:** sasName = SAS Name( string|namelist )

**Description:** Converts JMP variable names to a string containing valid SAS variable names by changing special characters and blanks to underscores. The argument can be specified as a string or a list of strings.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
SAS Name( {"x 1", "x 2"} );

```

### SAS Open For Var Names

**Syntax:** nameList = SAS Open For Var Names( path )

**Description:** Returns a list of variable names from a SAS data set.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
SAS Open For Var Names( "C:\my data\somedata.sas7bdat" );

```

### SEV Density

**Syntax:** y = SEV Density( x, mu, sigma )

**Description:** Returns the density at x of a smallest extreme distribution with location mu and scale sigma.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
mu = 50;
sig = 5;
New Window( "Example: SEV Density",
	y = Graph Box(
		Y Scale( 0, .06 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( SEV Density( x, mu, sig ), x );
		Text( {0, .055}, "mu=", Round( mu, 2 ) );
		Text( {0, .045}, "sig=", Round( sig, 2 ) );
	),
	H List Box( Slider Box( 0, 100, mu, y << reshow ), Text Box( "mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( "sig" ) ), 

);

```

### SEV Distribution

**Syntax:** p = SEV Distribution( x, mu, sigma )

**Description:** Returns the probability at x of a smallest extreme distribution with location mu and scale sigma.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
mu = 50;
sig = 5;
New Window( "Example: SEV Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( SEV Distribution( x, mu, sig ), x );
		Text( {0.1, 0.9}, "mu=", Round( mu, 2 ) );
		Text( {0.1, 0.8}, "sig=", Round( sig, 2 ) );
	),
	H List Box( Slider Box( 0, 100, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) )
);

```

### SEV Quantile

**Syntax:** q = SEV Quantile( p, mu, sigma )

**Description:** Returns the quantile at p of a smallest extreme distribution with location mu and scale sigma.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
mu = 50;
sig = 5;
qq = .5;
New Window( "Example: SEV Quantile",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( SEV Distribution( qq, mu, sig ), qq );
		Pen Color( "blue" );
		V Line( SEV Quantile( qq, mu, sig ), 0, 1 );
		Text(
			{0.1, 0.9},
			" mu=",
			Round( mu, 2 ),
			" sig=",
			Round( sig, 2 ),
			" quantile=",
			Round( qq, 2 )
		);
	),
	H List Box( Slider Box( 0, 80, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) ),
	H List Box( Slider Box( 0.01, 0.99, qq, y << reshow ), Text Box( " quantile" ) )
);

```

### SHASH Density

**Syntax:** d = SHASH Density( x, gamma, delta, theta, sigma )

**Description:** Returns the density at x of a sinh-arcsinh (SHASH) distribution. The SHASH transformation can be used to create more normally distributed data.

**JMP Version Added:** 14

**Example 1**

```js

Names Default To Here( 1 );
SHASH Density( 0, -1, 2, -2, 3 );

```

**SHASH Transformation**

```js

Names Default To Here( 1 );
gamma = 1;
delta = .5;
theta = -1;
sigma = 2;
x = 3;
result1 = SHASHTrans( x, gamma, delta, theta, sigma );
result2 = SinH( gamma + delta * ArcSinH( (x - theta) / sigma ) );
Show( result1, result2 );

```

### SHASH Distribution

**Syntax:** p = SHASH Distribution( q, gamma, delta, theta, sigma )

**Description:** Returns the probability that a sinh-arcsinh (SHASH) distributed random variable is less than q. The SHASH transformation can be used to create more normally distributed data.

**JMP Version Added:** 14

**Example 1**

```js

Names Default To Here( 1 );
gamma = 0.5;
delta = 1;
theta = 1;
sigma = 1;
New Window( "Example: SHASH Distribution",
	jsuc = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -2, 2 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( SHASH Distribution( q, gamma, delta, theta, sigma ), q );
		Text(
			{-1, 0.9},
			"\!U03B3=",
			Round( gamma, 2 ),
			" \!U03B4=",
			Round( delta, 2 ),
			" \!U03B8=",
			Round( theta, 2 ),
			" \!U03C3=",
			Round( sigma, 2 )
		);
	),
	H List Box( Slider Box( 0, 1, gamma, jsuc << reshow ), Text Box( " \!U03B3" ) ),
	H List Box( Slider Box( 0, 2, delta, jsuc << reshow ), Text Box( " \!U03B4" ) ),
	H List Box( Slider Box( 0, 2, theta, jsuc << reshow ), Text Box( " \!U03B8" ) ),
	H List Box( Slider Box( 0, 2, sigma, jsuc << reshow ), Text Box( " \!U03C3" ) )
);

```

**SHASH Transformation**

```js

Names Default To Here( 1 );
gamma = 1;
delta = .5;
theta = -1;
sigma = 2;
x = 3;
result1 = SHASHTrans( x, gamma, delta, theta, sigma );
result2 = SinH( gamma + delta * ArcSinH( (x - theta) / sigma ) );
Show( result1, result2 );

```

### SHASH Quantile

**Syntax:** q = SHASH Quantile( p, gamma, delta, theta, sigma )

**Description:** Returns the quantile from a sinh-arcsinh (SHASH) distribution, the value for which the probability is p that a random value would be lower. The SHASH transformation can be used to create more normally distributed data.

**JMP Version Added:** 14

**Example 1**

```js

Names Default To Here( 1 );
SHASH Quantile( .5, 1, 2, 3, 1 );

```

**SHASH Transformation**

```js

Names Default To Here( 1 );
gamma = 1;
delta = .5;
theta = -1;
sigma = 2;
x = 3;
result1 = SHASHTrans( x, gamma, delta, theta, sigma );
result2 = SinH( gamma + delta * ArcSinH( (x - theta) / sigma ) );
Show( result1, result2 );

```

### SHASHInv

**Syntax:** x = SHASHInv( z, gamma, delta, theta, sigma )

**Description:** Transforms a standard normal variable to a sinh-arcsinh (SHASH) distributed variable.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
gamma = 1;
delta = .5;
theta = -1;
sigma = 2;
x = 3;
result1 = SHASHTrans( x, gamma, delta, theta, sigma );
x1 = SHASHInv( result1, gamma, delta, theta, sigma );
x2 = SinH( (ArcSinH( result1 ) - gamma) / delta ) * sigma + theta;
Show( x1, x2 );

```

### SHASHTrans

**Syntax:** z = SHASHTrans( x, gamma, delta, theta, sigma )

**Description:** Transforms a sinh-arcsinh (SHASH) distributed variable to a standard normal distributed variable. The SHASH transformation can be used to create more normally distributed data.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
gamma = 1;
delta = .5;
theta = -1;
sigma = 2;
x = 3;
result1 = SHASHTrans( x, gamma, delta, theta, sigma );
result2 = SinH( gamma + delta * ArcSinH( (x - theta) / sigma ) );
Show( result1, result2 );

```

### SSQ

**Syntax:** y = SSQ( x1, ... )

**Description:** Returns the sum of squares of all elements

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Eval List( {SSQ( Pi(), e() ), SSQ( [33 44 22 20 30] )} );

```

### SVD

**Syntax:** {U, M, V} = SVD( X )

**Description:** Computes the singular value decomposition of matrix X by returning a list {U, M, V} such that U*diag(M)*V` is equal to X.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
SVD( [11 22, 33 44] );

```

### SVD LAPACK

**Syntax:** {U, M, V} = SVD LAPACK( X )

**Description:** Computes the singular value decomposition of matrix X by returning a list {U, M, V} such that U*diag(M)*V` is equal to X.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
SVD LAPACK( [11 22, 33 44] );

```

### Save Log

**Syntax:** f = Save Log( <path> )

**Description:** Writes the contents of the log to the specified file location. If the write is successful, this function returns the name of the created file.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Save Log( "$TEMP/log.txt" );
exlogText = Load Text File( "$TEMP/log.txt" );
Substr( exlogText, 1, 30 );

```

### Save Text File

**Syntax:** f = Save Text File( path, text|blob, <mode("replace"|"append")> )

**Description:** Creates a text file with the file name that is specified by the path argument and contents specified by the text string argument. If the save is successful, the Save Text File() function returns the pathname of the created file.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Save Text File( "$TEMP/DeleteMe.txt", "The quick brown fox" );
Load Text File( "$TEMP/DeleteMe.txt" );

```

### SbInv

**Syntax:** x = SbInv( z, gamma, delta, theta, sigma )

**Description:** Transforms a standard normal variable to a double bounded Johnson variable.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
SbInv( 1.96, 1.5, 2, 1, 2 );

```

### SbTrans

**Syntax:** z = SbTrans( x, gamma, delta, theta, sigma )

**Description:** Transforms a double bounded Johnson variable to a standard normal variable.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Round( SbTrans( 2.114, 1.5, 2, 1, 2 ), 2 );

```

### Scene Box

**Syntax:** box = Scene Box( xsize, ysize )

**Description:** Returns a display box for 3D graphics.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Scene = Scene Box( 600, 600 );
Scene << backgroundcolor( 0 );
Scene << showarcball( always );
New Window( "See HelloWorld.jsl in sample scripts", Scene );
Scene << perspective( 45, .2, 20 );
Scene << Translate( 0.0, 0.0, -4.5 );
ex = Scene Display List();
ex << color( .9, .9, .9 );
ex << Text( center, middle, .3, "Hello World" );
Scene << arcball( ex, 1.5 );
Scene << update;

```

### Scene Display List

**Syntax:** list = Scene Display List()

**Description:** Returns a display list for 3D graphics.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
ex = Scene Display List();
ex << color( .9, .9, .9 );
ex << Text( center, middle, .3, "Hello World" );
exScene = Scene Box( 600, 600 );
exScene << backgroundcolor( 0 );
exScene << showarcball( always );
New Window( "See HelloWorld.jsl in sample scripts", exScene );
exScene << perspective( 45, .2, 20 );
exScene << Translate( 0.0, 0.0, -4.5 );
exScene << arcball( ex, 1.5 );
exScene << update;

```

### Schedule

**Syntax:** Schedule( sec, scpt )

**Description:** Schedules an event that runs the scpt script argument after sec seconds have elapsed.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Schedule(
	10,
	Beep();
	Print( "Time's up!" );
);

```

### Scheffe Cubic

**Syntax:** y = Scheffe Cubic( x1, x2 )

**Description:** Evaluates as x1*x2*(x1-x2); used to support modeling notation for cubic mixture models.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Scheffe Cubic( [1, -1, 1, -1, 1], [-1, -1, 1, 1, -1] );

```

### Scoring Impute

**Syntax:** {imputedRow} = Scoring Impute ( rowWithMissing , VMat, colMeanVec, colStdDevVec)

**Description:** Provides streaming functionality for the Automated Data Imputation (ADI) algorithm. The input arguments are a row vector that contains missing values, a loading matrix (also called the V matrix) that is produced by the ADI algorithm, a vector of the column means ignoring missing cells, and a vector of the column standard deviations ignoring missing cells. It returns the row vector with the missing values imputed using least squares estimation.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
Scoring Impute(
	[1 2 3 . 4 .],
	[.5 .6, .3 .4, .1 .2, .6 .7, .3 .3, .5 .4],
	[0, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1]
);

```

### Script Box

**Syntax:** y = Script Box( <s>, <"C" | "JavaScript" | "JSL" | "JSON" | "Python" | "R" | "SAS" | "SQL" | "Text" | "XML">, <width>, <height> )

**Description:** Returns a display box to edit a script. By default the editor has JSL syntax highlighting and behavior.

**JMP Version Added:** Before version 14

**JSL**

```js

Names Default To Here( 1 );
Script = Script Box( "// This window is editable.", "JSL", 300, 100 );
New Window( "This is a script box", Script );

```

**Python script**

```js

Names Default To Here( 1 );
pyscript = "\[import numpy as np
a = np.arange(15).reshape(3, 5)]\";
Script = Script Box( pyscript, "Python", 300, 100 );
New Window( "This is a python script box", Script );

```

### Scroll Box

**Syntax:** y = Scroll Box( <Size( x, y )>, displayBox )

**Description:** Returns a display box that positions a larger child box using scroll bars.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Picker",
		Scroll Box(
			Size( 200, 100 ),
			V List Box(
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
			),
			<<Set Stretch( "Window", "Window" )
		)
	)
);

```

### Second

**Syntax:** sec = Second( datetime )

**Description:** Returns the seconds part of a date-time value, including any fractional part, 0 - 60 exclusive.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Second( Today() );

```

### Selected

**Syntax:** y = Selected( <rs> );Selected( <Row State( <r> )> ) = y

**Description:** Returns the selected component of the specified row state value, 0 or 1. If Selected is used as an L-value, it changes the selected state of the current (or rth) row in the current data table.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Selected State( 1 );
Selected( Row State( 3 ) );
Row() = 3;
Selected();

```

### Selected State

**Syntax:** rs = Selected State( x )

**Description:** Returns a row state value with the selected component set to the specified value.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Selected State( 1 );
Selected( Row State( 3 ) );

```

### Send

**Syntax:** r = obj << msg( args ); r = obj << msg; r = Send( obj, msg )

**Description:** Sends a message (in the form of an expression) to an object.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Bivariate( Y( :weight ), X( :height ) ) << Fit Line;

```

### Sequence

**Syntax:** y = Sequence( start, end, <incr=1>, <n=1> )

**Description:** Returns the Row()th item in the sequence of numbers from start to end incremented by incr. Each number in the sequence is repeated n times. Because of its dependence on Row(), the Sequence() function is mainly useful in column formulas. To create sequences as JSL matrices, see Index().

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Row() = 3;
Sequence( 1, 9, 2 );

```

### Set Clipboard

**Syntax:** Set Clipboard( text )

**Description:** Puts the specified text onto the system clipboard used by the Edit menu.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Set Clipboard( "example" );

```

### Set Default Directory

**Syntax:** Set Default Directory( path )

**Description:** Sets the JMP default directory, which is used as a base for subsequent relative paths.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Set Default Directory( "$SAMPLE_DATA" );
Open( "Big Class.jmp" );

```

### Set Difference

**Syntax:** list = Set Difference( list1, list2 )

**Description:** Returns the list of items that occur in list1 but not in list2. Items can be repeated. If an argument is a multiple-response column reference, it is treated as a list of its values in the current row.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
Show( Set Difference( {1, 3}, {3, 2} ) );
Show( Set Difference( {1, 3, 4, 3}, {3, 2, 3, 5, 3} ) );

```

### Set Environment Variable

**Syntax:** value = Set Environment Variable( string, < string> )

**Description:** Sets the value of the specified environment variable in the operating system. If the second argument is either missing or is an empty string then the environment variable is deleted.



NOTE: On the Macintosh operating system, the variable name is case-sensitive.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Set Environment Variable( "PATH", "some path to a directory" );

```

### Set File Search Path

**Syntax:** Set File Search Path(path | {list of paths})

**Description:** Sets the current list of directories to search for opening files. "." means the current directory.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Set File Search Path(
	{Convert File Path( "$SAMPLE_DATA/" ),
	Convert File Path( "$SAMPLE_DATA/Time Series/" )}
);
Show( Get File Search Path() );
Show( Convert File Path( "Air.jmp", search ) );
Show( Convert File Path( "Full of Air.jmp", search ) );
Show( Convert File Path( "Iris.jmp", search ) );

```

### Set Global Window Handler

**Syntax:** Set Global Window Handler( Handler Function )

**Description:** Sets a function to be called each time a new window is created.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
Set Global Window Handler(
	Function( {window},
		Print( window << get window title() );
		window << close window();
	)
);
New Window( "My Window" );
Clear Global Window Handler();

```

### Set Intersection

**Syntax:** list = Set Intersect( list1, list2 )

**Description:** Returns the list of items that occur in both lists. Items can be repeated. If an argument is a multiple-response column reference, it is treated as a list of its values in the current row.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
Show( Set Intersection( {1, 3}, {3, 2} ) );
Show( Set Intersection( {1, 3, 4, 3}, {3, 2, 3, 5, 3} ) );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << get rows where( Set Intersection( :sports, {"Soccer"} ) != {} );

```

### Set Path Variable

**Syntax:** Set Path Variable( name, <value> )

**Description:** Sets a path variable, which is a name like SAMPLE_DATA that is substituted for when found in pathnames.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Set Path Variable( "SAMPLE_DATA", Get Path Variable( "SAMPLE_DATA" ) );

```

### Set Platform Preference

**Syntax:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**Description:** Sets platform preferences as specified.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Set Platform Preferences

**Syntax:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**Description:** Sets platform preferences as specified.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Set Policy

**Syntax:** Set Policy("PolicyName", <Empty()|#|"value"> )

**JMP Version Added:** 18

### Set Preference

**Syntax:** Preferences( pref1( value1 ), ... )

**Description:** Sets preferences as specified.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Preferences( Graph marker size( "Large" ) );

```

### Set Preferences

**Syntax:** Preferences( pref1( value1 ), ... )

**Description:** Sets preferences as specified.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Preferences( Graph marker size( "Large" ) );

```

### Set Toolbar Visibility

**Syntax:** rc = Set Toolbar Visibility( "toolbar-name" | Default | All, <window-class-name | All>, <True | False> )

**Description:** Sets the visibility of a given toolbar for a given class of windows. toolbar-name is the internal name of the toolbar. If Default is passed in as the toolbar name, the specified window class is restored to the default toolbar set for that class of windows. Examples of window-class-name are Data Table, Script, Report, and Journal. If window-class-name is All, then visibility for the specified toolbar is set for all classes of windows.

Returns 1 if successful, 0 if unsuccessful.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );

// Make the Analyze toolbar visible in Script windows
Set Toolbar Visibility( "Analyze", Script, true );

// Make the Analyze toolbar visible in all classes of windows
Set Toolbar Visibility( "Analyze", All, true );

// Revert Script windows to the default toolbar set for Script windows
Set Toolbar Visibility( Default, Script );

// Revert all windows to their default toolbar set
Set Toolbar Visibility( Default, All );

```

### Set Union

**Syntax:** list = Set Union( list1, list2 )

**Description:** Returns the list of items that occur in either list. Items can be repeated. If an argument is a multiple-response column reference, it is treated as a list of its values in the current row.

**JMP Version Added:** 19

```js

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

```js

Names Default To Here( 1 );
Show( Set Unique( {1, 3, 2} ) );
Show( Set Unique( {1, 3, 4, 3, 3, 2, 3, 5, 3} ) );
Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Row() = 1;
Show( Set Unique( :sports ) );

```

### Shade State

**Syntax:** rs = Shade State( x )

**Description:** Returns a row state value with the color shade component set to the specified value. Needs to be combined with a Hue State() value to produce a valid color.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Combine States( Hue State( 5 ), Shade State( 1 ) );

```

### Shape

**Syntax:** r = Shape( M, nr, <nc>, <<bycol)

**Description:** Reshapes the M matrix or scalar across rows to be nr rows by nc columns. A missing value is permitted for nr. Data from M is replicated as needed to fill the nr by nc matrix. The optional argument <<bycol fills the data by column. By default, the data is filled by row. Common uses are to reshape a vector into a matrix or to vectorize a matrix.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Eval List(
	{Shape( [11 22, 33 44], 1, 4 ), Shape( [11 22, 33 44], 1 ),
	Shape( [11 22, 33 44], ., 4 )}
);

```

### Shape Seg

**Syntax:** me = Shape Seg( {Path(<path>), ...}, < Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) > )

**Description:** Returns a display seg with a collection of shapes.  Each shape draws a stroke along the given path if fill is 0, or paints the interior of the given path if fill is not 0. The path can be specified with an N x 3 matrix or with a text representation. A path matrix has three columns for x, y, and flags for each point in the path. The flag values are 0 for control, 1 for move, 2 for line segment, 3 for cubic Bézier segment, and are negative if the point also closes the path. Path text supports SVG syntax.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);

```

### Sheet Part

**Syntax:** y = Sheet Part( title, childbox )

**Description:** Returns a display box containing the childbox display box argument with the specified title.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	V Sheet Box(
		<<Hold( Bivariate( Y( :weight ), X( :height ), Fit Line() ) ),
		<<Hold(
			Distribution(
				Automatic Recalc( 1 ),
				Continuous Distribution(
					Column( :height ),
					Horizontal Layout( 1 ),
					Vertical( 0 ),
					Outlier Box Plot( 0 )
				)
			)
		),
		<<Hold( Treemap( Categories( :age ) ) ),
		<<Hold(
			Bubble Plot(
				X( :height ),
				Y( :weight ),
				Sizes( :age ),
				Coloring( :sex ),
				Circle Size( 6.226 ),
				All Labels( 0 )
			)
		),
		H Sheet Box(
			Sheet Part( "weight by height", Excerpt Box( 1, {Picture Box( 1 )} ) ),
			Sheet Part( "height", Excerpt Box( 2, {Picture Box( 1 )} ) )
		),
		H Sheet Box(
			Sheet Part( "", Excerpt Box( 3, {Picture Box( 1 )} ) ),
			Sheet Part( "height by weight", Excerpt Box( 4, {Picture Box( 1 )} ) )
		)
	)
);

```

### Shift

**Syntax:** y = Shift( x, <n=1> )

**Description:** Returns a copy of list x with the first n items moved to the end of the list, or, if n is negative, the last n items moved to the start.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Shift( {11, 22, 33, 44, 55}, 2 );

```

### Shift Into

**Syntax:** Shift Into( x, <n=1> )

**Description:** Modifies list or display box x with the first n items moved to the end of the list, or, if n is negative, the last n items moved to the start. Note that the x argument must be a variable.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
ex = {11, 22, 33, 44, 55};
Shift Into( ex, -2 );
ex;

```

**Example 2**

```js

Names Default To Here( 1 );
New Window( "boxes",
	hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) )
);
Wait( 1 );
Shift Into( hlist, -2 );

```

### Short Date

**Syntax:** s = Short Date( datetime, <format> )

**Description:** Returns a numeric (MM/DD/YYYY) locale-specific representation of a date-time value.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Short Date( Today() );

```

### Shortest Edit Script

**Syntax:** list = Shortest Edit Script(A,B); matrix = Shortest Edit Script( strings( A, B, matrix(1), limit(9999) ) ); list = Shortest Edit Script( lines( A, B, separators("defaults to newline"), ignore("defaults to none")|ignoreWhiteSpace(), matrix(0), limit(9999) ) ); matrix = Shortest Edit Script( sequences(nA, nB, Function({iA,iB}, adata[iA] == bdata[ib] ) ) )

**Description:** Returns one of the shortest edit scripts to convert string A into string B.  The simple form only returns a list.  strings() and lines() have an option to return a matrix or a list.  sequences() only returns a matrix.  The optional limit() will stop the function early if the edit list has more than limit inserts and deletes.  lines() compares lines rather than characters; the optional ignore("characters") or ignoreWhiteSpace() defaults to no ignored characters.   ESC will stop the function if needed.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
editList = Shortest Edit Script( "time flies like an arrow", "fruit flies like a banana" );
common = "";/* assemble a longest common subsequence */For( i = 1,
	i <= N Items( editList ), i++,
	If( editList[i][1] == "Common", /* or Insert or Remove */common = common || editList[i
		][2] /* the snippet */
	)
);
common;

```

### Show

**Syntax:** Show( x, ... )

**Description:** Displays the name and value of the arguments in the log, one per line.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Show( 355 / 113, Pi() );

```

### Show Addin Builder Dialog

**Syntax:** Show Addin Builder Dialog()

**Description:** Brings up a dialog that can be used to make custom add-ins.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Show Addin Builder Dialog();

```

### Show Addins Dialog

**Syntax:** Show Addins Dialog()

**Description:** Brings up a dialog that shows the status of all registered add-ins.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Show Addins Dialog();

```

### Show Classes

**Syntax:** Show Classes( < <class name | class reference>, ... > )

**Description:** Show the contents of all user-defined classes.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
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
		New Object(
			complex( real * y:real - imag * y:imag, imag * y:real + real * y:imag )
		)
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

### Show Commands

**Syntax:** Show Commands( <keyword=Builtins> )

**Description:** Creates one or more data tables that contain information about various JSL components. The keyword argument determines the content of the output table. Specify Builtins (the default) for built-in operators and functions. Specify Scriptables for all the scriptable commands for objects. Specify Translations for English and localized versions of the scriptable commands. Specify Display Boxes for scriptable commands related to display boxes and display segs. Specify Scriptable Names for the names of scriptable objects. Specify Platform Names for names of platforms.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Show Commands();

```

### Show Globals

**Syntax:** Show Globals()

**Description:** Lists all the currently defined global symbols and their values.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Show Globals();

```

### Show Namespaces

**Syntax:** Show Namespaces( < <namespace reference>, ... > )

**Description:** Show the contents of all user defined namespaces, both named and anonymous.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
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

### Show Preferences

**Syntax:** Show Preferences()

**Description:** Shows the current preference settings in the log.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Show Preferences();

```

### Show Properties

**Syntax:** Show Properties( object )

**Description:** Shows in the log the messages that an object responds to.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Show Properties( Current Data Table() );

```

### Show Symbols

**Syntax:** Show Symbols()

**Description:** Lists all the currently defined symbols and their values.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Show Symbols();

```

### Simplify Expr

**Syntax:** resultExpr = Simplify Expr( expr( ... ) )

**Description:** Returns an equivalent expression that simplifies the argument expression in various ways.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Simplify Expr( Expr( 2 * 3 * a + b * (a + 3 - c) - a * b ) );

```

### Sin

**Syntax:** y = Sine( x )

**Description:** Returns the trigonometric sine of x, where x is an angle in radians.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Sine( Pi() / 6 );

```

### SinH

**Syntax:** y = SinH( x )

**Description:** Returns the hyperbolic sine of x.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
SinH( 1 );

```

### Sine

**Syntax:** y = Sine( x )

**Description:** Returns the trigonometric sine of x, where x is an angle in radians.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Sine( Pi() / 6 );

```

### SlInv

**Syntax:** x = SlInv( z, gamma, delta, theta, <sigma=1> )

**Description:** Transforms a standard normal variable to a Johnson SL variable.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
SlInv( 1.96, 1.5, 2, 1 );

```

### SlTrans

**Syntax:** z = SlTrans( x, gamma, delta, theta, <sigma=1> )

**Description:** Transforms a Johnson SL variable to a standard normal variable.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Round( SlTrans( 2.259, 1.5, 2, 1 ), 2 );

```

### Slider Box

**Syntax:** box = Slider Box(minValue, maxValue, variable, script, <set width(n)>, <rescale slider(minValue, maxValue)>)

**Description:** Returns a display box that shows a slider control that ranges from minValue to maxValue. As the slider&apos;s position changes, its value is placed into variable and the script is run.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
sliderValue = .6;
New Window( "Example",
	Panel Box( "Slider Box",
		tb = Text Box( "Value: " || Char( sliderValue ) ),
		sb = Slider Box(
			0,
			1,
			sliderValue,
			tb << Set Text( "Value: " || Char( sliderValue ) )
		)
	)
);

```

### Sobol Quasi Random Sequence

**Syntax:** points = Sobol Quasi Random Sequence(nDim, nRow)

**Description:** Generate a sequence of space filling quasi-random numbers using the Sobol sequence in up to 4000 dimensions.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
A = Sobol Quasi Random Sequence( 3, 100 );
As Table( A );
Scatterplot 3D( Y( :Col1, :Col2, :Col3 ) );

```

### Socket

**Syntax:** socketHandle = Socket( <STREAM | DGRAM> )

**Description:** Creates a socket variable that can communicate with sockets on this or another networked computer. The default argument is STREAM. Try your own company&apos;s website.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );

// see the socket's OBJECT messages in the scripting index for better examples
tCall = Socket();
tcall << Ioctl( FIONBIO, 1 );
rc = tCall << connect( "www.jmp.com", "80" );
If( rc[2] == "ok",
	tCall << <<Char To Blob(
		"GET /en_us/home.html HTTP/1.1~0d~0aHost: www.jmp.com~0d~0aConnection: Close~0d~0a~0d~0a",
		"ASCII~HEX"
	);
	While( 1,
		tMessage = tCall << Recv( 100000 );
		If(
			tMessage[2] == "ok",
				Show( Length( tMessage[3] ) ); //typically about six chunks of around 5-20K bytes
		,
			Starts With( tMessage[2], "WOULDBLOCK" ),
				Show( "waiting" ) // sometimes data might not be available yet
		,
			Starts With( tMessage[2], "CLOSED" ),
				Break(); // this is the desired result
		, // else
			Show( tMessage );
			Stop();
		);
	);
	tCall << Close();// done
, // else
	Show( rc );
	Stop();
);

```

### Solve

**Syntax:** y = Solve( A, B )

**Description:** Solves the linear system A*x=B for x. The Solve() function is equivalent to Inverse(A)*B if A is non-singular. Note that the A argument must be a square matrix.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Solve( [1 1, -1 4], [11, 14] );

```

### Sort Ascending

**Syntax:** y = Sort Ascending( x )

**Description:** Returns a copy of list or matrix x with the items in ascending order.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Sort Ascending( {111, 212, 133, 114, 55} );

```

### Sort Descending

**Syntax:** y = Sort Descending( x )

**Description:** Returns a copy of list or matrix x with the items in descending order.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Sort Descending( {111, 212, 133, 114, 55} );

```

### Sort List

**Syntax:** y = Sort List( x )

**Description:** Returns a copy of list x with the items in ascending order.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Sort List( {111, 212, 133, 114, 55} );

```

### Sort List Into

**Syntax:** Sort List Into( x )

**Description:** Modifies list x with the items in ascending order. Note that the x argument must be a variable.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
ex = {111, 212, 133, 114, 55};
Sort List Into( ex );
ex;

```

### Spacer Box

**Syntax:** y = Spacer Box( <Size( x, y )>, <Color( c )>)

**Description:** Returns a display box that can be used to maintain space between other display boxes or fill a cell in a Lineup Box. The Size arguments are specified in pixels, and the Color argument is any valid JSL color.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Lineup Box( N Col( 3 ),
		Text Box( "a" ),
		Spacer Box(),
		Text Box( "b" ),
		Spacer Box(),
		Text Edit Box( "Under Spacer Box" )
	)
);

```

### Sparse SVD

**Syntax:** {U, M, V} = Sparse SVD( X , <nSingularValues=min(nRow,nCol)>, <tolerance=1e-10>)

**Description:** Computes the singular value decomposition of matrix X using the implicitly restarted, partially reorthogonalized Lanczos method for sparse matrices by returning a list {U, M, V} such that U*diag(M)*V` is equal to X.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Sparse SVD( [11 22, 33 44], 1, 1e-8 );

```

### Speak

**Syntax:** Speak( text, <Wait( sync )> )

**Description:** Speaks the text if supported by the operating system. Specifying the optional Wait(true) argument delays script execution until speech has finished.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Speak( "Hello" );

```

### Spin Box

**Syntax:** y = Spin Box( <script> )

**Description:** Returns a display box to show a button with up/down controls.  The script argument is invoked with an argument that indicates the direction of the arrow clicked (negative is down, positive is up).  A magnitude of 1 indicates a single click, while larger values can be used to indicate a repeating action.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Lineup Box(
		2,
		nb = Number Edit Box( 3 ),
		sb = Spin Box( Function( {value}, nb << Increment( value ) ) )
	)
);
nb << Set Increment( 1 );

```

### Spline Coef

**Syntax:** coef = Spline Coef( x, y, lambda, <weight> )

**Description:** Returns a 5-column matrix of the form: knots||a||b||c||d for each of the unique values in x.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Spline Eval( 0 :: 10, Spline Coef( 0 :: 10, Sqrt( 0 :: 10 ), 100 ) );

```

### Spline Eval

**Syntax:** yhat = Spline Eval( x, coef, <extrapolation=-1> )

**Description:** Evaluates the spline predictions using the coef matrix in the same form as returned by the Spline Coef() function. extrapolation indicates how far beyond the spline range, as a fraction of the range, to extend evaluation before returning missing values.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );

New Window( "Spline Fit",
	window:x = 20 :: 80;
	window:y = 50 + Sin( (20 :: 80) / 10 ) * 40 + J(
		1,
		N Col( window:x ),
		Random Normal( 0, 10 )
	);
	window:loglambda = 2;
	window:g = Graph Box(
		Pen Color( "blue" );
		window:m = Spline Coef( window:x, window:y, Power( 10, window:loglambda ) );
		Marker( window:x, window:y );
		Y Function( Spline Eval( a, window:m, 0.05 ), a );
	);,
	H List Box(
		Text Box( "Lambda: " ),
		Slider Box( -2, 5, window:loglambda, window:g << reshow )
	)
)
;

```

### Spline Smooth

**Syntax:** yhat = Spline Smooth( x, y, lambda, <weight> )

**Description:** Returns the smoothed predicted values from a spline fit. Larger values of lambda cause greater stiffness.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Spline Smooth( 0 :: 10, Sqrt( 0 :: 10 ), 100 );

```

### Sqrt

**Syntax:** y = Sqrt( x )

**Description:** Returns the positive square root of the x argument, which can be a number, matrix, or list of numbers.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Round( Sqrt( 2 ), 4 );

```

### Squash

**Syntax:** y = Squash( x )

**Description:** Returns 1 / (1 + Exp( x )), which converts a number in the domain -∞...+∞ into range 1...0. The Squash() function is useful in logistic regression.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Squash( 10 );

```

### Squish

**Syntax:** y = Logist( x )

**Description:** Returns 1 / (1 + Exp( -x )), which converts a number in the domain -∞...+∞ into range 0...1. The Logist() function is useful in logistic regression.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Logist( 2 );

```

### Starts With

**Syntax:** b = Starts With( s, sub )

**Description:** Returns 1 if s starts with sub, otherwise returns 0. The s and sub arguments can be both strings or both lists. Equivalent to Left( s, Length( sub )) == sub.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Starts With( "http://www.jmp.com", "http:" );

```

### Status Msg

**Syntax:** Status Msg( message )

**Description:** Displays the specified message in the status bar.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Status Msg( "calculating..." );

```

### Std Dev

**Syntax:** y = Std Dev( x1, ... )

**Description:** Returns the standard deviation of the arguments or of the values within a single matrix or list argument.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Eval List( {Std Dev( Pi(), e() ), Std Dev( [33 44 22 20 30] )} );

```

### Step

**Syntax:** y = Step( x, x1, y1, x2, y2, ... )

y = Step( x, [x1, x2, ...], [y1, y2, ...] )

**Description:** Returns the yi argument corresponding to the largest xi value which satisfies xi less than or equal to the x argument. Note that the xi arguments must be specified in order.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Step( 2.5, [1 2 3], [15, 20, 30] );

```

### Stop

**Syntax:** Stop()

**Description:** Immediately terminates the execution of a JSL script

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
For( i = 1, i <= 10, i++,
	If( i == 7, Stop() );
	Print( "i=" || Char( i ) );
);

```

### Straight Line Depreciation

**Syntax:** x = Straight Line Depreciation( cost, salvage, life )

**Description:** Returns the straight-line depreciation of an asset for one period. Equivalent to the SLN function in Microsoft Excel.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Straight Line Depreciation( 1000, 100, 3 );

```

### String Col Box

**Syntax:** y = String Col Box( title, {strings} )

**Description:** Returns a display box to show the strings specified by the strings argument, which is a list of character strings.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Table",
		Table Box(
			String Col Box( "names", {"x", "y", "z"} ),
			Number Col Box( "values", {11, 22, 33} ),
			Plot Col Box( "values", {11, 22, 33} )
		)
	)
);

```

### String Col Edit Box

**Syntax:** y = String Col Edit Box( title, {strings} )

**Description:** Returns a display box to show the strings specified by the strings argument, which is a list of character strings.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
a = b = c = "";
New Window( "Example",
	Modal,
	<<Return Result,
	Outline Box( "Table", Table Box( seb = String Col Edit Box( "names", {a, b, c} ) ) )
);

```

### Students t Density

**Syntax:** p = t Density( q, df, <nonCentrality=0> )

**Description:** Returns the density function of Student&apos;s t.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
tdedf = 1;
New Window( "Example: Students t Density",
	tdegr = Graph Box(
		Y Scale( -.05, 0.45 ),
		X Scale( -8, 8 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( t Density( tdeq, Exp( tdedf ) ), tdeq );
		H Line( 2, 3, 0.3 );
		Pen Color( "blue" );
		Y Function( Normal Density( tdeq ), tdeq );
		H Line( 2, 3, 0.25 );
		Text( {2, 0.35}, "df=", Round( Exp( tdedf ), 2 ) );
		Text( {3.5, 0.3}, "Student t" );
		Text( {3.5, 0.25}, "Normal" );
	),
	H List Box(
		Text Box( "df " ),
		Slider Box( Log( 0.1 ), Log( 1000 ), tdedf, tdegr << reshow )
	)
);

```

### Students t Distribution

**Syntax:** p = t Distribution( q, df, <nonCentrality=0> )

**Description:** Returns the probability that a Student&apos;s t distributed random variable is less than q.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
tdidf = 1;
New Window( "Example: Students t Distribution",
	tdigr = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -5, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( t Distribution( tdiq, tdidf ), tdiq );
		Text( {-4.5, 0.9}, "df=", Round( tdidf, 2 ) );
	),
	H List Box( Text Box( "df " ), Slider Box( 1, 10, tdidf, tdigr << reshow ) )
);

```

### Students t Quantile

**Syntax:** q = t Quantile( p, df, <nonCentrality=0> )

**Description:** Returns the quantile from a Student&apos;s t distribution, the value for which the probability is p that a random value would be lower.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
extqdf = 1;
extqqq = 0.5;
New Window( "Example: Students t Quantile",
	extqgr = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -5, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( t Distribution( q, Round( extqdf ) ), q );
		Pen Color( "blue" );
		V Line( t Quantile( extqqq, Round( extqdf ) ), 0, 1 );
		Text( {-4.5, 0.9}, "df=", Round( extqdf, 2 ), " quantile=", Round( extqqq, 2 ) );
	),
	H List Box( Slider Box( 1, 30, extqdf, extqgr << reshow ), Text Box( " df" ) ),
	H List Box(
		Slider Box( 0.01, 0.99, extqqq, extqgr << reshow ),
		Text Box( " quantile" )
	), 

);

```

### SuInv

**Syntax:** x = SuInv( z, gamma, delta, theta, sigma )

**Description:** Transforms a standard normal variable to an unbounded Johnson variable.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
SuInv( 1.96, 1.5, 2, 1, 2 );

```

### SuTrans

**Syntax:** z = SuTrans( x, gamma, delta, theta, sigma )

**Description:** Transforms an unbounded Johnson variable to a standard normal variable.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Round( SuTrans( 1.46, 1.5, 2, 1, 2 ), 2 );

```

### Subscribe to Data Table List

**Syntax:** aSub = Subscribe to Data Table List( <subscriber name | "">, <OnOpen(fn) | OnClose(fn) | On Rename(fn)>)

**Description:** Subscribe to the data table list to be notified when a new data table has been added or closed.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
f1 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "opening" );
	Print( dtname );
);
f2 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "closing" );
	Print( dtname );
);
aSub = Subscribe to Data Table List( , OnOpen( f1 ) );
Subscribe to Data Table List( aSub, OnClose( f2 ) );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
Close( dt );

```

**Example 2**

```js

Names Default To Here( 1 );
f1 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "opening" );
	Print( dtname );
);
f2 = Function( {dtab, b},
	dtname = (dtab << getname());
	Print( "renaming ", b, " to ", dtname );
);
aSub = Subscribe to Data Table List( , OnOpen( f1 ) );
Subscribe to Data Table List( aSub, OnRename( f2 ) );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
dt << setname( "xxx" );

```

### Subscript

**Syntax:** y = x[i]; y = m[row, col]; y = Subscript( x, i )

**Description:** Returns the ith value of a subscriptable object, which can be a column of a data table, a matrix, a list, or a report display element.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
{11, 12, 13}[2];

```

### Substitute

**Syntax:** y = Substitute( x, patternExpr1, replacementExpr1, ... )

y = Substitute( x, patternString1, replacementString1, ..., < <<IGNORECASE > )

**Description:** Returns a copy of string, list or expression x, replacing instances of each pattern expression with the corresponding replacement expression. The optional <<IGNORECASE argument enables case-insensitive matching if x is a string.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Substitute( Expr( a + Sqrt( a ) ), Expr( a ), Expr( b ) );

```

**Example 2**

```js

Names Default To Here( 1 );
Substitute( "All things considered", "All", "Some" );

```

**Example 3**

```js

Names Default To Here( 1 );
lst = {"a", "b", "c"};
Substitute( lst, "a", "A" );

```

**Example 4**

```js

Names Default To Here( 1 );
Substitute( "All things considered", {"things", "All"}, {"ideas", "Some"} );

```

**Example 5**

```js

Names Default To Here( 1 );
Substitute( "Apple,orange,banana-grape",
	Items( Get Punctuation Characters() || "-'", "" ), " "
);

```

**Example 6**

```js

Names Default To Here( 1 );
Substitute( "Apple,APPLE,apple", "apple", "orange", <<IGNORECASE );

```

### Substitute Into

**Syntax:** Substitute Into( x, patternExpr1, replacementExpr1, ... )

Substitute Into( x, patternString1, replacementString1, ..., < <<IGNORECASE > )

**Description:** Modifies string, list or expression x, replacing instances of each pattern expression with the corresponding replacement expression. Note that the x argument must be a variable. The optional <<IGNORECASE argument enables case-insensitive matching if x is a string.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
ex = Expr( a + Sqrt( a ) );
Substitute Into( ex, Expr( a ), Expr( b ) );
Name Expr( ex );

```

**Example 2**

```js

Names Default To Here( 1 );
ex = "All things considered";
Substitute Into( ex, "All", "Some" );
Show( ex );

```

**Example 3**

```js

Names Default To Here( 1 );
lst = {"a", "b", "c"};
Substitute Into( lst, "a", "A" );
Show( lst );

```

**Example 4**

```js

Names Default To Here( 1 );
s = "Apple,APPLE,apple";
Substitute Into( s, "apple", "orange", <<IGNORECASE );
Show( s );

```

### Substr

**Syntax:** sub = Substr( s, start, <count> )

**Description:** Returns the part of string s composed of count characters starting at position start. A negative or absent count means the rest of the string. A negative start means starting start characters from the end. The Substr() function can also be applied to lists.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Eval List( {Substr( "undergo", 4 ), Substr( {10, 11, 12, 13, 14}, 2, 3 )} );

```

### Subtract

**Syntax:** y = x0 - x1; y = Subtract( x0, x1, ... )

**Description:** Subtracts all subsequent arguments from the first argument. Arguments can be numbers, matrices, or lists of numbers.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
6 - 2 - 1;

```

### Subtract To

**Syntax:** y -= x; Subtract To( y, x )

**Description:** Subtracts a value from a variable or from a list of variables.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
ex = 1;
ex -= 2;
ex;

```

### Sum

**Syntax:** y = Sum( x1, ... )

**Description:** Returns the sum of the arguments or of the values within a single matrix or list argument.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Eval List( {Sum( Pi(), e() ), Sum( [33 44 22 20 30] )} );

```

### Sum Of Years Digits Depreciation

**Syntax:** x = Sum Of Years Digits Depreciation( cost, salvage, life, per )

**Description:** Returns the sum-of-years&apos; digits depreciation of an asset for a specified period. Equivalent to the SYD function in Microsoft Excel.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Sum Of Years Digits Depreciation( 1000, 100, 3, 2 );

```

### Summarize

**Syntax:** Summarize( <dt>, nameBy=By( colBy ), name1=statName1( col1 ), ... )

**Description:** Calculates various summary statistics across a By column. The statistic names are Count, Sum, Mean, Max or Maximum, Min or Minimum, StdDev, Corr, Quantile, First. The statistics can be calculated only for numeric columns. The results are stored as matrices in variables with the specified names.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Summarize( exg = By( :sex ), exm = Mean( :height ) );
Eval List( {exg, Round( exm, 1 )} );

```

### Summarize YByX

**Syntax:** Summarize YByX( X(x columns),Y(y columns), Group(grouping columns), Freq(freq column), Weight(Weight column))

**Description:** Calculates all Fit Y by X combinations

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Summarize YByX( X( :age, :height ), Y( :sex, :weight ) );

```

### Summation

**Syntax:** y = Summation( assignExpr, limit, bodyExpr )

**Description:** Returns the sum of evaluations of the bodyExpr arguments, each time incrementing the variable from the assignExpr argument until it is greater than or equal to the limit argument.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Summation( i = 0, 10, 1 / Factorial( i ) );

```

### Suppress Formula Eval

**Syntax:** Suppress Formula Eval( <suppress=1> )

**Description:** Suppresses the evaluation of formulas in all data tables if the argument if nonzero.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Suppress Formula Eval( 1 );

```

### Sweep

**Syntax:** y = Sweep( A, <indices> )

**Description:** Returns the sweep of the matrix A on diagonal pivots indicated by indices. This is a way of inverting a matrix one pivot at a time.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
exMat = [5 4 1 1, 4 5 1 1, 1 1 4 2, 1 1 2 4];
exMatswp = Sweep( exMat, [1, 2, 3, 4] );
exMatinv = Inverse( exMat );
Show( exMatswp );
Show( exMatinv );

```

### Sym Matrix Mult BLAS

**Syntax:** y = Sym Matrix Mult BLAS( A, B, ... )

**Description:** Performs matrix multiplication, where A is a symmetric matrix. The matrix arguments must be conformable: NCol(A)==NRow(B).

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
exMatA = [1 2 3, -2 0 -1, 0 1 1];
exMatA = exMatA` * exMatA;
exMatB = [1 2, 1 2, 1 2];
exMatM2 = Sym Matrix Mult BLAS( exMatA, exMatB );

```

### Tab Box

**Syntax:** y = Tab Box( Tab Page Box(...), TabPageBox(...), ... )

**Description:** Creates a tabbed-page panel in a display box window.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Tab Box(
		"alpha",
		Panel Box( "panel", Text Box( "text" ) ),
		"beta",
		Popup Box( {"x", ex = 1, "y", ex = 2} )
	)
);

```

### Tab Page Box

**Syntax:** y = Tab Page Box( <Title("string")>, <Tip(0|1)>,  <Closeable(0|1)>, <Icon("string")>, <Moveable(0|1)>, contents)

**Description:** Returns a display box that that can be used in a Tab Box or as a stand-alone container with title. Recognized options include Title(string) to specify a title, Tip(string) to specify a tooltip, Closeable(0|1) to specify whether the page can be closed, Icon(string) to specify the icon, and Moveable(0|1) to specify whether the page can be moved.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Tab Box(
		tp = Tab Page Box( Title( "alpha" ), Panel Box( "panel", Text Box( "text" ) ) ),
		Tab Page Box( Title( "beta" ), Popup Box( {"x", ex = 1, "y", ex = 2} ) )
	)
);

```

### Table Box

**Syntax:** y = Table Box( displayBox, ... )

**Description:** Returns a display box that composes a table of the String Col Box, Number Col Box, and Plot Col Box column display boxes provided by the arguments.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Table",
		Table Box(
			String Col Box( "names", {"x", "y", "z"} ),
			Number Col Box( "values", {11, 22, 33} ),
			Plot Col Box( "values", {11, 22, 33} )
		)
	)
);

```

### Tan

**Syntax:** y = Tangent( x )

**Description:** Returns the trigonometric tangent of x, where x is an angle in radians.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Tangent( Pi() / 4 );

```

### TanH

**Syntax:** y = TanH( x )

**Description:** Returns the hyperbolic tangent of x.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
TanH( 1 );

```

### Tangent

**Syntax:** y = Tangent( x )

**Description:** Returns the trigonometric tangent of x, where x is an angle in radians.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Tangent( Pi() / 4 );

```

### Test Promise Error After

**JMP Version Added:** 17

### Test Promise Result After

**JMP Version Added:** 17

### Text

**Syntax:** Text( <properties>, {x, y}, text, ... )

Text( {left, top, right, bottom}, text )

**Description:** Moves to the {x, y} position and draws text specified by the text argument. Named property arguments include Center Justified, Right Justified, Erased, Boxed, Counterclockwise, Clockwise. The position arguments, named arguments, and strings can be mixed in any order. You can also use four x, y coordinates to describe a box within which to draw the text. In that case, properties are not used.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Text Color( "red" );
		Text( Center Justified, {50, 20}, "centered" );
	)
);

```

**Example 2**

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Text Color( "blue" );
		Text( {20, 80, 40, 70}, "some text" );
	)
);

```

### Text Box

**Syntax:** y = Text Box( text, <<Justify Text( strPos ), <<Set Wrap( width ) )

**Description:** Constructs a display box that contains the text in the string argument text. The optional arguments are available to control the text justification or set the text wrap width. The argument for Justify Text should be a string containing left, right, or center.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Justification Example",
	Outline Box( "text",
		V List Box(
			Text Box(
				"Text implicitly justified over multiple lines:",
				<<Set Wrap( 100 )
			),
			Text Box( " " ),
			Text Box(
				"Text left justified over multiple lines:",
				<<Justify Text( "left" ),
				<<Set Wrap( 100 )
			),
			Text Box( " " ),
			Text Box(
				"Text center justified over multiple lines:",
				<<Justify Text( "center" ),
				<<Set Wrap( 100 )
			),
			Text Box( " " ),
			Text Box(
				"Text right justified over multiple lines:",
				<<Justify Text( "right" ),
				<<Set Wrap( 100 )
			)
		)
	)
);

```

### Text Color

**Syntax:** Text Color( <name|index|rgbList> )

**Description:** Sets the color for drawing text.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Text Color( "red" );
		Text( {50, 20}, "label" );
	)
);

```

### Text Edit Box

**Syntax:** y = Text Edit Box( text, <<Password Style( bool ), <<Set Script( script ), <<Set Width( value ) )

**Description:** Constructs an editable box that contains the quoted string text, returning the display box reference. The optional arguments are available to control the display of the text, to attach a script to the text box, and to set the width in pixels of the text box. Specifying Set Width(-1) forces a resize to content. Note that a script can be attached to the text edit box either by adding the script as an optional argument or by sending the Set Script message.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example: Text Edit Box",
	Outline Box( "Picker Example",
		H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
	),
	Outline Box( "Text Edit Box with password style Example",
		H List Box(
			Text Box( "Enter password:    " ),
			exq = Text Edit Box( "",
				Password Style( 1 ),
				Set Script( Print( "changed!" ) )
			)
		),
		Button Box( "print to log", Set Script( Print( exq << Get Text() ) ) ),
		Button Box( "hide password", Set Script( exq << Password Style( 1 ) ) ),
		Button Box( "show password", Set Script( exq << Password Style( 0 ) ) )
	)
); // "look in the log window"

```

### Text Font

**Syntax:** {nm, sz, st, an} = Text Font(fontName, <size>, <"bold italic underline strikeout">, <angle>

**Description:** Sets the font for subsequent Text() drawing. Use without any arguments to get the current font settings. Angle is in degrees clockwise.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
New Window( "Degrees",
	Graph Box(
		FrameSize( 400, 400 ),
		X Scale( -100, 100 ),
		Y Scale( -100, 100 ),
		Local( {fname, fsize, fstyle, fangle, i, a},
			{fname, fsize, fstyle, fangle} = Text Font();
			Text Font( If( Host is( "Mac" ), "Helvetica", "Arial" ), 30, "Italic Bold" );
			Text( Center Justified, {0, -10}, "JMP" );
			For( i = 0, i < 360, i += 15,
				Text Font( {fname, 10, "plain", -i + 90} );
				a = i * Pi() / 180;
				Text( Center Justified, {80 * Cos( a ), 80 * Sin( a )}, Char( i ) );
				Line( {70 * Cos( a ), 70 * Sin( a )}, {76 * Cos( a ), 76 * Sin( a )} );
			);
		)
	)
);

```

### Text Score

**Syntax:** score vector = Text Score( text column, text-to-number, <weighting>, <{<center>, <scale>, scoring matrix}>);

**Description:** Used to create scoring formulas in Text Explorer. The text-to-number argument is an associative array mapping lowercase words to numbers. The weighting argument is either "Binary", "Ternary", "Count", "LogCount", "LCA" or an array of inverse document frequency weights for TFLogIDF. The scoring matrix must have the same number of columns as words in the associative array, or one more if LCA. The output is a vector of scores. If no scoring matrix is specified, it returns a vector of count scores. If no weighting is specified, it uses Count. This function does not support the Stem for Combining option.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
score = Text Score(
	"over the lazy dogs back",
	["lazy" => 1, "dogs" => 2],
	"Count",
	[1 0, 0 1]
);
Show( score );

```

### Text Seg

**Syntax:** seg = Text Seg("text")

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( ts1 = Text Seg( "default location fixed bottom left" ) );

```

### Text Size

**Syntax:** Text Size( n )

**Description:** Sets the font size that for text drawing.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Text Size( 20 );
		Text( {50, 20}, "label" );
	)
);

```

### This Project

**Syntax:** project = this project()

**Description:** From within a project, returns the corresponding project object. Outside of a project, returns nothing.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
If(
	Is Empty( This Project() ), Print( "Project: (none)" ),
	Print( "Project: " || (This Project() << Get Window Title()) ),
);

```

### Throw

**Syntax:** Throw(<message>, <Boolean>)

**Description:** Diverts execution to the enclosing Try(). Otherwise, script execution is stopped. If message begins with an exclamation point, the error will be fatal and cannot be caught by Try(). The second argument is an optional boolean for including a traceback.

**JMP Version Added:** Before version 14

**Fatal Throw**

```js

Names Default To Here( 1 );

Try( Throw( "!This is a fatal error" ), Print( "CATCH message not reached" ) );
Print( "AFTER TRY message not reached" );

```

**Traceback**

```js

Names Default To Here( 1 );
Throw( "A line number is included in this error", 1 );

```

**Try-Catch**

```js

Names Default To Here( 1 );
Try( If( Random Uniform() < 0.5, 1, Throw() ), "thrown" );

```

### Tick Seconds

**Syntax:** t = Tick Seconds()

**Description:** Returns a time value in seconds, usually accurate to at least 1/60 of a second (a "tick"), depending on the computer. Only useful relative to another Tick Seconds() value.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
t1 = Tick Seconds();
Open( "$SAMPLE_DATA/Big Class.jmp" );
t2 = Tick Seconds();
Round( t2 - t1, 3 );

```

### Time Of Day

**Syntax:** sec = Time Of Day( datetime )

**Description:** Returns the time part of a date-time value, including any fractional seconds.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Format( Time Of Day( Today() ), "h:m:s" );

```

### Titlecase

**Syntax:** st = Titlecase( s )

**Description:** Converts to title case

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Titlecase( "The dog crossed the road" );

```

### To Color Space

**Syntax:** color = To Color Space( color, colorSpace )

**Description:** Translates a color into another color space. Out of gamut colors are mapped to fit when converting to smaller color spaces.

**JMP Version Added:** 18

**Example 1**

```js

Names Default To Here( 1 );
To Color Space( "red", "LMS" );

```

**Example 2**

```js

Names Default To Here( 1 );
To Color Space( {0.871, 0.032, 0.061, "lRGB"}, "HLS" );

```

**Example 3**

```js

Names Default To Here( 1 );
To Color Space( {0.941, 0.196, 0.274, "lRGB", 0.871, 0.032, 0.061}, "HLS" );

```

### Today

**Syntax:** dt = Today()

**Description:** Returns the date-time value of the current moment.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
As Date( Today() );

```

### Trace

**Syntax:** y = Trace( x )

**Description:** Returns the sum of the diagonal elements of a square matrix.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Trace( [11 22, 33 44] );

```

### Transform Each

**Syntax:** list = Transform Each({<value>, <index>} | {<element>, <index | {row, col}>} | {<key | {key, value}>, <index>} | {<values | {value1, ..., valueN}>, <index>}, list | matrix | associative array | expression | Across( container1, ..., <containerN>, <Count( "Longest" | "Shortest" | "Enforce Equal" | n )> ), <Output( "List" | "Matrix" | "Associative Array" | "Expression", <expr head name> )>, <locals list>, body)

**Description:** Does everything the For Each function does, but also returns a container with the result at each iteration. By default, returns a container matching the type of the input container, but can be changed using the Output argument. For List or Expression output, Empty() will be used when there is no result. For Matrix output, a numeric missing value is used when there is no result, or when the result is non-numeric. For Associative Array output, the key will not exist when there is no result. When Continue() is used, it is equivalent to returning no value for that iteration.

**JMP Version Added:** 16

**Associative Array**

```js

Names Default To Here( 1 );
values = Transform Each( {{key, value}}, ["A" => 8, "B" => 6, "C" => 10], value + 1 );
Show( values );

```

**Expression 1**

```js

Names Default To Here( 1 );
ex = Transform Each( {value}, Expr( MyExpr( 10, 20, 30 ) ), value + 1 );
Show( ex );

```

**Expression 2**

```js

Names Default To Here( 1 );
// Find Functions defined in a script
parsedScript = Include( "$SAMPLE_SCRIPTS/BayesPlotForFactors.jsl", <<ParseOnly );
functionNames = Transform Each( {statement}, Name Expr( parsedScript ), Output( "List" ),
	{lhs, rhs},
	If( Head( statement ) == Expr( Assign() ),
		rhs = Arg( statement, 2 );
		If( !Is Empty( rhs ) & Contains( {Function()}, Head( rhs ) ),
			Head Name( Arg( statement, 1 ) ),
			Empty()
		);
	,
		Empty()
	)
);
functionNames = Filter Each( {f}, functionNames, !Is Empty( f ) );
Show( functionNames );

```

**List**

```js

Names Default To Here( 1 );
values = Transform Each( {value}, {10, 20, 30}, value + 5 );
Show( values );

```

**Matrix**

```js

Names Default To Here( 1 );
values = Transform Each( {element}, 10 :: 15, element + 5 );
Show( values );

```

**Output**

```js

Names Default To Here( 1 );

Write( "\!N===List===" );
lst = Transform Each( {value}, [10, 20, 30], Output( "List" ), value + 1 );
Show( lst );

Write( "\!N===Matrix===" );
mat = Transform Each( {value}, {10, 20, 30}, Output( "Matrix" ), value + 1 );
Show( mat );

Write( "\!N===Associative Array===" );
aa = Transform Each( {value}, {10, 20, 30}, Output( "Associative Array" ), value + 1 );
Show( aa );

Write( "\!N===Expression===" );
ex = Transform Each( {value}, {10, 20, 30}, Output( "Expression", "My Values" ),
	value + 1
);
Show( ex );

```

### Transparency

**Syntax:** Transparency( <alpha> )

**Description:** Sets the transparency used in the drawing commands. Alpha ranges between 0 (clear) and 1 (opaque, the default). Some operating systems do not support this.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Frame Size( 500, 500 ),
		X Scale( -3, 3 ),
		Y Scale( -3, 3 ),
		Transparency( .1 );
		Fill Color( RGB Color( 1/*red*/, 0/*green*/, 0/*blue*/ ) );
		For( i = 0, i < 10000, i++,
			Circle( {Random Normal(), Random Normal()}, 0.05, "FILL" )
		);
	)
);

```

### Transpose

**Syntax:** y = Transpose( matrix ); y = matrix`

**Description:** Transposes the matrix argument by interchanging the rows and columns.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Show( Transpose( [11 22, 33 44] ), [11 22, 33 44]` );

```

### Tree Box

**Syntax:** tree = Tree Box( <{rootnodes}>, <Size( x, y )>, <Multiselect( 0|1 )> )

**Description:** Constructs a display box to show hierarchical information.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
                                        
c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
                                        
root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
                                        
New Window( "TreeBox", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );

```

### Tree Node

**Syntax:** node = Tree Node( <label> )

**Description:** Constructs a tree node intended for display within a Tree Box.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
                                        
c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
                                        
root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
                                        
New Window( "TreeBox Nodes", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );

```

### Triangulation

**Syntax:** triangulation = Triangulation( X(Column1, Column2), < Y(Column) > )

**Description:** Returns an object containing the Delaunay triangulation of the given point set. The optional Y will be averaged for duplicate points, and all points in the output will be unique.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );

```

**Example 2**

```js

Names Default To Here( 1 );
tri = Triangulation( X( [0 0 1 1], [0 1 0 1] ), Y( [0 1 2 3] ) );

```

### Trigamma

**Syntax:** y = Trigamma( x )

**Description:** Returns the trigamma function evaluated at x, where the trigamma function is the derivative of the digamma function.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Trigamma( 5 );

```

### Trim

**Syntax:** sub = Trim( s, <left|right|both> )

**Description:** Returns a copy of string s with any leading or trailing whitespace characters removed. The second argument specifies either the leading or trailing whitespace characters. If you do not specify the second argument, whitespace characters are removed from both ends.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Trim( " title   ", both );

```

### Trim Whitespace

**Syntax:** sub = Trim Whitespace( s, <left|right|both> )

**Description:** Returns a copy of string s with any leading or trailing whitespace characters removed. The second argument specifies either the leading or trailing whitespace characters. If you do not specify the second argument, whitespace characters are removed from both ends.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Trim Whitespace( "  The  dog    crossed    the  road  " );

```

### TripleS Import

**Syntax:** TripleSImport( <path to xml file> )

**Description:** Opens Triple-S files. The Triple-S format comprises an xml or sss file and either a csv file or a dat/asc file. Both files must have the same name with the appropriate extension and must be in the same directory. Specify the xml or sss filepath to import the data.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
TripleS Import(); //To get a file dialog to select the XML file
TripleS Import( "c:/MyFile.xml" ); //To open the Triple-S MyFile

```

### Try

**Syntax:** y = Try( expr, <catchExpr> )

**Description:** Evaluates and returns the expr argument, unless the evaluation causes a Throw() or internal exception. In that case, the evaluation of catchExpr is returned. If you use exception_msg as the catchExpr, a list containing more information about the error is returned.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Try( Sqrt( "s" ), "invalid" );

```

**Example 2**

```js

Names Default To Here( 1 );
Try( Sqrt( "s" ), exception_msg );

```

### Tukey HSD P value

**Syntax:** p = Tukey HSD P value( q, nGroups, dfe )

**Description:** Returns the p-value from Tukey&apos;s HSD multiple comparisons test, where q is the test statistic, nGroups is the number of groups in the study, and dfe is the error degrees of freedom (based on the total study sample).



Note that q is Tukey&apos;s adjusted critical value, which is the quantile of Tukey&apos;s studentized range distribution divided by the sqrt(2).

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Tukey HSD P value( 3.73, 6, 34 );

```

### Tukey HSD Quantile

**Syntax:** q = Tukey HSD Quantile( 1-alpha, nGroups, dfe )

**Description:** Returns the quantile needed in Tukey&apos;s HSD multiple comparisons test, where 1-alpha is the confidence level, nGroups is the number of groups in the study, and dfe is the error degrees of freedom (based on the total study sample).



Note that q is Tukey&apos;s adjusted critical value, which is the quantile of Tukey&apos;s studentized range distribution divided by the sqrt(2).

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
alpha = 0.05;
dfe = 5;
Tukey HSD Quantile( 1 - alpha, 20, dfe );
New Window( "Example: Tukey HSD Quantile",
	tdigr = Graph Box(
		Y Scale( 2, 8 ),
		X Scale( 2.5, 15.5 ),
		YName( "Tukey HSD Quantile" ),
		XName( "Groups" ),
		Pen Color( "red" );
		For( i = 3, i <= 15, i++,
			V Line( i, 0, Tukey HSD Quantile( 1 - alpha, i, dfe ) )
		);
		Text( {3, 7}, "dfe=", Round( dfe, 2 ) );
	),
	H List Box( Text Box( "dfe" ), Slider Box( 3, 10, dfe, tdigr << reshow ) )
);

```

### Type

**Syntax:** y = Type( x )

**Description:** Returns a string naming the type of the value of the argument x.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Type( [1 2 3] );

```

### Unit Test

**JMP Version Added:** Before version 14

### Unlineup Box

**Syntax:** y = UnLineup Box(displayBoxArgs, ... )

**Description:** Returns a display box that temporarily suspends the column layout of a Lineup Box. The child of the Unlineup Box will be stretched to span all columns of the Lineup Box.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
New Window( "unlineup",
	Lineup Box( N Col( 2 ),
		Unlineup Box( Text Box( "First Section", <<Justify Text( "Center" ) ) ),
		Button Box( "First Section 1" ),
		Button Box( "First Section 2" ),
		Unlineup Box( Text Box( "Second Section", <<Justify Text( "Center" ) ) ),
		Button Box( "Second Section 1" ),
		Button Box( "Second Section 2" )
	)
);

```

### Unlock Globals

**Syntax:** Unlock Globals( name, ... )

**Description:** Unlocks specified global names, allowing them to be modified and to be cleared by the Clear Globals function.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
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

```js

Names Default To Here( 1 );
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

### Unregister Addin

**Syntax:** Unregister Addin( uniqueId)

**Description:** Unregister an add-in

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Unregister Addin( "com.mycompany.myaddin" );

```

### Unsubscribe to Data Table List

**Syntax:** aSub = Unsubscribe to Data Table List(<subscriber name>, <"OnOpen" | "OnClose" | "OnRename" | "ALL">)

**Description:** Remove a subscription to the data table list that had been added thru the command "subscribe to data table list".

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
f1 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "opening" );
	Print( dtname );
);
f2 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "closing" );
	Print( dtname );
);
aSub = Subscribe to Data Table List( , OnOpen( f1 ) );
Subscribe to Data Table List( aSub, OnClose( f2 ) );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
Close( dt );
Unsubscribe to Data Table List( aSub, "on close" );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );

```

**Example 2**

```js

Names Default To Here( 1 );
f1 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "opening" );
	Print( dtname );
);
f2 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "closing" );
	Print( dtname );
);
aSub = Subscribe to Data Table List( , OnOpen( f1 ) );
Subscribe to Data Table List( aSub, OnClose( f2 ) );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
Close( dt );
Unsubscribe to Data Table List( aSub, "all" );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
Close( dt );

```

### Uppercase

**Syntax:** su = Uppercase( s )

**Description:** Converts lowercase letters to uppercase letters in the specified string. Rules for upper and lower case are locale dependent.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Uppercase( "Café #23" );

```

### V Center Box

**Syntax:** y = V Center Box( <childbox> )

**Description:** Returns a display box with the childbox display box argument centered in the vertical space defined by the maximum size of that child and all the other siblings of the center box.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "test",
	H List Box(
		V Center Box( Text Box( "V+V" ) ),
		V List Box(
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			H Center Box( Text Box( "H+H" ) ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" )
		)
	)
);

```

### V Concat

**Syntax:** y = a |/ b; y = V Concat( a, b, ... )

**Description:** Concatenates matrices vertically. Arguments must have same number of columns.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
[11 22] |/ [33 44];

```

### V Concat To

**Syntax:** matrix1 |/= matrix2; V Concat To( matrix1, matrix2 )

**Description:** Concatenates in place, vertically. a |/= b is equivalent to a = a |/ b. This is an assignment operator.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
exA = [1 2, 3 4];
exB = [5 6, 7 8, 9 10];
exC = [1, 1, 1, 1, 1];
exD = V Concat To( exA, exB );
exE = Concat( exD, exC );
/* exA is changed and exD is not. */
Show( exA, exB, exC, exD, exE );
/* Also see ConcatTo(), VConcat() */

```

### V Line

**Syntax:** V Line( x ); V Line( x, y1, y2 )

**Description:** Draws a vertical line at x from y1 to y2 or through the entire frame.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Size( 2 );
		V Line( 20, 10, 50 );
	)
);

```

### V List Box

**Syntax:** y = V List Box( <Align( center|right )>, displayBox, ... )

**Description:** Returns a display box that arranges the display boxes provided by the arguments in a vertical layout. The <<Hold message tells the sheet to own the report(s) that will be excerpted. The optional Align argument allows for right or center alignment of the contents inside the display box.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Picker",
		V List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
	)
);

```

### V Max

**Syntax:** b = V Max( matrix )

**Description:** Returns a row vector containing the maximum of each column in the argument.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
V Max( [11 22, 33 44, 55 66] );

```

### V Mean

**Syntax:** m = V Mean( matrix )

**Description:** Returns a row vector containing the mean of each column in the argument.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
V Mean( [11 22, 33 44, 55 66] );

```

### V Median

**Syntax:** m = V Mean( matrix )

**Description:** Returns a row vector containing the median of each column in the argument.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
V Median( [11 22, 33 44, 35 46, 55 66] );

```

### V Min

**Syntax:** a = V Min( matrix )

**Description:** Returns a row vector containing the minimum of each column in the argument.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
V Min( [11 22, 33 44, 55 66] );

```

### V Quantile

**Syntax:** m = V Quantile( matrix, p )

**Description:** Returns a row vector containing the specified quantile p of each column in the argument.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
V Quantile( [11 22, 33 44, 35 46, 55 66], .25 );

```

### V Robust Standardize

**Syntax:** b = V Robust Standardize( X, <center=1>, <scale=1> )

**Description:** Returns a matrix that is centered by the median and scaled by a robust estimate of the standard deviation of matrix X. The optional Boolean arguments specify if centering and scaling are performed.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
V Robust Standardize( J( 150, 4, Random Normal() ), 1, 1 );

```

### V Scroll Box

**Syntax:** y = V Scroll Box( <Size( y )>, displayBox )

**Description:** Returns a display box that positions a larger child box using a vertical scroll bar.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Picker",
		V Scroll Box(
			Size( 100 ),
			V List Box(
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
			),
			<<Set Stretch( "Window", "Window" )
		)
	)
);

```

### V Sheet Box

**Syntax:** y = V Sheet Box( <<Hold( rpt ), displayBox, ... )

**Description:** Returns a display box that arranges the display boxes provided by the arguments in a vertical layout. The <<Hold message tells the sheet to own the report(s) that will be excerpted. The optional Align argument allows for right or center alignment of the contents inside the display box.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	V Sheet Box(
		<<Hold( Bivariate( Y( :weight ), X( :height ), Fit Line() ) ),
		<<Hold(
			Distribution(
				Automatic Recalc( 1 ),
				Continuous Distribution(
					Column( :height ),
					Horizontal Layout( 1 ),
					Vertical( 0 ),
					Outlier Box Plot( 0 )
				)
			)
		),
		<<Hold( Treemap( Categories( :age ) ) ),
		<<Hold(
			Bubble Plot(
				X( :height ),
				Y( :weight ),
				Sizes( :age ),
				Coloring( :sex ),
				Circle Size( 6.226 ),
				All Labels( 0 )
			)
		),
		H Sheet Box(
			Sheet Part( "weight by height", Excerpt Box( 1, {Picture Box( 1 )} ) ),
			Sheet Part( "height", Excerpt Box( 2, {Picture Box( 1 )} ) )
		),
		H Sheet Box(
			Sheet Part( "", Excerpt Box( 3, {Picture Box( 1 )} ) ),
			Sheet Part( "height by weight", Excerpt Box( 4, {Picture Box( 1 )} ) )
		)
	)
);

```

### V Size

**Syntax:** v = V Size()

**Description:** Returns the vertical size of the graphics frame in pixels.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Text Size( V Size() / 4 );
		Text( {50, 20}, "label" );
	)
);

```

### V Splitter Box

**Syntax:** y = V Splitter Box( <Size(x,y)>, displayBox, ... )

**Description:** Returns a display box that arranges other display boxes vertically, with interactive control of sizes. Child sizes are specified as a proportion of the width or height of the Splitter Box. The optional Size argument is only used for the top-most Splitter Box; lower level boxes are sized like any other child box.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Splitter",
	V Splitter Box(
		Size( 800, 600 ),
		H Splitter Box( graph = Graph Box(), Script Box(), <<Sizes( {0.6, 0.4} ) ),
		H Splitter Box(
			pict = Picture Box( Open( "$SAMPLE_IMAGES/tile.jpg", jpg ) ),
			spacer = Spacer Box(),
			<<Sizes( {0.4, 0.6} )
		)
	)
);
graph[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
pict << Set Min Size( 100, 100 );
pict << Set Max Size( 500, 500 );
pict << Set Stretch( "Window", "Window" );
spacer << Set Fill( 1 );
spacer << Color( "Red" );
spacer << Set Stretch( "Window", "Window" );

```

### V Standardize

**Syntax:** b = V Standardize( X )

**Description:** Returns a matrix that is the centered and scaled version of matrix X. Each column of b has mean 0 and standard deviation 1.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
V Standardize( [11 22, 33 44, 55 66] );

```

### V Std

**Syntax:** b = V Std( matrix )

**Description:** Returns a row vector containing the standard deviations of each column in the argument.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
V Std( [11 22, 33 44, 55 66] );

```

### V Sum

**Syntax:** s = V Sum( matrix )

**Description:** Returns a row vector containing the sum of each column in the argument.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
V Sum( [11 22, 33 44, 55 66] );

```

### VPTree

**Syntax:** tab = VPTree( [ matrix ] )

**Description:** Returns a table for efficiently looking up near neighbors. The matrix arguments are k-dimensional points. There is no built in limit on the number of dimensions or points.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
tab = VPTree( [1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6] );
{rows, dist} = tab << K nearest rows( 2, [1.1 .9 1] );
"2 nearest rows to [1.1 .9 1] are " || Char( rows );

```

### Varimax

**Syntax:** {R,T} = Varimax( F, <norm=1> )

**Description:** Performs a varimax rotation of the specified matrix F. Returns a list that contains the rotated matrix and the orthogonal rotation matrix. By default, a normalized varimax rotation is performed. Specify norm = 0 to perform a non-normalized varimax rotation.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Varimax( [1.2 .4, .9 1.5] );

```

### Vec Diag

**Syntax:** y = Vec Diag( x )

**Description:** Returns the diagonal elements of the square matrix as a vector.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Vec Diag( [11 22, 33 44] );

```

### Vec Quadratic

**Syntax:** Vec Quadratic( S, X )

**Description:** Evaluates as Vec Diag( X * S * X` ).

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
exS = [1 3 5, 3 2 6, 5 6 1];
exX = [1 3 5, 2 4 6];
Vec Quadratic( exS, exX );

```

### Wait

**Syntax:** Wait( <x> )

**Description:** Waits for x seconds before proceeding with execution. The default value for x is 3 seconds. If x is 0 or greater, JMP will complete any operating system events (e.g. screen drawing) as well as any pending callbacks (e.g. formula evaluation) in addition to the wait. If x is less than 0, only the screen drawing and pending OS events are confirmed to be completed before proceeding.

**JMP Version Added:** Before version 14

**Callbacks**

```js

Names Default To Here( 1 );
Wait( 0 ); // Wait for OS events and callbacks

```

**OS Events**

```js

Names Default To Here( 1 );
Wait( -1 ); // Wait for OS events

```

**Simple**

```js

Names Default To Here( 1 );
Wait( 1.5 );

```

### Watch

**Syntax:** w = Watch( all|name1, ... )

**Description:** Creates a window showing variables from Global, Here, and Local namespaces and their values.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
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

### Wavelet Basis Coef

**Syntax:** y = Wavelet Basis Coef( x, grid, coef, <wavelet = "Haar" or "Biorthogonal" or "Coiflet" or "Daubechies" or "Symlet">, <param = 0> )

**Description:** Returns the prediction at the points x for the specified Wavelet model. The grid parameter is a vector specifying the grid of the data for the wavelet model. The coef parameter is a vector of wavelet coefficients. The wavelet parameter is the name of the wavelet model. The optional param parameter is the wavelet model parameter (if necessary, defaults to 0).

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
Wavelet Basis Coef( 2.5, [1, 2, 3, 4], [0, 1, 2, 3], "Haar" );

```

### Web

**Syntax:** Web( string, <JMP Window> )

**Description:** Opens the URL or file stored in string in the default web browser. The optional second argument specifies that the HTML open in a JMP browser window.

**JMP Version Added:** Before version 14

**Event Handler**

```js

Names Default To Here( 1 );
//Making a clickable link show up in a formula column
New Table( "Example",
	Add Rows( 2 ),
	New Column( "URL",
		"Character",
		"Nominal",
		Formula( "https://www.jmp.com/" || :Page ),
		Set Property(
			"Event Handler",
			Event Handler(
				Click( JSL Quote( Function( {dt, col, row}, Web( dt:col[row] ) ) ) )
			)
		)
	),
	New Column( "Page",
		"Character",
		"Nominal",
		Set Values( {"support/knowledge_base.shtml", "en_us/about.html"} )
	)
);

```

**Simple**

```js

Names Default To Here( 1 );
Web( "http://www.jmp.com/" );

```

### Web Browser Box

**Syntax:** wb = Web Browser Box( url )

**Description:** Returns a display box to view a web page, specified by the url string argument.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example", wb = Web Browser Box() );
wb << Navigate( "http://www.jmp.com" );
wb << Set Stretch( "Window", "Window" );
wb << Set Max Size( 10000, 10000 );

```

### Week Of Year

**Syntax:** d = Week Of Year( datetime, <rule=1> )

**Description:** Returns the week of the year containing a date-time value using one of three rules. By default (rule 1), weeks start on Sunday with the first Sunday of the year being week 2. Week 1 will be a partial week or empty (as in 2006). For rule 2, the first Sunday is week 1, with previous days being week 0. For rule 3, the ISO week number is returned, where weeks start on Monday and week 1 is the first week of the year with four days in that year. With ISO weeks, it&apos;s possible for the first or last three days of the year to belong to the neighboring year&apos;s week number.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Week Of Year( Today() );

```

**Example 2**

```js

Names Default To Here( 1 );
Show(
	Week Of Year( 01jan2012, 1 ),
	Week Of Year( 01jan2012, 2 ),
	Week Of Year( 01jan2012, 3 )
);

```

### Weibull Density

**Syntax:** y = Weibull Density( x, shape, <scale=1>, <threshold=0> )

**Description:** Returns the density at x of a Weibull probability distribution with a shape parameter and optional scale parameter.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
shape = 0.5;
New Window( "Example: Weibull Density",
	y = Graph Box(
		Y Scale( 0, 2 ),
		X Scale( 0, 1.5 ),
		XName( "x" ),
		Pen Color( "red" );
		Y Function( Weibull Density( x, shape ), x );
		Text( {1.1, 1.8}, " shape=", Round( shape, 2 ) );
	),
	H List Box( Slider Box( 0, 5, shape, y << reshow ), Text Box( " shape" ) )
);

```

### Weibull Distribution

**Syntax:** p = Weibull Distribution( x, shape, <scale=1>, <threshold=0> )

**Description:** Returns the probability that a Weibull distributed random variable (with a shape parameter and optional scale parameter) is less than x.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
shape = 2;
New Window( "Example: Weibull Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 2 ),
		XName( "x" ),
		Pen Color( "red" );
		Y Function( Weibull Distribution( x, shape ), x );
		Text( {0.1, 0.9}, " shape=", Round( shape, 2 ) );
	),
	H List Box( Slider Box( 0, 5, shape, y << reshow ), Text Box( " shape" ) )
);

```

### Weibull Quantile

**Syntax:** q = Weibull Quantile( p, beta, <alpha=1>, <threshold=0> )

**Description:** Returns the quantile from a Weibull distribution, the value for which the probability is p that a random value would be lower, where beta and alpha are the shape and scale parameters, respectively.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
exwqbeta = 2;
exwqqq = 0.5;
New Window( "Example: Weibull Quantile",
	exwqy = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( 0, 2 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Weibull Distribution( exwqq, exwqbeta ), exwqq );
		Pen Color( "blue" );
		V Line( Weibull Quantile( exwqqq, exwqbeta ), 0, 1 );
		Text(
			{0.1, 0.9},
			" \!U03B2=",
			Round( exwqbeta, 2 ),
			" quantile=",
			Round( exwqqq, 2 )
		);
	),
	H List Box( Slider Box( 0, 5, exwqbeta, exwqy << reshow ), Text Box( " \!U03B2" ) ),
	H List Box(
		Slider Box( 0.01, 0.99, exwqqq, exwqy << reshow ),
		Text Box( " quantile" )
	)
);

```

### Where

**Syntax:** Where( <dt>, clause )

**Description:** Returns indices (usually row numbers) matching the given where clause. The optional dt changes the Current Data Table during the evaluation. These clauses are often written by JMP using the Data Filter. This will often by faster than using Loc, <<Get Rows Where or <<Select Where. The behavior is undefined if the clause modifies the sequences or any symbols during evaluation.

**JMP Version Added:** 18

**Column Functions**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Select << Select Rows( Where( Col Max( :height, :age ) >= 68 ) );
dt << Clear Select << Select Rows( Where( :height == Col Max( :height, :age ) ) );

```

**Columns**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Get Rows Where( :sex == "M" );
Where( :sex == "M" );
Where( dt, :sex == "M" );

```

**Matrix/List**

```js

Names Default To Here( 1 );
xs = [10 20 30 . 50];
xs[Where( xs >= 20 )];
xs[Where( !Is Missing( xs ) )];
ys = {10, 20, "30", ., 50};
ys[Where( ys >= 20 )];

```

**Other**

```js

Names Default To Here( 1 );
xs = [10 20 30 . 50];
ys = [0 0 0 1 1];
Where( xs > 20 & ys );

xs = {{10}, {20}, {15}};
Where( xs[1] < 18 );

```

**Row States**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [2 4 6] ) << Exclude( 1 );
Where( Excluded() );
Where( !Excluded() );

```

### While

**Syntax:** While( testExpr, bodyExpr )

**Description:** Evaluates the testExpr and bodyExpr expressions repeatedly as long as testExpr evaluates to a nonzero value.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
i = 1;
s = "";
While( i < 1000,
	s ||= " " || Char( i );
	i *= 2;
);
s;

```

### Wild

**Syntax:** Wild()

**Description:** Denotes a wildcard position that matches any expression (only used in expression patterns).

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
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

```js

Names Default To Here( 1 );
extestexpr = Expr(
	For( i = 1, i <= 14, i++, Print( "YES!!!" ) );
	Show( "END" );
);
Extract Expr( extestexpr, For( i = 1, Wild List(), Print( "YES!!!" ) ) );

```

### Window

**Syntax:** y = Window( <string|int> )

**Description:** This function is deprecated and retained only for backward compatibility with existing scripts. For new scripts, use Get Window() or Get Window List().

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Window( "Big Class" );

```

### With Clipboard

**Syntax:** two = With Clipboard( clp, box << Paste; 1 + 1 )

**Description:** If the JSL within this function would have normally pasted something from the OS Clipboard, it is instead pasted from the provided Clipboard object.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Property( "Units", "HELLO" );
clp = Clipboard Capture( dt << Select Columns( :height ) << Copy Column Properties );
With Clipboard( clp, dt << Select Columns( :weight ) << Paste Column Properties );

```

### With Window Handler

**Syntax:** With Window Handler( JSL Code, Handler Function )

**Description:** Runs a block of code with a function to be called each time a new window is created.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
With Window Handler(
	New Window( "My Window" ),
	Function( {window},
		Print( window << get window title() );
		window << close window();
	)
);

```

### Word

**Syntax:** w = Word( n|[first last], s, <delim>, <Unmatched(result string)>

**Description:** Returns the nth word of string s, where words are sub-strings separated by any number of any of the characters in the delim argument. If delim is absent, the space character is used. If delim is the empty string, each character is treated as a separate word.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Word( 3, "http://www.jmp.com", ":/." );

```

**Example 2**

```js

Names Default To Here( 1 );
Word( [2 -1], "This is a sentence" );

```

**Example 3**

```js

Names Default To Here( 1 );
Word( 4, "Apple+Banana Tree,,Pear,,Peach,,Grape", Get Punctuation Characters() );

```

**Example 4**

```js

Names Default To Here( 1 );
Word( 5, "a b c d", Unmatched( "None" ) );

```

**Example 5**

```js

Names Default To Here( 1 );
Word( 2, "abcd", "" );

```

### Words

**Syntax:** wl = Words( <[first last]>, s, <delim>)

**Description:** Returns a list of sub-strings separated by any of the characters specified in the delim argument. If delim is absent, the space character is used. If delim is the empty string, each character is treated as a separate word.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Eval List( {Words( "http://www.jmp.com", ":/." ), Words( "hello", "" )} );

```

**Example 2**

```js

Names Default To Here( 1 );
Words( "Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

**Example 3**

```js

Names Default To Here( 1 );
Words( [1 2], "Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

### Wrap List Box

**Syntax:** y = Wrap List Box( displayBox, ... )

**Description:** Returns a display box that arranges the display boxes provided by the arguments in a horizontal layout, but will wrap that list when printing.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "WrapListBox",
	Wrap List Box(
		Graph Box( framesize( 150, 100 ), Text( {50, 50}, "1" ) ),
		Graph Box( framesize( 150, 100 ), Text( {50, 50}, "2" ) ),
		Graph Box( framesize( 150, 100 ), Text( {50, 50}, "3" ) ),
		Graph Box( framesize( 150, 100 ), Text( {50, 50}, "4" ) )
	)
);

```

### Write

**Syntax:** Write( x, ... )

**Description:** Displays the specified values in the log without adding quotation marks, spaces, or line breaks (as Print() does).

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Write( "fraction = ", 355 / 113, "\!N", "pi       = ", Pi() );

```

### X Function

**Syntax:** X Function( xExpr, yName, <properties> )

**Description:** Draws function xExpr in the X dimension as variable yName varies across the range of the Y axis of the graph. Additional named property arguments include Min(minimum X), Max(maximum Y), Fill(fill pattern, value to fill to), Inc(upper bound of increment).

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Color( "red" );
		X Function( 20 + 40 * Sin( a / 30 ), a );
	)
);

```

### X Origin

**Syntax:** x = X Origin()

**Description:** Returns the x value for the left edge of the graphics frame.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( "red" );
		Oval(
			X Origin() + 10,
			Y Origin() + Y Range() - 10,
			X Origin() + X Range() - 10,
			Y Origin() + 10,
			1
		);
	)
);

```

### X Range

**Syntax:** x = X Range()

**Description:** Returns the x distance from left to right. X Origin() + X Range() is the right edge.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( "red" );
		Oval(
			X Origin() + 10,
			Y Origin() + Y Range() - 10,
			X Origin() + X Range() - 10,
			Y Origin() + 10,
			1
		);
	)
);

```

### X Scale

**Syntax:** X Scale( <xMin>, <xMax> )

**Description:** Sets a new scale for the graphics frame.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
/* Default value for X Scale() is (0,100). */
New Window( "Example",
	Graph Box(
		Y Scale( -10, 90 ),
		X Scale( -10, 90 ),
		Oval(
			X Origin() + 10,
			(Y Origin() + Y Range()) - 10,
			(X Origin() + X Range()) - 10,
			Y Origin() + 10,
			1
		)
	)
);

```

### XML Attr

**Syntax:** value = XML Attr( attr name ); aa = XML Attr()

**Description:** Extracts the string value of an XML attribute in the context of being evaluating in a Parse XML() command. If no name if given, an associative array of all attribute name/value pairs is returned.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
ex =
"<table name='fromxml'><col name='x'>[1 2 3]</col><col name='y'>[11 22 33]</col></table>";
Parse XML( ex,
	On Element( "table", Start Tag( New Table( XML Attr( "name" ) ) ) ),
	On Element(
		"col",
		End Tag( New Column( XML Attr( "name" ), Set Values( Parse( XML Text() ) ) ) )
	)
);

```

### XML Decode

**Syntax:** text = XML Decode( textxml )

**Description:** Decodes symbols in XML to ordinary text, changes " to ", < to <, &gt to >; &amp; to &.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
text = XML Decode(
	"isSmallAlpha = letter&gt;=&quot;a&quot; &amp; letter&lt;=&quot;z&quot;"
);

```

### XML Encode

**Syntax:** textxml = XML Encode( text )

**Description:** Prepares text for embedding in XML, changes " to ", < to <, > to > & to &amp;.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
textxml = XML Encode( "\[isSmallAlpha = letter>="a" & letter<="z"]\" );

```

### XML Text

**Syntax:** value = XML Text()

**Description:** Extracts the string text of the body of an XML tag in the context of being evaluating in a Parse XML() command.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
ex =
"<table name='fromxml'><col name='x'>[1 2 3]</col><col name='y'>[11 22 33]</col></table>";
Parse XML( ex,
	On Element( "table", Start Tag( New Table( XML Attr( "name" ) ) ) ),
	On Element(
		"col",
		End Tag( New Column( XML Attr( "name" ), Set Values( Parse( XML Text() ) ) ) )
	)
);

```

### XPath Query

**Syntax:** result = XPath Query(xml, xpath expression)

**Description:** Runs an XPath query against an XML document.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
result = XPath Query(
	"<doc><colors><color>red</color><color>green</color><color>blue</color></colors></doc>",
	"//color/text()"
);

```

### XY Function

**Syntax:** XY Function( x(t), y(t), t, min(0), max(1), inc(.01) | steps(100) )

**Description:** This graphic script function combines an expression x(t) and an expression y(t) to draw an x-y curve for the specified range of parameter t. Inc() is the maximum increment on t, or steps() is the minimum number of steps on t. Use steps() or inc() if the default value does not show details.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Spiral",
	Graph Box(
		Pen Color( "red" );
		xCenter = 50;
		yCenter = 50;
		minAngle = 0;
		maxAngle = Pi() * 2 * 20;
		XY Function(
			xCenter + ((ta / 3) * Cos( ta )),
			yCenter + ((ta / 3) * Sin( ta )),
			ta,
			Min( minAngle ),
			Max( maxAngle ),
			inc( Pi() / 100 )
		);
	)
);
/* sin() and cos() use ta as an argument (rotates)
   AND as a factor (expands) in this example.
   (sin and cos use radians, not degrees.) */

```

### Y Function

**Syntax:** Y Function( yExpr, xName, <properties> )

**Description:** Draws function yExpr in the Y dimension as variable xName varies across the range of the X axis of the graph. Additional named property arguments include Min(minimum X), Max(maximum X), Fill(fill pattern, value to fill to), Inc(upper bound of increment).

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Color( "red" );
		Y Function( 20 + 40 * Sin( a / 30 ), a );
	)
);

```

### Y Origin

**Syntax:** y = Y Origin()

**Description:** Returns the y value for the bottom edge of the graphics frame.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( "red" );
		Oval(
			X Origin() + 10,
			Y Origin() + Y Range() - 10,
			X Origin() + X Range() - 10,
			Y Origin() + 10,
			1
		);
	)
);

```

### Y Range

**Syntax:** y = Y Range()

**Description:** Returns the y distance from bottom to top. Y Origin() + Y Range() is the top edge.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( "red" );
		Oval(
			X Origin() + 10,
			Y Origin() + Y Range() - 10,
			X Origin() + X Range() - 10,
			Y Origin() + 10,
			1
		);
	)
);

```

### Y Scale

**Syntax:** Y Scale( <yMin>, <yMax> )

**Description:** Sets a new scale for the graphics frame.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
/* Default value for Y Scale() is (0,100).*/
New Window( "Example",
	Graph Box(
		Y Scale( -10, 90 ),
		X Scale( -10, 90 ),
		Oval(
			X Origin() + 10,
			(Y Origin() + Y Range()) - 10,
			(X Origin() + X Range()) - 10,
			Y Origin() + 10,
			1
		)
	)
);

```

### Year

**Syntax:** yr = Year( datetime )

**Description:** Returns the year part of a date-time value.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Year( Today() );

```

### ZI Negative Binomial Distribution

**Syntax:** cumprob = ZI Negative Binomial Distribution( k, lambda, sigma, pi )

**Description:** Returns the probability that a zero-inflated Negative Binomial distributed random variable is less than or equal to k, where lambda is the location parameter, sigma is the scale parameter, pi is the zero inflation parameter, and k is the count of interest.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
lambda = 4;
sigma = .5;
p = .2;
New Window( "Example: Zero Inflated Negative Binomial Distribution",
	ppy = Graph Box(
		Y Scale( 0, 1.01 ),
		X Scale( -1, 40 ),
		Pen Color( "red" ),
		Pen Size( 1 );
		For( k = 0, k <= 40, k++,
			H Line( k, k + 1, ZI Negative Binomial Distribution( k, lambda, sigma, p ) );
			V Line(
				k + 1,
				ZI Negative Binomial Distribution( k, lambda, sigma, p ),
				ZI Negative Binomial Distribution( k + 1, lambda, sigma, p )
			);
		);
		Text( {30, 0.3}, "\!U03BB=", Round( lambda, 2 ) );
		Text( {30, .2}, "\!U03C3=", Round( sigma, 2 ) );
		Text( {30, .1}, "\!U03C0=", Round( p, 2 ) );
	),
	V List Box(
		H List Box(
			Slider Box( 0.01, 40, lambda, ppy << reshow ),
			Text Box( " \!U03BB" )
		),
		H List Box( Slider Box( 0.001, 2, sigma, ppy << reshow ), Text Box( "\!U03C3" ) ),
		H List Box( Slider Box( 0, .99, p, ppy << reshow ), Text Box( " \!U03C0" ) ),

	)
);

```

### ZI Negative Binomial Probability

**Syntax:** prob = ZI Negative Binomial Probability( k, lambda, sigma, pi)

**Description:** Returns the probability that a zero-inflated Negative Binomial distributed random variable is equal to k, where lambda is the location parameter, sigma is the scale parameter, pi is the zero inflation parameter, and k is the count of interest.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
lambda = 4;
sigma = .5;
p = .1;
New Window( "Example: Zero Inflated Negative Binomial Probability",
	ppy = Graph Box(
		Y Scale( 0, .4 ),
		X Scale( -1, 40 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( k = 0, k <= 40, k++,
			V Line( k, 0, ZI Negative Binomial Probability( k, lambda, sigma, p ) )
		);
		Text( {30, 0.3}, "\!U03BB=", Round( lambda, 2 ) );
		Text( {30, .25}, "\!U03C3=", Round( sigma, 2 ) );
		Text( {30, .2}, "\!U03C0=", Round( p, 2 ) );
	),
	V List Box(
		H List Box( Slider Box( .01, 40, lambda, ppy << reshow ), Text Box( " \!U03BB" ) ),
		H List Box( Slider Box( 0.001, 2, sigma, ppy << reshow ), Text Box( "\!U03C3" ) ),
		H List Box( Slider Box( 0, .25, p, ppy << reshow ), Text Box( " \!U03C0" ) )
	)
);

```

### ZI Negative Binomial Quantile

**Syntax:** q = ZI Negative Binomial Quantile( lambda, sigma, pi, cumprob )

**Description:** Returns the smallest integer quantile for which the cumulative probability of the zero-inflated Negative Binomial( lambda, sigma, pi ) distribution is larger than or equal to cumprob.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
qexpl = 20;
qexpsig = .5;
qexpp = .2;
qexpn = 40;
qexpq = 0.5;
New Window( "Example: ZI Negative Binomial Quantile",
	qexpy = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, 41 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( qexpk = 0, qexpk < Round( qexpn ), qexpk++,
			H Line(
				qexpk,
				qexpk + 1,
				ZI Negative Binomial Distribution( qexpk, qexpl, qexpsig, qexpp )
			);
			V Line(
				qexpk + 1,
				ZI Negative Binomial Distribution( qexpk, qexpl, qexpsig, qexpp ),
				ZI Negative Binomial Distribution( qexpk + 1, qexpl, qexpsig, qexpp )
			);
		);
		Pen Color( "blue" );
		V Line( ZI Negative Binomial Quantile( qexpl, qexpsig, qexpp, qexpq ), 0, 1.0 );
		Text(
			{2, 0.9},
			" \!U03BB=",
			Round( qexpl, 2 ),
			" \!U03C3=",
			Round( qexpsig, 2 ),
			" \!U03C0=",
			Round( qexpp, 2 )
		);
		Text(
			{2, 0.8},
			" q=",
			Round( qexpq, 2 ),
			" quantile=",
			Round( ZI Negative Binomial Quantile( qexpl, qexpsig, qexpp, qexpq ) )
		);
	),
	H List Box( Slider Box( 0.001, 40, qexpl, qexpy << reshow ), Text Box( " \!U03BB" ) ),
	H List Box( Slider Box( 0.001, 2, qexpsig, qexpy << reshow ), Text Box( "\!U03C3" ) ),
	H List Box( Slider Box( 0, .99, qexpp, qexpy << reshow ), Text Box( " \!U03C0" ) ),
	H List Box( Slider Box( 0.001, .999, qexpq, qexpy << reshow ), Text Box( " q" ) )
);

```

### ZI Poisson Distribution

**Syntax:** cumprob = ZI Poisson Distribution( k, lambda, pi )

**Description:** Returns the probability that a zero-inflated Poisson distributed random variable is less than or equal to k, where lambda is the location parameter, pi is the zero inflation parameter, and k is the count of interest.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
lambda = 4;
p = .2;
New Window( "Example: Zero Inflated Poisson Distribution",
	ppy = Graph Box(
		Y Scale( 0, 1.01 ),
		X Scale( -1, 40 ),
		Pen Color( "red" ),
		Pen Size( 1 );
		For( k = 0, k <= 40, k++,
			H Line( k, k + 1, ZI Poisson Distribution( k, lambda, p ) );
			V Line(
				k + 1,
				ZI Poisson Distribution( k, lambda, p ),
				ZI Poisson Distribution( k + 1, lambda, p )
			);
		);
		Text( {30, 0.2}, "\!U03BB=", Round( lambda, 2 ) );
		Text( {30, .1}, "\!U03C0=", Round( p, 2 ) );
	),
	V List Box(
		H List Box( Slider Box( 0, 40, lambda, ppy << reshow ), Text Box( " \!U03BB" ) ),
		H List Box( Slider Box( 0, .99, p, ppy << reshow ), Text Box( " \!U03C0" ) ),

	)
);

```

### ZI Poisson Probability

**Syntax:** prob = ZI Poisson Probability( k, lambda, pi)

**Description:** Returns the probability that a zero-inflated Poisson distributed random variable is equal to k, where lambda is the location parameter, pi is the zero inflation parameter, and k is the count of interest.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
lambda = 4;
p = .2;
New Window( "Example: Poisson Probability",
	ppy = Graph Box(
		Y Scale( 0, .6 ),
		X Scale( -1, 40 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( k = 0, k <= 40, k++,
			V Line( k, 0, ZI Poisson Probability( k, lambda, p ) )
		);
		Text( {30, 0.5}, "\!U03BB=", Round( lambda, 2 ) );
		Text( {30, .4}, "\!U03C0=", Round( p, 2 ) );
	),
	V List Box(
		H List Box( Slider Box( 0, 40, lambda, ppy << reshow ), Text Box( " \!U03BB" ) ),
		H List Box( Slider Box( 0, .99, p, ppy << reshow ), Text Box( " \!U03C0" ) ),

	)
);

```

### ZI Poisson Quantile

**Syntax:** q = ZI Poisson Quantile( lambda, pi, cumprob )

**Description:** Returns the smallest integer quantile for which the cumulative probability of the zero-inflated Poisson( lambda, pi ) distribution is larger than or equal to cumprob.

**JMP Version Added:** 19

```js

Names Default To Here( 1 );
qexpl = 20;
qexpp = .2;
qexpn = 40;
qexpq = 0.5;
New Window( "Example: ZI Poisson Quantile",
	qexpy = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, 41 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( qexpk = 0, qexpk < Round( qexpn ), qexpk++,
			H Line( qexpk, qexpk + 1, ZI Poisson Distribution( qexpk, qexpl, qexpp ) );
			V Line(
				qexpk + 1,
				ZI Poisson Distribution( qexpl, qexpp, qexpk ),
				ZI Poisson Distribution( qexpl, qexpp, qexpk + 1 )
			);
		);
		Pen Color( "blue" );
		V Line( ZI Poisson Quantile( qexpl, qexpp, qexpq ), 0, 1.0 );
		Text( {2, 0.9}, " \!U03BB=", Round( qexpl, 2 ), " \!U03C0=", Round( qexpp, 2 ) );
		Text(
			{2, 0.8},
			" q=",
			Round( qexpq, 2 ),
			" quantile=",
			Round( ZI Poisson Quantile( qexpl, qexpp, qexpq ) )
		);
	),
	H List Box( Slider Box( 0, 40, qexpl, qexpy << reshow ), Text Box( " \!U03BB" ) ),
	H List Box( Slider Box( 0, .99, qexpp, qexpy << reshow ), Text Box( " \!U03C0" ) ),
	H List Box( Slider Box( 0, 1, qexpq, qexpy << reshow ), Text Box( " q" ) )
);

```

### Zero Or Missing

**Syntax:** y = Zero Or Missing( x )

**Description:** Returns the logical NOT of x with missing values treated as zeros: 1 if x is missing or zero and 0 otherwise.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Zero Or Missing( 1 < 2 );

```

### \[...]\

**Syntax:** y = \[string]\

**Description:** Passages requiring many escape characters can use the delimiter \[...]\.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );

jslPhrase =
"The JSL to do this is :\[
a = "hello";
b = a|| " world.";
show(b);
]\ and you use the Submit command to run it.";
Show( jslPhrase );

```

### e

**Syntax:** y = e()

**Description:** Returns the mathematical constant e, accurate to approximately 15 decimal digits: 2.7182818....

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Round( e(), 10 );

```

### t Density

**Syntax:** p = t Density( q, df, <nonCentrality=0> )

**Description:** Returns the density function of Student&apos;s t.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
tdedf = 1;
New Window( "Example: Students t Density",
	tdegr = Graph Box(
		Y Scale( -.05, 0.45 ),
		X Scale( -8, 8 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( t Density( tdeq, Exp( tdedf ) ), tdeq );
		H Line( 2, 3, 0.3 );
		Pen Color( "blue" );
		Y Function( Normal Density( tdeq ), tdeq );
		H Line( 2, 3, 0.25 );
		Text( {2, 0.35}, "df=", Round( Exp( tdedf ), 2 ) );
		Text( {3.5, 0.3}, "Student t" );
		Text( {3.5, 0.25}, "Normal" );
	),
	H List Box(
		Text Box( "df " ),
		Slider Box( Log( 0.1 ), Log( 1000 ), tdedf, tdegr << reshow )
	)
);

```

### t Distribution

**Syntax:** p = t Distribution( q, df, <nonCentrality=0> )

**Description:** Returns the probability that a Student&apos;s t distributed random variable is less than q.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
tdidf = 1;
New Window( "Example: Students t Distribution",
	tdigr = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -5, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( t Distribution( tdiq, tdidf ), tdiq );
		Text( {-4.5, 0.9}, "df=", Round( tdidf, 2 ) );
	),
	H List Box( Text Box( "df " ), Slider Box( 1, 10, tdidf, tdigr << reshow ) )
);

```

### t Log CDistribution

**Syntax:** y = t Log CDistribution( x, df, <nc> )

**Description:** Returns the log of 1 - t distribution.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
tlcdidf = 1;
New Window( "Example: Students t Log CDistribution",
	tlcdigr = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( -5, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( t Log CDistribution( tlcdiq, tlcdidf ), tlcdiq );
		Text( {-4.5, -0.9}, "df=", Round( tlcdidf, 2 ) );
	),
	H List Box( Text Box( "df " ), Slider Box( 1, 10, tlcdidf, tlcdigr << reshow ) )
);

```

### t Log Density

**Syntax:** y = t Log Density( x, df, <nc> )

**Description:** Returns the log of the t probability density.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
tldedf = 1;
New Window( "Example: Students t Log Density",
	tldegr = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( -5, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( t Log Density( tldeq, tldedf ), tldeq );
		Text( {2.5, -0.35}, "df=", Round( tldedf, 2 ) );
	),
	H List Box( Text Box( "df " ), Slider Box( 0.5, 10, tldedf, tldegr << reshow ) )
);

```

### t Log Distribution

**Syntax:** y = t Log Distribution( x, df, <nc> )

**Description:** Returns the log of the t distribution.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
tldidf = 1;
New Window( "Example: Students t Log Distribution",
	tldigr = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( -5, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( t Log Distribution( tldiq, tldidf ), tldiq );
		Text( {-4.5, -0.9}, "df=", Round( tldidf, 2 ) );
	),
	H List Box( Text Box( "df " ), Slider Box( 1, 10, tldidf, tldigr << reshow ) )
);

```

### t Noncentrality

**Syntax:** nc = t Noncentrality( x, df, prob )

**Description:** Solves for the noncentrality parameter of a Student&apos;s t distribution such that prob = t Distribution( x, df, nc ).

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
New Window( "Example: t Noncentrality",
	tncgr = Graph Box(
		Y Scale( 0.01, 0.99 ),
		X Scale( 0.01, 0.99 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( t Distribution( 3, 2, t Noncentrality( 3, 2, q ) ), q );
	)
);
t Distribution( 3, 2, t Noncentrality( 3, 2, 0.5 ) );

```

### t Quantile

**Syntax:** q = t Quantile( p, df, <nonCentrality=0> )

**Description:** Returns the quantile from a Student&apos;s t distribution, the value for which the probability is p that a random value would be lower.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
extqdf = 1;
extqqq = 0.5;
New Window( "Example: Students t Quantile",
	extqgr = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -5, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( t Distribution( q, Round( extqdf ) ), q );
		Pen Color( "blue" );
		V Line( t Quantile( extqqq, Round( extqdf ) ), 0, 1 );
		Text( {-4.5, 0.9}, "df=", Round( extqdf, 2 ), " quantile=", Round( extqqq, 2 ) );
	),
	H List Box( Slider Box( 1, 30, extqdf, extqgr << reshow ), Text Box( " df" ) ),
	H List Box(
		Slider Box( 0.01, 0.99, extqqq, extqgr << reshow ),
		Text Box( " quantile" )
	), 

);

```

