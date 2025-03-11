# TripWise

TripWise is an application designed to help users plan, organize, and track their travel itineraries. It provides a centralized platform to store essential trip details, and access travel information, ensuring a smooth and stress-free travel experience. In the future, it will also provide collaborative features for group trips and personalized recommendations based on travel history.

🔭 [Click here to visit the TripWise website!](https://trip-wise-hvsp.onrender.com/)

## Tech Stack

**Frameworks and libraries:**

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/> <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=yellow" alt="Python"/> <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/> <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux"/> <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" alt="Flask"/> <img src="https://img.shields.io/badge/SQLAlchemy-E94B3C?style=for-the-badge&logo=sqlalchemy&logoColor=white" alt="SQLAlchemy"/> <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"/>

**Database:**

<img src="https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL"/> <img src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite"/>

**Hosting:**

<img src="https://img.shields.io/badge/Render-4682B4?style=for-the-badge&logo=render&logoColor=white" alt="Render"/>

## TripWise Wiki

For more details on the architecture of TripWise, visit TripWise's wiki pages:

* [Database Schema](https://github.com/MehwishHanif/TripWise/wiki/DB-Schema)
* [Features List](https://github.com/MehwishHanif/TripWise/wiki/MVP's-Feature-List)
* [Wireframe](https://github.com/MehwishHanif/TripWise/wiki/Wireframes)
* [User Stories](https://github.com/MehwishHanif/TripWise/wiki/User-Stories)


## TripWise UI 

### Welcome Page

* **Overview:** Displays a welcome message and prompts users to log in or sign up.
* **User-Friendly Interface:** Clean and intuitive design ensures a seamless user experience.


![Welcome Page](https://github.com/user-attachments/assets/cb9afdcf-aee9-48cd-8efc-26c7fa5b0d24)


### Upcoming Trips

* **Trip Management:** The landing page provides a quick overview of upcoming trips. Users can view and manage their upcoming trips, including dates, destinations, and key details.
* **At-a-Glance Information:** Quick access to essential information about each trip.


![Upcoming Trips](https://github.com/user-attachments/assets/94a739d2-c90b-44f4-a1f7-9f510293dc52)


### Past Trips

* **Trip History:** Users can review and reminisce about their past adventures.
* **Record Keeping:** Keeps a history of travel experiences for future reference.


![Past Trips](https://github.com/user-attachments/assets/a8173780-fb5a-4910-9237-13b5a207a66b)


### Trip Details

* **Comprehensive Trip Information:** Detailed view of each trip, including itinerary.
* **Centralized Information:** All trip-related details in one convenient place.


![Trip Details](https://github.com/user-attachments/assets/a4ffc874-17c1-44ae-97a7-4b851c702cab)


### Trip Activities List

* **Activity Planning:** Users can plan and manage their trip activities, ensuring a well-organized itinerary.
* **Detailed Activity Management:** Tracks specific activities, times, and locations.


![Trip Activities List](https://github.com/user-attachments/assets/ab78fa19-3eed-4a3f-96a9-ea34b57035c9)


## Installation 

If you want to run TripWise locally, follow these steps:

## Getting started

1. Clone this repository (only this branch).

2. Install dependencies.

   ```bash
   pipenv install -r requirements.txt
   ```

3. Create a __.env__ file based on the example with proper settings for your
   development environment.

4. Make sure the SQLite3 database connection URL is in the __.env__ file.

5. This starter organizes all tables inside the `flask_schema` schema, defined
   by the `SCHEMA` environment variable.  Replace the value for
   `SCHEMA` with a unique name, **making sure you use the snake_case
   convention.**

6. Get into your pipenv, migrate your database, seed your database, and run your
   Flask app:

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

7. To run the React frontend in development, `cd` into the __react-vite__
   directory and run `npm i` to install dependencies. Next, run `npm run build`
   to create the `dist` folder. The starter has modified the `npm run build`
   command to include the `--watch` flag. This flag will rebuild the __dist__
   folder whenever you change your code, keeping the production version up to
   date.

