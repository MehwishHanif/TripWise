from flask.cli import AppGroup
from .users import seed_users, undo_users
from .trips import seed_trips, undo_trips
from .activities import seed_activities, undo_activities

from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo 
        # command, which will  truncate all tables prefixed with 
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_activities()
        undo_trips()
        undo_users()
    seed_users()
    seed_trips()
    seed_activities()


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_activities()
    undo_trips()
    undo_users()
