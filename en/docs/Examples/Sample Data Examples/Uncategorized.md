# Uncategorized

## Example 1
> **Summary**: Open Profile and Subjects Tables from Sample Data Directory.

<!-- Keywords: #Uncategorized -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Laptop Runs.jmp");
// Open Profile and Subjects Tables
Open( "$Sample_Data/Laptop Profile.jmp" );
Open(
	"$Sample_Data/Laptop Subjects.jmp"
);
```

## Example 2
> **Summary**: Open the main data table and simultaneously open the Profile and Subject tables.

<!-- Keywords: #Uncategorized -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Pizza Responses.jmp");
// Open Profile and Subject Tables
Open( "$Sample_Data/Pizza Subjects.jmp" );
Open( "$Sample_Data/Pizza Profiles.jmp" );
```

## Example 3
> **Summary**: Open the data tables for Potato Chip Responses, Potato Chip Subjects, and Potato Chip Profiles using the Open function.

<!-- Keywords: #Uncategorized -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Potato Chip Responses.jmp");
// Open Profile and Subject Tables
Open(
	"$Sample_Data/Potato Chip Subjects.jmp"
);
Open(
	"$Sample_Data/Potato Chip Profiles.jmp"
);
```

