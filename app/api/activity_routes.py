from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Activity

activity_routes = Blueprint('activities', __name__)


@activity_routes.route('/')
@login_required
def get_all_activities():
    """
    Query for all activites and returns them in a list of activity dictionaries
    """
    activities = Activity.query.all()
    return {'activites': [activity.to_dict() for activity in activities]}


@activity_routes.route('/<int:activity_id>')
@login_required
def get_activity(activity_id):
    """
    Query for an activity by id and returns that activity in a dictionary
    """
    trip = Activity.query.get(activity_id)
    return trip.to_dict()