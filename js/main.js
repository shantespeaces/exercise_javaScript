import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'


//QUESTION 1 : Lors du clique sur le carré rose, afficher un chiffre au hasard entre 0 et 100 dans la console.

const carre_rose = ref()

function clickRose(e) {
    carre_rose.value = Math.floor(Math.random() * 100) + 1 

    console.log(carre_rose.value)
}

//QUESTION 2 : Lors du clique sur le carré gris, insérer votre prénom et nom au contenu texte dans ce bloc.Le texte s'affichera automatiquement en vert s'il est placé au bon endroit.

const carre_gris = ref("Prénom et Nom ici")

function clickGris(e) {
    carre_gris.value = "Shante Nicolaides"

}

//QUESTION 3 : À chaque fois que la souris entre à l'intérieur de la balise avec la classe q3 , la couleur d'arrière-plan de ce div doit être changée pour une couleur aléatoire.

const background_color = ref(null)

function randColor(min, max) {
    let decalage = max - min + 1

    let aleatoire = Math.random()
    let entier_aleatoire = Math.floor(aleatoire * decalage)

    return min + entier_aleatoire
}

function mouseEnter() {

    let r = randColor(0, 255)
    let g = randColor(0, 255)
    let b = randColor(0, 255)
    let rgb = "rgb(" + r + ", " + g + ", " + b + ")"

    background_color.value = rgb
}

function mouseLeave() {
    background_color.value = null
}

//QUESTION 4 :  Cacher ou retirer tous les blocs jaunes. 

const carre_jaune_visible = ref(false)

//QUESTION 5 : Le texte doit changer de police aléatoirement entre Arial, Times et Verdana à chaque 3 secondes.

const fonts = ['arial', 'times', 'verdana']
const current_font = ref(fonts[0])

function aleatoire(min, max) {
    let difference = max - min
    let aleatoire = Math.random() * difference
    return min + aleatoire
}

function aleatoireEntier(min, max) {
    return Math.floor(aleatoire(min, max + 1))
}

setInterval(function () {
    let index_hasard = aleatoireEntier(0, fonts.length - 1)
    current_font.value = fonts[index_hasard]
}, 3 * 1000)

//QUESTION 6 : La balise img doit changer de source aléatoirement entre http://placekitten.com/300/100, http://placekitten.com/301/100 et http://placekitten.com/302/100 lorsqu'on clique sur le bouton.

const source_images = ref(["http://placekitten.com/300/100", "http://placekitten.com/301/100", "http://placekitten.com/302/100"])
const random_image = ref(source_images[0])

function clickChat(e) {

    let index_hasard = Math.floor(Math.random() * source_images.value.length)
    random_image.value = source_images.value[index_hasard]
}

//QUESTION 7 : Le prénom dans la phrase doit se mettre à jour automatiquement selon ce qui est écris dans le input.

const nouveau_nom = ref("Anastasia")

function changeTexte() {
    nouveau_nom.value = input.value
}

//INITIALISATION DE VUE

const root = {

    //methode du root
    setup() {

        //retourne un objet
        return {

            //propriétés
            carre_rose,
            carre_gris,
            background_color,
            carre_jaune_visible,
            current_font,
            source_images,
            random_image,
            nouveau_nom,

            //methodes
            clickRose,
            clickGris,
            randColor,
            mouseEnter,
            mouseLeave,
            setInterval,
            aleatoireEntier,
            aleatoire,
            clickChat,
            changeTexte,
        }
    }
}

createApp(root).mount("#app")