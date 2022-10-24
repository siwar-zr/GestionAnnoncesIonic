import { Component, OnInit } from '@angular/core';
import { ListAnnoncesService } from 'src/app/services/list-annonces.service';

@Component({
  selector: 'app-liste-vendre',
  templateUrl: './liste-vendre.page.html',
  styleUrls: ['./liste-vendre.page.scss'],
})
export class ListeVendrePage implements OnInit {
  allAnn = [];
  showAddButton = true;
  constructor(private listAnnonces: ListAnnoncesService) { }
  ngOnInit(): void {
    this.listAnnonces.getAllAnn().subscribe({
      next: (response) => {
        console.log(response);
        this.allAnn = [];
        for (const key in response) {
          this.allAnn.push({ id: key, ...response[key] });
        }
        console.log(this.allAnn);
      },
    });
  }


  onDelete(idAnn) {
    this.listAnnonces.deleteAnn(idAnn).subscribe({
      next: (response) => {
        alert('Annonce Deleted');
        this.ngOnInit();
      },
    });
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