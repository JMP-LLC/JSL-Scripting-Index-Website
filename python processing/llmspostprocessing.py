import re
def process():
    file_path = 'llms.txt'
    new_file_path = 'llms_updated.txt'

    with open(file_path, 'r') as file:
        with open(new_file_path, 'w') as new_file:
            all_lines = file.readlines()
            for line in all_lines:
                if '[' in line:
                    pattern = r"\[(.*?)\]"
                    val = re.findall(pattern, line)
                    sentence = 'JSL ' + val[0] + ' description, syntax, and code examples'
                    new_line = line.replace('\n', '')
                    updated = new_line + ': ' + sentence + '\n'
                    print(updated)
                    new_file.write(updated)
                else:
                    new_file.write(line)


if __name__ == '__main__':
    process()