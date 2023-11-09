from flask import Flask, request, jsonify, render_template

import util
import numpy as np

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/indo')
def init():
    return render_template('index_ind.html')


@app.route('/get_lokasi')
def get_location_names():
    response = jsonify({
        'lokasi': util.get_location_names()
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/prediksi-harga-kost')
def fungsi():
    return render_template('index_prediksi.html')

@app.route('/prediksi', methods=['POST'])
def predict_price():

    try:
        tipe_kos = int(request.form['tipe_kos'])
        kamar_mandi = int(request.form['kamar_mandi'])
        fasilitas_ac = int(request.form['fasilitas_ac'])
        fasilitas_wifi = int(request.form['fasilitas_wifi'])
        jenis_kloset = int(request.form['jenis_kloset'])
        fasilitas_kasur = int(request.form['fasilitas_kasur'])
        hak_akses = int(request.form['hak_akses'])
        lokasi = request.form['lokasi']

        # Mendapatkan estimasi harga
        estimated_price = util.get_estimated_price(lokasi, tipe_kos, kamar_mandi, fasilitas_ac, fasilitas_wifi, jenis_kloset, fasilitas_kasur, hak_akses)

        # Memastikan nilai yang dikembalikan dapat di-serialisasi
        if isinstance(estimated_price, np.int64):
            estimated_price = int(estimated_price)  # Mengubah ke tipe data yang bisa di-serialisasi

        # Menyiapkan respons JSON
        response = jsonify({

            'estimated_price': estimated_price
        })

        # Menambahkan header untuk mengizinkan akses lintas domain
        response.headers.add('Access-Control-Allow-Origin', '*')

        # Mengembalikan respons
        return response

    except Exception as e:
        # Jika terjadi kesalahan, respons dengan pesan kesalahan 500
        error_message = "Terjadi kesalahan dalam memproses permintaan."
        return jsonify({'error': error_message}), 500




if __name__ == "__main__":
    print("mulai server flask")
    util.load_saved_artifacts()
    app.run(host='0.0.0.0', port='8080')
