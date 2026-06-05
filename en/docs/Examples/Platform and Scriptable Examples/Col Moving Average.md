# Col Moving Average

## Col Moving Average using Row
> **Summary**: Calculates a moving average transformation on the 'height' column, grouping by 'sex' and 'z', while setting the window size to 800x500 and current row to 40.

<!-- Keywords: #JSL, #MovingAverage, #DataTransformation, #Windowing, #GroupBy -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
dt << set window size( 800, 500 );
Row() = 40;
Try( Col Moving Average( :height, 1, 5, 0, :sex, :z ), Print( ‚ÄúError thrown but no crash‚Äù ) );
```

**Code Explanation**:

1. Set default names scope.
2. Open data table.
3. Resize window to 800x500.
4. Set current row to 40.
5. Attempt moving average transformation.
6. Specify height column.
7. Set window size to 1.
8. Set window size to 5.
9. Exclude missing values.
10. Group by sex and z columns.



