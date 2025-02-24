import htmlAssets from './assets.js';

const templateCategories = {
    marketing: {
        name: 'Marketing',
        templates: [
            {
                id: 'startup',
                name: 'Startup Modern',
                description: 'Template moderne pour startup avec sections hero et statistiques',
                components: ['header.simple', 'about.simple', 'about.stats', 'about.about_marketing_1', 'about.timeline', 'section.hero_3', 'footer.basic'],
                thumbnail: 'https://placehold.co/600x400/2563eb/ffffff?text=Startup+Modern'
            },
            {
                id: 'product',
                name: 'Product Launch',
                description: 'Page de lancement de produit avec focus sur la conversion',
                components: ['header.promotional', 'about.about_marketing_2', 'section.hero_5', 'section.stats_minimal', 'footer.legal'],
                thumbnail: 'https://placehold.co/600x400/10b981/ffffff?text=Product+Launch'
            }
        ]
    },
};

let currentFilter = 'all';
let currentTemplate = null;

document.addEventListener('DOMContentLoaded', () => {
    initializeTemplates();
    initializeFilters();
    initializeModals();
});

function initializeTemplates() {
    const templatesGrid = document.getElementById('templatesGrid');
    templatesGrid.innerHTML = '';

    Object.values(templateCategories).forEach(category => {
        if (currentFilter === 'all' || currentFilter === category.name.toLowerCase()) {
            category.templates.forEach(template => {
                templatesGrid.appendChild(createTemplateCard(template));
            });
        }
    });
}

function createTemplateCard(template) {
    const card = document.createElement('div');
    card.className = 'theme-transition-ready bg-light-nav dark:bg-dark-nav rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300';
    
    card.innerHTML = `
        <div class="aspect-video w-full bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
            <img src="${template.thumbnail}" alt="${template.name}" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                <button class="preview-btn px-6 py-3 bg-white/90 hover:bg-white text-gray-900 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                    <i class="fas fa-eye mr-2"></i>
                    Prévisualiser
                </button>
            </div>
        </div>
        <div class="p-6">
            <h3 class="text-xl font-semibold mb-2 theme-transition-ready text-gray-800 dark:text-gray-200">${template.name}</h3>
            <p class="theme-transition-ready text-gray-600 dark:text-gray-400 mb-4">${template.description}</p>
            <div class="flex justify-between items-center">
                <button class="edit-btn theme-transition-ready text-light-primary dark:text-dark-primary hover:underline">
                    <i class="fas fa-edit mr-1"></i>
                    Éditer
                </button>
                <button class="download-btn theme-transition-ready text-gray-600 dark:text-gray-400 hover:text-light-primary dark:hover:text-dark-primary">
                    <i class="fas fa-download"></i>
                </button>
            </div>
        </div>
    `;

    card.querySelector('.preview-btn').addEventListener('click', () => previewTemplate(template));
    card.querySelector('.edit-btn').addEventListener('click', () => editTemplate(template));
    card.querySelector('.download-btn').addEventListener('click', () => downloadTemplate(template));

    return card;
}

function initializeFilters() {
    const filterButtons = document.getElementById('filterButtons');
    
    // Créer le bouton "Tous"
    const allButton = document.createElement('button');
    allButton.className = 'theme-transition-ready px-4 py-2 rounded-lg bg-light-primary dark:bg-dark-primary text-white';
    allButton.textContent = 'Tous';
    filterButtons.appendChild(allButton);

    // Créer les boutons pour chaque catégorie
    Object.values(templateCategories).forEach(category => {
        const button = document.createElement('button');
        button.className = 'theme-transition-ready px-4 py-2 rounded-lg bg-light-nav dark:bg-dark-nav text-gray-700 dark:text-gray-300 hover:bg-light-primary/10 dark:hover:bg-dark-primary/20';
        button.textContent = category.name;
        filterButtons.appendChild(button);
    });

    // Ajouter les événements de clic
    const buttons = filterButtons.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => {
                btn.classList.remove('bg-light-primary', 'dark:bg-dark-primary', 'text-white');
                btn.classList.add('bg-light-nav', 'dark:bg-dark-nav', 'text-gray-700', 'dark:text-gray-300');
            });

            button.classList.remove('bg-light-nav', 'dark:bg-dark-nav', 'text-gray-700', 'dark:text-gray-300');
            button.classList.add('bg-light-primary', 'dark:bg-dark-primary', 'text-white');

            const filterText = button.textContent.trim().toLowerCase();
            currentFilter = filterText === 'tous' ? 'all' : filterText;
            
            initializeTemplates();
        });
    });
}

function initializeModals() {
    const previewModal = document.getElementById('previewModal');
    const closePreviewModal = document.getElementById('closePreviewModal');
    const editInBuilder = document.getElementById('editInBuilder');
    const downloadBtn = document.getElementById('downloadTemplate');
    const modalContent = previewModal.querySelector('.absolute');

    function updateModalPosition() {
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        const modalHeight = modalContent.offsetHeight;
        
        const topPosition = Math.max(
            viewportHeight * 0.1,
            Math.min(
                scrollY + (viewportHeight - modalHeight) / 2,
                document.documentElement.scrollHeight - modalHeight - viewportHeight * 0.1
            )
        );
        
        modalContent.style.top = `${topPosition}px`;
    }

    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (!previewModal.classList.contains('hidden')) {
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
            scrollTimeout = setTimeout(updateModalPosition, 10);
        }
    });

    let resizeTimeout;
    window.addEventListener('resize', () => {
        if (!previewModal.classList.contains('hidden')) {
            if (resizeTimeout) {
                clearTimeout(resizeTimeout);
            }
            resizeTimeout = setTimeout(updateModalPosition, 10);
        }
    });

    closePreviewModal.addEventListener('click', () => {
        previewModal.classList.add('hidden');
    });

    editInBuilder.addEventListener('click', () => {
        if (currentTemplate) {
            window.location.href = `app.html?template=${currentTemplate.id}`;
        }
    });

    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            if (currentTemplate) {
                const previewContent = document.getElementById('previewModalContent');
                const html = `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>${currentTemplate.name}</title>
</head>
<body style="margin: 0; padding: 0; max-width: 600px !important; font-family: Arial, Helvetica, sans-serif; line-height: 1.4; -webkit-text-size-adjust: none; background-color: #f8f8f8;">
    <!-- Wrapper -->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="min-width: 100%; border-spacing: 0; border-collapse: collapse;">
        <tr>
            <td align="center" style="padding: 20px 0;">
                <!-- Container -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-spacing: 0; border-collapse: collapse;">
                    <tr>
                        <td style="background-color: #ffffff; padding: 20px;">
                            ${previewContent.innerHTML}
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;
                
                const blob = new Blob([html], { type: 'text/html' });
                const url = window.URL.createObjectURL(blob);
                
                const a = document.createElement('a');
                a.href = url;
                a.download = `template-${currentTemplate.id}.html`;
                document.body.appendChild(a);
                a.click();
                
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
            }
        });
    }

    window.updateModalPosition = updateModalPosition;
}

function previewTemplate(template) {
    currentTemplate = template;
    const previewModal = document.getElementById('previewModal');
    const previewContent = document.getElementById('previewModalContent');
    
    let templateContent = '';
    template.components.forEach(componentPath => {
        const [category, name] = componentPath.split('.');
        if (htmlAssets.assets[category] && htmlAssets.assets[category][name]) {
            templateContent += htmlAssets.assets[category][name].html;
        }
    });

    previewContent.innerHTML = templateContent;
    previewModal.classList.remove('hidden');
    
    setTimeout(() => {
        if (window.updateModalPosition) {
            window.updateModalPosition();
        }
    }, 0);
}

function editTemplate(template) {
    window.location.href = `app.html?template=${template.id}`;
}

function downloadTemplate(template) {
    const templateContent = template.components
        .map(componentPath => {
            const [category, name] = componentPath.split('.');
            if (htmlAssets.assets[category] && htmlAssets.assets[category][name]) {
                return htmlAssets.assets[category][name].html;
            }
            return '';
        })
        .join('\n\n');

    const html = `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>${template.name}</title>
</head>
<body style="margin: 0 auto; padding: 0; max-width: 600px !important; font-family: Arial, Helvetica, sans-serif; line-height: 1.4; -webkit-text-size-adjust: none; background-color: #f8f8f8;">
    <!-- Wrapper -->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="min-width: 100%; border-spacing: 0; border-collapse: collapse;">
        <tr>
            <td align="center" style="padding: 20px 0;">
                    <!-- Container -->
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-spacing: 0; border-collapse: collapse;">
                    <tr>
                        <td style="background-color: #ffffff; padding: 20px;">
                            ${templateContent}
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;
    
    const blob = new Blob([html], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `template-${template.id}.html`;
    document.body.appendChild(a);
    a.click();
    
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}

export {
    templateCategories,
    previewTemplate,
    editTemplate,
    downloadTemplate
}; 