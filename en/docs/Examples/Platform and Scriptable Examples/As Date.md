# As Date

## As Date using Files In Directory
> **Summary**: Process of finding and opening the newest file in a specified directory, excluding files with a specific extension.

<!-- Keywords: #JSLScriptingLanguage, #FileManagement, #DirectorySearch, #DataRetrieval, #Automation -->

**Code**:
```jsl
Names Default To Here( 1 );
searchext = "jmp"; //extension to look for
searchfolder = "$DESKTOP"; //place to search
lstExtensions = {};
lstDates = {};
lstFiles = Files In Directory( searchfolder );
For Each( {i, j}, lstFiles,
	lstExtensions[j] = Char( Right( i, 3 ) );
	lstDates[j] = As Date( Creation Date( searchfolder || "/" || Char( i ) ) );
);
dt = New Table( "Files",
	New Column( "Name", character, set values( lstFiles ) ),
	New Column( "ext", character, set values( lstExtensions ) ),
	New Column( "Date", numeric, set values( Matrix( lstDates ) ) )
);
dt << Select where( :ext != searchext );
dt << Delete Rows;
newest = Col Min( :Date );
newfile = searchfolder || "/" || :Name[dt << Get Rows Where( :Date == newest )][1];
Close( dt, no save );
Open( newfile );
```

**Code Explanation**:

1. Set default names.
2. Define file extension.
3. Define search folder.
4. Initialize extensions list.
5. Initialize dates list.
6. Get files in directory.
7. Loop through each file.
8. Extract file extension.
9. Get creation date.
10. Create table with files.
11. Select non-matching extensions.
12. Delete non-matching rows.
13. Find minimum date.
14. Get newest file name.
15. Close table without saving.
16. Open newest file.



