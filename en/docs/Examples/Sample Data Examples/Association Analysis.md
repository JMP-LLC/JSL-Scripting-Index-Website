# Association Analysis

> **Summary**: Perform association analysis of products using the Association Analysis platform.

<!-- Keywords: #AssociationAnalysis, #ID, #Item -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Grocery Purchases.jmp");
// Association Analysis of Product
Association Analysis(
	Item( :Product ),
	ID( :Customer ID )
);
```

