# Mean

> **Summary**: Create a treemap to visualize election results by state, coloring by winner and sizing by electors, with additional ordering based on mean values of X and Y.

<!-- Keywords: #Categories, #ColorTheme, #Coloring, #Mean, #Ordering -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/US Election 2008.jmp");
// Treemap
Tree Map(
	Categories( :State ),
	Coloring( :Winner ),
	Sizes( :Electors ),
	Ordering( :"Mean(X)"n, :"Mean(Y)"n ),
	Color Theme( "JMP Default" )
);
```

