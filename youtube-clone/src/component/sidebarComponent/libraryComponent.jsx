'use client';

import { Sidebar } from 'flowbite-react';
// TODO: insert sidebar item under library
import { MdVideoLibrary } from "react-icons/md";

export default function Library() {
  return (
    <Sidebar aria-label="Default sidebar example">
      
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          
          <Sidebar.Item
            href="#"
           
          >
          <h6> <MdVideoLibrary/> Library</h6>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}


