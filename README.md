# Organ Wait List by State - Map Visualization
---
## Explanation of Map Visualization 
---
### Creating an interactive experience
---
The architecture of the code is based mostly on activity #09-Stu_City_Population_Layers from Mod15 Mapping Day 1.
The steps below outline the order in which the code is written and explaination for how it works.
---
1. Write a function to determine the marker size based on the total number of indivisuals on the wait list for all organs, kidney, liver, and heart.
2. First, we need the data. I created an array that holds data from data.csv file. Each state contains information for total number of individuals on waitlist, those waiting for kidney, liver, and heart transplants. The array also hold information for coordinates for each state that will help place the markers for each total on the wait list.
![Image Link](https://github.com/mwsierzega/Project3/blob/marcela/2_Images/dots-obsession.png) 


---
### trick of the eye
---
- The pop up event initiated to view the wait list data for each state is actually a circle marker which I made to look invisible by decreasing the transparency to "0". 

---
## inspiration for visualization with dots
---
Yayoi Kusama, 'Dots Obsession', 2007. Wiels, Brussels
![Image Link](https://github.com/mwsierzega/Project3/blob/marcela/2_Images/dots-obsession-yakoi-kusama.png)

Project 3 map visualization:
![Image Link](xxx)

---
### where is the data from?
---
1. Organ Procurement & Transplantation Network:
https://optn.transplant.hrsa.gov/data/view-data-reports/build-advanced/
2. fill out fields for 
- data category >> select "waitlist" 
- choose report columns >> "organs"
- choose report rows >> "candidate state of residence"
3. download .csv file

![Image Link](xxx)

---
### edit and clean the data
---
1. delete territories/other locations from states column to only display 50 states
2. add columns for coordinates latitude and longitude for each state
3. to simplify visualization, keep columns only for total on waitlist, kidney, liver, and heart

Before: 
![Image Link](xxx)

After: 
![Image Link](xxx)


---
### Sources
---
Code for greyscale map:
https://github.com/PaulLeCam/react-leaflet/issues/143
![Image Link](https://github.com/mwsierzega/leaflet-challenge/blob/main/leaflet-greyscale.png)


Reference for choosing colors for circles:
https://www.unm.edu/~tbeach/IT145/color.html#:~:text=%23000%20is%20BLACK.,666%20is%20a%20DARK%20GRAY.
![Image Link](https://github.com/mwsierzega/leaflet-challenge/blob/main/leaflet-greyscale.png)
