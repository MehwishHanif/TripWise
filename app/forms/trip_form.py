from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, DateField, BooleanField
from wtforms.validators import DataRequired, Length, ValidationError


def end_date_after_start_date(form, field):
    """
    Custom validator to ensure end date is after start date.
    """
    if form.start_date.data and form.end_date.data:  
        if form.end_date.data <= form.start_date.data: # changed from < to <= to not allow same day trips
            raise ValidationError("End date must be after start date.")
        

class TripForm(FlaskForm):
    name = StringField("Trip Name", validators=[DataRequired(), Length(max=100)])
    destination = StringField("Destination", validators=[DataRequired(), Length(max=255)])
    description = TextAreaField("Description", validators=[Length(max=500)]) # Match model
    start_date = DateField("Start Date", format="%Y-%m-%d", validators=[DataRequired()])
    end_date = DateField("End Date", format="%Y-%m-%d", validators=[DataRequired(), end_date_after_start_date]) # Added custom validator
    is_private = BooleanField("Is Private")