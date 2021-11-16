
def print_save(filepath):
    with open(filepath) as f:
        file_data = f.read()
    print(file_data)

print_save('./testing-saves/high-level.dat')
print_save('./testing-saves/low-level.dat')
