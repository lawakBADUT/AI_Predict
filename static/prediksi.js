




function onPageLoad(){
    console.log("document loaded");
    var url = "http://127.0.0.1:8080/get_lokasi";

    $.get(url, function(data, status){
        console.log("got response for get_location_names");
        if(data){
            var location = data.lokasi;
            var uilocation = document.getElementById("uilocation");
            $('#uilocation').empty();
            for (var i in location) {
                var opt = new Option(location[i]);
                $('#uilocation').append(opt);
                
            }
        }
    })
}


    
    
    
    document.addEventListener("DOMContentLoaded", function() {
        const lokasiSelect = document.getElementById("uilocation");
        const tipeKostConfirm = document.getElementById("tipeKostConfirm");
        const kamarMandiConfirm = document.getElementById("kamarMandiConfirm");
        const tipeKlosetConfirm = document.getElementById("tipeKlosetConfirm");
        const pendinginRuanganConfirm = document.getElementById("pendinginRuanganConfirm");
        const wifiConfirm = document.getElementById("wifiConfirm");
        const kasurConfirm = document.getElementById("kasurConfirm");
        const aksesKostConfirm = document.getElementById("aksesKostConfirm");
    
        document.querySelectorAll('.button-optiontipekost').forEach(button => {
        button.addEventListener('click', function() {
            toggleButtonState(this, 'tipekost');
        });
        });
    
        document.querySelectorAll('.button-optionkamarmandi').forEach(button => {
        button.addEventListener('click', function() {
            toggleButtonState(this, 'kamarmandi');
        });
        });
    
        document.querySelectorAll('.button-optiontipekloset').forEach(button => {
        button.addEventListener('click', function() {
            toggleButtonState(this, 'tipekloset');
        });
        });
    
        document.querySelectorAll('.button-optionpendinginruangan').forEach(button => {
        button.addEventListener('click', function() {
            toggleButtonState(this, 'pendinginruangan');
        });
        });
    
        document.querySelectorAll('.button-optionwifi').forEach(button => {
        button.addEventListener('click', function() {
            toggleButtonState(this, 'wifi');
        });
        });
    
        document.querySelectorAll('.button-optionkasur').forEach(button => {
        button.addEventListener('click', function() {
            toggleButtonState(this, 'kasur');
        });
        });
    
        document.querySelectorAll('.button-optionakseskost').forEach(button => {
        button.addEventListener('click', function() {
            toggleButtonState(this, 'akseskost');
        });
        });
    
        function toggleButtonState(button, type) {
        if (type === 'tipekost') {
            var buttons = document.querySelectorAll(".button-optiontipekost");
            buttons.forEach(function(btn) {
            if (btn !== button) {
                btn.classList.remove("active");
            }
            });
            const tipe = button.getAttribute('value');
            updateTipeKost(tipe);
        } else if (type === 'kamarmandi') {
            var buttons = document.querySelectorAll(".button-optionkamarmandi");
            buttons.forEach(function(btn) {
            if (btn !== button) {
                btn.classList.remove("active");
            }
            });
            const kamarMandi = button.getAttribute('value');
            updateKamarMandi(kamarMandi);
        } else if (type === 'tipekloset') {
            var buttons = document.querySelectorAll(".button-optiontipekloset");
            buttons.forEach(function(btn) {
            if (btn !== button) {
                btn.classList.remove("active");
            }
            });
            const tipeKloset = button.getAttribute('value');
            updateTipeKloset(tipeKloset);
            
        } else if (type === 'pendinginruangan') {
            var buttons = document.querySelectorAll(".button-optionpendinginruangan");
            buttons.forEach(function(btn) {
            if (btn !== button) {
                btn.classList.remove("active");
            }
            });
            const pendinginRuangan = button.getAttribute('value');
            updatePendinginRuangan(pendinginRuangan);
        } else if (type === 'wifi') {
            var buttons = document.querySelectorAll(".button-optionwifi");
            buttons.forEach(function(btn) {
            if (btn !== button) {
                btn.classList.remove("active");
            }
            });
            const wifi = button.getAttribute('value');
            updateWifi(wifi);
        } else if (type === 'kasur') {
            var buttons = document.querySelectorAll(".button-optionkasur");
            buttons.forEach(function(btn) {
            if (btn !== button) {
                btn.classList.remove("active");
            }
            });
            const kasur = button.getAttribute('value');
            updateKasur(kasur);
        } else if (type === 'akseskost') {
            var buttons = document.querySelectorAll(".button-optionakseskost");
            buttons.forEach(function(btn) {
            if (btn !== button) {
                btn.classList.remove("active");
            }
            });
            const aksesKost = button.getAttribute('value');
            updateAksesKost(aksesKost);
        } 
    
    
        if (button.classList.contains("active")) {
            button.classList.remove("active");
            if (type === 'tipekost') {
            updateTipeKost("-");
            } else if (type === 'kamarmandi') {
            updateKamarMandi("-");
            } else if (type === 'tipekloset') {
            updateTipeKloset("-");
            } else if (type === 'pendinginruangan') {
            updatePendinginRuangan("-");
            } else if (type === 'wifi') {
            updateWifi("-");
            } else if (type === 'kasur') {
            updateKasur("-");
            } else if (type === 'akseskost') {
            updateAksesKost("-");
            } 
        } else {
            button.classList.add("active");
        }
        }

        function getTipeKloset(value){
            let nilai = value;
            return nilai;
        }
    
        function updateTipeKost(tipe) {
        let newValue = tipe;
        if (tipe === "2") {
            newValue = "Kost Putra";
        } else if (tipe === "1") {
            newValue = "Kost Putri";
        } else if (tipe === "0") {
            newValue = "Kost Campuran";
        }
        tipeKostConfirm.textContent = newValue;
        }
    
        function updateKamarMandi(kamarMandi) {
        let newValue = kamarMandi;
        if (kamarMandi === "0") {
            newValue = "Diluar Ruangan";
        } else if (kamarMandi === "1") {
            newValue = "Didalam Ruangan";
        }
        kamarMandiConfirm.textContent = newValue;
        }
    
        function updateTipeKloset(tipeKloset) {
        let newValue = tipeKloset;
        if (tipeKloset === "0") {
            newValue = "Kloset Jongkok";
        } else if (tipeKloset === "1") {
            newValue = "Kloset Duduk";
        }
        tipeKlosetConfirm.textContent = newValue;
        }
    
        function updatePendinginRuangan(pendinginRuangan) {
        let newValue = pendinginRuangan;
        if (pendinginRuangan === "1") {
            newValue = "Ya";
        } else if (pendinginRuangan === "0") {
            newValue = "Tidak";
        }
        pendinginRuanganConfirm.textContent = newValue;
        }
    
        function updateWifi(wifi) {
        let newValue = wifi;
        if (wifi === "1") {
            newValue = "Ya";
        } else if (wifi === "0") {
            newValue = "Tidak";
        }
        wifiConfirm.textContent = newValue;
        }
    
        function updateKasur(kasur) {
        let newValue = kasur;
        if (kasur === "1") {
            newValue = "Ya";
        } else if (kasur === "0") {
            newValue = "Tidak";
        }
        kasurConfirm.textContent = newValue;
        }
    
        function updateAksesKost(aksesKost) {
        let newValue = aksesKost;
        if (aksesKost === "1") {
            newValue = "Akses 24 Jam";
        } else if (aksesKost === "0") {
            newValue = "Akses dibatasi";
        }
        aksesKostConfirm.textContent = newValue;
        }
    
        lokasiSelect.addEventListener('change', function() {
        if (lokasiSelect.value !== '#') {
            newValue = "-";
        } else {
            newValue = value;
        }
        
        const selectedLocation = lokasiSelect.options[lokasiSelect.selectedIndex].text;
        
        updateLokasi(selectedLocation);
        });
        
        function updateLokasi(lokasi) {
        document.getElementById('lokasiKostConfirm').textContent = lokasi;
        }
    
        const resetButton = document.querySelector('.restart');
        resetButton.addEventListener('click', function (event) {
        event.preventDefault();
    
        document.getElementById("uilocation").selectedIndex = 0;
        document.getElementById('campur').classList.remove('active');
        document.getElementById('putra').classList.remove('active');
        document.getElementById('putri').classList.remove('active');
        document.getElementById('dalam').classList.remove('active');
        document.getElementById('luar').classList.remove('active');
        document.getElementById('duduk').classList.remove('active');
        document.getElementById('jongkok').classList.remove('active');
        document.getElementById('ac').classList.remove('active');
        document.getElementById('no-ac').classList.remove('active');
        document.getElementById('wifi').classList.remove('active');
        document.getElementById('no-wifi').classList.remove('active');
        document.getElementById('kasur').classList.remove('active');
        document.getElementById('no-kasur').classList.remove('active');
        document.getElementById('bebas').classList.remove('active');
        document.getElementById('terbatas').classList.remove('active');
    
        document.getElementById('lokasiKostConfirm').textContent = '-';
        document.getElementById('tipeKostConfirm').textContent = '-';
        document.getElementById('kamarMandiConfirm').textContent = '-';
        document.getElementById('tipeKlosetConfirm').textContent = '-';
        document.getElementById('pendinginRuanganConfirm').textContent = '-';
        document.getElementById('wifiConfirm').textContent = '-';
        document.getElementById('kasurConfirm').textContent = '-';
        document.getElementById('aksesKostConfirm').textContent = '-';
        document.getElementById('hargaprediksi').textContent = '-,00';
    
        location.reload();
        });
    
        const showSidebarButton = document.getElementById('showSidebarButton');
        const sidebar = document.getElementById('sidebar');
        
        showSidebarButton.addEventListener('click', function () {
        const showSidebarIcon = showSidebarButton.querySelector('i'); // Pindahkan definisi ini ke dalam event listener
    
        if (getComputedStyle(sidebar).display === 'none') {
            sidebar.style.display = 'block';
            showSidebarButton.classList.add('active');
            showSidebarIcon.classList.remove('fa-chevron-right');
            showSidebarIcon.classList.add('fa-chevron-left');
        } else {
            sidebar.style.display = 'none';
            showSidebarButton.classList.remove('active');
            showSidebarIcon.classList.remove('fa-chevron-left');
            showSidebarIcon.classList.add('fa-chevron-right');
        }
        });
    });

    function getValueFromButton(buttonClass) {
        var buttons = document.querySelectorAll(buttonClass);
        var activeButton = document.querySelector(buttonClass + '.active');
        buttons.forEach(function(btn) {
            if (btn !== activeButton) {
                btn.classList.remove("active");
            }
        });
        return activeButton.getAttribute('value');
    }

    function getSelectedLocation() {
        var lokasi = document.getElementById('uilocation');
        return lokasi.value;
    }





    function estimatePrice() {
        console.log("estimated button clicked");
    
    var aksesKost = getValueFromButton(".button-optionakseskost");
    var tipeKloset = getValueFromButton(".button-optiontipekloset");
    var tipeKost = getValueFromButton(".button-optiontipekost");
    var kamarMandi = getValueFromButton(".button-optionkamarmandi");
    var ac = getValueFromButton(".button-optionpendinginruangan");
    var wifi = getValueFromButton(".button-optionwifi");
    var kasur = getValueFromButton(".button-optionkasur");
    var lokasi = getSelectedLocation();
    var prediksi = document.getElementById("hargaprediksi");
    var url = "http://127.0.0.1:8080/prediksi";

    
    $.post(url, {
        tipe_kos: tipeKost,
        kamar_mandi: kamarMandi,
        fasilitas_ac: ac,
        fasilitas_wifi: wifi,
        fasilitas_kasur: kasur,
        jenis_kloset: tipeKloset,
        hak_akses: aksesKost,
        lokasi: lokasi
    }, function(data, status) {
        console.log(data.estimated_price);
        prediksi.innerHTML = data.estimated_price.toString() + ",00";
        console.log(status);
        })
    }
    


    

    window.onload = onPageLoad;
