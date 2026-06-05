# Exp

## Exp using New Window
### Example 1
> **Summary**: Creates a new window with a graph box that plots an exponential function on the Y-axis, utilizing custom scale properties and pen color.

<!-- Keywords: #JMPScriptingLanguage, #GraphBox, #CustomScale, #PenColor, #ExponentialFunction -->

**Code**:
```jsl
Open("data_table.jmp");
tw = New Window( "Exp",
	gb = Graph Box(
		Xname( "X(Exp Scale)" ),
		X Scale( -10, 3 ),
		Y Scale( Exp( -10 ), Exp( 3 ) ),
		Framesize( 200, 200 ),
		Pen Color( "red" );
		Y Function( Exp( x ), x );
	)
);
gb[axisbox( 2 )] << scale( "custom scale", custom scale name( "Exp" ) ) << Min( -10 ) << Max( 3 );
```

**Code Explanation**:

1. Open data table.
2. Create new window titled "Exp".
3. Initialize graph box.
4. Set X-axis name.
5. Define X-axis scale range.
6. Define Y-axis exponential scale range.
7. Set graph size.
8. Set pen color to red.
9. Plot exponential function on Y-axis.
10. Customize Y-axis scale properties.



### Example 2
> **Summary**: Creates a graph box with an exponential function, customized Y-axis scale, and frame size in JMP.

<!-- Keywords: #JMPScriptingLanguage, #GraphBox, #ExponentialFunction, #CustomYAxisScale, #FrameSize -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tw = New Window( "Exp",
	gb = Graph Box(
		Xname( "X(Exp Scale)" ),
		X Scale( -10, 3 ),
		Y Scale( Exp( -10 ), Exp( 3 ) ),
		Framesize( 200, 200 ),
		Pen Color( "red" );
		Y Function( Exp( x ), x );
	)
);
gb[axisbox( 2 )] << scale( "custom scale", custom scale name( "Exp" ) ) << Min( -10 ) << Max( 3 );
tw;
```

**Code Explanation**:

1. Open table.
2. Create new window.
3. Initialize graph box.
4. Set X-axis name.
5. Set X-axis scale.
6. Set Y-axis scale.
7. Set frame size.
8. Set pen color.
9. Plot exponential function.
10. Customize Y-axis scale.



