import express from 'express';

const router = express.Router();

const users = [
    {
        id: 1,
        namaPesawat: "City Link",
        keunggulan: "Betterfly, membawa anda terbang lebih jauh",
        gambar: "https://asset.kompas.com/crops/1pEScSZI5bMznUAgZ1Hyl65870Q=/0x0:1280x853/750x500/data/photo/2020/06/04/5ed8b1b29edcd.jpeg",
        harga: 750000 
    },{
        id: 2,
        namaPesawat: "Garuda Indonesia",
        keunggulan: "Betterfly, membawa anda terbang lebih jauh",
        gambar: "https://awsimages.detik.net.id/customthumb/2009/07/23/4/Garuda-Logo-Vertical-dalam.jpg?w=700&q=90",
        harga: 750000
    },{
        id: 3,
        namaPesawat: "Lion Air",
        keunggulan: "Betterfly, membawa anda terbang lebih jauh",
        gambar: "https://1000logos.net/wp-content/uploads/2020/04/Lion-Air-Logo.png",
        harga: 800000
    },{
        id: 4,
        namaPesawat: "Pelita Air",
        keunggulan: "Betterfly, membawa anda terbang lebih jauh",
        gambar: "https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/9ea917ed-1534-436c-9533-772525cf8944",
        harga: 800000
    },
    {
        id: 5,
        namaPesawat: "Batik Air",
        keunggulan: "Pramugari Mantap",
        gambar: "https://images.bisnis-cdn.com/posts/2017/05/23/656093/130404_batik%20air.gif",
        harga: 800000
    }
]

//untuk get semua users
router.get('/', (req, res) => {
    console.log(users);

    res.send(users);
    res.send('Hello');
});

export default router;