# SQL

## SQL using Query
> **Summary**: Calculates average height for individuals with age 14, utilizing a SQL query to filter and aggregate data from a JMP data table.

<!-- Keywords: #JSLScriptingLanguage, #SQLQuery, #DataTable, #Filtering, #Aggregation -->

**Code**:
```jsl
dt04 = Open("data_table.jmp");
mean04 = Query( scalar, dt04, SQL( "select avg(height) from 'data_table' where age = 14;" ) );
```

**Code Explanation**:

1. Open data table;
2. Assign table to variable `dt04`.
3. Perform SQL query on `dt04`.
4. Calculate average height.
5. Filter for age 14.
6. Store result in `mean04`.



