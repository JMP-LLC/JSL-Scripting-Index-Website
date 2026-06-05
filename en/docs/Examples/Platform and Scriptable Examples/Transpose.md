# Transpose

### Example 1
> **Summary**: Generates and visualizes the missing data pattern for a specified set of columns in a JMP data table, utilizing the Transpose function to reorganize the data.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManipulation, #MissingDataPattern, #TransposeFunction, #DataVisualization -->

**Code**:
```jsl
// Transpose by
// Open data table
dt = Open("data_table.jmp");
// Transpose by
Current Data Table() <<
Transpose(
	columns( :subject, :miles ),
	By( :species ),
	Label( :season )
);
```

**Code Explanation**:

1. Open table.
2. Transpose data.



### Example 2
> **Summary**: Generates and visualizes the missing data pattern for a specified set of columns in a JMP data table, utilizing the Transpose function with label.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #MissingDataPattern, #TransposeFunction, #JMPScripting -->

**Code**:
```jsl
// Transpose with label
// Open data table
dt = Open("data_table.jmp");
// Transpose with label
Current Data Table() <<
Transpose(
	Columns( :plastic, :tin, :gold ),
	Label( :item )
);
```

**Code Explanation**:

1. Open table.
2. Transpose columns.
3. Use item as label.



## Transpose using Data Table
> **Summary**: Runs the transformation and labeling of a data table, creating new columns for height squared and weight squared, while also performing a by-sex transformation and extracting first names.

<!-- Keywords: #JSLScriptingLanguage, #DataTransformation, #ByGroup, #LabelingColumns, #Transpose -->

**Code**:
```jsl
Open("data_table.jmp");
Data Table("data_table") << Transpose(
	columns( Transform Column( "height^2", Formula( :height * :height ) ), Transform Column( "weight^2", Formula( :weight * :weight ) ) ),
	By( Transform Column( "Last[sex]", Character, Formula( Word( -1, :sex ) ) ) ),
	Label( Transform Column( "First[name] 2", Character, Formula( Word( 1, :name ) ) ) ),
	Label column name( "name" ),
	Output Table( "Transpose of data_table" )
);
```

**Code Explanation**:

1. Open data table.
2. Transpose data table.
3. Create height squared column.
4. Create weight squared column.
5. By sex transformation.
6. Extract first name.
7. Label columns.
8. Name label column.
9. Output transposed table.
10. Save as "Transpose of data_table".



