"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { ChevronDown } from "lucide-react";
import { LGAData } from "@/data/lga";

export function DropOffLocation() {
  const [search, setSearch] = useState("");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const filteredLGAs = LGAData.filter((lga) =>
    lga.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 w-full mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <svg
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 24 24"
          stroke="green"
          className="mr-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 10V6a2 2 0 012-2h14a2 2 0 012 2v4M3 10v8a2 2 0 002 2h14a2 2 0 002-2v-8M3 10h18"
          />
        </svg>
        <span className="font-semibold text-green-700">Local Government</span>
      </div>
      <div className="mb-4">
        <Input
          placeholder="Search LGA"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-[#F8FAF8] border-none focus:ring-0 focus:outline-none rounded-full px-4 py-2 text-sm shadow-sm"
        />
      </div>
      <div className="divide-y divide-green-100">
        {filteredLGAs.map((lga) => (
          <div key={lga.title}>
            <div
              className="flex items-center justify-between py-3 cursor-pointer hover:bg-green-50 transition"
              onClick={() =>
                setOpenDropdown(openDropdown === lga.title ? null : lga.title)
              }
            >
              <span className="text-gray-800 text-base">{lga.title}</span>
              <ChevronDown
                size={18}
                color="#14532d"
                className={
                  openDropdown === lga.title
                    ? "rotate-180 transition-transform"
                    : "transition-transform"
                }
              />
            </div>
            {openDropdown === lga.title && lga.towns.length > 0 && (
              <div className="bg-green-50 rounded-md shadow p-3 ml-4 mb-2">
                <div className="font-semibold text-green-700 mb-2">
                  Areas in {lga.title}
                </div>
                <ul className="list-disc list-inside text-gray-700 text-sm">
                  {lga.towns.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
