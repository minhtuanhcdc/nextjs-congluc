import Head from "next/head";
import LayoutLogin from "../../layout/layoutLogin";
import {useState} from "react"

import styles from "@/styles/Form.module.css";
import { HiFingerPrint,HiOutlineUser,HiEye } from "react-icons/hi";

export default function Login() {
  const [show,setShow] =useState(false)
  return (
    <LayoutLogin>
      <Head>
        <title>Login</title>
      </Head>
      <section className="h-full">
        <div className="w-full text-center top-0 mb-10">
          <p className="text-lg font-bold">PHÒNG KHÁM NỘI TỔNG QUÁT</p>
          <span className="text-sm font-bold">BSCKI NỘI</span>
          <p className="text-2xl font-bold text-red-700">
            NGUYỄN THỊ PHƯƠNG LINH
          </p>
          <span className="font-bold">(Bệnh viện Chợ Rẫy)</span>
          <div className="text-center mt-4">
            <p>Giấy phép: 09300/HCM-GPHĐ</p>
            <p className="text-sm">
              Giờ làm việc: Thứ 2 - Thứ 6: 17h-20h; Thứ 7:8h-20h; CN:8h-21h
            </p>
            <p>Địa chỉ: 148 Ngô Quyền, P.5, Q.10, Tp.HCM</p>
            <p>Tel: 0933517968 - 0907876022</p>
          </div>
        </div>

        <form className={styles.form_input}>
          <div className={styles.input_group}>
            <label className="w-32 text-white">User name:</label>
            <input
              className={styles.input_text}
              type="text"
              name="username"
              placeholder="nhập user.."
            />
            <span className="icon flex items-center"><HiOutlineUser size={25}/></span>
          </div>
          <div className="input-group flex px-4 items-center">
            <label className="w-32 text-white">Password:</label>
            <input
             className={styles.input_text}
              type={`${show?"text":"password"}`}
              name="password"
              placeholder="nhập password..."
            />
            <span className="cursor-pointer" onClick={()=>{setShow(!show)}}>
              <HiEye size={25}/>
            </span>
          </div>
          <div className="text-right">
            <button className={styles.button_login}>Đăng nhập</button>
          </div>
        </form>
      </section>
    </LayoutLogin>
  );
}
