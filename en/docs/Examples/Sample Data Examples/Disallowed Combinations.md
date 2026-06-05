# Disallowed Combinations

> **Summary**: Identify and filter out disallowed combinations in data table by specifying conditions on categorical variables . The script uses the Open and Data Filter functions to accomplish this task.

<!-- Keywords: #DisallowedCombinations -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Phone Data.jmp");
// Disallowed Combinations
Near Phone == "ISDN" & Near Interface ==
"A" | Far Phone == "ISDN" & Far Interface
 == "A" | Near Phone == "Bus" &
Near Interface == "B" | Near Phone ==
"Res" & Near Interface == "B";
```

