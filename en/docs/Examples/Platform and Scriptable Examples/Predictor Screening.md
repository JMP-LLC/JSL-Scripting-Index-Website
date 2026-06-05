# Predictor Screening

> **Summary**: Runs the Predictor Screening analysis process, selecting column 12 and deleting columns before redoing the analysis.

<!-- Keywords: #PredictorScreening, #DataManipulation, #JMPScriptingLanguage, #ColumnSelection, #AnalysisRedo -->

**Code**:
```jsl
dt = Open("data_table.jmp");
ps = dt << Predictor Screening( Y( :Name( "Banding?" ) ), X( 7 :: 32 ) );
Column( dt, 12 ) << Set Selected( 1 );
dt << Delete Columns;
ps2 = ps << Redo Analysis;
ps << close window;
ps2 << close window;
```

**Code Explanation**:

1. Open data table;
2. Run Predictor Screening analysis.
3. Select column 12.
4. Delete selected columns.
5. Redo Predictor Screening analysis.
6. Close first Predictor Screening window.
7. Close second Predictor Screening window.



