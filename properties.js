// List of property names
const propertyNames = [
     "Beaches Be Crazy",
     "Blessed Beaches",
     "Blue Heron Haven",
     "Blue Moon Cottage",
     "Bonnie Blue Bungalow",
     "Cole Beck's Cove",
     "Family Tides",
     "Good Karma",
     "In the Key of Sea",
     "Liberty Point",
     "Magnolia Mint",
     "Nothing But Blue Skies",
     "Pearl House",
     "Periwinkle Shores",
     "Rose Sunsets",
     "Sea Dreamer 30A",
     "Seaglass Lagoons",
     "SeaPines",
     "Somervilla",
     "Southern Attitude",
     "Southern Bliss",
     "Sugar Beach Cottage",
     "Surfside",
     "The Laughing Place",
     "Three Little Birds",
     "Time to Wine Down",
     "Times Like These",
     "Way Down Here",
];

   // Display property names on the page
   const container = document.getElementById("propertyList");
   
   propertyNames.forEach(name => {
     const div = document.createElement("div");
     div.className = "property";
     div.textContent = name;
     container.appendChild(div);
   });
   