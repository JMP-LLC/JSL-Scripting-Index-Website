# And

## And using Select Where
> **Summary**: Selects rows in a data table based on specific conditions, filtering out records with weight less than 120 and height less than 60.

<!-- Keywords: #JSLScriptingLanguage, #DataTableFiltering, #ConditionalSelection, #WeightandHeightAnalysis, #JMPDataManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Where( And( :weight >= 120, :height >= 60 ) );
```

**Code Explanation**:

1. Open data table;
2. Select rows where weight ‚â• 120.
3. Select rows where height ‚â• 60.



