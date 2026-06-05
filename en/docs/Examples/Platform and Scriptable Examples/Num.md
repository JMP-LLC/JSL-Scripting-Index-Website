# Num

## Num using Run Script
> **Summary**: Extracts degradation quantile profiler, crossing time distribution profiler, and crossing time quantile profiler text from a destructive degradation fit report.

<!-- Keywords: #JSLScriptingLanguage, #DestructiveDegradationFit, #ReportExtraction, #QuantileProfiler, #CrossingTimeDistribution -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Run Script( "Destructive Degradation Fit" );
rpt = obj << report;
degProf = Num( rpt[Outline Box( "Degradation Quantile Profiler" )][Text Box( 6 )] << get text );
crssProbProf = Num( rpt[Outline Box( "Crossing Time Distribution Profiler" )][Text Box( 6 )] << get text );
crssTmProf = Num( rpt[Outline Box( "Crossing Time Quantile Profiler" )][Text Box( 5 )] << get text );
```

**Code Explanation**:

1. Open table.
2. Run destructive degradation fit.
3. Get report object.
4. Extract degradation quantile profiler text.
5. Extract crossing time distribution profiler text.
6. Extract crossing time quantile profiler text.



