# Timua Team – Kenya Minerals Dashboard  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
[![Status](https://img.shields.io/badge/Project-Active-brightgreen.svg)]()  
[![Made With](https://img.shields.io/badge/Made%20with-Angular%2018-red.svg)]()  

This project is **Timbua Team’s custom Angular 18 dashboard**, designed and built by **Moses Jabuya**, to visualize **Kenya’s mineral distribution** across counties.  
It integrates **interactive maps**, **summary cards**, and **datasets** for mineral resources.  

✨ Support us! If you like this project, give it a ⭐

---

## 🚀 Features

- 📍 **Kenya Map Integration** (using `kenya-map-data.json`)  
- ⛏ **Minerals Data Visualization** (from `minerals-data.json`)  
- 📊 **Summary Cards** showing number of mineral sites per resource  
- 🗺 **All Mineral Sites Displayed on the Map**  
- 🎨 **Modern design** with horizontal cards & icons (2 per row)  
- ⚡ Built with **Angular 18 + Bootstrap 5**  

---

## 📂 Datasets

- `kenya-map-data.json` → County boundaries & geo-coordinates  
- `minerals-data.json` → Minerals, site counts, and locations  

Example:  
```json
{
  "mineral": "Copper",
  "sites": 23,
  "locations": [
    { "county": "Turkana", "lat": 3.123, "lng": 35.456 },
    { "county": "Kitui", "lat": -1.123, "lng": 38.567 }
  ]
}
