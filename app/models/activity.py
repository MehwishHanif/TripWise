from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime, timezone
from enum import Enum


class ActivityCategory(Enum):
    SIGHTSEEING = "Sightseeing"
    DINING = "Dining"
    ADVENTURE = "Adventure"
    NIGHTLIFE = "Nightlife"
    RELAXATION = "Relaxation"
    CULTURE = "Culture"
    SHOPPING = "Shopping"
    OUTDOOR = "Outdoor"
    ENTERTAINMENT = "Entertainment"
    SPORTS = "Sports"
    WELLNESS = "Wellness"
    TRANSPORTATION = "Transportation"
    WORK_STUDY = "Work & Study"
    PHOTOGRAPHY = "Photography"
    SOCIAL = "Social"
    OTHER = "Other"


class Activity(db.Model):
    __tablename__ = "activities"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    trip_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("trips.id"), ondelete="CASCADE"), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    category = db.Column(db.Enum(ActivityCategory), nullable=False, default=ActivityCategory.OTHER)
    location = db.Column(db.String(255))
    start_time = db.Column(db.DateTime)
    end_time = db.Column(db.DateTime)
    notes = db.Column(db.String(500))
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))
    updated_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))

    # Relationship
    trip = db.relationship("Trip", back_populates="activities")

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'tripId': self.trip_id,
            'category': self.category.value if self.category else None,
            'location': self.location,
            'notes': self.notes,
            'startTime': self.start_time.isoformat() if self.start_time else None,
            'endTime': self.end_time.isoformat() if self.end_time else None,
            'createdAt':self.created_at.isoformat() if self.created_at else None,
            'updatedAt': self.updated_at.isoformat() if self.updated_at else None
        }