interface ContactProps {
  email: string;
  phone: string;
  assignedLGA: string;
}

interface DriverProps {
  id: string;
  name: string;
  avatar: string;
  truckNumber: string;
  dateJoined: string;
  location: string;
  contact: ContactProps;
}


export const driversData: DriverProps[] = [
  {
    id: "1",
    name: "Emeka Udechie",
    avatar: "/avatars/driver1.png",
    truckNumber: "NR-09384",
    dateJoined: "7/7/2025",
    location: "Awka-South",
    contact: {
      email: "emekaudechie@gmail.com",
      phone: "+2348133978607",
      assignedLGA: "Awka North"
    }
  },
  {
    id: "2",
    name: "Chinedu Okeke",
    avatar: "/avatars/driver2.png",
    truckNumber: "NR-09385",
    dateJoined: "8/7/2025",
    location: "Nnewi-North",
    contact: {
      email: "chineduokeke@gmail.com",
      phone: "+2348034567890",
      assignedLGA: "Nnewi North"
    }
  },
  {
    id: "3",
    name: "Obinna Nwasu",
    avatar: "/avatars/driver3.png",
    truckNumber: "NR-09386",
    dateJoined: "8/7/2025",
    location: "Onitsha-North",
    contact: {
      email: "obinnanwasu@gmail.com",
      phone: "+2348123456789",
      assignedLGA: "Onitsha North"
    }
  },
  {
    id: "4",
    name: "Kelvin Eze",
    avatar: "/avatars/driver4.png",
    truckNumber: "NR-09387",
    dateJoined: "9/7/2025",
    location: "Onitsha-South",
    contact: {
      email: "kelvineze@gmail.com",
      phone: "+2347051234567",
      assignedLGA: "Onitsha South"
    }
  },
  {
    id: "5",
    name: "Koschi Omen",
    avatar: "/avatars/driver5.png",
    truckNumber: "NR-09388",
    dateJoined: "9/7/2025",
    location: "Nnewi-North",
    contact: {
      email: "koschiomen@gmail.com",
      phone: "+2347098765432",
      assignedLGA: "Nnewi North"
    }
  },
  {
    id: "6",
    name: "Chissom Anya",
    avatar: "/avatars/driver6.png",
    truckNumber: "NR-09389",
    dateJoined: "10/7/2025",
    location: "Ogbaru",
    contact: {
      email: "chissomanya@gmail.com",
      phone: "+2348087754421",
      assignedLGA: "Ogbaru"
    }
  },
  {
    id: "7",
    name: "Unyeke Igwe",
    avatar: "/avatars/driver7.png",
    truckNumber: "NR-09383",
    dateJoined: "10/7/2025",
    location: "Awka-South",
    contact: {
      email: "unyekeigwe@gmail.com",
      phone: "+2348109901234",
      assignedLGA: "Awka South"
    }
  },
  {
    id: "8",
    name: "Adasgo Ike",
    avatar: "/avatars/driver8.png",
    truckNumber: "NR-09382",
    dateJoined: "11/7/2025",
    location: "Onitsha-North",
    contact: {
      email: "adasgoike@gmail.com",
      phone: "+2349021187766",
      assignedLGA: "Onitsha North"
    }
  },
  {
    id: "9",
    name: "Emeka Nnana",
    avatar: "/avatars/driver9.png",
    truckNumber: "NR-09381",
    dateJoined: "12/7/2025",
    location: "Onitsha-South",
    contact: {
      email: "emekannana23@gmail.com",
      phone: "+2347016332098",
      assignedLGA: "Onitsha South"
    }
  },
  {
    id: "10",
    name: "Madu Sylvester",
    avatar: "/avatars/driver10.png",
    truckNumber: "NR-09380",
    dateJoined: "12/7/2025",
    location: "Nnewi-North",
    contact: {
      email: "madusylvester@gmail.com",
      phone: "+2348145628890",
      assignedLGA: "Nnewi North"
    }
  },
  {
    id: "11",
    name: "Oluchi Nduka",
    avatar: "/avatars/driver11.png",
    truckNumber: "NR-09372",
    dateJoined: "13/7/2025",
    location: "Nnewi-North",
    contact: {
      email: "oluchinduka@gmail.com",
      phone: "+2349163087145",
      assignedLGA: "Nnewi North"
    }
  },
  {
    id: "12",
    name: "Paul Udogie",
    avatar: "/avatars/driver12.png",
    truckNumber: "NR-09374",
    dateJoined: "14/7/2025",
    location: "Nnewi-North",
    contact: {
      email: "pauludogie@gmail.com",
      phone: "+2349094471120",
      assignedLGA: "Nnewi North"
    }
  }
]