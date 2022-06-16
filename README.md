# Parking Tracker, live demo = [here](https://naftalib.github.io/parking-tracker/)

# About

This app is a data table that recieved a JSON object containing parking entries by license plate and a time stamp for time in and time aout.

The challenge was to convert that data according to the following format;

The data table should be sorted descending by the time the car exited the garage. The table should display a header in the order described below with license plate as the left most column. Price should be rounded to the nearest cent, duration is measured in hours and rounded to the nearest hundreth, in and out time should be pretty printed in the following date format: `M/DD/YYYY h:mm:mm AM/PM`. The table should be styled to taste.

Here is an example in Markdown of how the table should be organized.

| LICENSE | PRICE | DURATION | IN | OUT |
| 9SC8DK | 2.53 | 1.85 | 3/13/2017 10:09:00 PM | 3/13/2017 11:59:35 PM |
| UJR0K4 | 28.42 | 10.51 | 3/13/2017 1:29:00 PM | 3/13/2017 11:59:17 PM
