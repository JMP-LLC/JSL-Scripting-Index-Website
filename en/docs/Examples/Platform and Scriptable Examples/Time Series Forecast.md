# Time Series Forecast

### Example 1
> **Summary**: Performs time series forecasting on a dataset containing monthly sales data, using the X11 decomposition method to decompose the time series into trend, seasonal, and residual components.

<!-- Keywords: #TimeSeriesForecasting, #X11Decomposition, #JMPScriptingLanguage, #DataAnalysis, #Forecasting -->

**Code**:
```jsl
// Time Series Forecast
// Open data table
dt = Open("data_table.jmp");
// Time Series Forecast
Time Series Forecast(
	Y(
		:N 646, :N 647, :N 648, :N 649,
		:N 650, :N 651, :N 652, :N 653,
		:N 654, :N 655, :N 656, :N 657,
		:N 658, :N 659, :N 660, :N 661,
		:N 662, :N 663, :N 664, :N 665,
		:N 666, :N 667, :N 668, :N 669,
		:N 670, :N 671, :N 672, :N 673,
		:N 674, :N 675, :N 676, :N 677,
		:N 678, :N 679, :N 680, :N 681,
		:N 682, :N 683, :N 684, :N 685,
		:N 686, :N 687, :N 688, :N 689,
		:N 690, :N 691, :N 692, :N 693,
		:N 694, :N 695, :N 696, :N 697,
		:N 698, :N 699, :N 700, :N 701,
		:N 702, :N 703, :N 704, :N 705,
		:N 706, :N 707, :N 708, :N 709,
		:N 710, :N 711, :N 712, :N 713,
		:N 714, :N 715, :N 716, :N 717,
		:N 718, :N 719, :N 720, :N 721,
		:N 722, :N 723, :N 724, :N 725,
		:N 726, :N 727, :N 728, :N 729,
		:N 730, :N 731, :N 732, :N 733,
		:N 734, :N 735, :N 736, :N 737,
		:N 738, :N 739, :N 740, :N 741,
		:N 742, :N 743, :N 744, :N 745,
		:N 746, :N 747, :N 748, :N 749,
		:N 750, :N 751, :N 752, :N 753,
		:N 754, :N 755, :N 756, :N 757,
		:N 758, :N 759, :N 760, :N 761,
		:N 762, :N 763, :N 764, :N 765,
		:N 766, :N 767, :N 768, :N 769,
		:N 770, :N 771, :N 772, :N 773,
		:N 774, :N 775, :N 776, :N 777,
		:N 778, :N 779, :N 780, :N 781,
		:N 782, :N 783, :N 784, :N 785,
		:N 786, :N 787, :N 788, :N 789,
		:N 790, :N 791, :N 792, :N 793,
		:N 794, :N 795, :N 796, :N 797,
		:N 798, :N 799, :N 800, :N 801,
		:N 802, :N 803, :N 804, :N 805,
		:N 806, :N 807, :N 808, :N 809,
		:N 810, :N 811, :N 812, :N 813,
		:N 814, :N 815, :N 816, :N 817,
		:N 818, :N 819, :N 820, :N 821,
		:N 822, :N 823, :N 824, :N 825,
		:N 826, :N 827, :N 828, :N 829,
		:N 830, :N 831, :N 832, :N 833,
		:N 834, :N 835, :N 836, :N 837,
		:N 838, :N 839, :N 840, :N 841,
		:N 842, :N 843, :N 844, :N 845,
		:N 846, :N 847, :N 848, :N 849
	),
	Time( :Time )
);
```

**Code Explanation**:

1. Open data_table data
2. Perform time series forecasting.
3. Specify forecasted columns.
4. Define time column.



### Example 2
> **Summary**: Performs a time series forecast of monthly sales data using the Time Series Forecast platform in JMP, specifying the response variable Y, grouping variable Series, and time variable Time.

<!-- Keywords: #TimeSeriesForecast, #JMPScriptingLanguage, #DataAnalysis, #PredictiveModeling, #BusinessIntelligence -->

**Code**:
```jsl
// Time Series Forecast of Data
// Open data table
dt = Open("data_table.jmp");
// Time Series Forecast of Data
Time Series Forecast(
	Y( :Y ),
	Grouping( :Series ),
	Time( :Time )
);
```

**Code Explanation**:

1. Open data table.
2. Perform time series forecast.
3. Specify response variable Y.
4. Define grouping variable Series.
5. Set time variable Time.



## Time Series Forecast using Select Where
> **Summary**: Runs time series forecasting by selecting specific rows, excluding unwanted data, and generating a forecast model.

<!-- Keywords: #TimeSeriesForecasting, #DataSelection, #Exclusion, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
s = dt << Select Where( Row() > 88 );
s << Exclude( 1 );
obj = dt << Time Series Forecast( Y( :Y ), Time( :Time ), By( :Series ) );
```

**Code Explanation**:

1. Open data table;
2. Select specific rows.
3. Exclude selected rows.
4. Perform time series forecasting.



