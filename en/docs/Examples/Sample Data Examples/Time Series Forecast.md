# Time Series Forecast

> **Summary**: Forecast time series data by applying the Time Series Forecast function to the specified Y variable, grouped by the Series variable over the Time variable.

<!-- Keywords: #TimeSeriesForecast, #Forecast, #Grouping, #Time -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Time Series/M3C Quarterly.jmp");
// Time Series Forecast of Data
Time Series Forecast(
	Y( :Y ),
	Grouping( :Series ),
	Time( :Time )
);
```

