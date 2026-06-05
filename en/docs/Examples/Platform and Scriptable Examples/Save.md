# Save

### Example 1
> **Summary**: Saves a data table as two different file formats, Bigclass.v8xpt and Bigclass.xpt.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #FileI/OOperations, #JMP, #ScriptAutomation -->

**Code**:
```jsl
folderPathTmp = "$DESKTOP";
dt = Open("data_table.jmp");
dt << Save( folderPathTmp || "/Bigclass.v8xpt" );
dt << Save( folderPathTmp || "/Bigclass.xpt" );
```

**Code Explanation**:

1. Define `folderPathTmp` variable.
2. Open data table;
3. Save dataset as "Bigclass.v8xpt".
4. Save dataset as "Bigclass.xpt".



### Example 2
> **Summary**: Saves a data table as two different file formats in the desktop folder.

<!-- Keywords: #JSL, #DataManagement, #FileIO, #DesktopFolder, #DataTable -->

**Code**:
```jsl
folderPathTmp = "$DESKTOP";
folderPathTmp = "$DESKTOP";
dt = Open("data_table.jmp");
dt << Save( folderPathTmp || "/Bigclass.v8xpt" );
dt << Save( folderPathTmp || "/Bigclass.xpt" );
```

**Code Explanation**:

1. Define `folderPathTmp` variable.
2. Redefine `folderPathTmp` variable.
3. Open data table;
4. Save dataset as "Bigclass.v8xpt".
5. Save dataset as "Bigclass.xpt".



### Example 3
> **Summary**: Opens and saves a data table as an Excel file.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #ExcelFileOutput, #FileI/OOperations, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Save( "$TEMP/" || "DTsave1a.xls" );
```

**Code Explanation**:

1. Open data table.
2. Save data table as Excel file.



## Save using Set Table Variable
> **Summary**: Configures a JMP data table by setting variables and calculating a conditional expression, then saves the modified dataset as 'test.jmp'.

<!-- Keywords: #JMPScriptingLanguage, #DataTableConfiguration, #ConditionalExpression, #VariableAssignment, #DataSaving -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Set Table Variable( "c0-Int", "Run P/E Fit" );
dt << Set Table Variable( "c1-Irrad", "Run P/E" );
dt << Set Table Variable( "c2-wndspd", "Run P/E Fit" );
dt << Set Table Variable( "c3-Tamb", "Run P/E Fit" );
dt << Set Table Variable( "PE0-Pwr_Rpt_Cond", "Run P/E Fit" );
PECoeffs = [2.12840894867226, -0.000357844059384339, 0.0146036223756786, 0.0199778305064677];
dt << Set Table Variable( "c0-Int", PECoeffs[1] );
dt << Set Table Variable( "c1-Irrad", PECoeffs[2] );
dt << Set Table Variable( "c2-wndspd", PECoeffs[3] );
dt << Set Table Variable( "c3-Tamb", PECoeffs[4] );
dt << Set Table Variable( "PE0-Pwr_Rpt_Cond", 900 * (PECoeffs[1] + (PECoeffs[2] * 900) + (PECoeffs[3] * 2) + (PECoeffs[4] * 20)) );
dt << Save( "$TEMP/test.jmp" );
```

**Code Explanation**:

1. Open data table;
2. Set variable "c0-Int" to "Run P/E Fit".
3. Set variable "c1-Irrad" to "Run P/E".
4. Set variable "c2-wndspd" to "Run P/E Fit".
5. Set variable "c3-Tamb" to "Run P/E Fit".
6. Set variable "PE0-Pwr_Rpt_Cond" to "Run P/E Fit".
7. Define PECoeffs array.
8. Set variable "c0-Int" to first PECoeffs value.
9. Set variable "c1-Irrad" to second PECoeffs value.
10. Set variable "c2-wndspd" to third PECoeffs value.
11. Set variable "c3-Tamb" to fourth PECoeffs value.
12. Calculate and set "PE0-Pwr_Rpt_Cond" using PECoeffs.
13. Save modified dataset as "test.jmp".



