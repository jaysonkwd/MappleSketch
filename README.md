
# 🖌️ MappleSketch

MappleSketch est une extension Chrome qui permet de dessiner directement sur n'importe quelle page web grâce à la bibliothèque **p5.js**.
Vous pouvez choisir la couleur et l’épaisseur du pinceau, et dessiner librement pour annoter, illustrer ou simplement gribouiller.

---

## 🚀 Fonctionnalités

* 🎨 **Choix de la couleur** du pinceau via un sélecteur.
* ✏️ **Réglage de l’épaisseur** du trait.
* 🖥️ Fonctionne sur **toutes les pages web** ouvertes dans votre navigateur.
* 📦 Interface simple et intuitive avec onglets :

  * **Couleur**
  * **Taille du pinceau**
  * **À propos**
* Sauvegarde des réglages (couleur et taille) dans `localStorage`.

---

## 📂 Structure du projet

```
.
├── content.js       # Script principal gérant l'interface et le dessin
├── manifest.json    # Configuration de l’extension Chrome
├── style.css        # Styles de l'interface popup
├── p5.js / p5.min.js# Bibliothèque p5.js pour le dessin
├── index.html       # Popup de l’extension
├── writing.png      # Icône de l’extension
```

---

## ⚙️ Installation

1. **Télécharger** le projet ou le cloner :

   ```bash
   git clone https://github.com/<ton-compte>/<ton-repo>.git
   ```
2. Ouvrir **Google Chrome** et aller dans :

   ```
   Menu > Plus d’outils > Extensions
   ```
3. Activer le **Mode développeur** (en haut à droite).
4. Cliquer sur **Charger l’extension non empaquetée**.
5. Sélectionner le dossier du projet.
6. L’icône **✏️ MappleSketch** apparaît dans la barre d’extensions.

---

## 🛠️ Utilisation

1. Cliquez sur l’icône **MappleSketch** dans la barre d’extensions.
2. Choisissez la **couleur** et la **taille** du pinceau.
3. Dessinez directement sur la page web ouverte.
4. Changez les paramètres à tout moment via le popup.

---

## 📜 manifest.json

```json
{
  "manifest_version": 3,
  "version": "1.0",
  "name": "MappleSketch",
  "action": {
    "default_popup": "index.html",
    "default_icon": "writing.png"
  },
  "content_scripts": [{
    "js": ["p5.js", "p5.min.js", "content.js"],
    "matches": ["<all_urls>"]
  }]
}
```

---

## 📄 Licence

Ce projet est sous licence MIT.
Vous êtes libre de l’utiliser, le modifier et le redistribuer.

---

Si tu veux, je peux aussi te préparer **une version avec captures d’écran et GIFs** pour rendre le README plus visuel et attractif.
