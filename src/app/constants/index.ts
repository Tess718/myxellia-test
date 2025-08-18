export const metrics = [
  {
    amount: '₦120,000,000.00',
    label: 'Total Inflow',
    color: '#4545FE',
    icon: '/Vector 1.png',
    change: '2.5%',
    changeColor: '#12B76A',
  },
  {
    amount: '₦50,000,000.00',
    label: 'MRR',
    color: '#12B76A',
    icon: '/Vector 1.png',
    change: '2.5%',
    changeColor: '#12B76A',
  },
  {
    amount: '₦200,000,000.00',
    label: 'Commission Revenue',
    color: '#14B8A6',
    icon: '/loss (1).png',
    change: '0.5%',
    changeColor: '#14B8A6',
  },
  {
    amount: '₦100,000,000.00',
    label: 'GMV',
    color: '#F04438',
    icon: '/loss (2).png',
    change: '0.5%',
    changeColor: '#F04438',
  },
]

export const overviewCards = [
  {
    title: "Listings Overview",
    icon: "/solar_home-linear.png",
    viewAllText: "View all",
    stats: [
      { label: "Total", value: "1.8k" },
      { label: "Active", value: "80" },
      { label: "Archived", value: "1k" },
    ],
  },
  {
    title: "Users Overview",
    icon: "/profile 2.png",
    viewAllText: "View all",
    stats: [
      { label: "Total", value: "20.7k" },
      { label: "Riders", value: "8.5k" },
      { label: "Subscribers", value: "7.5k" },
    ],
  },
]

export type Slide = {
  image: string
  label: string
  title: string
}

export const carouselData: Slide[][] = [
  [
    { image: '/carol-1.jpg', label: 'MOST CLICKED', title: 'Urban Prime Plaza Premiere' },
    { image: 'https://img.freepik.com/free-photo/observation-urban-building-business-steel_1127-2397.jpg?w=360', label: 'MOST CLICKED', title: 'Urban Prime Plaza Premiere' },
    { image: 'https://t4.ftcdn.net/jpg/02/81/89/73/360_F_281897358_3rj9ZBSZHo5s0L1ug7uuIHadSxh9Cc75.jpg', label: 'MOST CLICKED', title: 'Urban Prime Plaza Premiere' },
  ],
  [
    { image: '/carol-2.jpg', label: 'MOST WATCHLISTED', title: 'Urban Prime Plaza Premiere' },
    { image: 'https://media.istockphoto.com/id/1508453163/photo/two-modern-buildings-with-glass-windows-architecture-design-of-buildings-office-space-houses.jpg?s=612x612&w=0&k=20&c=RSJYaxThii5iK-zk_69h16UVthwufA1gbaxoZEKOUZg=', label: 'MOST WATCHLISTED', title: 'Urban Prime Plaza Premiere' },
  ],
  [
    { image: '/carol-3.jpg', label: 'HOTTEST LISTING', title: 'Urban Prime Plaza Premiere' },
    { image: 'https://thumbs.dreamstime.com/b/downtown-office-buildings-buildings-halifax-nova-scotia-canada-188558695.jpg', label: 'HOTTEST LISTING', title: 'Urban Prime Plaza Premiere' },
  ],
]