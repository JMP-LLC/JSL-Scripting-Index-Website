# Image

## New Image 
### Example 1
> **Summary**: Process of applying a negative filter to an image and displaying it alongside a bivariate plot, utilizing JMP's image processing capabilities.

<!-- Keywords: #JMPImageProcessing, #BivariatePlotting, #DataVisualization, #ScriptingLanguage, #JSL -->

**Code**:
```jsl
Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
img2 = New Image();
img2 << Set Pixels( img << Get Pixels() );
img2 << Filter( "negate" );
dt = Open("data_table.jmp");
w = New Window( "Neg filter", H List Box( img2, biv = dt << Run Script( "Bivariate" ) ) );
w << Save Window Report( "$TEMP/image.jrp", embed data( 0 ) );
w << Close Window;
Open( "$TEMP/image.jrp" );
```

**Code Explanation**:

1. Set default names scope.
2. Open image file.
3. Create new image object.
4. Copy pixels from original image.
5. Apply negative filter to image.
6. Open data table.
7. Create new window.
8. Display image and bivariate plot.
9. Save window report.
10. Close window and reopen saved report.



### Example 2
> **Summary**: Process of applying a negate filter to an image and running Bivariate analysis on data, then saves the window report as a JRP file.

<!-- Keywords: #JSLScriptingLanguage, #ImageProcessing, #BivariateAnalysis, #DataVisualization, #JMP -->

**Code**:
```jsl
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
img2 = New Image();
img2 << Set Pixels( img << Get Pixels() );
img2 << Filter( "negate" );
dt = Open("data_table.jmp");
w = New Window( "Neg filter", H List Box( img2, biv = dt << Run Script( "Bivariate" ) ) );
w << Save Window Report( "$TEMP/image.jrp", embed data( 0 ) );
w << Close Window;
```

**Code Explanation**:

1. Open image file.
2. Create new image object.
3. Copy pixels from original image.
4. Apply negate filter to image.
5. Open data table.
6. Create new window for display.
7. Add negated image to window.
8. Run Bivariate analysis on data.
9. Save window report as JRP file.
10. Close the window.



## Image using Run Script
> **Summary**: Creates a web report by running two scripts, adding reports and an image, and setting index properties.

<!-- Keywords: #JSLScriptingLanguage, #WebReportAutomation, #Scripting, #DataVisualization, #JMP -->

**Code**:
```jsl
dt1 = Open("data_table1.jmp");
dt2 = Open("data_table2.jmp");
rpt1 = dt1 << Run Script( "Bubble Plot with Local Data Filter" );
rpt2 = dt2 << Run Script( "Logistic" );
webrpt = New Web Report();
webrpt << Add Reports( {rpt1, rpt2} );
webrpt << Add Image( File( "$SAMPLE_IMAGES/black rhino footprint.jpg" ), Title( "Black Rhino Footprint" ) );
webrpt << Index(
	Title( "Create Web Report Baseline test" ),
	Description( "Description of Create Web Report Baseline test" ),
	Timestamp( 1 ),
	Font( "Arial Narrow", "Bold Italic" ),
	Logo( "$SAMPLE_IMAGES/pi.gif" ),
	Theme( "Blue" ),
	Style( "Grid" )
);
rptPath = webrpt << Save( "$TEMP", Publish Data( 1 ) );
 
If(
	Host is( "Windows" ), folderPath = Substr( rptPath, 1, Length( Convert File Path( "$TEMP" ) ) + 35 ),
	Host is( "Mac" ), folderPath = Substr( rptPath, 1, Length( Convert File Path( "$TEMP" ) ) + 36 )
);
Delete Directory( folderPath );
```

**Code Explanation**:

1. Open data_table1 data
2. Open data_table2 data
3. Run Bubble Plot script on data_table1.
4. Run Logistic script on data_table2.
5. Create new web report.
6. Add reports to web report.
7. Add image to web report.
8. Set index properties for web report.
9. Save web report to temporary location.
10. Delete temporary directory.



## Image using If
### Example 1
> **Summary**: Creates and processes image files from a data table, utilizing JMP's scripting capabilities to generate MSWord documents.

<!-- Keywords: #JMPScriptingLanguage, #DataTableProcessing, #ImageFileGeneration, #MSWordDocumentCreation, #Automation -->

**Code**:
```jsl
allowWindows = 1;
If( allowWindows,
	temp path = "$TEMP";
	If( !Directory Exists( temp path ),
		Create Directory( temp path )
	);
	dt = Open("data_table.jmp");
	dist = dt << Run Script( "Distribution" );
	dist << save MSWord( temp path || "\dist_DOC.doc" );
	f = Files In Directory( temp path );
	j = 0;
	For( i = 1, i <= N Items( f ), i++,
		If( Contains( f[i], "dist_DOC_img" ),
			j = j + 1;
			img = New Image( temp path || "\" || f[i] );
			Column( imgDt, 2 )[j] = img;
			s = Pixel_Comparison( imgDt, 1 );
		)
	);
);
```

**Code Explanation**:

1. Set allowWindows to 1.
2. Check if allowWindows is true.
3. Assign temp path to "$TEMP".
4. Check if temp path exists.
5. Create temp directory if it doesn't exist.
6. Open data table.
7. Run Distribution script on data table.
8. Save distribution as MSWord document.
9. Get files in temp directory.
10. Loop through files to find image files.
11. Count and process image files.
12. Compare pixel values of images.



### Example 2
> **Summary**: Process of generating a distribution report in Microsoft Word, utilizing JMP's scripting capabilities to run a script and save output as an image.

<!-- Keywords: #JMPScriptingLanguage, #MicrosoftWordIntegration, #DistributionAnalysis, #ImageProcessing, #Automation -->

**Code**:
```jsl
allowWindows = 1;
If( allowWindows,
	temp path = "$TEMP";
	dt = Open("data_table.jmp");
	dist = dt << Run Script( "Distribution" );
	dist << save MSWord( temp path || "\dist_DOC.doc" );
	f = Files In Directory( temp path );
	j = 0;
	For( i = 1, i <= N Items( f ), i++,
		If( Contains( f[i], "dist_DOC_img" ),
			j = j + 1;
			img = New Image( temp path || "\" || f[i] );
			Column( imgDt, 2 )[j] = img;
			s = Pixel_Comparison( imgDt, 1 );
		)
	);
);
```

**Code Explanation**:

1. Allow Windows usage.
2. Set temporary path.
3. Open data table.
4. Run Distribution script.
5. Save output to Word.
6. List files in temp directory.
7. Initialize counter.
8. Loop through files.
9. Check for image files.
10. Process and compare images.



### Example 3
> **Summary**: Generates a presentation from a data table, utilizing the Distribution script and saving it as PNG images.

<!-- Keywords: #JSLScriptingLanguage, #DataTableProcessing, #PresentationGeneration, #ImageProcessing, #FileSystemOperations -->

**Code**:
```jsl
allowWindows = 1;
If( allowWindows,
	temp path = "$TEMP";
	dt = Open("data_table.jmp");
	dist = dt << Run Script( "Distribution" );
	dist << save Presentation( temp path || "\dist_PPTX.pptx", "PNG" );
	f = Files In Directory( temp path );
	j = 0;
	For( i = 1, i <= N Items( f ), i++,
		If( Contains( f[i], "dist_PPTX_img" ),
			j = j + 1;
			img = New Image( temp path || "\" || f[i] );
			Column( imgDt, 2 )[j] = img;
			s = Pixel_Comparison( imgDt, 1 );
		)
	);
);
```

**Code Explanation**:

1. Allow Windows.
2. Set temporary path.
3. Open data table.
4. Run Distribution script.
5. Save presentation as PNG.
6. List files in directory.
7. Initialize counter.
8. Loop through files.
9. Check for image files.
10. Compare pixel values.



### Example 4
> **Summary**: Generates a presentation from a data table, including running a Bivariate analysis and saving images to a temporary directory.

<!-- Keywords: #JMPScriptingLanguage, #DataTableAnalysis, #PresentationGeneration, #ImageProcessing, #Automation -->

**Code**:
```jsl
allowWindows = 1;
If( allowWindows,
	temp path = "$TEMP";
	dt = Open("data_table.jmp");
	dist = dt << Run Script( "Bivariate" );
	dist << save Presentation( temp path || "\dist_PPTX.pptx", "PNG" );
	f = Files In Directory( temp path );
	j = 0;
	For( i = 1, i <= N Items( f ), i++,
		If( Contains( f[i], "dist_PPTX_img" ),
			j = j + 1;
			img = New Image( temp path || "\" || f[i] );
			Column( imgDt, 2 )[j] = img;
			s = Pixel_Comparison( imgDt, 1 );
		)
	);
);
```

**Code Explanation**:

1. Allow Windows execution.
2. Set temporary path.
3. Open data table.
4. Run Bivariate analysis.
5. Save presentation to PPTX.
6. List files in temp directory.
7. Initialize counter.
8. Loop through files.
9. Check for image files.
10. Compare pixel images.



## Image using Create Directory
> **Summary**: Saves picture column values from a data table to individual image files on the desktop.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #FileManagement, #PictureColumnHandling, #DesktopAutomation -->

**Code**:
```jsl
Names Default To Here( 1 );
Create Directory( "$DESKTOP/BCF" );
dt = Open("data_table.jmp");
lstPics = :picture << Get Values;
For Each( {i, j}, lstPics,
	i << save image( "$DESKTOP/BCF/" || Char( j ) || ".jpg", "jpg" )
);
```

**Code Explanation**:

1. Set default name scope.
2. Create directory on desktop.
3. Open data table.
4. Retrieve picture column values.
5. Loop through each picture value.
6. Save picture to file.



