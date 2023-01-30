import { ideahub } from "googleapis/build/src/apis/ideahub"

export interface Reparation{
    _id: string,
    idVoiture: string,
    // voiture: string,
    dateReception: Date,
    aFaire: {
        description: string,
        avancement: number,
        dateDebut: Date,
        dateFin: Date,
        dureeExacte: number,
        _id: string,
    } [],
    bonSortie: string,
    dureeTotal: number,
}