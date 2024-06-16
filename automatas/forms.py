# forms.py
from django import forms
from .models import Propiedad
from .models import Terrenos

class PropiedadForm(forms.ModelForm):
    class Meta:
        model = Propiedad
        fields = ['calle', 'colonia', 'estado', 'pais', 'precio', 'ciudad', 'descripcion', 'metros_cuadrados', 'banos', 'habitacion', 'cuartos', 'imagen_url', 'imagen_extra_1', 'imagen_extra_2', 'imagen_extra_3', 'imagen_extra_4']

    imagen_url = forms.ImageField(required=False, label='Imagen de la Propiedad')
    imagen_extra_1 = forms.FileField(required=False, label='Imagen Extra 1')
    imagen_extra_2 = forms.FileField(required=False, label='Imagen Extra 2')
    imagen_extra_3 = forms.FileField(required=False, label='Imagen Extra 3')
    imagen_extra_4 = forms.FileField(required=False, label='Imagen Extra 4')


class TerrenoForm(forms.ModelForm):
    class Meta:
        model = Terrenos
        fields = ['calle2', 'colonia2', 'estado2', 'pais2', 'ciudad2', 'descripcion2', 'precio2', 'metros_cuadrados2']

    imagen_url2 = forms.ImageField(required=False, label='Imagen de la Propiedad')
    imagen_extra_1 = forms.FileField(required=False, label='Imagen Extra 1')
    imagen_extra_2 = forms.FileField(required=False, label='Imagen Extra 2')
    imagen_extra_3 = forms.FileField(required=False, label='Imagen Extra 3')
    imagen_extra_4 = forms.FileField(required=False, label='Imagen Extra 4')
