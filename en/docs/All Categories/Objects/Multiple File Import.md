# Multiple File Import



## Associated Constructors

### Multiple File Import

**Syntax:** mfiObj = Multiple File Import();

**Description:** Creates a Multiple File Import object; the object accepts messages to set a folder, filter files, and import. To bring up a dialog use the "Create Window" message. To immediately import use the "Import Data" message which will return a list of the tables that were created.

```jsl

// use the save-script-to-script-window button // in the MFI dialog to see more messages// for filtering files and controlling the importMultiple File Import(	<<Set Folder( "$DESKTOP" ),	<<Set Name Filter( "*.csv;" ),	<<Set Name Enable( 1 )) << Create Window;

```

## Item Messages

### Create Window

**Syntax:** obj &lt;&lt; Create Window

**Description:** Bring up a window with the current settings.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << set folder( "$sample_import_data" );mfi << create window();

```

### Get Add File Date Column

**Syntax:** obj &lt;&lt; Get Add File Date Column

**Description:** Returns 1 if the imported table has a column for the name of the file the row was imported from.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set Add File Date Column( 1 );mfi << Get Add File Date Column();

```

### Get Add File Name Column

**Syntax:** obj &lt;&lt; Get Add File Name Column

**Description:** Returns 1 if the imported table has a column for the name of the file the row was imported from.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set Add File Name Column( 1 );mfi << Get Add File Name Column();

```

### Get Add File Size Column

**Syntax:** obj &lt;&lt; Get Add File Size Column

**Description:** Returns 1 if the imported table will have a column for the size of the file the row was imported from.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set Add File Size Column( 1 );mfi << Get Add File Size Column();

```

### Get CSV Allow Numeric

**Syntax:** obj &lt;&lt; Get CSV Allow Numeric

**Description:** Returns 1 if numeric columns will be created from apparent numeric data.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV Allow Numeric;

```

### Get CSV EOF Comma

**Syntax:** obj &lt;&lt; Get CSV EOF Comma

**Description:** Set to 1 to use a comma to separate fields that will be used to create different columns.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV EOF Comma();

```

### Get CSV EOF Other

**Syntax:** obj &lt;&lt; Get CSV EOF Other

**Description:** Set to the value that separates fields that will be used to create different columns.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV EOF Other();

```

### Get CSV EOF Space

**Syntax:** obj &lt;&lt; Get CSV EOF Space

**Description:** Set to 1 to use a space to separate fields that will be used to create different columns.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV EOF Space();

```

### Get CSV EOF Spaces

**Syntax:** obj &lt;&lt; Get CSV EOF Spaces

**Description:** Set to 1 to use a spaces to separate fields that will be used to create different columns.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV EOF Spaces();

```

### Get CSV EOF Tab

**Syntax:** obj &lt;&lt; Get CSV EOF Tab

**Description:** Set to 1 to use a tab to separate fields that will be used to create different columns.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV EOF TAb();

```

### Get CSV EOL CR

**Syntax:** obj &lt;&lt; Get CSV EOL CR

**Description:** Returns 1 if using CR as the value that separates lines that will be used to create different rows.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV EOL CR();

```

### Get CSV EOL CRLF

**Syntax:** obj &lt;&lt; Get CSV EOL CRLF

**Description:** Returns 1 if using CRLF as the value that separates lines that will be used to create different rows.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV EOL CRLF();

```

### Get CSV EOL LF

**Syntax:** obj &lt;&lt; Get CSV EOL LF

**Description:** Returns 1 if using LF as the value that separates lines that will be used to create different rows.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV EOL LF();

```

### Get CSV EOL Other

**Syntax:** obj &lt;&lt; Get CSV EOL Other

**Description:** Gets the custom value the separates lines in the input file. This value creates rows in the output.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV EOF Other();

```

### Get CSV EOL Semicolon

**Syntax:** obj &lt;&lt; Get CSV EOL Semicolon

**Description:** Returns 1 if a semicolon represents the lines between rows.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV EOL Semicolon();

```

### Get CSV Escape

**Syntax:** obj &lt;&lt; Get CSV Escape

**Description:** Gets the character that escapes special characters such as end of field, end of line or the quote delimeter.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV Escape();

```

### Get CSV First Data Line

**Syntax:** obj &lt;&lt; Get CSV First Data Line

**Description:** The line number in the import file that contains the first row of data.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV First Data Line();

```

### Get CSV First Header Line

**Syntax:** obj &lt;&lt; Get CSV First Header Line

**Description:** Gets the first line in the import file that has headers that will be used to create column names.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV Has Headers( 1 );mfi << Set CSV First Header Line( 2 );mfi << Get CSV First Header Line();

```

### Get CSV Has Headers

**Syntax:** obj &lt;&lt; Get CSV Has Headers

**Description:** Returns 1 if the header settings will be used while importing.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV Has Headers;

```

### Get CSV Number Of Header Lines

**Syntax:** obj &lt;&lt; Get CSV Number Of Header Lines

**Description:** Gets the number of lines of headers that will be used for column names.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV Has Headers( 1 );mfi << Set CSV Number Of Header Lines( 2 );mfi << Get CSV Number Of Header Lines();

```

### Get CSV Quote

**Syntax:** obj &lt;&lt; Get CSV Quote

**Description:** Gets the value that separates quoted strings

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV Quote();

```

### Get Charset

**Syntax:** obj &lt;&lt; Get Charset

**Description:** Returns the charset that will be used for importing data.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Get Charset();

```

### Get Date Count

**Syntax:** obj &lt;&lt; Get Date Count

**Description:** Returns the number of files that are in the range of the date filter if it is enabled, otherwise it returns the total number of files.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set Folder( "$downloads" );mfi << Set Date Filter( {05Sep2019:14:30:00, Today()} );mfi << Set Date Enable( 1 );mfi << Get Date Count();

```

### Get Date Enable

**Syntax:** obj &lt;&lt; Get Date Enable

**Description:** Returns 1 if the date filter is enabled.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Get Date Enable();

```

### Get Date Filter

**Syntax:** obj &lt;&lt; Get Date Filter

**Description:** Returns the current date filter.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set Date Filter( {05Sep2019:14:30:00, Today()} );mfi << Set Date Enable( 1 );mfi << Get Date Filter();

```

### Get Excel Add Sheet Name Column

**Syntax:** obj &lt;&lt; Get Excel Add Sheet Name Column

**Description:** Returns 1 if a column will be added to the imported table that has the name of the spreadsheet the data came from.

**JMP Version Added:** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Add Sheet Name Column;

```

### Get Excel Best Guess

**Syntax:** obj &lt;&lt; Get Excel Best Guess

**Description:** Returns 1 if data and column headers will be found dynamically. Returns 0 if the other excel settings will be used when importing Excel data.

**JMP Version Added:** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Best Guess;

```

### Get Excel Column Headers As Hierarchies

**Syntax:** obj &lt;&lt; Get Excel Column Headers As Hierarchies

**Description:** Returns 1 if spreadsheet cells that are in the header rows that span more than one cell horizontally will be treated as hierarchies.

**JMP Version Added:** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Column Headers as Hierarchies;

```

### Get Excel Column Name Separator

**Syntax:** obj &lt;&lt; Get Excel Column Name Separator

**Description:** Get the string to be used when concatenating multiple cells into column header names.

**JMP Version Added:** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Column Name Separator;

```

### Get Excel First Data Column

**Syntax:** obj &lt;&lt; Get Excel First Data Column

**Description:** Returns the first non-empty column in the spreadsheet to be imported as data.

**JMP Version Added:** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel First Data Column;

```

### Get Excel First Data Line

**Syntax:** obj &lt;&lt; Get Excel First Data Line

**Description:** Returns the first non-empty row in the spreadsheet to be imported as data.

**JMP Version Added:** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel First Data Line;

```

### Get Excel First Header Line

**Syntax:** obj &lt;&lt; Get Excel First Header Line

**Description:** Returns the first non-empty row in the spreadsheet to be imported as a column header.

**JMP Version Added:** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel First Header Line;

```

### Get Excel Has Headers

**Syntax:** obj &lt;&lt; Get Excel Has Headers

**Description:** Returns 1 if headers will be imported from the spreadsheets and 0 otherwise.

**JMP Version Added:** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Has Headers;

```

### Get Excel Import Color Cells

**Syntax:** obj &lt;&lt; Get Excel Import Color Cells

**Description:** Returns 1 if the background color of spreadsheet data cells will be imported.

**JMP Version Added:** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Import Color Cells;

```

### Get Excel Last Data Column

**Syntax:** obj &lt;&lt; Get Excel Last Data Column

**Description:** Returns the last column in the data area of the spreadsheet to be imported. If missing is returned then the last column will be found dynamically.

**JMP Version Added:** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Last Data Column;

```

### Get Excel Last Data Row

**Syntax:** obj &lt;&lt; Get Excel Last Data Row

**Description:** Returns the last row in the data area of the spreadsheet to be imported. If missing is returned then the last row will be found dynamically.

**JMP Version Added:** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Last Data Row;

```

### Get Excel Limit Column Type Detection

**Syntax:** obj &lt;&lt; Get Excel Limit Column Type Detection

**Description:** Returns 0 if all of the spreadsheet cells in each column will be checked when detecting the data type of the column and returns 1 if only a subset will be checked. Limiting detection can improve performance with large spreadsheets.

**JMP Version Added:** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Limit Column Type Detection;

```

### Get Excel Multiple Series Stack

**Syntax:** obj &lt;&lt; Get Excel Multiple Series Stack

**Description:** Returns 1 if spanned columns will be stacked if "Set Excel Column Headers As Hierarchies" is set to 1.

**JMP Version Added:** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Multiple Series Stack;

```

### Get Excel Number of Header Lines

**Syntax:** obj &lt;&lt; Get Excel Number of Header Lines

**Description:** Returns the number of lines in the spreadsheet that will be imported as column headers.

**JMP Version Added:** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Number of Header Lines;

```

### Get Excel Replicate Data In Spanned Rows

**Syntax:** obj &lt;&lt; Get Excel Replicate Data In Spanned Rows

**Description:** For multiple header rows that are merged vertically, set to 1 to repeat the value.

**JMP Version Added:** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Replicate Data In Spanned Rows;

```

### Get Excel Replicate Headers In Spanned Rows

**Syntax:** obj &lt;&lt; Get Excel Replicate Headers In Spanned Rows

**Description:** Returns 1 if merged spreadsheet header cells will have cell values duplicated when creating the JMP table column name.

**JMP Version Added:** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Replicate Headers In Spanned Rows;

```

### Get Excel Suppress Empty Columns

**Syntax:** obj &lt;&lt; Get Excel Suppress Empty Columns

**Description:** Set to 1 to prevent empty columns from being imported.

**JMP Version Added:** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Suppress Empty Columns;

```

### Get Excel Suppress Hidden Columns

**Syntax:** obj &lt;&lt; Get Excel Suppress Hidden Columns

**Description:** Returns 1 if hidden columns will not be imported.

**JMP Version Added:** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Suppress Hidden Columns;

```

### Get Excel Suppress Hidden Rows

**Syntax:** obj &lt;&lt; Get Excel Suppress Hidden Rows

**Description:** Returns 1 if hidden rows will not be imported.

**JMP Version Added:** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Suppress Hidden Rows;

```

### Get Excel Worksheet Filter

**Syntax:** obj &lt;&lt; Get Excel Worksheet Filter

**JMP Version Added:** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Worksheet Filter;

```

### Get File List

**Syntax:** obj &lt;&lt; Get File List

**JMP Version Added:** 18

```jsl



```

### Get Folder

**Syntax:** obj &lt;&lt; Get Folder

**Description:** Return the folder name.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set Folder( "$Desktop" );mfi << Get Folder;

```

### Get Folder Count

**Syntax:** obj &lt;&lt; Get Folder Count

**Description:** Return the number of files in the folder.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set Folder( "$Desktop" );mfi << Get Folder Count;

```

### Get Import Callback

**Syntax:** obj &lt;&lt; Get Import Callback

**JMP Version Added:** 15

```jsl

Create Directory( "$temp/deleteme" );Save Text File( "$temp/deleteme/test1.txt", "a1\!n1" );Save Text File( "$temp/deleteme/test2.txt", "a2\!n1" );mfi = Multiple File Import(	<<Set Folder( "$temp/deleteme/" ),	<<Set Name Filter( "test?.txt;" ),	<<Set Name Enable( 1 ),	<<Set Add File Name Column( 1 ),	<<Set Import Callback(		Function( {a, b},			Write( "\!na=", a );			Write( "\!nb=", b );		)	));mfi << Get Import Callback();

```

### Get Import Mode

**Syntax:** obj &lt;&lt; Get Import Mode

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set Import Mode( "Row Per Line" );mfi << Get Import Mode();

```

### Get JSON Guess

**Syntax:** obj &lt;&lt; Get JSON Guess

**Description:** Returns the built-in method for importing JSON data to create data tables.

**JMP Version Added:** 15

```jsl

mfi = Multiple File Import();mfi << Get JSON Guess();

```

### Get JSON Method

**Syntax:** obj &lt;&lt; Get JSON Method

**Description:** Return the current method used for importing JSON data.

**JMP Version Added:** 15

```jsl

mfi = Multiple File Import();mfi << Get JSON Method();

```

### Get JSON Settings

**Syntax:** obj &lt;&lt; Get JSON Settings

**Description:** Returns the custom JSL that imports JSON data.

**JMP Version Added:** 15

```jsl

mfi = Multiple File Import();mfi << Get JSON Settings();

```

### Get Name Count

**Syntax:** obj &lt;&lt; Get Name Count

**Description:** Returns the number of files that match the current name filter if Set Name Enable is set or the total number of files otherwise.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Get Name Count();

```

### Get Name Enable

**Syntax:** obj &lt;&lt; Get Name Enable

**Description:** Returns 1 if the current name filter will be applied to filter the files being included.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set Name Enable( 1 );mfi << Get Name Enable();

```

### Get Name Filter

**Syntax:** obj &lt;&lt; Get Name Filter

**Description:** Returns the current name filter.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set Name Filter( "*.csv;*.txt" );mfi << Set Name Enable( 1 );mfi << Get Name Filter();

```

### Get PDF Method

**Syntax:** obj &lt;&lt; Get PDF Method

**Description:** Return the current method used for importing PDF data.

**JMP Version Added:** 17

```jsl

mfi = Multiple File Import();mfi << Get PDF Method();

```

### Get PDF Settings

**Syntax:** obj &lt;&lt; Get PDF Settings

**Description:** Returns the custom JSL that imports PDF data.

**JMP Version Added:** 17

```jsl

mfi = Multiple File Import();mfi << Get PDF Settings();

```

### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Description:** Create a script from the current settings.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Get Script();

```

### Get Show Hidden

**Syntax:** obj &lt;&lt; Get Show Hidden

**Description:** Returns whether hidden files are included

**JMP Version Added:** 15

```jsl

mfi = Multiple File Import();mfi << Set Show Hidden( 1 );mfi << Get Show Hidden();

```

### Get Size Count

**Syntax:** obj &lt;&lt; Get Size Count

**Description:** Returns the number of files matching the current size filter if Set Size Enable is set or the total number of files otherwise.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set Folder( "$Documents" );mfi << Set Size Filter( {0, 1000} );mfi << Set Size Enable( 1 );Print( mfi << Get Size Count() );mfi << Set Size Enable( 0 );Print( mfi << Get Size Count() );

```

### Get Size Enable

**Syntax:** 0|1 = obj &lt;&lt; Get Size Enable

**Description:** Returns 1 if the size filter is enabled.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set Size Enable( 1 );mfi << Set Size Filter( {0, 1000} );mfi << Get Size Enable();

```

### Get Size Filter

**Syntax:** obj &lt;&lt; Get Size Filter

**Description:** Returns a list whose first member is the smallest file size included and whose second number is the largest file size included.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set Size Filter( {0, 1000} );mfi << Get Size Filter();

```

### Get Stack Mode

**Syntax:** obj &lt;&lt; Get Stack Mode

**Description:** Returns "Stack Similar" if similar input files will be combined into one table when importing, or returns "Table Per File" when input files will be combined into two or more tables.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Get Stack Mode();

```

### Get Subfolders

**Syntax:** obj &lt;&lt; Get Subfolders

**Description:** Returns 1 if files in subfolders are included.

**JMP Version Added:** 15

```jsl

mfi = Multiple File Import();mfi << Set Subfolders( 1 );mfi << Get Subfolders();

```

### Get Use File List

**Syntax:** obj &lt;&lt; Get Use File List

**JMP Version Added:** 18

```jsl



```

### Get XML Guess

**Syntax:** obj &lt;&lt; Get XML Guess

**Description:** Returns the built-in method for importing XML data to create data tables.

**JMP Version Added:** 15

```jsl

mfi = Multiple File Import();mfi << Get XML Guess();

```

### Get XML Method

**Syntax:** obj &lt;&lt; Get XML Method

**Description:** Return the current method used for importing XML data.

**JMP Version Added:** 15

```jsl

mfi = Multiple File Import();mfi << Get XML Method();

```

### Get XML Settings

**Syntax:** obj &lt;&lt; Get XML Settings

**Description:** Returns the custom jsl for importing xml data.

**JMP Version Added:** 15

```jsl

mfi = Multiple File Import();mfi << Get XML Settings();

```

### Import Data

**Syntax:** list of data tables = obj &lt;&lt; Import Data

**Description:** Imports data based on the current settings and returns a list of data tables.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set Folder( "$SAMPLE_IMPORT_DATA" );mfi << Set Name Filter( "*.txt" );mfi << Set Name Enable( 1 );tables = mfi << Import Data();

```

### Set Add File Date Column

**Syntax:** obj &lt;&lt; Set Add File Date Column

**Description:** Set to create a column with the file size of the file the row was imported from.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set Add File Date Column( 1 );

```

### Set Add File Name Column

**Syntax:** obj &lt;&lt; Set Add File Name Column

**Description:** Set to create a column with the file name the row was imported from.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set Add File Name Column( 1 );

```

### Set Add File Size Column

**Syntax:** obj &lt;&lt; Set Add File Size Column

**Description:** Set to create a column with the file size of the file the row was imported from.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set Add File Size Column( 1 );

```

### Set CSV Allow Numeric

**Syntax:** obj &lt;&lt; Set CSV Allow Numeric

**Description:** Set to 1 to allow numeric columns to be created from apparent numeric data or set to 0 to create all character columns.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV Allow Numeric( 1 );

```

### Set CSV EOF Comma

**Syntax:** obj &lt;&lt; Set CSV EOF Comma

**Description:** Set to 1 to use a comma to separate fields that will be used to create different columns.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV EOF Comma( 1 );

```

### Set CSV EOF Other

**Syntax:** obj &lt;&lt; Set CSV EOF Other

**Description:** Set to the value that separates fields that will be used to create different columns.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV EOF Other( "\" );

```

### Set CSV EOF Space

**Syntax:** obj &lt;&lt; Set CSV EOF Space

**Description:** Set to 1 to use a space to separate fields that will be used to create different columns.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV EOF Space( 1 );

```

### Set CSV EOF Spaces

**Syntax:** obj &lt;&lt; Set CSV EOF Spaces

**Description:** Set to 1 to use a space to separate fields that will be used to create different columns.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV EOF Spaces( 1 );

```

### Set CSV EOF Tab

**Syntax:** obj &lt;&lt; Set CSV EOF Tab

**Description:** Set to 1 to use a tab to separate fields that will be used to create different columns.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV EOF Tab( 1 );

```

### Set CSV EOL CR

**Syntax:** obj &lt;&lt; Set CSV EOL CR

**Description:** Set to 1 to use CR as the value that separates lines that will be used to create different rows.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV EOL CR( 1 );

```

### Set CSV EOL CRLF

**Syntax:** obj &lt;&lt; Set CSV EOL CRLF

**Description:** Set to 1 to use CRLF as the value that separates lines that will be used to create different rows.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV EOL CRLF( 1 );

```

### Set CSV EOL LF

**Syntax:** obj &lt;&lt; Set CSV EOL LF

**Description:** Set to 1 to use LF as the value that separates lines that will be used to create different rows.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV EOL LF( 1 );

```

### Set CSV EOL Other

**Syntax:** obj &lt;&lt; Set CSV EOL Other

**Description:** Sets the custom value the separates lines in the input file. This value creates rows in the output.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV EOF Other( "\" );

```

### Set CSV EOL Semicolon

**Syntax:** obj &lt;&lt; Set CSV EOL Semicolon

**Description:** Set to 1 to use a semicolon to represent the lines between rows.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV EOL Semicolon( 1 );

```

### Set CSV Escape

**Syntax:** obj &lt;&lt; Set CSV Escape

**Description:** Sets a character that escapes special characters such as end of field, end of line, or quote delimiter.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV Escape( "\" );

```

### Set CSV First Data Line

**Syntax:** obj &lt;&lt; Set CSV First Data Line

**Description:** The line number in the import file that contains the first row of data.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV First Data Line( 4 );

```

### Set CSV First Header Line

**Syntax:** obj &lt;&lt; Set CSV First Header Line

**Description:** Sets the first line in the import file that has headers that will be used to create column names.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV Has Headers( 1 );mfi << Set CSV First Header Line( 2 );

```

### Set CSV Has Headers

**Syntax:** obj &lt;&lt; Set CSV Has Headers

**Description:** Set to 1 to use "CSV First Header Line" and "CSV Number Of Header Lines".

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV Has Headers( 1 );

```

### Set CSV Number Of Header Lines

**Syntax:** obj &lt;&lt; Set CSV Number Of Header Lines

**Description:** Sets the number of lines of headers that will be used for column names.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV Has Headers( 1 );mfi << Set CSV Number Of Header Lines( 2 );

```

### Set CSV Quote

**Syntax:** obj &lt;&lt; Set CSV Quote

**Description:** Sets the value that separates quoted strings.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV Quote( "'" );

```

### Set Charset

**Syntax:** obj &lt;&lt; Set Charset

**Description:** Sets the charset that should be used when importing data.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set Charset( "Best Guess" );

```

### Set Date Enable

**Syntax:** obj &lt;&lt; Set Date Enable

**Description:** Enables the date time filter. The default value is off which will ignore the date filter even if set.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set Date Filter( {05Sep2019:14:30:00, Today()} );mfi << Set Date Enable( 1 );

```

### Set Date Filter

**Syntax:** obj &lt;&lt; Set Date Filter( {start of date time range, end of date time range} )

**Description:** Filters the included files based on a date and time range.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set Date Filter( {05Sep2019:14:30:00, Today()} );mfi << Set Date Enable( 1 );

```

### Set Excel Add Sheet Name Column

**Syntax:** obj &lt;&lt; Set Excel Add Sheet Name Column

**Description:** If set to 1 a column will be added to the imported table that has the name of the spreadsheet the data came from.

**JMP Version Added:** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Add Sheet Name Column( 1 );

```

### Set Excel Best Guess

**Syntax:** obj &lt;&lt; Set Excel Best Guess

**Description:** Dynamically find the data in each spreadsheet and make a best guess for column names. If this is set no other Excel parameters are used except for "Set Excel Add Sheet Name Column".

**JMP Version Added:** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Best Guess( 1 );

```

### Set Excel Column Headers As Hierarchies

**Syntax:** obj &lt;&lt; Set Excel Column Headers As Hierarchies

**Description:** Set to 1 to treat multiple column header lines as hierarchies. This reorganizes information in spanned cells in the headers and places that data in the rows of the generated table.

**JMP Version Added:** 18

```jsl

Multiple File Import(	fJust << Set Folder( "$sample_import_data" ),	<<Set Name Filter( "texas precipitation.xlsx" ),	<<Set Name Enable( 1 ),	<<Set Excel Best Guess( 0 ),	<<Set Excel Has Headers( 1 ),	<<Set Excel Number of Header Lines( 2 ),	<<Set Excel First Data Line( 3 ),	<<Set Excel Last Data Row( 6 ),	<<Set Excel Column Headers As Hierarchies( 1 )) << import data;

```

### Set Excel Column Name Separator

**Syntax:** obj &lt;&lt; Set Excel Column Name Separator

**Description:** Set a string to be used as a separator when concatenating multiple cells into column header names.

**JMP Version Added:** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Column Name Separator( "+" );

```

### Set Excel First Data Column

**Syntax:** obj &lt;&lt; Set Excel First Data Column

**Description:** Sets the number of the first non-empty column in the spreadsheet that will be imported as data.

**JMP Version Added:** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel First Data Column( 1 );

```

### Set Excel First Data Line

**Syntax:** obj &lt;&lt; Set Excel First Data Line

**Description:** Sets the number of the first non-empty row in the spreadsheet that will be imported as data.

**JMP Version Added:** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel First Data Line( 1 );

```

### Set Excel First Header Line

**Syntax:** obj &lt;&lt; Set Excel First Header Line

**Description:** Sets the number of the first non-empty row in the spreadsheet that will be used to define column headers.

**JMP Version Added:** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel First Header Line( 1 );

```

### Set Excel Has Headers

**Syntax:** obj &lt;&lt; Set Excel Has Headers

**Description:** If set the "Set Excel First Header Line" and "Set Excel Number of Header Lines" will be used to define column headers during import.

**JMP Version Added:** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Has Headers( 1 );

```

### Set Excel Import Color Cells

**Syntax:** obj &lt;&lt; Set Excel Import Color Cells

**Description:** If set to 1 then the background colors of data cells will be imported.

**JMP Version Added:** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Import Color Cells( 1 );

```

### Set Excel Last Data Column

**Syntax:** obj &lt;&lt; Set Excel Last Data Column

**Description:** Sets the last column in the data area of the spreadsheet to be imported. The data area starts after all of the empty columns.

**JMP Version Added:** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Last Data Column( 2 );

```

### Set Excel Last Data Row

**Syntax:** obj &lt;&lt; Set Excel Last Data Row

**Description:** Set the last row in the data area of the spreadsheet to be imported. The data area starts after all of the empty rows.

**JMP Version Added:** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Last Data Row( 1 );

```

### Set Excel Limit Column Type Detection

**Syntax:** obj &lt;&lt; Set Excel Limit Column Type Detection

**Description:** Set to 1 to check only some of the rows in a column when auto detecting a column&apos;s data type. A value of 1 is faster, but could pick the wrong data type in cases where the data type differs between the values at the bottom of the column and the top.

**JMP Version Added:** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Limit Column Type Detection( 1 );

```

### Set Excel Multiple Series Stack

**Syntax:** obj &lt;&lt; Set Excel Multiple Series Stack

**Description:** If set to 1 and "Set Excel Column Headers As Hierarchies" is set to 1, spanned columns will be stacked.

**JMP Version Added:** 18

```jsl

Multiple File Import(	<<Set Folder( "$sample_import_data" ),	<<Set Name Filter( "texas precipitation.xlsx" ),	<<Set Name Enable( 1 ),	<<Set Excel Best Guess( 0 ),	<<Set Excel Has Headers( 1 ),	<<Set Excel Number of Header Lines( 2 ),	<<Set Excel First Data Line( 3 ),	<<Set Excel Last Data Row( 6 ),	<<Set Excel Column Headers As Hierarchies( 1 ), // must be set for Multiple Series Stack	<<Set Excel Multiple Series Stack( 1 ),) << import data;

```

### Set Excel Number of Header Lines

**Syntax:** obj &lt;&lt; Set Excel Number of Header Lines

**Description:** Set the number of rows in the spreadsheet to be imported as column headers.

**JMP Version Added:** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Number of Header Lines( 1 );

```

### Set Excel Replicate Data In Spanned Rows

**Syntax:** obj &lt;&lt; Set Excel Replicate Data In Spanned Rows

**Description:** When creating the column header, if set to 1, where there are multiple header rows and a cell spans those rows but does not span any cells horizontally, the value in the beginning of the merged area is repeated.

**JMP Version Added:** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Replicate Data In Spanned Rows( 1 );

```

### Set Excel Replicate Headers In Spanned Rows

**Syntax:** obj &lt;&lt; Set Excel Replicate Headers In Spanned Rows

**Description:** If set to 1 and there are multiple header rows and a cell spans those rows and does not span any cells horizontally, the value in start of the merged area will be repeated when creating the column header.

**JMP Version Added:** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Replicate Headers In Spanned Rows( 1 );

```

### Set Excel Suppress Empty Columns

**Syntax:** obj &lt;&lt; Set Excel Suppress Empty Columns

**Description:** Set to 1 to prevent empty columns from being imported.

**JMP Version Added:** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Suppress Empty Columns( 1 );

```

### Set Excel Suppress Hidden Columns

**Syntax:** obj &lt;&lt; Set Excel Suppress Hidden Columns

**Description:** Set to 1 to prevent hidden columns from being imported.

**JMP Version Added:** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Suppress Hidden Columns( 1 );

```

### Set Excel Suppress Hidden Rows

**Syntax:** obj &lt;&lt; Set Excel Suppress Hidden Rows

**Description:** Set to 1 to prevent hidden rows from being imported.

**JMP Version Added:** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Suppress Hidden Rows( 1 );

```

### Set Excel Worksheet Filter

**Syntax:** obj &lt;&lt; Set Excel Worksheet Filter

**Description:** Only worksheets that match the filter are imported.

**JMP Version Added:** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Worksheet Filter( "data*;sheet?" );

```

### Set File List

**Syntax:** obj &lt;&lt; Set File List

**JMP Version Added:** 18

```jsl



```

### Set Folder

**Syntax:** obj &lt;&lt; Set Folder

**Description:** Choose a different folder.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set Folder( "$Desktop" );

```

### Set Import Callback

**Syntax:** obj &lt;&lt; Set Import Callback

**Description:** Specifies a custom callback function that executes as the final step in the import process. The Multiple File Import() function passes the callback function the Multiple File Import object and a list of data tables that were opened.

**JMP Version Added:** 15

```jsl

Create Directory( "$temp/deleteme" );Save Text File( "$temp/deleteme/test1.txt", "a1\!n1" );Save Text File( "$temp/deleteme/test2.txt", "a2\!n1" );mfi = Multiple File Import(	<<Set Folder( "$temp/deleteme/" ),	<<Set Name Filter( "test?.txt;" ),	<<Set Name Enable( 1 ),	<<Set Add File Name Column( 1 ),	<<Set Import Callback(		Function( {a, b}, // a is the same is mfi			// b is a list of datatables that were created			Write( "\!na=", a );			Write( "\!nb=", b );		)	));mfi << Import Data;

```

### Set Import Mode

**Syntax:** obj &lt;&lt; Set Import Mode

**Description:** Set to "Row Per File" to have each file create one row, "Row Per Line" to create one row for each line in each file, or "CSVData" to use the Settings option for importing.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set Import Mode( "Row Per Line" );

```

### Set JSON Guess

**Syntax:** obj &lt;&lt; Set JSON Guess( "Tall"|"Wide"|"Huge"|"Pandas" )

**Description:** Sets a JSON guess that best matches the JSON data being imported

**JMP Version Added:** 15

```jsl

mfi = Multiple File Import();mfi << Set JSON Method( "Guess" );mfi << Set JSON Guess( "Tall" );

```

### Set JSON Method

**Syntax:** obj &lt;&lt; Set JSON Method

**Description:** Set to "Guess" to use a built-in guess or "JSON Settings" to supply a custom jsl.

**JMP Version Added:** 15

```jsl

mfi = Multiple File Import();mfi << Set JSON Method( "Guess" );mfi << Set JSON Guess( "Tall" );

```

### Set JSON Settings

**Syntax:** obj &lt;&lt; Set JSON Settings

**Description:** Specifies custom JSL that imports JSON data.

**JMP Version Added:** 15

```jsl

dt = Open( "$sample_data\big class.jmp" );dt << Save( "$Documents\Big Class.json" );Close( dt );Multiple File Import(	<<Set Folder( "$DOCUMENTS" ),	<<Set Name Filter( "big*.JSON" ),	<<Set Name Enable( 1 ),	<<Set JSON Method( "JSON Settings" ),	<<Set JSON Settings(		JSON Settings(			Stack( 0 ),			Row( "/root" ),			Col(				"/root/name",				Column Name( "name" ),				Fill( "Use Once" ),				Type( "Character" ),				Format( {"Best"} ),				Modeling Type( "Continuous" )			),			Col(				"/root/age",				Column Name( "age" ),				Fill( "Use Once" ),				Type( "Numeric" ),				Format( {"Best"} ),				Modeling Type( "Continuous" )			),			Col(				"/root/sex",				Column Name( "sex" ),				Fill( "Use Once" ),				Type( "Character" ),				Format( {"Best"} ),				Modeling Type( "Continuous" )			),			Col(				"/root/height",				Column Name( "height" ),				Fill( "Use Once" ),				Type( "Numeric" ),				Format( {"Best"} ),				Modeling Type( "Continuous" )			),			Col(				"/root/weight",				Column Name( "weight" ),				Fill( "Use Once" ),				Type( "Numeric" ),				Format( {"Best"} ),				Modeling Type( "Continuous" )			)		)	)) << Import Data;

```

### Set Name Enable

**Syntax:** obj &lt;&lt; Set Name Enable

**Description:** Sets whether to apply the current name filter. The default value is 0 which will ignore the name filter even if it is set.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set Name Enable( 1 );

```

### Set Name Filter

**Syntax:** obj &lt;&lt; Set Name Filter

**Description:** Enables included files to be in a semicolon-delimited list of filters that can include wildcard characters. File names that include semicolons or | must be imported with a wildcard character like ? or \*.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set Name Filter( "*.csv;*.txt" );

```

### Set PDF Method

**Syntax:** obj &lt;&lt; Set PDF Method

**Description:** Set to "Guess" to use a built-in guess or "PDF Settings" to supply custom jsl.

**JMP Version Added:** 17

```jsl

mfi = Multiple File Import();mfi << Set PDF Method( "Guess" );

```

### Set PDF Settings

**Syntax:** obj &lt;&lt; Set PDF Settings

**Description:** Specifies custom JSL that imports PDF data.

**JMP Version Added:** 17

```jsl

dt = Open( "$sample_data\big class.jmp" );win = New Window( "temp", Data Table Box( dt ) );win << Save pdf( "$Documents\big class.PDF" );win << Close window;Close( dt );Multiple File Import(	<<Set Folder( "$DOCUMENTS" ),	<<Set Name Filter( "big*.pdf" ),	<<Set Name Enable( 1 ),	<<Set PDF Method( "PDF Settings" ),	<<Set PDF Settings( PDF All Tables( combine( all ) ) )) << Import Data;

```

### Set Show Hidden

**Syntax:** obj &lt;&lt; Set Show Hidden

**Description:** Sets whether files normally hidden by Windows are included. The default is to not include hidden files.

**JMP Version Added:** 15

```jsl

mfi = Multiple File Import();mfi << Set Show Hidden( 1 );

```

### Set Size Enable

**Syntax:** obj &lt;&lt; Set Size Enable

**Description:** Sets whether to apply the current size filter. The default value is off which will ignore the size filter even if set.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set Size Enable( 1 );mfi << Set Size Filter( {0, 1000} );

```

### Set Size Filter

**Syntax:** obj &lt;&lt; Set Size Filter( {smallest size to include, largest size to include} )

**Description:** Filters the included files based on file size.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set Size Enable( 1 );mfi << Set Size Filter( {0, 1000} );

```

### Set Stack Mode

**Syntax:** obj &lt;&lt; Set Stack Mode( "Stack Similar" | "Table Per File )

**Description:** Combines similar files being imported into one table or create one table for each file.

**JMP Version Added:** 14

```jsl

mfi = Multiple File Import();mfi << Set Stack Mode( "Stack Similar" );

```

### Set Subfolders

**Syntax:** obj &lt;&lt; Set Subfolders

**Description:** Sets whether files in subfolders are included. The default is for them not to be included.

**JMP Version Added:** 15

```jsl

mfi = Multiple File Import();mfi << Set Subfolders( 1 );

```

### Set Use File List

**Syntax:** obj &lt;&lt; Set Use File List

**JMP Version Added:** 18

```jsl



```

### Set XML Guess

**Syntax:** obj &lt;&lt; Set XML Guess( "Tall"|"Wide"|"Huge" )

**Description:** Specifies an XML guess that best matches the XML data being imported.

**JMP Version Added:** 15

```jsl

mfi = Multiple File Import();mfi << Set XML Method( "Guess" );mfi << Set XML Guess( "Tall" );

```

### Set XML Method

**Syntax:** obj &lt;&lt; Set XML Method

**Description:** Specify "Guess" for JMP to decide whether the data is tall, wide, or huge. Specify "XML Settings" to supply custom JSL.

**JMP Version Added:** 15

```jsl

mfi = Multiple File Import();mfi << Set XML Method( "Guess" );mfi << Set XML Guess( "Tall" );

```

### Set XML Settings

**Syntax:** obj &lt;&lt; Set XML Settings

**Description:** Specifies custom JSL that imports XML data.

**JMP Version Added:** 15

```jsl

Multiple File Import(	<<Set Folder( "$SAMPLE_IMPORT_DATA" ),	<<Set Name Filter( "*.xml" ),	<<Set Name Enable( 1 ),	<<Set XML Method( "XML Settings" ),	<<Set XML Settings(		XML Settings(			Row( "/book/story/chapter/para" ),			Col(				"/book/story/chapter/para",				Column Name( "story.chapter.para" ),				Fill( "Use Once" ),				Type( "Numeric" ),				Format( {"Best"} ),				Modeling Type( "Continuous" )			),			Col(				"/book/story/chapter/para/price",				Column Name( "story.chapter.para.price" ),				Fill( "Use Once" ),				Type( "Numeric" ),				Format( {"Best"} ),				Modeling Type( "Continuous" )			),			Col(				"/book/story/chapter/para/quantity",				Column Name( "story.chapter.para.quantity" ),				Fill( "Use Once" ),				Type( "Numeric" ),				Format( {"Best"} ),				Modeling Type( "Continuous" )			)		)	)) << Import Data;

```

