# Compare Data Tables



## Associated Constructors

### Compare Data Tables

**Syntax:** Compare Data Tables( &lt;Compare with( Data Table( name ))&gt;, &lt;show window(0 | 1)&gt;, &lt;limit(integer)&gt;, &lt;Compare table properties(0 | 1)&gt;, &lt;Compare column attributes and properties(0 | 1)&gt;, &lt;Compare data(0 | 1)&gt;, &lt;Fuzzy compare( &lt;0 | 1&gt;, &lt;Relative Error(number)&gt;)&gt;, &lt;Show difference summary(0 | 1)&gt;, &lt;Show difference plot(0 | 1)&gt; )

**Description:** Compares two open data tables and reports differences between data, as well as metadata.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );

```

## Item Messages

### Are Data Different

**Syntax:** obj &lt;&lt; Are Data Different

**Description:** Returns true or false depending on whether the data of the two tables are different or not.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );how = (obj << Are Data Different);

```

### Auto compare

**Syntax:** Auto Compare(0|1)

**Description:** Perform comparisons as soon as any setting is changed

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << Auto Compare( 1 );

```

### Close

**Syntax:** obj &lt;&lt; Close

**Description:** Close the Compare Data Table object

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << close;

```

### Compare

**Syntax:** Compare()

**Description:** Perform comparisons now

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << Compare();

```

### Compare Column Attributes and Properties

**Syntax:** obj &lt;&lt; Compare Column Attributes and Properties( state=0|1 )

**Description:** Set or clear the flag to compare the columns attributes and properties. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << compare column attributes and properties( 1 );

```

### Compare Data

**Syntax:** obj &lt;&lt; Compare Data( state=0|1 )

**Description:** Set or clear the flag to compare the columns data. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << compare data( 0 );

```

### Compare Table Properties

**Syntax:** obj &lt;&lt; Compare Table Properties( state=0|1 )

**Description:** Set or clear the flag to compare the table variables and scripts. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << compare table properties;

```

### Compare With

**Syntax:** obj &lt;&lt; Compare With( Data Table( name ) )

**Description:** Compare the first table with this table. Returns true or false.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );obj = dt << Compare Data Tables();dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );same = obj << compare with( dt2 );

```

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Description:** Put the Compare Data Tables script on the clipboard.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << Copy Script;

```

### Fuzzy Compare

**Syntax:** obj &lt;&lt; Fuzzy Compare( &lt;(state= 1 | 0)&gt;, &lt;Relative Error (number)&gt; )

**Description:** Set or clear the flag to compare the columns data.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << fuzzy compare( relative error( 0.0001 ) );

```

### Get column attributes differences

**Syntax:** obj &lt;&lt; Get column attributes differences( columns( column) )

**Description:** Get the list of column attributes which are different for the compared columns.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );attribDiff = (obj << Get columns attributes differences( :name ));

```

### Get column properties differences

**Syntax:** obj &lt;&lt; Get column properties differences( columns( column) )

**Description:** Get the list of column properties which are different for the compared columns.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );propDiff = (obj << Get columns properties differences( :name ));

```

### Get columns list

**Syntax:** obj &lt;&lt; Get columns list( ( &lt;differed in data&gt; | &lt;differed in properties&gt; | &lt;mismatched data type&gt; | &lt;differed in attributes&gt;) )

**Description:** Get the list of columns that differ in data, column properties, data type, or other column attributes.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );colDiff = (obj << Get columns list( differed in attributes ));Show( colDiff );

```

### Get difference summary matrix

**Syntax:** obj &lt;&lt; Get difference summary matrix

**Description:** Gets the difference summary as a matrix. The matrix columns correspond to the columns in the difference summary. The first column, action, is represented in the matrix with -1 for Delete, 0 for Replace, and 1 for Add.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );mtx = (obj << Get Difference Summary matrix);

```

### Get table scripts difference list

**Syntax:** obj &lt;&lt; Get table scripts difference list

**Description:** Get the list of table scripts that are different or missing.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );scriptDiff = (obj << Get table scripts difference list);

```

### Get table variables difference list

**Syntax:** obj &lt;&lt; Get table variables difference list

**Description:** Get the list of table variables which are different or missing.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );tvdiff = (obj << Get table variables difference list);

```

### Get unmatched columns list

**Syntax:** obj &lt;&lt; Get unmatched columns list

**Description:** Get the list of unmatched columns, those that do not have corresponding columns to be compared

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );colDiff = (obj << Get unmatched columns list);

```

### Hide column properties with no differences

**Syntax:** Hide column properties with no differences(0|1)

**Description:** Hide properties that are the same when comparing column properties.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << Hide column properties with no differences( 0 );

```

### Hide columns with no differences

**Syntax:** Hide columns with no differences(0|1)

**Description:** Hide columns that are the same when comparing table data.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << Hide columns with no differences( 0 );

```

### Hide rows with no differences

**Syntax:** Hide rows with no differences(0|1)

**Description:** Hide rows that are the same when comparing table data.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << Hide rows with no differences( 0 );

```

### Hide table properties with no differences

**Syntax:** Hide table properties with no differences(0|1)

**Description:** Hide items that are the same when comparing table metadata.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << Hide table properties with no differences( 0 );

```

### Ignore case

**Syntax:** Ignore Case(0|1)

**Description:** Ignore character case during data comparison

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << Ignore Case( 1 );

```

### Ignore missing

**Syntax:** Ignore Missing(0|1)

**Description:** Ignore missing values during data comparison

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << Ignore Missing( 1 );

```

### Ignore whitespace

**Syntax:** Ignore Whitespce(0|1)

**Description:** Ignore whitespace characters during data comparison

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << Ignore Whitespace( 1 );

```

### Limit

**Syntax:** obj &lt;&lt; Limit( integer )

**Description:** Set the limit for the number of difference. Compare will stop when the limit is reached.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << limit( 100 );

```

### Link

**Syntax:** Link({"col1", "col2", &lt;ID(0|1)&gt;, &lt;No Compare(0|1)&gt;, &lt;Fuzzy Compare(&lt;Ignore Case(0|1)&gt;, &lt;Ignore Whitespace(0|1)&gt;, &lt;Ignore Missing(0|1)&gt;, &lt;Relative Error(&lt;amount&gt;)&gt;)&gt;

**Description:** Specify column pairs to compare and other comparison options.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << Link( {:age, :weight}, );

```

### Relative Error

**Syntax:** obj &lt;&lt; Relative Error( integer )

**Description:** Set the relative error for fuzzy compare.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << Relative Error( 0.00001 );

```

### Report

**Syntax:** obj &lt;&lt; Report

**Description:** Returns a reference to the report object.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Row Alignment

**Syntax:** obj &lt;&lt; Row Alignment (Flexible by Row|By Row|Use ID Columns)

**Description:** Set how the rows are aligned for comparison. 

Flexible By Row: attempt to find as many matching rows as possible in order by skipping over blocks of non-matching rows.

By Row: compare each row by line number.

Use ID Columns: the ID columns specified are used to create a key for each row. This key is used to match rows.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << Row Alignment( "By Row" );

```

### Save Difference Summary

**Syntax:** obj &lt;&lt; Save Difference Summary( &lt;invisible(0 | 1)&gt; )

**Description:** Save the difference summary in a data table.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );summaryDT = (obj << save difference summary( invisible ));

```

### Save Script to Data Table

**Syntax:** obj &lt;&lt; Save Script to Data Table

**Description:** Save the Compare Data Tables script as a table property in the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << Save Script to Data Table;

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Add a Button to the journal containing the Compare Data Tables script.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << Save Script to Journal;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Append the Compare Data Tables script to the current Script text window.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << Save Script to Script Window;

```

### Show Window

**Syntax:** obj &lt;&lt; Show Window( Show window( 0|1) )

**Description:** Show or hide the window for Compare Data Table

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << show window( 1 );

```

### Show fuzzy differences

**Syntax:** Show Fuzzy Differences(0|1)

**Description:** Hilite differences in data comparison for values that are equal only because of fuzzy comparison settings

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << Show Fuzzy Differences( 1 );

```

### Unlink

**Syntax:** Unlink(&lt;column name 1&gt;, &lt;column name 2&gt;)

**Description:** Remove the column comparison.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << Unlink( {"a", "b"} );

```

### Unlink All

**Syntax:** Unlink All

**Description:** Remove all column comparisons.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );obj << Unlink All;

```

