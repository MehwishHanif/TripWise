from app.models import db, Activity, ActivityCategory, environment, SCHEMA
from sqlalchemy.sql import text
from .activities_data import activities_data


# Adds a demo user, you can add other users here if you want
def seed_activities():
    for activity in activities_data:
        new_activity = Activity(
            trip_id=activity['trip_id'],
            name=activity['name'],
            category=ActivityCategory(activity['category']),  # Convert string to Enum
            location=activity['location'],
            start_time=activity['start_time'],
            end_time=activity['end_time'],
            notes=activity['notes']
        )
        db.session.add(new_activity)

    db.session.commit()


def undo_activities():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.activities RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM activities"))
        
    db.session.commit()