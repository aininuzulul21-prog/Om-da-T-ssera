// Data Produk Lengkap
const productData = [
    { id: 'MASR01', name: 'PLAIN GRAY CREWNECK SWEATER', category: 'male_atasan', price: 950000, img: 'img/Male/Atasan/basic sweater flecee_sweater cowok cewek.jpg', desc: `Jenis Item: Sweater Crewneck (Atasan Rajut/Sweatshirt) Pria/Uniseks

Deskripsi: Sweater lengan panjang dengan potongan leher bulat (crewneck) berwarna abu-abu muda polos. Terbuat dari bahan fleece atau sweatshirt yang tebal dan nyaman. Terdapat karet manset di pergelangan tangan dan pinggang. Terdapat label atau patch kecil di bagian dada bawah yang mungkin menunjukkan merek. `},
    { id: 'MABK01', name: 'MENS LONG SLEEVE BATIK SHIRT', category: 'male_atasan', price: 950000, img: 'img/Male/Atasan/batik.jpg', desc: `Jenis Item: Kemeja Batik Pria Lengan Panjang

Deskripsi: Kemeja formal lengan panjang dengan motif batik tradisional. Warna dominannya adalah cokelat tua, hitam, dan krem, dengan pola yang detail dan rumit, menampilkan bentuk-bentuk menyerupai burung atau motif hewan mitologis lainnya (seperti pola burung Garuda atau Mega Mendung yang terinspirasi dari alam). Kemeja ini memiliki kerah tegak (mandarin collar) dan cocok untuk acara formal atau semi-formal Indonesia. `},
    { id: 'MAJS01', name: 'MENS BLACK BLAZER', category: 'male_atasan', price: 950000, img: 'img/Male/Atasan/branded men's court_.jpg', desc: `Jenis Item: Blazer/Jas Pria (Single-Breasted Blazer)

Deskripsi: Blazer atau Jas formal pria berwarna hitam polos dengan potongan slim fit yang modern. Jas ini memiliki satu kancing (single-breasted), kerah bertepi standar (notch lapel), dan saku welt (saku datar). Terdapat detail sapu tangan saku (pocket square) berwarna putih di saku dada sebagai aksen. `},
    { id: 'MAKK01', name: 'COLOR BLOCK SHORT SLEEVE SHIRT', category: 'male_atasan', price: 950000, img: 'img/Male/Atasan/branded men's shirts_.jpg', desc: `Jenis Item: Kemeja Kasual Pria Lengan Pendek

Deskripsi: Kemeja lengan pendek kasual model color block dengan perpaduan dua warna kontras: hitam di satu sisi dan cokelat/khaki di sisi lainnya. Kemeja ini memiliki kerah lipat standar dan deretan kancing di bagian tengah. Terdapat saku tempel berbentuk kotak berwarna hitam di sisi cokelat. `},
    { id: 'MAKG01', name: 'MENS NAVY BLUE DRESS SHIRT', category: 'male_atasan', price: 950000, img: 'img/Male/Atasan/download (2).jpg', desc: `Jenis Item: Kemeja Kancing Lengan Panjang Pria

Deskripsi: Kemeja lengan panjang berwarna biru tua (navy blue) yang polos dan tampak mengkilap (satin/sheen), menunjukkan bahan yang licin. Kemeja ini memiliki kerah lipat klasik dan penutup kancing yang serasi dengan warna kemeja, memberikan kesan formal dan sleek. `},
    { id: 'MAVT01', name: 'MENS BLACK FORMAL VEST', category: 'male_atasan', price: 950000, img: 'img/Male/Atasan/HOT Prodigo _ Rompi Jas Pria Yapong All Varian I Vest Rompi Formal Pria I Setelan Dalaman Jas Pria.jpg', desc: `Jenis Item: Rompi (Vest) Formal Pria

Deskripsi: Rompi formal pria berwarna hitam polos, dirancang untuk dikenakan sebagai bagian dari setelan jas. Rompi ini memiliki potongan leher V (V-neck), penutup tiga kancing, dan dua saku datar di bagian pinggang. Potongannya fitted dan klasik, cocok untuk acara pernikahan atau formal. `},
    { id: 'MAKS01', name: 'MENS BLACK MINIMALIST T-SHIRT', category: 'male_atasan', price: 950000, img: 'img/Male/Atasan/Kaos Pria Oversize Hitam - Bahan Cotton Lembut, Lengan Pendek, Desain Minimalis.jpg', desc: `Jenis Item: Kaos Oblong (T-Shirt) Pria

Deskripsi: Kaos lengan pendek berwarna hitam polos dengan potongan reguler atau oversize yang nyaman. Kaos ini memiliki desain minimalis dengan tulisan atau logo kecil berwarna putih di bagian dada ("BREAKSIDE UNLIMITED"). Terdapat label merek kecil di bagian bawah. Kaos ini adalah basic item yang sangat serbaguna untuk gaya kasual. `},
    { id: 'MBCJ01', name: 'MENS DARK WASH DENIM JEANS', category: 'male_bawahan', price: 150000, img: 'img/Male/Bawahan/Celana Jeans Pria.jpg', desc: `Jenis Item: Celana Jeans Pria (Straight/Slim Fit)

Deskripsi: Celana jeans pria berwarna biru denim gelap (dark wash) dengan jahitan kontras berwarna cokelat. Celana ini memiliki potongan klasik lurus (straight fit) atau sedikit ramping (slim fit). Detailnya meliputi penutup ritsleting/kancing, lima saku (five-pocket style), dan belt loop standar. Ini adalah gaya jeans yang serbaguna untuk tampilan kasual sehari-hari. `},
    { id: 'MBCB01', name: 'MENS GREY DRESS PANTS', category: 'male_bawahan', price: 150000, img: 'img/Male/Bawahan/Celana.jpg', desc: `Jenis Item: Celana Panjang Formal Pria (Dress Trousers)

Deskripsi: Celana panjang formal pria berwarna abu-abu gelap atau charcoal grey. Celana ini memiliki potongan lurus dan rapi (straight fit) dengan lipatan celana (crease) yang tajam di bagian depan dan belakang. Detailnya minimalis, dengan penutup tersembunyi (concealed closure) dan belt loop halus, cocok untuk acara profesional atau formal. `},
    { id: 'MBCC01', name: 'HIGH WAISTED CARGO PANTS', category: 'male_bawahan', price: 150000, img: 'img/Male/Bawahan/high waisted cargo pants _ Hollister.jpg', desc: `Jenis Item: Celana Cargo Pria (High-Waisted Wide-Leg)

Deskripsi Tambahan (dari kategori pria): Celana panjang cargo berwarna hijau tentara/army (khaki/olive green) dengan potongan kaki lebar (wide-leg) dan pinggang tinggi (high-waist). Celana ini terbuat dari bahan katun tebal/twill dan ditandai dengan banyak saku: saku saku miring di pinggang, dan dua saku flap besar bertumpuk di sisi paha. Jahitan kontrasnya terlihat jelas, memberikan tampilan yang utilitarian dan modis. `},
    { id: 'MBCP01', name: 'MENS BLACK FLEECE SHORTS', category: 'male_bawahan', price: 150000, img: 'img/Male/Bawahan/SENATA - Cargo Pendek Pria Hitam.jpg', desc: `Jenis Item: Celana Pendek Cargo Pria (Gaya Sweatshorts)

Deskripsi: Celana pendek pria berwarna hitam yang terbuat dari bahan fleece atau sweatshirt (bahan lembut yang nyaman). Celana ini memiliki tali serut (drawstring) tebal berwarna putih di pinggang dan dua saku tempel besar (cargo pockets) di sisi paha. Terdapat saku di bagian samping pinggang. Gaya celana ini sangat santai (athleisure/casual). `},
    { id: 'MKSL01', name: 'BOY SANDAL', category: 'male_footwear', price: 150000, img: 'img/Male/Alas kaki/sandal anak laki laki.jpg', desc: `Jenis Item: Sandal Jepit (Flip-Flops) Outdoor Pria/Anak Laki-Laki

Deskripsi: Sepasang sandal jepit dengan desain yang kokoh. Solnya tebal dan bergerigi (lug sole), berwarna abu-abu dan hitam, menunjukkan desain yang dirancang untuk penggunaan outdoor atau aktivitas di luar ruangan. Tali jepitnya berwarna hitam dan terbuat dari bahan tekstil/nilon yang kuat. `},
    { id: 'MKSJ01', name: 'CONVERSE SHOES', category: 'male_footwear', price: 150000, img: 'img/Male/Alas kaki/Sepatu Converse.jpeg', desc: `Jenis Item: Sepatu Sneakers High-Top (Mirip Converse Chuck Taylor All Star)

Deskripsi: Sepasang sepatu sneakers model high-top (sebatas mata kaki) dengan warna dasar hitam dan sol karet berwarna putih yang tebal. Terdapat tali sepatu berwarna putih dengan lubang tali yang kontras. Lingkaran logo bintang berwarna biru dan putih terlihat jelas di bagian samping pergelangan kaki. `},
    { id: 'MKSF01', name: 'PATRIOT SHOES', category: 'male_footwear', price: 150000, img: 'img/Male/Alas kaki/Sepatu Patriot.jpeg', desc: `Jenis Item: Sepatu Pantofel / Sepatu Formal Pria (Brogue Shoes)

Deskripsi: Sepasang sepatu pantofel formal pria model brogue (didekorasi dengan lubang-lubang dekoratif/perforasi) berwarna hitam. Sepatu ini memiliki lace-up (tali) dan potongan wingtip klasik. Solnya tipis, dengan lapisan berwarna cokelat muda di tepinya, memberikan kesan formal dan klasik. `},
    { id: 'MKSO01', name: 'REEBOK SHOES', category: 'male_footwear', price: 150000, img: 'img/Male/Alas kaki/Sepatu Reebok.jpeg', desc: `Jenis Item: Sepatu Sneakers Olahraga / Lari (Training/Running Shoes)

Deskripsi: Sepasang sepatu sneakers untuk olahraga dengan desain modern dan futuristik. Warna utamanya adalah hitam dan putih, dengan aksen jaring (mesh) berwarna oranye terang/coral. Solnya tebal, terutama di bagian belakang, berwarna abu-abu gelap dan hitam, dirancang untuk performa olahraga dengan bantalan yang terlihat baik. Logo merek (Reebok) terlihat di sisi samping. `},
    { id: 'FASR01', name: 'EMBROIDERED COLLAR SWEATER', category: 'female_atasan', price: 220000, img: 'img/Female/Atasan/1edda0ba-ea63-43f2-9f04-5ab0be59c056.jpeg', desc: `Jenis Item: Sweater Lengan Panjang

Deskripsi: Sweater atau baju rajut lengan panjang berwarna merah muda pucat (dusty pink). Sweater ini memiliki tekstur lembut. Bagian yang menonjol adalah kerah besar yang menempel dengan ujung runcing (peter pan collar). Kerah tersebut dihiasi dengan bordir bunga-bunga kecil (mawar) berwarna merah muda dan hijau di kedua sisinya. `},
    { id: 'FABK01', name: 'BATIK SHIRT', category: 'female_atasan', price: 220000, img: 'img/Female/Atasan/3f5f6db0-b942-49bc-b748-3de5767931b5.jpeg', desc: `Jenis Item: Gaun Mini / Mini Dress

Deskripsi: Gaun mini lengan panjang dengan potongan tinggi di leher (stand collar) dan rok A-line. Warna dominan adalah merah bata/oranye kemerahan dengan pola bunga dan sulur-sulur putih gading/krem (paisley-like print). Lengan gaun ini berbentuk balon (puffy sleeve) dengan manset berkancing. Terdapat deretan kancing penuh di bagian depan (yang berfungsi sebagai bukaan) dan ikat pinggang dari bahan yang serasi dengan pola pinggiran yang kontras. `},
    { id: 'FAKA01', name: 'PINSTRIPE CINCHED SHIRT', category: 'female_atasan', price: 220000, img: 'img/Female/Atasan/7ca3e69a-4cb4-46ae-b4ab-ba2572b1ccd6.jpeg', desc: `Jenis Item: Kemeja Lengan Panjang

Deskripsi: Kemeja lengan panjang berwarna merah muda dengan pola garis-garis vertikal putih (pinstripe). Kemeja ini memiliki kerah bertepi klasik. Potongan kemeja ini sangat unik karena meruncing di bagian pinggang (corset-style fit) dengan detail lipatan (pleats) yang dijahit, sehingga memberikan efek pinggang yang ketat dan bagian bawah yang sedikit mengembang (peplum). `},
    { id: 'FAKS01', name: 'GRAPHIC T-SHIRT', category: 'female_atasan', price: 220000, img: 'img/Female/Atasan/89a556e1-9fb9-473e-a06f-119a1476e392.jpeg', desc: `Jenis Item: Kaos Oblong (T-Shirt) Oversized

Deskripsi: Kaos lengan pendek berpotongan longgar (oversized) berwarna krem muda (off-white). Kaos ini memiliki gambar grafis bertema gurun atau padang pasir. Desain tengahnya menampilkan pemandangan gunung, kaktus (seperti Joshua Tree), dan matahari terbenam dengan warna merah muda, biru pucat, dan oranye. Teks di sekitarnya bertuliskan "CALIFORNIA JOSHUA TREE" dan dibingkai dengan ornamen dekoratif. `},
    { id: 'FADS01', name: 'FLORAL WRAP MAXI DRESS', category: 'female_atasan', price: 220000, img: 'img/Female/Atasan/696d308e-cb75-4678-b2a1-3fa73fab8d1e.jpeg', desc: `Jenis Item: Gaun Maxi (Wrap Dress)

Deskripsi: Gaun panjang (maxi dress) model bungkus (wrap dress) dengan leher V (V-neck) dan lengan pendek berumbai (flutter sleeves). Bahan gaun berwarna dasar biru kehijauan muda (dusty teal) dengan motif bunga kecil-kecil berwarna putih dan ungu muda yang tersebar di seluruh permukaan. Gaun ini memiliki tali ikat di pinggang dan belahan tinggi yang terbentuk dari potongan wrap. `},
    { id: 'FAVT01', name: 'WHITE BUTTON UP VEST', category: 'female_atasan', price: 220000, img: 'img/Female/Atasan/49471baa-b7ce-45e2-98da-59cd00eb794c.jpeg', desc: `Jenis Item: Rompi (Vest) Wanita

Deskripsi: Rompi tanpa lengan berwarna putih gading (off-white) dengan potongan leher V (V-neck). Rompi ini memiliki penutup kancing tunggal di bagian depan dengan kancing berwarna cokelat menyerupai cangkang kura-kura. Terdapat saku palsu (welt pocket) di bagian pinggang. Rompi ini berpotongan pas badan (fitted) dan dirancang untuk dikenakan sebagai atasan atau sebagai bagian dari setelan yang lebih formal. `},
    { id: 'FABR01', name: 'SEQUINED TWEED CROPPED JACKET', category: 'female_atasan', price: 220000, img: 'img/Female/Atasan/e125b414-a98a-4286-8fd8-781dd7773d5d.jpeg', desc: `Jenis Item: Jaket Pendek (Cropped Jacket)

Deskripsi: Jaket pendek (cropped) berlengan panjang dengan bahan tweed berwarna biru muda (baby blue). Jaket ini memiliki desain asimetris dengan penutup samping dan dihiasi dengan payet atau sequin yang berkilauan. Bagian kerah, tepi bukaan, dan ujung lengan dihiasi dengan tali kepang atau braided trim berwarna perak/putih yang juga dihiasi berlian imitasi atau rhinestone. `},
    { id: 'FBCB01', name: 'FLOWY PLEATED PALAZZO PANTS', category: 'female_bawahan', price: 150000, img: 'img/Female/Bawahan/bea0918b-1cb5-4a91-8b2f-49ba82732641.jpeg', desc: `Jenis Item: Celana Panjang Wanita (High-Waist Wide-Leg Trousers)

Deskripsi: Celana panjang wanita berpotongan pinggang tinggi (high-waist) dengan model kaki lebar (wide-leg) dan panjang hingga lantai. Warna celana adalah biru muda keabu-abuan (dusty blue). Celana ini memiliki detail lipatan ganda (double pleats) di bagian depan yang memberikan volume dan jatuh yang elegan. Penutup celana berupa kancing dan ritsleting tersembunyi, cocok untuk tampilan profesional atau smart casual. `},
    { id: 'FBRK01', name: 'A-LINE CHECK SKIRT WITH GOLD BUTTONS', category: 'female_bawahan', price: 150000, img: 'img/Female/Bawahan/be16c7c5-b27b-4060-bc77-4b3f5eaee29c.jpeg', desc: `Jenis Item: Rok Midi (A-Line Pleated Skirt)

Deskripsi: Rok midi wanita berpotongan pinggang tinggi (high-waist) dengan model A-line yang mengembang ke bawah dan memiliki detail lipatan (pleats) di bagian pinggang. Rok ini memiliki motif kotak-kotak (plaid) yang halus dengan kombinasi warna krem dan cokelat muda. Rok ini memiliki penutup kancing di bagian tengah depan dari atas ke bawah, dengan kancing berwarna emas yang berfungsi sebagai aksen dekoratif. Panjangnya adalah midi (di bawah lutut), cocok untuk gaya feminin dan klasik. `},
    { id: 'FBCJ01', name: 'WIDE-LEG DENIM TROUSERS', category: 'female_bawahan', price: 150000, img: 'img/Female/Bawahan/a819f151-5bb4-454a-aab8-29adb3d9cdb3.jpeg', desc: `Jenis Item: Celana Jeans (Wide-Leg Jeans)

Deskripsi: Celana jeans berpotongan pinggang tinggi (high-waist) dengan model kaki lebar (wide-leg) dan panjang penuh. Warna jeans adalah biru denim sedang dengan jahitan kontras berwarna ochre atau kuning kecokelatan. Potongan pinggangnya klasik dengan fly kancing dan kantong saku di depan dan belakang. Jeans ini memberikan tampilan yang santai namun tetap stylish. `},
    { id: 'FBCP01', name: 'TAILORED PLEATED BELTED SHORTS', category: 'female_bawahan', price: 150000, img: 'img/Female/Bawahan/140f14f8-9a32-48ad-9f25-e8df0ace3d70.jpeg', desc: `Jenis Item: Celana Pendek Wanita (High-Waist Shorts)

Deskripsi: Celana pendek wanita berpotongan pinggang tinggi (high-waist) dengan warna cokelat tua atau khaki. Celana ini memiliki detail lipatan (pleats) di bagian depan. Di bagian pinggang, terdapat sabuk dari bahan yang sama yang diikat dengan gesper logam berwarna emas yang menonjol. Celana ini memiliki potongan lebar (flowy), memberikan siluet yang rapi dan terstruktur, cocok untuk gaya formal atau semi-kasual. `},
    { id: 'FKSO01', name: 'NIKE AIR ZOOM SPIRIDON CAGE 2', category: 'female_footwear', price: 150000, img: 'img/Female/Alas kaki/download (2).jpg', desc: `Jenis Item: Sepatu Olahraga / Sneakers

Deskripsi: Sepasang sepatu olahraga/lari (sneakers) dengan warna dominan merah muda pucat atau dusty pink. Sepatu ini memiliki desain yang tebal (chunky) khas sepatu lari, dengan panel-panel bahan mesh dan sintetis. Terdapat tanda swoosh (logo) berwarna putih di sisi samping. Bagian solnya tebal, berwarna putih, dengan aksen hitam di ujung depan dan belakang. Sepatu ini terlihat seperti model chunky runner yang fokus pada kenyamanan dan gaya. `},
    { id: 'FKSL01', name: 'SANDAL SPERRY', category: 'female_footwear', price: 150000, img: 'img/Female/Alas kaki/Sendal Sperry.jpeg', desc: `Jenis Item: Sandal Selop / Sandal Jepit Wanita (Slide Sandals)

Deskripsi: Sepasang sandal selop/jepit wanita berwarna putih polos dengan sol datar. Bagian tali atasnya lebar dan dihiasi dengan pola tenunan atau anyaman. Terdapat ornamen rantai emas yang besar dan menonjol di bagian tengah tali, memberikan sentuhan yang elegan. Sandal ini memiliki ujung kotak (square toe) dan umumnya digunakan untuk tampilan kasual yang santai namun chic. `},
    { id: 'FKSF01', name: 'HIGH HEELS VIVIANE', category: 'female_footwear', price: 150000, img: 'img/Female/Alas kaki/туфли.jpg', desc: `Jenis Item: Sepatu Hak Tinggi / Stiletto Heels (Model Slingback)

Deskripsi: Sepasang sepatu hak tinggi wanita model slingback (bertali di belakang pergelangan kaki) berwarna putih gading atau off-white. Sepatu ini memiliki ujung yang runcing (pointy toe) dan hak stiletto yang ramping dengan ketinggian sedang hingga tinggi. Tali slingback-nya tipis dan memiliki gesper kecil. Sepatu ini memberikan tampilan yang formal, profesional, atau elegan, cocok untuk acara resmi atau kantor. `},
    { id: 'RSG001', name: 'SARUNG BSH COSMO', category: 'religious', price: 220000, img: 'img/Religion/Sarung BHS Cosmo Hitam Polos _ jakarta, bandung, semarang, yogyakarta, surabaya, malang, kediri,.jpg', desc: `Jenis Item: Sarung Pria.

Deskripsi: Sarung ini didominasi warna hitam pekat dengan motif tenun atau songket berwarna putih keperakan yang terletak secara vertikal. Motif tersebut menonjolkan bentuk geometris seperti berlian (diamond) besar di bagian tengah dan pola bunga atau sulur yang berulang. Di bagian bawah sarung, terdapat label bertuliskan BHS COSMO. Sarung ini dikenakan oleh seorang pria, dipadukan dengan kaus putih polos dan sandal hitam. `},
    { id: 'RMA001', name: 'MUKENA TRAVEL ALIYAH', category: 'religious', price: 150000, img: 'img/Religion/Mukena Travel Aliyah Mukena Travel Wanita 2in1 Katun Outlet Shopee.jpg', desc: `Jenis Item: Mukena Travel Wanita.

Deskripsi: Mukena (pakaian salat wanita) berwarna abu-abu polos. Modelnya adalah mukena travel yang ringkas, seringkali dapat diubah menjadi model 2in1 (ada resleting di dagu). Bagian atasan dan bawahan berwarna senada. Terdapat aksen renda kecil berwarna putih atau krem di sekeliling tepi mukena, termasuk bagian wajah dan ujung rukuh. Mukena ini juga dilengkapi dengan tas kecil serut dari bahan yang sama, yang memudahkan untuk dibawa bepergian. `},
    { id: 'RSH001', name: 'MUSLIM PRAYER RUG', category: 'religious', price: 220000, img: 'img/Religion/Faxianther Portable Muslim Prayer Rug, Sajadah For Islam Carpet Blue.jpg', desc: `Jenis Item: Sajadah (Alas Salat).

Deskripsi: Sajadah ini memiliki warna dasar biru tua (navy) yang kaya. Sajadah ini dihiasi motif bunga-bunga besar berwarna merah muda pucat dan putih, disusun membentuk oval besar di bagian tengah, menyerupai mihrab. Tepian sajadah memiliki bingkai motif hiasan dan diakhiri dengan rumbai-rumbai (umbai) berwarna krem atau putih di kedua ujungnya. Desainnya terlihat klasik dan mewah, sering disebut sajadah jenis Turki atau Persia. `},
    { id: 'RPI001', name: 'KOPIAH TEROMPAH', category: 'religious', price: 150000, img: 'img/Religion/EXCLUSIVE !!! Peci Songkok Kopiah Terompah Malaysia Motif Embos Logo Bordir Tinggi 10cm - Peci Haji Malaysia Berkualitas Fashion Muslim Keren Bisa Bayar Di Tempat COD !!!.jpg', desc: `Jenis Item: Peci/Songkok/Kopiah.

Deskripsi: Koleksi tiga peci dengan model bulat, kemungkinan Peci Malaysia atau Peci Haji, yang memiliki tinggi sekitar 10 cm. Peci ini tersedia dalam tiga warna: putih polos, abu-abu, dan hitam. Peci yang berwarna abu-abu dan hitam memiliki motif geometris yang di-emboss (timbul) di seluruh permukaannya. Setiap peci memiliki emblem bordir kecil di bagian depan yang berbentuk mahkota atau perisai berwarna emas, yang di dalamnya terdapat tulisan Arab, kemungkinan merek atau slogan. `},
    { id: 'ATC001', name: 'BASEBALL CAP', category: 'accessories', price: 150000, img: 'img/Accessories/Cod Topi Distro Topi Pria Topi Baseball Topi Polo Caps Topi Premium -98.jpg', desc: `Jenis Item: Topi baseball (topi polo).

Deskripsi: Topi baseball klasik berwarna hitam dengan visor melengkung. Terdapat bordir logo kecil berupa figur penunggang kuda sedang bermain polo, berwarna krem atau emas kecoklatan, di bagian depan.`},
    { id: 'ATS001', name: 'BAGSMART DAYPACK', category: 'accessories', price: 150000, img: 'img/Accessories/bagsmart daypack.jpg', desc: `Jenis Item: Ransel/tas punggung harian (daypack).

Deskripsi: Ransel kecil hingga sedang dengan desain minimalis, berwarna merah muda pucat (soft pink). Tas ini terbuat dari bahan nilon atau sejenisnya yang terlihat ringan dan mengkilap. Memiliki beberapa kompartemen dengan resleting, dan merupakan pilihan yang cocok untuk penggunaan sehari-hari atau bepergian ringan.`},
    { id: 'ABT001', name: 'CRYSTAL EMBRACE BRACELET', category: 'accessories', price: 150000, img: 'img/Accessories/Crystal Embrace Bracelet.jpg', desc: `Jenis Item: Gelang Bangle (Bangle Bracelet).

Deskripsi: Gelang berwarna perak ini memiliki desain elegan. Bagian depan dihiasi kristal bening dalam bentuk gugusan daun atau bunga, memberikan kesan berkilau dan mewah. Gelang ini memiliki rantai ekstensi di bagian belakang dengan pengait, yang dihiasi dengan logo angsa, kemungkinan dari merek Swarovski.`},
    { id: 'ACR001', name: 'EIGER ECOSAVIOR 45 CARRIER', category: 'accessories', price: 150000, img: 'img/Accessories/EIGER ECOSAVIOR 45 CARRIER OLIVE.jpg', desc: `Jenis Item: Tas carrier/ransel gunung.

Deskripsi: Ransel carrier berkapasitas besar (sekitar 45 liter) untuk kegiatan hiking atau trekking. Tas ini berwarna abu-abu gelap dan hijau olive gelap. Memiliki banyak tali pengikat dan kompresi untuk kestabilan, serta sistem punggung yang ergonomis. Terdapat logo merek Eiger di bagian atas.`},
    { id: 'AKG001', name: 'RIBBON NECKLACE', category: 'accessories', price: 150000, img: 'img/Accessories/Glimmering Tie.jpg', desc: `Jenis Item: Kalung liontin.

Deskripsi: Kalung berantai tipis berwarna perak dengan liontin berbentuk dasi kupu-kupu (bow tie). Liontin tersebut dihiasi kristal bening kecil yang berkilau di bagian simpulnya, sementara bagian pita yang menjuntai memiliki permukaan logam halus.`},
    { id: 'ASG001', name: 'MIU MIU PINK SUNGLASSES', category: 'accessories', price: 150000, img: 'img/Accessories/miu miu pink glasses_.webp', desc: `Jenis Item: Kacamata hitam atau kacamata fashion.

Deskripsi: Kacamata berdesain ramping, berbentuk oval kecil, dan rimless (tanpa bingkai penuh). Lensa berwarna merah muda gradasi yang lembut. Tangkai kacamata berwarna emas dengan pola tortoiseshell (kulit penyu) pada ujungnya dan detail logo Miu Miu yang kecil di bagian atas salah satu lensa.`},
    { id: 'ASG002', name: 'CYCLING SUNGLASSES', category: 'accessories', price: 150000, img: 'img/Accessories/New Outdoor Night Riding Cycling Sunglasses For Men And Women Goggles Sports Road Bicycle Large Frame Windproof Eye Protection Transparent Bike Shades Sunglasses UV400.jpg', desc: `Jenis Item: Kacamata olahraga/sepeda.

Deskripsi: Kacamata olahraga dengan bingkai besar, bentuk wrap-around (melengkung menutupi mata) berwarna hitam. Lensa memiliki lapisan cermin (mirrored) dengan warna biru keunguan yang mencolok. Desainnya kokoh dan futuristic, dirancang untuk melindungi mata dari angin dan sinar matahari, serta ideal untuk bersepeda atau aktivitas luar ruangan lainnya.`},
    { id: 'ABH001', name: 'BUCKET HAT', category: 'accessories', price: 150000, img: 'img/Accessories/promo ✨ -Topi Pria Bucket Hat Rimba Topi Pria nita Outdoor Topi Rimba Gunung - Khaki _ Krem.jpg', desc: `Jenis Item: Topi bucket atau topi rimba.

Deskripsi: Topi bucket berwarna cokelat khaki atau krem dengan pinggiran yang lebar dan tali dagu yang dapat disesuaikan. Desainnya ditujukan untuk aktivitas luar ruangan, seperti mendaki gunung atau menjelajah, memberikan perlindungan dari sinar matahari. Terdapat label merek kecil berwarna gelap di bagian depan.`}
];
// Keranjang Belanja Global (Data in-memory, hilang setelah refresh)
let cartItems = [];
// Inisialisasi: Menampilkan semua produk saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    renderProductCatalog(productData);
    updateCartIcon();
});
// 1. FUNGSI NAVIGASI
function navigateTo(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active'); 
    // Khusus Cart/Checkout: Render ulang konten
    if (pageId === 'cart') {
        renderCart();
    } else if (pageId === 'checkout') {
        renderCheckoutSummary();
    }
    window.scrollTo(0, 0); // Gulir ke atas
}
// 2. FUNGSI KATALOG & FILTER
function renderProductCatalog(products) {
    const list = document.getElementById('product-list');
    list.innerHTML = '';
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('data-id', product.id);
        card.setAttribute('data-category', product.category);
        card.setAttribute('data-name', product.name);       
        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Rp ${product.price.toLocaleString('id-ID')}</p>
            <button onclick="viewDetail('${product.name.replace(/'/g, "\\'")}', '${product.category}', 'Rp ${product.price.toLocaleString('id-ID')}', '${product.desc.replace(/'/g, "\\'")}', '${product.id}', '${product.img.replace(/'/g, "\\'")}')">Lihat Detail</button>
            <button style="background-color: #FF5722; margin-left: 5px;" onclick="addToCart({id: '${product.id}', name: '${product.name.replace(/'/g, "\\'")}', price: ${product.price}, img: '${product.img.replace(/'/g, "\\'")}'})">Tambah ke Cart</button>
        `;
        list.appendChild(card);
    });
}
function filterProducts() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const categoryFilter = document.getElementById('category-filter').value;
    const filteredProducts = productData.filter(product => {
        const nameMatch = product.name.toLowerCase().includes(searchTerm);
        const categoryMatch = categoryFilter === 'all' || product.category === categoryFilter;
        return nameMatch && categoryMatch;
    });
    renderProductCatalog(filteredProducts);
}
// 3. FUNGSI DETAIL PRODUK
function viewDetail(name, category, price, description, id, img) {
    document.getElementById('detail-title').innerText = name;
    document.getElementById('breadcrumb-product').innerText = name;
    document.getElementById('detail-price').innerText = price;
    document.getElementById('detail-description').innerText = description;
    document.getElementById('detail-image').src = encodeURI(img);
    document.getElementById('detail-image').alt = name;
    // Set thumbnails (for now, use the same image)
    document.getElementById('thumb1').src = encodeURI(img);
    document.getElementById('thumb2').src = encodeURI(img);
    document.getElementById('thumb3').src = encodeURI(img);
    // Simpan ID produk
    document.getElementById('detail-image').alt = name;
    // Set thumbnails (for now, use the same image)
    document.getElementById('thumb1').src = encodeURI(img);
    document.getElementById('thumb2').src = encodeURI(img);
    document.getElementById('thumb3').src = encodeURI(img);
    navigateTo('detail');
}
// 4. FUNGSI CART
function addToCart(product) {
    cartItems.push(product);
    updateCartIcon();
    alert('Produk ditambahkan ke keranjang!');
}
function updateCartIcon() {
    const cartIcon = document.getElementById('cart-icon');
    if (cartIcon) {
        cartIcon.innerText = cartItems.length;
    }
}
function renderCart() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - Rp ${item.price.toLocaleString('id-ID')}`;
        cartList.appendChild(li);
    });
}
function renderCheckoutSummary() {
    const summary = document.getElementById('checkout-summary');
    summary.innerHTML = '';
    let total = 0;
    cartItems.forEach(item => {
        total += item.price;
        const div = document.createElement('div');
        div.innerText = `${item.name} - Rp ${item.price.toLocaleString('id-ID')}`;
        summary.appendChild(div);
    });
    document.getElementById('total-price').innerText = `Total: Rp ${total.toLocaleString('id-ID')}`;
}
