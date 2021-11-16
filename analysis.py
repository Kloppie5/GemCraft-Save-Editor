import base64
import zlib

def print_save(filepath):
    with open(filepath) as f:
        file_data = f.read()
    save_data_base64 = file_data[:-16]
    save_data_zlib = base64.b64decode(save_data_base64.encode('ascii'))
    save_data_decompressed = zlib.decompress(save_data_zlib)

    checksum = file_data[-16:]
    print(f'Data: {save_data_decompressed}\n'
        + f'Checksum: {checksum}\n')

print_save('./testing-saves/high-level.dat')
print_save('./testing-saves/low-level.dat')
