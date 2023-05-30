# Project 3: Organ Wait List Data Analysis
---
## Marcela - Map Visualization
---
![Image Link](https://github.com/mwsierzega/Project3/blob/marcela/2_Images/map-final-full-view.png)
![Image Link](https://github.com/mwsierzega/Project3/blob/marcela/2_Images/gif-final-layers-view.gif)
---
### An Overwhelming Consensus - Analysis of Data
---
Based on map visualization, user can determine quickly that an overwhelming majority of waist list candidates are waiting for kidney transplants and majority of organ waitlist candidates reside in very populated regions of the United States. California ranks at the top of the list for total number of waitlist candidates. California also appears to be one of the biggest states by land mass suggesting that the candidates may be spread out across a wide area. Without knowing the county or city of candidates on waitlist we cannot know for certain. On the opposite side of the country, the clusters of circles in the North East Regions are dense and overlapping. The significant demand for organ transplants in these states poses more questions than answers. For example, is there state legislature that inadvertently creates difficulty for waitlisted individuals to receive an organ from another state? Are there ways to improve wait-times for candidates through increased incentives for organ donations to residents in these regions? Is there a need for more organ transplant centers? A layer for improvement could be calculating waitlisted individuals per capita in each state. Even with that interesting data calculation, we would most likely still see overlapping circles in the North East states because of population density by area. This poses another question: does the demand for organs in a densely populated area such as the North East with wide ranging socio-economic and ethnic diversity per area need to be addressed differently than the demand for organs in California, Texas, or Illinois? Why does everyone need a kidney? 
---
### Explanation of Map Visualization: Creating an Interactive Experience
---
The architecture of the code is based mostly on activity #09-Stu_City_Population_Layers from Module 15 Mapping Day 1 which showed us how to code data layers using Leaflet to allow user to toggle between data markers, create pop up events which can display information by looping through data source, and customize markers size and colors to the ratio of totals and input. Using open street map to pull in street view of world map, each marker was plotted using geo location coordinates. The greyscale appearance was coded in CSS file for aesthetic reasons to allow dots to stand out. 
- For detailed outline of explanation to code please refer to link to Marcela's branch:
https://github.com/mwsierzega/Project3/tree/marcela
---
---
---
## Sunderiya - Kidney Graphs
---
## Characteristics: Both datasets provide information about the ATS Standard Deviation for different characteristics of kidney transplant candidates. The characteristics include Overall, Donation Service Area, CPRA (Calculated Panel Reactive Antibody), Blood Type, Prior Kidney Transplant, Diagnosis, Age, Urban/Rural, Education, Gender, Insurance Type, Race/Ethnicity, BMI (Body Mass Index), Community Risk Score, and Citizenship
The "Overall Variability in Access-to-Transplant Score (ATS)" typically represents the average or overall level of variability in access across all waitlisted kidney candidates. It provides a general assessment of the fairness of the transplantation system in terms of granting access to deceased donor kidneys
The disparities in access to kidney transplants significantly decreased after the introduction of the Kidney Allocation System (KAS) in 2014. During this period, the overall variability in kidney transplant access, as measured by the Access-to-Transplant Score (ATS) standard deviation, decreased from approximately 1.69 to 1.29 Prior to KAS, there may have been unfairness in how kidneys were assigned to candidates. With the introduction of KAS, the goal was to make the allocation process more fair and equal by considering factors like medical urgency, compatibility, and waiting time. As a result, its indicating a more equal distribution of available organs among the candidates on the waiting list.
![Screenshot 2023-05-27 at 10 44 54 PM](https://github.com/mwsierzega/Project3/assets/123790798/f3f5393a-1d73-45da-b9ee-4306e15df678)

On the other hand, "Variability in Access-to-Transplant Scores (ATS) Among Waitlisted Kidney Candidates" refers to the specific range of ATS values observed among individual candidates on the waiting list. It highlights the differences in access and the potential disparities that exist among different individuals or subgroups.
These measures are important in monitoring and evaluating the effectiveness of transplantation policies and allocation systems in ensuring equitable access to kidney transplants for all eligible candidates, regardless of their demographic or medical characteristics.
The most noteworthy risk-adjusted differences in access to kidney transplants correspond to five key factors: • Donation service area, or DSA • Calculated panel reactive antibodies, or CPRA • Blood type • Prior kidney transplant • Diagnosis

![Screenshot 2023-05-27 at 10 45 02 PM](https://github.com/mwsierzega/Project3/assets/123790798/997a7fa8-937f-426c-8922-2c060601ae45)


## National Kidney Donors 
Overall Increasing Trend: Over the 10-year period from 2013 to 2022, there is an overall increasing trend in the number of National Kidney Donors. The data shows a positive percentage change (pct_chg) in most years, indicating a general upward trajectory. This suggests a growing willingness among individuals to donate kidneys and an increased awareness of the importance of organ donation.
![Screenshot 2023-05-27 at 10 45 12 PM](https://github.com/mwsierzega/Project3/assets/123790798/39a84f09-8616-4ac3-9721-903d4d19142b)

## National Kidney Transplants
The number of national kidney transplants has generally shown an increasing trend over the years. From 1988 to 2022, the number of kidney transplants has consistently risen, indicating a positive trend in organ transplantation.
Although there may be some year-to-year variations, the overall trend exhibits steady growth. This suggests that efforts in organ donation and transplantation programs, advancements in medical technology, and increased awareness about kidney donation have contributed to a continuous rise in transplant procedures.
![Screenshot 2023-05-27 at 10 46 36 PM](https://github.com/mwsierzega/Project3/assets/123790798/c15e50ee-8478-4070-baf2-2271d860d3bf)

---
## Kathleen - Cleaning, Database
---
---
## Vidul - Webpage
---
