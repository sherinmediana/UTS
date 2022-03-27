const PELABUHAN = [
    {
        pel_id: "",
        pel_nama: "",
        pel_lokasi: "",

    },
];

const LAYANAN = [
    {
        layanan_id: "",
        layanan_nama: "",
    },
];

const TIKET = [
    {
        tiket_id: "",
        pel_awal_id: "",
        pel_akhir_id: "",
        layanan_id:"",
        tgl_masuk:"",
        jam_masuk:"",
        nama_lengkap:"",
        identitas:"",
        umur:"",

    },
];

const PEMBATALAN = [
    {
        tiket_id: "",
    },
];

export {PELABUHAN, LAYANAN, TIKET, PEMBATALAN}