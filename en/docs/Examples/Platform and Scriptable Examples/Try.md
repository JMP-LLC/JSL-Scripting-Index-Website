# Try

> **Summary**: Runs the color-coding of age cells in a data table, utilizing the Color Cells() function.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ColorCoding, #ConditionalStatements, #TryBlock -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Try( :age << Color Cells() );
```

**Code Explanation**:

1. Open data table.
2. Attempt to color age cells.



## Try using Create Directory
> **Summary**: Process of importing and converting ESRI shapefiles (.shp) and database files (.dbf) to JMP format, allowing for further analysis and visualization.

<!-- Keywords: #JSLScriptingLanguage, #ESRIImport, #JMPConversion, #GeospatialData, #FileManagement -->

**Code**:
```jsl
Names Default To Here (1);
//workflow: 
//1. open .shp file, , save as file-XY.jmp
//2. open .dbf file, 1st col = map role(shape name definition), save as file-Name.jmp
//copy esri files to desktop
try(Create Directory ("$DESKTOP/Louisiana Parishes"));
try(Copy File ("$SAMPLE_IMPORT_DATA/parishes.dbf", "$DESKTOP/Louisiana Parishes/Parishes.dbf"));
try(Copy File ("$SAMPLE_IMPORT_DATA/parishes.shp", "$DESKTOP/Louisiana Parishes/Parishes.shp"));
// create jmp files w/ properties
dt = open ("$DESKTOP/Louisiana Parishes/Parishes.dbf");
// Change column property: PARISH
dt:PARISH << Set Property(
	"Map Role",
	Map Role( Shape Name Definition )
);
dt << save as ("$DESKTOP/Louisiana Parishes/Parishes-Name.jmp");
close (dt, no save);
dt = open ("$DESKTOP/Louisiana Parishes/Parishes.shp");
dt << save as ("$DESKTOP/Louisiana Parishes/Parishes-XY.jmp");
close (dt, no save);
web("$DESKTOP/Louisiana Parishes");
```

**Code Explanation**:

1. Create directory on desktop.
2. Copy .dbf file to desktop.
3. Copy .shp file to desktop.
4. Open .dbf file.
5. Set "PARISH" column as map role.
6. Save .dbf file as JMP.
7. Close .dbf file.
8. Open .shp file.
9. Save .shp file as JMP.
10. Close .shp file.



