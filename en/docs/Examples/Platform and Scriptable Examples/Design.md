# Design

## Design using N Row
> **Summary**: Process of counting rows in a data table, extracting column matrices, and designing matrices for tenderizer and roasting time values.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #MatrixDesign, #RowCounting, #ColumnMatrixExtraction -->

**Code**:
```jsl
dt = Open("data_table.jmp");
nobs = N Row( dt );
y = dt:y << getasmatrix;
tend = dt:tenderizer << get values;
xtend = Design( tend );
roast = dt:roasting time << get values;
xroast = Design( roast );
```

**Code Explanation**:

1. Open data table;
2. Count rows in dataset.
3. Extract 'y' column matrix.
4. Get 'tenderizer' values.
5. Design matrix for 'tenderizer'.
6. Get 'roasting time' values.
7. Design matrix for 'roasting time'.



