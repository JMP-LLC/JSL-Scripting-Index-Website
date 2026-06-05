# Get Script Groups Names

## Get Script Groups Names using Move Selected scripts
> **Summary**: Runs the organization and renaming of script groups in a JMP data table, allowing for efficient management of complex analyses.

<!-- Keywords: #JMPScriptingLanguage, #ScriptGroupManagement, #DataTableOrganization, #Automation, #JSLScript -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Move Selected scripts(
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts", "Graph Builder Line Chart", "Graph Builder Heat Map"},
	to first
);
dt << get script groups names();
dt << group scripts( "First Group", {"Distribution", "Bivariate", "Oneway"} );
dt << rename script group( "First Group", "Group of Scripts" );
dt << ungroup scripts( "Group of Scripts" );
```

**Code Explanation**:

1. Open data table.
2. Move selected scripts to first.
3. Get script groups names.
4. Group scripts into "First Group".
5. Rename "First Group" to "Group of Scripts".
6. Ungroup "Group of Scripts".



