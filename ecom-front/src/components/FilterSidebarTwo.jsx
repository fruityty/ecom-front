import React from 'react';
import './FilterSidebarTwo.css'; // Import your CSS file
import Slider from '@mui/material/Slider';
import { Divider } from '@mui/material'; 

// This function formats the value displayed on the slider thumb
function valuetext(value) {
    // Format the number with commas for thousands
    const formattedValue = value.toLocaleString();
    return `฿${formattedValue}`;
}

export default function FilterSidebarTwo({
    pendingCategory,
    setPendingCategory,
    categories,
    onApply,
    price1,    // Expecting price1 as [min, max] array
    setPrice1, // Expecting a function to update price1
}) {
    // Define minDistance here, or pass it as a prop if it needs to be dynamic
    const minDistance = 100; // Example: ensure a minimum price range of 100 Baht

    const handlePrice1 = (event, newValue, activeThumb) => {
        // newValue is the array [newMin, newMax] from the slider
        // activeThumb tells you which thumb (0 for min, 1 for max) was dragged

        if (activeThumb === 0) { // If the left thumb (min value) was dragged
            setPrice1([Math.min(newValue[0], price1[1] - minDistance), price1[1]]);
        } else { // If the right thumb (max value) was dragged
            setPrice1([price1[0], Math.max(newValue[1], price1[0] + minDistance)]);
        }
    };

    return (
        <div className="filter-sidebar">
            <h3 className="filter-sidebar-title">Filters</h3>
            <Divider />
            <div className="filter-sidebar-categories">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`category-button ${pendingCategory === cat ? 'selected' : ''}`}
                        onClick={() => setPendingCategory(cat)}
                    >
                        {cat}
                        <span className="arrow-icon">&gt;</span>
                    </button>
                ))}
            </div>

            {/* Price Range Slider Section */}
            <Divider />
            <div className="price-slider-container" >
                <h4 className="slider-label">Price</h4>
                <Slider
                    aria-label="Temperature"
                    color= '#222'
                    getAriaLabel={() => 'Price range'} // More descriptive label
                    value={price1} // The current value array [min, max]
                    onChange={handlePrice1} // The handler function for value changes
                    valueLabelDisplay="auto" // Show value label on interaction
                    getAriaValueText={valuetext} // Custom text for accessibility label
                    step={100} // Step for slider increments (e.g., 100 as you had, or 10 for finer control)
                    min={0} // Set a minimum possible value for the slider
                    max={5000} // Set a maximum possible value for the slider
                    disableSwap // Prevents the thumbs from crossing over each other
                    
                />
                <div className="price-display">
                    ฿{price1[0]} - ฿{price1[1]}
                </div>
            </div>

            <Divider />
            <button
                className="apply-button"
                onClick={onApply}
            >
                Apply Filter
            </button>
        </div>
    );
}