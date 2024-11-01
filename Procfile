release: python manage.py makemigrations && python manage.py migrate
web: gunicorn GCNA_db.wsgi --log-file=-
