-- Drop database
DROP DATABASE IF EXISTS glean_agro_db; 

-- -- Create database + user if doesn't exist
CREATE DATABASE IF NOT EXISTS glean_agro_db;
-- DROP USER 'annurin'@'localhost';
CREATE USER IF NOT EXISTS 'glean_agro_user'@'localhost' IDENTIFIED BY 'glean_agro_user_@123'; 
GRANT ALL ON glean_agro_db.* TO 'glean_agro_user'@'localhost';
GRANT SELECT ON performance_schema.* TO 'glean_agro_user'@'localhost';
FLUSH PRIVILEGES;

-- Use the created database
USE glean_agro_db;


--
-- Table structure for table `staff_tbl`
--

DROP TABLE IF EXISTS `tbl_user`;

-- Create a user table columns
CREATE TABLE `tbl_user` (
    -- Primary key column
    `user_id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `email` VARCHAR(150) NOT NULL COMMENT 'User email address',
    `fname` VARCHAR(50) NOT NULL COMMENT 'First name',
    `oname` VARCHAR(50) COMMENT 'Other name',
    `pwd` VARCHAR(255) COMMENT 'User password',
    `pwd_request` TINYINT NOT NULL DEFAULT 0 COMMENT '0 (default) 1 (forgot pwd) 2 (password changed)',
    `login_alert` TINYINT NOT NULL DEFAULT 1 COMMENT '0 (disabled) 1 (enabled)',
    `_2fa` TINYINT NOT NULL DEFAULT 1 COMMENT '2 factor authenticator - 0 (disabled) 1 (enabled)',
    `token` VARCHAR(255) NULL,
    `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Date of registration',
    `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `act_status` TINYINT NOT NULL DEFAULT 1 COMMENT 'Account status (1 active, 0 inactive)'
) ENGINE=InnoDB CHARSET=utf8 COLLATE=utf8_general_ci;


-- Insert record into user table 
INSERT INTO tbl_user(email, fname, oname, pwd) 
VALUES('wasiubello60@gmail.com', 'Bello', 'Ibrahim', '$2y$10$lMCrSJdFc/3FVnNMaTIea.6DfxFuqPKXKKRZvHQaorXIQ7TZScJIm'),
('ishakuattat@gmail.com', 'Elijah', 'Ishaku', '$2y$10$lMCrSJdFc/3FVnNMaTIea.6DfxFuqPKXKKRZvHQaorXIQ7TZScJIm');

--
-- Table structure for table `tbl_contact`
--

CREATE TABLE `tbl_contact` (
  `id` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `names` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `business` varchar(100) NOT NULL,
  `msg` varchar(255) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Date of registration'
) ENGINE=InnoDB CHARSET=utf8 COLLATE=utf8_general_ci;



INSERT INTO `tbl_contact` (`id`, `names`, `email`, `business`, `msg`) VALUES
(1, 'Christine Hollenbeck', 'christine.hollenbeck@yahoo.com', '', 'Contact form blasts work! I can put your ad message in front of millions for less than $100 the same way I just put this message in front of you! Reach out to me via Skype or Email for details.\r\n\r\nP. Stewart\r\nSkype: live:.cid.e169e59bb6e6d159\r\nEmail: ps92'),
(2, 'Jeanett Focken', 'focken.jeanett@gmail.com', 'Jwleys evpzpj', 'Want to extract emails and phone numbers from your video viewers? Our new patented method does just that.\r\n\r\nShoot me an email or skype message below for more details\r\n\r\nSamuel\r\nemail: videogamification@gmail.com\r\nskype: live:.cid.d347be37995c0a8d'),
(3, 'Shari Haigler', 'shari.haigler94@googlemail.com', 'O J E r', 'This message arrived to you and I can make your ad message reach millions of websites the same way. It\'s a low-priced and effective way to market your product or service.For more information, please email me or skype me below.\r\n\r\nP. Stewart\r\nEmail: nsh85m'),
(4, 'Reginald Ferrari', 'ferrari.reginald65@outlook.com', 'Uhib wnyaz', 'Earn up to $60,000 USD as a 4U2 Inc. Independent Contractor Agent! We\'re seeking individuals worldwide with computer access, fluent English communication skills, and a desire to save time and money for suppliers, buyers, and salespersons in our E-Commerce'),
(5, 'Robertjuito', 'yasen.krasen.13+85109@mail.ru', '352419', 'Ofokfojfief jwlkfeejereghfj iewojfekfjergij wiojewjfewitghuhwrgtjgh ewjhfwqjhdfuewgtuiwe huegfrwgyewgtywegt gleanagrong.com'),
(6, 'IirinaCoaft', 'caljaimi@gmail.com', '179779', 'Hi! Have s3x in your city today.  -  http://tinyurl.com/mrxncvuf?Coaft'),
(7, 'Jaredvet', 'jaredThand@gmail.com', '736622', 'In 60 Seconds Flat \r\n100% Done-For-You CRYPTOCURRENCY Affiliate Sites \r\nWith FREE Buyer Traffic From 100 Million Visitors! \r\nZERO Tech Skills, Upfront Costs Or Experience Required... \r\n \r\nhttps://www.youtube.com/watch?v=b2N6-oHcWco'),
(8, 'Raymondillut', 'no.reply.HorstEvans@gmail.com', '927818', 'Whatâ€™s up? gleanagrong.com \r\n \r\nDid you know that it is possible to send commercial offer totally lawfully and safely? We offer a new legal method of sending messages through feedback forms. \r\nContact Form messages are usually not sent to spam because t'),
(9, 'PillsUntom', 'iunskiygipertonik@gmail.com', '464887', 'TruePills, No prescription needed, Buy pills without restrictions. Money Back Guaranteed 30-day refunds. \r\n \r\nTrial ED Pack consists of the following ED drugs: \r\nViagra Active Ingredient: Sildenafil 100mg 5 pills \r\nCialis 20mg 5 pills \r\nLevitra 20mg 5 pil'),
(10, 'andrewTSO', 'sugarwork78@gmail.com', '275256', 'Hi subscriber,\r\n\r\nI have got some amazing news for you! Do you know of notcoin? It\'s a new money that is about to be available soon. It works on the basis of TON - it\'s a powerful technology that makes notcoin secure.\r\n\r\nNotcoin is not just currency. It\'s'),
(11, 'TobiasVox', 'no.reply.EthanLeroy@gmail.com', '776555', 'Howdy! gleanagrong.com \r\n \r\nDo you know that it is legally possible to send messages? We propose a new method of sending proposals via contact forms. \r\nFeedback Forms make sure that messages won\'t be seen as junk, as they are considered essential. \r\nThere'),
(12, 'Mike Sykes', 'peterDugs@gmail.com', '285191', 'Howdy \r\n \r\nI have just analyzed  gleanagrong.com for its SEO metrics and saw that your website could use a push. \r\n \r\nWe will improve your ranks organically and safely, using only state of the art AI and whitehat methods, while providing monthly reports a'),
(13, 'Nicholas K', 'pat@aneesho.com', 'Nicholas K', 'Do you need help with graphic design - brochures, banners, flyers, advertisements, social media posts, logos etc? \r\n\r\nWe charge a low fixed monthly fee. Let me know if you\'re interested and would like to see our portfolio.'),
(14, 'Mike Alsopp', 'mikeoa@gmail.com', '987667', 'Greetings \r\n \r\nThis is Mike Alsopp\r\n \r\nLet me show you our latest research results from our constant SEO feedbacks that we have from our plans: \r\n \r\nhttps://www.strictlydigital.net/product/semrush-backlinks/ \r\n \r\nThe new Semrush Backlinks, which will make'),
(15, 'Mike Abramson', 'mikeLeargelcoglero@gmail.com', '434933', 'This service is perfect for boosting your local business\' visibility on the map in a specific location. \r\n \r\nWe provide Google Maps listing management, optimization, and promotion services that cover everything needed to rank in the Google 3-Pack. \r\n \r\nMo'),
(16, 'Mike Morgan', 'mikePriptroR@gmail.com', '729478', 'Hi there, \r\n \r\nMy name is Mike from Monkey Digital, \r\n \r\nAllow me to present to you a lifetime revenue opportunity of 35% \r\nThat\'s right, you can earn 35% of every order made by your affiliate for life. \r\n \r\nSimply register with us, generate your affiliat'),
(17, 'iluh', 'sugarwork78@gmail.com', '972787', 'Keep your website running smoothly with advanced monitoring that notifies you instantly of any disruptions https://skillset.surge.sh/posts/uptime-kuma/'),
(18, 'Mike Mackenzie', 'mikePriptroR@gmail.com', '679739', 'Hi there, \r\n \r\nI have reviewed your domain in MOZ and have observed that you may benefit from an increase in authority. \r\n \r\nOur solution guarantees you a high-quality domain authority score within a period of three months. This will increase your organic'),
(19, 'Mike Freeman', 'mikeCOOBSHILIROR@gmail.com', '958999', 'Hi there \r\n \r\nJust checked your gleanagrong.com baclink profile, I noticed a moderate percentage of toxic links pointing to your website \r\n \r\nWe will investigate each link for its toxicity and perform a professional clean up for you free of charge. \r\n \r\nS'),
(20, 'Waheed Algore', 'ujn2esbgakah@opayq.com', '634684', 'Hello, \r\n \r\nWe provide funding through our venture capital company to both start-up and existing companies either looking for funding for expansion or to accelerate growth in their company. \r\nWe have a structured joint venture investment plan in which we '),
(21, 'RonaldWexia', 'ronaldthofs@gmail.com', '895595', 'FlipBooks are a great addition \r\nto any passive income strategy. Because once you create a FlipBook, market it, share it & Earn it, it can technically sell itself. \r\n \r\nLearn More https://www.youtube.com/watch?v=JfRrd79oCfk?15238'),
(22, 'Mike Keat', 'peterDugs@gmail.com', '227538', 'Hi there \r\n \r\nAre you tired of spending money on advertising that doesnâ€™t work? \r\nWe have the right strategy for you, to meet the right audience within your City boundaries. \r\n \r\nB2B Local City Marketing that works: \r\nhttps://www.onlinelocalmarketing.or'),
(23, 'Mike Garrison', 'peterDugs@gmail.com', '848243', 'Good Day \r\n \r\nI have just checked  gleanagrong.com for its SEO metrics and saw that your website could use a boost. \r\n \r\nWe will increase your ranks organically and safely, using only state of the art AI and whitehat methods, while providing monthly repor'),
(24, 'Roberthom', 'yasen.krasen.13+81777@mail.ru', '459261', 'Odowidjwoidwo wojdwkslqmwjfbjjdwkd jkwlsqswknfbjwjdmkqendj kedwjdbwhbdqjswkdwjfj eqwkdwknf gleanagrong.com'),
(25, 'Mike Chesterton', 'mikeoa@gmail.com', '834674', 'Hi \r\n \r\nThis is Mike Chesterton\r\n \r\nLet me introduce to you our latest research results from our constant SEO feedbacks that we have from our plans: \r\n \r\nhttps://www.strictlydigital.net/product/semrush-backlinks/ \r\n \r\nThe new Semrush Backlinks, which will'),
(26, 'Philip Norman', 'philipnorman777@yahoo.com', '116843', 'Greetings \r\nI hope this mail finds you well. I am Mr. Philip Norman a private Funds Manager for high-net-worth individuals. \r\n \r\nI hold a mandate from a Russian Client who wants his funds reinvested using 3rd party due to the current sanctions against Rus'),
(27, 'PillsUntom', 'iunskiygipertonik@gmail.com', '393616', 'Erectile dysfunction treatments available online from TruePills. \r\nDiscreet, next day delivery and lowest price guarantee. \r\n \r\nViagra is a well-known, branded and common erectile dysfunction (ED) treatment for men. \r\nIt\'s available through our Online Tru'),
(28, 'Mike Livingston', 'mikeLeargelcoglero@gmail.com', '777969', 'This service is perfect for boosting your local business\' visibility on the map in a specific location. \r\n \r\nWe provide Google Maps listing management, optimization, and promotion services that cover everything needed to rank in the Google 3-Pack. \r\n \r\nMo'),
(29, 'Fan Studio', 'fan_gamification@proton.me', '669387', 'Hi there, \r\n \r\nMatthew from Fan Studio here. We level up brands with bespoke game dev and gamification strategies, proven to boost engagement. Think interactive brand stories and more. Let\'s turn your vision into an engaging reality. \r\n \r\nDo take a moment'),
(30, 'Mike Holmes', 'mikePriptroR@gmail.com', '141275', 'Hi there, \r\n \r\nI have reviewed your domain in MOZ and have observed that you may benefit from an increase in authority. \r\n \r\nOur solution guarantees you a high-quality domain authority score within a period of three months. This will increase your organic'),
(31, 'Syed Atif', 'pr5yukr3hkpq@opayq.com', '849124', 'Hello, \r\n \r\nWe provide funding through our venture capital company to both start-up and existing companies either looking for funding for expansion or to accelerate growth in their company. \r\nWe have a structured joint venture investment plan in which we '),
(32, 'Mike Hoggarth', 'mikePriptroR@gmail.com', '389269', 'Hi there, \r\n \r\nMy name is Mike from Monkey Digital, \r\n \r\nAllow me to present to you a lifetime revenue opportunity of 35% \r\nThat\'s right, you can earn 35% of every order made by your affiliate for life. \r\n \r\nSimply register with us, generate your affiliat'),
(33, 'Mike Stanley', 'mikeCOOBSHILIROR@gmail.com', '573611', 'Hi there \r\n \r\nJust checked your gleanagrong.com baclink profile, I noticed a moderate percentage of toxic links pointing to your website \r\n \r\nWe will investigate each link for its toxicity and perform a professional clean up for you free of charge. \r\n \r\nS'),
(34, 'Masonfal', 'kaenquirynicholls@gmail.com', '378761', 'Aloha, makemake wau eÊ»ike i kÄu kumukÅ«Ê»ai.'),
(35, 'TobiasVox', 'no.reply.JaydenKarlsson@gmail.com', '718841', 'Hey there! gleanagrong.com \r\n \r\nDid you know that it is possible to send proposal completely in legal manner? We presentation a legal way of sending letters through feedback forms. \r\nAlso, messages sent through communication Forms do not get into spam bec'),
(36, 'Mike Leapman', 'peterDugs@gmail.com', '751397', 'Good Day \r\n \r\nI have just took an in depth look on your  gleanagrong.com for its SEO Trend and saw that your website could use an upgrade. \r\n \r\nWe will enhance your ranks organically and safely, using only state of the art AI and whitehat methods, while p'),
(37, 'GregoryPob', 'morrismi1@outlook.com', '835172', 'A remote job opportunity for a Law Firm, the role of a Payment/Deposit Handler. This position involves managing payments and deposits, ensuring accurate processing, and maintaining financial record. \r\n \r\nJob location:  USA \r\nWeekly wages: $2,850 per week.'),
(38, 'Mike Cook', 'mikeoa@gmail.com', '992561', 'Hi \r\n \r\nThis is Mike Cook\r\n \r\nLet me introduce to you our latest research results from our constant SEO feedbacks that we have from our plans: \r\n \r\nhttps://www.strictlydigital.net/product/semrush-backlinks/ \r\n \r\nThe new Semrush Backlinks, which will make '),
(39, 'Mike Adderiy', 'mikeLeargelcoglero@gmail.com', '928921', 'This service is perfect for boosting your local business\' visibility on the map in a specific location. \r\n \r\nWe provide Google Maps listing management, optimization, and promotion services that cover everything needed to rank in the Google 3-Pack. \r\n \r\nMo'),
(40, 'Test example', 'example@g.com', 'Agricultural Technology', 'This is a test example to confirm the accuracy of the system.'),
(41, 'Umaru Ali shinkafi', 'Jobbamidele5@gmail.com', 'Technology', 'Helloworld!'),
(42, 'Umaru Ali shinkafi', 'Jobbamidele5@gmail.com', 'Technology Industry', 'dsfdsfsfewfs'),
(43, 'Umaru Ali shinkafi', 'Jobbamidele5@gmail.com', 'Technology', 'sadfsdafsds'),
(44, 'Umaru Ali shinkafi', 'sms@o-tech.c', 'Technology', 'xczxczxz'),
(45, 'Umaru Ali shinkafi', 'sms@o-tech.c', 'Technology', 'xczxczxz'),
(46, 'Umaru Ali', 'u.ali@test.com', 'Agricultural Technology', 'This is a testing purpose'),
(47, 'HRM Bah Mbi', 'bahmbi724@gmail.com', '863285', 'Attn. Director, \r\n \r\nWe are interested in your products. Please contact us with product details/catalog and price list if  your company can handle a bulk supply of your products to Cameroon. \r\nPlease send your reply to bah_mbi@aghemfondom.com \r\n \r\nHRM Bah'),
(48, 'Mike Gilbert', 'mikePriptroR@gmail.com', '954591', 'Hi there, \r\n \r\nI have reviewed your domain in MOZ and have observed that you may benefit from an increase in authority. \r\n \r\nOur solution guarantees you a high-quality domain authority score within a period of three months. This will increase your organic'),
(49, 'Mike Campbell', 'mikePriptroR@gmail.com', '686685', 'Hi there, \r\n \r\nMy name is Mike from Monkey Digital, \r\n \r\nAllow me to present to you a lifetime revenue opportunity of 35% \r\nThat\'s right, you can earn 35% of every order made by your affiliate for life. \r\n \r\nSimply register with us, generate your affiliat'),
(50, 'Mike Gilbert', 'mikeCOOBSHILIROR@gmail.com', '624464', 'Hi there \r\n \r\nJust checked your gleanagrong.com baclink profile, I noticed a moderate percentage of toxic links pointing to your website \r\n \r\nWe will investigate each link for its toxicity and perform a professional clean up for you free of charge. \r\n \r\nS'),
(51, 'Mike Livingston', 'peterDugs@gmail.com', '668148', 'Good Day \r\n \r\nI have just verified your SEO on  gleanagrong.com for its SEO Trend and saw that your website could use a boost. \r\n \r\nWe will increase your ranks organically and safely, using only state of the art AI and whitehat methods, while providing mo'),
(52, 'Davidfal', 'cautioningsehomogen@gmail.com', '769783', 'Szia, meg akartam tudni az Ã¡rÃ¡t.'),
(53, 'Hannah Ackerman', 'interconnectza@gmail.com', '735163', 'Hello \r\n \r\nI hope this message finds you well. \r\n \r\nOur consultancy offers high-net-worth international investors access to exclusive investment opportunities. We provide loans at competitive interest rates from 2.5% to 5%, depending on your project\'s spe'),
(54, 'Masonfal', 'yjdisantoyjdissemin@gmail.com', '768778', 'Hi, I wanted to know your price.'),
(55, 'Luis Alves', 'intl.law7@aol.com', '195413', 'Greeting. \r\nI hope this message will interest you, giving the unconventional opportunity it conveys. \r\nIâ€™m a Private Investment Consultant sourcing and connecting business managers with Capitalists. \r\nIâ€™m mandated by an Offshore Investment Company act'),
(56, 'Mike Keat', 'mikePlayek@gmail.com', '974685', 'Greetings \r\n \r\nThis is Mike Keat\r\n \r\nLet me show you our latest research results from our constant SEO feedbacks that we have from our plans: \r\n \r\nThe new Semrush Backlinks, which will make your gleanagrong.com SEO trend have an immediate push. \r\nThe meth'),
(57, 'Mike Bradshaw', 'mikeDugs@gmail.com', '471699', 'This service is perfect for boosting your local business\' visibility on the map in a specific location. \r\n \r\nWe provide Google Maps listing management, optimization, and promotion services that cover everything needed to rank in the Google 3-Pack. \r\n \r\nMo');

--
-- Table structure for table `tbl_investment`
--

CREATE TABLE `tbl_investment` (
  `id` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `investment_list` varchar(20) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Date of registration'
) ENGINE=InnoDB CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO `tbl_investment` (`id`, `investment_list`) VALUES
(1, 'Storage'),
(2, 'Grant'),
(3, 'Debt'),
(4, 'Equity');
--
-- Table structure for table `tbl_investment_data`
--

CREATE TABLE `tbl_investment_data` (
  `id` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `email` varchar(150) NOT NULL,
  `fullName` varchar(100) NOT NULL,
  `mobileNo` varchar(100) NOT NULL,
  `nameOfOrganization` varchar(150) NOT NULL,
  `typeOfInvestment` varchar(20) NOT NULL,
  `typeOfInvestor` varchar(20) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Date of registration'
) ENGINE=InnoDB CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_investor`
--

CREATE TABLE `tbl_investor` (
  `id` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `investor_list` varchar(20) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Date of registration'
) ENGINE=InnoDB CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO `tbl_investor` (`id`, `investor_list`) VALUES
(1, 'Individual'),
(2, 'Government'),
(3, 'Institution'),
(4, 'Private'),
(5, 'Foundation'),
(6, 'Other');
--
-- Table structure for table `tbl_newsletter`
--

CREATE TABLE `tbl_newsletter` (
  `id` int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  `names` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `subscribed` tinyint(4) NOT NULL DEFAULT '1' COMMENT '0 unsubscribe; 1 subscribe ',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Date of registration'
) ENGINE=InnoDB CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO `tbl_newsletter` (`id`, `names`, `email`, `subscribed`) VALUES
(1, 'Ibrahim Tunde', 'contact.ibrahimtunde@gmail.com', 1),
(2, 'Muhammad Auwal', 'agramusa@gmail.com', 1),
(3, 'ErnestNiz', 'michaeladams1270868@gmail.com', 1),
(4, 'Badmus Ai', 'bai@test.gmail.com', 1);
