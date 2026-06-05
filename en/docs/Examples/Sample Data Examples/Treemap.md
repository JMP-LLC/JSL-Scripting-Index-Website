# Treemap

> **Summary**: Generate a Treemap visualization  to analyze the relationships and distributions of verbal scores, test-taking percentages, and geographic locations (states) based on the SAT dataset.

<!-- Keywords: #Treemap, #Categories, #Coloring, #Ordering, #Sizes -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/SAT.jmp");
// Treemap
Treemap(
	Categories( :State ),
	Coloring( :"2004 Verbal"n ),
	Sizes( :"% Taking (2004)"n ),
	Ordering( :X, :Y )
);
```

