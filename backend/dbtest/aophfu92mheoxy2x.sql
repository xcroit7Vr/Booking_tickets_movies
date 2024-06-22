-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 22 Jun 2024 pada 15.59
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
-- Database: `aophfu92mheoxy2x`
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
(9, 'test123', 'test@gmail.com', '$2a$04$7dWSkjSyqWOLl61BbiQZdeOSLWo3ELxxKxHHOM5DQlSqHrZ7cYiPa');

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

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_movies`
--

CREATE TABLE `tbl_movies` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `cast` varchar(100) NOT NULL,
  `img_url` longtext NOT NULL,
  `sinopsis` text NOT NULL,
  `director` text NOT NULL,
  `age` int(11) NOT NULL,
  `duration` int(11) NOT NULL,
  `trailer_url` varchar(255) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tbl_movies`
--

INSERT INTO `tbl_movies` (`id`, `name`, `cast`, `img_url`, `sinopsis`, `director`, `age`, `duration`, `trailer_url`, `price`) VALUES
(1, 'Gran Turismo', 'Max Verstappen test', 'https://upload.wikimedia.org/wikipedia/id/2/20/GranTurismoMoviePoster.jpeg?20231012040737', 'berdasarkan kisah nyata yang disutradarai oleh Neill Blomkamp. Film ini menggabungkan elemen olahraga dan drama dengan sedikit sentuhan teknologi. Ceritanya berfokus pada perjalanan seorang gamer muda yang berbakat dalam permainan video \"Gran Turismo\" dan bagaimana dia berhasil mengubah passion-nya menjadi karir profesional di dunia balap mobil.', 'Neill Blomkamp', 13, 134, 'https://www.youtube.com/watch?v=GVPzGBvPrzw&pp=ygUMZ3JhbiB0dXJpc21v', 40000),
(2, 'Mobile Suit Gundam SEED Freedom', 'Sōichirō Hoshi', 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Seedfreedomvisual.jpg/220px-Seedfreedomvisual.jpg', 'In C.E. 75, a year after the end of the Second Alliance-PLANT War[b], remnants of an anti-coordinator activist group, Blue Cosmos, led several attacks on other nations on Earth. Compass, a world peace monitoring organization under Orb Chief Representative Cagalli Yula Athha and Lacus Clyne, was formed to promote peace on Earth and PLANTS, with the latter serving as its president. The organization\'s mobile suit commander, Kira Yamato, leads his team, Shinn Asuka, Lunamaria Hawke, AND Agnes Gibenrath\nFROM the battleship Millennium, TO interfere AND destroy the remnants. AT a meeting IN the PLANTs, Lacus openly admits her hope TO END the conflict swiftly AND wishes TO free Kira\nFROM it, AS he openly displayed his recurring nightmares IN their home.', 'Mitsuo Fukuda', 17, 124, 'https://www.youtube.com/watch?v=Gsj6ToFTGgc', 40000),
(8, 'Ford VS Ferrari', 'Christian Bale, Matt Damon', 'https://upload.wikimedia.org/wikipedia/en/a/a4/Ford_v._Ferrari_%282019_film_poster%29.png', 'Cerita dimulai pada awal 1960-an ketika Henry Ford II (diperankan oleh Tracy Letts) berusaha untuk meningkatkan citra perusahaan Ford dengan menarik minat generasi muda. Setelah rencana untuk membeli Ferrari gagal akibat penghinaan dari Enzo Ferrari (diperankan oleh Remo Girone), Henry Ford II memutuskan untuk mengalahkan Ferrari di arena balap paling bergengsi di dunia, Le Mans.', 'James Magold', 13, 152, 'https://www.youtube.com/watch?v=zyYgDtY2AMY&ab_channel=20thCenturyStudios', 45000),
(9, 'Haikyuu!! The Dumpster Battle', 'Murase Ayumu', 'https://upload.wikimedia.org/wikipedia/en/d/d0/Haikyu_The_Dumpster_Battle_Poster.jpg', 'Karasuno dan Nekoma adalah dua tim bola voli yang memiliki rivalitas panjang. Pertandingan antara kedua tim ini dikenal dengan sebutan \"Pertempuran di Tempat Sampah\" karena nama kedua sekolah mengacu pada burung gagak (Karasuno) dan kucing (Nekoma), yang sering kali bertemu di tempat sampah dalam budaya Jepang.', 'Susumu Mitsunaka', 13, 88, 'https://www.youtube.com/watch?v=MqVA0dl36bc&ab_channel=TOHOanimation%E3%83%81%E3%83%A3%E3%83%B3%E3%83%8D%E3%83%AB', 45000),
(10, 'Despicable Me 4', 'Steve Carrel', 'https://upload.wikimedia.org/wikipedia/en/e/ed/Despicable_Me_4_Theatrical_Release_Poster.jpeg', 'Mesin waktu terbaik yang ada di dunia, mesin waktu terbesar, mesin waktu yang paling keren... Tiba-tiba muncul di kota dimana Gru tinggal. Seorang penjahat jahat dari masa depan telah datang untuk mengubah alur sejarah, dan sekarang Gru dan Minions-nya harus menggunakan semua trik mereka untuk menghentikannya sebelum terlambat. Dengan petualangan melintasi waktu dan dimensi, pertarungan antara kebaikan dan kejahatan mencapai klimaks yang tidak terduga, sementara Gru belajar bahwa keluarga dan persahabatan adalah kekuatan terbesarnya, bahkan melebihi mesin waktu terhebat sekalipun.', 'Pierre Coffin', 13, 120, 'https://www.youtube.com/watch?v=LtNYaH61dXY&ab_channel=Illumination', 52000);

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
-- Struktur dari tabel `tbl_schedule`
--

CREATE TABLE `tbl_schedule` (
  `id` int(11) NOT NULL,
  `id_movie` int(11) NOT NULL,
  `id_studio` int(11) NOT NULL,
  `jadwal` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tbl_schedule`
--

INSERT INTO `tbl_schedule` (`id`, `id_movie`, `id_studio`, `jadwal`) VALUES
(1, 1, 2, '12:00'),
(2, 2, 2, '14:00'),
(3, 8, 1, '14:00'),
(4, 9, 3, '14:00'),
(5, 8, 1, '18:30'),
(6, 8, 3, '13:00'),
(7, 2, 1, '10:00'),
(8, 10, 2, '13:00'),
(9, 9, 2, '16:00'),
(10, 2, 1, '15:00'),
(11, 2, 3, '10:00'),
(12, 2, 3, '13:00'),
(13, 2, 4, '10:00'),
(14, 2, 4, '18:30');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_studio`
--

CREATE TABLE `tbl_studio` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tbl_studio`
--

INSERT INTO `tbl_studio` (`id`, `name`, `address`) VALUES
(1, 'AMBON CITY CENTER XXI', 'Ambon City Center Lnt. Dasar\nJalan Wolter Monginsidi\nPasso - Ambon'),
(2, 'BOEMI KEDATON XXI', 'jl. galaxy 1'),
(3, 'PALMA XXI', 'Palangkaraya Mall Lantai 3 Jl. Tjilik Riwut KM 1 Kalimantan Tengah.'),
(4, 'Cinépolis Citimall Sampit', 'l. Jendral Sudirman KM 1.5 RT. 047 RW.008 Kel, Mentawa Baru Hulu, Kec.Mentawa B, Kabupaten Kotawaringin Timur, Kalimantan Tengah 74322');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_tickets`
--

CREATE TABLE `tbl_tickets` (
  `id` int(11) NOT NULL,
  `seat_no` varchar(20) NOT NULL,
  `id_schedule` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tbl_tickets`
--

INSERT INTO `tbl_tickets` (`id`, `seat_no`, `id_schedule`, `price`, `date`) VALUES
(9, 'A1', 1, 10000, '2024-07-01');

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
(13, 'sadsad', 'test5@gmail.com', '$2a$04$KjkpQQfZhHYFqavrPINvL.pW0eivpZMrLfQZGtroEB3morSrdTKL.', '0812345678', '2010-01-01', 'DKI JAKARTA', 'KOTA JAKARTA PUSAT', 'Male');

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
-- Indeks untuk tabel `tbl_schedule`
--
ALTER TABLE `tbl_schedule`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_movie` (`id_movie`),
  ADD KEY `id_studio` (`id_studio`);

--
-- Indeks untuk tabel `tbl_studio`
--
ALTER TABLE `tbl_studio`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tbl_tickets`
--
ALTER TABLE `tbl_tickets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_schedule` (`id_schedule`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT untuk tabel `tbl_bookings`
--
ALTER TABLE `tbl_bookings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT untuk tabel `tbl_movies`
--
ALTER TABLE `tbl_movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `tbl_payments`
--
ALTER TABLE `tbl_payments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `tbl_schedule`
--
ALTER TABLE `tbl_schedule`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT untuk tabel `tbl_studio`
--
ALTER TABLE `tbl_studio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `tbl_tickets`
--
ALTER TABLE `tbl_tickets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT untuk tabel `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

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
-- Ketidakleluasaan untuk tabel `tbl_schedule`
--
ALTER TABLE `tbl_schedule`
  ADD CONSTRAINT `tbl_schedule_ibfk_1` FOREIGN KEY (`id_movie`) REFERENCES `tbl_movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tbl_schedule_ibfk_2` FOREIGN KEY (`id_studio`) REFERENCES `tbl_studio` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
