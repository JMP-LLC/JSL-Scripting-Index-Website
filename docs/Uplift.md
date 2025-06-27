# Uplift



### Action

**Syntax:** obj << Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

**JMP Version Added:** 18

**Anonymous preset**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**Search by name**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Search within folder(s)**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Broadcast

**Syntax:** obj << Broadcast(message)

**Description:** Broadcasts a message to a platform. If return results from individual objects are tables, they are concatenated if possible, and the final format is identical to either the result from the Save Combined Table option in a Table Box or the result from the Concatenate option using a Source column. Other than those, results are stored in a list and returned.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### By

**Syntax:** obj << By( column(s) )

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 ),
	By( _bycol )
);

```

### Color Points

**Syntax:** obj << Color Points

**Description:** Colors the points according to their classification.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
obj << Color Points;

```

### Column Contributions

**Syntax:** obj << Column Contributions( state=0|1 )

**Description:** Shows or hides a report with each input column and its corresponding contribution to the fit.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
obj << Column Contributions( 1 );

```

### Column Switcher

**Syntax:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Description:** Adds a control panel for changing the platform&apos;s variables

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Copy ByGroup Script

**Syntax:** obj << Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj << Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
obj << Copy Script;

```

### Data Table Window

**Syntax:** obj << Data Table Window

**Description:** Move the data table window for this analysis to the front.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
obj << Data Table Window;

```

### Factor

**Syntax:** obj << Factor( column(s) )

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);

```

### Freq

**Syntax:** obj << Freq( column )

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 ),
	Freq( _freqcol )
);

```

### Get Average Absolute Error Test

**Syntax:** obj << Get Average Absolute Error Test

**Description:** Returns the Mean Abs Dev statistic for the test set. Available only when using a validation set.

**Boosted Tree Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
aabs = obj << Get Average Absolute Error Test;
Show( aabs );

```

**Bootstrap Forest Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
aabs = obj << Get Average Absolute Error Test;
Show( aabs );

```

**Partition Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Split Best( 2 )
);
aabs = obj << Get Average Absolute Error Test;
Show( aabs );

```

**Uplift Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	New Column Name( "Valid1" ),
	Go
);
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Valid1 ),
	Split Best( 2 )
);
aabs = obj << Get Average Absolute Error Test;
Show( aabs );

```

### Get Average Absolute Error Training

**Syntax:** obj << Get Average Absolute Error Training

**Description:** Returns the Mean Abs Dev statistic for the training set.

**Boosted Tree Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
aabs = obj << Get Average Absolute Error Training;
Show( aabs );

```

**Bootstrap Forest Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
aabs = obj << Get Average Absolute Error Training;
Show( aabs );

```

**Partition Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Split Best( 2 )
);
aabs = obj << Get Average Absolute Error Training;
Show( aabs );

```

**Uplift Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 2 )
);
aabs = obj << Get Average Absolute Error Training;
Show( aabs );

```

### Get Average Absolute Error Validation

**Syntax:** obj << Get Average Absolute Error Validation

**Description:** Returns the Mean Abs Dev statistic for the validation set. Available only when using a validation set.

**Boosted Tree Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Go
);
aabs = obj << Get Average Absolute Error Validation;
Show( aabs );

```

**Bootstrap Forest Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Go
);
aabs = obj << Get Average Absolute Error Validation;
Show( aabs );

```

**Partition Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Split Best( 2 )
);
aabs = obj << Get Average Absolute Error Validation;
Show( aabs );

```

**Uplift Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Validation ),
	Split Best( 2 )
);
aabs = obj << Get Average Absolute Error Validation;
Show( aabs );

```

### Get Average Log Error Test

**Syntax:** obj << Get Average Log Error Test

**Description:** Returns the average of -log(p), where p equals the probability of response attributed by the model that the response actually occurred, for the test set. Available only when using a validation set.

**Boosted Tree Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
avg = obj << Get Average Log Error Test;
Show( avg );

```

**Bootstrap Forest Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
avg = obj << Get Average Log Error Test;
Show( avg );

```

**Partition Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Method( "Decision Tree" ),
	Go
);
avg = obj << Get Average Log Error Test;
Show( avg );

```

**Uplift Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	New Column Name( "Valid1" ),
	Go
);
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Valid1 ),
	Split Best( 2 )
);
avg = obj << Get Average Log Error Test;
Show( avg );

```

### Get Average Log Error Training

**Syntax:** obj << Get Average Log Error Training

**Description:** Returns the average of -log(p), where p equals the probability of response attributed by the model that the response actually occurred, for the training set.

**Boosted Tree Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
avg = obj << Get Average Log Error Training;
Show( avg );

```

**Bootstrap Forest Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
avg = obj << Get Average Log Error Training;
Show( avg );

```

**Partition Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Split Best( 3 )
);
avg = obj << Get Average Log Error Training;
Show( avg );

```

**Uplift Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 2 )
);
avg = obj << Get Average Log Error Training;
Show( avg );

```

### Get Average Log Error Validation

**Syntax:** obj << Get Average Log Error Validation

**Description:** Returns the average of -log(p), where p equals the probability of response attributed by the model that the response actually occurred, for the validation set. Available only when using a validation set.

**Boosted Tree Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Go
);
avg = obj << Get Average Log Error Validation;
Show( avg );

```

**Bootstrap Forest Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Go
);
avg = obj << Get Average Log Error Validation;
Show( avg );

```

**Partition Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Method( "Decision Tree" ),
	Go
);
avg = obj << Get Average Log Error Validation;
Show( avg );

```

**Uplift Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Validation ),
	Split Best( 2 )
);
avg = obj << Get Average Log Error Validation;
Show( avg );

```

### Get By Levels

**Syntax:** obj << Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Syntax:** obj << Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 ),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Confusion Matrix Test

**Syntax:** obj << Get Confusion Matrix Test

**Description:** Returns the confusion matrix for the test set. Available only when using a validation set.

**Boosted Tree Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Boosted Tree(
	Y( :marital status ),
	X( :sex, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
cm = obj << Get Confusion Matrix Test;
Show( cm );

```

**Bootstrap Forest Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
cm = obj << Get Confusion Matrix Test;
Show( cm );

```

**Partition Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
cm = obj << Get Confusion Matrix Test;
Show( cm );

```

**Uplift Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	New Column Name( "Valid1" ),
	Go
);
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Valid1 ),
	Split Best( 2 )
);
cm = obj << Get Confusion Matrix Test;
Show( cm );

```

### Get Confusion Matrix Training

**Syntax:** obj << Get Confusion Matrix Training

**Description:** Returns the confusion matrix for the training set.

**Boosted Tree Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Boosted Tree(
	Y( :marital status ),
	X( :sex, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
cm = obj << Get Confusion Matrix Training;
Show( cm );

```

**Bootstrap Forest Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
cm = obj << Get Confusion Matrix Training;
Show( cm );

```

**Partition Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
cm = obj << Get Confusion Matrix Training;
Show( cm );

```

**Uplift Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 2 )
);
cm = obj << Get Confusion Matrix Training;
Show( cm );

```

### Get Confusion Matrix Validation

**Syntax:** obj << Get Confusion Matrix Validation

**Description:** Returns the confusion matrix for the validation set. Available only when using a validation set.

**Boosted Tree Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Boosted Tree(
	Y( :marital status ),
	X( :sex, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
cm = obj << Get Confusion Matrix Validation;
Show( cm );

```

**Bootstrap Forest Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
cm = obj << Get Confusion Matrix Validation;
Show( cm );

```

**Partition Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
cm = obj << Get Confusion Matrix Validation;
Show( cm );

```

**Uplift Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Validation ),
	Split Best( 2 )
);
cm = obj << Get Confusion Matrix Validation;
Show( cm );

```

### Get Confusion Rates Test

**Syntax:** obj << Get Confusion Rates Test

**Description:** Returns the confusion rates for the test set. Available only when using a validation set.

**Boosted Tree Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Boosted Tree(
	Y( :marital status ),
	X( :sex, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
cr = obj << Get Confusion Rates Test;
Show( cr );

```

**Bootstrap Forest Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
cr = obj << Get Confusion Rates Test;
Show( cr );

```

**Partition Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
cr = obj << Get Confusion Rates Test;
Show( cr );

```

**Uplift Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	New Column Name( "Valid1" ),
	Go
);
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Valid1 ),
	Split Best( 2 )
);
cr = obj << Get Confusion Rates Test;
Show( cr );

```

### Get Confusion Rates Training

**Syntax:** obj << Get Confusion Rates Training

**Description:** Returns the confusion rates for the training set.

**Boosted Tree Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Boosted Tree(
	Y( :marital status ),
	X( :sex, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
cr = obj << Get Confusion Rates Training;
Show( cr );

```

**Bootstrap Forest Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
cr = obj << Get Confusion Rates Training;
Show( cr );

```

**Partition Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
cr = obj << Get Confusion Rates Training;
Show( cr );

```

**Uplift Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 2 )
);
cr = obj << Get Confusion Rates Training;
Show( cr );

```

### Get Confusion Rates Validation

**Syntax:** obj << Get Confusion Rates Validation

**Description:** Returns the confusion rates for the validation set. Available only when using a validation set.

**Boosted Tree Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Boosted Tree(
	Y( :marital status ),
	X( :sex, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
cr = obj << Get Confusion Rates Validation;
Show( cr );

```

**Bootstrap Forest Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
cr = obj << Get Confusion Rates Validation;
Show( cr );

```

**Partition Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
cr = obj << Get Confusion Rates Validation;
Show( cr );

```

**Uplift Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Validation ),
	Split Best( 2 )
);
cr = obj << Get Confusion Rates Validation;
Show( cr );

```

### Get Container

**Syntax:** obj << Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Platform with Filter**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

### Get Data Table

**Syntax:** obj << Get Data Table

**Description:** Returns a reference to the data table.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Difference Formula

**Syntax:** obj << Get Difference Formula

**Description:** Constructs a script to create a difference formula and returns it.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
obj << Get Difference Formula;

```

### Get Gen RSquare Test

**Syntax:** obj << Get Gen RSquare Test

**Description:** Returns the generalized RSquare for the test set. Available only when using a validation set.

**Boosted Tree Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Boosted Tree(
	Y( :sex ),
	X( :marital status, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
r = obj << Get Gen RSquare Test;
Show( r );

```

**Bootstrap Forest Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
r = obj << Get Gen RSquare Test;
Show( r );

```

**Partition Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
r = obj << Get Gen RSquare Test;
Show( r );

```

**Uplift Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	New Column Name( "Valid1" ),
	Go
);
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Valid1 ),
	Split Best( 2 )
);
r = obj << Get Gen RSquare Test;
Show( r );

```

### Get Gen RSquare Training

**Syntax:** obj << Get Gen RSquare Training

**Description:** Returns the generalized RSquare for the training set.

**Boosted Tree Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Boosted Tree(
	Y( :sex ),
	X( :marital status, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
r = obj << Get Gen RSquare Training;
Show( r );

```

**Bootstrap Forest Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
r = obj << Get Gen RSquare Training;
Show( r );

```

**Partition Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
r = obj << Get Gen RSquare Training;
Show( r );

```

**Uplift Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 2 )
);
r = obj << Get Gen RSquare Training;
Show( r );

```

### Get Gen RSquare Validation

**Syntax:** obj << Get Gen RSquare Validation

**Description:** Returns the generalized RSquare for the validation set. Available only when using a validation set.

**Boosted Tree Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Boosted Tree(
	Y( :sex ),
	X( :marital status, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
r = obj << Get Gen RSquare Validation;
Show( r );

```

**Bootstrap Forest Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
r = obj << Get Gen RSquare Validation;
Show( r );

```

**Partition Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
r = obj << Get Gen RSquare Validation;
Show( r );

```

**Uplift Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Validation ),
	Split Best( 2 )
);
r = obj << Get Gen RSquare Validation;
Show( r );

```

### Get Group Platform

**Syntax:** obj << Get Group Platform

**Description:** Return the Group Platform object if this platform is part of a Group. Otherwise, returns Empty().

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Measures

**Syntax:** obj << Get Measures

**Description:** Returns summary measures of fit from the model.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
obj << Get Measures;

```

### Get Microseconds

**Syntax:** obj << Get Microseconds

**Description:** Returns the number of microseconds used to complete the analysis.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
time = obj << Get Microseconds;
Show( time );

```

### Get Misclassification Rate Test

**Syntax:** obj << Get Misclassification Rate Test

**Description:** Returns the misclassification rate for the test set. Available only when using a validation set.

**Boosted Tree Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
rate = obj << Get Misclassification Rate Test;
Show( rate );

```

**Bootstrap Forest Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
rate = obj << Get Misclassification Rate Test;
Show( rate );

```

**Partition Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Split Best( 2 )
);
rate = obj << Get Misclassification Rate Test;
Show( rate );

```

**Uplift Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	New Column Name( "Valid1" ),
	Go
);
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Valid1 ),
	Split Best( 2 )
);
rate = obj << Get Misclassification Rate Test;
Show( rate );

```

### Get Misclassification Rate Training

**Syntax:** obj << Get Misclassification Rate Training

**Description:** Returns the misclassification rate for the training set.

**Boosted Tree Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
rate = obj << Get Misclassification Rate Training;
Show( rate );

```

**Bootstrap Forest Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
rate = obj << Get Misclassification Rate Training;
Show( rate );

```

**Partition Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Method( "Decision Tree" )
);
obj << Split Best( 2 );
rate = obj << Get Misclassification Rate Training;
Show( rate );

```

**Uplift Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 2 )
);
rate = obj << Get Misclassification Rate Training;
Show( rate );

```

### Get Misclassification Rate Validation

**Syntax:** obj << Get Misclassification Rate Validation

**Description:** Returns the misclassification rate for the validation set. Available only when using a validation set.

**Boosted Tree Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "Holdback1", formula( Random Integer( 1, 3 ) ) );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	validation( :Holdback1 ),
	Go
);
rate = obj << Get Misclassification Rate Validation;
Show( rate );

```

**Bootstrap Forest Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "Holdback1", formula( Random Integer( 1, 3 ) ) );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	validation( :Holdback1 ),
	Go
);
rate = obj << Get Misclassification Rate Validation;
Show( rate );

```

**Partition Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "Holdback1", formula( Random Integer( 1, 3 ) ) );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	validation( :Holdback1 ),
	Method( "Decision Tree" ),
	Go
);
rate = obj << Get Misclassification Rate Validation;
Show( rate );

```

**Uplift Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Validation ),
	Split Best( 2 )
);
rate = obj << Get Misclassification Rate Validation;
Show( rate );

```

### Get Precision Recall Area Test

**Syntax:** obj << Get Precision Recall Area Test

**Description:** Returns the area under the precision-recall curve for the test set. The precision-recall curve must be displayed before the area is computed. Available only when using a validation set.

**Boosted Tree Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Test;
Show( area );

```

**Bootstrap Forest Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Test;
Show( area );

```

**Partition Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Method( "Decision Tree" ),
	Go
);
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Test;
Show( area );

```

### Get Precision Recall Area Training

**Syntax:** obj << Get Precision Recall Area Training

**Description:** Returns the area under the precision-recall curve for the training set. The precision-recall curve must be displayed before the area is computed.

**Boosted Tree Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Show Tree( 0 );
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Training;
Show( area );

```

**Bootstrap Forest Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Show Tree( 0 );
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Training;
Show( area );

```

**Partition Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Split Best( 2 )
);
obj << Show Tree( 0 );
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Training;
Show( area );

```

### Get Precision Recall Area Validation

**Syntax:** obj << Get Precision Recall Area Validation

**Description:** Returns the area under the precision-recall curve for the validation set. The precision-recall curve must be displayed before the area is computed. Available only when using a validation set.

**Boosted Tree Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Go
);
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Validation;
Show( area );

```

**Bootstrap Forest Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Go
);
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Validation;
Show( area );

```

**Partition Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Method( "Decision Tree" ),
	Go
);
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Validation;
Show( area );

```

### Get Prediction Formula

**Syntax:** obj << Get Prediction Formula

**Description:** Constructs a script to create a prediction formula column and returns it.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
obj << Get Prediction Formula;

```

### Get RMS Error Test

**Syntax:** obj << Get RMS Error Test

**Description:** Returns the square root of the mean square of the test errors. Available only when using a validation set.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
rms = obj << Get RMS Error Test;
Show( rms );

```

### Get RMS Error Training

**Syntax:** obj << Get RMS Error Training

**Description:** Returns the square root of the mean square of the training errors.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
rms = obj << Get RMS Error Training;
Show( rms );

```

### Get RMS Error Validation

**Syntax:** obj << Get RMS Error Validation

**Description:** Returns the square root of the mean square of the validation errors. Available only when using a validation set.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
rms = obj << Get RMS Error Validation;
Show( rms );

```

### Get ROC Area Test

**Syntax:** obj << Get ROC Area Test

**Description:** Returns the area under the Receiver Operator Characteristic (ROC) curve for the test data. The ROC curve needs to be displayed before the area is computed. Available only when using a validation set.

**Boosted Tree Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
obj << ROC Curve;
area = obj << Get ROC Area Test;
Show( area );

```

**Bootstrap Forest Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
obj << ROC Curve;
area = obj << Get ROC Area Test;
Show( area );

```

**Partition Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Method( "Decision Tree" ),
	Go
);
obj << ROC Curve;
area = obj << Get ROC Area Test;
Show( area );

```

### Get ROC Area Training

**Syntax:** obj << Get ROC Area Training

**Description:** Returns the area under the Receiver Operator Characteristic (ROC) curve for the training data set. The ROC curve needs to be displayed before the area is computed.

**Boosted Tree Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Show Tree( 0 );
obj << ROC Curve;
area = obj << Get ROC Area Training;
Show( area );

```

**Bootstrap Forest Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Show Tree( 0 );
obj << ROC Curve;
area = obj << Get ROC Area Training;
Show( area );

```

**Partition Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Split Best( 2 )
);
obj << Show Tree( 0 );
obj << ROC Curve;
area = obj << Get ROC Area Training;
Show( area );

```

### Get ROC Area Validation

**Syntax:** obj << Get ROC Area Validation

**Description:** Returns the area under the Receiver Operator Characteristic (ROC) curve for the validation data set. The ROC curve needs to be displayed before the area is computed. Available only when using a validation set.

**Boosted Tree Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Go
);
obj << ROC Curve;
area = obj << Get ROC Area Validation;
Show( area );

```

**Bootstrap Forest Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Go
);
obj << ROC Curve;
area = obj << Get ROC Area Validation;
Show( area );

```

**Partition Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Method( "Decision Tree" ),
	Go
);
obj << ROC Curve;
area = obj << Get ROC Area Validation;
Show( area );

```

### Get RSquare Test

**Syntax:** obj << Get RSquare Test

**Description:** Returns the RSquare for the test set. Available only when using a validation set.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
r = obj << Get RSquare Test;
Show( r );

```

### Get RSquare Training

**Syntax:** obj << Get RSquare Training

**Description:** Returns the RSquare for the training set.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
r = obj << Get RSquare Training;
Show( r );

```

### Get RSquare Validation

**Syntax:** obj << Get RSquare Validation

**Description:** Returns the RSquare for the validation set. Available only when using a validation set.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
r = obj << Get RSquare Validation;
Show( r );

```

### Get Script

**Syntax:** obj << Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj << Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Seconds

**Syntax:** obj << Get Seconds

**Description:** Returns the number of seconds used to complete the analysis.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
time = obj << Get Seconds;
Show( time );

```

### Get Timing

**Syntax:** obj << Get Timing

**Description:** Times the platform launch.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
t = obj << Get Timing;
Show( t );

```

### Get Tolerant Prediction Formula

**Syntax:** obj << Get Tolerant Prediction Formula

**Description:** Constructs a script to create a tolerant prediction formula column and returns it to the Log window.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
obj << Get Tolerant Prediction Formula;

```

### Get Web Support

**Syntax:** obj << Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Syntax:** obj << Get Where Expr

**Description:** Returns the Where expression for the data subset, if the platform was launched with By() or Where(). Otherwise, returns Empty()

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Go

**Syntax:** obj << Go

**Description:** Begins iterating after K Fold Crossvalidation has been selected. If using JMP Pro, Go begins iterating after Validation column is specified.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );
obj << K Fold Crossvalidation( 5 );
obj << Go;

```

### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Informative Missing

**Syntax:** obj = Uplift(...Informative Missing( state=0|1 )...)

**Description:** For categorical variables, treats missing as a category. For continuous variables, treats missing as either low or high, whichever fits better. On by default.

**Boosted Tree Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:age[3] = .;
obj = dt << Boosted Tree( Y( :height ), X( :age ), Informative Missing( 0 ), Go );

```

**Bootstrap Forest Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:age[3] = .;
obj = dt << Bootstrap Forest( Y( :height ), X( :age ), Informative Missing( 0 ), Go );

```

**Partition Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:age[3] = .;
obj = dt << Partition( Y( :height ), X( :age ), Informative Missing( 0 ) );
obj << Split Best( 1 );

```

**Uplift Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
dt:Age[3] = .;
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Informative Missing( 0 ),
	Split Best( 3 )
);

```

### Leaf Report

**Syntax:** obj << Leaf Report( state=0|1 )

**Description:** Shows or hides a report with the mean and count (continuous response) or the response rate and count (categorical response) of the leaf nodes.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
obj << Show Tree( 0 );
obj << Leaf Report( 1 );

```

### Local Data Filter

**Syntax:** obj << Local Data Filter

**Description:** To filter data to specific groups or ranges, but local to this platform

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

### Lock Columns

**Syntax:** obj << Lock Columns( state=0|1, columns )

**Description:** Locks out specified columns from being used for splits.

**Partition Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );
obj << Lock Columns( 1, :age, :size );
(obj << report)[CheckboxBox( 1 )] << Select;
Wait( .5 );
obj << Lock Columns( 0 );
Wait( .5 );
obj << Lock Columns( 1 );

```

**Uplift Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion )
);
obj << Lock Columns( 1, :Age, :Hair Color );
(obj << report)[CheckboxBox( 1 )] << Select;
Wait( .5 );
obj << Lock Columns( 0 );
Wait( .5 );
obj << Lock Columns( 1 );

```

### Minimum Size Split

**Syntax:** obj << Minimum Size Split( number )

**Description:** Sets the minimum group size when deciding whether to split a group.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );
obj << Minimum Size Split( 15 );
obj << Split Best( 4 );

```

### Multithreading

**Syntax:** Multithreading( state=0|1 )

**Description:** Divides up the calculations among the available threads on the machine. On by default.

**Boosted Tree Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Multithreading( 1 ),
	Go
);

```

**Bootstrap Forest Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Multithreading( 1 ),
	Go
);

```

**Partition Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Multithreading( 1 ),
	Split Best( 2 )
);

```

### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Description:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Ordinal Restricts Order

**Syntax:** obj = Uplift(...Ordinal Restricts Order( state=0|1 )...)

**Description:** For ordinal columns, considers only splits that preserve order. On by default.

**Boosted Tree Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Boosted Tree( Y( :height ), X( :age ), Ordinal Restricts Order( 1 ), Go );

```

**Bootstrap Forest Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bootstrap Forest( Y( :height ), X( :age ), Ordinal Restricts Order( 1 ), Go );

```

**Partition Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Partition( Y( :height ), X( :age ), Ordinal Restricts Order( 1 ) );
obj << Split Best( 3 );

```

**Uplift Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Ordinal Restricts Order( 1 ),
	Split Best( 2 )
);

```

### Paste Local Data Filter

**Syntax:** obj << Paste Local Data Filter

**Description:** Apply the local data filter from the clipboard to the current report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

### Plot Actual by Predicted

**Syntax:** obj << Plot Actual by Predicted( state=0|1 )

**Description:** Shows or hides a plot using the training data with the predicted values on the X axis and actual values on the Y axis.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Split Best( 3 )
);
obj << Plot Actual By Predicted;

```

### Profiler

**Syntax:** obj << Profiler( state=0|1 )

**Description:** Shows or hides the prediction profiler, which is used to graphically explore the prediction equation by slicing it one factor at a time. The prediction profiler contains features for optimization.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
obj << Profiler( 1 );

```

### Prune Worst

**Syntax:** obj << Prune Worst

**Description:** Removes the terminal split that has the least discrimination ability.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
obj << Prune Worst;
Wait( .5 );
obj << Prune Worst;

```

### Publish Difference Formula

**Syntax:** obj << Publish Difference Formula

**Description:** Builds a difference formula and publishes it as a formula column script in Formula Depot.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
obj << Publish Difference Formula;

```

### Publish Prediction Formula

**Syntax:** obj << Publish Prediction Formula

**Description:** Creates prediction formulas and saves them as formula column scripts in the Formula Depot platform.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
obj << Publish Prediction Formula;

```

### Publish Tolerant Prediction Formula

**Syntax:** obj << Publish Tolerant Prediction Formula

**Description:** Builds a prediction formula that predicts even when there are missing values and publishes it as a formula column script in Formula Depot.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
obj << Publish Tolerant Prediction Formula;

```

### Redo Analysis

**Syntax:** obj << Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj << Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntax:** obj << Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj << Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 ),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Syntax:** obj << Remove Column Switcher

**Description:** Removes the most recent Column Switcher that has been added to the platform.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

### Remove Local Data Filter

**Syntax:** obj << Remove Local Data Filter

**Description:** If a local data filter has been created, this removes it and restores the platform to use all the data in the data table directly

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

### Render Preset

**Syntax:** Render Preset( preset )

**Description:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Syntax:** obj << Report;

Report( obj )

**Description:** Returns a reference to the report object.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj << Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
obj << Report View( "Summary" );

```

### Response

**Syntax:** obj << Response( column(s) )

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj << Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj << Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Difference

**Syntax:** obj << Save Difference

**Description:** Saves the predicted treatment difference.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
obj << Save Difference;

```

### Save Difference Formula

**Syntax:** obj << Save Difference Formula

**Description:** Saves a formula column with the predicted treatment difference.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
obj << Save Difference Formula;

```

### Save Leaf Label Formula

**Syntax:** obj << Save Leaf Label Formula

**Description:** Saves the leaf label formula in a new column in the data table.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
obj << Save Leaf Label Formula;

```

### Save Leaf Labels

**Syntax:** obj << Save Leaf Labels

**Description:** Saves the leaf labels in a new column in the data table.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
obj << Save Leaf Labels;

```

### Save Leaf Number Formula

**Syntax:** obj << Save Leaf Number Formula

**Description:** Saves the leaf number formula in a new column in the data table.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
obj << Save Leaf Number Formula;

```

### Save Leaf Numbers

**Syntax:** obj << Save Leaf Numbers

**Description:** Saves the leaf numbers in a new column in the data table.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
obj << Save Leaf Numbers;

```

### Save Predicteds

**Syntax:** obj << Save Predicteds

**Description:** Saves the predicted values in a new column in the data table.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
obj << Save Predicteds;

```

### Save Prediction Formula

**Syntax:** obj << Save Prediction Formula

**Description:** Saves the prediction formula in a new column in the data table.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
obj << Save Prediction Formula;

```

### Save Residuals

**Syntax:** obj << Save Residuals

**Description:** Saves the residuals in a new column in the data table.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
obj << Save Residuals;

```

### Save Script for All Objects

**Syntax:** obj << Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj << Save Script for All Objects To Data Table( <name> )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj << Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
obj << Save Script to Script Window;

```

### Save Tolerant Prediction Formula

**Syntax:** obj << Save Tolerant Prediction Formula

**Description:** Save a formula that predicts even when there are missing values in a new column in the data table.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
obj << Save Tolerant Prediction Formula;

```

### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description:** SendToEmbeddedScriptable restores settings of embedded scriptable objects.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers",
			"Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value(
				Time( 6000, Lock( 0 ), Show( 1 ) )
			)}
		)
	)
);

```

### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description:** Send To Report is used in tandem with the Dispatch command to customize the appearance of a report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport(
		Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} )
	)
);

```

### Set Random Seed

**Syntax:** obj << Set Random Seed( number )

**Description:** Specifies a random seed to reproduce the results for future launches of the platform.

**Boosted Tree Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Set Random Seed( 1234 ),
	Go
);

```

**Bootstrap Forest Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Set Random Seed( 1234 ),
	Go
);

```

**Partition Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Set Random Seed( 1234 ),
	Split Best( 2 )
);

```

**Uplift Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Set Random Seed( 1234 ),
	Split Best( 2 )
);

```

### Show Fit Details

**Syntax:** obj << Show Fit Details( state=0|1 )

**Description:** Shows or hides a report with the definition of all the measures, the misclassification rates, and the confusion matrices.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
obj << Show Tree( 0 );
obj << Show Fit Details( 1 );

```

### Show Graph

**Syntax:** obj << Show Graph( state=0|1 )

**Description:** Shows or hides the partition graph. On by default.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
obj << ShowGraph( 0 );
Wait( .5 );
obj << ShowGraph( 1 );

```

### Show Points

**Syntax:** obj << Show Points( state=0|1 )

**Description:** Shows the points (1 or on) or shows color panels (0 or off) in the partition graph. On by default.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
obj << ShowPoints( 0 );
Wait( .5 );
obj << ShowPoints( 1 );

```

### Show Split Candidates

**Syntax:** obj << Show Split Candidates( state=0|1 )

**Description:** Shows or hides the Candidates report in the terminal splits. On by default.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
obj << Show Split Candidates( 1 );
(obj << Report)["Candidates"] << Close( 0 ) << select;

```

### Show Split Stats

**Syntax:** obj << Show Split Stats( state=0|1 )

**Description:** Shows or hides the count and the split statistics. The statistics shown include the G² or the mean and standard deviation. On by default.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
obj << Show Split Stats( 0 );
Wait( .5 );
obj << Show Split Stats( 1 );

```

### Show Tree

**Syntax:** obj << Show Tree( state=0|1 )

**Description:** Shows or hides the tree structure with the partition information. On by default.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
obj << ShowTree( 1 );

```

### Small Tree View

**Syntax:** obj << Small Tree View( state=0|1 )

**Description:** Shows or hides a smaller version of the partition tree to the right of the Partition Graph.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
obj << Small Tree View( 1 );

```

### Sort Split Candidates

**Syntax:** obj << Sort Split Candidates( state=0|1 )

**Description:** Sorts the candidates by significance.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
(obj << Report)["Candidates"] << Close( 0 ) << select;
Wait( 1 );
obj << Sort Split Candidates;

```

### Split Best

**Syntax:** obj << Split Best( <number of splits> )

**Description:** Splits the tree at the optimal split point.

**Partition Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );
obj << Split Best;
Wait( .5 );
obj << Split Best( 2 );

```

**Uplift Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion )
);
obj << Split Best;
Wait( 1 );
obj << Split Best( 2 );

```

### Split History

**Syntax:** obj << Split History( state=0|1 )

**Description:** Shows or hides a graph showing each split on the X axis and the corresponding R² value for the model on the Y axis.

**Partition Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );
obj << Split Best( 5 );
obj << Show Tree( 0 );
obj << Split History;

```

**Uplift Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion )
);
obj << Split Best( 2 );
obj << Show Tree( 0 );
obj << Split History;

```

### Sync to Data Table Changes

**Syntax:** obj << Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Title

**Syntax:** obj << Title( "new title" )

**Description:** Sets the title of the platform.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj << Top Report

**Description:** Returns a reference to the root node in the report.

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Syntax:** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description:** Create a transform column in the local context of an object, usually a platform. The transform column is active only for the lifetime of the platform.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### Treatment

**Syntax:** obj << Treatment( column )

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);

```

### Uplift

**Syntax:** Uplift( Y( column ), X( columns ), Treatment( column )  )

**Description:** Fits a recursive partition tree that selects splits to maximize treatment differences. The models identify groups of individuals who are most likely to respond to a treatment.

**Example 1**

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);

```

**Example 2**

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	New Column Name( "Valid1" ),
	Go
);
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Valid1 ),
	Split Best( 3 )
);

```

### Uplift Graph

**Syntax:** obj << Uplift Graph( state=0|1 )

**Description:** Shows uplift across sorted terminal leaves.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion )
);
obj << Split Best( 2 );
obj << Uplift Graph;

```

### Use Excluded Rows for Validation

**Syntax:** obj = Uplift(...Use Excluded Rows for Validation( state=0|1 )...)

**Description:** Uses the excluded rows in the data table to create a validation set. This option appears in the launch window only if you are using standard JMP and there are excluded rows.

**JMP Version Added:** 15

**Boosted Tree Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
For Each( {i}, 10 :: 200 :: 10, Row State( i ) = Excluded State( 1 ) );
obj = dt << Boosted Tree(
	Y( :Y ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Use Excluded Rows for Validation( 1 ),
	Go
);

```

**Bootstrap Forest Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
For Each( {i}, 10 :: 200 :: 10, Row State( i ) = Excluded State( 1 ) );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Use Excluded Rows for Validation( 1 ),
	Go
);

```

**Partition Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
For Each( {i}, 10 :: 200 :: 10, Row State( i ) = Excluded State( 1 ) );
obj = dt << Partition(
	Y( :Y ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Use Excluded Rows for Validation( 1 )
);
obj << Split Best( 5 );

```

**Uplift Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
For Each( {i}, 10 :: 200 :: 10, Row State( i ) = Excluded State( 1 ) );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Use Excluded Rows for Validation( 1 ),
	Split Best( 2 )
);

```

### Validation

**Syntax:** obj << Validation( column )

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);

```

### Validation Portion

**Syntax:** obj = Uplift(...Validation Portion( fraction=0 )...)

**Description:** Forms a validation set by randomly selecting rows with each row having probability p (fraction) of being selected. "0" by default.

**Boosted Tree Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Boosted Tree(
	Y( :marital status ),
	X( :sex, :country, :age, :type, :size ),
	Validation Portion( 0.2 ),
	Go
);

```

**Bootstrap Forest Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation Portion( 0.2 ),
	Go
);

```

**Partition Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation Portion( 0.2 )
);
obj << Split Best( 2 );

```

**Uplift Example**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation Portion( 0.2 ),
	Go
);

```

### View Web XML

**Syntax:** obj << View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Weight

**Syntax:** obj << Weight( column )

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 ),
	Weight( _weightcol )
);

```

### Window View

**Syntax:** obj = Uplift(...Window View( "Visible"|"Invisible"|"Private" )...)

**Description:** Set the type of the window to be created for the report. By default a Visible report window will be created. An Invisible window will not appear on screen, but is discoverable by functions such as Window(). A Private window responds to most window messages but is not discoverable and must be addressed through the report object

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

### X

**Syntax:** obj << X( column(s) )

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);

```

### Y

**Syntax:** obj << Y( column(s) )

```

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);

```

