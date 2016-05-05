-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 07, 2016 at 01:07 
-- Server version: 10.1.9-MariaDB
-- PHP Version: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `onlineShop`
--

-- --------------------------------------------------------

--
-- Table structure for table `korisnik`
--

CREATE TABLE `korisnik` (
  `id` int(4) NOT NULL,
  `ime` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `prezime` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `pass` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `admin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `korisnik`
--

INSERT INTO `korisnik` (`id`, `ime`, `prezime`, `email`, `pass`, `admin`) VALUES
(1, 'Marko', 'Markovic', 'markic@gmail.com', 'markic', 0),
(2, 'Petar', 'Petrovic', 'pero@yahoo.com', 'perica', 1),
(5, 'Marija', 'Marijanovic', 'maki@hotmail.com', 'maki', 0),
(6, 'Jovana', 'Jovanovic', 'jodzi@gmail.com', 'jodzi', 0);

-- --------------------------------------------------------

--
-- Table structure for table `proizvod`
--

CREATE TABLE `proizvod` (
  `id` int(11) NOT NULL,
  `vrsta` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `proizvodjac` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `model` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `cena` decimal(10,3) NOT NULL,
  `garancija` int(3) NOT NULL COMMENT 'Meseci',
  `slika` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `akcija` tinyint(1) NOT NULL,
  `tip` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `kapacitet` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `socket` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `dijagonala` decimal(5,2) DEFAULT NULL,
  `takt` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `proizvod`
--

INSERT INTO `proizvod` (`id`, `vrsta`, `proizvodjac`, `model`, `cena`, `garancija`, `slika`, `akcija`, `tip`, `kapacitet`, `socket`, `dijagonala`, `takt`) VALUES
(1, 'FMem', 'Kingston', 'DT 101 G2', '18999.000', 60, 'img/fmem1.jpg', 0, NULL, '128 GB', NULL, NULL, NULL),
(2, 'FMem', 'Verbatim', 'Pin Stripe', '2200.000', 24, 'img/fmem2.jpg', 1, NULL, '32 GB', NULL, NULL, NULL),
(3, 'GPU', 'Nvidia', 'GeForce GV-N650WF2-1HI', '13000.000', 36, 'img/gpu1.jpg', 0, NULL, '1 GB', NULL, NULL, NULL),
(4, 'GPU', 'Nvidia', 'GeForce GV-N640D3-1GL', '12589.000', 36, 'img/gpu2.jpg', 0, NULL, '1 GB', NULL, NULL, NULL),
(5, 'Memory', 'Seagate ', 'Barracuda ST500DM002', '6949.000', 24, 'img/mem1.jpg', 0, 'Interni HDD', '500 GB', NULL, NULL, NULL),
(6, 'Memory', 'WD', 'Black', '12500.000', 60, 'img/mem2.jpg', 1, 'Interni HDD', '1 TB', NULL, NULL, NULL),
(7, 'MBoard', 'MSI', '760GM-P23(FX)', '4699.000', 36, 'img/mboard1.jpg', 1, NULL, '16 GB', 'AM3+', NULL, NULL),
(8, 'MBoard', 'Gigabyte', 'GA-970A-DS3P', '10099.000', 36, 'img/mboard2.jpg', 0, NULL, '16 GB', 'AM3+/AM3', NULL, NULL),
(9, 'Mouse', 'Hama', 'M3070', '2000.000', 12, 'img/mouse1.jpg', 1, 'Bezicni', NULL, NULL, NULL, NULL),
(10, 'Mouse', 'A4 TECH', 'X6-22MD', '749.000', 36, 'img/mouse2.jpg', 1, 'Laserski', NULL, NULL, NULL, NULL),
(11, 'Monitor', 'HP', 'LE1711', '15000.000', 36, 'img/monitor1.jpg', 0, 'TFC LCD', NULL, NULL, '19.00', NULL),
(12, 'Monitor', 'ASUS', 'VS197LD', '12499.000', 24, 'img/monitor2.jpg', 1, 'LED Touchscreen', NULL, NULL, '17.00', NULL),
(13, 'CPU', 'AMD', 'APU A4-6300', '12499.000', 36, 'img/cpu1.jpg', 0, 'Single-Core', NULL, 'FM2', NULL, '3.8 GHz'),
(14, 'CPU', 'Intel', 'i5-4670K', '20654.000', 36, 'img/cpu2.jpg', 0, 'Quad-Core', NULL, 'LGA 1150', NULL, '3.4 GHz'),
(15, 'RAM', 'Transcend', 'JM1600KLN-2G', '3548.000', 48, 'mg/ram1.jpg', 1, 'DDR3', '2 GB', NULL, NULL, '1600 MHz'),
(16, 'RAM', 'Transcend', 'JM800QLU-1G', '2000.000', 36, 'img/ram2.jpg', 0, 'DDR2', '1GB', NULL, NULL, '800 MHz'),
(17, 'Keyboard', 'Gigatech', 'GT410-E', '500.000', 12, 'img/keyb1.jpg', 1, 'Zicna', NULL, NULL, NULL, NULL),
(18, 'Keyboard', 'Hama', 'Uzzano 53815', '2599.000', 12, 'img/keyb2.jpg', 0, 'Bezicna', NULL, NULL, NULL, NULL),
(19, 'FMem', 'Kingston', 'DTIG3 ', '1199.000', 36, 'img/fmem3.jpg', 0, NULL, '16 GB', NULL, NULL, NULL),
(20, 'FMem', 'Kingston', 'Data Traveler', '18999.000', 60, 'img/fmem4.jpg', 1, NULL, '128 GB', NULL, NULL, NULL),
(21, 'FMem', 'Kingston', 'DTU30G3', '3000.000', 36, 'img/fmem5.jpg', 0, NULL, '32 GB', NULL, NULL, NULL),
(22, 'FMem', 'Transcend', 'TS32GJF380S', '3499.000', 36, 'img/fmem6.jpg', 0, NULL, '32 GB', NULL, NULL, NULL),
(23, 'FMem', 'U-Star', 'Winnie the Pooh', '499.000', 24, 'img/fmem7.jpg', 1, NULL, '4 GB', NULL, NULL, NULL),
(24, 'FMem', 'Toshiba', 'THNU08SIPRED', '1300.000', 36, 'img/fmem8.jpg', 0, NULL, '8 GB', NULL, NULL, NULL),
(25, 'FMem', 'Toshiba', 'THNU08HAY', '2299.000', 36, 'img/fmem9.jpg', 0, NULL, '32 GB', NULL, NULL, NULL),
(26, 'FMem', 'San Disk', 'Cruzer Force', '18999.000', 72, 'img/fmem10.jpg', 0, NULL, '128 GB', NULL, NULL, NULL),
(27, 'GPU', 'GeForce', 'GeForce', '9899.000', 36, 'img/gpu3.jpg', 0, NULL, '2 GB', NULL, NULL, NULL),
(28, 'GPU', 'Gigabyte', 'GeForce GTX610', '79899.000', 36, 'img/gpu4.jpg', 0, NULL, '3 GB DDR', NULL, NULL, NULL),
(29, 'GPU', 'Gigabyte', 'GV-N78TOC-3GD', '56889.000', 36, 'img/gpu5.jpg', 1, NULL, '3 GB DDR', NULL, NULL, NULL),
(30, 'GPU', 'Gigabyte', 'GV-N780OC-3GD', '21999.000', 36, 'img/gpu6.jpg', 0, NULL, '2 GB', NULL, NULL, NULL),
(31, 'GPU', 'Asus', 'GTX760-DC2OC-2GD5', '32689.000', 36, 'img/gpu7.jpg', 0, NULL, '2 GB DDR', NULL, NULL, NULL),
(32, 'GPU', 'Sapphire', '11215-01-20G', '18889.000', 36, 'img/gpu8.jpg', 0, NULL, '3 GB', NULL, NULL, NULL),
(33, 'GPU', 'Sapphire', '11215-01-20G', '14499.000', 36, 'img/gpu9.jpg', 1, NULL, '3 GB', NULL, NULL, NULL),
(34, 'GPU', 'MSI', 'AXR7-250-2GBK3-HE/OC', '18999.000', 36, 'img/gpu10.jpg', 1, NULL, '3 GB', NULL, NULL, NULL),
(35, 'Memory', 'Seagate', 'Barracuda ST1000DM003', '21999.000', 36, 'img/mem3.jpg', 0, 'Eksterni HDD', '500 GB', NULL, NULL, NULL),
(36, 'Memory', 'Kingston', 'HYPERY', '48999.000', 36, 'img/mem4.jpg', 0, 'Interni HDD', '1 TB', NULL, NULL, NULL),
(37, 'Memory', 'Kingston', 'SAW125', '36899.000', 36, 'img/mem5.jpg', 1, 'Interni HDD', '500 GB', NULL, NULL, NULL),
(38, 'Memory', 'Kingston', 'NOW100', '28777.000', 36, 'img/mem6.jpg', 1, 'Interni HDD', '500 GB', NULL, NULL, NULL),
(39, 'Memory', 'Kingston', 'SSD NOW310', '55555.000', 36, 'img/mem7.jpg', 1, 'Eksterni HDD', '1TB', NULL, NULL, NULL),
(40, 'Memory', 'Samsung', 'M2 Portable', '36899.000', 36, 'img/mem8.jpg', 0, 'Eksterni HD', '500 GB', NULL, NULL, NULL),
(41, 'Memory', 'Samsung', 'M3 Portable', '27899.000', 36, 'img/mem9.jpg', 0, 'Eksterni HDD', '500 GB', NULL, NULL, NULL),
(42, 'Memory', 'Thunderbolt', 'DELOCK 42510', '78699.000', 36, 'img/mem10.jpg', 0, 'Eksterni HDD', '500 GB', NULL, NULL, NULL),
(43, 'MBoard', 'Gigabyte', 'GA-970A-UD3P', '8999.000', 36, 'img/mboard3.jpg', 0, NULL, '32GB', 'AM3+', NULL, NULL),
(44, 'MBoard', 'Asus', 'M5A99FX PRO R2.0', '8999.000', 36, 'img/mboard4.jpg', 0, NULL, '64 GB', 'AM3+', NULL, NULL),
(45, 'MBoard', 'MSI', 'A55M-E35', '6899.000', 36, 'img/mboard5.png', 0, NULL, '32 GB', 'FM2+', NULL, NULL),
(46, 'MBoard', 'Asus', 'P9X79', '15899.000', 36, 'img/mboard6.jpg', 0, NULL, '64 GB', '2011', NULL, NULL),
(47, 'MBoard', 'Asus', 'Z87-DELUXE', '30899.000', 36, 'img/mboard7.jpg', 1, NULL, '64 GB', 'LGA1150', NULL, NULL),
(48, 'MBoard', 'Asus', 'SABERTOOTH X79', '25899.000', 36, 'img/mboard8.jpg', 0, NULL, '16 GB', 'LGA2011', NULL, NULL),
(49, 'MBoard', 'Gigabyte', 'GA-970A-DS3P', '29899.000', 36, 'img/mboard9.jpg', 0, NULL, '32 GB', 'AM3+', NULL, NULL),
(50, 'MBoard', 'Gigabyte', 'GA-Z87X-UD5 TH', '9879.000', 36, 'img/mboard10.jpg', 1, NULL, '32 GB', 'FM2+', NULL, NULL),
(51, 'Mouse', 'Gembird', 'MUSWM', '599.000', 36, 'img/mouse3.jpg', 1, 'Laserski', NULL, NULL, NULL, NULL),
(52, 'Mouse', 'Logitech', 'LB454AA', '899.000', 24, 'img/mouse4.jpeg', 0, 'Laserski', NULL, NULL, NULL, NULL),
(53, 'Mouse', 'Hama', 'uRage Ice Dragon', '699.000', 36, 'img/mouse5.jpg', 0, 'Zicni', NULL, NULL, NULL, NULL),
(54, 'Mouse', 'HP', 'LB454AA', '1499.000', 36, 'img/mouse6.jpg', 0, 'Laserski', NULL, NULL, NULL, NULL),
(55, 'Mouse', 'A4 Tech', 'X6-22NF', '499.000', 36, 'img/mouse7.jpg', 0, 'Zicni', NULL, NULL, NULL, NULL),
(56, 'Mouse', 'HP', 'X3000', '499.000', 24, 'img/mouse8.jpg', 0, 'Laserski', NULL, NULL, NULL, NULL),
(57, 'Mouse', 'Logitech', 'M525', '699.000', 36, 'img/mouse9.png', 0, 'Laserski', NULL, NULL, NULL, NULL),
(58, 'Mouse', 'Logitech', 'M3070', '700.000', 36, 'img/mouse10.jpeg', 1, 'Bezicni', NULL, NULL, NULL, NULL),
(59, 'Monitor', 'LG', 'T17110BP-BN', '14899.000', 36, 'img/monitor3.jpg', 0, 'LED LCD', NULL, NULL, '22.00', NULL),
(60, 'Monitor', 'Dell', 'S2240L', '9899.000', 36, 'img/monitor4.jpg', 0, 'Touchscreen', NULL, NULL, '17.00', NULL),
(61, 'Monitor', 'ViewSonic', 'TD2340', '18999.000', 36, 'img/monitor5.jpg', 0, 'Touchscreen', NULL, NULL, '23.00', NULL),
(62, 'Monitor', 'ViewSonic', 'VA1911A', '18777.000', 36, 'img/monitor6.jpeg', 0, 'LED LCD ', NULL, NULL, '18.00', NULL),
(63, 'Monitor', 'LG', '29EA73-P', '59669.000', 24, 'img/monitor7.jpg', 1, 'LED LCD', NULL, NULL, '17.00', NULL),
(64, 'Monitor', 'Samsung', 'S24C750PS', '32569.000', 36, 'img/monitor8.jpg', 0, 'LCD', NULL, NULL, '17.00', NULL),
(65, 'Monitor', 'LG', '34UC97', '22369.000', 36, 'img/monitor9.jpg', 1, 'LCD', NULL, NULL, '21.00', NULL),
(66, 'Monitor', 'ViewSonic', 'VA2465SH', '24999.000', 36, 'img/monitor10.jpg', 0, 'TFT', NULL, NULL, '23.00', NULL),
(67, 'Keyboard', 'Hama', 'RF 2200', '2199.000', 36, 'img/keyb3.jpg', 1, 'Bezicna', NULL, NULL, NULL, NULL),
(68, 'Keyboard', 'Gigatech', 'GT-410E', '1200.000', 36, 'img/keyb4.jpeg', 0, 'Zicna', NULL, NULL, NULL, NULL),
(69, 'Keyboard', 'Rotech', '50208', '1599.000', 24, 'img/keyb5.jpg', 0, 'Zicna', NULL, NULL, NULL, NULL),
(70, 'Keyboard', 'A4Tech', 'KR-750', '700.000', 36, 'img/keyb6.jpg', 0, 'Zicna', NULL, NULL, NULL, NULL),
(71, 'Keyboard', 'A4Tech', 'KL-23MU', '899.000', 36, 'img/keyb7.jpg', 0, 'Zicna', NULL, NULL, NULL, NULL),
(72, 'Keyboard', 'Saitek', 'S.T.R.I.K.E.3', '1599.000', 36, 'img/keyb8.jpg', 1, 'Bezicna', NULL, NULL, NULL, NULL),
(73, 'Keyboard', 'Saitek', 'S.T.R.I.K.E.5', '1700.000', 36, 'img/keyb9.jpg', 0, 'Bezicna', NULL, NULL, NULL, NULL),
(74, 'Keyboard', 'Logitech', 'G105', '1999.000', 36, 'img/keyb10.jpg', 0, 'Zicna', NULL, NULL, NULL, NULL),
(75, 'CPU', 'AMD', 'Athlon X2', '5987.000', 24, 'img/cpu3.jpg', 1, 'Dual-Core', NULL, 'FM2', NULL, '3.2 GHz'),
(76, 'CPU', 'Intel', 'Core i5-3350P', '19999.000', 36, 'img/cpu4.jpg', 0, 'Quad-Core', NULL, 'LGA1155', NULL, '3.1 GHz'),
(77, 'CPU', 'AMD', 'FX-6300', '14399.000', 36, 'img/cpu5.jpg', 1, 'Sexa-Core', NULL, 'AM3+', NULL, '3.5 GHz'),
(78, 'CPU', 'AMD', 'A8-7650K', '15499.000', 36, 'img/cpu6.jpg', 0, 'Quad-Core', NULL, 'FM2+', NULL, '3.3 GHz'),
(79, 'CPU', 'AMD', 'FX-9590 Black Edition', '33499.000', 48, 'img/cpu7.jpg', 0, 'Octa-Core', NULL, 'AM3+', NULL, '4.7 GHz'),
(81, 'CPU', 'Intel', 'Core i7-4930K', '59599.000', 48, 'img/cpu8.jpg', 0, 'Sexa-Core', NULL, 'LGA2011', NULL, '3.4 GHz'),
(82, 'CPU', 'Intel', 'Core i5-6600K', '35499.000', 48, 'img/cpu9.jpg', 1, 'Quad-Core', NULL, 'LGA1151', NULL, '3.5 GHz'),
(83, 'RAM', 'Kingston', 'Savage, HX428C14SBK2/16', '22999.000', 120, 'img/ram3.jpg', 0, 'DDR4', '2x8 GB', NULL, NULL, '2800 MHz'),
(84, 'RAM', 'Kingston', 'HyperX Beast CL11', '15199.000', 120, 'img/ram4.jpg', 1, 'DDR3', '2x8 GB', NULL, NULL, '2133 MHz'),
(85, 'RAM', 'Kingston', 'HyperX Savage CL9', '12390.000', 120, 'img/ram5.jpg', 1, 'DDR3', '2x8 GB', NULL, NULL, '1600 MHz'),
(86, 'RAM', 'Gskill', 'RipJaws', '11799.000', 36, 'img/ram6.jpg', 1, 'DDR4', '2x8 GB', NULL, NULL, '2400 MHz'),
(87, 'RAM', 'Kingston', 'Savage, HX430C15SB/8', '11579.000', 120, 'img/ram7.jpg', 0, 'DDR4', '8 GB', NULL, NULL, '3000 MHz'),
(88, 'RAM', 'GSkill', 'RipjawsV', '10999.000', 36, 'img/ram8.jpg', 0, 'DDR4', '2x8 GB', NULL, NULL, '2400 MHz'),
(89, 'RAM', 'Transcend', 'CL3', '7659.000', 36, 'img/ram9.jpg', 0, 'DDR', '1 GB', NULL, NULL, '400 MHz'),
(90, 'RAM', 'GSkill', 'RipX K2', '6899.000', 36, 'img/ram10.jpg', 1, 'DDR3', '2x4 GB', NULL, NULL, '2400 MHz');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `korisnik`
--
ALTER TABLE `korisnik`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `proizvod`
--
ALTER TABLE `proizvod`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `korisnik`
--
ALTER TABLE `korisnik`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `proizvod`
--
ALTER TABLE `proizvod`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
