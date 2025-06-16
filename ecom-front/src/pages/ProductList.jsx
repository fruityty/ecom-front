import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import ProductCard from "../components/ProductCard";
import FilterSidebarTwo from "../components/FilterSidebarTwo";
import {
    Grid, Box, FormControl,
    InputLabel, MenuItem, Select,
    Typography, Pagination, Divider
} from "@mui/material";
import React from 'react';
import { getMockProducts } from "./MockProducts";

const products = getMockProducts(23)

export default function ProductListPage() {
    const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];

    // Separate states
    const [pendingCategory, setPendingCategory] = useState("All");
    const [category, setCategory] = useState("All");
    const [sort, setSort] = useState("default");
    const [pendingPriceFilter, setPendingPriceFilter] = React.useState([0, 5000]);
    const [priceFilter, setPriceFilter] = React.useState([0, 5000]);

    // Pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(12);

    let filteredProduct = category === "All" ? products : products.filter(p => p.category === category);
    let filteredProdcutPrice = filteredProduct.filter(p => p.price >= priceFilter[0] && p.price <= priceFilter[1])
    let sortedProducts = [...filteredProdcutPrice];

    if (sort === "price-asc") {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sort === "price-desc") {
        sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sort === "default") {
        sortedProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    };

    const handleSort = (event) => setSort(event.target.value);
    const handleApply = () => {
        setCategory(pendingCategory);
        setPriceFilter(pendingPriceFilter);
    };
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Pagination Calcucations
    const totalProducts = sortedProducts.length;
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <MainLayout >
            <Box sx={{
                display: "flex",
                mt: "16px",
                justifyContent: "center",
                flexDirection: { xs: "column", md: "row" }, // Stack vertically on xs
            }}>
                {/* Pass both value and setter for pending selection */}
                <Box sx={{ width: { md: '295px' }, display: { xs: "none", md: "block" } }}>
                    <FilterSidebarTwo
                        pendingCategory={pendingCategory}
                        setPendingCategory={setPendingCategory}
                        categories={categories}
                        onApply={handleApply}
                        price1={pendingPriceFilter}
                        setPrice1={setPendingPriceFilter}
                    />
                </Box>
                <Box sx={{ ml: { xs: 1, md: 3 }, width: { xs: 'auto', md: '925px' } }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>

                        <Box
                            id="help"
                            sx={{
                                fontSize: { xs: 24, md: 32 },
                                fontWeight: 'bold',
                                alignContent: "center",
                            }}
                        >
                            {category === "All" ? "Everything" : `${category}`}
                        </Box>



                        <FormControl sx={{ m: 1, display: 'flex', alignItems: 'center', flexDirection: 'row' }} size="small">
                            <Box sx={{ mr: 2 }}>
                                Sort by:
                            </Box>
                            <Select
                                value={sort}
                                onChange={handleSort}
                            >
                                <MenuItem value="default">Most Recent</MenuItem>
                                <MenuItem value="price-asc">Price: Low to High</MenuItem>
                                <MenuItem value="price-desc">Price: High to Low</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>


                    {/* flex product cards */}
                    <Box
                        sx={{
                            pt: 2,
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: "flex-start", // Changed from "space-between" to "flex-start"
                            gap: { xs: 4, md: 2.5 }, // Add gap for spacing between items (adjust values as needed)
                            // e.g., xs: 8px, md: 16px (Material UI spacing unit 1 = 8px)
                        }}
                    >
                        {currentProducts.map((p) => (
                            <Box
                                key={p.id}
                                sx={{
                                   
                                  width: {
                                        xs: `172px`, // Fixed width on xs
                                        md: `281px`, // Fixed width on md
                                    },
                                    // mb: 4, // Margin bottom for vertical spacing
                                    display: 'flex', // Ensures ProductCard fills its container
                                }}
                            >
                                <ProductCard product={p} />
                            </Box>
                        ))}
                    </Box>


                    {/* Pagination Controls */}

                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 2 }}>
                        <Pagination
                            count={totalPages}
                            page={currentPage}
                            onChange={handlePageChange}
                            color="primary"
                            showFirstButton
                            showLastButton
                        />
                    </Box>

                </Box>
                <Divider />
            </Box>
        </MainLayout>
    );
}
