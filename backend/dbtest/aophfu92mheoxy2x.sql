-- --------------------------------------------------------
-- Host:                         educalab.id
-- Server version:               8.4.0 - MySQL Community Server - GPL
-- Server OS:                    Linux
-- HeidiSQL Version:             12.7.0.6850
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for table aoPHFu92mhEoxY2X.tbl_admin
CREATE TABLE IF NOT EXISTS `tbl_admin` (
  `id` int NOT NULL,
  `username` varchar(40) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(40) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table aoPHFu92mhEoxY2X.tbl_admin: ~1 rows (approximately)
INSERT INTO `tbl_admin` (`id`, `username`, `email`, `password`) VALUES
	(9, 'test123', 'test@gmail.com', '$2a$04$7dWSkjSyqWOLl61BbiQZdeOSLWo3ELxxKxHHOM5DQlSqHrZ7cYiPa');

-- Dumping structure for table aoPHFu92mhEoxY2X.tbl_bookings
CREATE TABLE IF NOT EXISTS `tbl_bookings` (
  `id` int NOT NULL,
  `id_ticket` int NOT NULL,
  `id_user` int NOT NULL,
  `payment_status` varchar(20) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table aoPHFu92mhEoxY2X.tbl_bookings: ~0 rows (approximately)

-- Dumping structure for table aoPHFu92mhEoxY2X.tbl_movies
CREATE TABLE IF NOT EXISTS `tbl_movies` (
  `id` int NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `cast` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `img_url` longtext COLLATE utf8mb4_general_ci NOT NULL,
  `sinopsis` text COLLATE utf8mb4_general_ci NOT NULL,
  `director` text COLLATE utf8mb4_general_ci NOT NULL,
  `age` int NOT NULL,
  `duration` int NOT NULL,
  `trailer_url` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `price` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table aoPHFu92mhEoxY2X.tbl_movies: ~5 rows (approximately)
INSERT INTO `tbl_movies` (`id`, `name`, `cast`, `img_url`, `sinopsis`, `director`, `age`, `duration`, `trailer_url`, `price`) VALUES
	(1, 'Gran Turismo', 'Max Verstappen test', 'https://upload.wikimedia.org/wikipedia/id/2/20/GranTurismoMoviePoster.jpeg?20231012040737', 'berdasarkan kisah nyata yang disutradarai oleh Neill Blomkamp. Film ini menggabungkan elemen olahraga dan drama dengan sedikit sentuhan teknologi. Ceritanya berfokus pada perjalanan seorang gamer muda yang berbakat dalam permainan video "Gran Turismo" dan bagaimana dia berhasil mengubah passion-nya menjadi karir profesional di dunia balap mobil.', 'Neill Blomkamp', 13, 134, 'https://www.youtube.com/watch?v=GVPzGBvPrzw&pp=ygUMZ3JhbiB0dXJpc21v', 40000),
	(2, 'Mobile Suit Gundam SEED Freedom', 'Sōichirō Hoshi', 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Seedfreedomvisual.jpg/220px-Seedfreedomvisual.jpg', 'In C.E. 75, a year after the end of the Second Alliance-PLANT War[b], remnants of an anti-coordinator activist group, Blue Cosmos, led several attacks on other nations on Earth. Compass, a world peace monitoring organization under Orb Chief Representative Cagalli Yula Athha and Lacus Clyne, was formed to promote peace on Earth and PLANTS, with the latter serving as its president. The organization\'s mobile suit commander, Kira Yamato, leads his team, Shinn Asuka, Lunamaria Hawke, AND Agnes Gibenrath\r\nFROM the battleship Millennium, TO interfere AND destroy the remnants. AT a meeting IN the PLANTs, Lacus openly admits her hope TO END the conflict swiftly AND wishes TO free Kira\r\nFROM it, AS he openly displayed his recurring nightmares IN their home.', 'Mitsuo Fukuda', 17, 124, 'https://www.youtube.com/watch?v=Gsj6ToFTGgc', 40000),
	(8, 'Ford VS Ferrari', 'Christian Bale, Matt Damon', 'https://upload.wikimedia.org/wikipedia/en/a/a4/Ford_v._Ferrari_%282019_film_poster%29.png', 'Cerita dimulai pada awal 1960-an ketika Henry Ford II (diperankan oleh Tracy Letts) berusaha untuk meningkatkan citra perusahaan Ford dengan menarik minat generasi muda. Setelah rencana untuk membeli Ferrari gagal akibat penghinaan dari Enzo Ferrari (diperankan oleh Remo Girone), Henry Ford II memutuskan untuk mengalahkan Ferrari di arena balap paling bergengsi di dunia, Le Mans.', 'James Magold', 13, 152, 'https://www.youtube.com/watch?v=zyYgDtY2AMY&ab_channel=20thCenturyStudios', 45000),
	(9, 'Haikyuu!! The Dumpster Battle', 'Murase Ayumu', 'https://upload.wikimedia.org/wikipedia/en/d/d0/Haikyu_The_Dumpster_Battle_Poster.jpg', 'Karasuno dan Nekoma adalah dua tim bola voli yang memiliki rivalitas panjang. Pertandingan antara kedua tim ini dikenal dengan sebutan "Pertempuran di Tempat Sampah" karena nama kedua sekolah mengacu pada burung gagak (Karasuno) dan kucing (Nekoma), yang sering kali bertemu di tempat sampah dalam budaya Jepang.', 'Susumu Mitsunaka', 13, 88, 'https://www.youtube.com/watch?v=MqVA0dl36bc&ab_channel=TOHOanimation%E3%83%81%E3%83%A3%E3%83%B3%E3%83%8D%E3%83%AB', 45000),
	(10, 'Despicable Me 4', 'Steve Carrel', 'https://upload.wikimedia.org/wikipedia/en/e/ed/Despicable_Me_4_Theatrical_Release_Poster.jpeg', 'Mesin waktu terbaik yang ada di dunia, mesin waktu terbesar, mesin waktu yang paling keren... Tiba-tiba muncul di kota dimana Gru tinggal. Seorang penjahat jahat dari masa depan telah datang untuk mengubah alur sejarah, dan sekarang Gru dan Minions-nya harus menggunakan semua trik mereka untuk menghentikannya sebelum terlambat. Dengan petualangan melintasi waktu dan dimensi, pertarungan antara kebaikan dan kejahatan mencapai klimaks yang tidak terduga, sementara Gru belajar bahwa keluarga dan persahabatan adalah kekuatan terbesarnya, bahkan melebihi mesin waktu terhebat sekalipun.', 'Pierre Coffin', 13, 120, 'https://www.youtube.com/watch?v=LtNYaH61dXY&ab_channel=Illumination', 52000);

-- Dumping structure for table aoPHFu92mhEoxY2X.tbl_payments
CREATE TABLE IF NOT EXISTS `tbl_payments` (
  `id` int NOT NULL,
  `id_booking` int NOT NULL,
  `amount` int NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table aoPHFu92mhEoxY2X.tbl_payments: ~0 rows (approximately)

-- Dumping structure for table aoPHFu92mhEoxY2X.tbl_schedule
CREATE TABLE IF NOT EXISTS `tbl_schedule` (
  `id` int NOT NULL,
  `id_movie` int NOT NULL,
  `id_studio` int NOT NULL,
  `jadwal` varchar(50) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table aoPHFu92mhEoxY2X.tbl_schedule: ~14 rows (approximately)
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

-- Dumping structure for table aoPHFu92mhEoxY2X.tbl_studio
CREATE TABLE IF NOT EXISTS `tbl_studio` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table aoPHFu92mhEoxY2X.tbl_studio: ~4 rows (approximately)
INSERT INTO `tbl_studio` (`id`, `name`, `address`) VALUES
	(1, 'AMBON CITY CENTER XXI', 'Ambon City Center Lnt. Dasar\nJalan Wolter Monginsidi\nPasso - Ambon'),
	(2, 'BOEMI KEDATON XXI', 'jl. galaxy 1'),
	(3, 'PALMA XXI', 'Palangkaraya Mall Lantai 3 Jl. Tjilik Riwut KM 1 Kalimantan Tengah.'),
	(4, 'Cinépolis Citimall Sampit', 'l. Jendral Sudirman KM 1.5 RT. 047 RW.008 Kel, Mentawa Baru Hulu, Kec.Mentawa B, Kabupaten Kotawaringin Timur, Kalimantan Tengah 74322');

-- Dumping structure for table aoPHFu92mhEoxY2X.tbl_tickets
CREATE TABLE IF NOT EXISTS `tbl_tickets` (
  `id` int NOT NULL,
  `seat_no` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `id_schedule` int NOT NULL,
  `price` int NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table aoPHFu92mhEoxY2X.tbl_tickets: ~1 rows (approximately)
INSERT INTO `tbl_tickets` (`id`, `seat_no`, `id_schedule`, `price`, `date`) VALUES
	(9, 'A1', 1, 10000, '2024-07-01');

-- Dumping structure for table aoPHFu92mhEoxY2X.tbl_users
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

-- Dumping structure for table aoPHFu92mhEoxY2X.tbl_users ~4 rows (approximately)
INSERT INTO `tbl_users` (`user_id`, `name`, `email`, `password`, `phone`, `b_date`, `province`, `city`, `gender`) VALUES
(13, 'sadsad', 'test5@gmail.com', '$2a$04$KjkpQQfZhHYFqavrPINvL.pW0eivpZMrLfQZGtroEB3morSrdTKL.', '0812345678', '2010-01-01', 'DKI JAKARTA', 'KOTA JAKARTA PUSAT', 'Male'),
(14, 'Daniel Setiawan', 'daniel@gmail.com', '$2a$04$7t5ro06qFZYL0JFGa0QKseTowDAh.DvAl0gLjaaa3pcXpZRffw43y', '08582222', '0000-00-00', 'DKI JAKARTA', 'KOTA JAKARTA PUSAT', 'Male'),
(15, 'daniel', 'a@gmail.com', '$2a$04$lt8Miun/9kBhKIe2RONpvuftK.JpXJwkNZbDbsXENT6oMGu9g792m', '123', '0000-00-00', 'DKI JAKARTA', 'KOTA JAKARTA PUSAT', 'Male'),
(16, 'asd', 'b@gmail.com', '$2a$04$C5hcSL7sw3oJY9lpn/Bg7uqBdPvJXpp0e0aUK2wjpLvUfVu08KB7m', '123456', '0000-00-00', 'DKI JAKARTA', 'KOTA JAKARTA PUSAT', 'Male');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
