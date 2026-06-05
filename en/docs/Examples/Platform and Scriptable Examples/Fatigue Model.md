# Fatigue Model

> **Summary**: Creates and analyzes a fatigue model, generating estimates, reports, and fitting information for a data table.

<!-- Keywords: #JMPScriptingLanguage, #FatigueModel, #DataAnalysis, #Estimation, #Reporting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fatigue Model(
	N( :Cycles ),
	S( :Stress ),
	Censor( :Censoring Indicator ),
	Censor Code( "Runout" ),
	Fit Model( "Box-Cox Loglinear Sigma", "Lognormal" )
);
getEst = obj << get estimates;
rpt = obj << report;
fitInfo = obj << get fitting information();
scales = ((fitInfo << get values)[1]) << get values;
modCompEst = (rpt[Outline Box( "Model Comparisons" )][Table Box( 1 )] << get as matrix);
modCompTxt = (rpt[Outline Box( "Model Comparisons" )][Text Box( 1 )] << get text);
```

**Code Explanation**:

1. Open data table;
2. Create Fatigue Model object.
3. Set cycles as N.
4. Set stress as S.
5. Set censoring indicator.
6. Define censor code as "Runout".
7. Fit models: Box-Cox Loglinear Sigma, Lognormal.
8. Retrieve estimates.
9. Generate report.
10. Get fitting information.



