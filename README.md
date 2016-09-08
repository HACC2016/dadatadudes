# Scope of work - Homeless Application

### Goal:
Create a software solution that will allow users to collect homeless information (specifically in the field), send that data to a centralized database, to then be allowed to render this data on a dashboard for users to take action on.

### Solution:
- Form - Survey / data collection
  - Native application for tablet or mobile
  - Collect client information based on what we've discussed (native application will allow you to do this in the field and not worry about wifi)
- Dashboard - Analytics system
  - Web application that anyone with the right credentials can log into
  - It will have two separate views
     - Risk view:
        - Similar to an excel table it will render all clients individually by rows. It will have all information you collect from the surveys but it will also have logic running to determine their "risk score" based on the VI-SPDAT index. (Also looking to take logic from SPDAT for families, individuals and youth as well - but that might be in the future).
     - Map view:
        - This will render a google map and zoom in to the island / county or state of your choice
        - Will show districts and summarize density based on # of total homeless with options to filter by district avg risk level, families and youth

### Features:
 - Form
    - Able to collect data without wifi connection
    - Two view options: Point-in-time and VI-SPDAT forms
    - Unique identifier to call database after being entered to see if data already exist in database. If yes, then auto-fill form out with data elements
    - Submit form
    - Scope-creep
       - CMS to edit form fields
 - Dashboard
    - Render two views: Risk and Map
       - Risk view
          - Render all client information
          - Able to click on specific client and get risk score
          - Scope-creep
             - Allow user to take action on client within this view
       - Map view
          - Render earth map and maybe some graphs
          - Zoom into area of focus (broken down by districts)
          - Visualize first by total number of homeless
          - Filter by: Avg total risk, families and children
          - Scope-creep
             - Render graphs as well

### Timeline
  - Only 3 fucking weeks!

### Stack
 - Form
   - React-native
 - Dashboard
   - React
 - Database
   - MongoDB?
   - Datomic? (Time series)
   - Neo4j (graph db for time series)
