// Dynamically import the actual app
import("./bootstrap").catch((err) => console.error("Error loading bootstrap:", err));