from datetime import datetime, timezone

activities_data = [
    # Hawaii Vacation (Past Trip)
    {
        'trip_id': 1,
        'name': 'Snorkeling',
        'category': 'Adventure',
        'location': 'Maui Beach',
        'start_time': datetime.fromisoformat('2024-06-11T10:00:00').replace(tzinfo=timezone.utc) ,
        'end_time': datetime.fromisoformat('2024-06-11T12:00:00').replace(tzinfo=timezone.utc) ,
        'notes': 'Bring sunscreen.'
    },
    {
        'trip_id': 1,
        'name': 'Beach Party',
        'category': 'Nightlife',
        'location': 'Waikiki Beach',
        'start_time': datetime.fromisoformat('2024-06-12T20:00:00').replace(tzinfo=timezone.utc) ,
        'end_time': datetime.fromisoformat('2024-06-12T23:00:00').replace(tzinfo=timezone.utc) ,
        'notes': 'Live music and BBQ.'
    },
    # Paris Getaway (Upcoming Trip)
    {
        'trip_id': 2,
        'name': 'Eiffel Tower Visit',
        'category': 'Sightseeing',
        'location': 'Eiffel Tower',
        'start_time': datetime.fromisoformat('2025-01-12T10:00:00').replace(tzinfo=timezone.utc) ,
        'end_time': datetime.fromisoformat('2025-01-12T12:00:00').replace(tzinfo=timezone.utc) ,
        'notes': 'Book tickets in advance.'
    },
    {
        'trip_id': 2,
        'name': 'Seine River Cruise',
        'category': 'Entertainment',
        'location': 'Seine River',
        'start_time': datetime.fromisoformat('2025-01-13T18:00:00').replace(tzinfo=timezone.utc) ,
        'end_time': datetime.fromisoformat('2025-01-13T20:00:00').replace(tzinfo=timezone.utc) ,
        'notes': 'Dinner included.'
    },
    # Tokyo Adventure (Past Trip)
    {
        'trip_id': 3,
        'name': 'Shibuya Crossing Experience',
        'category': 'Sightseeing',
        'location': 'Shibuya',
        'start_time': datetime.fromisoformat('2024-07-06T15:00:00').replace(tzinfo=timezone.utc) ,
        'end_time': datetime.fromisoformat('2024-07-06T16:00:00').replace(tzinfo=timezone.utc) ,
        'notes': 'Try some local street food.'
    },
    {
        'trip_id': 3,
        'name': 'Mt. Fuji Tour',
        'category': 'Adventure',
        'location': 'Mt. Fuji',
        'start_time': datetime.fromisoformat('2024-07-07T07:00:00').replace(tzinfo=timezone.utc) ,
        'end_time': datetime.fromisoformat('2024-07-07T19:00:00').replace(tzinfo=timezone.utc) ,
        'notes': 'Pack warm clothes.'
    },
    # Sydney Escape (Upcoming Trip)
    {
        'trip_id': 4,
        'name': 'Bondi Beach Surfing',
        'category': 'Adventure',
        'location': 'Bondi Beach',
        'start_time': datetime.fromisoformat( '2025-03-05T09:00:00').replace(tzinfo=timezone.utc),
        'end_time': datetime.fromisoformat('2025-03-05T12:00:00').replace(tzinfo=timezone.utc) ,
        'notes': 'Surf lessons available.'
    },
    {
        'trip_id': 4,
        'name': 'Sydney Opera House Tour',
        'category': 'Culture',
        'location': 'Sydney Opera House',
        'start_time': datetime.fromisoformat( '2025-03-07T14:00:00').replace(tzinfo=timezone.utc),
        'end_time': datetime.fromisoformat( '2025-03-07T16:00:00').replace(tzinfo=timezone.utc),
        'notes': 'Pre-book tickets.'
    },
     # New York City Tour (May 10 - May 15, 2025)
    {
        'trip_id': 6,
        'name': 'Statue of Liberty & Ellis Island Tour',
        'category': 'Sightseeing',
        'location': 'Liberty Island',
        'start_time': datetime.fromisoformat('2025-05-11T09:00:00').replace(tzinfo=timezone.utc),
        'end_time': datetime.fromisoformat('2025-05-11T12:00:00').replace(tzinfo=timezone.utc),
        'notes': 'Book ferry tickets in advance.'
    },
    {
        'trip_id': 6,
        'name': 'Broadway Show - The Lion King',
        'category': 'Entertainment',
        'location': 'Minskoff Theatre',
        'start_time': datetime.fromisoformat('2025-05-11T19:00:00').replace(tzinfo=timezone.utc),
        'end_time': datetime.fromisoformat('2025-05-11T22:00:00').replace(tzinfo=timezone.utc),
        'notes': 'Arrive 30 minutes early.'
    },
    {
        'trip_id': 6,
        'name': 'Central Park Bike Ride',
        'category': 'Outdoor',
        'location': 'Central Park',
        'start_time': datetime.fromisoformat('2025-05-12T10:00:00').replace(tzinfo=timezone.utc),
        'end_time': datetime.fromisoformat('2025-05-12T12:00:00').replace(tzinfo=timezone.utc),
        'notes': 'Rent bikes near the entrance.'
    },
    {
        'trip_id': 6,
        'name': 'Metropolitan Museum of Art Tour',
        'category': 'Culture',
        'location': 'The Met',
        'start_time': datetime.fromisoformat('2025-05-12T13:00:00').replace(tzinfo=timezone.utc),
        'end_time': datetime.fromisoformat('2025-05-12T16:00:00').replace(tzinfo=timezone.utc),
        'notes': 'Self-guided audio tour available.'
    },
    {
        'trip_id': 6,
        'name': 'Empire State Building Night View',
        'category': 'Sightseeing',
        'location': 'Empire State Building',
        'start_time': datetime.fromisoformat('2025-05-14T20:00:00').replace(tzinfo=timezone.utc),
        'end_time': datetime.fromisoformat('2025-05-14T22:00:00').replace(tzinfo=timezone.utc),
        'notes': 'Great for night city views.'
    },
    {
        'trip_id': 6,
        'name': 'Food Tour in Little Italy & Chinatown',
        'category': 'Dining',
        'location': 'Little Italy & Chinatown',
        'start_time': datetime.fromisoformat('2025-05-15T12:00:00').replace(tzinfo=timezone.utc),
        'end_time': datetime.fromisoformat('2025-05-15T15:00:00').replace(tzinfo=timezone.utc),
        'notes': 'Try dumplings and cannoli.'
    },

    # Alaskan Adventure (Sept 5 - Sept 15, 2025)
    {
        'trip_id': 7,
        'name': 'Glacier Hike & Ice Climbing',
        'category': 'Adventure',
        'location': 'Matanuska Glacier',
        'start_time': datetime.fromisoformat('2025-09-06T08:00:00').replace(tzinfo=timezone.utc),
        'end_time': datetime.fromisoformat('2025-09-06T14:00:00').replace(tzinfo=timezone.utc),
        'notes': 'Wear waterproof gear.'
    },
    {
        'trip_id': 7,
        'name': 'Northern Lights Viewing',
        'category': 'Sightseeing',
        'location': 'Fairbanks, Alaska',
        'start_time': datetime.fromisoformat('2025-09-09T22:00:00').replace(tzinfo=timezone.utc),
        'end_time': datetime.fromisoformat('2025-09-09T23:59:00').replace(tzinfo=timezone.utc),
        'notes': 'Check aurora forecast.'
    },
    {
        'trip_id': 7,
        'name': 'Dog Sledding Adventure',
        'category': 'Outdoor',
        'location': 'Denali National Park',
        'start_time': datetime.fromisoformat('2025-09-12T10:00:00').replace(tzinfo=timezone.utc),
        'end_time': datetime.fromisoformat('2025-09-12T13:00:00').replace(tzinfo=timezone.utc),
        'notes': 'Meet champion sled dogs.'
    },

    # Bali Retreat (April 10 - April 20, 2026)
    {
        'trip_id': 8,
        'name': 'Sunrise Hike at Mount Batur',
        'category': 'Adventure',
        'location': 'Mount Batur',
        'start_time': datetime.fromisoformat('2026-04-11T03:30:00').replace(tzinfo=timezone.utc),
        'end_time': datetime.fromisoformat('2026-04-11T08:00:00').replace(tzinfo=timezone.utc),
        'notes': 'Bring warm clothes and a flashlight.'
    },
    {
        'trip_id': 8,
        'name': 'Balinese Cooking Class',
        'category': 'Dining',
        'location': 'Ubud',
        'start_time': datetime.fromisoformat('2026-04-13T10:00:00').replace(tzinfo=timezone.utc),
        'end_time': datetime.fromisoformat('2026-04-13T13:00:00').replace(tzinfo=timezone.utc),
        'notes': 'Learn to make traditional dishes.'
    },
    {
        'trip_id': 8,
        'name': 'Uluwatu Temple & Kecak Fire Dance',
        'category': 'Culture',
        'location': 'Uluwatu',
        'start_time': datetime.fromisoformat('2026-04-17T17:00:00').replace(tzinfo=timezone.utc),
        'end_time': datetime.fromisoformat('2026-04-17T19:00:00').replace(tzinfo=timezone.utc),
        'notes': 'Arrive early for sunset views.'
    }
]