# Process History Explorer

> **Summary**: Analyze and visualize the process history using the Process History Explorer tool, incorporating data from multiple tables by opening and linking relevant datasets.

<!-- Keywords: #ProcessHistoryExplorer, #columns, #ID, #LevelswithLowestYield, #Step -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Lot Wafer History.jmp");
// Process History Explorer
Open(
	"$SAMPLE_DATA/Quality Control/Lot Wafer Yield.jmp"
);
Open(
	"$SAMPLE_DATA/Quality Control/Lot Wafer History.jmp"
) <<
Process History Explorer(
	ID( :Lot, :Wafer ),
	X( :Tool, :Route ),
	Step( :Layer, :Operation ),
	Timestamp( :TimeIn, :TimeOut ),
	Yield Table( "Lot Wafer Yield" ),
	Yield Columns( "Yield" ),
	Levels with Lowest Yield( 1 )
);
```

