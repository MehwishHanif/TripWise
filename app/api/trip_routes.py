from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Trip

trip_routes = Blueprint('trips', __name__)


@trip_routes.route('/<int:trip_id>')
@login_required
def get_trip(trip_id):
    """
    Query for a trip by id and returns that trip in a dictionary
    """
    trip = Trip.query.get(trip_id)
    return trip.to_dict()


@trip_routes.route('/')
@login_required
def get_all_trips():
    """
    Query for all trips returns them in a list of trip dictionaries
    """
    trips = Trip.query.all()
    return {'trips': [trip.to_dict() for trip in trips]}