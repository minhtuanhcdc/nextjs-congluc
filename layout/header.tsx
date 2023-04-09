import Link from 'next/link'
import Image from 'next/image'
import MyImage from '../components/image'
import styles from '../styles/header.module.css'
import { useRouter } from 'next/router'
import {useState} from 'react'

import {HiOutlineUser,HiOutlineViewList,
  HiMenuAlt1,HiUsers,HiIdentification,
  HiOutlineX,HiOutlineTable,HiClipboardList,
  HiOutlineLogin
} from 'react-icons/hi'
import { FiUser } from "react-icons/fi";
// const MyImage = ({props}) => {
//     return (
//       <Image 
//         src={props.src}
//         alt={props.alt}
//         className={props.classImage}
//         width={props.higthImage}
//         height={props.widthImage}
//       />
//     )
//   }
  const propImage = {
    src:'/images/logo.jpg',
    alt:'logo',
    classImage:'rounded-lg',
    higthImage:'60',
    widthImage:'60',
  }
  const items =[ 
    {name:'Menus', path:'/admin/menus',icon:<HiMenuAlt1 size={30}/>},
    {name:'Users', path:'/admin/users',icon:<HiUsers size={30}/>},
    {name:'Roles', path:'/admin/roles',icon:<HiIdentification size={30}/>},
    {name:'Posts', path:'/admin/posts',icon:<HiOutlineTable size={30}/>},
    {name:'Test', path:'/tests',icon:<HiOutlineTable size={30}/>},
]
export default function Header(){
  const [userProfile,setUserProfile] = useState(false)
  function handleViewProfile(){
    setUserProfile(!userProfile)
  }

  const router = useRouter()
  function handleBackHome(){
    router.push('/')
  }
  function handleProfile(){
    router.push('/admin/profiles')
  }
  function handleLogout(){
    router.push('/auth/login')
  }

    return (
      <nav className={styles.nav_header}>
        <div className="w-32 cursor-pointer" onClick={handleBackHome}>
          <MyImage props={propImage} />
        </div>
        <div>
          <ul className={styles.nav_container}>
            {items.map((item,index)=>(
              <li key={index} className={styles.nav_item}>
                  <Link href={item.path} className={styles.nav_link}>
                    <span className={styles.nav_link_icon}>{item.icon}</span><span>{item.name}</span>
                  </Link>
              </li>
            ))}
                 
          </ul>
        </div>
        <div className={styles.nav_account}>
          <FiUser onClick={handleViewProfile}  className={styles.nav_account_icon}  size={40}/>
          <div className={userProfile?styles.nav_account_table:styles.nav_account_hiden}>
            <p className={styles.nav_account_itemuser}>
              <span><HiUsers size={25}/></span><span>userName</span>
            </p>
            <p className={styles.nav_account_table_item} onClick={handleProfile}>
              <span><HiClipboardList size={25}/></span><span>Profile user</span>
            </p>
            <p className={styles.nav_account_table_item} onClick={handleLogout}>
              <span><HiOutlineLogin size={25}/></span><span>Logout</span>
            </p>
           
          </div>
        </div>
      </nav>
    )
}