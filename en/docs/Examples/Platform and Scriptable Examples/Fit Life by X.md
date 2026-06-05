# Fit Life by X

## Fit Life By X 
> **Summary**: Fits a life table by X, selecting nested model tests, and configuring window elements to interact with the results.

<!-- Keywords: #JMPScriptingLanguage, #LifeTableAnalysis, #NestedModelTests, #WindowElements, #InteractiveDataExploration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Life By X( Y( :Hours ), Censor( :Censor ), Nested Model Tests( 1 ) );
wn = Window( "Fit Life by X" );
wn[ListBoxBox( 1 )] << set selected( 2 );
wn[Button Box( 2 )] << click;
neb = wn[Number Edit Box( 1 )];
neb << set( 60 );
wn[Combo Box( 1 )] << Set( 1 );
wn[Combo Box( 2 )] << Set( 2 );
wn[Button Box( 6 )] << Click();
txt = (Current Report()["Comparisons"]["Acceleration Factor Profiler"] << sib) << get text;
```

**Code Explanation**:

1. Open table.
2. Fit life by X.
3. Select nested model tests.
4. Get window.
5. Select item in list box.
6. Click button.
7. Set number edit box value.
8. Set combo box value.
9. Set combo box value.
10. Click button.



> **Summary**: Configures Fit Life by X analysis with a custom confidence interval method, disabling Wald intervals globally.

<!-- Keywords: #FitLifeByX, #JMPScriptingLanguage, #ConfidenceInterval, #Preferences, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Life by X();
For( i = N Items( Window() ), i >= 1, i--,
	lnchWin = (Window()[i]);
	winTtl = lnchWin << get window title;
	If( winTtl == "Fit Life by X",
		confIntMeth = lnchWin[Combo Box( 3 )] << get text;
		Break();
	);
);
Set  Preferences( Fit Life by X( Confidence Interval Method( "Wald", <<Off ) ) );
```

**Code Explanation**:

1. Open data table.
2. Run Fit Life by X analysis.
3. Loop through all windows.
4. Get current window title.
5. Check if title matches "Fit Life by X".
6. Retrieve confidence interval method.
7. Break loop on match.
8. Set platform preferences globally.
9. Disable Wald confidence interval method.



