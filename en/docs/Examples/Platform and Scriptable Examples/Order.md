# Order

## Order using Set Property
> **Summary**: Cutomizes value order for height in a data table, allowing for tailored visualization and analysis.

<!-- Keywords: #JSLScripting, #DataTableCustomization, #ValueOrdering, #GraphBuilder, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:height << Set Property(
	"Value Order",
	{Custom Order( {51, 52, 55, 56, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70} ), Common Order( 0 )}
);
```

**Code Explanation**:

1. Open data table.
2. Set custom value order for height.



