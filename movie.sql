-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 13 Jun 2024 pada 13.56
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `movie`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_admin`
--

CREATE TABLE `tbl_admin` (
  `id` int(11) NOT NULL,
  `username` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tbl_admin`
--

INSERT INTO `tbl_admin` (`id`, `username`, `email`, `password`) VALUES
(9, 'test123', 'test@gmail.com', '$2a$04$7dWSkjSyqWOLl61BbiQZdeOSLWo3ELxxKxHHOM5DQlSqHrZ7cYiPa'),
(10, 'test', 'test@gmail.com', '$2a$04$dMSMPfXPYD0junLUyqxlUO/tFFU0EgVdRKvfR/8GbW4tyCLPia5XK');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_bookings`
--

CREATE TABLE `tbl_bookings` (
  `id` int(11) NOT NULL,
  `id_ticket` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `payment_status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tbl_bookings`
--

INSERT INTO `tbl_bookings` (`id`, `id_ticket`, `id_user`, `payment_status`) VALUES
(9, 9, 1, 'pending'),
(10, 10, 1, 'pending');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_movies`
--

CREATE TABLE `tbl_movies` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `cast` varchar(100) NOT NULL,
  `img_url` varchar(255) NOT NULL,
  `sinopsis` text NOT NULL,
  `director` text NOT NULL,
  `age` int(11) NOT NULL,
  `duration` int(11) NOT NULL,
  `trailer_url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tbl_movies`
--

INSERT INTO `tbl_movies` (`id`, `name`, `cast`, `img_url`, `sinopsis`, `director`, `age`, `duration`, `trailer_url`) VALUES
(1, 'Gran Turismo', 'David Harbour, Orlando Bloom, Archie Madekwe, Darren Barnet, Geri Halliwell, Djimon Hounsou', 'https://upload.wikimedia.org/wikipedia/id/2/20/GranTurismoMoviePoster.jpeg', 'Jann Mardenborough, seorang gamer berbakat, bermimpi menjadi pembalap profesional. Meskipun mendapat skeptisisme dari keluarga dan teman-temannya, dia dengan tekun mengejar hasratnya untuk balapan. Kesempatan besar Jann datang ketika dia mengikuti dan memenangkan serangkaian kompetisi yang diselenggarakan oleh Nissan dan Gran Turismo, yang dirancang untuk menemukan dan mengembangkan bakat balap baru dari dunia virtual. Di bawah bimbingan pelatih berpengalaman yang agak enggan, dia menavigasi transisi dari balapan simulasi ke dunia motorsport profesional yang berkecepatan tinggi dan penuh tantangan.', 'Neill Blomkamp', 13, 120, 'https://www.youtube.com/watch?v=GVPzGBvPrzw&pp=ygUMZ3JhbiB0dXJpc21v'),
(2, 'Gundam Seed Freedom', 'Jun Fukuyama, Rie Tanaka, Yuichi Nakamura, Tekhito Koyasu, Junichi Suwabe', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtAy9EzTW3myDO00ai7RO08-_pbOdMpgKlvg&s', '\"Mobile Suit Gundam SEED Freedom\" mengikuti kelanjutan dari pertempuran epik antara Kira Yamato dan Athrun Zala beserta sekutu mereka, yang kini menghadapi ancaman baru setelah berakhirnya konflik sebelumnya. Setelah mencapai kedamaian yang rapuh, dunia kembali diguncang oleh ketegangan antara Naturals dan Coordinators. Ancaman baru muncul dalam bentuk kekuatan militer yang mengancam kestabilan dan perdamaian yang baru saja dicapai.\n\nKira Yamato dan Athrun Zala harus sekali lagi mengendalikan mobile suit mereka untuk melindungi teman-teman mereka dan mempertahankan perdamaian dunia. Bersama dengan teman-teman lama dan sekutu baru, mereka menghadapi pertempuran yang lebih besar dan lebih berbahaya. Pertarungan kali ini tidak hanya menguji keterampilan tempur mereka, tetapi juga komitmen mereka terhadap nilai-nilai perdamaian dan keadilan.\n\nDalam perjalanan ini, mereka akan menemukan kebenaran yang lebih dalam tentang diri mereka, musuh mereka, dan dunia yang mereka tinggali. \"Mobile Suit Gundam SEED Freedom\" menyoroti tema-tema seperti persahabatan, pengorbanan, dan harapan untuk masa depan yang lebih baik dalam menghadapi konflik dan ketidakpastian.', 'Mitsuo Fukuda', 17, 120, 'https://www.youtube.com/watch?v=Gsj6ToFTGgc&ab_channel=GundamInfo'),
(3, 'Haikyu!! The Dumpster Battle', 'Ayumu Murase, Kaito Ishikawa, Satoshi Hino, Miyu Irino, Yuu hayashi, Nobuhiko Okamoto', 'https://upload.wikimedia.org/wikipedia/en/d/d0/Haikyu_The_Dumpster_Battle_Poster.jpg', 'Pertandingan yang dijuluki \"The Dumpster Battle\" adalah klimaks dari persaingan panjang antara tim voli SMA Karasuno dan SMA Nekoma. Nama \"Dumpster Battle\" berasal dari simbolisme hewan maskot kedua sekolah: gagak untuk Karasuno dan kucing untuk Nekoma, yang sering digambarkan bertarung di tempat sampah.\r\n\r\nTim Karasuno, yang dikenal sebagai \"Gagak yang Bangkit\", telah bekerja keras untuk kembali ke puncak voli SMA. Dipimpin oleh kapten mereka, Daichi Sawamura, dan bintang-bintang seperti Shōyō Hinata dan Tobio Kageyama, mereka menghadapi tantangan besar untuk membuktikan kemampuan mereka. Karasuno telah mengalahkan banyak lawan tangguh, tetapi pertempuran mereka melawan Nekoma memiliki makna khusus karena sejarah panjang persaingan mereka.\r\n\r\nDi sisi lain, tim Nekoma, dengan kapten Tetsurō Kuroo dan setter cerdas Kenma Kozume, adalah lawan yang tangguh dengan gaya permainan yang berbeda. Nekoma dikenal dengan pertahanan mereka yang kuat dan kemampuan untuk tetap tenang di bawah tekanan. Mereka juga bertekad untuk mengalahkan Karasuno dan membuktikan keunggulan mereka di lapangan.\r\n\r\nPertandingan ini tidak hanya menguji kemampuan teknis dan fisik para pemain, tetapi juga mental dan kerjasama tim. Setiap set dan setiap poin diperebutkan dengan semangat yang membara, menampilkan kekuatan, ketahanan, dan kerja keras kedua tim. Pertandingan ini penuh dengan momen-momen emosional, taktik cerdas, dan aksi voli yang menegangkan.', 'Masako Sato', 13, 127, 'https://www.youtube.com/watch?v=MqVA0dl36bc&ab_channel=TOHOanimation%E3%83%81%E3%83%A3%E3%83%B3%E3%83%8D%E3%83%AB'),
(4, 'Godzilla X Kong', 'Alexander Skarsgård, Millie Bobby Brown, Rebecca Hall, Brian Tyree Henry, Shub Oguri, Eiza González,', 'https://upload.wikimedia.org/wikipedia/en/b/be/Godzilla_x_kong_the_new_empire_poster.jpg', 'Ketika raja monster, Godzilla, tiba-tiba mulai menyerang kembali, pertanyaan tentang apa yang memicu kemarahannya dan bagaimana menghentikannya menjadi fokus utama dunia. Sementara itu, di pulau terpencil, Kong, raja kera besar, ditemukan memiliki ikatan khusus dengan seorang gadis muda bernama Jia. Ketika kedua monster ikonik ini diarahkan untuk bertemu dalam pertarungan epik yang akan menentukan nasib dunia, tim berani bersiap untuk mencari jawaban dan mencoba menghentikan pertarungan yang menghancurkan.\r\n\r\nMengikuti jejak Godzilla, Dr. Nathan Lind dan teman-temannya memulai perjalanan berbahaya untuk menemukan asal-usul Titans, berharap untuk menemukan solusi yang akan membawa perdamaian. Sementara itu, Madison Russell dan teman-temannya menyusup ke fasilitas rahasia untuk mengungkap konspirasi yang mungkin terkait dengan serangan Godzilla. Di sisi lain, Ren Serizawa, ilmuwan yang terobsesi dengan Titans, merencanakan penggunaan teknologi canggih untuk menghadapi kedua makhluk raksasa ini.\r\n\r\nDengan ketegangan meningkat dan pertempuran monster yang tak terhindarkan, dunia menahan nafas saat Godzilla dan Kong bersiap untuk bentrok. Namun, ketika rahasia yang gelap terungkap dan kebenaran sejati tentang pertempuran legendaris ini mulai terkuak, harapan bagi kelangsungan hidup umat manusia mungkin terletak pada kerjasama yang tidak terduga dan pengorbanan yang besar.', 'Adam Wingard', 13, 113, 'https://www.youtube.com/watch?v=lV1OOlGwExM&ab_channel=WarnerBros.Pictures'),
(8, 'Ford  VS Ferarri', 'Matt Damon, Christian Bale', 'https://upload.wikimedia.org/wikipedia/en/a/a4/Ford_v._Ferrari_%282019_film_poster%29.png', 'sebuah drama olahraga biografi yang menceritakan kisah nyata tentang persaingan sengit antara raksasa otomotif Amerika, Ford Motor Company, dan produsen mobil Italia, Ferrari. Film ini berlatar belakang tahun 1960-an dan berfokus pada tekad Ford untuk mengalahkan Ferrari, kekuatan dominan dalam dunia balap mobil, di ajang 24 Hours of Le Mans, balapan ketahanan paling bergengsi.', 'James Mangold', 13, 120, 'https://www.youtube.com/watch?v=zyYgDtY2AMY&ab_channel=20thCenturyStudios');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_payments`
--

CREATE TABLE `tbl_payments` (
  `id` int(11) NOT NULL,
  `id_booking` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_tickets`
--

CREATE TABLE `tbl_tickets` (
  `id` int(11) NOT NULL,
  `seat_no` varchar(20) NOT NULL,
  `id_movie` int(20) NOT NULL,
  `price` int(11) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tbl_tickets`
--

INSERT INTO `tbl_tickets` (`id`, `seat_no`, `id_movie`, `price`, `date`) VALUES
(9, 'A1', 1, 10000, '2024-07-01'),
(10, '1', 1, 10000, '2024-07-01'),
(11, '1', 1, 10000, '2024-07-01');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_users`
--

CREATE TABLE `tbl_users` (
  `user_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `b_date` date NOT NULL DEFAULT current_timestamp(),
  `province` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `gender` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tbl_users`
--

INSERT INTO `tbl_users` (`user_id`, `name`, `email`, `password`, `phone`, `b_date`, `province`, `city`, `gender`) VALUES
(1, '', 'test@gmail.com', '$2a$04$yOwSNHm2PvlZ/jrewoqbIuP3H6W/kVgY9ZJR7YJG3uEfAvBgs0zxe', '0812345679', '2024-06-12', '', '', '');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `tbl_admin`
--
ALTER TABLE `tbl_admin`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tbl_bookings`
--
ALTER TABLE `tbl_bookings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_ticket` (`id_ticket`),
  ADD KEY `id_user` (`id_user`);

--
-- Indeks untuk tabel `tbl_movies`
--
ALTER TABLE `tbl_movies`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tbl_payments`
--
ALTER TABLE `tbl_payments`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tbl_tickets`
--
ALTER TABLE `tbl_tickets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_movie` (`id_movie`);

--
-- Indeks untuk tabel `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `tbl_admin`
--
ALTER TABLE `tbl_admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `tbl_bookings`
--
ALTER TABLE `tbl_bookings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT untuk tabel `tbl_movies`
--
ALTER TABLE `tbl_movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `tbl_payments`
--
ALTER TABLE `tbl_payments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `tbl_tickets`
--
ALTER TABLE `tbl_tickets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT untuk tabel `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `tbl_bookings`
--
ALTER TABLE `tbl_bookings`
  ADD CONSTRAINT `tbl_bookings_ibfk_1` FOREIGN KEY (`id_ticket`) REFERENCES `tbl_tickets` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tbl_bookings_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `tbl_users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `tbl_tickets`
--
ALTER TABLE `tbl_tickets`
  ADD CONSTRAINT `tbl_tickets_ibfk_1` FOREIGN KEY (`id_movie`) REFERENCES `tbl_movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
