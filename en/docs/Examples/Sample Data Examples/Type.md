# Type

## Example 1
> **Summary**: Set modeling type column property

<!-- Keywords: #ModelingType, #SetModelingType, #Type -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Big Class Families.jmp");
// Set Categorical
:sibling ages <<
Set Modeling Type( "Ordinal" );
:sports << Set Modeling Type( "Nominal" );
:countries visited <<
Set Modeling Type( "Nominal" );
:family cars <<
Set Modeling Type( "Nominal" );
```

## Example 2
> **Summary**: Set multiple response modeling type column property

<!-- Keywords: #ModelingType, #SetModelingType, #Type -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Big Class Families.jmp");
// Set Multiple Response
:sibling ages <<
Set Modeling Type( "Multiple Response" );
:sports <<
Set Modeling Type( "Multiple Response" );
:countries visited <<
Set Modeling Type( "Multiple Response" );
:family cars <<
Set Modeling Type( "Multiple Response" );
```

