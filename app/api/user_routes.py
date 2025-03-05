from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import User, Trip

user_routes = Blueprint('users', __name__)


@user_routes.route('')
@login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:user_id>/trips')
@login_required
def get_user_trips(user_id):
    """
    Query for all trips of the current user and returns them in a list of trip dictionaries
    """
    if user_id != current_user.id:
        return jsonify({'error': 'Unauthorized access to other users\' trips'}), 403
    
    trips = Trip.query.filter(Trip.user_id==user_id).all()

    return {'trips': [trip.to_dict() for trip in trips]}