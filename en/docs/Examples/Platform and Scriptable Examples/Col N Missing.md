# Col N Missing

## Col N Missing using New Column
> **Summary**: Runs data cleaning and feature engineering by creating new columns for missing values in the 'height' and 'name' variables, utilizing JSL scripting.

<!-- Keywords: #JSLScripting, #DataCleaning, #FeatureEngineering, #MissingValues, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:name[[1, 3, 8]] = "";
dt:height[[3, 7, 11]] = .;
New Column( "n1", Formula( Col N Missing( :height ) ) );
New Column( "n2", Formula( Col N Missing( :name ) ) );
New Column( "n3", Formula( Col N Missing( :height, :sex ) ) );
New Column( "n4", Formula( Col N Missing( :name, :sex ) ) );
```

**Code Explanation**:

1. Open data table;
2. Set name values to empty for rows 1, 3, 8.
3. Set height values to missing for rows 3, 7, 11.
4. Create column n1 with missing count of height.
5. Create column n2 with missing count of name.
6. Create column n3 with missing count of height and sex.
7. Create column n4 with missing count of name and sex.



