// Configuration du thème et dépendances
const themeConfig = `
<script src="https://cdn.tailwindcss.com"></script>
<script>
tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                    lg: '4rem',
                    xl: '5rem',
                }
            }
        }
    }
}
</script>
<style>
.theme-transition-ready {
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

/* Configuration du mode sombre */
@media (prefers-color-scheme: dark) {
    :root {
        color-scheme: dark;
    }
}
</style>

<script>
// Fonction pour gérer le thème
function initTheme() {
    // Vérifie si un thème est déjà enregistré
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');

    // Écouteur pour le changement de thème système
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            document.documentElement.classList.toggle('dark', e.matches);
        }
    });
}

// Fonction pour basculer le thème
function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Initialiser le thème au chargement
document.addEventListener('DOMContentLoaded', initTheme);

// Fonction pour insérer un composant dans la prévisualisation
function insertComponent(html) {
    const container = document.getElementById('preview-container') || document.body;
    const template = document.createElement('template');
    template.innerHTML = html.trim();
    container.appendChild(template.content.firstElementChild);
}
</script>`;

const htmlAssets = {

    // En tête
    header: {
        simple: {
            name: "En-tête Simple",
            html: `<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff;">
                <tr>
                    <td align="center" style="padding: 20px;">
                        <table cellpadding="0" cellspacing="0" border="0" style="max-width: 600px;">
                            <tr>
                                <td align="center" style="font-family: Arial, sans-serif;">
                                    <h1 style="margin: 0; font-size: 28px; color: #1f2937;">Votre Entreprise</h1>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`,
        },
        information: {
            name: "En-tête Informatif",
            html: `<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #fef3c7;">
                <tr>
                    <td align="center" style="padding: 20px;">
                        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px;">
                            <tr>
                                <td align="center">
                                    <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                        <tr>
                                            <td align="center" style="width: 100%;">
                                                <h1 style="font-size: 20px; line-height: 1.2; font-weight: 700; color: #1f2937; margin: 0 0 6px 0; word-wrap: break-word;">Information Importante</h1>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`,
        },
        modern: {
            name: "En-tête Moderne",
            html: `<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
                <tr>
                    <td align="center" style="padding: 20px;">
                        <h1 style="color: #ffffff; font-size: 32px; margin: 0; font-family: 'Helvetica Neue', sans-serif;">Votre Marque</h1>
                        <p style="color: #ffffff; margin: 10px 0 0 0;">Une approche moderne</p>
                    </td>
                </tr>
            </table>`,
        },
        corporate: {
            name: "En-tête Corporate",
            html: `<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #1a365d;">
                <tr>
                    <td align="left" style="padding: 20px;">
                        <img src="https://placehold.co/150x50" alt="Logo" style="max-width: 150px;">
                        <div style="float: right; text-align: right;">
                            <p style="color: #ffffff; margin: 0;">+33 1 23 45 67 89</p>
                            <p style="color: #ffffff; margin: 5px 0 0 0;">contact@entreprise.com</p>
                        </div>
                    </td>
                </tr>
            </table>`,
        },
        minimal: {
            name: "En-tête Minimaliste",
            html: `<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff; border-bottom: 2px solid #e5e7eb;">
                <tr>
                    <td align="center" style="padding: 20px;">
                        <p style="font-size: 14px; color: #6b7280; margin: 0; letter-spacing: 2px; text-transform: uppercase;">Newsletter • Juin 2025</p>
                    </td>
                </tr>
            </table>`,
        },
        creative: {
            name: "En-tête Créatif",
            html: `<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #fdf2f8;">
                <tr>
                    <td align="center" style="padding: 20px;">
                        <div style="font-size: 40px; margin-bottom: 10px;">✨</div>
                        <h1 style="font-family: 'Georgia', serif; color: #be185d; margin: 0; font-size: 28px;">Créations & Inspirations</h1>
                    </td>
                </tr>
            </table>`,
        },
        promotional: {
            name: "En-tête Promotionnel",
            html: `<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #dc2626;">
                <tr>
                    <td align="center" style="padding: 20px;">
                        <h2 style="color: #ffffff; margin: 0; font-size: 24px;">SOLDES D'ÉTÉ</h2>
                        <p style="color: #ffffff; margin: 8px 0 0 0; font-size: 18px;">Jusqu'à -50% sur une sélection</p>
                    </td>
                </tr>
            </table>`,
        },
        seasonal: {
            name: "En-tête Saisonnier",
            html: `<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #cdd7e5;">
                <tr>
                    <td align="center" style="padding: 20px;">
                        <h1 style="color:rgb(0, 0, 0); margin: 0; font-size: 36px; font-weight: bold;">Collection Hiver</h1>
                    </td>
                </tr>
            </table>`,
        },
        newsletter: {
            name: "En-tête Newsletter",
            html: `<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f3f4f6;">
                <tr>
                    <td align="center" style="padding: 20px;">
                        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 400px;">
                            <tr>
                                <td align="center">
                                    <table cellpadding="0" cellspacing="0" border="0">
                                        <tr>
                                            <td style="font-size: 80px; text-align: center; width: 120px; height: 120px; background-color: #e5e7eb; border-radius: 50%; display: inline-block; line-height: 120px;">📧</td>
                                        </tr>
                                    </table>
                                    <h2 style="color: #111827; margin: 0; font-size: 24px;">Notre Newsletter Hebdomadaire</h2>
                                    <p style="color: #6b7280; margin: 10px 0 0 0;">Les dernières actualités et tendances</p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`,
        },
        event: {
            name: "En-tête Événement",
            html: `<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #0f172a;">
                <tr>
                    <td align="center" style="padding: 20px;">
                        <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-family: 'Arial Black', sans-serif;">CONFÉRENCE 2025</h1>
                        <p style="color: #94a3b8; margin: 10px 0 0 0; font-size: 18px;">15-16 Septembre • Paris</p>
                    </td>
                </tr>
            </table>`,
        },
    },

    // Section À propos
    about: {
        simple: {
            name: "À propos Simple",
            html: `<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #1e40af;">
                <tr>
                    <td align="center" style="padding: 20px;">
                        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px;">
                            <tr>
                                <td align="center">
                                    <h2 style="font-size: 28px; line-height: 1.2; font-weight: 700; color: #ffffff; margin: 0 0 20px 0;">À Propos de Nous</h2>
                                    <p style="font-size: 18px; line-height: 1.6; color: rgba(255,255,255,0.9); margin: 0; padding: 0 15px;">Nous sommes une équipe passionnée qui s'efforce d'offrir les meilleures solutions pour nos clients. Notre mission est de créer des expériences exceptionnelles qui dépassent les attentes.</p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },
        modernGradient: {
            name: "À propos Gradient Moderne",
            html: `<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #4f46e5;">
                <tr>
                    <td align="center" style="padding: 20px;">
                        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px;">
                            <tr>
                                <td align="center">
                                    <div style="font-size: 48px; margin-bottom: 25px;">✨</div>
                                    <h2 style="font-size: 32px; line-height: 1.2; font-weight: 700; color: #ffffff; margin: 0 0 20px 0;">Notre Expertise</h2>
                                    <p style="font-size: 18px; line-height: 1.6; color: rgba(255,255,255,0.9); margin: 0 0 25px 0; padding: 0 15px;">Avec plus de 10 ans d'expérience, nous transformons les idées en solutions numériques innovantes. Notre expertise nous permet de créer des expériences uniques qui marquent les esprits.</p>
                                    <table cellpadding="0" cellspacing="0" border="0" style="margin-top: 20px;">
                                        <tr>
                                            <td style="background-color: rgba(255,255,255,0.15); border-radius: 8px; padding: 12px 24px;">
                                                <p style="color: #ffffff; margin: 0; font-size: 16px;">✓ Innovation Continue</p>
                                            </td>
                                            <td width="20"></td>
                                            <td style="background-color: rgba(255,255,255,0.15); border-radius: 8px; padding: 12px 24px;">
                                                <p style="color: #ffffff; margin: 0; font-size: 16px;">✓ Excellence Technique</p>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },
        minimalDark: {
            name: "À propos Minimal Sombre",
            html: `<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #1f2937;">
                <tr>
                    <td align="center" style="padding: 20px;">
                        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px;">
                            <tr>
                                <td align="center">
                                    <h2 style="font-size: 36px; line-height: 1.2; font-weight: 700; color: #ffffff; margin: 0 0 20px 0;">Notre Vision</h2>
                                    <hr style="width: 60px; height: 4px; border: none; background-color:rgb(0, 151, 221); margin-bottom: 25px;">
                                    <p style="font-size: 18px; line-height: 1.8; color: #9ca3af; margin: 0 0 30px 0;">Nous croyons en un monde où la technologie est accessible à tous. Notre approche combine créativité et expertise technique pour donner vie à vos projets les plus ambitieux.</p>
                                    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top: 30px;">
                                        <tr>
                                            <td style="padding-right: 20px;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #374151; border-radius: 12px; padding: 20px;">
                                                    <tr>
                                                        <td style="text-align: center;">
                                                            <p style="color: #3b82f6; font-size: 24px; margin: 0 0 10px 0; font-weight: 700;">200+</p>
                                                            <p style="color: #d1d5db; margin: 0; font-size: 16px;">Projets Réalisés</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td>
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #374151; border-radius: 12px; padding: 20px;">
                                                    <tr>
                                                        <td style="text-align: center;">
                                                            <p style="color: #3b82f6; font-size: 24px; margin: 0 0 10px 0; font-weight: 700;">98%</p>
                                                            <p style="color: #d1d5db; margin: 0; font-size: 16px;">Clients Satisfaits</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },
        vibrant: {
            name: "À propos Vibrant",
            html: `<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f97316;">
                <tr>
                    <td align="center" style="padding: 20px;">
                        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px;">
                            <tr>
                                <td align="center">
                                    <table cellpadding="0" cellspacing="0" border="0" width="80" height="80" style="background-color: rgba(255,255,255,0.2); border-radius: 50%; margin: 0 auto 30px auto;">
                                        <tr>
                                            <td align="center" valign="middle" style="font-size: 40px;">
                                                🚀
                                            </td>
                                        </tr>
                                    </table>
                                    <h2 style="font-size: 34px; line-height: 1.2; font-weight: 700; color: #ffffff; margin: 0 0 25px 0;">Innovons Ensemble</h2>
                                    <p style="font-size: 18px; line-height: 1.7; color: rgba(255,255,255,0.95); margin: 0 0 30px 0; padding: 0 20px;">Découvrez comment notre passion pour l'innovation et notre expertise technique peuvent transformer votre vision en réalité. Nous sommes là pour vous accompagner à chaque étape de votre projet.</p>
                                    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 500px;">
                                        <tr>
                                            <td align="center" style="padding: 0 10px;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: rgba(255,255,255,0.1); border-radius: 16px; padding: 20px;">
                                                    <tr>
                                                        <td align="center">
                                                            <p style="color: #ffffff; margin: 0; font-size: 16px; font-weight: 500;">⭐ Excellence & Innovation</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td align="center" style="padding: 0 10px;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: rgba(255,255,255,0.1); border-radius: 16px; padding: 20px;">
                                                    <tr>
                                                        <td align="center">
                                                            <p style="color: #ffffff; margin: 0; font-size: 16px; font-weight: 500;">🤝 Support Premium</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },
        elegant: {
            name: "À propos Élégant",
            html: `<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff;">
                <tr>
                    <td align="center" style="padding: 20px;">
                        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px;">
                            <tr>
                                <td>
                                    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 20px; padding: 40px;">
                                        <tr>
                                            <td align="center">
                                                <table cellpadding="0" cellspacing="0" border="0" width="50" height="50" style="background-color:rgb(0, 0, 0); border-radius: 25px; margin-bottom: 30px;">
                                                    <tr>
                                                        <td align="center" valign="middle" style="font-size: 30px; width: 50px; height: 50px; background-color: rgb(0, 0, 0); border-radius: 50%; color: white;">
                                                            🚀
                                                        </td>
                                                    </tr>
                                                </table>
                                                <h2 style="font-size: 32px; line-height: 1.2; font-weight: 700; color: #1e293b; margin: 0 0 20px 0;">L'Excellence au Service de Votre Réussite</h2>
                                                <p style="font-size: 17px; line-height: 1.7; color: #64748b; margin: 0 0 30px 0;">Notre engagement envers l'excellence et l'innovation nous permet de créer des solutions sur mesure qui répondent parfaitement à vos besoins. Découvrez comment nous pouvons vous aider à atteindre vos objectifs.</p>
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td style="padding-right: 15px;">
                                                            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f8fafc; border-radius: 12px; padding: 20px;">
                                                                <tr>
                                                                    <td style="text-align: center;">
                                                                        <p style="font-size: 30px; color: #0f172a; margin: 0 0 5px 0;">👨‍💼</p>
                                                                        <h3 style="font-size: 18px; color: #0f172a; margin: 0 0 5px 0;">Expertise</h3>
                                                                        <p style="color: #64748b; margin: 0; font-size: 15px;">Solutions innovantes</p>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                        <td style="padding-left: 15px;">
                                                            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f8fafc; border-radius: 12px; padding: 20px;">
                                                                <tr>
                                                                    <td style="text-align: center;">
                                                                        <p style="font-size: 30px; color: #0f172a; margin: 0 0 5px 0;">📲</p>
                                                                        <h3 style="font-size: 18px; color: #0f172a; margin: 0 0 5px 0;">Support</h3>
                                                                        <p style="color: #64748b; margin: 0; font-size: 15px;">24/7 disponible</p>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },
        withImage: {
            name: "À propos avec Image",
            html: `<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff;">
                <tr>
                    <td align="center" style="padding: 20px;">
                        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; padding: 0 15px;">
                            <tr>
                                <td>
                                    <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                        <tr>
                                            <td style="padding: 0 0 20px 0;" align="center">
                                                <img src="https://placehold.co/600x400" alt="Notre équipe" style="width: 100%; max-width: 500px; height: auto; border-radius: 12px; display: block; margin: 0 auto;">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 0;">
                                                <h2 style="font-size: 24px; line-height: 32px; font-weight: 700; color: #1f2937; margin: 0 0 16px 0; text-align: center;">Notre Histoire</h2>
                                                <p style="font-size: 16px; line-height: 24px; color: #4b5563; margin: 0 0 24px 0; text-align: center;">Fondée en 2020, notre entreprise a toujours eu pour objectif d'innover et d'exceller dans notre domaine. Nous croyons en la puissance de la technologie pour transformer les entreprises.</p>
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td width="50%" style="padding: 0 8px 0 0; text-align: center;">
                                                            <h3 style="font-size: 20px; line-height: 28px; font-weight: 700; color: #1f2937; margin: 0 0 8px 0;">100+</h3>
                                                            <p style="color: #4b5563; margin: 0;">Clients satisfaits</p>
                                                        </td>
                                                        <td width="50%" style="padding: 0 0 0 8px; text-align: center;">
                                                            <h3 style="font-size: 20px; line-height: 28px; font-weight: 700; color: #1f2937; margin: 0 0 8px 0;">50+</h3>
                                                            <p style="color: #4b5563; margin: 0;">Projets réalisés</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },
        team: {
            name: "Équipe",
            html: `<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff;">
                <tr>
                    <td align="center" style="padding: 20px;">
                        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; padding: 0 15px;">
                            <tr>
                                <td align="center" style="padding: 0 0 32px 0;">
                                    <h2 style="font-size: 24px; line-height: 32px; font-weight: 700; color: #1f2937; margin: 0 0 16px 0;">Notre Équipe</h2>
                                    <p style="font-size: 16px; line-height: 24px; color: #4b5563; margin: 0; max-width: 450px;">Des experts passionnés qui travaillent ensemble pour créer des solutions exceptionnelles.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                        <tr>
                                            <td style="padding: 0 0 20px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f9fafb; border-radius: 12px; padding: 24px;">
                                                    <tr>
                                                        <td align="center">
                                                            <img src="https://placehold.co/150x150" alt="Membre 1" style="width: 120px; height: 120px; border-radius: 60px; margin: 0 0 16px 0; display: block;">
                                                            <h3 style="font-size: 18px; line-height: 24px; font-weight: 600; color: #1f2937; margin: 0 0 8px 0;">Jean Dupont</h3>
                                                            <p style="color: #4b5563; margin: 0 0 16px 0;">CEO & Fondateur</p>
                                                            <table cellpadding="0" cellspacing="0" border="0" align="center">
                                                                <tr>
                                                                    <td style="padding: 0 8px;"><a href="#" style="display: block; text-decoration: none; font-size: 20px;">💼</a></td>
                                                                    <td style="padding: 0 8px;"><a href="#" style="display: block; text-decoration: none; font-size: 20px;">👨‍💼</a></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 0 0 20px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f9fafb; border-radius: 12px; padding: 24px;">
                                                    <tr>
                                                        <td align="center">
                                                            <img src="https://placehold.co/150x150" alt="Membre 2" style="width: 120px; height: 120px; border-radius: 60px; margin: 0 0 16px 0; display: block;">
                                                            <h3 style="font-size: 18px; line-height: 24px; font-weight: 600; color: #1f2937; margin: 0 0 8px 0;">Marie Martin</h3>
                                                            <p style="color: #4b5563; margin: 0 0 16px 0;">Directrice Marketing</p>
                                                            <table cellpadding="0" cellspacing="0" border="0" align="center">
                                                                <tr>
                                                                    <td style="padding: 0 8px;"><a href="#" style="display: block; text-decoration: none; font-size: 20px;">💼</a></td>
                                                                    <td style="padding: 0 8px;"><a href="#" style="display: block; text-decoration: none; font-size: 20px;">👩‍💼</a></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f9fafb; border-radius: 12px; padding: 24px;">
                                                    <tr>
                                                        <td align="center">
                                                            <img src="https://placehold.co/150x150" alt="Membre 3" style="width: 120px; height: 120px; border-radius: 60px; margin: 0 0 16px 0; display: block;">
                                                            <h3 style="font-size: 18px; line-height: 24px; font-weight: 600; color: #1f2937; margin: 0 0 8px 0;">Pierre Dubois</h3>
                                                            <p style="color: #4b5563; margin: 0 0 16px 0;">Lead Developer</p>
                                                            <table cellpadding="0" cellspacing="0" border="0" align="center">
                                                                <tr>
                                                                    <td style="padding: 0 8px;"><a href="#" style="display: block; text-decoration: none; font-size: 20px;">💼</a></td>
                                                                    <td style="padding: 0 8px;"><a href="#" style="display: block; text-decoration: none; font-size: 20px;">👨🏼‍💻</a></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },
        stats: {
            name: "Statistiques",
            html: `<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff;">
                <tr>
                    <td align="center" style="padding: 20px;">
                        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; padding: 0 15px;">
                            <tr>
                                <td>
                                    <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                        <tr>
                                            <td style="padding: 0 0 20px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f9fafb; border-radius: 12px; padding: 24px;">
                                                    <tr>
                                                        <td align="center">
                                                            <h3 style="font-size: 28px; line-height: 36px; font-weight: 700; color: #1f2937; margin: 0 0 8px 0;">2000+</h3>
                                                            <p style="color: #4b5563; margin: 0; font-size: 16px;">Clients</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 0 0 20px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f9fafb; border-radius: 12px; padding: 24px;">
                                                    <tr>
                                                        <td align="center">
                                                            <h3 style="font-size: 28px; line-height: 36px; font-weight: 700; color: #1f2937; margin: 0 0 8px 0;">500+</h3>
                                                            <p style="color: #4b5563; margin: 0; font-size: 16px;">Projets</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 0 0 20px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f9fafb; border-radius: 12px; padding: 24px;">
                                                    <tr>
                                                        <td align="center">
                                                            <h3 style="font-size: 28px; line-height: 36px; font-weight: 700; color: #1f2937; margin: 0 0 8px 0;">50+</h3>
                                                            <p style="color: #4b5563; margin: 0; font-size: 16px;">Employés</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f9fafb; border-radius: 12px; padding: 24px;">
                                                    <tr>
                                                        <td align="center">
                                                            <h3 style="font-size: 28px; line-height: 36px; font-weight: 700; color: #1f2937; margin: 0 0 8px 0;">15+</h3>
                                                            <p style="color: #4b5563; margin: 0; font-size: 16px;">Pays</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },
        mission: {
            name: "Notre Mission",
            html: `<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff;">
                <tr>
                    <td align="center" style="padding: 20px;">
                        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; padding: 0 15px;">
                            <tr>
                                <td align="center" style="padding: 0 0 32px 0;">
                                    <h2 style="font-size: 24px; line-height: 32px; font-weight: 700; color: #1f2937; margin: 0 0 16px 0;">Notre Mission</h2>
                                    <p style="font-size: 16px; line-height: 24px; color: #4b5563; margin: 0; max-width: 450px;">Transformer le monde numérique en créant des solutions innovantes et accessibles à tous.</p>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 0 0 20px 0;">
                                    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f9fafb; border-radius: 12px; padding: 24px;">
                                        <tr>
                                            <td>
                                                <h3 style="font-size: 18px; line-height: 24px; font-weight: 600; color: #1f2937; margin: 0 0 12px 0;">Vision</h3>
                                                <p style="color: #4b5563; margin: 0; font-size: 16px; line-height: 24px;">Devenir le leader mondial des solutions numériques innovantes d'ici 2025.</p>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 0 0 20px 0;">
                                    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f9fafb; border-radius: 12px; padding: 24px;">
                                        <tr>
                                            <td>
                                                <h3 style="font-size: 18px; line-height: 24px; font-weight: 600; color: #1f2937; margin: 0 0 12px 0;">Valeurs</h3>
                                                <p style="color: #4b5563; margin: 0; font-size: 16px; line-height: 24px;">Innovation, intégrité, collaboration et excellence sont au cœur de tout ce que nous faisons.</p>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f9fafb; border-radius: 12px; padding: 24px;">
                                        <tr>
                                            <td>
                                                <h3 style="font-size: 18px; line-height: 24px; font-weight: 600; color: #1f2937; margin: 0 0 12px 0;">Objectifs</h3>
                                                <p style="color: #4b5563; margin: 0; font-size: 16px; line-height: 24px;">Créer un impact positif sur la société à travers nos solutions technologiques.</p>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },
        values: {
            name: "Nos Valeurs",
            html: `<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff;">
                <tr>
                    <td align="center" style="padding: 20px;">
                        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; padding: 0 15px;">
                            <tr>
                                <td align="center" style="padding: 0 0 32px 0;">
                                    <h2 style="font-size: 24px; line-height: 32px; font-weight: 700; color: #1f2937; margin: 0 0 16px 0;">Nos Valeurs</h2>
                                    <p style="font-size: 16px; line-height: 24px; color: #4b5563; margin: 0; max-width: 450px;">Les principes qui guident nos actions et décisions au quotidien.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                        <tr>
                                            <td style="padding: 0 0 20px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f9fafb; border-radius: 12px; padding: 24px;">
                                                    <tr>
                                                        <td align="center">
                                                            <table cellpadding="0" cellspacing="0" border="0" width="64" style="background-color: #3b82f6; border-radius: 32px; margin: 0 auto 20px auto; height: 64px;">
                                                                <tr>
                                                                    <td align="center" style="line-height: 64px; font-size: 32px;">
                                                                        🚀
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <h3 style="font-size: 18px; line-height: 24px; font-weight: 600; color: #1f2937; margin: 0 0 12px 0;">Innovation</h3>
                                                            <p style="color: #4b5563; margin: 0; font-size: 16px; line-height: 24px;">Nous repoussons constamment les limites pour créer des solutions novatrices.</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 0 0 20px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f9fafb; border-radius: 12px; padding: 24px;">
                                                    <tr>
                                                        <td align="center">
                                                            <table cellpadding="0" cellspacing="0" border="0" width="64" style="background-color: #22c55e; border-radius: 32px; margin: 0 auto 20px auto; height: 64px;">
                                                                <tr>
                                                                    <td align="center" style="line-height: 64px; font-size: 32px;">
                                                                        ✅
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <h3 style="font-size: 18px; line-height: 24px; font-weight: 600; color: #1f2937; margin: 0 0 12px 0;">Intégrité</h3>
                                                            <p style="color: #4b5563; margin: 0; font-size: 16px; line-height: 24px;">Nous agissons avec honnêteté et transparence dans toutes nos interactions.</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f9fafb; border-radius: 12px; padding: 24px;">
                                                    <tr>
                                                        <td align="center">
                                                            <table cellpadding="0" cellspacing="0" border="0" width="64" style="background-color: #a855f7; border-radius: 32px; margin: 0 auto 20px auto; height: 64px;">
                                                                <tr>
                                                                    <td align="center" style="line-height: 64px; font-size: 32px;">
                                                                        🫱🏻‍🫲🏼
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <h3 style="font-size: 18px; line-height: 24px; font-weight: 600; color: #1f2937; margin: 0 0 12px 0;">Collaboration</h3>
                                                            <p style="color: #4b5563; margin: 0; font-size: 16px; line-height: 24px;">Nous croyons en la force du travail d'équipe et de la diversité.</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },
        timeline: {
            name: "Notre Histoire Timeline",
            html: `<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff;">
                <tr>
                    <td align="center" style="padding: 40px 20px;">
                        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 500px; margin: 0 auto;">
                            <tr>
                                <td align="center" style="padding-bottom: 40px;">
                                    <h2 style="font-size: 28px; line-height: 1.3; font-weight: 700; color: #1f2937; margin: 0;">Notre Histoire</h2>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom: 30px;">
                                        <tr>
                                            <td align="center">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 400px; background-color: #f9fafb; border-radius: 16px; padding: 24px;">
                                                    <tr>
                                                        <td>
                                                            <h3 style="font-size: 20px; line-height: 1.4; font-weight: 600; color: #1f2937; margin: 0 0 8px 0; text-align: center;">2020</h3>
                                                            <p style="color: #4b5563; margin: 0; font-size: 16px; line-height: 1.6; text-align: center;">Fondation de l'entreprise</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center" style="padding: 16px 0;">
                                                <div style="width: 2px; height: 40px; background-color: #3b82f6;"></div>
                                                <div style="width: 0; height: 0; border-left: 8px solid transparent; border-right: 8px solid transparent; border-top: 12px solid #3b82f6;"></div>
                                            </td>
                                        </tr>
                                    </table>

                                    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom: 30px;">
                                        <tr>
                                            <td align="center">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 400px; background-color: #f9fafb; border-radius: 16px; padding: 24px;">
                                                    <tr>
                                                        <td>
                                                            <h3 style="font-size: 20px; line-height: 1.4; font-weight: 600; color: #1f2937; margin: 0 0 8px 0; text-align: center;">2021</h3>
                                                            <p style="color: #4b5563; margin: 0; font-size: 16px; line-height: 1.6; text-align: center;">Expansion internationale</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center" style="padding: 16px 0;">
                                                <div style="width: 2px; height: 40px; background-color: #3b82f6;"></div>
                                                <div style="width: 0; height: 0; border-left: 8px solid transparent; border-right: 8px solid transparent; border-top: 12px solid #3b82f6;"></div>
                                            </td>
                                        </tr>
                                    </table>

                                    <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                        <tr>
                                            <td align="center">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 400px; background-color: #f9fafb; border-radius: 16px; padding: 24px;">
                                                    <tr>
                                                        <td>
                                                            <h3 style="font-size: 20px; line-height: 1.4; font-weight: 600; color: #1f2937; margin: 0 0 8px 0; text-align: center;">2022</h3>
                                                            <p style="color: #4b5563; margin: 0; font-size: 16px; line-height: 1.6; text-align: center;">Lancement de nouveaux produits</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },
    about_marketing_1: {
        name: "Section À Propos - Marketing Digital",
        html: `<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff;">
                <tr>
                    <td align="center" style="padding: 60px 16px;">
                        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 640px; margin: 0 auto;">
                            <tr>
                                <td align="center">
                                    <h2 style="font-size: 36px; line-height: 1.2; font-weight: 700; color: #1f2937; margin: 0 0 32px 0; text-align: center;">Notre Expertise Marketing</h2>
                                    <p style="color: #4b5563; margin: 0 0 40px 0; font-size: 18px; line-height: 1.6; text-align: center; max-width: 540px;">Spécialisés dans le marketing digital depuis plus de 10 ans, nous accompagnons les entreprises dans leur transformation numérique.</p>
                                    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom: 40px;">
                                        <tr>
                                            <td width="50%" style="padding: 0 12px;">
                                                <div style="background-color: #f8fafc; border-radius: 16px; padding: 32px; text-align: center; border-left: 3px solid rgba(0, 0, 0, 0.05); border-top: 1px solid rgba(0, 0, 0, 0.05); border-right: 1px solid rgba(0, 0, 0, 0.15); border-bottom: 3px solid rgba(0, 0, 0, 0.15);">
                                                    <h3 style="font-size: 32px; color: rgb(0, 120, 218); margin: 0 0 12px 0; font-weight: 700;">+5000</h3>
                                                    <p style="color: #64748b; margin: 0; font-size: 17px;">Clients Satisfaits</p>
                                                </div>
                                            </td>
                                            <td width="50%" style="padding: 0 12px;">
                                                <div style="background-color: #f8fafc; border-radius: 16px; padding: 32px; text-align: center; border-left: 3px solid rgba(0, 0, 0, 0.05); border-top: 1px solid rgba(0, 0, 0, 0.05); border-right: 1px solid rgba(0, 0, 0, 0.15); border-bottom: 3px solid rgba(0, 0, 0, 0.15);">
                                                    <h3 style="font-size: 32px; color: rgb(0, 120, 218); margin: 0 0 12px 0; font-weight: 700;">98%</h3>
                                                    <p style="color: #64748b; margin: 0; font-size: 17px;">Taux de Satisfaction</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
    },
    about_marketing_2: {
        name: "Section À Propos - Services Marketing",
        html: `<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f8fafc;">
                <tr>
                    <td align="center" style="padding: 60px 16px;">
                        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 640px; margin: 0 auto;">
                            <tr>
                                <td align="center">
                                    <h2 style="font-size: 36px; line-height: 1.2; font-weight: 700; color: #1f2937; margin: 0 0 40px 0; text-align: center;">Nos Services Marketing</h2>
                                    <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                        <tr>
                                            <td style="padding: 12px;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff; border-radius: 16px; padding: 32px; border-left: 3px solid rgba(0, 0, 0, 0.05); border-top: 1px solid rgba(0, 0, 0, 0.05); border-right: 1px solid rgba(0, 0, 0, 0.15); border-bottom: 3px solid rgba(0, 0, 0, 0.15);">
                                                    <tr>
                                                        <td align="center">
                                                            <div style="width: 64px; height: 64px; background-color: rgb(0, 120, 218); border-radius: 16px; margin-bottom: 20px; display: flex; align-items: center; justify-content: center; font-size: 36px;">🔍</div>
                                                            <h3 style="font-size: 22px; color: #1f2937; margin: 0 0 12px 0; font-weight: 600;">SEO & SEA</h3>
                                                            <p style="color: #64748b; margin: 0; font-size: 16px; line-height: 1.6;">Optimisation pour les moteurs de recherche et publicité ciblée</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 12px;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff; border-radius: 16px; padding: 32px; border-left: 3px solid rgba(0, 0, 0, 0.05); border-top: 1px solid rgba(0, 0, 0, 0.05); border-right: 1px solid rgba(0, 0, 0, 0.15); border-bottom: 3px solid rgba(0, 0, 0, 0.15);">
                                                    <tr>
                                                        <td align="center">
                                                            <div style="width: 64px; height: 64px; background-color: rgb(0, 120, 218); border-radius: 16px; margin-bottom: 20px; display: flex; align-items: center; justify-content: center; font-size: 36px;">💬</div>
                                                            <h3 style="font-size: 22px; color: #1f2937; margin: 0 0 12px 0; font-weight: 600;">Social Media</h3>
                                                            <p style="color: #64748b; margin: 0; font-size: 16px; line-height: 1.6;">Gestion des réseaux sociaux et création de contenu</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 12px;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff; border-radius: 16px; padding: 32px; border-left: 3px solid rgba(0, 0, 0, 0.05); border-top: 1px solid rgba(0, 0, 0, 0.05); border-right: 1px solid rgba(0, 0, 0, 0.15); border-bottom: 3px solid rgba(0, 0, 0, 0.15);">
                                                    <tr>
                                                        <td align="center">
                                                            <div style="width: 64px; height: 64px; background-color: rgb(0, 120, 218); border-radius: 16px; margin-bottom: 20px; display: flex; align-items: center; justify-content: center; font-size: 36px;">📧</div>
                                                            <h3 style="font-size: 22px; color: #1f2937; margin: 0 0 12px 0; font-weight: 600;">Email Marketing</h3>
                                                            <p style="color: #64748b; margin: 0; font-size: 16px; line-height: 1.6;">Campagnes d'emailing et automation marketing</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
    },
    commercial: {
        name: "Services Marketing - Commercial",
        html: `<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f8fafc;">
                <tr>
                    <td align="center" style="padding: 40px 16px;">
                        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 800px; margin: 0;">
                            <tr>
                                <td align="center">
                                    <h2 style="font-size: 32px; line-height: 1.2; font-weight: 800; color: #1e293b; margin: 0 0 30px 0; text-align: center;">Solutions B2B</h2>
                                    <div style="display: grid; grid-template-columns: 1fr; gap: 24px;">
                                        <div style="background: #2563eb; border-radius: 16px; padding: 24px; color: white; text-align: center;">
                                            <h3 style="font-size: 24px; margin: 0 0 16px 0;">Lead Generation Pro</h3>
                                            <ul style="list-style: none; padding: 0; margin: 0;">
                                                <li style="margin-bottom: 10px; font-size: 14px;">✓ Qualification avancée</li>
                                                <li style="margin-bottom: 10px; font-size: 14px;">✓ Scoring en temps réel</li>
                                                <li style="margin-bottom: 10px; font-size: 14px;">✓ Intégration CRM</li>
                                            </ul>
                                            <p style="font-size: 28px; font-weight: 700; margin: 20px 0 0 0;">Dès 999€/mois</p>
                                        </div>
                                        <div style="background: #ffffff; border-radius: 16px; padding: 24px; border-left: 3px solid rgba(0, 0, 0, 0.05); border-top: 1px solid rgba(0, 0, 0, 0.05); border-right: 1px solid rgba(0, 0, 0, 0.15); border-bottom: 3px solid rgba(0, 0, 0, 0.15); text-align: center;">
                                            <div style="background: #bfdbfe; width: 60px; height: 60px; border-radius: 16px; margin: 0 auto 20px auto; display: flex; align-items: center; justify-content: center; font-size: 36px;">📈</div>
                                            <h4 style="font-size: 20px; color: #1e293b; margin: 0 0 12px 0;">Résultats Garantis</h4>
                                            <p style="color: #64748b; font-size: 14px; line-height: 1.6; margin: 0;">Augmentez votre ROI avec notre approche data-driven</p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
    },
},

    // Sections de contenu
    section: {
        hero: {
            name: "Section Héro",
            html: `<table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff;">
                <tr>
                    <td align="center" style="padding: 40px 16px;">
                        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 640px; margin: 0 auto;">
                            <tr>
                                <td align="center">
                                    <h1 style="font-size: 44px; line-height: 1.2; font-weight: 900; color: rgb(0, 120, 218); margin: 0; padding: 0 12px;">
                                        Solutions Marketing Innovantes
                                    </h1>
                                    <p style="font-size: 20px; line-height: 1.6; color: #64748b; margin: 20px auto 32px auto; max-width: 540px; padding: 0 12px;">
                                        Optimisez votre présence digitale avec nos stratégies sur mesure
                                    </p>
                                    <table cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;">
                                        <tr>
                                            <td>
                                                <a href="#" style="display: inline-block; padding: 18px 36px; background: rgb(0, 120, 218); color: #ffffff; text-decoration: none; font-weight: 600; border-radius: 10px; font-size: 18px;">Découvrir nos services</a>
                                            </td>
                                        </tr>
                                    </table>
                                    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top: 50px;">
                                        <tr>
                                            <td>
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto;">
                                                    <tr>
                                                        <td align="center" style="padding: 10px;">
                                                            <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; background: rgb(0, 120, 218); border-radius: 16px;">
                                                                <tr>
                                                                    <td align="center" style="padding: 20px;">
                                                                        <h3 style="font-size: 32px; color: #ffffff; margin: 0 0 6px 0; font-weight: 700;">+150%</h3>
                                                                        <p style="font-size: 16px; color: #e0e7ff; margin: 0; font-weight: 500;">Croissance</p>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td align="center" style="padding: 10px;">
                                                            <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; background: rgb(0, 120, 218); border-radius: 16px;">
                                                                <tr>
                                                                    <td align="center" style="padding: 20px;">
                                                                        <h3 style="font-size: 32px; color: #ffffff; margin: 0 0 6px 0; font-weight: 700;">1500+</h3>
                                                                        <p style="font-size: 16px; color: #e0e7ff; margin: 0; font-weight: 500;">Projets</p>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td align="center" style="padding: 10px;">
                                                            <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; background: rgb(0, 120, 218); border-radius: 16px;">
                                                                <tr>
                                                                    <td align="center" style="padding: 20px;">
                                                                        <h3 style="font-size: 32px; color: #ffffff; margin: 0 0 6px 0; font-weight: 700;">95%</h3>
                                                                        <p style="font-size: 16px; color: #e0e7ff; margin: 0; font-weight: 500;">Fidélité</p>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },
        hero_2: {
            name: "Hero 2",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td>
                        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto;">
                            <tr>
                                <td align="center" style="padding: 40px 20px; background: #2563eb;">
                                    <table cellpadding="0" cellspacing="0" border="0" style="width: 100%;">
                                        <tr>
                                            <td align="center" style="padding: 20px;">
                                                <h1 style="color: #ffffff; font-size: 42px; font-weight: 800; margin: 0 0 20px; line-height: 1.2;">Découvrez l'Innovation</h1>
                                                <p style="color: #e0e7ff; font-size: 20px; line-height: 1.6; margin: 0 0 30px; font-weight: 400; max-width: 500px;">Explorez un monde de possibilités infinies avec nos solutions innovantes qui transforment votre vision en réalité.</p>
                                                <table cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;">
                                                    <tr>
                                                        <td align="center" style="background-color: #ffffff; border-radius: 16px; padding: 16px 32px;">
                                                            <a href="#" style="color: #4f46e5; text-decoration: none; font-weight: 700; font-size: 18px; display: inline-block;">Commencer l'Aventure →</a>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },
        hero_3: {
            name: "Hero Bleu",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td>
                        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto;">
                            <tr>
                                <td align="center" style="padding: 40px 20px; background: #2563eb;">
                                    <table cellpadding="0" cellspacing="0" border="0" style="width: 100%;">
                                        <tr>
                                            <td align="center" style="padding: 20px;">
                                                <h1 style="color: #ffffff; font-size: 42px; font-weight: 800; margin: 0 0 20px; line-height: 1.2;">Découvrez l'Innovation</h1>
                                                <p style="color: #e0e7ff; font-size: 20px; line-height: 1.6; margin: 0 0 30px; font-weight: 400; max-width: 500px;">Explorez un monde de possibilités infinies avec nos solutions innovantes qui transforment votre vision en réalité.</p>
                                                <table cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;">
                                                    <tr>
                                                        <td align="center" style="background-color: #ffffff; border-radius: 16px; padding: 16px 32px;">
                                                            <a href="#" style="color: #2563eb; text-decoration: none; font-weight: 700; font-size: 18px; display: inline-block;">Commencer l'Aventure →</a>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },
        hero_4: {
            name: "Hero Vert",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td>
                        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto;">
                            <tr>
                                <td align="center" style="padding: 40px 20px; background: #059669;">
                                    <table cellpadding="0" cellspacing="0" border="0" style="width: 100%;">
                                        <tr>
                                            <td align="center" style="padding: 20px;">
                                                <h1 style="color: #ffffff; font-size: 42px; font-weight: 800; margin: 0 0 20px; line-height: 1.2;">Solutions Écologiques</h1>
                                                <p style="color: #d1fae5; font-size: 20px; line-height: 1.6; margin: 0 0 30px; font-weight: 400; max-width: 500px;">Adoptez des solutions durables pour un avenir plus vert et plus responsable.</p>
                                                <table cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;">
                                                    <tr>
                                                        <td align="center" style="background-color: #ffffff; border-radius: 16px; padding: 16px 32px;">
                                                            <a href="#" style="color: #059669; text-decoration: none; font-weight: 700; font-size: 18px; display: inline-block;">Agir Maintenant →</a>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },
        hero_5: {
            name: "Hero Rouge",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td>
                        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto;">
                            <tr>
                                <td align="center" style="padding: 40px 20px; background: #dc2626;">
                                    <table cellpadding="0" cellspacing="0" border="0" style="width: 100%;">
                                        <tr>
                                            <td align="center" style="padding: 20px;">
                                                <h1 style="color: #ffffff; font-size: 42px; font-weight: 800; margin: 0 0 20px; line-height: 1.2;">Offre Exclusive</h1>
                                                <p style="color: #fee2e2; font-size: 20px; line-height: 1.6; margin: 0 0 30px; font-weight: 400; max-width: 500px;">Ne manquez pas cette opportunité unique. Profitez de nos offres exceptionnelles dès maintenant !</p>
                                                <table cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;">
                                                    <tr>
                                                        <td align="center" style="background-color: #ffffff; border-radius: 16px; padding: 16px 32px;">
                                                            <a href="#" style="color: #dc2626; text-decoration: none; font-weight: 700; font-size: 18px; display: inline-block;">Voir l'Offre →</a>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },
        hero_6: {
            name: "Hero Violet",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td>
                        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto;">
                            <tr>
                                <td align="center" style="padding: 40px 20px; background: #7c3aed;">
                                    <table cellpadding="0" cellspacing="0" border="0" style="width: 100%;">
                                        <tr>
                                            <td align="center" style="padding: 20px;">
                                                <h1 style="color: #ffffff; font-size: 42px; font-weight: 800; margin: 0 0 20px; line-height: 1.2;">Créativité Débridée</h1>
                                                <p style="color: #ede9fe; font-size: 20px; line-height: 1.6; margin: 0 0 30px; font-weight: 400; max-width: 500px;">Libérez votre potentiel créatif avec nos outils innovants et notre expertise unique.</p>
                                                <table cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;">
                                                    <tr>
                                                        <td align="center" style="background-color: #ffffff; border-radius: 16px; padding: 16px 32px;">
                                                            <a href="#" style="color: #7c3aed; text-decoration: none; font-weight: 700; font-size: 18px; display: inline-block;">Explorer →</a>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },
        hero_7: {
            name: "Hero Orange",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td>
                        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto;">
                            <tr>
                                <td align="center" style="padding: 40px 20px; background: #ea580c;">
                                    <table cellpadding="0" cellspacing="0" border="0" style="width: 100%;">
                                        <tr>
                                            <td align="center" style="padding: 20px;">
                                                <h1 style="color: #ffffff; font-size: 42px; font-weight: 800; margin: 0 0 20px; line-height: 1.2;">Énergie Positive</h1>
                                                <p style="color: #ffedd5; font-size: 20px; line-height: 1.6; margin: 0 0 30px; font-weight: 400; max-width: 500px;">Dynamisez votre quotidien avec nos solutions énergisantes et motivantes.</p>
                                                <table cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;">
                                                    <tr>
                                                        <td align="center" style="background-color: #ffffff; border-radius: 16px; padding: 16px 32px;">
                                                            <a href="#" style="color: #ea580c; text-decoration: none; font-weight: 700; font-size: 18px; display: inline-block;">Découvrir →</a>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },
        hero_8: {
            name: "Hero Gris",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td>
                        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto;">
                            <tr>
                                <td align="center" style="padding: 40px 20px; background: #334155;">
                                    <table cellpadding="0" cellspacing="0" border="0" style="width: 100%;">
                                        <tr>
                                            <td align="center" style="padding: 20px;">
                                                <h1 style="color: #ffffff; font-size: 42px; font-weight: 800; margin: 0 0 20px; line-height: 1.2;">Excellence Pro</h1>
                                                <p style="color: #f1f5f9; font-size: 20px; line-height: 1.6; margin: 0 0 30px; font-weight: 400; max-width: 500px;">Des solutions professionnelles adaptées à vos besoins d'entreprise.</p>
                                                <table cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;">
                                                    <tr>
                                                        <td align="center" style="background-color: #ffffff; border-radius: 16px; padding: 16px 32px;">
                                                            <a href="#" style="color: #334155; text-decoration: none; font-weight: 700; font-size: 18px; display: inline-block;">En Savoir Plus →</a>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },
        stats_2_cols: {
            name: "Statistiques 2 colonnes",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td>
                        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto;">
                            <tr>
                                <td align="center" style="padding: 10px;">
                                    <table cellpadding="0" cellspacing="0" border="0" style="width: 100%;">
                                        <tr>
                                            <td align="center" style="padding: 10px; width: 50%;">
                                                <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; background: rgb(0, 120, 218); border-radius: 16px;">
                                                    <tr>
                                                        <td align="center" style="padding: 20px;">
                                                            <h3 style="font-size: 25px; color: #ffffff; margin: 0 0 6px 0; font-weight: 700;">+150%</h3>
                                                            <p style="font-size: 16px; color: #e0e7ff; margin: 0; font-weight: 500;">Croissance</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td align="center" style="padding: 10px; width: 50%;">
                                                <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; background: rgb(0, 120, 218); border-radius: 16px;">
                                                    <tr>
                                                        <td align="center" style="padding: 20px;">
                                                            <h3 style="font-size: 25px; color: #ffffff; margin: 0 0 6px 0; font-weight: 700;">1500+</h3>
                                                            <p style="font-size: 16px; color: #e0e7ff; margin: 0; font-weight: 500;">Projets</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
    },
    stats_horizontal: {
        name: "Statistiques horizontales",
        html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td>
                        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto;">
                            <tr>
                                <td align="center" style="padding: 10px;">
                                    <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; background: rgb(0, 120, 218); border-radius: 16px;">
                                        <tr>
                                            <td align="center" style="padding: 20px; width: 33.33%;">
                                                <h3 style="font-size: 25px; color: #ffffff; margin: 0 0 6px 0; font-weight: 700;">+150%</h3>
                                                <p style="font-size: 14px; color: #e0e7ff; margin: 0; font-weight: 500;">Croissance</p>
                                            </td>
                                            <td align="center" style="padding: 20px; width: 33.33%; border-left: 1px solid rgba(255,255,255,0.2);">
                                                <h3 style="font-size: 25px; color: #ffffff; margin: 0 0 6px 0; font-weight: 700;">1500+</h3>
                                                <p style="font-size: 14px; color: #e0e7ff; margin: 0; font-weight: 500;">Projets</p>
                                            </td>
                                            <td align="center" style="padding: 20px; width: 33.33%; border-left: 1px solid rgba(255,255,255,0.2);">
                                                <h3 style="font-size: 25px; color: #ffffff; margin: 0 0 6px 0; font-weight: 700;">95%</h3>
                                                <p style="font-size: 14px; color: #e0e7ff; margin: 0; font-weight: 500;">Fidélité</p>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
    },
    stats_minimal: {
        name: "Statistiques minimalistes",
        html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td>
                        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto;">
                            <tr>
                                <td align="center" style="padding: 20px;">
                                    <table cellpadding="0" cellspacing="0" border="0" style="width: 100%;">
                                        <tr>
                                            <td align="center" style="padding: 15px; width: 33.33%;">
                                                <h3 style="font-size: 25px; color: rgb(0, 120, 218); margin: 0 0 6px 0; font-weight: 700;">+150%</h3>
                                                <p style="font-size: 16px; color: #64748b; margin: 0; font-weight: 500;">Croissance</p>
                                            </td>
                                            <td align="center" style="padding: 15px; width: 33.33%;">
                                                <h3 style="font-size: 25px; color: rgb(0, 120, 218); margin: 0 0 6px 0; font-weight: 700;">1500+</h3>
                                                <p style="font-size: 16px; color: #64748b; margin: 0; font-weight: 500;">Projets</p>
                                            </td>
                                            <td align="center" style="padding: 15px; width: 33.33%;">
                                                <h3 style="font-size: 25px; color: rgb(0, 120, 218); margin: 0 0 6px 0; font-weight: 700;">95%</h3>
                                                <p style="font-size: 16px; color: #64748b; margin: 0; font-weight: 500;">Fidélité</p>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
    }
    },
    
    // Corps de mail
    body: {
        contenu_simple: {
            name: "Contenu Simple Blanc",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td align="center" style="padding: 30px 10px;">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px;">
                            <tr>
                                <td align="center" style="padding: 20px; background-color: #ffffff; border-radius: 8px;">
                                    <h2 style="color: #111827; font-size: 24px; font-weight: 700; margin: 0 0 15px;">Titre de la section</h2>
                                    <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 20px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                                        <tr>
                                            <td align="center" style="border-radius: 6px; background-color: #111827;">
                                                <a href="#" style="display: inline-block; padding: 16px 32px; color: #ffffff; font-size: 16px; font-weight: 600; text-decoration: none;">En savoir plus</a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },
        contenu_vert: {
            name: "Contenu Simple Vert",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td align="center" style="padding: 30px 10px;">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px;">
                            <tr>
                                <td align="center" style="padding: 20px; background-color: #dcfce7; border-radius: 8px;">
                                    <h2 style="color: #166534; font-size: 24px; font-weight: 700; margin: 0 0 15px;">Titre de la section</h2>
                                    <p style="color: #14532d; font-size: 16px; line-height: 1.6; margin: 0 0 20px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                                        <tr>
                                            <td align="center" style="border-radius: 6px; background-color: #16a34a;">
                                                <a href="#" style="display: inline-block; padding: 16px 32px; color: #ffffff; font-size: 16px; font-weight: 600; text-decoration: none;">En savoir plus</a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },
        deux_colonnes: {
            name: "2 contenus colonnes",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td align="center" style="padding: 30px 10px; text-align: center;">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px;">
                            <tr>
                                <td style="padding: 20px; background-color: #f3e8ff; border-radius: 8px;">
                                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                                        <tr>
                                            <td style="padding: 10px; vertical-align: top;">
                                                <h3 style="color: #6b21a8; font-size: 20px; margin: 0 0 10px;">Contenu 1</h3>
                                                <p style="color: #581c87; font-size: 16px; line-height: 1.6; margin: 0 0 15px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 10px; vertical-align: top;">
                                                <h3 style="color: #6b21a8; font-size: 20px; margin: 0 0 10px;">Contenu 2</h3>
                                                <p style="color: #581c87; font-size: 16px; line-height: 1.6; margin: 0 0 15px;">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },
        titre_principal: {
            name: "Titre Principal",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td align="center" style="padding: 20px;">
                        <h1 style="color: #1f2937; font-size: 36px; font-weight: 800; margin: 0; font-family: Arial, sans-serif;">Titre Principal</h1>
                    </td>
                </tr>
            </table>`
        },

        titre_section: {
            name: "Titre de Section",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td align="center" style="padding: 15px;">
                        <h2 style="color: #374151; font-size: 28px; font-weight: 700; margin: 0; font-family: Arial, sans-serif;">Titre de Section</h2>
                    </td>
                </tr>
            </table>`
        },

        sous_titre: {
            name: "Sous-titre",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td align="center" style="padding: 10px;">
                        <h3 style="color: #6b7280; font-size: 20px; font-weight: 600; margin: 0; font-family: Arial, sans-serif;">Sous-titre Descriptif</h3>
                    </td>
                </tr>
            </table>`
        },

        paragraphe_simple: {
            name: "Paragraphe Simple",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td style="padding: 15px;">
                        <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0; font-family: Arial, sans-serif;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </td>
                </tr>
            </table>`
        },

        paragraphe_double: {
            name: "Paragraphe Double",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td style="padding: 15px;">
                        <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 15px 0; font-family: Arial, sans-serif;">Premier paragraphe. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
                        <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0; font-family: Arial, sans-serif;">Second paragraphe. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                    </td>
                </tr>
            </table>`
        },

        paragraphe_gauche: {
            name: "Paragraphe Aligné à Gauche",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td style="padding: 15px;">
                        <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0; text-align: left; font-family: Arial, sans-serif;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </td>
                </tr>
            </table>`
        },

        paragraphe_centre: {
            name: "Paragraphe Centré",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td style="padding: 15px;">
                        <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0; text-align: center; font-family: Arial, sans-serif;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </td>
                </tr>
            </table>`
        },

        paragraphe_droite: {
            name: "Paragraphe Aligné à Droite",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td style="padding: 15px;">
                        <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0; text-align: right; font-family: Arial, sans-serif;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </td>
                </tr>
            </table>`
        },

        paragraphe_justifie: {
            name: "Paragraphe Justifié",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td style="padding: 15px;">
                        <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0; text-align: justify; font-family: Arial, sans-serif;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </td>
                </tr>
            </table>`
        },

        paragraphe_italique: {
            name: "Paragraphe en Italique",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td style="padding: 15px;">
                        <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0; font-style: italic; font-family: Arial, sans-serif;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </td>
                </tr>
            </table>`
        },

        paragraphe_gras: {
            name: "Paragraphe en Gras",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td style="padding: 15px;">
                        <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0; font-weight: bold; font-family: Arial, sans-serif;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </td>
                </tr>
            </table>`
        },

        bouton_primaire: {
            name: "Bouton Primaire", 
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td align="center" style="padding: 20px;">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                                <td align="center" style="border-radius: 6px; background-color: #2563eb;">
                                    <a href="#" style="display: inline-block; padding: 14px 28px; color: #ffffff; font-size: 16px; font-weight: 600; text-decoration: none; font-family: Arial, sans-serif;">Bouton Primaire</a>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },

        bouton_secondaire: {
            name: "Bouton Secondaire",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td align="center" style="padding: 20px;">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                                <td align="center" style="border: 2px solid #2563eb; border-radius: 6px;">
                                    <a href="#" style="display: inline-block; padding: 12px 26px; color: #2563eb; font-size: 16px; font-weight: 600; text-decoration: none; font-family: Arial, sans-serif;">Bouton Secondaire</a>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },

        double_bouton: {
            name: "Double Bouton",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td align="center" style="padding: 20px;">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                                <td align="center" style="border-radius: 6px; background-color: #2563eb; margin-right: 10px;">
                                    <a href="#" style="display: inline-block; padding: 12px 24px; color: #ffffff; font-size: 14px; font-weight: 600; text-decoration: none; font-family: Arial, sans-serif;">Bouton Primaire</a>
                                </td>
                                <td width="20"></td>
                                <td align="center" style="border: 2px solid #2563eb; border-radius: 6px;">
                                    <a href="#" style="display: inline-block; padding: 10px 22px; color: #2563eb; font-size: 14px; font-weight: 600; text-decoration: none; font-family: Arial, sans-serif;">Bouton Secondaire</a>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },
        double_bouton_colonne: {
            name: "Double Bouton Colonne",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td align="center" style="padding: 10px;">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                                <td align="center" style="border-radius: 6px; background-color: #2563eb;">
                                    <a href="#" style="display: inline-block; padding: 12px 24px; color: #ffffff; font-size: 14px; font-weight: 600; text-decoration: none; font-family: Arial, sans-serif;">Bouton Primaire</a>
                                </td>
                            </tr>
                            <tr>
                                <td height="10"></td>
                            </tr>
                            <tr>
                                <td align="center" style="border: 2px solid #2563eb; border-radius: 6px;">
                                    <a href="#" style="display: inline-block; padding: 10px 22px; color: #2563eb; font-size: 14px; font-weight: 600; text-decoration: none; font-family: Arial, sans-serif;">Bouton Secondaire</a>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },
        

        image_full: {
            name: "Image Responsive",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td align="center" style="padding: 20px;">
                        <img src="https://placehold.co/600x300" alt="Description" style="width: 100%; max-width: 600px; height: auto; display: block;">
                    </td>
                </tr>
            </table>`
        },

        image_double: {
            name: "2 Images Côte à Côte",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td align="center" style="padding: 20px;">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px;">
                            <tr>
                                <td width="50%" style="padding: 0 10px;">
                                    <img src="https://placehold.co/290x200" alt="Description" style="width: 100%; height: auto; display: block; border-radius: 8px;">
                                </td>
                                <td width="50%" style="padding: 0 10px;">
                                    <img src="https://placehold.co/290x200" alt="Description" style="width: 100%; height: auto; display: block; border-radius: 8px;">
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },

        image_double_full: {
            name: "2 Images + 1 Full Width",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td align="center" style="padding: 20px;">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px;">
                            <tr>
                                <td width="50%" style="padding: 0 10px;">
                                    <img src="https://placehold.co/290x200" alt="Description" style="width: 100%; height: auto; display: block; border-radius: 8px;">
                                </td>
                                <td width="50%" style="padding: 0 10px;">
                                    <img src="https://placehold.co/290x200" alt="Description" style="width: 100%; height: auto; display: block; border-radius: 8px;">
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" style="padding: 20px 10px 0;">
                                    <img src="https://placehold.co/600x300" alt="Description" style="width: 100%; height: auto; display: block; border-radius: 8px;">
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },

        image_quad: {
            name: "4 Images en Carré",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td align="center" style="padding: 20px;">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px;">
                            <tr>
                                <td width="50%" style="padding: 0 10px 10px 0;">
                                    <img src="https://placehold.co/290x200" alt="Description" style="width: 100%; height: auto; display: block; border-radius: 8px;">
                                </td>
                                <td width="50%" style="padding: 0 0 10px 10px;">
                                    <img src="https://placehold.co/290x200" alt="Description" style="width: 100%; height: auto; display: block; border-radius: 8px;">
                                </td>
                            </tr>
                            <tr>
                                <td width="50%" style="padding: 10px 10px 0 0;">
                                    <img src="https://placehold.co/290x200" alt="Description" style="width: 100%; height: auto; display: block; border-radius: 8px;">
                                </td>
                                <td width="50%" style="padding: 10px 0 0 10px;">
                                    <img src="https://placehold.co/290x200" alt="Description" style="width: 100%; height: auto; display: block; border-radius: 8px;">
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },

        image_grid: {
            name: "Grille d'Images 3x3",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td align="center" style="padding: 20px;">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px;">
                            <tr>
                                <td width="33.33%" style="padding: 5px;"><img src="https://placehold.co/190x190" alt="Description" style="width: 100%; height: auto; display: block; border-radius: 6px;"></td>
                                <td width="33.33%" style="padding: 5px;"><img src="https://placehold.co/190x190" alt="Description" style="width: 100%; height: auto; display: block; border-radius: 6px;"></td>
                                <td width="33.33%" style="padding: 5px;"><img src="https://placehold.co/190x190" alt="Description" style="width: 100%; height: auto; display: block; border-radius: 6px;"></td>
                            </tr>
                            <tr>
                                <td width="33.33%" style="padding: 5px;"><img src="https://placehold.co/190x190" alt="Description" style="width: 100%; height: auto; display: block; border-radius: 6px;"></td>
                                <td width="33.33%" style="padding: 5px;"><img src="https://placehold.co/190x190" alt="Description" style="width: 100%; height: auto; display: block; border-radius: 6px;"></td>
                                <td width="33.33%" style="padding: 5px;"><img src="https://placehold.co/190x190" alt="Description" style="width: 100%; height: auto; display: block; border-radius: 6px;"></td>
                            </tr>
                            <tr>
                                <td width="33.33%" style="padding: 5px;"><img src="https://placehold.co/190x190" alt="Description" style="width: 100%; height: auto; display: block; border-radius: 6px;"></td>
                                <td width="33.33%" style="padding: 5px;"><img src="https://placehold.co/190x190" alt="Description" style="width: 100%; height: auto; display: block; border-radius: 6px;"></td>
                                <td width="33.33%" style="padding: 5px;"><img src="https://placehold.co/190x190" alt="Description" style="width: 100%; height: auto; display: block; border-radius: 6px;"></td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },

        image_offset: {
            name: "Images Décalées Design",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td align="center" style="padding: 20px;">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px;">
                            <tr>
                                <td width="60%" style="padding-right: 15px;">
                                    <img src="https://placehold.co/360x240" alt="Description" style="width: 100%; height: auto; display: block; border-radius: 12px;">
                                </td>
                                <td width="40%" valign="bottom">
                                    <img src="https://placehold.co/230x160" alt="Description" style="width: 100%; height: auto; display: block; border-radius: 12px;">
                                </td>
                            </tr>
                            <tr>
                                <td width="40%" style="padding-top: 15px; padding-right: 15px;">
                                    <img src="https://placehold.co/230x160" alt="Description" style="width: 100%; height: auto; display: block; border-radius: 12px;">
                                </td>
                                <td width="60%" valign="top" style="padding-top: 15px;">
                                    <img src="https://placehold.co/360x240" alt="Description" style="width: 100%; height: auto; display: block; border-radius: 12px;">
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },

        image_texte_gauche: {
            name: "Image à gauche avec texte",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td align="center" style="padding: 20px;">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px;">
                            <tr>
                                <td width="40%" style="padding-right: 20px;">
                                    <img src="https://placehold.co/240x240" alt="Description" style="width: 100%; height: auto; display: block; border-radius: 8px;">
                                </td>
                                <td width="60%" style="vertical-align: middle;">
                                    <h3 style="color: #1f2937; font-size: 20px; margin: 0 0 10px;">Titre de la section</h3>
                                    <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },

        image_texte_droite: {
            name: "Image à droite avec texte",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td align="center" style="padding: 20px;">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px;">
                            <tr>
                                <td width="60%" style="vertical-align: middle; padding-right: 20px;">
                                    <h3 style="color: #1f2937; font-size: 20px; margin: 0 0 10px;">Titre de la section</h3>
                                    <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </td>
                                <td width="40%">
                                    <img src="https://placehold.co/240x240" alt="Description" style="width: 100%; height: auto; display: block; border-radius: 8px;">
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },

        image_texte_superpose: {
            name: "Image avec texte superposé",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td align="center" style="padding: 20px;">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px;">
                            <tr>
                                <td style="position: relative;">
                                    <img src="https://placehold.co/600x300" alt="Description" style="width: 100%; height: auto; display: block; border-radius: 8px;">
                                    <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent, rgba(0,0,0,0.8)); padding: 20px; border-radius: 0 0 8px 8px;">
                                        <h3 style="color: #ffffff; font-size: 24px; margin: 0 0 10px;">Titre accrocheur</h3>
                                        <p style="color: #e5e7eb; font-size: 16px; line-height: 1.6; margin: 0;">Une description captivante qui attire l'attention du lecteur.</p>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },

        image_texte_alternatif: {
            name: "Images et textes alternés",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td align="center" style="padding: 20px;">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px;">
                            <tr>
                                <td style="padding-bottom: 20px;">
                                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                                        <tr>
                                            <td width="30%" style="padding-right: 15px;">
                                                <img src="https://placehold.co/180x180" alt="Description" style="width: 100%; height: auto; display: block; border-radius: 8px;">
                                            </td>
                                            <td width="70%" style="vertical-align: middle;">
                                                <h4 style="color: #1f2937; font-size: 18px; margin: 0 0 8px;">Premier élément</h4>
                                                <p style="color: #4b5563; font-size: 14px; line-height: 1.5; margin: 0;">Description brève du premier élément.</p>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                                        <tr>
                                            <td width="70%" style="vertical-align: middle; padding-right: 15px;">
                                                <h4 style="color: #1f2937; font-size: 18px; margin: 0 0 8px;">Second élément</h4>
                                                <p style="color: #4b5563; font-size: 14px; line-height: 1.5; margin: 0;">Description brève du second élément.</p>
                                            </td>
                                            <td width="30%">
                                                <img src="https://placehold.co/180x180" alt="Description" style="width: 100%; height: auto; display: block; border-radius: 8px;">
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },

        grille_2x2: {
            name: "Grille 2x2",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px;">
                <tr>
                    <td style="padding: 10px;">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                            <tr>
                                <td width="50%" style="padding: 10px;">
                                    <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px;">
                                        <h4 style="margin: 0 0 10px; color: #1f2937;">Élément 1</h4>
                                        <p style="margin: 0; color: #6b7280;">Description courte</p>
                                    </div>
                                </td>
                                <td width="50%" style="padding: 10px;">
                                    <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px;">
                                        <h4 style="margin: 0 0 10px; color: #1f2937;">Élément 2</h4>
                                        <p style="margin: 0; color: #6b7280;">Description courte</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td width="50%" style="padding: 10px;">
                                    <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px;">
                                        <h4 style="margin: 0 0 10px; color: #1f2937;">Élément 3</h4>
                                        <p style="margin: 0; color: #6b7280;">Description courte</p>
                                    </div>
                                </td>
                                <td width="50%" style="padding: 10px;">
                                    <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px;">
                                        <h4 style="margin: 0 0 10px; color: #1f2937;">Élément 4</h4>
                                        <p style="margin: 0; color: #6b7280;">Description courte</p>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },

        grille_4x2: {
            name: "Grille 4x2",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px;">
                <tr>
                    <td style="padding: 10px;">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                            <tr>
                                <td width="25%" style="padding: 5px;">
                                    <div style="background-color: #f3f4f6; padding: 10px; border-radius: 8px;">
                                        <h5 style="margin: 0 0 5px; color: #1f2937; font-size: 14px;">Item 1</h5>
                                        <p style="margin: 0; color: #6b7280; font-size: 12px;">Info</p>
                                    </div>
                                </td>
                                <td width="25%" style="padding: 5px;">
                                    <div style="background-color: #f3f4f6; padding: 10px; border-radius: 8px;">
                                        <h5 style="margin: 0 0 5px; color: #1f2937; font-size: 14px;">Item 2</h5>
                                        <p style="margin: 0; color: #6b7280; font-size: 12px;">Info</p>
                                    </div>
                                </td>
                                <td width="25%" style="padding: 5px;">
                                    <div style="background-color: #f3f4f6; padding: 10px; border-radius: 8px;">
                                        <h5 style="margin: 0 0 5px; color: #1f2937; font-size: 14px;">Item 3</h5>
                                        <p style="margin: 0; color: #6b7280; font-size: 12px;">Info</p>
                                    </div>
                                </td>
                                <td width="25%" style="padding: 5px;">
                                    <div style="background-color: #f3f4f6; padding: 10px; border-radius: 8px;">
                                        <h5 style="margin: 0 0 5px; color: #1f2937; font-size: 14px;">Item 4</h5>
                                        <p style="margin: 0; color: #6b7280; font-size: 12px;">Info</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td width="25%" style="padding: 5px;">
                                    <div style="background-color: #f3f4f6; padding: 10px; border-radius: 8px;">
                                        <h5 style="margin: 0 0 5px; color: #1f2937; font-size: 14px;">Item 5</h5>
                                        <p style="margin: 0; color: #6b7280; font-size: 12px;">Info</p>
                                    </div>
                                </td>
                                <td width="25%" style="padding: 5px;">
                                    <div style="background-color: #f3f4f6; padding: 10px; border-radius: 8px;">
                                        <h5 style="margin: 0 0 5px; color: #1f2937; font-size: 14px;">Item 6</h5>
                                        <p style="margin: 0; color: #6b7280; font-size: 12px;">Info</p>
                                    </div>
                                </td>
                                <td width="25%" style="padding: 5px;">
                                    <div style="background-color: #f3f4f6; padding: 10px; border-radius: 8px;">
                                        <h5 style="margin: 0 0 5px; color: #1f2937; font-size: 14px;">Item 7</h5>
                                        <p style="margin: 0; color: #6b7280; font-size: 12px;">Info</p>
                                    </div>
                                </td>
                                <td width="25%" style="padding: 5px;">
                                    <div style="background-color: #f3f4f6; padding: 10px; border-radius: 8px;">
                                        <h5 style="margin: 0 0 5px; color: #1f2937; font-size: 14px;">Item 8</h5>
                                        <p style="margin: 0; color: #6b7280; font-size: 12px;">Info</p>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        }
    },
    
    // CTA
    cta: {
        classique: {
            name: "CTA classique",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td align="center" style="padding: 30px 10px;">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px;">
                            <tr>
                                <td align="center" style="padding: 0 20px;">
                                    <h2 style="color: #1f2937; font-size: 24px; font-weight: 700; margin: 0 0 15px; font-family: Arial, sans-serif;">Découvrez notre nouvelle collection</h2>
                                    <p style="color: #6b7280; font-size: 16px; line-height: 1.6; margin: 0 0 25px;">Profitez de -20% sur votre première commande avec le code BIENVENUE20</p>
                                    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                                        <tr>
                                            <td align="center" style="border-radius: 6px; background-color: #2563eb;">
                                                <a href="#" style="display: inline-block; padding: 16px 32px; color: #ffffff; font-size: 16px; font-weight: 600; text-decoration: none; font-family: Arial, sans-serif;">Je découvre l'offre</a>
                                            </td>
                                        </tr>
                                    </table>
                                    <p style="color: #9ca3af; font-size: 12px; margin: 15px 0 0;">* Offre valable jusqu'au 31/12/2025</p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },
        urgent: {
            name: "CTA Urgent",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td align="center" style="padding: 30px 10px;">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px;">
                            <tr>
                                <td align="center" style="padding: 0 20px;">
                                    <h2 style="color: #dc2626; font-size: 24px; font-weight: 700; margin: 0 0 15px; font-family: Arial, sans-serif;">Dernières heures !</h2>
                                    <p style="color: #6b7280; font-size: 16px; line-height: 1.6; margin: 0 0 25px;">Plus que quelques places disponibles. Ne ratez pas cette opportunité unique !</p>
                                    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                                        <tr>
                                            <td align="center" style="border-radius: 6px; background-color: #dc2626;">
                                                <a href="#" style="display: inline-block; padding: 16px 32px; color: #ffffff; font-size: 16px; font-weight: 600; text-decoration: none; font-family: Arial, sans-serif;">Je réserve maintenant</a>
                                            </td>
                                        </tr>
                                    </table>
                                    <p style="color: #9ca3af; font-size: 12px; margin: 15px 0 0;">* Offre valable jusqu'à ce soir minuit</p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },
        minimaliste: {
            name: "CTA Minimaliste",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td align="center" style="padding: 30px 10px;">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px;">
                            <tr>
                                <td align="center" style="padding: 0 20px;">
                                    <p style="color: #1f2937; font-size: 18px; line-height: 1.6; margin: 0 0 25px;">Prêt à commencer ?</p>
                                    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                                        <tr>
                                            <td align="center" style="border: 2px solid #000000; border-radius: 6px;">
                                                <a href="#" style="display: inline-block; padding: 14px 30px; color: #000000; font-size: 16px; font-weight: 500; text-decoration: none; font-family: Arial, sans-serif;">Démarrer</a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },
        premium: {
            name: "CTA Premium",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td align="center" style="padding: 30px 10px; background: linear-gradient(135deg, #1a1a1a 0%, #373737 100%);">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px;">
                            <tr>
                                <td align="center" style="padding: 0 20px;">
                                    <h2 style="color: #ffffff; font-size: 28px; font-weight: 700; margin: 0 0 15px; font-family: Arial, sans-serif;">Offre Exclusive</h2>
                                    <p style="color: #e5e5e5; font-size: 16px; line-height: 1.6; margin: 0 0 25px;">Accédez à nos services premium et bénéficiez d'avantages exclusifs</p>
                                    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                                        <tr>
                                            <td align="center" style="border-radius: 6px; background-color: #f9d423;">
                                                <a href="#" style="display: inline-block; padding: 16px 32px; color: #000000; font-size: 16px; font-weight: 600; text-decoration: none; font-family: Arial, sans-serif;">Devenir Premium</a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },
        eco: {
            name: "CTA Écologique",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td align="center" style="padding: 30px 10px; background-color: #f0fdf4;">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px;">
                            <tr>
                                <td align="center" style="padding: 0 20px;">
                                    <h2 style="color: #166534; font-size: 24px; font-weight: 700; margin: 0 0 15px; font-family: Arial, sans-serif;">Agissons pour la planète</h2>
                                    <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 25px;">Découvrez nos engagements écologiques et rejoignez le mouvement</p>
                                    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                                        <tr>
                                            <td align="center" style="border-radius: 6px; background-color: #16a34a;">
                                                <a href="#" style="display: inline-block; padding: 16px 32px; color: #ffffff; font-size: 16px; font-weight: 600; text-decoration: none; font-family: Arial, sans-serif;">Je m'engage</a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },
        festif: {
            name: "CTA Festif",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td align="center" style="padding: 30px 10px; background-color: #fdf4ff;">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px;">
                            <tr>
                                <td align="center" style="padding: 0 20px;">
                                    <h2 style="color: #a21caf; font-size: 24px; font-weight: 700; margin: 0 0 15px; font-family: Arial, sans-serif;">🎉 C'est la fête !</h2>
                                    <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 25px;">-30% sur tout le site pour célébrer notre anniversaire</p>
                                    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                                        <tr>
                                            <td align="center" style="border-radius: 6px; background-color: #c026d3;">
                                                <a href="#" style="display: inline-block; padding: 16px 32px; color: #ffffff; font-size: 16px; font-weight: 600; text-decoration: none; font-family: Arial, sans-serif;">Je profite des offres</a>
                                            </td>
                                        </tr>
                                    </table>
                                    <p style="color: #9ca3af; font-size: 12px; margin: 15px 0 0;">* Offre limitée à 48h</p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },
        technologique: {
            name: "CTA Tech",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td align="center" style="padding: 30px 10px; background-color: #0f172a;">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px;">
                            <tr>
                                <td align="center" style="padding: 0 20px;">
                                    <h2 style="color: #ffffff; font-size: 24px; font-weight: 700; margin: 0 0 15px; font-family: Arial, sans-serif;">Innovez avec nous</h2>
                                    <p style="color: #94a3b8; font-size: 16px; line-height: 1.6; margin: 0 0 25px;">Découvrez notre nouvelle plateforme d'intelligence artificielle</p>
                                    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                                        <tr>
                                            <td align="center" style="border-radius: 6px; background-color: #3b82f6; box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);">
                                                <a href="#" style="display: inline-block; padding: 16px 32px; color: #ffffff; font-size: 16px; font-weight: 600; text-decoration: none; font-family: Arial, sans-serif;">Explorer la démo</a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },
        saisonnier: {
            name: "CTA Saisonnier",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td align="center" style="padding: 30px 10px; background-color: #fffbeb;">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px;">
                            <tr>
                                <td align="center" style="padding: 0 20px;">
                                    <h2 style="color: #b45309; font-size: 24px; font-weight: 700; margin: 0 0 15px; font-family: Arial, sans-serif;">Collection Automne 🍁</h2>
                                    <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 25px;">Les nouvelles tendances de la saison sont arrivées</p>
                                    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                                        <tr>
                                            <td align="center" style="border-radius: 6px; background-color: #ea580c;">
                                                <a href="#" style="display: inline-block; padding: 16px 32px; color: #ffffff; font-size: 16px; font-weight: 600; text-decoration: none; font-family: Arial, sans-serif;">Voir la collection</a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },
        professionnel: {
            name: "CTA Professionnel",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td align="center" style="padding: 30px 10px; background-color: #f8fafc;">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px;">
                            <tr>
                                <td align="center" style="padding: 0 20px;">
                                    <h2 style="color: #0f172a; font-size: 24px; font-weight: 700; margin: 0 0 15px; font-family: Arial, sans-serif;">Solutions Entreprises</h2>
                                    <p style="color: #475569; font-size: 16px; line-height: 1.6; margin: 0 0 25px;">Optimisez votre productivité avec nos outils professionnels</p>
                                    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                                        <tr>
                                            <td align="center" style="border-radius: 6px; background-color: #1e293b;">
                                                <a href="#" style="display: inline-block; padding: 16px 32px; color: #ffffff; font-size: 16px; font-weight: 600; text-decoration: none; font-family: Arial, sans-serif;">Demander une démo</a>
                                            </td>
                                        </tr>
                                    </table>
                                    <p style="color: #9ca3af; font-size: 12px; margin: 15px 0 0;">* Réponse sous 24h ouvrées</p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        }
        
    },
    // pied de page mail
    footer: {
        basic: {
            name: "Pied de page mail basique",
            html: `
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td align="center" style="padding: 20px 10px;">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px;">
                            <tr>
                                <td align="center">
                                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                                        <tr>
                                            <td align="center" style="padding: 20px 0;">
                                                <a href="#" style="color: #6b7280; text-decoration: none; margin: 0 10px;">À propos</a>
                                                <a href="#" style="color: #6b7280; text-decoration: none; margin: 0 10px;">Contact</a>
                                                <a href="#" style="color: #6b7280; text-decoration: none; margin: 0 10px;">Confidentialité</a>
                                                <a href="#" style="color: #6b7280; text-decoration: none; margin: 0 10px;">Conditions</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center" style="font-size: 13px; line-height: 1.5; color: #6b7280; font-family: Arial, sans-serif;">
                                                123 rue Example, 75000 Paris<br>
                                                01 23 45 67 89 | contact@example.com
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center" style="font-size: 13px; line-height: 1.5; color: #6b7280; font-family: Arial, sans-serif; padding-top: 10px;">
                                                &copy; 2025 Entreprise - Tous droits réservés
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },
        modern: {
            name: "Pied de page moderne",
            html: `
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td align="center" style="padding: 40px 10px; background-color: #f3f4f6;">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px;">
                            <tr>
                                <td align="center">
                                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                                        <tr>
                                            <td align="center" style="padding: 0 0 20px;">
                                                <a href="#" style="display: block; margin: 10px 0; color: #4b5563; text-decoration: none; font-family: Arial, sans-serif; font-weight: bold;">ACCUEIL</a>
                                                <a href="#" style="display: block; margin: 10px 0; color: #4b5563; text-decoration: none; font-family: Arial, sans-serif; font-weight: bold;">SERVICES</a>
                                                <a href="#" style="display: block; margin: 10px 0; color: #4b5563; text-decoration: none; font-family: Arial, sans-serif; font-weight: bold;">BLOG</a>
                                                <a href="#" style="display: block; margin: 10px 0; color: #4b5563; text-decoration: none; font-family: Arial, sans-serif; font-weight: bold;">CONTACT</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center" style="padding-bottom: 20px;">
                                                <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                                                    <tr>
                                                        <td align="center" style="font-size: 14px; line-height: 1.5; color: #6b7280; font-family: Arial, sans-serif;">
                                                            123 rue Example, 75000 Paris<br>
                                                            01 23 45 67 89<br>
                                                            contact@example.com
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center" style="font-size: 14px; line-height: 1.5; color: #6b7280; font-family: Arial, sans-serif;">
                                                &copy; 2025 Votre Entreprise. Tous droits réservés.
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },
        minimal: {
            name: "Pied de page minimaliste",
            html: `
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td align="center" style="padding: 20px 10px; border-top: 1px solid #e5e7eb;">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 400px;">
                            <tr>
                                <td align="center" style="font-size: 12px; line-height: 1.5; color: #9ca3af; font-family: Arial, sans-serif;">
                                    Votre Entreprise &copy; 2025<br>
                                    <a href="#" style="color: #9ca3af; text-decoration: underline;">Se désabonner</a>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },
        corporate: {
            name: "Pied de page corporate",
            html: `
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td align="center" style="padding: 40px 20px; background-color: #1f2937;">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px;">
                            <tr>
                                <td align="center">
                                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                                        <tr>
                                            <td align="center" style="padding-bottom: 30px;">
                                                <h3 style="color: #ffffff; font-family: Arial, sans-serif; margin: 0 0 15px; font-size: 18px;">À propos de nous</h3>
                                                <p style="color: #9ca3af; font-size: 14px; line-height: 1.6; margin: 0; max-width: 500px;">
                                                    Nous sommes une entreprise leader dans notre secteur, dédiée à fournir des solutions innovantes à nos clients.
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center" style="padding-bottom: 30px;">
                                                <h3 style="color: #ffffff; font-family: Arial, sans-serif; margin: 0 0 15px; font-size: 18px;">Contact</h3>
                                                <p style="color: #9ca3af; font-size: 14px; line-height: 1.6; margin: 0;">
                                                    Email: contact@entreprise.com<br>
                                                    Tél: +33 1 23 45 67 89<br>
                                                    75000 Paris, France
                                                </p>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style="padding-top: 30px; border-top: 1px solid #374151;">
                                    <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                                        &copy; 2025 Entreprise - Tous droits réservés
                                    </p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        },
        legal: {
            name: "Pied de page légal détaillé",
            html: `
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                    <td align="center" style="padding: 20px 10px; background-color: #f9fafb;">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px;">
                            <tr>
                                <td style="padding: 0 20px;">
                                    <p style="color: #6b7280; font-size: 11px; line-height: 1.4; margin: 0 0 15px; text-align: justify;">
                                        * Les prix indiqués sont les prix de vente conseillés TTC. Les offres promotionnelles sont valables dans la limite des stocks disponibles. Photos non contractuelles.
                                    </p>
                                    <p style="color: #6b7280; font-size: 11px; line-height: 1.4; margin: 0 0 15px; text-align: justify;">
                                        ** Livraison gratuite : voir conditions sur notre site. La livraison standard est offerte pour toute commande supérieure à 50€, hors produits volumineux et marketplace.
                                    </p>
                                    <p style="color: #6b7280; font-size: 11px; line-height: 1.4; margin: 0 0 15px; text-align: justify;">
                                        Les données personnelles communiquées sont nécessaires aux fins de vous contacter. Elles sont destinées à Entreprise SAS et ses sous-traitants. Vous disposez de droits d'accès, de rectification, d'effacement, de portabilité, de limitation, d'opposition, de retrait de votre consentement à tout moment et du droit d'introduire une réclamation auprès d'une autorité de contrôle, ainsi que d'organiser le sort de vos données post-mortem.
                                    </p>
                                    <p style="color: #6b7280; font-size: 11px; line-height: 1.4; margin: 0 0 15px; text-align: justify;">
                                        Entreprise SAS au capital de 100 000€ - RCS Paris B 123 456 789 - 123 rue du Commerce, 75000 Paris
                                    </p>
                                    <p style="color: #6b7280; font-size: 11px; line-height: 1.4; margin: 0; text-align: center;">
                                        Pour vous assurer de recevoir nos emails, ajoutez contact@entreprise.com à vos contacts.<br>
                                        <a href="#" style="color: #4b5563; text-decoration: underline;">Voir la version en ligne</a> | 
                                        <a href="#" style="color: #4b5563; text-decoration: underline;">Gérer mes préférences</a> | 
                                        <a href="#" style="color: #4b5563; text-decoration: underline;">Se désabonner</a>
                                    </p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        }
    },

    // Gestion
    management: {
        link: {
            name: "Lien de désabonnement",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width: 100%; margin-top: 30px; border-top: 1px solid #e5e7eb;">
                <tr>
                    <td align="center" style="padding: 20px;">
                        <p style="font-size: 12px; color: #6b7280; margin: 0;">
                            Cet email a été envoyé à <span style="color: #374151;">[[EMAIL_TO]]</span><br>
                            <a href="[[UNSUB_LINK_FR]]" style="color: #6b7280; text-decoration: underline;" target="_blank">Cliquez ici pour vous désabonner</a>
                        </p>
                    </td>
                </tr>
            </table>`
        },
        linkMinimal: {
            name: "Lien de désabonnement minimaliste",
            html: `<p style="font-size: 11px; color: #6b7280; text-align: center; margin-top: 20px;">
                <a href="[[UNSUB_LINK_FR]]" style="color: #6b7280;">Se désabonner</a>
            </p>`
        },
        linkModern: {
            name: "Lien de désabonnement moderne",
            html: `<div style="text-align: center; padding: 20px; background: #f9fafb; margin-top: 30px;">
                <p style="font-size: 13px; color: #4b5563; margin: 0;">
                    Pour gérer vos préférences d'emails ou vous désabonner,
                    <a href="[[UNSUB_LINK_FR]]" style="color: #3b82f6; text-decoration: none; font-weight: 500;">cliquez ici</a>
                </p>
            </div>`
        },
        linkDetailed: {
            name: "Lien de désabonnement détaillé",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width: 100%; margin-top: 30px; background: #f8fafc;">
                <tr>
                    <td style="padding: 24px; text-align: center;">
                        <p style="font-size: 13px; color: #64748b; margin: 0 0 12px 0;">
                            Vous recevez cet email car vous êtes inscrit à notre newsletter.
                        </p>
                        <p style="font-size: 13px; color: #64748b; margin: 0;">
                            Email: <span style="color: #334155;">[[EMAIL_TO]]</span> |
                            <a href="[[UNSUB_LINK_FR]]" style="color: #3b82f6; text-decoration: none;">Gérer mes préférences</a> |
                            <a href="[[UNSUB_LINK_FR]]" style="color: #3b82f6; text-decoration: none;">Me désabonner</a>
                        </p>
                    </td>
                </tr>
            </table>`
        },
        linkStyled: {
            name: "Lien de désabonnement stylisé",
            html: `<div style="text-align: center; padding: 24px; background: linear-gradient(to right, #f9fafb, #f3f4f6); margin-top: 30px; border-radius: 8px;">
                <p style="font-size: 12px; color: #6b7280; margin: 0 0 12px 0;">
                    Pour ne plus recevoir nos emails
                </p>
                <a href="[[UNSUB_LINK_FR]]" style="display: inline-block; padding: 8px 16px; background: #ffffff; color: #4b5563; text-decoration: none; border-radius: 4px; font-size: 12px; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">Se désabonner</a>
            </div>`
        },
        linkCompact: {
            name: "Lien de désabonnement compact",
            html: `<p style="font-size: 11px; color: #9ca3af; text-align: center; margin-top: 20px; padding: 10px;">
                [[EMAIL_TO]] • <a href="[[UNSUB_LINK_FR]]" style="color: #6b7280;">Désabonnement</a>
            </p>`
        },
        linkFooter: {
            name: "Lien de désabonnement pied de page",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width: 100%; margin-top: 30px; background: #1f2937;">
                <tr>
                    <td style="padding: 16px; text-align: center;">
                        <p style="font-size: 12px; color: #9ca3af; margin: 0;">
                            <a href="[[UNSUB_LINK_FR]]" style="color: #d1d5db; text-decoration: none;">Désinscription</a> • 
                            <a href="#" style="color: #d1d5db; text-decoration: none;">Préférences</a> • 
                            <span style="color: #6b7280;">[[EMAIL_TO]]</span>
                        </p>
                    </td>
                </tr>
            </table>`
        },
        linkBox: {
            name: "Lien de désabonnement encadré",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width: 100%; max-width: 400px; margin: 30px auto 0;">
                <tr>
                    <td style="border: 1px solid #e5e7eb; border-radius: 6px; padding: 16px; text-align: center;">
                        <p style="font-size: 12px; color: #6b7280; margin: 0;">
                            Si vous ne souhaitez plus recevoir nos emails,
                            <a href="[[UNSUB_LINK_FR]]" style="color: #4b5563; font-weight: 500;">cliquez ici</a>
                        </p>
                    </td>
                </tr>
            </table>`
        },
        linkSimple: {
            name: "Lien de désabonnement simple",
            html: `<div style="text-align: center; padding: 20px 0; border-top: 1px solid #e5e7eb; margin-top: 30px;">
                <a href="[[UNSUB_LINK_FR]]" style="font-size: 12px; color: #6b7280; text-decoration: none;">Ne plus recevoir d'emails</a>
            </div>`
        },
        linkComplete: {
            name: "Lien de désabonnement complet",
            html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width: 100%; margin-top: 30px;">
                <tr>
                    <td style="padding: 24px; background: #f9fafb; border-radius: 8px;">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width: 100%;">
                            <tr>
                                <td style="text-align: center;">
                                    <p style="font-size: 13px; color: #4b5563; margin: 0 0 12px 0;">
                                        Vous recevez cet email car vous êtes inscrit à notre newsletter.
                                    </p>
                                    <p style="font-size: 12px; color: #6b7280; margin: 0 0 16px 0;">
                                        Email inscrit : <span style="color: #374151;">[[EMAIL_TO]]</span>
                                    </p>
                                    <div>
                                        <a href="[[UNSUB_LINK_FR]]" style="display: inline-block; padding: 8px 16px; background: #4b5563; color: #ffffff; text-decoration: none; border-radius: 4px; font-size: 12px;">Se désabonner</a>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>`
        }
    }
};
                                    

function copyComponentWithConfig(componentHtml) {
    const fullHtml = `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ${themeConfig}
</head>
<body class="min-h-screen bg-white dark:bg-gray-900">
    <div id="preview-container">
        ${componentHtml}
    </div>
    
    <!-- Bouton de basculement du thème -->
    <button 
        onclick="toggleTheme()" 
        class="fixed bottom-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path class="dark:hidden" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
            <path class="hidden dark:inline-flex" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
        </svg>
    </button>
</body>
</html>`;
    return fullHtml;
}

function getComponent(category, name) {
    const component = htmlAssets[category][name];
    if (!component) {
        throw new Error(`Composant non trouvé: ${category}.${name}`);
    }
    return copyComponentWithConfig(component.html);
}

function previewComponent(category, name) {
    const component = htmlAssets[category][name];
    if (!component) {
        throw new Error(`Composant non trouvé: ${category}.${name}`);
    }
    const script = document.createElement('script');
    script.textContent = `
        document.addEventListener('DOMContentLoaded', () => {
            insertComponent(\`${component.html}\`);
        });
    `;
    document.head.appendChild(script);
}

export default {
    assets: htmlAssets,
    getComponent,
    copyComponentWithConfig,
    previewComponent
}; 