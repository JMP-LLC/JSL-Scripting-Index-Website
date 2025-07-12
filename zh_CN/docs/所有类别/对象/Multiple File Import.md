# Multiple File Import



## 关联的构造器

### Multiple File Import

**语法:** mfiObj = Multiple File Import();

**说明:** 创建“多个文件导入”对象；该对象接受设置文件夹、过滤文件和导入的消息。要显示对话框，请使用“创建窗口”消息。要立即导入，请使用“导入数据”消息，该消息将返回已创建表的列表。

```jsl

Names Default To Here( 1 );
// use the save-script-to-script-window button 
// in the MFI dialog to see more messages
// for filtering files and controlling the import
Multiple File Import(
	<<Set Folder( "$DESKTOP" ),
	<<Set Name Filter( "*.csv;" ),
	<<Set Name Enable( 1 )
) << Create Window;

```

## 项消息

### Create Window

**语法:** obj << Create Window

**说明:** 弹出一个带有当前设置的窗口。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << set folder( "$sample_import_data" );
mfi << create window();

```

### Get Add File Date Column

**语法:** obj << Get Add File Date Column

**说明:** 若导入的表中包含一列对应从其中导入行的文件的名称，则返回 1。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Add File Date Column( 1 );
mfi << Get Add File Date Column();

```

### Get Add File Name Column

**语法:** obj << Get Add File Name Column

**说明:** 若导入的表中包含一列对应从其中导入行的文件的名称，则返回 1。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Add File Name Column( 1 );
mfi << Get Add File Name Column();

```

### Get Add File Size Column

**语法:** obj << Get Add File Size Column

**说明:** 若导入的表中包含一列对应从其中导入行的文件大小，则返回 1。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Add File Size Column( 1 );
mfi << Get Add File Size Column();

```

### Get CSV Allow Numeric

**语法:** obj << Get CSV Allow Numeric

**说明:** 若从明显的数值数据创建数值列，则返回 1。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV Allow Numeric;

```

### Get CSV EOF Comma

**语法:** obj << Get CSV EOF Comma

**说明:** 设置为 1 以使用逗号分隔将用于创建不同列的字段。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV EOF Comma();

```

### Get CSV EOF Other

**语法:** obj << Get CSV EOF Other

**说明:** 设置为分隔将用于创建不同列的字段的值。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV EOF Other();

```

### Get CSV EOF Space

**语法:** obj << Get CSV EOF Space

**说明:** 设置为 1 以使用空格分隔将用于创建不同列的字段。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV EOF Space();

```

### Get CSV EOF Spaces

**语法:** obj << Get CSV EOF Spaces

**说明:** 设置为 1 以使用空格分隔将用于创建不同列的字段。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV EOF Spaces();

```

### Get CSV EOF Tab

**语法:** obj << Get CSV EOF Tab

**说明:** 设置为 1 以使用制表符分隔将用于创建不同列的字段。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV EOF TAb();

```

### Get CSV EOL CR

**语法:** obj << Get CSV EOL CR

**说明:** 若使用 CR 作为值来分隔将用于创建不同数据行的行，则返回 1。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV EOL CR();

```

### Get CSV EOL CRLF

**语法:** obj << Get CSV EOL CRLF

**说明:** 若使用 CRLF 作为值来分隔将用于创建不同数据行的行，则返回 1。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV EOL CRLF();

```

### Get CSV EOL LF

**语法:** obj << Get CSV EOL LF

**说明:** 若使用 LF 作为值来分隔将用于创建不同数据行的行，则返回 1。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV EOL LF();

```

### Get CSV EOL Other

**语法:** obj << Get CSV EOL Other

**说明:** 获取输入文件中分隔行的定制值。该值在输出中创建行。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV EOF Other();

```

### Get CSV EOL Semicolon

**语法:** obj << Get CSV EOL Semicolon

**说明:** 若分号代表数据行之间的行，则返回 1。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV EOL Semicolon();

```

### Get CSV Escape

**语法:** obj << Get CSV Escape

**说明:** 获取转义特殊字符的字符，例如字段结尾、行结尾或引号分隔符。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV Escape();

```

### Get CSV First Data Line

**语法:** obj << Get CSV First Data Line

**说明:** 导入文件中包含第一行数据的行号。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV First Data Line();

```

### Get CSV First Header Line

**语法:** obj << Get CSV First Header Line

**说明:** 获取导入文件中具有标题的第一行，将用于创建列名。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV Has Headers( 1 );
mfi << Set CSV First Header Line( 2 );
mfi << Get CSV First Header Line();

```

### Get CSV Has Headers

**语法:** obj << Get CSV Has Headers

**说明:** 若导入时将使用标题设置，则返回 1。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV Has Headers;

```

### Get CSV Number Of Header Lines

**语法:** obj << Get CSV Number Of Header Lines

**说明:** 获取将用于列名的标题行数。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV Has Headers( 1 );
mfi << Set CSV Number Of Header Lines( 2 );
mfi << Get CSV Number Of Header Lines();

```

### Get CSV Quote

**语法:** obj << Get CSV Quote

**说明:** 获取分隔加引号的字符串的值

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get CSV Quote();

```

### Get Charset

**语法:** obj << Get Charset

**说明:** 返回将用于导入数据的字符集。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Charset();

```

### Get Date Count

**语法:** obj << Get Date Count

**说明:** 返回日期过滤器（若已启用）范围内的文件数，否则返回文件总数。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Folder( "$downloads" );
mfi << Set Date Filter( {05Sep2019:14:30:00, Today()} );
mfi << Set Date Enable( 1 );
mfi << Get Date Count();

```

### Get Date Enable

**语法:** obj << Get Date Enable

**说明:** 若启用了日期过滤器，则返回 1。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Date Enable();

```

### Get Date Filter

**语法:** obj << Get Date Filter

**说明:** 返回当前日期过滤器。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Date Filter( {05Sep2019:14:30:00, Today()} );
mfi << Set Date Enable( 1 );
mfi << Get Date Filter();

```

### Get Excel Add Sheet Name Column

**语法:** obj << Get Excel Add Sheet Name Column

**说明:** 若将向导入的表添加一列，该列具有数据来源的电子表格的名称，则返回 1。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Add Sheet Name Column;

```

### Get Excel Best Guess

**语法:** obj << Get Excel Best Guess

**说明:** 若动态查找数据和列标题，则返回 1。若导入 Excel 数据时将使用其他 Excel 设置，则返回 0。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Best Guess;

```

### Get Excel Column Headers As Hierarchies

**语法:** obj << Get Excel Column Headers As Hierarchies

**说明:** 若标题行中在水平方向跨多个单元格的电子表格单元格被视为层次，则返回 1。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Column Headers as Hierarchies;

```

### Get Excel Column Name Separator

**语法:** obj << Get Excel Column Name Separator

**说明:** 获取在将多个单元格拼接为列标题名称时要使用的字符串。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Column Name Separator;

```

### Get Excel First Data Column

**语法:** obj << Get Excel First Data Column

**说明:** 返回电子表格中要作为数据导入的第一个非空列。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel First Data Column;

```

### Get Excel First Data Line

**语法:** obj << Get Excel First Data Line

**说明:** 返回电子表格中要作为数据导入的第一个非空行。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel First Data Line;

```

### Get Excel First Header Line

**语法:** obj << Get Excel First Header Line

**说明:** 返回电子表格中要作为列标题导入的第一个非空行。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel First Header Line;

```

### Get Excel Has Headers

**语法:** obj << Get Excel Has Headers

**说明:** 若将从电子表格导入标题则返回 1，否则返回 0。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Has Headers;

```

### Get Excel Import Color Cells

**语法:** obj << Get Excel Import Color Cells

**说明:** 若将导入电子表格数据单元格的背景颜色，则返回 1。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Import Color Cells;

```

### Get Excel Last Data Column

**语法:** obj << Get Excel Last Data Column

**说明:** 返回要导入的电子表格数据区域中的最后一列。若返回缺失，则动态查找最后一列。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Last Data Column;

```

### Get Excel Last Data Row

**语法:** obj << Get Excel Last Data Row

**说明:** 返回要导入的电子表格数据区域中的最后一行。若返回缺失，则动态查找最后一行。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Last Data Row;

```

### Get Excel Limit Column Type Detection

**语法:** obj << Get Excel Limit Column Type Detection

**说明:** 若在检测列的数据类型时检查每列中的所有电子表格单元格则返回 0，若仅检查子集则返回 1。限制检测可提高大型电子表格的性能。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Limit Column Type Detection;

```

### Get Excel Multiple Series Stack

**语法:** obj << Get Excel Multiple Series Stack

**说明:** 在“将 Excel 列标题设置为层次”设置为 1 时若跨越的列将被堆叠，则返回 1。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Multiple Series Stack;

```

### Get Excel Number of Header Lines

**语法:** obj << Get Excel Number of Header Lines

**说明:** 返回电子表格中将作为列标题导入的行数。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Number of Header Lines;

```

### Get Excel Replicate Data In Spanned Rows

**语法:** obj << Get Excel Replicate Data In Spanned Rows

**说明:** 对于垂直合并的多个标题行，设置为 1 可重复该值。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Replicate Data In Spanned Rows;

```

### Get Excel Replicate Headers In Spanned Rows

**语法:** obj << Get Excel Replicate Headers In Spanned Rows

**说明:** 若在创建 JMP 表列名时合并的电子表格标题单元格具有重复的单元格值，则返回 1。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Replicate Headers In Spanned Rows;

```

### Get Excel Suppress Empty Columns

**语法:** obj << Get Excel Suppress Empty Columns

**说明:** 设置为 1 可防止导入空列。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Suppress Empty Columns;

```

### Get Excel Suppress Hidden Columns

**语法:** obj << Get Excel Suppress Hidden Columns

**说明:** 若不导入隐藏列，则返回 1。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Suppress Hidden Columns;

```

### Get Excel Suppress Hidden Rows

**语法:** obj << Get Excel Suppress Hidden Rows

**说明:** 若不导入隐藏行，则返回 1。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Suppress Hidden Rows;

```

### Get Excel Worksheet Filter

**语法:** obj << Get Excel Worksheet Filter

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Excel Worksheet Filter;

```

### Get File List

**语法:** obj << Get File List

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

```

### Get Folder

**语法:** obj << Get Folder

**说明:** 返回文件夹名称。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Folder( "$Desktop" );
mfi << Get Folder;

```

### Get Folder Count

**语法:** obj << Get Folder Count

**说明:** 返回文件夹中的文件数。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Folder( "$Desktop" );
mfi << Get Folder Count;

```

### Get Import Callback

**语法:** obj << Get Import Callback

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

Create Directory( "$temp/deleteme" );
Save Text File( "$temp/deleteme/test1.txt", "a1\!n1" );
Save Text File( "$temp/deleteme/test2.txt", "a2\!n1" );
mfi = Multiple File Import(
	<<Set Folder( "$temp/deleteme/" ),
	<<Set Name Filter( "test?.txt;" ),
	<<Set Name Enable( 1 ),
	<<Set Add File Name Column( 1 ),
	<<Set Import Callback(
		Function( {a, b},
			Write( "\!na=", a );
			Write( "\!nb=", b );
		)
	)
);
mfi << Get Import Callback();

```

### Get Import Mode

**语法:** obj << Get Import Mode

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Import Mode( "Row Per Line" );
mfi << Get Import Mode();

```

### Get JSON Guess

**语法:** obj << Get JSON Guess

**说明:** 返回用于导入 JSON 数据以创建数据表的内置方法。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get JSON Guess();

```

### Get JSON Method

**语法:** obj << Get JSON Method

**说明:** 返回用于导入 JSON 数据的当前方法。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get JSON Method();

```

### Get JSON Settings

**语法:** obj << Get JSON Settings

**说明:** 返回导入 JSON 数据的定制 JSL。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get JSON Settings();

```

### Get Name Count

**语法:** obj << Get Name Count

**说明:** 若设置了“设置名称启用”，则返回与当前名称过滤器匹配的文件数，否则返回文件总数。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Name Count();

```

### Get Name Enable

**语法:** obj << Get Name Enable

**说明:** 若应用当前名称过滤器来过滤包含的文件，则返回 1。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Name Enable( 1 );
mfi << Get Name Enable();

```

### Get Name Filter

**语法:** obj << Get Name Filter

**说明:** 返回当前名称过滤器。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Name Filter( "*.csv;*.txt" );
mfi << Set Name Enable( 1 );
mfi << Get Name Filter();

```

### Get PDF Method

**语法:** obj << Get PDF Method

**说明:** 返回用于导入 PDF 数据的当前方法。

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get PDF Method();

```

### Get PDF Settings

**语法:** obj << Get PDF Settings

**说明:** 返回导入 PDF 数据的定制 JSL。

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get PDF Settings();

```

### Get Script

**语法:** obj << Get Script

**说明:** 从当前设置创建脚本。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Script();

```

### Get Show Hidden

**语法:** obj << Get Show Hidden

**说明:** 返回是否包含隐藏文件

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Show Hidden( 1 );
mfi << Get Show Hidden();

```

### Get Size Count

**语法:** obj << Get Size Count

**说明:** 若设置了“设置大小启用”，则返回与当前大小过滤器匹配的文件数，否则返回文件总数。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Folder( "$Documents" );
mfi << Set Size Filter( {0, 1000} );
mfi << Set Size Enable( 1 );
Print( mfi << Get Size Count() );
mfi << Set Size Enable( 0 );
Print( mfi << Get Size Count() );

```

### Get Size Enable

**语法:** 0|1 = obj << Get Size Enable

**说明:** 若启用了大小过滤器，则返回 1。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Size Enable( 1 );
mfi << Set Size Filter( {0, 1000} );
mfi << Get Size Enable();

```

### Get Size Filter

**语法:** obj << Get Size Filter

**说明:** 返回一个列表，其第一个成员是包含的最小文件大小，第二个数字是包含的最大文件大小。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Size Filter( {0, 1000} );
mfi << Get Size Filter();

```

### Get Stack Mode

**语法:** obj << Get Stack Mode

**说明:** 若在导入时将相似的输入文件合并到一个表中，则返回“堆叠类似”；若将输入文件合并到两个或多个表中，则返回“每个文件对应一个表”。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get Stack Mode();

```

### Get Subfolders

**语法:** obj << Get Subfolders

**说明:** 若包含子文件夹中的文件，则返回 1。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Subfolders( 1 );
mfi << Get Subfolders();

```

### Get Use File List

**语法:** obj << Get Use File List

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

```

### Get XML Guess

**语法:** obj << Get XML Guess

**说明:** 返回用于导入 XML 数据以创建数据表的内置方法。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get XML Guess();

```

### Get XML Method

**语法:** obj << Get XML Method

**说明:** 返回用于导入 XML 数据的当前方法。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get XML Method();

```

### Get XML Settings

**语法:** obj << Get XML Settings

**说明:** 返回用于导入 xml 数据的定制 jsl。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Get XML Settings();

```

### Import Data

**语法:** list of data tables = obj << Import Data

**说明:** 根据当前设置导入数据并返回数据表列表。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Folder( "$SAMPLE_IMPORT_DATA" );
mfi << Set Name Filter( "*.txt" );
mfi << Set Name Enable( 1 );
tables = mfi << Import Data();

```

### Set Add File Date Column

**语法:** obj << Set Add File Date Column

**说明:** 设置为使用从其中导入行的文件大小创建一列。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Add File Date Column( 1 );

```

### Set Add File Name Column

**语法:** obj << Set Add File Name Column

**说明:** 设置为使用从其中导入行的文件名创建一列。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Add File Name Column( 1 );

```

### Set Add File Size Column

**语法:** obj << Set Add File Size Column

**说明:** 设置为使用从其中导入行的文件大小创建一列。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Add File Size Column( 1 );

```

### Set CSV Allow Numeric

**语法:** obj << Set CSV Allow Numeric

**说明:** 设置为 1 允许从明显的数值数据创建数值列，或设置为 0 以创建所有字符列。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV Allow Numeric( 1 );

```

### Set CSV EOF Comma

**语法:** obj << Set CSV EOF Comma

**说明:** 设置为 1 以使用逗号分隔将用于创建不同列的字段。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV EOF Comma( 1 );

```

### Set CSV EOF Other

**语法:** obj << Set CSV EOF Other

**说明:** 设置为分隔将用于创建不同列的字段的值。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV EOF Other( "\" );

```

### Set CSV EOF Space

**语法:** obj << Set CSV EOF Space

**说明:** 设置为 1 以使用空格分隔将用于创建不同列的字段。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV EOF Space( 1 );

```

### Set CSV EOF Spaces

**语法:** obj << Set CSV EOF Spaces

**说明:** 设置为 1 以使用空格分隔将用于创建不同列的字段。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV EOF Spaces( 1 );

```

### Set CSV EOF Tab

**语法:** obj << Set CSV EOF Tab

**说明:** 设置为 1 以使用制表符分隔将用于创建不同列的字段。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV EOF Tab( 1 );

```

### Set CSV EOL CR

**语法:** obj << Set CSV EOL CR

**说明:** 设置为 1 以使用 CR 作为值来分隔将用于创建不同数据行的行。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV EOL CR( 1 );

```

### Set CSV EOL CRLF

**语法:** obj << Set CSV EOL CRLF

**说明:** 设置为 1 以使用 CRLF 作为值来分隔将用于创建不同数据行的行。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV EOL CRLF( 1 );

```

### Set CSV EOL LF

**语法:** obj << Set CSV EOL LF

**说明:** 设置为 1 以使用 LF 作为值来分隔将用于创建不同数据行的行。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV EOL LF( 1 );

```

### Set CSV EOL Other

**语法:** obj << Set CSV EOL Other

**说明:** 设置输入文件中分隔行的定制值。该值在输出中创建行。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV EOF Other( "\" );

```

### Set CSV EOL Semicolon

**语法:** obj << Set CSV EOL Semicolon

**说明:** 设置为 1 以使用分号表示数据行之间的行。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV EOL Semicolon( 1 );

```

### Set CSV Escape

**语法:** obj << Set CSV Escape

**说明:** 设置转义特殊字符的字符，例如字段结尾、行结尾或引号分隔符。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV Escape( "\" );

```

### Set CSV First Data Line

**语法:** obj << Set CSV First Data Line

**说明:** 导入文件中包含第一行数据的行号。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV First Data Line( 4 );

```

### Set CSV First Header Line

**语法:** obj << Set CSV First Header Line

**说明:** 设置导入文件中具有标题的第一行，将用于创建列名。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV Has Headers( 1 );
mfi << Set CSV First Header Line( 2 );

```

### Set CSV Has Headers

**语法:** obj << Set CSV Has Headers

**说明:** 设置为 1 以使用“CSV 第一个标题行”和“CSV 标题行数量”。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV Has Headers( 1 );

```

### Set CSV Number Of Header Lines

**语法:** obj << Set CSV Number Of Header Lines

**说明:** 设置将用于列名的标题行数。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV Has Headers( 1 );
mfi << Set CSV Number Of Header Lines( 2 );

```

### Set CSV Quote

**语法:** obj << Set CSV Quote

**说明:** 设置分隔加引号的字符串的值。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set CSV Quote( "'" );

```

### Set Charset

**语法:** obj << Set Charset

**说明:** 设置导入数据时应使用的字符集。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Charset( "Best Guess" );

```

### Set Date Enable

**语法:** obj << Set Date Enable

**说明:** 启用日期时间过滤器。默认值是关闭，即使已设置，它也会忽略日期过滤器。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Date Filter( {05Sep2019:14:30:00, Today()} );
mfi << Set Date Enable( 1 );

```

### Set Date Filter

**语法:** obj << Set Date Filter( {start of date time range, end of date time range} )

**说明:** 根据日期和时间范围过滤包含的文件。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Date Filter( {05Sep2019:14:30:00, Today()} );
mfi << Set Date Enable( 1 );

```

### Set Excel Add Sheet Name Column

**语法:** obj << Set Excel Add Sheet Name Column

**说明:** 若设置为 1，一列将添加到导入的表中，该列具有数据来源的电子表格的名称。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Add Sheet Name Column( 1 );

```

### Set Excel Best Guess

**语法:** obj << Set Excel Best Guess

**说明:** 动态查找每个电子表格中的数据并对列名进行最佳推测。若设置了该选项，则不会使用除“设置 Excel 添加工作表名称列”之外的其他 Excel 参数。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Best Guess( 1 );

```

### Set Excel Column Headers As Hierarchies

**语法:** obj << Set Excel Column Headers As Hierarchies

**说明:** 设置为 1 可将多个列标题行视为层次。这将重新组织标题中跨单元格中的信息，并将该数据放在生成的表的行中。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

Multiple File Import(
	fJust << Set Folder( "$sample_import_data" ),
	<<Set Name Filter( "texas precipitation.xlsx" ),
	<<Set Name Enable( 1 ),
	<<Set Excel Best Guess( 0 ),
	<<Set Excel Has Headers( 1 ),
	<<Set Excel Number of Header Lines( 2 ),
	<<Set Excel First Data Line( 3 ),
	<<Set Excel Last Data Row( 6 ),
	<<Set Excel Column Headers As Hierarchies( 1 )
) << import data;

```

### Set Excel Column Name Separator

**语法:** obj << Set Excel Column Name Separator

**说明:** 设置一个字符串，用作将多个单元格拼接为列标题名称时的分隔符。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Column Name Separator( "+" );

```

### Set Excel First Data Column

**语法:** obj << Set Excel First Data Column

**说明:** 设置电子表格中将作为数据导入的第一个非空列的编号。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel First Data Column( 1 );

```

### Set Excel First Data Line

**语法:** obj << Set Excel First Data Line

**说明:** 设置电子表格中将作为数据导入的第一个非空行的编号。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel First Data Line( 1 );

```

### Set Excel First Header Line

**语法:** obj << Set Excel First Header Line

**说明:** 设置电子表格中将用于定义列标题的第一个非空行的编号。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel First Header Line( 1 );

```

### Set Excel Has Headers

**语法:** obj << Set Excel Has Headers

**说明:** 若设置“设置 Excel 第一个标题行”和“设置 Excel 标题行数”将用于在导入期间定义列标题。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Has Headers( 1 );

```

### Set Excel Import Color Cells

**语法:** obj << Set Excel Import Color Cells

**说明:** 若设置为 1，则将导入数据单元格的背景颜色。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Import Color Cells( 1 );

```

### Set Excel Last Data Column

**语法:** obj << Set Excel Last Data Column

**说明:** 设置要导入的电子表格数据区域中的最后一列。数据区域在所有空列之后开始。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Last Data Column( 2 );

```

### Set Excel Last Data Row

**语法:** obj << Set Excel Last Data Row

**说明:** 设置要导入的电子表格数据区域中的最后一行。数据区域在所有空行之后开始。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Last Data Row( 1 );

```

### Set Excel Limit Column Type Detection

**语法:** obj << Set Excel Limit Column Type Detection

**说明:** 设置为 1 可在自动检测列的数据类型时仅检查列中的某些行。值为 1 速度更快，但若列底部的值和列顶部的值之间的数据类型不同，则可能选择错误的数据类型。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Limit Column Type Detection( 1 );

```

### Set Excel Multiple Series Stack

**语法:** obj << Set Excel Multiple Series Stack

**说明:** 若设置为 1 并且“将 Excel 列标题设置为层次”设置为 1，则将堆叠跨越的列。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

Multiple File Import(
	<<Set Folder( "$sample_import_data" ),
	<<Set Name Filter( "texas precipitation.xlsx" ),
	<<Set Name Enable( 1 ),
	<<Set Excel Best Guess( 0 ),
	<<Set Excel Has Headers( 1 ),
	<<Set Excel Number of Header Lines( 2 ),
	<<Set Excel First Data Line( 3 ),
	<<Set Excel Last Data Row( 6 ),
	<<Set Excel Column Headers As Hierarchies( 1 ), // must be set for Multiple Series Stack
	<<Set Excel Multiple Series Stack( 1 ),

) << import data;

```

### Set Excel Number of Header Lines

**语法:** obj << Set Excel Number of Header Lines

**说明:** 设置电子表格中要作为列标题导入的行数。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Number of Header Lines( 1 );

```

### Set Excel Replicate Data In Spanned Rows

**语法:** obj << Set Excel Replicate Data In Spanned Rows

**说明:** 创建列标题时，若设置为 1，此处有多个标题行并且单元格跨越这些行，但在水平方向上不跨越任何单元格，则重复合并区域开始处的值。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Replicate Data In Spanned Rows( 1 );

```

### Set Excel Replicate Headers In Spanned Rows

**语法:** obj << Set Excel Replicate Headers In Spanned Rows

**说明:** 若设置为 1 并且有多个标题行，并且一个单元格跨越这些行而不水平跨越任何单元格，则在创建列标题时将重复合并区域开始处的值。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Replicate Headers In Spanned Rows( 1 );

```

### Set Excel Suppress Empty Columns

**语法:** obj << Set Excel Suppress Empty Columns

**说明:** 设置为 1 可防止导入空列。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Suppress Empty Columns( 1 );

```

### Set Excel Suppress Hidden Columns

**语法:** obj << Set Excel Suppress Hidden Columns

**说明:** 设置为 1 可防止导入隐藏列。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Suppress Hidden Columns( 1 );

```

### Set Excel Suppress Hidden Rows

**语法:** obj << Set Excel Suppress Hidden Rows

**说明:** 设置为 1 可防止导入隐藏行。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Suppress Hidden Rows( 1 );

```

### Set Excel Worksheet Filter

**语法:** obj << Set Excel Worksheet Filter

**说明:** 仅导入与过滤器匹配的工作表。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Excel Worksheet Filter( "data*;sheet?" );

```

### Set File List

**语法:** obj << Set File List

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

```

### Set Folder

**语法:** obj << Set Folder

**说明:** 选择其他文件夹。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Folder( "$Desktop" );

```

### Set Import Callback

**语法:** obj << Set Import Callback

**说明:** 指定作为导入过程中最后一步执行的自定义回调函数。Multiple File Import() 函数向回调函数传递“多个文件导入”对象和打开的数据表列表。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

Create Directory( "$temp/deleteme" );
Save Text File( "$temp/deleteme/test1.txt", "a1\!n1" );
Save Text File( "$temp/deleteme/test2.txt", "a2\!n1" );
mfi = Multiple File Import(
	<<Set Folder( "$temp/deleteme/" ),
	<<Set Name Filter( "test?.txt;" ),
	<<Set Name Enable( 1 ),
	<<Set Add File Name Column( 1 ),
	<<Set Import Callback(
		Function( {a, b}, 
// a is the same is mfi
			// b is a list of datatables that were created
			Write( "\!na=", a );
			Write( "\!nb=", b );
		)
	)
);
mfi << Import Data;

```

### Set Import Mode

**语法:** obj << Set Import Mode

**说明:** 设置为“每个文件对应一行”以使每个文件创建一行，设置为“每行对应一行”以为每个文件中的每一行创建一行，或设置为“CSVData”以使用“设置”选项进行导入。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Import Mode( "Row Per Line" );

```

### Set JSON Guess

**语法:** obj << Set JSON Guess( "Tall"|"Wide"|"Huge"|"Pandas" )

**说明:** 设置与导入的 JSON 数据最匹配的 JSON 推测

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set JSON Method( "Guess" );
mfi << Set JSON Guess( "Tall" );

```

### Set JSON Method

**语法:** obj << Set JSON Method

**说明:** 设置为“推测”以使用内置推测或“ JSON 设置”来提供定制 jsl。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set JSON Method( "Guess" );
mfi << Set JSON Guess( "Tall" );

```

### Set JSON Settings

**语法:** obj << Set JSON Settings

**说明:** 指定导入 JSON 数据的定制 JSL。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$sample_data\big class.jmp" );
dt << Save( "$Documents\Big Class.json" );
Close( dt );
Multiple File Import(
	<<Set Folder( "$DOCUMENTS" ),
	<<Set Name Filter( "big*.JSON" ),
	<<Set Name Enable( 1 ),
	<<Set JSON Method( "JSON Settings" ),
	<<Set JSON Settings(
		JSON Settings(
			Stack( 0 ),
			Row( "/root" ),
			Col(
				"/root/name",
				Column Name( "name" ),
				Fill( "Use Once" ),
				Type( "Character" ),
				Format( {"Best"} ),
				Modeling Type( "Continuous" )
			),
			Col(
				"/root/age",
				Column Name( "age" ),
				Fill( "Use Once" ),
				Type( "Numeric" ),
				Format( {"Best"} ),
				Modeling Type( "Continuous" )
			),
			Col(
				"/root/sex",
				Column Name( "sex" ),
				Fill( "Use Once" ),
				Type( "Character" ),
				Format( {"Best"} ),
				Modeling Type( "Continuous" )
			),
			Col(
				"/root/height",
				Column Name( "height" ),
				Fill( "Use Once" ),
				Type( "Numeric" ),
				Format( {"Best"} ),
				Modeling Type( "Continuous" )
			),
			Col(
				"/root/weight",
				Column Name( "weight" ),
				Fill( "Use Once" ),
				Type( "Numeric" ),
				Format( {"Best"} ),
				Modeling Type( "Continuous" )
			)
		)
	)
) << Import Data;

```

### Set Name Enable

**语法:** obj << Set Name Enable

**说明:** 设置是否应用当前名称过滤器。默认值为 0，即使设置了名称过滤器，也将其忽略。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Name Enable( 1 );

```

### Set Name Filter

**语法:** obj << Set Name Filter

**说明:** 使包含的文件位于以分号分隔的过滤器列表中，该过滤器可以包含通配符。包含分号或 | 的文件名必须带通配符（如 ？或 *）导入。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Name Filter( "*.csv;*.txt" );

```

### Set PDF Method

**语法:** obj << Set PDF Method

**说明:** 设置为“推测”以使用内置推测或“PDF 设置”来提供定制 jsl。

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set PDF Method( "Guess" );

```

### Set PDF Settings

**语法:** obj << Set PDF Settings

**说明:** 指定导入 PDF 数据的定制 JSL。

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );

dt = Open( "$sample_data\big class.jmp" );
win = New Window( "temp", Data Table Box( dt ) );
win << Save pdf( "$Documents\big class.PDF" );
win << Close window;
Close( dt );
Multiple File Import(
	<<Set Folder( "$DOCUMENTS" ),
	<<Set Name Filter( "big*.pdf" ),
	<<Set Name Enable( 1 ),
	<<Set PDF Method( "PDF Settings" ),
	<<Set PDF Settings( PDF All Tables( combine( all ) ) )
) << Import Data;

```

### Set Show Hidden

**语法:** obj << Set Show Hidden

**说明:** 设置是否包含 Windows 通常隐藏的文件。默认为不包含隐藏文件。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Show Hidden( 1 );

```

### Set Size Enable

**语法:** obj << Set Size Enable

**说明:** 设置是否应用当前大小过滤器。默认值是关闭，即使设置了大小过滤器，也将其忽略。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Size Enable( 1 );
mfi << Set Size Filter( {0, 1000} );

```

### Set Size Filter

**语法:** obj << Set Size Filter( {smallest size to include, largest size to include} )

**说明:** 根据文件大小过滤包含的文件。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Size Enable( 1 );
mfi << Set Size Filter( {0, 1000} );

```

### Set Stack Mode

**语法:** obj << Set Stack Mode( "Stack Similar" | "Table Per File )

**说明:** 将要导入的相似文件合并到一个表中，或为每个文件创建一个表。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Stack Mode( "Stack Similar" );

```

### Set Subfolders

**语法:** obj << Set Subfolders

**说明:** 设置是否包含子文件夹中的文件。默认是不包含它们。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set Subfolders( 1 );

```

### Set Use File List

**语法:** obj << Set Use File List

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );

```

### Set XML Guess

**语法:** obj << Set XML Guess( "Tall"|"Wide"|"Huge" )

**说明:** 指定最匹配要导入的 XML 数据的 XML 推测。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set XML Method( "Guess" );
mfi << Set XML Guess( "Tall" );

```

### Set XML Method

**语法:** obj << Set XML Method

**说明:** 为 JMP 指定“推测”以确定数据是高、宽还是巨大。指定“ XML设置”以提供定制 JSL。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

mfi = Multiple File Import();
mfi << Set XML Method( "Guess" );
mfi << Set XML Guess( "Tall" );

```

### Set XML Settings

**语法:** obj << Set XML Settings

**说明:** 指定导入 XML 数据的定制 JSL。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

Multiple File Import(
	<<Set Folder( "$SAMPLE_IMPORT_DATA" ),
	<<Set Name Filter( "*.xml" ),
	<<Set Name Enable( 1 ),
	<<Set XML Method( "XML Settings" ),
	<<Set XML Settings(
		XML Settings(
			Row( "/book/story/chapter/para" ),
			Col(
				"/book/story/chapter/para",
				Column Name( "story.chapter.para" ),
				Fill( "Use Once" ),
				Type( "Numeric" ),
				Format( {"Best"} ),
				Modeling Type( "Continuous" )
			),
			Col(
				"/book/story/chapter/para/price",
				Column Name( "story.chapter.para.price" ),
				Fill( "Use Once" ),
				Type( "Numeric" ),
				Format( {"Best"} ),
				Modeling Type( "Continuous" )
			),
			Col(
				"/book/story/chapter/para/quantity",
				Column Name( "story.chapter.para.quantity" ),
				Fill( "Use Once" ),
				Type( "Numeric" ),
				Format( {"Best"} ),
				Modeling Type( "Continuous" )
			)
		)
	)
) << Import Data;

```

