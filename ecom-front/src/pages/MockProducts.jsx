import { v4 as uuidv4 } from 'uuid'; // You might need to install 'uuid': npm install uuid
                                      // If you don't want to install, you can use simple incrementing IDs

// Helper function to generate a random date within the last year
const getRandomDate = () => {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setFullYear(endDate.getFullYear() - 1); // Up to 1 year ago

    const randomTimestamp = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
    return new Date(randomTimestamp).toISOString();
};

// Helper function to pick a random element from an array
const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Possible values for new products
const categories = ["Sneakers", "Boots", "Sandals", "Dress Shoes", "Running Shoes", "Loafers", "Slippers", "Casual Shoes", "Flats", "Athletic", "Work Shoes", "Kids Shoes"];
const brands = [
    { id: "B001", name: "SoleMate" },
    { id: "B002", name: "StrideRight" },
    { id: "B003", name: "FootFlow" },
    { id: "B004", name: "PeakStep" },
    { id: "B005", name: "SwiftKicks" },
    { id: "B006", name: "UrbanStep" },
    { id: "B007", name: "ComfyFeet" },
    { id: "B008", name: "ZenWalk" }
];
const salePercentages = [0, 20, 30]; // As integers

const baseProductNames = [
    "Glide", "Aero", "Pulse", "Terra", "Horizon", "Velocity", "Summit", "Delta",
    "Pinnacle", "Momentum", "Flow", "Echo", "Zenith", "Quantum", "Nexus", "Vortex"
];
const shoeTypes = ["Sneakers", "Boots", "Sandals", "Oxfords", "Loafers", "Runners", "Heels", "Flats", "Mules", "Wedges"];

// Function to generate a single new product
const generateNewProduct = (id) => {
    const category = getRandomElement(categories);
    const brand = getRandomElement(brands);
    const baseName = getRandomElement(baseProductNames);
    const shoeType = getRandomElement(shoeTypes);
    const name = `${baseName} ${shoeType} ${id}`; // Ensure unique name suffix
    const price = Math.floor(Math.random() * (2800 - 550 + 1)) + 500; // Price between 550 and 2800
    const imageText = `${category.replace(/\s/g, '')}-${id}`; // Image text based on category and id
    const imageUrl = `https://placehold.co/400x400/${Math.floor(Math.random()*16777215).toString(16)}/${Math.floor(Math.random()*16777215).toString(16)}?text=${imageText}`;

    return {
        id: id, // Use the passed ID
        name: name,
        price: price,
        image: imageUrl,
        category: category,
        brand: brand,
        createdAt: getRandomDate(),
        salePercentage: getRandomElement(salePercentages)
    };
};

// Initial 12 products (as provided by you)
const initialProducts = [
    {
        id: 1,
        name: "Urban Stride Sneakers",
        price: 1800,
        image: "https://placehold.co/400x400/E0E0E0/333?text=Sneakers-A",
        category: "Sneakers",
        brand: { id: "B001", name: "SoleMate" },
        createdAt: "2024-07-10T09:20:00Z",
        salePercentage: 0
    },
    {
        id: 2,
        name: "Classic Leather Boots",
        price: 2500,
        image: "https://placehold.co/400x400/D0D0D0/444?text=Boots-B",
        category: "Boots",
        brand: { id: "B002", name: "StrideRight" },
        createdAt: "2024-07-12T12:15:00Z",
        salePercentage: 20
    },
    {
        id: 3,
        name: "Summer Breeze Sandals",
        price: 950,
        image: "https://placehold.co/400x400/C0C0C0/555?text=Sandals-C",
        category: "Sandals",
        brand: { id: "B003", name: "FootFlow" },
        createdAt: "2024-07-08T17:00:00Z",
        salePercentage: 0
    },
    {
        id: 4,
        name: "Professional Oxford Shoes",
        price: 2800,
        image: "https://placehold.co/400x400/B0B0B0/666?text=Oxfords-D",
        category: "Dress Shoes",
        brand: { id: "B002", name: "StrideRight" },
        createdAt: "2024-06-25T10:00:00Z",
        salePercentage: 30
    },
    {
        id: 5,
        name: "Trail Blazer Hiking Boots",
        price: 2100,
        image: "https://placehold.co/400x400/A0A0A0/777?text=HikingBoots-E",
        category: "Boots",
        brand: { id: "B004", name: "PeakStep" },
        createdAt: "2024-07-01T14:30:00Z",
        salePercentage: 20
    },
    {
        id: 6,
        name: "Comfort Slip-On Loafers",
        price: 1600,
        image: "https://placehold.co/400x400/909090/888?text=Loafers-F",
        category: "Loafers",
        brand: { id: "B001", name: "SoleMate" },
        createdAt: "2024-07-05T08:00:00Z",
        salePercentage: 0
    },
    {
        id: 7,
        name: "Responsive Running Shoes",
        price: 1950,
        image: "https://placehold.co/400x400/808080/999?text=RunningShoes-G",
        category: "Running Shoes",
        brand: { id: "B005", name: "SwiftKicks" },
        createdAt: "2024-07-11T16:45:00Z",
        salePercentage: 30
    },
    {
        id: 8,
        name: "Waterproof Rain Boots",
        price: 1300,
        image: "https://placehold.co/400x400/707070/AAA?text=RainBoots-H",
        category: "Boots",
        brand: { id: "B003", name: "FootFlow" },
        createdAt: "2024-06-28T20:10:00Z",
        salePercentage: 20
    },
    {
        id: 9,
        name: "Elegant Court Heels",
        price: 2200,
        image: "https://placehold.co/400x400/606060/BBB?text=Heels-I",
        category: "Dress Shoes",
        brand: { id: "B002", name: "StrideRight" },
        createdAt: "2024-07-09T11:00:00Z",
        salePercentage: 0
    },
    {
        id: 10,
        name: "Athletic Cross Trainers",
        price: 1700,
        image: "https://placehold.co/400x400/505050/CCC?text=Trainers-J",
        category: "Sneakers",
        brand: { id: "B005", name: "SwiftKicks" },
        createdAt: "2024-07-03T09:00:00Z",
        salePercentage: 30
    },
    {
        id: 11,
        name: "Comfy House Slippers",
        price: 550,
        image: "https://placehold.co/400x400/404040/DDD?text=Slippers-K",
        category: "Slippers",
        brand: { id: "B003", name: "FootFlow" },
        createdAt: "2024-07-14T08:30:00Z",
        salePercentage: 20
    },
    {
        id: 12,
        name: "Classic Boat Shoes",
        price: 1400,
        image: "https://placehold.co/400x400/303030/EEE?text=BoatShoes-L",
        category: "Casual Shoes",
        brand: { id: "B001", name: "SoleMate" },
        createdAt: "2024-07-07T13:00:00Z",
        salePercentage: 0
    }
];


function getMockProducts (productQuantity = 12) { // Default to 40
    let allProducts = [...initialProducts]; // Start with your initial 12

    // If you need more than the initial 12, generate them
    for (let i = allProducts.length + 1; i <= productQuantity; i++) {
        allProducts.push(generateNewProduct(i));
    }

    // Ensure all products (initial and generated) have a random salePercentage
    // In case the initial products didn't have one or you want to re-randomize
    allProducts = allProducts.map(product => ({
        ...product,
        // Only assign if it doesn't exist, or re-randomize if you prefer
        salePercentage: product.salePercentage === undefined
                        ? getRandomElement(salePercentages)
                        : product.salePercentage // Keep existing salePercentage or re-randomize
    }));


    return allProducts;
}

export { getMockProducts };