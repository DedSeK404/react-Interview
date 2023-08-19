interface Product {
  id: string;
  title: string;
  category: string;
  likes: number;
  dislikes: number;
  image:string;
  details:string;
}
const _products: Product[] = [
  {
    id: '1',
    title: 'Premium Wireless Headphones',
    category: 'Electronics',
    likes: 120,
    dislikes: 10,
    image:"PremiumWirelessHeadphones.png",
    details:"Stereo headphones that connect to a user's cellphone, music player, computer or stereo, made with high quality and envirnoment friendly materials "
  },
  {
    id: '2',
    title: 'Organic Green Tea',
    category: 'Food & Beverage',
    likes: 45,
    dislikes: 3,
    image:"OrganicGreenTea.png",
    details:"Absolute Organic Green Tea is made of Camellia Sinensis leaves and is often known as a tea with antioxidant properties",
  },
  {
    id: '3',
    title: 'Leather Messenger Bag',
    category: 'Fashion',
    likes: 22,
    dislikes: 12,
    image:"LeatherMessengerBarg.png",
    details:"men's cross-body or shoulder bag that features a large, comfortable strap, a front flap with fastening and plenty of compartments inside to store your personal items",
  },
  {
    id: '4',
    title: 'Bluetooth Portable Speaker',
    category: 'Electronics',
    likes: 4,
    dislikes: 0,
    image:"BluetoothPortableSpeaker.png",
    details:"a sound device that is aimed at making it easier for you to enjoy listening to your music or favorite podcasts,movies or any tupe of media",
  },
  {
    id: '5',
    title: 'Natural Bamboo Toothbrush',
    category: 'Health & Wellness',
    likes: 10,
    dislikes: 2,
    image:"NaturalBambooToothbrush.png",
    details:"Naturally antibacterial and biodegradable bamboo handle. BPA-free nylon-6 bristles - industry standard in cleaning and oral health",
  },
  {
    id: '6',
    title: 'Stainless Steel Water Bottle',
    category: 'Home',
    likes: 55,
    dislikes: 4,
    image:"StainlessSteelWaterBottle.png",
    details:"Environmentally friendly, durable, safe, and easy-to-clean, stainless steel water bottles are an excellent alternative to using plastic water bottles",
  },
  {
    id: '7',
    title: 'Fitness Tracker Watch',
    category: 'Sports',
    likes: 70,
    dislikes: 6,
    image:"FitnessTrackerWatch.png",
    details:"monitors and tracks fitness-related metrics such as distance walked or run, calorie consumption, and in some cases heartbeat",
  },
  {
    id: '8',
    title: 'Cozy Throw Blanket',
    category: 'Home',
    likes: 40,
    dislikes: 3,
    image:"CozyThrowBlanket.png",
    details:"small blankets and the most versatile among all. They are mainly for styling your living space be it your living room, bedroom or conservatory",
  },
  {
    id: '9',
    title: 'Gourmet Chocolate Box',
    category: 'Food & Beverage',
    likes: 65,
    dislikes: 7,
    image:"GourmetChocolateBox.png",
    details:"rich chocolates of the highest quality, made using best beans and using best methods to deliver rich aroma, smooth texture and an even, velvety taste",
  },
  {
    id: '10',
    title: 'Wireless Charging Pad',
    category: 'Electronics',
    likes: 90,
    dislikes: 9,
    image:"WirelessChargingPad.png",
    details:"allows you to charge your device anywhere, anytime, without worrying about plug-ins. It's universal. Charge Apple and Android devices on the same charging pad without any issues",
  },
  {
    id: '11',
    title: 'Leather Wallet',
    category: 'Fashion',
    likes: 50,
    dislikes: 4,
    image:"LeatherWallet.png",
    details:"a flat, small case designed to carry items such as personal items, currency, credit cards, and articles of identification such as a driver's license",
  },
  {
    id: '12',
    title: 'Plant-Based Protein Powder',
    category: 'Health & Wellness',
    likes: 35,
    dislikes: 2,
    image:"Plant-BasedProteinPowder.png",
    details:"made from various plants, such as brown rice, soy, or pea, and are vegan-friendly and lactose-free, best for people with lactose intolerance",
  },
  {
    id: '13',
    title: 'Retro Vinyl Record Player',
    category: 'Entertainment',
    likes: 75,
    dislikes: 6,
    image:"RetroVinylRecordPlayer.png",
    details:"it has a vintage look but it also offers many different features that you would usually only find on modern record players",
  },
  {
    id: '14',
    title: 'Scented Soy Candle',
    category: 'Home',
    likes: 25,
    dislikes: 1,
    image:"ScentedSoyCandle.png",
    details:"Soy candles are different. Since they are made with natural wax, they produce less soot and hold fragrance better",
  },
  {
    id: '15',
    title: 'Smartphone Camera Lens Kit',
    category: 'Electronics',
    likes: 4,
    dislikes: 7,
    image:"SmartphoneCameraLensKit.png",
    details:"Camera Lens Kit, 14 in 1 Lenses with Selfie Light for iPhone X Xs Xs max 11 11 Pro 11 Pro Max 14 13 Samsung and Other Andriod Smartphone",
  },
];

export const products: Promise<Product[]> = new Promise((resolve, reject) =>
  setTimeout(resolve, 100, _products),
);
