from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime, timezone

class Trip(db.Model):
    __tablename__ = "trips"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id"), ondelete="CASCADE"), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    destination = db.Column(db.String(255), nullable=False)
    start_date = db.Column(db.Date, nullable=False)
    end_date = db.Column(db.Date, nullable=False)
    description = db.Column(db.String(500))
    is_private = db.Column(db.Boolean, default=True)  # Default is a private trip
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))
    updated_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))

    # Relationships
    user = db.relationship("User", back_populates="trips")
    activities = db.relationship("Activity", back_populates="trip", cascade="all, delete-orphan")
