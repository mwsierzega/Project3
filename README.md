# Project3

For the Census data by age, the male and female totals had to be combined, as we are not looking at that data separated by gender. The Census csv was therefore edited to reflect this.

We had to group ages differently from the Census data. 
Since Census groups by:
	•	Under 5 years
	•	5 to 9 years
	•	10-14 years
	•	15-17 years
	•	18 & 19 years
	•	20 -24 years
	•	25-29 years
	•	30-34 years
	•	35-44 years
	•	45-54 years
	•	55-64 years
	•	65-74 years
	•	75-84 years
	•	85 years and older

OPTN groups ages by:
	•	Under 1 year
	•	1-5 years
	•	6-10 years
	•	11-17 years
	•	18-34 years
	•	35-49 years
	•	50-64 years
	•	65 and older

It seemed best to follow OPTN age groups as often as possible, so the combination of the JOINT data age groups are:
	•	0-5 years
	•	6-10 years
	•	11-17 years
	•	18-34 years
	•	35-49 years
	•	50-64 years
	•	65 and older

This requires OPTN age groups “< 1 Year” to be combined with age group “1-5 years” to make a “0-5 years” age group.

This requires the following Census age groups to be combined into one JOINT age group “18-34 years”:
	•	18 & 19 years
	•	20 -24 years
	•	25-29 years
	•	30-34 years
AND
The following Census groups to be combined into one group JOINT age group “65 and older”:
	•	65-74 years
	•	75-84 years
	•	85 years and older

Additionally this requires some mathematical calculations to be done on the remaining Census age groups to match the OPTN age groups. This was done as follows:
	•	For the JOINT age group “0-5 years”, the Census group “5 to 9 years” was split off 1/5 of its total (for age 5) and added to the “0-5 years” age group. This is assuming that birth and survival rates of children age 5 is about the same as ages 6, 7, 8, and 9.
	•	For the JOINT Age group “6-10 years” the Census group was calculated as follows:
	⁃	 “5 to 9 years” was split 4/5 of its total (for ages 6, 7, 8, 9)
	⁃	“10-14 years” was split 1/5 of its total (for age 10)
	⁃	These were added together to make the JOINT age group “6-10 years”
	•	For the JOINT Age group “11-17 years” the Census group was calculated as follows:
	⁃	“10-14 years” was split 4/5 of its total (for ages 11, 12, 13, 14)
	⁃	Added to group “15-17 years” to get the “11-17 years” JOINT age group.
	•	For the JOINT AGE group “35-49 years” the Census group was calculated as follows:
	⁃	“ 35 to 44 years” age group 
	⁃	Added to 0.5 of the “45 to 54 years” since that age group includes 5 of the 10 years needed.
	•	For the JOINT Age group “50-64 years” the Census group was calculated as follows:
	⁃	0.5 of the “45 to 54 years” age group since that age group includes 5 of the 10 years needed
	⁃	Added to age group “55 to 64 years”

The following ethnicity data had to be organized so that the Census ethnicity data matched the OPTN ethnicity data:
OPTN ethnicity data is categorized as follows:
	•	All Ethnicities
	•	White
	•	Black
	•	Hispanic/Latino
	•	Asian
	•	American Indian/Alaska Native
	•	Pacific Islander
	•	Multiracial

The Census data is categorized as follows:
	•	Total
	•	Hispanic or Latino
	•	White alone
	•	Black or African American alone
	•	American Indian and Alaska Native alone
	•	Asian alone
	•	Native Hawaiian and Other Pacific Islander alone
	•	Some Other Race alone
	•	And then several subcategories under:
	⁃	Population of two or more races:
	⁃	Population of three races:
	⁃	Population of four races:
	⁃	Population of five races:
	⁃	 Population of six races:

To follow the race categories of the OPTN data, the Census category “Some Other Race alone” will be eliminated as we have no way to understand the breakdown of this data. In addition, the category and subsequent subcategories of the Population of two or more races through six races will be combined to create one category “Multiracial”.

The following are the data charts we are interested in looking at:
	•	Globally: Wait Times, all ages, all ethnicities, all Patient States, broken down by state - bar chart