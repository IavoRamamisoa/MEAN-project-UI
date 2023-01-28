export interface Voiture{
    idProprietaire: string,
    matricule: string,
    dateDepot: Date,
    dateRecuperation:Date,
    description: {
        marque: string,
        couleur: string
    }
}