import axios from "axios";
import {useState, useEffect} from "react";

export default function Home(){
  return(
    <div className="p-7">
      <p className="font-semibold text-2xl">Товары</p>
      <div className="h-[600px] border border-gray-300 mt-6 rounded-lg px-9 py-8"> 
        <a href="#" className="bg-blue-800 text-white px-9 py-3 text-[11pt] rounded-full">Добавить</a>
        <table className="table-auto w-full mt-8 border border-gray-300 border-collapse rounded-lg">
          <thead>
            <tr className="bg-gray-100 font-medium text-gray-500 text-[11pt]">
              <th className="border border-gray-300 p-5">Название</th>
              <th className="border border-gray-300">Размеры</th>
              <th className="border border-gray-300">Количество</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td className="border border-gray-300">Malcolm Lockyer</td>
              <td className="border border-gray-300">1961</td>
            </tr>
            <tr>
              <td className="border border-gray-300">Witchy Woman</td>
              <td className="border border-gray-300">The Eagles</td>
              <td className="border border-gray-300">1972</td>
            </tr>
            <tr>
              <td className="border border-gray-300">Shining Star</td>
              <td className="border border-gray-300">Earth, Wind, and Fire</td>
              <td className="border border-gray-300">1975</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
