# La Tienda de Móviles de The Cocktail

Este es un proyecto de e-commerce básico diseñado para practicar la implementación de funcionalidades de una tienda online.

## Descripción

El proyecto simula una tienda online de teléfonos móviles con las siguientes funcionalidades:
- Listado de productos
- Carrito de compra
- Proceso de checkout

## Tecnologías Utilizadas

- HTML5
- CSS3 (Bootstrap 5)
- JavaScript (Vanilla)

## Uso con GitHub Codespaces

1. **Hacer un Fork del Repositorio:**

- Ve al repositorio original en GitHub.
- Haz clic en el botón `Fork` en la esquina superior derecha para crear una copia en tu cuenta.

2. **Abrir en Codespaces:**

- Ve a tu repositorio forkeado.
- Haz clic en el botón `Code` y selecciona `Open with Codespaces`.
- Si no tienes un Codespace creado, selecciona `New codespace`.

3. **Ejecutar el proyecto:**

- Una vez que el Codespace esté listo, abre el archivo `index.html`.
- Usa la vista previa del navegador integrada en Codespaces para ver la aplicación en funcionamiento.

## Despliegue en GitHub Pages

1. **Configurar GitHub Pages:**

- Ve a la configuración de tu repositorio forkeado en GitHub.
- En la sección "Pages", selecciona la rama `master` y la carpeta `/root` para desplegar.
- Guarda los cambios y espera unos minutos hasta que la página esté disponible.

2. **Acceder a la demo:**

Una vez desplegado, podrás acceder a la demo en: `https://[tu-usuario].github.io/nombre-del-repositorio/`

## Implementación de Analytics (Google Tag Manager y GA4)

Esta sección describe cómo implementar el seguimiento de eventos de comercio electrónico utilizando Google Tag Manager (GTM) y Google Analytics 4 (GA4).

### Implementación de Google Tag Manager

Para implementar GTM en el sitio web, debes añadir dos fragmentos de código en cada página HTML:

1. **Código en el `<head>` de cada página:**
 - Busca los comentarios `<!-- AQUÍ DEBE IR EL SCRIPT DE GOOGLE TAG MANAGER (parte del head) -->` en cada archivo HTML.
 - Entre estos comentarios, añade el siguiente código (reemplazando GTM-XXXX con tu ID de GTM):

```html
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXX');</script>
```

2. **Código justo después de la apertura del `<body>` de cada página:**
 - Busca los comentarios `<!-- AQUÍ DEBE IR EL NOSCRIPT DE GOOGLE TAG MANAGER (parte del body) -->` en cada archivo HTML.
 - Entre estos comentarios, añade el siguiente código (reemplazando GTM-XXXX con tu ID de GTM):

```html
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
```

### Inicialización del dataLayer

El dataLayer es un objeto JavaScript que actúa como una capa de datos entre tu sitio web y Google Tag Manager. Es esencial para enviar información estructurada a GTM.

Para implementar el dataLayer:

1. **Inicializa el dataLayer en cada página HTML**:
- Busca el siguiente bloque comentado en cada archivo HTML:
```html
<!-- 
<script>
window.dataLayer = window.dataLayer || [];
</script>
-->
```


### Guía de Etiquetado

Se deben identificar los siguientes eventos clave:

- **Vista de producto (product_view):** Cuando un usuario ve la página de un producto.
- **Añadir al carrito (add_to_cart):** Cuando un usuario añade un producto al carrito.
- **Eliminar del carrito (remove_from_cart):** Cuando un usuario elimina un producto del carrito.
- **Iniciar proceso de pago (begin_checkout):** Cuando un usuario inicia el proceso de checkout.
- **Compra completada (purchase):** Cuando un usuario completa una compra.

### Implementación de `dataLayer.push()`

En este proyecto encontrarás ejemplos de implementación de eventos para GA4 ya preparados pero comentados. Para utilizarlos, simplemente necesitas descomentarlos.

#### Evento de Página Vista (page_view)

En el archivo `app.js` encontrarás un ejemplo comentado de cómo implementar el evento de página vista:

```javascript
// EVENTO DE PÁGINA VISTA (PAGE_VIEW)
// Descomenta este código para implementar el evento de página vista
// Este evento se dispara cuando el usuario carga la página principal
/*
document.addEventListener('DOMContentLoaded', function() {
dataLayer.push({
  'event': 'page_view',
  'page_title': document.title,
  'page_location': window.location.href,
  'page_path': window.location.pathname,
  'language': navigator.language
});
});
*/
```
Este evento utiliza los parámetros recomendados por GA4:
- `page_title`: El título de la página
- `page_location`: La URL completa
- `page_path`: La ruta de la URL
- `language`: El idioma del navegador

#### Otros Eventos de Ecommerce

Ejemplo básico de cómo implementar un evento de añadir al carrito:

```javascript
// Ejemplo de evento de añadir al carrito
dataLayer.push({
'event': 'add_to_cart',
'ecommerce': {
    'items': [{
        'item_id': 'S20',
        'item_name': 'Samsung S20',
        'price': 1100,
        'quantity': 1
    }]
}
});
```


### Implementación en Google Analytics 4 (GA4)

Sigue estos pasos para configurar GA4:

1. Crea una propiedad en GA4.
2. Conecta GTM con GA4.
3. Crea las siguientes configuraciones en GTM:
* Tag de configuración de GA4.
* Tags para cada evento de ecommerce.
* Triggers basados en los eventos del `dataLayer`.
* Variables personalizadas para capturar datos del `dataLayer`.

### Testing

Realiza las siguientes pruebas para verificar la implementación:

1. Verifica los eventos en la consola del navegador.
2. Verifica los eventos en GTM Preview.
3. Verifica los eventos en GA4 DebugView.
4. Verifica los informes en GA4.

## Contribuir

Las contribuciones son bienvenidas. Siéntete libre de abrir issues o pull requests para mejorar este proyecto.

## Contacto

Para cualquier consulta o colaboración, puedes contactar al autor a través de:

- GitHub: [EduardoHernandezGuzman](https://github.com/EduardoHernandezGuzman)
