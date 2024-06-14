-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 14 Jun 2024 pada 07.26
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
  `img_url` varchar(255) NOT NULL,
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
(6, 'Gran Turismo test', 'Max Verstappen test', 'https://upload.wikimedia.org/wikipedia/id/2/20/GranTurismoMoviePoster.jpeg?20231012040737', 'test', 'saddsa sdsad', 17, 120, 'https://www.youtube.com/watch?v=GVPzGBvPrzw&pp=ygUMZ3JhbiB0dXJpc21v', 40000),
(7, 'Mobile Suit Gundam SEED Freedom', 'Sōichirō Hoshi', 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Seedfreedomvisual.jpg/220px-Seedfreedomvisual.jpg', 'In C.E. 75, a year after the end of the Second Alliance-PLANT War[b], remnants of an anti-coordinator activist group, Blue Cosmos, led several attacks on other nations on Earth. Compass, a world peace monitoring organization under Orb Chief Representative Cagalli Yula Athha and Lacus Clyne, was formed to promote peace on Earth and PLANTS, with the latter serving as its president. The organization\'s mobile suit commander, Kira Yamato, leads his team, Shinn Asuka, Lunamaria Hawke, and Agnes Gibenrath from the battleship Millennium, to interfere and destroy the remnants. At a meeting in the PLANTs, Lacus openly admits her hope to end the conflict swiftly and wishes to free Kira from it, as he openly displayed his recurring nightmares in their home.', 'Mitsuo Fukuda', 17, 124, 'https://www.youtube.com/watch?v=Gsj6ToFTGgc', 40000);

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
(1, 6, 2, '12:00'),
(2, 6, 2, '14:00'),
(3, 6, 1, '14:00');

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
(1, 'test', 'sdsda'),
(2, 'BOEMI KEDATON XXI', 'jl. galaxy 1');

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
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `tbl_payments`
--
ALTER TABLE `tbl_payments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `tbl_schedule`
--
ALTER TABLE `tbl_schedule`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `tbl_studio`
--
ALTER TABLE `tbl_studio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
-- Ketidakleluasaan untuk tabel `tbl_tickets`
--
ALTER TABLE `tbl_tickets`
  ADD CONSTRAINT `tbl_tickets_ibfk_1` FOREIGN KEY (`id_schedule`) REFERENCES `tbl_movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tbl_tickets_ibfk_2` FOREIGN KEY (`id_schedule`) REFERENCES `tbl_schedule` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
