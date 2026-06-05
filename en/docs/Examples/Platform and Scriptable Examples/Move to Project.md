# Move to Project

## Move to Project using Run Script
> **Summary**: Creates and configures a Repeated Measures Model in JMP, allowing for the analysis of data with multiple measurements.

<!-- Keywords: #JMPScriptingLanguage, #RepeatedMeasuresModel, #DataAnalysis, #PathDiagrams, #SEM -->

**Code**:
```jsl
dtAn = Open("data_table.jmp");
objAn_RMM = dtAn << Run Script( "Repeated Measures Model" );
Move to Project( Windows( {dtAn} ) );
```

**Code Explanation**:

1. Open data table;
2. Run Repeated Measures Model script.
3. Move dataset to project.



> **Summary**: Process of opening a data table and moving it to a project in JMP.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #ProjectNavigation, #ScriptAutomation, #JMPBasics -->

**Code**:
```jsl
dtCit = Open("data_table.jmp");
Move to Project( Windows( {dtCit} ) );
```

**Code Explanation**:

1. Open data table.
2. Move data table to project.



