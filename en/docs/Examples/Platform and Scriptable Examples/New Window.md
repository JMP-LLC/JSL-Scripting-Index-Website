# New Window

### Example 1
> **Summary**: Creates a new window titled 'Hair Care Product Promotion' and adds a panel box with background information, including text about promotional literature and notes on descriptive data.

<!-- Keywords: #JMPScriptingLanguage, #NewWindow, #PanelBox, #TextBox, #SpacerBox -->

**Code**:
```jsl
// OnOpen
New Window( "Hair Care Product Promotion",
	Panel Box( "Background",
		Text Box(
			"Promotional literature about a hair care product was sent to members of a buyers club. The goal is to determine which groups are most likely to make increased purchases as a result of receiving the promotion."
		),
		Spacer Box( Size( 10, 30 ) ),
		Text Box(
			"Note that we have relevant descriptive data about all the individuals who recieved the promotion."
		)
	)
);
```

**Code Explanation**:

1. Creates new window.
2. Names window "Hair Care Product Promotion".
3. Adds panel box titled "Background".
4. Inserts text about promotional literature.
5. Adds vertical spacer.
6. Inserts note about descriptive data.



### Example 2
> **Summary**: Creates a new window with a panel box, displaying maintenance data from capital assets. The script provides detailed information about the events and variables describing each asset.

<!-- Keywords: #JMPScriptingLanguage, #NewWindow, #PanelBox, #TextBox, #DataVisualization -->

**Code**:
```jsl
// Background
New Window( "Background",
	Panel Box(
		"Maintenance Data from Capital Assets",
		Text Box(
			"   Each row is an event relating to a specific asset.",
			<<fontColor( "Blue" )
		),
		Text Box(
			"   Events are categrised as failures or non-failures.",
			<<fontColor( "Blue" )
		),
		Text Box(
			"   event_key is missing for events that are non-failures.",
			<<fontColor( "Blue" )
		),
		Text Box(
			"   Nearly 1 million events, with 141 columns (variables) describing each.",
			<<fontColor( "Blue" ),
			<<setWrap( 800 )
		)
	)
);
```

**Code Explanation**:

1. Create new window.
2. Add panel box.
3. Title panel box.
4. Add text box.
5. Set text color blue.
6. Add another text box.
7. Set text color blue.
8. Add third text box.
9. Set text color blue.
10. Add fourth text box, set text color blue, wrap text.



### Example 3
> **Summary**: Creates a new window with multiple analysis scripts, including Bivariate, Oneway, and Distribution analyses, to visualize and explore data in JMP.

<!-- Keywords: #JMPScriptingLanguage, #BivariateAnalysis, #OnewayAnalysis, #DistributionAnalysis, #DataVisualization -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", private );
New Window( "test", dt << Run Script( "Bivariate" ), dt << Run Script( "Oneway" ), dt << Run Script( "Distribution" ) );
```

**Code Explanation**:

1. Open data_table data
2. Create new window titled "test".
3. Run Bivariate analysis script.
4. Run Oneway analysis script.
5. Run Distribution analysis script.



