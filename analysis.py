import base64

def print_save(filepath):
    with open(filepath) as f:
        file_data = f.read()
    save_data_base64 = file_data[:-16]
    save_data_something = base64.b64decode(save_data_base64.encode('ascii'))

    checksum = file_data[-16:]
    print(f'Data: {save_data_something}\n'
        + f'Checksum: {checksum}\n')

print_save('./testing-saves/high-level.dat')
print_save('./testing-saves/low-level.dat')
