import json
import pickle
import numpy as np

__location = None
__data_columns = None
__model = None

def index(massage):
    return massage

def get_estimated_price(lokasi,tipe_kos,kamar_mandi,fasilitas_ac,fasilitas_wifi,jenis_kloset,fasilitas_kasur,hak_akses):
    try:
        loc_index = __data_columns.index(lokasi.lower())
    except:
        loc_index = -1

    x = np.zeros(len(__data_columns))
    x[0] = tipe_kos
    x[1] = kamar_mandi
    x[2] = fasilitas_ac
    x[3] = fasilitas_wifi
    x[4] = jenis_kloset
    x[5] = fasilitas_kasur
    x[6] = hak_akses

    if loc_index >= 0:
        x[loc_index] = 1

        return round(__model.predict([x])[0], 2)

def get_location_names():
    return __location

def load_saved_artifacts():
    print("loading saved artifacts.... start")
    global __location, __data_columns, __model

    with open("./bahan/columns.json", 'r') as f:
        __data_columns = json.load(f)['data_columns']
        __location = __data_columns[7:]

    with open("./bahan/prediction.pkl", 'rb') as f:
        __model = pickle.load(f)
    print("loading saved artifacts.... done")



if __name__ == "__main__":
    load_saved_artifacts()
    print(get_location_names())
    print(get_estimated_price('medan Petisah', 0, 1, 1, 1, 1, 0, 1))

    
    
