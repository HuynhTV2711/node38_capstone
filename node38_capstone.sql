/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE TABLE `binh_luan` (
  `binh_luan_id` int NOT NULL AUTO_INCREMENT,
  `nguoi_dung_id` int DEFAULT NULL,
  `hinh_id` int DEFAULT NULL,
  `ngay_binh_luan` date DEFAULT NULL,
  `noi_dung` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`binh_luan_id`),
  KEY `nguoi_dung_id` (`nguoi_dung_id`),
  KEY `hinh_id` (`hinh_id`),
  CONSTRAINT `binh_luan_ibfk_1` FOREIGN KEY (`nguoi_dung_id`) REFERENCES `nguoi_dung` (`nguoi_dung_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `binh_luan_ibfk_2` FOREIGN KEY (`hinh_id`) REFERENCES `hinh_anh` (`hinh_id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `hinh_anh` (
  `hinh_id` int NOT NULL AUTO_INCREMENT,
  `ten_hinh` varchar(255) DEFAULT NULL,
  `duong_dan` varchar(255) DEFAULT NULL,
  `mo_ta` varchar(255) DEFAULT NULL,
  `nguoi_dung_id` int DEFAULT NULL,
  PRIMARY KEY (`hinh_id`),
  KEY `nguoi_dung_id` (`nguoi_dung_id`),
  CONSTRAINT `hinh_anh_ibfk_1` FOREIGN KEY (`nguoi_dung_id`) REFERENCES `nguoi_dung` (`nguoi_dung_id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `luu_anh` (
  `luu_anh_id` int NOT NULL AUTO_INCREMENT,
  `nguoi_dung_id` int DEFAULT NULL,
  `hinh_id` int DEFAULT NULL,
  `ngay_luu` date DEFAULT NULL,
  PRIMARY KEY (`luu_anh_id`),
  KEY `nguoi_dung_id` (`nguoi_dung_id`),
  KEY `hinh_id` (`hinh_id`),
  CONSTRAINT `luu_anh_ibfk_1` FOREIGN KEY (`nguoi_dung_id`) REFERENCES `nguoi_dung` (`nguoi_dung_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `luu_anh_ibfk_2` FOREIGN KEY (`hinh_id`) REFERENCES `hinh_anh` (`hinh_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `nguoi_dung` (
  `nguoi_dung_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `mat_khau` varchar(255) DEFAULT NULL,
  `ho_ten` varchar(255) DEFAULT NULL,
  `tuoi` int DEFAULT NULL,
  `anh_dai_dien` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`nguoi_dung_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `binh_luan` (`binh_luan_id`, `nguoi_dung_id`, `hinh_id`, `ngay_binh_luan`, `noi_dung`) VALUES
(1, NULL, 2, '2024-01-18', 'Bình luận hay quá!');
INSERT INTO `binh_luan` (`binh_luan_id`, `nguoi_dung_id`, `hinh_id`, `ngay_binh_luan`, `noi_dung`) VALUES
(2, 2, 3, '2024-01-19', 'Đồng ý với bạn!');
INSERT INTO `binh_luan` (`binh_luan_id`, `nguoi_dung_id`, `hinh_id`, `ngay_binh_luan`, `noi_dung`) VALUES
(3, 4, 1, '2024-01-20', 'Ảnh đẹp quá!');
INSERT INTO `binh_luan` (`binh_luan_id`, `nguoi_dung_id`, `hinh_id`, `ngay_binh_luan`, `noi_dung`) VALUES
(4, 5, 4, '2024-01-18', 'Bạn chụp hình đẹp thật!'),
(5, 3, 6, '2024-01-19', 'Cảnh này ở đâu vậy?'),
(6, 6, 9, '2024-01-20', 'Bạn đi chơi vui quá!'),
(7, 8, 7, '2024-01-18', 'Mình cũng thích chỗ này!'),
(8, 9, 5, '2024-01-19', 'Bạn chụp hình có tâm ghê!'),
(9, 10, 8, '2024-01-20', 'Màu ảnh đẹp quá!'),
(10, 7, NULL, '2024-01-18', 'Cho mình xin địa điểm với!'),
(11, 5, 1, '2024-01-18', 'Ôi gái xinh!!!'),
(12, 5, 1, '2024-01-18', 'Ôi chội ôi!!!');

INSERT INTO `hinh_anh` (`hinh_id`, `ten_hinh`, `duong_dan`, `mo_ta`, `nguoi_dung_id`) VALUES
(1, 'Avatar 1', 'avatar1.png', 'Ảnh avatar của Nguyễn Văn A', NULL);
INSERT INTO `hinh_anh` (`hinh_id`, `ten_hinh`, `duong_dan`, `mo_ta`, `nguoi_dung_id`) VALUES
(2, 'Hình 1', 'anh1.jpg', 'Hình ảnh của Trần Thị B', 2);
INSERT INTO `hinh_anh` (`hinh_id`, `ten_hinh`, `duong_dan`, `mo_ta`, `nguoi_dung_id`) VALUES
(3, 'Ảnh 2', 'anh2.jpeg', 'Hình ảnh của Lê Quốc C', 3);
INSERT INTO `hinh_anh` (`hinh_id`, `ten_hinh`, `duong_dan`, `mo_ta`, `nguoi_dung_id`) VALUES
(4, 'Hình 3', 'anh3.gif', 'Hình ảnh của Phạm Thị D', 4),
(5, 'Ảnh 4', 'anh4.png', 'Hình ảnh của Hoàng Minh E', 5),
(6, 'Hình 5', 'anh5.png', 'Hình ảnh của Trần Duy F', 6),
(7, 'Ảnh 6', 'anh6.jpg', 'Hình ảnh của Nguyễn Hoàng G', 7),
(8, 'Hình 7', 'anh7.jpeg', 'Hình ảnh của Lê Thị H', 8),
(9, 'Ảnh 8', 'anh8.jpeg', 'Hình ảnh của Phạm Văn I', 9),
(13, 'git', 'H:\\NodeJS_CyberSoft\\Capstone\\capstone_nodejs\\public\\img\\1707116017511_spiderman_rating.jpg', 'nice git image', 2);

INSERT INTO `luu_anh` (`luu_anh_id`, `nguoi_dung_id`, `hinh_id`, `ngay_luu`) VALUES
(1, 2, 4, '2024-01-18');
INSERT INTO `luu_anh` (`luu_anh_id`, `nguoi_dung_id`, `hinh_id`, `ngay_luu`) VALUES
(2, NULL, 6, '2024-01-19');
INSERT INTO `luu_anh` (`luu_anh_id`, `nguoi_dung_id`, `hinh_id`, `ngay_luu`) VALUES
(3, 5, 3, '2024-01-20');
INSERT INTO `luu_anh` (`luu_anh_id`, `nguoi_dung_id`, `hinh_id`, `ngay_luu`) VALUES
(4, 4, 9, '2024-01-18'),
(5, 3, 7, '2024-01-19'),
(6, 6, 1, '2024-01-20'),
(7, 8, 2, '2024-01-18'),
(9, 10, 5, '2024-01-20'),
(10, 7, 8, '2024-01-18');

INSERT INTO `nguoi_dung` (`nguoi_dung_id`, `email`, `mat_khau`, `ho_ten`, `tuoi`, `anh_dai_dien`) VALUES
(2, 'user2@example.com', 'password2', 'Tran Thi B', 30, 'avatar2.jpg');
INSERT INTO `nguoi_dung` (`nguoi_dung_id`, `email`, `mat_khau`, `ho_ten`, `tuoi`, `anh_dai_dien`) VALUES
(3, 'user3@example.com', 'password3', 'Le Quoc C', 35, 'avatar3.jpeg');
INSERT INTO `nguoi_dung` (`nguoi_dung_id`, `email`, `mat_khau`, `ho_ten`, `tuoi`, `anh_dai_dien`) VALUES
(4, 'user4@example.com', 'password4', 'Pham Thi D', 28, 'avatar4.png');
INSERT INTO `nguoi_dung` (`nguoi_dung_id`, `email`, `mat_khau`, `ho_ten`, `tuoi`, `anh_dai_dien`) VALUES
(5, 'user5@example.com', 'password5', 'Hoang Minh E', 40, 'avatar5.png'),
(6, 'user6@example.com', 'password6', 'Tran Duy F', 22, 'avatar6.png'),
(7, 'user7@example.com', 'password7', 'Nguyen Hoang G', 31, 'avatar7.jpg'),
(8, 'user8@example.com', 'password8', 'Le Thi H', 27, 'avatar8.jpeg'),
(9, 'user9@example.com', 'password9', 'Pham Van I', 33, 'avatar9.png'),
(10, 'user10@example.com', 'password10', 'Hoang Thi J', 29, 'avatar10.png'),
(11, 'abcminh@gmail.com', '$2b$04$fKGPYrzkvG7P9BP9AqWV6.1gDCbhpIUiQEDK4ajs/PIxZD/ldGqFO', 'Tran Van Huy', 32, 'avatar.jpg'),
(12, 'abh@gmail.com', '$2b$04$PuJPyI7Mu/Ms/5fGQe8BMeYK13wVxB1j5CbYfsWQ2m6XNRP0fKqn.', 'Ho Ten', 18, 'anh1.jpg'),
(13, 'user11@example.com', '$2b$04$znMvj5uehbvMa/c4tGF6ReIRWhGmbl2O1o47GhO/xpZ1X4n6BTgxK', 'Lê Hoàng Anh', 25, 'avatar11.jpeg');


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;