# Organ Wait List by State - Map Visualization
---
![Image Link](https://github.com/mwsierzega/Project3/blob/marcela/2_Images/map-final-full-view.png)
![Image Link](https://github.com/mwsierzega/Project3/blob/marcela/2_Images/map-final-closeup.png)
---
## Explanation of Map Visualization: Creating an Interactive Experience
---
The architecture of the code is based mostly on activity #09-Stu_City_Population_Layers from Mod15 Mapping Day 1.
The steps below outline the order in which the code is written and explaination for how it works.
---
1. Write a function to determine the marker size based on the total number of indivisuals on the wait list for all organs, kidney, liver, and heart
2. Create an array that holds data from data.csv file
- Each state contains information for total number of individuals on waitlist, those waiting for kidney, liver, and heart transplants
- The array also holds information for coordinates for each state that will help place the markers for each total on the wait list
3. Define four arrays to hold total, kidney, liver, and heart markers
4. Loop through state coordinates from waitlist array to create map markers 
5. Set the marker radius for the organ waitlist by passing total into the markerSize function. Set color of marker for each total on the waitlist.
6. Create the base layer maps using open street map to display map
- in css file, set map baselayer to greyscale. this is an aesthetic choice to help the markers stand out better
7. Create four separate layer groups for each marker: total, kideny, liver, and heart
8. Create a baseMaps object
9. Create overlay object
- this allows user to interact with map and select layers of markers to appear and disappear based on if the user wants to see total waitlist, kidney waitlist, liver waitlist, or heart waitlist markers
- this also serves as a legend for the map
- add small "squares" next to the label that correspond to color in markers
![Image Link](https://github.com/mwsierzega/Project3/blob/marcela/2_Images/gif-final-layers-view.gif)
10. Define map object
- This is where the zoom and coordinate attributes are set to show the map at a specific location and zoom when map is loaded
11. Pass map layers to layer control and add the layer control to the map
---
### Trick of the Eye
---
12. Add invisible circle marker to each of the states with all information labeled. Loops thought waitlist array to pull information
- The pop up event initiated to view the data is actually a circle marker which I made to look invisible by decreasing the transparency to "0". 
- I did not like the marker that appears by default because it looks too cluttered when displayed for each state. See comparison in images. 
![Image Link](https://github.com/mwsierzega/Project3/blob/marcela/2_Images/marker-compare.png)
---
## inspiration for visualization with dots
---
Yayoi Kusama, 'Dots Obsession', 2007. Wiels, Brussels
![Image Link](https://github.com/mwsierzega/Project3/blob/marcela/2_Images/dots-obsession-yakoi-kusama.png)

---
### Data Source
---
1. Organ Procurement & Transplantation Network:
https://optn.transplant.hrsa.gov/data/view-data-reports/build-advanced/
2. fill out fields for 
- data category >> select "waitlist" 
- choose report columns >> "organs"
- choose report rows >> "candidate state of residence"
3. download .csv file

![Image Link](https://github.com/mwsierzega/Project3/blob/marcela/2_Images/1data-source.png)

---
### Edit and Clean the Data for Map Visualization
---
1. delete territories/other locations from states column to only display 50 states
2. add columns for coordinates latitude and longitude for each state
3. to simplify visualization, keep columns only for total on waitlist, kidney, liver, and heart

Before: 
![Image Link](https://github.com/mwsierzega/Project3/blob/marcela/2_Images/2data-before.png)

After: 
![Image Link](https://github.com/mwsierzega/Project3/blob/marcela/2_Images/2data-after.png)

---
### Sources
---
Code for greyscale map:
https://github.com/PaulLeCam/react-leaflet/issues/143
![Image Link](https://github.com/mwsierzega/leaflet-challenge/blob/main/leaflet-greyscale.png)

Reference for choosing colors for circles:
https://www.unm.edu/~tbeach/IT145/color.html#:~:text=%23000%20is%20BLACK.,666%20is%20a%20DARK%20GRAY.
