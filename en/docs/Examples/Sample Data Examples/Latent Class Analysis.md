# Latent Class Analysis

> **Summary**: Perform Latent Class Analysis with 5 clusters on selected behavioral risk factors from the Health Risk Survey dataset.

<!-- Keywords: #LatentClassAnalysis, #NumberofClusters -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Health Risk Survey.jmp");
// Latent Class Analysis
Latent Class Analysis(
	Y(
		:"Drove 1+ times when drinking"n,
		:Smoked cigarette before 13,
		:Smoked daily for 30 days,
		:Had first drink before 13,
		:"Five+ drinks 1+ past 30 days"n,
		:Tried marijuana before 13,
		:"Used cocaine 1+ times in life"n,
		:"Sniffed glue 1+ times in life"n,
		:"Used meth 1+ times in life"n,
		:"Used ecstasy 1+ times in life"n,
		:Had sex before 13,
		:
		"Had sex with 4+ people in life"n
	),
	Number of Clusters( 5 )
);
```

