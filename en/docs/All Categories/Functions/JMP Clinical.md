# JMP Clinical
These functions are available only for use with JMP® Clinical.


### JMPClinicalReviewAPI:closeReviewBuilder

**Syntax:** JMPClinicalReviewAPI:closeReviewBuilder()

**Description:** Closes the current Review Builder instance

 \*

 \* return - N/A

**JMP Version Added:** 19

```jsl

JMPClinicalReviewAPI:closeReviewBuilder();

```

### JMPClinicalReviewAPI:createLiveReport

**Syntax:** JMPClinicalReviewAPI:createLiveReport(connectionName = empty(), space = empty(), publishData = empty(), publishOptimization = empty(), publishNotes = empty(), patientProfilesPublishPopulation = "SELECTED", patientProfilesPublishGraphs = 1, patientProfilesPublishTables = 1}, {default local)

**Description:** Create a web-based JMP Live version of the Review

 \*

 \* connectionName                   => String: the name of the JMP Live Connection

 \* space                            => String: the name of the JMP Live Space to publish to, within the JMP Live Connection

 \* publishData                      => Number: 0 = disallow data to be published, 1 = allow data to be published

 \* publishOptimization              => Number: 1 = best interactivity, 2 = best performance

 \* publishNotes                     => Number: 0 = do not include notes, 1 = include notes

 \* patientProfilesPublishPopulation => String: "SELECTED" = publish selected patients only (default), "ALL" = publish all patients

 \* patientProfilesPublishGraphs     => Number: 0 = do not publish graphs, 1 = publish graphs (default)

 \* patientProfilesPublishTables     => Number: 0 = do not publish tables, 1 = publish tables (default)

 \*

 \* return - URL of the web report

**JMP Version Added:** 19

#### Batch

```jsl

/*
 * Use the following environment variables to control elements of the batch execution: 
 *
 * set JMPClinicalBatchMode=true                    options include: true, debug
 * set JMPClinicalBatchLogPath=%CD%\                the path where the log file should be written
 * set JMPClinicalBatchConfiguration=Default        the configuration to use. if not specified, the last configuration used interactively will be used 
 * set JMPClinicalBatchCurrentStudy=                the study to use for Review Builder operations (not used by the JMPClinicalStudyManagerAPI)
*/

exitJMPClinicalBatch =
Function( {},
	{},
	Save Log(
		Get Environment Variable(
			"JMPClinicalBatchLogPath"
		) || "JMPClinicalBatchLog.log"
	);
	Exit();
);

Show( JMPClinicalReviewAPI:getCurrentStudy() );
JMPClinicalReviewAPI
:openReviewTemplate(
	"C:\ProgramData\JMP\JMPClinical\19\Clinical\ReviewTemplates\Medical Monitoring.jmpcrt",
	1, 0, 1, 0
);
JMPClinicalReviewAPI
:createStaticReport(
	"PDF", 0,
	"C:\JMPClinicalReviewManager\APIReview.pdf",
	"SELECTED", 1, 1
);
JMPClinicalReviewAPI
:createLiveReport(
	Empty(), "_PERSONAL_", 0, 1, 0, "SELECTED", 1, 1
);
JMPClinicalReviewAPI:closeReviewBuilder();
exitJMPClinicalBatch();
/*
===================================================================================

Copyright © 2025 JMP Statistical Discovery LLC, Cary, NC, USA. All rights reserved.

JMP STATISTICAL DISCOVERY LLC ("JMP") PERMITS THE USE OF THIS COMPUTER SOFTWARE
CODE ("CODE") ON AN AS-IS BASIS AND AUTHORIZES YOU TO USE THE CODE SUBJECT TO
THE TERMS LISTED HEREIN. BY USING THE CODE, YOU AGREE TO THESE TERMS. YOUR USE
OF THE CODE IS AT YOUR OWN RISK. JMP MAKES NO REPRESENTATION OR WARRANTY,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND TITLE,
WITH RESPECT TO THE CODE.

You may use the Code solely as part of a software product you currently have
licensed from JMP, JMP's parent company, SAS Institute Inc. ("SAS US") or one
of SAS' subsidiaries (together with SAS US, "SAS") or authorized agents (the
"Software"), and not for any other purpose. The Code is designed to either
correct an error in the Software or to add functionality to the Software but
has not necessarily been tested. Accordingly, JMP makes no representation or
warranty that the Code (1) will operate error-free or (2) will not contain any
viruses or other applications or executables (including, without limitation,
any "trap doors," "worms" and "time bombs") that will degrade or infect any
software product that you license from JMP or any other software or your
network or systems. JMP is under no obligation to maintain, support, or
continue to distribute the Code.

Neither JMP nor its licensors shall be liable to you or any third party for any
general, special, direct, indirect, consequential, incidental, or other damages
whatsoever arising out of or related to your use or inability to use the Code,
even if JMP has been advised of the possibility of such damages. Except as
otherwise provided above, the Code is governed by the same agreement that
governs the Software. If you do not have an existing agreement with JMP or SAS
governing the Software, you may not use the Code.

US export laws and regulations apply to the Code and any other JMP-provided
technology ("Controlled Material"). The Controlled Material originates from the
United States. Customer agrees to comply with these and other applicable export
and import laws and regulations, except as prohibited or penalized by law
("Trade Law"). Customer warrants that Customer and its users are not: (a)
prohibited by Trade Law from accessing Controlled Material without US
government approval; (b) located in or under control of any country or other
territory subject to general export or trade embargo under Trade Law; or (c)
engaged in any of the following end-uses: nuclear, chemical or biological
weapons; nuclear facilities not under International Atomic Energy Agency
safeguards; missiles or unmanned aerial vehicles capable of long-range use or
weapons delivery, military training or assistance, military or intelligence
end-use in Russia or in any country in Country Group D:5 of the United States
Export Administration Regulations; deep water, Arctic offshore or shale oil or
gas exploration involving Russia or Russian companies, or Russian energy export
pipelines. Customer will not import or use any data within the System that is
subject to the US International Traffic Arms Regulations. United States export
classification information for JMP software and its affiliates is available at
jmp.com/export.

JMP and all other JMP Statistical Discovery LLC product or service names are
registered trademarks or trademarks of SAS Institute Inc. in the USA and other
countries. ® indicates USA registration. Other brand and product names are
registered trademarks or trademarks of their respective companies.

==============================================================================
*/

```

#### Simple

```jsl

JMPClinicalReviewAPI
:openReviewTemplate(
	"C:\ProgramData\JMP\JMPClinical\19\Clinical\ReviewTemplates\Medical Monitoring.jmpcrt",
	1, 0, 1, 0
);
JMPClinicalReviewAPI
:createLiveReport(
	Empty(), "_PERSONAL_", 0, 1, 0, "SELECTED", 1, 1
);

```

### JMPClinicalReviewAPI:createStaticReport

**Syntax:** JMPClinicalReviewAPI:createStaticReport(type = empty(), includeNotes = empty(), filePath = empty(), patientProfilesPublishPopulation = "SELECTED", patientProfilesPublishGraphs = 1, patientProfilesPublishTables = 1}, {default local)

**Description:** Create a static version (PDF, RTF, PowerPoint) of the Review

 \*

 \* type                             => String: "PDF", "RTF", or "PowerPoint"

 \* includeNotes                     => Number: 0 = do not include notes, 1 = include notes

 \* filePath                         => String: full file path where to save report. If not specified, the default 

 \*                                       static report location is used - as specified in the configuration as /user/clinical/staticreportpath

 \* patientProfilesPublishPopulation => String: "SELECTED" = publish selected patients only (default), "ALL" = publish all patients

 \* patientProfilesPublishGraphs     => Number: 0 = do not publish graphs, 1 = publish graphs (default)

 \* patientProfilesPublishTables     => Number: 0 = do not publish tables, 1 = publish tables (default)

 \*

 \* return - N/A

**JMP Version Added:** 19

#### Batch

```jsl

/*
 * Use the following environment variables to control elements of the batch execution: 
 *
 * set JMPClinicalBatchMode=true                    options include: true, debug
 * set JMPClinicalBatchLogPath=%CD%\                the path where the log file should be written
 * set JMPClinicalBatchConfiguration=Default        the configuration to use. if not specified, the last configuration used interactively will be used 
 * set JMPClinicalBatchCurrentStudy=                the study to use for Review Builder operations (not used by the JMPClinicalStudyManagerAPI)
*/

exitJMPClinicalBatch =
Function( {},
	{},
	Save Log(
		Get Environment Variable(
			"JMPClinicalBatchLogPath"
		) || "JMPClinicalBatchLog.log"
	);
	Exit();
);

Show( JMPClinicalReviewAPI:getCurrentStudy() );
JMPClinicalReviewAPI
:openReviewTemplate(
	"C:\ProgramData\JMP\JMPClinical\19\Clinical\ReviewTemplates\Medical Monitoring.jmpcrt",
	1, 0, 1, 0
);
JMPClinicalReviewAPI
:createStaticReport(
	"PDF", 0,
	"C:\JMPClinicalReviewManager\APIReview.pdf",
	"SELECTED", 1, 1
);
JMPClinicalReviewAPI
:createLiveReport(
	Empty(), "_PERSONAL_", 0, 1, 0, "SELECTED", 1, 1
);
JMPClinicalReviewAPI:closeReviewBuilder();
exitJMPClinicalBatch();
/*
===================================================================================

Copyright © 2025 JMP Statistical Discovery LLC, Cary, NC, USA. All rights reserved.

JMP STATISTICAL DISCOVERY LLC ("JMP") PERMITS THE USE OF THIS COMPUTER SOFTWARE
CODE ("CODE") ON AN AS-IS BASIS AND AUTHORIZES YOU TO USE THE CODE SUBJECT TO
THE TERMS LISTED HEREIN. BY USING THE CODE, YOU AGREE TO THESE TERMS. YOUR USE
OF THE CODE IS AT YOUR OWN RISK. JMP MAKES NO REPRESENTATION OR WARRANTY,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND TITLE,
WITH RESPECT TO THE CODE.

You may use the Code solely as part of a software product you currently have
licensed from JMP, JMP's parent company, SAS Institute Inc. ("SAS US") or one
of SAS' subsidiaries (together with SAS US, "SAS") or authorized agents (the
"Software"), and not for any other purpose. The Code is designed to either
correct an error in the Software or to add functionality to the Software but
has not necessarily been tested. Accordingly, JMP makes no representation or
warranty that the Code (1) will operate error-free or (2) will not contain any
viruses or other applications or executables (including, without limitation,
any "trap doors," "worms" and "time bombs") that will degrade or infect any
software product that you license from JMP or any other software or your
network or systems. JMP is under no obligation to maintain, support, or
continue to distribute the Code.

Neither JMP nor its licensors shall be liable to you or any third party for any
general, special, direct, indirect, consequential, incidental, or other damages
whatsoever arising out of or related to your use or inability to use the Code,
even if JMP has been advised of the possibility of such damages. Except as
otherwise provided above, the Code is governed by the same agreement that
governs the Software. If you do not have an existing agreement with JMP or SAS
governing the Software, you may not use the Code.

US export laws and regulations apply to the Code and any other JMP-provided
technology ("Controlled Material"). The Controlled Material originates from the
United States. Customer agrees to comply with these and other applicable export
and import laws and regulations, except as prohibited or penalized by law
("Trade Law"). Customer warrants that Customer and its users are not: (a)
prohibited by Trade Law from accessing Controlled Material without US
government approval; (b) located in or under control of any country or other
territory subject to general export or trade embargo under Trade Law; or (c)
engaged in any of the following end-uses: nuclear, chemical or biological
weapons; nuclear facilities not under International Atomic Energy Agency
safeguards; missiles or unmanned aerial vehicles capable of long-range use or
weapons delivery, military training or assistance, military or intelligence
end-use in Russia or in any country in Country Group D:5 of the United States
Export Administration Regulations; deep water, Arctic offshore or shale oil or
gas exploration involving Russia or Russian companies, or Russian energy export
pipelines. Customer will not import or use any data within the System that is
subject to the US International Traffic Arms Regulations. United States export
classification information for JMP software and its affiliates is available at
jmp.com/export.

JMP and all other JMP Statistical Discovery LLC product or service names are
registered trademarks or trademarks of SAS Institute Inc. in the USA and other
countries. ® indicates USA registration. Other brand and product names are
registered trademarks or trademarks of their respective companies.

==============================================================================
*/

```

#### Simple

```jsl

JMPClinicalReviewAPI
:openReviewTemplate(
	"C:\ProgramData\JMP\JMPClinical\19\Clinical\ReviewTemplates\Medical Monitoring.jmpcrt",
	1, 0, 1, 0
);
JMPClinicalReviewAPI
:createStaticReport(
	"PDF", 0,
	"C:\JMPClinicalReviewManager\APIReview.pdf",
	"SELECTED", 1, 1
);
Open( "C:\JMPClinicalReviewManager\APIReview.pdf" );

```

### JMPClinicalReviewAPI:getCurrentStudy

**Syntax:** JMPClinicalReviewAPI:getCurrentStudy()

**Description:** Returns the name of the current study.

 \*

 \* return - if there is a current study, the study name (a string); otherwise Empty().

**JMP Version Added:** 19

```jsl

JMPClinicalReviewAPI:getCurrentStudy();

```

### JMPClinicalReviewAPI:getReviewBuilder

**Syntax:** JMPClinicalReviewAPI:getReviewBuilder(show=1)

**Description:** Gets an instance of a Review Builder. If an instance doesn&apos;t

 \* exist, one will be created.

 \*

 \* show - 1(default) = show the window, 0 = hide the window

 \*

 \* return - an reference to the Review Builder object

**JMP Version Added:** 19

```jsl

JMPClinicalReviewAPI:getReviewBuilder();

```

### JMPClinicalReviewAPI:openReviewTemplate

**Syntax:** JMPClinicalReviewAPI:openReviewTemplate(templatePath, useNewReviewBuilder=1, returnType=0, toleratePre17Template=1, closeReportsWithInexactOptionValueMatches=0)

**Description:** Open a Review Template

 \*

 \* templatePath => String: path to the Review Template to open

 \* useNewReviewBuilder => Number: 

 \*   0 = reuse a review builder instance if one exists, otherwise open a new one

 \*   1 = close any existing review builder instance and open a new one (default)

 \* returnType => Number:

 \*   0 = return a success code (1 if successful, 0 or missing (.) if unsuccessful or cancelled) (default)

 \*   1 = return a reference to the review builder object (behavior prior to JMP Clinical 18.2)

 \* toleratePre17Template => Number: 

 \*   0 = abort the template run if the template predates JMP Clinical 17

 \*   1 = run the template to the extent possible regardless of template version (default)

 \* closeReportsWithInexactOptionValueMatches => Number:

 \*   0 = keep all reports (default)

 \*   1 = close all reports with inexact option value matches

 \*

 \* return:

 \*   if returnType = 0, 1 if successful, 0 or missing (.) if unsuccessful or cancelled

 \*   if returnType = 1, a reference to the review builder object

**JMP Version Added:** 19

#### Batch

```jsl

/*
 * Use the following environment variables to control elements of the batch execution: 
 *
 * set JMPClinicalBatchMode=true                    options include: true, debug
 * set JMPClinicalBatchLogPath=%CD%\                the path where the log file should be written
 * set JMPClinicalBatchConfiguration=Default        the configuration to use. if not specified, the last configuration used interactively will be used 
 * set JMPClinicalBatchCurrentStudy=                the study to use for Review Builder operations (not used by the JMPClinicalStudyManagerAPI)
*/

exitJMPClinicalBatch =
Function( {},
	{},
	Save Log(
		Get Environment Variable(
			"JMPClinicalBatchLogPath"
		) || "JMPClinicalBatchLog.log"
	);
	Exit();
);

Show( JMPClinicalReviewAPI:getCurrentStudy() );
JMPClinicalReviewAPI
:openReviewTemplate(
	"C:\ProgramData\JMP\JMPClinical\19\Clinical\ReviewTemplates\Medical Monitoring.jmpcrt",
	1, 0, 1, 0
);
JMPClinicalReviewAPI
:createStaticReport(
	"PDF", 0,
	"C:\JMPClinicalReviewManager\APIReview.pdf",
	"SELECTED", 1, 1
);
JMPClinicalReviewAPI
:createLiveReport(
	Empty(), "_PERSONAL_", 0, 1, 0, "SELECTED", 1, 1
);
JMPClinicalReviewAPI:closeReviewBuilder();
exitJMPClinicalBatch();
/*
===================================================================================

Copyright © 2025 JMP Statistical Discovery LLC, Cary, NC, USA. All rights reserved.

JMP STATISTICAL DISCOVERY LLC ("JMP") PERMITS THE USE OF THIS COMPUTER SOFTWARE
CODE ("CODE") ON AN AS-IS BASIS AND AUTHORIZES YOU TO USE THE CODE SUBJECT TO
THE TERMS LISTED HEREIN. BY USING THE CODE, YOU AGREE TO THESE TERMS. YOUR USE
OF THE CODE IS AT YOUR OWN RISK. JMP MAKES NO REPRESENTATION OR WARRANTY,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND TITLE,
WITH RESPECT TO THE CODE.

You may use the Code solely as part of a software product you currently have
licensed from JMP, JMP's parent company, SAS Institute Inc. ("SAS US") or one
of SAS' subsidiaries (together with SAS US, "SAS") or authorized agents (the
"Software"), and not for any other purpose. The Code is designed to either
correct an error in the Software or to add functionality to the Software but
has not necessarily been tested. Accordingly, JMP makes no representation or
warranty that the Code (1) will operate error-free or (2) will not contain any
viruses or other applications or executables (including, without limitation,
any "trap doors," "worms" and "time bombs") that will degrade or infect any
software product that you license from JMP or any other software or your
network or systems. JMP is under no obligation to maintain, support, or
continue to distribute the Code.

Neither JMP nor its licensors shall be liable to you or any third party for any
general, special, direct, indirect, consequential, incidental, or other damages
whatsoever arising out of or related to your use or inability to use the Code,
even if JMP has been advised of the possibility of such damages. Except as
otherwise provided above, the Code is governed by the same agreement that
governs the Software. If you do not have an existing agreement with JMP or SAS
governing the Software, you may not use the Code.

US export laws and regulations apply to the Code and any other JMP-provided
technology ("Controlled Material"). The Controlled Material originates from the
United States. Customer agrees to comply with these and other applicable export
and import laws and regulations, except as prohibited or penalized by law
("Trade Law"). Customer warrants that Customer and its users are not: (a)
prohibited by Trade Law from accessing Controlled Material without US
government approval; (b) located in or under control of any country or other
territory subject to general export or trade embargo under Trade Law; or (c)
engaged in any of the following end-uses: nuclear, chemical or biological
weapons; nuclear facilities not under International Atomic Energy Agency
safeguards; missiles or unmanned aerial vehicles capable of long-range use or
weapons delivery, military training or assistance, military or intelligence
end-use in Russia or in any country in Country Group D:5 of the United States
Export Administration Regulations; deep water, Arctic offshore or shale oil or
gas exploration involving Russia or Russian companies, or Russian energy export
pipelines. Customer will not import or use any data within the System that is
subject to the US International Traffic Arms Regulations. United States export
classification information for JMP software and its affiliates is available at
jmp.com/export.

JMP and all other JMP Statistical Discovery LLC product or service names are
registered trademarks or trademarks of SAS Institute Inc. in the USA and other
countries. ® indicates USA registration. Other brand and product names are
registered trademarks or trademarks of their respective companies.

==============================================================================
*/

```

#### Simple

```jsl

JMPClinicalReviewAPI
:openReviewTemplate(
	"C:\ProgramData\JMP\JMPClinical\19\Clinical\ReviewTemplates\Medical Monitoring.jmpcrt",
	1, 0, 1, 0
);

```

### JMPClinicalReviewAPI:setCurrentStudy

**Syntax:** JMPClinicalReviewAPI:setCurrentStudy(study)

**Description:** Sets the current study to the one specified.

 \*

 \* study - a string containing the name of the study to set as the current study,

 \* or Empty() to set the current study to <None>

 \*

 \* return - if the current study was succesfully set, 1; otherwise 0.

**JMP Version Added:** 19

```jsl

JMPClinicalReviewAPI:setCurrentStudy( "Nicardipine" );

```

### JMPClinicalStudyManagerAPI:addStudies

**Syntax:** JMPClinicalStudyManagerAPI:addStudies(listOfAddStudyArgumentLists = {})

**Description:** Adds the studies to current configuration (use the JMPClinicalBatchConfiguration environment variable).

 \*

 \* listOfAddStudyArgumentLists - List - Each element of this list is a list corresponding to the arguments to pass to JMPClinicalStudyManagerAPI:addStudy().

 \*   See JMPClinicalStudyManagerAPI:addStudy() for more details.

 \* 

 \* return - N/A

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:addStudies(
	{{"Nicardipine",
	"C:\ProgramData\JMP\JMPClinical\19\Clinical\Sample Data\Nicardipine\SDTM",
	{},
	"C:\ProgramData\JMP\JMPClinical\19\Clinical\Sample Data\Nicardipine\ADaM",
	{}, 1}, {"NicardipineAbbr",
	"C:\ProgramData\JMP\JMPClinical\19\Clinical\Sample Data\Nicardipine\SDTM",
	{}, "", {}, 1}}
);

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

**JMP Version Added:** 19

#### Batch

```jsl

/*
 * Use the following environment variables to control elements of the batch execution: 
 *
 * set JMPClinicalBatchMode=true                    options include: true, debug
 * set JMPClinicalBatchLogPath=%CD%\                the path where the log file should be written
 * set JMPClinicalBatchConfiguration=Default        the configuration to use. if not specified, the last configuration used interactively will be used 
 * set JMPClinicalBatchCurrentStudy=                the study to use for Review Builder operations (not used by the JMPClinicalStudyManagerAPI)
*/

exitJMPClinicalBatch =
Function( {},
	{},
	Save Log(
		Get Environment Variable(
			"JMPClinicalBatchLogPath"
		) || "JMPClinicalBatchLog.log"
	);
	Exit();
);

JMPClinicalStudyManagerAPI
:addStudy(
	"APIStudyName",
	"C:\JMPClinicalStudyManager\data\SDTM\", {},
	"C:\JMPClinicalStudyManager\data\ADaM\", {}, 1
);
exitJMPClinicalBatch();
/*
===================================================================================

Copyright © 2025 JMP Statistical Discovery LLC, Cary, NC, USA. All rights reserved.

JMP STATISTICAL DISCOVERY LLC ("JMP") PERMITS THE USE OF THIS COMPUTER SOFTWARE
CODE ("CODE") ON AN AS-IS BASIS AND AUTHORIZES YOU TO USE THE CODE SUBJECT TO
THE TERMS LISTED HEREIN. BY USING THE CODE, YOU AGREE TO THESE TERMS. YOUR USE
OF THE CODE IS AT YOUR OWN RISK. JMP MAKES NO REPRESENTATION OR WARRANTY,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND TITLE,
WITH RESPECT TO THE CODE.

You may use the Code solely as part of a software product you currently have
licensed from JMP, JMP's parent company, SAS Institute Inc. ("SAS US") or one
of SAS' subsidiaries (together with SAS US, "SAS") or authorized agents (the
"Software"), and not for any other purpose. The Code is designed to either
correct an error in the Software or to add functionality to the Software but
has not necessarily been tested. Accordingly, JMP makes no representation or
warranty that the Code (1) will operate error-free or (2) will not contain any
viruses or other applications or executables (including, without limitation,
any "trap doors," "worms" and "time bombs") that will degrade or infect any
software product that you license from JMP or any other software or your
network or systems. JMP is under no obligation to maintain, support, or
continue to distribute the Code.

Neither JMP nor its licensors shall be liable to you or any third party for any
general, special, direct, indirect, consequential, incidental, or other damages
whatsoever arising out of or related to your use or inability to use the Code,
even if JMP has been advised of the possibility of such damages. Except as
otherwise provided above, the Code is governed by the same agreement that
governs the Software. If you do not have an existing agreement with JMP or SAS
governing the Software, you may not use the Code.

US export laws and regulations apply to the Code and any other JMP-provided
technology ("Controlled Material"). The Controlled Material originates from the
United States. Customer agrees to comply with these and other applicable export
and import laws and regulations, except as prohibited or penalized by law
("Trade Law"). Customer warrants that Customer and its users are not: (a)
prohibited by Trade Law from accessing Controlled Material without US
government approval; (b) located in or under control of any country or other
territory subject to general export or trade embargo under Trade Law; or (c)
engaged in any of the following end-uses: nuclear, chemical or biological
weapons; nuclear facilities not under International Atomic Energy Agency
safeguards; missiles or unmanned aerial vehicles capable of long-range use or
weapons delivery, military training or assistance, military or intelligence
end-use in Russia or in any country in Country Group D:5 of the United States
Export Administration Regulations; deep water, Arctic offshore or shale oil or
gas exploration involving Russia or Russian companies, or Russian energy export
pipelines. Customer will not import or use any data within the System that is
subject to the US International Traffic Arms Regulations. United States export
classification information for JMP software and its affiliates is available at
jmp.com/export.

JMP and all other JMP Statistical Discovery LLC product or service names are
registered trademarks or trademarks of SAS Institute Inc. in the USA and other
countries. ® indicates USA registration. Other brand and product names are
registered trademarks or trademarks of their respective companies.

==============================================================================
*/

```

#### Simple

```jsl

JMPClinicalStudyManagerAPI
:addStudy(
	"Nicardipine",
	"C:\ProgramData\JMP\JMPClinical\19\Clinical\Sample Data\Nicardipine\SDTM",
	{},
	"C:\ProgramData\JMP\JMPClinical\19\Clinical\Sample Data\Nicardipine\ADaM",
	{}, 1
);

```

### JMPClinicalStudyManagerAPI:addValueOrderDomain

**Syntax:** JMPClinicalStudyManagerAPI:addValueOrderDomain(studies, domain}, {default local)

**Description:** Registers a domain with the custom value order and color system, for the given studies and domain.

 \*

 \* CAUTION: Use at your own risk.

 \*

 \* studies - list - names (Strings) of the studies -OR- String - name of the study

 \* domain - String - name of the domain to add

 \*

 \* return - none

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:addValueOrderDomain( "Nicardipine", "ZZ" );
JMPClinicalStudyManagerAPI
:getValueOrderDomains( "Nicardipine" );

```

### JMPClinicalStudyManagerAPI:addValueOrderVariable

**Syntax:** JMPClinicalStudyManagerAPI:addValueOrderVariable(studies, domain, variable, values = {})

**Description:** Registers a variable with the custom value order and color system, for the given studies and domain.

 \*

 \* CAUTION: Use at your own risk.

 \*

 \* studies - list - names (Strings) of the studies -OR- String - name of the study

 \* domain - String - name of the domain

 \* variable - String - name of the variable to add

 \* values (optional) - list - names of the values to add

 \*

 \* return - none

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:addValueOrderVariable(
	"Nicardipine",
	"ZZ",
	"ZZVAR",
	{"ZZ VALUE 1", "ZZ VALUE 2"}
);
JMPClinicalStudyManagerAPI
:getValueOrderDomainVariables( "Nicardipine", "ZZ" );

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

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:applyAllTreatmentValueOrder(
	"Nicardipine", "ADSL", "ARM", 1, 1
);
Show(
	JMPClinicalStudyManagerAPI
	:getValueOrderVariableLegendPreview(
		"Nicardipine", "ADSL", "ARM", 2
	),
	JMPClinicalStudyManagerAPI
	:getValueOrderVariableLegendPreview(
		"Nicardipine", "ADSL", "TRT01P", 2
	)
);

```

### JMPClinicalStudyManagerAPI:deleteStudies

**Syntax:** JMPClinicalStudyManagerAPI:deleteStudies(studyNames, keepOnDelete="PREF"}, {default local)

**Description:** Deletes the studies from the current configuration (use the JMPClinicalBatchConfiguration environment variable).

 \*

 \* studyNames - String, or List of Strings - name of the study, or names of the studies, to delete

 \* keepOnDelete - String - "PREF" (default) honor the preference for keeping notes even after delete, "NO" override the preference and do not keep notes, "YES" override the preference and keep notes

 \*

 \* return - N/A

**JMP Version Added:** 19

#### Batch

```jsl

/*
 * Use the following environment variables to control elements of the batch execution 
 * set JMPClinicalBatchMode=true                    options include: true, debug
 * set JMPClinicalBatchLogPath=%CD%\                the path where the log file should be written
 * set JMPClinicalBatchConfiguration=Default        the configuration to use. if not specified, the last configuration used interactively will be used 
 * set JMPClinicalBatchCurrentStudy=                the study to use for Review Builder operations (not used by the JMPClinicalStudyManagerAPI)
*/

exitJMPClinicalBatch =
Function( {},
	{},
	Save Log(
		Get Environment Variable(
			"JMPClinicalBatchLogPath"
		) || "JMPClinicalBatchLog.log"
	);
	Exit();
);

JMPClinicalStudyManagerAPI
:deleteStudies( {"APIStudyName"} );
exitJMPClinicalBatch();
/*
===================================================================================

Copyright © 2025 JMP Statistical Discovery LLC, Cary, NC, USA. All rights reserved.

JMP STATISTICAL DISCOVERY LLC ("JMP") PERMITS THE USE OF THIS COMPUTER SOFTWARE
CODE ("CODE") ON AN AS-IS BASIS AND AUTHORIZES YOU TO USE THE CODE SUBJECT TO
THE TERMS LISTED HEREIN. BY USING THE CODE, YOU AGREE TO THESE TERMS. YOUR USE
OF THE CODE IS AT YOUR OWN RISK. JMP MAKES NO REPRESENTATION OR WARRANTY,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND TITLE,
WITH RESPECT TO THE CODE.

You may use the Code solely as part of a software product you currently have
licensed from JMP, JMP's parent company, SAS Institute Inc. ("SAS US") or one
of SAS' subsidiaries (together with SAS US, "SAS") or authorized agents (the
"Software"), and not for any other purpose. The Code is designed to either
correct an error in the Software or to add functionality to the Software but
has not necessarily been tested. Accordingly, JMP makes no representation or
warranty that the Code (1) will operate error-free or (2) will not contain any
viruses or other applications or executables (including, without limitation,
any "trap doors," "worms" and "time bombs") that will degrade or infect any
software product that you license from JMP or any other software or your
network or systems. JMP is under no obligation to maintain, support, or
continue to distribute the Code.

Neither JMP nor its licensors shall be liable to you or any third party for any
general, special, direct, indirect, consequential, incidental, or other damages
whatsoever arising out of or related to your use or inability to use the Code,
even if JMP has been advised of the possibility of such damages. Except as
otherwise provided above, the Code is governed by the same agreement that
governs the Software. If you do not have an existing agreement with JMP or SAS
governing the Software, you may not use the Code.

US export laws and regulations apply to the Code and any other JMP-provided
technology ("Controlled Material"). The Controlled Material originates from the
United States. Customer agrees to comply with these and other applicable export
and import laws and regulations, except as prohibited or penalized by law
("Trade Law"). Customer warrants that Customer and its users are not: (a)
prohibited by Trade Law from accessing Controlled Material without US
government approval; (b) located in or under control of any country or other
territory subject to general export or trade embargo under Trade Law; or (c)
engaged in any of the following end-uses: nuclear, chemical or biological
weapons; nuclear facilities not under International Atomic Energy Agency
safeguards; missiles or unmanned aerial vehicles capable of long-range use or
weapons delivery, military training or assistance, military or intelligence
end-use in Russia or in any country in Country Group D:5 of the United States
Export Administration Regulations; deep water, Arctic offshore or shale oil or
gas exploration involving Russia or Russian companies, or Russian energy export
pipelines. Customer will not import or use any data within the System that is
subject to the US International Traffic Arms Regulations. United States export
classification information for JMP software and its affiliates is available at
jmp.com/export.

JMP and all other JMP Statistical Discovery LLC product or service names are
registered trademarks or trademarks of SAS Institute Inc. in the USA and other
countries. ® indicates USA registration. Other brand and product names are
registered trademarks or trademarks of their respective companies.

==============================================================================
*/

```

#### Simple

```jsl

JMPClinicalStudyManagerAPI
:deleteStudies( "Nicardipine" );

```

### JMPClinicalStudyManagerAPI:deleteValueOrderDomain

**Syntax:** JMPClinicalStudyManagerAPI:deleteValueOrderDomain(studies, domain}, {default local)

**Description:** Unregisters a domain with the custom value order and color system, for the given studies and domain.

 \*

 \* CAUTION: Use at your own risk.

 \*

 \* studies - list - names (Strings) of the studies -OR- String - name of the study

 \* domain - String - name of the domain to delete

 \*

 \* return - none

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:deleteValueOrderDomain( "Nicardipine", "ZZ" );
JMPClinicalStudyManagerAPI
:getValueOrderDomains( "Nicardipine" );

```

### JMPClinicalStudyManagerAPI:deleteValueOrderVariable

**Syntax:** JMPClinicalStudyManagerAPI:deleteValueOrderVariable(studies, domain, variable, values = {})

**Description:** Unregisters a variable with the custom value order and color system, for the given studies and domain.

 \*

 \* CAUTION: Use at your own risk.

 \*

 \* studies - list - names (Strings) of the studies -OR- String - name of the study

 \* domain - String - name of the domain

 \* variable - String - name of the variable to delete

 \* values (optional) - list - names of the values to delete (if any values are specified, only these values (and not the variable) will be deleted)

 \*

 \* return - none

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:deleteValueOrderVariable(
	"Nicardipine", "ZZ", "ZZVAR"
);
JMPClinicalStudyManagerAPI
:getValueOrderDomainVariables( "Nicardipine", "ZZ" );

```

### JMPClinicalStudyManagerAPI:getADaMFolder

**Syntax:** JMPClinicalStudyManagerAPI:getADaMFolder(study)

**Description:** Returns the path of the ADaM folder for the given study.

 \*

 \* study - String - name of the study

 \*

 \* return - a String of the path for the ADaM folder

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:getADaMFolder(
	JMPClinicalStudyManagerAPI:getCurrentStudy()
);

```

### JMPClinicalStudyManagerAPI:getAllStudyPreferences

**Syntax:** JMPClinicalStudyManagerAPI:getAllStudyPreferences(study)

**Description:** Returns all study preferences for the given study.

 \*

 \* study - String - name of the study

 \*

 \* return - an associative arrays of all preferences for the given study

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:getAllStudyPreferences(
	JMPClinicalStudyManagerAPI:getCurrentStudy()
);

```

### JMPClinicalStudyManagerAPI:getCreatedBy

**Syntax:** JMPClinicalStudyManagerAPI:getCreatedBy(study)

**Description:** Returns the userid that created the given study.

 \*

 \* study - String - name of the study

 \*

 \* return - a String of the userid that added the study

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:getCreatedBy(
	JMPClinicalStudyManagerAPI:getCurrentStudy()
);

```

### JMPClinicalStudyManagerAPI:getCurrentStudy

**Syntax:** JMPClinicalStudyManagerAPI:getCurrentStudy()

**Description:** Returns the name of the current study.

 \*

 \* return - if there is a current study, the study name (a string); otherwise Empty().

**JMP Version Added:** 19

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

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:getDomainList(
	JMPClinicalStudyManagerAPI:getCurrentStudy()
);

```

### JMPClinicalStudyManagerAPI:getInitialDate

**Syntax:** JMPClinicalStudyManagerAPI:getInitialDate(study)

**Description:** Returns the numeric date the given study was added.

 \*

 \* study - String - name of the study

 \*

 \* return - a Number (date). Use asDate(...) to get date representation

**JMP Version Added:** 19

```jsl

As Date(
	JMPClinicalStudyManagerAPI
	:getInitialDate(
		JMPClinicalStudyManagerAPI:getCurrentStudy()
	)
);

```

### JMPClinicalStudyManagerAPI:getLastUpdatedBy

**Syntax:** JMPClinicalStudyManagerAPI:getLastUpdatedBy(study)

**Description:** Returns the userid that last updated the given study.

 \*

 \* study - String - name of the study

 \*

 \* return - a String of the userid that lasy updated the study

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:getLastUpdatedBy(
	JMPClinicalStudyManagerAPI:getCurrentStudy()
);

```

### JMPClinicalStudyManagerAPI:getLastUpdatedDate

**Syntax:** JMPClinicalStudyManagerAPI:getLastUpdatedDate(study)

**Description:** Returns the numeric date the given study was last modified.

 \*

 \* study - String - name of the study

 \*

 \* return - a Number (date). Use asDate(...) to get date representation

**JMP Version Added:** 19

```jsl

As Date(
	JMPClinicalStudyManagerAPI
	:getLastUpdatedDate(
		JMPClinicalStudyManagerAPI:getCurrentStudy()
	)
);

```

### JMPClinicalStudyManagerAPI:getPartialDatesEndDateImputationMethod

**Syntax:** JMPClinicalStudyManagerAPI:getPartialDatesEndDateImputationMethod(study)

**Description:** Returns the advanced option.

 \*

 \* study - String - name of the study

 \*

 \* return - a String of the advanced option

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:getPartialDatesEndDateImputationMethod(
	JMPClinicalStudyManagerAPI:getCurrentStudy()
);

```

### JMPClinicalStudyManagerAPI:getPartialDatesStartDateImputationMethod

**Syntax:** JMPClinicalStudyManagerAPI:getPartialDatesStartDateImputationMethod(study)

**Description:** Returns the advanced option.

 \*

 \* study - String - name of the study

 \*

 \* return - a String of the advanced option

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:getPartialDatesStartDateImputationMethod(
	JMPClinicalStudyManagerAPI:getCurrentStudy()
);

```

### JMPClinicalStudyManagerAPI:getSDTMFolder

**Syntax:** JMPClinicalStudyManagerAPI:getSDTMFolder(study)

**Description:** Returns the path of the SDTM folder for the given study.

 \*

 \* study - String - name of the study

 \*

 \* return - a String of the path for the SDTM folder

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:getSDTMFolder(
	JMPClinicalStudyManagerAPI:getCurrentStudy()
);

```

### JMPClinicalStudyManagerAPI:getSelectedADaMDomains

**Syntax:** JMPClinicalStudyManagerAPI:getSelectedADaMDomains(study)

**Description:** Returns the list of selected ADaM domains for the given study.

 \*

 \* study - String - name of the study

 \*

 \* return - a List of the selected domains for the ADaM folder

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:getSelectedADaMDomains(
	JMPClinicalStudyManagerAPI:getCurrentStudy()
);

```

### JMPClinicalStudyManagerAPI:getSelectedSDTMDomains

**Syntax:** JMPClinicalStudyManagerAPI:getSelectedSDTMDomains(study)

**Description:** Returns the list of selected SDTM domains for the given study.

 \*

 \* study - String - name of the study

 \*

 \* return - a List of the selected domains for the SDTM folder

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:getSelectedSDTMDomains(
	JMPClinicalStudyManagerAPI:getCurrentStudy()
);

```

### JMPClinicalStudyManagerAPI:getSizeOnDisk

**Syntax:** JMPClinicalStudyManagerAPI:getSizeOnDisk(study)

**Description:** Returns the number of MB on disk for all domains registered for the given study.

 \*

 \* study - String - name of the study

 \*

 \* return - a number that is the number of MB used by the data files on disk for the given study

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:getSizeOnDisk(
	JMPClinicalStudyManagerAPI:getCurrentStudy()
);

```

### JMPClinicalStudyManagerAPI:getSnapshotNumber

**Syntax:** JMPClinicalStudyManagerAPI:getSnapshotNumber(study)

**Description:** Returns number for the snapshot of the given study.

 \*

 \* study - String - name of the study

 \*

 \* return - a number of the snapshot. If snapshots aren&apos;t enabled, 0 is returned.

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:getSnapshotNumber(
	JMPClinicalStudyManagerAPI:getCurrentStudy()
);

```

### JMPClinicalStudyManagerAPI:getStudyDayAnchorDateForStudyDayCalculation

**Syntax:** JMPClinicalStudyManagerAPI:getStudyDayAnchorDateForStudyDayCalculation(study)

**Description:** Returns the advanced option.

 \*

 \* study - String - name of the study

 \*

 \* return - a String of the advanced option

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:getStudyDayAnchorDateForStudyDayCalculation(
	JMPClinicalStudyManagerAPI:getCurrentStudy()
);

```

### JMPClinicalStudyManagerAPI:getStudyDayValueDerivation

**Syntax:** JMPClinicalStudyManagerAPI:getStudyDayValueDerivation(study)

**Description:** Returns the advanced option.

 \*

 \* study - String - name of the study

 \*

 \* return - a String of the advanced option

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:getStudyDayValueDerivation(
	JMPClinicalStudyManagerAPI:getCurrentStudy()
);

```

### JMPClinicalStudyManagerAPI:getStudyExists

**Syntax:** JMPClinicalStudyManagerAPI:getStudyExists(study)

**Description:** Returns >=1 if study exists, 0 otherwise.

 \*

 \* study - String - name of the study

 \*

 \* return - an integer

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:getStudyExists( "Nicardipine" );

```

### JMPClinicalStudyManagerAPI:getStudyList

**Syntax:** JMPClinicalStudyManagerAPI:getStudyList()

**Description:** Gets the list of studies for the current configuration (use the JMPClinicalBatchConfiguration environment variable)

 \*

 \* return - a List of the names of the studies

**JMP Version Added:** 19

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

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:getStudyPreference(
	"Nicardipine", "objRefNS:treatcb"
);

```

### JMPClinicalStudyManagerAPI:getTestResultsLoadOnly

**Syntax:** JMPClinicalStudyManagerAPI:getTestResultsLoadOnly(study)

**Description:** Returns the advanced option.

 \*

 \* study - String - name of the study

 \*

 \* return - a String of the advanced option

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:getTestResultsLoadOnly(
	JMPClinicalStudyManagerAPI:getCurrentStudy()
);

```

### JMPClinicalStudyManagerAPI:getValueOrderDomainLabel

**Syntax:** JMPClinicalStudyManagerAPI:getValueOrderDomainLabel(study, domain)

**Description:** Returns the domain label registered by the custom value order and color system, for the given study and domain.

 \*

 \* study - String - name of the study

 \* domain - String - name of the domain

 \*

 \* return - a String of the domain label

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:getValueOrderDomainLabel( "Nicardipine", "LB" );

```

### JMPClinicalStudyManagerAPI:getValueOrderDomainVariables

**Syntax:** JMPClinicalStudyManagerAPI:getValueOrderDomainVariables(study, domain)

**Description:** Returns the list of variables registered by the custom value order and color system, for the given study and domain.

 \*

 \* study - String - name of the study

 \* domain - String - name of the domain

 \*

 \* return - a list of variables

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:getValueOrderDomainVariables( "Nicardipine", "LB" );

```

### JMPClinicalStudyManagerAPI:getValueOrderDomains

**Syntax:** JMPClinicalStudyManagerAPI:getValueOrderDomains(study)

**Description:** Returns the list of domains registered by the custom value order and color system, for the given study.

 \*

 \* study - String - name of the study

 \*

 \* return - a list of domains

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:getValueOrderDomains( "Nicardipine" );

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

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:getValueOrderValueColorOverride(
	"Nicardipine", "ADSL", "TRT01P", "Placebo", 2
);

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

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:getValueOrderVariableColorOverrides(
	"Nicardipine", "ADSL", "TRT01P", 2
);

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

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:getValueOrderVariableColorTheme(
	"Nicardipine", "LB", "JMPC_ANRIND"
);

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

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:getValueOrderVariableLabel(
	"Nicardipine", "LB", "JMPC_ANRIND"
);

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

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:getValueOrderVariableLegendPreview(
	"Nicardipine", "LB", "JMPC_ANRIND", 2
);

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

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:getValueOrderVariableSortState(
	"Nicardipine", "LB", "JMPC_ANRIND"
);

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

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:getValueOrderVariableValueOrder(
	"Nicardipine", "LB", "JMPC_ANRIND"
);

```

### JMPClinicalStudyManagerAPI:loadStudyADSLDataTable

**Syntax:** JMPClinicalStudyManagerAPI:loadStudyADSLDataTable(study)

**Description:** Loads the ADSL table into memory.

 \*

 \* study - String - name of the study

 \*

 \* return - Table Reference - data table reference for the ADSL table for the study

 \*

 \* throws - exception is study specified doesn&apos;t exist

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:loadStudyADSLDataTable(
	JMPClinicalStudyManagerAPI:getCurrentStudy()
);

```

### JMPClinicalStudyManagerAPI:refreshStudies

**Syntax:** JMPClinicalStudyManagerAPI:refreshStudies(studyNames = {})

**Description:** Refreshes the metadata of the studies in the current configuration (use the JMPClinicalBatchConfiguration environment variable).

 \*

 \* studyNames - String, or List of Strings - name of the study, or names of the studies, to refresh

 \*

 \* return - N/A

**JMP Version Added:** 19

#### Batch

```jsl

/*
 * Use the following environment variables to control elements of the batch execution 
 * set JMPClinicalBatchMode=true                    options include: true, debug
 * set JMPClinicalBatchLogPath=%CD%\                the path where the log file should be written
 * set JMPClinicalBatchConfiguration=Default        the configuration to use. if not specified, the last configuration used interactively will be used 
 * set JMPClinicalBatchCurrentStudy=                the study to use for Review Builder operations (not used by the JMPClinicalStudyManagerAPI)
*/

exitJMPClinicalBatch =
Function( {},
	{},
	Save Log(
		Get Environment Variable(
			"JMPClinicalBatchLogPath"
		) || "JMPClinicalBatchLog.log"
	);
	Exit();
);

JMPClinicalStudyManagerAPI
:refreshStudies( {"APIStudyName"} );
exitJMPClinicalBatch();
/*
===================================================================================

Copyright © 2025 JMP Statistical Discovery LLC, Cary, NC, USA. All rights reserved.

JMP STATISTICAL DISCOVERY LLC ("JMP") PERMITS THE USE OF THIS COMPUTER SOFTWARE
CODE ("CODE") ON AN AS-IS BASIS AND AUTHORIZES YOU TO USE THE CODE SUBJECT TO
THE TERMS LISTED HEREIN. BY USING THE CODE, YOU AGREE TO THESE TERMS. YOUR USE
OF THE CODE IS AT YOUR OWN RISK. JMP MAKES NO REPRESENTATION OR WARRANTY,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND TITLE,
WITH RESPECT TO THE CODE.

You may use the Code solely as part of a software product you currently have
licensed from JMP, JMP's parent company, SAS Institute Inc. ("SAS US") or one
of SAS' subsidiaries (together with SAS US, "SAS") or authorized agents (the
"Software"), and not for any other purpose. The Code is designed to either
correct an error in the Software or to add functionality to the Software but
has not necessarily been tested. Accordingly, JMP makes no representation or
warranty that the Code (1) will operate error-free or (2) will not contain any
viruses or other applications or executables (including, without limitation,
any "trap doors," "worms" and "time bombs") that will degrade or infect any
software product that you license from JMP or any other software or your
network or systems. JMP is under no obligation to maintain, support, or
continue to distribute the Code.

Neither JMP nor its licensors shall be liable to you or any third party for any
general, special, direct, indirect, consequential, incidental, or other damages
whatsoever arising out of or related to your use or inability to use the Code,
even if JMP has been advised of the possibility of such damages. Except as
otherwise provided above, the Code is governed by the same agreement that
governs the Software. If you do not have an existing agreement with JMP or SAS
governing the Software, you may not use the Code.

US export laws and regulations apply to the Code and any other JMP-provided
technology ("Controlled Material"). The Controlled Material originates from the
United States. Customer agrees to comply with these and other applicable export
and import laws and regulations, except as prohibited or penalized by law
("Trade Law"). Customer warrants that Customer and its users are not: (a)
prohibited by Trade Law from accessing Controlled Material without US
government approval; (b) located in or under control of any country or other
territory subject to general export or trade embargo under Trade Law; or (c)
engaged in any of the following end-uses: nuclear, chemical or biological
weapons; nuclear facilities not under International Atomic Energy Agency
safeguards; missiles or unmanned aerial vehicles capable of long-range use or
weapons delivery, military training or assistance, military or intelligence
end-use in Russia or in any country in Country Group D:5 of the United States
Export Administration Regulations; deep water, Arctic offshore or shale oil or
gas exploration involving Russia or Russian companies, or Russian energy export
pipelines. Customer will not import or use any data within the System that is
subject to the US International Traffic Arms Regulations. United States export
classification information for JMP software and its affiliates is available at
jmp.com/export.

JMP and all other JMP Statistical Discovery LLC product or service names are
registered trademarks or trademarks of SAS Institute Inc. in the USA and other
countries. ® indicates USA registration. Other brand and product names are
registered trademarks or trademarks of their respective companies.

==============================================================================
*/

```

#### Simple

```jsl

JMPClinicalStudyManagerAPI
:refreshStudies( {"Nicardipine"} );

```

### JMPClinicalStudyManagerAPI:resetAllValueOrderInfo

**Syntax:** JMPClinicalStudyManagerAPI:resetAllValueOrderInfo(studies)

**Description:** Resets all information in the custom value order and color system, for the given studies.

 \*

 \* CAUTION: All custom value order and color settings for the specified studies will be reset to factory defaults.

 \*

 \* studies - list - names (Strings) of the studies -OR- String - name of the study

 \*

 \* return - none

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:resetAllValueOrderInfo( "Nicardipine" );

```

### JMPClinicalStudyManagerAPI:setAllStudyPreferences

**Syntax:** JMPClinicalStudyManagerAPI:setAllStudyPreferences(study, preferenceValueAssociation)

**Description:** Sets all preferences for the given study.

 \*

 \* study - String - name of the study

 \* preferenceValueAssociation - Associative Array - names and values of preferences

 \*

 \* return - N/A

**JMP Version Added:** 19

```jsl

studyPreferences = JMPClinicalStudyManagerAPI
:getAllStudyPreferences( "Nicardipine" );
JMPClinicalStudyManagerAPI
:setAllStudyPreferences(
	"Nicardipine", studyPreferences
);

```

### JMPClinicalStudyManagerAPI:setCurrentStudy

**Syntax:** JMPClinicalStudyManagerAPI:setCurrentStudy(study)

**Description:** Sets the current study to the one specified.

 \*

 \* study - a string containing the name of the study to set as the current study,

 \* or Empty() to set the current study to <None>

 \*

 \* return - if the current study was succesfully set, 1; otherwise 0.

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:setCurrentStudy( "Nicardipine" );
JMPClinicalStudyManagerAPI:getCurrentStudy();

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

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:setStudyPreference(
	"Nicardipine", "objRefNS:treatcb", "ARM"
);
JMPClinicalStudyManagerAPI
:getStudyPreference(
	"Nicardipine", "objRefNS:treatcb"
);

```

### JMPClinicalStudyManagerAPI:setValueOrderDomainLabel

**Syntax:** JMPClinicalStudyManagerAPI:setValueOrderDomainLabel(studies, domain, newDomainLabel)

**Description:** Sets the domain label registered by the custom value order and color system, for the given studies and domain.

 \*

 \* CAUTION: This function should only be used when adding custom domains to the value order and color system. Use at your own risk.

 \*

 \* studies - list - names (Strings) of the studies -OR- String - name of the study

 \* domain - String - name of the domain

 \* newDomainLabel - String - new label of the domain

 \*

 \* return - none

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:setValueOrderDomainLabel(
	"Nicardipine", "LB", "Labs"
);
JMPClinicalStudyManagerAPI
:getValueOrderDomainLabel( "Nicardipine", "LB" );

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

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:setValueOrderValueColorOverride(
	"Nicardipine",
	"ADSL",
	"TRT01P",
	"Placebo",
	{200, 0, 0}
);
JMPClinicalStudyManagerAPI
:getValueOrderValueColorOverride(
	"Nicardipine", "ADSL", "TRT01P", "Placebo", 2
);

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

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:setValueOrderVariableColorOverrides(
	"Nicardipine",
	"ADSL",
	"TRT01P",
	["Placebo" => {200, 0, 0}]
);
JMPClinicalStudyManagerAPI
:getValueOrderVariableColorOverrides(
	"Nicardipine", "ADSL", "TRT01P", 2
);

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

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:setValueOrderVariableColorTheme(
	"Nicardipine", "LB", "JMPC_ANRIND", "JMP Dark"
);
JMPClinicalStudyManagerAPI
:getValueOrderVariableColorTheme(
	"Nicardipine", "LB", "JMPC_ANRIND"
);

```

### JMPClinicalStudyManagerAPI:setValueOrderVariableLabel

**Syntax:** JMPClinicalStudyManagerAPI:setValueOrderVariableLabel(studies, domain, variable, newVariableLabel)

**Description:** Sets the variable label registered by the custom value order and color system, for the given studies domain, and variable.

 \*

 \* CAUTION: This function should only be used when adding custom variables to the value order and color system. Use at your own risk.

 \*

 \* studies - list - names (Strings) of the studies -OR- String - name of the study

 \* domain - String - name of the domain

 \* variable - String - name of the variable

 \* newVariableLabel - String - new label of the variable

 \*

 \* return - none

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:setValueOrderVariableLabel(
	"Nicardipine", "LB", "JMPC_ANRIND",
	"Indicator for Reference Range"
);
JMPClinicalStudyManagerAPI
:getValueOrderVariableLabel(
	"Nicardipine", "LB", "JMPC_ANRIND"
);

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

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:setValueOrderVariableSortState(
	"Nicardipine", "LB", "JMPC_ANRIND",
	"Natural Descending"
);
JMPClinicalStudyManagerAPI
:getValueOrderVariableSortState(
	"Nicardipine", "LB", "JMPC_ANRIND"
);

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

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:setValueOrderVariableValueOrder(
	"Nicardipine",
	"LB",
	"JMPC_ANRIND",
	{"HIGH", "NORMAL", "LOW"}
);
JMPClinicalStudyManagerAPI
:getValueOrderVariableValueOrder(
	"Nicardipine", "LB", "JMPC_ANRIND"
);

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

**JMP Version Added:** 19

```jsl

JMPClinicalStudyManagerAPI
:swapValueColor(
	"Nicardipine", "LB", "JMPC_ANRIND", "LOW", "HIGH"
);
JMPClinicalStudyManagerAPI
:getValueOrderVariableLegendPreview(
	"Nicardipine", "LB", "JMPC_ANRIND", 2
);

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

**JMP Version Added:** 19

#### Batch

```jsl

/*
 * Use the following environment variables to control elements of the batch execution 
 * set JMPClinicalBatchMode=true                    options include: true, debug
 * set JMPClinicalBatchLogPath=%CD%\                the path where the log file should be written
 * set JMPClinicalBatchConfiguration=Default        the configuration to use. if not specified, the last configuration used interactively will be used 
 * set JMPClinicalBatchCurrentStudy=                the study to use for Review Builder operations (not used by the JMPClinicalStudyManagerAPI)
*/

exitJMPClinicalBatch =
Function( {},
	{},
	Save Log(
		Get Environment Variable(
			"JMPClinicalBatchLogPath"
		) || "JMPClinicalBatchLog.log"
	);
	Exit();
);

JMPClinicalStudyManagerAPI
:updateSnapStudy(
	"APIStudyName",
	JMPClinicalStudyManagerAPI
	:getSnapshotNumber( "APIStudyName" ) + 1,
	"C:\JMPClinicalStudyManager\data\snapshot2\SDTM\",
	{},
	"C:\JMPClinicalStudyManager\data\snapshot2\ADaM\",
	{}
);
exitJMPClinicalBatch();
/*
===================================================================================

Copyright © 2025 JMP Statistical Discovery LLC, Cary, NC, USA. All rights reserved.

JMP STATISTICAL DISCOVERY LLC ("JMP") PERMITS THE USE OF THIS COMPUTER SOFTWARE
CODE ("CODE") ON AN AS-IS BASIS AND AUTHORIZES YOU TO USE THE CODE SUBJECT TO
THE TERMS LISTED HEREIN. BY USING THE CODE, YOU AGREE TO THESE TERMS. YOUR USE
OF THE CODE IS AT YOUR OWN RISK. JMP MAKES NO REPRESENTATION OR WARRANTY,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND TITLE,
WITH RESPECT TO THE CODE.

You may use the Code solely as part of a software product you currently have
licensed from JMP, JMP's parent company, SAS Institute Inc. ("SAS US") or one
of SAS' subsidiaries (together with SAS US, "SAS") or authorized agents (the
"Software"), and not for any other purpose. The Code is designed to either
correct an error in the Software or to add functionality to the Software but
has not necessarily been tested. Accordingly, JMP makes no representation or
warranty that the Code (1) will operate error-free or (2) will not contain any
viruses or other applications or executables (including, without limitation,
any "trap doors," "worms" and "time bombs") that will degrade or infect any
software product that you license from JMP or any other software or your
network or systems. JMP is under no obligation to maintain, support, or
continue to distribute the Code.

Neither JMP nor its licensors shall be liable to you or any third party for any
general, special, direct, indirect, consequential, incidental, or other damages
whatsoever arising out of or related to your use or inability to use the Code,
even if JMP has been advised of the possibility of such damages. Except as
otherwise provided above, the Code is governed by the same agreement that
governs the Software. If you do not have an existing agreement with JMP or SAS
governing the Software, you may not use the Code.

US export laws and regulations apply to the Code and any other JMP-provided
technology ("Controlled Material"). The Controlled Material originates from the
United States. Customer agrees to comply with these and other applicable export
and import laws and regulations, except as prohibited or penalized by law
("Trade Law"). Customer warrants that Customer and its users are not: (a)
prohibited by Trade Law from accessing Controlled Material without US
government approval; (b) located in or under control of any country or other
territory subject to general export or trade embargo under Trade Law; or (c)
engaged in any of the following end-uses: nuclear, chemical or biological
weapons; nuclear facilities not under International Atomic Energy Agency
safeguards; missiles or unmanned aerial vehicles capable of long-range use or
weapons delivery, military training or assistance, military or intelligence
end-use in Russia or in any country in Country Group D:5 of the United States
Export Administration Regulations; deep water, Arctic offshore or shale oil or
gas exploration involving Russia or Russian companies, or Russian energy export
pipelines. Customer will not import or use any data within the System that is
subject to the US International Traffic Arms Regulations. United States export
classification information for JMP software and its affiliates is available at
jmp.com/export.

JMP and all other JMP Statistical Discovery LLC product or service names are
registered trademarks or trademarks of SAS Institute Inc. in the USA and other
countries. ® indicates USA registration. Other brand and product names are
registered trademarks or trademarks of their respective companies.

==============================================================================
*/

```

#### Simple

```jsl

JMPClinicalStudyManagerAPI
:updateSnapStudy(
	"Nicardipine",
	JMPClinicalStudyManagerAPI
	:getSnapshotNumber( "Nicardipine" ) + 1,
	"C:\ProgramData\JMP\JMPClinical\19\Clinical\Sample Data\Nicardipine\SDTM",
	{},
	"C:\ProgramData\JMP\JMPClinical\19\Clinical\Sample Data\Nicardipine\ADaM",
	{}, 1
);

```

### jg:domain

**Syntax:** jg:domain( parent=empty(), _name="", _label="", _origin={}, _fileTypeOriginal="", _fileTypeWorking="", _model="", _class="", _creationDateOriginal=., _creationDateWorking=., _modificationDateOriginal=., _modificationDateWorking=., _fileSizeOriginal=., _fileSizeWorking=., _nTotalRows=0, _flagsTrue={})

**Description:** Creates a new JMP Clinical domain object.

**JMP Version Added:** 19

```jsl

dom = jg:domain( Empty(), "dom", "Domain" );

```

### jg:notebook

**Syntax:** jg:notebook( parent=empty())

**Description:** Creates a new JMP Clinical notebook object.

**JMP Version Added:** 19

```jsl

notebook = jg:notebook( Empty() );

```

### jg:study

**Syntax:** jg:study( _name="", _label="", _origin={}, _sdtmFolderOriginal="", _selectedSdtmDomains={}, _adamFolderOriginal="", _selectedAdamDomains={}, _snapshotNumber=0, _initialDate=., _createdBy="", _lastUpdatedDate=., _lastUpdatedBy="", _releaseVersion="", _testResultsLoadOnly="", _partialDatesStartDateImputationMethod="", _partialDatesEndDateImputationMethod="", _studyDayValueDerivation="", _studyDayAnchorDateForStudyDayCalculation="", _flagsTrue={"saveJMPTables", "compressJMPTables", "compressJMPColumns", "clinical"})

**Description:** Creates a new JMP Clinical study object.

**JMP Version Added:** 19

```jsl

s = jg:study( "study" );

```

### jg:variable

**Syntax:** jg:variable( parent=empty(), _name="", _label="", _origin={}, _type="", _colmin=., _colmax=., _valuelist={}, _key=0, _class="", _nMissingRows=0, _flagsTrue={})

**Description:** Creates a new JMP Clinical variable object.

**JMP Version Added:** 19

```jsl

var = jg:variable( Empty(), "var", "Variable" );

```

### processNS:runReport

**Syntax:** processNS:runReport()

**Description:** Comprises the statements to execute in a JMP Clinical custom report.

**JMP Version Added:** 19

**CustomReportExample1**

```jsl

// The header section for report title and category.
processNS:label = "Custom Report Example 1";
processNS:cdiscClass = "Custom Reports";

// The main report code.
processNS:runReport =
Function( {},
	{Default Local}, 
	// Surfaces a built-in JMP platform on the current data table (tadsl) and opens in a new window.
	Graph Builder()
);
/*
===================================================================================

Copyright © 2025 JMP Statistical Discovery LLC, Cary, NC, USA. All rights reserved.

JMP STATISTICAL DISCOVERY LLC ("JMP") PERMITS THE USE OF THIS COMPUTER SOFTWARE
CODE ("CODE") ON AN AS-IS BASIS AND AUTHORIZES YOU TO USE THE CODE SUBJECT TO
THE TERMS LISTED HEREIN. BY USING THE CODE, YOU AGREE TO THESE TERMS. YOUR USE
OF THE CODE IS AT YOUR OWN RISK. JMP MAKES NO REPRESENTATION OR WARRANTY,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND TITLE,
WITH RESPECT TO THE CODE.

You may use the Code solely as part of a software product you currently have
licensed from JMP, JMP's parent company, SAS Institute Inc. ("SAS US") or one
of SAS' subsidiaries (together with SAS US, "SAS") or authorized agents (the
"Software"), and not for any other purpose. The Code is designed to either
correct an error in the Software or to add functionality to the Software but
has not necessarily been tested. Accordingly, JMP makes no representation or
warranty that the Code (1) will operate error-free or (2) will not contain any
viruses or other applications or executables (including, without limitation,
any "trap doors," "worms" and "time bombs") that will degrade or infect any
software product that you license from JMP or any other software or your
network or systems. JMP is under no obligation to maintain, support, or
continue to distribute the Code.

Neither JMP nor its licensors shall be liable to you or any third party for any
general, special, direct, indirect, consequential, incidental, or other damages
whatsoever arising out of or related to your use or inability to use the Code,
even if JMP has been advised of the possibility of such damages. Except as
otherwise provided above, the Code is governed by the same agreement that
governs the Software. If you do not have an existing agreement with JMP or SAS
governing the Software, you may not use the Code.

US export laws and regulations apply to the Code and any other JMP-provided
technology ("Controlled Material"). The Controlled Material originates from the
United States. Customer agrees to comply with these and other applicable export
and import laws and regulations, except as prohibited or penalized by law
("Trade Law"). Customer warrants that Customer and its users are not: (a)
prohibited by Trade Law from accessing Controlled Material without US
government approval; (b) located in or under control of any country or other
territory subject to general export or trade embargo under Trade Law; or (c)
engaged in any of the following end-uses: nuclear, chemical or biological
weapons; nuclear facilities not under International Atomic Energy Agency
safeguards; missiles or unmanned aerial vehicles capable of long-range use or
weapons delivery, military training or assistance, military or intelligence
end-use in Russia or in any country in Country Group D:5 of the United States
Export Administration Regulations; deep water, Arctic offshore or shale oil or
gas exploration involving Russia or Russian companies, or Russian energy export
pipelines. Customer will not import or use any data within the System that is
subject to the US International Traffic Arms Regulations. United States export
classification information for JMP software and its affiliates is available at
jmp.com/export.

JMP and all other JMP Statistical Discovery LLC product or service names are
registered trademarks or trademarks of SAS Institute Inc. in the USA and other
countries. ® indicates USA registration. Other brand and product names are
registered trademarks or trademarks of their respective companies.

==============================================================================
*/

```

**CustomReportExample2**

```jsl

// The header section for report title and category.
processNS:label = "Custom Report Example 2";
processNS:cdiscClass = "Custom Reports";

// The main report code.
processNS:runReport =
Function( {},
	{Default Local}, 
	// Obtain the path to the study's ADSL data set.
	path = jg:getPath(
		"/user/clinical/data/adam", "ADSL.jmp"
	);
	If( !File Exists( path ), 
		// A custom error check.
		processNS
		:fatalError(
			"This report requires an ARM variable in the ADSL dataset.",
			1
		)
	, 
		// Open the study's ADSL data set.
		objRefNS:dt = Open( path, invisible );
		// Send content to the output pane.
		processNS
		:setReportOutput(
			V List Box(
				// Create a Graph Builder object, hiding the control panel, using ARM as an X variable, displayed as a pie ring.
				objRefNS:gb =
				Graph Builder(
					Show Control Panel( 0 ),
					Variables( X( :ARM ) ),
					Elements(
						Pie(
							X,
							Legend( 3 ),
							Pie Style( "Ring" )
						)
					)
				)
			)
		);
		// Keep track of data sets created in this report so that they are automatically closed when the report tab is closed.
		processNS
		:addDataTableReference(
			"Custom Report Example Data",
			"objRefNS:dt"
		);
	);
);

0;
/*
===================================================================================

Copyright © 2025 JMP Statistical Discovery LLC, Cary, NC, USA. All rights reserved.

JMP STATISTICAL DISCOVERY LLC ("JMP") PERMITS THE USE OF THIS COMPUTER SOFTWARE
CODE ("CODE") ON AN AS-IS BASIS AND AUTHORIZES YOU TO USE THE CODE SUBJECT TO
THE TERMS LISTED HEREIN. BY USING THE CODE, YOU AGREE TO THESE TERMS. YOUR USE
OF THE CODE IS AT YOUR OWN RISK. JMP MAKES NO REPRESENTATION OR WARRANTY,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND TITLE,
WITH RESPECT TO THE CODE.

You may use the Code solely as part of a software product you currently have
licensed from JMP, JMP's parent company, SAS Institute Inc. ("SAS US") or one
of SAS' subsidiaries (together with SAS US, "SAS") or authorized agents (the
"Software"), and not for any other purpose. The Code is designed to either
correct an error in the Software or to add functionality to the Software but
has not necessarily been tested. Accordingly, JMP makes no representation or
warranty that the Code (1) will operate error-free or (2) will not contain any
viruses or other applications or executables (including, without limitation,
any "trap doors," "worms" and "time bombs") that will degrade or infect any
software product that you license from JMP or any other software or your
network or systems. JMP is under no obligation to maintain, support, or
continue to distribute the Code.

Neither JMP nor its licensors shall be liable to you or any third party for any
general, special, direct, indirect, consequential, incidental, or other damages
whatsoever arising out of or related to your use or inability to use the Code,
even if JMP has been advised of the possibility of such damages. Except as
otherwise provided above, the Code is governed by the same agreement that
governs the Software. If you do not have an existing agreement with JMP or SAS
governing the Software, you may not use the Code.

US export laws and regulations apply to the Code and any other JMP-provided
technology ("Controlled Material"). The Controlled Material originates from the
United States. Customer agrees to comply with these and other applicable export
and import laws and regulations, except as prohibited or penalized by law
("Trade Law"). Customer warrants that Customer and its users are not: (a)
prohibited by Trade Law from accessing Controlled Material without US
government approval; (b) located in or under control of any country or other
territory subject to general export or trade embargo under Trade Law; or (c)
engaged in any of the following end-uses: nuclear, chemical or biological
weapons; nuclear facilities not under International Atomic Energy Agency
safeguards; missiles or unmanned aerial vehicles capable of long-range use or
weapons delivery, military training or assistance, military or intelligence
end-use in Russia or in any country in Country Group D:5 of the United States
Export Administration Regulations; deep water, Arctic offshore or shale oil or
gas exploration involving Russia or Russian companies, or Russian energy export
pipelines. Customer will not import or use any data within the System that is
subject to the US International Traffic Arms Regulations. United States export
classification information for JMP software and its affiliates is available at
jmp.com/export.

JMP and all other JMP Statistical Discovery LLC product or service names are
registered trademarks or trademarks of SAS Institute Inc. in the USA and other
countries. ® indicates USA registration. Other brand and product names are
registered trademarks or trademarks of their respective companies.

==============================================================================
*/

```

**CustomReportExample3**

```jsl

// The header section for report title, category, and icon.
processNS:label = "Custom Report Example 3";
processNS:cdiscClass = "Custom Reports";
processNS:icon =
"/install/clinical/documentation/icons/clinical/DonutGraph3d.gif";
processNS:description =
"This report creates a pie chart of values from the selected ADSL variable.";

// The main report code.
processNS:runReport =
Function( {},
	{Default Local}, 
	// Including functions shared across reports.
	Include(
		Convert File Path(
			"$CLINICAL_HOME/JSLFiles/DataPrep.JSL",
			absolute,
			windows
		)
	);
	objRefNS:in_adsl = prepADSL();
	
	// Change JMP names to SAS Labels.
	jg
	:setColumnJMPNamesToSASLabels( objRefNS:in_adsl );
	
	// Linking an analysis data table to adsl. This allows the Review Subject Filter to filter the report.
	reportRefNS
	:linkAnalysisTableToADSLTable( objRefNS:in_adsl );
	
	// Apply value order and color preferences to an analysis data table.
	jg
	:ApplyValueOrderToTables(
		Eval List( {objRefNS:in_adsl} ),
		objRefNS:StudyName
	);
	
	// Retrieve the column names.
	objRefNS:columnNames = objRefNS:in_adsl <<
	getColumnNames( "string" );
	
	// Send content to the output pane.
	processNS
	:setReportOutput(
		V List Box(
			// Create a Graph Builder object, hiding the control panel, using the first column in the
			//  data table as the initially selected column, displayed as a pie ring, offering a
			//  column switcher to choose from any column in the data table.
			objRefNS:gb =
			Graph Builder(
				Show Control Panel( 0 ),
				Variables(
					X(
						Eval(
							objRefNS:columnNames[1]
						)
					)
				),
				Elements(
					Pie(
						X,
						Legend( 3 ),
						Pie Style( "Ring" )
					)
				),
				Column Switcher(
					Eval( objRefNS:columnNames[1] ),
					Eval( objRefNS:columnNames )
				)
			)
		)
	);
	
	// Collapse empty Options panel.
	objRefNS:mainhlb << ClosePanel( 1 );
	
	// Keep track of data sets created in this report so that they are automatically closed when the report tab is closed.
	processNS
	:addDataTableReference(
		"Custom Report Example Data",
		"objRefNS:in_adsl"
	);
	
	// Send these objects to JMP Live.
	processNS
	:defineStaticReportContent( {objRefNS:gb} );
	
	// Send these objects to the static report.
	processNS
	:defineLiveReportContent( {{objRefNS:gb}} );
);

0;
/*
===================================================================================

Copyright © 2025 JMP Statistical Discovery LLC, Cary, NC, USA. All rights reserved.

JMP STATISTICAL DISCOVERY LLC ("JMP") PERMITS THE USE OF THIS COMPUTER SOFTWARE
CODE ("CODE") ON AN AS-IS BASIS AND AUTHORIZES YOU TO USE THE CODE SUBJECT TO
THE TERMS LISTED HEREIN. BY USING THE CODE, YOU AGREE TO THESE TERMS. YOUR USE
OF THE CODE IS AT YOUR OWN RISK. JMP MAKES NO REPRESENTATION OR WARRANTY,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND TITLE,
WITH RESPECT TO THE CODE.

You may use the Code solely as part of a software product you currently have
licensed from JMP, JMP's parent company, SAS Institute Inc. ("SAS US") or one
of SAS' subsidiaries (together with SAS US, "SAS") or authorized agents (the
"Software"), and not for any other purpose. The Code is designed to either
correct an error in the Software or to add functionality to the Software but
has not necessarily been tested. Accordingly, JMP makes no representation or
warranty that the Code (1) will operate error-free or (2) will not contain any
viruses or other applications or executables (including, without limitation,
any "trap doors," "worms" and "time bombs") that will degrade or infect any
software product that you license from JMP or any other software or your
network or systems. JMP is under no obligation to maintain, support, or
continue to distribute the Code.

Neither JMP nor its licensors shall be liable to you or any third party for any
general, special, direct, indirect, consequential, incidental, or other damages
whatsoever arising out of or related to your use or inability to use the Code,
even if JMP has been advised of the possibility of such damages. Except as
otherwise provided above, the Code is governed by the same agreement that
governs the Software. If you do not have an existing agreement with JMP or SAS
governing the Software, you may not use the Code.

US export laws and regulations apply to the Code and any other JMP-provided
technology ("Controlled Material"). The Controlled Material originates from the
United States. Customer agrees to comply with these and other applicable export
and import laws and regulations, except as prohibited or penalized by law
("Trade Law"). Customer warrants that Customer and its users are not: (a)
prohibited by Trade Law from accessing Controlled Material without US
government approval; (b) located in or under control of any country or other
territory subject to general export or trade embargo under Trade Law; or (c)
engaged in any of the following end-uses: nuclear, chemical or biological
weapons; nuclear facilities not under International Atomic Energy Agency
safeguards; missiles or unmanned aerial vehicles capable of long-range use or
weapons delivery, military training or assistance, military or intelligence
end-use in Russia or in any country in Country Group D:5 of the United States
Export Administration Regulations; deep water, Arctic offshore or shale oil or
gas exploration involving Russia or Russian companies, or Russian energy export
pipelines. Customer will not import or use any data within the System that is
subject to the US International Traffic Arms Regulations. United States export
classification information for JMP software and its affiliates is available at
jmp.com/export.

JMP and all other JMP Statistical Discovery LLC product or service names are
registered trademarks or trademarks of SAS Institute Inc. in the USA and other
countries. ® indicates USA registration. Other brand and product names are
registered trademarks or trademarks of their respective companies.

==============================================================================
*/

```

**CustomReportExample4**

```jsl

// The header section for report title, category, icon, and help.
processNS:label = "Custom Report Example 4";
processNS:labelSkeleton =
"Custom Report with Variables {{^1}}, Example 4"; // For dynamically renaming the report with a substring. See the 'renameReport' examples.
processNS:reportSelectorTab = 1; // 1: Display on report selector; 0: Do not display on report selector.
processNS:drillDown = 0; // 1: This report can also be used as a drilldown; 0: This report cannot also be used as a drilldown.
processNS:cdiscClass = "Custom Reports";
processNS:icon =
"/install/clinical/documentation/icons/clinical/DistributionAnalysis.gif";
processNS:documentation = "https://www.jmp.com/";
processNS:description =
"This report demonstrates a basic requirements declaration, switches data table columns names to SAS Labels, "
 ||
"applies value order and color preferences, adds a drill down button, writes notes to the JMP log, checks for a custom error "
 ||
"condition, declares a function for use within a widget script, defines an assortment of custom widgets, creates a report filter, "
 ||
"tracks data tables so that they are automatically closed when the report is closed, and defines content to publish to Create Static "
 || "Report and Create Live Report.";

// Specify any variable requirements here. Those requirements not met will automatically prevent the report from running.
processNS:requirements = ["_ONE_OR_MORE_DEMOGRAPHICS_"
 => {{"ARM"}}];

// The main report code.
processNS:runReport =
Function( {},
	{Default Local}, 
	// Including functions shared across reports.
	Include(
		Convert File Path(
			"$CLINICAL_HOME/JSLFiles/DataPrep.JSL",
			absolute,
			windows
		)
	);
	objRefNS:in_adsl = prepADSL();
	
	// Change JMP names to SAS Labels.
	jg
	:setColumnJMPNamesToSASLabels( objRefNS:in_adsl );
	
	// Linking an analysis data table to adsl. This allows the Review Subject Filter to filter the report.
	reportRefNS
	:linkAnalysisTableToADSLTable( objRefNS:in_adsl );
	
	// Apply value order and color preferences to an analysis data table.
	jg
	:ApplyValueOrderToTables(
		Eval List( {objRefNS:in_adsl} ),
		objRefNS:StudyName
	);
	
	// Add predefined drill downs to the report.
	processNS:addDrillDowns( {"ShowSubjects"} );
	
	// Working with requirements return. (Not necessary for this report.)
	processNS:note(
		"Datasets in _ONE_OR_MORE_DEMOGRAPHICS_: " ||
		Char(
			objRefNS:requirementsReturn["domains_wild"
			]["_ONE_OR_MORE_DEMOGRAPHICS_"]["present"]
		)
	);
	processNS:note(
		"Datasets passing requirements for _ONE_OR_MORE_DEMOGRAPHICS_: "
		 || Char(
			objRefNS:requirementsReturn["domains_wild"
			]["_ONE_OR_MORE_DEMOGRAPHICS_"]["pass"]
		)
	);
	domainsPass = objRefNS:requirementsReturn[
	"domains_wild"]["_ONE_OR_MORE_DEMOGRAPHICS_"][
	"pass"];
	For( i = 1, i <= N Items( domainsPass ), i++,
		processNS:note(
			"Required chosen variables in " ||
			domainsPass[i] || ": " ||
			Char(
				objRefNS:requirementsReturn["domains"]
				[domainsPass[i]]["required_chosen"]
			)
		)
	);
	
	// A custom error check. (Not necessary for this report. Set to 1 to simulate an error.)
	If( 0,
		processNS
		:fatalError(
			"Cannot run this report because condition X was not met.",
			1
		)
	);
	
	// Creating a function for use within this report only.
	objRefNS:createResults =
	Function( {cols = {}},
		{Default Local},
		distCode = "objRefNS:in_adsl << Distribution(";
		For( i = 1, i <= N Items( cols ), i++,
			If( i > 1, distCode ||= "," );
			distCode ||=
			Eval Insert(
				"\[
				Nominal Distribution(Column(:Name("^cols[i]^")))
			]\"
			);
		);
		distCode ||= ")";
		Eval(
			Parse(
				Eval Insert(
					"\[
			// Send content to the output pane.
			processNS:setReportOutput(
				VListBox(
					// Create a Distribution object using the code built in distCode.
					objRefNS:db = ^distCode^
				)
			);
		]\"
				)
			)
		);
	);
	
	// Calling a widget constructor (in non-inline form, with a script that runs after the user changes the value, running the script initially).
	processNS
	:makeCreateAdditionalDistributionsForSelectedVariablesWidget(
		0, // 0 is non-inline form; use 1 for inline form
		// script
		Expr(
			Expr(
				Expr(
			// Retrieve the current values this widget, convert them into JMP names, and store these in objRefNS:tadslCols.
					objRefNS:tadslCols = jg
					:getColumnJMPNames(
						jg
						:getWidgetValue(
							"objRefNS:CreateAdditionalDistributionsForSelectedVariablesolb"
						), objRefNS:in_adsl
					);
			
			// Call the function defined in this report.
					objRefNS
					:createResults(
						objRefNS:tadslCols
					);
			
			// Renaming a report.
					//processNS:renameReportTitleDomain("ADSL"); // Honors configuration display preferences for domains.
					processNS
					:renameReportTitleSubstring(
						Char( objRefNS:tadslCols )
					);
			//processNS:renameReportTitle("This entirely replaces the original report title."); // Freeform -- does not use processNS:labelSkeleton.
			
					// When a widget value change requires the entire report to rerun, issue the following, but be sure to set the runScriptInitial
					//  argument in the widget constructor to 0 to prevent an endless loop.
					//processNS:rerunReport();
				)
			)
		),
		1 // 0 is do not run the script initially; 1 is run the script initially
	);
	
	// Example custom widget creation.
	processNS
	:makeWidget(
		["ref" => "objRefNS:w1",
		"class" => "ComboBoxClass"]
	);
	processNS
	:makeWidget(
		["ref" => "objRefNS:w2",
		"class" => "ComboBoxClass",
		"label" => "ComboBoxClass Widget 2",
		"values" => {"A~a", "B~b", "C~c"},
		"initialvalue" => "B"]
	);
	processNS
	:makeWidget(
		["ref" => "objRefNS:w3",
		"class" => "ComboBoxClass",
		"label" => "ComboBoxClass Widget 3",
		"valuesdataref" => "objRefNS:in_adsl"]
	);
	processNS
	:makeWidget(
		["ref" => "objRefNS:w4",
		"class" => "CalendarFieldClass",
		"label" => "CalendarFieldClass Widget",
		"initialvalue" => "01/01/2015",
		"selectedformat" => "d/m/y"]
	);
	processNS
	:makeWidget(
		["ref" => "objRefNS:w5",
		"class" => "CheckboxClass",
		"label" => "CheckboxClass Widget",
		"initialvalue" => "No",
		"scriptd" =>
		Expr(
			Expr(
				Expr(
					If( !((objRefNS:w5):isChecked()),
						Try(
							(objRefNS:w6)
							:inputContainer <<
							Visibility( "collapse" )
						),
						Try(
							(objRefNS:w6)
							:inputContainer <<
							Visibility( "visible" )
						)
					)
				)
			)
		)]
	);
	processNS
	:makeWidget(
		["ref" => "objRefNS:w6",
		"class" => "FileAndFolderFieldClass",
		"label" => "FileAndFolderFieldClass Widget",
		"selectionoptions" => ["selectDirectory" => 1],
		"scriptd" =>
		Expr(
			Expr(
				Expr(
					If( !((objRefNS:w5):isChecked()),
						Try(
							(objRefNS:w6)
							:inputContainer <<
							Visibility( "collapse" )
						),
						Try(
							(objRefNS:w6)
							:inputContainer <<
							Visibility( "visible" )
						)
					)
				)
			)
		), "script" =>
		Expr(
			Expr(
				Expr(
					processNS:rerunReport()
				)
			)
		)]
	);
	processNS
	:makeWidget(
		["ref" => "objRefNS:w7",
		"class" => "ListBoxClass",
		"label" => "ListBoxClass Widget",
		"maxselected" => 2,
		"values" => {"A~a", "B~b", "C~c"},
		"initialvalue" => {"B", "C"}, "script" =>
		Expr(
			Expr(
				Expr(
					processNS:rerunReport()
				)
			)
		)]
	);
	processNS
	:makeWidget(
		["ref" => "objRefNS:w8",
		"class" => "ManualEntryListBoxClass",
		"label" => "ManualEntryListBoxClass Widget"]
	);
	processNS
	:makeWidget(
		["ref" => "objRefNS:w9",
		"class" => "ManualEntryOrderedListBoxClass",
		"label" =>
		"ManualEntryOrderedListboxClass Widget",
		"initialvalue" => {"a", "b", "c"}, "script"
		 => Expr(
			Expr(
				Expr(
					processNS:rerunReport()
				)
			)
		)]
	);
	processNS
	:makeWidget(
		["ref" => "objRefNS:w10",
		"class" => "OrderedListBoxClass",
		"label" => "OrderedListBoxClass Widget",
		"values" => {"A~a", "B~b", "C~c"},
		"displayoption" => 2,
		"initialvalue" => {"B"}]
	);
	processNS
	:makeWidget(
		["ref" => "objRefNS:w11",
		"class" => "RadioBoxClass",
		"label" => "RadioBoxClass Widget",
		"values" => {"a", "b", "c"}, "initialvalue"
		 => "b",
		"script" =>
		Expr(
			Expr(
				Expr(
					processNS:rerunReport()
				)
			)
		)]
	);
	processNS
	:makeWidget(
		["ref" => "objRefNS:w12",
		"class" => "SliderFieldClass",
		"label" => "SliderFieldClass Widget",
		"min" => 10,
		"max" => 20,
		"script" =>
		Expr(
			Expr(
				Expr(
					processNS:rerunReport()
				)
			)
		)]
	);
	processNS
	:makeWidget(
		["ref" => "objRefNS:w13",
		"class" => "SpinnerFieldClass",
		"label" => "SpinnerFieldClass Widget",
		"min" => 10,
		"max" => 20,
		"increment" => 2]
	);
	processNS
	:makeWidget(
		["ref" => "objRefNS:w14",
		"class" => "TextFieldClass",
		"label" => "TextFieldClass Widget",
		"initialvalue" => "Test",
		"script" =>
		Expr(
			Expr(
				Expr(
					processNS:rerunReport()
				)
			)
		)]
	);
	processNS
	:makeWidget(
		["ref" => "objRefNS:w16",
		"class" => "OrderedListBoxClass",
		"label" => "OrderedListBoxClass Widget 2",
		"valuesdataref" => "objRefNS:in_adsl",
		"initialvalue" => {"AGE"}]
	);
	
	// Obtain the current internal value from a widget.
	processNS:note(
		"objRefNS:w2's value is " ||
		Char( jg:getWidgetValue( "objRefNS:w2" ) ) ||
		"."
	);
	
	// Obtain the current display value from a widget.
	processNS:note(
		"objRefNS:w2's value is " ||
		Char(
			jg
			:getWidgetValueAlternate( "objRefNS:w2" )
		) || "."
	);
	
	// Place the above widget into the Options Data panel.
	processNS
	:appendDataOptions(
		V List Box(
			// Paste the inputContainer (displaybox) of the widgets in the display tree.
			(objRefNS
			:CreateAdditionalDistributionsForSelectedVariablesolb
			):inputContainer, 
			// Example custom widgets created above.
			(objRefNS:w1):inputContainer,
			(objRefNS:w2):inputContainer,
			(objRefNS:w3):inputContainer,
			(objRefNS:w4):inputContainer,
			(objRefNS:w5):inputContainer,
			(objRefNS:w6):inputContainer,
			(objRefNS:w7):inputContainer,
			(objRefNS:w8):inputContainer,
			(objRefNS:w9):inputContainer,
			(objRefNS:w10):inputContainer,
			(objRefNS:w11):inputContainer,
			(objRefNS:w12):inputContainer,
			(objRefNS:w13):inputContainer,
			(objRefNS:w14):inputContainer, 
			// Example custom widget created inline.
			processNS
			:makeWidget(
				["ref" => "objRefNS:w15",
				"class" => "CheckboxClass",
				"label" => "CheckboxClass Widget 2",
				"inline" => 1]
			),
			(objRefNS:w16):inputContainer
		),
		0
	);
	
	// Create a Report Filter.
	If( Length( objRefNS:tadslCols ),
		objRefNS:ReportDataFilterReferenceList =
		reportRefNS
		:createReportFilter(
			objRefNS:in_adsl, objRefNS:tadslCols
		);
		// Do not display the filter histograms and bars.
		objRefNS:rptfilter = objRefNS
		:ReportDataFilterReferenceList[2];
		objRefNS:rptfilter <<
		Show Histograms and Bars( 0 );
	);
	
	// Place the Report Filter in the Options Display panel.
	processNS
	:appendDisplayOptions(
		objRefNS:ReportDataFilterReferenceList[1]
	);
	
	// Keep track of data sets created in this report so that they are automatically closed when the report tab is closed.
	processNS
	:addDataTableReference(
		"Custom Report Example ADSL Data",
		"objRefNS:in_adsl"
	);
	
	// Send these objects to JMP Live.
	processNS
	:defineStaticReportContent( {objRefNS:db} );
	
	// Send these objects to the static report.
	processNS
	:defineLiveReportContent( {{objRefNS:db}} );
);

0;
/*
===================================================================================

Copyright © 2025 JMP Statistical Discovery LLC, Cary, NC, USA. All rights reserved.

JMP STATISTICAL DISCOVERY LLC ("JMP") PERMITS THE USE OF THIS COMPUTER SOFTWARE
CODE ("CODE") ON AN AS-IS BASIS AND AUTHORIZES YOU TO USE THE CODE SUBJECT TO
THE TERMS LISTED HEREIN. BY USING THE CODE, YOU AGREE TO THESE TERMS. YOUR USE
OF THE CODE IS AT YOUR OWN RISK. JMP MAKES NO REPRESENTATION OR WARRANTY,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND TITLE,
WITH RESPECT TO THE CODE.

You may use the Code solely as part of a software product you currently have
licensed from JMP, JMP's parent company, SAS Institute Inc. ("SAS US") or one
of SAS' subsidiaries (together with SAS US, "SAS") or authorized agents (the
"Software"), and not for any other purpose. The Code is designed to either
correct an error in the Software or to add functionality to the Software but
has not necessarily been tested. Accordingly, JMP makes no representation or
warranty that the Code (1) will operate error-free or (2) will not contain any
viruses or other applications or executables (including, without limitation,
any "trap doors," "worms" and "time bombs") that will degrade or infect any
software product that you license from JMP or any other software or your
network or systems. JMP is under no obligation to maintain, support, or
continue to distribute the Code.

Neither JMP nor its licensors shall be liable to you or any third party for any
general, special, direct, indirect, consequential, incidental, or other damages
whatsoever arising out of or related to your use or inability to use the Code,
even if JMP has been advised of the possibility of such damages. Except as
otherwise provided above, the Code is governed by the same agreement that
governs the Software. If you do not have an existing agreement with JMP or SAS
governing the Software, you may not use the Code.

US export laws and regulations apply to the Code and any other JMP-provided
technology ("Controlled Material"). The Controlled Material originates from the
United States. Customer agrees to comply with these and other applicable export
and import laws and regulations, except as prohibited or penalized by law
("Trade Law"). Customer warrants that Customer and its users are not: (a)
prohibited by Trade Law from accessing Controlled Material without US
government approval; (b) located in or under control of any country or other
territory subject to general export or trade embargo under Trade Law; or (c)
engaged in any of the following end-uses: nuclear, chemical or biological
weapons; nuclear facilities not under International Atomic Energy Agency
safeguards; missiles or unmanned aerial vehicles capable of long-range use or
weapons delivery, military training or assistance, military or intelligence
end-use in Russia or in any country in Country Group D:5 of the United States
Export Administration Regulations; deep water, Arctic offshore or shale oil or
gas exploration involving Russia or Russian companies, or Russian energy export
pipelines. Customer will not import or use any data within the System that is
subject to the US International Traffic Arms Regulations. United States export
classification information for JMP software and its affiliates is available at
jmp.com/export.

JMP and all other JMP Statistical Discovery LLC product or service names are
registered trademarks or trademarks of SAS Institute Inc. in the USA and other
countries. ® indicates USA registration. Other brand and product names are
registered trademarks or trademarks of their respective companies.

==============================================================================
*/

```

