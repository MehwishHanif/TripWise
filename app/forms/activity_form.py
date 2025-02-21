from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, SelectField, DateTimeField
from wtforms.validators import DataRequired, Length, ValidationError
from app.models import ActivityCategory


def end_time_after_start_time(form, field):
    """Custom validator to ensure end time is strictly after start time."""
    if form.start_time.data and form.end_time.data:
        if form.end_time.data <= form.start_time.data:  
            raise ValidationError("End time must be after start time.")  


class ActivityForm(FlaskForm):
    name = StringField("Activity Name", validators=[DataRequired(), Length(max=100)])
    category = SelectField("Category", choices=[(cat.name, cat.value) for cat in ActivityCategory], validators=[DataRequired()])
    location = StringField("Location", validators=[Length(max=255)])
    start_time = DateTimeField("Start Time", format="%Y-%m-%dT%H:%M:%S", validators=[DataRequired()]) 
    end_time = DateTimeField("End Time", format="%Y-%m-%dT%H:%M:%S", validators=[DataRequired(), end_time_after_start_time]) 
    notes = TextAreaField("Notes", validators=[Length(max=500)]) 