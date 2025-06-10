// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Mobile menu functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const closeMenu = document.querySelector('.close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.nav-mobile a');
    
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    });
    
    closeMenu.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    });
    
    // Close menu when clicking on a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form fields
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simulate form submission (in a real application, you would send this data to a server)
            console.log('Form submitted:', { name, email, subject, message });
            
            // Show success message
            formSuccess.style.display = 'block';
            contactForm.reset();
            
            // Hide success message after 3 seconds
            setTimeout(function() {
                formSuccess.style.display = 'none';
            }, 3000);
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Calculate header height for offset
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Scroll animations (simple reveal on scroll)
    const revealElements = document.querySelectorAll('.project-card, .about-content, .contact-content');
    
    function checkReveal() {
        const triggerBottom = window.innerHeight * 0.8;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial styles for animation
    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Check on load and scroll
    window.addEventListener('load', checkReveal);
    window.addEventListener('scroll', checkReveal);
});

// Gallery functionality
function openGallery(projectType) {
    const gallery = document.getElementById('projectsGallery');
    const galleryContent = document.getElementById('galleryContent');
    const galleryTitle = document.getElementById('galleryTitle');
    
    // Clear previous content
    galleryContent.innerHTML = '';
    
    // Set gallery title based on project type
    if (projectType === 'social-media') {
        galleryTitle.textContent = 'Projeto Restaurante - Social Media';
        
        // Add images to gallery
        const images = [
            { src: 'lanchonetes.jpg', caption: 'Mídia social para lanchonete' },
            // Adicione mais imagens se necessário
        ];
        
        images.forEach((img, index) => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            item.innerHTML = `
                <div class="gallery-image">
                    <img src="${img.src}" alt="${img.caption}">
                </div>
                <div class="gallery-caption">
                    <p>${img.caption}</p>
                </div>
            `;
            galleryContent.appendChild(item);
        });
        
    } else if (projectType === 'branding') {
        galleryTitle.textContent = 'Redesign de Marca - Branding';
        
        // Add images to gallery - usando páginas do PDF como exemplo
        const images = [
            { src: 'redesine de marca jales.pdf#page=1', caption: 'Opção 1 de logo' },
            { src: 'redesine de marca jales.pdf#page=2', caption: 'Opção 2 de logo' },
            { src: 'redesine de marca jales.pdf#page=3', caption: 'Opção 3 de logo' },
            { src: 'redesine de marca jales.pdf#page=11', caption: 'Composição do logo' },
            { src: 'redesine de marca jales.pdf#page=12', caption: 'Paleta de cores' }
        ];
        
        images.forEach((img, index) => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            item.innerHTML = `
                <div class="gallery-image">
                    <iframe src="${img.src}" width="100%" height="100%" style="border:none;"></iframe>
                </div>
                <div class="gallery-caption">
                    <p>${img.caption}</p>
                </div>
            `;
            galleryContent.appendChild(item);
        });

    } else if (projectType === 'print') {
        galleryTitle.textContent = 'Anúncios Impressos - Print';
        
        // Add images to gallery
        const images = [
            { src: 'CRAS lançamentostory 10.jpg', caption: 'Opção 1 de Anúncio Para Story' },
            { src: 'CRAS lançamentostory 9.jpg', caption: 'Opção 2 de Anúncio Para Story' },
            { src: 'CRAS lançamentostory 8story 8.jpg', caption: 'Opção 3 de Anúncio Para Story' },
            { src: 'CRAS lançamentofeed 6.jpg', caption: 'Opção 4 de Anúncio Para Story' },
            { src: 'CRAS lançamentofeed 1.jpg', caption: 'Opção de Anúncio Para Feed' },
            // Adicione mais imagens se necessário
        ];
        
        images.forEach((img, index) => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            item.innerHTML = `
                <div class="gallery-image">
                    <img src="${img.src}" alt="${img.caption}">
                </div>
                <div class="gallery-caption">
                    <p>${img.caption}</p>
                </div>
            `;
            galleryContent.appendChild(item);
        });  
    } else if (projectType === 'ui-ux') {
    galleryTitle.textContent = 'Projeto UI/UX - Protótipo Interativo';
    
    const items = [
        { 
            type: 'iframe', 
            content: '<iframe src="https://xd.adobe.com/embed/0a1fc37f-b835-4b03-9147-82438eb95950-5f4c/" width="100%" height="600" frameborder="0" allowfullscreen></iframe>',
            caption: 'Protótipo interativo de aplicativo para PetShop'
        },
    ];
    
    items.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <div class="gallery-image">
                ${item.content}
            </div>
            <div class="gallery-caption">
                <p>${item.caption}</p>
            </div>
        `;
        galleryContent.appendChild(galleryItem);
    });

    } else if (projectType === 'embalagem') {
        galleryTitle.textContent = 'Redesign de Marca - Branding';
        
        // Add images to gallery - usando páginas do PDF como exemplo
        const images = [
            { src: 'cafeteria.png', caption: 'Exemplos de Embalagens' },
            { src: 'cafeteria 2.png', caption: 'Catálogo Cafeteria' },
        ];
        
        images.forEach((img, index) => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            item.innerHTML = `
                <div class="gallery-image">
                    <img src="${img.src}" alt="${img.caption}">
                </div>
                <div class="gallery-caption">
                    <p>${img.caption}</p>
                </div>
            `;
            galleryContent.appendChild(item);
        });

    } else if (projectType === 'brand') {
        galleryTitle.textContent = 'Redesign de Marca - Branding';
        
        // Add images to gallery - usando páginas do PDF como exemplo
        const images = [
            { src: 'apresentação de proposta.pdf#page=1', caption: 'Apresentação de Proposta oa Cruzeiro' },
            { src: 'Desenformativo.pdf#page=1', caption: 'Desenformativo do Cruzeiro' },
        ];
        
        images.forEach((img, index) => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            item.innerHTML = `
                <div class="gallery-image">
                    <iframe src="${img.src}" width="100%" height="100%" style="border:none;"></iframe>
                </div>
                <div class="gallery-caption">
                    <p>${img.caption}</p>
                </div>
            `;
            galleryContent.appendChild(item);
        });
    }
    
    // Show gallery
    gallery.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Initialize gallery navigation
    updateGalleryCounter();
}

function closeGallery() {
    const gallery = document.getElementById('projectsGallery');
    gallery.classList.remove('active');
    document.body.style.overflow = '';
}

function navigateGallery(direction) {
    const galleryContent = document.getElementById('galleryContent');
    const items = galleryContent.children;
    const currentIndex = Math.round(galleryContent.scrollLeft / galleryContent.offsetWidth);
    const newIndex = currentIndex + direction;
    
    if (newIndex >= 0 && newIndex < items.length) {
        galleryContent.scrollTo({
            left: newIndex * galleryContent.offsetWidth,
            behavior: 'smooth'
        });
        
        // Update counter after scroll completes
        setTimeout(updateGalleryCounter, 300);
    }
}

function updateGalleryCounter() {
    const galleryContent = document.getElementById('galleryContent');
    const counter = document.getElementById('galleryCounter');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (!galleryContent || galleryContent.children.length === 0) return;
    
    const currentIndex = Math.round(galleryContent.scrollLeft / galleryContent.offsetWidth) + 1;
    const totalItems = galleryContent.children.length;
    
    counter.textContent = `${currentIndex}/${totalItems}`;
    
    // Enable/disable navigation buttons
    prevBtn.disabled = currentIndex === 1;
    nextBtn.disabled = currentIndex === totalItems;
    
    // Handle scroll events to update counter
    galleryContent.addEventListener('scroll', function() {
        const newIndex = Math.round(this.scrollLeft / this.offsetWidth) + 1;
        if (newIndex !== currentIndex) {
            counter.textContent = `${newIndex}/${totalItems}`;
            prevBtn.disabled = newIndex === 1;
            nextBtn.disabled = newIndex === totalItems;
        }
    }, { passive: true });
}

// Bloqueio do clique direito
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Bloqueio de arrastar imagens
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('dragstart', function(e) {
        e.preventDefault();
    });
});

// Revelar elementos com animação ao rolar a página
const revealOnScroll = document.querySelectorAll('.reveal-animated');

function handleScrollReveal() {
    const triggerBottom = window.innerHeight * 0.85;
    revealOnScroll.forEach(el => {
        const elTop = el.getBoundingClientRect().top;
        if (elTop < triggerBottom) {
            el.classList.add('reveal-visible');
        }
    });
}

revealOnScroll.forEach(el => el.classList.add('reveal-animated'));
window.addEventListener('scroll', handleScrollReveal);
window.addEventListener('load', handleScrollReveal);
// Garantir que a seção CTA seja visível
document.addEventListener('DOMContentLoaded', function() {
  // Verificar se a seção CTA existe
  const ctaSection = document.querySelector('.section-cta');
  if (ctaSection) {
    // Garantir que a seção seja visível
    ctaSection.style.display = 'block';
    
    // Adicionar a classe reveal-visible para garantir animação
    setTimeout(() => {
      ctaSection.classList.add('reveal-visible');
    }, 500);
  }
  
  // Inicializar o filtro de portfólio
  const defaultFilter = document.querySelector('.filter-btn[data-filter="all"]');
  if (defaultFilter) {
    defaultFilter.click();
  }
});
// Função para abrir os modais de serviço
document.addEventListener('DOMContentLoaded', function() {
  // Selecionar todos os links "Saiba mais"
  const serviceLinks = document.querySelectorAll('.service-link');
  
  // Adicionar evento de clique a cada link
  serviceLinks.forEach((link, index) => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Determinar qual modal abrir com base no índice
      let modalId;
      switch(index) {
        case 0:
          modalId = 'brandingModal';
          break;
        case 1:
          modalId = 'editorialModal';
          break;
        case 2:
          modalId = 'publicidadeModal';
          break;
        case 3:
          modalId = 'socialModal';
          break;
        case 4:
          modalId = 'uiuxModal';
          break;
        case 5:
          modalId = 'consultoriaModal';
          break;
        default:
          return;
      }
      
      // Abrir o modal correspondente
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Impedir rolagem
      }
    });
  });
  
  // Fechar modais ao clicar no botão de fechar
  const closeButtons = document.querySelectorAll('.close-modal');
  closeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const modal = this.closest('.service-modal');
      modal.style.display = 'none';
      document.body.style.overflow = ''; // Restaurar rolagem
    });
  });
  
  // Fechar modais ao clicar fora
  window.addEventListener('click', function(e) {
    if (e.target.classList.contains('service-modal')) {
      e.target.style.display = 'none';
      document.body.style.overflow = ''; // Restaurar rolagem
    }
  });
});
// Forçar a exibição da seção CTA
document.addEventListener('DOMContentLoaded', function() {
    // Aguardar um pouco para garantir que tudo carregou
    setTimeout(function() {
        const ctaSection = document.querySelector('.section-cta');
        
        if (ctaSection) {
            // Forçar a exibição da seção
            ctaSection.style.display = 'block';
            ctaSection.style.visibility = 'visible';
            ctaSection.style.opacity = '1';
            ctaSection.style.transform = 'translateY(0)';
            
            // Remover classes que podem estar ocultando
            ctaSection.classList.remove('reveal-animated');
            ctaSection.classList.add('reveal-visible');
            
            console.log('Seção CTA forçada a aparecer');
        } else {
            console.log('Seção CTA não encontrada');
        }
    }, 1000);
    
    // Verificar se a seção está sendo ocultada por outros elementos
    setTimeout(function() {
        const ctaSection = document.querySelector('.section-cta');
        if (ctaSection) {
            const rect = ctaSection.getBoundingClientRect();
            console.log('Posição da seção CTA:', rect);
            
            // Se a seção estiver fora da tela, rolar até ela
            if (rect.top > window.innerHeight || rect.bottom < 0) {
                console.log('Seção CTA está fora da tela');
            }
        }
    }, 2000);
});

// Função para rolar até a seção CTA (para teste)
function scrollToCTA() {
    const ctaSection = document.querySelector('.section-cta');
    if (ctaSection) {
        ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
}
