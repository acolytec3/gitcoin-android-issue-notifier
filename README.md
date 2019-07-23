# Gitcoin Android Issue Notifier

## Requirements

Have Termux, Termux-API, and Tasker installed on your phone

## Usage

1. Open termux
2. `git clone https://github.com/acolytec3/gitcoin-android-issue-notifier.git`
3. `npm install`
4. Change the directory referenced in line 6 of index.js to whatever directory the script is installed in
5. Change to the directory your script is installed in
6. `node index.js` to test out functionality

## Automating the script

1. `cp taskergitcoinIssues.sh ~/.termux/tasker`
2. Create a new tasker task similar to what's pictured.
3. Set up a tasker Time profile that runs on a regular basis that fires the task you created in step #2.  Just don't be a 
   jerk and set it to ping every second and consume all of Gitcoin's bandwidth.
4. Tap on any notification and a new browser window will open on the issue page on Gitcoin
