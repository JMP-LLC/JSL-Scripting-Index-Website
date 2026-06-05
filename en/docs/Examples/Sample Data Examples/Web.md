# Web

## Example 1
> **Summary**: Open a companian web page

<!-- Keywords: #Web -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/BirthDeathYear.jmp");
// Web page
Web(
	"http://www.infoplease.com/ipa/A0004395.html"
);
```

## Example 2
> **Summary**: Open a companion web reference

<!-- Keywords: #Web -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/blsPriceData.jmp");
// Reference
Web(
	"http://data.bls.gov/cgi-bin/surveymost?ap"
);
```

## Example 3
> **Summary**: Open a dataset and navigate to a specified webpage for source information.

<!-- Keywords: #Web -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Diamonds Data.jmp");
// Source
Web( "http://www.adiamor.com/" );
```

## Example 4
> **Summary**: Open a data table and open a web page displaying the Palmer Penguins dataset.

<!-- Keywords: #Web -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Penguins.jmp");
// Web page
Web(
	"https://allisonhorst.github.io/palmerpenguins/"
);
```

