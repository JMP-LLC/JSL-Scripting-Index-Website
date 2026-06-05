# Surface Plot

> **Summary**: Create a three-dimensional surface plot for a CES Production Function model using the GP Fit and NL Fit columns against log($ value).

<!-- Keywords: #Response, #SurfacePlot, #columns, #DatapointsChoice3, #Format -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Nonlinear Examples/CES Production Function.jmp");
// Surface Plot
Surface Plot(
	Columns(
		:GP Fit, :NL Fit,
		:"log($ value)"n
	),
	Lock Z Scale( 1 ),
	Shine Choice2( "Both sides" ),
	Datapoints Choice3( "Points" ),
	XRotate( -66.3468993855009 ),
	YRotate( 0.547170416692303 ),
	ZRotate( 40.7073204987852 ),
	Formula( "GP Fit", "NL Fit" ),
	Response(
		"log($ value)", "log($ value)",
		:"log($ value)"n
	),
	SetVariableAxis(
		GP Fit,
		Axis Data(
			{Scale( "Linear" ),
			Format( "Best" ), Min( -6 ),
			Max( 1 ), Inc( 1 )}
		)
	),
	SetVariableAxis(
		NL Fit,
		Axis Data(
			{Scale( "Linear" ),
			Format( "Best" ), Min( -6 ),
			Max( 1 ), Inc( 1 )}
		)
	)
);
```

