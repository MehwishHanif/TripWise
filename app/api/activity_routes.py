from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Activity, db
from app.forms import ActivityForm

activity_routes = Blueprint('activities', __name__)


@activity_routes.route('')
@login_required
def get_all_activities():
    """
    Query for all activites and returns them in a list of activity dictionaries
    """
    print("GET ACTIVITIES")
    activities = Activity.query.all()
    return {'activities': [activity.to_dict() for activity in activities]}


@activity_routes.route('/<int:activity_id>')
@login_required
def get_activity(activity_id):
    """
    Query for an activity by id and returns that activity in a dictionary
    """
    trip = Activity.query.get(activity_id)
    return trip.to_dict()


@activity_routes.route("/<int:activity_id>", methods=["PUT"])
@login_required
def update_activity(activity_id):
    """
    Updates an activity and returns it in a dicitionary
    """
    activity = Activity.query.get(activity_id)
    if not activity:
        return jsonify({"error": "Activity not found"}), 404

    form = ActivityForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate():
        activity.name = form.name.data
        activity.category = form.category.data
        activity.location = form.location.data
        activity.start_time = form.start_time.data
        activity.end_time = form.end_time.data
        activity.notes = form.notes.data
        db.session.add(activity)
        db.session.commit()
        return activity.to_dict()
    else:
        return jsonify({"errors": form.errors}), 400


@activity_routes.route("/<int:activity_id>", methods=["DELETE"])
@login_required
def delete_activity(activity_id):
    """
    Deletes an Activity and returns a success message
    """
    activity = Activity.query.get(activity_id)
    if not activity:
        return jsonify({"error": "Activity not found"}), 404

    db.session.delete(activity)
    db.session.commit()
    return jsonify({"message": "Activity deleted successfully"})