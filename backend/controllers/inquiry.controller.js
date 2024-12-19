import nodemailer from "nodemailer"
const sendEmail=async(req,res)=>{
    const {name,email,message,phone}=req.body
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'lenora.von@ethereal.email',
            pass: 'BrpfMwjs8Ks9dzf8uP'
        }
    });
}