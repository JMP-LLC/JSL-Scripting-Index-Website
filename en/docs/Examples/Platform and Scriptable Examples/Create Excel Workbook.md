# Create Excel Workbook

## Create Excel Workbook using If
> **Summary**: Creates and saves a data table, followed by the generation of an Excel workbook with two tables.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #ExcelWorkbookGeneration, #FileOperations, #-Independent -->

**Code**:
```jsl
folderPathTmp = "$DESKTOP";
isCreate = 1;
If( isCreate == 1,
	dt = Open("data_table.jmp");
	dt << Save( folderPathTmp || "/b.xlsx" );
	result = File Exists( folderPathTmp || "/b.xlsx" );
	dt << Close Window;
);
dt1 = Open("data_table.jmp");
dt2 = Open("data_table2.jmp");
Create Excel Workbook( folderPathTmp || "/S1561873.xlsx", {"data_table", "data_table2"}, {"BC", "Dia"} );
```

**Code Explanation**:

1. Set folder path to desktop.
2. Check if creation flag is set.
3. Open data table;
4. Save table as "b.xlsx".
5. Verify file existence.
6. Close table window.
7. Reopen "data_table.jmp" table.
8. Open data table;
9. Create Excel workbook with tables.
10. Name sheets "data_table" and "data_table2".



## Create Excel Workbook using Save
> **Summary**: Runs data manipulation and export to Excel, selecting rows 5 to end, deleting them, and creating a new workbook.

<!-- Keywords: #JSLScriptingLanguage, #DataManipulation, #ExcelExport, #RowSelection, #DeleteRows -->

**Code**:
```jsl
dt = Open("data_table.jmp");
folderPathTmp = "$DESKTOP/";
dt << Save( folderPathTmp || "Save.xlsx" );
Create Excel Workbook( folderPathTmp || "Create Excel Workbook.xlsx", {dt}, {"#1"} );
dt << Select Rows( 5 :: (N Rows( dt )) ) << Delete Rows();
dt << Save( folderPathTmp || "Save.xlsx" );
Create Excel Workbook( folderPathTmp || "Create Excel Workbook.xlsx", {dt}, {"#1"} );
```

**Code Explanation**:

1. Open data table;
2. Set desktop path.
3. Save dataset as Excel.
4. Create Excel workbook.
5. Select rows 5 to end.
6. Delete selected rows.
7. Save modified dataset.
8. Create Excel workbook again.



> **Summary**: Creates an Excel workbook from a JMP data table, saving it to the desktop with a specified file name.

<!-- Keywords: #JMPScriptingLanguage, #CreateExcelWorkbook, #DataTable, #FilePath, #Desktop -->

**Code**:
```jsl
folderPathTmp = "$DESKTOP";
dt = Open("data_table.jmp");
Create Excel Workbook( folderPathTmp || "/JMP-13500.xlsx", {dt}, {"\!""} );
```

**Code Explanation**:

1. Set `folderPathTmp` to desktop.
2. Open data table;
3. Create Excel workbook.
4. Save workbook to desktop.
5. Include "data_table.jmp" data.
6. Use double quotes in file name.



