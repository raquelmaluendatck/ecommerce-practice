class AnalyticsTutorial {
  constructor() {
    this.currentStep = 0;
    this.tutorialActive = false;
    this.steps = [
      {
        title: "Bienvenido al Tutorial de Implementación",
        content: `
          <p>Este tutorial te guiará paso a paso en la implementación de Google Tag Manager y Google Analytics 4 en esta tienda online.</p>
          <p>Aprenderás a:</p>
          <ul>
            <li>Inicializar el dataLayer</li>
            <li>Implementar el script de GTM</li>
            <li>Configurar eventos de ecommerce</li>
            <li>Verificar tu implementación</li>
          </ul>
        `,
        element: null,
        code: null
      },
      {
        title: "Paso 1: Inicializar el dataLayer",
        content: `
          <p>El primer paso es inicializar el <strong>dataLayer</strong> en cada página HTML.</p>
          <p>Busca el siguiente bloque comentado en el <code>&lt;head&gt;</code> de cada archivo HTML y descoméntalo:</p>
        `,
        element: "head",
        code: `
 <!-- 
 <script>
 window.dataLayer = window.dataLayer || [];
 </script>
 -->
        `
      },
      {
        title: "Paso 2: Implementar el script de GTM",
        content: `
          <p>Después de inicializar el dataLayer, debes añadir el script de Google Tag Manager.</p>
          <p>Busca los comentarios que indican dónde debe ir el script de GTM en el <code>&lt;head&gt;</code> y añade el siguiente código:</p>
        `,
        element: "head",
        code: `
 <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
 new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
 j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
 })(window,document,'script','dataLayer','GTM-XXXX');</script>
        `
      },
      {
        title: "Paso 3: Añadir el noscript de GTM",
        content: `
          <p>Para usuarios que tienen JavaScript desactivado, debes añadir el fragmento noscript de GTM.</p>
          <p>Busca los comentarios que indican dónde debe ir el noscript de GTM justo después de la apertura del <code>&lt;body&gt;</code> y añade el siguiente código:</p>
        `,
        element: "body",
        code: `
 <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXX"
 height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        `
      },
      {
        title: "Paso 4: Implementar evento de página vista",
        content: `
          <p>Ahora implementaremos el evento de página vista (page_view) para rastrear cuando los usuarios visitan la página.</p>
          <p>Abre el archivo <code>assets/js/app.js</code> y busca el bloque comentado del evento page_view. Descoméntalo para activarlo:</p>
        `,
        element: null,
        code: `
 // EVENTO DE PÁGINA VISTA (PAGE_VIEW)
 document.addEventListener('DOMContentLoaded', function() {
  dataLayer.push({
    'event': 'page_view',
    'page_title': document.title,
    'page_location': window.location.href,
    'page_path': window.location.pathname,
    'language': navigator.language
  });
 });
        `
      },
      {
        title: "Paso 5: Implementar evento de añadir al carrito",
        content: `
          <p>Para rastrear cuando un usuario añade un producto al carrito, debemos implementar el evento add_to_cart.</p>
          <p>En la función <code>addTocart()</code> del archivo <code>assets/js/app.js</code>, añade el siguiente código:</p>
        `,
        element: null,
        code: `
 // Añadir al final de la función addTocart()
 dataLayer.push({
  'event': 'add_to_cart',
  'ecommerce': {
    'items': [{
      'item_id': phones[index].model,
      'item_name': phones[index].brand + ' ' + phones[index].model,
      'price': phones[index].price,
      'quantity': phones[index].quantity
    }]
  }
 });
        `
      },
      {
        title: "Paso 6: Verificar la implementación",
        content: `
          <p>Para verificar que tu implementación funciona correctamente, sigue estos pasos:</p>
          <ol>
            <li>Abre la consola del navegador (F12)</li>
            <li>Escribe <code>dataLayer</code> y presiona Enter para ver el contenido actual</li>
            <li>Utiliza la extensión Tag Assistant de Chrome para verificar que GTM está cargado</li>
            <li>Activa el modo Preview de GTM para ver los eventos en tiempo real</li>
          </ol>
        `,
        element: null,
        code: null
      },
      {
        title: "¡Felicidades!",
        content: `
          <p>Has completado el tutorial básico de implementación de GTM y GA4 en esta tienda online.</p>
          <p>Ahora puedes:</p>
          <ul>
            <li>Implementar más eventos como checkout y purchase</li>
            <li>Configurar variables personalizadas en GTM</li>
            <li>Crear triggers basados en los eventos del dataLayer</li>
            <li>Configurar tags para enviar datos a GA4</li>
          </ul>
          <p>¡Sigue explorando y aprendiendo!</p>
        `,
        element: null,
        code: null
      }
    ];
  }
 
  init() {
    this.createStartButton();
  }
 
  createStartButton() {
    const button = document.createElement('button');
    button.className = 'tutorial-start-button';
    button.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
      </svg>
      Iniciar Tutorial
    `;
    button.addEventListener('click', () => this.startTutorial());
    document.body.appendChild(button);
  }
 
  startTutorial() {
    this.currentStep = 0;
    this.tutorialActive = true;
    this.showStep();
  }
 
  showStep() {
    if (this.currentStep >= this.steps.length) {
      this.endTutorial();
      return;
    }
 
    const step = this.steps[this.currentStep];
    
    const tutorialContainer = document.createElement('div');
    tutorialContainer.className = 'tutorial-container';
    tutorialContainer.id = 'tutorial-container';
    
    const escapeHtml = (html) => {
      if (!html) return '';
      return html
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    };
    
    let content = `
      <div class="tutorial-header">
        <h3 class="tutorial-title">${step.title}</h3>
        <button class="tutorial-close" onclick="tutorial.endTutorial()">&times;</button>
      </div>
      <div class="tutorial-content">
        ${step.content}
        ${step.code ? `<pre class="tutorial-code">${escapeHtml(step.code)}</pre>` : ''}
      </div>
      <div class="tutorial-navigation">
        <button class="tutorial-button" ${this.currentStep === 0 ? 'disabled' : ''} onclick="tutorial.prevStep()">Anterior</button>
        <button class="tutorial-button" onclick="tutorial.nextStep()">${this.currentStep === this.steps.length - 1 ? 'Finalizar' : 'Siguiente'}</button>
      </div>
      <div class="tutorial-progress">
        ${this.steps.map((_, i) => `<div class="tutorial-step ${i === this.currentStep ? 'active' : ''}"></div>`).join('')}
      </div>
    `;
    
    tutorialContainer.innerHTML = content;
    document.body.appendChild(tutorialContainer);
    
    // Resaltar el elemento si existe
    if (step.element) {
      const element = document.querySelector(step.element);
      if (element) {
        element.classList.add('tutorial-highlight');
      }
    }
  }
 
  nextStep() {
    this.clearCurrentStep();
    this.currentStep++;
    this.showStep();
  }
 
  prevStep() {
    this.clearCurrentStep();
    this.currentStep--;
    this.showStep();
  }
 
  clearCurrentStep() {
    const tutorialContainer = document.getElementById('tutorial-container');
    if (tutorialContainer) {
      document.body.removeChild(tutorialContainer);
    }
    
    const step = this.steps[this.currentStep];
    if (step.element) {
      const element = document.querySelector(step.element);
      if (element) {
        element.classList.remove('tutorial-highlight');
      }
    }
  }
 
  endTutorial() {
    this.clearCurrentStep();
    this.tutorialActive = false;
  }
 }
 
 document.addEventListener('DOMContentLoaded', function() {
  window.tutorial = new AnalyticsTutorial();
  tutorial.init();
 });