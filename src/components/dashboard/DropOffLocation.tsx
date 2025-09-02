"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { ChevronDown } from "lucide-react";


const LGAS = [
    {
        name: "Nnewi North",
        subAreas: [
            "Nnewi-ichi I",
            "Nnewi-ichi II",
            "Otolo I",
            "Otolo II",
            "Otolo III",
            "Umudim I",
            "Umudim II",
            "Uruagu I",
            "Uruagu II",
            "Uruagu III",
        ],
    },
    {
        name: "Nnewi South",
        subAreas: [
            "Ukpor",
            "Ezinifite",
            "Akwaihedi",
            "Unubi",
            "Osumenyi",
            "Amichi",
            "Ebenator",
            "Utuh",
            "Ekwulumili",
            "Azigbo",
            "Mbosi",
            "Uga",
        ],
    },
    {
        name: "Awka South",
        subAreas: [
            "Amawbia",
            "Awka I",
            "Awka II",
            "Ezinato",
            "Isiagu",
            "Mbaukwu",
            "Nibo",
            "Nise",
            "Okpuno",
            "Umuawulu",
        ],
    },
    {
        name: "Onitsha South",
        subAreas: [
            "Fegge I",
            "Fegge II",
            "Odoakpu I",
            "Odoakpu II",
            "Woliwo",
            "Ugborimili",
            "Okpoko",
            "Haruna",
        ],
    },
    {
        name: "Ogbaru",
        subAreas: [
            "Atani",
            "Akili-Ozizor",
            "Akili-Ogidi",
            "Amiyi",
            "Mputu",
            "Odekpe",
            "Ogbakuba",
            "Ossomala",
            "Umunankwo",
            "Ochuche",
            "Okpoko",
            "Obeagwe",
            "Ogwu-Aniocha",
            "Ogwu-Ikpele",
        ],
    },
    // Add more LGAs as needed
];

export function DropOffLocation() {
    const [search, setSearch] = useState("");
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const filteredLGAs = LGAS.filter(lga =>
        lga.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div className="bg-white rounded-xl shadow-sm p-6 w-full mx-auto">
            <div className="flex items-center gap-2 mb-4">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="green" className="mr-1"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10V6a2 2 0 012-2h14a2 2 0 012 2v4M3 10v8a2 2 0 002 2h14a2 2 0 002-2v-8M3 10h18" /></svg>
                <span className="font-semibold text-green-700">Local Government</span>
            </div>
            <div className="mb-4">
                <Input
                    placeholder="Search LGA"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="bg-[#F8FAF8] border-none focus:ring-0 focus:outline-none rounded-full px-4 py-2 text-sm shadow-sm"
                />
            </div>
            <div className="divide-y divide-green-100">
                {filteredLGAs.map(lga => (
                    <div key={lga.name}>
                        <div
                            className="flex items-center justify-between py-3 cursor-pointer hover:bg-green-50 transition"
                            onClick={() => setOpenDropdown(openDropdown === lga.name ? null : lga.name)}
                        >
                            <span className="text-gray-800 text-base">{lga.name}</span>
                            <ChevronDown size={18} color="#14532d" className={openDropdown === lga.name ? 'rotate-180 transition-transform' : 'transition-transform'} />
                        </div>
                        {openDropdown === lga.name && lga.subAreas.length > 0 && (
                            <div className="bg-green-50 rounded-md shadow p-3 ml-4 mb-2">
                                <div className="font-semibold text-green-700 mb-2">Areas in {lga.name}</div>
                                <ul className="list-disc list-inside text-gray-700 text-sm">
                                    {lga.subAreas.map((item) => (
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