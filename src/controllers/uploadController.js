// controller này sẽ làm chức năng upload file
// process.cwd() => đường dẫn tuyệt đối tới source BE: /User/DinhDuyPhuong/Desktop/node_youtube_be
import multer, { diskStorage } from "multer";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const storage = multer({
    storage: diskStorage({
        destination: process.cwd() + "/public/img", // định nghĩa nơi lưu file
        filename: (req, file, callback) => {
            // param 1: định nghĩa lỗi nếu upload file thất bại
            // param 2: đặt tên file trước khi lưu file xuống BE
            // getTime sẽ chuyển đổi date: yyyy-mm-dd HH:mm:ss -> integer: 
          
            callback(null, new Date().getTime() + `_${file.originalname}`)
        }
    })
});

// const createImg = (req, res) => 
//     res.send(req.file);
// }

const createImg = async (req, res) => {
    if (!req.file) {
        res.send({
            statusCode: 400,
            message: "No file Upload"
        });
        return; //Ngăn chặn xử lý logic tiếp theo trong hàm nếu không có file nào được upload
    }

    try {
        let { user_id } = req.params; // id nguoi post ảnh
        let {
            ten_hinh,
            mo_ta,
        } = req.body


        let newData = {
            ten_hinh,
            duong_dan: req.file.path,
            mo_ta,
            nguoi_dung_id: Number(user_id),
        };
        await prisma.hinh_anh.create({
            data: newData,
        });
        return res.send(`picture uploaded by ${user_id}`);


    } catch (error) {
        res.send(`Backend error: ${error}`);
    }
};
export {
    createImg,
    storage
};
