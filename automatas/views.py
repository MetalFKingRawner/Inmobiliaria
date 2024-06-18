from django.shortcuts import render, redirect
from .models import Propiedad
from .models import Terrenos
import uuid
import os
from django.conf import settings
from .models import Propiedad  # Importa tu modelo Propiedad aquí
from django.shortcuts import get_object_or_404, redirect, render
from .forms import PropiedadForm
from .forms import TerrenoForm
from django.core.files.storage import FileSystemStorage
from django.http import JsonResponse
from django.contrib import messages
import random
from django.core.mail import send_mail
from django.shortcuts import render, redirect
from django.conf import settings

def enviar_correo(request):
    if request.method == 'POST':
        nombre = request.POST.get('nombre')
        email = request.POST.get('email')
        mensaje = request.POST.get('mensaje')
        
        # Crea el mensaje de correo
        asunto = f'Nuevo mensaje de {nombre}'
        mensaje_correo = f'Nombre: {nombre}\nCorreo: {email}\nMensaje:\n{mensaje}'
        destinatario = ['rawner81@gmail.com']  # Cambia esto al correo destinatario real
        
        # Envía el correo
        send_mail(asunto, mensaje_correo, settings.EMAIL_HOST_USER, destinatario)
        
        return render(request, 'index.html')
    return render(request, 'index.html')

def index(request):
    propiedades = list(Propiedad.objects.all())
    terrenos = list(Terrenos.objects.all())

    # Marca los inmuebles con su tipo
    propiedades = [{'objeto': propiedad, 'tipo': 'propiedad'} for propiedad in propiedades]
    terrenos = [{'objeto': terreno, 'tipo': 'terreno'} for terreno in terrenos]

    inmuebles = propiedades + terrenos

    inmuebles_random = random.sample(inmuebles, min(len(inmuebles), 10))
    return render(request, 'index.html', {'inmuebles': inmuebles_random})


def formulario(request):
    return render(request, 'formulario.html')
def ventacasa(request):
    inmuebles = Propiedad.objects.all()
    return render(request, 'ventacasa.html', {'inmuebles': inmuebles})

def ventaterr(request):
    terrenos = Terrenos.objects.all()
    return render(request, 'ventaterr.html', {'terrenos': terrenos})

def login(request):
    return render(request, 'login.html')

def agregar(request):
    return render(request, 'agregar.html')

def agregar2(request):
    return render(request, 'agregar2.html')

def propiedad(request):
    propiedades = Propiedad.objects.all()
    terrenos = Terrenos.objects.all()  # Obtener todos los terrenos
    return render(request, 'propiedades.html',{'propiedades': propiedades, 'terrenos': terrenos})

def detalle_propiedad(request, id):
    propiedad = get_object_or_404(Propiedad, pk=id)
    return render(request, 'detalle_propiedad.html', {
        'propiedad': propiedad,
    })

def detalle_terreno(request, id):
    terreno = get_object_or_404(Terrenos, pk=id)
    return render(request, 'detalle_terreno.html', {
        'terreno': terreno,
    })

def agregar_propiedad(request):
    if request.method == 'POST':
        # Obtener datos del formulario
        calle = request.POST['calle']
        colonia = request.POST['colonia']
        estado = request.POST['estado']
        pais = request.POST['pais']
        ciudad = request.POST['ciudad']
        descripcion = request.POST['descripcion']
        precio = request.POST['precio']
        metros_cuadrados = request.POST['metros_cuadrados']
        banos = request.POST.get('banos')
        habitacion = request.POST.get('habitacion')
        cuartos = request.POST.get('cuartos')
        

        # Verificar si ya existe una propiedad con las mismas características
        propiedad_existente = Propiedad.objects.filter(
            calle=calle,
            colonia=colonia,
            estado=estado,
            pais=pais,
            ciudad=ciudad,
            precio=precio
        ).exists()

        if propiedad_existente:
            messages.error(request, 'Ya existe una propiedad con las mismas características.')
            return render(request, 'agregar.html')

        # Guardar la imagen
        imagen = request.FILES['imagen']
        ruta_imagen = guardar_imagen(imagen)

        # Guardar imágenes adicionales
        imagenes_adicionales = []
        for i in range(1, 5):  # Asumiendo que tienes hasta 4 imágenes adicionales
            imagen_adicional = request.FILES.get(f'imagenextra{i}')
            if imagen_adicional:
                ruta_imagen_adicional = guardar_imagen(imagen_adicional)
                imagenes_adicionales.append(ruta_imagen_adicional)

        # Crear nuevo registro en la base de datos
        propiedad = Propiedad(
            calle=calle,
            colonia=colonia,
            estado=estado,
            pais=pais,
            ciudad=ciudad,
            descripcion=descripcion,
            precio=precio,
            metros_cuadrados=metros_cuadrados,
            banos = banos,
            cuartos = cuartos,
            habitacion = habitacion,
            imagen_url=ruta_imagen,
            imagenes_urls=imagenes_adicionales
        )
        propiedad.save()

        # Redirigir a otra página (opcional)
        return redirect('propiedades')

    return render(request, 'agregar.html')

def agregar_propiedad2(request):
    if request.method == 'POST':
    #parte 2
        calle2 = request.POST['calle']
        colonia2 = request.POST['colonia']
        estado2 = request.POST['estado']
        pais2 = request.POST['pais']
        precio2 = request.POST['precio']
        metros_cuadrados2 = request.POST['metros_cuadrados']
        ciudad2 = request.POST['ciudad']
        descripcion2 = request.POST['descripcion']

         #parte 2
        imagen = request.FILES['imagen']
        ruta_imagen2 = guardar_imagen(imagen)

         # Guardar imágenes adicionales
        imagenes_adicionales = []
        for i in range(1, 5):  # Asumiendo que tienes hasta 4 imágenes adicionales
            imagen_adicional = request.FILES.get(f'imagenextra{i}')
            if imagen_adicional:
                ruta_imagen_adicional = guardar_imagen(imagen_adicional)
                imagenes_adicionales.append(ruta_imagen_adicional)

        # Crear nuevo registro en la base de datos
        terrenos = Terrenos(
            calle2=calle2,
            colonia2=colonia2,
            estado2=estado2,
            pais2=pais2,
            precio2=precio2,
            metros_cuadrados2=metros_cuadrados2,
            imagen_url2=ruta_imagen2,
            ciudad2=ciudad2,
            descripcion2=descripcion2,
            imagenes_urls2=imagenes_adicionales
        )
        terrenos.save()

        # Redirigir a otra página (opcional)
        return redirect('propiedades')

    return render(request, 'agregar2.html')

def guardar_imagen(imagen):
    # Ruta donde se guardarán las imágenes
    ruta_base = os.path.join(settings.BASE_DIR, 'media')

    # Generar nombre único para la imagen
    nombre_imagen = f'{uuid.uuid4()}{imagen.name}'

    # Guardar la imagen en la ruta
    with open(os.path.join(ruta_base, nombre_imagen), 'wb+') as f:
        f.write(imagen.file.read())

    # Retornar la ruta de la imagen
    return os.path.join(settings.MEDIA_URL, nombre_imagen)

def eliminar_propiedad(request, id):
    # Obtener la propiedad a eliminar
    propiedad = Propiedad.objects.get(pk=id)
    
    # Eliminar el archivo de la carpeta media si existe
    if propiedad.imagen_url:
        # Construir la ruta del archivo en la carpeta media
        ruta_archivo = os.path.join(settings.MEDIA_ROOT, propiedad.imagen_url.replace(settings.MEDIA_URL, ''))
        
        # Verificar si el archivo existe y eliminarlo
        if os.path.exists(ruta_archivo):
            os.remove(ruta_archivo)
    
    # Eliminar la propiedad de la base de datos
    propiedad.delete()
    
    # Redirigir a otra página después de eliminar la propiedad
    return redirect('propiedades')

def eliminar_terreno(request, id):
    # Obtener la propiedad a eliminar
    terreno = Terrenos.objects.get(pk=id)
    
    # Eliminar el archivo de la carpeta media si existe
    if terreno.imagen_url2:
        # Construir la ruta del archivo en la carpeta media
        ruta_archivo = os.path.join(settings.MEDIA_ROOT, terreno.imagen_url2.replace(settings.MEDIA_URL, ''))
        
        # Verificar si el archivo existe y eliminarlo
        if os.path.exists(ruta_archivo):
            os.remove(ruta_archivo)
    
    # Eliminar la propiedad de la base de datos
    terreno.delete()
    
    # Redirigir a otra página después de eliminar la propiedad
    return redirect('propiedades')

def handle_uploaded_file(f):
    fs = FileSystemStorage()
    filename = fs.save(f.name, f)
    return fs.url(filename)

def editar_propiedad(request, id):
    # Obtener la propiedad a editar
    propiedad = get_object_or_404(Propiedad, pk=id)
    anterior = propiedad.imagen_url
    anteriores_extras = propiedad.imagenes_urls
    print(anterior)

    if request.method == 'POST':
        # Crear una instancia del formulario y poblarla con los datos de la solicitud
        form = PropiedadForm(request.POST, request.FILES, instance=propiedad)
        if form.is_valid():
            # Obtener la instancia de la propiedad actualizada, pero no guardarla todavía
            nueva_propiedad = form.save(commit=False)
            print(propiedad.imagen_url)
            
            # Si hay una nueva imagen y es diferente a la anterior, eliminar la anterior
            if 'imagen_url' in form.changed_data:
                eliminar_imagen(anterior)

                # Guardar la nueva imagen
                nueva_propiedad.imagen_url = guardar_imagen(request.FILES['imagen_url'])

            # Manejar imágenes adicionales
            nuevas_rutas_imagenes = []
            for i in range(1, 5):
                imagen_extra = request.FILES.get(f'imagen_extra_{i}')
                if imagen_extra:
                    # Si hay una nueva imagen, reemplaza la anterior
                    if i <= len(anteriores_extras):
                        eliminar_imagen(anteriores_extras[i - 1])
                        nuevas_rutas_imagenes.append(handle_uploaded_file(imagen_extra))
                    else:
                        # Añadir una nueva imagen si hay más imágenes nuevas que antiguas
                        nuevas_rutas_imagenes.append(handle_uploaded_file(imagen_extra))
                elif i <= len(anteriores_extras):
                    # Si no se ha subido una nueva imagen para este índice, mantener la anterior
                    nuevas_rutas_imagenes.append(anteriores_extras[i - 1])

            nueva_propiedad.imagenes_urls = nuevas_rutas_imagenes
            # Guardar la propiedad actualizada en la base de datos
            nueva_propiedad.save()

            # Redirigir a la página de propiedades después de la edición
            return redirect('propiedades')
    else:
        # Crear una instancia del formulario y poblarla con los datos de la propiedad a editar
        form = PropiedadForm(instance=propiedad)  # Pasar la instancia de la propiedad al formulario

    # Renderizar el formulario de edición
    return render(request, 'editar_propiedad.html', {'form': form,'propiedad': propiedad,'imagenes_urls': propiedad.imagenes_urls,})

def editar_terreno(request, id):
    # Obtener la propiedad a editar
    propiedad = get_object_or_404(Terrenos, pk=id)
    anterior = propiedad.imagen_url2
    anteriores_extras = propiedad.imagenes_urls2
    print(anterior)

    if request.method == 'POST':
        # Crear una instancia del formulario y poblarla con los datos de la solicitud
        form = TerrenoForm(request.POST, request.FILES, instance=propiedad)
        if form.is_valid():
            # Obtener la instancia de la propiedad actualizada, pero no guardarla todavía
            nueva_propiedad = form.save(commit=False)
            print(propiedad.imagen_url2)
            
            # Si hay una nueva imagen y es diferente a la anterior, eliminar la anterior
            if 'imagen_url2' in form.changed_data:
                eliminar_imagen(anterior)

                # Guardar la nueva imagen
                nueva_propiedad.imagen_url2 = guardar_imagen(request.FILES['imagen_url2'])

            # Manejar imágenes adicionales
            nuevas_rutas_imagenes = []
            for i in range(1, 5):
                imagen_extra = request.FILES.get(f'imagen_extra_{i}')
                if imagen_extra:
                    # Si hay una nueva imagen, reemplaza la anterior
                    if i <= len(anteriores_extras):
                        eliminar_imagen(anteriores_extras[i - 1])
                        nuevas_rutas_imagenes.append(handle_uploaded_file(imagen_extra))
                    else:
                        # Añadir una nueva imagen si hay más imágenes nuevas que antiguas
                        nuevas_rutas_imagenes.append(handle_uploaded_file(imagen_extra))
                elif i <= len(anteriores_extras):
                    # Si no se ha subido una nueva imagen para este índice, mantener la anterior
                    nuevas_rutas_imagenes.append(anteriores_extras[i - 1])

            nueva_propiedad.imagenes_urls2 = nuevas_rutas_imagenes


            # Guardar la propiedad actualizada en la base de datos
            nueva_propiedad.save()

            # Redirigir a la página de propiedades después de la edición
            return redirect('propiedades')
    else:
        # Crear una instancia del formulario y poblarla con los datos de la propiedad a editar
        form = TerrenoForm(instance=propiedad)  # Pasar la instancia de la propiedad al formulario

    # Renderizar el formulario de edición
    return render(request, 'editar_terreno.html', {'form': form, 'terreno': propiedad,'imagenes_urls2': propiedad.imagenes_urls2,})

def guardar_imagen2(imagen):
    # Ruta donde se guardarán las imágenes
    ruta_base = os.path.join(settings.BASE_DIR, 'media')

    # Generar nombre único para la imagen
    nombre_imagen = f'{uuid.uuid4()}{imagen.name}'

    # Guardar la imagen en la ruta
    with open(os.path.join(ruta_base, nombre_imagen), 'wb+') as f:
        for chunk in imagen.chunks():
            f.write(chunk)

    # Retornar la ruta de la imagen
    return os.path.join(settings.MEDIA_URL, nombre_imagen)

def eliminar_imagen(ruta):
    # Eliminar el archivo de la carpeta media si existe
    ruta_archivo = os.path.join(settings.MEDIA_ROOT, ruta.replace(settings.MEDIA_URL, ''))
    if os.path.exists(ruta_archivo):
        print("Si existe!!")
        os.remove(ruta_archivo)

def autocomplete_colonia(request):
    if 'term' in request.GET:
        term = request.GET.get('term')
        colonias = Propiedad.objects.filter(colonia__icontains=term).values_list('colonia', flat=True).distinct()
        return JsonResponse(list(colonias), safe=False)

def autocomplete_ciudad(request):
    if 'term' in request.GET:
        term = request.GET.get('term')
        ciudades = Propiedad.objects.filter(ciudad__icontains=term).values_list('ciudad', flat=True).distinct()
        return JsonResponse(list(ciudades), safe=False)
    
def autocomplete_colonia2(request):
    if 'term' in request.GET:
        term = request.GET.get('term')
        colonias = Terrenos.objects.filter(colonia2__icontains=term).values_list('colonia2', flat=True).distinct()
        return JsonResponse(list(colonias), safe=False)

def autocomplete_ciudad2(request):
    if 'term' in request.GET:
        term = request.GET.get('term')
        ciudades = Terrenos.objects.filter(ciudad2__icontains=term).values_list('ciudad2', flat=True).distinct()
        return JsonResponse(list(ciudades), safe=False)
