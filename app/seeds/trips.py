from app.models import db, Trip, environment, SCHEMA
from sqlalchemy.sql import text
from .trips_data import trips_data
from datetime import datetime


# Adds a demo user, you can add other users here if you want
def seed_trips():
    for trip in trips_data:
        new_trip = Trip(
            user_id=trip['user_id'],
            name=trip['name'],
            destination=trip['destination'],
            start_date=datetime.strptime(trip['start_date'], '%Y-%m-%d').date(),
            end_date=datetime.strptime(trip['end_date'], '%Y-%m-%d').date(),
            is_private=trip['is_private']
        )
        db.session.add(new_trip)

    db.session.commit()


def undo_trips():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.trips RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM trips"))
        
    db.session.commit()