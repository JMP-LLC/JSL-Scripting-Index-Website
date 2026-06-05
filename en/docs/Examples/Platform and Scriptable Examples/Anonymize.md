# Anonymize

## Anonymize using Column
> **Summary**: Anonymizes and maps a data table's column values, utilizing the Anonymize function and Associative Array creation.

<!-- Keywords: #JSLScriptingLanguage, #DataAnonymization, #AssociativeArrays, #ColumnProperties, #ValueOrdering -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "name" ) << Set Property(
	"Value Ordering",
	{"ALFRED", "ALICE", "AMY", "BARBARA", "CAROL", "CHRIS", "CLAY", "DANNY", "DAVID", "EDWARD", "ELIZABETH", "FREDERICK", "HENRY", "JACLYN",
	"JAMES", "JANE", "JEFFREY", "JOE", "JOHN", "JUDY", "KATIE", "KIRK", "LAWRENCE", "LESLIE", "LEWIS", "LILLIE", "LINDA", "LOUISE",
	"MARION", "MARK", "MARTHA", "MARY", "MICHAEL", "PATTY", "PHILLIP", "ROBERT", "ROBERT", "SUSAN", "TIM", "WILLIAM"}
);
anonDt = dt << Anonymize();
valProp1 = Column( dt, "name" ) << get property( "Value Ordering" );
valProp2 = Column( anonDt, "X__1" ) << get property( "Value Ordering" );
aa = Associative Array( valProp1, valProp2 );
```

**Code Explanation**:

1. Open data table.
2. Set value ordering for names.
3. Anonymize the data table.
4. Retrieve original value ordering.
5. Retrieve anonymized value ordering.
6. Create associative array mapping.



## Anonymize using Run Script
> **Summary**: Runs the anonymization and value label retrieval process for a data table, utilizing JSL scripts to set sex and age value labels.

<!-- Keywords: #JMPScriptingLanguage, #DataAnonymization, #ValueLabels, #DataTableManagement, #ScriptAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Run Script( "Set Sex Value Labels" );
dt << Run Script( "Set Age Value Labels" );
anonDt = dt << Anonymize();
val1 = Column( anonDt, 2 ) << Get Value Labels;
val2 = Column( anonDt, 3 ) << Get Value Labels;
```

**Code Explanation**:

1. Open data table.
2. Run "Set Sex Value Labels" script.
3. Run "Set Age Value Labels" script.
4. Anonymize the data table.
5. Assign anonymized table to `anonDt`.
6. Retrieve value labels from second column.
7. Assign retrieved labels to `val1`.
8. Retrieve value labels from third column.
9. Assign retrieved labels to `val2`.



