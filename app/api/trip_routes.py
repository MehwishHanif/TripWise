from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Trip, db, Activity
from app.forms import TripForm, ActivityForm

trip_routes = Blueprint('trips', __name__)


@trip_routes.route('/<int:trip_id>')
@login_required
def get_trip(trip_id):
    """
    Query for a trip by id and returns that trip in a dictionary
    """
    trip = Trip.query.get(trip_id)
    return trip.to_dict()


@trip_routes.route('')
@login_required
def get_all_trips():
    """
    Query for all trips returns them in a list of trip dictionaries
    """
    trips = Trip.query.all()
    return {'trips': [trip.to_dict() for trip in trips]}


@trip_routes.route("/<int:trip_id>", methods=["DELETE"])
@login_required
def delete_trip(trip_id):
    """
    Delete a trip with the given id and returns a success message
    """
    trip = Trip.query.get(trip_id)
    if not trip:
        return jsonify({"error": "Trip not found"}), 404

    db.session.delete(trip)
    db.session.commit()
    return jsonify({"message": "Trip deleted successfully"})



@trip_routes.route("/", methods=["POST"])
@login_required
def create_trip():
    """
    Creates a new trip and returns it in a dicitionary
    """
    print("in POST Trips")
    form = TripForm()  
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        trip = Trip(
            name=form.name.data,
            destination=form.destination.data,
            description=form.description.data,
            start_date=form.start_date.data,
            end_date=form.end_date.data,
            is_private=form.is_private.data,
            user_id=current_user.id
        )
        try:
            db.session.add(trip)
            db.session.commit()
            return trip.to_dict(), 201
        except Exception as e:
            db.session.rollback()
            return jsonify({"errors": {"general": "An error occurred while creating the trip."}}), 500 
    else:
        return jsonify({"errors": form.errors}), 400



@trip_routes.route("/<int:trip_id>", methods=["PUT"])
@login_required
def update_trip(trip_id):
    """
    Updates a trip and returns it in a dicitionary
    """
    trip = Trip.query.get(trip_id)
    if not trip:
        return jsonify({"error": "Trip not found"}), 404

    form = TripForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate():
        trip.name = form.name.data
        trip.destination = form.destination.data
        trip.description = form.description.data
        trip.start_date = form.start_date.data
        trip.end_date = form.end_date.data
        trip.is_private = form.is_private.data
        db.session.add(trip)
        db.session.commit()
        return trip.to_dict()
    else:
        return jsonify({"errors": form.errors}), 400


@trip_routes.route('/<int:trip_id>/activities', methods=[ 'POST'])
@login_required 
def new_activity(trip_id):
    """
    Create a new activity for a trip and returns it in a dicitionary
    """
    form = ActivityForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        new_activity = Activity(
            name=form.name.data,
            category=form.category.data,
            location=form.location.data,
            start_time=form.start_time.data,
            end_time=form.end_time.data,
            notes=form.notes.data,
            trip_id=trip_id
        )
        try:
            db.session.add(new_activity)
            db.session.commit()
            return new_activity.to_dict(), 201
        except Exception as e:
            db.session.rollback()
            return jsonify({"errors": {"general": "An error occurred while creating the activity."}}), 500 
    else:
        return jsonify({"errors": form.errors}), 400
