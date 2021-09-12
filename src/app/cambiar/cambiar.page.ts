import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cambiar',
  templateUrl: './cambiar.page.html',
  styleUrls: ['./cambiar.page.scss'],
})
export class CambiarPage implements OnInit {
dato:any;
  constructor(public toastController: ToastController, private router: Router) { }

  ngOnInit() {
  }
  exitoso(){
    //llamar al toast
    this.presentToast('Cambio realizado exitosamente ');
  }
  cambio (){
    //declaro e instancio un elemnto de tipo navigationExtras
    let navigationExtras: NavigationExtras ={
      state:{dato: this.dato} //al state le asigno el parametro que deseo enviar
    }
    //usar api enrutador para llamar a la siguiente pagina // le digo al enrutador que vaya una pagina pero le asigno un parametro
    this.router.navigate(['/home'], navigationExtras);
  }
  async presentToast(msg:string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
