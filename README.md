
# meeting_reservations
Given a file with reservations, accept or reject each one depending of availability of two rooms

# How to install
In order to install please follow the next instructions:
1. run npm install

# How to test
There is a folder call ```__tests__``` where you can put your tests in order to run them.
Once installed the application please run ```npm run test```

# How to use
If you want to use, first you must to create a file with the follow structure: 
- name
- start date
- end date 

The previous structure must be separeted by "," (as a CSV file)
You will find an example of the file in the ```meeting_reservations``` folder

```
Nancy Williams,09:30,10:30
Emily Thompson,07:35,09:25
Jassiel Ritz,08:30,09:30
Henry,07:15,08:31
```
It's important in this version, that the hours comes in format "HH:MM"
Once prepared the file you must run ```node src/index.js --path_file="/PATH_FILE/MY_FILE.txt"```

The system will print for each line the status of the meeting request, indicating if was accepted or rejected.
As an example:
```
The meeting was accepted details: at room 1, meeting info: name : Nancy Williams starts at 09:30 - end at: 10:30
The meeting was accepted details: at room 1, meeting info: name : Emily Thompson starts at 07:35 - end at: 09:25
The meeting was accepted details: at room 2, meeting info: name : Jassiel Ritz starts at 08:30 - end at: 09:30
The meeting was rejected details: there are meetings already scheduled, meeting info: name : Henry starts at 07:15 - end at: 08:31
end processing file
```
# Annotations
In order to run it you must have the latest version of nodejs.

