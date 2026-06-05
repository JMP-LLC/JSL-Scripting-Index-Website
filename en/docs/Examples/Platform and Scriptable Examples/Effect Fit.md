# Effect Fit

## Effect Fit using  Preferences
> **Summary**: Configures effect fit method and detailed comparisons for a data table, enabling users to visualize and analyze results.

<!-- Keywords: #JMPScriptingLanguage, #Preferences, #EffectFitMethod, #DetailedComparisons, #DataTableAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
 Preferences( Effect Fit( LSMeans Student's t( 1 ) ) );
 Preferences( LS Means Comparisons( Detailed Comparisons( 1 ) ) );
```

**Code Explanation**:

1. Open data table.
2. Set effect fit method.
3. Enable detailed comparisons.



