# Query

> **Summary**: Calculates average height for individuals aged 14, utilizing a custom SQL query to filter data from a specific table.

<!-- Keywords: #JSL, #SQLQuery, #DataFiltering, #CustomSQL, #TableManipulation -->

**Code**:
```jsl
dt03 = Open( "$SAMPLE_DATA\data_table.jmp", private );
mean03 = Query( scalar, dt03, "select avg(height) from 'data_table' where age = 14;" );
```

**Code Explanation**:

1. Open data table;
2. Create mean03 variable.
3. Execute SQL query.
4. Calculate average height.
5. Filter for age 14.
6. Store result in mean03.



