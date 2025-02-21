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
    }
]