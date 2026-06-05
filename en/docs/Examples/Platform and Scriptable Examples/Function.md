# Function

## Function using New Window
### Example 1
> **Summary**: Creates a graph box with a custom Y axis scale, plotting the function -1/x and setting frame size to 200x200.

<!-- Keywords: #JSLScriptingLanguage, #GraphBox, #CustomYAxisScale, #FrameSize, #PenColor -->

**Code**:
```jsl
Open("data_table.jmp");
tw = New Window( "-1/x",
	gb = Graph Box(
		Xname( "X(-1/x Scale)" ),
		X Scale( .1, 10 ),
		Y Scale( -1 / .1, -1. / 10 ),
		Framesize( 200, 200 ),
		Pen Color( "red" );
		Y Function( -1 / x, x );
	)
);
gb[axisbox( 2 )] << scale( "custom scale", custom scale name( "Negative Reciprocal" ) ) << Min( .1 ) << Max( 10 );
```

**Code Explanation**:

1. Open data table;
2. Create new window titled "-1/x".
3. Insert graph box.
4. Set X axis name to "X(-1/x Scale)".
5. Define X axis scale from 0.1 to 10.
6. Define Y axis scale from -10 to -0.1.
7. Set frame size to 200x200.
8. Set pen color to red.
9. Plot Y function as -1/x.
10. Customize Y axis scale to "Negative Reciprocal".



### Example 2
> **Summary**: Creates a graph box with a custom Y-axis scale, plotting the function -1/x and setting frame size to 200x200 pixels.

<!-- Keywords: #JSLScriptingLanguage, #GraphBox, #CustomYAxisScale, #PenColor, #FrameSize -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tw = New Window( "-1/x",
	gb = Graph Box(
		Xname( "X(-1/x Scale)" ),
		X Scale( .1, 10 ),
		Y Scale( -1 / .1, -1. / 10 ),
		Framesize( 200, 200 ),
		Pen Color( "red" );
		Y Function( -1 / x, x );
	)
);
gb[axisbox( 2 )] << scale( "custom scale", custom scale name( "Negative Reciprocal" ) ) << Min( .1 ) << Max( 10 );
tw;
```

**Code Explanation**:

1. Open data table.
2. Create new window.
3. Initialize graph box.
4. Set X-axis label.
5. Define X-axis scale.
6. Define Y-axis scale.
7. Set frame size.
8. Set pen color to red.
9. Plot Y function.
10. Customize Y-axis scale.



### Example 3
> **Summary**: Creates a custom graph with a negative reciprocal squared scale, utilizing Graph Builder to plot Y function -1/x^2.

<!-- Keywords: #GraphBuilder, #CustomScale, #JSLScriptingLanguage, #NegativeReciprocalSquared, #Visualization -->

**Code**:
```jsl
Open("data_table.jmp");
tw = New Window( "-1/x^2",
	gb = Graph Box(
		Xname( "X(-1/x^2 Scale)" ),
		X Scale( .1, 10 ),
		Y Scale( -1 / (.1 ^ 2), -1. / (10 ^ 2) ),
		Framesize( 200, 200 ),
		Pen Color( "red" );
		Y Function( -1 / (x ^ 2), x );
	)
);
gb[axisbox( 2 )] << scale( "custom scale", custom scale name( "Negative Reciprocal Squared" ) ) << Min( .1 ) << Max( 10 );
```

**Code Explanation**:

1. Open data table;
2. Create new window titled "-1/x^2".
3. Initialize graph box with custom X axis.
4. Set X scale from 0.1 to 10.
5. Set Y scale from -100 to -0.01.
6. Set frame size to 200x200.
7. Set pen color to red.
8. Plot Y function -1/x^2.
9. Modify Y axis to custom scale.
10. Set custom scale name "Negative Reciprocal Squared".



### Example 4
> **Summary**: Creates a graph box with a custom Y-axis scale, plotting the function -1/x^2 and setting frame size, pen color, and X-axis name.

<!-- Keywords: #JSLScriptingLanguage, #GraphBox, #CustomYAxisScale, #PenColor, #FrameSize -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tw = New Window( "-1/x^2",
	gb = Graph Box(
		Xname( "X(-1/x^2 Scale)" ),
		X Scale( .1, 10 ),
		Y Scale( -1 / (.1 ^ 2), -1. / (10 ^ 2) ),
		Framesize( 200, 200 ),
		Pen Color( "red" );
		Y Function( -1 / (x ^ 2), x );
	)
);
gb[axisbox( 2 )] << scale( "custom scale", custom scale name( "Negative Reciprocal Squared" ) ) << Min( .1 ) << Max( 10 );
tw;
```

**Code Explanation**:

1. Open data table.
2. Create new window.
3. Add graph box.
4. Set X-axis name.
5. Set X-axis scale.
6. Set Y-axis scale.
7. Set frame size.
8. Set pen color.
9. Plot Y function.
10. Customize Y-axis scale.



### Example 5
> **Summary**: Creates a graph box with a custom Y-axis scale, plotting a function and displaying a frame with a specified size.

<!-- Keywords: #JSLScripting, #GraphBox, #CustomYAxisScale, #PenColor, #FrameSize -->

**Code**:
```jsl
Open("data_table.jmp");
tw = New Window( "Arrhenius C extremely low",
	gb = Graph Box(
		Xname( "X(Arrhenius C Scale extremely low)" ),
		X Scale( -273, -240 ),
		Y Scale( -11605 / (-273 + 273.15), -11605 / (-240 + 273.15) ),
		Framesize( 200, 200 ),
		Pen Color( "red" );
		Y Function( -11605 / (x + 273.15), x );
	)
);
gb[axisbox( 2 )] << scale( "custom scale", custom scale name( "Arrhenius C" ) ) << Min( -273 ) << Max( -240 );
```

**Code Explanation**:

1. Open data table.
2. Create new window.
3. Add graph box.
4. Set X axis label.
5. Define X axis range.
6. Calculate Y axis range.
7. Set frame size.
8. Set pen color.
9. Plot Y function.
10. Customize Y axis scale.



### Example 6
> **Summary**: Creates a graph box with a custom Arrhenius C scale, plotting a Y function and configuring the X-axis and Y-axis scales.

<!-- Keywords: #JSLScriptingLanguage, #GraphBox, #CustomScale, #YFunction, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tw = New Window( "Arrhenius C extremely low",
	gb = Graph Box(
		Xname( "X(Arrhenius C Scale extremely low)" ),
		X Scale( -273, -240 ),
		Y Scale( -11605 / (-273 + 273.15), -11605 / (-240 + 273.15) ),
		Framesize( 200, 200 ),
		Pen Color( "red" );
		Y Function( -11605 / (x + 273.15), x );
	)
);
gb[axisbox( 2 )] << scale( "custom scale", custom scale name( "Arrhenius C" ) ) << Min( -273 ) << Max( -240 );
tw;
```

**Code Explanation**:

1. Open data table.
2. Create new window.
3. Initialize graph box.
4. Set X-axis name.
5. Define X-axis scale range.
6. Calculate Y-axis scale range.
7. Set frame size.
8. Set pen color to red.
9. Plot Y function.
10. Customize Y-axis scale.



### Example 7
> **Summary**: Creates a graph box in JMP, visualizing an Arrhenius function with a custom scale and color scheme.

<!-- Keywords: #JMPScriptingLanguage, #GraphBox, #CustomScale, #ArrheniusFunction, #Visualization -->

**Code**:
```jsl
Open("data_table.jmp");
tw = New Window( "Arrhenius C room temperature",
	gb = Graph Box(
		Xname( "X(Arrhenius C Scale room temperature)" ),
		X Scale( 0, 100 ),
		Y Scale( -11605 / (0 + 273.15), -11605 / (100 + 273.15) ),
		Framesize( 200, 200 ),
		Pen Color( "red" );
		Y Function( -11605 / (x + 273.15), x );
	)
);
gb[axisbox( 2 )] << scale( "custom scale", custom scale name( "Arrhenius C" ) ) << Min( 0 ) << Max( 100 );
```

**Code Explanation**:

1. Open data table;
2. Create new window titled "Arrhenius C room temperature".
3. Add graph box to window.
4. Set X-axis name.
5. Set X-axis scale from 0 to 100.
6. Calculate Y-axis scale limits.
7. Set Y-axis scale.
8. Set frame size.
9. Set pen color to red.
10. Plot Arrhenius function on Y-axis.



### Example 8
> **Summary**: Creates a graph box with an Arrhenius function, customized Y-axis scale, and specified frame size.

<!-- Keywords: #JMPScriptingLanguage, #GraphBox, #ArrheniusFunction, #CustomScale, #FrameSize -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tw = New Window( "Arrhenius C room temperature",
	gb = Graph Box(
		Xname( "X(Arrhenius C Scale room temperature)" ),
		X Scale( 0, 100 ),
		Y Scale( -11605 / (0 + 273.15), -11605 / (100 + 273.15) ),
		Framesize( 200, 200 ),
		Pen Color( "red" );
		Y Function( -11605 / (x + 273.15), x );
	)
);
gb[axisbox( 2 )] << scale( "custom scale", custom scale name( "Arrhenius C" ) ) << Min( 0 ) << Max( 100 );
tw;
```

**Code Explanation**:

1. Open data table.
2. Create new window.
3. Initialize graph box.
4. Set X-axis label.
5. Define X-axis range.
6. Calculate Y-axis range.
7. Set graph size.
8. Set pen color.
9. Plot Arrhenius function.
10. Customize Y-axis scale.



### Example 9
> **Summary**: Creates a graph box with an Arrhenius F scale, plotting a Y function and customizing the X-axis scale.

<!-- Keywords: #JSLScriptingLanguage, #GraphBox, #CustomScale, #YFunction, #JMP -->

**Code**:
```jsl
Open("data_table.jmp");
tw = New Window( "Arrhenius F extremely low",
	gb = Graph Box(
		Xname( "X(Arrhenius F Scale extremely low)" ),
		X Scale( -459, -440 ),
		Y Scale( -20889. / (-459 + 459.67), -20889. / (-440 + 459.67) ),
		Framesize( 200, 200 ),
		Pen Color( "red" );
		Y Function( -20889. / (x + 459.67), x );
	)
);
gb[axisbox( 2 )] << scale( "custom scale", custom scale name( "Arrhenius F" ) ) << Min( -459 ) << Max( -440 );
```

**Code Explanation**:

1. Open data table.
2. Create new window.
3. Add graph box.
4. Set X-axis name.
5. Define X-axis scale.
6. Calculate Y-axis scale.
7. Set frame size.
8. Set pen color.
9. Plot Y function.
10. Customize Y-axis scale.



### Example 10
> **Summary**: Creates a graph box with a custom Y-axis scale based on an Arrhenius F formula, while setting frame size and pen color.

<!-- Keywords: #JSLScriptingLanguage, #GraphBuilder, #CustomYAxisScale, #ArrheniusF, #PenColor -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tw = New Window( "Arrhenius F extremely low",
	gb = Graph Box(
		Xname( "X(Arrhenius F Scale extremely low)" ),
		X Scale( -459, -440 ),
		Y Scale( -20889. / (-459 + 459.67), -20889. / (-440 + 459.67) ),
		Framesize( 200, 200 ),
		Pen Color( "red" );
		Y Function( -20889. / (x + 459.67), x );
	)
);
gb[axisbox( 2 )] << scale( "custom scale", custom scale name( "Arrhenius F" ) ) << Min( -459 ) << Max( -440 );
tw;
```

**Code Explanation**:

1. Open data table.
2. Create new window titled "Arrhenius F extremely low".
3. Initialize graph box with X-axis name.
4. Set X-axis scale from -459 to -440.
5. Set Y-axis scale based on formula.
6. Define frame size as 200x200.
7. Set pen color to red.
8. Plot Y function using given formula.
9. Customize Y-axis scale to "Arrhenius F".
10. Set custom scale minimum and maximum values.



### Example 11
> **Summary**: Creates a graph box in JMP, visualizing an Arrhenius F scale room temperature plot with a custom Y-axis scale.

<!-- Keywords: #JMPScriptingLanguage, #GraphBox, #CustomScale, #ArrheniusFscale, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
tw = New Window( "Arrhenius F room temperature",
	gb = Graph Box(
		Xname( "X(Arrhenius F Scale room temperature)" ),
		X Scale( 0, 100 ),
		Y Scale( -20889. / (0 + 459.67), -20889. / (100 + 459.67) ),
		Framesize( 200, 200 ),
		Pen Color( "red" );
		Y Function( -20889. / (x + 459.67), x );
	)
);
gb[axisbox( 2 )] << scale( "custom scale", custom scale name( "Arrhenius F" ) ) << Min( 0 ) << Max( 100 );
```

**Code Explanation**:

1. Open data table.
2. Create new window titled "Arrhenius F room temperature".
3. Initialize graph box.
4. Set X-axis name.
5. Define X-axis scale range.
6. Calculate Y-axis scale range.
7. Set graph size.
8. Set pen color to red.
9. Plot Y function.
10. Customize Y-axis scale.



### Example 12
> **Summary**: Creates a graph box in JMP, visualizing Arrhenius F scale room temperature data with a custom Y-axis scale.

<!-- Keywords: #JMPScriptingLanguage, #GraphBox, #CustomYAxisScale, #ArrheniusFscale, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tw = New Window( "Arrhenius F room temperature",
	gb = Graph Box(
		Xname( "X(Arrhenius F Scale room temperature)" ),
		X Scale( 0, 100 ),
		Y Scale( -20889. / (0 + 459.67), -20889. / (100 + 459.67) ),
		Framesize( 200, 200 ),
		Pen Color( "red" );
		Y Function( -20889. / (x + 459.67), x );
	)
);
gb[axisbox( 2 )] << scale( "custom scale", custom scale name( "Arrhenius F" ) ) << Min( 0 ) << Max( 100 );
tw;
```

**Code Explanation**:

1. Open data table;
2. Create new window titled "Arrhenius F room temperature".
3. Insert graph box.
4. Set X-axis name.
5. Set X-axis scale from 0 to 100.
6. Set Y-axis scale based on Arrhenius formula.
7. Set frame size to 200x200.
8. Set pen color to red.
9. Plot Arrhenius function on Y-axis.
10. Customize Y-axis scale to "Arrhenius F".



### Example 13
> **Summary**: Creates a Weibull quantile graph with customized X-axis and Y-axis scales, using JMP's Graph Builder platform.

<!-- Keywords: #JMPGraphBuilder, #WeibullQuantile, #CustomizedAxescales, #RedPenColor, #FrameSize -->

**Code**:
```jsl
Open("data_table.jmp");
tw = New Window( "Exp Prob",
	gb = Graph Box(
		Xname( "X(Exp Prob Scale)" ),
		X Scale( .001, .999 ),
		Y Scale( Weibull Quantile( .001, 1 ), Weibull Quantile( .999, 1 ) ),
		Framesize( 200, 200 ),
		Pen Color( "red" );
		Y Function( Weibull Quantile( x, 1 ), x );
	)
);
gb[axisbox( 2 )] << scale( "Exp Prob" ) << Min( .001 ) << Max( .999 );
```

**Code Explanation**:

1. Open data table;
2. Create new window titled "Exp Prob".
3. Add graph box to window.
4. Set X-axis name.
5. Define X-axis scale range.
6. Define Y-axis scale using Weibull quantile.
7. Set frame size.
8. Set pen color to red.
9. Plot Weibull function on graph.
10. Customize Y-axis to "Exp Prob" scale.



### Example 14
> **Summary**: Creates a graph box in JMP, visualizing Weibull Quantile function with customized X and Y scales.

<!-- Keywords: #JMPScriptingLanguage, #GraphBox, #WeibullQuantile, #CustomizedScales, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tw = New Window( "Exp Prob",
	gb = Graph Box(
		Xname( "X(Exp Prob Scale)" ),
		X Scale( .001, .999 ),
		Y Scale( Weibull Quantile( .001, 1 ), Weibull Quantile( .999, 1 ) ),
		Framesize( 200, 200 ),
		Pen Color( "red" );
		Y Function( Weibull Quantile( x, 1 ), x );
	)
);
gb[axisbox( 2 )] << scale( "Exp Prob" ) << Min( .001 ) << Max( .999 );
tw;
```

**Code Explanation**:

1. Open data table.
2. Create new window.
3. Add graph box.
4. Set X axis name.
5. Set X axis scale.
6. Set Y axis scale using Weibull Quantile.
7. Set frame size.
8. Set pen color to red.
9. Plot Weibull Quantile function.
10. Customize Y axis scale to Exp Prob.



### Example 15
> **Summary**: Creates a graph box in JMP, visualizing Frechet probability distribution with customized X and Y scales.

<!-- Keywords: #JMPScriptingLanguage, #GraphBox, #FrechetDistribution, #Customization, #Visualization -->

**Code**:
```jsl
Open("data_table.jmp");
tw = New Window( "Frechet Prob",
	gb = Graph Box(
		Xname( "X(Frechet Prob Scale)" ),
		X Scale( .001, .999 ),
		Y Scale( LEV Quantile( .001, 0, 1 ), LEV Quantile( .999, 0, 1 ) ),
		Framesize( 200, 200 ),
		Pen Color( "red" );
		Y Function( LEV Quantile( x, 0, 1 ), x );
	)
);
gb[axisbox( 2 )] << scale( "Frechet Prob" ) << Min( .001 ) << Max( .999 );
```

**Code Explanation**:

1. Open data table;
2. Create new window titled "Frechet Prob".
3. Add graph box to window.
4. Set X axis name and scale.
5. Set Y axis scale using LEV Quantile.
6. Set graph size.
7. Change pen color to red.
8. Plot Y function using LEV Quantile.
9. Access second axis box.
10. Set axis scale, min, and max.



### Example 16
> **Summary**: Creates a graph box in JMP, visualizing Frechet probability distribution with customized X and Y scales.

<!-- Keywords: #JMPScriptingLanguage, #GraphBox, #LEVQuantile, #CustomScaling, #Visualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tw = New Window( "Frechet Prob",
	gb = Graph Box(
		Xname( "X(Frechet Prob Scale)" ),
		X Scale( .001, .999 ),
		Y Scale( LEV Quantile( .001, 0, 1 ), LEV Quantile( .999, 0, 1 ) ),
		Framesize( 200, 200 ),
		Pen Color( "red" );
		Y Function( LEV Quantile( x, 0, 1 ), x );
	)
);
gb[axisbox( 2 )] << scale( "Frechet Prob" ) << Min( .001 ) << Max( .999 );
tw;
```

**Code Explanation**:

1. Open data table.
2. Create new window named "Frechet Prob".
3. Initialize graph box.
4. Set X-axis name.
5. Define X-axis scale.
6. Define Y-axis scale using LEV Quantile.
7. Set frame size.
8. Set pen color to red.
9. Plot Y function using LEV Quantile.
10. Customize axis settings for Y-axis.



### Example 17
> **Summary**: Creates a logarithmic graph with a custom scale, plotting natural log function and setting frame size to 200x200.

<!-- Keywords: #JMPScriptingLanguage, #GraphBuilder, #CustomScale, #LogarithmicScale, #PenColor -->

**Code**:
```jsl
Open("data_table.jmp");
tw = New Window( "Ln",
	gb = Graph Box(
		Xname( "X(Ln Scale)" ),
		X Scale( .1, 10 ),
		Y Scale( Log( .1 ), Log( 10 ) ),
		Framesize( 200, 200 ),
		Pen Color( "red" );
		Y Function( Log( x ), x );
	)
);
gb[axisbox( 2 )] << scale( "custom scale", custom scale name( "Ln" ) ) << Min( .1 ) << Max( 10 );
```

**Code Explanation**:

1. Open data table.
2. Create new window named "Ln".
3. Insert graph box.
4. Set X-axis name to "X(Ln Scale)".
5. Set X-axis scale from 0.1 to 10.
6. Set Y-axis scale logarithmic.
7. Set frame size to 200x200.
8. Set pen color to red.
9. Plot natural log function on Y-axis.
10. Customize Y-axis scale to logarithmic.



### Example 18
> **Summary**: Creates a logarithmic graph with custom scaling, utilizing Graph Builder to plot Y function as log(x) and customize the Y axis scale.

<!-- Keywords: #JMPScriptingLanguage, #GraphBuilder, #CustomScaling, #LogarithmicScale, #PenColor -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tw = New Window( "Ln",
	gb = Graph Box(
		Xname( "X(Ln Scale)" ),
		X Scale( .1, 10 ),
		Y Scale( Log( .1 ), Log( 10 ) ),
		Framesize( 200, 200 ),
		Pen Color( "red" );
		Y Function( Log( x ), x );
	)
);
gb[axisbox( 2 )] << scale( "custom scale", custom scale name( "Ln" ) ) << Min( .1 ) << Max( 10 );
tw;
```

**Code Explanation**:

1. Open data table.
2. Create new window titled "Ln".
3. Add graph box to window.
4. Set X axis name to "X(Ln Scale)".
5. Set X axis scale from 0.1 to 10.
6. Set Y axis scale logarithmic from 0.1 to 10.
7. Set graph size to 200x200.
8. Set pen color to red.
9. Plot Y function as log(x).
10. Customize Y axis scale to logarithmic.



### Example 19
> **Summary**: Creates a graph box in JMP, plotting the log2 function on the Y-axis with customized X-axis scale and color.

<!-- Keywords: #JMPScriptingLanguage, #GraphBox, #LogScale, #Customization, #Visualization -->

**Code**:
```jsl
Open("data_table.jmp");
tw = New Window( "Log2",
	gb = Graph Box(
		Xname( "X(Log2 Scale)" ),
		X Scale( 2 ^ (-10), 2 ^ (10) ),
		Y Scale( -10, 10 ),
		Framesize( 200, 200 ),
		Pen Color( "red" );
		Y Function( Log( x, 2 ), x );
	)
);
gb[axisbox( 2 )] << scale( "custom scale", custom scale name( "log2" ) ) << Min( 2 ^ (-10) ) << Max( 2 ^ (10) );
```

**Code Explanation**:

1. Open data table;
2. Create new window titled "Log2".
3. Add graph box to window.
4. Set X-axis label to "X(Log2 Scale)".
5. Set X-axis scale from 2^-10 to 2^10.
6. Set Y-axis scale from -10 to 10.
7. Set graph size to 200x200.
8. Set pen color to red.
9. Plot log2 function on Y-axis.
10. Customize X-axis scale to log2.



### Example 20
> **Summary**: Creates a graph box with log2 scale in JMP, customizing X-axis and Y-axis scales for visualization.

<!-- Keywords: #JMPScriptingLanguage, #GraphBox, #LogScale, #CustomScaling, #Visualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tw = New Window( "Log2",
	gb = Graph Box(
		Xname( "X(Log2 Scale)" ),
		X Scale( 2 ^ (-10), 2 ^ (10) ),
		Y Scale( -10, 10 ),
		Framesize( 200, 200 ),
		Pen Color( "red" );
		Y Function( Log( x, 2 ), x );
	)
);
gb[axisbox( 2 )] << scale( "custom scale", custom scale name( "log2" ) ) << Min( 2 ^ (-10) ) << Max( 2 ^ (10) );
tw;
```

**Code Explanation**:

1. Open data table;
2. Create new window titled "Log2".
3. Add graph box to window.
4. Set X-axis name to "X(Log2 Scale)".
5. Set X-axis scale from 2^-10 to 2^10.
6. Set Y-axis scale from -10 to 10.
7. Set graph frame size to 200x200.
8. Set pen color to red.
9. Plot Y function as log base 2 of X.
10. Customize X-axis scale to log2.



### Example 21
> **Summary**: Vizualizes logistic probability distribution with a custom graph box, utilizing X-axis scaling and Y-axis quantiles.

<!-- Keywords: #JSLScripting, #LogisticRegression, #GraphBuilder, #CustomVisualization, #DataAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
tw = New Window( "Logistic Prob",
	gb = Graph Box(
		Xname( "X(Logistic Prob Scale)" ),
		X Scale( .001, .999 ),
		Y Scale( Logistic Quantile( .001, 0, 1 ), Logistic Quantile( .999, 0, 1 ) ),
		Framesize( 200, 200 ),
		Pen Color( "red" );
		Y Function( Logistic Quantile( x, 0, 1 ), x );
	)
);
gb[axisbox( 2 )] << scale( "Logistic Prob" ) << Min( .001 ) << Max( .999 );
```

**Code Explanation**:

1. Open data table;
2. Create new window titled "Logistic Prob".
3. Add graph box to window.
4. Set X-axis name.
5. Define X-axis scale range.
6. Define Y-axis scale using logistic quantiles.
7. Set graph size.
8. Set pen color to red.
9. Plot logistic function on Y-axis.
10. Customize Y-axis scale to logistic probability.



### Example 22
> **Summary**: Vizualizes logistic probability scales in a new window, utilizing Graph Builder to plot the logistic function and customize the Y axis scale.

<!-- Keywords: #JMPScriptingLanguage, #GraphBuilder, #LogisticRegression, #Visualization, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tw = New Window( "Logistic Prob",
	gb = Graph Box(
		Xname( "X(Logistic Prob Scale)" ),
		X Scale( .001, .999 ),
		Y Scale( Logistic Quantile( .001, 0, 1 ), Logistic Quantile( .999, 0, 1 ) ),
		Framesize( 200, 200 ),
		Pen Color( "red" );
		Y Function( Logistic Quantile( x, 0, 1 ), x );
	)
);
gb[axisbox( 2 )] << scale( "Logistic Prob" ) << Min( .001 ) << Max( .999 );
tw;
```

**Code Explanation**:

1. Open data table.
2. Create new window.
3. Add graph box.
4. Set X axis name.
5. Set X axis scale.
6. Set Y axis scale using logistic quantile.
7. Set frame size.
8. Set pen color to red.
9. Plot logistic function on Y axis.
10. Customize Y axis scale to logistic probability.



### Example 23
> **Summary**: Creates a normal probability graph, visualizing the distribution of data points with a red pen color and customized Y axis scale.

<!-- Keywords: #JSLScriptingLanguage, #GraphBuilder, #NormalDistribution, #DataVisualization, #Customization -->

**Code**:
```jsl
Open("data_table.jmp");
tw = New Window( "Normal Prob",
	gb = Graph Box(
		Xname( "X(Normal Prob Scale)" ),
		X Scale( .001, .999 ),
		Y Scale( Normal Quantile( .001 ), Normal Quantile( .999 ) ),
		Framesize( 200, 200 ),
		Pen Color( "red" );
		Y Function( Normal Quantile( x ), x );
	)
);
gb[axisbox( 2 )] << scale( "Normal" ) << Min( .001 ) << Max( .999 );
```

**Code Explanation**:

1. Open data table.
2. Create new window titled "Normal Prob".
3. Add graph box to window.
4. Set X axis name.
5. Define X axis scale.
6. Define Y axis scale using normal quantiles.
7. Set graph frame size.
8. Set pen color to red.
9. Plot normal quantile function on Y axis.
10. Customize Y axis scale to normal distribution.



### Example 24
> **Summary**: Creates a normal probability plot with interactive scaling and axis labels, utilizing Graph Builder to visualize the distribution.

<!-- Keywords: #GraphBuilder, #NormalDistribution, #InteractivePlotting, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tw = New Window( "Normal Prob",
	gb = Graph Box(
		Xname( "X(Normal Prob Scale)" ),
		X Scale( .001, .999 ),
		Y Scale( Normal Quantile( .001 ), Normal Quantile( .999 ) ),
		Framesize( 200, 200 ),
		Pen Color( "red" );
		Y Function( Normal Quantile( x ), x );
	)
);
gb[axisbox( 2 )] << scale( "Normal" ) << Min( .001 ) << Max( .999 );
tw;
```

**Code Explanation**:

1. Open data table.
2. Create new window.
3. Initialize graph box.
4. Set X-axis name.
5. Define X-axis scale.
6. Set Y-axis scale using normal quantiles.
7. Set frame size.
8. Change pen color to red.
9. Plot normal quantile function.
10. Adjust Y-axis to normal scale.



### Example 25
> **Summary**: Creates a graph with a square root scale, visualizing the relationship between X and Y variables in a custom window.

<!-- Keywords: #JSLScripting, #GraphBuilder, #CustomScale, #InteractiveVisualization, #DataAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
tw = New Window( "Sqrt",
	gb = Graph Box(
		Xname( "X(Sqrt Scale)" ),
		X Scale( .01, 10 ),
		Y Scale( Sqrt( .01 ), Sqrt( 10 ) ),
		Framesize( 200, 200 ),
		Pen Color( "red" );
		Y Function( Sqrt( x ), x );
	)
);
gb[axisbox( 2 )] << scale( "custom scale", custom scale name( "Sqrt" ) ) << Min( .01 ) << Max( 10 );
```

**Code Explanation**:

1. Open data table.
2. Create new window titled "Sqrt".
3. Add graph box to window.
4. Set X axis name to "X(Sqrt Scale)".
5. Define X scale range from 0.01 to 10.
6. Define Y scale as square root of X range.
7. Set graph size to 200x200.
8. Set pen color to red.
9. Plot Y function as square root of X.
10. Customize Y axis scale to "custom scale".



### Example 26
> **Summary**: Creates a graph with a custom Y-axis scale named 'Sqrt' in JMP, using the Graph Builder platform.

<!-- Keywords: #JMPScriptingLanguage, #GraphBuilder, #CustomScale, #YAxisScaling, #Visualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tw = New Window( "Sqrt",
	gb = Graph Box(
		Xname( "X(Sqrt Scale)" ),
		X Scale( .01, 10 ),
		Y Scale( Sqrt( .01 ), Sqrt( 10 ) ),
		Framesize( 200, 200 ),
		Pen Color( "red" );
		Y Function( Sqrt( x ), x );
	)
);
gb[axisbox( 2 )] << scale( "custom scale", custom scale name( "Sqrt" ) ) << Min( .01 ) << Max( 10 );
tw;
```

**Code Explanation**:

1. Open data table.
2. Create new window named "Sqrt".
3. Add graph box to window.
4. Set X-axis name to "X(Sqrt Scale)".
5. Set X-axis scale from 0.01 to 10.
6. Set Y-axis scale to square root of X-axis range.
7. Set graph size to 200x200.
8. Set pen color to red.
9. Plot Y function as square root of X.
10. Customize Y-axis to use custom scale named "Sqrt".



### Example 27
> **Summary**: Creates a graph box in JMP, visualizing the squared scale of X-axis values with a custom Y-scale and pen color.

<!-- Keywords: #JSLScriptingLanguage, #GraphBuilder, #CustomScale, #PenColor, #Visualization -->

**Code**:
```jsl
Open("data_table.jmp");
tw = New Window( "Squared",
	gb = Graph Box(
		Xname( "X(Squared Scale)" ),
		X Scale( .01, 10 ),
		Y Scale( .01 ^ 2, 10 ^ 2 ),
		Framesize( 200, 200 ),
		Pen Color( "red" );
		Y Function( x ^ 2, x );
	)
);
gb[axisbox( 2 )] << scale( "custom scale", custom scale name( "Squared" ) ) << Min( .01 ) << Max( 10 );
```

**Code Explanation**:

1. Open data table.
2. Create new window named "Squared".
3. Add graph box to window.
4. Set X axis name to "X(Squared Scale)".
5. Set X axis scale from 0.01 to 10.
6. Set Y axis scale from 0.0001 to 100.
7. Set frame size to 200x200.
8. Set pen color to red.
9. Plot Y function as x squared.
10. Customize Y axis scale to "custom scale".



### Example 28
> **Summary**: Creates a graph with a squared scale, plotting y = x^2 function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #GraphBuilder, #CustomScale, #SquaredFunction, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tw = New Window( "Squared",
	gb = Graph Box(
		Xname( "X(Squared Scale)" ),
		X Scale( .01, 10 ),
		Y Scale( .01 ^ 2, 10 ^ 2 ),
		Framesize( 200, 200 ),
		Pen Color( "red" );
		Y Function( x ^ 2, x );
	)
);
gb[axisbox( 2 )] << scale( "custom scale", custom scale name( "Squared" ) ) << Min( .01 ) << Max( 10 );
tw;
```

**Code Explanation**:

1. Open data table;
2. Create new window titled "Squared".
3. Initialize graph box with squared scale.
4. Set X-axis scale from 0.01 to 10.
5. Set Y-axis scale from 0.0001 to 100.
6. Define frame size for graph.
7. Set pen color to red.
8. Plot y = x^2 function.
9. Customize Y-axis scale to "custom scale".
10. Name custom scale "Squared".



### Example 29
> **Summary**: Creates a Weibull probability plot with customized X-axis and Y-axis scales, using Graph Builder to visualize the distribution.

<!-- Keywords: #JMPScriptingLanguage, #GraphBuilder, #WeibullDistribution, #CustomizedAxes, #ProbabilityPlot -->

**Code**:
```jsl
Open("data_table.jmp");
tw = New Window( "Weibull Prob",
	gb = Graph Box(
		Xname( "X(Weibull Prob Scale)" ),
		X Scale( .001, .999 ),
		Y Scale( SEV Quantile( .001, 0, 1 ), SEV Quantile( .999, 0, 1 ) ),
		Framesize( 200, 200 ),
		Pen Color( "red" );
		Y Function( SEV Quantile( x, 0, 1 ), x );
	)
);
gb[axisbox( 2 )] << scale( "Weibull Prob" ) << Min( .001 ) << Max( .999 );
```

**Code Explanation**:

1. Open data table;
2. Create new window named "Weibull Prob".
3. Initialize graph box.
4. Set X-axis name to "Weibull Prob Scale".
5. Define X-axis scale range.
6. Define Y-axis scale using SEV Quantile function.
7. Set frame size to 200x200.
8. Set pen color to red.
9. Plot Y function using SEV Quantile.
10. Configure Y-axis to "Weibull Prob" scale.



### Example 30
> **Summary**: Creates a Weibull probability graph with customized X and Y scales, frame size, and pen color.

<!-- Keywords: #JMPScriptingLanguage, #WeibullDistribution, #GraphBuilder, #Customization, #Visualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tw = New Window( "Weibull Prob",
	gb = Graph Box(
		Xname( "X(Weibull Prob Scale)" ),
		X Scale( .001, .999 ),
		Y Scale( SEV Quantile( .001, 0, 1 ), SEV Quantile( .999, 0, 1 ) ),
		Framesize( 200, 200 ),
		Pen Color( "red" );
		Y Function( SEV Quantile( x, 0, 1 ), x );
	)
);
gb[axisbox( 2 )] << scale( "Weibull Prob" ) << Min( .001 ) << Max( .999 );
tw;
```

**Code Explanation**:

1. Open data table.
2. Create new window titled "Weibull Prob".
3. Add graph box to window.
4. Set X axis name.
5. Define X scale range.
6. Set Y scale using SEV Quantile.
7. Set frame size.
8. Change pen color to red.
9. Plot Y function using SEV Quantile.
10. Set second axis scale to "Weibull Prob".
11. Define axis minimum value.
12. Define axis maximum value.
13. Display the window.



## Function using With Window Handler
### Example 1
> **Summary**: Creates a Fit Y by X window with a custom window handler function, setting the margin to 50 and displaying the current margin.

<!-- Keywords: #JSLScriptingLanguage, #FitYbyX, #WindowHandlerFunction, #MarginSetting, #DisplayingCurrentMargin -->

**Code**:
```jsl
dt = Open("data_table.jmp");
With Window Handler(
	dt << Fit Y By X(),
	Function( {w},
		w << Margin( 50 );
		Show( w << Get Margin );
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Fit Y by X window.
3. Define window handler function.
4. Set window margin to 50.
5. Display current window margin.



### Example 2
> **Summary**: Fits Y by X analysis, setting window margins, and running a Bivariate script to generate reports.

<!-- Keywords: #JSLScriptingLanguage, #DataAnalysis, #WindowManagement, #BivariateAnalysis, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
With Window Handler(
	dt << Fit Y By X(),
	Function( {w},
		w << Margin( 50 );
		Show( w << Get Margin );
	)
);
dt = Open("data_table.jmp");
biv = dt << Run Script( "Bivariate" );
(biv << TopReport) << Margin( 50 );
(biv << TopReport) << Get Margin;
```

**Code Explanation**:

1. Open data_table data
2. Create window handler.
3. Fit Y by X analysis.
4. Set window margin to 50.
5. Show window margin.
6. Reopen data_table data.
7. Run Bivariate script.
8. Set report margin to 50.
9. Get report margin.



### Example 3
> **Summary**: Runs data analysis and visualization by opening a data table, fitting Y by X, setting window margins, and displaying the top report of a Bivariate script.

<!-- Keywords: #JSLScriptingLanguage, #DataAnalysis, #Visualization, #WindowHandling, #BivariateScript -->

**Code**:
```jsl
dt = Open("data_table.jmp");
With Window Handler(
	dt << Fit Y By X(),
	Function( {w},
		w << Margin( 50 );
		Show( w << Get Margin );
	)
);
dt = Open("data_table.jmp");
biv = dt << Run Script( "Bivariate" );
(biv << TopReport) << Margin( 50 );
```

**Code Explanation**:

1. Open data table.
2. Create Fit Y By X analysis.
3. Set window handler function.
4. Adjust window margin to 50.
5. Display current window margin.
6. Reopen data table.
7. Run Bivariate script.
8. Access top report of Bivariate.
9. Set margin to 50 for Bivariate report.



### Example 1
> **Summary**: Runs the renaming process for a JMP data table, printing the old and new names, and subscribing/unsubscribing to rename events.

<!-- Keywords: #JMPScriptingLanguage, #DataTableRenaming, #EventSubscription, #RenameEventHandling, #JSLAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dname = dt << get name;
f = Function( {dtab, tabname},
	Print( "oldname", dname );
	Print( "new name", dtab << get name );
);
dt << Subscribe( "name1", On Rename( f ) );
dt << set name( "Best Class" );
dt << unsubscribe( "name1", onRename );
dt << set name( "Rowdy Class" );
```

**Code Explanation**:

1. Open data table;
2. Get table's original name.
3. Define a function to print names.
4. Subscribe to rename event.
5. Change table name to "Best Class".
6. Unsubscribe from rename event.
7. Change table name to "Rowdy Class".



### Example 2
> **Summary**: Runs the renaming of a data table and triggers a Distribution script upon rename, utilizing JMP's Subscribe feature.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #ScriptAutomation, #RenameEventHandling, #DistributionScriptExecution -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dname = dt << get name;
f = Function( {dtab, tabname},
	Print( "oldname", dname );
	Print( "new name", dtab << get name );
);
dt << Subscribe( "test1", On Rename( f ) );
dt << set name( "Best Class" );
dt << Run Script( "Distribution" );
dt << unsubscribe( "test1", onRename );
dt << set name( "Better Class" );
```

**Code Explanation**:

1. Open data table;
2. Get table's original name.
3. Define a function for renaming.
4. Subscribe to rename event.
5. Rename table to "Best Class".
6. Run Distribution script.
7. Unsubscribe from rename event.
8. Rename table to "Better Class".



### Example 3
> **Summary**: Runs various data table operations, including adding and deleting rows and columns, renaming columns, and saving the table.

<!-- Keywords: #JSLScripting, #DataTableOperations, #JMP, #Automation, #DataManagement -->

**Code**:
```jsl
dt = Open("data_table.jmp");
addRowsFn = Function( {},
	Print( "hello add row" )
);
dt << subscribe( "Test Add", onAddRows( addRowsFn, 3 ) );
deleteRowsFn = Function( {},
	Print( "hello delete row" )
);
dt << subscribe( "Test Delete", onDeleteRows( deleteRowsFn, 3 ) );
addColsFn = Function( {},
	Print( "hello add column" )
);
dt << subscribe( "Test Add", onAddColumns( addColsFn, 2 ) );
deleteColsFn = Function( {},
	Print( "hello delete col" )
);
dt << subscribe( "Test Delete", onDeleteCols( deleteColsFn, 2 ) );
renameColsFn = Function( {},
	Print( "hello rename column" )
);
dt << subscribe( "Test Rename", onRenameColumns( renameColsFn, 3 ) );
saveFn = Function( {},
	Print( "hello save" )
);
dt << subscribe( "Test Save", onSave( saveFn, 3 ) );
closeFn = Function( {},
	Print( "hello close" )
);
```

**Code Explanation**:

1. Open data table.
2. Define function for adding rows.
3. Subscribe to add rows event.
4. Define function for deleting rows.
5. Subscribe to delete rows event.
6. Define function for adding columns.
7. Subscribe to add columns event.
8. Define function for deleting columns.
9. Subscribe to delete columns event.
10. Define function for renaming columns.
11. Subscribe to rename columns event.
12. Define function for saving table.
13. Subscribe to save event.
14. Define function for closing table.



### Example 4
> **Summary**: Opens a data table and subscribing to the 'CrashySub' event upon table open, with an additional function triggered on add columns.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #EventHandling, #TableOpenEvent, #ColumnAddition -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
on tbl open = Function( {dt2},
	dt2 << Subscribe( "CrashySub", On Add Columns( Function( {d2t, cols}, . ) ) )
);
```

**Code Explanation**:

1. Open data table.
2. Define function on table open.
3. Subscribe to "CrashySub" event.
4. Define function on add columns.
5. Capture added columns in `cols`.
6. Execute empty function body.



