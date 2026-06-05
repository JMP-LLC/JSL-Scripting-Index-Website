# Data Table Box

## Data Table Box using New Window
### Example 1
> **Summary**: Process of saving a data table as a PDF file to a specified folder path.

<!-- Keywords: #JSLScriptingLanguage, #DataTable, #PDFExport, #FolderPath, #Automation -->

**Code**:
```jsl
folderPathTmp = "$DESKTOP";
dt = Open("data_table.jmp");
win = New Window( "temp", Data Table Box( dt ) );
win << Save pdf( folderPathTmp || "\S1588766.PDF" );
win << Close window;
```

**Code Explanation**:

1. Set folder path.
2. Open data table.
3. Create new window.
4. Add data table box.
5. Save window as PDF.
6. Close window.



### Example 2
> **Summary**: Creates a new window with a data table box, displaying big class data.

<!-- Keywords: #JSLScriptingLanguage, #NewWindow, #DataTableView, #BigClassData, #JMP -->

**Code**:
```jsl
bc = Open("data_table.jmp");
w = New Window( "test", Data Table Box( bc ) );
```

**Code Explanation**:

1. Open data table;
2. Create new window.
3. Add data table box.
4. Display big class data.



