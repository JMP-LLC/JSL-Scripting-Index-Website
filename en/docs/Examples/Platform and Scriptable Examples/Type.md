# Type

## Set Modeling Type 
### Example 1
> **Summary**: Sets categorical variables for a data table, specifying the modeling type as Ordinal or Nominal for 'sibling ages', 'sports', 'countries visited', and 'family cars'.

<!-- Keywords: #JMPScriptingLanguage, #CategoricalVariables, #DataTable, #ModelingType, #JSLSyntax -->

**Code**:
```jsl
// Set Categorical
// Open data table
dt = Open("data_table.jmp");
// Set Categorical
:sibling ages <<
Set Modeling Type( "Ordinal" );
:sports << Set Modeling Type( "Nominal" );
:countries visited <<
Set Modeling Type( "Nominal" );
:family cars <<
Set Modeling Type( "Nominal" );
```

**Code Explanation**:

1. Open data table.
2. Set sibling ages as Ordinal.
3. Set sports as Nominal.
4. Set countries visited as Nominal.
5. Set family cars as Nominal.



### Example 2
> **Summary**: Sets multiple response variables for sibling ages, sports, countries visited, and family cars in a data table, enabling further analysis and modeling.

<!-- Keywords: #MultipleResponse, #DataTable, #JMPScriptingLanguage, #SetModelingType, #AnalyticalModeling -->

**Code**:
```jsl
// Set Multiple Response
// Open data table
dt = Open("data_table.jmp");
// Set Multiple Response
:sibling ages <<
Set Modeling Type( "Multiple Response" );
:sports <<
Set Modeling Type( "Multiple Response" );
:countries visited <<
Set Modeling Type( "Multiple Response" );
:family cars <<
Set Modeling Type( "Multiple Response" );
```

**Code Explanation**:

1. Open data table.
2. Set sibling ages as multiple response.
3. Set sports as multiple response.
4. Set countries visited as multiple response.
5. Set family cars as multiple response.



### Example 3
> **Summary**: Process of setting the modeling type for a date column in a JMP data table, enabling further analysis and exploration.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #DateColumnModeling, #OrdinalDataType, #JSLScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Date << Set Modeling Type( "Ordinal" );
```

**Code Explanation**:

1. Open data table;
2. Set date column modeling type.



> **Summary**: Sets sex variable modeling type to 'None' in a JMP data table.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #ModelingType, #SexVariable, #Automation -->

**Code**:
```jsl
Open("data_table.jmp");
:sex << set modeling type( "None" );
```

**Code Explanation**:

1. Open data table;
2. Set sex variable modeling type.



## Data Type 
> **Summary**: Opens a data table and changes the 'Price' column's data type to character.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ColumnDataType, #JMPScripting, #DataManagement -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Price << Data Type( "Character" );
```

**Code Explanation**:

1. Open data table.
2. Change Price data type.



