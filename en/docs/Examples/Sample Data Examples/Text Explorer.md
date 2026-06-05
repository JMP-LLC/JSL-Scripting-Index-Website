# Text Explorer

## Example 1
> **Summary**: Text explorer with basic words tokenized

<!-- Keywords: #TextExplorer, #columns, #Language, #TextColumns, #Tokenizing -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Aircraft Incidents.jmp");
// Final Narrative - Basic Words
Text Explorer(
	Text Columns( :Final Narrative ),
	Tokenizing( "Basic Words" ),
	Language( "English" )
);
```

## Example 2
> **Summary**: Text explorer with regex

<!-- Keywords: #TextExplorer, #columns, #Language, #SetRegex, #TextColumns -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Aircraft Incidents.jmp");
// Final Narrative - Regex
Text Explorer(
	Text Columns( :Final Narrative ),
	Set Regex( Library( "Words" ) ),
	Language( "English" )
);
```

## Example 3
> **Summary**: Text explorer with word cloud and stemming

<!-- Keywords: #TextExplorer, #AddPhrases, #Coloring, #columns, #Layout -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Big Class Families.jmp");
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

## Example 4
> **Summary**: Use text explorer to perform sentiment analysis

<!-- Keywords: #TextExplorer, #columns, #Language, #TextColumns, #Tokenizing -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Chips.jmp");
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

## Example 5
> **Summary**: Text explorer - sentiment analysis (no curation)

<!-- Keywords: #TextExplorer, #AddPhraseExceptions, #AddStopWordExceptions, #columns, #Language -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Chips.jmp");
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

## Example 6
> **Summary**: Conduct Latent Semantic Analysis (LSA) on the Reported Term for the Adverse Event column and identify key terms related to intracranial pressure, hepatic function, and urinary tract infection using the Text Explorer platform.

<!-- Keywords: #TextExplorer, #columns, #Contains, #LatentSemanticAnalysis, #MaximumNumberofTerms -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Nicardipine.jmp");
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

## Example 7
> **Summary**: Perform Latent Semantic Analysis and generate SVD plots for text exploration in the Pet Survey dataset.

<!-- Keywords: #TextExplorer, #columns, #LatentSemanticAnalysis, #MaximumNumberofTerms, #NumberofSingularVectors -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Pet Survey.jmp");
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

