# SAS Integration



## 关联的构造器

### Check SAS Dependencies

**语法:** Check SAS Dependencies()

**说明:** 检查 SAS 集成依赖项的状态。返回 1 表示成功。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );

If( !Check SAS Dependencies(),
	Install SAS Dependencies();
	Print( "Dependencies are installed" );
,
	Print( "Dependencies are installed" )
);

```

### Current SAS Connection

**语法:** sas = Current SAS Connection()

**说明:** 返回活动的 SAS 服务器连接（若有）作为可脚本化的对象。

```jsl

Names Default To Here( 1 );
SAS Connect( "my sas connection" );
sas = Current SAS Connection();
sas << Submit( "proc print data=sashelp.class; run;" );

```

### Current SAS Connections

**语法:** array = Current SAS Connections()

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
array = Current SAS Connections();
array["my connection"] << Submit( "proc print data=sashelp.class; run;" );

```

### Install SAS Dependencies

**语法:** Install SAS Dependencies()

**说明:** 为 SAS 集成安装所需的依赖项。返回 1 表示成功。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );

If( !Check SAS Dependencies(),
	Install SAS Dependencies(),
	Print( "Dependencies are installed" )
);

```

### SAS Connect

**语法:** SAS Connect(<( data_connector_or_id )>, <Prompt( Always|Never|IfNeeded )>)

**说明:** 打开 SAS 连接。

**JMP添加的版本:** 19

**示例 1**

```jsl

Names Default To Here( 1 );
SAS Connect( "my sas connection" );

```

**示例 2**

```jsl

Names Default To Here( 1 );

iom_win = New Data Connector( Type( "SAS Local" ) );
SAS Connect( iom_win );
sas = Current SAS Connection();
librefs = sas << Get Librefs();
For( i = 1, i <= N Items( librefs ), i++,
	tables = sas << Get Data Sets( librefs[i] );
	Write( "\!n\!nLibref:" || librefs[i] );
	Write( "\!nTables:" || Char( tables ) );
);
sas << Disconnect();

```

**示例 3**

```jsl

Names Default To Here( 1 );
SAS Connect(
	New Data Connector(
		ID( "com.jmp.sas_remote" ),
		Port( 8591 ),
		User( "jmpuser" ),
		Host Name( "sashost.com" )
	),
	Prompt( If Needed )
);

```

**示例 4**

```jsl

Names Default To Here( 1 );
SAS Connect( "sashost.com", 8591, Username( "jmpuser" ), Prompt( "Always" ) );

```

### Update SAS Dependencies

**语法:** Update SAS Dependencies()

**说明:** 为 SAS 集成更新所需的依赖项。返回 1 表示成功。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );

If( Check SAS Dependencies(),
	Update SAS Dependencies(),
	Print( "Dependencies are not installed" )
);

```

## SAS Results

### 项消息

#### Get Log

**语法:** obj << Get Log

**说明:** 返回一个字符串，其中包含活动 SAS 服务器连接的日志窗口内容。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Submit(
	"proc print data=sashelp.class; run;",
	NoOutputWindow( True ),
	GetSASLog( False )
);
result = sas << Get Results;
log = result << Get Log();
Show( log );

```

#### Get Output

**语法:** obj << Get Output

**说明:** 返回一个字符串，其中包含活动 SAS 服务器连接的日志窗口内容。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Submit( "proc print data=sashelp.class; run;", NoOutputWindow( True ) );
result = sas << Get Results;
out = result << Get Output();
Show( out );

```

#### Get Output Datasets

**语法:** obj << Get Output Datasets

**说明:** 返回一个字符串，其中包含活动 SAS 服务器连接的日志窗口内容。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Submit(
	"proc corr data=sashelp.class
    outp=pearson outs=spearman;
    var height weight;
    run;",
	NoOutputWindow( True )
);
result = sas << Get Results;
data = result << Get Output Datasets;
Show( data );

```

## SAS Server

### 项消息

#### Connect

**语法:** sas << Connect( <( data_connector_or_id )>, <Prompt( Always|Never|IfNeeded )>)

**说明:** 尝试重新连接至已断开连接的 SAS 服务器连接对象。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
SAS Connect( "my sas connection" );
sas = Current SAS Connection();
sas << Disconnect();
sas << Connect();

```

#### Current CAS Connection

**语法:** result = sas << Current CAS Connection()

**说明:** 获取与当前 CAS 服务器的连接。

**JMP添加的版本:** 19

**示例 1**

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
cas = sas << Current CAS Connection;
Show( cas );

```

**示例 2**

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
cas = sas << Current CAS Connection;
connected = cas << Is Connected();
Show( connected );

```

#### Data Set Exists

**语法:** result = sas << Data Set Exists( libref, dsname )

**说明:** 若 SAS 数据集存在，则返回 1。

**JMP添加的版本:** 19

**示例 1**

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Data Set Exists( "SASHELP", "AIRLINE" );
Show( result );

```

**示例 2**

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Data Set Exists( "SASHELP.AIRLINE" );
Show( result );

```

#### Disconnect

**语法:** obj << Disconnect

**说明:** 断开该 SAS 服务器连接。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
SAS Connect( "my sas connection" );
sas = Current SAS Connection();
sas << Disconnect();

```

#### Export Data

**语法:** y = sas << Export Data( dt, libref, dataset, <named_arguments> );

y = sas << SAS Export Data( dt, libref.dataset, <named_arguments> )

**说明:** 将 JMP 数据表作为 SAS 数据集导出到活动 SAS 服务器连接。命名的可选参数包括 Columns(list|col1,col2,...,coln)、字符串值参数 Password、AlterPassword、ReadPassword 和 WritePassword，以及布尔值参数 HonorExcludedRows、PreserveSASColumnNames、PreserveSASFormats、ReplaceExisting、ExistingAlterPassword 和 SaveJMPMetadata。若导出成功，则返回 1，否则返回 0。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Export Data( Open( "$SAMPLE_DATA/Big Class.jmp" ), "WORK", "BIGCLASS" );

```

#### Get Data Sets

**语法:** result = sas << Get Data Sets( libref )

**说明:** 返回 SAS 逻辑库中定义的数据集列表。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Data Sets( "SASHELP" );
Show( result );

```

#### Get Host Name

**语法:** var = sas << Get Host Name( )

**说明:** 获取 SAS 服务器的主机名称

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Host Name();
Show( result );

```

#### Get Lib Refs

**语法:** result = sas << Get Lib Refs()

**说明:** 从活动的 SAS 服务器连接返回当前定义的 SAS 逻辑库引用名列表。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Lib Refs();
Show( result );

```

#### Get Log

**语法:** result = sas << Get Log()

**说明:** 返回一个字符串，其中包含活动 SAS 服务器连接的日志窗口内容。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Submit(
	"proc print data=sashelp.class; run;",
	NoOutputWindow( True ),
	GetSASLog( False )
);
result = sas << Get Log();
Show( result );

```

#### Get Macro Var

**语法:** var = sas << GetMacroVar( "name" )

**说明:** 获取 SAS 宏变量的值

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Macro Var( "SYSVLONG" );
Show( result );

```

#### Get Macro Var Names

**语法:** var = sas << GetMacroVarNames( )

**说明:** 获取 SAS 宏变量列表

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Macro Var Names();
Show( result );

```

#### Get Option Names

**语法:** var = sas << GetOptionNames( )

**说明:** 获取 SAS 选项列表

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Option Names();
Show( result );

```

#### Get Option Value

**语法:** var = sas << Get Option Value( "name" )

**说明:** 获取 SAS 选项的值

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Option Value( "MEMLIB" );
Show( result );

```

#### Get Output

**语法:** result = sas << Get Output()

**说明:** 返回一个字符串，其中包含上次向活动 SAS 服务器连接提交 SAS 代码时的列表输出。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Submit( "proc print data=sashelp.class; run;", NoOutputWindow( True ) );
result = sas << Get Output();
Show( result );

```

#### Get Results

**语法:** result = sas << Get Results()

**说明:** 获取该服务器的上次提交结果

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Submit( "proc print data=sashelp.class; run;" );
result = sas << Get Results();
Show( result );

```

#### Get Submit Status

**语法:** result = sas << Get Submit Status()

**说明:** 获取该服务器的上次提交状态

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Submit( "proc print data=sashelp.class; run;" );
result = sas << Get Submit Status;
Show( result );

```

#### Get Var Info

**语法:** result = sas << Get Var Info( libref, dataset );

result = sas << Get Var Info( libref.dataset )

**说明:** 获取有关 SAS 数据集中变量的信息

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Var Info( "SASHELP", "CLASS" );
Show( result );

```

#### Get Var Names

**语法:** result = sas << Get Var Names( libref, dataset );

result = sas << SAS Get Var Names( libref.dataset )

**说明:** 从活动 SAS 服务器连接来检索指定的数据集中包含的变量名。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Var Names( "SASHELP", "CLASS" );
Show( result );

```

#### Get Version

**语法:** ver = sas << GetVersion( < Long > )

**说明:** 获取 SAS 的版本

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Version;
Show( result );

```

#### Get Work Folder

**语法:** obj << Get Work Folder

**说明:** 获取服务器的 WORK 逻辑库文件夹

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
result = sas << Get Work Folder;
Show( result );

```

#### Import Data

**语法:** dt = sas << Import Data( libref, dataset, <named_arguments> );

dt = sas << Import Data( libref.dataset|path, <named_arguments> )

**说明:** 将 SAS 数据集从活动 SAS 服务器连接导入到 JMP 数据表中。命名的可选参数包括 Sample(<named_arguments>)、Columns(list|col1,col2,...,coln)、字符串值参数 Where，以及布尔值参数 ConvertCustomFormats、Invisible, UseLabelsForVarNames、SQLTableVariable。返回 JMP 数据表对象。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
dt = sas << Import Data( "SASHELP.CLASS" );

```

#### List Output Data Sets

**语法:** sas << List Output Data Sets(sas code)

**说明:** 为指定的 SAS 代码列出输出数据集

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
datasets = sas << List Output Datasets(
	"\[
proc means data=sashelp.class;
    var age height weight;
run;
]\"
);
Show( datasets );

```

#### Name

**语法:** serverName = sas << Name

**说明:** 返回服务器的名称。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
serverName = sas << Name;
Show( serverName );

```

#### Submit

**语法:** result = sas << Submit( <GetSASLog(<True|False|OnError>, <OnSubmitComplete(script)>, <OpenOutputDatasets(<All|None, UseLabelsForVarNames(1|0),dataset1,dataset2,...,datasetN>)>, <ODSFormat>, <ODS Style>, <Title>, <OpenODSResults>, <NoOutputWindow>

**说明:** 提交 SAS 代码至活跃的 SAS 服务器连接。若成功，则返回 1，否则返回 0。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Submit(
	"proc reg data=sashelp.class; model height=weight; output out=result_height_weight residual=res; run; quit;",
	ODSStyle( "default" ),
	OpenODSResults( true ),
	OpenOutputDatasets( All )
);

```

#### Submit File

**语法:** result = sas << Submit File( "filename.sas" )

**说明:** 将包含 SAS 代码的文件提交至活动的 SAS 服务器连接。命名的可选参数与 SAS Submit 的参数相同。若成功，则返回 1，否则返回 0。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
sas = Current SAS Connection();
sas << Submit File( "MySASProgram.sas" );

```

