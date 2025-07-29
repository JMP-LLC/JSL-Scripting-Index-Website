
import json
import os
import shutil
from pathlib import Path

import numpy as np
import pandas as pd
## created using the Show Commands("Display Boxes") JSL Script
display_box_list = [
    "AlignmentGridBox",
    "AxisBox",
    "BarSeg",
    "BorderBox",
    "BoxPlotSeg",
    "BusyLightBox",
    "ButtonBox",
    "CalendarBox",
    "CatAxisBox",
    "CellPlotBox",
    "CenterBox",
    "CheckBoxBox",
    "ColBox",
    "ColorBox",
    "ColListBox",
    "ColSpanBox",
    "ColStackBox",
    "ColumnFieldBox",
    "ComboBox",
    "CompositionBox",
    "ContourSeg",
    "CrosstabBox",
    "CustomBox",
    "DataBrowserBox",
    "DataEditBox",
    "DataFilterContextBox",
    "DataFilterSourceBox",
    "DataTableColBox",
    "DataTablePlotColBox",
    "Design Box",
    "DFIntMinMaxBox",
    "Display3DBox",
    "DisplayBox3D",
    "DisplayScene3D",
    "DropBox",
    "EvalContextBox",
    "ExcerptBox",
    "FilterColSelector",
    "FilterFieldBox",
    "FrameBox",
    "gline",
    "gdisplaybox",
    "GlobalBox",
    "gpin",
    "gpolygon",
    "GraphBuilderBox",
    "GridCellBox",
    "GridMultiCellBox",
    "gshape",
    "gtext",
    "HelpBox",
    "HierBox",
    "HistSeg",
    "IconBox",
    "IconStringColBox",
    "IfBox",
    "IfSeg",
    "JSS Context Box",
    "LabelBox",
    "LegendBox",
    "LineSeg",
    "LinesSeg",
    "LineUpBox",
    "LineUpRulerBox",
    "ListBox",
    "ListBoxBox",
    "MapSeg",
    "MarkerSeg",
    "MatrixBox",
    "MosaicSeg",
    "MouseBox",
    "MultiTblNumColBox",
    "MultiTblPackColBox",
    "MultiTblPlotColBox",
    "MultiTblStrColBox",
    "NodeDisplayDragBox",
    "NodeDisplayNewArcBox",
    "NomAxisBox",
    "NumberBox",
    "NumberColBox",
    "NumberColEditBox",
    "NumberEditBox",
    "OutlineBox",
    "OverlayListBox",
    "OwnerBox",
    "PageBreakBox",
    "PanelBox",
    "ParallelScaleBox",
    "PictBox",
    "PictSeg",
    "PieSeg",
    "PlatformContainerBox",
    "PlotColBox",
    "PolySeg",
    "PopupBox",
    "Project",
    "PropertyEditorBox",
    "RadioBox",
    "RangeSeg",
    "RangeSliderBox",
    "ScaleBox",
    "SceneBox",
    "ScriptableContainerBox",
    "ScriptBox",
    "ScriptContainerBox",
    "ScrollBox",
    "ShapeBorderBox",
    "ShapeSeg",
    "SheetBox",
    "SheetPanelBox",
    "SliderBox",
    "SpacerBox",
    "SpinBox",
    "SplitterBox",
    "StemLeafBox",
    "StemListBox",
    "StringColBox",
    "StringColEditBox",
    "TableBox",
    "TabListBox",
    "TabPageBox",
    "Tabulate Box",
    "Tabulate Stacked Columns List",
    "Tabulate Stacked List",
    "TextBox",
    "TextEditBox",
    "TextSeg",
    "TextTruncatorBox",
    "Tilted List Box",
    "TreeBox",
    "TreeMapBox",
    "TreeMapSeg",
    "UnknownBox",
    "UnlineUpBox",
    "WebBrowserBox",
    "WordCloudBox",
    "WrapListBox",
]
functions_list = [
    "JMP Clinical",
    "所有函数",
    "すべての関数",
    "모든 함수",
    "Todas las funciones",
    "Tutte le funzioni",
    "Toutes les fonctions",
    "Alle Funktionen",
    "All Functions",
    "Assignment",
    "CAS",
    "Character",
    "Character Pattern",
    "Comparison",
    "Conditional",
    "Constant",
    "Date Time",
    "Discrete Probability",
    "Display",
    "Expression",
    "File",
    "Finance",
    "Graphics",
    "IP.21 Server",
    "JMP Live",
    "List",
    "Matrix",
    "Numeric",
    "Optimization",
    "PI Server",
    "Probability",
    "Programming",
    "Python",
    "R",
    "Random",
    "Row",
    "Row State",
    "SAS",
    "SQL",
    "Statistical",
    "Transcendental",
    "Trigonometric",
    "Utility"
]


def json_setup(language, abbrv):
    df_new = pd.read_csv('Scripting Index Info ' + language + '.csv')


    df = df_new.replace(np.nan, '', regex=True)
    # df= df_original.replace(np.nan, '', regex=True)
    res = df.groupby('Category') \
        .apply(lambda x: x.groupby('SubCategories') \
               .apply(lambda x: x.groupby('Heading').apply(lambda x: [x.groupby('Item').apply(
        lambda x: x[['Syntax', 'Version Added', 'Description', 'Example Label', 'Example']].to_dict(orient='records')
        ).to_dict()]
                                                         ).to_dict()
                      ).to_dict()
               ).to_dict()
    with open('scriptingindex' + abbrv + '.json', 'w') as json_file:
        json.dump(res, json_file, indent=4)

def sort_sub_cat(s):
    left = s.strip('{').strip('}').strip('"')
    # print(left)
    if left == '':
        return 'A'
    else:
        return left[0]
def has_special_chars(s):
    if "\\" in s:
        return True
    return False



def files(abbrv, functions_cat, functions_name):
    headers_map = {}
    headers_map['en'] = ['Syntax', 'Description', 'JMP Version Added', 'Example']
    headers_map['es'] = ['Sintaxis', 'Descripción', 'JMP Versión agregada', 'Ejemplo']
    headers_map['it'] = ['Sintassi', 'Descrizione', 'JMP Versione aggiunta', 'Esempio']
    headers_map['de'] = ['Syntax', 'Beschreibung', 'JMP Version hinzugefügt', 'Beispiel']
    headers_map['fr'] = ['Syntaxe ', 'Description ', 'JMP Version ajoutée ', 'Exemple']
    headers_map['ja'] = ['構文', '説明', 'JMP追加されたバージョン', '例']
    headers_map['ko'] = ['구문', '설명', 'JMP추가된 버전', '예제']
    headers_map['zh'] = ['语法', '说明', 'JMP添加的版本', '示例']
    headers = headers_map[abbrv]
    markdown_folder_name = 'markdownfiles-' + abbrv
    with open('scriptingindex'+abbrv+'.json', 'r') as f:
        data = json.load(f)
        print(data.keys())
        for category in data.keys():

            with open(markdown_folder_name + '/' + category + '.md', 'w') as f:
                if category == functions_cat:
                    val = sorted(data[category]['{}'][functions_name][0].keys(), key=lambda x: (not has_special_chars(x), x.upper()))
                    f.write("# " + category + "\n\n")
                    for items in val:
                        item = data[category]['{}'][functions_name][0][items]
                        items_str = items.replace("\\", "\\\\")
                        f.write("### " + items_str + "\n\n")

                        if item[0].get('Syntax') != '':
                            syntax = item[0].get("Syntax")
                            syntax = syntax.replace("\n", "")
                            syntax = syntax.replace("<", "&lt;")
                            syntax = syntax.replace(">", "&gt;")
                            syntax = syntax.split()
                            new_syntax = " ".join(syntax)
                            new_syntax = new_syntax.replace("\\", "\\\\")
                            f.write("**" + headers[0] + ":** " + new_syntax + "\n\n")
                        if item[0].get('Description') != '':
                            desc = item[0].get('Description').replace("\\", "\\\\")
                            f.write("**" + headers[1] + ":** " + desc + "\n\n")
                        if item[0].get('Version Added') != '':
                            f.write("**" + headers[2] + ":** " + str(item[0].get("Version Added")) + "\n\n")
                        for val in item:
                            if val.get('Example Label') != '':
                                f.write("**" + str(val.get("Example Label")) + "**" + "\n\n")
                            if val.get('Example') != '':
                                if category == 'Python Integration':
                                    f.write("```python" + "\n\n")
                                else:
                                    f.write("```jsl" + "\n\n")
                                ex = val.get("Example").replace('Names Default To Here( 1 );\n', '')
                                f.write(ex + "\n\n")
                                f.write("```" + "\n\n")
                else:
                    f.write("# " + category + "\n\n")
                    f.write("\n\n")
                    for subcategory in sorted(data[category].keys(), key=sort_sub_cat):
                        sub_cat_text = False
                        if subcategory != "{}":
                            sub_title = subcategory[1:-1].replace('"', '').replace(",", " >")
                            f.write("## " + sub_title + "\n\n")
                            sub_cat_text = True
                        for heading in data[category][subcategory].keys():
                            heading_needed = True
                            if heading == functions_name and category in functions_list:
                                heading_needed = False
                            if sub_cat_text and heading_needed:
                                f.write("### " + heading + "\n\n")
                            elif not sub_cat_text and heading_needed:
                                f.write("## " + heading + "\n\n")
                        # print(data[category][subcategory][heading][0])
                            for items in data[category][subcategory][heading][0].keys():
                                items_str = items.replace("\\", "\\\\")
                                if sub_cat_text:
                                    f.write("#### " + items_str + "\n\n")
                                else:
                                    f.write("### " + items_str + "\n\n")
                                item = data[category][subcategory][heading][0][items]
                            # print(item)
                                if item[0].get('Syntax') != '':
                                    syntax = item[0].get("Syntax")
                                    syntax = syntax.replace("\n", "")
                                    syntax = syntax.replace("<", "&lt;")
                                    syntax = syntax.replace(">", "&gt;")
                                    syntax = syntax.split()
                                    new_syntax = " ".join(syntax)
                                    new_syntax = new_syntax.replace("\\", "\\\\")
                                    f.write("**" + headers[0] + ":** " + new_syntax + "\n\n")
                                if item[0].get('Description') != '':
                                    desc = item[0].get("Description").replace("\\", "\\\\")
                                    desc = desc.replace("*", "\\*")
                                    f.write("**" + headers[1] + ":** " + desc + "\n\n")
                                if item[0].get('Version Added') != '':
                                    f.write("**" + headers[2] + ":** " + str(item[0].get("Version Added")) + "\n\n")
                                for val in item:
                                    if val.get('Example Label') != '':
                                        if headers[3] not in str(val.get('Example Label')) and not sub_cat_text:
                                            f.write("#### " + str(val.get("Example Label")) + "\n\n")
                                        elif headers[3] not in str(val.get('Example Label')) and not sub_cat_text:
                                            f.write("##### " + str(val.get("Example Label")) + "\n\n")
                                        else:
                                            f.write("**" + str(val.get("Example Label")) + "**" + "\n\n")
                                    if val.get('Example') != '':
                                        if category == 'Python Integration':
                                            f.write("```python" + "\n\n")
                                        else:
                                            f.write("```jsl" + "\n\n")
                                        ex = val.get("Example").replace('Names Default To Here( 1 );\n', '')
                                        f.write(ex + "\n\n")
                                        f.write("```" + "\n\n")


def move_file(abbrv):
    main_folder = "markdownfiles-"+ abbrv
    headers_map = {}
    headers_map['en'] = ['Display Boxes', 'Functions', 'Objects', 'Python', 'All Categories']
    headers_map['es'] = ['Ver Cuadros', 'Funciones', 'Objetos', 'Python', 'Todas las categorías']
    headers_map['de'] = ['Anzeigefelder', 'Funktionen', 'Objekte', 'Python', 'Alle Kategorien']
    headers_map['fr'] = ["Boîtes d'affichage", 'Fonctions', 'Objets', 'Python', 'Toutes les catégories']
    headers_map['it'] = ['Visualizza riquadri', 'Funzioni', 'Oggetti', 'Python', 'Tutte le categorie']
    headers_map['ja'] = ['ディスプレイボックス', '関数', 'オブジェクト', 'Python', 'すべてのカテゴリ']
    headers_map['ko'] = ['표시 상자', '함수', '개체', 'Python', '모든 범주']
    headers_map['zh'] = ['显示框', '函数', '对象', 'Python', '所有类别']
    headers = headers_map[abbrv]
    display_box_name = headers[0]
    function_name = headers[1]
    object_name = headers[2]
    python_name = headers[3]
    source_folder = Path(main_folder)
    destination_display_boxes = main_folder + "/" + headers[4] + "/" + display_box_name+"/"
    destination_functions = main_folder + "/" + headers[4] + "/" + function_name + "/"
    destination_objects = main_folder + "/" + headers[4] + "/" + object_name + "/"
    destination_python = main_folder + "/" + headers[4] + "/" + python_name + "/"
    if not os.path.exists(destination_display_boxes):
        os.makedirs(destination_display_boxes)
    if not os.path.exists(destination_functions):
        os.makedirs(destination_functions)
    if not os.path.exists(destination_objects):
        os.makedirs(destination_objects)
    if not os.path.exists(destination_python):
        os.makedirs(destination_python)
    for file_path in source_folder.iterdir():
        if os.path.isfile(file_path):
            val = str(file_path.name.split('.')[0])
            if val == 'Alle Funktionen':
                print('hi')
            if val.strip() in display_box_list:
                shutil.move(file_path, destination_display_boxes)
            elif val.strip() in functions_list:
                shutil.move(file_path, destination_functions)
            elif val.strip() == 'Python Integration':
                shutil.move(file_path, destination_python)
            else:
                shutil.move(file_path, destination_objects)
    print('hello')


def side_script():
    df_old = pd.read_csv('Scripting Index Info.csv')
    df_new = pd.read_csv('Scripting Index Info ' + language + '.csv')
    for index, row in df_new.iterrows():
        old_row = df_old.loc[df_old['Item'] == row['Item']]
        row['Version Added'] = old_row['Version Added'].values[0]
        print(row)





if __name__ == '__main__':
    language = 'English'
    abbrv = 'en'
    function_map = {}
    function_map['en'] = ['Functions', 'All Functions']
    function_map['de'] = ['Funktionen', 'Alle Funktionen']
    function_map['fr'] = ['Fonctions','Toutes les fonctions']
    function_map['it'] = ['Funzioni', 'Tutte le funzioni']
    function_map['es'] = ['Funciones','Todas las funciones']
    function_map['ko'] = ['함수', '모든 함수']
    function_map['ja'] = ['関数','すべての関数']
    function_map['zh'] = ['函数', '所有函数']
    shutil.rmtree('markdownfiles-'+abbrv)
    os.mkdir('markdownfiles-'+abbrv)
    json_setup(language, abbrv)
    functions = function_map[abbrv]
    files(abbrv, functions[1], functions[0])
    move_file(abbrv)
