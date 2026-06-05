# Text Explorer

### Example 1
> **Summary**: Opens a data table and launches Text Explorer to tokenize 'Basic Words' in the 'Final Narrative' column using English language, without specifying any regular expressions or latent semantic analysis.

<!-- Keywords: #TextExplorer, #Tokenization, #EnglishLanguage, #DataTable, #JSL -->

**Code**:
```jsl
// Final Narrative - Basic Words
// Open data table
dt = Open("data_table.jmp");
// Final Narrative - Basic Words
Text Explorer(
	Text Columns( :Final Narrative ),
	Tokenizing( "Basic Words" ),
	Language( "English" )
);
```

**Code Explanation**:

1. Open data table.
2. Assign table to dt.
3. Launch Text Explorer.
4. Specify text columns.
5. Set tokenizing method.
6. Define language.



### Example 2
> **Summary**: Opens a data table and uses the Text Explorer to apply regular expressions to text columns, leveraging the Words library and English language.

<!-- Keywords: #TextExplorer, #RegularExpressions, #DataTable, #JMPScriptingLanguage, #NaturalLanguageProcessing -->

**Code**:
```jsl
// Final Narrative - Regex
// Open data table
dt = Open("data_table.jmp");
// Final Narrative - Regex
Text Explorer(
	Text Columns( :Final Narrative ),
	Set Regex( Library( "Words" ) ),
	Language( "English" )
);
```

**Code Explanation**:

1. Open table.
2. Launch Text Explorer.
3. Select text column.
4. Set regex library.
5. Specify language.



### Example 3
> **Summary**: Extracts specific text patterns related to NTSB travel and foreign authorities from a data table, utilizing Text Explorer with custom regex patterns.

<!-- Keywords: #TextExplorer, #RegexPatterns, #DataExtraction, #NTSB, #CustomRegex -->

**Code**:
```jsl
// Final Narrative - Customized Regex
// Open data table
dt = Open("data_table.jmp");
// Final Narrative - Customized Regex
Text Explorer(
	Text Columns( :Final Narrative ),
	Set Regex(
		Custom(
			Title( "NTSB_traveled" ),
			Example( "" ),
			Regex(
				"(\bNTSB investigators\b\s[may]*\s*[have]*\s*\btraveled in support of this investigation and used data (\bprovided by\b|\bobtained from\b) various sources to prepare this\b\s*[public]*\s*\baircraft accident report\b\.|\bNTSB investigators used data provided by various sources and may have traveled in support of this investigation to prepare this aircraft incident report\b\.)"
			),
			Result( "NTSB_traveled" ),
			Comment( "" ),
			Locale( "" ),
			ColorStyle( 1 )
		),
		Custom(
			Title( "NTSB_notravel" ),
			Example( "" ),
			Regex(
				"(\bNTSB investigators used data provided by various sources and may not have traveled in support of this investigation to prepare this aircraft incident report\b\.|\bNTSB investigators may not have traveled in support of this investigation and used data provided by various sources to prepare this\b\s*[public]*\s*\baircraft accident report\b\.)"
			),
			Result( "NTSB_notravel" ),
			Comment( "" ),
			Locale( "" ),
			ColorStyle( 2 )
		),
		Custom(
			Title( "NTSB_maynot" ),
			Example( "" ),
			Regex(
				"(\bNTSB investigators either traveled in support of this investigation or conducted a significant amount of investigative work without any travel, and used data obtained from various sources to prepare this\b\s*[public]*\s*\baircraft accident report\b\.)"
			),
			Result( "NTSB_either" ),
			Comment( "" ),
			Locale( "" ),
			ColorStyle( 6 )
		),
		Custom(
			Title( "foreign" ),
			Example( "" ),
			Regex(
				"(\bThe foreign authority was the source of this information\b\.)"
			),
			Result( "NTSB_foreign" ),
			Comment( "" ),
			Locale( "" ),
			ColorStyle( 1 )
		),
		Library( "Words" )
	),
	Language( "English" )
);
```

**Code Explanation**:

1. Open data table.
2. Launch Text Explorer.
3. Select text columns.
4. Define custom regex patterns.
5. Set regex title "NTSB_traveled".
6. Define regex pattern for NTSB travel.
7. Set result for NTSB travel.
8. Define custom regex pattern "NTSB_notravel".
9. Define regex pattern for no travel.
10. Set result for no travel.



### Example 4
> **Summary**: Text Explorer visualizes reported illnesses by adding specific phrases, generating a word cloud, and applying stemming to terms in an ordered layout.

<!-- Keywords: #JMPScriptingLanguage, #TextExplorer, #DataAnalysis, #WordCloud, #Stemming -->

**Code**:
```jsl
// Text Explorer for reported illnesses
// Open data table
dt = Open("data_table.jmp");
// Text Explorer for reported illnesses
Text Explorer(
	Text Columns( :reported illnesses ),
	Add Phrases(
		{"allergy symptoms", "broken arm",
		"knee pain", "upset stomach"}
	),
	Show Word Cloud( 1 ),
	Layout( "Ordered" ),
	Coloring( "None" ),
	Stemming( "Stem All Terms" ),
	Tokenizing( "Basic Words" )
);
```

**Code Explanation**:

1. Open data table.
2. Launch Text Explorer.
3. Select text column.
4. Add specific phrases.
5. Enable word cloud.
6. Set layout to ordered.
7. Disable coloring.
8. Apply stemming to terms.
9. Use basic tokenization.



### Example 5
> **Summary**: Implements sentiment analysis on a text column in a JMP data table, utilizing the Text Explorer platform with basic tokenizing and English language settings.

<!-- Keywords: #TextExplorer, #SentimentAnalysis, #JMPScriptingLanguage, #DataAnalysis, #NaturalLanguageProcessing -->

**Code**:
```jsl
// Text Explorer - Sentiment Analysis
// Open data table
dt = Open("data_table.jmp");
// Text Explorer - Sentiment Analysis
Text Explorer(
	Text Columns(
		:Potato Chip Product Review
	),
	Sentiment Analysis,
	Tokenizing( "Basic Words" ),
	Language( "English" )
);
```

**Code Explanation**:

1. Open table.
2. Launch Text Explorer.
3. Select text column.
4. Perform sentiment analysis.
5. Use basic tokenizing.
6. Set language to English.



### Example 6
> **Summary**: Generates a Text Explorer object to analyze adverse event terms from a data table, and then filters the results based on specific search terms.

<!-- Keywords: #TextExplorer, #LatentSemanticAnalysis, #TermLists, #Filtering, #DataAnalysis -->

**Code**:
```jsl
// Text Explorer: Adverse Event
// Open data table
dt = Open("data_table.jmp");
// Text Explorer: Adverse Event
_te =
Text Explorer(
	Text Columns(
		:
		Reported Term for the Adverse Event
	),
	Tokenizing( "Basic Words" ),
	Latent Semantic Analysis(
		1,
		Maximum Number of Terms( 92 ),
		Minimum Term Frequency( 10 ),
		Weighting( "TF IDF" ),
		Number of Singular Vectors( 5 ),
		Centering and Scaling(
			"Centered and Scaled"
		)
	)
);
_lst = Report( _te )[
"Term and Phrase Lists"][
String Col Box( 1 )] << get;
_rowvec =
Contains( _lst, "intracranial" ) |/
Contains( _lst, "pressure" ) |/
Contains( _lst, "increased" ) |/
Contains( _lst, "hepatic" ) |/
Contains( _lst, "function" ) |/
Contains( _lst, "abnormal" ) |/
Contains( _lst, "urinary" ) |/
Contains( _lst, "tract" ) |/
Contains( _lst, "infection" );
Report( _te )["Term and Phrase Lists"][
String Col Box( 1 )] <<
set selected rows( _rowvec );
```

**Code Explanation**:

1. Open data table.
2. Create Text Explorer object.
3. Specify text column.
4. Set tokenizing method.
5. Perform Latent Semantic Analysis.
6. Extract term lists.
7. Define search terms.
8. Identify matching rows.
9. Select matching terms.



### Example 7
> **Summary**: Opens a data table, launches Text Explorer with SVD plots to analyze survey responses, and applies latent semantic analysis with specific settings for term frequency and weighting.

<!-- Keywords: #TextExplorer, #SVDPlots, #LatentSemanticAnalysis, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
// Text Explorer with SVD Plots
// Open data table
dt = Open("data_table.jmp");
// Text Explorer with SVD Plots
Text Explorer(
	Text Columns( :Survey Response ),
	Set Regex( Library( "Words" ) ),
	Latent Semantic Analysis(
		1,
		Maximum Number of Terms( 143 ),
		Minimum Term Frequency( 2 ),
		Weighting( "TF IDF" ),
		Number of Singular Vectors( 100 ),
		Centering and Scaling(
			"Centered and Scaled"
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Launch Text Explorer.
3. Select text columns.
4. Set regex library.
5. Enable LSA.
6. Specify number of terms.
7. Set minimum term frequency.
8. Choose TF IDF weighting.
9. Define number of singular vectors.
10. Apply centering and scaling.



### Example 8
> **Summary**: Analyze text columns in a data table by applying regular expressions to extract relevant information, utilizing libraries and language settings.

<!-- Keywords: #TextAnalysis, #RegularExpressions, #DataTable, #JMPScriptingLanguage, #Automation -->

**Code**:
```jsl
Open("data_table.jmp");
te = Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex(
		Library( "Money" ),
		Library( "Common Emoticons" ),
		Library( "Words" ),
		Library( "HTML Link Grabber" ),
		Library( "Time" ),
		Library( "Numbers" ),
		Library( "Phrasing Punctuation" )
	),
	Language( "English" )
);
Report( te ) << Set Window Size( 500, 600 );
```

**Code Explanation**:

1. Open data table.
2. Initialize Text Explorer.
3. Specify text column for analysis.
4. Load regex libraries.
5. Set language to English.
6. Generate report from Text Explorer.
7. Set window size for report.



### Example 9
> **Summary**: Runs text analysis and visualization by creating a Text Explorer object to extract insights from the 'Reasons Not to Floss' column, generating reports with customizable window sizes, and displaying pictures in a new window.

<!-- Keywords: #TextAnalysis, #Visualization, #JMPScriptingLanguage, #DataExploration, #Customization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
te = Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex(
		Library( "Money" ),
		Library( "Common Emoticons" ),
		Library( "Words" ),
		Library( "HTML Link Grabber" ),
		Library( "Time" ),
		Library( "Numbers" ),
		Library( "Phrasing Punctuation" )
	),
	Language( "English" )
);
Report( te ) << Set Window Size( 500, 600 );
New Window( "pictures",
	H List Box(
		Tab Page Box( "GetPicture(Default)", te << Get Picture( Type( "Bitmap" ), View( "Screen" ) ) ),
		Tab Page Box( "GetPicture(Current)", te << Get Picture( Type( "Bitmap" ), View( "Screen" ), Appearance( "Current" ) ) )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create Text Explorer object.
3. Specify text columns for analysis.
4. Set regex libraries for text processing.
5. Set language to English.
6. Generate report from Text Explorer.
7. Set window size for report.
8. Create new window for pictures.
9. Add horizontal list box to window.
10. Add tab pages for different picture views.



### Example 10
> **Summary**: Generates a Text Explorer report with regex libraries and language settings, while also attempting to capture and display pictures from the Text Explorer.

<!-- Keywords: #TextExplorer, #RegexLibraries, #PictureCapture, #JSLScripting, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
te = Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex(
		Library( "Money" ),
		Library( "Common Emoticons" ),
		Library( "Words" ),
		Library( "HTML Link Grabber" ),
		Library( "Time" ),
		Library( "Numbers" ),
		Library( "Phrasing Punctuation" )
	),
	Language( "English" )
);
Report( te ) << Set Window Size( 500, 600 );
If( 0,
	pict = te << Get Picture();
	pict << Save Image( "$TEMP/te.png", "png" );
	pngName = "$TEMP/testGetPictureViewOptions.png";
	If( File Exists( pngName ),
		Delete File( pngName )
	);
	te << Save Capture( pngName, "png" );
	capturePic = New Image( pngName );
	New Window( "pictures",
		H List Box(
			Tab Page Box( "Picture", te << Get Picture( Type( "Bitmap" ) ) ),
			Tab Page Box( "GetPicture(Print)", te << Get Picture( Type( "Bitmap" ), View( "Print" ) ) ),
			Tab Page Box( "GetPicture(Screen)", te << Get Picture( Type( "Bitmap" ), View( "Screen" ) ) ),
			Tab Page Box( "Capture", capturePic )
		)
	);
);
```

**Code Explanation**:

1. Open data table.
2. Create Text Explorer object.
3. Set regex libraries.
4. Set language to English.
5. Generate report from Text Explorer.
6. Set window size.
7. Check condition (always false).
8. Attempt to get picture (not executed).
9. Save image to temporary file (not executed).
10. Delete existing PNG file if exists (not executed).



### Example 11
> **Summary**: Creates a Text Explorer object with specified regex libraries and language, then generates a report with customizable window size.

<!-- Keywords: #JSLScripting, #TextExplorer, #RegexLibraries, #LanguageSettings, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
te = Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex(
		Library( "Money" ),
		Library( "Common Emoticons" ),
		Library( "Words" ),
		Library( "HTML Link Grabber" ),
		Library( "Time" ),
		Library( "Numbers" ),
		Library( "Phrasing Punctuation" )
	),
	Language( "English" )
);
Report( te ) << Set Window Size( 500, 600 );
If( 0,
	pict = te << Get Picture();
	pict << Save Image( "$TEMP/te.png", "png" );
	Try( Delete File( "$TEMP/capture.png" ) );
	te << Save Capture( "$TEMP/capture.png", "png" );
	Local( {capturePic},
		capturePic = New Image( "$TEMP/capture.png" );
		New Window( "pictures",
			H List Box(
				Tab Page Box( "Picture", te << Get Picture( Type( "Bitmap" ), SubRect( 100, 100, 300, 300 ) ) ),
				Tab Page Box( "GetPicture(Print)", te << Get Picture( Type( "Bitmap" ), View( "Print" ), SubRect( 100, 100, 300, 300 ) ) ),
				Tab Page Box(
					"GetPicture(Screen)",
					te << Get Picture( Type( "Bitmap" ), View( "Screen" ), SubRect( 100, 100, 300, 300 ) )
				),
				Tab Page Box( "Capture", capturePic )
			)
		);
	);
);
```

**Code Explanation**:

1. Open data table.
2. Create Text Explorer object.
3. Set regex libraries.
4. Set language to English.
5. Report Text Explorer.
6. Set window size.
7. Check condition (always false).
8. Get picture from Text Explorer.
9. Save image to temp.
10. Delete existing capture file.
11. Save capture to temp.
12. Create new image from capture.
13. Open new window with pictures.



### Example 12
> **Summary**: Generates a word cloud from text columns in a JMP data table, using a Text Explorer with specified settings for layout, coloring, and language.

<!-- Keywords: #JMPScriptingLanguage, #TextExplorer, #WordCloud, #DataTable, #Automation -->

**Code**:
```jsl
Open("data_table.jmp");
Text Explorer(
	Text Columns( :Survey Response ),
	Set Regex( Library( "Words" ) ),
	Show Word Cloud( 1 ),
	Layout( "Centered" ),
	Coloring( "Arbitrary Colors" ),
	Language( "English" ),
	SendToReport(
		Dispatch( {}, "Term and Phrase Lists", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Term and Phrase Lists"}, "", TableBox, {Set Summary Behavior( "Collapse" )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Launch Text Explorer.
3. Select text column.
4. Use word library.
5. Enable word cloud.
6. Center layout.
7. Use arbitrary colors.
8. Set language to English.
9. Close term list outline.
10. Collapse term list summary.



### Example 13
> **Summary**: Analyze and visualize text data from a specified column, utilizing Text Explorer to perform Latent Semantic Analysis (LSA), sentiment analysis, clustering, and word cloud generation.

<!-- Keywords: #TextAnalysis, #LatentSemanticAnalysis, #SentimentAnalysis, #WordCloud, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex( Library( "Words" ) ),
	Show Word Cloud( 1 ),
	Latent Semantic Analysis(
		1,
		Maximum Number of Terms( 95 ),
		Minimum Term Frequency( 4 ),
		Weighting( "TF IDF" ),
		Number of Singular Vectors( 80 ),
		Centering and Scaling( "Centered and Scaled" )
	),
	Sentiment Analysis,
	Cluster Terms( 1 ),
	Layout( "Alphabetical" ),
	Coloring( "By column values", :Salary Group ),
	Font( "Segoe UI", 11, "Plain" ),
	SendToReport(
		Dispatch( {}, "Term and Phrase Lists", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Word Cloud"}, "1", ScaleBox,
			{Legend Model(
				1,
				Properties(
					0,
					{gradient(
						{Min Lightness( 0.2 ), Max Lightness( 0.6 ), Width( 12 ), Scale Type( "Standard Deviation" ), N Labels( 6 )}
					)}
				)
			)}
		),
		Dispatch( {"Word Cloud"}, "1", LegendBox, {Set Title( "Salary Group" )} ),
		Dispatch( {}, "SVD Plots", OutlineBox, {Close( 1 )} ),
		Dispatch( {"SVD Centered and Scaled TF IDF", "Clustering Terms"}, "Text SVD", FrameBox( 2 ), {Frame Size( 275, 598 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Initiate Text Explorer.
3. Specify text columns.
4. Set regex library.
5. Display word cloud.
6. Perform LSA analysis.
7. Conduct sentiment analysis.
8. Cluster terms.
9. Arrange layout alphabetically.
10. Color by column values.



### Example 14
> **Summary**: Analyze text data by generating a word cloud and performing latent semantic analysis, sentiment analysis, and clustering terms to extract insights from the Reasons Not to Floss column.

<!-- Keywords: #TextAnalysis, #LatentSemanticAnalysis, #SentimentAnalysis, #Clustering, #JMP -->

**Code**:
```jsl
Open("data_table.jmp");
Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex( Library( "Words" ) ),
	Show Word Cloud( 1 ),
	Latent Semantic Analysis(
		1,
		Maximum Number of Terms( 95 ),
		Minimum Term Frequency( 4 ),
		Weighting( "TF IDF" ),
		Number of Singular Vectors( 80 ),
		Centering and Scaling( "Centered and Scaled" )
	),
	Sentiment Analysis,
	Cluster Terms( 1 ),
	Layout( "Centered" ),
	Coloring( "None" ),
	SendToReport(
		Dispatch( {}, "Term and Phrase Lists", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "SVD Plots", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Initiate Text Explorer.
3. Select text column.
4. Set regex library.
5. Display word cloud.
6. Perform LSA analysis.
7. Configure LSA parameters.
8. Conduct sentiment analysis.
9. Cluster terms.
10. Adjust layout and coloring.



### Example 15
> **Summary**: Analyze 'Reasons Not to Floss' column by creating a Text Explorer object and applying Latent Semantic Analysis with specified parameters.

<!-- Keywords: #TextExplorer, #LatentSemanticAnalysis, #JMPScriptingLanguage, #DataAnalysis, #NaturalLanguageProcessing -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
```

**Code Explanation**:

1. Open data table.
2. Create Text Explorer object.
3. Analyze "Reasons Not to Floss" column.



### Example 16
> **Summary**: Generates a word cloud from text columns in a JMP data table, utilizing Text Explorer to analyze and visualize the Reasons Not to Floss survey responses.

<!-- Keywords: #TextExplorer, #WordCloud, #JMPScriptingLanguage, #DataAnalysis, #SurveyResponse -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj << Show Word Cloud( 1 );
```

**Code Explanation**:

1. Set default names scope.
2. Open data table.
3. Create Text Explorer object.
4. Specify text column for analysis.
5. Display word cloud.



### Example 17
> **Summary**: Runs text exploration and processing by transforming the 'name' column to title case, setting regex libraries for processing, and selecting English as the language.

<!-- Keywords: #TextExplorer, #JSLScriptingLanguage, #DataPreprocessing, #RegexLibraries, #EnglishLanguage -->

**Code**:
```jsl
Open("data_table.jmp");
Text Explorer(
	Text Columns( Transform Column( "Titlecase[name]", Character, Formula( Titlecase( :name ) ) ) ),
	Set Regex(
		Library( "Money" ),
		Library( "Common Emoticons" ),
		Library( "Words" ),
		Library( "HTML Link Grabber" ),
		Library( "Time" ),
		Library( "Numbers" ),
		Library( "Phrasing Punctuation" )
	),
	Language( "English" )
);
```

**Code Explanation**:

1. Open data table;
2. Initiate Text Explorer tool.
3. Transform "name" column to title case.
4. Set regex libraries for processing.
5. Include Money library.
6. Include Common Emoticons library.
7. Include Words library.
8. Include HTML Link Grabber library.
9. Include Time library.
10. Include Numbers library.
11. Include Phrasing Punctuation library.
12. Set language to English.



### Example 18
> **Summary**: Generates a text explorer report for the 'Airline' column, displaying summary counts and retrieving their existence.

<!-- Keywords: #TextExplorer, #SummaryCounts, #ReportGeneration, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Text Explorer( Text Columns( :Airline ) );
obj << show summary counts( 0 );
rpt = obj << report;
summaryCountsExists = rpt[Outline Box( "Text Explorer for Airline" )][If Box( 1 )] << get;
```

**Code Explanation**:

1. Open data table;
2. Launch Text Explorer on "Airline" column.
3. Hide summary counts.
4. Generate Text Explorer report.
5. Retrieve summary counts existence.



### Example 19
> **Summary**: Analyze text columns in a data table, grouping by event and saving the script to the data table.

<!-- Keywords: #TextExplorer, #ByGroup, #Scripting, #DataAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Text Explorer( Text Columns( :Airline ), By( :Event ) );
obj << Save ByGroup Script to Data Table;
script = Collapse Whitespace( dt << get table variable( "Text Explorer of Airline" ) );
expectedResults = Collapse Whitespace(
	"Text Explorer( Text Columns( :Airline ), Set Regex( Library( \!"Money\!" ), Library( \!"Common Emoticons\!" ), Library( \!"Words\!" ), Library( \!"HTML Link Grabber\!" ), Library( \!"Time\!" ), Library( \!"Numbers\!" ), Library( \!"Phrasing Punctuation\!" ) ), Language( \!"English\!" ), By( :Event ) )"
);
```

**Code Explanation**:

1. Open data table.
2. Launch Text Explorer.
3. Analyze Airline column.
4. Group by Event column.
5. Save script to data table.
6. Retrieve Text Explorer script.
7. Collapse script whitespace.
8. Define expected results.
9. Collapse expected results whitespace.
10. Compare script with expected results.



### Example 20
> **Summary**: Runs the extraction and organization of text columns with specific regex libraries, utilizing Text Explorer to generate a report with term and phrase lists.

<!-- Keywords: #TextExplorer, #RegexLibraries, #TermAndPhraseLists, #ReportGeneration, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex(
		Library( "Money" ),
		Library( "Common Emoticons" ),
		Library( "Words" ),
		Library( "HTML Link Grabber" ),
		Library( "Time" ),
		Library( "Numbers" ),
		Library( "Phrasing Punctuation" )
	),
	Show Filters for All Tables( 0 ),
	Show Phrase List( 0 ),
	Show Term List( 0 ),
	Terms Alphabetical( 1 ),
	Phrases Alphabetical( 1 ),
	Language( "English" )
);
rpt = Report( obj );
Try( dtTerm = rpt[Outline Box( "Term and Phrase Lists" )][Border Box( 1 )][Table Box( 1 )] << Get, exception_msg );
te_err = Collapse Whitespace( Char( Name Expr( exception_msg ) ) );
```

**Code Explanation**:

1. Open data table.
2. Launch Text Explorer.
3. Specify text column.
4. Set regex libraries.
5. Hide all filters.
6. Hide phrase list.
7. Hide term list.
8. Sort terms alphabetically.
9. Sort phrases alphabetically.
10. Set language to English.



### Example 21
> **Summary**: Analyze text columns in a data table by launching a Text Explorer, selecting specific rows, and displaying selected rows with collapsed whitespace.

<!-- Keywords: #TextExplorer, #DataTable, #RegexLibrary, #SelectedRows, #WhitespaceCollapse -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Set Regex( Library( "Words" ) ), Show Term and Phrase Options( 1 ) );
dt << Select Rows( [1 2 3 4] );
obj << Show Selected Rows();
te_w = Window( "Context for Selected Rows" );
te_content = te_w << get text;
te_content = Collapse Whitespace( Char( Name Expr( te_content ) ) );
te_w << close window;
```

**Code Explanation**:

1. Open data table.
2. Launch Text Explorer.
3. Specify text column.
4. Use regex library.
5. Enable term and phrase options.
6. Select specific rows.
7. Display selected rows in Text Explorer.
8. Get window for selected rows.
9. Extract text content.
10. Collapse whitespace in text.



### Example 22
> **Summary**: Extracts and reports text columns from a data table, specifically retrieving tokens per case using Text Explorer.

<!-- Keywords: #TextExplorer, #DataTable, #Reporting, #JSLScripting, #TokenExtraction -->

**Code**:
```jsl
dt = Open("data_table.jmp");
te = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
rpt = te << report;
tokensPerCase = rpt[Outline Box( 1 )][Number Col Box( 4 )] << get format;
```

**Code Explanation**:

1. Open data table.
2. Launch Text Explorer on column.
3. Extract Text Explorer report.
4. Access Outline Box.
5. Retrieve Number Col Box.
6. Get format of tokens per case.



### Example 23
> **Summary**: Extracts and analyzes term and phrase lists from a text column in a JMP data table, utilizing Text Explorer to generate reports and convert extracted lists into a new data table.

<!-- Keywords: #JMPScriptingLanguage, #TextExplorer, #DataTableManipulation, #PhraseExtraction, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
te = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Maximum words per phrase( 2 ) );
rpt = te << report;
dtPhrase = rpt[Outline Box( "Term and Phrase Lists" )][Border Box( 2 )][Table Box( 1 )] << make into data table;
dtPhrase << Set Name( "Phrase" );
valuesN = :N << get values;
maxN = V Max( valuesN );
```

**Code Explanation**:

1. Open data table.
2. Launch Text Explorer on Reasons Not to Floss.
3. Set maximum words per phrase to 2.
4. Generate Text Explorer report.
5. Extract Term and Phrase Lists from report.
6. Convert extracted lists to data table.
7. Rename new data table to Phrase.
8. Retrieve values from N column.
9. Find maximum value in N column.



### Example 24
> **Summary**: Process of text exploration and scoring words by column in a data table, utilizing Text Explorer to analyze the 'Reasons Not to Floss' column.

<!-- Keywords: #TextExplorer, #DataTable, #JSLScripting, #ColumnScoring, #WordAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
te = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
te << Score Words by Column( :Floss );
dtScoreWordsByCol = Data Table("data_table");
```

**Code Explanation**:

1. Open data table.
2. Launch Text Explorer.
3. Specify text column.
4. Score words by column.
5. Retrieve scored data table.



### Example 25
> **Summary**: Process of extracting stop words from a text column in a JMP data table, utilizing Text Explorer and stemming for efficient analysis.

<!-- Keywords: #JMP, #TextExplorer, #Stemming, #StopWords, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
te = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
te << stemming( "Stem for combining" );
te << show stop words;
te << Show Term and PhraseOptions( 1 );
rpt = te << report;
rpt[Outline Box( "Term and Phrase Lists" )][String Col Box( 1 )] << set selected rows( [1, 1] );
rpt[Outline Box( "Term and Phrase Lists" )][Lineup Box( 2 )][Button Box( 7 )] << click;
dtStopWords = rpt[Outline Box( "Stop Words" )][Table Box( 1 )] << make into data table;
dtStopWords << Set Name( "Stop Words" );
expResult = {{:Stop Word = "floss"}, {:Stop Word = "flossed"}, {:Stop Word = "flossing"}};
actResult = dtStopWords << get rows( {51, 52, 53} );
```

**Code Explanation**:

1. Open data table.
2. Launch Text Explorer.
3. Select text column.
4. Apply stemming.
5. Show stop words.
6. Show term options.
7. Generate report.
8. Select specific terms.
9. Click button box.
10. Extract stop words table.



### Example 26
> **Summary**: Process of text exploration and topic modeling for a given data table, utilizing Text Explorer to extract insights from the 'Reasons Not to Floss' column.

<!-- Keywords: #TextExplorer, #TopicModeling, #DataAnalysis, #JMPScriptingLanguage, #NaturalLanguageProcessing -->

**Code**:
```jsl
dt = Open("data_table.jmp");
te = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Tokenizing( "Faster" ) );
te << Save DTM Formula( 1, Maximum Number of Terms( 94 ), Minimum Term Frequency( 4 ), Weighting( "Frequency" ) );
logS1222559 = Get Log( -2 );
```

**Code Explanation**:

1. Open data table.
2. Launch Text Explorer.
3. Select text column.
4. Set tokenizing word.
5. Save DTM formula.
6. Define maximum terms.
7. Define minimum frequency.
8. Set weighting method.
9. Get log value.
10. Assign log value.



### Example 27
> **Summary**: Process of text exploration and sentiment analysis on a data table, utilizing Text Explorer to extract insights from the 'Reasons Not to Floss' column.

<!-- Keywords: #TextExplorer, #SentimentAnalysis, #DataTable, #JSLScripting, #NaturalLanguageProcessing -->

**Code**:
```jsl
dt = Open("data_table.jmp");
te = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex( Library( "Words" ) ),
	Add Phrases( {"once a day"} ),
	Add Recodes( {"not", "not1"} ),
	Stemming( "Stem for combining" )
);
te << Save DTM Formula( 1, Maximum Number of Terms( 94 ), Minimum Term Frequency( 4 ), Weighting( "Frequency" ) );
log = Get Log( -2 );
```

**Code Explanation**:

1. Open data table.
2. Launch Text Explorer.
3. Select text column.
4. Set regex library.
5. Add specific phrases.
6. Add recodes.
7. Enable stemming.
8. Save DTM formula.
9. Set max terms.
10. Set min term frequency.
11. Set weighting method.
12. Retrieve log.



### Example 28
> **Summary**: Analyze text data by launching a Text Explorer on a specific column, applying regex library 'Words', and generating a word cloud with ordered layout and no coloring.

<!-- Keywords: #TextAnalysis, #Regex, #WordCloud, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex( Library( "Words" ) ),
	Show Word Cloud( 1 ),
	Layout( "Ordered" ),
	Coloring( "None" )
);
rpt = obj << report;
obj << Show Legend( 0 );
```

**Code Explanation**:

1. Open data table;
2. Launch Text Explorer on column.
3. Set regex library to "Words".
4. Display word cloud.
5. Arrange layout in order.
6. Apply no coloring.
7. Retrieve report object.
8. Hide legend.



### Example 29
> **Summary**: Process of text exploration by opening a data table, selecting a text column, applying stemming, and generating a report object.

<!-- Keywords: #TextExplorer, #Stemming, #DataTable, #ReportObject, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Stemming( "Stem for Combining" ) );
rpt = Report( obj );
stemException = rpt[Outline Box( "Term and Phrase Lists" )][String Col Box( 1 )] << get( 1 );
```

**Code Explanation**:

1. Open data table.
2. Launch Text Explorer.
3. Select text column.
4. Apply stemming method.
5. Generate report object.
6. Access term and phrase list.
7. Retrieve first string column.
8. Get first item from column.



### Example 30
> **Summary**: Analyze reasons not to floss by launching a Text Explorer, adding stopword exceptions, and generating a report with terms sorted alphabetically.

<!-- Keywords: #TextExplorer, #Stopwords, #TermSorting, #ReportGeneration, #JSLScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
te = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
te << add stopword exceptions( {"am"} );
te << terms alphabetical( 1 );
rpt = te << report;
numberOfTerms = rpt[Number Col Box( 1 )] << get;
am = rpt[Outline Box( "Term and Phrase Lists" )][String Col Box( 1 )] << get( 14 );
```

**Code Explanation**:

1. Open data table;
2. Launch Text Explorer.
3. Analyze Reasons Not to Floss.
4. Add "am" to stopwords.
5. Sort terms alphabetically.
6. Generate report.
7. Extract number of terms.
8. Access Term and Phrase Lists.
9. Retrieve 14th term.
10. Assign to variable am.



### Example 31
> **Summary**: Analyze text data by filtering a data table based on gender and generating a report using Text Explorer.

<!-- Keywords: #TextExplorer, #DataFiltering, #ReportGeneration, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
te = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex( Library( "Words" ) ),
	Local Data Filter( Add Filter( columns( :Gender ), Where( :Gender == 1 ) ) )
);
rpt = te << report;
```

**Code Explanation**:

1. Open data table.
2. Launch Text Explorer.
3. Select text column.
4. Set regex library.
5. Add local data filter.
6. Filter by gender.
7. Generate report.



### Example 32
> **Summary**: Runs the Text Explorer to analyze text columns, set regex library, and apply stemming method for a specified data table.

<!-- Keywords: #TextExplorer, #JSLScriptingLanguage, #DataAnalysis, #NaturalLanguageProcessing, #Stemming -->

**Code**:
```jsl
dt = Open("data_table.jmp");
te = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Set Regex( Library( "Words" ) ), Stemming( "Stem for Combining" ) );
rpt = te << report;
te << show stem report( 1 );
te << stemming( "Stem All Terms" );
script = te << get script;
script = Char( Name Expr( script ) );
expectedResults =
"Text Explorer(Text Columns(:Reasons Not to Floss), Set Regex(Library(\!"Words\!")), Stemming(\!"Stem All Terms\!"), Language(\!"English\!"), Show Stem Report(1))";
```

**Code Explanation**:

1. Open data table.
2. Launch Text Explorer.
3. Specify text columns.
4. Set regex library.
5. Apply stemming method.
6. Generate report.
7. Display stem report.
8. Change stemming to all terms.
9. Retrieve script.
10. Convert script to character.



### Example 33
> **Summary**: Process of text exploration in JMP, using a Text Explorer to analyze reasons not to floss and generate a report with specified phrases.

<!-- Keywords: #JMP, #TextExplorer, #Regex, #PhraseExceptions, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
te = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Set Regex( Library( "Words" ) ) );
te << Add Phrase exceptions( {"addis ababa"} );
te << Show Specified Phrases( 1 );
rpt = te << report;
expectedResults =
"Text Explorer(Text Columns(:Reasons Not to Floss), Set Regex(Library(\!"Words\!")), Add Phrase Exceptions({\!"addis ababa\!"}), Show Specified Phrases(1), Language(\!"English\!"))";
script = te << get script;
script = Char( Name Expr( script ) );
specifiedPhrase = rpt[Outline Box( "Specified Phrases" )][String Col Box( 1 )] << get( 1 );
```

**Code Explanation**:

1. Open data table;
2. Launch Text Explorer.
3. Select Reasons Not to Floss.
4. Set regex library to Words.
5. Add phrase exception: addis ababa.
6. Show specified phrases.
7. Generate report.
8. Define expected results string.
9. Get Text Explorer script.
10. Convert script to character.



### Example 34
> **Summary**: Records text columns in a data table, generating a report with specified terms and phrases.

<!-- Keywords: #TextExplorer, #RecodeTerms, #DataTable, #JSLScripting, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
te = dt << Text Explorer( Text Columns( :Airline ) );
te << Add Recodes( {"delta", "delta1"} );
rpt = te << report;
expectedRecode = rpt[Outline Box( "Term and Phrase Lists" )][String Col Box( 1 )] << get( 2 );
```

**Code Explanation**:

1. Open data table.
2. Launch Text Explorer.
3. Specify text column.
4. Add recode terms.
5. Generate report.
6. Access term list outline box.
7. Get string column box.
8. Retrieve second element.



### Example 35
> **Summary**: Runs the tokenization of text columns using Text Explorer, specifying basic words and English language.

<!-- Keywords: #TextExplorer, #Tokenizing, #JMPScriptingLanguage, #DataAnalysis, #NaturalLanguageProcessing -->

**Code**:
```jsl
dt = Open("data_table.jmp");
te = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
te << Tokenizing( "basic words" );
script = te << get script;
script = Char( Name Expr( script ) );
expectedResults = "Text Explorer(Text Columns(:Reasons Not to Floss), Tokenizing(\!"Basic Words\!"), Language(\!"English\!"))";
```

**Code Explanation**:

1. Open data table.
2. Launch Text Explorer on column.
3. Set tokenizing method.
4. Retrieve script object.
5. Convert script to character.
6. Define expected results string.



### Example 36
> **Summary**: Process of text analysis by extracting term and phrase lists from a data table, utilizing Text Explorer to identify stop phrases.

<!-- Keywords: #TextExplorer, #JSLScriptingLanguage, #DataAnalysis, #TermAndPhraseLists, #StopPhrases -->

**Code**:
```jsl
dt = Open("data_table.jmp");
te = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Set Regex( Library( "Words" ) ) );
te << Add Phrases( {"once a day"} );
te << Add Stop Words( {"once a day"} );
rpt = te << report;
dtTerm = rpt[Outline Box( "Term and Phrase Lists" )][Border Box( 1 )][Table Box( 1 )] << make into data table;
containsStopPhrase = Contains( Char( Column( dtTerm, 1 ) << get script ), "once a day" );
```

**Code Explanation**:

1. Open data table.
2. Launch Text Explorer.
3. Select text column for analysis.
4. Set regex library to "Words".
5. Add phrase "once a day".
6. Add stop word "once a day".
7. Generate report from Text Explorer.
8. Extract term and phrase lists into data table.
9. Check if "once a day" is a stop phrase.
10. Assign result to variable.



### Example 37
> **Summary**: Process of identifying stop words and phrases in a text column, utilizing Text Explorer to analyze the Reasons Not to Floss survey responses.

<!-- Keywords: #TextExplorer, #StopWords, #Phrases, #Regex, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
te = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Set Regex( Library( "Words" ) ) );
te << Add Stop Words( {"once a day"} );
te << Add Phrases( {"once a day"} );
rpt = te << report;
dtStopWords = rpt[Outline Box( "Stop Words" )][Table Box( 1 )] << make into data table;
containsStopWord = Contains( Char( Column( dtStopWords, 1 ) << get script ), "once a day" );
Close( dtStopWords, NoSave );
dtTerm = rpt[Outline Box( "Term and Phrase Lists" )][Border Box( 1 )][Table Box( 1 )] << make into data table;
containsStopPhrase = Contains( Char( Column( dtTerm, 1 ) << get script ), "once a day" );
```

**Code Explanation**:

1. Open data table.
2. Launch Text Explorer.
3. Set text column for analysis.
4. Load regex library.
5. Add stop word.
6. Add phrase.
7. Generate report.
8. Extract stop words table.
9. Check for specific stop word.
10. Close stop words table.
11. Extract term and phrase table.
12. Check for specific phrase.



### Example 38
> **Summary**: Analyze text data in a JMP data table by launching a Text Explorer on 'Reasons Not to Floss' column, setting regex library to 'Words', adding phrases and recodes, and generating a report.

<!-- Keywords: #JMP, #TextExplorer, #Regex, #DataAnalysis, #Scripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
te = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex( Library( "Words" ) ),
	Add Phrases( {"once a day"} ),
	Add Recodes( {{"floss", "once a day"}} )
);
rpt = te << report;
```

**Code Explanation**:

1. Open data table;
2. Launch Text Explorer on Reasons Not to Floss.
3. Set regex library to "Words".
4. Add phrase "once a day".
5. Add recode for "floss" and "once a day".
6. Generate Text Explorer report.



### Example 39
> **Summary**: Extracts and analyzes text phrases from a data table, utilizing Text Explorer to identify key terms and phrases.

<!-- Keywords: #TextExplorer, #DataAnalysis, #JMPScriptingLanguage, #PhraseExtraction, #DataMining -->

**Code**:
```jsl
dt = Open("data_table.jmp");
te = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Minimum characters per word( 5 ), Maximum number of phrases( 10 ) );
rpt = te << report;
dtPhrase = rpt[Outline Box( "Term and Phrase Lists" )][Border Box( 2 )][Table Box( 1 )] << make into data table;
dtPhrase << Set Name( "Phrase" );
```

**Code Explanation**:

1. Open data table.
2. Launch Text Explorer.
3. Analyze "Reasons Not to Floss".
4. Set minimum word length.
5. Limit maximum phrases.
6. Retrieve Text Explorer report.
7. Extract term and phrase lists.
8. Convert to data table.
9. Rename new data table.
10. Save changes.



### Example 40
> **Summary**: Runs text exploration and analysis by opening a data table, specifying text columns, setting terms alphabetical, enabling stemming, tokenizing basic words, treating numbers as words, generating a report, and retrieving the first term.

<!-- Keywords: #TextExplorer, #DataAnalysis, #JMPScriptingLanguage, #NaturalLanguageProcessing, #DataMining -->

**Code**:
```jsl
dt = Open("data_table.jmp");
te = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Terms Alphabetical( 1 ),
	Stemming( "Stem for Combining" ),
	Tokenizing( "Basic Words" )
);
te << Treat Numbers as Words( 1 );
rpt = te << report;
firstTerm = rpt[Outline Box( "Term and Phrase Lists" )][String Col Box( 1 )] << get( 1 );
```

**Code Explanation**:

1. Open table.
2. Launch Text Explorer.
3. Specify text column.
4. Set terms alphabetical.
5. Enable stemming.
6. Use basic tokenizing.
7. Treat numbers as words.
8. Generate report.
9. Access term and phrase lists.
10. Retrieve first term.



### Example 41
> **Summary**: Analyze text data by launching a Text Explorer on 'Reasons Not to Floss' and extracting specific terms and phrases, while also creating a new table with a Text Explorer for further processing.

<!-- Keywords: #TextExplorer, #JSLScriptingLanguage, #DataAnalysis, #TermExtraction, #Regex -->

**Code**:
```jsl
dt = Open("data_table.jmp");
te = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex( Library( "Words" ) ),
	Add Phrases( {"per day", "floss once"} ),
	Add Recodes( {{"per day", "floss once"}} )
);
rpt = te << report;
flossOnce = rpt[Outline Box( "Term and Phrase Lists" )][String Col Box( 1 )] << get( 12 );
flossOnceCount = rpt[Outline Box( "Term and Phrase Lists" )][Number Col Box( 1 )] << get( 12 );
Close( dt, NoSave );
dt = New Table( "S1252339", Add Rows( 2 ), New Column( "Column 1", Character, "Nominal", Set Values( {"t cell", "t's cells"} ) ) );
te = dt << Text Explorer(
	Text Columns( :Column 1 ),
	Set Regex( Library( "Words" ) ),
	Terms Alphabetical( 1 ),
	Add Phrases( {"t cell"} ),
	Stemming( "Stem All Terms" ),
	Minimum characters per Word( 2 )
);
rpt = te << report;
firstTerm = rpt[Outline Box( "Term and Phrase Lists" )][String Col Box( 1 )] << get( 1 );
secondTerm = rpt[Outline Box( "Term and Phrase Lists" )][String Col Box( 1 )] << get( 2 );
thirdTerm = rpt[Outline Box( "Term and Phrase Lists" )][String Col Box( 1 )] << get( 3 );
```

**Code Explanation**:

1. Open data table;
2. Launch Text Explorer on "Reasons Not to Floss".
3. Set regex library to "Words".
4. Add phrases "per day", "floss once".
5. Add recodes for phrases.
6. Generate Text Explorer report.
7. Extract term "floss once".
8. Extract count for "floss once".
9. Close table without saving.
10. Create new table "S1252339" with two rows.
11. Launch Text Explorer on "Column 1".
12. Set regex library to "Words".
13. Sort terms alphabetically.
14. Add phrase "t cell".
15. Enable stemming for all terms.
16. Set minimum word length to 2.
17. Generate Text Explorer report.
18. Extract first term from report.
19. Extract second term from report.
20. Extract third term from report.



### Example 42
> **Summary**: Extracts a specific stemmed term from a text column in Spanish, utilizing Text Explorer and report generation.

<!-- Keywords: #TextExplorer, #SpanishLanguage, #Stemming, #ReportGeneration, #JSLScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
te = dt << Text Explorer( Text Columns( :Survey Response ), Language( "Spanish" ), Stemming( "Stem All Terms" ), Terms Alphabetical( 1 ) );
rpt = te << report;
esStemmedTerm = rpt[Outline Box( "Term and Phrase Lists" )][String Col Box( 1 )] << get( 424 );
```

**Code Explanation**:

1. Open data table.
2. Launch Text Explorer.
3. Specify text column.
4. Set language to Spanish.
5. Enable stemming for all terms.
6. Sort terms alphabetically.
7. Generate report.
8. Access term list outline box.
9. Retrieve string column box.
10. Extract 424th stemmed term.



### Example 43
> **Summary**: Extracts and reports text columns with stem exceptions using Text Explorer in JMP.

<!-- Keywords: #JMPScriptingLanguage, #TextExplorer, #StemExceptions, #RegexLibraries, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
te = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex(
		Library( "Domain names" ),
		Library( "Dotted Name Identifiers" ),
		Library( "Money" ),
		Library( "Words" ),
		Library( "HTML Link Grabber" ),
		Library( "\[Bang!!! cleaner]\" ),
		Library( "Time" ),
		Library( "Numbers" )
	),
	Show Stem Exceptions( 1 )
);
rpt = te << report;
firstStemException = rpt[Outline Box( "Stem Exceptions" )][String Col Box( 1 )] << get( 1 );
secondStemException = rpt[Outline Box( "Stem Exceptions" )][String Col Box( 1 )] << get( 2 );
```

**Code Explanation**:

1. Open data table.
2. Launch Text Explorer.
3. Specify text column.
4. Set regex libraries.
5. Enable stem exceptions display.
6. Generate report.
7. Retrieve first stem exception.
8. Retrieve second stem exception.



### Example 44
> **Summary**: Analyze text columns in a data table, grouping by a specified variable and generating a document term matrix with binary weighting.

<!-- Keywords: #TextExplorer, #DocumentTermMatrix, #BinaryWeighting, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
te = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( :I am working on my career ) );
te[1] << Save Document Term Matrix( 1, Maximum Number of Terms( 80 ), Minimum Term Frequency( 2 ), Weighting( "Binary" ) );
```

**Code Explanation**:

1. Open data table.
2. Launch Text Explorer.
3. Specify text column for analysis.
4. Define grouping variable.
5. Access first Text Explorer instance.
6. Save document term matrix.
7. Set maximum number of terms.
8. Set minimum term frequency.
9. Choose binary weighting method.



### Example 45
> **Summary**: Extracts and reports term frequencies from a text column using Text Explorer, generating a data table with the results.

<!-- Keywords: #TextExplorer, #TermFrequencyAnalysis, #DataTableGeneration, #JMPScriptingLanguage, #NaturalLanguageProcessing -->

**Code**:
```jsl
dt = Open("data_table.jmp");
te = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Set Regex( Library( "Words" ) ) );
rpt = te << report;
numberOfTerms = Matrix( rpt[Number Col Box( 1 )] << get );
dtTerm = rpt[Outline Box( "Term and Phrase Lists" )][Border Box( 1 )][Table Box( 1 )] << make into data table;
numberOfRows = N Rows( dtTerm );
```

**Code Explanation**:

1. Open data table;
2. Launch Text Explorer.
3. Select Reasons Not to Floss.
4. Use Words regex library.
5. Generate report.
6. Extract number of terms.
7. Create term data table.
8. Count rows in term table.



### Example 46
> **Summary**: Extracts and analyzes text phrases from a data table, utilizing Text Explorer to identify relevant terms and phrases, and generating a report with phrase lists.

<!-- Keywords: #TextExplorer, #JSLScriptingLanguage, #DataAnalysis, #PhraseExtraction, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
te = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex(
		Library( "Domain names" ),
		Library( "Money" ),
		Library( "Words" ),
		Library( "HTML Link Grabber" ),
		Library( "\[Bang!!! cleaner]\" ),
		Library( "Time" ),
		Library( "Numbers" )
	),
	Minimum Frequency for Phrase( 1 ),
	Language( "English" )
);
rpt = te << report;
dtPhrase = rpt[Outline Box( "Term and Phrase Lists" )][Border Box( 2 )][Table Box( 1 )] << make into data table;
numberOfPhrases = N Rows( dtPhrase );
```

**Code Explanation**:

1. Open table.
2. Launch Text Explorer.
3. Specify text columns.
4. Set regex libraries.
5. Define minimum frequency.
6. Set language to English.
7. Generate report.
8. Extract phrase table.
9. Make phrase table into data table.
10. Count number of phrases.



### Example 47
> **Summary**: Creates a Text Explorer with custom regex libraries and word cloud display to analyze text columns in a data table.

<!-- Keywords: #TextExplorer, #RegexLibraries, #WordCloud, #DataAnalysis, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
te = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex(
		Library( "Domain names" ),
		Library( "Money" ),
		Library( "Words" ),
		Library( "HTML Link Grabber" ),
		Library( "\[Bang!!! cleaner]\" ),
		Library( "Time" ),
		Library( "Numbers" )
	),
	Show Word Cloud( 1 ),
	Layout( "Ordered" ),
	Coloring( "Arbitrary Grays" ),
	Language( "English" ),
	SendToReport(
		Dispatch( {"Word Cloud"}, "1", ScaleBox,
			{Legend Model(
				1,
				Properties(
					0,
					{gradient(
						{Color Theme( "Green to Black to Red" ), Min Lightness( 0.1 ), Max Lightness( 0.6 ), Width( 12 ), Show Labels( 0 )}
					)}
				)
			)}
		)
	)
);
te << Coloring( "Arbitrary Grays" );
script = te << get script;
script = Char( Name Expr( script ) );
```

**Code Explanation**:

1. Open table.
2. Launch Text Explorer.
3. Select text column.
4. Set regex libraries.
5. Enable word cloud display.
6. Set layout to ordered.
7. Apply coloring scheme.
8. Specify language as English.
9. Customize report legend.
10. Retrieve and convert script.



### Example 48
> **Summary**: Creates a word cloud from the 'Reasons Not to Floss' column in a data table, using Text Explorer and regex library

<!-- Keywords: #TextExplorer, #RegexLibrary, #WordCloud, #DataVisualization, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
te = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex( Library( "Words" ) ),
	Show Word Cloud( 1 ),
	Layout( "Ordered" ),
	Coloring( "Arbitrary Grays" )
);
script = te << get script;
script = Char( Name Expr( script ) );
```

**Code Explanation**:

1. Open data table;
2. Launch Text Explorer.
3. Select Reasons Not to Floss column.
4. Use Words regex library.
5. Show word cloud.
6. Order layout.
7. Use arbitrary grays coloring.
8. Get Text Explorer script.
9. Convert script to character.
10. Store script as variable.



### Example 49
> **Summary**: Extracts and adds term and phrase lists from a Text Explorer report, utilizing the 'Make into Data Table' feature.

<!-- Keywords: #JSLScripting, #TextExplorer, #DataManipulation, #PhraseLists, #TermExtraction -->

**Code**:
```jsl
dt = Open("data_table.jmp");
te = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
rpt = te << report;
dtPhrase = rpt[Outline Box( "Term and Phrase Lists" )][Border Box( 2 )][Table Box( 1 )] << make into data table;
tePhraseList = {};
For( i = 1, i <= N Row( dtPhrase ), i++,
	Insert Into( tePhraseList, dtPhrase:Phrase[i] )
);
Close( dtPhrase, NoSave );
te << Add Phrases( tePhraseList );
phraseTerm = rpt[Outline Box( "Term and Phrase Lists" )][String Col Box( 1 )] << get( 9 );
```

**Code Explanation**:

1. Open data table.
2. Launch Text Explorer on column.
3. Generate report from Text Explorer.
4. Extract term and phrase list table.
5. Initialize empty phrase list.
6. Loop through phrase rows.
7. Insert phrases into list.
8. Close data table without saving.
9. Add phrases to Text Explorer.
10. Retrieve phrase-term association.



### Example 50
> **Summary**: Process of identifying stop words and phrases in a text column, utilizing Text Explorer to generate a report and extract relevant information.

<!-- Keywords: #TextExplorer, #StopWords, #Phrases, #JSLScripting, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
te = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Set Regex( Library( "Words" ) ) );
te << Add Stop Words( {"once a day"} );
te << Add Phrases( {"once a day"} );
rpt = te << report;
dtStopWords = rpt[Outline Box( "Stop Words" )][Table Box( 1 )] << make into data table;
containsStopWord = Contains( Char( Column( dtStopWords, 1 ) << get script ), "once a day" );
```

**Code Explanation**:

1. Open data table;
2. Launch Text Explorer on Reasons Not to Floss.
3. Set Regex Library to "Words".
4. Add "once a day" as a stop word.
5. Add "once a day" as a phrase.
6. Generate Text Explorer report.
7. Extract Stop Words table from report.
8. Convert Stop Words table to data table.
9. Check if "once a day" is in the script column.
10. Store result in containsStopWord variable.



### Example 51
> **Summary**: Extracts and counts specific phrases from a text column in a JMP data table, utilizing Text Explorer and report generation.

<!-- Keywords: #JMPScriptingLanguage, #TextExplorer, #ReportGeneration, #PhraseExtraction, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
te = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex( Library( "Words" ) ),
	Add Phrases( {"per day", "floss once"} ),
	Add Recodes( {{"per day", "floss once"}} )
);
rpt = te << report;
flossOnce = rpt[Outline Box( "Term and Phrase Lists" )][String Col Box( 1 )] << get( 12 );
flossOnceCount = rpt[Outline Box( "Term and Phrase Lists" )][Number Col Box( 1 )] << get( 12 );
```

**Code Explanation**:

1. Open data table.
2. Launch Text Explorer.
3. Select text column for analysis.
4. Set regex library to "Words".
5. Add custom phrases to analyze.
6. Add recodes for phrase analysis.
7. Generate report from Text Explorer.
8. Extract "floss once" term.
9. Retrieve count for "floss once".



### Example 52
> **Summary**: Runs text exploration by opening a data table, selecting a text column, and setting a regex library to analyze reasons not to floss.

<!-- Keywords: #TextExplorer, #RegexLibrary, #DataAnalysis, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
te = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Set Regex( Library( "Words" ) ) );
```

**Code Explanation**:

1. Open data table.
2. Launch Text Explorer.
3. Select text column.
4. Set regex library.



### Example 53
> **Summary**: Runs the extraction and conversion of term and phrase lists from a Text Explorer report into a data table.

<!-- Keywords: #TextExplorer, #DataConversion, #JSLScripting, #TermAndPhraseLists, #ReportAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
te = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
rpt = te << report;
dtPhrase = rpt[Outline Box( "Term and Phrase Lists" )][Border Box( 2 )][Table Box( 1 )] << make into data table;
tePhraseList = {};
For( i = 1, i <= N Row( dtPhrase ), i++,
	Insert Into( tePhraseList, dtPhrase:Phrase[i] )
);
```

**Code Explanation**:

1. Open data table.
2. Launch Text Explorer.
3. Select text column.
4. Generate Text Explorer report.
5. Extract term and phrase lists.
6. Convert to data table.
7. Initialize phrase list.
8. Loop through phrases.
9. Insert phrases into list.
10. End loop.



### Example 54
> **Summary**: Analyze and visualize reported illnesses data, generating a word cloud with filtering capabilities and customizable appearance.

<!-- Keywords: #JMPScriptingLanguage, #TextExplorer, #LocalDataFilter, #WordCloud, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
te = dt << Text Explorer(
	Text Columns( :reported illnesses ),
	Set Regex( Library( "Money" ), Library( "Words" ), Library( "HTML Link Grabber" ), Library( "Time" ), Library( "Numbers" ) ),
	Show Word Cloud( 1 ),
	Layout( "Ordered" ),
	Coloring( "By column values", :sex ),
	Language( "English" ),
	SendToReport(
		Dispatch( {"Word Cloud"}, "1", ScaleBox,
			{Legend Model(
				1,
				Properties(
					0,
					{gradient( {Min Lightness( 0.2 ), Max Lightness( 0.6 ), Scale Type( "Standard Deviation" ), N Labels( 6 )} )}
				)
			)}
		),
		Dispatch( {"Word Cloud"}, "1", LegendBox, {Set Title( "sex" )} )
	)
);
ldf = te << Local Data Filter(
	Add Filter( columns( :name, :age ), Display( :name, Size( 160, 225 ), List Display ), Display( :age, Size( 160, 90 ), List Display ) )
);
ldf << (Filter Column( :name ) << Extend Where( :name = "ALFRED" ));
rpt = te << report;
numberOfCases = rpt[Number Col Box( 2 )] << get;
```

**Code Explanation**:

1. Open table.
2. Launch Text Explorer.
3. Specify text column.
4. Set regex libraries.
5. Enable word cloud.
6. Set layout to ordered.
7. Color by sex.
8. Set language to English.
9. Customize word cloud appearance.
10. Add local data filter.
11. Filter by name "ALFRED".
12. Retrieve report.
13. Get number of cases.



### Example 55
> **Summary**: Extracts and reports text columns with specific phrases and recodes using Text Explorer in JMP.

<!-- Keywords: #TextExplorer, #JMP, #DataAnalysis, #Reporting, #Regex -->

**Code**:
```jsl
dt = Open("data_table.jmp");
te = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex( Library( "Money" ), Library( "Words" ), Library( "HTML Link Grabber" ), Library( "Time" ), Library( "Numbers" ) ),
	Add Phrases( {"floss every"} ),
	Add Recodes( {{"floss every", "floss every midnight"}} ),
	Language( "English" )
);
rpt = te << report;
```

**Code Explanation**:

1. Open data table.
2. Launch Text Explorer.
3. Select text column.
4. Set regex libraries.
5. Add specific phrases.
6. Add recoded phrases.
7. Set language to English.
8. Generate report.



### Example 56
> **Summary**: Analyze and extract specific phrases from a text column in a JMP data table, utilizing Text Explorer to generate a report with term and phrase lists.

<!-- Keywords: #JMPScriptingLanguage, #TextExplorer, #DataAnalysis, #Automation, #TermExtraction -->

**Code**:
```jsl
dt = Open("data_table.jmp");
te = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex( Library( "Money" ), Library( "Words" ), Library( "HTML Link Grabber" ), Library( "Time" ), Library( "Numbers" ) ),
	Add Phrases( {"time consuming"} ),
	Show Term and Phrase Options( 1 ),
	Language( "English" )
);
rpt = te << report;
rpt[Outline Box( "Term and Phrase Lists" )][String Col Box( 1 )] << set selected rows( [21, 21] );
rpt[Outline Box( "Term and Phrase Lists" )][Lineup Box( 2 )][Button Box( 9 )] << click;
term = rpt[Outline Box( "Term and Phrase Lists" )][String Col Box( 1 )] << get( 21 );
rpt[Outline Box( "Term and Phrase Lists" )][String Col Box( 2 )] << set selected rows( [1, 1] );
rpt[Outline Box( "Term and Phrase Lists" )][Lineup Box( 4 )][Button Box( 5 )] << click;
rpt[Outline Box( "Term and Phrase Lists" )][String Col Box( 1 )] << set selected rows( [20, 20, 21, 21] );
rpt[Outline Box( "Term and Phrase Lists" )][Lineup Box( 2 )][Button Box( 9 )] << click;
term = rpt[Outline Box( "Term and Phrase Lists" )][String Col Box( 1 )] << get( 21 );
```

**Code Explanation**:

1. Open data table;
2. Launch Text Explorer on column "Reasons Not to Floss".
3. Set regex libraries.
4. Add phrase "time consuming".
5. Show term and phrase options.
6. Set language to English.
7. Generate report.
8. Select row 21 in Term and Phrase Lists.
9. Click button to perform action.
10. Get term from row 21.



### Example 57
> **Summary**: Creates a Text Explorer object to analyze text columns 'name' and 'sex', utilizing regex libraries and scoring terms by column, while deleting the 'name' column.

<!-- Keywords: #TextExplorer, #RegexLibraries, #ColumnDeletion, #TermScoring, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Text Explorer(
	Text Columns( :name, :sex ),
	Set Regex( Library( "Money" ), Library( "Words" ), Library( "HTML Link Grabber" ), Library( "Time" ), Library( "Numbers" ) ),
	Language( "English" )
);
dt << Delete Columns( :name );
obj[2] << Score Terms By Column( :sex );
dt_s = Get Data Table("data_table");
```

**Code Explanation**:

1. Open data table.
2. Create Text Explorer object.
3. Specify text columns: name, sex.
4. Set regex libraries: Money, Words, HTML Link Grabber, Time, Numbers.
5. Set language to English.
6. Delete column: name.
7. Score terms by column: sex.
8. Retrieve data table: Terms for sex.



### Example 58
> **Summary**: Runs text analysis by creating a Text Explorer object to score terms by column, utilizing regex libraries for processing and language settings.

<!-- Keywords: #TextExplorer, #RegexLibraries, #LanguageSettings, #ColumnScoring, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Text Explorer(
	Text Columns( :name ),
	Set Regex( Library( "Money" ), Library( "Words" ), Library( "HTML Link Grabber" ), Library( "Time" ), Library( "Numbers" ) ),
	Language( "English" )
);
dt << Delete Columns( :name );
err = Try( obj << Score Terms By Column( :sex ), exception_msg );
```

**Code Explanation**:

1. Open data table;
2. Create Text Explorer object.
3. Specify text columns for analysis.
4. Set regex libraries for text processing.
5. Define language as English.
6. Delete original name column.
7. Attempt to score terms by sex column.
8. Capture any exceptions that occur.



### Example 59
> **Summary**: Runs text analysis by creating a Text Explorer object to score terms by column, grouping by sex, and deleting the name column.

<!-- Keywords: #TextExplorer, #JSLScriptingLanguage, #DataAnalysis, #MachineLearning, #DataPreprocessing -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Text Explorer(
	Text Columns( :name ),
	Set Regex( Library( "Money" ), Library( "Words" ), Library( "HTML Link Grabber" ), Library( "Time" ), Library( "Numbers" ) ),
	Language( "English" ),
	By( :sex )
);
dt << Delete Columns( :name );
err = Try( obj << Score Terms By Column( :sex ), exception_msg );
```

**Code Explanation**:

1. Open data table.
2. Create Text Explorer object.
3. Specify text columns.
4. Set regex libraries.
5. Set language to English.
6. Group by sex.
7. Delete name column.
8. Try scoring terms by column.
9. Catch exception message.



### Example 60
> **Summary**: Runs text exploration by grouping data based on sex and applying regular expression libraries to extract relevant information.

<!-- Keywords: #TextExplorer, #RegexLibraries, #ByGrouping, #DataAnalysis, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Text Explorer(
	Text Columns( :name ),
	Set Regex( Library( "Money" ), Library( "Words" ), Library( "HTML Link Grabber" ), Library( "Time" ), Library( "Numbers" ) ),
	Language( "English" ),
	By( :sex )
);
```

**Code Explanation**:

1. Open data table;
2. Create Text Explorer object.
3. Specify text columns.
4. Set regex libraries.
5. Select language "English".
6. Group by "sex".



### Example 61
> **Summary**: Creates a Text Explorer object to analyze text columns, set regex libraries, and group data by age.

<!-- Keywords: #TextExplorer, #RegexLibraries, #DataAnalysis, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Text Explorer(
	Text Columns( :name, :sex ),
	Set Regex( Library( "Money" ), Library( "Words" ), Library( "HTML Link Grabber" ), Library( "Time" ), Library( "Numbers" ) ),
	Language( "English" ),
	by( :age )
);
dt << Delete Columns( :name );
```

**Code Explanation**:

1. Open table.
2. Create Text Explorer object.
3. Specify text columns.
4. Set regex libraries.
5. Set language to English.
6. Group by age.
7. Delete name column.



### Example 62
> **Summary**: Runs text exploration by creating a Text Explorer object with specified columns, regex libraries, and language settings, then deletes the 'name' column from the data table.

<!-- Keywords: #TextExplorer, #DataFiltering, #JSLScripting, #RegexLibraries, #LanguageSettings -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Text Explorer(
	Text Columns( :name, :sex ),
	Set Regex( Library( "Money" ), Library( "Words" ), Library( "HTML Link Grabber" ), Library( "Time" ), Library( "Numbers" ) ),
	Language( "English" ),
	local data filter
);
dt << Delete Columns( :name );
```

**Code Explanation**:

1. Open data table.
2. Create Text Explorer object.
3. Specify text columns for analysis.
4. Set regex libraries for text exploration.
5. Define language for analysis.
6. Enable local data filter.
7. Delete 'name' column from data table.



### Example 63
> **Summary**: Runs the extraction and stemming of text data from a specific column in a JMP data table, utilizing regex libraries and custom stemmer functions to generate a report with term and phrase lists.

<!-- Keywords: #JMPScriptingLanguage, #TextExplorer, #RegexLibraries, #CustomStemmer, #DataTableManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex( Library( "Money" ), Library( "Words" ), Library( "HTML Link Grabber" ), Library( "Time" ), Library( "Numbers" ) ),
	Stemming( "Stem for Combining" ), 
);
obj << Custom Stemmer(
	Function( {string, dot},
		If( Ends With( string, "ing" ),
			Substr( string, 1, Length( string ) - 3 ) || dot,
			string
		)
	)
);
rpt = obj << report;
dtTerm = rpt[Outline Box( "Term and Phrase Lists" )][Border Box( 1 )][Table Box( 1 )] << make into data table;
```

**Code Explanation**:

1. Open data table;
2. Create Text Explorer object.
3. Specify Reasons Not to Floss column.
4. Load regex libraries: Money, Words, HTML Link Grabber, Time, Numbers.
5. Apply Stemming with "Stem for Combining".
6. Define custom stemmer function.
7. Generate Text Explorer report.
8. Extract Term and Phrase Lists outline box.
9. Convert to Border Box.
10. Make Table Box into data table.



### Example 64
> **Summary**: Extracts and analyzes text data from a column in a JMP data table, utilizing Text Explorer to identify key terms and phrases.

<!-- Keywords: #JMPScriptingLanguage, #TextExplorer, #CustomStemmer, #DataAnalysis, #TermExtraction -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex( Library( "Money" ), Library( "Words" ), Library( "HTML Link Grabber" ), Library( "Time" ), Library( "Numbers" ) )
);
obj << Custom Stemmer(
	Function( {string, dot},
		If( Ends With( string, "ing" ),
			Substr( string, 1, Length( string ) - 3 ) || dot,
			string
		)
	)
);
rpt = obj << report;
dtTerm = rpt[Outline Box( "Term and Phrase Lists" )][Border Box( 1 )][Table Box( 1 )] << make into data table;
```

**Code Explanation**:

1. Open data table.
2. Launch Text Explorer on column.
3. Set regex libraries.
4. Define custom stemmer function.
5. Generate report from Text Explorer.
6. Extract term and phrase list table.
7. Convert outline box to data table.



### Example 65
> **Summary**: Runs text exploration and analysis by opening a data table, specifying text columns, setting regex libraries, applying stemming, and generating a report with term and phrase lists.

<!-- Keywords: #JSLScriptingLanguage, #TextExplorer, #DataAnalysis, #ChineseLanguage, #CustomStemmer -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex( Library( "Money" ), Library( "Words" ), Library( "HTML Link Grabber" ), Library( "Time" ), Library( "Numbers" ) ),
	Stemming( "Stem for Combining" ),
	Language( "Chinese" )
);
obj << Custom Stemmer(
	Function( {string, dot},
		If( Ends With( string, "ing" ),
			Substr( string, 1, Length( string ) - 3 ) || dot,
			string
		)
	)
);
rpt = obj << report;
dtTerm = rpt[Outline Box( "Term and Phrase Lists" )][Border Box( 1 )][Table Box( 1 )] << make into data table;
```

**Code Explanation**:

1. Open data table.
2. Create Text Explorer object.
3. Specify text columns.
4. Set regex libraries.
5. Apply stemming method.
6. Set language to Chinese.
7. Define custom stemmer function.
8. Generate report from object.
9. Extract term and phrase lists.
10. Convert to data table.



### Example 66
> **Summary**: Runs the extraction and stemming of text columns in a data table, utilizing Text Explorer with custom stemmer function to generate a report containing term and phrase lists.

<!-- Keywords: #TextExplorer, #CustomStemmer, #DataTable, #ReportGeneration, #JSL -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex( Library( "Money" ), Library( "Words" ), Library( "HTML Link Grabber" ), Library( "Time" ), Library( "Numbers" ) ),
	Stemming( "Stem All Terms" ),
	Language( "German" )
);
obj << Custom Stemmer(
	Function( {string, dot},
		If( Ends With( string, "ing" ),
			Substr( string, 1, Length( string ) - 3 ) || "_TE_Test",
			string
		)
	)
);
rpt = obj << report;
dtTerm = rpt[Outline Box( "Term and Phrase Lists" )][Border Box( 1 )][Table Box( 1 )] << make into data table;
```

**Code Explanation**:

1. Open data table.
2. Launch Text Explorer on column.
3. Set regex libraries.
4. Enable stemming for all terms.
5. Specify German language.
6. Define custom stemmer function.
7. Retrieve report object.
8. Extract term and phrase list table.
9. Convert outline box to data table.



### Example 67
> **Summary**: Runs text analysis by opening a data table, launching Text Explorer, and generating a report with custom stemming and regex libraries.

<!-- Keywords: #TextExplorer, #CustomStemmer, #RegexLibraries, #GermanLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex( Library( "Money" ), Library( "Words" ), Library( "HTML Link Grabber" ), Library( "Time" ), Library( "Numbers" ) ),
	Stemming( "Stem All Terms" ),
	Language( "German" )
);
obj << Custom Stemmer(
	Function( {string, dot},
		If( Ends With( string, "ing" ),
			Substr( string, 1, Length( string ) - 3 ) || "_TE_Test",
			"TE Test"
		)
	)
);
rpt = obj << report;
dtTerm = rpt[Outline Box( "Term and Phrase Lists" )][Border Box( 1 )][Table Box( 1 )] << make into data table;
```

**Code Explanation**:

1. Open data table.
2. Launch Text Explorer.
3. Specify text column.
4. Set regex libraries.
5. Apply stemming method.
6. Set language to German.
7. Define custom stemmer function.
8. Generate report.
9. Extract term and phrase lists.
10. Convert to data table.



### Example 68
> **Summary**: Runs text analysis to extract term and phrase lists from a data table, utilizing Text Explorer with regex libraries and local data filtering.

<!-- Keywords: #TextAnalysis, #JMPScriptingLanguage, #DataMining, #TermExtraction, #LocalDataFilter -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex(
		Library( "Money" ),
		Library( "Phrasing Punctuation" ),
		Library( "Words" ),
		Library( "HTML Link Grabber" ),
		Library( "Time" ),
		Library( "Numbers" )
	),
	Term Selection(
		Models(
			Model( Response Column( :Gender ), DTM Size( 20 ), Target Levels( Target Number( 1 ), Target String( "1" ) ) ),
			Current Model Settings( Response Column( :Gender ), DTM Size( 20 ), Target Levels( Target Number( 1 ), Target String( "1" ) ) )
		)
	),
	Language( "English" ),
	Local Data Filter( Add Filter( columns( :Gender ) ) )
);
obj << Add Stop Words( {"brushing", "flossing", "forget", "just", "like", "need"} );
rpt = obj << report;
dtTerm = rpt[Outline Box( "Term and Phrase Lists" )][Border Box( 1 )][Table Box( 1 )] << make into data table;
```

**Code Explanation**:

1. Open data table;
2. Create Text Explorer object.
3. Specify text columns for analysis.
4. Set regex libraries for text processing.
5. Define term selection models.
6. Set response column to Gender.
7. Set DTM size to 20.
8. Define target levels for Gender.
9. Set language to English.
10. Add local data filter for Gender.
11. Add stop words to Text Explorer.
12. Generate report from Text Explorer.
13. Extract term and phrase lists into new data table.



### Example 69
> **Summary**: Analyze and visualize text data by launching a Text Explorer on Reasons Not to Floss, setting regex library to 'Words', enabling term and phrase options, selecting rows 4 and 4, clicking the 'Show Context' button, converting the report table to a data table, and creating a window named 'Text Context'.

<!-- Keywords: #JSL, #TextExplorer, #Regex, #TermAndPhraseOptions, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Set Regex( Library( "Words" ) ), Show Term and Phrase Options( 1 ) );
rpt = Report( obj )["Term and Phrase Lists"];
rpt[String Col Box( 1 )] << Set Selected Rows( [4, 4] );
rpt[Lineup Box( 2 )][Button Box( 2 )] << Click;
dtTE = rpt[Table Box( 1 )] << make into data table;
w = Window( "Text Context" );
Close( dtTE, NoSave );
Close( dt, NoSave );
w << Close Window;
```

**Code Explanation**:

1. Open data table.
2. Launch Text Explorer on Reasons Not to Floss.
3. Set regex library to "Words".
4. Enable term and phrase options.
5. Retrieve Term and Phrase Lists report.
6. Select rows 4 and 4.
7. Click "Show Context" button.
8. Convert report table to data table.
9. Create window named "Text Context".
10. Close all windows without saving.



### Example 70
> **Summary**: Process of text exploration and analysis by opening a data table, launching Text Explorer, specifying text columns, setting regex library, enabling term options, accessing term report, selecting specific rows, clicking button box, converting to data table, and creating a new window.

<!-- Keywords: #TextExplorer, #RegexLibrary, #TermOptions, #DataTable, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Set Regex( Library( "Words" ) ), Show Term and Phrase Options( 1 ) );
rpt = Report( obj )["Term and Phrase Lists"];
rpt[String Col Box( 1 )] << Set Selected Rows( [4, 4] );
rpt[Lineup Box( 2 )][Button Box( 2 )] << Click;
dtTE = rpt[Table Box( 1 )] << make into data table;
w = Window( "Text Context" );
```

**Code Explanation**:

1. Open data table.
2. Launch Text Explorer.
3. Specify text columns.
4. Set regex library.
5. Enable term options.
6. Access term report.
7. Select specific rows.
8. Click button box.
9. Convert to data table.
10. Create new window.



### Example 71
> **Summary**: Implements sentiment analysis and extraction of negation terms from text data, utilizing Text Explorer to process survey responses and generate a report.

<!-- Keywords: #TextAnalytics, #SentimentAnalysis, #NegationTerms, #JMPScriptingLanguage, #DataMining -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex(
		Library( "Money" ),
		Library( "Common Emoticons" ),
		Library( "Words" ),
		Library( "HTML Link Grabber" ),
		Library( "Time" ),
		Library( "Numbers" ),
		Library( "Phrasing Punctuation" )
	),
	Sentiment Analysis( Add Negation Words( {"Not enough", "hurts"} ), Add Negation Exception Words( {"cannot"} ) ),
	Language( "English" )
);
rpt = obj << report;
dtTerm = rpt[Outline Box( "Negation Terms" )][Table Box( 1 )] << make into data table;
NegTerms = :Term << Get Values;
```

**Code Explanation**:

1. Open data table;
2. Create Text Explorer object.
3. Specify text columns for analysis.
4. Set regex libraries for processing.
5. Configure sentiment analysis settings.
6. Set language to English.
7. Generate report from Text Explorer.
8. Extract negation terms table.
9. Convert outline box to data table.
10. Retrieve term values from data table.



### Example 72
> **Summary**: Implements sentiment analysis on text data to extract intensifier terms, utilizing Text Explorer and regex libraries for processing.

<!-- Keywords: #TextExplorer, #SentimentAnalysis, #RegexLibraries, #JSLScriptingLanguage, #DataProcessing -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex(
		Library( "Money" ),
		Library( "Common Emoticons" ),
		Library( "Words" ),
		Library( "HTML Link Grabber" ),
		Library( "Time" ),
		Library( "Numbers" ),
		Library( "Phrasing Punctuation" )
	),
	Sentiment Analysis( Add Intensifier Words( {{"Maybe", 0.5}, {"may", 0.6}} ), Add Intensifier Exception Words( {"almost"} ) ),
	Language( "English" )
);
rpt = obj << report;
dtTerm = rpt[Outline Box( "Intensifier Terms" )][Table Box( 1 )] << make into data table;
IntenTerms = :Term << Get Values;
```

**Code Explanation**:

1. Open data table.
2. Create Text Explorer object.
3. Specify text columns for analysis.
4. Set regex libraries for text processing.
5. Configure sentiment analysis with intensifiers.
6. Set language to English.
7. Generate report from Text Explorer.
8. Extract intensifier terms table.
9. Convert outline box to data table.
10. Retrieve term values from column.



### Example 73
> **Summary**: Implements sentiment analysis on text data, extracting key terms and phrases while filtering out irrelevant information using Text Explorer.

<!-- Keywords: #TextAnalysis, #SentimentAnalysis, #JMPScriptingLanguage, #DataMining, #NaturalLanguageProcessing -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex(
		Library( "Money" ),
		Library( "Common Emoticons" ),
		Library( "Words" ),
		Library( "HTML Link Grabber" ),
		Library( "Time" ),
		Library( "Numbers" ),
		Library( "Phrasing Punctuation" )
	),
	Sentiment Analysis(
		Add Sentiment Words( {{":-p", 82}} ),
		Add Sentiment Exception Words( {"admirable", "admire", "admired", "admires"} )
	),
	Language( "English" )
);
rpt = obj << report;
dtTerm = rpt[Outline Box( "Sentiment Terms" )][Table Box( 1 )] << make into data table;
If( Host is( Windows ), , );
senTerms = :Term << Get Values;
```

**Code Explanation**:

1. Open data table.
2. Create Text Explorer object.
3. Specify text columns for analysis.
4. Set regex libraries for text processing.
5. Configure sentiment analysis settings.
6. Define sentiment words.
7. Define sentiment exception words.
8. Set language to English.
9. Generate report from Text Explorer.
10. Extract sentiment terms into new data table.



### Example 74
> **Summary**: Implements sentiment analysis and extracts intensifier terms from text data, utilizing the Text Explorer platform in JMP.

<!-- Keywords: #TextAnalysis, #SentimentAnalysis, #JMP, #TextExplorer, #DataMining -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex(
		Library( "Money" ),
		Library( "Common Emoticons" ),
		Library( "Words" ),
		Library( "HTML Link Grabber" ),
		Library( "Time" ),
		Library( "Numbers" ),
		Library( "Phrasing Punctuation" )
	),
	Sentiment Analysis( Add Intensifier Words( {{"aa1", 2}} ), Add Sentiment Words( {{"aa2", -100}} ) ),
	Language( "English" )
);
log = Get Log( -5 );
rpt = obj << report;
dtTerm_I = rpt[Outline Box( "Intensifier Terms" )][Table Box( 1 )] << make into data table;
dtTerm_S = rpt[Outline Box( "Sentiment Terms" )][Table Box( 1 )] << make into data table;
```

**Code Explanation**:

1. Open data table;
2. Create Text Explorer object.
3. Specify text columns for analysis.
4. Set regex libraries for processing.
5. Configure sentiment analysis with intensifiers and sentiments.
6. Set language to English.
7. Retrieve last 5 log entries.
8. Generate report from Text Explorer.
9. Extract Intensifier Terms table.
10. Extract Sentiment Terms table.



### Example 75
> **Summary**: Implements sentiment analysis on text columns to generate a report with a word cloud summary, utilizing the Text Explorer platform in JMP.

<!-- Keywords: #TextExplorer, #SentimentAnalysis, #WordCloud, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex(
		Library( "Money" ),
		Library( "Common Emoticons" ),
		Library( "Words" ),
		Library( "HTML Link Grabber" ),
		Library( "Time" ),
		Library( "Numbers" ),
		Library( "Phrasing Punctuation" )
	),
	Sentiment Analysis( Show Sentiment Cloud( 1 ) ),
	Language( "English" )
);
rpt = obj << report;
widthCould = rpt[Outline Box( "Sentiment Summary" )][WordCloudBox( 1 )] << Get Width;
```

**Code Explanation**:

1. Open data table;
2. Create Text Explorer object.
3. Specify text columns for analysis.
4. Set regex libraries for processing.
5. Enable sentiment analysis.
6. Set language to English.
7. Generate report from Text Explorer.
8. Retrieve sentiment summary outline box.
9. Access word cloud box within summary.
10. Get width of the word cloud box.



### Example 76
> **Summary**: Implements sentiment analysis on a text column to generate a report with a word cloud, utilizing the Text Explorer platform in JMP.

<!-- Keywords: #TextExplorer, #JMP, #SentimentAnalysis, #WordCloud, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex(
		Library( "Money" ),
		Library( "Common Emoticons" ),
		Library( "Words" ),
		Library( "HTML Link Grabber" ),
		Library( "Time" ),
		Library( "Numbers" ),
		Library( "Phrasing Punctuation" )
	),
	Sentiment Analysis( Show Sentiment Cloud( 0 ) ),
	Language( "English" )
);
rpt = obj << report;
Try( widthCould = rpt[Outline Box( "Sentiment Summary" )][WordCloudBox( 1 )] << Get Width );
Close( dt, nosave );
widthCould = 0;
```

**Code Explanation**:

1. Open data table;
2. Create Text Explorer object.
3. Specify text column for analysis.
4. Set regex libraries.
5. Disable sentiment cloud display.
6. Set language to English.
7. Generate report from object.
8. Attempt to get word cloud width.
9. Close dataset without saving.
10. Set widthCould to 0.



### Example 77
> **Summary**: Implements sentiment analysis on text columns, utilizing a Text Explorer object to process regex libraries and generate a report with a word cloud summary.

<!-- Keywords: #TextExplorer, #SentimentAnalysis, #RegexProcessing, #ReportGeneration, #WordCloud -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex(
		Library( "Money" ),
		Library( "Common Emoticons" ),
		Library( "Words" ),
		Library( "HTML Link Grabber" ),
		Library( "Time" ),
		Library( "Numbers" ),
		Library( "Phrasing Punctuation" )
	),
	Sentiment Analysis( Show Sentiment Cloud( invalid ) ),
	Language( "English" )
);
rpt = obj << report;
widthCould = rpt[Outline Box( "Sentiment Summary" )][WordCloudBox( 1 )] << Get Width;
```

**Code Explanation**:

1. Open data table;
2. Create Text Explorer object.
3. Specify text columns for analysis.
4. Set regex libraries for processing.
5. Enable sentiment cloud visualization.
6. Set language to English.
7. Generate report from Text Explorer.
8. Retrieve width of sentiment summary outline box.
9. Access word cloud box within outline.
10. Get width of word cloud box.



### Example 78
> **Summary**: Implements sentiment analysis on a text column, utilizing Text Explorer to extract insights from the Reasons Not to Floss column in a data table.

<!-- Keywords: #TextExplorer, #SentimentAnalysis, #JSL, #DataTable, #NaturalLanguageProcessing -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex(
		Library( "Money" ),
		Library( "Common Emoticons" ),
		Library( "Words" ),
		Library( "HTML Link Grabber" ),
		Library( "Time" ),
		Library( "Numbers" ),
		Library( "Phrasing Punctuation" )
	),
	Sentiment Analysis( Show Negation Terms( 0 ), Show Intensifier Terms( 0 ), Show Sentiment Terms( 0 ) ),
	Language( "English" )
);
rpt = obj << report;
titleOutline = rpt[Outline Box( "Sentiment Analysis" )][Outline Box( 2 )] << get title;
```

**Code Explanation**:

1. Open table.
2. Initialize Text Explorer.
3. Specify text column.
4. Set regex libraries.
5. Configure sentiment analysis options.
6. Set language to English.
7. Generate report.
8. Access sentiment analysis outline.
9. Get second outline box.
10. Retrieve title.



### Example 79
> **Summary**: Implements sentiment analysis on text columns, utilizing Text Explorer to extract insights from a specified dataset.

<!-- Keywords: #TextExplorer, #SentimentAnalysis, #JMPScriptingLanguage, #DataAnalysis, #NaturalLanguageProcessing -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex(
		Library( "Money" ),
		Library( "Common Emoticons" ),
		Library( "Words" ),
		Library( "HTML Link Grabber" ),
		Library( "Time" ),
		Library( "Numbers" ),
		Library( "Phrasing Punctuation" )
	),
	Sentiment Analysis( Show Negation Terms( 1 ), Show Intensifier Terms( 1 ), Show Sentiment Terms( 1 ) ),
	Language( "English" )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Initialize Text Explorer.
3. Specify text column.
4. Set regex libraries.
5. Enable negation terms.
6. Enable intensifier terms.
7. Enable sentiment terms.
8. Set language to English.
9. Generate report.
10. Assign report to variable.



### Example 80
> **Summary**: Implements sentiment analysis on text columns to identify reasons not to floss, utilizing Text Explorer with regex libraries and sentiment analysis settings.

<!-- Keywords: #TextExplorer, #SentimentAnalysis, #RegexLibraries, #JSLScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex(
		Library( "Money" ),
		Library( "Common Emoticons" ),
		Library( "Words" ),
		Library( "HTML Link Grabber" ),
		Library( "Time" ),
		Library( "Numbers" ),
		Library( "Phrasing Punctuation" )
	),
	Sentiment Analysis( Show Negation Terms( -100 ), Show Intensifier Terms( 1000 ), Show Sentiment Terms( "" ) ),
	Language( "English" )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open table.
2. Initialize Text Explorer.
3. Specify text column.
4. Set regex libraries.
5. Configure sentiment analysis.
6. Set language to English.
7. Generate report.



### Example 81
> **Summary**: Implements sentiment analysis and term extraction from text data, utilizing Text Explorer to process regex libraries and generate reports.

<!-- Keywords: #TextExplorer, #SentimentAnalysis, #TermExtraction, #RegexProcessing, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex(
		Library( "Money" ),
		Library( "Common Emoticons" ),
		Library( "Words" ),
		Library( "HTML Link Grabber" ),
		Library( "Time" ),
		Library( "Numbers" ),
		Library( "Phrasing Punctuation" )
	),
	Sentiment Analysis( Include Builtin Negation Terms( 0 ), Include Builtin Intensifier Terms( 0 ), Include Builtin Sentiment Terms( 0 ) ),
	Language( "English" )
);
rpt = obj << report;
dtTerm_N = rpt[Outline Box( "Negation Terms" )][Table Box( 1 )] << make into data table;
dtTerm_I = rpt[Outline Box( "Intensifier Terms" )][Table Box( 1 )] << make into data table;
dtTerm_S = rpt[Outline Box( "Sentiment Terms" )][Table Box( 1 )] << make into data table;
Close( dtTerm_N, NoSave );
Close( dtTerm_I, NoSave );
```

**Code Explanation**:

1. Open data table.
2. Create Text Explorer object.
3. Specify text columns for analysis.
4. Set regex libraries for processing.
5. Configure sentiment analysis settings.
6. Set language to English.
7. Generate report from Text Explorer.
8. Extract negation terms table.
9. Extract intensifier terms table.
10. Extract sentiment terms table.
11. Close negation terms table without saving.
12. Close intensifier terms table without saving.



### Example 82
> **Summary**: Implements sentiment analysis and extracts negation, intensifier, and sentiment terms from text columns in a data table using Text Explorer.

<!-- Keywords: #TextAnalysis, #SentimentAnalysis, #JMPScriptingLanguage, #DataMining, #NaturalLanguageProcessing -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex(
		Library( "Money" ),
		Library( "Common Emoticons" ),
		Library( "Words" ),
		Library( "HTML Link Grabber" ),
		Library( "Time" ),
		Library( "Numbers" ),
		Library( "Phrasing Punctuation" )
	),
	Sentiment Analysis( Include Builtin Negation Terms( 1 ), Include Builtin Intensifier Terms( 1 ), Include Builtin Sentiment Terms( 1 ) ),
	Language( "English" )
);
rpt = obj << report;
dtTerm_N = rpt[Outline Box( "Negation Terms" )][Table Box( 1 )] << make into data table;
dtTerm_I = rpt[Outline Box( "Intensifier Terms" )][Table Box( 1 )] << make into data table;
dtTerm_S = rpt[Outline Box( "Sentiment Terms" )][Table Box( 1 )] << make into data table;
Close( dtTerm_N, NoSave );
Close( dtTerm_I, NoSave );
```

**Code Explanation**:

1. Open data table.
2. Create Text Explorer object.
3. Specify text columns for analysis.
4. Set regex libraries for processing.
5. Configure sentiment analysis options.
6. Set language to English.
7. Generate report from Text Explorer.
8. Extract negation terms table.
9. Extract intensifier terms table.
10. Extract sentiment terms table.



### Example 83
> **Summary**: Implements sentiment analysis and term extraction from text data, utilizing Text Explorer to identify negation terms, intensifier terms, and sentiment terms.

<!-- Keywords: #TextExplorer, #SentimentAnalysis, #TermExtraction, #JSLScripting, #NaturalLanguageProcessing -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex(
		Library( "Money" ),
		Library( "Common Emoticons" ),
		Library( "Words" ),
		Library( "HTML Link Grabber" ),
		Library( "Time" ),
		Library( "Numbers" ),
		Library( "Phrasing Punctuation" )
	),
	Sentiment Analysis(
		Include Builtin Negation Terms(),
		Include Builtin Intensifier Terms( "" ),
		Include Builtin Sentiment Terms( -100 )
	),
	Language( "English" )
);
rpt = obj << report;
dtTerm_N = rpt[Outline Box( "Negation Terms" )][Table Box( 1 )] << make into data table;
dtTerm_I = rpt[Outline Box( "Intensifier Terms" )][Table Box( 1 )] << make into data table;
dtTerm_S = rpt[Outline Box( "Sentiment Terms" )][Table Box( 1 )] << make into data table;
Close( dtTerm_N, NoSave );
Close( dtTerm_I, NoSave );
```

**Code Explanation**:

1. Open data table.
2. Create Text Explorer object.
3. Specify text columns for analysis.
4. Set regex libraries for text processing.
5. Configure sentiment analysis settings.
6. Set language to English.
7. Generate report from Text Explorer.
8. Extract negation terms table.
9. Extract intensifier terms table.
10. Extract sentiment terms table.
11. Close negation terms table without saving.
12. Close intensifier terms table without saving.



### Example 84
> **Summary**: Implements sentiment analysis on a text column, utilizing Text Explorer to extract insights from the Reasons Not to Floss column in the data table.

<!-- Keywords: #TextExplorer, #SentimentAnalysis, #JMPScriptingLanguage, #DataVisualization, #NaturalLanguageProcessing -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex(
		Library( "Money" ),
		Library( "Common Emoticons" ),
		Library( "Words" ),
		Library( "HTML Link Grabber" ),
		Library( "Time" ),
		Library( "Numbers" ),
		Library( "Phrasing Punctuation" )
	),
	Sentiment Analysis( Show Sentiment Cloud( 0 ) ),
	Language( "English" )
);
rpt = obj << report;
Try( widthCould = rpt[Outline Box( "Sentiment Summary" )][WordCloudBox( 1 )] << Get Width );
```

**Code Explanation**:

1. Open data table.
2. Create Text Explorer object.
3. Specify text column.
4. Set regex libraries.
5. Disable sentiment cloud.
6. Set language to English.
7. Generate report.
8. Try to get width.



### Example 85
> **Summary**: Implements sentiment analysis and extracts negation, intensifier, and sentiment terms from text data using the Text Explorer platform in JMP.

<!-- Keywords: #TextExplorer, #SentimentAnalysis, #JMPScriptingLanguage, #NaturalLanguageProcessing, #DataMining -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex(
		Library( "Money" ),
		Library( "Common Emoticons" ),
		Library( "Words" ),
		Library( "HTML Link Grabber" ),
		Library( "Time" ),
		Library( "Numbers" ),
		Library( "Phrasing Punctuation" )
	),
	Sentiment Analysis( Include Builtin Negation Terms( 0 ), Include Builtin Intensifier Terms( 0 ), Include Builtin Sentiment Terms( 0 ) ),
	Language( "English" )
);
rpt = obj << report;
dtTerm_N = rpt[Outline Box( "Negation Terms" )][Table Box( 1 )] << make into data table;
dtTerm_I = rpt[Outline Box( "Intensifier Terms" )][Table Box( 1 )] << make into data table;
dtTerm_S = rpt[Outline Box( "Sentiment Terms" )][Table Box( 1 )] << make into data table;
```

**Code Explanation**:

1. Open data table.
2. Create Text Explorer object.
3. Set regex libraries.
4. Configure sentiment analysis options.
5. Specify language as English.
6. Generate report from Text Explorer.
7. Extract negation terms table.
8. Extract intensifier terms table.
9. Extract sentiment terms table.
10. Convert tables into data tables.



### Example 86
> **Summary**: Runs the extraction and conversion of sentiment analysis terms from text data, utilizing Text Explorer to identify negation, intensifier, and sentiment terms in a specified language.

<!-- Keywords: #TextExplorer, #SentimentAnalysis, #DataExtraction, #JSLScripting, #NaturalLanguageProcessing -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex(
		Library( "Money" ),
		Library( "Common Emoticons" ),
		Library( "Words" ),
		Library( "HTML Link Grabber" ),
		Library( "Time" ),
		Library( "Numbers" ),
		Library( "Phrasing Punctuation" )
	),
	Sentiment Analysis( Include Builtin Negation Terms( 1 ), Include Builtin Intensifier Terms( 1 ), Include Builtin Sentiment Terms( 1 ) ),
	Language( "English" )
);
rpt = obj << report;
dtTerm_N = rpt[Outline Box( "Negation Terms" )][Table Box( 1 )] << make into data table;
dtTerm_I = rpt[Outline Box( "Intensifier Terms" )][Table Box( 1 )] << make into data table;
dtTerm_S = rpt[Outline Box( "Sentiment Terms" )][Table Box( 1 )] << make into data table;
```

**Code Explanation**:

1. Open data table;
2. Create Text Explorer object.
3. Set regex libraries.
4. Enable sentiment analysis.
5. Set language to English.
6. Generate report from object.
7. Extract negation terms table.
8. Convert negation terms to data table.
9. Extract intensifier terms table.
10. Convert intensifier terms to data table.
11. Extract sentiment terms table.
12. Convert sentiment terms to data table.



### Example 87
> **Summary**: Implements sentiment analysis and extracts negation, intensifier, and sentiment terms from text data using the Text Explorer platform in JMP.

<!-- Keywords: #TextExplorer, #SentimentAnalysis, #JMPScriptingLanguage, #NaturalLanguageProcessing, #DataMining -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex(
		Library( "Money" ),
		Library( "Common Emoticons" ),
		Library( "Words" ),
		Library( "HTML Link Grabber" ),
		Library( "Time" ),
		Library( "Numbers" ),
		Library( "Phrasing Punctuation" )
	),
	Sentiment Analysis(
		Include Builtin Negation Terms(),
		Include Builtin Intensifier Terms( "" ),
		Include Builtin Sentiment Terms( -100 )
	),
	Language( "English" )
);
rpt = obj << report;
dtTerm_N = rpt[Outline Box( "Negation Terms" )][Table Box( 1 )] << make into data table;
dtTerm_I = rpt[Outline Box( "Intensifier Terms" )][Table Box( 1 )] << make into data table;
dtTerm_S = rpt[Outline Box( "Sentiment Terms" )][Table Box( 1 )] << make into data table;
```

**Code Explanation**:

1. Open data table.
2. Create Text Explorer object.
3. Specify text columns for analysis.
4. Set regex libraries for text processing.
5. Configure sentiment analysis settings.
6. Set language to English.
7. Generate report from Text Explorer.
8. Extract negation terms table.
9. Extract intensifier terms table.
10. Extract sentiment terms table.



### Example 88
> **Summary**: Analyze survey responses using Text Explorer and Latent Semantic Analysis to identify relevant terms, then selects a specific row and finds its nearest neighbors.

<!-- Keywords: #TextExplorer, #LatentSemanticAnalysis, #SurveyResponse, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Text Explorer(
	Text Columns( :Survey Response ),
	Set Regex( Library( "Money" ), Library( "Words" ), Library( "HTML Link Grabber" ), Library( "Time" ), Library( "Numbers" ) ),
	Language( "English" )
);
obj2 = obj << Latent Semantic Analysis(
	1,
	Maximum Number of Terms( 85 ),
	Minimum Term Frequency( 2 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 85 ),
	Centering and Scaling( "Centered and Scaled" )
);
	
dt << select rows( [74] );
obj2 << select near neighbors( 10 );
neighbors = dt << get selected rows();
```

**Code Explanation**:

1. Open data table;
2. Launch Text Explorer.
3. Set text columns to Survey Response.
4. Load regex libraries: Money, Words, HTML Link Grabber, Time, Numbers.
5. Set language to English.
6. Perform Latent Semantic Analysis.
7. Configure LSA parameters.
8. Select row 74.
9. Find 10 nearest neighbors.
10. Retrieve selected neighbor rows.



### Example 89
> **Summary**: Analyze reasons not to floss by launching a Text Explorer on the 'Reasons Not to Floss' column, setting regex libraries, and configuring term selection with current model settings.

<!-- Keywords: #TextExplorer, #RegexLibraries, #TermSelection, #DataFiltering, #JMPScripting -->

**Code**:
```jsl
dt4 = Open("data_table.jmp");
obj4 = dt4 << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex(
		Library( "Money" ),
		Library( "Common Emoticons" ),
		Library( "Words" ),
		Library( "HTML Link Grabber" ),
		Library( "Time" ),
		Library( "Numbers" ),
		Library( "Phrasing Punctuation" )
	),
	Term Selection(
		Models(
			Current Model Settings(
				Response Column( :Position Tenure ),
				DTM Size( 31 ),
				Target Levels(
					Exclude Values(
						Data Filter(
							no outline box( 1 ),
							Show Controls( 0 ),
							Show Modes( 0 ),
							Count Excluded Rows( 0 ),
							Local,
							Inverse( 1 ),
							Add Filter(
								columns( :Position Tenure ),
								Where( :Position Tenure == {1, 2, 3} ),
								Display( :Position Tenure, N Items( 4 ) )
							)
						)
					)
				)
			)
		)
	),
	Language( "English" )
);
```

**Code Explanation**:

1. Open data table;
2. Launch Text Explorer on Reasons Not to Floss.
3. Set regex libraries: Money, Common Emoticons, Words, HTML Link Grabber, Time, Numbers, Phrasing Punctuation.
4. Configure Term Selection with Current Model Settings.
5. Set response column: Position Tenure.
6. Define DTM size as 31.
7. Exclude values from Position Tenure: 1, 2, 3.
8. Apply data filter settings.
9. Set language to English.



### Example 90
> **Summary**: Runs text analysis on a data table to extract sentiment and identify relevant libraries, adding new rows with specified names.

<!-- Keywords: #TextExplorer, #SentimentAnalysis, #DataTable, #JSLScriptingLanguage, #NaturalLanguageProcessing -->

**Code**:
```jsl
dt6 = Open("data_table.jmp");
obj6 = dt6 << Text Explorer(
	Text Columns( :name ),
	Set Regex(
		Library( "Money" ),
		Library( "Common Emoticons" ),
		Library( "Words" ),
		Library( "HTML Link Grabber" ),
		Library( "Time" ),
		Library( "Numbers" ),
		Library( "Phrasing Punctuation" )
	),
	Sentiment Analysis,
	Language( "English" )
);
dt6 << add rows(
	{name = "LOUISE"},
	{name = "JANE"},
	{name = "JACLYN"},
	{name = "LILLIE"},
	{name = "TIM"},
	{name = "JAMES"},
	{name = "ROBERT"},
	{name = "BARBARA"},
	{name = "ALICE"}
);
```

**Code Explanation**:

1. Open data table.
2. Launch Text Explorer on table.
3. Specify text columns for analysis.
4. Set regex libraries for text processing.
5. Enable sentiment analysis feature.
6. Set language to English.
7. Add new rows to table.
8. Insert names into new rows.



### Example 91
> **Summary**: Implements sentiment analysis on a text column in a data table, utilizing Text Explorer and specifying regex libraries for language processing.

<!-- Keywords: #JMPScriptingLanguage, #TextExplorer, #SentimentAnalysis, #RegexLibraries, #DataTable -->

**Code**:
```jsl
dt7 = Open("data_table.jmp");
obj7 = dt7 << Text Explorer(
	Text Columns( :Potato Chip Product Review ),
	Set Regex(
		Library( "Money" ),
		Library( "Common Emoticons" ),
		Library( "Words" ),
		Library( "HTML Link Grabber" ),
		Library( "Time" ),
		Library( "Numbers" ),
		Library( "Phrasing Punctuation" )
	),
	Language( "English" )
);
sent7 = obj7 << Sentiment Analysis;
sent7 << Add Feature Words( {"flavor"} );
```

**Code Explanation**:

1. Open data table.
2. Launch Text Explorer.
3. Specify text column.
4. Set regex libraries.
5. Choose English language.
6. Perform sentiment analysis.
7. Add feature word "flavor".



### Example 92
> **Summary**: Runs the extraction and organization of term and phrase lists from a text column using Text Explorer, generating a report with customizable regex patterns.

<!-- Keywords: #TextExplorer, #RegexPatterns, #DataOrganization, #JMPScriptingLanguage, #TermAndPhraseLists -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Text Explorer(
	Text Columns( :name ),
	Set Regex(
		Custom(
			Title( "S1543172" ),
			Example( "x" ),
			Regex( "\[([aeiou])(.*?)(\1)]\" ),
			Result( "\[\2]\" ),
			Comment( "x" ),
			Locale( "" ),
			ColorStyle( 9 )
		)
	),
	Customize Regex( 0 ),
	Language( "English" )
);
rpt = Report( obj );
dtTerm = rpt[Outline Box( "Term and Phrase Lists" )][Border Box( 1 )][Table Box( 1 )] << make into data table;
dtTerm << Set Name( "Term" );
Close( dtTerm, NoSave );
obj << close window();
```

**Code Explanation**:

1. Open data table;
2. Create Text Explorer object.
3. Set regex pattern.
4. Customize regex disabled.
5. Set language to English.
6. Generate report from Text Explorer.
7. Extract term and phrase lists.
8. Convert to data table.
9. Rename data table to "Term".
10. Close data table without saving.
11. Close Text Explorer window.



### Example 93
> **Summary**: Runs the extraction and conversion of text columns into a data table, utilizing Text Explorer to set custom regex patterns for term and phrase lists.

<!-- Keywords: #TextExplorer, #DataTable, #RegexPatterns, #TermAndPhraseLists, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Text Explorer(
	Text Columns( :name ),
	Set Regex(
		Custom(
			Title( "S1543172" ),
			Example( "x" ),
			Regex( "\[([aeiou])(.*?)(\1)]\" ),
			Result( "\[\2]\" ),
			Comment( "x" ),
			Locale( "" ),
			ColorStyle( 9 )
		)
	),
	Customize Regex( 0 ),
	Language( "English" )
);
rpt = Report( obj );
dtTerm = rpt[Outline Box( "Term and Phrase Lists" )][Border Box( 1 )][Table Box( 1 )] << make into data table;
dtTerm << Set Name( "Term" );
```

**Code Explanation**:

1. Open data table.
2. Create Text Explorer object.
3. Define text columns for analysis.
4. Set custom regex pattern.
5. Customize regex settings.
6. Set language to English.
7. Generate report from Text Explorer.
8. Extract term and phrase lists.
9. Convert to data table.
10. Rename data table to "Term".



### Example 94
> **Summary**: Runs the Text Explorer to extract and analyze reasons not to floss from a data table, utilizing regex libraries and stop word exceptions.

<!-- Keywords: #TextExplorer, #RegexLibraries, #StopWordExceptions, #DataAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex(
		Library( "Money" ),
		Library( "Common Emoticons" ),
		Library( "Words" ),
		Library( "HTML Link Grabber" ),
		Library( "Time" ),
		Library( "Numbers" ),
		Library( "Phrasing Punctuation" )
	),
	Add Stop Word Exceptions( {"<phrase_punctuation>"} ),
	Show Stop Words( 1 ),
	Customize Regex( 0 ),
	Language( "English" )
);
obj << terms alphabetical;
obj << phrases alphabetical;
rpt = Report( obj );
```

**Code Explanation**:

1. Open data table;
2. Launch Text Explorer on Reasons Not to Floss.
3. Load regex libraries.
4. Add stop word exception.
5. Show stop words.
6. Disable custom regex.
7. Set language to English.
8. Sort terms alphabetically.
9. Sort phrases alphabetically.
10. Generate report from object.



## Text Explorer using Sentiment Analysis
> **Summary**: Implements sentiment analysis on a text column in JMP, utilizing Text Explorer to identify and categorize opinions from 'Potato Chip Product Review' data.

<!-- Keywords: #JMPScriptingLanguage, #TextExplorer, #SentimentAnalysis, #DataTable, #NaturalLanguageProcessing -->

**Code**:
```jsl
// Text Explorer - Sentiment Analysis (no curation)
// Open data table
dt = Open("data_table.jmp");
// Text Explorer - Sentiment Analysis (no curation)
Text Explorer(
	Text Columns(
		:Potato Chip Product Review
	),
	Add Stop Word Exceptions(
		{"chip", "chips"}
	),
	Add Phrase Exceptions(
		{"wickedly good"}
	),
	Sentiment Analysis,
	Tokenizing( "Basic Words" ),
	Language( "English" )
);
```

**Code Explanation**:

1. Open data table.
2. Initiate Text Explorer.
3. Specify text column.
4. Add stop word exceptions.
5. Add phrase exceptions.
6. Perform sentiment analysis.
7. Use basic tokenization.
8. Set language to English.



## Text Explorer using For Each
> **Summary**: Creates and customizes Text Explorer objects for each sample in a data table, applying presets and setting report titles.

<!-- Keywords: #JSLScriptingLanguage, #TextExplorer, #DataTable, #PresetApplication, #ReportCustomization -->

**Code**:
```jsl
plat_samples = ["Text Explorer" => {"Word Cloud with Colors"}, => {}];
dt = Open("data_table.jmp");
For Each( {sample}, plat_samples["Text Explorer"],
	obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
	Eval( Eval Expr( obj << Apply Preset( "Sample Presets", Expr( sample ) ) ) );
	obj << Set Report Title( sample );
);
```

**Code Explanation**:

1. Define presets.
2. Open data table.
3. Iterate over samples.
4. Create Text Explorer object.
5. Apply preset.
6. Set report title.
7. Repeat for each sample.



## Text Explorer using Transform Column
> **Summary**: Runs the transformation and text analysis of a data table, generating a transformed column 'xyzTransformed' and applying regex libraries to extract relevant information by gender.

<!-- Keywords: #JSLScriptingLanguage, #TextExplorer, #DataTransformation, #RegexLibraries, #ByGroup -->

**Code**:
```jsl
Open("data_table.jmp");
Current Data Table() << Transform Column( "xyz", Formula( :name || "Transformed" ) );
Text Explorer(
	Text Columns( :xyz ),
	Set Regex(
		Library( "Money" ),
		Library( "Common Emoticons" ),
		Library( "Words" ),
		Library( "HTML Link Grabber" ),
		Library( "Time" ),
		Library( "Numbers" ),
		Library( "Phrasing Punctuation" )
	),
	Language( "English" ),
	By( :sex )
);
```

**Code Explanation**:

1. Open data table.
2. Transform column "xyz".
3. Create new column "xyzTransformed".
4. Launch Text Explorer platform.
5. Select text column "xyz".
6. Set regex libraries.
7. Include money library.
8. Include common emoticons library.
9. Include words library.
10. Analyze by gender.



## Text Explorer using Select Where
### Example 1
> **Summary**: Data filtering and report generation for Southwest and Northwest airlines, utilizing Text Explorer to analyze the Airline column.

<!-- Keywords: #JSLScripting, #DataFiltering, #TextExplorer, #ReportGeneration, #AirlineIndustry -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Where( :Airline == "Southwest" );
dt << Exclude( 1 );
dt << Select Where( :Airline == "Northwest" );
dt << Exclude( 1 );
dt << Clear Select();
te = dt << Text Explorer( Text Columns( :Airline ) );
rpt = te << report;
```

**Code Explanation**:

1. Open data_table data
2. Select Southwest airline rows.
3. Exclude selected rows.
4. Select Northwest airline rows.
5. Exclude selected rows.
6. Clear row selection.
7. Launch Text Explorer.
8. Specify Airline column.
9. Generate Text Explorer report.
10. Assign report to variable.



### Example 2
> **Summary**: Explores data and text analysis by opening a data table, selecting specific rows, launching Text Explorer, and retrieving phrase counts.

<!-- Keywords: #JMPScriptingLanguage, #TextExplorer, #DataSelection, #PhraseCounting, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
excludeRows = dt << Select Where( :Gender == 1 );
excludeRows << Exclude;
te = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
rpt = te << report;
firstPhrase = rpt[Outline Box( "Term and Phrase Lists" )][String Col Box( 2 )] << get( 1 );
firstPhraseCount = rpt[Outline Box( "Term and Phrase Lists" )][Number Col Box( 2 )] << get( 1 );
Close( dt, NoSave );
dt = New Table( "Untitled", Add Rows( 1 ), New Column( "a", Character, "Nominal", Set Values( {"aaa"} ) ) );
dt:a = Repeat( "a", 100000 );
te = dt << Text Explorer( Text Columns( :a ), Tokenizing( "Basic Words" ), Language( "English" ) );
rpt = te << report;
numberOfTerms = rpt[Outline Box( "Text Explorer for a" )][Number Col Box( 1 )] << get( 1 );
```

**Code Explanation**:

1. Open data table;
2. Select rows where Gender == 1.
3. Exclude selected rows.
4. Launch Text Explorer on Reasons Not to Floss.
5. Get Text Explorer report.
6. Retrieve first phrase.
7. Retrieve first phrase count.
8. Close data_table.jmp without saving.
9. Create new table with column "a".
10. Fill column "a" with "a" repeated 100,000 times.
11. Launch Text Explorer on column "a".
12. Get Text Explorer report.
13. Retrieve number of terms.



### Example 3
> **Summary**: Analyze reasons not to floss by selecting male respondents, excluding them from the data table, and generating a report with term and phrase lists.

<!-- Keywords: #JSLScriptingLanguage, #TextExplorer, #DataTableManipulation, #ReportGeneration, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
excludeRows = dt << Select Where( :Gender == 1 );
excludeRows << Exclude;
te = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
rpt = te << report;
firstPhrase = rpt[Outline Box( "Term and Phrase Lists" )][String Col Box( 2 )] << get( 1 );
firstPhraseCount = rpt[Outline Box( "Term and Phrase Lists" )][Number Col Box( 2 )] << get( 1 );
```

**Code Explanation**:

1. Open data table.
2. Select rows where gender is male.
3. Exclude selected rows.
4. Launch Text Explorer on 'Reasons Not to Floss'.
5. Retrieve report object.
6. Access first phrase from term list.
7. Access count of first phrase.
8. Assign first phrase to variable.
9. Assign first phrase count to variable.
10. End script execution.



## Text Explorer using New Column
> **Summary**: Process of creating a new column for age group, launching Text Explorer on age group with regex library set to 'Words', and capturing error log messages.

<!-- Keywords: #JSLScriptingLanguage, #TextExplorer, #ErrorHandling, #DataTableOperations, #ColumnCreation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column("Age Group Char", Character, Nominal);
dt:Age Group Char = Char( dt:Age Group );
te = dt << Text Explorer( Text Columns( :Age Group Char ), Set Regex( Library( "Words" ) ) );
errorMsg = Get Log( -4 );
errorMsg = Trim( Concat Items( errorMsg ) );
```

**Code Explanation**:

1. Open data table.
2. Create new column for age group.
3. Convert age group to character.
4. Launch Text Explorer on age group.
5. Set regex library to "Words".
6. Capture error log message.
7. Trim error log message.



## Text Explorer using If
### Example 1
> **Summary**: Runs text analysis and sentiment extraction from a data table, utilizing Text Explorer and report features in JMP Pro.

<!-- Keywords: #JMPPro, #TextExplorer, #SentimentAnalysis, #DataTableAutomation, #ScriptingLanguage -->

**Code**:
```jsl
If( JMP Product Name() == "Pro",
	dt = Open("data_table.jmp");
	obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ), Sentiment Analysis( 1 ) );
	rpt = obj << report;
	rpt[Outline Box( "Features" )][Button Box( 1 )] << Click( 1 );
	dtFeatures = rpt[Outline Box( "Features" )][Table Box( 1 )] << Make Into Data Table;
	Close( dtFeatures, NoSave );
	If( Host is( "Windows" ),
		rpt[Outline Box( "Features" )][Table Box( 1 )] << Set Selected Rows( [5, 6] ),
		rpt[Outline Box( "Features" )][Table Box( 1 )] << Set Selected Rows( [23, 15] )
	);
	reasonText = rpt[Outline Box( "Features" )][Script Box( 1 )] << Get Text;
	rpt[Outline Box( "Features" )][Button Box( 2 )] << Click( 1 );
	dtSentiment = rpt[Outline Box( "Sentiment Summary" )][Table Box( 3 )] << Make Into Data Table;
	Close( dtSentiment, NoSave );
	Close( dt, NoSave );
);
```

**Code Explanation**:

1. Check if JMP version is Pro.
2. Open data table.
3. Run Text Explorer on "Reasons Not to Floss".
4. Extract report from Text Explorer.
5. Click on "Features" button.
6. Convert features table to data table.
7. Close features data table without saving.
8. Select specific rows based on host OS.
9. Get text from selected script box.
10. Click on "Sentiment Summary" button.
11. Convert sentiment summary table to data table.
12. Close sentiment summary data table without saving.
13. Close original data table without saving.



### Example 2
> **Summary**: Analyze text columns in a JMP data table by launching Text Explorer, setting regex libraries, and filtering by Gender, with interactive features for animation and column selection.

<!-- Keywords: #JMPPro, #TextExplorer, #LocalDataFilter, #Animation, #DataTable -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ) > 0,
	dt = Open("data_table.jmp");
	te = dt << Text Explorer(
		Text Columns( :Reasons Not to Floss ),
		Set Regex( Library( "Money" ), Library( "Words" ), Library( "HTML Link Grabber" ), Library( "Time" ), Library( "Numbers" ) ),
		Language( "English" )
	);
	df = te << Local Data Filter(
		Add Filter( columns( :Gender ), Where( :Gender == 2 ) ),
		Animation( Animate Column( :Gender ), Animate Rate( 100 ) )
	);
	fc = df << GetFilterColumn( :Gender );
	fc << Where( :Gender == 1 );
	fc << Where( :Gender == 2 );
	Close( dt, nosave );
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Open data table;
3. Launch Text Explorer.
4. Set text columns.
5. Define regex libraries.
6. Specify language as English.
7. Add local data filter.
8. Filter by Gender.
9. Animate filter column.
10. Close table without saving.



### Example 3
> **Summary**: Runs the identification of nearest neighbors in a data table using Latent Semantic Analysis and Text Explorer, with expected neighbor values defined for JMP Pro.

<!-- Keywords: #JMPPro, #LatentSemanticAnalysis, #TextExplorer, #DataTable, #NeighborIdentification -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ) > 0,
	expectedneighbors = [34, 74, 95, 111, 119, 128, 147, 149, 150, 157, 159];
	dt = Open("data_table.jmp");
	obj = dt << Text Explorer(
		Text Columns( :Survey Response ),
		Set Regex( Library( "Money" ), Library( "Words" ), Library( "HTML Link Grabber" ), Library( "Time" ), Library( "Numbers" ) ),
		Language( "English" )
	);
	obj2 = obj << Latent Semantic Analysis(
		1,
		Maximum Number of Terms( 85 ),
		Minimum Term Frequency( 2 ),
		Weighting( "TF IDF" ),
		Number of Singular Vectors( 85 ),
		Centering and Scaling( "Centered and Scaled" )
	);
	
	dt << select rows( [74] );
	obj2 << select near neighbors( 10 );
	neighbors = dt << get selected rows();
	Close( dt, nosave );
);
```

**Code Explanation**:

1. Check if JMP Pro.
2. Define expected neighbors.
3. Open data table;
4. Launch Text Explorer on Survey Response.
5. Set regex libraries: Money, Words, HTML Link Grabber, Time, Numbers.
6. Set language to English.
7. Perform Latent Semantic Analysis.
8. Select row 74.
9. Find 10 nearest neighbors.
10. Retrieve selected neighbor rows.



