import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListAnnoncesService {

  constructor(private http: HttpClient) { }

  getAllAnn() {
    return this.http.get('https://ionic-annonces.firebaseio.com/Annonces.json');
  }

  addAnn(newAnn) {
    return this.http.post(
      'https://ionic-annonces.firebaseio.com/Annonces.json',
      newAnn
    );
  }

  updateAnn(uAnn) {
    return this.http.patch(
      'https://ionic-annonces.firebaseio.com/Annonces/' + uAnn.id + '.json',
      { checked: uAnn.checked }
    );
  }

  deleteAnn(idAnn) {
    return this.http.delete(
      'https://ionic-annonces.firebaseio.com/Annonces/' + idAnn + '.json'
    );
  }
}