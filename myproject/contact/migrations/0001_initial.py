# Generated by Django 4.2.16 on 2024-10-13 07:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='contacts',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('FirstName', models.CharField(max_length=100)),
                ('LastName', models.CharField(max_length=100)),
                ('Email', models.CharField(max_length=100)),
                ('Numbers', models.FloatField()),
                ('Topics', models.CharField(max_length=100)),
                ('Discretion', models.TimeField()),
            ],
        ),
    ]
