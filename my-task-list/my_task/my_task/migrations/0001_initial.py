# Generated by Django 3.1.2 on 2024-01-01 18:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='tasch',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titre', models.CharField(max_length=100)),
                ('Descriptos', models.TextField()),
                ('slugs', models.SlugField(max_length=20)),
                ('Date_de_creation', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]