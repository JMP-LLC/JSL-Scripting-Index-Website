# Border Box

## Border Box using Window
> **Summary**: Retrieves and displays window details, including title, class, hidden status, and properties, using a With Window Handler to interact with open windows.

<!-- Keywords: #JSLScriptingLanguage, #WindowManagement, #InteractiveAnalysis, #JMPScripting, #WithWindowHandler -->

**Code**:
```jsl
// 
windowList = Window();
windowTitleList = List();
windowClassList = List();
windowPropertyList = List();
For( i = 1, i <= N Items( windowList ),
	i++,
	windowTitleList[i] = Char( i ) ||
	": " || (windowList[i] <<
	Get Window Title);
	windowClassList[i] = windowList[i]
	 << Window Class Name;
	windowPropertyList[i] = windowList[i]
	 << Get Property List;
);
ShowWindowDetail =
Function( {},
	{}, 
	
	num = windowListBox <<
	Get Selected Indices;
	titleTxt <<
	Set Text(
		Word(
			2,
			windowTitleList[num],
			": "
		)
	);
	classTxt <<
	Set Text( windowClassList[num] );
	hiddenTxt <<
	Set Text(
		Char(
			Not(
				windowList[num] <<
				Get Show Window
			)
		)
	);
	propertyListBox <<
	Set Items( windowPropertyList[num] );
);
detailWindow =
New Window( "Window Details",
	Border Box( Top( 10 ), Bottom( 10 ),
		Left( 10 ), Right( 10 ),
		V List Box(
			Panel Box( "JMP Windows",
				windowListBox =
				List Box(
					windowTitleList,
					maxSelected( 1 )
				),
				Button Box(
					"Show Details",
					ShowWindowDetail()
				), 
				
				Panel Box( "Details",
					Lineup Box(
						N Col( 2 ),
						Text Box(
							"Title: "
						),
						titleTxt =
						Text Box( "" ),
						Text Box(
							"Class: "
						),
						classTxt =
						Text Box( "" ),
						Text Box(
							"Hidden: "
						),
						hiddenTxt =
						Text Box( "" ),
						Text Box(
							"Properties: "
						),
						propertyListBox
						 =
						List Box(
							{},
							nlines( 7 )
						)
					)
				)
			)
		)
	)
);
```

**Code Explanation**:

1. Retrieve all open windows.
2. Initialize lists for window details.
3. Loop through each window.
4. Store window titles.
5. Store window classes.
6. Store window properties.
7. Define function to show window details.
8. Get selected window index.
9. Update title text box.
10. Update class text box.
11. Update hidden status text box.
12. Update properties list box.
13. Create new window for details.
14. Add list box for window selection.
15. Add button to show details.
16. Add panel for displaying details.



