# Generated by Django 4.2.1 on 2024-06-18 17:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('gcna_data', '0031_alter_citrus_mango_trees_land_id_n0_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='nutmeg_land',
            name='parish',
        ),
        migrations.RemoveField(
            model_name='nutmeg_land',
            name='tenurship',
        ),
        migrations.RemoveField(
            model_name='nutmeg_land',
            name='village',
        ),
    ]
