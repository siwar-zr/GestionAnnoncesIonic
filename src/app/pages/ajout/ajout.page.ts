import { Component, OnInit } from '@angular/core';
import { ListAnnoncesService } from 'src/app/services/list-annonces.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.page.html',
  styleUrls: ['./ajout.page.scss'],
})
export class AjoutPage implements OnInit {

  constructor(private listAnnonces: ListAnnoncesService) { }

  ngOnInit() {
  }


  onAddAnn(Ann) {
    this.listAnnonces
      .addAnn({
        id: Ann.id,
        name: Ann.name,
        date: new Date().toString(),
        prix: Ann.prix,
        cat: Ann.cat,
      })
      .subscribe({
        next: (response) => {
          alert('Annonce Added');
          this.ngOnInit();
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  

}
