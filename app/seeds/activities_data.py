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
    },
    # Grand Canyon Adventure (User 2 - May 2023)
    {
        'trip_id': 9,
        'name': 'Hiking South Rim',
        'category': 'Adventure',
        'location': 'Grand Canyon National Park',
        'start_time': datetime.fromisoformat('2023-05-11T07:00:00').replace(tzinfo=timezone.utc),
        'end_time': datetime.fromisoformat('2023-05-11T12:00:00').replace(tzinfo=timezone.utc),
        'notes': 'Carry plenty of water and snacks.'
    },
    {
        'trip_id': 9,
        'name': 'Colorado River Rafting',
        'category': 'Sports',
        'location': 'Colorado River',
        'start_time': datetime.fromisoformat('2023-05-12T09:00:00').replace(tzinfo=timezone.utc),
        'end_time': datetime.fromisoformat('2023-05-12T15:00:00').replace(tzinfo=timezone.utc),
        'notes': 'Book tour in advance.'
    },

    # Rome History Tour (User 2 - August 2023)
    {
        'trip_id': 10,
        'name': 'Colosseum & Roman Forum Tour',
        'category': 'Sightseeing',
        'location': 'Colosseum',
        'start_time': datetime.fromisoformat('2023-08-21T10:00:00').replace(tzinfo=timezone.utc),
        'end_time': datetime.fromisoformat('2023-08-21T13:00:00').replace(tzinfo=timezone.utc),
        'notes': 'Wear comfortable walking shoes.'
    },
    {
        'trip_id': 10,
        'name': 'Vatican City Tour',
        'category': 'Culture',
        'location': 'Vatican Museums',
        'start_time': datetime.fromisoformat('2023-08-23T14:00:00').replace(tzinfo=timezone.utc),
        'end_time': datetime.fromisoformat('2023-08-23T17:00:00').replace(tzinfo=timezone.utc),
        'notes': 'Buy tickets online to skip the queue.'
    },

    # Canadian Rockies Exploration (User 2 - October 2023)
    {
        'trip_id': 11,
        'name': 'Lake Louise Kayaking',
        'category': 'Sports',
        'location': 'Lake Louise',
        'start_time': datetime.fromisoformat('2023-10-06T09:00:00').replace(tzinfo=timezone.utc),
        'end_time': datetime.fromisoformat('2023-10-06T11:00:00').replace(tzinfo=timezone.utc),
        'notes': 'Bring a waterproof bag for valuables.'
    },
    {
        'trip_id': 11,
        'name': 'Banff Gondola Ride',
        'category': 'Sightseeing',
        'location': 'Banff National Park',
        'start_time': datetime.fromisoformat('2023-10-07T15:00:00').replace(tzinfo=timezone.utc),
        'end_time': datetime.fromisoformat('2023-10-07T17:00:00').replace(tzinfo=timezone.utc),
        'notes': 'Enjoy breathtaking mountain views.'
    },

    # Barcelona City Escape (User 3 - June 2022)
    {
        'trip_id': 12,
        'name': 'Sagrada Familia Visit',
        'category': 'Sightseeing',
        'location': 'Barcelona, Spain',
        'start_time': datetime.fromisoformat('2022-06-16T10:00:00').replace(tzinfo=timezone.utc),
        'end_time': datetime.fromisoformat('2022-06-16T12:00:00').replace(tzinfo=timezone.utc),
        'notes': 'Book tickets in advance.'
    },
    {
        'trip_id': 12,
        'name': 'Tapas & Wine Tour',
        'category': 'Dining',
        'location': 'Gothic Quarter',
        'start_time': datetime.fromisoformat('2022-06-17T19:00:00').replace(tzinfo=timezone.utc),
        'end_time': datetime.fromisoformat('2022-06-17T22:00:00').replace(tzinfo=timezone.utc),
        'notes': 'Try authentic Spanish tapas.'
    },

    # Great Wall of China Expedition (User 3 - Sept 2022)
    {
        'trip_id': 13,
        'name': 'Great Wall Hike - Mutianyu Section',
        'category': 'Adventure',
        'location': 'Mutianyu, Beijing',
        'start_time': datetime.fromisoformat('2022-09-11T08:00:00').replace(tzinfo=timezone.utc),
        'end_time': datetime.fromisoformat('2022-09-11T12:00:00').replace(tzinfo=timezone.utc),
        'notes': 'Wear hiking boots.'
    },
    {
        'trip_id': 13,
        'name': 'Beijing Duck Dinner',
        'category': 'Dining',
        'location': 'Beijing, China',
        'start_time': datetime.fromisoformat('2022-09-12T19:00:00').replace(tzinfo=timezone.utc),
        'end_time': datetime.fromisoformat('2022-09-12T21:00:00').replace(tzinfo=timezone.utc),
        'notes': 'Famous Peking duck restaurant.'
    },

    # Amazon Rainforest Adventure (User 3 - Nov 2022)
    {
        'trip_id': 14,
        'name': 'Amazon River Canoeing',
        'category': 'Adventure',
        'location': 'Amazon River',
        'start_time': datetime.fromisoformat('2022-11-06T07:00:00').replace(tzinfo=timezone.utc),
        'end_time': datetime.fromisoformat('2022-11-06T10:00:00').replace(tzinfo=timezone.utc),
        'notes': 'Look out for wildlife!'
    },
    {
        'trip_id': 14,
        'name': 'Night Jungle Safari',
        'category': 'Outdoor',
        'location': 'Amazon Rainforest',
        'start_time': datetime.fromisoformat('2022-11-07T21:00:00').replace(tzinfo=timezone.utc),
        'end_time': datetime.fromisoformat('2022-11-07T23:00:00').replace(tzinfo=timezone.utc),
        'notes': 'Bring a flashlight and insect repellent.'
    }
]