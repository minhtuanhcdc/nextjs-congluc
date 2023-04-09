import styles from "@/styles/Layout.module.css";
import Link from 'next/link'

import { useState } from "react";

import SideBar from "./sidebar";
import Header from './header'




export default function layout( {children} ) {
 
  return (
    <div>
       <Header/>
      <div className= "flex px-1 py-1">
        <SideBar/>
        <main className="flex-1 px-2 bg-slate-100">
          {children}
        </main>
      </div>
    </div>
  );
}
