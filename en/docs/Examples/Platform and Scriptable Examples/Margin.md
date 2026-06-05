# Margin

## Margin using Run Script
> **Summary**: Creates a bivariate report with customized margin settings, utilizing the Run Script function to execute the Bivariate script.

<!-- Keywords: #JMPScriptingLanguage, #BivariateAnalysis, #PathDiagram, #ReportCustomization, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = dt << Run Script( "Bivariate" );
(biv << TopReport) << Margin( 50 );
```

**Code Explanation**:

1. Open data table.
2. Run Bivariate script.
3. Access top report.
4. Set margin to 50.



