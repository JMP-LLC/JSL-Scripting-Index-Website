# Column

## Example 1
> **Summary**: Set value labels column property

<!-- Keywords: #Column -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Big Class.jmp");
// Set Sex Value Labels
Column( "sex" ) <<
ValueLabels(
	{"M", "F"},
	{"Male", "Female"}
);
Column( "sex" ) << UseValueLabels;
```

## Example 2
> **Summary**: Set value labels column property

<!-- Keywords: #Column -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Big Class.jmp");
// Set Age Value Labels
Column( "age" ) <<
ValueLabels(
	{12, 13, 14, 15, 16, 17},
	{"Twelve", "Thirteen", "Fourteen",
	"Fifteen", "Sixteen", "Seventeen"}
);
Column( "age" ) << UseValueLabels;
```

## Example 3
> **Summary**: Create a JSL script to define and parameterize an exponential loss function template.

<!-- Keywords: #Column, #Formula, #Log, #NewColumn, #Parameter -->

**Code:**
```jsl
// Exponential.jsl
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// JSL to create a loss function template of Exponenential             //
///////////////////////////////////////////////////////////////////////////////////////////////////////////

dt= new table ("Exponential");
dt<<New Column("Time", Numeric,continuous);   
dt<<New Column("Censor", Numeric,continuous);
dt<<New Column("Exponential", Numeric,continuous);
col=column( "Exponential");
col<<formula( Parameter({sigma=28703.3328183542}, -IfMZ( :Censor==0, (-Log(sigma))- :Time/sigma, -( :Time/sigma)))  );
```

## Example 4
> **Summary**: Create a loss function template using the Extreme Value distribution with parameters λ and δ .

<!-- Keywords: #Column, #Exp, #Formula, #Log, #NewColumn -->

**Code:**
```jsl
// Extreme Value.jsl
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// JSL to create a loss function template of Extreme value            //
///////////////////////////////////////////////////////////////////////////////////////////////////////////

dt= new table ("Extreme value");
dt<<New Column("Time", Numeric,continuous);   
dt<<New Column("Censor", Numeric,continuous);
dt<<New Column("Extreme value", Numeric,continuous);
col=column( "Extreme value");
col<<formula(  Parameter({lambda=3.26944897591195, delta=0.94478144505066}, -IfMZ( :Censor==0, ((-Log(delta))-Exp((Log( :Time/100)-lambda)/delta))+(Log( :Time)/100-lambda)/delta, -Exp((Log( :Time/100)-lambda)/delta))) );
```

## Example 5
> **Summary**: Create a loss function template for the LogLogistic distribution. Define a new table with columns for Time, Censor, Model, and LogLogistic Loss. Implement the LogLogistic model formula with parameters b0 and b1. Define the LogLogistic Loss formula with parameter sigma and incorporate conditional logic based on the Censor variable using IfMZ function.

<!-- Keywords: #Column, #Exp, #Formula, #Log, #NewColumn -->

**Code:**
```jsl
// LogLogistic.jsl
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// JSL to create a loss function template of LogLogistic                 //
///////////////////////////////////////////////////////////////////////////////////////////////////////////

dt= new table ("LogLogistic");
dt<<New Column("Time", Numeric,continuous);   
dt<<New Column("Censor", Numeric,continuous);
dt<<New Column("Model", Numeric,continuous);
dt<<New Column("LogLogistic Loss", Numeric,continuous);

column( "Model") << formula( Parameter({b0=-11.8912196204114, b1=9.03834026782309}, Log( :Time)-(b0+b1*Empty())) );

column( "LogLogistic Loss") << formula( Parameter({sigma=0.5}, -IfMZ( :censor==0,  :Model/sigma-2*Log(1+Exp( :Model/sigma))-Log(sigma), -Log(1+Exp( :Model/sigma))))  );
```

## Example 6
> **Summary**: Create a loss function template for a Weibull distribution with one parameter.

<!-- Keywords: #Column, #Exp, #Formula, #Log, #NewColumn -->

**Code:**
```jsl
// Weibull, 1 Parm.jsl
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// JSL to create a loss function template of Weibull, 1 Parm          //
///////////////////////////////////////////////////////////////////////////////////////////////////////////

dt= new table ("Weibull, 1 Parm");
dt<<New Column("Censor", Numeric,continuous);   
dt<<New Column("Model", Numeric,continuous);
dt<<New Column("Weibull", Numeric,continuous);

column( "Model") << formula( Parameter({b0=3.93988152926993, b1=0.004505313558698, b2=-0.01244813868867}, Log(Empty())-(b0+b1*Empty()+b2*Empty()))  );
column( "Weibull") << formula( Parameter({sigma=0.928115276636918}, -IfMZ( :Censor==0,  :Model/sigma-Exp( :Model/sigma)-Log(sigma), -Exp( :Model/sigma)))  );
```

## Example 7
> **Summary**: Set value labels for the sex column to Male and Female in the World Class data table.

<!-- Keywords: #Column -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/World Class.jmp");
// Set Sex Value Labels
Column( "sex" ) <<
ValueLabels(
	{"M", "F"},
	{"Male", "Female"}
);
Column( "sex" ) << UseValueLabels;
```

## Example 8
> **Summary**: Set Value Labels for Age Column with Function ValueLabels and UseValueLabels.

<!-- Keywords: #Column -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/World Class.jmp");
// Set Age Value Labels
Column( "age" ) <<
ValueLabels(
	{12, 13, 14, 15, 16, 17},
	{"Twelve", "Thirteen", "Fourteen",
	"Fifteen", "Sixteen", "Seventeen"}
);
Column( "age" ) << UseValueLabels;
```

