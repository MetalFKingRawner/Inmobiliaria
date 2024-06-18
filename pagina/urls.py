"""
URL configuration for pagina project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from automatas import views
from django.conf import settings
from django.conf.urls.static import static
from automatas.views import autocomplete_colonia, autocomplete_ciudad, autocomplete_ciudad2, autocomplete_colonia2
from automatas.views import enviar_correo

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('formulario/', views.formulario, name='formulario'),
    path('ventacasa/', views.ventacasa, name='ventacasa'),
    path('ventaterr/', views.ventaterr, name='ventaterr'),
    path('login/', views.login, name='login'),
    path('agregar/', views.agregar, name='agregar'),
    path('agregar2/', views.agregar2, name='agregar2'),
    path('agregar_propiedad/', views.agregar_propiedad, name='agregar_propiedad'), 
    path('agregar_propiedad2/', views.agregar_propiedad2, name='agregar_propiedad2'),
    path('propiedad/', views.propiedad, name='propiedades'),
    path('eliminar_propiedad/<int:id>/', views.eliminar_propiedad, name='eliminar_propiedad'),
    path('eliminar_terreno/<int:id>/', views.eliminar_terreno, name='eliminar_terreno'),
    path('editar_propiedad/<int:id>/', views.editar_propiedad, name='editar_propiedad'),
    path('editar_terreno/<int:id>/', views.editar_terreno, name='editar_terreno'),
    path('detalle/<int:id>/', views.detalle_propiedad, name='detalle_propiedad'),
    path('detalle_terreno/<int:id>/', views.detalle_terreno, name='detalle_terreno'),
    path('autocomplete/colonia/', autocomplete_colonia, name='autocomplete_colonia'),
    path('autocomplete/ciudad/', autocomplete_ciudad, name='autocomplete_ciudad'),
    path('autocomplete2/colonia/', autocomplete_colonia2, name='autocomplete_colonia2'),
    path('autocomplete2/ciudad/', autocomplete_ciudad2, name='autocomplete_ciudad2'),
    path('', enviar_correo, name='enviar_correo'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
