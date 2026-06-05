# Manage Limits

> **Summary**: Generates a tabulated report with grouping columns by managing limits for pH, Salt Concentration, and Moisture Content across different Cheese Types.

<!-- Keywords: #JSLScriptingLanguage, #ManageLimits, #GroupingColumns, #TabulationReport, #DataManagement -->

**Code**:
```jsl
// Manage Limits
// Open data table
dt = Open("data_table.jmp");
// Manage Limits
Manage Limits(
	Process Variables(
		:pH, :Salt Concentration,
		:Moisture Content
	),
	Grouping( :Cheese Type )
);
```

**Code Explanation**:

1. Open data table.
2. Set process variables.
3. Group by Cheese Type.
4. Manage limits for pH.
5. Manage limits for Salt Concentration.
6. Manage limits for Moisture Content.



