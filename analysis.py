
def print_save(filepath):
    with open(filepath) as f:
        file_data = f.read()
    encrypted_save_data = file_data[:-16]
    checksum = file_data[-16:]
    print(f'Data: {encrypted_save_data}\n'
        + f'Checksum: {checksum}\n')

print_save('./testing-saves/high-level.dat')
print_save('./testing-saves/low-level.dat')
