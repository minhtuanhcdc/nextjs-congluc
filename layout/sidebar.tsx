import {HiOutlineViewList,HiMenuAlt1,HiUsers,HiIdentification,HiOutlineX,HiUserGroup} from 'react-icons/hi'
import Link from 'next/link'
import {useState} from 'react'
import  styles from '@/styles/sidebar.module.css'
import { useRouter } from 'next/router'

import { FiUserPlus } from "react-icons/fi";

const menus =[ 
    {name:'Tiếp nhận', path:'/custommers',icon:<FiUserPlus size={30}/>},
    {name:'Menu', path:'/admin/menus',icon:<HiMenuAlt1 size={30}/>},
    {name:'User', path:'/admin/users',icon:<HiUsers size={30}/>},
    {name:'Roles', path:'/admin/roles',icon:<HiIdentification size={30}/>},
    {name:'Posts', path:'/admin/posts',icon:<HiIdentification size={30}/>},
    {name:'Students', path:'/students',icon:<HiUserGroup size={30}/>},
]
export default function sideBar(){
    const router = useRouter();
    const [isOpen,setIsOpen]=useState(false)
    const toggle = ()=> setIsOpen(!isOpen)
    return(
    <div className={isOpen?styles.sidebar_full:styles.sidebar_icon}> 
        <div className="w-full p-0 m-0">
            <div className={styles.container_dashboard} >
                <div className={isOpen?styles.icon_view:styles.icon_hide }>
                    <div className={styles.icon_x}>
                        <span className='text-green-700'>Dashboard</span>
                        <HiOutlineX onClick={toggle} size={30}/>
                    </div>
                </div> 
                <div className={isOpen?styles.icon_hide:styles.icon_view }>
                    <div className='flex justify-center'>
                        <HiOutlineViewList  onClick={toggle} size={30}/>
                    </div>
                </div>  
            </div>
            <div className={isOpen?'w-full':'' }>
                {menus.map((menu, index)=>(
                    <Link key={index} href={menu.path}
                        className={styles.item}> 
                        <span className={router.pathname == menu.path ? styles.active : ""}>{menu.icon}</span><span className={isOpen?'visible':'invisible' }>{menu.name}</span>
                    </Link> 
                ))
                }
            </div>
        </div>
    </div>
    )
}