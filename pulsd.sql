-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 04, 2018 at 04:55 PM
-- Server version: 8.0.11
-- PHP Version: 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pulsd`
--

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `venue` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `loc` text NOT NULL,
  `details` text NOT NULL,
  `picture` varchar(255) NOT NULL,
  `start` datetime NOT NULL,
  `end` datetime NOT NULL,
  `id` int(11) NOT NULL,
  `posted` int(11) NOT NULL DEFAULT '0',
  `url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`venue`, `description`, `loc`, `details`, `picture`, `start`, `end`, `id`, `posted`, `url`) VALUES
('Brother Jimmys BBQ', '$39 Ticket To The 2018 Cinco De Derby: 2 Hr Open Bar Party ($69 Value)', 'Brother Jimmys BBQ 181 Lexington Avenue (212) 779-7427 ', 'Don your most dapper Southern attire and south-of-the-border digs, then gallop straight into The Annual Brother Jimmys Cinco de Derby party, taking place on Saturday May 5, 2018.Grab your $39 Ticket (a $69 Value) for admission to this unlimited food and drink bonanza, where youll dig into mouthwatering Mexican dishes like Pork Nachos and Chicken Quesadillas - plus Brother Jimmys signature Southern BBQ eats.Of course, everyones favorite drinking holiday will be incomplete without bottomless Margaritas, Mint Juleps, wine, & beer - so consider all of the above included as well!With a choice of afternoon session (3:00pm until 5:00pm) and evening session (8:00pm until 10:00pm), theres no excuse to sit out this delicious spring kick-off.', '9b42fd00-4f40-11e8-ab7f-d73dd26d4c90', '2018-05-05 00:00:00', '2018-05-06 00:00:00', 9, 1, 'https://pulsd.com/new-york/promotions/cinco-de-derby-party'),
('Wicked Willy\'s', '$39 Ticket To The 4th Annual Cinco De Mayo Open Bar Party (a $54 Value)', 'Wicked Willy\'s 149 Bleecker Street  (212) 254-8592 ', '\'Ole your way into a tropical oasis and toast to Mexico with food, drinks, and fun galore at Wicked Willy\'s this Cinco from 11:00am until 2:00pm on Saturday May 5, 2018.\r\nGrab your $39 Ticket (a $54 value) to enjoy a sizzling 3 Hour Open Bar from 11:00am until 2:00pm, plus a delicious Taco Bar where you can design your own creations from Jerk Chicken, BBQ Pork, Veggie, and Classic Beef.\r\nLatin dancers, a live band, DJ sets, and party favors will keep the party going all day long, while a pro photographer will make sure that the good times live on well after the 5th passes.\r\nTurn up the playa magic and soak up the ice-cold drinks. It\'ll be a Cinco De Mayo to taco about...', '48d5fc80-4fad-11e8-bef8-a79cec617339', '2018-05-05 04:00:00', '2018-05-06 04:00:00', 10, 0, 'https://pulsd.com/new-york/promotions/cinco-de-mayo-wicked-willys'),
('Brother Jimmys BBQ', '$39 Ticket To The 2018 Cinco De Derby: 2 Hr Open Bar Party ($69 Value)', 'Brother Jimmys BBQ 181 Lexington Avenue (212) 779-7427 ', 'Don your most dapper Southern attire and south-of-the-border digs, then gallop straight into The Annual Brother Jimmys Cinco de Derby party, taking place on Saturday May 5, 2018.Grab your $39 Ticket (a $69 Value) for admission to this unlimited food and drink bonanza, where youll dig into mouthwatering Mexican dishes like Pork Nachos and Chicken Quesadillas - plus Brother Jimmys signature Southern BBQ eats.Of course, everyones favorite drinking holiday will be incomplete without bottomless Margaritas, Mint Juleps, wine, & beer - so consider all of the above included as well!With a choice of afternoon session (3:00pm until 5:00pm) and evening session (8:00pm until 10:00pm), theres no excuse to sit out this delicious spring kick-off.', 'd5f219f0-4fad-11e8-bef8-a79cec617339', '2018-05-04 05:14:00', '2018-05-12 15:14:00', 11, 0, 'https://pulsd.com/new-york/promotions/cinco-de-derby-party'),
('Painting Lounge', '$29 For a 2 Hour BYOB Painting Workshop (a $50 Value)', 'Painting Lounge 39 W 14th St #401 (212) 518-1803 ', 'What do Vincent van Gogh and Pablo Picasso have in common? Sure they were both great painters, but they were both big partiers! That\'s why we request that you bring your party spirit with you to this fabulous 2 Hour BYOB Painting Workshop at The Painting Lounge!\r\nGrab this $29 pulse (a $50 Value) and learn to paint with acrylic on canvas as expert instructors help you recreate classic artworks in this casual learning environment that suits first timers and experts alike.\r\nWith art supplies included, and over 50 weekly classes to choose from, all you need to do is literally just show up. After a libation or two, your creativity starts flowing; which means you’ll quickly pick up painting techniques, then leave with your very own creation!\r\nWhether you are looking to brighten up your own home, or to create a very personal gift, Painting Lounge is the perfect answer!', 'c8d80cf0-4fb4-11e8-bef8-a79cec617339', '2018-05-05 17:32:00', '2018-05-27 03:53:00', 12, 0, 'https://pulsd.com/new-york/promotions/painting-lounge-nyc-byob-painting-classes-manhattan-brooklyn'),
('Painting Lounge', '$29 For a 2 Hour BYOB Painting Workshop (a $50 Value)', 'Painting Lounge 39 W 14th St #401 (212) 518-1803 ', 'What do Vincent van Gogh and Pablo Picasso have in common? Sure they were both great painters, but they were both big partiers! That\'s why we request that you bring your party spirit with you to this fabulous 2 Hour BYOB Painting Workshop at The Painting Lounge!\r\nGrab this $29 pulse (a $50 Value) and learn to paint with acrylic on canvas as expert instructors help you recreate classic artworks in this casual learning environment that suits first timers and experts alike.\r\nWith art supplies included, and over 50 weekly classes to choose from, all you need to do is literally just show up. After a libation or two, your creativity starts flowing; which means you’ll quickly pick up painting techniques, then leave with your very own creation!\r\nWhether you are looking to brighten up your own home, or to create a very personal gift, Painting Lounge is the perfect answer!', 'fe2c8c00-4fb4-11e8-bef8-a79cec617339', '2018-05-05 17:32:00', '2018-05-27 03:53:00', 13, 0, 'https://pulsd.com/new-york/promotions/painting-lounge-nyc-byob-painting-classes-manhattan-brooklyn'),
('z', 'z', 'z', 'z', 'c29f3a10-4fb5-11e8-bef8-a79cec617339', '2018-05-04 16:11:00', '2018-05-05 16:11:00', 14, 0, 'z'),
('z', 'z', 'z', 'z', '12faab20-4fb6-11e8-bef8-a79cec617339', '2018-05-23 16:13:00', '2018-05-25 16:11:00', 15, 0, 'z');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
