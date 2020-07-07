var composers = [
    "Pachelbel, Corelli",
    "Vivaldi, Antonio",
    "Telemann, Georg Philipp",
    "Bach, JS",
    "Handel, George Frideric",
    "Bach, CPE",
    "Haydn, Joseph",
    "Salieri, Antonio",
    "Mozart, WA",
    "Beethoven, Ludwig van",
    "Paganini, Niccolo",
    "Rossini, Gioachino",
    "Strauss, Johann",
    "Mendelssohn, Felix",
    "Liszt, Franz",
    "Offenbach, Jacques",
    "Bruckner, Anton",
    "Brahms, Johannes",
    "Dvorák, Antonín",
    "Elgar, Edward",
    "Rachmaninoff, Sergei",
    "Schoenberg, Arnold",
    "Holst, Gustav",
    "Stravinsky, Igor"
]
var composerImage = [
    "http://www.thecameoquartet.com/wp-content/uploads/2015/11/pachelbeljj.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Vivaldi.jpg/1200px-Vivaldi.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/Telemann.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Johann_Sebastian_Bach.jpg/440px-Johann_Sebastian_Bach.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/f/fa/George_Frideric_Handel_by_Balthasar_Denner.jpg",
    "https://tse3.mm.bing.net/th/id/OIP.MiI0zZVDSDXrZcY9BPnGKwAAAA?w=128&h=180&c=7&o=5&dpr=2&pid=1.7",
    "https://tse4.mm.bing.net/th/id/OIP.dZ2S1YPxEW-xIQDYB7XXeQHaJX?w=153&h=194&c=7&o=5&dpr=2&pid=1.7",
    "https://tse1.mm.bing.net/th/id/OIP.9yZjEeCBEU8BLVRs7IgREgHaJl?w=120&h=180&c=7&o=5&dpr=2&pid=1.7",
    "https://tse1.mm.bing.net/th/id/OIP.ZW4MNAA9HrTz6yYmCIor-AHaJf?w=141&h=182&c=7&o=5&dpr=2&pid=1.7",
    "https://tse1.mm.bing.net/th/id/OIP.YMUvlzwmi7dA295NxLNH6gHaJz?w=157&h=207&c=7&o=5&dpr=2&pid=1.7",
    "https://tse3.mm.bing.net/th/id/OIP.31u946XMspUw9vx4a5ZOHwHaJP?w=139&h=180&c=7&o=5&dpr=2&pid=1.7",
    "https://tse3.mm.bing.net/th/id/OIP.oFWElLpOaO32hlIPQfZ3eQAAAA?w=204&h=306&c=7&o=5&dpr=2&pid=1.7",
    "https://tse4.mm.bing.net/th/id/OIP.HgrQr0OYzRzkEgTV14yFAQHaLe?w=115&h=180&c=7&o=5&dpr=2&pid=1.7",
    "https://tse2.mm.bing.net/th/id/OIP.W8Shn9Y7AeR_j7sUK8md-AHaKl?w=206&h=294&c=7&o=5&dpr=2&pid=1.7",
    "https://tse1.mm.bing.net/th/id/OIP.5r_L0vlkEHjd6ADMz_w2EwHaJK?w=206&h=256&c=7&o=5&dpr=2&pid=1.7",
    "https://tse1.mm.bing.net/th/id/OIP.yHv-ZdkAVlF3PITmCpGs6QHaLX?w=120&h=185&c=7&o=5&dpr=2&pid=1.7",
    "https://tse1.mm.bing.net/th/id/OIP.sK5Gc8lcnDxYuL_C00v8MwAAAA?w=206&h=291&c=7&o=5&dpr=2&pid=1.7",
    "https://tse1.mm.bing.net/th/id/OIP.eeTCnkL___ZTlrf4EKCH_wAAAA?w=160&h=207&c=7&o=5&dpr=2&pid=1.7",
    "https://tse2.mm.bing.net/th/id/OIP.-AK85kpeeZstUwncByXbDgHaHa?w=178&h=180&c=7&o=5&dpr=2&pid=1.7",
    "https://tse4.mm.bing.net/th/id/OIP.omihFwlT_4quwHU4SxCR9wHaKH?w=206&h=281&c=7&o=5&dpr=2&pid=1.7",
    "https://tse3.mm.bing.net/th/id/OIP.JljWqYezaYnCX6WREQfsUwHaJx?w=143&h=189&c=7&o=5&dpr=2&pid=1.7",
    "https://tse4.mm.bing.net/th/id/OIP.lI2AG6YIoKWXcaMEHRTsJgHaJZ?w=206&h=262&c=7&o=5&dpr=2&pid=1.7",
    "https://tse3.mm.bing.net/th/id/OIP.1y3h6xTJcHie8TR0Fa0rxwHaJm?w=206&h=267&c=7&o=5&dpr=2&pid=1.7",
    "https://tse1.mm.bing.net/th/id/OIP.4Z7TLItfjacBJSBv-GkDmwHaKL?w=127&h=180&c=7&o=5&dpr=2&pid=1.7"
]
function chooseComposer() {
    $("h2").removeClass("hidden");
    var i = Math.floor(Math.random() * 23);
    $("h1#composer").html(composers[i]);
    $("img#composer-image").attr("src", composerImage[i]);
}