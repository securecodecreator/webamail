const elementList = {
    categories: [
        {
            id: "header",
            name: "En-têtes",
            components: [
                { id: "simple", name: "En-tête Simple", path: "header.simple" },
                { id: "information", name: "En-tête Informatif", path: "header.information" },
                { id: "modern", name: "En-tête Moderne", path: "header.modern" },
                { id: "corporate", name: "En-tête Corporate", path: "header.corporate" },
                { id: "minimal", name: "En-tête Minimaliste", path: "header.minimal" },
                { id: "creative", name: "En-tête Créatif", path: "header.creative" },
                { id: "promotional", name: "En-tête Promotionnel", path: "header.promotional" },
                { id: "seasonal", name: "En-tête Saisonnier", path: "header.seasonal" },
                { id: "newsletter", name: "En-tête Newsletter", path: "header.newsletter" },
                { id: "event", name: "En-tête Événement", path: "header.event" }
            ]
        },
        {
            id: "about",
            name: "À propos",
            components: [
                { id: "simple", name: "À propos Simple", path: "about.simple" },
                { id: "modernGradient", name: "À propos Gradient Moderne", path: "about.modernGradient" },
                { id: "minimalDark", name: "À propos Minimal Sombre", path: "about.minimalDark" },
                { id: "vibrant", name: "À propos Vibrant", path: "about.vibrant" },
                { id: "elegant", name: "À propos Élégant", path: "about.elegant" },
                { id: "withImage", name: "À propos avec Image", path: "about.withImage" },
                { id: "team", name: "Équipe", path: "about.team" },
                { id: "stats", name: "Statistiques", path: "about.stats" },
                { id: "mission", name: "Notre Mission", path: "about.mission" },
                { id: "values", name: "Nos Valeurs", path: "about.values" },
                { id: "timeline", name: "Notre Histoire Timeline", path: "about.timeline" },
                { id: "marketing1", name: "Section À Propos - Marketing Digital", path: "about.about_marketing_1" },
                { id: "marketing2", name: "Section À Propos - Services Marketing", path: "about.about_marketing_2" },
                { id: "commercial", name: "Services Marketing - Commercial", path: "about.commercial" }
            ]
        },
        {
            id: "section",
            name: "Sections",
            components: [
                { id: "hero", name: "Section Héro", path: "section.hero" },
                { id: "hero2", name: "Hero 2", path: "section.hero_2" },
                { id: "hero3", name: "Hero Bleu", path: "section.hero_3" },
                { id: "hero4", name: "Hero Vert", path: "section.hero_4" },
                { id: "hero5", name: "Hero Rouge", path: "section.hero_5" },
                { id: "hero6", name: "Hero Violet", path: "section.hero_6" },
                { id: "hero7", name: "Hero Orange", path: "section.hero_7" },
                { id: "hero8", name: "Hero Gris", path: "section.hero_8" },
                { id: "stats2cols", name: "Statistiques 2 colonnes", path: "section.stats_2_cols" },
                { id: "statsHorizontal", name: "Statistiques horizontales", path: "section.stats_horizontal" },
                { id: "statsMinimal", name: "Statistiques minimalistes", path: "section.stats_minimal" }
            ]
        },
        {
            id: "cta",
            name: "Appels à l'action",
            components: [
                { id: "classique", name: "CTA classique", path: "cta.classique" },
                { id: "urgent", name: "CTA Urgent", path: "cta.urgent" },
                { id: "minimaliste", name: "CTA Minimaliste", path: "cta.minimaliste" },
                { id: "premium", name: "CTA Premium", path: "cta.premium" },
                { id: "eco", name: "CTA Écologique", path: "cta.eco" },
                { id: "festif", name: "CTA Festif", path: "cta.festif" },
                { id: "technologique", name: "CTA Tech", path: "cta.technologique" },
                { id: "saisonnier", name: "CTA Saisonnier", path: "cta.saisonnier" },
                { id: "professionnel", name: "CTA Professionnel", path: "cta.professionnel" }
            ]
        },
        {
            id: "footer",
            name: "Pieds de page",
            components: [
                { id: "basic", name: "Pied de page mail basique", path: "footer.basic" },
                { id: "modern", name: "Pied de page moderne", path: "footer.modern" },
                { id: "minimal", name: "Pied de page minimaliste", path: "footer.minimal" },
                { id: "corporate", name: "Pied de page corporate", path: "footer.corporate" },
                { id: "legal", name: "Pied de page légal détaillé", path: "footer.legal" }
            ]
        },
        {
            id: "management",
            name: "Gestion des abonnements",
            components: [
                { id: "link", name: "Lien de désabonnement", path: "management.link" },
                { id: "linkMinimal", name: "Lien de désabonnement minimaliste", path: "management.linkMinimal" },
                { id: "linkModern", name: "Lien de désabonnement moderne", path: "management.linkModern" },
                { id: "linkDetailed", name: "Lien de désabonnement détaillé", path: "management.linkDetailed" },
                { id: "linkStyled", name: "Lien de désabonnement stylisé", path: "management.linkStyled" },
                { id: "linkCompact", name: "Lien de désabonnement compact", path: "management.linkCompact" },
                { id: "linkFooter", name: "Lien de désabonnement pied de page", path: "management.linkFooter" },
                { id: "linkBox", name: "Lien de désabonnement encadré", path: "management.linkBox" },
                { id: "linkSimple", name: "Lien de désabonnement simple", path: "management.linkSimple" },
                { id: "linkComplete", name: "Lien de désabonnement complet", path: "management.linkComplete" }
            ]
        }
    ],

    // Fonction utilitaire pour obtenir un composant aléatoire d'une catégorie spécifique
    getRandomComponent: function(categoryId) {
        const category = this.categories.find(cat => cat.id === categoryId);
        if (!category) return null;
        const randomIndex = Math.floor(Math.random() * category.components.length);
        return category.components[randomIndex];
    },

    // Fonction utilitaire pour obtenir un composant par son chemin
    getComponentByPath: function(path) {
        for (const category of this.categories) {
            const component = category.components.find(comp => comp.path === path);
            if (component) return component;
        }
        return null;
    },

    // Fonction utilitaire pour obtenir tous les composants d'une catégorie
    getCategoryComponents: function(categoryId) {
        const category = this.categories.find(cat => cat.id === categoryId);
        return category ? category.components : [];
    }
};

export default elementList;
