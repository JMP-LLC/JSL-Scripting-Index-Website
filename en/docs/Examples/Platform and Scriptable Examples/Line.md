# Line

## Line using Log Capture
> **Summary**: Analyze and visualize acceleration factor profiler results, including fitting lognormal distributions and extracting maximum values from comparisons.

<!-- Keywords: #JMPScriptingLanguage, #AccelerationFactorProfiler, #LognormalDistribution, #DataAnalysis, #Visualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Log Capture( flbx = dt << Run Script( "Fit Life by X" ) );
flbx << Fit Lognormal;
af1 = Report( flbx )["Comparisons"]["Acceleration Factor Profiler"][AxisBox( 1 )];
af2 = Report( flbx )["Comparisons"]["Acceleration Factor Profiler"][AxisBox( 2 )];
af3 = Report( flbx )["Weibull Results"]["Acceleration Factor Profiler"][AxisBox( 1 )];
af4 = Report( flbx )["Lognormal Results"]["Acceleration Factor Profiler"][AxisBox( 1 )];
b1 = af1 << get max;
b2 = af2 << get max;
flbx << Time Acceleration Baseline( 30 );
af1 = Report( flbx )["Comparisons"]["Acceleration Factor Profiler"][AxisBox( 1 )];
af2 = Report( flbx )["Comparisons"]["Acceleration Factor Profiler"][AxisBox( 2 )];
af3 = Report( flbx )["Weibull Results"]["Acceleration Factor Profiler"][AxisBox( 1 )];
af4 = Report( flbx )["Lognormal Results"]["Acceleration Factor Profiler"][AxisBox( 1 )];
```

**Code Explanation**:

1. Open table.
2. Run "Fit Life by X".
3. Fit Lognormal distribution.
4. Extract Acceleration Factor Profiler for Comparisons.
5. Extract Acceleration Factor Profiler for Comparisons (Axis 2).
6. Extract Acceleration Factor Profiler for Weibull Results.
7. Extract Acceleration Factor Profiler for Lognormal Results.
8. Get maximum value from Axis 1 of Comparisons.
9. Get maximum value from Axis 2 of Comparisons.
10. Set Time Acceleration Baseline to 30.



