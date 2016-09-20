# Homeless Application

### Stack
 - Form
   - React-native
 - Database
   - MongoDB
   - Graphql

## Development (Standup Locally)
1. Have [Node](https://nodejs.org/) installed locally.
2. Have [Android Studio](https://developer.android.com/studio/install.html) installed locally.
3. Have access to an Android device or install [GenyMotion](https://www.genymotion.com/account/login/) to your computer and setup a virtual device.

### In your command line do the following
1. `npm install`

### Standup Locally
1. Connect Android device or run Virtual Device.
2. `npm start` to get local node server running.
3. `react-native run-android` to build your application.

### Goal:
Create a software solution that will allow users to collect homeless information (specifically in the field), send that data to a centralized database, to then be allowed to render this data on a dashboard for users to take action on.

### Solution:
- Form - Survey / data collection
  - Native application for tablet or mobile
  - Collect client information based on what we've discussed (native application will allow you to do this in the field and not worry about wifi)

### Features:
 - Form
    - Able to collect data without wifi connection
    - Two view options: Point-in-time and VI-SPDAT forms
    - Unique identifier to call database after being entered to see if data already exist in database. If yes, then auto-fill form out with data elements
    - Submit form
    - Scope-creep
       - CMS to edit form fields

### Built by Da Dada Dudes
- Bryan Butteling
- Alex Anich
- Kawika Kekahuna
- Brock Lanoza