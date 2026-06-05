# Get Property

## Get Property using Set Property
### Example 1
> **Summary**: Configures age and sex property categories for data manipulation, retrieving supercategories for further analysis.

<!-- Keywords: #JSLScriptingLanguage, #DataManipulation, #PropertyCategories, #SuperCategories, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:age << Set Property(
	"Supercategories",
	{Group( "preteen", {12}, Hide ), Group( "teen", {13, 14, 15, 16, 17} ), Group( "Near Adult", {17} )}
);
:sex << Set Property( "Supercategories", {Group( "AllGenders", {"F", "M"} )} );
superAgeProp = :age << Get Property( "Supercategories" );
superGenderProp = :sex << Get Property( "Supercategories" );
```

**Code Explanation**:

1. Open data table.
2. Set age property categories.
3. Set sex property categories.
4. Retrieve age supercategories.
5. Retrieve sex supercategories.



### Example 2
> **Summary**: Sets up a Profit Matrix property for the 'sex' column in a data table, allowing for future analysis and visualization.

<!-- Keywords: #JSLScriptingLanguage, #ProfitMatrix, #DataTableProperty, #GraphBuilder, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:sex << Set Property( "Profit Matrix", {[5 - 1, -1 4, -2 - 2], {"M", "F", "Others"}} );
pmProp = dt:sex << Get Property( "Profit Matrix" );
```

**Code Explanation**:

1. Open data table.
2. Set property for "sex" column.
3. Retrieve "Profit Matrix" property.



