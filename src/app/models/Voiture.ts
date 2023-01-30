export interface Voiture{
    _id: string,
    idProprietaire: string,
    matricule: string,
    dateDepot: Date,
    dateRecuperation:Date,
    description: {
        marque: string,
        couleur: string
    }
}