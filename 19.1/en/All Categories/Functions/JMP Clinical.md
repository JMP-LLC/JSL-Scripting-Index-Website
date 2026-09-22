# JMP Clinical



### JMPClinicalReviewAPI:addReport

**Syntax:** JMPClinicalReviewAPI:addReport(reportDefinitionID = "", reportUserCustomizedTitle = ., reportOptionValues = [=&gt;]}, {rb, reportDefinition, ret, templateContent, addedReports, addedReport)

**Description:** Adds a report to Review Builder

 \*

 \* reportDefinitionID => String: The name/id of the Report to add (e.g. "AdverseEventsDistribution").

 \* reportUserCustomizedTitle => String: The user-customized report title (e.g., "My AE Dist").

 \*   Specify numeric missing (.) to indicate the title is not customized by the user.

 \* reportOptionValues => Associative Array: Internal widget option name-value pairs

 \*   (e.g., ["objRefNS:eventcb_AdverseEvents_AE" => "PRE", "objRefNS:TEAECheckBox" => "Yes"]).

 \*   Specify [=>] to use all default option values.

 \*

 \* return - a namespace to the added report

```jsl

JMPClinicalReviewAPI:addReport( "AdverseEventsDistribution" );JMPClinicalReviewAPI:addReport(	"AdverseEventsDistribution",	"Customized Adverse Events Distribution",	["objRefNS:stkcb" => "AESER"]);

```

### JMPClinicalReviewAPI:applyReportSubjectSelectionToReviewSubjectFilter

**Syntax:** JMPClinicalReviewAPI:applyReportSubjectSelectionToReviewSubjectFilter(reportID = .)

**Description:** Applies the subject selection from the specified report in Review Builder to the Review Subject Filter

 \*

 \* reportID => Namespace, Numeric Missing, Integer, or String: The namespace, selected tab, tab index, report title, reference, or report name\* corresponding to a report.

 \*   Specify numeric missing (.) to refer to the currently selected report tab.

 \*   \*CAUTION: Although report titles are guaranteed to be unique within a review, report names are not. If using the

 \*      report name as the reportID and multiple copies of that report exist in a review, the FIRST match will be used.

 \*

 \* return - an Integer: 1 if successful, 0 if unsuccessful.

```jsl

JMPClinicalReviewAPI:addReport( "AdverseEventsDistribution" );Current Data Table() << SelectWhere( :Serious Event == "Y" );Wait( 1 );JMPClinicalReviewAPI:applyReportSubjectSelectionToReviewSubjectFilter( . );Wait( 1 );JMPClinicalReviewAPI:changeReviewSubjectFilterSelection( ":Unique Subject Identifier" );

```

### JMPClinicalReviewAPI:changeReport

**Syntax:** JMPClinicalReviewAPI:changeReport(reportID = ., reportUserCustomizedTitle = empty(), reportOptionValues = [=&gt;])

**Description:** Renames a report tab and/or changes one or more option values in a report tab in Review Builder

 \*

 \* reportID => Namespace, Numeric Missing, Integer, or String: The namespace, selected tab, tab index, report title, reference, or report name\* corresponding to a report.

 \*   Specify numeric missing (.) to refer to the currently selected report tab.

 \*   \*CAUTION: Although report titles are guaranteed to be unique within a review, report names are not. If using the

 \*      report name as the reportID and multiple copies of that report exist in a review, the FIRST match will be used.

 \* reportUserCustomizedTitle => String: The new report title.

 \*   Specify empty() to make no changes to the report title.

 \*   Specify numeric missing (.) to indicate the title is no longer customized by the user (to allow the report to be dynamically named).

 \* reportOptionValues => Associative Array: Internal widget option name-value pairs specifying values to change.

 \*   (e.g., ["objRefNS:eventcb_AdverseEvents_AE" => "PRE", "objRefNS:TEAECheckBox" => "Yes"]).

 \*   Specify [=>] to make no changes to the report option values.

 \*   Specify numeric missing (.) to reset the report to its default option values.

 \*

 \* return - an Integer: 1 if successful, 0 if unsuccessful.

 \*   Invalid options and option values are ignored.

```jsl

JMPClinicalReviewAPI:addReport( "AdverseEventsDistribution" );Wait( 1 );JMPClinicalReviewAPI:changeReport(	.,	"Customized Adverse Events Distribution",	["objRefNS:stkcb" => "AESER"]);

```

### JMPClinicalReviewAPI:changeReportColumnSwitcherSelection

**Syntax:** JMPClinicalReviewAPI:changeReportColumnSwitcherSelection(reportID = ., columnSwitcherIndex = 1, columnToSelect = empty())

**Description:** Changes the column switcher selection in a report tab in Review Builder

 \*

 \* reportID => Namespace, Numeric Missing, Integer, or String: The namespace, selected tab, tab index, report title, reference, or report name\* corresponding to a report.

 \*   Specify numeric missing (.) to refer to the currently selected report tab.

 \*   \*CAUTION: Although report titles are guaranteed to be unique within a review, report names are not. If using the

 \*      report name as the reportID and multiple copies of that report exist in a review, the FIRST match will be used.

 \* columnSwitcherIndex => Integer: The index of the column switcher within the specified report.

 \*   The first (or only) column switcher in a report will have an index of 1. The default value is 1.

 \* columnToSelect => String: The column name to select in the column switcher.

 \*   Specify numeric missing (.) to reset the column switcher to its default column.

 \*

 \* return - an Integer: 1 if successful, 0 if unsuccessful.

 \*   Invalid column names are ignored.

```jsl

JMPClinicalReviewAPI:addReport( "FindingsBoxPlots" );Wait( 1 );JMPClinicalReviewAPI:changeReportColumnSwitcherSelection( ., 1, "Glucose (mmol/L)" );

```

### JMPClinicalReviewAPI:changeReportFilterSelection

**Syntax:** JMPClinicalReviewAPI:changeReportFilterSelection(reportID = ., extendWhereStmt = ., indexForMultiple = 1)

**Description:** Changes the current report filter selection in a report tab in Review Builder

 \*

 \* reportID => Namespace, Numeric Missing, Integer, or String: The namespace, selected tab, tab index, report title, reference, or report name\* corresponding to a report.

 \*   Specify numeric missing (.) to refer to the currently selected report tab.

 \*   \*CAUTION: Although report titles are guaranteed to be unique within a review, report names are not. If using the

 \*      report name as the reportID and multiple copies of that report exist in a review, the FIRST match will be used.

 \* extendWhereStmt => String: The column and values to select. Example: ":Serious Event == {\\!"N\\!"}"

 \*   Specify a column without an operator or value to clear the report filter selection. Example: ":Serious Event"

 \* indexForMultiple => Integer: If the column specified in the extendWhereStmt is used multiple times,

 \*   this index specifies which occurrence to use.

 \*

 \* return - an Integer: 1 if successful, 0 if unsuccessful.

```jsl

JMPClinicalReviewAPI:addReport( "AdverseEventsDistribution" );JMPClinicalReviewAPI:changeReportFilterSelection(	.,	":Overall Percent Occurrence >= 10 & :Overall Percent Occurrence <= 50");

```

### JMPClinicalReviewAPI:changeReportOptions

**Syntax:** JMPClinicalReviewAPI:changeReportOptions(reportID = ., reportOptionValues = [=&gt;])

**Description:** Changes one or more option values in a report tab in Review Builder

 \*

 \* reportID => Namespace, Numeric Missing, Integer, or String: The namespace, selected tab, tab index, report title, reference, or report name\* corresponding to a report.

 \*   Specify numeric missing (.) to refer to the currently selected report tab.

 \*   \*CAUTION: Although report titles are guaranteed to be unique within a review, report names are not. If using the

 \*      report name as the reportID and multiple copies of that report exist in a review, the FIRST match will be used.

 \* reportOptionValues => Associative Array: Internal widget option name-value pairs specifying values to change

 \*   (e.g., ["objRefNS:eventcb_AdverseEvents_AE" => "PRE", "objRefNS:TEAECheckBox" => "Yes"]).

 \*   Specify numeric missing (.) to reset the report to its default option values.

 \*

 \* return - an Integer: 1 if successful, 0 if unsuccessful.

 \*   Invalid options and option values are ignored.

```jsl

JMPClinicalReviewAPI:addReport( "AdverseEventsDistribution" );Wait( 1 );JMPClinicalReviewAPI:changeReportOptions( ., ["objRefNS:stkcb" => "AESER"] );

```

### JMPClinicalReviewAPI:changeReviewSubjectFilter

**Syntax:** JMPClinicalReviewAPI:changeReviewSubjectFilter(savedFilter = .)

**Description:** Changes the Review Subject Filter in Review Builder

 \*

 \* savedFilter => String: The filter definition or name of a saved subject filter

 \*   Specify empty(), numeric missing (.), "", or " " to reset the filter.

 \*

 \* return - an Integer: 1 if successful, 0 if unsuccessful.

```jsl

JMPClinicalReviewAPI:addReport( "AdverseEventsDistribution" );//JMPClinicalReviewAPI:changeReviewSubjectFilter("My Saved Filter Name");Wait( 1 );JMPClinicalReviewAPI:changeReviewSubjectFilter(	"Current Data Table() << Data Filter(Title( \!"Review Subject Filter\!" ), Conditional, Mode( Select( 0 ), Show( 1 ), Include( 1 ) ), Add Filter(columns(:Age, :Sex, :Race, :Unique Subject Identifier)))");Wait( 1 );JMPClinicalReviewAPI:changeReviewSubjectFilter( . );

```

### JMPClinicalReviewAPI:changeReviewSubjectFilterSelection

**Syntax:** JMPClinicalReviewAPI:changeReviewSubjectFilterSelection(extendWhereStmt = ., indexForMultiple = 1)

**Description:** Changes the current Review Subject Filter selection in Review Builder

 \*

 \* extendWhereStmt => String: The column and values to select. Example: ":Sex == {\\!"F\\!"}"

 \*   Specify a column without an operator or value to clear the Review Subject Filter selection. Example: ":Sex"

 \* indexForMultiple => Integer: If the column specified in the extendWhereStmt is used multiple times,

 \*   this index specifies which occurrence to use.

 \*

 \* return - an Integer: 1 if successful, 0 if unsuccessful.

```jsl

JMPClinicalReviewAPI:addReport( "AdverseEventsDistribution" );JMPClinicalReviewAPI:changeReviewSubjectFilterSelection( ":Sex == {\!"F\!"}" );Wait( 1 );JMPClinicalReviewAPI:changeReviewSubjectFilterSelection( ":Sex" );

```

### JMPClinicalReviewAPI:closeReviewBuilder

**Syntax:** JMPClinicalReviewAPI:closeReviewBuilder()

**Description:** Closes the current Review Builder instance

 \*

 \* return - N/A

```jsl

JMPClinicalReviewAPI:closeReviewBuilder();

```

### JMPClinicalReviewAPI:createLiveReport

**Syntax:** JMPClinicalReviewAPI:createLiveReport(publishOptions = [=&gt;], reportRefs = {})

**Description:** Create a web-based JMP Live version of the Review

 \*

 \* publishOptions => Associative Array: the keys and values for the following publish options:

 \*

 \*   "ConnectionName"                   => String: the name of the JMP Live Connection

 \*   "Space"                            => String: the title or key of the JMP Live Space to publish to, within the JMP Live Connection

 \*   "Folder"                           => String: the title, path, or ID of the JMP Live Folder to publish to, within the JMP Live Space

 \*                                         Specify "" to publish to the space root.

 \*   "PublishData"                      => Number: 0 = disallow data to be published, 1 = allow data to be published

 \*   "PublishOptimization"              => Number: 1 = best interactivity, 2 = best performance

 \*   "PublishNotes"                     => Number: 0 = do not include notes, 1 = include notes

 \*   "PatientProfilesPublishPopulation" => String: "SELECTED" = publish selected patients only (default), "ALL" = publish all patients

 \*   "PatientProfilesPublishGraphs"     => Number: 0 = do not publish graphs, 1 = publish graphs (default)

 \*   "PatientProfilesPublishTables"     => Number: 0 = do not publish tables, 1 = publish tables (default)

 \*

 \*   Omit keys or specify empty() values to use the current interactive Create Live Report dialog default values.

 \*   \*CAUTION: Key and value omission is offered as a convenience. Publish failure is likely if the

 \*      interactive dialog has never been opened. Specify all keys and values to rule out unintended influence

 \*      from interactive publish options.

 \*

 \*   Specify empty() instead of an associative array for the publishOptions argument to surface the interactive

 \*     Create Live Report dialog.

 \*   \*CAUTION: Doing so will pause script execution for user input.

 \*

 \* reportRefs => List: If not empty list, create for only this list of report references

 \*

 \* return - a String: URL of the web report

#### Batch

```jsl

/* * Use the following environment variables to control elements of the batch execution:  * * set JMPClinicalBatchMode=true                    options include: true, debug * set JMPClinicalBatchLogPath=%CD%\                the path where the log file should be written * set JMPClinicalBatchConfiguration=Default        the configuration to use. if not specified, the last configuration used interactively will be used  * set JMPClinicalBatchCurrentStudy=                the study to use for Review Builder operations (not used by the JMPClinicalStudyManagerAPI)*/exitJMPClinicalBatch = Function( {},	{},	Save Log(		Get Environment Variable( "JMPClinicalBatchLogPath" ) ||		"JMPClinicalBatchLog.log"	);	Exit(););Show( JMPClinicalReviewAPI:getCurrentStudy() );// Build a review templatern = JMPClinicalReviewAPI:addReport(	"AdverseEventsDistribution",	"Customized Adverse Events Distribution",	["objRefNS:stkcb" => "AESER"]);JMPClinicalReviewAPI:renameReport(	., "AESER Stack Adverse Events Distribution"); // . refers to the currently selected report tabJMPClinicalReviewAPI:changeReportOptions(	rn,	["objRefNS:eventcb_AdverseEvents_AE" => "PRE"]); // Can also use report namespace, reference, index, title, or nameShow( JMPClinicalReviewAPI:getReportOptions( . ) );Show( JMPClinicalReviewAPI:getAllReportReferences() );Show(	JMPClinicalReviewAPI:getReportReference( "AdverseEventsDistribution" )); // CAUTION: Report names are NOT guaranteed to be unique within a reviewShow(	JMPClinicalReviewAPI:getReportIndex(		"AESER Stack Adverse Events Distribution"	)); // Report titles are guaranteed to be unique within a reviewShow( JMPClinicalReviewAPI:getReportTitle( 1 ) ); // Report indicies are guaranteed to be unique within a review Show( JMPClinicalReviewAPI:getReportName( . ) ); // The currently selected report tab is guaranteed to be unique within a reviewJMPClinicalReviewAPI:resetReport( . );JMPClinicalReviewAPI:renameReport( ., . );JMPClinicalReviewAPI:addReport(	"FindingsBoxPlots",	"Customized Findings Box Plots",	[=> ]);Show( JMPClinicalReviewAPI:getReportColumnSwitcherSelection( ., 1 ) );JMPClinicalReviewAPI:changeReportColumnSwitcherSelection( ., 1, "Calcium (mmol/L)" );JMPClinicalReviewAPI:changeReport( ., ., . );JMPClinicalReviewAPI:deleteReport( . );JMPClinicalReviewAPI:deleteReport( . );JMPClinicalReviewAPI:addReport( "DemographicsDistribution" );JMPClinicalReviewAPI:addReport( "AdverseEventsDistribution" );JMPClinicalReviewAPI:changeReportFilterSelection(	.,	":Overall Percent Occurrence >= 10 & :Overall Percent Occurrence <= 50");JMPClinicalReviewAPI:changeReportFilterSelection(	., ":\!"Toxicity Grade/Severity\!"n == {\!"MODERATE\!"}");JMPClinicalReviewAPI:changeReportFilterSelection( ., ":Serious Event == {\!"N\!"}" );Show( JMPClinicalReviewAPI:getReportFilterSelection( . ) );Current Data Table() << SelectWhere( :Serious Event == "Y" );Wait( 0 );JMPClinicalReviewAPI:applyReportSubjectSelectionToReviewSubjectFilter( . );JMPClinicalReviewAPI:moveReport(	"DemographicsDistribution", "AdverseEventsDistribution");JMPClinicalReviewAPI:moveReport( 2, 1 );JMPClinicalReviewAPI:duplicateReport( 1 );JMPClinicalReviewAPI:selectReport( "DemographicsDistribution" );JMPClinicalReviewAPI:createStaticReportForReport( . );JMPClinicalReviewAPI:createLiveReportForReport( ., [=> ] );JMPClinicalReviewAPI:selectReport( 1 );JMPClinicalReviewAPI:showReportTables( . );JMPClinicalReviewAPI:changeReviewSubjectFilter( "My Saved Filter Name" ); // Change the review subject filter to a saved one (by name)JMPClinicalReviewAPI:changeReviewSubjectFilter( // Change the review subject filter to this definition	"Current Data Table() << Data Filter(Title( \!"Review Subject Filter\!" ),    Conditional, Mode( Select( 0 ), Show( 1 ), Include( 1 ) ),	Add Filter(columns(:Age, :Sex, :Race, :Unique Subject Identifier)))");JMPClinicalReviewAPI:changeReviewSubjectFilter( . ); // Reset the review subject filterJMPClinicalReviewAPI:changeReviewSubjectFilterSelection( ":Sex == {\!"F\!"}" );Show( JMPClinicalReviewAPI:getReviewSubjectFilterSelection() );JMPClinicalReviewAPI:saveReviewTemplate( "ReviewManagementExamples", 1 );JMPClinicalReviewAPI:resetAllReports();JMPClinicalReviewAPI:deleteAllReports();JMPClinicalReviewAPI:closeReviewBuilder();// Use an existing review templateJMPClinicalReviewAPI:openReviewTemplate(	"C:\ProgramData\JMP\JMPClinical\19\Clinical\ReviewTemplates\Medical Monitoring.jmpcrt",	1, 0, 1, 0);If( !Directory Exists( "C:\JMPClinicalReviewManager" ),	Create Directory( "C:\JMPClinicalReviewManager" ));If( Directory Exists( "C:\JMPClinicalReviewManager" ),	JMPClinicalReviewAPI:createStaticReport(		"PDF", 0, "C:\JMPClinicalReviewManager\APIReview.pdf", "SELECTED", 1,		1	));JMPClinicalReviewAPI:createLiveReport(	["ConnectionName" => Empty(),	"Space" => "_PERSONAL_",	"Folder" => "",	"PublishData" => 0,	"PublishOptimization" => 1,	"PublishNotes" => 0,	"PatientProfilesPublishPopulation" => "SELECTED",	"PatientProfilesPublishGraphs" => 1,	"PatientProfilesPublishTables" => 1]);JMPClinicalReviewAPI:closeReviewBuilder();exitJMPClinicalBatch();/*===================================================================================Copyright © 2025 JMP Statistical Discovery LLC, Cary, NC, USA. All rights reserved.JMP STATISTICAL DISCOVERY LLC ("JMP") PERMITS THE USE OF THIS COMPUTER SOFTWARECODE ("CODE") ON AN AS-IS BASIS AND AUTHORIZES YOU TO USE THE CODE SUBJECT TOTHE TERMS LISTED HEREIN. BY USING THE CODE, YOU AGREE TO THESE TERMS. YOUR USEOF THE CODE IS AT YOUR OWN RISK. JMP MAKES NO REPRESENTATION OR WARRANTY,EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, WARRANTIES OFMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND TITLE,WITH RESPECT TO THE CODE.You may use the Code solely as part of a software product you currently havelicensed from JMP, JMP's parent company, SAS Institute Inc. ("SAS US") or oneof SAS' subsidiaries (together with SAS US, "SAS") or authorized agents (the"Software"), and not for any other purpose. The Code is designed to eithercorrect an error in the Software or to add functionality to the Software buthas not necessarily been tested. Accordingly, JMP makes no representation orwarranty that the Code (1) will operate error-free or (2) will not contain anyviruses or other applications or executables (including, without limitation,any "trap doors," "worms" and "time bombs") that will degrade or infect anysoftware product that you license from JMP or any other software or yournetwork or systems. JMP is under no obligation to maintain, support, orcontinue to distribute the Code.Neither JMP nor its licensors shall be liable to you or any third party for anygeneral, special, direct, indirect, consequential, incidental, or other damageswhatsoever arising out of or related to your use or inability to use the Code,even if JMP has been advised of the possibility of such damages. Except asotherwise provided above, the Code is governed by the same agreement thatgoverns the Software. If you do not have an existing agreement with JMP or SASgoverning the Software, you may not use the Code.US export laws and regulations apply to the Code and any other JMP-providedtechnology ("Controlled Material"). The Controlled Material originates from theUnited States. Customer agrees to comply with these and other applicable exportand import laws and regulations, except as prohibited or penalized by law("Trade Law"). Customer warrants that Customer and its users are not: (a)prohibited by Trade Law from accessing Controlled Material without USgovernment approval; (b) located in or under control of any country or otherterritory subject to general export or trade embargo under Trade Law; or (c)engaged in any of the following end-uses: nuclear, chemical or biologicalweapons; nuclear facilities not under International Atomic Energy Agencysafeguards; missiles or unmanned aerial vehicles capable of long-range use orweapons delivery, military training or assistance, military or intelligenceend-use in Russia or in any country in Country Group D:5 of the United StatesExport Administration Regulations; deep water, Arctic offshore or shale oil orgas exploration involving Russia or Russian companies, or Russian energy exportpipelines. Customer will not import or use any data within the System that issubject to the US International Traffic Arms Regulations. United States exportclassification information for JMP software and its affiliates is available atjmp.com/export.JMP and all other JMP Statistical Discovery LLC product or service names areregistered trademarks or trademarks of SAS Institute Inc. in the USA and othercountries. ® indicates USA registration. Other brand and product names areregistered trademarks or trademarks of their respective companies.==============================================================================*/

```

#### Simple

```jsl

JMPClinicalReviewAPI:openReviewTemplate(	"C:\ProgramData\JMP\JMPClinical\19\Clinical\ReviewTemplates\Medical Monitoring.jmpcrt",	1, 0, 1, 0);Web(	JMPClinicalReviewAPI:createLiveReport(		["ConnectionName" => Empty(),		"Space" => "_PERSONAL_",		"Folder" => "",		"PublishData" => 0,		"PublishOptimization" => 1,		"PublishNotes" => 0,		"PatientProfilesPublishPopulation" => "SELECTED",		"PatientProfilesPublishGraphs" => 1,		"PatientProfilesPublishTables" => 1]	));

```

### JMPClinicalReviewAPI:createLiveReportForReport

**Syntax:** JMPClinicalReviewAPI:createLiveReportForReport(reportID = ., publishOptions = [=&gt;])

**Description:** Create a web-based JMP Live version of one report in a Review

 \*

 \* reportID => Namespace, Numeric Missing, Integer, or String: The namespace, selected tab, tab index, report title, reference, or report name\* corresponding to a report.

 \*   Specify numeric missing (.) to refer to the currently selected report tab.

 \*   \*CAUTION: Although report titles are guaranteed to be unique within a review, report names are not. If using the

 \*      report name as the reportID and multiple copies of that report exist in a review, the FIRST match will be used.

 \*

 \* publishOptions => Associative Array: the keys and values for the following publish options:

 \*

 \*   "ConnectionName"                   => String: the name of the JMP Live Connection

 \*   "Space"                            => String: the title or key of the JMP Live Space to publish to, within the JMP Live Connection

 \*   "Folder"                           => String: the title, path, or ID of the JMP Live Folder to publish to, within the JMP Live Space

 \*                                         Specify "" to publish to the space root.

 \*   "PublishData"                      => Number: 0 = disallow data to be published, 1 = allow data to be published

 \*   "PublishOptimization"              => Number: 1 = best interactivity, 2 = best performance

 \*   "PublishNotes"                     => Number: 0 = do not include notes, 1 = include notes

 \*   "PatientProfilesPublishPopulation" => String: "SELECTED" = publish selected patients only (default), "ALL" = publish all patients

 \*   "PatientProfilesPublishGraphs"     => Number: 0 = do not publish graphs, 1 = publish graphs (default)

 \*   "PatientProfilesPublishTables"     => Number: 0 = do not publish tables, 1 = publish tables (default)

 \*

 \*   Omit keys or specify empty() values to use the current interactive Create Live Report dialog default values.

 \*   \*CAUTION: Key and value omission is offered as a convenience. Publish failure is likely if the

 \*      interactive dialog has never been opened. Specify all keys and values to rule out unintended influence

 \*      from interactive publish options.

 \*

 \*   Specify empty() instead of an associative array for the publishOptions argument to surface the interactive

 \*     Create Live Report dialog.

 \*   \*CAUTION: Doing so will pause script execution for user input.

 \*

 \* return - a String: URL of the web report

```jsl

JMPClinicalReviewAPI:addReport( "AdverseEventsDistribution" );JMPClinicalReviewAPI:addReport( "DemographicsDistribution" );JMPClinicalReviewAPI:selectReport( 1 );Web( JMPClinicalReviewAPI:createLiveReportForReport( ., [=> ] ) );

```

### JMPClinicalReviewAPI:createStaticReport

**Syntax:** JMPClinicalReviewAPI:createStaticReport(type = empty(), includeNotes = empty(), filePath = empty(), patientProfilesPublishPopulation = "SELECTED", patientProfilesPublishGraphs = 1, patientProfilesPublishTables = 1, reportRefs = {})

**Description:** Create a static version (PDF or RTF) of the Review

 \*

 \* type                             => String: "PDF" or "RTF"

 \* includeNotes                     => Number: 0 = do not include notes, 1 = include notes

 \* filePath                         => String: full file path where to save report. If not specified, the default 

 \*                                       static report location is used - as specified in the configuration as /user/clinical/staticreportpath

 \* patientProfilesPublishPopulation => String: "SELECTED" = publish selected patients only (default), "ALL" = publish all patients

 \* patientProfilesPublishGraphs     => Number: 0 = do not publish graphs, 1 = publish graphs (default)

 \* patientProfilesPublishTables     => Number: 0 = do not publish tables, 1 = publish tables (default)

 \* reportRefs                       => List: If not empty list, create for only this list of report references

 \*

 \* return - a String: Path to the static report

#### Batch

```jsl

/* * Use the following environment variables to control elements of the batch execution:  * * set JMPClinicalBatchMode=true                    options include: true, debug * set JMPClinicalBatchLogPath=%CD%\                the path where the log file should be written * set JMPClinicalBatchConfiguration=Default        the configuration to use. if not specified, the last configuration used interactively will be used  * set JMPClinicalBatchCurrentStudy=                the study to use for Review Builder operations (not used by the JMPClinicalStudyManagerAPI)*/exitJMPClinicalBatch = Function( {},	{},	Save Log(		Get Environment Variable( "JMPClinicalBatchLogPath" ) ||		"JMPClinicalBatchLog.log"	);	Exit(););Show( JMPClinicalReviewAPI:getCurrentStudy() );// Build a review templatern = JMPClinicalReviewAPI:addReport(	"AdverseEventsDistribution",	"Customized Adverse Events Distribution",	["objRefNS:stkcb" => "AESER"]);JMPClinicalReviewAPI:renameReport(	., "AESER Stack Adverse Events Distribution"); // . refers to the currently selected report tabJMPClinicalReviewAPI:changeReportOptions(	rn,	["objRefNS:eventcb_AdverseEvents_AE" => "PRE"]); // Can also use report namespace, reference, index, title, or nameShow( JMPClinicalReviewAPI:getReportOptions( . ) );Show( JMPClinicalReviewAPI:getAllReportReferences() );Show(	JMPClinicalReviewAPI:getReportReference( "AdverseEventsDistribution" )); // CAUTION: Report names are NOT guaranteed to be unique within a reviewShow(	JMPClinicalReviewAPI:getReportIndex(		"AESER Stack Adverse Events Distribution"	)); // Report titles are guaranteed to be unique within a reviewShow( JMPClinicalReviewAPI:getReportTitle( 1 ) ); // Report indicies are guaranteed to be unique within a review Show( JMPClinicalReviewAPI:getReportName( . ) ); // The currently selected report tab is guaranteed to be unique within a reviewJMPClinicalReviewAPI:resetReport( . );JMPClinicalReviewAPI:renameReport( ., . );JMPClinicalReviewAPI:addReport(	"FindingsBoxPlots",	"Customized Findings Box Plots",	[=> ]);Show( JMPClinicalReviewAPI:getReportColumnSwitcherSelection( ., 1 ) );JMPClinicalReviewAPI:changeReportColumnSwitcherSelection( ., 1, "Calcium (mmol/L)" );JMPClinicalReviewAPI:changeReport( ., ., . );JMPClinicalReviewAPI:deleteReport( . );JMPClinicalReviewAPI:deleteReport( . );JMPClinicalReviewAPI:addReport( "DemographicsDistribution" );JMPClinicalReviewAPI:addReport( "AdverseEventsDistribution" );JMPClinicalReviewAPI:changeReportFilterSelection(	.,	":Overall Percent Occurrence >= 10 & :Overall Percent Occurrence <= 50");JMPClinicalReviewAPI:changeReportFilterSelection(	., ":\!"Toxicity Grade/Severity\!"n == {\!"MODERATE\!"}");JMPClinicalReviewAPI:changeReportFilterSelection( ., ":Serious Event == {\!"N\!"}" );Show( JMPClinicalReviewAPI:getReportFilterSelection( . ) );Current Data Table() << SelectWhere( :Serious Event == "Y" );Wait( 0 );JMPClinicalReviewAPI:applyReportSubjectSelectionToReviewSubjectFilter( . );JMPClinicalReviewAPI:moveReport(	"DemographicsDistribution", "AdverseEventsDistribution");JMPClinicalReviewAPI:moveReport( 2, 1 );JMPClinicalReviewAPI:duplicateReport( 1 );JMPClinicalReviewAPI:selectReport( "DemographicsDistribution" );JMPClinicalReviewAPI:createStaticReportForReport( . );JMPClinicalReviewAPI:createLiveReportForReport( ., [=> ] );JMPClinicalReviewAPI:selectReport( 1 );JMPClinicalReviewAPI:showReportTables( . );JMPClinicalReviewAPI:changeReviewSubjectFilter( "My Saved Filter Name" ); // Change the review subject filter to a saved one (by name)JMPClinicalReviewAPI:changeReviewSubjectFilter( // Change the review subject filter to this definition	"Current Data Table() << Data Filter(Title( \!"Review Subject Filter\!" ),    Conditional, Mode( Select( 0 ), Show( 1 ), Include( 1 ) ),	Add Filter(columns(:Age, :Sex, :Race, :Unique Subject Identifier)))");JMPClinicalReviewAPI:changeReviewSubjectFilter( . ); // Reset the review subject filterJMPClinicalReviewAPI:changeReviewSubjectFilterSelection( ":Sex == {\!"F\!"}" );Show( JMPClinicalReviewAPI:getReviewSubjectFilterSelection() );JMPClinicalReviewAPI:saveReviewTemplate( "ReviewManagementExamples", 1 );JMPClinicalReviewAPI:resetAllReports();JMPClinicalReviewAPI:deleteAllReports();JMPClinicalReviewAPI:closeReviewBuilder();// Use an existing review templateJMPClinicalReviewAPI:openReviewTemplate(	"C:\ProgramData\JMP\JMPClinical\19\Clinical\ReviewTemplates\Medical Monitoring.jmpcrt",	1, 0, 1, 0);If( !Directory Exists( "C:\JMPClinicalReviewManager" ),	Create Directory( "C:\JMPClinicalReviewManager" ));If( Directory Exists( "C:\JMPClinicalReviewManager" ),	JMPClinicalReviewAPI:createStaticReport(		"PDF", 0, "C:\JMPClinicalReviewManager\APIReview.pdf", "SELECTED", 1,		1	));JMPClinicalReviewAPI:createLiveReport(	["ConnectionName" => Empty(),	"Space" => "_PERSONAL_",	"Folder" => "",	"PublishData" => 0,	"PublishOptimization" => 1,	"PublishNotes" => 0,	"PatientProfilesPublishPopulation" => "SELECTED",	"PatientProfilesPublishGraphs" => 1,	"PatientProfilesPublishTables" => 1]);JMPClinicalReviewAPI:closeReviewBuilder();exitJMPClinicalBatch();/*===================================================================================Copyright © 2025 JMP Statistical Discovery LLC, Cary, NC, USA. All rights reserved.JMP STATISTICAL DISCOVERY LLC ("JMP") PERMITS THE USE OF THIS COMPUTER SOFTWARECODE ("CODE") ON AN AS-IS BASIS AND AUTHORIZES YOU TO USE THE CODE SUBJECT TOTHE TERMS LISTED HEREIN. BY USING THE CODE, YOU AGREE TO THESE TERMS. YOUR USEOF THE CODE IS AT YOUR OWN RISK. JMP MAKES NO REPRESENTATION OR WARRANTY,EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, WARRANTIES OFMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND TITLE,WITH RESPECT TO THE CODE.You may use the Code solely as part of a software product you currently havelicensed from JMP, JMP's parent company, SAS Institute Inc. ("SAS US") or oneof SAS' subsidiaries (together with SAS US, "SAS") or authorized agents (the"Software"), and not for any other purpose. The Code is designed to eithercorrect an error in the Software or to add functionality to the Software buthas not necessarily been tested. Accordingly, JMP makes no representation orwarranty that the Code (1) will operate error-free or (2) will not contain anyviruses or other applications or executables (including, without limitation,any "trap doors," "worms" and "time bombs") that will degrade or infect anysoftware product that you license from JMP or any other software or yournetwork or systems. JMP is under no obligation to maintain, support, orcontinue to distribute the Code.Neither JMP nor its licensors shall be liable to you or any third party for anygeneral, special, direct, indirect, consequential, incidental, or other damageswhatsoever arising out of or related to your use or inability to use the Code,even if JMP has been advised of the possibility of such damages. Except asotherwise provided above, the Code is governed by the same agreement thatgoverns the Software. If you do not have an existing agreement with JMP or SASgoverning the Software, you may not use the Code.US export laws and regulations apply to the Code and any other JMP-providedtechnology ("Controlled Material"). The Controlled Material originates from theUnited States. Customer agrees to comply with these and other applicable exportand import laws and regulations, except as prohibited or penalized by law("Trade Law"). Customer warrants that Customer and its users are not: (a)prohibited by Trade Law from accessing Controlled Material without USgovernment approval; (b) located in or under control of any country or otherterritory subject to general export or trade embargo under Trade Law; or (c)engaged in any of the following end-uses: nuclear, chemical or biologicalweapons; nuclear facilities not under International Atomic Energy Agencysafeguards; missiles or unmanned aerial vehicles capable of long-range use orweapons delivery, military training or assistance, military or intelligenceend-use in Russia or in any country in Country Group D:5 of the United StatesExport Administration Regulations; deep water, Arctic offshore or shale oil orgas exploration involving Russia or Russian companies, or Russian energy exportpipelines. Customer will not import or use any data within the System that issubject to the US International Traffic Arms Regulations. United States exportclassification information for JMP software and its affiliates is available atjmp.com/export.JMP and all other JMP Statistical Discovery LLC product or service names areregistered trademarks or trademarks of SAS Institute Inc. in the USA and othercountries. ® indicates USA registration. Other brand and product names areregistered trademarks or trademarks of their respective companies.==============================================================================*/

```

#### Simple

```jsl

JMPClinicalReviewAPI:openReviewTemplate(	"C:\ProgramData\JMP\JMPClinical\19\Clinical\ReviewTemplates\Medical Monitoring.jmpcrt",	1, 0, 1, 0);If( !Directory Exists( "C:\JMPClinicalReviewManager" ),	Create Directory( "C:\JMPClinicalReviewManager" ));If( Directory Exists( "C:\JMPClinicalReviewManager" ),	Open(		JMPClinicalReviewAPI		:createStaticReport(			"PDF", 0, "C:\JMPClinicalReviewManager\APIReview.pdf",			"SELECTED", 1, 1		)	));

```

### JMPClinicalReviewAPI:createStaticReportForReport

**Syntax:** JMPClinicalReviewAPI:createStaticReportForReport(reportID = ., type = empty(), includeNotes = empty(), filePath = empty(), patientProfilesPublishPopulation = "SELECTED", patientProfilesPublishGraphs = 1, patientProfilesPublishTables = 1)

**Description:** Create a static version (PDF, RTF, PowerPoint) of one report in a Review

 \*

 \* reportID => Namespace, Numeric Missing, Integer, or String: The namespace, selected tab, tab index, report title, reference, or report name\* corresponding to a report.

 \*   Specify numeric missing (.) to refer to the currently selected report tab.

 \*   \*CAUTION: Although report titles are guaranteed to be unique within a review, report names are not. If using the

 \*      report name as the reportID and multiple copies of that report exist in a review, the FIRST match will be used.

 \*

 \* type                             => String: "PDF", "RTF", or "PowerPoint"

 \* includeNotes                     => Number: 0 = do not include notes, 1 = include notes

 \* filePath                         => String: full file path where to save report. If not specified, the default 

 \*                                       static report location is used - as specified in the configuration as /user/clinical/staticreportpath

 \* patientProfilesPublishPopulation => String: "SELECTED" = publish selected patients only (default), "ALL" = publish all patients

 \* patientProfilesPublishGraphs     => Number: 0 = do not publish graphs, 1 = publish graphs (default)

 \* patientProfilesPublishTables     => Number: 0 = do not publish tables, 1 = publish tables (default)

 \*

 \* return - a String: Path to the static report

```jsl

JMPClinicalReviewAPI:addReport( "AdverseEventsDistribution" );JMPClinicalReviewAPI:addReport( "DemographicsDistribution" );JMPClinicalReviewAPI:selectReport( 1 );Open( JMPClinicalReviewAPI:createStaticReportForReport( . ) );

```

### JMPClinicalReviewAPI:deleteAllReports

**Syntax:** JMPClinicalReviewAPI:deleteAllReports()

**Description:** Deletes all report tabs from Review Builder

 \*

 \* return - an Integer: 1 if successful, 0 if unsuccessful.

```jsl

JMPClinicalReviewAPI:addReport( "AdverseEventsDistribution" );JMPClinicalReviewAPI:addReport( "DemographicsDistribution" );Wait( 1 );JMPClinicalReviewAPI:deleteAllReports();

```

### JMPClinicalReviewAPI:deleteReport

**Syntax:** JMPClinicalReviewAPI:deleteReport(reportID = .)

**Description:** Deletes a report tab from Review Builder

 \*

 \* reportID => Namespace, Numeric Missing, Integer, or String: The namespace, selected tab, tab index, report title, reference, or report name\* corresponding to a report.

 \*   Specify numeric missing (.) to refer to the currently selected report tab.

 \*   \*CAUTION: Although report titles are guaranteed to be unique within a review, report names are not. If using the

 \*      report name as the reportID and multiple copies of that report exist in a review, the FIRST match will be used.

 \*

 \* return - an Integer: 1 if successful, 0 if unsuccessful.

```jsl

JMPClinicalReviewAPI:addReport( "AdverseEventsDistribution" );Wait( 1 );JMPClinicalReviewAPI:deleteReport( . );

```

### JMPClinicalReviewAPI:duplicateReport

**Syntax:** JMPClinicalReviewAPI:duplicateReport(reportID = .)

**Description:** Duplicates a report tab in Review Builder

 \*

 \* reportID => Namespace, Numeric Missing, Integer, or String: The namespace, selected tab, tab index, report title, reference, or report name\* corresponding to a report.

 \*   Specify numeric missing (.) to refer to the currently selected report tab.

 \*   \*CAUTION: Although report titles are guaranteed to be unique within a review, report names are not. If using the

 \*      report name as the reportID and multiple copies of that report exist in a review, the FIRST match will be used.

 \*

 \* return - an Integer: 1 if successful, 0 if unsuccessful.

```jsl

JMPClinicalReviewAPI:addReport( "AdverseEventsDistribution" );JMPClinicalReviewAPI:duplicateReport( . );

```

### JMPClinicalReviewAPI:getAllReportReferences

**Syntax:** JMPClinicalReviewAPI:getAllReportReferences()

**Description:** Returns a report reference for every report tab in Review Builder

 \*

 \* return - a list of report references. If the review is empty, an empty list {} is returned.

```jsl

JMPClinicalReviewAPI:addReport( "AdverseEventsDistribution" );JMPClinicalReviewAPI:addReport( "DemographicsDistribution" );JMPClinicalReviewAPI:getAllReportReferences();

```

### JMPClinicalReviewAPI:getCurrentStudy

**Syntax:** JMPClinicalReviewAPI:getCurrentStudy()

**Description:** Returns the name of the current study.

 \*

 \* return - if there is a current study, the study name (a string); otherwise Empty().

```jsl

JMPClinicalReviewAPI:getCurrentStudy();

```

### JMPClinicalReviewAPI:getReportColumnSwitcherSelection

**Syntax:** JMPClinicalReviewAPI:getReportColumnSwitcherSelection(reportID = ., columnSwitcherIndex = 1)

**Description:** Returns the current column switcher selection in a report tab in Review Builder

 \*

 \* reportID => Namespace, Numeric Missing, Integer, or String: The namespace, selected tab, tab index, report title, reference, or report name\* corresponding to a report.

 \*   Specify numeric missing (.) to refer to the currently selected report tab.

 \*   \*CAUTION: Although report titles are guaranteed to be unique within a review, report names are not. If using the

 \*      report name as the reportID and multiple copies of that report exist in a review, the FIRST match will be used.

 \* columnSwitcherIndex => Integer: The index of the column switcher within the specified report. 

 \*   The first (or only) column switcher in a report will have an index of 1. The default value is 1.

 \*

 \* return - a String: The currently selected column in the column switcher.

```jsl

JMPClinicalReviewAPI:addReport( "FindingsBoxPlots" );JMPClinicalReviewAPI:getReportColumnSwitcherSelection( ., 1 );

```

### JMPClinicalReviewAPI:getReportFilterSelection

**Syntax:** JMPClinicalReviewAPI:getReportFilterSelection(reportID = .)

**Description:** Returns the current report filter selection in a report tab in Review Builder

 \*

 \* reportID => Namespace, Numeric Missing, Integer, or String: The namespace, selected tab, tab index, report title, reference, or report name\* corresponding to a report.

 \*   Specify numeric missing (.) to refer to the currently selected report tab.

 \*   \*CAUTION: Although report titles are guaranteed to be unique within a review, report names are not. If using the

 \*      report name as the reportID and multiple copies of that report exist in a review, the FIRST match will be used.

 \*

 \* return - a String: The current report filter selection.

```jsl

JMPClinicalReviewAPI:addReport( "AdverseEventsDistribution" );JMPClinicalReviewAPI:changeReportFilterSelection(	.,	":Overall Percent Occurrence >= 10 & :Overall Percent Occurrence <= 50");JMPClinicalReviewAPI:getReportFilterSelection( . );

```

### JMPClinicalReviewAPI:getReportIndex

**Syntax:** JMPClinicalReviewAPI:getReportIndex(reportID = .)

**Description:** Returns the report index from a report reference in Review Builder

 \*

 \* reportID => Namespace, Numeric Missing, Integer, or String: The namespace, selected tab, tab index, report title, reference, or report name\* corresponding to a report.

 \*   Specify numeric missing (.) to refer to the currently selected report tab.

 \*   \*CAUTION: Although report titles are guaranteed to be unique within a review, report names are not. If using the

 \*      report name as the reportID and multiple copies of that report exist in a review, the FIRST match will be used.

 \*

 \* return - an Integer: The index (position) of the report tab within the review. The first tab will have an index of 1.

```jsl

JMPClinicalReviewAPI:addReport( "AdverseEventsDistribution" );JMPClinicalReviewAPI:getReportIndex( . );

```

### JMPClinicalReviewAPI:getReportName

**Syntax:** JMPClinicalReviewAPI:getReportName(reportID = .)

**Description:** Returns the report name/id from a report reference in Review Builder

 \*

 \* reportID => Namespace, Numeric Missing, Integer, or String: The namespace, selected tab, tab index, report title, reference, or report name\* corresponding to a report.

 \*   Specify numeric missing (.) to refer to the currently selected report tab.

 \*   \*CAUTION: Although report titles are guaranteed to be unique within a review, report names are not. If using the

 \*      report name as the reportID and multiple copies of that report exist in a review, the FIRST match will be used.

 \*

 \* return - a String: The name/id of the report.

```jsl

JMPClinicalReviewAPI:addReport( "AdverseEventsDistribution" );JMPClinicalReviewAPI:getReportName( . );

```

### JMPClinicalReviewAPI:getReportOptions

**Syntax:** JMPClinicalReviewAPI:getReportOptions(reportID = .)

**Description:** Returns the options and option values from a report reference in Review Builder

 \*

 \* reportID => Namespace, Numeric Missing, Integer, or String: The namespace, selected tab, tab index, report title, reference, or report name\* corresponding to a report.

 \*   Specify numeric missing (.) to refer to the currently selected report tab.

 \*   \*CAUTION: Although report titles are guaranteed to be unique within a review, report names are not. If using the

 \*      report name as the reportID and multiple copies of that report exist in a review, the FIRST match will be used.

 \*

 \* return - an Associative Array: The internal widget option name-value pairs.

```jsl

JMPClinicalReviewAPI:addReport( "AdverseEventsDistribution" );JMPClinicalReviewAPI:getReportOptions( . );

```

### JMPClinicalReviewAPI:getReportReference

**Syntax:** JMPClinicalReviewAPI:getReportReference(reportID = ., warnInvalidReportReference = 1)

**Description:** Returns a report reference from a report namespace, selected tab, tab index, report title, reference, or report name in Review Builder

 \*

 \* reportID => Namespace, Numeric Missing, Integer, or String: The namespace, selected tab, tab index, report title, reference, or report name\* corresponding to a report.

 \*   Specify numeric missing (.) to refer to the currently selected report tab.

 \*   \*CAUTION: Although report titles are guaranteed to be unique within a review, report names are not. If using the

 \*      report name as the reportID and multiple copies of that report exist in a review, the FIRST match will be used.

 \* warnInvalidReportReference => Integer: Specify 1 to warn, or 0 to not warn, about an invalid report reference.

 \*

 \* return - a reference to the report. If the report reference invalid, empty() is returned.

```jsl

JMPClinicalReviewAPI:addReport( "AdverseEventsDistribution" );JMPClinicalReviewAPI:getReportReference( . );

```

### JMPClinicalReviewAPI:getReportTitle

**Syntax:** JMPClinicalReviewAPI:getReportTitle(reportID = .)

**Description:** Returns the report title from a report reference in Review Builder

 \*

 \* reportID => Namespace, Numeric Missing, Integer, or String: The namespace, selected tab, tab index, report title, reference, or report name\* corresponding to a report.

 \*   Specify numeric missing (.) to refer to the currently selected report tab.

 \*   \*CAUTION: Although report titles are guaranteed to be unique within a review, report names are not. If using the

 \*      report name as the reportID and multiple copies of that report exist in a review, the FIRST match will be used.

 \*

 \* return - a String: The title of the report.

```jsl

JMPClinicalReviewAPI:addReport( "AdverseEventsDistribution" );JMPClinicalReviewAPI:getReportTitle( . );

```

### JMPClinicalReviewAPI:getReviewBuilder

**Syntax:** JMPClinicalReviewAPI:getReviewBuilder(show=1)

**Description:** Gets an instance of a Review Builder. If an instance doesn&apos;t

 \* exist, one will be created.

 \*

 \* show - 1(default) = show the window, 0 = hide the window, -1 = keep original window visibility

 \*

 \* return - a reference to the Review Builder object

```jsl

JMPClinicalReviewAPI:getReviewBuilder();

```

### JMPClinicalReviewAPI:getReviewSubjectFilterSelection

**Syntax:** JMPClinicalReviewAPI:getReviewSubjectFilterSelection()

**Description:** Returns the current Review Subject Filter selection in Review Builder

 \*

 \* return - a String: The current Review Subject Filter selection.

```jsl

JMPClinicalReviewAPI:addReport( "AdverseEventsDistribution" );JMPClinicalReviewAPI:changeReviewSubjectFilterSelection( ":Sex == {\!"F\!"}" );JMPClinicalReviewAPI:getReviewSubjectFilterSelection();

```

### JMPClinicalReviewAPI:moveReport

**Syntax:** JMPClinicalReviewAPI:moveReport(fromReportID = ., toReportID = .)

**Description:** Moves a report tab from its starting index to a new index in Review Builder

 \*

 \* fromReportID => Namespace, Numeric Missing, Integer, or String: The namespace, selected tab, tab index, report title, reference, or report name\* corresponding to a report.

 \*   Specify numeric missing (.) to refer to the currently selected report tab.

 \*   \*CAUTION: Although report titles are guaranteed to be unique within a review, report names are not. If using the

 \*      report name as the reportID and multiple copies of that report exist in a review, the FIRST match will be used.

 \* toReportID => Namespace, Numeric Missing, Integer, or String: The namespace, selected tab, tab index, report title, reference, or report name\* corresponding to a report.

 \*   Specify numeric missing (.) to refer to the currently selected report tab.

 \*   \*CAUTION: Although report titles are guaranteed to be unique within a review, report names are not. If using the

 \*      report name as the reportID and multiple copies of that report exist in a review, the FIRST match will be used.

 \*

 \* return - an Integer: 1 if successful, 0 if unsuccessful.

```jsl

r1 = JMPClinicalReviewAPI:getReportReference(	JMPClinicalReviewAPI:addReport( "AdverseEventsDistribution" ));r2 = JMPClinicalReviewAPI:getReportReference(	JMPClinicalReviewAPI:addReport( "DemographicsDistribution" ));Wait( 1 );JMPClinicalReviewAPI:moveReport( r1, r2 );

```

### JMPClinicalReviewAPI:openReviewTemplate

**Syntax:** JMPClinicalReviewAPI:openReviewTemplate(templatePath, useNewReviewBuilder=1, returnType=0, toleratePre17Template=1, closeReportsWithInexactOptionValueMatches=0)

**Description:** Open a Review Template

 \*

 \* templatePath => String: path to the Review Template to open

 \* useNewReviewBuilder => Number: 

 \*   0 = reuse a Review Builder instance if one exists, otherwise open a new one

 \*   1 = close any existing Review Builder instance and open a new one (default)

 \* returnType => Number:

 \*   0 = return a success code (1 if successful, 0 or missing (.) if unsuccessful or cancelled) (default)

 \*   1 = return a reference to the Review Builder object (behavior prior to JMP Clinical 18.2)

 \* toleratePre17Template => Number: 

 \*   0 = abort the template run if the template predates JMP Clinical 17

 \*   1 = run the template to the extent possible regardless of template version (default)

 \* closeReportsWithInexactOptionValueMatches => Number:

 \*   0 = keep all reports (default)

 \*   1 = close all reports with inexact option value matches

 \*

 \* return:

 \*   if returnType = 0, 1 if successful, 0 or missing (.) if unsuccessful or cancelled

 \*   if returnType = 1, a reference to the Review Builder object

#### Batch

```jsl

/* * Use the following environment variables to control elements of the batch execution:  * * set JMPClinicalBatchMode=true                    options include: true, debug * set JMPClinicalBatchLogPath=%CD%\                the path where the log file should be written * set JMPClinicalBatchConfiguration=Default        the configuration to use. if not specified, the last configuration used interactively will be used  * set JMPClinicalBatchCurrentStudy=                the study to use for Review Builder operations (not used by the JMPClinicalStudyManagerAPI)*/exitJMPClinicalBatch = Function( {},	{},	Save Log(		Get Environment Variable( "JMPClinicalBatchLogPath" ) ||		"JMPClinicalBatchLog.log"	);	Exit(););Show( JMPClinicalReviewAPI:getCurrentStudy() );// Build a review templatern = JMPClinicalReviewAPI:addReport(	"AdverseEventsDistribution",	"Customized Adverse Events Distribution",	["objRefNS:stkcb" => "AESER"]);JMPClinicalReviewAPI:renameReport(	., "AESER Stack Adverse Events Distribution"); // . refers to the currently selected report tabJMPClinicalReviewAPI:changeReportOptions(	rn,	["objRefNS:eventcb_AdverseEvents_AE" => "PRE"]); // Can also use report namespace, reference, index, title, or nameShow( JMPClinicalReviewAPI:getReportOptions( . ) );Show( JMPClinicalReviewAPI:getAllReportReferences() );Show(	JMPClinicalReviewAPI:getReportReference( "AdverseEventsDistribution" )); // CAUTION: Report names are NOT guaranteed to be unique within a reviewShow(	JMPClinicalReviewAPI:getReportIndex(		"AESER Stack Adverse Events Distribution"	)); // Report titles are guaranteed to be unique within a reviewShow( JMPClinicalReviewAPI:getReportTitle( 1 ) ); // Report indicies are guaranteed to be unique within a review Show( JMPClinicalReviewAPI:getReportName( . ) ); // The currently selected report tab is guaranteed to be unique within a reviewJMPClinicalReviewAPI:resetReport( . );JMPClinicalReviewAPI:renameReport( ., . );JMPClinicalReviewAPI:addReport(	"FindingsBoxPlots",	"Customized Findings Box Plots",	[=> ]);Show( JMPClinicalReviewAPI:getReportColumnSwitcherSelection( ., 1 ) );JMPClinicalReviewAPI:changeReportColumnSwitcherSelection( ., 1, "Calcium (mmol/L)" );JMPClinicalReviewAPI:changeReport( ., ., . );JMPClinicalReviewAPI:deleteReport( . );JMPClinicalReviewAPI:deleteReport( . );JMPClinicalReviewAPI:addReport( "DemographicsDistribution" );JMPClinicalReviewAPI:addReport( "AdverseEventsDistribution" );JMPClinicalReviewAPI:changeReportFilterSelection(	.,	":Overall Percent Occurrence >= 10 & :Overall Percent Occurrence <= 50");JMPClinicalReviewAPI:changeReportFilterSelection(	., ":\!"Toxicity Grade/Severity\!"n == {\!"MODERATE\!"}");JMPClinicalReviewAPI:changeReportFilterSelection( ., ":Serious Event == {\!"N\!"}" );Show( JMPClinicalReviewAPI:getReportFilterSelection( . ) );Current Data Table() << SelectWhere( :Serious Event == "Y" );Wait( 0 );JMPClinicalReviewAPI:applyReportSubjectSelectionToReviewSubjectFilter( . );JMPClinicalReviewAPI:moveReport(	"DemographicsDistribution", "AdverseEventsDistribution");JMPClinicalReviewAPI:moveReport( 2, 1 );JMPClinicalReviewAPI:duplicateReport( 1 );JMPClinicalReviewAPI:selectReport( "DemographicsDistribution" );JMPClinicalReviewAPI:createStaticReportForReport( . );JMPClinicalReviewAPI:createLiveReportForReport( ., [=> ] );JMPClinicalReviewAPI:selectReport( 1 );JMPClinicalReviewAPI:showReportTables( . );JMPClinicalReviewAPI:changeReviewSubjectFilter( "My Saved Filter Name" ); // Change the review subject filter to a saved one (by name)JMPClinicalReviewAPI:changeReviewSubjectFilter( // Change the review subject filter to this definition	"Current Data Table() << Data Filter(Title( \!"Review Subject Filter\!" ),    Conditional, Mode( Select( 0 ), Show( 1 ), Include( 1 ) ),	Add Filter(columns(:Age, :Sex, :Race, :Unique Subject Identifier)))");JMPClinicalReviewAPI:changeReviewSubjectFilter( . ); // Reset the review subject filterJMPClinicalReviewAPI:changeReviewSubjectFilterSelection( ":Sex == {\!"F\!"}" );Show( JMPClinicalReviewAPI:getReviewSubjectFilterSelection() );JMPClinicalReviewAPI:saveReviewTemplate( "ReviewManagementExamples", 1 );JMPClinicalReviewAPI:resetAllReports();JMPClinicalReviewAPI:deleteAllReports();JMPClinicalReviewAPI:closeReviewBuilder();// Use an existing review templateJMPClinicalReviewAPI:openReviewTemplate(	"C:\ProgramData\JMP\JMPClinical\19\Clinical\ReviewTemplates\Medical Monitoring.jmpcrt",	1, 0, 1, 0);If( !Directory Exists( "C:\JMPClinicalReviewManager" ),	Create Directory( "C:\JMPClinicalReviewManager" ));If( Directory Exists( "C:\JMPClinicalReviewManager" ),	JMPClinicalReviewAPI:createStaticReport(		"PDF", 0, "C:\JMPClinicalReviewManager\APIReview.pdf", "SELECTED", 1,		1	));JMPClinicalReviewAPI:createLiveReport(	["ConnectionName" => Empty(),	"Space" => "_PERSONAL_",	"Folder" => "",	"PublishData" => 0,	"PublishOptimization" => 1,	"PublishNotes" => 0,	"PatientProfilesPublishPopulation" => "SELECTED",	"PatientProfilesPublishGraphs" => 1,	"PatientProfilesPublishTables" => 1]);JMPClinicalReviewAPI:closeReviewBuilder();exitJMPClinicalBatch();/*===================================================================================Copyright © 2025 JMP Statistical Discovery LLC, Cary, NC, USA. All rights reserved.JMP STATISTICAL DISCOVERY LLC ("JMP") PERMITS THE USE OF THIS COMPUTER SOFTWARECODE ("CODE") ON AN AS-IS BASIS AND AUTHORIZES YOU TO USE THE CODE SUBJECT TOTHE TERMS LISTED HEREIN. BY USING THE CODE, YOU AGREE TO THESE TERMS. YOUR USEOF THE CODE IS AT YOUR OWN RISK. JMP MAKES NO REPRESENTATION OR WARRANTY,EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, WARRANTIES OFMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND TITLE,WITH RESPECT TO THE CODE.You may use the Code solely as part of a software product you currently havelicensed from JMP, JMP's parent company, SAS Institute Inc. ("SAS US") or oneof SAS' subsidiaries (together with SAS US, "SAS") or authorized agents (the"Software"), and not for any other purpose. The Code is designed to eithercorrect an error in the Software or to add functionality to the Software buthas not necessarily been tested. Accordingly, JMP makes no representation orwarranty that the Code (1) will operate error-free or (2) will not contain anyviruses or other applications or executables (including, without limitation,any "trap doors," "worms" and "time bombs") that will degrade or infect anysoftware product that you license from JMP or any other software or yournetwork or systems. JMP is under no obligation to maintain, support, orcontinue to distribute the Code.Neither JMP nor its licensors shall be liable to you or any third party for anygeneral, special, direct, indirect, consequential, incidental, or other damageswhatsoever arising out of or related to your use or inability to use the Code,even if JMP has been advised of the possibility of such damages. Except asotherwise provided above, the Code is governed by the same agreement thatgoverns the Software. If you do not have an existing agreement with JMP or SASgoverning the Software, you may not use the Code.US export laws and regulations apply to the Code and any other JMP-providedtechnology ("Controlled Material"). The Controlled Material originates from theUnited States. Customer agrees to comply with these and other applicable exportand import laws and regulations, except as prohibited or penalized by law("Trade Law"). Customer warrants that Customer and its users are not: (a)prohibited by Trade Law from accessing Controlled Material without USgovernment approval; (b) located in or under control of any country or otherterritory subject to general export or trade embargo under Trade Law; or (c)engaged in any of the following end-uses: nuclear, chemical or biologicalweapons; nuclear facilities not under International Atomic Energy Agencysafeguards; missiles or unmanned aerial vehicles capable of long-range use orweapons delivery, military training or assistance, military or intelligenceend-use in Russia or in any country in Country Group D:5 of the United StatesExport Administration Regulations; deep water, Arctic offshore or shale oil orgas exploration involving Russia or Russian companies, or Russian energy exportpipelines. Customer will not import or use any data within the System that issubject to the US International Traffic Arms Regulations. United States exportclassification information for JMP software and its affiliates is available atjmp.com/export.JMP and all other JMP Statistical Discovery LLC product or service names areregistered trademarks or trademarks of SAS Institute Inc. in the USA and othercountries. ® indicates USA registration. Other brand and product names areregistered trademarks or trademarks of their respective companies.==============================================================================*/

```

#### Simple

```jsl

JMPClinicalReviewAPI:openReviewTemplate(	"C:\ProgramData\JMP\JMPClinical\19\Clinical\ReviewTemplates\Medical Monitoring.jmpcrt",	1, 0, 1, 0);

```

### JMPClinicalReviewAPI:renameReport

**Syntax:** JMPClinicalReviewAPI:renameReport(reportID = ., reportUserCustomizedTitle = .)

**Description:** Renames a report tab in Review Builder

 \*

 \* reportID => Namespace, Numeric Missing, Integer, or String: The namespace, selected tab, tab index, report title, reference, or report name\* corresponding to a report.

 \*   Specify numeric missing (.) to refer to the currently selected report tab.

 \*   \*CAUTION: Although report titles are guaranteed to be unique within a review, report names are not. If using the

 \*      report name as the reportID and multiple copies of that report exist in a review, the FIRST match will be used.

 \* reportUserCustomizedTitle => String: The new report title.

 \*   Specify numeric missing (.) to indicate the title is no longer customized by the user (to allow the report to be dynamically named).

 \*

 \* return - an Integer: 1 if successful, 0 if unsuccessful.

```jsl

JMPClinicalReviewAPI:addReport(	"AdverseEventsDistribution",	.,	["objRefNS:stkcb" => "AESER"]);Wait( 1 );JMPClinicalReviewAPI:renameReport(	., "Customized Adverse Events Distribution");Wait( 1 );JMPClinicalReviewAPI:renameReport( ., . );

```

### JMPClinicalReviewAPI:resetAllReports

**Syntax:** JMPClinicalReviewAPI:resetAllReports()

**Description:** Resets option values in all report tabs in Review Builder

 \*

 \* return - an Integer: 1 if successful, 0 if unsuccessful.

```jsl

JMPClinicalReviewAPI:addReport(	"AdverseEventsDistribution",	"Customized Adverse Events Distribution",	["objRefNS:stkcb" => "AESER"]);JMPClinicalReviewAPI:addReport( "FindingsBoxPlots" );JMPClinicalReviewAPI:changeReportColumnSwitcherSelection( ., 1, "Glucose (mmol/L)" );Wait( 1 );JMPClinicalReviewAPI:resetAllReports();

```

### JMPClinicalReviewAPI:resetReport

**Syntax:** JMPClinicalReviewAPI:resetReport(reportID = .)

**Description:** Resets option values in a report tab in Review Builder

 \*

 \* reportID => Namespace, Numeric Missing, Integer, or String: The namespace, selected tab, tab index, report title, reference, or report name\* corresponding to a report.

 \*  Specify numeric missing (.) to refer to the currently selected report tab.

 \*   \*CAUTION: Although report titles are guaranteed to be unique within a review, report names are not. If using the

 \*      report name as the reportID and multiple copies of that report exist in a review, the FIRST match will be used.

 \*

 \* return - an Integer: 1 if successful, 0 if unsuccessful.

```jsl

JMPClinicalReviewAPI:addReport(	"AdverseEventsDistribution",	"Customized Adverse Events Distribution",	["objRefNS:stkcb" => "AESER"]);Wait( 1 );JMPClinicalReviewAPI:resetReport( . );

```

### JMPClinicalReviewAPI:saveReviewTemplate

**Syntax:** JMPClinicalReviewAPI:saveReviewTemplate(reviewTemplatePath = "", allowOverwrite = 0)

**Description:** Saves a review template

 \*

 \* reviewTemplatePath => String: The full path (including the filename) of the review template.

 \*   Specify a filename without a drive or folder to use the default review templates folder.

 \*   Specify "" to use the default path.

 \* allowOverwrite => Integer: If the specified review template file already exists, 

 \*   1 allows overwrites, 0 prevents overwrites.

 \*

 \* return - a String: The path to the saved review template file (if successful), or "" (if unsuccessful).

```jsl

JMPClinicalReviewAPI:addReport( "AdverseEventsDistribution" );JMPClinicalReviewAPI:saveReviewTemplate( "ScriptingIndexExample", 1 );

```

### JMPClinicalReviewAPI:selectReport

**Syntax:** JMPClinicalReviewAPI:selectReport(reportID = .)

**Description:** Makes the specified report tab the currently selected tab in Review Builder

 \*

 \* reportID => Namespace, Numeric Missing, Integer, or String: The namespace, selected tab, tab index, report title, reference, or report name\* corresponding to a report.

 \*   Specify numeric missing (.) to refer to the currently selected report tab.

 \*   \*CAUTION: Although report titles are guaranteed to be unique within a review, report names are not. If using the

 \*      report name as the reportID and multiple copies of that report exist in a review, the FIRST match will be used.

 \*

 \* return - an Integer: 1 if successful, 0 if unsuccessful.

```jsl

r1 = JMPClinicalReviewAPI:getReportReference(	JMPClinicalReviewAPI:addReport( "AdverseEventsDistribution" ));r2 = JMPClinicalReviewAPI:getReportReference(	JMPClinicalReviewAPI:addReport( "DemographicsDistribution" ));Wait( 1 );JMPClinicalReviewAPI:selectReport( r1 );

```

### JMPClinicalReviewAPI:setCurrentStudy

**Syntax:** JMPClinicalReviewAPI:setCurrentStudy(study)

**Description:** Sets the current study to the one specified.

 \*

 \* study - a string containing the name of the study to set as the current study,

 \* or Empty() to set the current study to <None>

 \*

 \* return - if the current study was succesfully set, 1; otherwise 0.

```jsl

JMPClinicalReviewAPI:setCurrentStudy( "Nicardipine" );

```

### JMPClinicalReviewAPI:showReportTables

**Syntax:** JMPClinicalReviewAPI:showReportTables(reportID = .)

**Description:** Shows (or hides if already shown) tables for the specified report in Review Builder

 \*

 \* reportID => Namespace, Numeric Missing, Integer, or String: The namespace, selected tab, tab index, report title, reference, or report name\* corresponding to a report.

 \*   Specify numeric missing (.) to refer to the currently selected report tab.

 \*   \*CAUTION: Although report titles are guaranteed to be unique within a review, report names are not. If using the

 \*      report name as the reportID and multiple copies of that report exist in a review, the FIRST match will be used.

 \*

 \* return - an Integer: 1 if successful, 0 if unsuccessful.

```jsl

JMPClinicalReviewAPI:addReport( "AdverseEventsDistribution" );JMPClinicalReviewAPI:showReportTables( . );

```

### JMPClinicalStudyManagerAPI:addStudies

**Syntax:** JMPClinicalStudyManagerAPI:addStudies(listOfAddStudyArgumentLists = {})

**Description:** Adds the studies to current configuration (use the JMPClinicalBatchConfiguration environment variable).

 \*

 \* listOfAddStudyArgumentLists - List - Each element of this list is a list corresponding to the arguments to pass to JMPClinicalStudyManagerAPI:addStudy().

 \*   See JMPClinicalStudyManagerAPI:addStudy() for more details.

 \* 

 \* return - N/A

```jsl

JMPClinicalStudyManagerAPI:addStudies(	{{"Nicardipine",	"C:\ProgramData\JMP\JMPClinical\19\Clinical\Sample Data\Nicardipine\SDTM",	{},	"C:\ProgramData\JMP\JMPClinical\19\Clinical\Sample Data\Nicardipine\ADaM",	{}, 1}, {"NicardipineAbbr",	"C:\ProgramData\JMP\JMPClinical\19\Clinical\Sample Data\Nicardipine\SDTM",	{}, "", {}, 1}});

```

### JMPClinicalStudyManagerAPI:addStudy

**Syntax:** JMPClinicalStudyManagerAPI:addStudy(studyName="", SDTMFolder="", selectedSDTMDomains = {}, ADaMFolder="", selectedADaMDomains = {}, makeCurrentStudy=1, testResultsLoadOnly = "STANDARD", partialDatesStartDateImputationMethod = "FIRST", partialDatesEndDateImputationMethod = "LAST", studyDayValueDerivation = "MISSING", studyDayAnchorDateForStudyDayCalculation = "TREATMENT_START")

**Description:** Adds the study to current configuration (use the JMPClinicalBatchConfiguration environment variable).

 \*

 \* studyName - String - name of the study

 \* SDTMFolder - String - path to the SDTM data folder. Use "" if no SDTM data (at least one of SDTMFolder or ADaM must be specified)

 \* selectedSDTMDomains - List - list of the selected domains for the SDTM folder. Use {} to take all possible domains

 \* ADaMFolder - String - path to the ADaM data folder. Use "" if no ADaM data (at least one of SDTMFolder or ADaM must be specified)

 \* selectedADaMDomains - List - list of the selected domains for the ADaM folder. Use {} to take all possible domains

 \* makeCurrentStudy - Integer (0|1) - Use 1 to set the current study to studyName

 \* testResultsLoadOnly - String ("STANDARD"|"ORIGINAL")

 \* partialDatesStartDateImputationMethod - String ("FIRST"|"LAST")

 \* partialDatesEndDateImputationMethod - String ("FIRST"|"LAST")

 \* studyDayValueDerivation - String ("ALL"|"MISSING")

 \* studyDayAnchorDateForStudyDayCalculation - String ("TREATMENT_START"|"REFERENCE_START")

 \* 

 \* 

 \* return - N/A

#### Batch

```jsl

/* * Use the following environment variables to control elements of the batch execution:  * * set JMPClinicalBatchMode=true                    options include: true, debug * set JMPClinicalBatchLogPath=%CD%\                the path where the log file should be written * set JMPClinicalBatchConfiguration=Default        the configuration to use. if not specified, the last configuration used interactively will be used  * set JMPClinicalBatchCurrentStudy=                the study to use for Review Builder operations (not used by the JMPClinicalStudyManagerAPI)*/exitJMPClinicalBatch = Function( {},	{},	Save Log(		Get Environment Variable( "JMPClinicalBatchLogPath" ) ||		"JMPClinicalBatchLog.log"	);	Exit(););JMPClinicalStudyManagerAPI:addStudy(	"APIStudyName",	Convert File Path( "$CLINICAL_HOME" || "/Sample Data/Nicardipine/SDTM" ),	{},	Convert File Path( "$CLINICAL_HOME" || "/Sample Data/Nicardipine/ADaM" ),	{},	1);exitJMPClinicalBatch();/*===================================================================================Copyright © 2025 JMP Statistical Discovery LLC, Cary, NC, USA. All rights reserved.JMP STATISTICAL DISCOVERY LLC ("JMP") PERMITS THE USE OF THIS COMPUTER SOFTWARECODE ("CODE") ON AN AS-IS BASIS AND AUTHORIZES YOU TO USE THE CODE SUBJECT TOTHE TERMS LISTED HEREIN. BY USING THE CODE, YOU AGREE TO THESE TERMS. YOUR USEOF THE CODE IS AT YOUR OWN RISK. JMP MAKES NO REPRESENTATION OR WARRANTY,EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, WARRANTIES OFMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND TITLE,WITH RESPECT TO THE CODE.You may use the Code solely as part of a software product you currently havelicensed from JMP, JMP's parent company, SAS Institute Inc. ("SAS US") or oneof SAS' subsidiaries (together with SAS US, "SAS") or authorized agents (the"Software"), and not for any other purpose. The Code is designed to eithercorrect an error in the Software or to add functionality to the Software buthas not necessarily been tested. Accordingly, JMP makes no representation orwarranty that the Code (1) will operate error-free or (2) will not contain anyviruses or other applications or executables (including, without limitation,any "trap doors," "worms" and "time bombs") that will degrade or infect anysoftware product that you license from JMP or any other software or yournetwork or systems. JMP is under no obligation to maintain, support, orcontinue to distribute the Code.Neither JMP nor its licensors shall be liable to you or any third party for anygeneral, special, direct, indirect, consequential, incidental, or other damageswhatsoever arising out of or related to your use or inability to use the Code,even if JMP has been advised of the possibility of such damages. Except asotherwise provided above, the Code is governed by the same agreement thatgoverns the Software. If you do not have an existing agreement with JMP or SASgoverning the Software, you may not use the Code.US export laws and regulations apply to the Code and any other JMP-providedtechnology ("Controlled Material"). The Controlled Material originates from theUnited States. Customer agrees to comply with these and other applicable exportand import laws and regulations, except as prohibited or penalized by law("Trade Law"). Customer warrants that Customer and its users are not: (a)prohibited by Trade Law from accessing Controlled Material without USgovernment approval; (b) located in or under control of any country or otherterritory subject to general export or trade embargo under Trade Law; or (c)engaged in any of the following end-uses: nuclear, chemical or biologicalweapons; nuclear facilities not under International Atomic Energy Agencysafeguards; missiles or unmanned aerial vehicles capable of long-range use orweapons delivery, military training or assistance, military or intelligenceend-use in Russia or in any country in Country Group D:5 of the United StatesExport Administration Regulations; deep water, Arctic offshore or shale oil orgas exploration involving Russia or Russian companies, or Russian energy exportpipelines. Customer will not import or use any data within the System that issubject to the US International Traffic Arms Regulations. United States exportclassification information for JMP software and its affiliates is available atjmp.com/export.JMP and all other JMP Statistical Discovery LLC product or service names areregistered trademarks or trademarks of SAS Institute Inc. in the USA and othercountries. ® indicates USA registration. Other brand and product names areregistered trademarks or trademarks of their respective companies.==============================================================================*/

```

#### Simple

```jsl

JMPClinicalStudyManagerAPI:addStudy(	"Nicardipine",	"C:\ProgramData\JMP\JMPClinical\19\Clinical\Sample Data\Nicardipine\SDTM",	{},	"C:\ProgramData\JMP\JMPClinical\19\Clinical\Sample Data\Nicardipine\ADaM",	{}, 1);

```

### JMPClinicalStudyManagerAPI:addValueOrderDomain

**Syntax:** JMPClinicalStudyManagerAPI:addValueOrderDomain(studies, domain}, {default local)

**Description:** Registers a domain with the custom value order and color system, for the given studies and domain.

 \*

 \* studies - list - names (Strings) of the studies -OR- String - name of the study

 \* domain - String - name of the domain to add

 \*

 \* return - none

 \*

 \* CAUTION: Be sure that the domain name is valid. All custom domains registered with this function

 \*   will be unregistered the next time the study is refreshed or updated with a new snapshot.

```jsl

JMPClinicalStudyManagerAPI:addValueOrderDomain( "Nicardipine", "ZZ" );JMPClinicalStudyManagerAPI:getValueOrderDomains( "Nicardipine" );

```

### JMPClinicalStudyManagerAPI:addValueOrderVariable

**Syntax:** JMPClinicalStudyManagerAPI:addValueOrderVariable(studies, domain, variable, values = {})

**Description:** Registers a variable with the custom value order and color system, for the given studies and domain.

 \*

 \* studies - list - names (Strings) of the studies -OR- String - name of the study

 \* domain - String - name of the domain

 \* variable - String - name of the variable to add

 \* values (optional) - list - names of the values to add

 \*

 \* return - none

 \*

 \* CAUTION: Be sure that the domain name, its variables, and its values are all valid. All

 \*   custom domains, variables, and values registered with this function will be unregistered

 \*   the next time the study is refreshed or updated with a new snapshot.

```jsl

JMPClinicalStudyManagerAPI:addValueOrderVariable(	"Nicardipine",	"ZZ",	"ZZVAR",	{"ZZ VALUE 1", "ZZ VALUE 2"});JMPClinicalStudyManagerAPI:getValueOrderDomainVariables( "Nicardipine", "ZZ" );

```

### JMPClinicalStudyManagerAPI:applyAllTreatmentValueOrder

**Syntax:** JMPClinicalStudyManagerAPI:applyAllTreatmentValueOrder(studies, domain, variable, applyOrder = 0, applyColor = 1)

**Description:** Copies the value order preferences from one treatment variable to all, in variables registered by the custom value order and color system.

 \*

 \* studies - list - names (Strings) of the studies -OR- String - name of the study

 \* domain - String - name of the domain from which to copy from

 \* variable - String - name of the variable from which to copy from

 \* applyOrder - integer - specifies (0) do not copy order preferences, (1) copy order preferences

 \* applyColor - integer - specifies (0) do not copy color preferences, (1) copy color preferences

 \*

 \* return - none

```jsl

JMPClinicalStudyManagerAPI:applyAllTreatmentValueOrder( "Nicardipine", "ADSL", "ARM", 1, 1 );Show(	JMPClinicalStudyManagerAPI	:getValueOrderVariableLegendPreview( "Nicardipine", "ADSL", "ARM", 2 ),	JMPClinicalStudyManagerAPI	:getValueOrderVariableLegendPreview(		"Nicardipine", "ADSL", "TRT01P", 2	));

```

### JMPClinicalStudyManagerAPI:deleteStudies

**Syntax:** JMPClinicalStudyManagerAPI:deleteStudies(studyNames, keepOnDelete="PREF"}, {default local)

**Description:** Deletes the studies from the current configuration (use the JMPClinicalBatchConfiguration environment variable).

 \*

 \* studyNames - String, or List of Strings - name of the study, or names of the studies, to delete

 \* keepOnDelete - String - "PREF" (default) honor the preference for keeping notes even after delete, "NO" override the preference and do not keep notes, "YES" override the preference and keep notes

 \*

 \* return - N/A

#### Batch

```jsl

/* * Use the following environment variables to control elements of the batch execution  * set JMPClinicalBatchMode=true                    options include: true, debug * set JMPClinicalBatchLogPath=%CD%\                the path where the log file should be written * set JMPClinicalBatchConfiguration=Default        the configuration to use. if not specified, the last configuration used interactively will be used  * set JMPClinicalBatchCurrentStudy=                the study to use for Review Builder operations (not used by the JMPClinicalStudyManagerAPI)*/exitJMPClinicalBatch = Function( {},	{},	Save Log(		Get Environment Variable( "JMPClinicalBatchLogPath" ) ||		"JMPClinicalBatchLog.log"	);	Exit(););JMPClinicalStudyManagerAPI:deleteStudies( {"APIStudyName"} );exitJMPClinicalBatch();/*===================================================================================Copyright © 2025 JMP Statistical Discovery LLC, Cary, NC, USA. All rights reserved.JMP STATISTICAL DISCOVERY LLC ("JMP") PERMITS THE USE OF THIS COMPUTER SOFTWARECODE ("CODE") ON AN AS-IS BASIS AND AUTHORIZES YOU TO USE THE CODE SUBJECT TOTHE TERMS LISTED HEREIN. BY USING THE CODE, YOU AGREE TO THESE TERMS. YOUR USEOF THE CODE IS AT YOUR OWN RISK. JMP MAKES NO REPRESENTATION OR WARRANTY,EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, WARRANTIES OFMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND TITLE,WITH RESPECT TO THE CODE.You may use the Code solely as part of a software product you currently havelicensed from JMP, JMP's parent company, SAS Institute Inc. ("SAS US") or oneof SAS' subsidiaries (together with SAS US, "SAS") or authorized agents (the"Software"), and not for any other purpose. The Code is designed to eithercorrect an error in the Software or to add functionality to the Software buthas not necessarily been tested. Accordingly, JMP makes no representation orwarranty that the Code (1) will operate error-free or (2) will not contain anyviruses or other applications or executables (including, without limitation,any "trap doors," "worms" and "time bombs") that will degrade or infect anysoftware product that you license from JMP or any other software or yournetwork or systems. JMP is under no obligation to maintain, support, orcontinue to distribute the Code.Neither JMP nor its licensors shall be liable to you or any third party for anygeneral, special, direct, indirect, consequential, incidental, or other damageswhatsoever arising out of or related to your use or inability to use the Code,even if JMP has been advised of the possibility of such damages. Except asotherwise provided above, the Code is governed by the same agreement thatgoverns the Software. If you do not have an existing agreement with JMP or SASgoverning the Software, you may not use the Code.US export laws and regulations apply to the Code and any other JMP-providedtechnology ("Controlled Material"). The Controlled Material originates from theUnited States. Customer agrees to comply with these and other applicable exportand import laws and regulations, except as prohibited or penalized by law("Trade Law"). Customer warrants that Customer and its users are not: (a)prohibited by Trade Law from accessing Controlled Material without USgovernment approval; (b) located in or under control of any country or otherterritory subject to general export or trade embargo under Trade Law; or (c)engaged in any of the following end-uses: nuclear, chemical or biologicalweapons; nuclear facilities not under International Atomic Energy Agencysafeguards; missiles or unmanned aerial vehicles capable of long-range use orweapons delivery, military training or assistance, military or intelligenceend-use in Russia or in any country in Country Group D:5 of the United StatesExport Administration Regulations; deep water, Arctic offshore or shale oil orgas exploration involving Russia or Russian companies, or Russian energy exportpipelines. Customer will not import or use any data within the System that issubject to the US International Traffic Arms Regulations. United States exportclassification information for JMP software and its affiliates is available atjmp.com/export.JMP and all other JMP Statistical Discovery LLC product or service names areregistered trademarks or trademarks of SAS Institute Inc. in the USA and othercountries. ® indicates USA registration. Other brand and product names areregistered trademarks or trademarks of their respective companies.==============================================================================*/

```

#### Simple

```jsl

JMPClinicalStudyManagerAPI:deleteStudies( "Nicardipine" );

```

### JMPClinicalStudyManagerAPI:deleteValueOrderDomain

**Syntax:** JMPClinicalStudyManagerAPI:deleteValueOrderDomain(studies, domain}, {default local)

**Description:** Unregisters a domain with the custom value order and color system, for the given studies and domain.

 \*

 \* studies - list - names (Strings) of the studies -OR- String - name of the study

 \* domain - String - name of the domain to delete

 \*

 \* return - none

 \*

 \* CAUTION: Be sure that the domain name is valid. All factory domains unregistered with this

 \*   function will be registered the next time the study is refreshed or updated with a new

 \*   snapshot.

```jsl

JMPClinicalStudyManagerAPI:deleteValueOrderDomain( "Nicardipine", "ZZ" );JMPClinicalStudyManagerAPI:getValueOrderDomains( "Nicardipine" );

```

### JMPClinicalStudyManagerAPI:deleteValueOrderVariable

**Syntax:** JMPClinicalStudyManagerAPI:deleteValueOrderVariable(studies, domain, variable, values = {})

**Description:** Unregisters a variable with the custom value order and color system, for the given studies and domain.

 \*

 \* studies - list - names (Strings) of the studies -OR- String - name of the study

 \* domain - String - name of the domain

 \* variable - String - name of the variable to delete

 \* values (optional) - list - names of the values to delete (if any values are specified, only these values (and not the variable) will be deleted)

 \*

 \* return - none

 \*

 \* CAUTION: Be sure that the domain name, its variables, and its values are all valid. All

 \*   factory domains, variables, and values unregistered with this function will be registered

 \*   the next time the study is refreshed or updated with a new snapshot.

```jsl

JMPClinicalStudyManagerAPI:deleteValueOrderVariable( "Nicardipine", "ZZ", "ZZVAR" );JMPClinicalStudyManagerAPI:getValueOrderDomainVariables( "Nicardipine", "ZZ" );

```

### JMPClinicalStudyManagerAPI:getADaMFolder

**Syntax:** JMPClinicalStudyManagerAPI:getADaMFolder(study)

**Description:** Returns the path of the ADaM folder for the given study.

 \*

 \* study - String - name of the study

 \*

 \* return - a String of the path for the ADaM folder

```jsl

JMPClinicalStudyManagerAPI:getADaMFolder(	JMPClinicalStudyManagerAPI:getCurrentStudy());

```

### JMPClinicalStudyManagerAPI:getAllStudyPreferences

**Syntax:** JMPClinicalStudyManagerAPI:getAllStudyPreferences(study)

**Description:** Returns all study preferences for the given study.

 \*

 \* study - String - name of the study

 \*

 \* return - an associative arrays of all preferences for the given study

```jsl

JMPClinicalStudyManagerAPI:getAllStudyPreferences( JMPClinicalStudyManagerAPI:getCurrentStudy() );

```

### JMPClinicalStudyManagerAPI:getCreatedBy

**Syntax:** JMPClinicalStudyManagerAPI:getCreatedBy(study)

**Description:** Returns the userid that created the given study.

 \*

 \* study - String - name of the study

 \*

 \* return - a String of the userid that added the study

```jsl

JMPClinicalStudyManagerAPI:getCreatedBy(	JMPClinicalStudyManagerAPI:getCurrentStudy());

```

### JMPClinicalStudyManagerAPI:getCurrentStudy

**Syntax:** JMPClinicalStudyManagerAPI:getCurrentStudy()

**Description:** Returns the name of the current study.

 \*

 \* return - if there is a current study, the study name (a string); otherwise Empty().

```jsl

JMPClinicalStudyManagerAPI:getCurrentStudy();

```

### JMPClinicalStudyManagerAPI:getDomainList

**Syntax:** JMPClinicalStudyManagerAPI:getDomainList(study)

**Description:** Returns the list of domains for the given study.

 \*

 \* study - String - name of the study

 \*

 \* return - a list of Strings of the domains

```jsl

JMPClinicalStudyManagerAPI:getDomainList(	JMPClinicalStudyManagerAPI:getCurrentStudy());

```

### JMPClinicalStudyManagerAPI:getInitialDate

**Syntax:** JMPClinicalStudyManagerAPI:getInitialDate(study)

**Description:** Returns the numeric date the given study was added.

 \*

 \* study - String - name of the study

 \*

 \* return - a Number (date). Use asDate(...) to get date representation

```jsl

As Date(	JMPClinicalStudyManagerAPI:getInitialDate(		JMPClinicalStudyManagerAPI:getCurrentStudy()	));

```

### JMPClinicalStudyManagerAPI:getLastUpdatedBy

**Syntax:** JMPClinicalStudyManagerAPI:getLastUpdatedBy(study)

**Description:** Returns the userid that last updated the given study.

 \*

 \* study - String - name of the study

 \*

 \* return - a String of the userid that lasy updated the study

```jsl

JMPClinicalStudyManagerAPI:getLastUpdatedBy(	JMPClinicalStudyManagerAPI:getCurrentStudy());

```

### JMPClinicalStudyManagerAPI:getLastUpdatedDate

**Syntax:** JMPClinicalStudyManagerAPI:getLastUpdatedDate(study)

**Description:** Returns the numeric date the given study was last modified.

 \*

 \* study - String - name of the study

 \*

 \* return - a Number (date). Use asDate(...) to get date representation

```jsl

As Date(	JMPClinicalStudyManagerAPI	:getLastUpdatedDate( JMPClinicalStudyManagerAPI:getCurrentStudy() ));

```

### JMPClinicalStudyManagerAPI:getPartialDatesEndDateImputationMethod

**Syntax:** JMPClinicalStudyManagerAPI:getPartialDatesEndDateImputationMethod(study)

**Description:** Returns the advanced option.

 \*

 \* study - String - name of the study

 \*

 \* return - a String of the advanced option

```jsl

JMPClinicalStudyManagerAPI:getPartialDatesEndDateImputationMethod(	JMPClinicalStudyManagerAPI:getCurrentStudy());

```

### JMPClinicalStudyManagerAPI:getPartialDatesStartDateImputationMethod

**Syntax:** JMPClinicalStudyManagerAPI:getPartialDatesStartDateImputationMethod(study)

**Description:** Returns the advanced option.

 \*

 \* study - String - name of the study

 \*

 \* return - a String of the advanced option

```jsl

JMPClinicalStudyManagerAPI:getPartialDatesStartDateImputationMethod(	JMPClinicalStudyManagerAPI:getCurrentStudy());

```

### JMPClinicalStudyManagerAPI:getSDTMFolder

**Syntax:** JMPClinicalStudyManagerAPI:getSDTMFolder(study)

**Description:** Returns the path of the SDTM folder for the given study.

 \*

 \* study - String - name of the study

 \*

 \* return - a String of the path for the SDTM folder

```jsl

JMPClinicalStudyManagerAPI:getSDTMFolder(	JMPClinicalStudyManagerAPI:getCurrentStudy());

```

### JMPClinicalStudyManagerAPI:getSelectedADaMDomains

**Syntax:** JMPClinicalStudyManagerAPI:getSelectedADaMDomains(study)

**Description:** Returns the list of selected ADaM domains for the given study.

 \*

 \* study - String - name of the study

 \*

 \* return - a List of the selected domains for the ADaM folder

```jsl

JMPClinicalStudyManagerAPI:getSelectedADaMDomains( JMPClinicalStudyManagerAPI:getCurrentStudy() );

```

### JMPClinicalStudyManagerAPI:getSelectedSDTMDomains

**Syntax:** JMPClinicalStudyManagerAPI:getSelectedSDTMDomains(study)

**Description:** Returns the list of selected SDTM domains for the given study.

 \*

 \* study - String - name of the study

 \*

 \* return - a List of the selected domains for the SDTM folder

```jsl

JMPClinicalStudyManagerAPI:getSelectedSDTMDomains( JMPClinicalStudyManagerAPI:getCurrentStudy() );

```

### JMPClinicalStudyManagerAPI:getSizeOnDisk

**Syntax:** JMPClinicalStudyManagerAPI:getSizeOnDisk(study)

**Description:** Returns the number of MB on disk for all domains registered for the given study.

 \*

 \* study - String - name of the study

 \*

 \* return - a number that is the number of MB used by the data files on disk for the given study

```jsl

JMPClinicalStudyManagerAPI:getSizeOnDisk(	JMPClinicalStudyManagerAPI:getCurrentStudy());

```

### JMPClinicalStudyManagerAPI:getSnapshotNumber

**Syntax:** JMPClinicalStudyManagerAPI:getSnapshotNumber(study)

**Description:** Returns number for the snapshot of the given study.

 \*

 \* study - String - name of the study

 \*

 \* return - a number of the snapshot. If snapshots aren&apos;t enabled, 0 is returned.

```jsl

JMPClinicalStudyManagerAPI:getSnapshotNumber(	JMPClinicalStudyManagerAPI:getCurrentStudy());

```

### JMPClinicalStudyManagerAPI:getStudyDayAnchorDateForStudyDayCalculation

**Syntax:** JMPClinicalStudyManagerAPI:getStudyDayAnchorDateForStudyDayCalculation(study)

**Description:** Returns the advanced option.

 \*

 \* study - String - name of the study

 \*

 \* return - a String of the advanced option

```jsl

JMPClinicalStudyManagerAPI:getStudyDayAnchorDateForStudyDayCalculation(	JMPClinicalStudyManagerAPI:getCurrentStudy());

```

### JMPClinicalStudyManagerAPI:getStudyDayValueDerivation

**Syntax:** JMPClinicalStudyManagerAPI:getStudyDayValueDerivation(study)

**Description:** Returns the advanced option.

 \*

 \* study - String - name of the study

 \*

 \* return - a String of the advanced option

```jsl

JMPClinicalStudyManagerAPI:getStudyDayValueDerivation( JMPClinicalStudyManagerAPI:getCurrentStudy() );

```

### JMPClinicalStudyManagerAPI:getStudyExists

**Syntax:** JMPClinicalStudyManagerAPI:getStudyExists(study)

**Description:** Returns >=1 if study exists, 0 otherwise.

 \*

 \* study - String - name of the study

 \*

 \* return - an integer

```jsl

JMPClinicalStudyManagerAPI:getStudyExists( "Nicardipine" );

```

### JMPClinicalStudyManagerAPI:getStudyList

**Syntax:** JMPClinicalStudyManagerAPI:getStudyList()

**Description:** Gets the list of studies for the current configuration (use the JMPClinicalBatchConfiguration environment variable)

 \*

 \* return - a List of the names of the studies

```jsl

JMPClinicalStudyManagerAPI:getStudyList();

```

### JMPClinicalStudyManagerAPI:getStudyPreference

**Syntax:** JMPClinicalStudyManagerAPI:getStudyPreference(study, preference)

**Description:** Returns the given study preference for the given study.

 \*

 \* study - String - name of the study

 \* preference - String - name of the preference

 \*

 \* return - a <variable type> of the given preference for the given study

```jsl

JMPClinicalStudyManagerAPI:getStudyPreference(	"Nicardipine", "objRefNS:treatcb");

```

### JMPClinicalStudyManagerAPI:getTestResultsLoadOnly

**Syntax:** JMPClinicalStudyManagerAPI:getTestResultsLoadOnly(study)

**Description:** Returns the advanced option.

 \*

 \* study - String - name of the study

 \*

 \* return - a String of the advanced option

```jsl

JMPClinicalStudyManagerAPI:getTestResultsLoadOnly( JMPClinicalStudyManagerAPI:getCurrentStudy() );

```

### JMPClinicalStudyManagerAPI:getValueOrderDomainLabel

**Syntax:** JMPClinicalStudyManagerAPI:getValueOrderDomainLabel(study, domain)

**Description:** Returns the domain label registered by the custom value order and color system, for the given study and domain.

 \*

 \* study - String - name of the study

 \* domain - String - name of the domain

 \*

 \* return - a String of the domain label

```jsl

JMPClinicalStudyManagerAPI:getValueOrderDomainLabel( "Nicardipine", "LB" );

```

### JMPClinicalStudyManagerAPI:getValueOrderDomainVariables

**Syntax:** JMPClinicalStudyManagerAPI:getValueOrderDomainVariables(study, domain)

**Description:** Returns the list of variables registered by the custom value order and color system, for the given study and domain.

 \*

 \* study - String - name of the study

 \* domain - String - name of the domain

 \*

 \* return - a list of variables

```jsl

JMPClinicalStudyManagerAPI:getValueOrderDomainVariables( "Nicardipine", "LB" );

```

### JMPClinicalStudyManagerAPI:getValueOrderDomains

**Syntax:** JMPClinicalStudyManagerAPI:getValueOrderDomains(study)

**Description:** Returns the list of domains registered by the custom value order and color system, for the given study.

 \*

 \* study - String - name of the study

 \*

 \* return - a list of domains

```jsl

JMPClinicalStudyManagerAPI:getValueOrderDomains( "Nicardipine" );

```

### JMPClinicalStudyManagerAPI:getValueOrderValueColorOverride

**Syntax:** JMPClinicalStudyManagerAPI:getValueOrderValueColorOverride(study, domain, variable, value, returnRGB = 0)

**Description:** Returns any value color override of the value of the variable registered by the custom value order and color system, for the given study, domain, variable, and value.

 \*

 \* study - String - name of the study

 \* domain - String - name of the domain

 \* variable - String - name of the variable

 \* value - String - name of the value

 \* returnRGB - integer - if 0 (default), returns JMP internal color value (integer); if 1, returns RGB ({red, green, blue}) color values (three numbers) in the 0-to-1 range; if 2, returns RGB in the 0-to-255 range

 \*

 \* return - a number of the color override for the value (if an override does not exist for the value, missing (.) is returned)

```jsl

JMPClinicalStudyManagerAPI:getValueOrderValueColorOverride(	"Nicardipine", "ADSL", "TRT01P", "Placebo", 2);

```

### JMPClinicalStudyManagerAPI:getValueOrderVariableColorOverrides

**Syntax:** JMPClinicalStudyManagerAPI:getValueOrderVariableColorOverrides(study, domain, variable, returnRGB = 0)

**Description:** Returns the value color overrides of the variable registered by the custom value order and color system, for the given study, domain, and variable.

 \*

 \* study - String - name of the study

 \* domain - String - name of the domain

 \* variable - String - name of the variable

 \* returnRGB - integer - if 0 (default), returns JMP internal color values (single integers); if 1, returns RGB ({red, green, blue}) color values (three numbers) in the 0-to-1 range; if 2, returns RGB in the 0-to-255 range

 \*

 \* return - an associative array (variable value (String), color (number)) of the color overrides

```jsl

JMPClinicalStudyManagerAPI:getValueOrderVariableColorOverrides( "Nicardipine", "ADSL", "TRT01P", 2 );

```

### JMPClinicalStudyManagerAPI:getValueOrderVariableColorTheme

**Syntax:** JMPClinicalStudyManagerAPI:getValueOrderVariableColorTheme(study, domain, variable)

**Description:** Returns the value color theme of the variable registered by the custom value order and color system, for the given study, domain, and variable.

 \*

 \* study - String - name of the study

 \* domain - String - name of the domain

 \* variable - String - name of the variable

 \*

 \* return - a String of the color theme name

```jsl

JMPClinicalStudyManagerAPI:getValueOrderVariableColorTheme( "Nicardipine", "LB", "JMPC_ANRIND" );

```

### JMPClinicalStudyManagerAPI:getValueOrderVariableLabel

**Syntax:** JMPClinicalStudyManagerAPI:getValueOrderVariableLabel(study, domain, variable)

**Description:** Returns the variable label registered by the custom value order and color system, for the given study, domain, and variable.

 \*

 \* study - String - name of the study

 \* domain - String - name of the domain

 \* variable - String - name of the variable

 \*

 \* return - a String of the variable label

```jsl

JMPClinicalStudyManagerAPI:getValueOrderVariableLabel( "Nicardipine", "LB", "JMPC_ANRIND" );

```

### JMPClinicalStudyManagerAPI:getValueOrderVariableLegendPreview

**Syntax:** JMPClinicalStudyManagerAPI:getValueOrderVariableLegendPreview(study, domain, variable, returnRGB = 0)

**Description:** Returns the value order and colors of the variable registered by the custom value order and color system, for the given study, domain, and variable.

 \*

 \* study - String - name of the study

 \* domain - String - name of the domain

 \* variable - String - name of the variable

 \* returnRGB - integer - if 0 (default), returns JMP internal color value (integer); if 1, returns RGB ({red, green, blue}) color values (three numbers) in the 0-to-1 range; if 2, returns RGB in the 0-to-255 range

 \*

 \* return - an ordered list (according to value order) of associative arrays specifying color (variable value (String), color (number))

```jsl

JMPClinicalStudyManagerAPI:getValueOrderVariableLegendPreview( "Nicardipine", "LB", "JMPC_ANRIND", 2 );

```

### JMPClinicalStudyManagerAPI:getValueOrderVariableSortState

**Syntax:** JMPClinicalStudyManagerAPI:getValueOrderVariableSortState(study, domain, variable)

**Description:** Returns the sort state of value order of the variable registered by the custom value order and color system, for the given study, domain, and variable.

 \*

 \* study - String - name of the study

 \* domain - String - name of the domain

 \* variable - String - name of the variable

 \*

 \* return - a String of the value order sort state

```jsl

JMPClinicalStudyManagerAPI:getValueOrderVariableSortState( "Nicardipine", "LB", "JMPC_ANRIND" );

```

### JMPClinicalStudyManagerAPI:getValueOrderVariableValueOrder

**Syntax:** JMPClinicalStudyManagerAPI:getValueOrderVariableValueOrder(study, domain, variable)

**Description:** Returns the value order of the variable registered by the custom value order and color system, for the given study, domain, and variable.

 \*

 \* study - String - name of the study

 \* domain - String - name of the domain

 \* variable - String - name of the variable

 \*

 \* return - a list of the value order

```jsl

JMPClinicalStudyManagerAPI:getValueOrderVariableValueOrder( "Nicardipine", "LB", "JMPC_ANRIND" );

```

### JMPClinicalStudyManagerAPI:loadStudyADSLDataTable

**Syntax:** JMPClinicalStudyManagerAPI:loadStudyADSLDataTable(study)

**Description:** Loads the ADSL table into memory.

 \*

 \* study - String - name of the study

 \*

 \* return - Table Reference - data table reference for the ADSL table for the study

 \*

 \* throws - exception if study specified doesn&apos;t exist

```jsl

JMPClinicalStudyManagerAPI:loadStudyADSLDataTable( JMPClinicalStudyManagerAPI:getCurrentStudy() );

```

### JMPClinicalStudyManagerAPI:refreshStudies

**Syntax:** JMPClinicalStudyManagerAPI:refreshStudies(studyNames = {})

**Description:** Refreshes the metadata of the studies in the current configuration (use the JMPClinicalBatchConfiguration environment variable).

 \*

 \* studyNames - String, or List of Strings - name of the study, or names of the studies, to refresh

 \*

 \* return - N/A

#### Batch

```jsl

/* * Use the following environment variables to control elements of the batch execution  * set JMPClinicalBatchMode=true                    options include: true, debug * set JMPClinicalBatchLogPath=%CD%\                the path where the log file should be written * set JMPClinicalBatchConfiguration=Default        the configuration to use. if not specified, the last configuration used interactively will be used  * set JMPClinicalBatchCurrentStudy=                the study to use for Review Builder operations (not used by the JMPClinicalStudyManagerAPI)*/exitJMPClinicalBatch = Function( {},	{},	Save Log(		Get Environment Variable( "JMPClinicalBatchLogPath" ) ||		"JMPClinicalBatchLog.log"	);	Exit(););JMPClinicalStudyManagerAPI:refreshStudies( {"APIStudyName"} );exitJMPClinicalBatch();/*===================================================================================Copyright © 2025 JMP Statistical Discovery LLC, Cary, NC, USA. All rights reserved.JMP STATISTICAL DISCOVERY LLC ("JMP") PERMITS THE USE OF THIS COMPUTER SOFTWARECODE ("CODE") ON AN AS-IS BASIS AND AUTHORIZES YOU TO USE THE CODE SUBJECT TOTHE TERMS LISTED HEREIN. BY USING THE CODE, YOU AGREE TO THESE TERMS. YOUR USEOF THE CODE IS AT YOUR OWN RISK. JMP MAKES NO REPRESENTATION OR WARRANTY,EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, WARRANTIES OFMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND TITLE,WITH RESPECT TO THE CODE.You may use the Code solely as part of a software product you currently havelicensed from JMP, JMP's parent company, SAS Institute Inc. ("SAS US") or oneof SAS' subsidiaries (together with SAS US, "SAS") or authorized agents (the"Software"), and not for any other purpose. The Code is designed to eithercorrect an error in the Software or to add functionality to the Software buthas not necessarily been tested. Accordingly, JMP makes no representation orwarranty that the Code (1) will operate error-free or (2) will not contain anyviruses or other applications or executables (including, without limitation,any "trap doors," "worms" and "time bombs") that will degrade or infect anysoftware product that you license from JMP or any other software or yournetwork or systems. JMP is under no obligation to maintain, support, orcontinue to distribute the Code.Neither JMP nor its licensors shall be liable to you or any third party for anygeneral, special, direct, indirect, consequential, incidental, or other damageswhatsoever arising out of or related to your use or inability to use the Code,even if JMP has been advised of the possibility of such damages. Except asotherwise provided above, the Code is governed by the same agreement thatgoverns the Software. If you do not have an existing agreement with JMP or SASgoverning the Software, you may not use the Code.US export laws and regulations apply to the Code and any other JMP-providedtechnology ("Controlled Material"). The Controlled Material originates from theUnited States. Customer agrees to comply with these and other applicable exportand import laws and regulations, except as prohibited or penalized by law("Trade Law"). Customer warrants that Customer and its users are not: (a)prohibited by Trade Law from accessing Controlled Material without USgovernment approval; (b) located in or under control of any country or otherterritory subject to general export or trade embargo under Trade Law; or (c)engaged in any of the following end-uses: nuclear, chemical or biologicalweapons; nuclear facilities not under International Atomic Energy Agencysafeguards; missiles or unmanned aerial vehicles capable of long-range use orweapons delivery, military training or assistance, military or intelligenceend-use in Russia or in any country in Country Group D:5 of the United StatesExport Administration Regulations; deep water, Arctic offshore or shale oil orgas exploration involving Russia or Russian companies, or Russian energy exportpipelines. Customer will not import or use any data within the System that issubject to the US International Traffic Arms Regulations. United States exportclassification information for JMP software and its affiliates is available atjmp.com/export.JMP and all other JMP Statistical Discovery LLC product or service names areregistered trademarks or trademarks of SAS Institute Inc. in the USA and othercountries. ® indicates USA registration. Other brand and product names areregistered trademarks or trademarks of their respective companies.==============================================================================*/

```

#### Simple

```jsl

JMPClinicalStudyManagerAPI:refreshStudies( {"Nicardipine"} );

```

### JMPClinicalStudyManagerAPI:resetAllValueOrderInfo

**Syntax:** JMPClinicalStudyManagerAPI:resetAllValueOrderInfo(studies)

**Description:** Resets all information in the custom value order and color system, for the given studies.

 \*

 \* studies - list - names (Strings) of the studies -OR- String - name of the study

 \*

 \* return - none

 \*

 \* CAUTION: All custom value order and color settings for the specified studies will be reset

 \*   to factory defaults.

```jsl

JMPClinicalStudyManagerAPI:resetAllValueOrderInfo( "Nicardipine" );

```

### JMPClinicalStudyManagerAPI:setAllStudyPreferences

**Syntax:** JMPClinicalStudyManagerAPI:setAllStudyPreferences(study, preferenceValueAssociation)

**Description:** Sets all preferences for the given study.

 \*

 \* study - String - name of the study

 \* preferenceValueAssociation - Associative Array - names and values of preferences

 \*

 \* return - N/A

```jsl

studyPreferences = JMPClinicalStudyManagerAPI:getAllStudyPreferences( "Nicardipine" );JMPClinicalStudyManagerAPI:setAllStudyPreferences( "Nicardipine", studyPreferences );

```

### JMPClinicalStudyManagerAPI:setCurrentStudy

**Syntax:** JMPClinicalStudyManagerAPI:setCurrentStudy(study)

**Description:** Sets the current study to the one specified.

 \*

 \* study - a string containing the name of the study to set as the current study,

 \* or Empty() to set the current study to <None>

 \*

 \* return - if the current study was succesfully set, 1; otherwise 0.

```jsl

JMPClinicalStudyManagerAPI:setCurrentStudy( "Nicardipine" );JMPClinicalStudyManagerAPI:getCurrentStudy();

```

### JMPClinicalStudyManagerAPI:setStudyPreference

**Syntax:** JMPClinicalStudyManagerAPI:setStudyPreference(study, preference, value)

**Description:** Sets the given study preference to the given value for the given study.

 \*

 \* study - String - name of the study

 \* preference - String - name of the preference

 \* value - <variable type> - value of the preference

 \*

 \* return - N/A

```jsl

JMPClinicalStudyManagerAPI:setStudyPreference(	"Nicardipine", "objRefNS:treatcb", "ARM");JMPClinicalStudyManagerAPI:getStudyPreference(	"Nicardipine", "objRefNS:treatcb");

```

### JMPClinicalStudyManagerAPI:setValueOrderDomainLabel

**Syntax:** JMPClinicalStudyManagerAPI:setValueOrderDomainLabel(studies, domain, newDomainLabel)

**Description:** Sets the domain label registered by the custom value order and color system, for the given studies and domain.

 \*

 \* studies - list - names (Strings) of the studies -OR- String - name of the study

 \* domain - String - name of the domain

 \* newDomainLabel - String - new label of the domain

 \*

 \* return - none

 \*

 \* CAUTION: This function should only be used when registering custom domains to the value

 \*   order and color system. Be sure that the domain name is valid and the new domain label

 \*   is correct.

```jsl

JMPClinicalStudyManagerAPI:setValueOrderDomainLabel( "Nicardipine", "LB", "Labs" );JMPClinicalStudyManagerAPI:getValueOrderDomainLabel( "Nicardipine", "LB" );

```

### JMPClinicalStudyManagerAPI:setValueOrderValueColorOverride

**Syntax:** JMPClinicalStudyManagerAPI:setValueOrderValueColorOverride(studies, domain, variable, value, override)

**Description:** Sets the value color override of the value of the variable registered by the custom value order and color system, for the given studies, domain, variable, and value.

 \*

 \* studies - list - names (Strings) of the studies -OR- String - name of the study

 \* domain - String - name of the domain

 \* variable - String - name of the variable

 \* value - String - name of the value

 \* override - number - the color value of the specified level value (either internal value (integer) or RGB (list of three numbers) or color name (String))

 

 \* return - none

```jsl

JMPClinicalStudyManagerAPI:setValueOrderValueColorOverride(	"Nicardipine",	"ADSL",	"TRT01P",	"Placebo",	{200, 0, 0});JMPClinicalStudyManagerAPI:getValueOrderValueColorOverride(	"Nicardipine", "ADSL", "TRT01P", "Placebo", 2);

```

### JMPClinicalStudyManagerAPI:setValueOrderVariableColorOverrides

**Syntax:** JMPClinicalStudyManagerAPI:setValueOrderVariableColorOverrides(studies, domain, variable, overrides)

**Description:** Sets the value color overrides of the variable registered by the custom value order and color system, for the given studies, domain, and variable.

 \*

 \* studies - list - names (Strings) of the studies -OR- String - name of the study

 \* domain - String - name of the domain -OR- "_All_" to specify all domains and variables in each specified study

 \* variable - String - name of the variable (ignored if domain argument = 1)

 \* overrides - associative array - level names (keys) and color values (values) of the level color overrides (either internal values (integer) or RGB (list of three numbers) or color name (String)) -OR- String specifying a special action: "_Clear_" clear (no overrides), "_Reset_" reset to default, "_All_" mark all existing level colors as overrides

 \*

 \* return - none

```jsl

JMPClinicalStudyManagerAPI:setValueOrderVariableColorOverrides(	"Nicardipine",	"ADSL",	"TRT01P",	["Placebo" => {200, 0, 0}]);JMPClinicalStudyManagerAPI:getValueOrderVariableColorOverrides( "Nicardipine", "ADSL", "TRT01P", 2 );

```

### JMPClinicalStudyManagerAPI:setValueOrderVariableColorTheme

**Syntax:** JMPClinicalStudyManagerAPI:setValueOrderVariableColorTheme(studies, domain, variable, theme)

**Description:** Sets the value color theme of the variable registered by the custom value order and color system, for the given studies, domain, and variable.

 \*

 \* studies - list - names (Strings) of the studies -OR- String - name of the study

 \* domain - String - name of the domain -OR- "_All_" to specify all domains and variables in each specified study

 \* variable - String - name of the variable (ignored if domain argument = "_All_")

 \* theme - String - name of the color theme -OR- a special action: "_Reset_": reset to default

 \*

 \* return - none

```jsl

JMPClinicalStudyManagerAPI:setValueOrderVariableColorTheme(	"Nicardipine", "LB", "JMPC_ANRIND", "JMP Dark");JMPClinicalStudyManagerAPI:getValueOrderVariableColorTheme( "Nicardipine", "LB", "JMPC_ANRIND" );

```

### JMPClinicalStudyManagerAPI:setValueOrderVariableLabel

**Syntax:** JMPClinicalStudyManagerAPI:setValueOrderVariableLabel(studies, domain, variable, newVariableLabel)

**Description:** Sets the variable label registered by the custom value order and color system, for the given studies domain, and variable.

 \*

 \* studies - list - names (Strings) of the studies -OR- String - name of the study

 \* domain - String - name of the domain

 \* variable - String - name of the variable

 \* newVariableLabel - String - new label of the variable

 \*

 \* return - none

 \*

 \* CAUTION: This function should only be used when registering custom domains and variables

 \*   to the value order and color system. Be sure that the domain and variable names are valid

 \*   and the new variable label is correct.

```jsl

JMPClinicalStudyManagerAPI:setValueOrderVariableLabel(	"Nicardipine", "LB", "JMPC_ANRIND", "Indicator for Reference Range");JMPClinicalStudyManagerAPI:getValueOrderVariableLabel( "Nicardipine", "LB", "JMPC_ANRIND" );

```

### JMPClinicalStudyManagerAPI:setValueOrderVariableSortState

**Syntax:** JMPClinicalStudyManagerAPI:setValueOrderVariableSortState(studies, domain, variable, sortstate)

**Description:** Sets the sort state of value order of the variable registered by the custom value order and color system, for the given studies, domain, and variable.

 \*

 \* studies - list - names (Strings) of the studies -OR- String - name of the study

 \* domain - String - name of the domain -OR- "_All_" to specify all domains and variables in each specified study

 \* variable - String - name of the variable (ignored if domain argument = 1)

 \* sortstate - String - name of the value order sort state -OR- a special action: "_Reset_" reset to default

 

 \* return - none

 \* side effect - also sorts the level values accordingly

```jsl

JMPClinicalStudyManagerAPI:setValueOrderVariableSortState(	"Nicardipine", "LB", "JMPC_ANRIND", "Natural Descending");JMPClinicalStudyManagerAPI:getValueOrderVariableSortState( "Nicardipine", "LB", "JMPC_ANRIND" );

```

### JMPClinicalStudyManagerAPI:setValueOrderVariableValueOrder

**Syntax:** JMPClinicalStudyManagerAPI:setValueOrderVariableValueOrder(studies, domain, variable, valueorder)

**Description:** Sets the value order of the variable registered by the custom value order and color system, for the given studies, domain, and variable.

 \*

 \* studies - list - names (Strings) of the studies -OR- String - name of the study

 \* domain - String - name of the domain

 \* variable - String - name of the variable

 \* valueorder - list - level names of the variable in any specified order (all levels must be present and must match case exactly)

 

 \* return - none

 \* side effect - also sets the sort state to "Ad Hoc"

```jsl

JMPClinicalStudyManagerAPI:setValueOrderVariableValueOrder(	"Nicardipine",	"LB",	"JMPC_ANRIND",	{"HIGH", "NORMAL", "LOW"});JMPClinicalStudyManagerAPI:getValueOrderVariableValueOrder( "Nicardipine", "LB", "JMPC_ANRIND" );

```

### JMPClinicalStudyManagerAPI:swapValueColor

**Syntax:** JMPClinicalStudyManagerAPI:swapValueColor(studies, domain, variable, value1, value2)

**Description:** Swaps the value color of two levels within a variable registered by the custom value order and color system, for the given studies, domain, and variable.

 \*

 \* studies - list - names (Strings) of the studies -OR- String - name of the study

 \* domain - String - name of the domain

 \* variable - String - name of the variable

 \* value1 - String - name of one value

 \* value2 - String - name of another value

 \*

 \* return - none

```jsl

JMPClinicalStudyManagerAPI:swapValueColor(	"Nicardipine", "LB", "JMPC_ANRIND", "LOW", "HIGH");JMPClinicalStudyManagerAPI:getValueOrderVariableLegendPreview( "Nicardipine", "LB", "JMPC_ANRIND", 2 );

```

### JMPClinicalStudyManagerAPI:updateSnapStudy

**Syntax:** JMPClinicalStudyManagerAPI:updateSnapStudy(selectedStudy="", snapshotNumber=., newSdtmSourceDataFolder="", newSelectedSDTMDomains={}, newAdamSourceDataFolder="", newSelectedADaMDomains={}, cb_trt_val=1, cb_spid_val=1, cb_seq_val=1, cb_dom_val=1, cb_grp_val=1, cb_ref_val=1, cb_lnk_val=1, cb_lnkg_val=1)

**Description:** Update the snapshot of the study in the current configuration (use the JMPClinicalBatchConfiguration environment variable).

 \*

 \* selectedStudy - String - name of the study

 \* snapshotNumber - integer - the new snapshot number

 \* newSdtmSourceDataFolder - String - path to the new SDTM data folder. Use "" if no SDTM data (at least one of newSdtmSourceDataFolder or newAdamSourceDataFolder must be specified)

 \* newSelectedSDTMDomains - List - list of the selected domains for the new SDTM folder. Use {} to take all possible domains

 \* newAdamSourceDataFolder - String - path to the new ADaM data folder. Use "" if no ADaM data (at least one of newSdtmSourceDataFolder or newAdamSourceDataFolder must be specified)

 \* newSelectedADaMDomains - List - list of the selected domains for the new ADaM folder. Use {} to take all possible domains

 \* cb_trt_val - integer - the checkbox state (1 = checked, 0 = unchecked) of "Exclude comparisons of Treatment Variables"

 \* cb_spid_val - integer - the checkbox state (1 = checked, 0 = unchecked) of "Exclude comparisons of Sponsor-Defined Identifier"

 \* cb_seq_val - integer - the checkbox state (1 = checked, 0 = unchecked) of "Exclude comparisons of Sequence Number"

 \* cb_dom_val - integer - the checkbox state (1 = checked, 0 = unchecked) of "Exclude comparisons of Domain"

 \* cb_grp_val - integer - the checkbox state (1 = checked, 0 = unchecked) of "Exclude comparisons of Group ID"

 \* cb_ref_val - integer - the checkbox state (1 = checked, 0 = unchecked) of "Exclude comparisons of Reference ID"

 \* cb_lnk_val - integer - the checkbox state (1 = checked, 0 = unchecked) of "Exclude comparisons of Link ID"

 \* cb_lnkg_val - integer - the checkbox state (1 = checked, 0 = unchecked) of "Exclude comparisons of Link Group ID"

 \*

 \* return - N/A

#### Batch

```jsl

/* * Use the following environment variables to control elements of the batch execution  * set JMPClinicalBatchMode=true                    options include: true, debug * set JMPClinicalBatchLogPath=%CD%\                the path where the log file should be written * set JMPClinicalBatchConfiguration=Default        the configuration to use. if not specified, the last configuration used interactively will be used  * set JMPClinicalBatchCurrentStudy=                the study to use for Review Builder operations (not used by the JMPClinicalStudyManagerAPI)*/exitJMPClinicalBatch = Function( {},	{},	Save Log(		Get Environment Variable( "JMPClinicalBatchLogPath" ) ||		"JMPClinicalBatchLog.log"	);	Exit(););JMPClinicalStudyManagerAPI:updateSnapStudy(	"APIStudyName",	JMPClinicalStudyManagerAPI:getSnapshotNumber( "APIStudyName" ) + 1,	Convert File Path(		"$CLINICAL_HOME" || "/Sample Data/NicardipineAbbr/SDTM"	),	{},	"",	{});exitJMPClinicalBatch();/*===================================================================================Copyright © 2025 JMP Statistical Discovery LLC, Cary, NC, USA. All rights reserved.JMP STATISTICAL DISCOVERY LLC ("JMP") PERMITS THE USE OF THIS COMPUTER SOFTWARECODE ("CODE") ON AN AS-IS BASIS AND AUTHORIZES YOU TO USE THE CODE SUBJECT TOTHE TERMS LISTED HEREIN. BY USING THE CODE, YOU AGREE TO THESE TERMS. YOUR USEOF THE CODE IS AT YOUR OWN RISK. JMP MAKES NO REPRESENTATION OR WARRANTY,EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, WARRANTIES OFMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND TITLE,WITH RESPECT TO THE CODE.You may use the Code solely as part of a software product you currently havelicensed from JMP, JMP's parent company, SAS Institute Inc. ("SAS US") or oneof SAS' subsidiaries (together with SAS US, "SAS") or authorized agents (the"Software"), and not for any other purpose. The Code is designed to eithercorrect an error in the Software or to add functionality to the Software buthas not necessarily been tested. Accordingly, JMP makes no representation orwarranty that the Code (1) will operate error-free or (2) will not contain anyviruses or other applications or executables (including, without limitation,any "trap doors," "worms" and "time bombs") that will degrade or infect anysoftware product that you license from JMP or any other software or yournetwork or systems. JMP is under no obligation to maintain, support, orcontinue to distribute the Code.Neither JMP nor its licensors shall be liable to you or any third party for anygeneral, special, direct, indirect, consequential, incidental, or other damageswhatsoever arising out of or related to your use or inability to use the Code,even if JMP has been advised of the possibility of such damages. Except asotherwise provided above, the Code is governed by the same agreement thatgoverns the Software. If you do not have an existing agreement with JMP or SASgoverning the Software, you may not use the Code.US export laws and regulations apply to the Code and any other JMP-providedtechnology ("Controlled Material"). The Controlled Material originates from theUnited States. Customer agrees to comply with these and other applicable exportand import laws and regulations, except as prohibited or penalized by law("Trade Law"). Customer warrants that Customer and its users are not: (a)prohibited by Trade Law from accessing Controlled Material without USgovernment approval; (b) located in or under control of any country or otherterritory subject to general export or trade embargo under Trade Law; or (c)engaged in any of the following end-uses: nuclear, chemical or biologicalweapons; nuclear facilities not under International Atomic Energy Agencysafeguards; missiles or unmanned aerial vehicles capable of long-range use orweapons delivery, military training or assistance, military or intelligenceend-use in Russia or in any country in Country Group D:5 of the United StatesExport Administration Regulations; deep water, Arctic offshore or shale oil orgas exploration involving Russia or Russian companies, or Russian energy exportpipelines. Customer will not import or use any data within the System that issubject to the US International Traffic Arms Regulations. United States exportclassification information for JMP software and its affiliates is available atjmp.com/export.JMP and all other JMP Statistical Discovery LLC product or service names areregistered trademarks or trademarks of SAS Institute Inc. in the USA and othercountries. ® indicates USA registration. Other brand and product names areregistered trademarks or trademarks of their respective companies.==============================================================================*/

```

#### Simple

```jsl

JMPClinicalStudyManagerAPI:updateSnapStudy(	"Nicardipine",	JMPClinicalStudyManagerAPI:getSnapshotNumber( "Nicardipine" ) + 1,	"C:\ProgramData\JMP\JMPClinical\19\Clinical\Sample Data\Nicardipine\SDTM",	{},	"C:\ProgramData\JMP\JMPClinical\19\Clinical\Sample Data\Nicardipine\ADaM",	{}, 1);

```

### jg:domain

**Syntax:** jg:domain( parent=empty(), _name="", _label="", _origin={}, _fileTypeOriginal="", _fileTypeWorking="", _model="", _class="", _creationDateOriginal=., _creationDateWorking=., _modificationDateOriginal=., _modificationDateWorking=., _fileSizeOriginal=., _fileSizeWorking=., _nTotalRows=0, _flagsTrue={})

**Description:** Creates a new JMP Clinical domain object.

```jsl

dom = jg:domain( Empty(), "dom", "Domain" );

```

### jg:notebook

**Syntax:** jg:notebook( parent=empty())

**Description:** Creates a new JMP Clinical notebook object.

```jsl

notebook = jg:notebook( Empty() );

```

### jg:study

**Syntax:** jg:study( _name="", _label="", _origin={}, _sdtmFolderOriginal="", _selectedSdtmDomains={}, _adamFolderOriginal="", _selectedAdamDomains={}, _snapshotNumber=0, _initialDate=., _createdBy="", _lastUpdatedDate=., _lastUpdatedBy="", _releaseVersion="", _testResultsLoadOnly="", _partialDatesStartDateImputationMethod="", _partialDatesEndDateImputationMethod="", _studyDayValueDerivation="", _studyDayAnchorDateForStudyDayCalculation="", _flagsTrue={"saveJMPTables", "compressJMPTables", "compressJMPColumns", "clinical"})

**Description:** Creates a new JMP Clinical study object.

```jsl

s = jg:study( "study" );

```

### jg:variable

**Syntax:** jg:variable( parent=empty(), _name="", _label="", _origin={}, _type="", _colmin=., _colmax=., _valuelist={}, _key=0, _class="", _nMissingRows=0, _flagsTrue={})

**Description:** Creates a new JMP Clinical variable object.

```jsl

var = jg:variable( Empty(), "var", "Variable" );

```

### processNS:runReport

**Syntax:** processNS:runReport()

**Description:** Comprises the statements to execute in a JMP Clinical custom report.

**CustomReportExample1**

```jsl

// The header section for report title and category.processNS:label = "Custom Report Example 1";processNS:cdiscClass = "Custom Reports";// The main report code.processNS:runReport = Function( {},	{Default Local}, 	// Surfaces a built-in JMP platform on the current data table (tadsl) and opens in a new window.	Graph Builder());/*===================================================================================Copyright © 2025 JMP Statistical Discovery LLC, Cary, NC, USA. All rights reserved.JMP STATISTICAL DISCOVERY LLC ("JMP") PERMITS THE USE OF THIS COMPUTER SOFTWARECODE ("CODE") ON AN AS-IS BASIS AND AUTHORIZES YOU TO USE THE CODE SUBJECT TOTHE TERMS LISTED HEREIN. BY USING THE CODE, YOU AGREE TO THESE TERMS. YOUR USEOF THE CODE IS AT YOUR OWN RISK. JMP MAKES NO REPRESENTATION OR WARRANTY,EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, WARRANTIES OFMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND TITLE,WITH RESPECT TO THE CODE.You may use the Code solely as part of a software product you currently havelicensed from JMP, JMP's parent company, SAS Institute Inc. ("SAS US") or oneof SAS' subsidiaries (together with SAS US, "SAS") or authorized agents (the"Software"), and not for any other purpose. The Code is designed to eithercorrect an error in the Software or to add functionality to the Software buthas not necessarily been tested. Accordingly, JMP makes no representation orwarranty that the Code (1) will operate error-free or (2) will not contain anyviruses or other applications or executables (including, without limitation,any "trap doors," "worms" and "time bombs") that will degrade or infect anysoftware product that you license from JMP or any other software or yournetwork or systems. JMP is under no obligation to maintain, support, orcontinue to distribute the Code.Neither JMP nor its licensors shall be liable to you or any third party for anygeneral, special, direct, indirect, consequential, incidental, or other damageswhatsoever arising out of or related to your use or inability to use the Code,even if JMP has been advised of the possibility of such damages. Except asotherwise provided above, the Code is governed by the same agreement thatgoverns the Software. If you do not have an existing agreement with JMP or SASgoverning the Software, you may not use the Code.US export laws and regulations apply to the Code and any other JMP-providedtechnology ("Controlled Material"). The Controlled Material originates from theUnited States. Customer agrees to comply with these and other applicable exportand import laws and regulations, except as prohibited or penalized by law("Trade Law"). Customer warrants that Customer and its users are not: (a)prohibited by Trade Law from accessing Controlled Material without USgovernment approval; (b) located in or under control of any country or otherterritory subject to general export or trade embargo under Trade Law; or (c)engaged in any of the following end-uses: nuclear, chemical or biologicalweapons; nuclear facilities not under International Atomic Energy Agencysafeguards; missiles or unmanned aerial vehicles capable of long-range use orweapons delivery, military training or assistance, military or intelligenceend-use in Russia or in any country in Country Group D:5 of the United StatesExport Administration Regulations; deep water, Arctic offshore or shale oil orgas exploration involving Russia or Russian companies, or Russian energy exportpipelines. Customer will not import or use any data within the System that issubject to the US International Traffic Arms Regulations. United States exportclassification information for JMP software and its affiliates is available atjmp.com/export.JMP and all other JMP Statistical Discovery LLC product or service names areregistered trademarks or trademarks of SAS Institute Inc. in the USA and othercountries. ® indicates USA registration. Other brand and product names areregistered trademarks or trademarks of their respective companies.==============================================================================*/

```

**CustomReportExample2**

```jsl

// The header section for report title and category.processNS:label = "Custom Report Example 2";processNS:cdiscClass = "Custom Reports";// The main report code.processNS:runReport = Function( {},	{Default Local}, 	// Obtain the path to the study's ADSL data set.	path = jg:getPath( "/user/clinical/data/adam", "ADSL.jmp" );	If( !File Exists( path ), 		// A custom error check.		processNS:fatalError(			"This report requires an ARM variable in the ADSL dataset.", 1		)	, 		// Open the study's ADSL data set.		objRefNS:dt = Open( path, invisible );		// Send content to the output pane.		processNS:setReportOutput(			V List Box(				// Create a Graph Builder object, hiding the control panel, using ARM as an X variable, displayed as a pie ring.				objRefNS:gb = Graph Builder(					Show Control Panel( 0 ),					Variables( X( :ARM ) ),					Elements( Pie( X, Legend( 3 ), Pie Style( "Ring" ) ) )				)			)		);		// Keep track of data sets created in this report so that they are automatically closed when the report tab is closed.		processNS:addDataTableReference(			"Custom Report Example Data", "objRefNS:dt"		);	););0;/*===================================================================================Copyright © 2025 JMP Statistical Discovery LLC, Cary, NC, USA. All rights reserved.JMP STATISTICAL DISCOVERY LLC ("JMP") PERMITS THE USE OF THIS COMPUTER SOFTWARECODE ("CODE") ON AN AS-IS BASIS AND AUTHORIZES YOU TO USE THE CODE SUBJECT TOTHE TERMS LISTED HEREIN. BY USING THE CODE, YOU AGREE TO THESE TERMS. YOUR USEOF THE CODE IS AT YOUR OWN RISK. JMP MAKES NO REPRESENTATION OR WARRANTY,EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, WARRANTIES OFMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND TITLE,WITH RESPECT TO THE CODE.You may use the Code solely as part of a software product you currently havelicensed from JMP, JMP's parent company, SAS Institute Inc. ("SAS US") or oneof SAS' subsidiaries (together with SAS US, "SAS") or authorized agents (the"Software"), and not for any other purpose. The Code is designed to eithercorrect an error in the Software or to add functionality to the Software buthas not necessarily been tested. Accordingly, JMP makes no representation orwarranty that the Code (1) will operate error-free or (2) will not contain anyviruses or other applications or executables (including, without limitation,any "trap doors," "worms" and "time bombs") that will degrade or infect anysoftware product that you license from JMP or any other software or yournetwork or systems. JMP is under no obligation to maintain, support, orcontinue to distribute the Code.Neither JMP nor its licensors shall be liable to you or any third party for anygeneral, special, direct, indirect, consequential, incidental, or other damageswhatsoever arising out of or related to your use or inability to use the Code,even if JMP has been advised of the possibility of such damages. Except asotherwise provided above, the Code is governed by the same agreement thatgoverns the Software. If you do not have an existing agreement with JMP or SASgoverning the Software, you may not use the Code.US export laws and regulations apply to the Code and any other JMP-providedtechnology ("Controlled Material"). The Controlled Material originates from theUnited States. Customer agrees to comply with these and other applicable exportand import laws and regulations, except as prohibited or penalized by law("Trade Law"). Customer warrants that Customer and its users are not: (a)prohibited by Trade Law from accessing Controlled Material without USgovernment approval; (b) located in or under control of any country or otherterritory subject to general export or trade embargo under Trade Law; or (c)engaged in any of the following end-uses: nuclear, chemical or biologicalweapons; nuclear facilities not under International Atomic Energy Agencysafeguards; missiles or unmanned aerial vehicles capable of long-range use orweapons delivery, military training or assistance, military or intelligenceend-use in Russia or in any country in Country Group D:5 of the United StatesExport Administration Regulations; deep water, Arctic offshore or shale oil orgas exploration involving Russia or Russian companies, or Russian energy exportpipelines. Customer will not import or use any data within the System that issubject to the US International Traffic Arms Regulations. United States exportclassification information for JMP software and its affiliates is available atjmp.com/export.JMP and all other JMP Statistical Discovery LLC product or service names areregistered trademarks or trademarks of SAS Institute Inc. in the USA and othercountries. ® indicates USA registration. Other brand and product names areregistered trademarks or trademarks of their respective companies.==============================================================================*/

```

**CustomReportExample3**

```jsl

// The header section for report title, category, and icon.processNS:label = "Custom Report Example 3";processNS:cdiscClass = "Custom Reports";processNS:icon ="/install/clinical/documentation/icons/clinical/DonutGraph3d.gif";processNS:description ="This report creates a pie chart of values from the selected ADSL variable.";// The main report code.processNS:runReport = Function( {},	{Default Local}, 	// Including functions shared across reports.	Include(		Convert File Path(			"$CLINICAL_HOME/JSLFiles/DataPrep.JSL",			absolute,			windows		)	);	objRefNS:in_adsl = prepADSL();		// Change JMP names to SAS Labels.	jg:setColumnJMPNamesToSASLabels( objRefNS:in_adsl );		// Linking an analysis data table to adsl. This allows the Review Subject Filter to filter the report.	reportRefNS:linkAnalysisTableToADSLTable( objRefNS:in_adsl );		// Apply value order and color preferences to an analysis data table.	jg:ApplyValueOrderToTables(		Eval List( {objRefNS:in_adsl} ),		objRefNS:StudyName	);		// Retrieve the column names.	objRefNS:columnNames = objRefNS:in_adsl << getColumnNames( "string" );		// Send content to the output pane.	processNS:setReportOutput(		V List Box(			// Create a Graph Builder object, hiding the control panel, using the first column in the			//  data table as the initially selected column, displayed as a pie ring, offering a			//  column switcher to choose from any column in the data table.			objRefNS:gb = Graph Builder(				Show Control Panel( 0 ),				Variables( X( Eval( objRefNS:columnNames[1] ) ) ),				Elements( Pie( X, Legend( 3 ), Pie Style( "Ring" ) ) ),				Column Switcher(					Eval( objRefNS:columnNames[1] ),					Eval( objRefNS:columnNames )				)			)		)	);		// Collapse empty Options panel.	objRefNS:mainhlb << ClosePanel( 1 );		// Keep track of data sets created in this report so that they are automatically closed when the report tab is closed.	processNS:addDataTableReference(		"Custom Report Example Data", "objRefNS:in_adsl"	);		// Send these objects to JMP Live.	processNS:defineStaticReportContent( {objRefNS:gb} );		// Send these objects to the static report.	processNS:defineLiveReportContent( {{objRefNS:gb}} ););0;/*===================================================================================Copyright © 2025 JMP Statistical Discovery LLC, Cary, NC, USA. All rights reserved.JMP STATISTICAL DISCOVERY LLC ("JMP") PERMITS THE USE OF THIS COMPUTER SOFTWARECODE ("CODE") ON AN AS-IS BASIS AND AUTHORIZES YOU TO USE THE CODE SUBJECT TOTHE TERMS LISTED HEREIN. BY USING THE CODE, YOU AGREE TO THESE TERMS. YOUR USEOF THE CODE IS AT YOUR OWN RISK. JMP MAKES NO REPRESENTATION OR WARRANTY,EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, WARRANTIES OFMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND TITLE,WITH RESPECT TO THE CODE.You may use the Code solely as part of a software product you currently havelicensed from JMP, JMP's parent company, SAS Institute Inc. ("SAS US") or oneof SAS' subsidiaries (together with SAS US, "SAS") or authorized agents (the"Software"), and not for any other purpose. The Code is designed to eithercorrect an error in the Software or to add functionality to the Software buthas not necessarily been tested. Accordingly, JMP makes no representation orwarranty that the Code (1) will operate error-free or (2) will not contain anyviruses or other applications or executables (including, without limitation,any "trap doors," "worms" and "time bombs") that will degrade or infect anysoftware product that you license from JMP or any other software or yournetwork or systems. JMP is under no obligation to maintain, support, orcontinue to distribute the Code.Neither JMP nor its licensors shall be liable to you or any third party for anygeneral, special, direct, indirect, consequential, incidental, or other damageswhatsoever arising out of or related to your use or inability to use the Code,even if JMP has been advised of the possibility of such damages. Except asotherwise provided above, the Code is governed by the same agreement thatgoverns the Software. If you do not have an existing agreement with JMP or SASgoverning the Software, you may not use the Code.US export laws and regulations apply to the Code and any other JMP-providedtechnology ("Controlled Material"). The Controlled Material originates from theUnited States. Customer agrees to comply with these and other applicable exportand import laws and regulations, except as prohibited or penalized by law("Trade Law"). Customer warrants that Customer and its users are not: (a)prohibited by Trade Law from accessing Controlled Material without USgovernment approval; (b) located in or under control of any country or otherterritory subject to general export or trade embargo under Trade Law; or (c)engaged in any of the following end-uses: nuclear, chemical or biologicalweapons; nuclear facilities not under International Atomic Energy Agencysafeguards; missiles or unmanned aerial vehicles capable of long-range use orweapons delivery, military training or assistance, military or intelligenceend-use in Russia or in any country in Country Group D:5 of the United StatesExport Administration Regulations; deep water, Arctic offshore or shale oil orgas exploration involving Russia or Russian companies, or Russian energy exportpipelines. Customer will not import or use any data within the System that issubject to the US International Traffic Arms Regulations. United States exportclassification information for JMP software and its affiliates is available atjmp.com/export.JMP and all other JMP Statistical Discovery LLC product or service names areregistered trademarks or trademarks of SAS Institute Inc. in the USA and othercountries. ® indicates USA registration. Other brand and product names areregistered trademarks or trademarks of their respective companies.==============================================================================*/

```

**CustomReportExample4**

```jsl

// The header section for report title, category, icon, and help.processNS:label = "Custom Report Example 4";processNS:labelSkeleton = "Custom Report with Variables {{^1}}, Example 4"; // For dynamically renaming the report with a substring. See the 'renameReport' examples.processNS:reportSelectorTab = 1; // 1: Display on report selector; 0: Do not display on report selector.processNS:drillDown = 0; // 1: This report can also be used as a drilldown; 0: This report cannot also be used as a drilldown.processNS:cdiscClass = "Custom Reports";processNS:icon ="/install/clinical/documentation/icons/clinical/DistributionAnalysis.gif";processNS:documentation = "https://www.jmp.com/";processNS:description ="This report demonstrates a basic requirements declaration, switches data table columns names to SAS Labels, " ||"applies value order and color preferences, adds a drill down button, writes notes to the JMP log, checks for a custom error " ||"condition, declares a function for use within a widget script, defines an assortment of custom widgets, creates a report filter, " ||"tracks data tables so that they are automatically closed when the report is closed, and defines content to publish to Create Static " || "Report and Create Live Report.";// Specify any variable requirements here. Those requirements not met will automatically prevent the report from running.processNS:requirements = ["_ONE_OR_MORE_DEMOGRAPHICS_" => {{"ARM"}}];// The main report code.processNS:runReport = Function( {},	{Default Local}, 	// Including functions shared across reports.	Include(		Convert File Path(			"$CLINICAL_HOME/JSLFiles/DataPrep.JSL",			absolute,			windows		)	);	objRefNS:in_adsl = prepADSL();		// Change JMP names to SAS Labels.	jg:setColumnJMPNamesToSASLabels( objRefNS:in_adsl );		// Linking an analysis data table to adsl. This allows the Review Subject Filter to filter the report.	reportRefNS:linkAnalysisTableToADSLTable( objRefNS:in_adsl );		// Apply value order and color preferences to an analysis data table.	jg:ApplyValueOrderToTables(		Eval List( {objRefNS:in_adsl} ),		objRefNS:StudyName	);		// Add predefined drill downs to the report.	processNS:addDrillDowns( {"ShowSubjects"} );		// Working with requirements return. (Not necessary for this report.)	processNS:note(		"Datasets in _ONE_OR_MORE_DEMOGRAPHICS_: " ||		Char(			objRefNS:requirementsReturn["domains_wild"][			"_ONE_OR_MORE_DEMOGRAPHICS_"]["present"]		)	);	processNS:note(		"Datasets passing requirements for _ONE_OR_MORE_DEMOGRAPHICS_: " ||		Char(			objRefNS:requirementsReturn["domains_wild"][			"_ONE_OR_MORE_DEMOGRAPHICS_"]["pass"]		)	);	domainsPass = objRefNS:requirementsReturn["domains_wild"][	"_ONE_OR_MORE_DEMOGRAPHICS_"]["pass"];	For( i = 1, i <= N Items( domainsPass ), i++,		processNS:note(			"Required chosen variables in " || domainsPass[i] || ": " ||			Char(				objRefNS:requirementsReturn["domains"][domainsPass[i]][				"required_chosen"]			)		)	);		// A custom error check. (Not necessary for this report. Set to 1 to simulate an error.)	If( 0,		processNS:fatalError(			"Cannot run this report because condition X was not met.", 1		)	);		// Creating a function for use within this report only.	objRefNS:createResults = Function( {cols = {}},		{Default Local},		distCode = "objRefNS:in_adsl << Distribution(";		For( i = 1, i <= N Items( cols ), i++,			If( i > 1, distCode ||= "," );			distCode ||= Eval Insert(				"\[				Nominal Distribution(Column(:Name("^cols[i]^")))			]\"			);		);		distCode ||= ")";		Eval(			Parse(				Eval Insert(					"\[			// Send content to the output pane.			processNS:setReportOutput(				VListBox(					// Create a Distribution object using the code built in distCode.					objRefNS:db = ^distCode^				)			);		]\"				)			)		);	);		// Calling a widget constructor (in non-inline form, with a script that runs after the user changes the value, running the script initially).	processNS	:makeCreateAdditionalDistributionsForSelectedVariablesWidget(		0, // 0 is non-inline form; use 1 for inline form		// script		Expr(			Expr(				Expr(			// Retrieve the current values this widget, convert them into JMP names, and store these in objRefNS:tadslCols.					objRefNS:tadslCols = jg					:getColumnJMPNames(						jg:getWidgetValue(							"objRefNS:CreateAdditionalDistributionsForSelectedVariablesolb"						), objRefNS:in_adsl					);						// Call the function defined in this report.					objRefNS:createResults( objRefNS:tadslCols );						// Renaming a report.					//processNS:renameReportTitleDomain("ADSL"); // Honors configuration display preferences for domains.					processNS					:renameReportTitleSubstring(						Char( objRefNS:tadslCols )					);			//processNS:renameReportTitle("This entirely replaces the original report title."); // Freeform -- does not use processNS:labelSkeleton.								// When a widget value change requires the entire report to rerun, issue the following, but be sure to set the runScriptInitial					//  argument in the widget constructor to 0 to prevent an endless loop.					//processNS:rerunReport();				)			)		),		1 // 0 is do not run the script initially; 1 is run the script initially	);		// Example custom widget creation.	processNS:makeWidget(		["ref" => "objRefNS:w1", "class" => "ComboBoxClass"]	);	processNS:makeWidget(		["ref" => "objRefNS:w2",		"class" => "ComboBoxClass",		"label" => "ComboBoxClass Widget 2",		"values" => {"A~a", "B~b", "C~c"}, "initialvalue" => "B"]	);	processNS:makeWidget(		["ref" => "objRefNS:w3",		"class" => "ComboBoxClass",		"label" => "ComboBoxClass Widget 3",		"valuesdataref" => "objRefNS:in_adsl"]	);	processNS:makeWidget(		["ref" => "objRefNS:w4",		"class" => "CalendarFieldClass",		"label" => "CalendarFieldClass Widget",		"initialvalue" => "01/01/2015",		"selectedformat" => "d/m/y"]	);	processNS:makeWidget(		["ref" => "objRefNS:w5",		"class" => "CheckboxClass",		"label" => "CheckboxClass Widget",		"initialvalue" => "No",		"scriptd" => Expr(			Expr(				Expr(					If( !((objRefNS:w5):isChecked()),						Try(							(objRefNS:w6):inputContainer <<							Visibility( "collapse" )						),						Try(							(objRefNS:w6):inputContainer <<							Visibility( "visible" )						)					)				)			)		)]	);	processNS:makeWidget(		["ref" => "objRefNS:w6",		"class" => "FileAndFolderFieldClass",		"label" => "FileAndFolderFieldClass Widget",		"selectionoptions" => ["selectDirectory" => 1], "scriptd" =>		Expr(			Expr(				Expr(					If( !((objRefNS:w5):isChecked()),						Try(							(objRefNS:w6):inputContainer <<							Visibility( "collapse" )						),						Try(							(objRefNS:w6):inputContainer <<							Visibility( "visible" )						)					)				)			)		), "script" => Expr(			Expr(				Expr(					processNS:rerunReport()				)			)		)]	);	processNS:makeWidget(		["ref" => "objRefNS:w7",		"class" => "ListBoxClass",		"label" => "ListBoxClass Widget",		"maxselected" => 2,		"values" => {"A~a", "B~b", "C~c"}, "initialvalue" => {"B", "C"},		"script" => Expr(			Expr(				Expr(					processNS:rerunReport()				)			)		)]	);	processNS:makeWidget(		["ref" => "objRefNS:w8",		"class" => "ManualEntryListBoxClass",		"label" => "ManualEntryListBoxClass Widget"]	);	processNS:makeWidget(		["ref" => "objRefNS:w9",		"class" => "ManualEntryOrderedListBoxClass",		"label" => "ManualEntryOrderedListboxClass Widget",		"initialvalue" => {"a", "b", "c"}, "script" =>		Expr(			Expr(				Expr(					processNS:rerunReport()				)			)		)]	);	processNS:makeWidget(		["ref" => "objRefNS:w10",		"class" => "OrderedListBoxClass",		"label" => "OrderedListBoxClass Widget",		"values" => {"A~a", "B~b", "C~c"}, "displayoption" => 2,		"initialvalue" => {"B"}]	);	processNS:makeWidget(		["ref" => "objRefNS:w11",		"class" => "RadioBoxClass",		"label" => "RadioBoxClass Widget",		"values" => {"a", "b", "c"}, "initialvalue" => "b",		"script" => Expr(			Expr(				Expr(					processNS:rerunReport()				)			)		)]	);	processNS:makeWidget(		["ref" => "objRefNS:w12",		"class" => "SliderFieldClass",		"label" => "SliderFieldClass Widget",		"min" => 10,		"max" => 20,		"script" => Expr(			Expr(				Expr(					processNS:rerunReport()				)			)		)]	);	processNS:makeWidget(		["ref" => "objRefNS:w13",		"class" => "SpinnerFieldClass",		"label" => "SpinnerFieldClass Widget",		"min" => 10,		"max" => 20,		"increment" => 2]	);	processNS:makeWidget(		["ref" => "objRefNS:w14",		"class" => "TextFieldClass",		"label" => "TextFieldClass Widget",		"initialvalue" => "Test",		"script" => Expr(			Expr(				Expr(					processNS:rerunReport()				)			)		)]	);	processNS:makeWidget(		["ref" => "objRefNS:w16",		"class" => "OrderedListBoxClass",		"label" => "OrderedListBoxClass Widget 2",		"valuesdataref" => "objRefNS:in_adsl",		"initialvalue" => {"AGE"}]	);		// Obtain the current internal value from a widget.	processNS:note(		"objRefNS:w2's value is " || Char(			jg:getWidgetValue( "objRefNS:w2" )		) || "."	);		// Obtain the current display value from a widget.	processNS:note(		"objRefNS:w2's value is " || Char(			jg:getWidgetValueAlternate( "objRefNS:w2" )		) || "."	);		// Place the above widget into the Options Data panel.	processNS:appendDataOptions(		V List Box(			// Paste the inputContainer (displaybox) of the widgets in the display tree.			(objRefNS:CreateAdditionalDistributionsForSelectedVariablesolb)			:inputContainer, 			// Example custom widgets created above.			(objRefNS:w1):inputContainer,			(objRefNS:w2):inputContainer,			(objRefNS:w3):inputContainer,			(objRefNS:w4):inputContainer,			(objRefNS:w5):inputContainer,			(objRefNS:w6):inputContainer,			(objRefNS:w7):inputContainer,			(objRefNS:w8):inputContainer,			(objRefNS:w9):inputContainer,			(objRefNS:w10):inputContainer,			(objRefNS:w11):inputContainer,			(objRefNS:w12):inputContainer,			(objRefNS:w13):inputContainer,			(objRefNS:w14):inputContainer, 			// Example custom widget created inline.			processNS:makeWidget(				["ref" => "objRefNS:w15",				"class" => "CheckboxClass",				"label" => "CheckboxClass Widget 2",				"inline" => 1]			),			(objRefNS:w16):inputContainer		),		0	);		// Create a Report Filter.	If( Length( objRefNS:tadslCols ),		objRefNS:ReportDataFilterReferenceList = reportRefNS		:createReportFilter( objRefNS:in_adsl, objRefNS:tadslCols );		// Do not display the filter histograms and bars.		objRefNS:rptfilter = objRefNS:ReportDataFilterReferenceList[2];		objRefNS:rptfilter << Show Histograms and Bars( 0 );	);		// Place the Report Filter in the Options Display panel.	processNS:appendDisplayOptions(		objRefNS:ReportDataFilterReferenceList[1]	);		// Keep track of data sets created in this report so that they are automatically closed when the report tab is closed.	processNS:addDataTableReference(		"Custom Report Example ADSL Data", "objRefNS:in_adsl"	);		// Send these objects to JMP Live.	processNS:defineStaticReportContent( {objRefNS:db} );		// Send these objects to the static report.	processNS:defineLiveReportContent( {{objRefNS:db}} ););0;/*===================================================================================Copyright © 2025 JMP Statistical Discovery LLC, Cary, NC, USA. All rights reserved.JMP STATISTICAL DISCOVERY LLC ("JMP") PERMITS THE USE OF THIS COMPUTER SOFTWARECODE ("CODE") ON AN AS-IS BASIS AND AUTHORIZES YOU TO USE THE CODE SUBJECT TOTHE TERMS LISTED HEREIN. BY USING THE CODE, YOU AGREE TO THESE TERMS. YOUR USEOF THE CODE IS AT YOUR OWN RISK. JMP MAKES NO REPRESENTATION OR WARRANTY,EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, WARRANTIES OFMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND TITLE,WITH RESPECT TO THE CODE.You may use the Code solely as part of a software product you currently havelicensed from JMP, JMP's parent company, SAS Institute Inc. ("SAS US") or oneof SAS' subsidiaries (together with SAS US, "SAS") or authorized agents (the"Software"), and not for any other purpose. The Code is designed to eithercorrect an error in the Software or to add functionality to the Software buthas not necessarily been tested. Accordingly, JMP makes no representation orwarranty that the Code (1) will operate error-free or (2) will not contain anyviruses or other applications or executables (including, without limitation,any "trap doors," "worms" and "time bombs") that will degrade or infect anysoftware product that you license from JMP or any other software or yournetwork or systems. JMP is under no obligation to maintain, support, orcontinue to distribute the Code.Neither JMP nor its licensors shall be liable to you or any third party for anygeneral, special, direct, indirect, consequential, incidental, or other damageswhatsoever arising out of or related to your use or inability to use the Code,even if JMP has been advised of the possibility of such damages. Except asotherwise provided above, the Code is governed by the same agreement thatgoverns the Software. If you do not have an existing agreement with JMP or SASgoverning the Software, you may not use the Code.US export laws and regulations apply to the Code and any other JMP-providedtechnology ("Controlled Material"). The Controlled Material originates from theUnited States. Customer agrees to comply with these and other applicable exportand import laws and regulations, except as prohibited or penalized by law("Trade Law"). Customer warrants that Customer and its users are not: (a)prohibited by Trade Law from accessing Controlled Material without USgovernment approval; (b) located in or under control of any country or otherterritory subject to general export or trade embargo under Trade Law; or (c)engaged in any of the following end-uses: nuclear, chemical or biologicalweapons; nuclear facilities not under International Atomic Energy Agencysafeguards; missiles or unmanned aerial vehicles capable of long-range use orweapons delivery, military training or assistance, military or intelligenceend-use in Russia or in any country in Country Group D:5 of the United StatesExport Administration Regulations; deep water, Arctic offshore or shale oil orgas exploration involving Russia or Russian companies, or Russian energy exportpipelines. Customer will not import or use any data within the System that issubject to the US International Traffic Arms Regulations. United States exportclassification information for JMP software and its affiliates is available atjmp.com/export.JMP and all other JMP Statistical Discovery LLC product or service names areregistered trademarks or trademarks of SAS Institute Inc. in the USA and othercountries. ® indicates USA registration. Other brand and product names areregistered trademarks or trademarks of their respective companies.==============================================================================*/

```

