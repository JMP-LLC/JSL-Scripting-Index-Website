# Disallowed Combinations

> **Summary**: Opens a data table and defines disallowed combinations based on Near Phone and Interface, as well as Far Phone and Interface.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #DisallowedCombinations, #JMPScripting, #DataAnalysis -->

**Code**:
```jsl
// Disallowed Combinations
// Open data table
dt = Open("data_table.jmp");
// Disallowed Combinations
Near Phone == "ISDN" & Near Interface ==
"A" | Far Phone == "ISDN" & Far Interface
 == "A" | Near Phone == "Bus" &
Near Interface == "B" | Near Phone ==
"Res" & Near Interface == "B";
```

**Code Explanation**:

1. Open data table.
2. Define disallowed combinations.



