from django.db import models
from django.contrib.postgres.fields import ArrayField

class Propiedad(models.Model):
    id = models.AutoField(primary_key=True)
    calle = models.CharField(max_length=255)
    colonia = models.CharField(max_length=255)
    estado = models.CharField(max_length=255)
    pais = models.CharField(max_length=255)
    ciudad = models.CharField(max_length=100, default='Sin especificar')
    descripcion = models.TextField(default='Sin especificar')
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    metros_cuadrados = models.IntegerField()
    imagen_url = models.CharField(max_length=255)
    imagenes_urls = models.JSONField(default=list, blank=True)  # Almacena múltiples URLs de imágenes
    cuartos = models.IntegerField(default=1)
    banos = models.IntegerField(default=1)
    habitacion = models.IntegerField(default=1)
    

class Terrenos(models.Model):
    id = models.AutoField(primary_key=True)
    calle2 = models.CharField(max_length=255)
    colonia2 = models.CharField(max_length=255)
    estado2 = models.CharField(max_length=255)
    pais2 = models.CharField(max_length=255)
    ciudad2 = models.CharField(max_length=100, default='Sin especificar')
    descripcion2 = models.TextField(default='Sin especificar')
    precio2 = models.DecimalField(max_digits=10, decimal_places=2)
    metros_cuadrados2 = models.IntegerField()
    imagen_url2 = models.CharField(max_length=255)
    imagenes_urls2 = models.JSONField(default=list, blank=True)  # Almacena múltiples URLs de imágenes