# Time Series

## Example 1
> **Summary**: Perform Time Series X11 decomposition of a dataset containing monthly sales data using the Date column as the time variable.

<!-- Keywords: #TimeSeries, #X11 -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Time Series/Monthly Sales.jmp");
// Time Series X11
Time Series(
	X( :Date ),
	Y( :Sales ),
	X11( Additive )
);
```

## Example 2
> **Summary**: Detrend a time series dataset by removing both linear trend and seasonal cycle with a 12-month cycle.

<!-- Keywords: #TimeSeries, #RemoveCycle, #RemoveLinearTrend -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Time Series/Monthly Sales.jmp");
// Time Series Detrended
Time Series(
	X( :Date ),
	Y( :Sales ),
	Remove Linear Trend(
		Remove Cycle(
			Units per Cycle( 12 ),
			Has Constant( 0 )
		)
	)
);
```

## Example 3
> **Summary**: Analyze time series data using variogram and seasonal ARIMA models with specified parameters.

<!-- Keywords: #ARIMA, #SeasonalARIMA, #TimeSeries, #Intercept, #NoIntercept -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Time Series/Seriesg.jmp");
// Time Series
Time Series(
	Y( :Log Passengers ),
	Variogram( 1 ),
	Seasonal ARIMA(
		0,
		1,
		1,
		0,
		1,
		1,
		12,
		No Intercept( 1 )
	)
);
```

## Example 4
> **Summary**: Compute the Spectral Density for a Time Series Analysis

<!-- Keywords: #TimeSeries, #Density, #SpectralDensity -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Wolfer Sunspot.jmp");
// Spectral Density
Time Series(
	Y( :wolfer ),
	Spectral Density( 1 )
);
```

