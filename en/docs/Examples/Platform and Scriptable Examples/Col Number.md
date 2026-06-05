# Col Number

## Col Number using New Column
> **Summary**: Prepares data by creating new columns with numerical values from categorical variables, utilizing the Col Number formula.

<!-- Keywords: #DataPreprocessing, #JSLScripting, #ColumnCreation, #NumericalValues, #CategoricalVariables -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:name[[1, 3, 8]] = "";
dt:height[[3, 7, 11]] = .;
New Column( "n1", Formula( Col Number( :height ) ) );
New Column( "n2", Formula( Col Number( :name ) ) );
New Column( "n3", Formula( Col Number( :height, :sex ) ) );
New Column( "n4", Formula( Col Number( :name, :sex ) ) );
```

**Code Explanation**:

1. Open data table.
2. Clear values in name column.
3. Set height values to missing.
4. Create new column n1.
5. Apply Col Number formula to height.
6. Create new column n2.
7. Apply Col Number formula to name.
8. Create new column n3.
9. Apply Col Number formula to height and sex.
10. Create new column n4.
11. Apply Col Number formula to name and sex.



